/*
change by Edgar 110113
http://style.c.aliimg.com/js/lib/fdev-v3/core/fdev-min.js
http://style.c.aliimg.com/js/lib/fdev-v3/core/yui/get-min.js
http://style.c.aliimg.com/js/lib/fdev-v3/widget/alitalk/alitalk-min.js
http://style.c.aliimg.com/js/app/homepage/201001/fdev-sugindex-min.js
http://style.c.aliimg.com/js/common/aliclick.js
http://style.c.aliimg.com/js/sys/head/tool-bar.js
http://style.c.aliimg.com/js/sys/head/ali-header-v2.js

*/
if(typeof YAHOO=="undefined"||!YAHOO){var YAHOO={}}YAHOO.namespace=function(){var a=arguments,b=null,d,e,c;for(d=0;d<a.length;d=d+1){c=(""+a[d]).split(".");b=YAHOO;for(e=(c[0]=="YAHOO")?1:0;e<c.length;e=e+1){b[c[e]]=b[c[e]]||{};b=b[c[e]]}}return b};YAHOO.log=function(b,a,c){var d=YAHOO.widget.Logger;if(d&&d.log){return d.log(b,a,c)}else{return false}};YAHOO.register=function(d,i,a){var e=YAHOO.env.modules,c,f,g,h,b;if(!e[d]){e[d]={versions:[],builds:[]}}c=e[d];f=a.version;g=a.build;h=YAHOO.env.listeners;c.name=d;c.version=f;c.build=g;c.versions.push(f);c.builds.push(g);c.mainClass=i;for(b=0;b<h.length;b=b+1){h[b](c)}if(i){i.VERSION=f;i.BUILD=g}else{YAHOO.log("mainClass is undefined for module "+d,"warn")}};YAHOO.env=YAHOO.env||{modules:[],listeners:[]};YAHOO.env.getVersion=function(a){return YAHOO.env.modules[a]||null};YAHOO.env.ua=function(){var e=function(i){var h=0;return parseFloat(i.replace(/\./g,function(){return(h++==1)?"":"."}))},b=navigator,c={ie:0,opera:0,gecko:0,webkit:0,mobile:null,air:0,caja:0,secure:false,os:null},f=navigator&&navigator.userAgent,d=window&&window.location,g=d&&d.href,a;c.secure=g&&(g.toLowerCase().indexOf("https")===0);if(f){if((/windows|win32/i).test(f)){c.os="windows"}else{if((/macintosh/i).test(f)){c.os="macintosh"}}if((/KHTML/).test(f)){c.webkit=1}a=f.match(/AppleWebKit\/([^\s]*)/);if(a&&a[1]){c.webkit=e(a[1]);if(/ Mobile\//.test(f)){c.mobile="Apple"}else{a=f.match(/NokiaN[^\/]*/);if(a){c.mobile=a[0]}}a=f.match(/AdobeAIR\/([^\s]*)/);if(a){c.air=a[0]}}if(!c.webkit){a=f.match(/Opera[\s\/]([^\s]*)/);if(a&&a[1]){c.opera=e(a[1]);a=f.match(/Opera Mini[^;]*/);if(a){c.mobile=a[0]}}else{a=f.match(/MSIE\s([^;]*)/);if(a&&a[1]){c.ie=e(a[1])}else{a=f.match(/Gecko\/([^\s]*)/);if(a){c.gecko=1;a=f.match(/rv:([^\s\)]*)/);if(a&&a[1]){c.gecko=e(a[1])}}}}}}return c}();(function(){YAHOO.namespace("util","widget","example");if("undefined"!==typeof YAHOO_config){var d=YAHOO_config.listener,a=YAHOO.env.listeners,b=true,c;if(d){for(c=0;c<a.length;c++){if(a[c]==d){b=false;break}}if(b){a.push(d)}}}})();YAHOO.lang=YAHOO.lang||{};(function(){var h=YAHOO.lang,a=Object.prototype,b="[object Array]",g="[object Function]",c="[object Object]",e=[],d=["toString","valueOf"],f={isArray:function(i){return a.toString.apply(i)===b},isBoolean:function(i){return typeof i==="boolean"},isFunction:function(i){return(typeof i==="function")||a.toString.apply(i)===g},isNull:function(i){return i===null},isNumber:function(i){return typeof i==="number"&&isFinite(i)},isObject:function(i){return(i&&(typeof i==="object"||h.isFunction(i)))||false},isString:function(i){return typeof i==="string"},isUndefined:function(i){return typeof i==="undefined"},_IEEnumFix:(YAHOO.env.ua.ie)?function(j,k){var l,m,i;for(l=0;l<d.length;l=l+1){m=d[l];i=k[m];if(h.isFunction(i)&&i!=a[m]){j[m]=i}}}:function(){},extend:function(i,m,j){if(!m||!i){throw new Error("extend failed, please check that all dependencies are included.")}var k=function(){},l;k.prototype=m.prototype;i.prototype=new k();i.prototype.constructor=i;i.superclass=m.prototype;if(m.prototype.constructor==a.constructor){m.prototype.constructor=m}if(j){for(l in j){if(h.hasOwnProperty(j,l)){i.prototype[l]=j[l]}}h._IEEnumFix(i.prototype,j)}},augmentObject:function(n,i){if(!i||!n){throw new Error("Absorb failed, verify dependencies.")}var l=arguments,j,m,k=l[2];if(k&&k!==true){for(j=2;j<l.length;j=j+1){n[l[j]]=i[l[j]]}}else{for(m in i){if(k||!(m in n)){n[m]=i[m]}}h._IEEnumFix(n,i)}},augmentProto:function(i,j){if(!j||!i){throw new Error("Augment failed, verify dependencies.")}var l=[i.prototype,j.prototype],k;for(k=2;k<arguments.length;k=k+1){l.push(arguments[k])}h.augmentObject.apply(this,l)},dump:function(q,l){var o,m,j=[],i="{...}",p="f(){...}",k=", ",n=" => ";if(!h.isObject(q)){return q+""}else{if(q instanceof Date||("nodeType" in q&&"tagName" in q)){return q}else{if(h.isFunction(q)){return p}}}l=(h.isNumber(l))?l:3;if(h.isArray(q)){j.push("[");for(o=0,m=q.length;o<m;o=o+1){if(h.isObject(q[o])){j.push((l>0)?h.dump(q[o],l-1):i)}else{j.push(q[o])}j.push(k)}if(j.length>1){j.pop()}j.push("]")}else{j.push("{");for(o in q){if(h.hasOwnProperty(q,o)){j.push(o+n);if(h.isObject(q[o])){j.push((l>0)?h.dump(q[o],l-1):i)}else{j.push(q[o])}j.push(k)}}if(j.length>1){j.pop()}j.push("}")}return j.join("")},substitute:function(i,x,p){var t,u,v,m,l,j,n=[],w,s="dump",o=" ",y="{",k="}",q,r;for(;;){t=i.lastIndexOf(y);if(t<0){break}u=i.indexOf(k,t);if(t+1>=u){break}w=i.substring(t+1,u);m=w;j=null;v=m.indexOf(o);if(v>-1){j=m.substring(v+1);m=m.substring(0,v)}l=x[m];if(p){l=p(m,l,j)}if(h.isObject(l)){if(h.isArray(l)){l=h.dump(l,parseInt(j,10))}else{j=j||"";q=j.indexOf(s);if(q>-1){j=j.substring(4)}r=l.toString();if(r===c||q>-1){l=h.dump(l,parseInt(j,10))}else{l=r}}}else{if(!h.isString(l)&&!h.isNumber(l)){l="~-"+n.length+"-~";n[n.length]=w}}i=i.substring(0,t)+l+i.substring(u+1)}for(t=n.length-1;t>=0;t=t-1){i=i.replace(new RegExp("~-"+t+"-~"),"{"+n[t]+"}","g")}return i},trim:function(j){try{return j.replace(/^\s+|\s+$/g,"")}catch(i){return j}},merge:function(){var i={},k=arguments,l=k.length,j;for(j=0;j<l;j=j+1){h.augmentObject(i,k[j],true)}return i},later:function(j,p,i,n,m){j=j||0;p=p||{};var o=i,k=n,l,q;if(h.isString(i)){o=p[i]}if(!o){throw new TypeError("method undefined")}if(k&&!h.isArray(k)){k=[n]}l=function(){o.apply(p,k||e)};q=(m)?setInterval(l,j):setTimeout(l,j);return{interval:m,cancel:function(){if(this.interval){clearInterval(q)}else{clearTimeout(q)}}}},isValue:function(i){return(h.isObject(i)||h.isString(i)||h.isNumber(i)||h.isBoolean(i))}};h.hasOwnProperty=(a.hasOwnProperty)?function(j,i){return j&&j.hasOwnProperty(i)}:function(j,i){return !h.isUndefined(j[i])&&j.constructor.prototype[i]!==j[i]};f.augmentObject(h,f,true);YAHOO.util.Lang=h;h.augment=h.augmentProto;YAHOO.augment=h.augmentProto;YAHOO.extend=h.extend})();YAHOO.register("yahoo",YAHOO,{version:"2.8.1",build:"19"});(function(){YAHOO.env._id_counter=YAHOO.env._id_counter||0;var ao=YAHOO.util,ai=YAHOO.lang,aE=YAHOO.env.ua,at=YAHOO.lang.trim,aN={},aJ={},ag=/^t(?:able|d|h)$/i,y=/color$/i,aj=window.document,z=aj.documentElement,aM="ownerDocument",aD="defaultView",av="documentElement",ax="compatMode",aP="offsetLeft",ae="offsetTop",aw="offsetParent",x="parentNode",aF="nodeType",aq="tagName",af="scrollLeft",aI="scrollTop",ad="getBoundingClientRect",au="getComputedStyle",aQ="currentStyle",ah="CSS1Compat",aO="BackCompat",aK="class",an="className",ak="",ar=" ",ay="(?:^|\\s)",aG="(?= |$)",Y="g",aB="position",aL="fixed",G="relative",aH="left",aC="top",az="medium",aA="borderLeftWidth",ac="borderTopWidth",ap=aE.opera,al=aE.webkit,am=aE.gecko,aa=aE.ie;ao.Dom={CUSTOM_ATTRIBUTES:(!z.hasAttribute)?{"for":"htmlFor","class":an}:{htmlFor:"for",className:aK},DOT_ATTRIBUTES:{},get:function(f){var c,a,e,g,d,b;if(f){if(f[aF]||f.item){return f}if(typeof f==="string"){c=f;f=aj.getElementById(f);b=(f)?f.attributes:null;if(f&&b&&b.id&&b.id.value===c){return f}else{if(f&&aj.all){f=null;a=aj.all[c];for(g=0,d=a.length;g<d;++g){if(a[g].id===c){return a[g]}}}}return f}if(YAHOO.util.Element&&f instanceof YAHOO.util.Element){f=f.get("element")}if("length" in f){e=[];for(g=0,d=f.length;g<d;++g){e[e.length]=ao.Dom.get(f[g])}return e}return f}return null},getComputedStyle:function(a,b){if(window[au]){return a[aM][aD][au](a,null)[b]}else{if(a[aQ]){return ao.Dom.IE_ComputedStyle.get(a,b)}}},getStyle:function(a,b){return ao.Dom.batch(a,ao.Dom._getStyle,b)},_getStyle:function(){if(window[au]){return function(b,d){d=(d==="float")?d="cssFloat":ao.Dom._toCamel(d);var a=b.style[d],c;if(!a){c=b[aM][aD][au](b,null);if(c){a=c[d]}}return a}}else{if(z[aQ]){return function(b,e){var a;switch(e){case"opacity":a=100;try{a=b.filters["DXImageTransform.Microsoft.Alpha"].opacity}catch(d){try{a=b.filters("alpha").opacity}catch(c){}}return a/100;case"float":e="styleFloat";default:e=ao.Dom._toCamel(e);a=b[aQ]?b[aQ][e]:null;return(b.style[e]||a)}}}}}(),setStyle:function(b,c,a){ao.Dom.batch(b,ao.Dom._setStyle,{prop:c,val:a})},_setStyle:function(){if(aa){return function(c,b){var a=ao.Dom._toCamel(b.prop),d=b.val;if(c){switch(a){case"opacity":if(ai.isString(c.style.filter)){c.style.filter="alpha(opacity="+d*100+")";if(!c[aQ]||!c[aQ].hasLayout){c.style.zoom=1}}break;case"float":a="styleFloat";default:c.style[a]=d}}else{}}}else{return function(c,b){var a=ao.Dom._toCamel(b.prop),d=b.val;if(c){if(a=="float"){a="cssFloat"}c.style[a]=d}else{}}}}(),getXY:function(a){return ao.Dom.batch(a,ao.Dom._getXY)},_canPosition:function(a){return(ao.Dom._getStyle(a,"display")!=="none"&&ao.Dom._inDoc(a))},_getXY:function(){if(aj[av][ad]){return function(j){var i,a,h,c,d,e,f,l,k,g=Math.floor,b=false;if(ao.Dom._canPosition(j)){h=j[ad]();c=j[aM];i=ao.Dom.getDocumentScrollLeft(c);a=ao.Dom.getDocumentScrollTop(c);b=[g(h[aH]),g(h[aC])];if(aa&&aE.ie<8){d=2;e=2;f=c[ax];if(aE.ie===6){if(f!==aO){d=0;e=0}}if((f===aO)){l=ab(c[av],aA);k=ab(c[av],ac);if(l!==az){d=parseInt(l,10)}if(k!==az){e=parseInt(k,10)}}b[0]-=d;b[1]-=e}if((a||i)){b[0]+=i;b[1]+=a}b[0]=g(b[0]);b[1]=g(b[1])}else{}return b}}else{return function(h){var a,g,f,d,c,e=false,b=h;if(ao.Dom._canPosition(h)){e=[h[aP],h[ae]];a=ao.Dom.getDocumentScrollLeft(h[aM]);g=ao.Dom.getDocumentScrollTop(h[aM]);c=((am||aE.webkit>519)?true:false);while((b=b[aw])){e[0]+=b[aP];e[1]+=b[ae];if(c){e=ao.Dom._calcBorders(b,e)}}if(ao.Dom._getStyle(h,aB)!==aL){b=h;while((b=b[x])&&b[aq]){f=b[aI];d=b[af];if(am&&(ao.Dom._getStyle(b,"overflow")!=="visible")){e=ao.Dom._calcBorders(b,e)}if(f||d){e[0]-=d;e[1]-=f}}e[0]+=a;e[1]+=g}else{if(ap){e[0]-=a;e[1]-=g}else{if(al||am){e[0]+=a;e[1]+=g}}}e[0]=Math.floor(e[0]);e[1]=Math.floor(e[1])}else{}return e}}}(),getX:function(a){var b=function(c){return ao.Dom.getXY(c)[0]};return ao.Dom.batch(a,b,ao.Dom,true)},getY:function(a){var b=function(c){return ao.Dom.getXY(c)[1]};return ao.Dom.batch(a,b,ao.Dom,true)},setXY:function(b,a,c){ao.Dom.batch(b,ao.Dom._setXY,{pos:a,noRetry:c})},_setXY:function(i,f){var e=ao.Dom._getStyle(i,aB),g=ao.Dom.setStyle,b=f.pos,a=f.noRetry,d=[parseInt(ao.Dom.getComputedStyle(i,aH),10),parseInt(ao.Dom.getComputedStyle(i,aC),10)],c,h;if(e=="static"){e=G;g(i,aB,e)}c=ao.Dom._getXY(i);if(!b||c===false){return false}if(isNaN(d[0])){d[0]=(e==G)?0:i[aP]}if(isNaN(d[1])){d[1]=(e==G)?0:i[ae]}if(b[0]!==null){g(i,aH,b[0]-c[0]+d[0]+"px")}if(b[1]!==null){g(i,aC,b[1]-c[1]+d[1]+"px")}if(!a){h=ao.Dom._getXY(i);if((b[0]!==null&&h[0]!=b[0])||(b[1]!==null&&h[1]!=b[1])){ao.Dom._setXY(i,{pos:b,noRetry:true})}}},setX:function(b,a){ao.Dom.setXY(b,[a,null])},setY:function(a,b){ao.Dom.setXY(a,[null,b])},getRegion:function(a){var b=function(c){var d=false;if(ao.Dom._canPosition(c)){d=ao.Region.getRegion(c)}else{}return d};return ao.Dom.batch(a,b,ao.Dom,true)},getClientWidth:function(){return ao.Dom.getViewportWidth()},getClientHeight:function(){return ao.Dom.getViewportHeight()},getElementsByClassName:function(f,b,e,c,j,d){b=b||"*";e=(e)?ao.Dom.get(e):null||aj;if(!e){return[]}var a=[],k=e.getElementsByTagName(b),h=ao.Dom.hasClass;for(var i=0,g=k.length;i<g;++i){if(h(k[i],f)){a[a.length]=k[i]}}if(c){ao.Dom.batch(a,c,j,d)}return a},hasClass:function(b,a){return ao.Dom.batch(b,ao.Dom._hasClass,a)},_hasClass:function(a,c){var b=false,d;if(a&&c){d=ao.Dom._getAttribute(a,an)||ak;if(c.exec){b=c.test(d)}else{b=c&&(ar+d+ar).indexOf(ar+c+ar)>-1}}else{}return b},addClass:function(b,a){return ao.Dom.batch(b,ao.Dom._addClass,a)},_addClass:function(a,c){var b=false,d;if(a&&c){d=ao.Dom._getAttribute(a,an)||ak;if(!ao.Dom._hasClass(a,c)){ao.Dom.setAttribute(a,an,at(d+ar+c));b=true}}else{}return b},removeClass:function(b,a){return ao.Dom.batch(b,ao.Dom._removeClass,a)},_removeClass:function(f,a){var e=false,d,c,b;if(f&&a){d=ao.Dom._getAttribute(f,an)||ak;ao.Dom.setAttribute(f,an,d.replace(ao.Dom._getClassRegex(a),ak));c=ao.Dom._getAttribute(f,an);if(d!==c){ao.Dom.setAttribute(f,an,at(c));e=true;if(ao.Dom._getAttribute(f,an)===""){b=(f.hasAttribute&&f.hasAttribute(aK))?aK:an;f.removeAttribute(b)}}}else{}return e},replaceClass:function(a,c,b){return ao.Dom.batch(a,ao.Dom._replaceClass,{from:c,to:b})},_replaceClass:function(g,a){var f,c,e,b=false,d;if(g&&a){c=a.from;e=a.to;if(!e){b=false}else{if(!c){b=ao.Dom._addClass(g,a.to)}else{if(c!==e){d=ao.Dom._getAttribute(g,an)||ak;f=(ar+d.replace(ao.Dom._getClassRegex(c),ar+e)).split(ao.Dom._getClassRegex(e));f.splice(1,0,ar+e);ao.Dom.setAttribute(g,an,at(f.join(ak)));b=true}}}}else{}return b},generateId:function(b,a){a=a||"yui-gen";var c=function(e){if(e&&e.id){return e.id}var d=a+YAHOO.env._id_counter++;if(e){if(e[aM]&&e[aM].getElementById(d)){return ao.Dom.generateId(e,d+a)}e.id=d}return d};return ao.Dom.batch(b,c,ao.Dom,true)||c.apply(ao.Dom,arguments)},isAncestor:function(c,a){c=ao.Dom.get(c);a=ao.Dom.get(a);var b=false;if((c&&a)&&(c[aF]&&a[aF])){if(c.contains&&c!==a){b=c.contains(a)}else{if(c.compareDocumentPosition){b=!!(c.compareDocumentPosition(a)&16)}}}else{}return b},inDocument:function(a,b){return ao.Dom._inDoc(ao.Dom.get(a),b)},_inDoc:function(c,a){var b=false;if(c&&c[aq]){a=a||c[aM];b=ao.Dom.isAncestor(a[av],c)}else{}return b},getElementsBy:function(a,b,f,d,i,e,c){b=b||"*";f=(f)?ao.Dom.get(f):null||aj;if(!f){return[]}var j=[],k=f.getElementsByTagName(b);for(var h=0,g=k.length;h<g;++h){if(a(k[h])){if(c){j=k[h];break}else{j[j.length]=k[h]}}}if(d){ao.Dom.batch(j,d,i,e)}return j},getElementBy:function(a,b,c){return ao.Dom.getElementsBy(a,b,c,null,null,null,true)},batch:function(a,c,f,e){var g=[],d=(e)?f:window;a=(a&&(a[aq]||a.item))?a:ao.Dom.get(a);if(a&&c){if(a[aq]||a.length===undefined){return c.call(d,a,f)}for(var b=0;b<a.length;++b){g[g.length]=c.call(d,a[b],f)}}else{return false}return g},getDocumentHeight:function(){var b=(aj[ax]!=ah||al)?aj.body.scrollHeight:z.scrollHeight,a=Math.max(b,ao.Dom.getViewportHeight());return a},getDocumentWidth:function(){var b=(aj[ax]!=ah||al)?aj.body.scrollWidth:z.scrollWidth,a=Math.max(b,ao.Dom.getViewportWidth());return a},getViewportHeight:function(){var a=self.innerHeight,b=aj[ax];if((b||aa)&&!ap){a=(b==ah)?z.clientHeight:aj.body.clientHeight}return a},getViewportWidth:function(){var a=self.innerWidth,b=aj[ax];if(b||aa){a=(b==ah)?z.clientWidth:aj.body.clientWidth}return a},getAncestorBy:function(a,b){while((a=a[x])){if(ao.Dom._testElement(a,b)){return a}}return null},getAncestorByClassName:function(c,b){c=ao.Dom.get(c);if(!c){return null}var a=function(d){return ao.Dom.hasClass(d,b)};return ao.Dom.getAncestorBy(c,a)},getAncestorByTagName:function(c,b){c=ao.Dom.get(c);if(!c){return null}var a=function(d){return d[aq]&&d[aq].toUpperCase()==b.toUpperCase()};return ao.Dom.getAncestorBy(c,a)},getPreviousSiblingBy:function(a,b){while(a){a=a.previousSibling;if(ao.Dom._testElement(a,b)){return a}}return null},getPreviousSibling:function(a){a=ao.Dom.get(a);if(!a){return null}return ao.Dom.getPreviousSiblingBy(a)},getNextSiblingBy:function(a,b){while(a){a=a.nextSibling;if(ao.Dom._testElement(a,b)){return a}}return null},getNextSibling:function(a){a=ao.Dom.get(a);if(!a){return null}return ao.Dom.getNextSiblingBy(a)},getFirstChildBy:function(b,a){var c=(ao.Dom._testElement(b.firstChild,a))?b.firstChild:null;return c||ao.Dom.getNextSiblingBy(b.firstChild,a)},getFirstChild:function(a,b){a=ao.Dom.get(a);if(!a){return null}return ao.Dom.getFirstChildBy(a)},getLastChildBy:function(b,a){if(!b){return null}var c=(ao.Dom._testElement(b.lastChild,a))?b.lastChild:null;return c||ao.Dom.getPreviousSiblingBy(b.lastChild,a)},getLastChild:function(a){a=ao.Dom.get(a);return ao.Dom.getLastChildBy(a)},getChildrenBy:function(c,d){var a=ao.Dom.getFirstChildBy(c,d),b=a?[a]:[];ao.Dom.getNextSiblingBy(a,function(e){if(!d||d(e)){b[b.length]=e}return false});return b},getChildren:function(a){a=ao.Dom.get(a);if(!a){}return ao.Dom.getChildrenBy(a)},getDocumentScrollLeft:function(a){a=a||aj;return Math.max(a[av].scrollLeft,a.body.scrollLeft)},getDocumentScrollTop:function(a){a=a||aj;return Math.max(a[av].scrollTop,a.body.scrollTop)},insertBefore:function(b,a){b=ao.Dom.get(b);a=ao.Dom.get(a);if(!b||!a||!a[x]){return null}return a[x].insertBefore(b,a)},insertAfter:function(b,a){b=ao.Dom.get(b);a=ao.Dom.get(a);if(!b||!a||!a[x]){return null}if(a.nextSibling){return a[x].insertBefore(b,a.nextSibling)}else{return a[x].appendChild(b)}},getClientRegion:function(){var a=ao.Dom.getDocumentScrollTop(),c=ao.Dom.getDocumentScrollLeft(),d=ao.Dom.getViewportWidth()+c,b=ao.Dom.getViewportHeight()+a;return new ao.Region(a,d,b,c)},setAttribute:function(c,b,a){ao.Dom.batch(c,ao.Dom._setAttribute,{attr:b,val:a})},_setAttribute:function(a,c){var b=ao.Dom._toCamel(c.attr),d=c.val;if(a&&a.setAttribute){if(ao.Dom.DOT_ATTRIBUTES[b]){a[b]=d}else{b=ao.Dom.CUSTOM_ATTRIBUTES[b]||b;a.setAttribute(b,d)}}else{}},getAttribute:function(b,a){return ao.Dom.batch(b,ao.Dom._getAttribute,a)},_getAttribute:function(c,b){var a;b=ao.Dom.CUSTOM_ATTRIBUTES[b]||b;if(c&&c.getAttribute){a=c.getAttribute(b,2)}else{}return a},_toCamel:function(c){var a=aN;function b(e,d){return d.toUpperCase()}return a[c]||(a[c]=c.indexOf("-")===-1?c:c.replace(/-([a-z])/gi,b))},_getClassRegex:function(b){var a;if(b!==undefined){if(b.exec){a=b}else{a=aJ[b];if(!a){b=b.replace(ao.Dom._patterns.CLASS_RE_TOKENS,"\\$1");a=aJ[b]=new RegExp(ay+b+aG,Y)}}}return a},_patterns:{ROOT_TAG:/^body|html$/i,CLASS_RE_TOKENS:/([\.\(\)\^\$\*\+\?\|\[\]\{\}\\])/g},_testElement:function(a,b){return a&&a[aF]==1&&(!b||b(a))},_calcBorders:function(a,d){var c=parseInt(ao.Dom[au](a,ac),10)||0,b=parseInt(ao.Dom[au](a,aA),10)||0;if(am){if(ag.test(a[aq])){c=0;b=0}}d[0]+=b;d[1]+=c;return d}};var ab=ao.Dom[au];if(aE.opera){ao.Dom[au]=function(c,b){var a=ab(c,b);if(y.test(b)){a=ao.Dom.Color.toRGB(a)}return a}}if(aE.webkit){ao.Dom[au]=function(c,b){var a=ab(c,b);if(a==="rgba(0, 0, 0, 0)"){a="transparent"}return a}}if(aE.ie&&aE.ie>=8&&aj.documentElement.hasAttribute){ao.Dom.DOT_ATTRIBUTES.type=true}})();YAHOO.util.Region=function(c,b,a,d){this.top=c;this.y=c;this[1]=c;this.right=b;this.bottom=a;this.left=d;this.x=d;this[0]=d;this.width=this.right-this.left;this.height=this.bottom-this.top};YAHOO.util.Region.prototype.contains=function(a){return(a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom)};YAHOO.util.Region.prototype.getArea=function(){return((this.bottom-this.top)*(this.right-this.left))};YAHOO.util.Region.prototype.intersect=function(b){var d=Math.max(this.top,b.top),c=Math.min(this.right,b.right),a=Math.min(this.bottom,b.bottom),e=Math.max(this.left,b.left);if(a>=d&&c>=e){return new YAHOO.util.Region(d,c,a,e)}else{return null}};YAHOO.util.Region.prototype.union=function(b){var d=Math.min(this.top,b.top),c=Math.max(this.right,b.right),a=Math.max(this.bottom,b.bottom),e=Math.min(this.left,b.left);return new YAHOO.util.Region(d,c,a,e)};YAHOO.util.Region.prototype.toString=function(){return("Region {top: "+this.top+", right: "+this.right+", bottom: "+this.bottom+", left: "+this.left+", height: "+this.height+", width: "+this.width+"}")};YAHOO.util.Region.getRegion=function(d){var b=YAHOO.util.Dom.getXY(d),e=b[1],c=b[0]+d.offsetWidth,a=b[1]+d.offsetHeight,f=b[0];return new YAHOO.util.Region(e,c,a,f)};YAHOO.util.Point=function(a,b){if(YAHOO.lang.isArray(a)){b=a[1];a=a[0]}YAHOO.util.Point.superclass.constructor.call(this,b,a,b,a)};YAHOO.extend(YAHOO.util.Point,YAHOO.util.Region);(function(){var v=YAHOO.util,w="clientTop",r="clientLeft",n="parentNode",m="right",a="hasLayout",o="px",c="opacity",l="auto",t="borderLeftWidth",q="borderTopWidth",h="borderRightWidth",b="borderBottomWidth",e="visible",g="transparent",j="height",s="width",p="style",d="currentStyle",f=/^width|height$/,i=/^(\d[.\d]*)+(em|ex|px|gd|rem|vw|vh|vm|ch|mm|cm|in|pt|pc|deg|rad|ms|s|hz|khz|%){1}?/i,k={get:function(A,y){var z="",x=A[d][y];if(y===c){z=v.Dom.getStyle(A,c)}else{if(!x||(x.indexOf&&x.indexOf(o)>-1)){z=x}else{if(v.Dom.IE_COMPUTED[y]){z=v.Dom.IE_COMPUTED[y](A,y)}else{if(i.test(x)){z=v.Dom.IE.ComputedStyle.getPixel(A,y)}else{z=x}}}}return z},getOffset:function(A,z){var x=A[d][z],E=z.charAt(0).toUpperCase()+z.substr(1),D="offset"+E,C="pixel"+E,y="",B;if(x==l){B=A[D];if(B===undefined){y=0}y=B;if(f.test(z)){A[p][z]=B;if(A[D]>B){y=B-(A[D]-B)}A[p][z]=l}}else{if(!A[p][C]&&!A[p][z]){A[p][z]=x}y=A[p][C]}return y+o},getBorderWidth:function(z,x){var y=null;if(!z[d][a]){z[p].zoom=1}switch(x){case q:y=z[w];break;case b:y=z.offsetHeight-z.clientHeight-z[w];break;case t:y=z[r];break;case h:y=z.offsetWidth-z.clientWidth-z[r];break}return y+o},getPixel:function(A,B){var y=null,x=A[d][m],z=A[d][B];A[p][m]=z;y=A[p].pixelRight;A[p][m]=x;return y+o},getMargin:function(y,z){var x;if(y[d][z]==l){x=0+o}else{x=v.Dom.IE.ComputedStyle.getPixel(y,z)}return x},getVisibility:function(y,z){var x;while((x=y[d])&&x[z]=="inherit"){y=y[n]}return(x)?x[z]:e},getColor:function(x,y){return v.Dom.Color.toRGB(x[d][y])||g},getBorderColor:function(z,A){var y=z[d],x=y[A]||y.color;return v.Dom.Color.toRGB(v.Dom.Color.toHex(x))}},u={};u.top=u.right=u.bottom=u.left=u[s]=u[j]=k.getOffset;u.color=k.getColor;u[q]=u[h]=u[b]=u[t]=k.getBorderWidth;u.marginTop=u.marginRight=u.marginBottom=u.marginLeft=k.getMargin;u.visibility=k.getVisibility;u.borderColor=u.borderTopColor=u.borderRightColor=u.borderBottomColor=u.borderLeftColor=k.getBorderColor;v.Dom.IE_COMPUTED=u;v.Dom.IE_ComputedStyle=k})();(function(){var c="toString",a=parseInt,d=RegExp,b=YAHOO.util;b.Dom.Color={KEYWORDS:{black:"000",silver:"c0c0c0",gray:"808080",white:"fff",maroon:"800000",red:"f00",purple:"800080",fuchsia:"f0f",green:"008000",lime:"0f0",olive:"808000",yellow:"ff0",navy:"000080",blue:"00f",teal:"008080",aqua:"0ff"},re_RGB:/^rgb\(([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\)$/i,re_hex:/^#?([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})$/i,re_hex3:/([0-9A-F])/gi,toRGB:function(e){if(!b.Dom.Color.re_RGB.test(e)){e=b.Dom.Color.toHex(e)}if(b.Dom.Color.re_hex.exec(e)){e="rgb("+[a(d.$1,16),a(d.$2,16),a(d.$3,16)].join(", ")+")"}return e},toHex:function(e){e=b.Dom.Color.KEYWORDS[e]||e;if(b.Dom.Color.re_RGB.exec(e)){var f=(d.$1.length===1)?"0"+d.$1:Number(d.$1),g=(d.$2.length===1)?"0"+d.$2:Number(d.$2),h=(d.$3.length===1)?"0"+d.$3:Number(d.$3);e=[f[c](16),g[c](16),h[c](16)].join("")}if(e.length<6){e=e.replace(b.Dom.Color.re_hex3,"$1$1")}if(e!=="transparent"&&e.indexOf("#")<0){e="#"+e}return e.toLowerCase()}}}());YAHOO.register("dom",YAHOO.util.Dom,{version:"2.8.1",build:"19"});YAHOO.util.CustomEvent=function(d,e,f,a,c){this.type=d;this.scope=e||window;this.silent=f;this.fireOnce=c;this.fired=false;this.firedWith=null;this.signature=a||YAHOO.util.CustomEvent.LIST;this.subscribers=[];if(!this.silent){}var b="_YUICEOnSubscribe";if(d!==b){this.subscribeEvent=new YAHOO.util.CustomEvent(b,this,true)}this.lastError=null};YAHOO.util.CustomEvent.LIST=0;YAHOO.util.CustomEvent.FLAT=1;YAHOO.util.CustomEvent.prototype={subscribe:function(d,c,b){if(!d){throw new Error("Invalid callback for subscriber to '"+this.type+"'")}if(this.subscribeEvent){this.subscribeEvent.fire(d,c,b)}var a=new YAHOO.util.Subscriber(d,c,b);if(this.fireOnce&&this.fired){this.notify(a,this.firedWith)}else{this.subscribers.push(a)}},unsubscribe:function(d,b){if(!d){return this.unsubscribeAll()}var c=false;for(var f=0,a=this.subscribers.length;f<a;++f){var e=this.subscribers[f];if(e&&e.contains(d,b)){this._delete(f);c=true}}return c},fire:function(){this.lastError=null;var b=[],a=this.subscribers.length;var f=[].slice.call(arguments,0),g=true,d,h=false;if(this.fireOnce){if(this.fired){return true}else{this.firedWith=f}}this.fired=true;if(!a&&this.silent){return true}if(!this.silent){}var e=this.subscribers.slice();for(d=0;d<a;++d){var c=e[d];if(!c){h=true}else{g=this.notify(c,f);if(false===g){if(!this.silent){}break}}}return(g!==false)},notify:function(d,g){var h,b=null,e=d.getScope(this.scope),a=YAHOO.util.Event.throwErrors;if(!this.silent){}if(this.signature==YAHOO.util.CustomEvent.FLAT){if(g.length>0){b=g[0]}try{h=d.fn.call(e,b,d.obj)}catch(c){this.lastError=c;if(a){throw c}}}else{try{h=d.fn.call(e,this.type,g,d.obj)}catch(f){this.lastError=f;if(a){throw f}}}return h},unsubscribeAll:function(){var a=this.subscribers.length,b;for(b=a-1;b>-1;b--){this._delete(b)}this.subscribers=[];return a},_delete:function(a){var b=this.subscribers[a];if(b){delete b.fn;delete b.obj}this.subscribers.splice(a,1)},toString:function(){return"CustomEvent: '"+this.type+"', context: "+this.scope}};YAHOO.util.Subscriber=function(a,c,b){this.fn=a;this.obj=YAHOO.lang.isUndefined(c)?null:c;this.overrideContext=b};YAHOO.util.Subscriber.prototype.getScope=function(a){if(this.overrideContext){if(this.overrideContext===true){return this.obj}else{return this.overrideContext}}return a};YAHOO.util.Subscriber.prototype.contains=function(a,b){if(b){return(this.fn==a&&this.obj==b)}else{return(this.fn==a)}};YAHOO.util.Subscriber.prototype.toString=function(){return"Subscriber { obj: "+this.obj+", overrideContext: "+(this.overrideContext||"no")+" }"};if(!YAHOO.util.Event){YAHOO.util.Event=function(){var h=false,g=[],e=[],d=0,j=[],c=0,b={63232:38,63233:40,63234:37,63235:39,63276:33,63277:34,25:9},a=YAHOO.env.ua.ie,i="focusin",f="focusout";return{POLL_RETRYS:500,POLL_INTERVAL:40,EL:0,TYPE:1,FN:2,WFN:3,UNLOAD_OBJ:3,ADJ_SCOPE:4,OBJ:5,OVERRIDE:6,CAPTURE:7,lastError:null,isSafari:YAHOO.env.ua.webkit,webkit:YAHOO.env.ua.webkit,isIE:a,_interval:null,_dri:null,_specialTypes:{focusin:(a?"focusin":"focus"),focusout:(a?"focusout":"blur")},DOMReady:false,throwErrors:false,startInterval:function(){if(!this._interval){this._interval=YAHOO.lang.later(this.POLL_INTERVAL,this,this._tryPreloadAttach,null,true)}},onAvailable:function(m,q,o,n,p){var l=(YAHOO.lang.isString(m))?[m]:m;for(var k=0;k<l.length;k=k+1){j.push({id:l[k],fn:q,obj:o,overrideContext:n,checkReady:p})}d=this.POLL_RETRYS;this.startInterval()},onContentReady:function(m,l,k,n){this.onAvailable(m,l,k,n,true)},onDOMReady:function(){this.DOMReadyEvent.subscribe.apply(this.DOMReadyEvent,arguments)},_addListener:function(w,y,n,t,p,k){if(!n||!n.call){return false}if(this._isValidCollection(w)){var m=true;for(var s=0,q=w.length;s<q;++s){m=this.on(w[s],y,n,t,p)&&m}return m}else{if(YAHOO.lang.isString(w)){var u=this.getEl(w);if(u){w=u}else{this.onAvailable(w,function(){YAHOO.util.Event._addListener(w,y,n,t,p,k)});return true}}}if(!w){return false}if("unload"==y&&t!==this){e[e.length]=[w,y,n,t,p];return true}var x=w;if(p){if(p===true){x=t}else{x=p}}var v=function(z){return n.call(x,YAHOO.util.Event.getEvent(z,w),t)};var l=[w,y,n,v,x,t,p,k];var r=g.length;g[r]=l;try{this._simpleAdd(w,y,v,k)}catch(o){this.lastError=o;this.removeListener(w,y,n);return false}return true},_getType:function(k){return this._specialTypes[k]||k},addListener:function(p,m,k,o,n){var l=((m==i||m==f)&&!YAHOO.env.ua.ie)?true:false;return this._addListener(p,this._getType(m),k,o,n,l)},addFocusListener:function(k,l,n,m){return this.on(k,i,l,n,m)},removeFocusListener:function(k,l){return this.removeListener(k,i,l)},addBlurListener:function(k,l,n,m){return this.on(k,f,l,n,m)},removeBlurListener:function(k,l){return this.removeListener(k,f,l)},removeListener:function(t,u,n){var s,p,k;u=this._getType(u);if(typeof t=="string"){t=this.getEl(t)}else{if(this._isValidCollection(t)){var m=true;for(s=t.length-1;s>-1;s--){m=(this.removeListener(t[s],u,n)&&m)}return m}}if(!n||!n.call){return this.purgeElement(t,false,u)}if("unload"==u){for(s=e.length-1;s>-1;s--){k=e[s];if(k&&k[0]==t&&k[1]==u&&k[2]==n){e.splice(s,1);return true}}return false}var r=null;var q=arguments[3];if("undefined"===typeof q){q=this._getCacheIndex(g,t,u,n)}if(q>=0){r=g[q]}if(!t||!r){return false}var l=r[this.CAPTURE]===true?true:false;try{this._simpleRemove(t,u,r[this.WFN],l)}catch(o){this.lastError=o;return false}delete g[q][this.WFN];delete g[q][this.FN];g.splice(q,1);return true},getTarget:function(m,k){var l=m.target||m.srcElement;return this.resolveTextNode(l)},resolveTextNode:function(k){try{if(k&&3==k.nodeType){return k.parentNode}}catch(l){}return k},getPageX:function(k){var l=k.pageX;if(!l&&0!==l){l=k.clientX||0;if(this.isIE){l+=this._getScrollLeft()}}return l},getPageY:function(l){var k=l.pageY;if(!k&&0!==k){k=l.clientY||0;if(this.isIE){k+=this._getScrollTop()}}return k},getXY:function(k){return[this.getPageX(k),this.getPageY(k)]},getRelatedTarget:function(k){var l=k.relatedTarget;if(!l){if(k.type=="mouseout"){l=k.toElement}else{if(k.type=="mouseover"){l=k.fromElement}}}return this.resolveTextNode(l)},getTime:function(m){if(!m.time){var k=new Date().getTime();try{m.time=k}catch(l){this.lastError=l;return k}}return m.time},stopEvent:function(k){this.stopPropagation(k);this.preventDefault(k)},stopPropagation:function(k){if(k.stopPropagation){k.stopPropagation()}else{k.cancelBubble=true}},preventDefault:function(k){if(k.preventDefault){k.preventDefault()}else{k.returnValue=false}},getEvent:function(n,l){var k=n||window.event;if(!k){var m=this.getEvent.caller;while(m){k=m.arguments[0];if(k&&Event==k.constructor){break}m=m.caller}}return k},getCharCode:function(k){var l=k.keyCode||k.charCode||0;if(YAHOO.env.ua.webkit&&(l in b)){l=b[l]}return l},_getCacheIndex:function(q,n,m,o){for(var p=0,k=q.length;p<k;p=p+1){var l=q[p];if(l&&l[this.FN]==o&&l[this.EL]==n&&l[this.TYPE]==m){return p}}return -1},generateId:function(l){var k=l.id;if(!k){k="yuievtautoid-"+c;++c;l.id=k}return k},_isValidCollection:function(k){try{return(k&&typeof k!=="string"&&k.length&&!k.tagName&&!k.alert&&typeof k[0]!=="undefined")}catch(l){return false}},elCache:{},getEl:function(k){return(typeof k==="string")?document.getElementById(k):k},clearCache:function(){},DOMReadyEvent:new YAHOO.util.CustomEvent("DOMReady",YAHOO,0,0,1),_load:function(k){if(!h){h=true;var l=YAHOO.util.Event;l._ready();l._tryPreloadAttach()}},_ready:function(k){var l=YAHOO.util.Event;if(!l.DOMReady){l.DOMReady=true;l.DOMReadyEvent.fire();l._simpleRemove(document,"DOMContentLoaded",l._ready)}},_tryPreloadAttach:function(){if(j.length===0){d=0;if(this._interval){this._interval.cancel();this._interval=null}return}if(this.locked){return}if(this.isIE){if(!this.DOMReady){this.startInterval();return}}this.locked=true;var n=!h;if(!n){n=(d>0&&j.length>0)}var o=[];var m=function(t,s){var u=t;if(s.overrideContext){if(s.overrideContext===true){u=s.obj}else{u=s.overrideContext}}s.fn.call(u,s.obj)};var k,l,p,q,r=[];for(k=0,l=j.length;k<l;k=k+1){p=j[k];if(p){q=this.getEl(p.id);if(q){if(p.checkReady){if(h||q.nextSibling||!n){r.push(p);j[k]=null}}else{m(q,p);j[k]=null}}else{o.push(p)}}}for(k=0,l=r.length;k<l;k=k+1){p=r[k];m(this.getEl(p.id),p)}d--;if(n){for(k=j.length-1;k>-1;k--){p=j[k];if(!p||!p.id){j.splice(k,1)}}this.startInterval()}else{if(this._interval){this._interval.cancel();this._interval=null}}this.locked=false},purgeElement:function(p,o,m){var r=(YAHOO.lang.isString(p))?this.getEl(p):p;var n=this.getListeners(r,m),q,l;if(n){for(q=n.length-1;q>-1;q--){var k=n[q];this.removeListener(r,k.type,k.fn)}}if(o&&r&&r.childNodes){for(q=0,l=r.childNodes.length;q<l;++q){this.purgeElement(r.childNodes[q],o,m)}}},getListeners:function(r,t){var o=[],s;if(!t){s=[g,e]}else{if(t==="unload"){s=[e]}else{t=this._getType(t);s=[g]}}var m=(YAHOO.lang.isString(r))?this.getEl(r):r;for(var p=0;p<s.length;p=p+1){var k=s[p];if(k){for(var n=0,l=k.length;n<l;++n){var q=k[n];if(q&&q[this.EL]===m&&(!t||t===q[this.TYPE])){o.push({type:q[this.TYPE],fn:q[this.FN],obj:q[this.OBJ],adjust:q[this.OVERRIDE],scope:q[this.ADJ_SCOPE],index:n})}}}}return(o.length)?o:null},_unload:function(l){var r=YAHOO.util.Event,o,p,q,m,n,k=e.slice(),s;for(o=0,m=e.length;o<m;++o){q=k[o];if(q){s=window;if(q[r.ADJ_SCOPE]){if(q[r.ADJ_SCOPE]===true){s=q[r.UNLOAD_OBJ]}else{s=q[r.ADJ_SCOPE]}}q[r.FN].call(s,r.getEvent(l,q[r.EL]),q[r.UNLOAD_OBJ]);k[o]=null}}q=null;s=null;e=null;if(g){for(p=g.length-1;p>-1;p--){q=g[p];if(q){r.removeListener(q[r.EL],q[r.TYPE],q[r.FN],p)}}q=null}r._simpleRemove(window,"unload",r._unload)},_getScrollLeft:function(){return this._getScroll()[1]},_getScrollTop:function(){return this._getScroll()[0]},_getScroll:function(){var l=document.documentElement,k=document.body;if(l&&(l.scrollTop||l.scrollLeft)){return[l.scrollTop,l.scrollLeft]}else{if(k){return[k.scrollTop,k.scrollLeft]}else{return[0,0]}}},regCE:function(){},_simpleAdd:function(){if(window.addEventListener){return function(n,m,k,l){n.addEventListener(m,k,(l))}}else{if(window.attachEvent){return function(n,m,k,l){n.attachEvent("on"+m,k)}}else{return function(){}}}}(),_simpleRemove:function(){if(window.removeEventListener){return function(n,m,k,l){n.removeEventListener(m,k,(l))}}else{if(window.detachEvent){return function(k,m,l){k.detachEvent("on"+m,l)}}else{return function(){}}}}()}}();(function(){var a=YAHOO.util.Event;a.on=a.addListener;a.onFocus=a.addFocusListener;a.onBlur=a.addBlurListener;if(a.isIE){if(self!==self.top){document.onreadystatechange=function(){if(document.readyState=="complete"){document.onreadystatechange=null;a._ready()}}}else{YAHOO.util.Event.onDOMReady(YAHOO.util.Event._tryPreloadAttach,YAHOO.util.Event,true);var b=document.createElement("p");a._dri=setInterval(function(){try{b.doScroll("left");clearInterval(a._dri);a._dri=null;a._ready();b=null}catch(c){}},a.POLL_INTERVAL)}}else{if(a.webkit&&a.webkit<525){a._dri=setInterval(function(){var c=document.readyState;if("loaded"==c||"complete"==c){clearInterval(a._dri);a._dri=null;a._ready()}},a.POLL_INTERVAL)}else{a._simpleAdd(document,"DOMContentLoaded",a._ready)}}a._simpleAdd(window,"load",a._load);a._simpleAdd(window,"unload",a._unload);a._tryPreloadAttach()})()}YAHOO.util.EventProvider=function(){};YAHOO.util.EventProvider.prototype={__yui_events:null,__yui_subscribers:null,subscribe:function(a,e,b,c){this.__yui_events=this.__yui_events||{};var d=this.__yui_events[a];if(d){d.subscribe(e,b,c)}else{this.__yui_subscribers=this.__yui_subscribers||{};var f=this.__yui_subscribers;if(!f[a]){f[a]=[]}f[a].push({fn:e,obj:b,overrideContext:c})}},unsubscribe:function(f,d,b){this.__yui_events=this.__yui_events||{};var a=this.__yui_events;if(f){var c=a[f];if(c){return c.unsubscribe(d,b)}}else{var g=true;for(var e in a){if(YAHOO.lang.hasOwnProperty(a,e)){g=g&&a[e].unsubscribe(d,b)}}return g}return false},unsubscribeAll:function(a){return this.unsubscribe(a)},createEvent:function(g,b){this.__yui_events=this.__yui_events||{};var d=b||{},e=this.__yui_events,c;if(e[g]){}else{c=new YAHOO.util.CustomEvent(g,d.scope||this,d.silent,YAHOO.util.CustomEvent.FLAT,d.fireOnce);e[g]=c;if(d.onSubscribeCallback){c.subscribeEvent.subscribe(d.onSubscribeCallback)}this.__yui_subscribers=this.__yui_subscribers||{};var a=this.__yui_subscribers[g];if(a){for(var f=0;f<a.length;++f){c.subscribe(a[f].fn,a[f].obj,a[f].overrideContext)}}}return e[g]},fireEvent:function(d){this.__yui_events=this.__yui_events||{};var b=this.__yui_events[d];if(!b){return null}var a=[];for(var c=1;c<arguments.length;++c){a.push(arguments[c])}return b.fire.apply(b,a)},hasEvent:function(a){if(this.__yui_events){if(this.__yui_events[a]){return true}}return false}};(function(){var a=YAHOO.util.Event,b=YAHOO.lang;YAHOO.util.KeyListener=function(i,d,h,g){if(!i){}else{if(!d){}else{if(!h){}}}if(!g){g=YAHOO.util.KeyListener.KEYDOWN}var f=new YAHOO.util.CustomEvent("keyPressed");this.enabledEvent=new YAHOO.util.CustomEvent("enabled");this.disabledEvent=new YAHOO.util.CustomEvent("disabled");if(b.isString(i)){i=document.getElementById(i)}if(b.isFunction(h)){f.subscribe(h)}else{f.subscribe(h.fn,h.scope,h.correctScope)}function e(m,n){if(!d.shift){d.shift=false}if(!d.alt){d.alt=false}if(!d.ctrl){d.ctrl=false}if(m.shiftKey==d.shift&&m.altKey==d.alt&&m.ctrlKey==d.ctrl){var l,o=d.keys,j;if(YAHOO.lang.isArray(o)){for(var k=0;k<o.length;k++){l=o[k];j=a.getCharCode(m);if(l==j){f.fire(j,m);break}}}else{j=a.getCharCode(m);if(o==j){f.fire(j,m)}}}}this.enable=function(){if(!this.enabled){a.on(i,g,e);this.enabledEvent.fire(d)}this.enabled=true};this.disable=function(){if(this.enabled){a.removeListener(i,g,e);this.disabledEvent.fire(d)}this.enabled=false};this.toString=function(){return"KeyListener ["+d.keys+"] "+i.tagName+(i.id?"["+i.id+"]":"")}};var c=YAHOO.util.KeyListener;c.KEYDOWN="keydown";c.KEYUP="keyup";c.KEY={ALT:18,BACK_SPACE:8,CAPS_LOCK:20,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,META:224,NUM_LOCK:144,PAGE_DOWN:34,PAGE_UP:33,PAUSE:19,PRINTSCREEN:44,RIGHT:39,SCROLL_LOCK:145,SHIFT:16,SPACE:32,TAB:9,UP:38}})();YAHOO.register("event",YAHOO.util.Event,{version:"2.8.1",build:"19"});YAHOO.register("yahoo-dom-event",YAHOO,{version:"2.8.1",build:"19"});(function(){var b=YAHOO.util;b.Selector={_foundCache:[],_regexCache:{},_re:{nth:/^(?:([-]?\d*)(n){1}|(odd|even)$)*([-+]?\d*)$/,attr:/(\[.*\])/g,urls:/^(?:href|src)/},document:window.document,attrAliases:{},shorthand:{"\\#(-?[_a-z]+[-\\w]*)":"[id=$1]","\\.(-?[_a-z]+[-\\w]*)":"[class~=$1]"},operators:{"=":function(a,d){return a===d},"!=":function(a,d){return a!==d},"~=":function(a,e){var f=" ";return(f+a+f).indexOf((f+e+f))>-1},"|=":function(a,d){return a===d||a.slice(0,d.length+1)===d+"-"},"^=":function(a,d){return a.indexOf(d)===0},"$=":function(a,d){return a.slice(-d.length)===d},"*=":function(a,d){return a.indexOf(d)>-1},"":function(a,d){return a}},pseudos:{root:function(a){return a===a.ownerDocument.documentElement},"nth-child":function(a,d){return b.Selector._getNth(a,d)},"nth-last-child":function(a,d){return b.Selector._getNth(a,d,null,true)},"nth-of-type":function(a,d){return b.Selector._getNth(a,d,a.tagName)},"nth-last-of-type":function(a,d){return b.Selector._getNth(a,d,a.tagName,true)},"first-child":function(a){return b.Selector._getChildren(a.parentNode)[0]===a},"last-child":function(d){var a=b.Selector._getChildren(d.parentNode);return a[a.length-1]===d},"first-of-type":function(a,d){return b.Selector._getChildren(a.parentNode,a.tagName)[0]},"last-of-type":function(f,e){var a=b.Selector._getChildren(f.parentNode,f.tagName);return a[a.length-1]},"only-child":function(d){var a=b.Selector._getChildren(d.parentNode);return a.length===1&&a[0]===d},"only-of-type":function(a){return b.Selector._getChildren(a.parentNode,a.tagName).length===1},empty:function(a){return a.childNodes.length===0},not:function(a,d){return !b.Selector.test(a,d)},contains:function(a,e){var f=a.innerText||a.textContent||"";return f.indexOf(e)>-1},checked:function(a){return a.checked===true}},test:function(g,i){g=b.Selector.document.getElementById(g)||g;if(!g){return false}var j=i?i.split(","):[];if(j.length){for(var h=0,a=j.length;h<a;++h){if(b.Selector._test(g,j[h])){return true}}return false}return b.Selector._test(g,i)},_test:function(r,o,p,q){p=p||b.Selector._tokenize(o).pop()||{};if(!r.tagName||(p.tag!=="*"&&r.tagName!==p.tag)||(q&&r._found)){return false}if(p.attributes.length){var t,n,s=b.Selector._re.urls;if(!r.attributes||!r.attributes.length){return false}for(var m=0,a;a=p.attributes[m++];){n=(s.test(a[0]))?2:0;t=r.getAttribute(a[0],n);if(t===null||t===undefined){return false}if(b.Selector.operators[a[1]]&&!b.Selector.operators[a[1]](t,a[2])){return false}}}if(p.pseudos.length){for(var m=0,i=p.pseudos.length;m<i;++m){if(b.Selector.pseudos[p.pseudos[m][0]]&&!b.Selector.pseudos[p.pseudos[m][0]](r,p.pseudos[m][1])){return false}}}return(p.previous&&p.previous.combinator!==",")?b.Selector._combinators[p.previous.combinator](r,p):true},filter:function(l,m){l=l||[];var j,n=[],i=b.Selector._tokenize(m);if(!l.item){for(var k=0,a=l.length;k<a;++k){if(!l[k].tagName){j=b.Selector.document.getElementById(l[k]);if(j){l[k]=j}else{}}}}n=b.Selector._filter(l,b.Selector._tokenize(m)[0]);return n},_filter:function(n,l,k,o){var p=k?null:[],i=b.Selector._foundCache;for(var m=0,a=n.length;m<a;m++){if(!b.Selector._test(n[m],"",l,o)){continue}if(k){return n[m]}if(o){if(n[m]._found){continue}n[m]._found=true;i[i.length]=n[m]}p[p.length]=n[m]}return p},query:function(h,g,f){var a=b.Selector._query(h,g,f);return a},_query:function(x,s,r,z){var a=(r)?null:[],A;if(!x){return a}var B=x.split(",");if(B.length>1){var i;for(var w=0,v=B.length;w<v;++w){i=b.Selector._query(B[w],s,r,true);a=r?i:a.concat(i)}b.Selector._clearFoundCache();return a}if(s&&!s.nodeName){s=b.Selector.document.getElementById(s);if(!s){return a}}s=s||b.Selector.document;if(s.nodeName!=="#document"){b.Dom.generateId(s);x=s.tagName+"#"+s.id+" "+x;A=s;s=s.ownerDocument}var t=b.Selector._tokenize(x);var u=t[b.Selector._getIdTokenIndex(t)],D=[],C,y=t.pop()||{};if(u){C=b.Selector._getId(u.attributes)}if(C){A=A||b.Selector.document.getElementById(C);if(A&&(s.nodeName==="#document"||b.Dom.isAncestor(s,A))){if(b.Selector._test(A,null,u)){if(u===y){D=[A]}else{if(u.combinator===" "||u.combinator===">"){s=A}}}}else{return a}}if(s&&!D.length){D=s.getElementsByTagName(y.tag)}if(D.length){a=b.Selector._filter(D,y,r,z)}return a},_clearFoundCache:function(){var e=b.Selector._foundCache;for(var h=0,a=e.length;h<a;++h){try{delete e[h]._found}catch(g){e[h].removeAttribute("_found")}}e=[]},_getRegExp:function(e,a){var f=b.Selector._regexCache;a=a||"";if(!f[e+a]){f[e+a]=new RegExp(e,a)}return f[e+a]},_getChildren:function(){if(document.documentElement.children&&document.documentElement.children.tags){return function(d,a){return(a)?d.children.tags(a):d.children||[]}}else{return function(i,l){var j=[],h=i.childNodes;for(var k=0,a=h.length;k<a;++k){if(h[k].tagName){if(!l||h[k].tagName===l){j.push(h[k])}}}return j}}}(),_combinators:{" ":function(d,a){while((d=d.parentNode)){if(b.Selector._test(d,"",a.previous)){return true}}return false},">":function(d,a){return b.Selector._test(d.parentNode,null,a.previous)},"+":function(e,f){var a=e.previousSibling;while(a&&a.nodeType!==1){a=a.previousSibling}if(a&&b.Selector._test(a,null,f.previous)){return true}return false},"~":function(e,f){var a=e.previousSibling;while(a){if(a.nodeType===1&&b.Selector._test(a,null,f.previous)){return true}a=a.previousSibling}return false}},_getNth:function(z,n,a,v){b.Selector._re.nth.test(n);var r=parseInt(RegExp.$1,10),A=RegExp.$2,u=RegExp.$3,t=parseInt(RegExp.$4,10)||0,i=[],x;var s=b.Selector._getChildren(z.parentNode,a);if(u){r=2;x="+";A="n";t=(u==="odd")?1:0}else{if(isNaN(r)){r=(A)?1:0}}if(r===0){if(v){t=s.length-t+1}if(s[t-1]===z){return true}else{return false}}else{if(r<0){v=!!v;r=Math.abs(r)}}if(!v){for(var y=t-1,w=s.length;y<w;y+=r){if(y>=0&&s[y]===z){return true}}}else{for(var y=s.length-t,w=s.length;y>=0;y-=r){if(y<w&&s[y]===z){return true}}}return false},_getId:function(f){for(var e=0,a=f.length;e<a;++e){if(f[e][0]=="id"&&f[e][1]==="="){return f[e][2]}}},_getIdTokenIndex:function(e){for(var f=0,a=e.length;f<a;++f){if(b.Selector._getId(e[f].attributes)){return f}}return -1},_patterns:{tag:/^((?:-?[_a-z]+[\w-]*)|\*)/i,attributes:/^\[([-a-z]+\w*)+([~\|\^\$\*!=]=?)?['"]?([^\]]*?)['"]?\]/i,pseudos:/^:([-\w]+)(?:\(['"]?(.+)['"]?\))*/i,combinator:/^\s*([>+~]|\s)\s*/},_tokenize:function(a){var o={},k=[],j,l=false,m=b.Selector._patterns,p;a=b.Selector._replaceShorthand(a);do{l=false;for(var n in m){if(YAHOO.lang.hasOwnProperty(m,n)){if(n!="tag"&&n!="combinator"){o[n]=o[n]||[]}if((p=m[n].exec(a))){l=true;if(n!="tag"&&n!="combinator"){if(n==="attributes"&&p[1]==="id"){o.id=p[3]}o[n].push(p.slice(1))}else{o[n]=p[1]}a=a.replace(p[0],"");if(n==="combinator"||!a.length){o.attributes=b.Selector._fixAttributes(o.attributes);o.pseudos=o.pseudos||[];o.tag=o.tag?o.tag.toUpperCase():"*";k.push(o);o={previous:o}}}}}}while(l);return k},_fixAttributes:function(h){var g=b.Selector.attrAliases;h=h||[];for(var f=0,a=h.length;f<a;++f){if(g[h[f][0]]){h[f][0]=g[h[f][0]]}if(!h[f][1]){h[f][1]=""}}return h},_replaceShorthand:function(l){var k=b.Selector.shorthand;var j=l.match(b.Selector._re.attr);if(j){l=l.replace(b.Selector._re.attr,"REPLACED_ATTRIBUTE")}for(var h in k){if(YAHOO.lang.hasOwnProperty(k,h)){l=l.replace(b.Selector._getRegExp(h,"gi"),k[h])}}if(j){for(var i=0,a=j.length;i<a;++i){l=l.replace("REPLACED_ATTRIBUTE",j[i])}}return l}};if(YAHOO.env.ua.ie&&((!document.documentMode&&YAHOO.env.ua.ie<8)||document.documentMode<8)){b.Selector.attrAliases["class"]="className";b.Selector.attrAliases["for"]="htmlFor"}})();YAHOO.register("selector",YAHOO.util.Selector,{version:"2.8.1",build:"19"});(function(){var h=YAHOO.util.Event,c=YAHOO.lang,e=h.addListener,d=h.removeListener,g=h.getListeners,f=[],b={mouseenter:"mouseover",mouseleave:"mouseout"},a=function(m,n,i){var k=h._getCacheIndex(f,m,n,i),l,j;if(k>=0){l=f[k]}if(m&&l){j=d.call(h,l[0],n,l[3]);if(j){delete f[k][2];delete f[k][3];f.splice(k,1)}}return j};c.augmentObject(h._specialTypes,b);c.augmentObject(h,{_createMouseDelegate:function(k,j,i){return function(m,q){var n=this,l=h.getRelatedTarget(m),o,p;if(n!=l&&!YAHOO.util.Dom.isAncestor(n,l)){o=n;if(i){if(i===true){o=j}else{o=i}}p=[m,n,j];if(q){p.splice(2,0,q)}return k.apply(o,p)}}},addListener:function(o,i,j,n,m){var l,k;if(b[i]){l=h._createMouseDelegate(j,n,m);l.mouseDelegate=true;f.push([o,i,j,l]);k=e.call(h,o,i,l)}else{k=e.apply(h,arguments)}return k},removeListener:function(i,j,k){var l;if(b[j]){l=a.apply(h,arguments)}else{l=d.apply(h,arguments)}return l},getListeners:function(o,p){var i=[],m,j=(p==="mouseover"||p==="mouseout"),n,k,l;if(p&&(j||b[p])){m=g.call(h,o,this._getType(p));if(m){for(k=m.length-1;k>-1;k--){l=m[k];n=l.fn.mouseDelegate;if((b[p]&&n)||(j&&!n)){i.push(l)}}}}else{i=g.apply(h,arguments)}return(i&&i.length)?i:null}},true);h.on=h.addListener}());YAHOO.register("event-mouseenter",YAHOO.util.Event,{version:"2.8.1",build:"19"});(function(){var a=YAHOO.util.Event,c=YAHOO.lang,d=[],b=function(e,h,g){var f;if(!e||e===g){f=false}else{f=YAHOO.util.Selector.test(e,h)?e:b(e.parentNode,h,g)}return f};c.augmentObject(a,{_createDelegate:function(g,h,f,e){return function(q){var p=this,l=a.getTarget(q),n=h,j=(p.nodeType===9),i,o,k,m;if(c.isFunction(h)){i=h(l)}else{if(c.isString(h)){if(!j){k=p.id;if(!k){k=a.generateId(p)}m=("#"+k+" ");n=(m+h).replace(/,/gi,(","+m))}if(YAHOO.util.Selector.test(l,n)){i=l}else{if(YAHOO.util.Selector.test(l,((n.replace(/,/gi," *,"))+" *"))){i=b(l,n,p)}}}}if(i){o=i;if(e){if(e===true){o=f}else{o=e}}return g.call(o,q,i,p,f)}}},delegate:function(l,h,f,k,j,i){var m=h,g,e;if(c.isString(k)&&!YAHOO.util.Selector){return false}if(h=="mouseenter"||h=="mouseleave"){if(!a._createMouseDelegate){return false}m=a._getType(h);g=a._createMouseDelegate(f,j,i);e=a._createDelegate(function(n,o,p){return g.call(o,n,p)},k,j,i)}else{e=a._createDelegate(f,k,j,i)}d.push([l,m,f,e]);return a.on(l,m,e)},removeDelegate:function(j,f,g){var e=f,h=false,i,k;if(f=="mouseenter"||f=="mouseleave"){e=a._getType(f)}i=a._getCacheIndex(d,j,e,g);if(i>=0){k=d[i]}if(j&&k){h=a.removeListener(k[0],k[1],k[3]);if(h){delete d[i][2];delete d[i][3];d.splice(i,1)}}return h}})}());YAHOO.register("event-delegate",YAHOO.util.Event,{version:"2.8.1",build:"19"});var FDEV=YAHOO,FYU=FDEV.util,FYD=FYU.Dom,FYE=FYU.Event,FYS=FYU.Selector.query,FYG=FYD.get,FTA=function(c){if(!c){return[]}if("toArray" in Object(c)){return c.toArray()}var a=c.length||0,b=new Array(a);while(a--){b[a]=c[a]}return b};var $Y=YAHOO.util,$D=$Y.Dom,$E=$Y.Event,$$=$Y.Selector.query,$=$D.get,$A=FTA;var FD=YAHOO.namespace("FD");FD.namespace=function(){var a=Array.prototype.slice.call(arguments,0),b;for(b=0;b<a.length;++b){if(a[b].indexOf("FD")!=0){a[b]="FD."+a[b]}}return YAHOO.namespace.apply(null,a)};FD.namespace("core","util","widget","FD.sys");if(!Array.prototype.indexOf){Array.prototype.indexOf=function(c,b){if(b==null){b=0}else{if(b<0){b=Math.max(0,this.length+b)}}for(var a=b;a<this.length;a++){if(this[a]===c){return a}}return -1}}if(!Array.prototype.lastIndexOf){Array.prototype.lastIndexOf=function(c,b){if(b==null){b=this.length-1}else{if(b<0){b=Math.max(0,this.length+b)}}for(var a=b;a>=0;a--){if(this[a]===c){return a}}return -1}}if(!Array.prototype.forEach){Array.prototype.forEach=function(c,d){for(var b=0,a=this.length;b<a;++b){c.call(d,this[b],b,this)}}}if(!Array.prototype.filter){Array.prototype.filter=function(d,e){var c=[];for(var b=0,a=this.length;b<a;++b){if(d.call(e,this[b],b,this)){c.push(this[b])}}return c}}if(!Array.prototype.map){Array.prototype.map=function(d,e){var c=[];for(var b=0,a=this.length;b<a;++b){c.push(d.call(e,this[b],b,this))}return c}}if(!Array.prototype.some){Array.prototype.some=function(c,d){for(var b=0,a=this.length;b<a;++b){if(c.call(d,this[b],b,this)){return true}}return false}}if(!Array.prototype.every){Array.prototype.every=function(c,d){for(var b=0,a=this.length;b<a;++b){if(!c.call(d,this[b],b,this)){return false}}return true}}Array.prototype.contains=function(a){return this.indexOf(a)!=-1};Array.prototype.insertAt=function(b,a){a=a||0;this.splice(a,0,b)};Array.prototype.insertBefore=function(c,b){var a=this.indexOf(b);if(a==-1){this.push(c)}else{this.splice(a,0,c)}};Array.prototype.removeAt=function(a){this.splice(a,1)};Array.prototype.remove=function(b){var a=this.indexOf(b);if(a!=-1){this.splice(a,1)}};Array.prototype.del=function(a){if(a<0){return this}return this.slice(0,a).concat(this.slice(a+1,this.length))};if(!String.prototype.toQueryParams){String.prototype.toQueryParams=function(){var f={};var g=this.split("&");var d=/([^=]*)=(.*)/;for(var b=0;b<g.length;b++){var a=d.exec(g[b]);if(!a){continue}var c=decodeURIComponent(a[1]);var e=a[2]?decodeURIComponent(a[2]):undefined;if(f[c]!==undefined){if(f[c].constructor!=Array){f[c]=[f[c]]}if(e){f[c].push(e)}}else{f[c]=e}}return f}}if(!String.prototype.trim){String.prototype.trim=function(){var a=/(^[\u3000\s]+)|([\u3000\s]+$)/g;return function(){return this.replace(a,"")}}()}if(!String.prototype.replaceAll){String.prototype.replaceAll=function(b,a){return this.replace(new RegExp(b,"gm"),a)}}if(!String.prototype.lenB){String.prototype.lenB=function(){return this.replace(/[^\x00-\xff]/g,"**").length}}if(!String.prototype.cut){String.prototype.cut=function(a,d){var f=this;if(f=="undefined"){return""}var b=0;a=parseInt(a);if(f.lenB()<=a){return f}for(var c=0;c<f.length;c++){var e=f.charCodeAt(c);if(e<0||e>255){b+=2}else{b++}if(b>a){return f.substr(0,c==0?c=1:c)+(d||"")}}return""}}(function(){var a=Number.prototype.toFixed;Number.prototype.toFixed=function(c){var b=this,d=Math.pow(10,c||0);b*=d;b=Math.round(b);b/=d;return a.call(b,c)}})();FD.common={cookie:function(b,a){a||(a={});var c=a.raw?function(e){return e}:unescape;var d=document.cookie.match("(?:^|;)\\s*"+b+"=([^;]*)");return d?c(d[1]):""},trim:function(a){return a.replace(/(^\s*)|(\s*$)/g,"")},escapeHTML:function(b){var c=document.createElement("div");var a=document.createTextNode(b);c.appendChild(a);return c.innerHTML},unescapeHTML:function(a){var b=document.createElement("div");b.innerHTML=a.replace(/<\/?[^>]+>/gi,"");return b.childNodes[0]?b.childNodes[0].nodeValue:""},stripTags:function(a){return a.replace(/<\/?[^>]+>/gi,"")},toArray:function(b,d){var c=[];for(var a=d||0;a<b.length;a++){c[c.length]=b[a]}return c},applyIf:function(c,a){if(c&&a&&typeof a=="object"){for(var b in a){if(!YAHOO.lang.hasOwnProperty(c,b)){c[b]=a[b]}}}return c},apply:function(c,a){if(c&&a&&typeof a=="object"){for(var b in a){c[b]=a[b]}}return c},goTo:function(e){var d=null,f=null,c="_blank",g=arguments[1]==c?c:"_self";if(document.all){d=document.createElement("a"),f=document.body;if(!d.click){return window.open(e,g)}d.setAttribute("target",g);d.setAttribute("href",e);d.style.display="none";if(!f){return}f.appendChild(d);d.click();if(g==c){setTimeout(function(){try{f.removeChild(d)}catch(a){}},500)}}else{return window.open(e,g)}},concat:function(){var d=arguments;var a=[],b,f;outer:for(var e=0,b=d.length;e<b;e++){inner:for(var c=0,f=d[e].length;c<f;c++){a.push(d[e][c])}}return a},getFormAction:function(a){a=FYG(a);if(a&&a.tagName.toLowerCase()=="form"){return a.attributes.getNamedItem("action").value}return null},formSerialize:function(a,c,b){a=FYG(a);b=b||"&";var k="";if(a&&a.tagName.toLowerCase()=="form"){var h=a.getElementsByTagName("input");var d=a.getElementsByTagName("select");var l=a.getElementsByTagName("textarea");h=FD.common.concat(h,d,l);var g=h.length;while(g-->0){if(h[g].tagName.toLowerCase()==="input"&&"checkboxradio".lastIndexOf(h[g].type)>-1&&!h[g].checked){continue}var f=h[g].name+"="+encodeURIComponent(h[g].value);if(k==""){k+=f}else{k+=b+f}}}if(YAHOO.lang.isObject(c)){for(var j in c){var f=j+"="+encodeURIComponent(c[j]);if(k==""){k+=f}else{k+=b+f}}}return k},parse:function(str){var jsn;try{jsn=YAHOO.lang.JSON.parse(str)}catch(x){try{eval("jsn = "+str)}catch(e){}}return jsn},toggleClass:function(c,b,a){var c=$(c);if($D.hasClass(c,b)){$D.removeClass(c,b);$D.addClass(c,a)}else{$D.addClass(c,b);$D.removeClass(c,a)}},emptyFn:function(){},_guid:1,guid:function(){return this._guid++},request:function(a,b,i,j){var g=this.emptyFn,f=function(q){var m=[],n;for(n in q){if(FDEV.lang.isArray(q[n])){for(var l=0,k=q[n].length;l<k;l++){m.push(n+"="+q[n][l]+"")}}else{m.push(n+"="+q[n]+"")}}return m.join("&")},h={cache:false,timeout:10000};i=i||{};this.apply(h,i);j=j||{};a=a.toUpperCase();if(a=="JSONP"){if(i.onCallback){if(!h.ns){h.ns=window;h.strNS=null}if(!h.fn){h.fn="rnd"}if(!h.cache){h.fn=h.fn+new Date().getTime()+this.guid()}if(!h.key){h.key="callback"}}h.attributes=h.attributes||{};if(!h.attributes.charset){h.attributes.charset=h.charset||"gbk"}if(h.attributes.async!==false){h.attributes.async=true}h.onSuccess=function(k){if(i.onSuccess){i.onSuccess.call(this,k)}if(i.onCallback&&h.ns[h.fn]!=null&&h.ns[h.fn]!=g){FDEV.lang.later(h.timeout,this,h.onTimeout,k)}};h.onFailure=function(k){if(i.onFailure){i.onFailure.call(this,k)}if(i.onCallback){h.ns[h.fn]=g}};h.onTimeout=function(k){if(i.onTimeout){i.onTimeout.call(this,k)}if(i.onCallback){h.ns[h.fn]=g}};if(i.onCallback){h.ns[h.fn]=function(k){i.onCallback.call(i.scope||this,k);h.ns[h.fn]=g};j[h.key]=(h.strNS?h.strNS+".":"")+h.fn}var c=f(j);if(c){var d=b.split("?");b=[b,c].join(d.length>1?"&":"?")}return FDEV.util.Get.script(b,h)}else{if(i.onSuccess){h.success=function(k){i.onSuccess.call(this,k)}}h.failure=function(k){if(k.status==-1){if(i.onTimeout){i.onTimeout.call(this,k)}}else{if(i.onFailure){i.onFailure.call(this,k)}}};var c=(FDEV.lang.isObject(j)?this.formSerialize(null,j):j),e;if(c){if(a=="GET"){var d=b.split("?");b=[b,c].join(d.length>1?"&":"?")}else{e=c}}return FDEV.util.Connect.asyncRequest(a,b,h,e)}}};(function(){FD.common.loginId=decodeURIComponent(FD.common.cookie("__cn_logon_id__",{raw:true}));FD.common.isLogin=(FD.common.loginId!==""?true:false);FD.common.lastLoginId=decodeURIComponent(FD.common.cookie("__last_loginid__",{raw:true}))})();FD.version="3.2.2010-8-31";FD.test={};
YAHOO.util.Get=function(){var m={},l=0,r=0,e=false,n=YAHOO.env.ua,s=YAHOO.lang;var j=function(x,t,y){var u=y||window,z=u.document,A=z.createElement(x);for(var v in t){if(t[v]&&YAHOO.lang.hasOwnProperty(t,v)){A.setAttribute(v,t[v])}}return A};var i=function(u,v,t){var w={id:"yui__dyn_"+(r++),type:"text/css",rel:"stylesheet",href:u};if(t){s.augmentObject(w,t)}return j("link",w,v)};var p=function(u,v,t){var w={id:"yui__dyn_"+(r++),type:"text/javascript",async:true,src:u};if(t){s.augmentObject(w,t)}return j("script",w,v)};var a=function(t,u){return{tId:t.tId,win:t.win,data:t.data,nodes:t.nodes,msg:u,purge:function(){d(this.tId)}}};var b=function(t,w){var u=m[w],v=(s.isString(t))?u.win.document.getElementById(t):t;if(!v){q(w,"target node not found: "+t)}return v};var q=function(w,v){var t=m[w];if(t.onFailure){var u=t.scope||t.win;t.onFailure.call(u,a(t,v))}};var c=function(w){var t=m[w];t.finished=true;if(t.aborted){var v="transaction "+w+" was aborted";q(w,v);return}if(t.onSuccess){var u=t.scope||t.win;t.onSuccess.call(u,a(t))}};var o=function(v){var t=m[v];if(t.onTimeout){var u=t.scope||t;t.onTimeout.call(u,a(t))}};var g=function(v,A){var u=m[v];if(u.timer){u.timer.cancel()}if(u.aborted){var y="transaction "+v+" was aborted";q(v,y);return}if(A){u.url.shift();if(u.varName){u.varName.shift()}}else{u.url=(s.isString(u.url))?[u.url]:u.url;if(u.varName){u.varName=(s.isString(u.varName))?[u.varName]:u.varName}}var D=u.win,C=D.document,B=C.getElementsByTagName("head")[0],x;if(u.url.length===0){if(u.type==="script"&&n.webkit&&n.webkit<420&&!u.finalpass&&!u.varName){var z=p(null,u.win,u.attributes);z.innerHTML='YAHOO.util.Get._finalize("'+v+'");';u.nodes.push(z);B.appendChild(z)}else{c(v)}return}var t=u.url[0];if(!t){u.url.shift();return g(v)}if(u.timeout){u.timer=s.later(u.timeout,u,o,v)}if(u.type==="script"){x=p(t,D,u.attributes)}else{x=i(t,D,u.attributes)}f(u.type,x,v,t,D,u.url.length);u.nodes.push(x);if(u.insertBefore){var E=b(u.insertBefore,v);if(E){E.parentNode.insertBefore(x,E)}}else{B.appendChild(x)}if((n.webkit||n.gecko)&&u.type==="css"){g(v,t)}};var k=function(){if(e){return}e=true;for(var t in m){var u=m[t];if(u.autopurge&&u.finished){d(u.tId);delete m[t]}}e=false};var d=function(z){if(m[z]){var t=m[z],u=t.nodes,x=u.length,C=t.win.document,A=C.getElementsByTagName("head")[0],v,y,w,B;if(t.insertBefore){v=b(t.insertBefore,z);if(v){A=v.parentNode}}for(y=0;y<x;y=y+1){w=u[y];if(w.clearAttributes){w.clearAttributes()}else{for(B in w){delete w[B]}}A.removeChild(w)}t.nodes=[]}};var h=function(u,t,v){var x="q"+(l++);v=v||{};if(l%YAHOO.util.Get.PURGE_THRESH===0){k()}m[x]=s.merge(v,{tId:x,type:u,url:t,finished:false,aborted:false,nodes:[]});var w=m[x];w.win=w.win||window;w.scope=w.scope||w.win;w.autopurge=("autopurge" in w)?w.autopurge:(u==="script")?true:false;if(v.charset){w.attributes=w.attributes||{};w.attributes.charset=v.charset}s.later(0,w,g,x);return{tId:x}};var f=function(C,x,w,u,y,z,B){var A=B||g;if(n.ie){x.onreadystatechange=function(){var D=this.readyState;if("loaded"===D||"complete"===D){x.onreadystatechange=null;A(w,u)}}}else{if(n.webkit){if(C==="script"){if(n.webkit>=420){x.addEventListener("load",function(){A(w,u)})}else{var t=m[w];if(t.varName){var v=YAHOO.util.Get.POLL_FREQ;t.maxattempts=YAHOO.util.Get.TIMEOUT/v;t.attempts=0;t._cache=t.varName[0].split(".");t.timer=s.later(v,t,function(I){var F=this._cache,E=F.length,D=this.win,G;for(G=0;G<E;G=G+1){D=D[F[G]];if(!D){this.attempts++;if(this.attempts++>this.maxattempts){var H="Over retry limit, giving up";t.timer.cancel();q(w,H)}else{}return}}t.timer.cancel();A(w,u)},null,true)}else{s.later(YAHOO.util.Get.POLL_FREQ,null,A,[w,u])}}}}else{x.onload=function(){A(w,u)}}}};return{POLL_FREQ:10,PURGE_THRESH:20,TIMEOUT:2000,_finalize:function(t){s.later(0,null,c,t)},abort:function(u){var v=(s.isString(u))?u:u.tId;var t=m[v];if(t){t.aborted=true}},script:function(t,u){return h("script",t,u)},css:function(t,u){return h("css",t,u)}}}();YAHOO.register("get",YAHOO.util.Get,{version:"2.8.1",build:"19"});;
window.online=null;(function(w){var Alitalk=function(els,opts){if(els&&els.nodeType){els=[els]}if(els&&els.length){this.init(els,opts)}},isIE=!!(FDEV.env.ua.ie),version,isInstalled=(function(){if(isIE){var vers={"aliimx.wangwangx":6,"Ali_Check.InfoCheck":5};for(var p in vers){try{new ActiveXObject(p);version=vers[p];return true}catch(e){}}version=0}return false})(),autoLogin=function(id){var src;if(version==5){src="alitalk:"}else{src="aliim:login?uid="+(id||"")}window.location=src},defaults={cls:{base:"iconAlitalk",on:"icon-on",off:"icon-off",mb:"icon-mb"},siteID:"cnalichn",remote:true,autoLogin:false,beginNum:0,prop:"",getAlitalk:function(){window.open("http://alitalk.1688.com/","_blank")}},success=function(ali){for(var i=0;i<ali.els.length;i++){if(ali.els[i].opt.remote){ali.els[i].opt.online=window.online[i];FYD.addClass(ali.els[i],ali.els[i].opt.cls.base);switch(window.online[i]){case 0:case 2:case 6:default:FYD.addClass(ali.els[i],ali.els[i].opt.cls.off);break;case 1:FYD.addClass(ali.els[i],ali.els[i].opt.cls.on);break;case 4:case 5:FYD.addClass(ali.els[i],ali.els[i].opt.cls.mb);break}if(ali.els[i].opt.onRemote){ali.els[i].opt.onRemote.call(ali.els[i])}}}window.online=null;if(ali.opts.onSuccess){ali.opts.onSuccess.call(ali)}},onClickHandler=function(e){if(e){FYE.preventDefault(e)}var o=this.opt,ret=false;if(!isIE){if(YAHOO.env.ua.gecko||YAHOO.env.ua.webkit){var mimetype=navigator.mimeTypes["application/ww-plugin"];if(mimetype){var plugin=document.createElement("embed");plugin.setAttribute("type","application/ww-plugin");FYD.setStyle(plugin,"visibility","hidden");FYD.setStyle(plugin,"width",0);FYD.setStyle(plugin,"height",0);FYE.onDOMReady(function(S){document.body.appendChild(plugin);numberify=function(s){var c=0;return parseFloat(s.replace(/\./g,function(){return(c++===0)?".":""}))};if((plugin.NPWWVersion&&numberify(plugin.NPWWVersion())>=1.003)||plugin.isInstalled(1)){ret=true}if(plugin.tagName.toLowerCase()=="embed"){plugin.parentNode.removeChild(plugin)}})}}if(ret){version=6}else{if(o.webWW){o.webWW.call(this)}return}}if(o.onClickBegin){var res=o.onClickBegin.call(this,e);if(!res){return}}if(!o.remote){o.online=1}if(o.online==null){return}var prop=o.prop;if(typeof prop=="function"){prop=prop.call(this)}switch(version){case 0:default:o.getAlitalk.call(this);break;case 5:window.location="Alitalk:Send"+(o.online==4?"Sms":"IM")+"?"+o.id+"&siteid="+o.siteID+"&status="+o.online+prop;break;case 6:if(o.online==4){window.location="aliim:smssendmsg?touid="+o.siteID+o.id+prop}else{window.location="aliim:sendmsg?touid="+o.siteID+o.id+"&siteid="+o.siteID+"&status="+o.online+prop}break}if(o.onClickEnd){o.onClickEnd.call(this,e)}};Alitalk.prototype={init:function(els,opts){if(window.online!=null){setTimeout(function(){return new w.Alitalk(els,opts)},Math.random()*1000+1000);return}else{this.opts=FD.common.applyIf(opts||{},defaults);if(this.opts.remote){window.online=[]}this.getAlitalk=this.opts.getAlitalk}if(els.nodeType){els=[els]}if(!els.length){return}this.els=els;var ids="",that=this;for(var i=0;i<els.length;i++){var o=FD.common.applyIf(eval("("+(FYD.getAttribute(els[i],"alitalk")||"{}")+")"),this.opts);if(!o.id||!FDEV.lang.trim(o.id)){els.splice(i,1);i--}else{els[i].opt=o;ids+=els[i].opt.siteID+o.id+";"}}FYE.addListener(els,"click",onClickHandler);if(this.opts.remote){FDEV.util.Get.script("http://amos.im.alisoft.com/mullidstatus.aw?beginnum="+this.opts.beginNum+"&uids="+ids+"&t="+new Date().valueOf(),{charset:"gb2312",onSuccess:function(){success(that)},onFailure:function(){window.online=null},onTimeout:function(){window.online=null}})}if(isIE&&this.opts.autoLogin){autoLogin()}}};w.Alitalk=Alitalk;w.Alitalk.version=version;w.Alitalk.isInstalled=isInstalled;w.Alitalk.autoLogin=autoLogin;w.Alitalk.talk=function(o){var scope={};scope.opt=o||{};scope.opt.online=scope.opt.online||1;FD.common.applyIf(scope.opt,defaults);onClickHandler.call(scope)}})(FD.widget);;
FD.widget.AutoComplete=function(a,b){this.container=$(a);if(!this.container){return}this.inputBox=$D.getFirstChild(this.container);if(!this.inputBox||this.inputBox.tagName.toLowerCase()!="input"){return}this.inputBox.setAttribute("autoComplete","off");var c={url:"http://suggest.1688.com/bin/suggest?type=saleoffer&q=",keySizeLimit:12,showItemNumber:10,resultName:"_suggest_result_.result",resultSummary:"_suggest_result_.summary",resultContainer:"f-autocomplete-result",isShowShut:false,isAnim:false,formName:"f-autocomplete-form",charset:"gb2312",showType:1,pX:0,pY:0,pW:0};this.config=FD.common.applyIf(b||{},c);this.resultCache={};this.resultCacheSum={};this.containerUl=null;this.containerLi=null;this.currentKey=null;this.currentNum=-1;$E.on(this.inputBox,"keyup",this.adjustKeyCode,this,true);$E.on(this.inputBox,"blur",this.hiddenResult,this,true)};FD.widget.AutoComplete.prototype={adjustKeyCode:function(a){switch(a.keyCode){case 38:this.getPreItem();break;case 40:this.getNextItem();break;case 13:this.hiddenResult();return;case 27:this.hiddenResult();break;default:$D.setStyle("clearsearchbutton","display","block");this.setUrl();break}},setUrl:function(){var a=FD.common.trim(this.inputBox.value);if(!a||a==""){$D.setStyle("clearsearchbutton","display","none")}if(!a||a.length>this.config.keySizeLimit){this.hiddenResult();return}this.currentKey=a;if(typeof(this.resultCache[a])!="undefined"){this.showResult2(this.resultCache[a],this.resultCacheSum[a])}else{var b=this.config.url+a;this.getXHRData(b,a)}},getXHRData:function(url,v){var _self=this;$Y.Get.script(url,{scope:_self,charset:this.config.charset,onSuccess:function(o){var resultArray=eval(this.config.resultName);var resultSummary=eval(this.config.resultSummary);if(resultArray&&resultArray.length>0){switch(this.config.showType){case 0:this.showResult(resultArray);break;case 1:this.showResult2(resultArray,resultSummary);break;case 2:this.showResult3(resultArray,resultSummary);break;default:break}this.resultCache[v]=resultArray;this.resultCacheSum[v]=resultSummary;resultArray=null}else{this.hiddenResult()}if(YAHOO.env.ua.ie!=6){setTimeout(function(){o.purge()},0)}}})},showResult2:function(l,c){var j;if(typeof(suggestionClick)!="undefined"){aliclick(this,"?tracelog="+suggestionClick.aliurl)}if(!this.containerUl){j=true;var h=document.createElement("ul");h.id=this.config.resultContainer;$D.setStyle(h,"position","absolute");$D.setStyle(h,"left",this.config.pX+"px");$D.setStyle(h,"top",this.inputBox.offsetHeight+this.config.pY+"px");$D.setStyle(h,"width",this.inputBox.offsetWidth-2+this.config.pW+"px");if(this.config.isAnim){$D.setStyle(h,"visibility","hidden")}this.container.appendChild(h);this.containerUl=h}else{j=false;this.containerUl.innerHTML=""}for(var f=0,g=l.length;f<g;++f){var m=document.createElement("li");l[f][0]=l[f][0].replace("_",'<span style="color:#ff7300;">');l[f][0]=l[f][0].replace("%","</span>");m.className="f-autocomplete-item";m.setAttribute("txt",l[f][0]);m.innerHTML='<span class="word">'+l[f][0]+'</span><span class="num"> \u7ea6'+l[f][1]+"\u7ed3\u679c</span>";this.containerUl.appendChild(m);b(m,this,l[f][0],f)}if(c){var a=null;var m=document.createElement("li");m.setAttribute("txt",c);a=l[0][0].substr(l[0][0].indexOf(">")+1,c.length);m.innerHTML='<span class="word">\u8f93\u5165"</span><span class="redWord">'+c+'</span><span class="word">"\u4e5f\u80fd\u5728\u63d0\u793a\u6846\u627e\u5230"</span><span class="redWord">'+a+'</span><span class="word">"</span>';$D.setStyle(m,"background-color","#EDECEC");this.containerUl.appendChild(m)}this.containerLi=$$("#"+this.container.id+" .f-autocomplete-item");l=null;if(this.config.isShowShut){var n=document.createElement("li");n.className="shut";n.innerHTML="shut";this.containerUl.appendChild(n);$E.on(n,"click",this.hiddenResult)}if(this.config.isAnim&&j){var d=this.containerUl.offsetHeight;$D.setStyle(this.containerUl,"height",0);$D.setStyle(this.containerUl,"visibility","visible");var k={height:{to:d}};var e=new $Y.Anim(this.containerUl,k,0.3,$Y.Easing.easeInStrong);e.onComplete.subscribe(function(){$D.setStyle(this.containerUl,"height","auto")},this,true);e.animate()}function b(q,p,i,r){$E.on(q,"mouseover",function(){$D.removeClass(p.containerLi,"on");$D.addClass(q,"on");p.currentNum=r});$E.on(q,"mouseout",function(){$D.removeClass(q,"on")});$E.on(q,"mousedown",p.itemSubmit,i,p)}},getNextItem:function(){if(this.containerLi){$D.removeClass(this.containerLi,"on");if(this.currentNum==this.containerLi.length-1){this.currentNum=-1}$D.addClass(this.containerLi[this.currentNum+1],"on");this.inputBox.value=FD.common.stripTags(this.containerLi[this.currentNum+1].getAttribute("txt"));this.currentNum+=1}},getPreItem:function(){if(this.containerLi){$D.removeClass(this.containerLi,"on");if(this.currentNum<=0){this.currentNum=this.containerLi.length}$D.addClass(this.containerLi[this.currentNum-1],"on");this.inputBox.value=FD.common.stripTags(this.containerLi[this.currentNum-1].getAttribute("txt"));this.currentNum-=1}},hiddenResult:function(){if(this.containerUl){if(this.config.isAnim){var a={height:{to:0}};var b=new $Y.Anim(this.containerUl,a,0.3,$Y.Easing.easeInStrong);b.onComplete.subscribe(function(){this.container.removeChild(this.containerUl);this.containerUl=null;this.currentNum=-1;this.containerLi=null},this,true);b.animate()}else{this.container.removeChild(this.containerUl);this.containerUl=null;this.currentNum=-1;this.containerLi=null}}},itemSubmit:function(b,a){this.inputBox.value=FD.common.stripTags(a);if(typeof(suggestionClick)!="undefined"){aliclick(this,"?tracelog="+suggestionClick.aliurlclick)}document.forms[this.config.formName].submit()}};FD.widget.AutoComplete.init=function(a,b){return new FD.widget.AutoComplete(a,b)};;
function aliclick(u,param)
{
var url = "http://stat.1688.com/tracelog/click.html";
return baseClick(url,param);
}
function etcclick(u, param) {
var url = "http://stat.1688.com/etclistquery.html";
return baseClick(url,param);
}
function eeclick(u, param) {
var url ="http://stat.1688.com/ee.html";
return baseClick(url,param);
}
function aliclickType(u, param){
var urlTxt = window.location.href;
if(urlTxt){
var urlType = urlTxt.substring(urlTxt.lastIndexOf('/')+1,urlTxt.lastIndexOf('.'));
}
aliclick(u, param+'_'+urlType);
}
function baseClick(url,param)
{
if (typeof window.dmtrack != "undefined") {
dmtrack.clickstat(url, param);
} else {
var d = new Date();
if (document.images) {
(new Image).src = url + param+'&time='+d.getTime();
}
}
return true;
}
/*
function aliclickType(u, param){
var urlTxt = window.location.href;
if(urlTxt){
var urlType = urlTxt.substring(urlTxt.lastIndexOf('/')+1,urlTxt.lastIndexOf('.'));
}
aliclick(u, param+'_'+urlType);
}
function aliclick(u, param) {
d = new Date();
if(document.images) {
var img_aliclick = new Image();
img_aliclick.src="http://stat.1688.com/tracelog/click.html" + param + "&time=" + d.getTime();
}
return true;
}
function etcclick(u, param) {
d = new Date();
if(document.images) {
var img_etc_aliclick = new Image();
img_etc_aliclick.src="http://stat.1688.com/etclistquery.html" + param + "&time=" + d.getTime();
}
return true;
}
function eeclick(u, param) {
d = new Date();
if (document.images) {
(new Image()).src = "http://stat.1688.com/ee.html" + param + "&time=" + d.getTime();
}
return true;
}
*/;
/*
头部通用js
页面结构参考首页
leijun.wul
2010.6.24
*/
(function() {
var Ali = {
isDebug: false, 				/*是否开启调试模式*/
memberId: '欢迎来到阿里巴巴', /*最后的登录id*/
isSigned: false				/*是否已登录*/
};
/**
* requestM: 请求管理器
*/
var requestM = {
alitalkUrl:'http://style.c.aliimg.com/js/lib/fdev-v3/widget/alitalk/alitalk-min.js',
isAlitalkLoad:false,
isAlitalkLoad1:false
};
var earlyFunc = {
/**
* 获取cookie
* @method getCookie
*/
getCookie: function(name) {
var value = document.cookie.match('(?:^|;)\\s*' + name + '=([^;]*)');
return value ? unescape(value[1]) : '';
}
};
/**
* 定义在初始化时需要执行的静态方法集合
*/
var readyFunc = [
/**
* No.0
* 显示页面顶部的登录信息
* @method showTopLogin
*/
function showTopLogin() {
try{
$('nosigned').getElementsByTagName('a')[0].href = 'http://exodus.1688.com/member/signin.htm?Done=' + location.href;
}catch(e){}
//$D.setStyle($('lead-loading'),'display','none');
if (FD.common.lastLoginId) {//老用户
Ali.memberId = FD.common.lastLoginId || '欢迎来到阿里巴巴';
if (earlyFunc.getCookie('__cn_logon__') && earlyFunc.getCookie('__cn_logon__') === 'true') {
$D.removeClass($('signed'), 'hide');
$D.addClass($('nosigned'), 'hide');
Ali.isSigned = true;
}
}
$('memberId2').innerHTML = '您好, ' + Ali.memberId + '&nbsp;';
$('memberId1').innerHTML = '您好, ' + Ali.memberId + '&nbsp;';
},
/**
* No.1
* 触摸效果初始化
* @method initTrigger
*/
function initTrigger() {
var timeInId, //鼠标移入定时器
timeOutId, 	//鼠标移出定时器
trigger=$D.getElementsByClassName('nav-trigger'); 		//上一次触发的box对象
//鼠标移入
$E.on(trigger, 'mouseover', function(e) {
clearTimeout(timeOutId); //清除鼠标离开的延时，如果未执行就取消隐藏事件
var self = this;
// 鼠标移上去后做个延时
timeInId = setTimeout(function() {
$D.removeClass(trigger, 'cur');
$D.addClass(self, 'cur');
if(self.id == 'top-cxt'){
//诚信通下拉，初始化旺旺
if(requestM.isAlitalkLoad1){
return;
}else{
new FD.widget.Alitalk($$('a[alitalk]','top-cxt'));
}
}
}, 300);
});
// 鼠标移开
$E.on(trigger, 'mouseout', function(e) {
clearTimeout(timeInId); //清除鼠标移入的延时，如果未执行就取消显示事件
timeOutId = setTimeout(function() {
$D.removeClass(trigger, 'cur');//清除所有触发对象的显示事件，如果移入另外一个，则会触发移入事件
}, 300);
});
}
];
//Dom树构建完毕后开始执行
$E.onDOMReady(function() {
//静态方法调用
for (var i = 0, len = readyFunc.length; i < len; i++) {
try {
readyFunc[i]();
} catch (e) {
if (Ali.isDebug) {	//在firebug下调试
console.info('Error at No.' + i + '; ' + e.name + ':' + e.message);
}
} finally {
continue;
};
}
});
})();;
/*头部通用js
* 页面结构参考首页
* leijun.wul
* 2010.6.24
*/
(function() {
/**
* 定义在初始化时需要执行的静态方法集合
*/
var readyFunc = [
/**
* No.0
* 导航数据初始化
* @method intnavData
*/
function intnavData(){
var navList=$("nav-list");
var temp="";
if(navdata){
for(i=0;i<navdata.length;i++){temp+=navdata[i].type;}
if(temp.indexOf(2)!=-1&&$("more-trigger")){
var moreNode=document.createElement("ul");
}
if(temp.indexOf(3)!=-1&&!$("advanced-nav")){
var advancedNode=document.createElement("div");
advancedNode.id="advanced-nav";
$D.addClass(advancedNode,"advanced-nav");
var navright=document.createElement("div");
$D.addClass(navright,"nav-right");
var advancedcont=document.createElement("ul");
$D.addClass(advancedcont,"advanced-cont");
}
for(i=0;i<navdata.length;i++){
var li=document.createElement("li");
if(navdata[i].id){
li.id=navdata[i].id;
}
if(navdata[i].type==0){
if(i==temp.lastIndexOf(0)){
$D.addClass(li,"last");
}
if(navdata[i].current){
$D.addClass(li,"current");
$D.removeClass(li,"last");
}
if(navdata[i].style){
$D.addClass(li,navdata[i].style);
}
}else if(navdata[i].type==1){
$D.addClass(li,"right");
}else if(navdata[i].type==3){
if(navdata[i].current){
$D.addClass(li,"current");
}
}
var a=document.createElement("a");
switch(navdata[i].icon){
case 0:
break;
case 1:
$D.addClass(a,"new-icon");
break;
case 2:
$D.addClass(a,"hot-icon");
break;
default:
break;
}
if(navdata[i].tracelog){
aliclick(a,navdata[i].tracelog);
}
a.title=navdata[i].text;
a.href=navdata[i].link;
a.innerHTML=navdata[i].text;
li.appendChild(a);
if(navdata[i].type==0||navdata[i].type==1){
navList.appendChild(li);
}else if(navdata[i].type==2){
moreNode.appendChild(li);
}else if(navdata[i].type==3){
if(!$("advanced-nav")){
advancedcont.appendChild(li);
}
}
}
if(temp.indexOf(2)!=-1&&$("more-trigger")){
moreNode.innerHTML+='<li class="more-bottom"></li>';
$D.addClass(moreNode,"trigger-down");
$("more-trigger").appendChild(moreNode);
}
if(temp.indexOf(3)!=-1&&!$("advanced-nav")){
advancedNode.appendChild(navright);
advancedNode.appendChild(advancedcont);
if($("header")){
$("header").appendChild(advancedNode);
}
}
}
},
/**
* No.1
* 搜索初始化
* @method initSearch
*/
function initSearch() {
var baseConfig={baseurl:"http://s.1688.com/search/",btntxt:"找一下",inputtip:"请输入产品名称"};
var sconfig=[
{id:"s-cp",action:"offer_search.htm",suggest:true,tracelog:"zy_srch_product"},
{id:"s-gs",action:"company_search.htm",inputtip:"请输入产品或公司名称",tracelog:"zy_srch_company"},
{id:"s-syj",action:"wiki_answer_search.htm",btntxt:"找答案",inputtip:"请输入问题关键词"},
{id:"s-pf",action:"business_search.htm",tracelog:"zy_srch_pifa"},
{id:"s-qg",action:"search.htm",tracelog:"zy_srch_purchase"},
{id:"s-xy",useurl:true,action:"http://trust.china.alibaba.com/athena/trustsearch.html",btntxt:"查一查",inputtip:"请输入公司名称",tracelog:"zy_srch_safeguard"},
{id:"s-zx",action:"news_search.htm",inputtip:"请输入您想查找信息的关键字"},
{id:"s-lt",action:"forum_search.htm",inputtip:"请输入您想查找信息的关键字"},
{id:"s-bk",action:"blog_search.htm",inputtip:"请输入您想查找信息的关键字"},
{id:"s-sy",action:"profile_search.htm",inputtip:"请输入您想查找信息的关键字"}
];
var sidArray=new Array();
for(var i=0;i<sconfig.length;i++){
sidArray.push(sconfig[i].id);
}
//必须有搜索聚焦tab
if($D.getElementsByClassName('current', 'li', 'search-nav')){
var cur = $D.getElementsByClassName('current', 'li', 'search-nav')[0].getElementsByTagName('a')[0];
var configIndex=sidArray.indexOf(cur.id.toString());
if(configIndex==-1){
return;
}
if(sconfig[configIndex].useurl){
document.forms['alisearch'].action=sconfig[configIndex].action;
}else{
document.forms['alisearch'].action=baseConfig.baseurl+sconfig[configIndex].action;
}
if(sconfig[configIndex].suggest){
FD.widget.AutoComplete.init('search-input-container',{charset:'gb2312', pX:5, pY:14, pW:3, formName:'alisearch' });
}
if(sconfig[configIndex].btntxt){
$('search-submit').innerHTML = sconfig[configIndex].btntxt;
}else{
$('search-submit').innerHTML = baseConfig.btntxt;
}
//tab点击
$E.on($('search-nav').getElementsByTagName('a'), 'click', function(e) {
$E.preventDefault(e);
if($("s-more")&&$D.isAncestor($D.getElementsByClassName("trigger-base","div",$("s-more"))[0],this)){return;}
if (FD.common.trim($('search-input').value) == '' || $D.hasClass('search-input',"gray")) {
location=this.href;
return;
}
var clickIndex=sidArray.indexOf(this.id.toString());
if(sconfig[clickIndex].useurl){
document.forms['alisearch'].action=sconfig[clickIndex].action;
}else{
document.forms['alisearch'].action=baseConfig.baseurl+sconfig[clickIndex].action;
}
document.forms['alisearch'].submit();
});
//搜索框focus，提示文案和suggesttion
$E.on($('search-input'), 'focus', function() {
if (this.value == ''|| $D.hasClass(this,"gray")) {
$('search-input').value = '';
$D.removeClass($('search-input'), 'gray');
}
});
//搜索框blur，提示文案
$E.on($('search-input'), 'blur', function() {
if (this.value != '') return;
setInputTip();
});
//空搜索验证
$E.on(document.forms['alisearch'], 'submit', function(e){
var input = $('search-input');
var value = input.value;
value = FD.common.trim(value);
if (value == '' || $D.hasClass(input,"gray")) {
$E.preventDefault(e);
setInputTip();
$('search-submit').blur();
return false;
}
if ( typeof aliclick === 'function' ){
if( configIndex != 0 || window.location.hostname == 'exodus.1688.com' ){
if(sconfig[configIndex].tracelog){
aliclick(this,'?tracelog='+sconfig[configIndex].tracelog);
}
}
if ( window.location.pathname === '/cp/cp5.html' ){
aliclick( this, '?tracelog=hy_srch_dljm' );
}
}
input.value = value;
});
}
if($('search-input')&&$('search-input').getAttribute('autofocus')!='false'){
$('search-input').value = '';
$('search-input').focus();
}
//显示搜索提示文案
function setInputTip() {
var input = $('search-input');
$D.addClass(input, 'gray');
if(sconfig[configIndex].inputtip){
input.value = sconfig[configIndex].inputtip;
}else{
input.value = baseConfig.inputtip;
}
}
},
/**
* No.2
* 搜索记录读取
* @method initSearchHistory
*/
function initSearchHistory() {
if ($('search-history')) {
var keyStr = unescape(earlyFunc.getCookie('h_keys'));
if (keyStr != '') {
if (keyStr.length > 10) {
//长度处理
keyStr = keyStr.substring(0, 10);
keyStr = keyStr.substring(0, keyStr.lastIndexOf('#'));
}
var keyArray = keyStr.split('#');
var HTMLStr = '最近搜索：';
for (var i = 0, len = keyArray.length; i < len; i++) {
HTMLStr += '<a target="_blank" href="http://s.1688.com/selloffer/' + keyArray[i] + '.html">' + keyArray[i] + '</a> ';
}
$('search-history').innerHTML = HTMLStr;
}
}
}
];
//Dom树构建完毕后开始执行
$E.onDOMReady(function() {
//静态方法调用
for (var i = 0, len = readyFunc.length; i < len; i++) {
try {
readyFunc[i]();
} catch (e) {
if (Ali.isDebug) {	//在firebug下调试
console.info('Error at No.' + i + '; ' + e.name + ':' + e.message);
}
} finally {
continue;
};
}
});
})();;