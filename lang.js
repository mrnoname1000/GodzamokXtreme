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
    "gx_warn_suppress_session": "Don't show again this session",
    "gx_warn_calculate_now": "Calculate",
    "gx_warn_skip": "Skip",

    // Store building markers — icon shown on selected buildings in the right-side store panel
    "gx_store_markers": "Store markers: ",
    "gx_store_markers_label": "Show a Godzamok icon on buildings selected for selling in the store panel.",

    // Label shown next to buildings that are recommended for selling with Godzamok
    "gx_sort_by_cps": "Sort by CPS impact: ",
    "gx_impact": "Impact:",

    // Cancel button label (used in prompts to dismiss without taking action)
    "gx_cancel": "Cancel",

    // Confirmation prompt shown before placing Godzamok into a temple slot
    "gx_confirm_place_godzamok_title": "Place Godzamok?",
    "gx_confirm_place_godzamok_body": "Are you sure you want to place the Godzamok spirit in slot %1?",
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
    "gx_warn_suppress_session": "本次会话不再显示",
    "gx_warn_calculate_now": "计算",
    "gx_warn_skip": "跳过",

    "gx_store_markers": "商店标记：",
    "gx_store_markers_label": "在商店面板中为选定出售的建筑显示戈扎莫克图标。",

    "gx_sort_by_cps": "按CPS影响排序: ",
    "gx_impact": "影响：",

    "gx_cancel": "取消",

    "gx_confirm_place_godzamok_title": "放置 Godzamok？",
    "gx_confirm_place_godzamok_body": "您确定要将 Godzamok 精灵放置在 %1 槽位吗？"
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
    "gx_warn_suppress_session": "In dieser Sitzung nicht mehr anzeigen",
    "gx_warn_calculate_now": "Berechnen",
    "gx_warn_skip": "Überspringen",

    "gx_store_markers": "Shop-Markierungen: ",
    "gx_store_markers_label": "Zeigt ein Godzamok-Symbol auf Gebäuden, die im Shop-Panel zum Verkauf ausgewählt sind.",

    "gx_sort_by_cps": "Nach CPS-Einfluss sortieren: ",
    "gx_impact": "Einfluss:",

    "gx_cancel": "Abbrechen",

    "gx_confirm_place_godzamok_title": "Godzamok platzieren?",
    "gx_confirm_place_godzamok_body": "Möchten Sie wirklich den Godzamok-Geist in Slot %1 platzieren?"
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
    "gx_warn_suppress_session": "No mostrar de nuevo en esta sesión",
    "gx_warn_calculate_now": "Calcular",
    "gx_warn_skip": "Omitir",

    "gx_store_markers": "Marcadores de tienda: ",
    "gx_store_markers_label": "Muestra un ícono de Godzamok en los edificios seleccionados para vender en el panel de la tienda.",

    "gx_sort_by_cps": "Ordenar por impacto de CPS: ",
    "gx_impact": "Impacto:",

    "gx_cancel": "Cancelar",

    "gx_confirm_place_godzamok_title": "¿Colocar a Godzamok?",
    "gx_confirm_place_godzamok_body": "¿Seguro que deseas colocar el espíritu de Godzamok en la ranura %1?"
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
    "gx_warn_suppress_session": "Ne plus afficher cette session",
    "gx_warn_calculate_now": "Calculer",
    "gx_warn_skip": "Ignorer",

    "gx_store_markers": "Marqueurs de boutique : ",
    "gx_store_markers_label": "Affiche une icône Godzamok sur les bâtiments sélectionnés pour la vente dans le panneau de la boutique.",

    "gx_sort_by_cps": "Trier par impact CPS: ",
    "gx_impact": "Impact:",

    "gx_cancel": "Annuler",

    "gx_confirm_place_godzamok_title": "Placer Godzamok ?",
    "gx_confirm_place_godzamok_body": "Voulez-vous vraiment placer l’esprit de Godzamok dans l’emplacement %1 ?"
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
    "gx_warn_suppress_session": "Não mostrar novamente nesta sessão",
    "gx_warn_calculate_now": "Calcular",
    "gx_warn_skip": "Pular",

    "gx_store_markers": "Marcadores da loja: ",
    "gx_store_markers_label": "Exibe um ícone do Godzamok nos edifícios selecionados para venda no painel da loja.",

    "gx_sort_by_cps": "Ordenar por impacto de CPS: ",
    "gx_impact": "Impacto:",

    "gx_cancel": "Cancelar",

    "gx_confirm_place_godzamok_title": "Colocar Godzamok?",
    "gx_confirm_place_godzamok_body": "Tem certeza que deseja colocar o espírito de Godzamok no slot %1?"
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
    "gx_warn_suppress_session": "Не показывать снова в этой сессии",
    "gx_warn_calculate_now": "Рассчитать",
    "gx_warn_skip": "Пропустить",

    "gx_store_markers": "Метки в магазине: ",
    "gx_store_markers_label": "Показывает иконку Годзамока на зданиях, выбранных для продажи, в правом меню магазина.",

    "gx_sort_by_cps": "Сортировать по влиянию на CPS: ",
    "gx_impact": "Влияние:",

    "gx_cancel": "Отмена",

    "gx_confirm_place_godzamok_title": "Установить Гозамока?",
    "gx_confirm_place_godzamok_body": "Вы точно хотите установить дух Гозамока в ячейку %1?"
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
    "gx_warn_suppress_session": "Bu oturumda bir daha gösterme",
    "gx_warn_calculate_now": "Hesapla",
    "gx_warn_skip": "Atla",

    "gx_store_markers": "Mağaza işaretçileri: ",
    "gx_store_markers_label": "Mağaza panelinde satış için seçilen binalarda bir Godzamok simgesi gösterir.",

    "gx_sort_by_cps": "CPS etkisine göre sırala: ",
    "gx_impact": "Etki:",

    "gx_cancel": "İptal",

    "gx_confirm_place_godzamok_title": "Godzamok yerleştirilsin mi?",
    "gx_confirm_place_godzamok_body": "Godzamok ruhunu %1 yuvasına yerleştirmek istediğinizden emin misiniz?"
});

//***********************************
//    JAPANESE LOCALIZATION
//***********************************

