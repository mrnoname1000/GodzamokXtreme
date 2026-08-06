//***********************************
//    DEFAULT (English) LOCALIZATION
//***********************************

ModLanguage('*', {
    "gx_toggle_on": "ON",  // Label for enabled state (e.g., toggle switch is ON)
    "gx_toggle_off": "OFF",  // Label for disabled state (e.g., toggle switch is OFF)

    // Buyback options for selling buildings and then rebuying them
    "gx_buyback_total_gain": "Use total gain",  // Use total amount gained from sales
    "gx_buyback_full_amount": "Buy full amount",  // Rebuy full quantity of buildings sold
    "gx_buyback_percentage": "Buy percentage",  // Rebuy a percentage of buildings sold

    // Sell modes for buildings
    "gx_sell_mode_percent": "Percent",  // Selling by percentage of owned buildings
    "gx_sell_mode_units": "Units",  // Selling by fixed number of buildings

    // Notification shown when the mod loads
    "gx_mod_loaded_title": "Godzamok Ultimate loaded!",
    "gx_mod_loaded_desc": "May Godzamok bless you with golden cookies.",

    // "Loop" means repeat the script execution continuously
    "gx_loop": "Loop",

    // Headers for different sections of the mod menu/UI
    "gx_header_utilities": "Utilities",
    "gx_header_input_hotkeys": "Input & Hotkeys",
    "gx_header_temple": "Temple",  // Refers to the Temple building in Cookie Clicker
    "gx_header_buyback": "Buyback",
    "gx_header_sell": "Sell",

    // Debug info toggle prefix shown before ON/OFF
    "gx_debug_info_prefix": "Show Debug Info: ",
    // Label describing the debug info feature
    "gx_debug_info_label": "Show summary info (how many buildings were sold/bought) after each script run",

    // Button label for resetting all mod config to defaults
    "gx_reset_config": "Reset Config",

    // Button toggles to show/hide UI buttons
    "gx_button_near_cookie": "Button near big cookie: ",
    "gx_button_in_temple": "Button in Temple: ",  // Temple building in game
    "gx_display_buttons_label": "Display buttons for script activation",

    // Toggle for showing a special Loop button for repeated script runs
    "gx_show_loop_button": "Show Loop Button: ",
    "gx_show_loop_button_label": "Display extra button for repeated script execution on hold",

    // Hotkey G toggle label
    "gx_hotkey_g": "Hotkey G: ",
    // Label for the setting that allows triggering the script by pressing the G key (hotkey toggle option)
    "gx_hotkey_g_label": "Run script when pressing G",

    // Input delay toggle label - delays input events
    "gx_input_delay": "Input delay: ",
    // Label describing the delay applied between actions (in milliseconds)
    "gx_input_delay_label": "Apply delay between actions",
    // Label for user-defined delay duration between each run cycle
    "gx_delay_duration_label": "Set custom delay between runs",

    // Auto-switch toggle to automatically assign the Godzamok spirit if inactive
    "gx_auto_switch_god": "Auto-switch to Godzamok: ",
    "gx_auto_switch_god_label": "Automatically assign Godzamok if not active",

    // Label for selecting which Temple slot Godzamok will occupy
    "gx_temple_slot_label": "Temple slot where Godzamok will be placed",

    // Buyback toggle label
    "gx_buyback": "Buyback: ",
    // Description label for instant rebuying buildings after selling
    "gx_buyback_label": "Instantly rebuy buildings after selling",
    // Label for selecting the buyback strategy
    "gx_buyback_strategy_label": "Buyback strategy",

    // Label for setting buyback percentage (used only with percentage strategy)
    "gx_buyback_percent": "Buyback Percent",
    "gx_buyback_percent_label": "Only used when \"Buy percentage\" strategy is selected",

    // Filters for building list in the UI
    "gx_show_only_enabled": "Show Only Enabled: ",  // Show only buildings that are enabled/active
    "gx_hide_empty": "Hide Empty: ",  // Hide buildings with zero units owned
    "gx_building_list_filters_label": "Filters for the building list",

    // Labels related to selling buildings
    "gx_sell_mode_label": "Sell Mode",  // Mode of selling (percent or units)
    "gx_preset_percent_label": "Preset % for all buildings",  // Predefined sell percent applied to all buildings
    "gx_preset_units_label": "Preset units to add per building",  // Predefined sell units added per building

    "gx_calc_safe_sell": "Calculate Safe Sell",  // Button to trigger automatic calculation of a safe amount of buildings to sell and rebuy
    "gx_calc_safe_sell_label": "Auto-calculate safe sell amounts (%RATIO%% CPS raw)",  // Description label near the button – explains the logic (uses %RATIO%% of raw CPS as budget)

    "gx_confirm_safe_sell": "Calculate safe sell amounts using <b>%RATIO%%</b> of raw CPS as the budget?",  // Confirmation prompt before executing the sell-buy operation
    "gx_calc_safe_sell_hint": "The calculation may temporarily sell and immediately rebuy the selected buildings to determine safe values.", // Safe sell calculation confirmation dialog

    // Labels used near inputs for selling buildings
    "gx_sell_label": "Sell:",
    "gx_or": "or",  // Used between percent and units inputs
    "gx_units": "units",

    // Labels for summary message displaying amounts sold and bought
    "gx_sold": "Sold:",  // Indicates how many buildings were sold
    "gx_bought": "Bought:",  // Indicates how many buildings were bought back
    "gx_for": "for",  // Used to specify the price/amount paid or received

    // Confirmation dialog texts for resetting config
    "gx_confirm_reset_title": "Confirm reset",
    "gx_confirm_reset_question": "Reset Godzamok Ultimate's config to the default settings?",
    "gx_confirm_reset_hint": "All current settings will be lost and restored to their default values.",
    "gx_yes": "Yes",  // Affirmative answer button text
    "gx_no": "No",  // Negative answer button text

    // Popup notification text shown after config reset
    "gx_settings_reset_popup": "Godzamok Ultimate settings reset.",  // Confirmation popup message

    // Popup notification text shown when no buildings are selected
    "gx_no_buildings_selected": "No buildings selected!",

    // Advanced Optimization
    "gx_advanced_opt": "Advanced Optimization: ",
    "gx_advanced_opt_label": "Cache price calculations and suppress game hooks during bulk operations. May affect game mechanics if updated.",

    // Warning dialog shown before executing a potentially expensive buyback
    "gx_warn_title": "Expensive buyback detected",
    "gx_warn_body": "Buying back sold buildings will cost <b>%COST%</b> — that's <b>%PCT%%</b> of your CPS. Consider calculating safe sell values first.",
    "gx_warn_threshold_hint": "Warning threshold: %THRESH%% of raw CPS.",
    "gx_warn_calculate_now": "Calculate",
    "gx_warn_skip": "Skip",

    // Store building markers — icon shown on selected buildings in the right-side store panel
    "gx_store_markers": "Store markers: ",
    "gx_store_markers_label": "Show a Godzamok icon on buildings selected for selling in the store panel.",
});

