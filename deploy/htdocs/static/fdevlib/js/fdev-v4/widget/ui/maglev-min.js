("maglev" in jQuery.fn)||(function(B,E){var A=B.util.ua.ie6,C=B(window),D=B(document);B.widget("ui.maglev",{options:{align:"left",valign:"top",xOffset:0,yOffset:0,yOffsetFixed:true,topLimitShow:null,bottomLimitShow:null,isWing:false,isAlwaysShow:true,contentWidth:990,end:0},_create:function(){var F=this,G=F.options;F._setPosition();if(A){F._ie6Fixed()}if(G.isWing){F._wing()}if(G.isAlwaysShow){F._limitShow();C.scroll(function(){F._limitShow()});C.resize(function(){F._limitShow()})}else{F._isAlwaysShow()}},_isAlwaysShow:function(){var F=this;F._isAlwaysShowPositionFixed();C.scroll(function(){F._isAlwaysShowPositionFixed()});C.resize(function(){F._isAlwaysShowPositionFixed()})},_isAlwaysShowPositionFixed:function(){var H=this,J=H.element,L=H.options,F=D.scrollLeft(),K=C.width(),I=J.outerWidth(),G=L.contentWidth;if(K-G>=2*(I+L.xOffset)){H._limitShow()}else{H._hide()}},_wing:function(){var F=this;F._wingPositionFixed();C.scroll(function(){F._wingPositionFixed()});C.resize(function(){F._wingPositionFixed()})},_wingPositionFixed:function(){var H=this,J=H.element,L=H.options,F=D.scrollLeft(),K=C.width(),I=J.outerWidth(),G=L.contentWidth;if(L.align==="right"){if(K>=G+2*(I+L.xOffset)){J.css("left",(K+G)/2+L.xOffset)}else{if(A){J.css("left",K-I+F)}else{J.css("left",K-I)}}J.css("right","auto")}else{if(K>=G+2*(I+L.xOffset)){J.css("left",(K-G)/2-I-L.xOffset)}else{if(A){J.css("left",F)}else{J.css("left",0)}}}},_ie6Fixed:function(){var F=this,G=F.element;G.css("position","absolute");F._ie6PositionFixed();C.scroll(function(){F._ie6PositionFixed()});C.resize(function(){F._ie6PositionFixed()})},_ie6PositionFixed:function(){var N=this,H=N.element,G=N.options,M=D.scrollTop(),F=C.height(),J=H.outerHeight(),I=D.scrollLeft(),K=C.width(),L=H.outerWidth();if(G.valign==="bottom"){if(!G.yOffsetFixed||F>=J+G.yOffset){H.css("top",F-J+M-G.yOffset)}else{H.css("top",M)}H.css("bottom","auto")}else{if(!G.yOffsetFixed||F>=J+G.yOffset){H.css("top",M+G.yOffset)}else{H.css("top",M+F-J)}}if(G.align==="right"){H.css("left",K-L+I-G.xOffset);H.css("right","auto")}if(G.align==="left"){H.css("left",I+G.xOffset)}},_setPosition:function(){var G=this,I=G.element,L=G.options,F=C.height(),K=I.outerHeight(),J=C.width(),H=I.outerWidth();I.css("position","fixed");if(L.align==="right"){I.css("right",L.xOffset);I.css("left","auto")}else{I.css("left",L.xOffset);I.css("right","auto")}if(L.valign==="bottom"){if(!L.yOffsetFixed||F>=K+L.yOffset){I.css("bottom",L.yOffset);I.css("top","auto")}else{I.css("top",0)}}else{if(!L.yOffsetFixed||F>=K+L.yOffset){I.css("top",L.yOffset);I.css("bottom","auto")}else{I.css("bottom",0)}}},_limitShow:function(){var F=this,G=F._isLimitShow();if(!G){F._show()}else{F._hide()}},_isLimitShow:function(){var M=this,H=M.element,G=M.options,N=B.type(G.topLimitShow),I=B.type(G.bottomLimitShow),K=D.height(),L=D.scrollTop(),F=C.height(),J=H.outerHeight();if(N!=="null"){if(G.topLimitShow==="top"){if(L<=0){return true}}else{if(N==="number"){if(L<=G.topLimitShow){return true}}else{if(B(G.topLimitShow).length>0){if(L<=B(G.topLimitShow).offset().top){return true}}}}}if(I!=="null"){if(G.bottomLimitShow==="bottom"){if(L+F>=K){return true}}else{if(I==="number"){if(L+F+G.bottomLimitShow>=K){return true}}else{if(B(G.bottomLimitShow).length>0){if(L+F>=B(G.bottomLimitShow).offset().top){return true}}}}}return false},_show:function(){var F=this,G=F.element,H=F.options;G.show()},_hide:function(){var F=this,G=F.element,H=F.options;G.hide()},end:0});B.add("ui-maglev")})(jQuery);
