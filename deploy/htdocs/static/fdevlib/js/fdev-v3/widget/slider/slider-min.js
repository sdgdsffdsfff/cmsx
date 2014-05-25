FD.widget.Slide=function(a,b){this.init(a,b)};FD.widget.Slide.defConfig={sliderClass:"f-slider",triggersClass:"f-slider-triggers",currentClass:"current",eventType:"click",timeDelay:3,isAutoPlay:true,sliderHeight:null};FD.widget.Slide.prototype={init:function(a,b){this.container=$(a);this.config=FD.common.applyIf(b||{},FD.widget.Slide.defConfig);this.slidesUL=$D.getElementsByClassName(this.config.sliderClass,"ul",this.container)[0];if(!this.slidesUL){this.slidesUL=$D.getFirstChild(this.container,function(c){return c.tagName.toLowerCase==="ul"})}this.slides=$D.getChildren(this.slidesUL);if(this.slides.length<=0){return}this.delayTimeId=null;this.autoPlayTimeId=null;this.curSlide=-1;this.sliding=false;this.pause=false;$D.addClass(this.container,"f-slider");$D.addClass(this.slidesUL,"f-slider-list");$D.setStyle(this.slidesUL,"height",(this.config.sliderHeight||this.container.offsetHeight)+"px");this.initSlides();this.initTriggers();this.play(1);if(this.config.isAutoPlay){this.autoPlay()}if(YAHOO.lang.isFunction(this.config.onInit)){this.config.onInit.call(this)}},initTriggers:function(){var d=document.createElement("ul");this.container.appendChild(d);for(var c=0,b=this.slides.length;c<b;++c){var a=document.createElement("li");a.innerHTML=c+1;d.appendChild(a)}$D.addClass(d,this.config.triggersClass);this.triggersUL=d;if(this.config.eventType=="mouse"){$E.on(this.triggersUL,"mouseover",this.mouseHandler,this,true);$E.on(this.triggersUL,"mouseout",function(f){clearTimeout(this.delayTimeId);this.pause=false},this,true)}else{$E.on(this.triggersUL,"click",this.clickHandler,this,true)}},initSlides:function(){$E.on(this.slides,"mouseover",function(){this.pause=true},this,true);$E.on(this.slides,"mouseout",function(){this.pause=false},this,true);$D.setStyle(this.slides,"display","none")},clickHandler:function(c){var b=$E.getTarget(c);var a=parseInt(FD.common.stripTags(b.innerHTML));while(b!=this.container){if(b.nodeName.toUpperCase()=="LI"){if(!this.sliding){this.play(a,true)}break}else{b=b.parentNode}}},mouseHandler:function(d){var c=$E.getTarget(d);var a=parseInt(FD.common.stripTags(c.innerHTML));while(c!=this.container){if(c.nodeName.toUpperCase()=="LI"){var b=this;this.delayTimeId=setTimeout(function(){b.play(a,true);b.pause=true},(b.sliding?0.5:0.1)*1000);break}else{c=c.parentNode}}},play:function(d,b){d=d-1;if(d==this.curSlide){return}var a=this.curSlide>=0?this.curSlide:0;if(b&&this.autoPlayTimeId){clearInterval(this.autoPlayTimeId)}var c=this.triggersUL.getElementsByTagName("li");c[a].className="";c[d].className=this.config.currentClass;this.slide(d);this.curSlide=d;if(b&&this.config.isAutoPlay){this.autoPlay()}},slide:function(b){var a=this.curSlide>=0?this.curSlide:0;this.sliding=true;$D.setStyle(this.slides[a],"display","none");$D.setStyle(this.slides[b],"display","inline");this.sliding=false},autoPlay:function(){var a=this;var b=function(){if(!a.pause&&!a.sliding){var c=(a.curSlide+1)%a.slides.length+1;a.play(c,false)}};this.autoPlayTimeId=setInterval(b,this.config.timeDelay*1000)}};FD.widget.ScrollSlide=function(a,b){this.init(a,b)};YAHOO.extend(FD.widget.ScrollSlide,FD.widget.Slide,{initSlides:function(){FD.widget.ScrollSlide.superclass.initSlides.call(this);$D.setStyle(this.slides,"display","inline")},slide:function(d){var a=this.curSlide>=0?this.curSlide:0;var b={scroll:{by:[0,this.slidesUL.offsetHeight*(d-a)]}};var c=new $Y.Scroll(this.slidesUL,b,0.5,$Y.Easing.easeOutStrong);c.onComplete.subscribe(function(){this.sliding=false},this,true);c.animate();this.sliding=true}});FD.widget.FadeSlide=function(a,b){this.init(a,b)};YAHOO.extend(FD.widget.FadeSlide,FD.widget.Slide,{initSlides:function(){FD.widget.FadeSlide.superclass.initSlides.call(this);$D.setStyle(this.slides,"position","absolute");$D.setStyle(this.slides,"top",this.config.slideOffsetY||0);$D.setStyle(this.slides,"left",this.config.slideOffsetX||0);$D.setStyle(this.slides,"z-index",1);$D.setStyle(this.slides,"width",this.container.offsetWidth);$D.setStyle(this.slides,"height",this.container.offsetHeight)},slide:function(c){if(this.curSlide==-1){$D.setStyle(this.slides[c],"display","block")}else{var a=this.slides[this.curSlide];$D.setStyle(a,"display","block");$D.setStyle(a,"z-index",10);var b=new $Y.Anim(a,{opacity:{to:0}},0.5,$Y.Easing.easeNone);b.onComplete.subscribe(function(){$D.setStyle(a,"z-index",1);$D.setStyle(a,"display","none");$D.setStyle(a,"opacity",1);this.sliding=false},this,true);$D.setStyle(this.slides[c],"display","block");b.animate();this.sliding=true}}});FD.widget.Slider=function(a,b){if(!a){return}b=b||{};if(b.effect=="scroll"){if(YAHOO.env.ua.gecko&&$(a).getElementsByTagName("iframe").length>0){return new FD.widget.Slide(a,b)}return new FD.widget.ScrollSlide(a,b)}else{if(b.effect=="fade"){return new FD.widget.FadeSlide(a,b)}else{return new FD.widget.Slide(a,b)}}};