//***********************************
//    CHINESE (Simplified) LOCALIZATION
//***********************************

ModLanguage('ZH-CN', {
    "gx_toggle_on": "开",
    "gx_toggle_off": "关",

    "gx_buyback_total_gain": "使用总收益",
    "gx_buyback_full_amount": "全部买回",
    "gx_buyback_percentage": "按百分比买回",

    "gx_sell_mode_percent": "百分比",
    "gx_sell_mode_units": "数量",

    "gx_mod_loaded_title": "Godzamok Ultimate 已加载！",
    "gx_mod_loaded_desc": "愿 Godzamok 赐你金色曲奇。",

    "gx_loop": "循环",

    "gx_header_utilities": "工具",
    "gx_header_input_hotkeys": "输入 & 快捷键",
    "gx_header_temple": "神庙",
    "gx_header_buyback": "回购",
    "gx_header_sell": "出售",

    "gx_debug_info_prefix": "显示调试信息：",
    "gx_debug_info_label": "显示脚本运行后建筑买卖摘要",

    "gx_reset_config": "重置配置",

    "gx_button_near_cookie": "大曲奇按钮：",
    "gx_button_in_temple": "神庙按钮：",
    "gx_display_buttons_label": "显示激活脚本按钮",

    "gx_show_loop_button": "显示循环按钮：",
    "gx_show_loop_button_label": "长按显示额外循环按钮",

    "gx_hotkey_g": "快捷键 G：",
    "gx_hotkey_g_label": "按下 G 键时运行脚本",

    "gx_input_delay": "输入延迟：",
    "gx_input_delay_label": "动作间应用延迟（毫秒）",
    "gx_delay_duration_label": "设置自定义运行间隔延迟",

    "gx_auto_switch_god": "自动切换 Godzamok：",
    "gx_auto_switch_god_label": "未激活时自动分配 Godzamok",

    "gx_temple_slot_label": "Godzamok 所在神庙槽位",

    "gx_buyback": "回购：",
    "gx_buyback_label": "卖出后立即买回建筑",
    "gx_buyback_strategy_label": "回购策略",

    "gx_buyback_percent": "回购百分比",
    "gx_buyback_percent_label": "仅用于“按百分比买回”策略",

    "gx_show_only_enabled": "仅显示启用：",
    "gx_hide_empty": "隐藏空建筑：",
    "gx_building_list_filters_label": "建筑列表过滤",

    "gx_sell_mode_label": "出售方式",
    "gx_preset_percent_label": "预设百分比",
    "gx_preset_units_label": "预设数量",

    "gx_calc_safe_sell": "计算安全出售",
    "gx_calc_safe_sell_label": "自动计算安全出售数量（原始CPS的%RATIO%%）",
    "gx_confirm_safe_sell": "使用原始CPS的<b>%RATIO%%</b>作为预算计算安全出售数量？",
    "gx_calc_safe_sell_hint": "计算过程可能会临时出售并立即买回所选建筑以确定安全值。",

    "gx_sell_label": "出售：",
    "gx_or": "或",
    "gx_units": "个",

    "gx_sold": "卖出：",
    "gx_bought": "买回：",
    "gx_for": "花费",

    "gx_confirm_reset_title": "确认重置",
    "gx_confirm_reset_question": "重置 Godzamok Ultimate 配置为默认？",
    "gx_confirm_reset_hint": "所有当前设置将丢失并恢复为默认值。",
    "gx_yes": "是",
    "gx_no": "否",

    "gx_settings_reset_popup": "Godzamok Ultimate 配置已重置。",

    "gx_no_buildings_selected": "未选择任何建筑！",

    "gx_advanced_opt": "高级优化：",
    "gx_advanced_opt_label": "批量操作期间缓存价格计算并抑制游戏钩子。更新后可能影响游戏机制。",

    "gx_warn_title": "检测到昂贵的回购",
    "gx_warn_body": "买回已售建筑将花费 <b>%COST%</b> — 占您CPS的 <b>%PCT%%</b>。建议先计算安全出售数量。",
    "gx_warn_threshold_hint": "警告阈值：原始CPS的 %THRESH%%。",
    "gx_warn_calculate_now": "计算",
    "gx_warn_skip": "跳过",

    "gx_store_markers": "商店标记：",
    "gx_store_markers_label": "在商店面板中为选定出售的建筑显示戈扎莫克图标。",
});

