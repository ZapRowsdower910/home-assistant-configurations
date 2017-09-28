$(function(){ //DOM Ready

    function navigate(url)
    {
        window.location.href = url;
    }

    $(document).attr("title", "Living Room Panel");
    content_width = (83 + 5) * 4 + 5
    $('.gridster').width(content_width)
    $(".gridster ul").gridster({
        widget_margins: [5, 5],
        widget_base_dimensions: [83, 50],
        avoid_overlapped_widgets: true,
        max_rows: 15,
        max_size_x: 4,
        shift_widgets_up: false
    }).data('gridster').disable();
    
    // Add Widgets

    var gridster = $(".gridster ul").gridster().data('gridster');
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-living-room-lights" id="default-living-room-lights"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 2, 3, 2, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-label-media" id="default-label-media"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 4, 1, 1, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-scene-bright" id="default-scene-bright"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 2, 1, 5)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-scene-movies" id="default-scene-movies"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 2, 2, 5)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-scene-dim" id="default-scene-dim"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 2, 3, 5)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-auto-lights" id="default-auto-lights"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 2, 4, 5)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-label-tv" id="default-label-tv"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 4, 1, 1, 7)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-tv-turn-off" id="default-tv-turn-off"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 2, 1, 8)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-tv-cast" id="default-tv-cast"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 2, 2, 8)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-tv-hdmi-5" id="default-tv-hdmi-5"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 2, 3, 8)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-tv-turn-on" id="default-tv-turn-on"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 2, 4, 8)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-label-scenes" id="default-label-scenes"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 4, 1, 1, 10)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-scene-cool" id="default-scene-cool"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 2, 1, 11)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-scene-honey" id="default-scene-honey"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 2, 2, 11)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-scene-grass" id="default-scene-grass"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 2, 3, 11)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-scene-warm" id="default-scene-warm"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 2, 4, 11)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-label-house" id="default-label-house"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 4, 1, 1, 13)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-sleep-mode" id="default-sleep-mode"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 2, 1, 14)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-guest-sleep" id="default-guest-sleep"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 2, 4, 14)
    
    
    
    var widgets = {}
    // Initialize Widgets
    
        widgets["default-living-room-lights"] = new baselight("default-living-room-lights", "", "spike", {'icon_on': 'mdi-lightbulb-on', 'static_icons': {'icon_down': '', 'icon_up': ''}, 'icons': {'icon_on': 'mdi-lightbulb-on', 'icon_off': 'fa-lightbulb-o'}, 'widget_type': 'baselight', 'icon_style_active': 'color: #f9ff5e;', 'fields': {'units': '%', 'icon': '', 'level': '', 'title': 'Lights', 'state_text': '', 'icon_style': '', 'title2': ''}, 'post_service_inactive': {'entity_id': 'group.living_room_lights', 'service': 'homeassistant/turn_off'}, 'static_css': {'unit_style': '', 'title2_style': '', 'level_style': '', 'level_down_style': '', 'level_up_style': '', 'state_text_style': '', 'widget_style': '', 'title_style': ''}, 'icon_style_inactive': 'color: white;', 'post_service_active': {'entity_id': 'group.living_room_lights', 'service': 'homeassistant/turn_on'}, 'monitored_entity': 'light.living_room_track_c_1', 'css': {'icon_style_active': '', 'icon_style_inactive': ''}, 'icon_off': 'fa-lightbulb-o', 'entity': 'group.living_room_lights'})
    
        widgets["default-label-media"] = new basedisplay("default-label-media", "", "spike", {'static_icons': [], 'static_css': {'unit_style': '', 'title2_style': '', 'value_style': '', 'title_style': '', 'state_text_style': '', 'widget_style': ''}, 'icons': [], 'widget_type': 'basedisplay', 'fields': {'state_text': '', 'unit': '', 'title': 'Media', 'title2': 'Contols', 'value': ''}, 'css': {}})
    
        widgets["default-scene-bright"] = new baseswitch("default-scene-bright", "", "spike", {'icon_on': 'mdi-lightbulb', 'static_icons': [], 'icons': {'icon_on': 'mdi-lightbulb', 'icon_off': 'mdi-lightbulb'}, 'widget_type': 'baseswitch', 'icon_style_active': 'color: #36a7ed;', 'state_active': 'stillscening', 'fields': {'icon_style': '', 'icon': '', 'title': 'Bright', 'title2': '', 'state_text': ''}, 'momentary': 1000, 'enable': 1, 'ignore_state': 1, 'post_service_inactive': {'entity_id': 'scene.living_room_bright', 'service': 'homeassistant/turn_off'}, 'static_css': {'widget_style': '', 'title2_style': '', 'title_style': '', 'state_text_style': ''}, 'icon_style_inactive': 'color: #81ef99;', 'post_service_active': {'entity_id': 'scene.living_room_bright', 'service': 'homeassistant/turn_on'}, 'css': {'icon_style_active': '', 'icon_style_inactive': ''}, 'state_inactive': 'scening', 'icon_off': 'mdi-lightbulb', 'entity': 'scene.living_room_bright'})
    
        widgets["default-scene-movies"] = new baseswitch("default-scene-movies", "", "spike", {'icon_on': 'fa-film', 'static_icons': [], 'icons': {'icon_on': 'fa-film', 'icon_off': 'fa-film'}, 'widget_type': 'baseswitch', 'icon_style_active': 'color: #36a7ed;', 'state_active': 'stillscening', 'fields': {'icon_style': '', 'icon': '', 'title': 'Movies', 'title2': '', 'state_text': ''}, 'momentary': 1000, 'enable': 1, 'ignore_state': 1, 'post_service_inactive': {'entity_id': 'scene.plex_late_night', 'service': 'homeassistant/turn_off'}, 'static_css': {'widget_style': '', 'title2_style': '', 'title_style': '', 'state_text_style': ''}, 'icon_style_inactive': 'color: #81ef99;', 'post_service_active': {'entity_id': 'scene.plex_late_night', 'service': 'homeassistant/turn_on'}, 'css': {'icon_style_active': '', 'icon_style_inactive': ''}, 'state_inactive': 'scening', 'icon_off': 'fa-film', 'entity': 'scene.plex_late_night'})
    
        widgets["default-scene-dim"] = new baseswitch("default-scene-dim", "", "spike", {'icon_on': 'mdi-lightbulb-outline', 'static_icons': [], 'icons': {'icon_on': 'mdi-lightbulb-outline', 'icon_off': 'mdi-lightbulb-outline'}, 'widget_type': 'baseswitch', 'icon_style_active': 'color: #36a7ed;', 'state_active': 'stillscening', 'fields': {'icon_style': '', 'icon': '', 'title': 'Dim', 'title2': '', 'state_text': ''}, 'momentary': 1000, 'enable': 1, 'ignore_state': 1, 'post_service_inactive': {'entity_id': 'scene.living_room_dim', 'service': 'homeassistant/turn_off'}, 'static_css': {'widget_style': '', 'title2_style': '', 'title_style': '', 'state_text_style': ''}, 'icon_style_inactive': 'color: #81ef99;', 'post_service_active': {'entity_id': 'scene.living_room_dim', 'service': 'homeassistant/turn_on'}, 'css': {'icon_style_active': '', 'icon_style_inactive': ''}, 'state_inactive': 'scening', 'icon_off': 'mdi-lightbulb-outline', 'entity': 'scene.living_room_dim'})
    
        widgets["default-auto-lights"] = new baseswitch("default-auto-lights", "", "spike", {'icon_on': 'mdi-camcorder-box', 'static_icons': [], 'icons': {'icon_on': 'mdi-camcorder-box', 'icon_off': 'mdi-camcorder-box-off'}, 'widget_type': 'baseswitch', 'icon_style_active': 'color: #04f759;', 'state_active': 'on', 'fields': {'icon_style': '', 'icon': '', 'title': 'Auto Lights', 'title2': '', 'state_text': ''}, 'enable': 1, 'post_service_inactive': {'entity_id': 'input_boolean.tv_auto_lights', 'service': 'homeassistant/turn_off'}, 'static_css': {'widget_style': '', 'title2_style': '', 'title_style': '', 'state_text_style': ''}, 'icon_style_inactive': 'color: #c60808;', 'post_service_active': {'entity_id': 'input_boolean.tv_auto_lights', 'service': 'homeassistant/turn_on'}, 'css': {'icon_style_active': '', 'icon_style_inactive': ''}, 'state_inactive': 'off', 'icon_off': 'mdi-camcorder-box-off', 'entity': 'input_boolean.tv_auto_lights'})
    
        widgets["default-label-tv"] = new basedisplay("default-label-tv", "", "spike", {'static_icons': [], 'static_css': {'unit_style': '', 'title2_style': '', 'value_style': '', 'title_style': '', 'state_text_style': '', 'widget_style': ''}, 'icons': [], 'widget_type': 'basedisplay', 'fields': {'state_text': '', 'unit': '', 'title': 'Tv', 'title2': 'Contols', 'value': ''}, 'css': {}})
    
        widgets["default-tv-turn-off"] = new baseswitch("default-tv-turn-off", "", "spike", {'icon_on': 'mdi-power', 'static_icons': [], 'icons': {'icon_on': 'mdi-power', 'icon_off': 'mdi-power'}, 'widget_type': 'baseswitch', 'icon_style_active': 'color: #c61a11;', 'state_active': 'on', 'fields': {'icon_style': '', 'icon': '', 'title': 'Tv Turn Off', 'title2': '', 'state_text': ''}, 'momentary': 1000, 'enable': 1, 'ignore_state': 1, 'post_service_inactive': {'entity_id': 'script.tv_turn_off', 'service': 'homeassistant/turn_off'}, 'static_css': {'widget_style': '', 'title2_style': '', 'title_style': '', 'state_text_style': ''}, 'icon_style_inactive': 'color: #82bced;', 'post_service_active': {'entity_id': 'script.tv_turn_off', 'service': 'homeassistant/turn_on'}, 'css': {'icon_style_active': '', 'icon_style_inactive': ''}, 'state_inactive': 'off', 'icon_off': 'mdi-power', 'entity': 'script.tv_turn_off'})
    
        widgets["default-tv-cast"] = new baseswitch("default-tv-cast", "", "spike", {'icon_on': 'mdi-cast', 'static_icons': [], 'icons': {'icon_on': 'mdi-cast', 'icon_off': 'mdi-cast'}, 'widget_type': 'baseswitch', 'icon_style_active': 'color: #1e36ed;', 'state_active': 'on', 'fields': {'icon_style': '', 'icon': '', 'title': 'Cast', 'title2': '', 'state_text': ''}, 'momentary': 1000, 'enable': 1, 'ignore_state': 1, 'post_service_inactive': {'entity_id': 'script.tv_source_cast', 'service': 'homeassistant/turn_off'}, 'static_css': {'widget_style': '', 'title2_style': '', 'title_style': '', 'state_text_style': ''}, 'icon_style_inactive': 'color: #82bced;', 'post_service_active': {'entity_id': 'script.tv_source_cast', 'service': 'homeassistant/turn_on'}, 'css': {'icon_style_active': '', 'icon_style_inactive': ''}, 'state_inactive': 'off', 'icon_off': 'mdi-cast', 'entity': 'script.tv_source_cast'})
    
        widgets["default-tv-hdmi-5"] = new baseswitch("default-tv-hdmi-5", "", "spike", {'icon_on': 'mdi-nintendo-switch', 'static_icons': [], 'icons': {'icon_on': 'mdi-nintendo-switch', 'icon_off': 'mdi-nintendo-switch'}, 'widget_type': 'baseswitch', 'icon_style_active': 'color: #1e36ed;', 'state_active': 'on', 'fields': {'icon_style': '', 'icon': '', 'title': 'Nintento Switch', 'title2': '', 'state_text': ''}, 'momentary': 1000, 'enable': 1, 'ignore_state': 1, 'post_service_inactive': {'entity_id': 'script.tv_source_cast', 'service': 'homeassistant/turn_off'}, 'static_css': {'widget_style': '', 'title2_style': '', 'title_style': '', 'state_text_style': ''}, 'icon_style_inactive': 'color: #82bced;', 'post_service_active': {'entity_id': 'script.tv_source_cast', 'service': 'homeassistant/turn_on'}, 'css': {'icon_style_active': '', 'icon_style_inactive': ''}, 'state_inactive': 'off', 'icon_off': 'mdi-nintendo-switch', 'entity': 'script.tv_source_cast'})
    
        widgets["default-tv-turn-on"] = new baseswitch("default-tv-turn-on", "", "spike", {'icon_on': 'fa-bolt', 'static_icons': [], 'icons': {'icon_on': 'fa-bolt', 'icon_off': 'fa-bolt'}, 'widget_type': 'baseswitch', 'icon_style_active': 'color: #efe415;', 'state_active': 'on', 'fields': {'icon_style': '', 'icon': '', 'title': 'Tv Turn On', 'title2': '', 'state_text': ''}, 'momentary': 1000, 'enable': 1, 'ignore_state': 1, 'post_service_inactive': {'entity_id': 'script.tv_turn_on', 'service': 'homeassistant/turn_off'}, 'static_css': {'widget_style': '', 'title2_style': '', 'title_style': '', 'state_text_style': ''}, 'icon_style_inactive': 'color: #82bced;', 'post_service_active': {'entity_id': 'script.tv_turn_on', 'service': 'homeassistant/turn_on'}, 'css': {'icon_style_active': '', 'icon_style_inactive': ''}, 'state_inactive': 'off', 'icon_off': 'fa-bolt', 'entity': 'script.tv_turn_on'})
    
        widgets["default-label-scenes"] = new basedisplay("default-label-scenes", "", "spike", {'static_icons': [], 'static_css': {'unit_style': '', 'title2_style': '', 'value_style': '', 'title_style': '', 'state_text_style': '', 'widget_style': ''}, 'icons': [], 'widget_type': 'basedisplay', 'fields': {'state_text': '', 'unit': '', 'title': 'Scenes', 'title2': 'now with colors!', 'value': ''}, 'css': {}})
    
        widgets["default-scene-cool"] = new baseswitch("default-scene-cool", "", "spike", {'icon_on': 'mdi-snowflake', 'static_icons': [], 'icons': {'icon_on': 'mdi-snowflake', 'icon_off': 'mdi-snowflake'}, 'widget_type': 'baseswitch', 'icon_style_active': 'color: #36a7ed;', 'state_active': 'stillscening', 'fields': {'icon_style': '', 'icon': '', 'title': 'Cool', 'title2': '', 'state_text': ''}, 'momentary': 1000, 'enable': 1, 'ignore_state': 1, 'post_service_inactive': {'entity_id': 'scene.living_room_cool', 'service': 'homeassistant/turn_off'}, 'static_css': {'widget_style': '', 'title2_style': '', 'title_style': '', 'state_text_style': ''}, 'icon_style_inactive': 'color: #ec81ef;', 'post_service_active': {'entity_id': 'scene.living_room_cool', 'service': 'homeassistant/turn_on'}, 'css': {'icon_style_active': '', 'icon_style_inactive': ''}, 'state_inactive': 'scening', 'icon_off': 'mdi-snowflake', 'entity': 'scene.living_room_cool'})
    
        widgets["default-scene-honey"] = new baseswitch("default-scene-honey", "", "spike", {'icon_on': 'fa-tint', 'static_icons': [], 'icons': {'icon_on': 'fa-tint', 'icon_off': 'fa-tint'}, 'widget_type': 'baseswitch', 'icon_style_active': 'color: #f9e01d;', 'state_active': 'stillscening', 'fields': {'icon_style': '', 'icon': '', 'title': 'Honey', 'title2': '', 'state_text': ''}, 'momentary': 1000, 'enable': 1, 'ignore_state': 1, 'post_service_inactive': {'entity_id': 'scene.living_room_honey', 'service': 'homeassistant/turn_off'}, 'static_css': {'widget_style': '', 'title2_style': '', 'title_style': '', 'state_text_style': ''}, 'icon_style_inactive': 'color: #ec81ef;', 'post_service_active': {'entity_id': 'scene.living_room_honey', 'service': 'homeassistant/turn_on'}, 'css': {'icon_style_active': '', 'icon_style_inactive': ''}, 'state_inactive': 'scening', 'icon_off': 'fa-tint', 'entity': 'scene.living_room_honey'})
    
        widgets["default-scene-grass"] = new baseswitch("default-scene-grass", "", "spike", {'icon_on': 'fa-leaf', 'static_icons': [], 'icons': {'icon_on': 'fa-leaf', 'icon_off': 'fa-leaf'}, 'widget_type': 'baseswitch', 'icon_style_active': 'color: #29d619;', 'state_active': 'stillscening', 'fields': {'icon_style': '', 'icon': '', 'title': 'Grass', 'title2': '', 'state_text': ''}, 'momentary': 1000, 'enable': 1, 'ignore_state': 1, 'post_service_inactive': {'entity_id': 'scene.living_room_grass', 'service': 'homeassistant/turn_off'}, 'static_css': {'widget_style': '', 'title2_style': '', 'title_style': '', 'state_text_style': ''}, 'icon_style_inactive': 'color: #ec81ef;', 'post_service_active': {'entity_id': 'scene.living_room_grass', 'service': 'homeassistant/turn_on'}, 'css': {'icon_style_active': '', 'icon_style_inactive': ''}, 'state_inactive': 'scening', 'icon_off': 'fa-leaf', 'entity': 'scene.living_room_grass'})
    
        widgets["default-scene-warm"] = new baseswitch("default-scene-warm", "", "spike", {'icon_on': 'mdi-fire', 'static_icons': [], 'icons': {'icon_on': 'mdi-fire', 'icon_off': 'mdi-fire'}, 'widget_type': 'baseswitch', 'icon_style_active': 'color: #c63c09;', 'state_active': 'stillscening', 'fields': {'icon_style': '', 'icon': '', 'title': 'Warm', 'title2': '', 'state_text': ''}, 'momentary': 1000, 'enable': 1, 'ignore_state': 1, 'post_service_inactive': {'entity_id': 'scene.living_room_warm', 'service': 'homeassistant/turn_off'}, 'static_css': {'widget_style': '', 'title2_style': '', 'title_style': '', 'state_text_style': ''}, 'icon_style_inactive': 'color: #ec81ef;', 'post_service_active': {'entity_id': 'scene.living_room_warm', 'service': 'homeassistant/turn_on'}, 'css': {'icon_style_active': '', 'icon_style_inactive': ''}, 'state_inactive': 'scening', 'icon_off': 'mdi-fire', 'entity': 'scene.living_room_warm'})
    
        widgets["default-label-house"] = new basedisplay("default-label-house", "", "spike", {'static_icons': [], 'static_css': {'unit_style': '', 'title2_style': '', 'value_style': '', 'title_style': '', 'state_text_style': '', 'widget_style': ''}, 'icons': [], 'widget_type': 'basedisplay', 'fields': {'state_text': '', 'unit': '', 'title': 'House', 'title2': 'Stuff', 'value': ''}, 'css': {}})
    
        widgets["default-sleep-mode"] = new baseswitch("default-sleep-mode", "", "spike", {'icon_on': 'fa-bed', 'static_icons': [], 'icons': {'icon_on': 'fa-bed', 'icon_off': 'mdi-white-balance-sunny'}, 'widget_type': 'baseswitch', 'icon_style_active': 'color: #36a7ed;', 'state_active': 'on', 'fields': {'icon_style': '', 'icon': '', 'title': 'Sleep Mode', 'title2': '', 'state_text': ''}, 'enable': 1, 'post_service_inactive': {'entity_id': 'input_boolean.sleep_mode', 'service': 'homeassistant/turn_off'}, 'static_css': {'widget_style': '', 'title2_style': '', 'title_style': '', 'state_text_style': ''}, 'icon_style_inactive': 'color: #c60808;', 'post_service_active': {'entity_id': 'input_boolean.sleep_mode', 'service': 'homeassistant/turn_on'}, 'css': {'icon_style_active': '', 'icon_style_inactive': ''}, 'state_inactive': 'off', 'icon_off': 'mdi-white-balance-sunny', 'entity': 'input_boolean.sleep_mode'})
    
        widgets["default-guest-sleep"] = new baseswitch("default-guest-sleep", "", "spike", {'icon_on': 'fa-bed', 'static_icons': [], 'icons': {'icon_on': 'fa-bed', 'icon_off': 'mdi-weather-night'}, 'widget_type': 'baseswitch', 'icon_style_active': 'color: #8a3cc1;', 'state_active': 'on', 'fields': {'icon_style': '', 'icon': '', 'title': 'Guest Bed Time', 'title2': '', 'state_text': ''}, 'momentary': 1000, 'enable': 1, 'ignore_state': 1, 'post_service_inactive': {'entity_id': 'script.guest_sleep', 'service': 'homeassistant/turn_off'}, 'static_css': {'widget_style': '', 'title2_style': '', 'title_style': '', 'state_text_style': ''}, 'post_service_active': {'entity_id': 'script.guest_sleep', 'service': 'homeassistant/turn_on'}, 'css': {'icon_style_active': '', 'icon_style_inactive': ''}, 'state_inactive': 'off', 'icon_off': 'mdi-weather-night', 'entity': 'script.guest_sleep'})
    

    // Setup click handler to cancel timeout navigations

    $( ".gridster" ).click(function(){
        clearTimeout(myTimeout);
    });

    // Set up timeout

    var myTimeout

    if (location.search != "")
    {
        var query = location.search.substr(1);
        var result = {};
        query.split("&").forEach(function(part) {
        var item = part.split("=");
        result[item[0]] = decodeURIComponent(item[1]);
        });

        if ("timeout" in result && "return" in result)
        {
            url = result.return
            argcount = 0
            for (arg in result)
            {
                if (arg != "timeout" && arg != "return")
                {
                    if (argcount == 0)
                    {
                        url += "?";
                    }
                    else
                    {
                        url += "?";
                    }
                    argcount ++;
                    url += arg + "=" + result[arg]
                }
            }
            myTimeout = setTimeout(function() { navigate(url); }, result.timeout * 1000);
        }
    }

    // Start listening for HA Events
    if (location.protocol == 'https:')
    {
        wsprot = "wss:"
    }
    else
    {
        wsprot = "ws:"
    }
    var stream_url = wsprot + '//' + location.host + '/stream'
    ha_status(stream_url, "Living Room Panel", widgets);

});