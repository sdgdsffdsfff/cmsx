(function(a){a.taskManager=function(){var g=a.globals,f=g.win,e=function(k){try{var i=+new Date(),h=+new Date(k);return h-i>=0}catch(j){return false}},d=a.tools,b=a.moduleManager.require,c=function(l){var j=l.name,h=l.endTime,k=l.samplerate,i=l.config;if(h&&!e(h)){return}b(j,function(m){m.init(k,i)})};return{push:function(h){var i=[];if(!h){return}if(!d.isArray(h)){i.push(h)}else{i=h}d.on(f,"load",function(){for(var k=0,j=i.length;k<j;k++){c(i.pop())}})}}}()})(MAGNETO);