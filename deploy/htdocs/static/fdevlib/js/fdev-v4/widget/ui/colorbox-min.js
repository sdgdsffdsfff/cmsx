("colorbox" in jQuery.fn)||(function(d,e){var a=d.util.ua.ie6,c,b;d.widget("ui.colorbox",{options:{popup:true,zIndex:3000,update:false,triggerType:"click"},_create:function(){var f=this,h=f.options,g=this.element;if(h.popup){f.activator=g}else{f._render();f.setColor(h.color)}f._buildEvent()},_render:function(){var s=this,u=s.options,z=this.element,A=[0,51,102,153,204,255,255,0,0,255,0,255],m=[0,51,102,153,204,255,0,255,0,255,255,0],q=[0,51,102,153,204,255,0,0,255,0,255,255];if(!s.con){if(u.popup){if(c&&c!==s){c.hide()}c=s;s.con=(b||(b=d("<div>",{"class":"ui-colorbox",css:{position:"absolute",background:"#FFF"}}))).css({display:"none",zIndex:u.zIndex}).appendTo("body")}else{s.con=d("<div>").addClass("ui-colorbox").css("position","relative");z.html(s.con)}}s.con.html('<div class="wrap">                <em></em>                <table cellpadding="0" cellspacing="1">                    <thead>                        <th colspan="21">                            <h6></h6>                            <div class="rgb">#FFFFFF</div>'+(u.transparent?'<div class="transparent"></div>':"")+"</th>                    </thead>                    <tbody></tbody>                </table>            </div>");var g=d("tbody",s.con),l=d("em",s.con),y=d("h6",s.con),f=d("div.rgb",s.con),n,r,t,v;s.picker=l;s.viewer=y;s.rgb=f;for(var x=11;x>-1;x--){var k=g[0].insertRow(0);for(var w=20;w>-1;w--){var p=k.insertCell(0);if(w===0||w===2){n=r=t=0}else{if(w===1){n=A[x];r=m[x];t=q[x]}else{n=51*(3*parseInt(x/6)+parseInt((w-3)/6));r=51*((w-3)%6);t=51*(x%6)}}n=n.toString(16);r=r.toString(16);t=t.toString(16);n=(n.length===1?("0"+n):n);r=(r.length===1?("0"+r):r);t=(t.length===1?("0"+t):t);v="#"+n+r+t;p.style.backgroundColor=v;p.title=v.toUpperCase()}}g.delegate("td","mouseover.ui-colorbox",function(i){var j=d(this),h=j.attr("title");s.setColor(h,j);s._trigger("change",i,{color:h})});l.bind("click.ui-colorbox",function(i){var h=s.color;if(u.update){s.activator.val(h)}s._trigger("select",i,{color:h})});if(u.transparent){d("div.transparent",s.con).bind("click.ui-colorbox",function(i){var h="transparent";if(u.update){s.activator.val(h)}s._trigger("select",i,{color:h})})}},_destroy:function(){this.hide()},_buildEvent:function(){var f=this,g=f.options;if(!g.popup){return this}f.activator.bind(g.triggerType,function(h){h.preventDefault();f.show()});if(g.update){f.activator.bind("keyup.ui-colorbox",function(){f.setColor(this.value)})}return f},toggle:function(){var f=this;if(f.con){f.hide()}else{f.show()}},show:function(){var h=this,k=h.options;if(h.con){return}h._render();if(k.popup){var j=h.activator.offset(),i=j.left,f=h.activator.outerHeight(),g=j.top+f;h.con.css({left:i,top:g}).stop(false,true).fadeIn(150,function(){if(h.con){d(document).unbind("click.ui-colorbox").bind("click.ui-colorbox",function(l){if(d(l.target)[0]===h.activator[0]){return}h.hide()});h.con.bind("click.ui-colorbox",function(l){l.stopPropagation()})}})}h.setColor(k.update?h.activator.val():h.color);return h},hide:function(){var f=this;if(!f.con){return}var h=f.options;if(h.popup){d(document).unbind("click.ui-colorbox")}function g(){f.con.remove();d.extend(f,{con:null,picker:null,viewer:null,rgb:null})}g();return f},setColor:function(g,i){if(g){g=g.toUpperCase();var f=this,i=i||d("td[title="+g+"]:first",f.con);if(i.length){f.viewer.css("background-color",g);f.rgb.html(g);f.color=g;if(f.picker){var h=i.position();f.picker.css({top:h.top-1,left:h.left-1})}}}return this},getColor:function(){return this.color}});d.add("ui-colorbox")})(jQuery);