//***********************************
//    DEUTSCH (German) LOCALIZATION
//***********************************

ModLanguage('DE', {
    "gx_toggle_on": "EIN",
    "gx_toggle_off": "AUS",

    "gx_buyback_total_gain": "Gesamterlös verwenden",
    "gx_buyback_full_amount": "Volle Menge zurückkaufen",
    "gx_buyback_percentage": "Prozentsatz zurückkaufen",

    "gx_sell_mode_percent": "Prozent",
    "gx_sell_mode_units": "Einheiten",

    "gx_mod_loaded_title": "Godzamok Ultimate geladen!",
    "gx_mod_loaded_desc": "Möge Godzamok dich mit goldenen Keksen segnen.",

    "gx_loop": "Schleife",

    "gx_header_utilities": "Werkzeuge",
    "gx_header_input_hotkeys": "Eingabe & Tastenkürzel",
    "gx_header_temple": "Tempel",
    "gx_header_buyback": "Rückkauf",
    "gx_header_sell": "Verkauf",

    "gx_debug_info_prefix": "Debug-Info anzeigen: ",
    "gx_debug_info_label": "Zeigt eine Zusammenfassung (verkaufte/gekaufte Gebäude) nach jedem Durchlauf",

    "gx_reset_config": "Konfiguration zurücksetzen",

    "gx_button_near_cookie": "Schaltfläche beim großen Keks: ",
    "gx_button_in_temple": "Schaltfläche im Tempel: ",
    "gx_display_buttons_label": "Schaltflächen zur Skriptausführung anzeigen",

    "gx_show_loop_button": "Schleifenschaltfläche anzeigen: ",
    "gx_show_loop_button_label": "Zusätzliche Schaltfläche für wiederholte Ausführung anzeigen",

    "gx_hotkey_g": "Tastenkürzel G: ",
    "gx_hotkey_g_label": "Skript mit der Taste G ausführen",

    "gx_input_delay": "Eingabeverzögerung: ",
    "gx_input_delay_label": "Verzögerung zwischen Aktionen anwenden",
    "gx_delay_duration_label": "Benutzerdefinierte Verzögerung zwischen Ausführungen festlegen",

    "gx_auto_switch_god": "Automatisch zu Godzamok wechseln: ",
    "gx_auto_switch_god_label": "Godzamok automatisch zuweisen, wenn nicht aktiv",

    "gx_temple_slot_label": "Tempelplatz, an dem Godzamok platziert wird",

    "gx_buyback": "Rückkauf: ",
    "gx_buyback_label": "Gebäude nach Verkauf sofort zurückkaufen",
    "gx_buyback_strategy_label": "Rückkaufstrategie",

    "gx_buyback_percent": "Rückkauf-Prozentsatz",
    "gx_buyback_percent_label": "Nur bei Auswahl der Strategie „Prozentsatz zurückkaufen“ verwendet",

    "gx_show_only_enabled": "Nur aktivierte anzeigen: ",
    "gx_hide_empty": "Leere ausblenden: ",
    "gx_building_list_filters_label": "Filter für Gebäudeliste",

    "gx_sell_mode_label": "Verkaufsmodus",
    "gx_preset_percent_label": "Voreingestellter % für alle Gebäude",
    "gx_preset_units_label": "Voreingestellte Einheiten pro Gebäude",

    "gx_calc_safe_sell": "Sicheren Verkauf berechnen",
    "gx_calc_safe_sell_label": "Sichere Verkaufsmenge automatisch berechnen (%RATIO% % rohes CPS)",
    "gx_confirm_safe_sell": "Sichere Verkaufsmenge mit <b>%RATIO%%</b> des rohen CPS als Budget berechnen?",
    "gx_calc_safe_sell_hint": "Die Berechnung kann die ausgewählten Gebäude vorübergehend verkaufen und sofort zurückkaufen, um sichere Werte zu ermitteln.",

    "gx_sell_label": "Verkauf:",
    "gx_or": "oder",
    "gx_units": "Einheiten",

    "gx_sold": "Verkauft:",
    "gx_bought": "Gekauft:",
    "gx_for": "für",

    "gx_confirm_reset_title": "Zurücksetzen bestätigen",
    "gx_confirm_reset_question": "Konfiguration von Godzamok Ultimate auf Standardeinstellungen zurücksetzen?",
    "gx_confirm_reset_hint": "Alle aktuellen Einstellungen gehen verloren und werden auf die Standardwerte zurückgesetzt.",
    "gx_yes": "Ja",
    "gx_no": "Nein",

    "gx_settings_reset_popup": "Godzamok Ultimate-Einstellungen wurden zurückgesetzt.",

    "gx_no_buildings_selected": "Keine Gebäude ausgewählt!",

    "gx_advanced_opt": "Erweiterte Optimierung: ",
    "gx_advanced_opt_label": "Cached Preisberechnungen und unterdrückt Game-Hooks während Massenoperationen. Kann nach Updates die Spielmechanik beeinflussen.",

    "gx_warn_title": "Teurer Rückkauf erkannt",
    "gx_warn_body": "Das Zurückkaufen der verkauften Gebäude kostet <b>%COST%</b> — das sind <b>%PCT%%</b> deines CPS. Erwäge zuerst sichere Verkaufswerte zu berechnen.",
    "gx_warn_threshold_hint": "Warnschwelle: %THRESH%% des rohen CPS.",
    "gx_warn_calculate_now": "Berechnen",
    "gx_warn_skip": "Überspringen",

    "gx_store_markers": "Shop-Markierungen: ",
    "gx_store_markers_label": "Zeigt ein Godzamok-Symbol auf Gebäuden, die im Shop-Panel zum Verkauf ausgewählt sind.",
});

