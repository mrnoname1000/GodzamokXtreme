if (GodzamokXtreme === undefined) var GodzamokXtreme = {};
if (typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');

// Load lang.js from web only if localization is not already registered (e.g. loaded offline).
// The check is deferred via setTimeout to allow any synchronously-loaded offline lang.js to run first.
GodzamokXtreme.loadLangIfNeeded = function () {
	setTimeout(function () {
		if (loc("gx_toggle_on") == "gx_toggle_on") {
			Game.LoadMod('https://r33yl.github.io/GodzamokXtreme/lang.js');
		}
	}, 0);
};
GodzamokXtreme.loadLangIfNeeded();

GodzamokXtreme.name = 'Godzamok Ultimate';
GodzamokXtreme.ID = 'godzamok_ultimate';
GodzamokXtreme.version = '2.15';
GodzamokXtreme.GameVersion = '2.053';

// Cookie Clicker 2.058 buys and sells one building at a time. Keep the
// per-unit rounding used by Game.Object.getPrice() and Game.Object.sell().
function godzamakUnitPrice(building, amount) {
	const raw = building.basePrice * Math.pow(Game.priceIncrease, Math.max(0, amount - building.free));
	return Math.ceil(Game.modifyBuildingPrice(building, raw));
}

function godzamakTransactionCosts(building, count) {
	const owned = building.amount;
	count = Math.max(0, Math.min(owned, Math.floor(count)));
	let saleProceeds = 0;
	let buybackCost = 0;
	const sellMultiplier = building.getSellMultiplier();
	for (let i = 0; i < count; i++) {
		// sell() reads getPrice() BEFORE decrementing amount;
		// buy() reads it AFTER selling, from the lowest owned amount upward.
		saleProceeds += Math.floor(godzamakUnitPrice(building, owned - i) * sellMultiplier);
		buybackCost += godzamakUnitPrice(building, owned - count + i);
	}
	return { saleProceeds, buybackCost, loss: Math.max(0, buybackCost - saleProceeds) };
}

// Prefix costs allow safe-sell selection without changing building amounts or cookies.
function godzamakLossesByCount(building) {
	const losses = [0];
	const owned = building.amount;
	const sellMultiplier = building.getSellMultiplier();
	for (let count = 1; count <= owned; count++) {
		const sale = Math.floor(godzamakUnitPrice(building, owned - count + 1) * sellMultiplier);
		const buy = godzamakUnitPrice(building, owned - count);
		losses.push(Math.max(0, losses[count - 1] + buy - sale));
	}
	return losses;
}

GodzamokXtreme.launch = function () {

	//***********************************
	//    CONSTANTS
	//***********************************

	GodzamokXtreme.GODZAMOK_GOD_ID = 2;

	GodzamokXtreme.LOOP_DELAY_MS = 1;
	GodzamokXtreme.RETRY_DELAY_MS = 1000;
	GodzamokXtreme.MONITOR_INTERVAL_MS = 2000;
	GodzamokXtreme.RETRY_MAX_ATTEMPTS = 10;

	GodzamokXtreme.SAFE_SELL_BUDGET_RATIO = 0.02; // Budget for safe sell calculation as a fraction of raw CPS
	GodzamokXtreme.WARN_COST_CPS_RATIO = 0.10;    // Warn if buyback cost > this fraction of raw CPS

	//***********************************
	//    CONFIGURATION DEFAULTS
	//***********************************

	GodzamokXtreme.defaultConfig = function () {
		const defaultBuildings = [3, 4, 5, 9, 12];	// Default buildings enabled for selling
		return {
			// === UI & Controls ===
			showSellBuyInfo: false,       // Show summary info (how many buildings were sold/bought) after each script run
			showMainButton: true,         // Show the main Godzamok button near the big cookie
			showTempleButton: true,       // Show an additional button in the Temple minigame
			showLoopButton: true,         // Show "Loop" button to repeatedly sell/buy buildings in a loop
			showStoreMarkers: true,       // Show Godzamok icon on selected buildings in store
			loopModeEnabled: false,       // Whether Loop Mode is currently active
			hotkeyG: true,                // Enable "G" hotkey to trigger script
			inputDelayEnabled: true,      // Add delay between input events
			inputDelayValue: 100,         // Delay duration in milliseconds
			// === Performance ===
			advancedOptimization: false,  // Suppress buyFunction/sellFunction during bulk operations (may affect game mechanics)
			// === Temple ===
			autoSwitchGods: true,         // Automatically switch to Godzamok if not selected
			selectedSlot: 1,              // Temple slot where Godzamok will be placed
			// === Buyback ===
			buybackEnabled: true,         // Enable automatic buyback of sold buildings
			buybackType: GodzamokXtreme.BuybackType.FULL_AMOUNT, // Buyback strategy (WITH_PROFIT=0, FULL_AMOUNT=1, PERCENTAGE=2)
			buybackPercent: 90,           // Percentage for type 2 buyback
			// === Building Display ===
			showOnlyEnabled: false,       // Show only enabled buildings in the UI
			hideEmptyBuildings: true,     // Hide buildings with 0 owned units
			sortByCps: true,              // Sort building list by CPS 
			// === Sell Mode ===
			sellMode: GodzamokXtreme.SellMode.PERCENT, // Sell mode: PERCENT=0, UNITS=1
			// === Building Settings ===
			buildings: Game.ObjectsById.map((building) => ({
				enabled: defaultBuildings.includes(building.id),
				sellPercent: 100,     // % to sell
				sellUnits: 0,         // units to sell if mode = units
			})),
		};
	};

	//***********************************
	//    ENUM OPTIONS
	//***********************************

	GodzamokXtreme.BuybackType = {
		WITH_PROFIT: 0,
		FULL_AMOUNT: 1,
		PERCENTAGE: 2,
	};

	GodzamokXtreme.SellMode = {
		PERCENT: 0,
		UNITS: 1,
	};

	GodzamokXtreme.BuyMode = {
		BUY: 1,
		SELL: -1,
	};

	GodzamokXtreme.buybackOptions = [
		{ pref: GodzamokXtreme.BuybackType.WITH_PROFIT, name: loc("gx_buyback_total_gain") },
		{ pref: GodzamokXtreme.BuybackType.FULL_AMOUNT, name: loc("gx_buyback_full_amount") },
		{ pref: GodzamokXtreme.BuybackType.PERCENTAGE, name: loc("gx_buyback_percentage") }
	];

	GodzamokXtreme.sellModeOptions = [
		{ pref: GodzamokXtreme.SellMode.PERCENT, name: loc("gx_sell_mode_percent") },
		{ pref: GodzamokXtreme.SellMode.UNITS, name: loc("gx_sell_mode_units") }
	];

	//***********************************
	//    STYLE
	//***********************************

	GodzamokXtreme.injectStyles = function () {
		const styleContent = `
			.widthAuto > .smallFancyButton { width: auto !important; }
			.disable { opacity: 0.5; }
			.infoText { font-size: 12px; color: rgba(255,255,255,0.5) }
			a.option.purple{ color: #8e00d6; border-color: #8e00d6; }
			a.option.purple:hover{ color: #ba30ff; border-color: #ba30ff; }
			a.option.orange{ color: #ff8f00; border-color: #ff8f00; }
			a.option.orange:hover{ color: #ffa835; border-color: #ffa835; }
			.gx-wrapper {
				display: block;
				position: absolute;
				right: 6px;
				bottom: 28px;
				width: 48px;
				height: 48px;
				z-index: 100;
			}
			.gx-wrapper#gx-wrapper-temple {
				top: 6px;
				left: 6px;
			}
			.gx-btn {
				position: absolute;
				width: 36px;
				height: 36px;
				background: url(img/icons.png);
				background-size: 1296px 1332px;
				background-position: 468px 684px;
				margin: 6px;
				cursor: pointer;
				z-index: 100;
			}
			.gx-btn::before {
				content: "";
				position: absolute;
				width: 48px;
				height: 48px;
				background: url(img/upgradeFrame.png);
				background-size: 144px 96px;
				background-position: 96px 0px;
				top: -6px;
				left: -6px;
			}
			.gx-btn:hover {
				background-color: rgba(160, 120, 0, 0.4);
			}
			.gx-btn:hover::before {
				background-position: 0px 0px;
			}
			.godzamok-active .gx-btn::before {
				background-position: 48px 0px;
			}
			.gx-btn::after {
				content: "";
				position: absolute;
				width: 16px;
				height: 16px;
				opacity: 0;
				background: url(img/icons.png);
				background-size: 1152px 1184px;
				background-position: -736px -480px;
				filter: brightness(0.5);
				right: -2px;
				bottom: -2px;
			}
			.gx-btn.diamond::after {
				opacity: 1;
				background-position: -736px -480px;
			}
			.gx-btn.ruby::after {
				opacity: 1;
				background-position: -752px -480px;
			}
			.gx-btn.jade::after {
				opacity: 1;
				background-position: -736px -496px;
			}
			.gx-btn.emptySwaps::after {
				opacity: 1;
				background-size: 576px 592px;
				background-position: -16px -112px;
			}
			.gx-btn:hover::after, 
			.gx-wrapper.godzamok-active .gx-btn::after {
				filter: brightness(1);
			}
			.gx-btn-shine {
				position: absolute;
				width: 68px;
				height: 68px;
				opacity: 0;
				background: url(img/shine.png) no-repeat center;
				background-size: 68px 68px;
				top: -10px;
				left: -10px;
				transition: opacity 0.3s ease;
				pointer-events: none;
				z-index: 50;
			}
			.gx-wrapper:hover .gx-btn-shine {
				opacity: 0.5;
				animation: rotateShine 30s linear infinite;
			}
			.gx-wrapper.godzamok-active .gx-btn-shine {
				background: url(img/shineGold.png) no-repeat center;
				background-size: 68px 68px;
				opacity: 1;
				animation: rotateShine 5s linear infinite;
			}
			.gx-loop-btn {
				display: flex;
				position: absolute;
				width: 48px;
				height: 24px;
				bottom: 100%;
				align-items: center;
				justify-content: center;
				font-size: 12px;
				text-align: center;
				line-height: 20px;
				cursor: pointer;
				z-index: 99;
			}
			.gx-loop-btn::before {
				content: "";
				position: absolute;
				width: 48px;
				height: 12px;
				background: url(img/upgradeFrame.png);
				background-size: 144px 96px;
				background-position: 96px 0px;
				top: 0px;
				left: 0px;
			}
			.gx-loop-btn::after {
				content: "";
				position: absolute;
				width: 48px;
				height: 12px;
				background: url(img/upgradeFrame.png);
				background-size: 144px 96px;
				background-position: 96px 60px;
				left: 0px;
				bottom: 0px;
			}
			.gx-loop-btn.loop-active {
				background-color: rgba(160, 120, 0, 0.2);
			}
			.gx-loop-btn:hover {
				background-color: rgba(160, 120, 0, 0.4);
			}
			.gx-loop-btn:hover::before {
				background-position: 0px 0px;
			}
			.gx-loop-btn:hover::after {
				background-position: 0px 60px;
			}
			.gx-loop-btn.loop-active::before{
				background-position: 0px 0px;
			}
			.gx-loop-btn.loop-active::after{
				background-position: 0px 60px;
			}
			.gx-wrapper#gx-wrapper-temple > .gx-loop-btn{
				top: 100%; 
			}
			@keyframes rotateShine {
				from { transform: rotate(0deg); }
				to { transform: rotate(360deg); }
			}
			.gx-marker {
				position: absolute;
				bottom: -4px;
				right: 0;
				width: 24px;
				height: 24px;
				background: url(img/icons.png);
				background-size: 864px 888px;
				background-position: 312px 456px;
				opacity: 0;
				pointer-events: none;
				z-index: 10;
				transition: opacity .1s;
			}
			.gx-marker.enabled {
				opacity: 0.8;
			}
			.gx-efficiency-tag {
				padding: 1px 4px;
				border-radius: 3px;
				font-size: 11px;
				background: rgba(0, 0, 0, 0.3);
    			border: 1px solid rgba(255, 255, 255, 0.1);
    			color: #aaa;
				vertical-align: middle;
			}`;

		const styleEl = document.createElement('style');
		styleEl.id = 'godzamokXtremeStyle';
		styleEl.textContent = styleContent;
		document.head.appendChild(styleEl);
	};

	//***********************************
	//    INIT
	//***********************************

	GodzamokXtreme.init = function () {
		GodzamokXtreme.isLoaded = true;
		GodzamokXtreme.config = GodzamokXtreme.defaultConfig();

		GodzamokXtreme.injectStyles();

		// Add settings and version info to the CCSE menu
		Game.customOptionsMenu.push(function () {
			CCSE.AppendCollapsibleOptionsMenu(GodzamokXtreme.name, GodzamokXtreme.getMenuString());
		});

		Game.customStatsMenu.push(function () {
			CCSE.AppendStatsVersionNumber(GodzamokXtreme.name, GodzamokXtreme.version);
		});

		GodzamokXtreme.addMainButtons();
		GodzamokXtreme.addKeyListener();
		GodzamokXtreme.monitorTempleSlotsAndSwaps();
		GodzamokXtreme.addStoreUpdateHook();

		// Setup core run logic (with throttling if enabled)
		GodzamokXtreme.updateRun();

		Game.Notify(loc("gx_mod_loaded_title"), loc("gx_mod_loaded_desc"), [23, 18], 1);
	};

	//***********************************
	//    UI BUTTONS
	//***********************************

	GodzamokXtreme.addMainButtons = function (attempt = 0) {
		if (!Game.Objects.Temple.minigameLoaded) {
			const maxAttempts = GodzamokXtreme.RETRY_MAX_ATTEMPTS;
			if (attempt >= maxAttempts) {
				console.warn('GodzamokXtreme: Temple minigame did not load after ' + maxAttempts + ' attempts — main buttons not added.');
				return;
			}
			setTimeout(() => GodzamokXtreme.addMainButtons(attempt + 1), GodzamokXtreme.RETRY_DELAY_MS);
			return;
		}

		GodzamokXtreme.addBuffUpdateHook(); // Activate buff-dependent shine

		if (GodzamokXtreme.config.showMainButton) {
			createUIButton('sectionLeft', 'gx-wrapper-main');
		}

		if (GodzamokXtreme.config.showTempleButton) {
			createUIButton('row6', 'gx-wrapper-temple');
		}

		// Creates a UI button wrapper and adds it to specified DOM container
		function createUIButton(containerId, wrapperId) {
			const container = document.getElementById(containerId);
			if (!container) {
				setTimeout(() => createUIButton(containerId, wrapperId), GodzamokXtreme.RETRY_DELAY_MS);
				return;
			}
			if (document.getElementById(wrapperId)) return;

			const wrapper = document.createElement('div');
			wrapper.id = wrapperId;
			wrapper.className = 'gx-wrapper';

			const shine = document.createElement('div');
			shine.className = 'gx-btn-shine';

			const godSlotClass = GodzamokXtreme.getGodSlotVisualClass();
			const btn = document.createElement('div');
			btn.className = `gx-btn ${godSlotClass}`;
			btn.onclick = () => GodzamokXtreme.run();

			wrapper.appendChild(shine);
			wrapper.appendChild(btn);

			if (GodzamokXtreme.config.showLoopButton) {
				const loopBtn = document.createElement('div');
				loopBtn.className = `gx-loop-btn titleFont`;
				loopBtn.textContent = loc("gx_loop");
				loopBtn.onclick = () => GodzamokXtreme.toggleLoopMode();

				wrapper.appendChild(loopBtn);
			}

			container.appendChild(wrapper);
		}
	};

	//***********************************
	//    LOOP MODE SUPPORT
	//***********************************

	// Toggles loop mode for automated repeated execution of the Godzamok run script.
	GodzamokXtreme.toggleLoopMode = function () {
		GodzamokXtreme.config.loopModeEnabled = !GodzamokXtreme.config.loopModeEnabled;

		const loopButtonElems = document.getElementsByClassName('gx-loop-btn');
		for (const btn of loopButtonElems) {
			btn.classList.toggle('loop-active', GodzamokXtreme.config.loopModeEnabled);
		}

		function loop() {
			if (!GodzamokXtreme.config.loopModeEnabled) return;
			GodzamokXtreme.run();
			GodzamokXtreme._loopTimeout = setTimeout(loop, GodzamokXtreme.LOOP_DELAY_MS);
		}

		if (GodzamokXtreme.config.loopModeEnabled) {
			loop();
		} else {
			clearTimeout(GodzamokXtreme._loopTimeout);
			GodzamokXtreme._loopTimeout = null;
		}
	};

	// Stops loop mode if active — called when user cancels a prompt mid-loop
	GodzamokXtreme.cancelLoop = function () {
		if (GodzamokXtreme.config.loopModeEnabled) {
			GodzamokXtreme.toggleLoopMode();
		}
	};

	//***********************************
	//    HOTKEY SUPPORT
	//***********************************

	// Adds 'G' hotkey listener to run the Godzamok script
	GodzamokXtreme.addKeyListener = function () {
		if (GodzamokXtreme._keyListenerAdded) return;
		GodzamokXtreme._keyListenerAdded = true;

		document.addEventListener('keydown', function (event) {
			if (event.code === 'KeyG' && GodzamokXtreme.config.hotkeyG) {
				GodzamokXtreme.run();
			}
		});
	};

	//***********************************
	//    BUFF VISUAL EFFECT
	//***********************************

	// Adds glow effect to UI button if Devastation buff is active
	GodzamokXtreme.addBuffUpdateHook = function () {
		let wasGodzamokActive = false;
		const originalUpdateBuffs = Game.updateBuffs;

		Game.updateBuffs = function () {
			originalUpdateBuffs.apply(this, arguments);
			const isActive = Game.buffs.Devastation !== undefined;

			if (isActive !== wasGodzamokActive) {
				wasGodzamokActive = isActive;

				['gx-wrapper-main', 'gx-wrapper-temple'].forEach(id => {
					const btn = document.getElementById(id);
					if (btn) btn.classList.toggle('godzamok-active', !!isActive);
				});
			}
		};
	};

	//***********************************
	//    STORE BUILDING HIGHLIGHT
	//***********************************

	GodzamokXtreme._getOrCreateMarker = function (i) {
		const product = document.getElementById('product' + i);
		if (!product) return null;

		const content = product.querySelector('.content');
		if (!content) return null;

		let marker = content.querySelector('.gx-marker');
		if (!marker) {
			marker = document.createElement('div');
			marker.className = 'gx-marker';
			content.appendChild(marker);
		}

		return marker;
	};

	GodzamokXtreme.buildStoreMarkers = function () {
		Game.ObjectsById.forEach((_, i) => GodzamokXtreme._getOrCreateMarker(i));
		GodzamokXtreme.refreshStoreMarkers();
	};

	GodzamokXtreme.refreshStoreMarkers = function () {
		const show = GodzamokXtreme.config.showStoreMarkers;
		Game.ObjectsById.forEach((_, i) => {
			const marker = GodzamokXtreme._getOrCreateMarker(i);
			if (!marker) return;

			marker.style.display = show ? '' : 'none';
			if (show) {
				marker.classList.toggle('enabled', GodzamokXtreme.config.buildings[i].enabled);
			}
		});
	};

	GodzamokXtreme.ToggleStoreMarkers = function () {
		GodzamokXtreme.config.showStoreMarkers = !GodzamokXtreme.config.showStoreMarkers;
		GodzamokXtreme.refreshStoreMarkers();
		Game.UpdateMenu();
	};

	GodzamokXtreme.addStoreUpdateHook = function () {
		Game.customBuildStore.push(GodzamokXtreme.buildStoreMarkers);
		Game.customRefreshStore.push(GodzamokXtreme.refreshStoreMarkers);
	};

	//***********************************
	//    SYNERGY CPS PERCENTAGE
	//***********************************

	// Calculate the percentage of CPS that a building provides to other buildings through synergies
	GodzamokXtreme.getSynergyPercentage = function (building, mode = 0) {
		if (!building || building.amount <= 0) return 0;
		let synergyBoost = 0;

		// 1. Grandmothers Synergies
		if (building.name === 'Grandma') {
			for (var i in Game.GrandmaSynergies) {
				if (Game.Has(Game.GrandmaSynergies[i])) {
					var other = Game.Upgrades[Game.GrandmaSynergies[i]].buildingTie;
					if (other) {
						const mult = building.amount * 0.01 * (1 / (other.id - 1));
						const otherCps = (other.storedTotalCps || 0) * Game.globalCpsMult;
						const boost = otherCps - (otherCps / (1 + mult));
						synergyBoost += boost;
					}
				}
			}
		}
		// 2. A Special Bonus from the Elder Pact Portals
		else if (building.name === 'Portal' && Game.Has('Elder Pact')) {
			const grandma = Game.Objects['Grandma'];
			if (grandma) {
				const boost = (building.amount * 0.05 * grandma.amount) * Game.globalCpsMult;
				synergyBoost += boost;
			}
		}

		// 3. Standard Building Synergies
		for (var i in building.synergies) {
			const it = building.synergies[i];
			if (!Game.Has(it.name)) continue;

			// mode 1: only as buildingTie1
			if (mode === 1 && building !== it.buildingTie1) continue;
			// mode 2: only as buildingTie2
			if (mode === 2 && building !== it.buildingTie2) continue;

			let weight = 0.05;
			let other = it.buildingTie1;
			if (building === it.buildingTie1) {
				weight = 0.001;
				other = it.buildingTie2;
			}
			if (other) {
				const otherCps = (other.storedTotalCps || 0) * Game.globalCpsMult;
				const boost = otherCps - (otherCps / (1 + building.amount * weight));
				synergyBoost += boost;
			}

		}

		if (Game.cookiesPs <= 0) return 0;
		return (synergyBoost / Game.cookiesPs) * 100;
	};

	//***********************************
	//    SETTINGS MENU UI
	//***********************************

	GodzamokXtreme.getMenuString = function () {
		let menu = CCSE.MenuHelper;
		let str = '';

		function addClassToHtml(html, classToAdd) {
			const match = html.match(/class="([^"]*)"/);
			if (!match) {
				return html.replace(/<(\w+)/, `<$1 class="${classToAdd}"`);
			}
			const classes = match[1].split(' ');
			if (!classes.includes(classToAdd)) classes.push(classToAdd);
			return html.replace(/class="[^"]*"/, `class="${classes.join(' ')}"`);
		}

		try {
			//========== UTILITIES ==========
			str += menu.Header(loc("gx_header_utilities"));

			str += '<div class="listing">' +
				menu.ToggleButton(GodzamokXtreme.config, 'showSellBuyInfo',
					'GodzamokXtreme_ShowSellBuyInfo',
					loc("gx_debug_info_prefix") + loc("gx_toggle_on"),
					loc("gx_debug_info_prefix") + loc("gx_toggle_off"),
					"GodzamokXtreme.Toggle") +
				'<label>' + loc("gx_debug_info_label") + '</label>' +
				'</div>';

			// Safe sell calculator
			str += '<div class="listing">' +
				addClassToHtml(
					menu.ActionButton(`GodzamokXtreme.calculateSafeSellUnits();`, loc("gx_calc_safe_sell")),
					'neato'
				) +
				'<label>' + loc("gx_calc_safe_sell_label").replace('%RATIO%', Math.round(GodzamokXtreme.SAFE_SELL_BUDGET_RATIO * 100)) + '</label>' +
				'</div>';

			str += '<div class="listing">' +
				addClassToHtml(
					menu.ToggleButton(GodzamokXtreme.config, 'advancedOptimization',
						'GodzamokXtreme_AdvancedOptimization',
						loc("gx_advanced_opt") + loc("gx_toggle_on"),
						loc("gx_advanced_opt") + loc("gx_toggle_off"),
						"GodzamokXtreme.Toggle"),
					'orange'
				) +
				'<label>' + loc("gx_advanced_opt_label") + '</label>' +
				'</div>';

			str += '<div class="listing">' +
				addClassToHtml(
					menu.ActionButton("GodzamokXtreme.confirmResetConfig();", loc("gx_reset_config")),
					'warning'
				) +
				'</div>';

			str += '<br/>';

			//========== GENERAL ==========
			str += menu.Header(loc("gx_header_input_hotkeys"));

			str += '<div class="listing">' +
				menu.ToggleButton(GodzamokXtreme.config, 'showMainButton',
					'GodzamokXtreme_MainButton',
					loc("gx_button_near_cookie") + loc("gx_toggle_on"),
					loc("gx_button_near_cookie") + loc("gx_toggle_off"),
					"GodzamokXtreme.ToggleStartButton") +
				menu.ToggleButton(GodzamokXtreme.config, 'showTempleButton',
					'GodzamokXtreme_TempleButton',
					loc("gx_button_in_temple") + loc("gx_toggle_on"),
					loc("gx_button_in_temple") + loc("gx_toggle_off"),
					"GodzamokXtreme.ToggleStartButton") +
				menu.ToggleButton(GodzamokXtreme.config, 'showLoopButton',
					'GodzamokXtreme_ShowLoopButton',
					loc("gx_show_loop_button") + loc("gx_toggle_on"),
					loc("gx_show_loop_button") + loc("gx_toggle_off"),
					"GodzamokXtreme.ToggleStartButton") +
				'<label>' + loc("gx_display_buttons_label") + '</label>' +
				'</div>';

			str += '<div class="listing">' +
				menu.ToggleButton(
					GodzamokXtreme.config,
					'showStoreMarkers',
					'GodzamokXtreme_StoreMarkers',
					loc("gx_store_markers") + loc("gx_toggle_on"),
					loc("gx_store_markers") + loc("gx_toggle_off"),
					"GodzamokXtreme.ToggleStoreMarkers"
				) +
				'<label>' + loc("gx_store_markers_label") + '</label>' +
				'</div>';

			str += '<div class="listing">' +
				menu.ToggleButton(GodzamokXtreme.config, 'hotkeyG',
					'GodzamokXtreme_HotkeyG',
					loc("gx_hotkey_g") + loc("gx_toggle_on"),
					loc("gx_hotkey_g") + loc("gx_toggle_off"),
					"GodzamokXtreme.Toggle") +
				'<label>' + loc("gx_hotkey_g_label") + '</label>' +
				'</div>';

			// Input delay
			str += '<div class="listing">' +
				addClassToHtml(
					menu.ToggleButton(GodzamokXtreme.config, 'inputDelayEnabled',
						'GodzamokXtreme_InputDelayEnabled',
						loc("gx_input_delay") + loc("gx_toggle_on"),
						loc("gx_input_delay") + loc("gx_toggle_off"),
						"GodzamokXtreme.ToggleInputDelay"),
					'orange') +
				`<label>` + loc("gx_input_delay_label") + ` ${GodzamokXtreme.config.inputDelayValue} ms</label>` +
				'</div>';

			str += '<div class="listing">' +
				addClassToHtml(
					menu.Slider(
						'GodzamokXtreme_DelayDurationSlider',
						loc("gx_input_delay"),
						'[$] ms',
						() => GodzamokXtreme.config.inputDelayEnabled
							? GodzamokXtreme.config.inputDelayValue
							: GodzamokXtreme.LOOP_DELAY_MS,
						GodzamokXtreme.config.inputDelayEnabled
							? 'GodzamokXtreme.updateDelayDuration(this.value);'
							: '',
						10, 1000, 10
					),
					GodzamokXtreme.config.inputDelayEnabled ? '' : 'disable'
				) +
				'<label>' + loc("gx_delay_duration_label") + '</label>' +
				'</div>';

			str += '<br/>';

			//========== TEMPLE ==========
			str += menu.Header(loc("gx_header_temple"));

			// Auto-switch to Godzamok
			str += '<div class="listing widthAuto">' +
				addClassToHtml(
					menu.ToggleButton(
						GodzamokXtreme.config,
						'autoSwitchGods',
						'GodzamokXtreme_AutoSwitchGods',
						loc("gx_auto_switch_god") + loc("gx_toggle_on"),
						loc("gx_auto_switch_god") + loc("gx_toggle_off"),
						"GodzamokXtreme.ToggleAutoSwitchGods"
					),
					'neato'
				) +
				'<label>' + loc("gx_auto_switch_god_label") + '</label>' +
				'</div>';

			// God slot selector (1, 2, 3)
			str += '<div class="listing widthAuto">';
			for (let i = 1; i <= 3; i++) {
				const isActive = GodzamokXtreme.config.selectedSlot === i;
				str += `<a class="smallFancyButton option ${isActive ? '' : 'off'} purple" 
						id="GodzamokXtreme_SelectedGodSlot_${i}" 
						onclick="GodzamokXtreme.ToggleGodSlot(${i})">
							${i}
					</a>`;
			}
			str += '<label>' + loc("gx_temple_slot_label") + '</label>' +
				'</div>';

			str += '<br/>';

			//========== BUYBACK ==========
			str += menu.Header(loc("gx_header_buyback"));

			// Toggle auto-buyback
			str += '<div class="listing">' +
				addClassToHtml(
					menu.ToggleButton(
						GodzamokXtreme.config,
						'buybackEnabled',
						'GodzamokXtreme_BuybackEnabled',
						loc("gx_buyback") + loc("gx_toggle_on"),
						loc("gx_buyback") + loc("gx_toggle_off"),
						"GodzamokXtreme.Toggle"
					),
					'neato'
				) +
				'<label>' + loc("gx_buyback_label") + '</label>' +
				'</div>';

			// Buyback strategy selection
			str += '<div class="listing">';
			for (let i = 0; i < GodzamokXtreme.buybackOptions.length; i++) {
				const isActive = GodzamokXtreme.config.buybackType === i;
				str += `<a class="smallFancyButton prefButton option ${isActive ? '' : 'off'}"
								id="GodzamokXtreme_BuybackType_${i}"
								onclick="GodzamokXtreme.ToggleBuybackType(${i})">
									${GodzamokXtreme.buybackOptions[i].name}
							</a>`;
			}
			str += '<label>' + loc("gx_buyback_strategy_label") + '</label>' +
				'</div>';

			// Slider for percentage mode
			str += '<div class="listing">' +
				addClassToHtml(
					menu.Slider(
						'GodzamokXtreme_BuybackPercentSlider',
						loc("gx_buyback_percent"),
						'[$]%',
						() => GodzamokXtreme.config.buybackPercent,
						GodzamokXtreme.config.buybackType === GodzamokXtreme.BuybackType.PERCENTAGE
							? 'GodzamokXtreme.updateBuybackPercent(this.value);'
							: '',
						0, 100, 5
					),
					GodzamokXtreme.config.buybackType === GodzamokXtreme.BuybackType.PERCENTAGE
						? ''
						: 'disable'
				) +
				'<label>' + loc("gx_buyback_percent_label") + '</label>' +
				'</div>';

			str += '<br/>';

			//========== SELL ==========
			str += menu.Header(loc("gx_header_sell"));

			// Toggle filters
			str += '<div class="listing">' +
				addClassToHtml(
					menu.ToggleButton(
						GodzamokXtreme.config,
						'showOnlyEnabled',
						'GodzamokXtreme_ShowAll',
						loc("gx_show_only_enabled") + loc("gx_toggle_on"),
						loc("gx_show_only_enabled") + loc("gx_toggle_off"),
						"GodzamokXtreme.Toggle"
					),
					'neato'
				) +
				addClassToHtml(
					menu.ToggleButton(
						GodzamokXtreme.config,
						'hideEmptyBuildings',
						'GodzamokXtreme_HideEmpty',
						loc("gx_hide_empty") + loc("gx_toggle_on"),
						loc("gx_hide_empty") + loc("gx_toggle_off"),
						"GodzamokXtreme.Toggle"
					),
					'neato'
				) +
				addClassToHtml(
					menu.ToggleButton(
						GodzamokXtreme.config,
						'sortByCps',
						'GodzamokXtreme_SortByCps',
						loc("gx_sort_by_cps") + loc("gx_toggle_on"),
						loc("gx_sort_by_cps") + loc("gx_toggle_off"),
						"GodzamokXtreme.Toggle"
					),
					'neato'
				) +
				'<label>' + loc("gx_building_list_filters_label") + '</label>' +
				'</div>';

			// Sell mode toggle (percent / units)
			str += '<div class="listing widthAuto">';
			for (let i = 0; i < GodzamokXtreme.sellModeOptions.length; i++) {
				const isActive = GodzamokXtreme.config.sellMode === i;
				str += `<a class="smallFancyButton option prefButton ${isActive ? '' : 'off'} purple" 
						id="GodzamokXtreme_SellMode_${i}" 
						onclick="GodzamokXtreme.ToggleSellMode(${i})">
						${GodzamokXtreme.sellModeOptions[i].name}
					</a>`;
			}
			str += '<label>' + loc("gx_sell_mode_label") + '</label>' +
				'</div>';

			// Preset buttons for % values
			str += '<div class="listing widthAuto">';
			const percentPreset = [0, 25, 50, 75, 100];
			percentPreset.forEach(val => {
				str += addClassToHtml(
					menu.ActionButton(`GodzamokXtreme.setSellPercentForAll(${val});`, `${val}%`),
					'purple'
				);
			});
			str += '<label>' + loc("gx_preset_percent_label") + '</label>' +
				'</div>';

			// Preset buttons for unit values
			str += '<div class="listing widthAuto">' +
				addClassToHtml(menu.ActionButton(`GodzamokXtreme.subtractSellUnits(10);`, `-10`), 'purple') +
				addClassToHtml(menu.ActionButton(`GodzamokXtreme.resetSellUnits();`, `0`), 'purple') +
				addClassToHtml(menu.ActionButton(`GodzamokXtreme.addSellUnits(10);`, `+10`), 'purple') +
				addClassToHtml(menu.ActionButton(`GodzamokXtreme.addSellUnits(50);`, `+50`), 'purple') +
				addClassToHtml(menu.ActionButton(`GodzamokXtreme.addSellUnits(100);`, `+100`), 'purple') +
				'<label>' + loc("gx_preset_units_label") + '</label>' +
				'</div>';

			//========== INDIVIDUAL BUILDING SETTINGS ==========
			// Calculate the total energy efficiency of all buildings once to determine the percentages
			const rawTotalCps = Game.ObjectsById.reduce((sum, b) => sum + (b.storedCps || 0) * b.amount, 0);

			// Pre-calculate CPS impact for each building (used for sorting and display)
			const buildingImpacts = Game.ObjectsById.map((obj) => {
				// 1. The building's share of the CPS
				const buildingCps = obj.storedTotalCps || 0;
				const cpsShare = rawTotalCps > 0 ? ((buildingCps / rawTotalCps) * 100).toFixed(2) : "0.00";

				// 2. Share of synergies for other buildings
				const synergyShareNum = GodzamokXtreme.getSynergyPercentage(obj, 0);
				const synergyShare = synergyShareNum > 0 ? synergyShareNum.toFixed(2) : '0.00';

				// 3. Total CPS loss if all buildings of this type were sold
				const totalImpact = parseFloat((parseFloat(cpsShare) + parseFloat(synergyShare)).toFixed(2));

				return { cpsShare, synergyShare, totalImpact };
			});

			// Create an array of building indices for display
			let buildingIndices = Game.ObjectsById.map((_, index) => index);

			// If sorting by CPS is enabled, sort in ascending order by the building's total CPS
			if (GodzamokXtreme.config.sortByCps) {
				buildingIndices.sort((a, b) => buildingImpacts[a].totalImpact - buildingImpacts[b].totalImpact);
			}

			for (let i = 0; i < buildingIndices.length; i++) {
				const index = buildingIndices[i];
				const obj = Game.ObjectsById[index];
				const buildingCfg = GodzamokXtreme.config.buildings[index];
				const itemId = `GodzamokXtreme_Building_${index}`;

				// Skip based on filters
				if (GodzamokXtreme.config.showOnlyEnabled && !buildingCfg.enabled) continue;
				if (GodzamokXtreme.config.hideEmptyBuildings && obj.amount <= 0) continue;

				const sellPercent = buildingCfg.sellPercent || 0;
				const sellUnits = buildingCfg.sellUnits || 0;

				const isPercentMode = GodzamokXtreme.config.sellMode === GodzamokXtreme.SellMode.PERCENT;

				const { cpsShare, synergyShare, totalImpact } = buildingImpacts[index];

				// Create UI block for each building
				str += '<div class="listing titleFont">' +
					// Button
					menu.ToggleButton(
						GodzamokXtreme.config.buildings[index], 'enabled',
						itemId,
						`${obj.dname}: ` + loc("gx_toggle_on"),
						`${obj.dname}: ` + loc("gx_toggle_off"),
						`GodzamokXtreme.ToggleBuilding(${index});`,
					) +

					// Text: sell
					`<span style="margin-left: 6px;"></span >` +
					loc("gx_sell_label") +

					// Input: percent
					` <input class="input" type="number" min="0" max="100" value="${sellPercent}" style="width: 54px;" 
						${isPercentMode ? '' : 'disabled'} 
						onchange="GodzamokXtreme.config.buildings[${index}].sellPercent = parseInt(this.value)||0; GodzamokXtreme.syncSellValues(${index});">` +
					`<span class="infoText">%</span>` +

					// Text: or
					`<span style="margin: 0 6px;">` + loc("gx_or") + `</span >` +

					// Input: units
					`<input class="input" type="number" min="0" max="9999" value="${sellUnits}" style="width: 54px;" 
						${isPercentMode ? 'disabled' : ''} 
						onchange="GodzamokXtreme.config.buildings[${index}].sellUnits = parseInt(this.value)||0; GodzamokXtreme.syncSellValues(${index});">` +
					`<span class="infoText">` + loc("gx_units") + `</span>` +

					// CPS Indicator for Each Building
					` <span style="margin: 0 6px;">` + loc("gx_impact") + `</span>` +
					`<span class="gx-efficiency-tag">` +
					`<span style="color:#88ccff;">${cpsShare}%</span>` +
					`<span style="color:#555;"> + </span>` +
					`<span style="color:#ffcc66;">${synergyShare}%</span>` +
					`<span style="color:#555;"> = </span>` +
					`<span style="color:#ff7070;font-weight:bold;">${totalImpact}%</span>` +
					`</span>` +
					`</div>`;
			}

		} catch (e) {
			console.error("GodzamokXtreme: getMenuString error", e);
			GodzamokXtreme.config = GodzamokXtreme.defaultConfig();
			return '<div class="listing">Menu error. Config reset.</div>';
		}
		return str;
	};

	//***********************************
	//    MENU STATE TOGGLERS
	//***********************************

	// General-purpose toggle for binary config flags
	GodzamokXtreme.Toggle = function (prefName, button, on, off, invert) {
		GodzamokXtreme.config[prefName] = !GodzamokXtreme.config[prefName];
		Game.UpdateMenu();
	};

	// Special toggle that also refreshes the start buttons (main/temple)
	GodzamokXtreme.ToggleStartButton = function (prefName, button, on, off, invert) {
		GodzamokXtreme.Toggle(prefName, button, on, off, invert);
		GodzamokXtreme.UpdateStartButton();
	};

	// Toggles the 'inputDelayEnabled' setting and rebinds the run function with or without throttling
	GodzamokXtreme.ToggleInputDelay = function (prefName, button, on, off, invert) {
		GodzamokXtreme.Toggle(prefName, button, on, off, invert);
		GodzamokXtreme.updateRun();
	};

	// Updates the delay duration value slider
	GodzamokXtreme.updateDelayDuration = function (val) {
		GodzamokXtreme.config.inputDelayValue = parseInt(val);
		l('GodzamokXtreme_DelayDurationSliderRightText').textContent = val + ' ms';
		GodzamokXtreme.updateRun();
	};

	// Toggles auto-switch to Godzamok and updates the UI class of slot buttons
	GodzamokXtreme.ToggleAutoSwitchGods = function (prefName, button, on, off, invert) {
		GodzamokXtreme.Toggle(prefName, button, on, off, invert);
		GodzamokXtreme.UpdateGodSlotButtonClasses();
	}

	// Refreshes the large UI buttons after toggling
	GodzamokXtreme.UpdateStartButton = function () {
		const main = document.getElementById('gx-wrapper-main');
		if (main) main.remove();

		const temple = document.getElementById('gx-wrapper-temple');
		if (temple) temple.remove();

		GodzamokXtreme.addMainButtons();
	};

	//***********************************
	//    TEMPLE STATE HELPERS
	//***********************************

	// Returns true if Godzamok is currently active in any temple slot
	GodzamokXtreme.isGodzamokActivate = function () {
		if (!Game.Objects.Temple.minigameLoaded) return false;
		return Game.Objects.Temple.minigame.slot.includes(GodzamokXtreme.GODZAMOK_GOD_ID);
	};

	// Returns all available slot name classes (diamond, ruby, jade)
	GodzamokXtreme.getAllSlotClasses = function () {
		if (!Game.Objects.Temple.minigameLoaded) return [];
		return Game.Objects.Temple.minigame.slotNames.map(name => name.toLowerCase());
	};

	// Gets the correct visual class for the UI button depending on Godzamok state
	GodzamokXtreme.getGodSlotVisualClass = function () {
		if (!Game.Objects.Temple.minigameLoaded) return '';

		if (Game.Objects.Temple.minigame.swaps < 1 && !GodzamokXtreme.isGodzamokActivate()) {
			return 'emptySwaps';
		}

		if (GodzamokXtreme.config.autoSwitchGods && !GodzamokXtreme.isGodzamokActivate()) {
			const allSlotClasses = GodzamokXtreme.getAllSlotClasses();
			return allSlotClasses[GodzamokXtreme.config.selectedSlot - 1] || '';
		}

		return '';
	};

	// Attempts to place Godzamok into the selected temple slot
	GodzamokXtreme.setGodzamok = function () {
		if (!Game.Objects.Temple.minigameLoaded) return;
		if (GodzamokXtreme.isGodzamokActivate()) return;

		if (!GodzamokXtreme.config.autoSwitchGods) {
			Game.Popup("Godzamok not selected");
			GodzamokXtreme.UpdateGodSlotButtonClasses();
			return;
		}

		if (Game.Objects.Temple.minigame.swaps < 1) {
			Game.Popup("Worship swaps: 0");
			GodzamokXtreme.UpdateGodSlotButtonClasses();
			return;
		}

		const godzamok = Game.Objects.Temple.minigame.godsById[GodzamokXtreme.GODZAMOK_GOD_ID];
		const slotIndex = GodzamokXtreme.config.selectedSlot - 1;

		Game.Objects.Temple.minigame.dragGod(godzamok);
		Game.Objects.Temple.minigame.hoverSlot(slotIndex);
		Game.Objects.Temple.minigame.dropGod();

		GodzamokXtreme.UpdateGodSlotButtonClasses();
	};


	// Updates the visual class on UI buttons based on slot state
	GodzamokXtreme.UpdateGodSlotButtonClasses = function () {
		const godSlotClass = GodzamokXtreme.getGodSlotVisualClass();
		const allSlotClasses = GodzamokXtreme.getAllSlotClasses();
		const btns = document.getElementsByClassName('gx-btn');

		Array.from(btns).forEach(btn => {
			btn.classList.remove("emptySwaps");
			btn.classList.remove(...allSlotClasses);
			if (!GodzamokXtreme.isGodzamokActivate() && godSlotClass) {
				btn.classList.add(godSlotClass);
			}
		});
	};

	//***********************************
	//    TEMPLE WATCHDOG
	//***********************************

	// Monitors Temple swaps and slot changes to update UI dynamically
	GodzamokXtreme.monitorTempleSlotsAndSwaps = function (attempt = 0) {
		if (!Game.Objects.Temple.minigameLoaded) {
			const maxAttempts = GodzamokXtreme.RETRY_MAX_ATTEMPTS;
			if (attempt >= maxAttempts) {
				console.warn('GodzamokXtreme: Temple minigame did not load after ' + maxAttempts + ' attempts — Temple swap/slot monitoring disabled.');
				return;
			}
			setTimeout(() => GodzamokXtreme.monitorTempleSlotsAndSwaps(attempt + 1), GodzamokXtreme.RETRY_DELAY_MS);
			return;
		}

		let lastSwaps = Game.Objects.Temple.minigame.swaps;
		let lastSlots = [...Game.Objects.Temple.minigame.slot];

		function arraysEqual(a, b) {
			return a.length === b.length && a.every((v, i) => v === b[i]);
		}

		GodzamokXtreme._monitorInterval = setInterval(() => {
			const currentSwaps = Game.Objects.Temple.minigame.swaps;
			const currentSlots = [...Game.Objects.Temple.minigame.slot];

			const swapsChanged = currentSwaps !== lastSwaps;
			const slotsChanged = !arraysEqual(currentSlots, lastSlots);

			if (swapsChanged || slotsChanged) {
				lastSwaps = currentSwaps;
				lastSlots = currentSlots;
				GodzamokXtreme.UpdateGodSlotButtonClasses();
			}
		}, GodzamokXtreme.MONITOR_INTERVAL_MS); // check every x ms
	};

	//***********************************
	//    TEMPLE LOGIC
	//***********************************

	// Updates selected temple slot and refreshes UI
	GodzamokXtreme.ToggleGodSlot = function (slot) {
		GodzamokXtreme.config.selectedSlot = slot;
		GodzamokXtreme.UpdateGodSlotButtonClasses();
		Game.UpdateMenu();
	};

	//***********************************
	//    BUYBACK LOGIC
	//***********************************

	// Toggles the current buyback strategy (gain-based, full, percentage)
	GodzamokXtreme.ToggleBuybackType = function (index) {
		GodzamokXtreme.config.buybackType = index;
		Game.UpdateMenu();
	};

	// Updates the % slider value used in percentage buyback mode
	GodzamokXtreme.updateBuybackPercent = function (val) {
		GodzamokXtreme.config.buybackPercent = parseInt(val);
		l('GodzamokXtreme_BuybackPercentSliderRightText').textContent = val + '%';
	};

	//***********************************
	//    BUILDING LOGIC 
	//***********************************

	// Enables/disables a specific building for selling
	GodzamokXtreme.ToggleBuilding = function (index) {
		const build = GodzamokXtreme.config.buildings[index];
		build.enabled = !build.enabled;

		const button = l(`GodzamokXtreme_Building_${index}`);
		const obj = Game.ObjectsById[index];

		button.innerHTML = build.enabled ? `${obj.dname}: ${loc("gx_toggle_on")}` : `${obj.dname}: ${loc("gx_toggle_off")}`;
		button.className = 'smallFancyButton prefButton option' + (build.enabled ? '' : ' off');

		GodzamokXtreme.refreshStoreMarkers();
	};

	// Switches between percent mode and units mode
	GodzamokXtreme.ToggleSellMode = function (index) {
		GodzamokXtreme.config.sellMode = index;
		GodzamokXtreme.syncAllSellValues(); // recalculate other mode
	};

	// Synchronizes sellPercent and sellUnits based on current sell mode
	GodzamokXtreme.syncSellValues = function (index, mode = -1, updateMenu = true) {
		const building = GodzamokXtreme.config.buildings[index];
		const gameObj = Game.ObjectsById[index];

		const isPercentMode = (mode === -1)
			? (GodzamokXtreme.config.sellMode === GodzamokXtreme.SellMode.PERCENT)
			: (mode === GodzamokXtreme.SellMode.PERCENT);

		if (isPercentMode) {
			building.sellUnits = Math.floor(gameObj.amount * (building.sellPercent / 100));
		} else {
			building.sellPercent = (gameObj.amount > 0)
				? Math.floor((building.sellUnits / gameObj.amount) * 100)
				: 0;
		}
		if (updateMenu) Game.UpdateMenu();
	};

	// Applies syncSellValues to all buildings
	GodzamokXtreme.syncAllSellValues = function (mode, updateMenu = true) {
		GodzamokXtreme.config.buildings.forEach((_, index) => {
			GodzamokXtreme.syncSellValues(index, mode, false);
		});
		if (updateMenu) Game.UpdateMenu(); // Rebuild of the settings menu
	};

	// Sets the same percent for all enabled buildings
	GodzamokXtreme.setSellPercentForAll = function (value) {
		GodzamokXtreme.config.buildings.forEach((b) => {
			b.sellPercent = value;
		});
		GodzamokXtreme.syncAllSellValues(GodzamokXtreme.SellMode.PERCENT); // sync units from %
	};

	// Subtracts specified number of units from each building (minimum is 0)
	GodzamokXtreme.subtractSellUnits = function (amount) {
		GodzamokXtreme.config.buildings.forEach((building, index) => {
			const obj = Game.ObjectsById[index];
			if (obj && obj.amount > 0) {
				building.sellUnits = Math.max(0, building.sellUnits - amount);
			}
		});
		GodzamokXtreme.syncAllSellValues(GodzamokXtreme.SellMode.UNITS); // sync % from units
	};

	// Resets unit sell values to 0
	GodzamokXtreme.resetSellUnits = function () {
		GodzamokXtreme.config.buildings.forEach((building) => {
			building.sellUnits = 0;
		});
		GodzamokXtreme.syncAllSellValues(GodzamokXtreme.SellMode.UNITS); // sync % from 0 units
	};

	// Adds specified number of units to each building (up to owned amount)
	GodzamokXtreme.addSellUnits = function (amount) {
		GodzamokXtreme.config.buildings.forEach((building, index) => {
			const obj = Game.ObjectsById[index];
			if (obj && obj.amount > 0) {
				building.sellUnits = Math.min(obj.amount, building.sellUnits + amount);
			}
		});
		GodzamokXtreme.syncAllSellValues(GodzamokXtreme.SellMode.UNITS); // sync % from units
	};

	// Calculate counts without selling, buying or changing the game state.
	GodzamokXtreme.calculateSafeSellUnits = function () {
		if (!GodzamokXtreme.config.buybackEnabled ||
			GodzamokXtreme.config.buybackType !== GodzamokXtreme.BuybackType.FULL_AMOUNT) {
			return Game.Popup("Calculate Safe Sell requires full buyback mode.");
		}
		const enabled = Game.ObjectsById.filter((building, i) =>
			building.amount > 0 && GodzamokXtreme.config.buildings[i]?.enabled);
		if (!enabled.length) return Game.Popup(loc("gx_no_buildings_selected"));
		const budget = Math.max(0, Math.min(Game.cookies,
			Game.cookiesPsRaw * GodzamokXtreme.SAFE_SELL_BUDGET_RATIO));
		const choices = enabled.map(building => ({
			building, losses: godzamakLossesByCount(building), count: 0
		}));
		let spent = 0;
		const share = budget / choices.length;
		for (const choice of choices) {
			while (choice.count < choice.building.amount &&
				choice.losses[choice.count + 1] <= share) choice.count++;
			spent += choice.losses[choice.count];
		}
		// Spend unused shares on the cheapest currently available next unit.
		while (true) {
			let best = null, bestExtra = Infinity;
			for (const choice of choices) {
				if (choice.count >= choice.building.amount) continue;
				const extra = choice.losses[choice.count + 1] - choice.losses[choice.count];
				if (extra <= budget - spent && extra < bestExtra) {
					best = choice;
					bestExtra = extra;
				}
			}
			if (!best) break;
			best.count++;
			spent += bestExtra;
		}
		for (const choice of choices) {
			GodzamokXtreme.config.buildings[choice.building.id].sellUnits = choice.count;
		}
		// The computed units must actually be used on the next activation.
		GodzamokXtreme.config.sellMode = GodzamokXtreme.SellMode.UNITS;
		GodzamokXtreme.syncAllSellValues(GodzamokXtreme.SellMode.UNITS);
	};

	//***********************************
	//    SELL WARNING PROMPT
	//***********************************

	// Exact gross cost for a full buyback; Game.getSumPrice() rounds differently
	// from the individual purchases and sales performed by Game.Object.
	GodzamokXtreme.calcTotalBuybackCost = function () {
		const isPercentMode = GodzamokXtreme.config.sellMode === GodzamokXtreme.SellMode.PERCENT;
		let total = 0;
		Game.ObjectsById.forEach((building, i) => {
			const config = GodzamokXtreme.config.buildings[i];
			if (!config || !config.enabled) return;
			const amount = isPercentMode
				? Math.floor(building.amount * (Math.max(0, Math.min(config.sellPercent, 100)) / 100))
				: config.sellUnits;
			if (amount > 0 && amount <= building.amount) {
				total += godzamakTransactionCosts(building, amount).buybackCost;
			}
		});
		return total;
	};

	// Shows warning prompt with real cost data, then resumes or cancels
	GodzamokXtreme.promptSellWarning = function () {
		// Prevent redrawing the prompt if it is already open (fixes checkbox reset during Loop)
		const promptAnchor = l('promptAnchor');
		if (promptAnchor && (promptAnchor.style.display !== '' && promptAnchor.style.display !== 'none')) return;

		const cost = GodzamokXtreme.calcTotalBuybackCost();
		const cps = Game.cookiesPsRaw;
		const ratio = cps > 0 ? cost / cps : Infinity;
		const pctDisplay = isFinite(ratio) ? Beautify(Math.round(ratio * 100)) : '∞';
		const costDisplay = Beautify(cost);

		const bodyHtml =
			'<h3 style="margin:0 0 8px;">' + loc("gx_warn_title") + '</h3>' +
			'<p style="margin:0 0 4px; opacity:0.85;">' +
			loc("gx_warn_body").replace('%PCT%', pctDisplay).replace('%COST%', costDisplay) +
			'</p>' +
			'<p style="margin:0 0 4px; font-size:11px; opacity:0.55;">' +
			loc("gx_warn_threshold_hint").replace('%THRESH%', Math.round(GodzamokXtreme.WARN_COST_CPS_RATIO * 100)) +
			'</p>' +
			'<p style="margin:0 0 4px; font-size:11px;">' +
			'<label style="display:inline-flex; gap:5px; cursor:pointer;">' +
			'<input type="checkbox" id="gx_warn_suppress_checkbox" style="width:auto; cursor:pointer;">' +
			loc("gx_warn_suppress_session") +
			'</label>' +
			'</p>';

		Game.Prompt(
			bodyHtml,
			[
				[loc("gx_warn_calculate_now"),
					'Game.ClosePrompt(); GodzamokXtreme.calculateSafeSellUnits();',
					'float:left'],
				[loc("gx_warn_skip"),
					'Game.ClosePrompt(); GodzamokXtreme._applyWarningSuppressAndRun();',
					'float:center'],
				[loc("gx_cancel"),
					'Game.ClosePrompt(); GodzamokXtreme.cancelLoop();',
					'float:right']
			]
		);
	};

	// Called when user clicks Skip — checks suppress checkbox, then runs
	GodzamokXtreme._applyWarningSuppressAndRun = function () {
		const checkbox = document.getElementById('gx_warn_suppress_checkbox');
		if (checkbox && checkbox.checked) {
			GodzamokXtreme._warningSuppressed = true;
		}
		GodzamokXtreme._runCoreExecute();
	};

	//***********************************
	//    SCRIPT EXECUTION
	//***********************************

	// Geometric series sum: price of buying `count` units starting from `fromAmount`.
	// forceFormula=true: always use the geometric series (e.g. for cost estimates outside runCore).
	// forceFormula=false (default): falls back to building.getSumPrice when advancedOptimization is off.
	function calcSumPrice(building, fromAmount, count, alwaysFast = false) {
		if (!alwaysFast && !GodzamokXtreme.config.advancedOptimization) {
			return building.getSumPrice(count); // original implementation
		}
		if (count <= 0) return 0;
		const base = building.basePrice;
		const r = Game.priceIncrease;
		const start = Math.max(0, fromAmount - (building.free || 0));
		const price = base * Math.pow(r, start) * (Math.pow(r, count) - 1) / (r - 1);
		return Math.ceil(Game.modifyBuildingPrice(building, price));
	}

	// Returns true if a placement confirmation prompt should be shown before placing Godzamok
	GodzamokXtreme.needsPlacementConfirm = function () {
		return !GodzamokXtreme.isGodzamokActivate()
			&& GodzamokXtreme.config.autoSwitchGods
			&& Game.Objects.Temple.minigameLoaded
			&& Game.Objects.Temple.minigame.swaps >= 1;
	};

	// Shows a confirmation prompt before placing Godzamok into the selected temple slot
	GodzamokXtreme.promptPlacementConfirm = function () {
		const promptAnchor = l('promptAnchor');
		if (promptAnchor && (promptAnchor.style.display !== '' && promptAnchor.style.display !== 'none')) return;

		const slotIndex = GodzamokXtreme.config.selectedSlot - 1;
		const slotNames = Game.Objects.Temple.minigame.slotNames;
		const slotName = slotNames && slotNames[slotIndex] ? slotNames[slotIndex] : String(GodzamokXtreme.config.selectedSlot);
		const bodyHtml =
			'<h3 style="margin:0 0 8px;">' + loc("gx_confirm_place_godzamok_title") + '</h3>' +
			'<p style="margin:0 0 4px; opacity:0.85;">' +
			loc("gx_confirm_place_godzamok_body").replace('%1', slotName) +
			'</p>';
		Game.Prompt(
			bodyHtml,
			[
				[loc("gx_yes"), 'GodzamokXtreme._runAfterPlacementConfirm(); Game.ClosePrompt();', 'float:left'],
				[loc("gx_cancel"), 'GodzamokXtreme.cancelLoop(); Game.ClosePrompt();', 'float:right']
			]
		);
	};

	// Entry point: checks cost vs CPS, shows warning if needed, otherwise executes
	GodzamokXtreme.runCore = function () {
		if (GodzamokXtreme.needsPlacementConfirm()) {
			GodzamokXtreme.promptPlacementConfirm();
			return;
		}

		GodzamokXtreme._continueRunCore();
	};

	// Called after the user confirms placing Godzamok
	GodzamokXtreme._runAfterPlacementConfirm = function () {
		GodzamokXtreme.setGodzamok();
		GodzamokXtreme._continueRunCore();
	};

	// Continues runCore after Godzamok placement is handled
	GodzamokXtreme._continueRunCore = function () {
		GodzamokXtreme.setGodzamok(); // Ensure Godzamok is active if autoSwitch is on

		if (!GodzamokXtreme.isGodzamokActivate()) return;

		// Check if at least one building is selected
		const anySelected = GodzamokXtreme.config.buildings.some(b => b && b.enabled);
		if (!anySelected) {
			Game.Popup(loc("gx_no_buildings_selected"));
			return;
		}

		const cps = Game.cookiesPsRaw;
		if (cps > 0 && !GodzamokXtreme._warningSuppressed) {
			const cost = GodzamokXtreme.calcTotalBuybackCost();
			if (cost / cps > GodzamokXtreme.WARN_COST_CPS_RATIO) {
				GodzamokXtreme.promptSellWarning();
				return;
			}
		}

		GodzamokXtreme._runCoreExecute();
	};

	// Actual sell/buyback logic — called directly after user confirms warning or cost is safe
	GodzamokXtreme._runCoreExecute = function () {
		// Main logic that sells selected buildings and optionally buys them back
		const originalBuyMode = Game.buyMode;
		Game.buyMode = GodzamokXtreme.BuyMode.BUY; // Force "buy" mode to ensure correct purchase behavior

		//*****************************************************
		// ====== Patch game functions for bulk sell/buy ======
		//*****************************************************

		// Suppress refreshes while the operation is in progress
		const originalRefresh = {};

		// Always: suppress refresh
		Game.ObjectsById.forEach((building, i) => {
			originalRefresh[i] = building.refresh;
			building.refresh = function () { };
		});

		// Advanced optimization
		const originalBuyFunction = {};
		const originalSellFunction = {};
		let priceMult = 1;
		let originalModifyBuildingPrice = null;
		let originalUnlockTiered = null;

		if (GodzamokXtreme.config.advancedOptimization) {
			// Cache the price modifier once (pass `price=1` to get the pure multiplier)
			priceMult = Game.modifyBuildingPrice(Game.ObjectsById[0], 1);
			originalModifyBuildingPrice = Game.modifyBuildingPrice;
			Game.modifyBuildingPrice = function (building, price) { return price * priceMult; };

			originalUnlockTiered = Game.UnlockTiered;
			Game.UnlockTiered = function () { };

			Game.ObjectsById.forEach((building, i) => {
				originalBuyFunction[i] = building.buyFunction;
				originalSellFunction[i] = building.sellFunction;
				building.buyFunction = null;
				building.sellFunction = null;

				const _base = building.basePrice;
				const _r = Game.priceIncrease;
				const _free = building.free;
				building._origGetPrice = building.getPrice;
				building.getPrice = function () {
					return Math.ceil(_base * Math.pow(_r, Math.max(0, this.amount - _free)) * priceMult);
				};
			});
		}

		//*****************************************************
		// === Patch game functions for bulk sell/buy (End) ===
		//*****************************************************

		const isPercentSellMode = GodzamokXtreme.config.sellMode === GodzamokXtreme.SellMode.PERCENT;
		const buybackEnabled = GodzamokXtreme.config.buybackEnabled;
		const buybackType = GodzamokXtreme.config.buybackType;
		const showInfo = GodzamokXtreme.config.showSellBuyInfo;

		Game.ObjectsById.forEach((building, i) => {
			const config = GodzamokXtreme.config.buildings[i];
			if (!config || !config.enabled) return;

			let amountToSell = config.sellUnits;
			if (isPercentSellMode) {
				const sellPercent = Math.max(0, Math.min(config.sellPercent, 100));
				amountToSell = Math.floor(building.amount * (sellPercent / 100));
			}

			if (amountToSell <= 0 || amountToSell > building.amount) return;

			const totalGain = GodzamokXtreme.config.advancedOptimization
				? calcSumPrice(building, building.amount - amountToSell, amountToSell) * building.getSellMultiplier()
				: building.getReverseSumPrice(amountToSell);
			building.sell(amountToSell);  // perform the sale

			let boughtAmount = 0;
			let totalSpent = 0;

			if (buybackEnabled) {
				switch (buybackType) {
					// Buy back as much as totalGain allows
					case GodzamokXtreme.BuybackType.WITH_PROFIT: {
						if (GodzamokXtreme.config.advancedOptimization) {
							let lo = 0, hi = amountToSell;
							while (lo < hi) {
								const mid = Math.ceil((lo + hi) / 2);
								if (calcSumPrice(building, building.amount, mid) <= totalGain) lo = mid;
								else hi = mid - 1;
							}
							boughtAmount = lo;
						} else {
							while (building.getSumPrice(boughtAmount + 1) <= totalGain) {
								boughtAmount++;
							}
						}
						break;
					}
					// Buy back full sold amount
					case GodzamokXtreme.BuybackType.FULL_AMOUNT: {
						boughtAmount = amountToSell;
						break;
					}
					// Buy back fixed percent of sold
					case GodzamokXtreme.BuybackType.PERCENTAGE: {
						const buybackPercent = Math.max(0, Math.min(GodzamokXtreme.config.buybackPercent, 100));
						boughtAmount = Math.floor(amountToSell * (buybackPercent / 100));
						break;
					}
				}

				if (showInfo) totalSpent = GodzamokXtreme.config.advancedOptimization
					? calcSumPrice(building, building.amount, boughtAmount)
					: building.getSumPrice(boughtAmount);
				building.buy(boughtAmount);
			}

			if (showInfo) {
				let message =
					loc("gx_sold") + ` <span style="color:#f66">${amountToSell}</span> ` + loc("gx_for") + ` <span style="color:#f66">${Beautify(totalGain)}</span>`;

				if (buybackEnabled) {
					message += `<br/>`;
					message += loc("gx_bought") + ` <span style="color:#69f">${boughtAmount}</span> ` + loc("gx_for") + ` <span style="color:#69f">${Beautify(totalSpent)}</span>`;
				}

				Game.Notify(building.dname, message, [23, 18], 10);
			}
		});

		//*********************************************
		// ====== Restore patched game functions ======
		//*********************************************

		// Re-enable refreshes and call the function once for each building
		Game.ObjectsById.forEach((building, i) => {
			building.refresh = originalRefresh[i];

			if (GodzamokXtreme.config.advancedOptimization) {
				building.buyFunction = originalBuyFunction[i];
				building.sellFunction = originalSellFunction[i];
				building.getPrice = building._origGetPrice;
				delete building._origGetPrice;
				if (building.buyFunction) building.buyFunction();
				originalUnlockTiered(building);
			}

			building.refresh();
		});

		if (GodzamokXtreme.config.advancedOptimization) {
			Game.modifyBuildingPrice = originalModifyBuildingPrice;
			Game.UnlockTiered = originalUnlockTiered;
		}

		//*****************************************************
		// ====== Restore patched game functions (End) ======
		//*****************************************************

		// Restore original buy mode
		Game.buyMode = originalBuyMode;
	};

	// Updates wrapper function when delay setting is toggled
	GodzamokXtreme.updateRun = function () {
		GodzamokXtreme.run = GodzamokXtreme.config.inputDelayEnabled
			? throttle(GodzamokXtreme.runCore, GodzamokXtreme.config.inputDelayValue)
			: GodzamokXtreme.runCore;
	};

	// Prevents function from being called more than once per delay interval
	function throttle(fn, delay) {
		let lastCall = 0;
		return function (...args) {
			const now = Date.now();
			if (now - lastCall >= delay) {
				lastCall = now;
				fn(...args);
			}
		};
	};

	//***********************************
	//    SAVE / LOAD / RESET CONFIG
	//***********************************

	// Normalizes types in target to match the types in reference (e.g. converts 0/1 to false/true for booleans)
	function getNormalizedTypes(target, reference) {
		const result = Array.isArray(target) ? [...target] : { ...target };

		for (const key in reference) {
			if (!(key in target)) continue;

			if (typeof reference[key] === 'boolean') {
				result[key] = Boolean(target[key]);
			} else if (Array.isArray(reference[key]) && Array.isArray(target[key])) {
				result[key] = target[key].map((item, index) => {
					if (reference[key][index] && typeof item === 'object') {
						return getNormalizedTypes(item, reference[key][index]);
					}
					return item;
				});
			} else if (typeof reference[key] === 'object' && reference[key] !== null) {
				result[key] = getNormalizedTypes(target[key], reference[key]);
			}
		}

		return result;
	}

	// Serializes current config as a JSON string (used by CCSE)
	GodzamokXtreme.save = function () {
		return JSON.stringify(GodzamokXtreme.config);
	};

	// Deserializes JSON config and applies it
	GodzamokXtreme.load = function (str) {
		const defaults = GodzamokXtreme.defaultConfig();
		GodzamokXtreme.config = Object.assign({}, defaults);

		try {
			const parsed = JSON.parse(str);
			if (parsed) {
				GodzamokXtreme.config = getNormalizedTypes(
					Object.assign({}, defaults, parsed),
					defaults
				);
				GodzamokXtreme.config.loopModeEnabled = false;

			}
		} catch (e) {
			console.error("Failed to load GodzamokXtreme config:", e);
		}

		GodzamokXtreme.UpdateStartButton();
		GodzamokXtreme.syncAllSellValues(-1, false);
		GodzamokXtreme.updateRun();
	};

	// Asks the player if they want to reset config
	GodzamokXtreme.confirmResetConfig = function () {
		const bodyHtml =
			'<h3 style="margin:0 0 8px;">' + loc("gx_confirm_reset_title") + '</h3>' +
			'<p style="margin:0 0 4px; opacity:0.85;">' +
			loc("gx_confirm_reset_question", { modName: GodzamokXtreme.name }) +
			'</p>' +
			'<p style="margin:0; font-size:11px; opacity:0.55;">' +
			loc("gx_confirm_reset_hint") +
			'</p>';

		Game.Prompt(
			bodyHtml,
			[
				[loc("gx_yes"), 'GodzamokXtreme.resetConfig();Game.ClosePrompt();', 'float:left'],
				[loc("gx_no"), 0, 'float:right']
			]
		);
	};

	// Applies default config and updates UI
	GodzamokXtreme.resetConfig = function () {
		GodzamokXtreme.config = GodzamokXtreme.defaultConfig();
		GodzamokXtreme.UpdateStartButton();
		GodzamokXtreme.syncAllSellValues(GodzamokXtreme.SellMode.PERCENT);
		GodzamokXtreme.updateRun();
		GodzamokXtreme.save();
		Game.UpdateMenu();
		Game.Popup(loc("gx_settings_reset_popup"));
	};

	//***********************************
	//    MOD REGISTRATION & CCSE LOADER
	//***********************************

	if (CCSE.ConfirmGameVersion(GodzamokXtreme.name, GodzamokXtreme.version, GodzamokXtreme.GameVersion)) {
		Game.registerMod(GodzamokXtreme.name, GodzamokXtreme);
	}
};

// Wait for CCSE to load, then launch the mod
if (!GodzamokXtreme.isLoaded) {
	if (CCSE && CCSE.isLoaded) {
		GodzamokXtreme.launch();
	} else {
		if (!CCSE) var CCSE = {};
		if (!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
		CCSE.postLoadHooks.push(GodzamokXtreme.launch);
	}
};
