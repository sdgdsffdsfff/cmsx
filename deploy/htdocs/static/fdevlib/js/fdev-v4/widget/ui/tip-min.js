("tip" in jQuery.fn)||(function(a){a.widget("ui.tip",{options:{graveId:"aissaSimpleTipsBox",isRoundedCorner:true,closeButton:false,onCloseButtonClick:a.noop,txt:"Message",local:1,arrow:9,width:230,dLeft:0,dTop:0,isAnim:true,isHold:true,tipsHold:true,keep:200,isOnloadShow:false,onloadHold:5000,overflowChange:true,showListener:"mouseenter",hideListener:"mouseleave",classPrefix:""},_create:function(){var b=this;b.s=b.options;if(b.timeoutId){clearTimeout(b.timeoutId)}b.timeoutId=null;b.arrow=0;if(a(b.s.graveId).length!==0){return}if(!((this.element)[0])){return}this._createBubbleTip()},_createBubbleTip:function(){var i=this,j=null,c=null,d=[],b=null;b=i.element;j=document.createElement("div");j.id=i.s.graveId;a(j).css("position","relative");a(j).css("width","0px");a(j).css("height","0px");a(j).css("overflow","hidden");document.body.appendChild(j);i.grave=j;c=document.createElement("div");a(c).addClass(i.widgetBaseClass);a(c).css("width",i.s.width+"px");var h="",e="";if(i.s.isRoundedCorner){h='<div class="'+i.widgetBaseClass+'-top"><div class="'+i.widgetBaseClass+'-top-1"></div><div class="'+i.widgetBaseClass+'-top-2"></div><div class="'+i.widgetBaseClass+'-top-3"></div></div>';e='<div class="'+i.widgetBaseClass+'-bottom"><div class="'+i.widgetBaseClass+'-bottom-3"></div><div class="'+i.widgetBaseClass+'-bottom-2"></div><div class="'+i.widgetBaseClass+'-bottom-1"></div></div>'}var f="",g="";if(i.s.closeButton){f=" "+i.widgetBaseClass+"-close ";g='<a href="#" target="_self" class="'+i.widgetBaseClass+'-closeButton"></a>'}d.push(h);d.push('<div class="'+i.widgetBaseClass+"-center"+f+'">');d.push(g);d.push('<div class="'+i.widgetBaseClass+'-content">');d.push(i.s.txt);d.push("</div>");d.push("</div>");d.push(e);if(i.s.arrow!=0){i.getArrowNumber(i.s.local);d.push('<div class="'+i.widgetBaseClass+"-arrow "+i.widgetBaseClass+"-arrow-");d.push(i.arrowPosition);d.push('">');d.push('<i class="'+i.widgetBaseClass+'-arrow-1"></i>');d.push('<i class="'+i.widgetBaseClass+'-arrow-2"></i>');d.push('<i class="'+i.widgetBaseClass+'-arrow-3"></i>');d.push('<i class="'+i.widgetBaseClass+'-arrow-4"></i>');d.push('<i class="'+i.widgetBaseClass+'-arrow-5"></i>');d.push('<i class="'+i.widgetBaseClass+'-arrow-6"></i>');d.push('<i class="'+i.widgetBaseClass+'-arrow-7"></i>');d.push("</div>")}c.innerHTML=d.join("");j.appendChild(c);if(i.s.isRoundedCorner){a("#"+i.s.graveId+" ."+i.widgetBaseClass+" ."+i.widgetBaseClass+"-center").css({"border-top-width":"0","border-bottom-width":"0"})}i.box=c;if(i.s.arrow!=0){i.arrow=a("#"+i.s.graveId+" ."+i.widgetBaseClass+" ."+i.widgetBaseClass+"-arrow")[0]}i.ieBug();i.boxWidth=a(c).outerWidth()+(i.a>=5&&i.a<=8?6:0);i.boxHeight=a(c).outerHeight()+(i.a>=1&&i.a<=4?6:0);a(b).on(i.s.showListener,function(){i.show(this)});a(b).on(i.s.hideListener,function(){i.hide()});i.onloadShow(b[0]);a(window).resize(function(){i.onloadShow(b[0])});if(i.s.tipsHold){a(c).on("mouseenter",function(){i.isTipsHold()});a(c).on(i.s.hideListener,function(){i.hide()})}if(i.s.closeButton){a("#"+i.s.graveId+" ."+i.widgetBaseClass+" ."+i.widgetBaseClass+"-closeButton").click(function(){i.closeTips();i.s.onCloseButtonClick()})}},getArrowNumber:function(c){var b=this;b.a=b.s.arrow;if(b.s.arrow!=9){b.getarrowPositionByType();return}switch(c){case 1:b.a=3;break;case 2:b.a=4;break;case 3:b.a=1;break;case 4:b.a=2;break;case 5:b.a=7;break;case 6:b.a=8;break;case 7:b.a=5;break;case 8:b.a=6;break}b.getarrowPositionByType()},getarrowPositionByType:function(c){var b=this;switch(b.a){case 1:b.arrowPosition="t-l";break;case 2:b.arrowPosition="t-r";break;case 3:b.arrowPosition="b-l";break;case 4:b.arrowPosition="b-r";break;case 5:b.arrowPosition="l-t";break;case 6:b.arrowPosition="l-b";break;case 7:b.arrowPosition="r-t";break;case 8:b.arrowPosition="r-b";break}},onloadShow:function(c){var b=this;a(b.grave).css("position","relative");if(b.s.isOnloadShow){b.show(c);b.holdTips(b.s.onloadHold)}},show:function(d){var c=this,b=0;c.isTipsHold();a(c.grave).css("position","relative");b=c.s.local;c.setXY(d,b);if(c.s.overflowChange){b=c.inversionIt(d,b)}if(c.animSto!=null){clearTimeout(c.animSto)}c.animSto=null;a(c.box).css("left",c.x+"px");a(c.box).css("top",c.y+"px");a(c.grave).css("position","static");if(c.s.isAnim){c.count=0;c.animTips(c.x,c.y,b)}if(c.s.isRoundedCorner){if(c.a==5||c.a==7){a(c.arrow).css("top","9px")}else{if(c.a==6||c.a==8){a(c.arrow).css("bottom","9px")}}}},inversionIt:function(c,n){var s=this,q=0,j=0,e=0,r=0,g=0,f=0,m=0,b=0,l=0,o=0,k=null,p=a(c).outerWidth(),i=a(c).outerHeight();k=document.documentElement;q=k.clientWidth;j=k.clientHeight;e=a(document).scrollLeft();r=a(document).scrollTop();f=r>s.y?1:(r+j<s.y+i+s.boxHeight?2:0);g=e>s.x?6:(e+q<s.x+p+s.boxWidth?3:0);m=s.eX-e;b=e+q-s.eX-p;l=s.eY-r;o=r+j-s.eY-i;if(s.s.local>0&&s.s.local<5){if(f==1&&o>l){n=s.s.local==1?3:(s.s.local==2?4:n)}else{if(f==2&&l>o){n=s.s.local==3?1:(s.s.local==4?2:n)}}}else{if(s.s.local>4&&s.s.local<9){if(g==6&&b>m){n=s.s.local==5?7:(s.s.local==6?8:n)}else{if(g==3&&m>b){n=s.s.local==7?5:(s.s.local==8?6:n)}}}}s.getArrowNumber(n);if(s.s.arrow!=0){s.arrow.className=""+s.widgetBaseClass+"-arrow "+s.widgetBaseClass+"-arrow-"+s.arrowPosition}s.ieBug();s.setXY(c,n);return n},ieBug:function(){var b=this;if(b.s.arrow!=0){if(a.util.ua.ie6&&(b.a==3||b.a==4)){a(b.arrow).css("top",(a(b.box).outerHeight()-1)+"px")}else{if(a.util.ua.ie6==6&&(b.a==1||b.a==2)){a(b.arrow).css("top","-6px")}}}},setXY:function(c,f){var k=this,b=0,l=0,g=0,e=0,j=0,i=a(c).outerWidth(),d=a(c).outerHeight();if(k.s.isRoundedCorner){j=3}k.eY=l=a(c).offset().top;k.eX=b=a(c).offset().left;switch(f){case 1:g=b;e=l-k.boxHeight-2;break;case 2:g=b+i-k.boxWidth;e=l-k.boxHeight-2;break;case 3:g=b;e=l+d+6;break;case 4:g=b+i-k.boxWidth;e=l+d+6;break;case 5:g=b-k.boxWidth-2;e=l-j;break;case 6:g=b-k.boxWidth-2;e=l+d-k.boxHeight+j;break;case 7:g=b+i+6;e=l-j;break;case 8:g=b+i+6;e=l+d-k.boxHeight+j;break}g-=k.s.dLeft;e-=k.s.dTop;k.x=g;k.y=e},animTips:function(b,e,d){var c=this;c.animSto=setTimeout(function(){switch(d){case 1:case 2:e+=c.count<4?-1:1;a(c.box).css("top",e+"px");break;case 3:case 4:e+=c.count<4?1:-1;a(c.box).css("top",e+"px");break;case 5:case 6:b+=c.count<4?-1:1;a(c.box).css("left",b+"px");break;case 7:case 8:b+=c.count<4?1:-1;a(c.box).css("left",b+"px");break}c.count++;if(c.count>=8){return}c.animTips(b,e,d)},7)},hide:function(){var b=this;if(b.s.isHold){b.holdTips(b.s.keep)}else{a(b.grave).css("position","relative")}},closeTips:function(){a(this.grave).css("position","relative")},isTipsHold:function(){var b=this;if(b.sto!=null){clearTimeout(b.sto)}b.sto=null},holdTips:function(b){var c=this;if(c.sto!=null){clearTimeout(c.sto)}c.sto=null;c.sto=setTimeout(function(){a(c.grave).css("position","relative")},b)}});a.add("ui-tip");a.add("fui-tip")})(jQuery);
