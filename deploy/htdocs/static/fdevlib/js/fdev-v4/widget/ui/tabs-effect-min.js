(function(A,B){A.extend(A.ui.tabs.prototype.options,{effect:"none",speed:"slow",perItem:1,scrollType:"fill",easing:"swing",subLength:null,direction:"left"});A.extend(A.ui.tabs.prototype,{_initBox:function(C){if(this.options.effect==="scroll"){this._initScroll(C)}else{this._effectNone(C)}},_setBox:function(C,E){var D=this;if(A.isFunction(D.options.effect)){D.options.effect.call(D.boxes[C],C)}else{switch(D.options.effect){case"none":D._effectNone(C);break;case"scroll":D._effectScroll(C,E);break;case"fade":A.use("fx-core",function(){D._effectFade(C)});break;default:D._effectNone(C)}}},_initScroll:function(C){var D=this._getPerLength(),F=this._getBoxesParent().parent(),G=C*D;this._trigger("select",null,{index:C,box:E});if(this._isHorizontal()){F.scrollLeft(G)}else{F.scrollTop(G)}var E=this._getScrollBoxes();this._trigger("show",null,{index:C,box:E});this._lazyScrollImg(E);this._lazyScrollHtml(E)},_effectScroll:function(L,H){var M=this,N=M.options,G=M._getPerLength(),K=M._getBoxesParent().parent(),J=N.direction,D=M.boxes.length,F,E,C=L,I=M.index;if(N.scrollType==="loop"){C=H}F=(C-I)*G;if(J==="right"||J==="down"){E="-="+F+"px"}else{E="+="+F+"px"}if(M._isHorizontal()){M._setLoopScrollOffset("scrollLeft",C,F);K.animate({scrollLeft:E},N.speed,N.easing,function(){var O=M._getScrollBoxes();M._trigger("show",null,{index:L,box:O});M._lazyScrollImg(O);M._lazyScrollHtml(O);M._autoPlay(1)})}else{M._setLoopScrollOffset("scrollTop",C,F);K.animate({scrollTop:E},N.speed,N.easing,function(){var O=M._getScrollBoxes();M._trigger("show",null,{index:L,box:O});M._lazyScrollImg(O);M._lazyScrollHtml(O);M._autoPlay(1)})}},_setLoopScrollOffset:function(F,E,D){if(this.options.scrollType==="loop"){var H=this.index,I=this._getBoxesParent().parent(),G=I[F](),C=this._getPrimalSize();if(E>H&&G>=C){I[F](G-C)}if(E<H&&G<Math.abs(D)){I[F](G+C)}}},_effectFade:function(C){var D=this,E=A(D.boxes[C]);D.boxes.hide();A(E).fadeIn(D.options.speed,"easeInQuad",function(){D._trigger("show",null,{index:C,box:E});D._autoPlay(1)})},_setEffectStyle:function(D){if(this.options.effect==="scroll"){var E=this._getPerLength()*this.index,C=this._getBoxesParent().parent();if(this._isHorizontal()){this._setOffset("width",D);C.scrollLeft(E)}else{this._setOffset("height",D);C.scrollTop(E)}this._setSubLength();this._setPerItem();this._setBoxes(D)}},_setOffset:function(H,E){var C=this._getPrimalBoxes(E),F=this._getTeamCount(E)*this._getPerLength(),D=this._getBoxesParent(),G=C.length*this._getSubLength();switch(this.options.scrollType){case"loop":D.append(C.clone(true));D.css(H,G*2);break;case"break":D.css(H,G);break;default:D.css(H,F)}},_getPrimalSize:function(){var C=this._getPrimalBoxes().length*this._getSubLength();this._getPrimalSize=function(){return C};return C},_getPrimalBoxes:function(D){var C=this.element.find(this.options.boxSelector);this._getPrimalBoxes=function(E){if(E===true){return this.element.find(this.options.boxSelector)}return C};return C},_getBoxesParent:function(){var C=this._getPrimalBoxes(),D=C.parent();this._getBoxesParent=function(){return D};return D},_getTeamCount:function(E){var C=this._getPrimalBoxes(E),D=Math.ceil(C.length/this.options.perItem);return D},_setBoxes:function(G){if(this.options.perItem>1){var C=this.options.perItem,E=this._getPrimalBoxes(G),H=this._getTeamCount(G),F=[];for(var D=0;D<H;D++){F[D]=E.slice(D*C,(D+1)*C)}this.boxes=F}},_isHorizontal:function(){var C=this.options;switch(C.direction){case"left":return true;break;case"right":return true;break;case"up":return false;break;case"down":return false;break;default:C.direction="left";return true}},_getSubLength:function(){var E=this._isHorizontal(),C=this.options,D;if(C.subLength){D=C.subLength}else{if(E){D=this.boxes.eq(0).outerWidth()}else{D=this.boxes.eq(0).outerHeight()}}this._getSubLength=function(){return D};return D},_getPerLength:function(){var E=this._getSubLength(),D=this.options,C;C=E*D.perItem;this._getPerLength=function(){return C};return C},_setSubLength:function(){this.subLength=(this.subLength&&this._isNumber(this.subLength))?this.subLength:null},_setPerItem:function(){this.perItem=(this._isNumber(this.perItem))?this.perItem:1},_getScrollBoxes:function(){var E=this.element.find(this.options.boxSelector),J=this._getBoxesParent().parent(),C=this._getSubLength(),I,H,F,K,D,G=A();if(this._isHorizontal()){I=J.scrollLeft();H=J.width()}else{I=J.scrollTop();H=J.height()}F=(I>0)?Math.ceil(I/C):0;D=(this.options.isPreLoad===true)?2:1;K=F+(Math.ceil(H/C))*D;for(F;F<K;F++){G=G.add(E.eq(F))}return G},_isNumber:function(C){return(C-0)==C&&C.length>0}});A.add("ui-tabs-effect")})(jQuery);