(function(b){var d=b.globals,c=d.win,e=b.config,a=b.api;c.sk_dmtracking=function(){if(d.isConflicted===true){return}b.moduleManager.require("essential").init()};c.dmtrack={clickstat:function(f,g){a.log(f,g)},tracelog:function(f){a.log(e.tracelogSever,{tracelog:f})},beacon_click:function(f,g,h){a.asysLog(f,g,h)},flash_dmtracking:function(f,g){a.flashLog(f,g)}}})(MAGNETO);