ModLanguage('JA', {
    "gx_toggle_on": "ON",
    "gx_toggle_off": "OFF",

    "gx_buyback_total_gain": "総利益を使用",
    "gx_buyback_full_amount": "全量を買い戻す",
    "gx_buyback_percentage": "割合で買い戻す",

    "gx_sell_mode_percent": "パーセント",
    "gx_sell_mode_units": "個数",

    "gx_mod_loaded_title": "Godzamok Ultimate を読み込みました！",
    "gx_mod_loaded_desc": "ゴジャモクが黄金のクッキーを授けますように。",

    "gx_loop": "ループ",

    "gx_header_utilities": "ユーティリティ",
    "gx_header_input_hotkeys": "入力 & ホットキー",
    "gx_header_temple": "神殿",
    "gx_header_buyback": "買い戻し",
    "gx_header_sell": "売却",

    "gx_debug_info_prefix": "デバッグ情報: ",
    "gx_debug_info_label": "各実行後に概要を表示（売買した建物の数）",

    "gx_reset_config": "設定をリセット",

    "gx_button_near_cookie": "クッキー横のボタン: ",
    "gx_button_in_temple": "神殿内のボタン: ",
    "gx_display_buttons_label": "スクリプト起動ボタンを表示",

    "gx_show_loop_button": "ループボタンを表示: ",
    "gx_show_loop_button_label": "長押しで繰り返し実行する追加ボタンを表示",

    "gx_hotkey_g": "ホットキー G: ",
    "gx_hotkey_g_label": "G キーを押してスクリプトを実行",

    "gx_input_delay": "入力遅延: ",
    "gx_input_delay_label": "操作間に遅延を適用",
    "gx_delay_duration_label": "実行間のカスタム遅延を設定",

    "gx_auto_switch_god": "自動切替: ",
    "gx_auto_switch_god_label": "未設定の場合はゴジャモクを自動的に割り当て",

    "gx_temple_slot_label": "ゴジャモクを配置する神殿スロット",

    "gx_buyback": "買い戻し: ",
    "gx_buyback_label": "売却後に建物を即座に買い戻す",
    "gx_buyback_strategy_label": "買い戻し戦略",

    "gx_buyback_percent": "買い戻し割合",
    "gx_buyback_percent_label": "「割合で買い戻す」選択時のみ使用",

    "gx_show_only_enabled": "有効のみ表示: ",
    "gx_hide_empty": "空を非表示: ",
    "gx_building_list_filters_label": "建物リストのフィルター",

    "gx_sell_mode_label": "売却モード",
    "gx_preset_percent_label": "全建物への設定割合",
    "gx_preset_units_label": "建物ごとの売却個数",

    "gx_calc_safe_sell": "安全売却を計算",
    "gx_calc_safe_sell_label": "安全な売却量を自動計算（生CPS の %RATIO%%）",
    "gx_confirm_safe_sell": "生CPS の <b>%RATIO%%</b> を予算として安全売却量を計算しますか？",
    "gx_calc_safe_sell_hint": "計算のため、選択した建物を一時的に売却し即座に買い戻す場合があります。",

    "gx_sell_label": "売却:",
    "gx_or": "または",
    "gx_units": "個",

    "gx_sold": "売却済み:",
    "gx_bought": "購入済み:",
    "gx_for": "で",

    "gx_confirm_reset_title": "リセットの確認",
    "gx_confirm_reset_question": "Godzamok Ultimate の設定をデフォルトにリセットしますか？",
    "gx_confirm_reset_hint": "現在の設定はすべて失われ、デフォルト値に戻ります。",
    "gx_yes": "はい",
    "gx_no": "いいえ",

    "gx_settings_reset_popup": "Godzamok Ultimate の設定をリセットしました。",

    "gx_no_buildings_selected": "建物が選択されていません！",

    "gx_advanced_opt": "高度な最適化: ",
    "gx_advanced_opt_label": "一括操作中に価格計算をキャッシュしゲームフックを抑制します。更新後にゲームの仕組みに影響する可能性があります。",

    "gx_warn_title": "高コストの買い戻しを検出",
    "gx_warn_body": "売却した建物の買い戻しに <b>%COST%</b> かかります — これはCPSの <b>%PCT%%</b> です。先に安全な売却値を計算することをお勧めします。",
    "gx_warn_threshold_hint": "警告閾値: 生CPS の %THRESH%%。",
    "gx_warn_suppress_session": "このセッションで再表示しない",
    "gx_warn_calculate_now": "計算",
    "gx_warn_skip": "スキップ",

    "gx_store_markers": "ショップマーカー: ",
    "gx_store_markers_label": "ショップパネルで売却対象に選んだ建物にゴジャモクのアイコンを表示します。",

    "gx_sort_by_cps": "CPS影響順に並べる: ",
    "gx_impact": "影響：",

    "gx_cancel": "キャンセル",

    "gx_confirm_place_godzamok_title": "ゴズアモクを配置しますか？",
    "gx_confirm_place_godzamok_body": "ゴズアモクの霊を %1 スロットに配置してもよいですか？"
});

//***********************************
//    KOREAN LOCALIZATION
//***********************************

