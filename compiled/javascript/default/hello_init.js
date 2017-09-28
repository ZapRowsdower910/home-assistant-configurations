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
        widget_base_dimensions: [83, 100],
        avoid_overlapped_widgets: true,
        max_rows: 15,
        max_size_x: 4,
        shift_widgets_up: false
    }).data('gridster').disable();
    
    // Add Widgets

    var gridster = $(".gridster ul").gridster().data('gridster');
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-group-living-room-lights" id="default-group-living-room-lights"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 1, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-scene-bright" id="default-scene-bright"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 1, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-scene-movies" id="default-scene-movies"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 2, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-scene-dim" id="default-scene-dim"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 3, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-label-scenes" id="default-label-scenes"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 4, 1, 1, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-scene-cool" id="default-scene-cool"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 1, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-scene-honey" id="default-scene-honey"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 2, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-scene-grass" id="default-scene-grass"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 3, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-scene-warm" id="default-scene-warm"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 4, 4)
    
    
    
    var widgets = {}
    // Initialize Widgets
    
        widgets["default-group-living-room-lights"] = new baselight("default-group-living-room-lights", "", "default", {'title_is_friendly_name': 1, 'fields': {'title': '', 'level': '', 'units': '%', 'icon_style': '', 'icon': '', 'title2': '', 'state_text': ''}, 'entity': 'group.living_room_lights', 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'group.living_room_lights'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'group.living_room_lights'}, 'widget_type': 'baselight', 'static_css': {'widget_style': 'background-color: #444;', 'title_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'level_down_style': 'color: #888;', 'level_style': 'color: #fff;', 'level_up_style': 'color: #888;', 'unit_style': 'color: #fff;', 'title2_style': 'color: #fff;'}, 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}, 'icons': {'icon_off': 'fa-circle-thin', 'icon_on': 'fa-circle'}})
    
        widgets["default-scene-bright"] = new baseswitch("default-scene-bright", "", "default", {'ignore_state': 1, 'state_inactive': 'scening', 'entity': 'scene.living_room_bright', 'state_active': 'stillscening', 'static_icons': [], 'momentary': 1000, 'widget_type': 'baseswitch', 'fields': {'icon': '', 'title': 'Bright', 'title2': '', 'icon_style': '', 'state_text': ''}, 'enable': 1, 'icons': {'icon_off': 'fa-square', 'icon_on': 'fa-square'}, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'scene.living_room_bright'}, 'static_css': {'widget_style': 'background-color: #444;', 'title_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'title2_style': 'color: #fff;'}, 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'scene.living_room_bright'}})
    
        widgets["default-scene-movies"] = new baseswitch("default-scene-movies", "", "default", {'ignore_state': 1, 'state_inactive': 'scening', 'entity': 'scene.plex_late_night', 'state_active': 'stillscening', 'static_icons': [], 'momentary': 1000, 'widget_type': 'baseswitch', 'fields': {'icon': '', 'title': 'Movies', 'title2': '', 'icon_style': '', 'state_text': ''}, 'enable': 1, 'icons': {'icon_off': 'fa-square', 'icon_on': 'fa-square'}, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'scene.plex_late_night'}, 'static_css': {'widget_style': 'background-color: #444;', 'title_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'title2_style': 'color: #fff;'}, 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'scene.plex_late_night'}})
    
        widgets["default-scene-dim"] = new baseswitch("default-scene-dim", "", "default", {'ignore_state': 1, 'state_inactive': 'scening', 'entity': 'scene.living_room_dim', 'state_active': 'stillscening', 'static_icons': [], 'momentary': 1000, 'widget_type': 'baseswitch', 'fields': {'icon': '', 'title': 'Dim', 'title2': '', 'icon_style': '', 'state_text': ''}, 'enable': 1, 'icons': {'icon_off': 'fa-square', 'icon_on': 'fa-square'}, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'scene.living_room_dim'}, 'static_css': {'widget_style': 'background-color: #444;', 'title_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'title2_style': 'color: #fff;'}, 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'scene.living_room_dim'}})
    
        widgets["default-label-scenes"] = new basedisplay("default-label-scenes", "", "default", {'fields': {'unit': '', 'title': 'Colored', 'title2': '', 'value': 'Scenes', 'state_text': ''}, 'static_css': {'widget_style': 'background-color: #444;', 'title_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'unit_style': '', 'value_style': 'color: #fff;', 'title2_style': 'color: #fff;'}, 'icons': [], 'widget_type': 'basedisplay', 'css': {}, 'static_icons': []})
    
        widgets["default-scene-cool"] = new baseswitch("default-scene-cool", "", "default", {'ignore_state': 1, 'state_inactive': 'scening', 'entity': 'scene.living_room_cool', 'state_active': 'stillscening', 'static_icons': [], 'momentary': 1000, 'widget_type': 'baseswitch', 'fields': {'icon': '', 'title': 'Cool', 'title2': '', 'icon_style': '', 'state_text': ''}, 'enable': 1, 'icons': {'icon_off': 'fa-square', 'icon_on': 'fa-square'}, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'scene.living_room_cool'}, 'static_css': {'widget_style': 'background-color: #444;', 'title_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'title2_style': 'color: #fff;'}, 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'scene.living_room_cool'}})
    
        widgets["default-scene-honey"] = new baseswitch("default-scene-honey", "", "default", {'ignore_state': 1, 'state_inactive': 'scening', 'entity': 'scene.living_room_honey', 'state_active': 'stillscening', 'static_icons': [], 'momentary': 1000, 'widget_type': 'baseswitch', 'fields': {'icon': '', 'title': 'Honey', 'title2': '', 'icon_style': '', 'state_text': ''}, 'enable': 1, 'icons': {'icon_off': 'fa-square', 'icon_on': 'fa-square'}, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'scene.living_room_honey'}, 'static_css': {'widget_style': 'background-color: #444;', 'title_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'title2_style': 'color: #fff;'}, 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'scene.living_room_honey'}})
    
        widgets["default-scene-grass"] = new baseswitch("default-scene-grass", "", "default", {'ignore_state': 1, 'state_inactive': 'scening', 'entity': 'scene.living_room_grass', 'state_active': 'stillscening', 'static_icons': [], 'momentary': 1000, 'widget_type': 'baseswitch', 'fields': {'icon': '', 'title': 'Grass', 'title2': '', 'icon_style': '', 'state_text': ''}, 'enable': 1, 'icons': {'icon_off': 'fa-square', 'icon_on': 'fa-square'}, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'scene.living_room_grass'}, 'static_css': {'widget_style': 'background-color: #444;', 'title_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'title2_style': 'color: #fff;'}, 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'scene.living_room_grass'}})
    
        widgets["default-scene-warm"] = new baseswitch("default-scene-warm", "", "default", {'ignore_state': 1, 'state_inactive': 'scening', 'entity': 'scene.living_room_warm', 'state_active': 'stillscening', 'static_icons': [], 'momentary': 1000, 'widget_type': 'baseswitch', 'fields': {'icon': '', 'title': 'Warm', 'title2': '', 'icon_style': '', 'state_text': ''}, 'enable': 1, 'icons': {'icon_off': 'fa-square', 'icon_on': 'fa-square'}, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'scene.living_room_warm'}, 'static_css': {'widget_style': 'background-color: #444;', 'title_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'title2_style': 'color: #fff;'}, 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'scene.living_room_warm'}})
    

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