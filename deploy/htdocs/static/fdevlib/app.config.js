(function( env ) {
    'use strict';

    // lofty configs
    var configs = {
        resolve: function( id ) {
            var rStyle = /\.css(?:\?|$)/;
			
			var parts = id.split('/'),
				root = parts[0],
				type = rStyle.test( id ) ? 'css/' : 'js/';
        
			switch ( root ){
				case 'lofty':
				case 'lofty-mobile':
				case 'gallery':
					id = 'fdevlib/' + type + id;
					break;
				case 'sys':
					id = 'sys/' + type + parts.slice( 1 ).join('/');
					break;
				case 'fmd':
					id = 'fdevlib/' + type + 'lofty/port/fmdjs/' + id;
					break; 
			}
            return id;
        },

        alias: {
			"lofty/observer": "lofty/lang/observer",
			"lofty/base": "lofty/lang/base",
			"lofty/class": "lofty/lang/class",
			"lofty/log": "lofty/lang/log",
			"lofty/aop": "lofty/lang/aop",
			
			// UI Components
			"fui/widget/1.0": "lofty/ui/widget/1.0/widget",
			"fui/tabs/1.0":"lofty/ui/tabs/1.0/tabs",
			"fui/tip/1.0":"lofty/ui/tip/1.0/tip",
			"fui/autocomplete/1.0":"lofty/ui/autocomplete/1.0/autocomplete",
			"fui/autorender/1.0":"lofty/ui/autorender/1.0/autorender",
			"fui/suggestion/1.0":"lofty/ui/suggestion/1.0/suggestion",
			"fui/suggestion-all/1.0":"lofty/ui/suggestion/1.0/suggestion-all",				
			"fui/progressbar/1.0":"lofty/ui/progressbar/1.0/progressbar",
			"fui/placeholder/1.0":"lofty/ui/placeholder/1.0/placeholder",
			"fui/paging/1.0":"lofty/ui/paging/1.0/paging",
			"fui/combobox/1.0":"lofty/ui/combobox/1.0/combobox",
			"fui/flash/1.0":"lofty/ui/flash/1.0/flash",
			"fui/flashchart/1.0":"lofty/ui/flashchart/1.0/flashchart",
			"fui/flashuploader/1.0":"lofty/ui/flashuploader/1.0/flashuploader",
			"fui/clipboard/1.0":"lofty/ui/flashclipboard/1.0/flashclipboard",
			"fui/mouse/1.0":"lofty/ui/sortable/1.0/mouse",
			"fui/sortable/1.0":"lofty/ui/sortable/1.0/sortable",
			"fui/dragdrop/1.0":"lofty/ui/dragdrop/1.0/dragdrop",
			"fui/dialog/1.0":"lofty/ui/dialog/1.0/dialog",
			"fui/position/1.0":"lofty/ui/position/1.0/position",
			"fui/timer/1.0":"lofty/ui/timer/1.0/timer",

			// Util Components
			"util/cookie/1.0":"lofty/util/cookie/1.0/cookie",
			"util/websocket/1.0":"lofty/util/websocket/1.0/websocket",
			"util/storage/1.0":"lofty/util/storage/1.0/storage",
			"util/misc/1.0":"lofty/util/misc/1.0/misc",
			"util/history/1.0":"lofty/util/history/1.0/history",
			"util/template/1.0":"lofty/util/template/1.0/template",
			"util/historyManager/1.0":"lofty/util/history/1.0/historyManager",
			"util/datalazyload/1.0":"lofty/util/datalazyload/1.0/datalazyload",
			
			// Alibaba Bussiness Components
			"alicn/now/1.0":"lofty/alicn/now/1.0/now",
			"alicn/geoinfo/1.0":"lofty/alicn/geoinfo/1.0/geoinfo",
			"alicn/subcookie/1.0":"lofty/alicn/subcookie/1.0/subcookie",
			"alicn/monitor/1.0":"lofty/alicn/monitor/1.0/monitor",
			"alicn/aliuser/1.0":"lofty/alicn/aliuser/1.0/aliuser",
			"alicn/alitalk/1.0":"lofty/alicn/alitalk/1.0/alitalk",
			"alicn/alitalk-shunt/1.0":"lofty/alicn/alitalk/1.0/alitalkShunt",
			
			// Alibaba sys Components
			"sys/alibar/1.0":"sys/universal/alibar/standardV5",

			// Mobile UI Components
        	"mui/scroller/1.0": "lofty-mobile/ui/scroller/1.0/iscroll"
		}
    };

    if( typeof env.lofty !== 'undefined' ) {
        // for lofty
        env.lofty.config(configs);
    }

    if( typeof exports !== 'undefined' && env === exports ) {
        // for node.js
        exports.configs = configs;
    }

})(this);