ModLanguage('KO', {
    "gx_toggle_on": "켜짐",
    "gx_toggle_off": "꺼짐",

    "gx_buyback_total_gain": "총 이익 사용",
    "gx_buyback_full_amount": "전량 재구매",
    "gx_buyback_percentage": "비율로 재구매",

    "gx_sell_mode_percent": "퍼센트",
    "gx_sell_mode_units": "개수",

    "gx_mod_loaded_title": "Godzamok Ultimate 로드됨!",
    "gx_mod_loaded_desc": "고자모크가 황금 쿠키를 내려주시길.",

    "gx_loop": "반복",

    "gx_header_utilities": "유틸리티",
    "gx_header_input_hotkeys": "입력 & 단축키",
    "gx_header_temple": "신전",
    "gx_header_buyback": "재구매",
    "gx_header_sell": "판매",

    "gx_debug_info_prefix": "디버그 정보: ",
    "gx_debug_info_label": "각 실행 후 요약 표시 (판매/구매한 건물 수)",

    "gx_reset_config": "설정 초기화",

    "gx_button_near_cookie": "쿠키 옆 버튼: ",
    "gx_button_in_temple": "신전 버튼: ",
    "gx_display_buttons_label": "스크립트 실행 버튼 표시",

    "gx_show_loop_button": "반복 버튼 표시: ",
    "gx_show_loop_button_label": "길게 눌러 반복 실행하는 추가 버튼 표시",

    "gx_hotkey_g": "단축키 G: ",
    "gx_hotkey_g_label": "G 키를 눌러 스크립트 실행",

    "gx_input_delay": "입력 지연: ",
    "gx_input_delay_label": "작업 사이에 지연 적용",
    "gx_delay_duration_label": "실행 간 사용자 지연 설정",

    "gx_auto_switch_god": "자동 전환: ",
    "gx_auto_switch_god_label": "비활성 시 고자모크 자동 배치",

    "gx_temple_slot_label": "고자모크를 배치할 신전 슬롯",

    "gx_buyback": "재구매: ",
    "gx_buyback_label": "판매 후 즉시 건물 재구매",
    "gx_buyback_strategy_label": "재구매 전략",

    "gx_buyback_percent": "재구매 비율",
    "gx_buyback_percent_label": "\"비율로 재구매\" 선택 시에만 사용",

    "gx_show_only_enabled": "활성화된 것만 표시: ",
    "gx_hide_empty": "빈 것 숨기기: ",
    "gx_building_list_filters_label": "건물 목록 필터",

    "gx_sell_mode_label": "판매 모드",
    "gx_preset_percent_label": "모든 건물에 적용할 비율",
    "gx_preset_units_label": "건물당 판매 개수",

    "gx_calc_safe_sell": "안전 판매 계산",
    "gx_calc_safe_sell_label": "안전한 판매량 자동 계산 (원시 CPS의 %RATIO%%)",
    "gx_confirm_safe_sell": "원시 CPS의 <b>%RATIO%%</b>를 예산으로 안전 판매량을 계산할까요?",
    "gx_calc_safe_sell_hint": "계산을 위해 선택한 건물을 일시적으로 판매하고 즉시 재구매할 수 있습니다.",

    "gx_sell_label": "판매:",
    "gx_or": "또는",
    "gx_units": "개",

    "gx_sold": "판매됨:",
    "gx_bought": "구매됨:",
    "gx_for": "에",

    "gx_confirm_reset_title": "초기화 확인",
    "gx_confirm_reset_question": "Godzamok Ultimate 설정을 기본값으로 초기화할까요?",
    "gx_confirm_reset_hint": "현재 설정이 모두 삭제되고 기본값으로 복원됩니다.",
    "gx_yes": "예",
    "gx_no": "아니요",

    "gx_settings_reset_popup": "Godzamok Ultimate 설정이 초기화되었습니다.",

    "gx_no_buildings_selected": "선택된 건물이 없습니다!",

    "gx_advanced_opt": "고급 최적화: ",
    "gx_advanced_opt_label": "일괄 작업 중 가격 계산을 캐싱하고 게임 훅을 억제합니다. 업데이트 후 게임 메커니즘에 영향을 줄 수 있습니다.",

    "gx_warn_title": "고비용 재구매 감지됨",
    "gx_warn_body": "판매한 건물 재구매에 <b>%COST%</b>가 필요합니다 — CPS의 <b>%PCT%%</b>입니다. 먼저 안전 판매값을 계산해 보세요.",
    "gx_warn_threshold_hint": "경고 임계값: 원시 CPS의 %THRESH%%.",
    "gx_warn_suppress_session": "이 세션에서 다시 표시 안 함",
    "gx_warn_calculate_now": "계산",
    "gx_warn_skip": "건너뛰기",

    "gx_store_markers": "상점 마커: ",
    "gx_store_markers_label": "상점 패널에서 판매로 선택된 건물에 고자모크 아이콘을 표시합니다.",

    "gx_sort_by_cps": "CPS 영향순 정렬: ",
    "gx_impact": "영향:",

    "gx_cancel": "취소",

    "gx_confirm_place_godzamok_title": "Godzamok 배치?",
    "gx_confirm_place_godzamok_body": "Godzamok 영혼을 %1 슬롯에 배치하시겠습니까?"
});

//***********************************
//    POLISH LOCALIZATION
//***********************************