//***********************************
//    SPANISH LOCALIZATION
//***********************************

ModLanguage('ES', {
    "gx_toggle_on": "ENC",
    "gx_toggle_off": "OFF",

    "gx_buyback_total_gain": "Usar ganancia total",
    "gx_buyback_full_amount": "Comprar cantidad total",
    "gx_buyback_percentage": "Comprar porcentaje",

    "gx_sell_mode_percent": "Porcentaje",
    "gx_sell_mode_units": "Unidades",

    "gx_mod_loaded_title": "¡Godzamok Ultimate cargado!",
    "gx_mod_loaded_desc": "Que Godzamok te bendiga con galletas doradas.",

    "gx_loop": "Bucle",

    "gx_header_utilities": "Utilidades",
    "gx_header_input_hotkeys": "Entrada y Teclas rápidas",
    "gx_header_temple": "Templo",
    "gx_header_buyback": "Recompra",
    "gx_header_sell": "Venta",

    "gx_debug_info_prefix": "Mostrar información de depuración: ",
    "gx_debug_info_label": "Mostrar resumen (cuántos edificios fueron vendidos/comprados) después de cada ejecución",

    "gx_reset_config": "Restablecer configuración",

    "gx_button_near_cookie": "Botón cerca de la galleta grande: ",
    "gx_button_in_temple": "Botón en el Templo: ",
    "gx_display_buttons_label": "Mostrar botones para activar el script",

    "gx_show_loop_button": "Mostrar botón de bucle: ",
    "gx_show_loop_button_label": "Mostrar botón adicional para ejecución repetida del script",

    "gx_hotkey_g": "Tecla G: ",
    "gx_hotkey_g_label": "Ejecutar el script al presionar G",

    "gx_input_delay": "Retraso de entrada: ",
    "gx_input_delay_label": "Aplicar retraso entre acciones",
    "gx_delay_duration_label": "Establecer retraso personalizado entre ejecuciones",

    "gx_auto_switch_god": "Cambio automático a Godzamok: ",
    "gx_auto_switch_god_label": "Asignar automáticamente a Godzamok si no está activo",

    "gx_temple_slot_label": "Espacio del templo donde se colocará Godzamok",

    "gx_buyback": "Recompra: ",
    "gx_buyback_label": "Volver a comprar edificios inmediatamente después de vender",
    "gx_buyback_strategy_label": "Estrategia de recompra",

    "gx_buyback_percent": "Porcentaje de recompra",
    "gx_buyback_percent_label": "Solo se usa con la estrategia de \"comprar porcentaje\"",

    "gx_show_only_enabled": "Mostrar solo activados: ",
    "gx_hide_empty": "Ocultar vacíos: ",
    "gx_building_list_filters_label": "Filtros para la lista de edificios",

    "gx_sell_mode_label": "Modo de venta",
    "gx_preset_percent_label": "Porcentaje predefinido para todos los edificios",
    "gx_preset_units_label": "Unidades predefinidas para agregar por edificio",

    "gx_calc_safe_sell": "Calcular Venta Segura",
    "gx_calc_safe_sell_label": "Calcular automáticamente cantidades seguras para vender (%RATIO%% CPS bruto)",
    "gx_confirm_safe_sell": "¿Calcular cantidades seguras usando <b>%RATIO%%</b> del CPS bruto como presupuesto?",
    "gx_calc_safe_sell_hint": "El cálculo puede vender temporalmente y recomprar inmediatamente los edificios seleccionados para determinar valores seguros.",

    "gx_sell_label": "Vender:",
    "gx_or": "o",
    "gx_units": "unidades",

    "gx_sold": "Vendido:",
    "gx_bought": "Comprado:",
    "gx_for": "por",

    "gx_confirm_reset_title": "Confirmar restablecimiento",
    "gx_confirm_reset_question": "¿Restablecer la configuración de Godzamok Ultimate a los valores predeterminados?",
    "gx_confirm_reset_hint": "Todos los ajustes actuales se perderán y se restaurarán a sus valores predeterminados.",
    "gx_yes": "Sí",
    "gx_no": "No",

    "gx_settings_reset_popup": "Configuración de Godzamok Ultimate restablecida.",

    "gx_no_buildings_selected": "¡Ningún edificio seleccionado!",

    "gx_advanced_opt": "Optimización avanzada: ",
    "gx_advanced_opt_label": "Almacena en caché los cálculos de precio y suprime los hooks del juego durante operaciones masivas. Puede afectar las mecánicas tras actualizaciones.",

    "gx_warn_title": "Recompra costosa detectada",
    "gx_warn_body": "Volver a comprar los edificios vendidos costará <b>%COST%</b> — eso es el <b>%PCT%%</b> de tu CPS. Considera calcular primero los valores de venta seguros.",
    "gx_warn_threshold_hint": "Umbral de advertencia: %THRESH%% del CPS bruto.",
    "gx_warn_calculate_now": "Calcular",
    "gx_warn_skip": "Omitir",

    "gx_store_markers": "Marcadores de tienda: ",
    "gx_store_markers_label": "Muestra un ícono de Godzamok en los edificios seleccionados para vender en el panel de la tienda.",
});

