("datalazyload" in FE.util)||(function(d,g){var a=window,c=document,h="data-lazyload-src",e="lazyload-fn",b="data-lazyload-fn-body",f="lazyload-textarea",i=function(){var B=200,t=0,k={},n=false,l=0,o=d(a),y={img:[],fn:[],textarea:[]},r=function(J,G){for(var I=0;I<G.length;I++){for(var H=0,F=J.length;H<F;H++){if(G[I]===J[H]){G.splice(I,1);break}}}d.merge(J,G)},A=function(J,I,G){var H;for(var F=0;F<J.length;){H=J[F];if(p(H)){J.splice(F,1);I.call(G,H)}else{F++}}},m=function(G,F){clearTimeout(G.tId);G.tId=setTimeout(function(){G.call(F)},100)},z=function(){if(!n){l=D();s()}},D=function(){return o.height()},s=function(){if(n){return}o.bind("scroll.datalazyload",function(F){m(C)});o.bind("resize.datalazyload",function(F){l=D();m(C)});n=true},u=function(){if(!n){return}o.unbind("scroll.datalazyload");o.unbind("resize.datalazyload");n=false},E=function(G){var I=d("img["+h+"]",G).toArray(),H=d("."+e,G).toArray(),F=d("."+f,G).toArray();r(y.img,I);r(y.fn,H);r(y.textarea,F)},C=function(){A(y.img,v);A(y.fn,x);A(y.textarea,j);if(y.img.length===0&&y.fn.length===0&&y.textarea.length===0){u()}},v=function(F){var G;F=d(F);G=F.attr(h);if(G){F.one("load",function(){d(this).css("zoom",1)});F.attr("src",G);F.removeAttr(h)}},x=function(G){var I,H,F;if(d.isArray(G)){I=G[0];H=G[1]}else{I=G}if(H){H(I)}I=d(I);F=I.attr(b);if(F){H=q(F);H(I);I.removeAttr(b)}},j=function(F){F=d(F);F.html(d("textarea",F).val())},q=function(I){var G=I.split("."),F=G.length,J=a;for(var H=(d.isWindow(G[0])?1:0);H<F;H++){if(d.isFunction(J[G[H]])||d.isPlainObject(J[G[H]])){J=J[G[H]]}else{return null}}if(d.isFunction(J)){return J}return null},p=function(H){var F=false,J=d(c).scrollTop(),I=J+l+t,G=d(H).offset().top;if(G<=I){F=true}return F},w=function(I,J){var G=[],F;if(!I){return G}F=I.length;if(!F){G.push([I,J])}else{if(F>0){for(var H=0;H<F;H++){G.push([I[H],J])}}}return G};return{init:function(){z();C()},register:function(G){var I=G.containers;t=G.threshold||B;for(var H=0,F=I.length;H<F;H++){this.bind(I[H],d.proxy(this.add,this))}this.init()},add:function(F){E(F);this.init()},bind:function(H,G){z();var F=w(H,G);if(F.length===0){return}r(y.fn,F);C()}}};g.datalazyload=i();d.add("web-datalazyload")})(jQuery,FE.util);