ModLanguage('PL', {
    "gx_toggle_on": "WŁ",
    "gx_toggle_off": "WYŁ",

    "gx_buyback_total_gain": "Użyj całkowitego zysku",
    "gx_buyback_full_amount": "Kup pełną ilość",
    "gx_buyback_percentage": "Kup procentowo",

    "gx_sell_mode_percent": "Procent",
    "gx_sell_mode_units": "Jednostki",

    "gx_mod_loaded_title": "Godzamok Ultimate załadowany!",
    "gx_mod_loaded_desc": "Niech Godzamok obdarzy cię złotymi ciasteczkami.",

    "gx_loop": "Pętla",

    "gx_header_utilities": "Narzędzia",
    "gx_header_input_hotkeys": "Wejście & Skróty",
    "gx_header_temple": "Świątynia",
    "gx_header_buyback": "Odkup",
    "gx_header_sell": "Sprzedaj",

    "gx_debug_info_prefix": "Info debugowania: ",
    "gx_debug_info_label": "Pokazuj podsumowanie po każdym uruchomieniu (ile budynków sprzedano/kupiono)",

    "gx_reset_config": "Resetuj ustawienia",

    "gx_button_near_cookie": "Przycisk przy ciasteczku: ",
    "gx_button_in_temple": "Przycisk w świątyni: ",
    "gx_display_buttons_label": "Wyświetlaj przyciski aktywacji skryptu",

    "gx_show_loop_button": "Pokaż przycisk pętli: ",
    "gx_show_loop_button_label": "Wyświetl dodatkowy przycisk do wielokrotnego uruchamiania przy przytrzymaniu",

    "gx_hotkey_g": "Skrót G: ",
    "gx_hotkey_g_label": "Uruchom skrypt po naciśnięciu G",

    "gx_input_delay": "Opóźnienie wejścia: ",
    "gx_input_delay_label": "Zastosuj opóźnienie między akcjami",
    "gx_delay_duration_label": "Ustaw niestandardowe opóźnienie między uruchomieniami",

    "gx_auto_switch_god": "Auto-przełącz na Godzamoka: ",
    "gx_auto_switch_god_label": "Automatycznie przypisz Godzamoka jeśli nieaktywny",

    "gx_temple_slot_label": "Slot świątyni dla Godzamoka",

    "gx_buyback": "Odkup: ",
    "gx_buyback_label": "Natychmiast odkupuj budynki po sprzedaży",
    "gx_buyback_strategy_label": "Strategia odkupu",

    "gx_buyback_percent": "Procent odkupu",
    "gx_buyback_percent_label": "Używane tylko przy strategii „Kup procentowo\"",

    "gx_show_only_enabled": "Tylko aktywne: ",
    "gx_hide_empty": "Ukryj puste: ",
    "gx_building_list_filters_label": "Filtry listy budynków",

    "gx_sell_mode_label": "Tryb sprzedaży",
    "gx_preset_percent_label": "Procent dla wszystkich budynków",
    "gx_preset_units_label": "Jednostki sprzedaży na budynek",

    "gx_calc_safe_sell": "Oblicz bezpieczną sprzedaż",
    "gx_calc_safe_sell_label": "Automatycznie oblicz bezpieczne ilości sprzedaży (%RATIO%% surowego CPS)",
    "gx_confirm_safe_sell": "Obliczyć bezpieczne ilości sprzedaży używając <b>%RATIO%%</b> surowego CPS jako budżetu?",
    "gx_calc_safe_sell_hint": "Obliczenie może tymczasowo sprzedać i natychmiast odkupić wybrane budynki.",

    "gx_sell_label": "Sprzedaj:",
    "gx_or": "lub",
    "gx_units": "szt.",

    "gx_sold": "Sprzedano:",
    "gx_bought": "Kupiono:",
    "gx_for": "za",

    "gx_confirm_reset_title": "Potwierdź reset",
    "gx_confirm_reset_question": "Zresetować ustawienia Godzamok Ultimate do domyślnych?",
    "gx_confirm_reset_hint": "Wszystkie obecne ustawienia zostaną utracone i przywrócone do wartości domyślnych.",
    "gx_yes": "Tak",
    "gx_no": "Nie",

    "gx_settings_reset_popup": "Ustawienia Godzamok Ultimate zostały zresetowane.",

    "gx_no_buildings_selected": "Nie wybrano żadnych budynków!",

    "gx_advanced_opt": "Zaawansowana optymalizacja: ",
    "gx_advanced_opt_label": "Buforuje obliczenia cen i tłumi hooki gry podczas operacji masowych. Może wpływać na mechanikę gry po aktualizacjach.",

    "gx_warn_title": "Wykryto drogi odkup",
    "gx_warn_body": "Odkupienie sprzedanych budynków będzie kosztować <b>%COST%</b> — to <b>%PCT%%</b> twojego CPS. Rozważ najpierw obliczenie bezpiecznych wartości sprzedaży.",
    "gx_warn_threshold_hint": "Próg ostrzeżenia: %THRESH%% surowego CPS.",
    "gx_warn_suppress_session": "Nie pokazuj ponownie w tej sesji",
    "gx_warn_calculate_now": "Oblicz",
    "gx_warn_skip": "Pomiń",

    "gx_store_markers": "Znaczniki sklepu: ",
    "gx_store_markers_label": "Wyświetla ikonę Godzamoka na budynkach wybranych do sprzedaży w panelu sklepu.",

    "gx_sort_by_cps": "Sortuj według wpływu CPS: ",
    "gx_impact": "Wpływ:",

    "gx_cancel": "Anuluj",

    "gx_confirm_place_godzamok_title": "Umieścić Godzamoka?",
    "gx_confirm_place_godzamok_body": "Czy na pewno chcesz umieścić ducha Godzamoka w slocie %1?"
});

//***********************************
//    ITALIAN LOCALIZATION
//***********************************