//***********************************
//    LOCALISATION FRANÇAIS
//***********************************

ModLanguage('FR', {
    "gx_toggle_on": "ON",
    "gx_toggle_off": "OFF",

    "gx_buyback_total_gain": "Utiliser gain total",
    "gx_buyback_full_amount": "Racheter total",
    "gx_buyback_percentage": "Racheter %",

    "gx_sell_mode_percent": "Pourcentage",
    "gx_sell_mode_units": "Unités",

    "gx_mod_loaded_title": "Godzamok Ultimate chargé !",
    "gx_mod_loaded_desc": "Que Godzamok vous bénisse avec des cookies dorés.",

    "gx_loop": "Boucle",

    "gx_header_utilities": "Utilitaires",
    "gx_header_input_hotkeys": "Entrée & Raccourcis",
    "gx_header_temple": "Temple",
    "gx_header_buyback": "Rachat",
    "gx_header_sell": "Vente",

    "gx_debug_info_prefix": "Afficher debug : ",
    "gx_debug_info_label": "Afficher résumé (ventes/achats) après exécution",

    "gx_reset_config": "Réinitialiser",

    "gx_button_near_cookie": "Bouton près cookie : ",
    "gx_button_in_temple": "Bouton dans Temple : ",
    "gx_display_buttons_label": "Afficher boutons activation",

    "gx_show_loop_button": "Afficher bouton boucle : ",
    "gx_show_loop_button_label": "Bouton pour exécution répétée en maintien",

    "gx_hotkey_g": "Touche G : ",
    "gx_hotkey_g_label": "Exécuter le script en appuyant sur G",

    "gx_input_delay": "Délai entrée : ",
    "gx_input_delay_label": "Appliquer délai entre actions",
    "gx_delay_duration_label": "Définir un délai personnalisé entre les exécutions",

    "gx_auto_switch_god": "Auto-switch Godzamok : ",
    "gx_auto_switch_god_label": "Attribuer Godzamok si inactif",

    "gx_temple_slot_label": "Emplacement Godzamok au Temple",

    "gx_buyback": "Rachat : ",
    "gx_buyback_label": "Racheter instantanément après vente",
    "gx_buyback_strategy_label": "Stratégie rachat",

    "gx_buyback_percent": "Pourcentage rachat",
    "gx_buyback_percent_label": "Utilisé seulement avec \"Racheter %\"",

    "gx_show_only_enabled": "Afficher activés : ",
    "gx_hide_empty": "Cacher vides : ",
    "gx_building_list_filters_label": "Filtres liste bâtiments",

    "gx_sell_mode_label": "Mode vente",
    "gx_preset_percent_label": "% prédef. pour tous",
    "gx_preset_units_label": "Unités prédef. par bâtiment",

    "gx_calc_safe_sell": "Calculer la vente sécurisée",
    "gx_calc_safe_sell_label": "Calcul automatique des montants sécurisés à vendre (%RATIO% % du CPS brut)",
    "gx_confirm_safe_sell": "Calculer les montants sécurisés avec <b>%RATIO%%</b> du CPS brut comme budget ?",
    "gx_calc_safe_sell_hint": "Le calcul peut temporairement vendre et racheter immédiatement les bâtiments sélectionnés afin de déterminer des valeurs sûres.",

    "gx_sell_label": "Vendre :",
    "gx_or": "ou",
    "gx_units": "unités",

    "gx_sold": "Vendu :",
    "gx_bought": "Acheté :",
    "gx_for": "pour",

    "gx_confirm_reset_title": "Confirmer la réinitialisation",
    "gx_confirm_reset_question": "Réinitialiser la config de Godzamok Ultimate ?",
    "gx_confirm_reset_hint": "Tous les paramètres actuels seront perdus et restaurés à leurs valeurs par défaut.",
    "gx_yes": "Oui",
    "gx_no": "Non",

    "gx_settings_reset_popup": "Config Godzamok Ultimate réinitialisée.",

    "gx_no_buildings_selected": "Aucun bâtiment sélectionné !",

    "gx_advanced_opt": "Optimisation avancée : ",
    "gx_advanced_opt_label": "Met en cache les calculs de prix et supprime les hooks du jeu lors des opérations en masse. Peut affecter les mécaniques de jeu après une mise à jour.",

    "gx_warn_title": "Rachat coûteux détecté",
    "gx_warn_body": "Racheter les bâtiments vendus coûtera <b>%COST%</b> — soit <b>%PCT%%</b> de votre CPS. Envisagez de calculer d'abord des valeurs de vente sûres.",
    "gx_warn_threshold_hint": "Seuil d'avertissement : %THRESH%% du CPS brut.",
    "gx_warn_calculate_now": "Calculer",
    "gx_warn_skip": "Ignorer",

    "gx_store_markers": "Marqueurs de boutique : ",
    "gx_store_markers_label": "Affiche une icône Godzamok sur les bâtiments sélectionnés pour la vente dans le panneau de la boutique.",
});

