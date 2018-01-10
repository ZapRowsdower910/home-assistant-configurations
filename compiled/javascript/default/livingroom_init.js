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
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-javascript-default-living-room-dash" id="default-living-room-dash"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 2, 1, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-javascript-default-sun-room-dash" id="default-sun-room-dash"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 2, 3, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-label-living-room-dash" id="default-label-living-room-dash"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 4, 1, 1, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-living-room-lights" id="default-living-room-lights"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 2, 3, 3, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-label-media" id="default-label-media"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 4, 1, 2, 6)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-scene-bright" id="default-scene-bright"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 2, 1, 7)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-scene-movies" id="default-scene-movies"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 2, 2, 7)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-scene-dim" id="default-scene-dim"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 2, 3, 7)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-auto-lights" id="default-auto-lights"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 2, 4, 7)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-label-tv" id="default-label-tv"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 4, 1, 1, 9)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-tv-turn-off" id="default-tv-turn-off"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 2, 1, 10)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-tv-cast" id="default-tv-cast"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 2, 2, 10)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-tv-hdmi-5" id="default-tv-hdmi-5"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 2, 3, 10)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-tv-turn-on" id="default-tv-turn-on"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 2, 4, 10)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-label-scenes" id="default-label-scenes"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 4, 1, 1, 12)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-scene-cool" id="default-scene-cool"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 2, 1, 13)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-scene-honey" id="default-scene-honey"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 2, 2, 13)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-scene-grass" id="default-scene-grass"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 2, 3, 13)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-scene-warm" id="default-scene-warm"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 2, 4, 13)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-label-house" id="default-label-house"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 4, 1, 1, 15)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-sleep-mode" id="default-sleep-mode"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 2, 1, 16)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-guest-sleep" id="default-guest-sleep"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 2, 4, 16)
    
    
    
    var widgets = {}
    // Initialize Widgets
    
        widgets["default-living-room-dash"] = new javascript("default-living-room-dash", "", "default", {'static_icons': [], 'fields': {'title': 'Living Room', 'icon': '', 'icon_style': '', 'title2': ''}, 'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}, 'widget_type': 'javascript', 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-gear'}, 'static_css': {'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'dashboard': 'LivingRoom'})
    
        widgets["default-sun-room-dash"] = new javascript("default-sun-room-dash", "", "default", {'static_icons': [], 'fields': {'title': 'Sun Room', 'icon': '', 'icon_style': '', 'title2': ''}, 'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}, 'widget_type': 'javascript', 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-gear'}, 'static_css': {'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'dashboard': 'SunRoom'})
    
        widgets["default-label-living-room-dash"] = new basedisplay("default-label-living-room-dash", "", "default", {'static_icons': [], 'fields': {'state_text': '', 'title': 'Living Room Dashboard', 'unit': '', 'title2': '', 'value': ''}, 'css': {}, 'widget_type': 'basedisplay', 'icons': [], 'static_css': {'widget_style': 'background-color: #444;', 'state_text_style': 'color: #fff;', 'unit_style': '', 'value_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'title_style': 'font-size: 20px;text-transform: uppercase;margin-top: 8px;font-weight: 400;color: #fff;'}, 'title_style': 'font-size: 20px;text-transform: uppercase;margin-top: 8px;font-weight: 400;'})
    
        widgets["default-living-room-lights"] = new baselight("default-living-room-lights", "", "default", {'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}, 'fields': {'units': '%', 'title2': '', 'state_text': '', 'icon': '', 'icon_style': '', 'level': '', 'title': 'Lights'}, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'group.living_room_lights'}, 'widget_type': 'baselight', 'icons': {'icon_off': 'fa-lightbulb-o', 'icon_on': 'mdi-lightbulb-on'}, 'monitored_entity': 'light.living_room_track_c_1', 'icon_off': 'fa-lightbulb-o', 'static_css': {'widget_style': 'background-color: #444;', 'state_text_style': 'color: #fff;', 'level_down_style': 'color: #888;', 'unit_style': 'color: #fff;', 'level_up_style': 'color: #888;', 'level_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'icon_style_active': 'color: #f9ff5e;', 'icon_style_inactive': 'color: white;', 'css': {'icon_style_inactive': 'color: white;', 'icon_style_active': 'color: #f9ff5e;'}, 'entity': 'group.living_room_lights', 'icon_on': 'mdi-lightbulb-on', 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'group.living_room_lights'}})
    
        widgets["default-label-media"] = new basedisplay("default-label-media", "", "default", {'static_icons': [], 'fields': {'state_text': '', 'title': 'Media Controls', 'unit': '', 'title2': '', 'value': ''}, 'css': {}, 'widget_type': 'basedisplay', 'icons': [], 'static_css': {'widget_style': 'background-color: #444;', 'state_text_style': 'color: #fff;', 'unit_style': '', 'value_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'title_style': 'font-size: 20px;text-transform: uppercase;margin-top: 8px;font-weight: 400;color: #fff;'}, 'title_style': 'font-size: 20px;text-transform: uppercase;margin-top: 8px;font-weight: 400;'})
    
        widgets["default-scene-bright"] = new baseswitch("default-scene-bright", "", "default", {'static_icons': [], 'fields': {'state_text': '', 'title': 'Bright', 'icon': '', 'icon_style': '', 'title2': ''}, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'scene.living_room_bright'}, 'enable': 1, 'icons': {'icon_off': 'mdi-lightbulb', 'icon_on': 'mdi-lightbulb'}, 'state_active': 'stillscening', 'state_inactive': 'scening', 'static_css': {'widget_style': 'background-color: #444;', 'state_text_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'icon_style_active': 'color: #36a7ed;', 'icon_style_inactive': 'color: #81ef99;', 'css': {'icon_style_inactive': 'color: #81ef99;', 'icon_style_active': 'color: #36a7ed;'}, 'entity': 'scene.living_room_bright', 'momentary': 1000, 'icon_on': 'mdi-lightbulb', 'widget_type': 'baseswitch', 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'scene.living_room_bright'}, 'icon_off': 'mdi-lightbulb', 'ignore_state': 1})
    
        widgets["default-scene-movies"] = new baseswitch("default-scene-movies", "", "default", {'static_icons': [], 'fields': {'state_text': '', 'title': 'Movies', 'icon': '', 'icon_style': '', 'title2': ''}, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'scene.living_room_late_night'}, 'enable': 1, 'icons': {'icon_off': 'fa-film', 'icon_on': 'fa-film'}, 'state_active': 'stillscening', 'state_inactive': 'scening', 'static_css': {'widget_style': 'background-color: #444;', 'state_text_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'icon_style_active': 'color: #36a7ed;', 'icon_style_inactive': 'color: #81ef99;', 'css': {'icon_style_inactive': 'color: #81ef99;', 'icon_style_active': 'color: #36a7ed;'}, 'entity': 'scene.living_room_late_night', 'momentary': 1000, 'icon_on': 'fa-film', 'widget_type': 'baseswitch', 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'scene.living_room_late_night'}, 'icon_off': 'fa-film', 'ignore_state': 1})
    
        widgets["default-scene-dim"] = new baseswitch("default-scene-dim", "", "default", {'static_icons': [], 'fields': {'state_text': '', 'title': 'Dim', 'icon': '', 'icon_style': '', 'title2': ''}, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'scene.living_room_dim'}, 'enable': 1, 'icons': {'icon_off': 'mdi-lightbulb-outline', 'icon_on': 'mdi-lightbulb-outline'}, 'state_active': 'stillscening', 'state_inactive': 'scening', 'static_css': {'widget_style': 'background-color: #444;', 'state_text_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'icon_style_active': 'color: #36a7ed;', 'icon_style_inactive': 'color: #81ef99;', 'css': {'icon_style_inactive': 'color: #81ef99;', 'icon_style_active': 'color: #36a7ed;'}, 'entity': 'scene.living_room_dim', 'momentary': 1000, 'icon_on': 'mdi-lightbulb-outline', 'widget_type': 'baseswitch', 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'scene.living_room_dim'}, 'icon_off': 'mdi-lightbulb-outline', 'ignore_state': 1})
    
        widgets["default-auto-lights"] = new baseswitch("default-auto-lights", "", "default", {'static_icons': [], 'fields': {'state_text': '', 'title': 'Auto Lights', 'icon': '', 'icon_style': '', 'title2': ''}, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'input_boolean.tv_auto_lights'}, 'enable': 1, 'icons': {'icon_off': 'mdi-camcorder-box-off', 'icon_on': 'mdi-camcorder-box'}, 'state_active': 'on', 'state_inactive': 'off', 'static_css': {'widget_style': 'background-color: #444;', 'state_text_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'icon_style_active': 'color: #0f9928;', 'icon_style_inactive': 'color: #c60808;', 'css': {'icon_style_inactive': 'color: #c60808;', 'icon_style_active': 'color: #0f9928;'}, 'entity': 'input_boolean.tv_auto_lights', 'icon_on': 'mdi-camcorder-box', 'widget_type': 'baseswitch', 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'input_boolean.tv_auto_lights'}, 'icon_off': 'mdi-camcorder-box-off'})
    
        widgets["default-label-tv"] = new basedisplay("default-label-tv", "", "default", {'static_icons': [], 'fields': {'state_text': '', 'title': 'Tv Controls', 'unit': '', 'title2': '', 'value': ''}, 'css': {}, 'widget_type': 'basedisplay', 'icons': [], 'static_css': {'widget_style': 'background-color: #444;', 'state_text_style': 'color: #fff;', 'unit_style': '', 'value_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'title_style': 'font-size: 20px;text-transform: uppercase;margin-top: 8px;font-weight: 400;color: #fff;'}, 'title_style': 'font-size: 20px;text-transform: uppercase;margin-top: 8px;font-weight: 400;'})
    
        widgets["default-tv-turn-off"] = new baseswitch("default-tv-turn-off", "", "default", {'static_icons': [], 'fields': {'state_text': '', 'title': 'Tv Turn Off', 'icon': '', 'icon_style': '', 'title2': ''}, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'script.tv_turn_off'}, 'enable': 1, 'icons': {'icon_off': 'mdi-power', 'icon_on': 'mdi-power'}, 'state_active': 'on', 'state_inactive': 'off', 'static_css': {'widget_style': 'background-color: #444;', 'state_text_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'icon_style_active': 'color: #c61a11;', 'icon_style_inactive': 'color: #82bced;', 'css': {'icon_style_inactive': 'color: #82bced;', 'icon_style_active': 'color: #c61a11;'}, 'entity': 'script.tv_turn_off', 'momentary': 1000, 'icon_on': 'mdi-power', 'widget_type': 'baseswitch', 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'script.tv_turn_off'}, 'icon_off': 'mdi-power', 'ignore_state': 1})
    
        widgets["default-tv-cast"] = new baseswitch("default-tv-cast", "", "default", {'static_icons': [], 'fields': {'state_text': '', 'title': 'Cast', 'icon': '', 'icon_style': '', 'title2': ''}, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'script.tv_source_cast'}, 'enable': 1, 'icons': {'icon_off': 'mdi-cast', 'icon_on': 'mdi-cast'}, 'state_active': 'on', 'state_inactive': 'off', 'static_css': {'widget_style': 'background-color: #444;', 'state_text_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'icon_style_active': 'color: #1e36ed;', 'icon_style_inactive': 'color: #82bced;', 'css': {'icon_style_inactive': 'color: #82bced;', 'icon_style_active': 'color: #1e36ed;'}, 'entity': 'script.tv_source_cast', 'momentary': 1000, 'icon_on': 'mdi-cast', 'widget_type': 'baseswitch', 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'script.tv_source_cast'}, 'icon_off': 'mdi-cast', 'ignore_state': 1})
    
        widgets["default-tv-hdmi-5"] = new baseswitch("default-tv-hdmi-5", "", "default", {'static_icons': [], 'fields': {'state_text': '', 'title': 'Nintento Switch', 'icon': '', 'icon_style': '', 'title2': ''}, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'script.tv_source_hdmi_5'}, 'enable': 1, 'icons': {'icon_off': 'mdi-nintendo-switch', 'icon_on': 'mdi-nintendo-switch'}, 'state_active': 'on', 'state_inactive': 'off', 'static_css': {'widget_style': 'background-color: #444;', 'state_text_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'icon_style_active': 'color: #1e36ed;', 'icon_style_inactive': 'color: #82bced;', 'css': {'icon_style_inactive': 'color: #82bced;', 'icon_style_active': 'color: #1e36ed;'}, 'entity': 'script.tv_source_hdmi_5', 'momentary': 1000, 'icon_on': 'mdi-nintendo-switch', 'widget_type': 'baseswitch', 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'script.tv_source_hdmi_5'}, 'icon_off': 'mdi-nintendo-switch', 'ignore_state': 1})
    
        widgets["default-tv-turn-on"] = new baseswitch("default-tv-turn-on", "", "default", {'static_icons': [], 'fields': {'state_text': '', 'title': 'Tv Turn On', 'icon': '', 'icon_style': '', 'title2': ''}, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'script.tv_turn_on'}, 'enable': 1, 'icons': {'icon_off': 'fa-bolt', 'icon_on': 'fa-bolt'}, 'state_active': 'on', 'state_inactive': 'off', 'static_css': {'widget_style': 'background-color: #444;', 'state_text_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'icon_style_active': 'color: #efe415;', 'icon_style_inactive': 'color: #82bced;', 'css': {'icon_style_inactive': 'color: #82bced;', 'icon_style_active': 'color: #efe415;'}, 'entity': 'script.tv_turn_on', 'momentary': 1000, 'icon_on': 'fa-bolt', 'widget_type': 'baseswitch', 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'script.tv_turn_on'}, 'icon_off': 'fa-bolt', 'ignore_state': 1})
    
        widgets["default-label-scenes"] = new basedisplay("default-label-scenes", "", "default", {'static_icons': [], 'fields': {'state_text': '', 'title': 'Scenes', 'unit': '', 'title2': '', 'value': ''}, 'css': {}, 'widget_type': 'basedisplay', 'icons': [], 'static_css': {'widget_style': 'background-color: #444;', 'state_text_style': 'color: #fff;', 'unit_style': '', 'value_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'title_style': 'font-size: 20px;text-transform: uppercase;margin-top: 8px;font-weight: 400;color: #fff;'}, 'title_style': 'font-size: 20px;text-transform: uppercase;margin-top: 8px;font-weight: 400;'})
    
        widgets["default-scene-cool"] = new baseswitch("default-scene-cool", "", "default", {'static_icons': [], 'fields': {'state_text': '', 'title': 'Cool', 'icon': '', 'icon_style': '', 'title2': ''}, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'scene.living_room_cool'}, 'enable': 1, 'icons': {'icon_off': 'mdi-snowflake', 'icon_on': 'mdi-snowflake'}, 'state_active': 'stillscening', 'state_inactive': 'scening', 'static_css': {'widget_style': 'background-color: #444;', 'state_text_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'icon_style_active': 'color: #36a7ed;', 'icon_style_inactive': 'color: #ec81ef;', 'css': {'icon_style_inactive': 'color: #ec81ef;', 'icon_style_active': 'color: #36a7ed;'}, 'entity': 'scene.living_room_cool', 'momentary': 1000, 'icon_on': 'mdi-snowflake', 'widget_type': 'baseswitch', 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'scene.living_room_cool'}, 'icon_off': 'mdi-snowflake', 'ignore_state': 1})
    
        widgets["default-scene-honey"] = new baseswitch("default-scene-honey", "", "default", {'static_icons': [], 'fields': {'state_text': '', 'title': 'Honey', 'icon': '', 'icon_style': '', 'title2': ''}, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'scene.living_room_honey'}, 'enable': 1, 'icons': {'icon_off': 'fa-tint', 'icon_on': 'fa-tint'}, 'state_active': 'stillscening', 'state_inactive': 'scening', 'static_css': {'widget_style': 'background-color: #444;', 'state_text_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'icon_style_active': 'color: #f9e01d;', 'icon_style_inactive': 'color: #ec81ef;', 'css': {'icon_style_inactive': 'color: #ec81ef;', 'icon_style_active': 'color: #f9e01d;'}, 'entity': 'scene.living_room_honey', 'momentary': 1000, 'icon_on': 'fa-tint', 'widget_type': 'baseswitch', 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'scene.living_room_honey'}, 'icon_off': 'fa-tint', 'ignore_state': 1})
    
        widgets["default-scene-grass"] = new baseswitch("default-scene-grass", "", "default", {'static_icons': [], 'fields': {'state_text': '', 'title': 'Grass', 'icon': '', 'icon_style': '', 'title2': ''}, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'scene.living_room_grass'}, 'enable': 1, 'icons': {'icon_off': 'fa-leaf', 'icon_on': 'fa-leaf'}, 'state_active': 'stillscening', 'state_inactive': 'scening', 'static_css': {'widget_style': 'background-color: #444;', 'state_text_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'icon_style_active': 'color: #29d619;', 'icon_style_inactive': 'color: #ec81ef;', 'css': {'icon_style_inactive': 'color: #ec81ef;', 'icon_style_active': 'color: #29d619;'}, 'entity': 'scene.living_room_grass', 'momentary': 1000, 'icon_on': 'fa-leaf', 'widget_type': 'baseswitch', 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'scene.living_room_grass'}, 'icon_off': 'fa-leaf', 'ignore_state': 1})
    
        widgets["default-scene-warm"] = new baseswitch("default-scene-warm", "", "default", {'static_icons': [], 'fields': {'state_text': '', 'title': 'Warm', 'icon': '', 'icon_style': '', 'title2': ''}, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'scene.living_room_warm'}, 'enable': 1, 'icons': {'icon_off': 'mdi-fire', 'icon_on': 'mdi-fire'}, 'state_active': 'stillscening', 'state_inactive': 'scening', 'static_css': {'widget_style': 'background-color: #444;', 'state_text_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'icon_style_active': 'color: #c63c09;', 'icon_style_inactive': 'color: #ec81ef;', 'css': {'icon_style_inactive': 'color: #ec81ef;', 'icon_style_active': 'color: #c63c09;'}, 'entity': 'scene.living_room_warm', 'momentary': 1000, 'icon_on': 'mdi-fire', 'widget_type': 'baseswitch', 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'scene.living_room_warm'}, 'icon_off': 'mdi-fire', 'ignore_state': 1})
    
        widgets["default-label-house"] = new basedisplay("default-label-house", "", "default", {'static_icons': [], 'fields': {'state_text': '', 'title': 'House Stuff', 'unit': '', 'title2': '', 'value': ''}, 'css': {}, 'widget_type': 'basedisplay', 'icons': [], 'static_css': {'widget_style': 'background-color: #444;', 'state_text_style': 'color: #fff;', 'unit_style': '', 'value_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'title_style': 'font-size: 20px;text-transform: uppercase;margin-top: 8px;font-weight: 400;color: #fff;'}, 'title_style': 'font-size: 20px;text-transform: uppercase;margin-top: 8px;font-weight: 400;'})
    
        widgets["default-sleep-mode"] = new baseswitch("default-sleep-mode", "", "default", {'static_icons': [], 'fields': {'state_text': '', 'title': 'Sleep Mode', 'icon': '', 'icon_style': '', 'title2': ''}, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'input_boolean.sleep_mode'}, 'enable': 1, 'icons': {'icon_off': 'mdi-white-balance-sunny', 'icon_on': 'fa-bed'}, 'state_active': 'on', 'state_inactive': 'off', 'static_css': {'widget_style': 'background-color: #444;', 'state_text_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'icon_style_active': 'color: #36a7ed;', 'icon_style_inactive': 'color: #c60808;', 'css': {'icon_style_inactive': 'color: #c60808;', 'icon_style_active': 'color: #36a7ed;'}, 'entity': 'input_boolean.sleep_mode', 'icon_on': 'fa-bed', 'widget_type': 'baseswitch', 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'input_boolean.sleep_mode'}, 'icon_off': 'mdi-white-balance-sunny'})
    
        widgets["default-guest-sleep"] = new baseswitch("default-guest-sleep", "", "default", {'static_icons': [], 'fields': {'state_text': '', 'title': 'Guest Bed Time', 'icon': '', 'icon_style': '', 'title2': ''}, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'script.guest_sleep'}, 'enable': 1, 'icons': {'icon_off': 'mdi-weather-night', 'icon_on': 'fa-bed'}, 'state_active': 'on', 'state_inactive': 'off', 'static_css': {'widget_style': 'background-color: #444;', 'state_text_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'icon_style_active': 'color: #8a3cc1;', 'css': {'icon_style_inactive': 'color: #888;', 'icon_style_active': 'color: #8a3cc1;'}, 'entity': 'script.guest_sleep', 'momentary': 1000, 'icon_on': 'fa-bed', 'widget_type': 'baseswitch', 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'script.guest_sleep'}, 'icon_off': 'mdi-weather-night', 'ignore_state': 1})
    

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