ModLanguage('IT', {
    "gx_toggle_on": "ON",
    "gx_toggle_off": "OFF",

    "gx_buyback_total_gain": "Usa guadagno totale",
    "gx_buyback_full_amount": "Riacquista tutto",
    "gx_buyback_percentage": "Riacquista percentuale",

    "gx_sell_mode_percent": "Percentuale",
    "gx_sell_mode_units": "Unità",

    "gx_mod_loaded_title": "Godzamok Ultimate caricato!",
    "gx_mod_loaded_desc": "Che Godzamok ti benedica con biscotti dorati.",

    "gx_loop": "Loop",

    "gx_header_utilities": "Utilità",
    "gx_header_input_hotkeys": "Input & Tasti rapidi",
    "gx_header_temple": "Tempio",
    "gx_header_buyback": "Riacquisto",
    "gx_header_sell": "Vendi",

    "gx_debug_info_prefix": "Info debug: ",
    "gx_debug_info_label": "Mostra riepilogo dopo ogni esecuzione (quanti edifici venduti/acquistati)",

    "gx_reset_config": "Ripristina configurazione",

    "gx_button_near_cookie": "Pulsante vicino al biscotto: ",
    "gx_button_in_temple": "Pulsante nel Tempio: ",
    "gx_display_buttons_label": "Mostra pulsanti di attivazione script",

    "gx_show_loop_button": "Mostra pulsante loop: ",
    "gx_show_loop_button_label": "Mostra pulsante extra per esecuzione ripetuta tenendo premuto",

    "gx_hotkey_g": "Tasto rapido G: ",
    "gx_hotkey_g_label": "Esegui lo script premendo G",

    "gx_input_delay": "Ritardo input: ",
    "gx_input_delay_label": "Applica ritardo tra le azioni",
    "gx_delay_duration_label": "Imposta ritardo personalizzato tra le esecuzioni",

    "gx_auto_switch_god": "Passa a Godzamok automaticamente: ",
    "gx_auto_switch_god_label": "Assegna automaticamente Godzamok se non attivo",

    "gx_temple_slot_label": "Slot del Tempio per Godzamok",

    "gx_buyback": "Riacquisto: ",
    "gx_buyback_label": "Riacquista immediatamente gli edifici dopo la vendita",
    "gx_buyback_strategy_label": "Strategia di riacquisto",

    "gx_buyback_percent": "Percentuale di riacquisto",
    "gx_buyback_percent_label": "Usato solo con la strategia \"Riacquista percentuale\"",

    "gx_show_only_enabled": "Solo attivi: ",
    "gx_hide_empty": "Nascondi vuoti: ",
    "gx_building_list_filters_label": "Filtri per la lista edifici",

    "gx_sell_mode_label": "Modalità vendita",
    "gx_preset_percent_label": "Percentuale per tutti gli edifici",
    "gx_preset_units_label": "Unità di vendita per edificio",

    "gx_calc_safe_sell": "Calcola vendita sicura",
    "gx_calc_safe_sell_label": "Calcola automaticamente quantità sicure da vendere (%RATIO%% CPS grezzo)",
    "gx_confirm_safe_sell": "Calcolare quantità sicure usando <b>%RATIO%%</b> del CPS grezzo come budget?",
    "gx_calc_safe_sell_hint": "Il calcolo potrebbe vendere temporaneamente e riacquistare immediatamente gli edifici selezionati.",

    "gx_sell_label": "Vendi:",
    "gx_or": "o",
    "gx_units": "unità",

    "gx_sold": "Venduto:",
    "gx_bought": "Acquistato:",
    "gx_for": "per",

    "gx_confirm_reset_title": "Conferma ripristino",
    "gx_confirm_reset_question": "Ripristinare la configurazione di Godzamok Ultimate ai valori predefiniti?",
    "gx_confirm_reset_hint": "Tutte le impostazioni correnti andranno perse e saranno ripristinate ai valori predefiniti.",
    "gx_yes": "Sì",
    "gx_no": "No",

    "gx_settings_reset_popup": "Impostazioni di Godzamok Ultimate ripristinate.",

    "gx_no_buildings_selected": "Nessun edificio selezionato!",

    "gx_advanced_opt": "Ottimizzazione avanzata: ",
    "gx_advanced_opt_label": "Memorizza i calcoli dei prezzi e sopprime gli hook di gioco durante le operazioni in blocco. Potrebbe influire sulla meccanica di gioco dopo aggiornamenti.",

    "gx_warn_title": "Riacquisto costoso rilevato",
    "gx_warn_body": "Riacquistare gli edifici venduti costerà <b>%COST%</b> — pari al <b>%PCT%%</b> del tuo CPS. Considera di calcolare prima valori di vendita sicuri.",
    "gx_warn_threshold_hint": "Soglia di avviso: %THRESH%% del CPS grezzo.",
    "gx_warn_suppress_session": "Non mostrare di nuovo in questa sessione",
    "gx_warn_calculate_now": "Calcola",
    "gx_warn_skip": "Salta",

    "gx_store_markers": "Marcatori negozio: ",
    "gx_store_markers_label": "Mostra un'icona di Godzamok sugli edifici selezionati per la vendita nel pannello del negozio.",

    "gx_sort_by_cps": "Ordina per impatto CPS: ",
    "gx_impact": "Impatto:",

    "gx_cancel": "Annulla",

    "gx_confirm_place_godzamok_title": "Posizionare Godzamok?",
    "gx_confirm_place_godzamok_body": "Sei sicuro di voler posizionare lo spirito di Godzamok nello slot %1?"
});

//***********************************
//    DUTCH LOCALIZATION
//***********************************

ModLanguage('NL', {
    "gx_toggle_on": "AAN",
    "gx_toggle_off": "UIT",

    "gx_buyback_total_gain": "Gebruik totale winst",
    "gx_buyback_full_amount": "Koop volledig terug",
    "gx_buyback_percentage": "Koop percentage terug",

    "gx_sell_mode_percent": "Procent",
    "gx_sell_mode_units": "Eenheden",

    "gx_mod_loaded_title": "Godzamok Ultimate geladen!",
    "gx_mod_loaded_desc": "Moge Godzamok je zegenen met gouden koekjes.",

    "gx_loop": "Lus",

    "gx_header_utilities": "Hulpmiddelen",
    "gx_header_input_hotkeys": "Invoer & Sneltoetsen",
    "gx_header_temple": "Tempel",
    "gx_header_buyback": "Terugkoop",
    "gx_header_sell": "Verkoop",

    "gx_debug_info_prefix": "Debug-info: ",
    "gx_debug_info_label": "Toon samenvatting na elke uitvoering (hoeveel gebouwen verkocht/gekocht)",

    "gx_reset_config": "Instellingen resetten",

    "gx_button_near_cookie": "Knop bij koekje: ",
    "gx_button_in_temple": "Knop in tempel: ",
    "gx_display_buttons_label": "Activatieknoppen voor script weergeven",

    "gx_show_loop_button": "Lusknop tonen: ",
    "gx_show_loop_button_label": "Toon extra knop voor herhaalde uitvoering bij ingedrukt houden",

    "gx_hotkey_g": "Sneltoets G: ",
    "gx_hotkey_g_label": "Voer script uit bij indrukken van G",

    "gx_input_delay": "Invoervertraging: ",
    "gx_input_delay_label": "Pas vertraging toe tussen acties",
    "gx_delay_duration_label": "Stel aangepaste vertraging in tussen uitvoeringen",

    "gx_auto_switch_god": "Automatisch naar Godzamok: ",
    "gx_auto_switch_god_label": "Wijs Godzamok automatisch toe indien niet actief",

    "gx_temple_slot_label": "Tempelslot voor Godzamok",

    "gx_buyback": "Terugkoop: ",
    "gx_buyback_label": "Koop gebouwen direct terug na verkoop",
    "gx_buyback_strategy_label": "Terugkoopstrategie",

    "gx_buyback_percent": "Terugkooppercentage",
    "gx_buyback_percent_label": "Alleen gebruikt bij strategie \"Koop percentage terug\"",

    "gx_show_only_enabled": "Alleen actief tonen: ",
    "gx_hide_empty": "Lege verbergen: ",
    "gx_building_list_filters_label": "Filters voor gebouwenlijst",

    "gx_sell_mode_label": "Verkoopmode",
    "gx_preset_percent_label": "Percentage voor alle gebouwen",
    "gx_preset_units_label": "Verkoopeenheden per gebouw",

    "gx_calc_safe_sell": "Veilige verkoop berekenen",
    "gx_calc_safe_sell_label": "Bereken automatisch veilige verkoopbedragen (%RATIO%% rauwe CPS)",
    "gx_confirm_safe_sell": "Veilige verkoopbedragen berekenen met <b>%RATIO%%</b> van rauwe CPS als budget?",
    "gx_calc_safe_sell_hint": "De berekening kan geselecteerde gebouwen tijdelijk verkopen en onmiddellijk terugkopen.",

    "gx_sell_label": "Verkoop:",
    "gx_or": "of",
    "gx_units": "st.",

    "gx_sold": "Verkocht:",
    "gx_bought": "Gekocht:",
    "gx_for": "voor",

    "gx_confirm_reset_title": "Reset bevestigen",
    "gx_confirm_reset_question": "Godzamok Ultimate-instellingen terugzetten naar standaard?",
    "gx_confirm_reset_hint": "Alle huidige instellingen gaan verloren en worden teruggezet naar standaardwaarden.",
    "gx_yes": "Ja",
    "gx_no": "Nee",

    "gx_settings_reset_popup": "Godzamok Ultimate-instellingen gereset.",

    "gx_no_buildings_selected": "Geen gebouwen geselecteerd!",

    "gx_advanced_opt": "Geavanceerde optimalisatie: ",
    "gx_advanced_opt_label": "Slaat prijsberekeningen op in cache en onderdrukt game-hooks bij bulkbewerkingen. Kan game-mechanica beïnvloeden na updates.",

    "gx_warn_title": "Dure terugkoop gedetecteerd",
    "gx_warn_body": "Verkochte gebouwen terugkopen kost <b>%COST%</b> — dat is <b>%PCT%%</b> van je CPS. Overweeg eerst veilige verkoopwaarden te berekenen.",
    "gx_warn_threshold_hint": "Waarschuwingsdrempel: %THRESH%% van rauwe CPS.",
    "gx_warn_suppress_session": "Niet opnieuw tonen in deze sessie",
    "gx_warn_calculate_now": "Berekenen",
    "gx_warn_skip": "Overslaan",

    "gx_store_markers": "Winkelmarkeringen: ",
    "gx_store_markers_label": "Toont een Godzamok-pictogram op gebouwen die geselecteerd zijn voor verkoop in het winkelvenster.",

    "gx_sort_by_cps": "Sorteren op CPS-impact: ",
    "gx_impact": "Impact:",

    "gx_cancel": "Annuleren",

    "gx_confirm_place_godzamok_title": "Godzamok plaatsen?",
    "gx_confirm_place_godzamok_body": "Weet je zeker dat je de Godzamok-geest in slot %1 wilt plaatsen?"
});

