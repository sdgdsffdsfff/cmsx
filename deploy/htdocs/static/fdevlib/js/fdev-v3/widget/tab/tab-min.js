FD.widget.Tab=function(a,b){this.init(a,b)};FD.widget.Tab.defConfig={isAutoPlay:true,timeDelay:3,eventType:"mouse",showType:"block",currentClass:"current",tabTitleClass:"f-tab-t",tabBoxClass:"f-tab-b",startItem:0,isLazy:false,lazyImg:"data-lazyimg",callback:null};FD.widget.Tab.prototype={init:function(a,b){this.container=$(a);this.config=FD.common.applyIf(b||{},FD.widget.Tab.defConfig);this.tabTitles=FD.common.toArray($D.getElementsByClassName(this.config.tabTitleClass,"*",this.container));this.tabBoxs=FD.common.toArray($D.getElementsByClassName(this.config.tabBoxClass,"*",this.container));if(this.tabTitles.length==0||this.tabTitles.length!=this.tabBoxs.length){return}this.pause=false;this.delayTimeId=null;this.autoPlayTimeId=null;$D.setStyle(this.tabBoxs,"display","none");$D.removeClass(this.tabTitles,this.config.currentClass);this.setTab(this.config.startItem,false);$E.on(this.tabBoxs,"mouseover",function(){this.pause=true},this,true);$E.on(this.tabBoxs,"mouseout",function(){this.pause=false},this,true);if(this.config.eventType=="mouse"){$E.on(this.tabTitles,"mouseover",this.mouseHandler,this,true);$E.on(this.tabTitles,"mouseout",function(){clearTimeout(this.delayTimeId);this.pause=false},this,true)}else{$E.on(this.tabTitles,"click",this.clickHandler,this,true)}if(this.config.isAutoPlay){this.autoPlay()}},clickHandler:function(c){var b=this.getTabTitleTarget(c);var a=this.tabTitles.indexOf(b);this.setTab(a,"true")},mouseHandler:function(d){var c=this.getTabTitleTarget(d);var a=this.tabTitles.indexOf(c);var b=this;this.delayTimeId=setTimeout(function(){b.pause=true;b.setTab(a,"true")},0.1*1000)},getTabTitleTarget:function(b){var a=$E.getTarget(b);while(this.tabTitles.indexOf(a)==-1){a=a.parentNode}return a},setTab:function(a,b){if(a==this.curId){return}var c=this.curId>=0?this.curId:0;if(b&&this.autoPlayTimeId){clearTimeout(this.autoPlayTimeId)}$D.removeClass(this.tabTitles[c],this.config.currentClass);$D.setStyle(this.tabBoxs[c],"display","none");$D.addClass(this.tabTitles[a],this.config.currentClass);$D.setStyle(this.tabBoxs[a],"display",this.config.showType);this.curId=a;if(b&&this.config.isAutoPlay){this.autoPlay()}if(this.config.isLazy===true){this._imgLoad(this.tabBoxs[a])}if(this.config.callback!==null){this.config.callback.call(this,a,this.tabTitles[a],this.tabBoxs[a])}},autoPlay:function(){var b=this.curId>=0?this.curId:0;var a=this;this.autoPlayTimeId=setTimeout(function(){if(!a.pause){var c=b+1;if(c==a.tabTitles.length){c=0}a.setTab(c,false)}a.autoPlay()},this.config.timeDelay*1000)},_imgLoad:function(c){var d=$$("img["+this.config.lazyImg+"]",c);if(d!==[]){for(var b=0,a=d.length;b<a;b++){$D.setAttribute(d[b],"src",$D.getAttribute(d[b],this.config.lazyImg));d[b].removeAttribute(this.config.lazyImg)}}}};FD.widget.Tab.init=function(a,b){return new FD.widget.Tab(a,b)};