//***********************************
//   PORTUGUESE (BRAZIL) LOCALIZATION
//***********************************

ModLanguage('PT-BR', {
    "gx_toggle_on": "LIG",
    "gx_toggle_off": "DESL",

    "gx_buyback_total_gain": "Usar ganho total",
    "gx_buyback_full_amount": "Recomprar total",
    "gx_buyback_percentage": "Recomprar %",

    "gx_sell_mode_percent": "%",
    "gx_sell_mode_units": "Unids",

    "gx_mod_loaded_title": "Godzamok Ultimate carregado!",
    "gx_mod_loaded_desc": "Que Godzamok te abençoe com cookies dourados.",

    "gx_loop": "Loop",

    "gx_header_utilities": "Utilitários",
    "gx_header_input_hotkeys": "Entrada & Atalhos",
    "gx_header_temple": "Templo",
    "gx_header_buyback": "Recompra",
    "gx_header_sell": "Vender",

    "gx_debug_info_prefix": "Mostrar Debug: ",
    "gx_debug_info_label": "Mostrar resumo (vendas/compras) após execução",

    "gx_reset_config": "Resetar",

    "gx_button_near_cookie": "Botão perto cookie: ",
    "gx_button_in_temple": "Botão no templo: ",
    "gx_display_buttons_label": "Mostrar botões para ativar script",

    "gx_show_loop_button": "Mostrar botão Loop: ",
    "gx_show_loop_button_label": "Botão extra para execução repetida",

    "gx_hotkey_g": "Hotkey G: ",
    "gx_hotkey_g_label": "Executar o script ao pressionar G",

    "gx_input_delay": "Atraso: ",
    "gx_input_delay_label": "Aplicar atraso entre ações",
    "gx_delay_duration_label": "Definir atraso personalizado entre execuções",

    "gx_auto_switch_god": "Auto mudar p/ Godzamok: ",
    "gx_auto_switch_god_label": "Mudar automaticamente se inativo",

    "gx_temple_slot_label": "Slot do templo para Godzamok",

    "gx_buyback": "Recompra: ",
    "gx_buyback_label": "Recomprar prédio após vender",
    "gx_buyback_strategy_label": "Estratégia de recompra",

    "gx_buyback_percent": "% Recompra",
    "gx_buyback_percent_label": "Usado só com estratégia '%'",

    "gx_show_only_enabled": "Mostrar só ativos: ",
    "gx_hide_empty": "Esconder vazios: ",
    "gx_building_list_filters_label": "Filtros da lista",

    "gx_sell_mode_label": "Modo venda",
    "gx_preset_percent_label": "% padrão para todos",
    "gx_preset_units_label": "Unids padrão por prédio",

    "gx_calc_safe_sell": "Calcular Venda Segura",
    "gx_calc_safe_sell_label": "Calcular automaticamente a quantidade segura para vender (%RATIO%% do CPS bruto)",
    "gx_confirm_safe_sell": "Calcular quantidades seguras usando <b>%RATIO%%</b> do CPS bruto como orçamento?",
    "gx_calc_safe_sell_hint": "O cálculo pode vender temporariamente e recomprar imediatamente os prédios selecionados para determinar valores seguros.",

    "gx_sell_label": "Vender:",
    "gx_or": "ou",
    "gx_units": "unids",

    "gx_sold": "Vendidos:",
    "gx_bought": "Comprados:",
    "gx_for": "por",

    "gx_confirm_reset_title": "Confirmar reset",
    "gx_confirm_reset_question": "Resetar config do Godzamok Ultimate para padrão?",
    "gx_confirm_reset_hint": "Todas as configurações atuais serão perdidas e restauradas para os valores padrão.",
    "gx_yes": "Sim",
    "gx_no": "Não",

    "gx_settings_reset_popup": "Configurações Godzamok Ultimate resetadas.",

    "gx_no_buildings_selected": "Nenhum edifício selecionado!",

    "gx_advanced_opt": "Otimização avançada: ",
    "gx_advanced_opt_label": "Armazena em cache os cálculos de preço e suprime os hooks do jogo durante operações em massa. Pode afetar as mecânicas após atualizações.",

    "gx_warn_title": "Recompra cara detectada",
    "gx_warn_body": "Recomprar os prédios vendidos custará <b>%COST%</b> — isso é <b>%PCT%%</b> do seu CPS. Considere calcular valores seguros de venda primeiro.",
    "gx_warn_threshold_hint": "Limite de aviso: %THRESH%% do CPS bruto.",
    "gx_warn_calculate_now": "Calcular",
    "gx_warn_skip": "Pular",

    "gx_store_markers": "Marcadores da loja: ",
    "gx_store_markers_label": "Exibe um ícone do Godzamok nos edifícios selecionados para venda no painel da loja.",
});