//***********************************
//    UKRAINIAN LOCALIZATION
//***********************************

ModLanguage('UK', {
    "gx_toggle_on": "УВ",
    "gx_toggle_off": "ВИМ",

    "gx_buyback_total_gain": "Використати загальний прибуток",
    "gx_buyback_full_amount": "Купити повну кількість",
    "gx_buyback_percentage": "Купити відсоток",

    "gx_sell_mode_percent": "Відсоток",
    "gx_sell_mode_units": "Одиниці",

    "gx_mod_loaded_title": "Godzamok Ultimate завантажено!",
    "gx_mod_loaded_desc": "Хай Годзамок благословить тебе золотим печивом.",

    "gx_loop": "Петля",

    "gx_header_utilities": "Утиліти",
    "gx_header_input_hotkeys": "Введення & Гарячі клавіші",
    "gx_header_temple": "Храм",
    "gx_header_buyback": "Зворотній викуп",
    "gx_header_sell": "Продати",

    "gx_debug_info_prefix": "Інфо налагодження: ",
    "gx_debug_info_label": "Показувати підсумок після кожного запуску (скільки будівель продано/куплено)",

    "gx_reset_config": "Скинути налаштування",

    "gx_button_near_cookie": "Кнопка біля печива: ",
    "gx_button_in_temple": "Кнопка в храмі: ",
    "gx_display_buttons_label": "Відображати кнопки активації скрипту",

    "gx_show_loop_button": "Показати кнопку петлі: ",
    "gx_show_loop_button_label": "Відображати додаткову кнопку для повторного запуску при утриманні",

    "gx_hotkey_g": "Гаряча клавіша G: ",
    "gx_hotkey_g_label": "Запускати скрипт при натисканні G",

    "gx_input_delay": "Затримка введення: ",
    "gx_input_delay_label": "Застосовувати затримку між діями",
    "gx_delay_duration_label": "Встановити власну затримку між запусками",

    "gx_auto_switch_god": "Авто-перемикання на Годзамока: ",
    "gx_auto_switch_god_label": "Автоматично призначати Годзамока якщо неактивний",

    "gx_temple_slot_label": "Слот храму для Годзамока",

    "gx_buyback": "Зворотній викуп: ",
    "gx_buyback_label": "Миттєво викуповувати будівлі після продажу",
    "gx_buyback_strategy_label": "Стратегія зворотнього викупу",

    "gx_buyback_percent": "Відсоток викупу",
    "gx_buyback_percent_label": "Використовується лише при стратегії «Купити відсоток»",

    "gx_show_only_enabled": "Тільки активні: ",
    "gx_hide_empty": "Сховати порожні: ",
    "gx_building_list_filters_label": "Фільтри списку будівель",

    "gx_sell_mode_label": "Режим продажу",
    "gx_preset_percent_label": "Відсоток для всіх будівель",
    "gx_preset_units_label": "Одиниці продажу на будівлю",

    "gx_calc_safe_sell": "Розрахувати безпечний продаж",
    "gx_calc_safe_sell_label": "Автоматично розрахувати безпечні обсяги продажу (%RATIO%% сирого CPS)",
    "gx_confirm_safe_sell": "Розрахувати безпечні обсяги продажу використовуючи <b>%RATIO%%</b> сирого CPS як бюджет?",
    "gx_calc_safe_sell_hint": "Розрахунок може тимчасово продати та одразу викупити вибрані будівлі.",

    "gx_sell_label": "Продати:",
    "gx_or": "або",
    "gx_units": "од.",

    "gx_sold": "Продано:",
    "gx_bought": "Куплено:",
    "gx_for": "за",

    "gx_confirm_reset_title": "Підтвердити скидання",
    "gx_confirm_reset_question": "Скинути налаштування Godzamok Ultimate до стандартних?",
    "gx_confirm_reset_hint": "Усі поточні налаштування буде втрачено та відновлено до стандартних значень.",
    "gx_yes": "Так",
    "gx_no": "Ні",

    "gx_settings_reset_popup": "Налаштування Godzamok Ultimate скинуто.",

    "gx_no_buildings_selected": "Будівлі не вибрані!",

    "gx_advanced_opt": "Розширена оптимізація: ",
    "gx_advanced_opt_label": "Кешує розрахунки цін та пригнічує хуки гри під час масових операцій. Може впливати на механіку гри після оновлень.",

    "gx_warn_title": "Виявлено дорогий зворотній викуп",
    "gx_warn_body": "Зворотній викуп проданих будівель коштуватиме <b>%COST%</b> — це <b>%PCT%%</b> вашого CPS. Розгляньте спочатку розрахунок безпечних значень продажу.",
    "gx_warn_threshold_hint": "Поріг попередження: %THRESH%% сирого CPS.",
    "gx_warn_suppress_session": "Не показувати знову в цій сесії",
    "gx_warn_calculate_now": "Розрахувати",
    "gx_warn_skip": "Пропустити",

    "gx_store_markers": "Мітки магазину: ",
    "gx_store_markers_label": "Показує іконку Годзамока на будівлях, вибраних для продажу, в панелі магазину.",

    "gx_sort_by_cps": "Сортувати за впливом на CPS: ",
    "gx_impact": "Вплив:",

    "gx_cancel": "Скасувати",

    "gx_confirm_place_godzamok_title": "Встановити Годзамока?",
    "gx_confirm_place_godzamok_body": "Ви справді хочете встановити дух Годзамока в слот %1?"
});

