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
        widget_base_dimensions: [83, 47],
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
    
        widgets["default-living-room-lights"] = new baselight("default-living-room-lights", "", "default", {'static_css': {'level_down_style': 'color: #888;', 'level_style': 'color: #fff;', 'widget_style': 'background-color: #444;', 'level_up_style': 'color: #888;', 'title_style': 'color: #fff;', 'unit_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'title2_style': 'color: #fff;'}, 'icon_style_inactive': 'color: white;', 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}, 'post_service_active': {'entity_id': 'group.living_room_lights', 'service': 'homeassistant/turn_on'}, 'icon_style_active': 'color: #f9ff5e;', 'fields': {'level': '', 'title': 'Lights', 'icon': '', 'icon_style': '', 'title2': '', 'units': '%', 'state_text': ''}, 'icon_on': 'mdi-lightbulb-on', 'css': {'icon_style_inactive': 'color: white;', 'icon_style_active': 'color: #f9ff5e;'}, 'monitored_entity': 'light.living_room_track_c_1', 'entity': 'group.living_room_lights', 'post_service_inactive': {'entity_id': 'group.living_room_lights', 'service': 'homeassistant/turn_off'}, 'icons': {'icon_on': 'mdi-lightbulb-on', 'icon_off': 'fa-lightbulb-o'}, 'widget_type': 'baselight', 'icon_off': 'fa-lightbulb-o'})
    
        widgets["default-label-media"] = new basedisplay("default-label-media", "", "default", {'fields': {'value': '', 'title': 'Media Controls', 'unit': '', 'title2': '', 'state_text': ''}, 'css': {}, 'static_css': {'unit_style': '', 'state_text_style': 'color: #fff;', 'widget_style': 'background-color: #444;', 'title_style': 'font-weight: 400;margin-top: 8px;color: #fff;text-transform: uppercase;font-size: 20px;', 'value_style': 'color: #fff;', 'title2_style': 'color: #fff;'}, 'title_style': 'margin-top: 8px;font-size: 20px;text-transform: uppercase;font-weight: 400;', 'static_icons': [], 'icons': [], 'widget_type': 'basedisplay'})
    
        widgets["default-scene-bright"] = new baseswitch("default-scene-bright", "", "default", {'enable': 1, 'ignore_state': 1, 'icon_style_inactive': 'color: #81ef99;', 'static_icons': [], 'entity': 'scene.living_room_bright', 'post_service_active': {'entity_id': 'scene.living_room_bright', 'service': 'homeassistant/turn_on'}, 'momentary': 1000, 'icon_style_active': 'color: #36a7ed;', 'state_inactive': 'scening', 'state_active': 'stillscening', 'fields': {'title': 'Bright', 'icon_style': '', 'state_text': '', 'icon': '', 'title2': ''}, 'icon_on': 'mdi-lightbulb', 'css': {'icon_style_inactive': 'color: #81ef99;', 'icon_style_active': 'color: #36a7ed;'}, 'static_css': {'title_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;'}, 'post_service_inactive': {'entity_id': 'scene.living_room_bright', 'service': 'homeassistant/turn_off'}, 'icons': {'icon_on': 'mdi-lightbulb', 'icon_off': 'mdi-lightbulb'}, 'widget_type': 'baseswitch', 'icon_off': 'mdi-lightbulb'})
    
        widgets["default-scene-movies"] = new baseswitch("default-scene-movies", "", "default", {'enable': 1, 'ignore_state': 1, 'icon_style_inactive': 'color: #81ef99;', 'static_icons': [], 'entity': 'scene.plex_late_night', 'post_service_active': {'entity_id': 'scene.plex_late_night', 'service': 'homeassistant/turn_on'}, 'momentary': 1000, 'icon_style_active': 'color: #36a7ed;', 'state_inactive': 'scening', 'state_active': 'stillscening', 'fields': {'title': 'Movies', 'icon_style': '', 'state_text': '', 'icon': '', 'title2': ''}, 'icon_on': 'fa-film', 'css': {'icon_style_inactive': 'color: #81ef99;', 'icon_style_active': 'color: #36a7ed;'}, 'static_css': {'title_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;'}, 'post_service_inactive': {'entity_id': 'scene.plex_late_night', 'service': 'homeassistant/turn_off'}, 'icons': {'icon_on': 'fa-film', 'icon_off': 'fa-film'}, 'widget_type': 'baseswitch', 'icon_off': 'fa-film'})
    
        widgets["default-scene-dim"] = new baseswitch("default-scene-dim", "", "default", {'enable': 1, 'ignore_state': 1, 'icon_style_inactive': 'color: #81ef99;', 'static_icons': [], 'entity': 'scene.living_room_dim', 'post_service_active': {'entity_id': 'scene.living_room_dim', 'service': 'homeassistant/turn_on'}, 'momentary': 1000, 'icon_style_active': 'color: #36a7ed;', 'state_inactive': 'scening', 'state_active': 'stillscening', 'fields': {'title': 'Dim', 'icon_style': '', 'state_text': '', 'icon': '', 'title2': ''}, 'icon_on': 'mdi-lightbulb-outline', 'css': {'icon_style_inactive': 'color: #81ef99;', 'icon_style_active': 'color: #36a7ed;'}, 'static_css': {'title_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;'}, 'post_service_inactive': {'entity_id': 'scene.living_room_dim', 'service': 'homeassistant/turn_off'}, 'icons': {'icon_on': 'mdi-lightbulb-outline', 'icon_off': 'mdi-lightbulb-outline'}, 'widget_type': 'baseswitch', 'icon_off': 'mdi-lightbulb-outline'})
    
        widgets["default-auto-lights"] = new baseswitch("default-auto-lights", "", "default", {'enable': 1, 'post_service_inactive': {'entity_id': 'input_boolean.tv_auto_lights', 'service': 'homeassistant/turn_off'}, 'icon_style_inactive': 'color: #c60808;', 'static_icons': [], 'entity': 'input_boolean.tv_auto_lights', 'post_service_active': {'entity_id': 'input_boolean.tv_auto_lights', 'service': 'homeassistant/turn_on'}, 'icon_style_active': 'color: #0f9928;', 'state_inactive': 'off', 'fields': {'title': 'Auto Lights', 'icon_style': '', 'state_text': '', 'icon': '', 'title2': ''}, 'icon_on': 'mdi-camcorder-box', 'css': {'icon_style_inactive': 'color: #c60808;', 'icon_style_active': 'color: #0f9928;'}, 'static_css': {'title_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;'}, 'state_active': 'on', 'icons': {'icon_on': 'mdi-camcorder-box', 'icon_off': 'mdi-camcorder-box-off'}, 'widget_type': 'baseswitch', 'icon_off': 'mdi-camcorder-box-off'})
    
        widgets["default-label-tv"] = new basedisplay("default-label-tv", "", "default", {'fields': {'value': '', 'title': 'Tv Controls', 'unit': '', 'title2': '', 'state_text': ''}, 'css': {}, 'static_css': {'unit_style': '', 'state_text_style': 'color: #fff;', 'widget_style': 'background-color: #444;', 'title_style': 'font-weight: 400;margin-top: 8px;color: #fff;text-transform: uppercase;font-size: 20px;', 'value_style': 'color: #fff;', 'title2_style': 'color: #fff;'}, 'title_style': 'margin-top: 8px;font-size: 20px;text-transform: uppercase;font-weight: 400;', 'static_icons': [], 'icons': [], 'widget_type': 'basedisplay'})
    
        widgets["default-tv-turn-off"] = new baseswitch("default-tv-turn-off", "", "default", {'enable': 1, 'ignore_state': 1, 'icon_style_inactive': 'color: #82bced;', 'static_icons': [], 'entity': 'script.tv_turn_off', 'post_service_active': {'entity_id': 'script.tv_turn_off', 'service': 'homeassistant/turn_on'}, 'momentary': 1000, 'icon_style_active': 'color: #c61a11;', 'state_inactive': 'off', 'state_active': 'on', 'fields': {'title': 'Tv Turn Off', 'icon_style': '', 'state_text': '', 'icon': '', 'title2': ''}, 'icon_on': 'mdi-power', 'css': {'icon_style_inactive': 'color: #82bced;', 'icon_style_active': 'color: #c61a11;'}, 'static_css': {'title_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;'}, 'post_service_inactive': {'entity_id': 'script.tv_turn_off', 'service': 'homeassistant/turn_off'}, 'icons': {'icon_on': 'mdi-power', 'icon_off': 'mdi-power'}, 'widget_type': 'baseswitch', 'icon_off': 'mdi-power'})
    
        widgets["default-tv-cast"] = new baseswitch("default-tv-cast", "", "default", {'enable': 1, 'ignore_state': 1, 'icon_style_inactive': 'color: #82bced;', 'static_icons': [], 'entity': 'script.tv_source_cast', 'post_service_active': {'entity_id': 'script.tv_source_cast', 'service': 'homeassistant/turn_on'}, 'momentary': 1000, 'icon_style_active': 'color: #1e36ed;', 'state_inactive': 'off', 'state_active': 'on', 'fields': {'title': 'Cast', 'icon_style': '', 'state_text': '', 'icon': '', 'title2': ''}, 'icon_on': 'mdi-cast', 'css': {'icon_style_inactive': 'color: #82bced;', 'icon_style_active': 'color: #1e36ed;'}, 'static_css': {'title_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;'}, 'post_service_inactive': {'entity_id': 'script.tv_source_cast', 'service': 'homeassistant/turn_off'}, 'icons': {'icon_on': 'mdi-cast', 'icon_off': 'mdi-cast'}, 'widget_type': 'baseswitch', 'icon_off': 'mdi-cast'})
    
        widgets["default-tv-hdmi-5"] = new baseswitch("default-tv-hdmi-5", "", "default", {'enable': 1, 'ignore_state': 1, 'icon_style_inactive': 'color: #82bced;', 'static_icons': [], 'entity': 'script.tv_source_cast', 'post_service_active': {'entity_id': 'script.tv_source_cast', 'service': 'homeassistant/turn_on'}, 'momentary': 1000, 'icon_style_active': 'color: #1e36ed;', 'state_inactive': 'off', 'state_active': 'on', 'fields': {'title': 'Nintento Switch', 'icon_style': '', 'state_text': '', 'icon': '', 'title2': ''}, 'icon_on': 'mdi-nintendo-switch', 'css': {'icon_style_inactive': 'color: #82bced;', 'icon_style_active': 'color: #1e36ed;'}, 'static_css': {'title_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;'}, 'post_service_inactive': {'entity_id': 'script.tv_source_cast', 'service': 'homeassistant/turn_off'}, 'icons': {'icon_on': 'mdi-nintendo-switch', 'icon_off': 'mdi-nintendo-switch'}, 'widget_type': 'baseswitch', 'icon_off': 'mdi-nintendo-switch'})
    
        widgets["default-tv-turn-on"] = new baseswitch("default-tv-turn-on", "", "default", {'enable': 1, 'ignore_state': 1, 'icon_style_inactive': 'color: #82bced;', 'static_icons': [], 'entity': 'script.tv_turn_on', 'post_service_active': {'entity_id': 'script.tv_turn_on', 'service': 'homeassistant/turn_on'}, 'momentary': 1000, 'icon_style_active': 'color: #efe415;', 'state_inactive': 'off', 'state_active': 'on', 'fields': {'title': 'Tv Turn On', 'icon_style': '', 'state_text': '', 'icon': '', 'title2': ''}, 'icon_on': 'fa-bolt', 'css': {'icon_style_inactive': 'color: #82bced;', 'icon_style_active': 'color: #efe415;'}, 'static_css': {'title_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;'}, 'post_service_inactive': {'entity_id': 'script.tv_turn_on', 'service': 'homeassistant/turn_off'}, 'icons': {'icon_on': 'fa-bolt', 'icon_off': 'fa-bolt'}, 'widget_type': 'baseswitch', 'icon_off': 'fa-bolt'})
    
        widgets["default-label-scenes"] = new basedisplay("default-label-scenes", "", "default", {'fields': {'value': '', 'title': 'Scenes', 'unit': '', 'title2': '', 'state_text': ''}, 'css': {}, 'static_css': {'unit_style': '', 'state_text_style': 'color: #fff;', 'widget_style': 'background-color: #444;', 'title_style': 'font-weight: 400;margin-top: 8px;color: #fff;text-transform: uppercase;font-size: 20px;', 'value_style': 'color: #fff;', 'title2_style': 'color: #fff;'}, 'title_style': 'margin-top: 8px;font-size: 20px;text-transform: uppercase;font-weight: 400;', 'static_icons': [], 'icons': [], 'widget_type': 'basedisplay'})
    
        widgets["default-scene-cool"] = new baseswitch("default-scene-cool", "", "default", {'enable': 1, 'ignore_state': 1, 'icon_style_inactive': 'color: #ec81ef;', 'static_icons': [], 'entity': 'scene.living_room_cool', 'post_service_active': {'entity_id': 'scene.living_room_cool', 'service': 'homeassistant/turn_on'}, 'momentary': 1000, 'icon_style_active': 'color: #36a7ed;', 'state_inactive': 'scening', 'state_active': 'stillscening', 'fields': {'title': 'Cool', 'icon_style': '', 'state_text': '', 'icon': '', 'title2': ''}, 'icon_on': 'mdi-snowflake', 'css': {'icon_style_inactive': 'color: #ec81ef;', 'icon_style_active': 'color: #36a7ed;'}, 'static_css': {'title_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;'}, 'post_service_inactive': {'entity_id': 'scene.living_room_cool', 'service': 'homeassistant/turn_off'}, 'icons': {'icon_on': 'mdi-snowflake', 'icon_off': 'mdi-snowflake'}, 'widget_type': 'baseswitch', 'icon_off': 'mdi-snowflake'})
    
        widgets["default-scene-honey"] = new baseswitch("default-scene-honey", "", "default", {'enable': 1, 'ignore_state': 1, 'icon_style_inactive': 'color: #ec81ef;', 'static_icons': [], 'entity': 'scene.living_room_honey', 'post_service_active': {'entity_id': 'scene.living_room_honey', 'service': 'homeassistant/turn_on'}, 'momentary': 1000, 'icon_style_active': 'color: #f9e01d;', 'state_inactive': 'scening', 'state_active': 'stillscening', 'fields': {'title': 'Honey', 'icon_style': '', 'state_text': '', 'icon': '', 'title2': ''}, 'icon_on': 'fa-tint', 'css': {'icon_style_inactive': 'color: #ec81ef;', 'icon_style_active': 'color: #f9e01d;'}, 'static_css': {'title_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;'}, 'post_service_inactive': {'entity_id': 'scene.living_room_honey', 'service': 'homeassistant/turn_off'}, 'icons': {'icon_on': 'fa-tint', 'icon_off': 'fa-tint'}, 'widget_type': 'baseswitch', 'icon_off': 'fa-tint'})
    
        widgets["default-scene-grass"] = new baseswitch("default-scene-grass", "", "default", {'enable': 1, 'ignore_state': 1, 'icon_style_inactive': 'color: #ec81ef;', 'static_icons': [], 'entity': 'scene.living_room_grass', 'post_service_active': {'entity_id': 'scene.living_room_grass', 'service': 'homeassistant/turn_on'}, 'momentary': 1000, 'icon_style_active': 'color: #29d619;', 'state_inactive': 'scening', 'state_active': 'stillscening', 'fields': {'title': 'Grass', 'icon_style': '', 'state_text': '', 'icon': '', 'title2': ''}, 'icon_on': 'fa-leaf', 'css': {'icon_style_inactive': 'color: #ec81ef;', 'icon_style_active': 'color: #29d619;'}, 'static_css': {'title_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;'}, 'post_service_inactive': {'entity_id': 'scene.living_room_grass', 'service': 'homeassistant/turn_off'}, 'icons': {'icon_on': 'fa-leaf', 'icon_off': 'fa-leaf'}, 'widget_type': 'baseswitch', 'icon_off': 'fa-leaf'})
    
        widgets["default-scene-warm"] = new baseswitch("default-scene-warm", "", "default", {'enable': 1, 'ignore_state': 1, 'icon_style_inactive': 'color: #ec81ef;', 'static_icons': [], 'entity': 'scene.living_room_warm', 'post_service_active': {'entity_id': 'scene.living_room_warm', 'service': 'homeassistant/turn_on'}, 'momentary': 1000, 'icon_style_active': 'color: #c63c09;', 'state_inactive': 'scening', 'state_active': 'stillscening', 'fields': {'title': 'Warm', 'icon_style': '', 'state_text': '', 'icon': '', 'title2': ''}, 'icon_on': 'mdi-fire', 'css': {'icon_style_inactive': 'color: #ec81ef;', 'icon_style_active': 'color: #c63c09;'}, 'static_css': {'title_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;'}, 'post_service_inactive': {'entity_id': 'scene.living_room_warm', 'service': 'homeassistant/turn_off'}, 'icons': {'icon_on': 'mdi-fire', 'icon_off': 'mdi-fire'}, 'widget_type': 'baseswitch', 'icon_off': 'mdi-fire'})
    
        widgets["default-label-house"] = new basedisplay("default-label-house", "", "default", {'fields': {'value': '', 'title': 'House Stuff', 'unit': '', 'title2': '', 'state_text': ''}, 'css': {}, 'static_css': {'unit_style': '', 'state_text_style': 'color: #fff;', 'widget_style': 'background-color: #444;', 'title_style': 'font-weight: 400;margin-top: 8px;color: #fff;text-transform: uppercase;font-size: 20px;', 'value_style': 'color: #fff;', 'title2_style': 'color: #fff;'}, 'title_style': 'margin-top: 8px;font-size: 20px;text-transform: uppercase;font-weight: 400;', 'static_icons': [], 'icons': [], 'widget_type': 'basedisplay'})
    
        widgets["default-sleep-mode"] = new baseswitch("default-sleep-mode", "", "default", {'enable': 1, 'post_service_inactive': {'entity_id': 'input_boolean.sleep_mode', 'service': 'homeassistant/turn_off'}, 'icon_style_inactive': 'color: #c60808;', 'static_icons': [], 'entity': 'input_boolean.sleep_mode', 'post_service_active': {'entity_id': 'input_boolean.sleep_mode', 'service': 'homeassistant/turn_on'}, 'icon_style_active': 'color: #36a7ed;', 'state_inactive': 'off', 'fields': {'title': 'Sleep Mode', 'icon_style': '', 'state_text': '', 'icon': '', 'title2': ''}, 'icon_on': 'fa-bed', 'css': {'icon_style_inactive': 'color: #c60808;', 'icon_style_active': 'color: #36a7ed;'}, 'static_css': {'title_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;'}, 'state_active': 'on', 'icons': {'icon_on': 'fa-bed', 'icon_off': 'mdi-white-balance-sunny'}, 'widget_type': 'baseswitch', 'icon_off': 'mdi-white-balance-sunny'})
    
        widgets["default-guest-sleep"] = new baseswitch("default-guest-sleep", "", "default", {'enable': 1, 'ignore_state': 1, 'static_icons': [], 'entity': 'script.guest_sleep', 'post_service_active': {'entity_id': 'script.guest_sleep', 'service': 'homeassistant/turn_on'}, 'momentary': 1000, 'icon_style_active': 'color: #8a3cc1;', 'state_inactive': 'off', 'state_active': 'on', 'fields': {'title': 'Guest Bed Time', 'icon_style': '', 'state_text': '', 'icon': '', 'title2': ''}, 'icon_on': 'fa-bed', 'css': {'icon_style_inactive': 'color: #888;', 'icon_style_active': 'color: #8a3cc1;'}, 'static_css': {'title_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;'}, 'post_service_inactive': {'entity_id': 'script.guest_sleep', 'service': 'homeassistant/turn_off'}, 'icons': {'icon_on': 'fa-bed', 'icon_off': 'mdi-weather-night'}, 'widget_type': 'baseswitch', 'icon_off': 'mdi-weather-night'})
    

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