//***********************************
//    RUSSIAN LOCALIZATION
//***********************************

ModLanguage('RU', {
    "gx_toggle_on": "ВКЛ",
    "gx_toggle_off": "ВЫКЛ",

    "gx_buyback_total_gain": "Использовать полученый доход",
    "gx_buyback_full_amount": "Купить всё обратно",
    "gx_buyback_percentage": "Купить процент от количества",

    "gx_sell_mode_percent": "Процент",
    "gx_sell_mode_units": "Штучно",

    "gx_mod_loaded_title": "Godzamok Ultimate загружен!",
    "gx_mod_loaded_desc": "Пусть Godzamok благословит тебя золотыми печеньками.",

    "gx_loop": "Цикл",

    "gx_header_utilities": "Утилиты",
    "gx_header_input_hotkeys": "Ввод и горячие клавиши",
    "gx_header_temple": "Храм",
    "gx_header_buyback": "Обратная покупка",
    "gx_header_sell": "Продажа",

    "gx_debug_info_prefix": "Показ отладочной информации: ",
    "gx_debug_info_label": "Показывать сводку (сколько зданий было продано/куплено) после каждого запуска скрипта",

    "gx_reset_config": "Сбросить настройки",

    "gx_button_near_cookie": "Кнопка возле большого печенья: ",
    "gx_button_in_temple": "Кнопка в Храме: ",
    "gx_display_buttons_label": "Показывать кнопки для активации скрипта",

    "gx_show_loop_button": "Показать кнопку повтора: ",
    "gx_show_loop_button_label": "Показывать дополнительную кнопку для повторного запуска скрипта при удержании",

    "gx_hotkey_g": "Горячая клавиша G: ",
    "gx_hotkey_g_label": "Запускать скрипт по нажатию G",

    "gx_input_delay": "Задержка ввода: ",
    "gx_input_delay_label": "Применять задержку между действиями",
    "gx_delay_duration_label": "Установить собственную задержку между запусками",

    "gx_auto_switch_god": "Автопереключение на Godzamok: ",
    "gx_auto_switch_god_label": "Автоматически назначать Godzamok, если он не активен",

    "gx_temple_slot_label": "Слот в Храме, куда будет помещён Godzamok",

    "gx_buyback": "Обратная покупка: ",
    "gx_buyback_label": "Мгновенно скупать здания после продажи",
    "gx_buyback_strategy_label": "Стратегия обратной покупки",

    "gx_buyback_percent": "Процент обратной покупки",
    "gx_buyback_percent_label": "Используется только при выборе стратегии \"Купить процент от количества\"",

    "gx_show_only_enabled": "Показывать только активные: ",
    "gx_hide_empty": "Скрывать пустые: ",
    "gx_building_list_filters_label": "Фильтры для списка зданий",

    "gx_sell_mode_label": "Режим продажи",
    "gx_preset_percent_label": "Заданный % для всех зданий",
    "gx_preset_units_label": "Заданное количество для добавления на здание",

    "gx_calc_safe_sell": "Рассчитать безопасную продажу",
    "gx_calc_safe_sell_label": "Автоматически рассчитывать безопасное количество для продажи (%RATIO%% от базового CPS)",
    "gx_confirm_safe_sell": "Рассчитать безопасное количество, используя <b>%RATIO%%</b> базового CPS как бюджет?",
    "gx_calc_safe_sell_hint": "Расчёт может временно продать и сразу же выкупить обратно выбранные здания для определения безопасных значений.",

    "gx_sell_label": "Продать:",
    "gx_or": "или",
    "gx_units": "штук",

    "gx_sold": "Продано:",
    "gx_bought": "Куплено:",
    "gx_for": "за",

    "gx_confirm_reset_title": "Подтвердите сброс",
    "gx_confirm_reset_question": "Сбросить настройки Godzamok Ultimate до значений по умолчанию?",
    "gx_confirm_reset_hint": "Все текущие настройки будут утеряны и заменены значениями по умолчанию.",
    "gx_yes": "Да",
    "gx_no": "Нет",

    "gx_settings_reset_popup": "Настройки Godzamok Ultimate сброшены.",

    "gx_no_buildings_selected": "Не выбрано ни одного здания!",

    "gx_advanced_opt": "Продвинутая оптимизация: ",
    "gx_advanced_opt_label": "Кэширует расчёт цен и подавляет игровые хуки во время массовых операций. Может повлиять на механики игры при обновлениях.",

    "gx_warn_title": "Обнаружена дорогостоящая обратная покупка",
    "gx_warn_body": "Обратная покупка проданных зданий обойдётся в <b>%COST%</b> — это <b>%PCT%%</b> вашего CPS. Рекомендуется сначала рассчитать безопасные значения продажи.",
    "gx_warn_threshold_hint": "Порог предупреждения: %THRESH%% базового CPS.",
    "gx_warn_calculate_now": "Рассчитать",
    "gx_warn_skip": "Пропустить",

    "gx_store_markers": "Метки в магазине: ",
    "gx_store_markers_label": "Показывает иконку Годзамока на зданиях, выбранных для продажи, в правом меню магазина.",
});

//***********************************
//    TURKISH LOCALIZATION
//***********************************