//***********************************
//    SWEDISH LOCALIZATION
//***********************************

ModLanguage('SV', {
    "gx_toggle_on": "PÅ",
    "gx_toggle_off": "AV",

    "gx_buyback_total_gain": "Använd total vinst",
    "gx_buyback_full_amount": "Köp tillbaka allt",
    "gx_buyback_percentage": "Köp tillbaka procent",

    "gx_sell_mode_percent": "Procent",
    "gx_sell_mode_units": "Enheter",

    "gx_mod_loaded_title": "Godzamok Ultimate laddad!",
    "gx_mod_loaded_desc": "Må Godzamok välsigna dig med gyllene kakor.",

    "gx_loop": "Slinga",

    "gx_header_utilities": "Verktyg",
    "gx_header_input_hotkeys": "Inmatning & Kortkommandon",
    "gx_header_temple": "Tempel",
    "gx_header_buyback": "Återköp",
    "gx_header_sell": "Sälj",

    "gx_debug_info_prefix": "Felsökningsinfo: ",
    "gx_debug_info_label": "Visa sammanfattning efter varje körning (hur många byggnader såldes/köptes)",

    "gx_reset_config": "Återställ inställningar",

    "gx_button_near_cookie": "Knapp vid kakan: ",
    "gx_button_in_temple": "Knapp i templet: ",
    "gx_display_buttons_label": "Visa aktiveringsknappar för skript",

    "gx_show_loop_button": "Visa slingknapp: ",
    "gx_show_loop_button_label": "Visa extra knapp för upprepad körning vid nedtryckning",

    "gx_hotkey_g": "Kortkommando G: ",
    "gx_hotkey_g_label": "Kör skript när G trycks ned",

    "gx_input_delay": "Inmatningsfördröjning: ",
    "gx_input_delay_label": "Använd fördröjning mellan åtgärder",
    "gx_delay_duration_label": "Ange anpassad fördröjning mellan körningar",

    "gx_auto_switch_god": "Byt till Godzamok automatiskt: ",
    "gx_auto_switch_god_label": "Tilldela Godzamok automatiskt om inte aktiv",

    "gx_temple_slot_label": "Tempelplats för Godzamok",

    "gx_buyback": "Återköp: ",
    "gx_buyback_label": "Köp tillbaka byggnader omedelbart efter försäljning",
    "gx_buyback_strategy_label": "Återköpsstrategi",

    "gx_buyback_percent": "Återköpsprocent",
    "gx_buyback_percent_label": "Används bara med strategin \"Köp tillbaka procent\"",

    "gx_show_only_enabled": "Visa bara aktiva: ",
    "gx_hide_empty": "Dölj tomma: ",
    "gx_building_list_filters_label": "Filter för byggnadslist",

    "gx_sell_mode_label": "Försäljningsläge",
    "gx_preset_percent_label": "Procent för alla byggnader",
    "gx_preset_units_label": "Säljenheter per byggnad",

    "gx_calc_safe_sell": "Beräkna säker försäljning",
    "gx_calc_safe_sell_label": "Beräkna säkra försäljningsmängder automatiskt (%RATIO%% rå CPS)",
    "gx_confirm_safe_sell": "Beräkna säkra försäljningsmängder med <b>%RATIO%%</b> av rå CPS som budget?",
    "gx_calc_safe_sell_hint": "Beräkningen kan tillfälligt sälja och omedelbart köpa tillbaka valda byggnader.",

    "gx_sell_label": "Sälj:",
    "gx_or": "eller",
    "gx_units": "st.",

    "gx_sold": "Sålt:",
    "gx_bought": "Köpt:",
    "gx_for": "för",

    "gx_confirm_reset_title": "Bekräfta återställning",
    "gx_confirm_reset_question": "Återställa Godzamok Ultimates inställningar till standard?",
    "gx_confirm_reset_hint": "Alla nuvarande inställningar går förlorade och återställs till standardvärden.",
    "gx_yes": "Ja",
    "gx_no": "Nej",

    "gx_settings_reset_popup": "Godzamok Ultimate-inställningar återställda.",

    "gx_no_buildings_selected": "Inga byggnader valda!",

    "gx_advanced_opt": "Avancerad optimering: ",
    "gx_advanced_opt_label": "Cachar prisberäkningar och undertrycker spelkrokar vid massoperationer. Kan påverka spelmekanik efter uppdateringar.",

    "gx_warn_title": "Dyr återköp upptäckt",
    "gx_warn_body": "Att köpa tillbaka sålda byggnader kostar <b>%COST%</b> — det är <b>%PCT%%</b> av din CPS. Överväg att beräkna säkra säljvärden först.",
    "gx_warn_threshold_hint": "Varningströskel: %THRESH%% av rå CPS.",
    "gx_warn_suppress_session": "Visa inte igen den här sessionen",
    "gx_warn_calculate_now": "Beräkna",
    "gx_warn_skip": "Hoppa över",

    "gx_store_markers": "Butiksmarkeringar: ",
    "gx_store_markers_label": "Visar en Godzamok-ikon på byggnader valda för försäljning i butikspanelen.",

    "gx_sort_by_cps": "Sortera efter CPS-påverkan: ",
    "gx_impact": "Påverkan:",

    "gx_cancel": "Avbryt",

    "gx_confirm_place_godzamok_title": "Placera Godzamok?",
    "gx_confirm_place_godzamok_body": "Är du säker på att du vill placera Godzamok-anden i plats %1?"
});

