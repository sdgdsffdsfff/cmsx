("spuprice" in jQuery.fn)||(function(a){a.widget("ui.spuprice",{options:{apiUrl:"http://spu.1688.com/spu/ajax/getSpuOfferPrice.htm",spuId:"",memberId:"",offerId:"",width:952,height:450,cssStr:""},_create:function(){this._getData()},_initFlash:function(f){var c=this,e=this.element,d=this.options,b;b="line dot label {						visibility	: hidden;					}					chart {						colors	: #69acff,#fe0000,#4D99DA,#CE5555,#DCBB29,#55BECE,#AF80DE;						animate	: true;						leftAxisVisibility	: visible;						bottomAxisVisibility : hidden;						smooth : true;						width: "+(d.width-70)+";                		height: "+(d.height-60)+";					}					yaxis {						tickColor	: #666666;						tickThickness	: null;						lineThickness	: null;					}					yAxis label {						color: #000;						fontSize: 12;					}					line {						alpha	: 1;						dropShadow	: none;						thickness	: 2;						lineMethod	: line;					}					line dot {						color	: #FFFFFF;						shape	: circle;						borderThickness	: 1;						borderColor	: inherit#color;						radius	: 3;						radius.hl : 3;					}					tooltip {						enabled	: true;					}					canvas {						borderThickness	: 2;						borderColor	: #545454;						backgroundColor2 : #f7f7f7;						priLineThickness : 1;						secLineThickness : 1;						secLineColor : #e3e3e3;					}					xaxis {						tickThickness	: 0;						lineThickness	: 0;						labelGap: auto;					}					legend {						paddingRight	: 0;						position	: top;						align	: right;					}";a.use("ui-flash-chart",function(){var g=e.flash({module:"chart",type:"line",width:d.width,height:d.height,flashvars:{width:d.width-70,height:d.height-60,css:d.cssStr||b,data:f}})})},_getData:function(f){var b=this,d=this.options,e=this.element,c=d.apiUrl;if(!c){return}a.ajax(c,{dataType:"jsonp",data:{spuId:d.spuId||"",offerId:d.offerId||"",memberId:d.memberId||""},success:function(g){if(f==="loadData"){g&&e.flash("getFlash").parse(g)}else{g&&b._initFlash(g)}},error:function(g,h){a.log(g)}})},loadData:function(e){var c=this.options,b=e.offerId||"",d=e.spuId||"";if(!b&&!d){return}c.spuId=d;c.offerId=b;this._getData("loadData")}});a.add("ui-spuprice")})(jQuery);