ModLanguage('TR', {
    "gx_toggle_on": "AÇIK",
    "gx_toggle_off": "KAPALI",

    "gx_buyback_total_gain": "Toplam kazancı kullan",
    "gx_buyback_full_amount": "Tam miktarı al",
    "gx_buyback_percentage": "Yüzde al",

    "gx_sell_mode_percent": "Yüzde",
    "gx_sell_mode_units": "Adet",

    "gx_mod_loaded_title": "Godzamok Ultimate yüklendi!",
    "gx_mod_loaded_desc": "Godzamok size altın kurabiyeler versin.",

    "gx_loop": "Döngü",

    "gx_header_utilities": "Araçlar",
    "gx_header_input_hotkeys": "Girdi & Kısayollar",
    "gx_header_temple": "Tapınak",
    "gx_header_buyback": "Geri Alım",
    "gx_header_sell": "Sat",

    "gx_debug_info_prefix": "Hata Ayıklama Göster: ",
    "gx_debug_info_label": "Her çalıştırmada özet göster (kaç bina satıldı/alındı)",

    "gx_reset_config": "Ayarları Sıfırla",

    "gx_button_near_cookie": "Kurabiye Yanı Buton: ",
    "gx_button_in_temple": "Tapınak Butonu: ",
    "gx_display_buttons_label": "Aktivasyon butonlarını göster",

    "gx_show_loop_button": "Döngü Butonunu Göster: ",
    "gx_show_loop_button_label": "Basılı tutma için tekrar butonu göster",

    "gx_hotkey_g": "Kısayol G: ",
    "gx_hotkey_g_label": "G tuşuna basıldığında betiği çalıştır",

    "gx_input_delay": "Girdi Gecikmesi: ",
    "gx_input_delay_label": "İşlemler arası gecikme uygula",
    "gx_delay_duration_label": "Çalıştırmalar arasındaki özel gecikmeyi ayarla",

    "gx_auto_switch_god": "Otomatik Godzamok: ",
    "gx_auto_switch_god_label": "Aktif değilse Godzamok otomatik ata",

    "gx_temple_slot_label": "Godzamok için Tapınak yuvası",

    "gx_buyback": "Geri Alım: ",
    "gx_buyback_label": "Satıştan sonra anında geri al",
    "gx_buyback_strategy_label": "Geri alım yöntemi",

    "gx_buyback_percent": "Geri Alım Yüzdesi",
    "gx_buyback_percent_label": "\"Yüzde al\" seçilince kullanılır",

    "gx_show_only_enabled": "Sadece Aktif Göster: ",
    "gx_hide_empty": "Boşları Gizle: ",
    "gx_building_list_filters_label": "Bina listesi filtreleri",

    "gx_sell_mode_label": "Satış Modu",
    "gx_preset_percent_label": "Tüm binalar için yüzde",
    "gx_preset_units_label": "Bina başı satış adedi",

    "gx_calc_safe_sell": "Güvenli Satışı Hesapla",
    "gx_calc_safe_sell_label": "Güvenli satış miktarlarını otomatik hesapla (ham CPS'nin %RATIO%'i)",
    "gx_confirm_safe_sell": "Ham CPS'nin <b>%RATIO%%</b>'i bütçe olarak kullanılarak güvenli satış miktarları hesaplansın mı?",
    "gx_calc_safe_sell_hint": "Hesaplama, güvenli değerleri belirlemek için seçili binaları geçici olarak satıp hemen geri satın alabilir.",

    "gx_sell_label": "Sat:",
    "gx_or": "veya",
    "gx_units": "adet",

    "gx_sold": "Satıldı:",
    "gx_bought": "Alındı:",
    "gx_for": "karşılığında",

    "gx_confirm_reset_title": "Sıfırlamayı onayla",
    "gx_confirm_reset_question": "Godzamok Ultimate ayarları varsayılanlara sıfırlansın mı?",
    "gx_confirm_reset_hint": "Tüm mevcut ayarlar kaybolacak ve varsayılan değerlerine geri yüklenecektir.",
    "gx_yes": "Evet",
    "gx_no": "Hayır",

    "gx_settings_reset_popup": "Godzamok Ultimate ayarları sıfırlandı.",

    "gx_no_buildings_selected": "Hiç bina seçilmedi!",

    "gx_advanced_opt": "Gelişmiş Optimizasyon: ",
    "gx_advanced_opt_label": "Toplu işlemler sırasında fiyat hesaplamalarını önbelleğe alır ve oyun kancalarını bastırır. Güncellemelerden sonra oyun mekaniklerini etkileyebilir.",

    "gx_warn_title": "Pahalı geri alım tespit edildi",
    "gx_warn_body": "Satılan binaların geri satın alınması <b>%COST%</b> tutacak — bu CPS'nizin <b>%PCT%%</b>'si. Önce güvenli satış değerlerini hesaplamayı düşünün.",
    "gx_warn_threshold_hint": "Uyarı eşiği: ham CPS'nin %THRESH%%'i.",
    "gx_warn_calculate_now": "Hesapla",
    "gx_warn_skip": "Atla",

    "gx_store_markers": "Mağaza işaretçileri: ",
    "gx_store_markers_label": "Mağaza panelinde satış için seçilen binalarda bir Godzamok simgesi gösterir.",
});