//***********************************
//    CZECH LOCALIZATION
//***********************************

ModLanguage('CS', {
    "gx_toggle_on": "ZAP",
    "gx_toggle_off": "VYP",

    "gx_buyback_total_gain": "Použít celkový zisk",
    "gx_buyback_full_amount": "Koupit celé množství",
    "gx_buyback_percentage": "Koupit procento",

    "gx_sell_mode_percent": "Procento",
    "gx_sell_mode_units": "Jednotky",

    "gx_mod_loaded_title": "Godzamok Ultimate načten!",
    "gx_mod_loaded_desc": "Ať ti Godzamok požehná zlatými sušenkami.",

    "gx_loop": "Smyčka",

    "gx_header_utilities": "Nástroje",
    "gx_header_input_hotkeys": "Vstup & Zkratky",
    "gx_header_temple": "Chrám",
    "gx_header_buyback": "Zpětný odkup",
    "gx_header_sell": "Prodat",

    "gx_debug_info_prefix": "Ladicí info: ",
    "gx_debug_info_label": "Zobrazit shrnutí po každém spuštění (kolik budov prodáno/koupeno)",

    "gx_reset_config": "Obnovit nastavení",

    "gx_button_near_cookie": "Tlačítko u sušenky: ",
    "gx_button_in_temple": "Tlačítko v chrámu: ",
    "gx_display_buttons_label": "Zobrazit tlačítka aktivace skriptu",

    "gx_show_loop_button": "Zobrazit tlačítko smyčky: ",
    "gx_show_loop_button_label": "Zobrazit extra tlačítko pro opakované spouštění při přidržení",

    "gx_hotkey_g": "Zkratka G: ",
    "gx_hotkey_g_label": "Spustit skript při stisknutí G",

    "gx_input_delay": "Vstupní prodleva: ",
    "gx_input_delay_label": "Použít prodlevu mezi akcemi",
    "gx_delay_duration_label": "Nastavit vlastní prodlevu mezi spuštěními",

    "gx_auto_switch_god": "Auto-přepnutí na Godzamoka: ",
    "gx_auto_switch_god_label": "Automaticky přiřadit Godzamoka pokud není aktivní",

    "gx_temple_slot_label": "Slot chrámu pro Godzamoka",

    "gx_buyback": "Zpětný odkup: ",
    "gx_buyback_label": "Okamžitě odkoupit budovy po prodeji",
    "gx_buyback_strategy_label": "Strategie zpětného odkupu",

    "gx_buyback_percent": "Procento odkupu",
    "gx_buyback_percent_label": "Používá se pouze při strategii „Koupit procento\"",

    "gx_show_only_enabled": "Jen aktivní: ",
    "gx_hide_empty": "Skrýt prázdné: ",
    "gx_building_list_filters_label": "Filtry seznamu budov",

    "gx_sell_mode_label": "Režim prodeje",
    "gx_preset_percent_label": "Procento pro všechny budovy",
    "gx_preset_units_label": "Prodejní jednotky na budovu",

    "gx_calc_safe_sell": "Vypočítat bezpečný prodej",
    "gx_calc_safe_sell_label": "Automaticky vypočítat bezpečné objemy prodeje (%RATIO%% surového CPS)",
    "gx_confirm_safe_sell": "Vypočítat bezpečné objemy prodeje s <b>%RATIO%%</b> surového CPS jako rozpočtem?",
    "gx_calc_safe_sell_hint": "Výpočet může dočasně prodat a okamžitě odkoupit vybrané budovy.",

    "gx_sell_label": "Prodat:",
    "gx_or": "nebo",
    "gx_units": "ks",

    "gx_sold": "Prodáno:",
    "gx_bought": "Koupeno:",
    "gx_for": "za",

    "gx_confirm_reset_title": "Potvrdit reset",
    "gx_confirm_reset_question": "Obnovit nastavení Godzamok Ultimate na výchozí hodnoty?",
    "gx_confirm_reset_hint": "Všechna aktuální nastavení budou ztracena a obnovena na výchozí hodnoty.",
    "gx_yes": "Ano",
    "gx_no": "Ne",

    "gx_settings_reset_popup": "Nastavení Godzamok Ultimate obnovena.",

    "gx_no_buildings_selected": "Žádné budovy nejsou vybrány!",

    "gx_advanced_opt": "Pokročilá optimalizace: ",
    "gx_advanced_opt_label": "Ukládá výpočty cen do mezipaměti a potlačuje herní hooky během hromadných operací. Může ovlivnit herní mechaniku po aktualizacích.",

    "gx_warn_title": "Detekován drahý zpětný odkup",
    "gx_warn_body": "Zpětný odkup prodaných budov bude stát <b>%COST%</b> — to je <b>%PCT%%</b> vašeho CPS. Zvažte nejprve výpočet bezpečných prodejních hodnot.",
    "gx_warn_threshold_hint": "Práh upozornění: %THRESH%% surového CPS.",
    "gx_warn_suppress_session": "V této relaci nezobrazovat znovu",
    "gx_warn_calculate_now": "Vypočítat",
    "gx_warn_skip": "Přeskočit",

    "gx_store_markers": "Značky obchodu: ",
    "gx_store_markers_label": "Zobrazuje ikonu Godzamoka na budovách vybraných k prodeji v panelu obchodu.",

    "gx_sort_by_cps": "Seřadit podle dopadu CPS: ",
    "gx_impact": "Dopad:",

    "gx_cancel": "Zrušit",

    "gx_confirm_place_godzamok_title": "Umístit Godzamoka?",
    "gx_confirm_place_godzamok_body": "Jste si jistí, že chcete umístit ducha Godzamoka do slotu %1?"
});
