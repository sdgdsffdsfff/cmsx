(function(h){var k=h.globals,b=h.config,j=k.doc,e=!!j.attachEvent,f="attachEvent",d="addEventListener",g="detachEvent",c="removeEventListener",a=e?f:d,i=e?g:c;h.tools={is:function(l,m){return l!=null&&Object(l) instanceof m},isFunction:function(l){return(typeof l==="function")||Object.prototype.toString.apply(l)==="[object Function]"},isNumber:function(l){return typeof l==="number"&&isFinite(l)},isString:function(l){return typeof l==="string"},isArray:Array.isArray||function(l){return Object.prototype.toString.apply(l)==="[object Array]"},isEmptyObject:function(m){for(var l in m){return false}return true},spmMeta:function(){var p=document.getElementsByTagName("meta"),n=0,o,m=p.length,l;for(o=0;o<m;o++){l=p[o];if(this.tryToGetAttribute(l,"name")==="data-spm"){n=this.tryToGetAttribute(l,"content");break}}return n},trim:function(l){return this.isString(l)?l.replace(/^\s+|\s+$/g,""):""},tryToGetHref:function(m){var n=this;var l;try{l=this.trim(m.getAttribute("href",2))}catch(o){}return l||""},tryToGetAttribute:function(l,m){return l&&l.getAttribute?(l.getAttribute(m)||""):""},tryToSetAttribute:function(l,o,m){if(l&&l.setAttribute){try{l.setAttribute(o,m)}catch(n){}}},tryToRemoveAttribute:function(l,n){if(l&&l.removeAttribute){try{l.removeAttribute(n)}catch(m){tryToSetAttribute(l,n,"")}}},nodeListToArray:function(m){var l,p;try{l=[].slice.call(m);return l}catch(o){l=[];p=m.length;for(var n=0;n<p;n++){l.push(m[n])}return l}},combineJson:function(p,o,q){var m={};for(var n in o){if(q||!p.hasOwnProperty(n)){m[n]=o[n];delete p[n]}}for(var l in p){m[l]=p[l]}return m},combineParam:function(r,m,o,s){var l=[];for(var q in m){if(s||!r.hasOwnProperty(q)){l.push(q+"="+m[q]);delete r[q]}}for(var n in r){l.push(n+"="+r[n])}return l.join(o)},parseParam:function(o,r){var q,m=null,p={};if(this.isString(o)&&o.length>0){q=o.split(r);for(var n=0,l=q.length;n<l;++n){m=q[n].split("=");p[m[0]]=m[1]}}return p},on:function(n,l,m){n[a]((e?"on":"")+l,function(p){p=p||win.event;var o=p.target||p.srcElement;m(p,o)},false)},off:function(n,l,m){n[i]((e?"on":"")+l,function(p){p=p||win.event;var o=p.target||p.srcElement;m(p,o)},false)},random:function(){return Math.round(Math.random()*2147483647)},getReferrer:function(){var l,m=k.doc.referrer;try{l=m||k.opener.location.href||"-"}catch(n){l="-"}return l},sampling:function(){return(Math.random()-b.samplerate)<=0},trimHttpStr:function(l){return l.substr(l.indexOf("://")+2)},randomPageId:function(){var l=k.win.dmtrack_pageid||"",n=+new Date(),m="";l+=n;l=l.substr(0,20);while(l.length<42){l+=this.random()}m=l.substr(0,42);k.pageId=m;k.win.dmtrack_pageid=m;return m},sendErrorInfo:function(o,n){var l=b.errorSever,m=h.moduleManager.require("recorder"),p={type:n,exception:o.message};m.send(l,p)},emptyFunction:function(){}}})(MAGNETO);
