if(window.FE&&(!FE.sys||!FE.sys.Dcms||!FE.sys.Dcms.Drive)){jQuery.namespace("FE.sys.Dcms.Drive");(function(f,m){var a=null,i=null,j=null,h={init:function(){var n=this;n.write=document.write;n.writeln=document.writeln;document.write=function(o){n._reWrite(o)};document.writeln=function(o){n._reWrite(o+"\n")}},reset:function(){if(this.write){document.write=this.write}if(this.writeln){document.writeln=this.writeln}},_innerShiv:function(r){var t,s=document,o,n="abbr article aside audio canvas datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video".split(" ");if(!t){t=s.createElement("div");t.innerHTML="<nav></nav>";o=t.childNodes.length!==1;if(o){var q=document.createDocumentFragment();var p=n.length;while(p--){q.createElement(n[p])}q.appendChild(t)}}t.innerHTML=r;return t.childNodes},handle:function(s,n,w,u){var o=f("<div/>");if(f.type(w)==="boolean"){u=w;w="none"}u=(typeof u!=="undefined")?u:true;o.append(this._innerShiv('<span style="display:none">hack ie</span>'+s));switch(w){case"style":o.find("style").remove();break;case"script":o.find("script").remove();break;case"both":o.find("style, script").remove();break}var q=o.find("script"),t=q.length,p=[];for(var r=0;r<t;r++){var v=q.eq(r),y={};y.parent=v.parent();y.before=this._getBefore(v);y.after=this._getAfter(v);y.src=v.attr("src");y.script=v.html();p.push(y)}q.remove();var x=o.children();if(u){n.replaceWith(x)}else{n.html("").append(x)}this._includeScript(p,0);return x},_reWrite:function(q){var s=document.createElement("div");s.innerHTML=q;var p=s.childNodes,n=p.length;if(j&&j.length!==0){for(var o=0;o<n;o++){var r=f(p[o]);j.after(r);j=r}}else{if(i&&i.length!==0){for(var o=0;o<n;o++){var r=f(p[o]);i.before(r);i=r}}else{if(a&&a.length!==0){a.html(q)}}}},_getBefore:function(q){var p=q.prevAll();for(var o=0,n=p.length;o<n;o++){if(p[o].nodeName.toUpperCase()!=="SCRIPT"){return p.eq(o)}}return f()},_getAfter:function(q){var n=q.nextAll();for(var p=0,o=n.length;p<o;p++){if(n[p].nodeName.toUpperCase()!=="SCRIPT"){return n.eq(p)}}return f()},_includeScript:function(s,r){var n=s.length;if(!(s||r)||r>=n){return}var p=document.createElement("script"),o=this,q=r+1;p.type="text/javascript";a=s[r].parent;i=s[r].after;j=s[r].before;if(s[r].src){p.src=s[r].src;p.onload=p.onreadystatechange=function(){if(!p.readyState||p.readyState==="loaded"||p.readyState==="complete"){if(q<n){o._includeScript(s,q)}p.onload=p.onreadystatechange=null}};l(p)}else{l(p);p.text=s[r].script;if(q<n){o._includeScript(s,q)}}}},g=[function(){d(f(".dcms-position-beacon-js"))},function(){var n=f(".dcms-beacon-position"),o=[];if(n.length>0){n.each(function(q){var r=f(this).data("exposure-id"),p=o.length;if(o[p-1]!==r){o.push(r)}});e(o.join(";"))}b()}];function d(n,o){o=f.extend({},o);n.each(function(r){var s=f(this),q=s.data("url"),p=s.data("deletess");f.ajax({url:q,dataType:"jsonp",success:function(u){if(u&&u.content){h.init();var v=h.handle(u.content,s,p);h.reset();var z=o.success;if(z&&f.isFunction(z)){z.call(v)}if(u.pid&&u.rid&&u.tid){var x=u.pid,A=u.rid,w=u.tid,t="pid="+x+"&rid="+A+"&tid="+w,B=x+","+A+","+w+";";v.filter("a").data("click-param",t);v.find("a").data("click-param",t);e(B);v.filter(".dcms-beacon-position").attr("data-exposure-id",B)}}else{var y=o.error;if(y&&f.isFunction(y)){y.call(s)}else{c(s,"\u6570\u636e\u5185\u5bb9\u4e3a\u7a7a\uff0c\u8bf7\u8054\u7cfb\u7ba1\u7406\u5458")}}},error:function(){var t=o.error;if(t&&f.isFunction(t)){t.call(s)}else{c(s,"\u6570\u636e\u5185\u5bb9\u4e3a\u7a7a\uff0c\u8bf7\u8054\u7cfb\u7ba1\u7406\u5458")}}})})}m.request=d;function c(o,n){o.replaceWith('<div style="font-size:16px; font-weight:bolder;">'+n+"</div>")}function b(){var n=k();f(".dcms-beacon-position-a").live("mousedown",function(){var r=f(this),s=r.data("click-param"),q=r.attr("href"),o=q.indexOf("?"),p=q.indexOf("#");q=(o!==-1)?q.substring(0,o):q;q=(p!==-1)?q.substring(0,p):q;s+="&url="+q;(new Image).src="http://stat.1688.com/click_dcms.htm?"+s+"&st_page_id="+n})}function e(p){var o=k(),n=document.createElement("script");l(n);n.setAttribute("type","text/javascript");n.src="http://ctr.1688.com/ctr_dcms.html?info="+p+"&page_id="+o}function l(p){var n=document.getElementsByTagName("head")[0],o=f("base",n);(o.length>0)?n.insertBefore(p,o[0]):n.appendChild(p)}function k(){var n;if(window.dmtrack_pageid){n=window.dmtrack_pageid}else{n=""}k=function(){return n};return n}f(function(){for(var o=0,n=g.length;o<n;o++){try{g[o]()}catch(p){if(f.log){f.log("Error at No."+o+"; "+p.name+":"+p.message)}}finally{continue}}})})(jQuery,FE.sys.Dcms.Drive)};
