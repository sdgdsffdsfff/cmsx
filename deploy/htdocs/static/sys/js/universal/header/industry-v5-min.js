(function($){$(function(){var masthead=$("#ali-masthead-5i");if(!masthead.length){return}var form=$("form",masthead),switchMarket=$("div.ali-market-list",masthead),searchType=$("div.alisearch-type ul",masthead),searchContainer=$("div.alisearch-container",masthead),keywords=$("input[name=keywords]",searchContainer),from=$("input[name=from]",searchContainer),industryFlag=$("input[name=industryFlag]",searchContainer),searchKeywords=keywords.parent(),searchMarket=$("button.market",searchContainer),searchGlobal=$("button.global",searchContainer),submit=searchMarket,ie6=$.util.ua.ie6,placeholderLabel,currentType,currentCfg,suggestion;var handlers={placeholderInit:function(placeholder){var element=keywords;if(!placeholder){return}if(element.length>0&&!("placeholder" in document.createElement("input"))){if(placeholderLabel){placeholderLabel.style.left=element.position().left+"px"}else{var idLabel=element.attr("id");if(!idLabel){idLabel="placeholder_"+new Date().getTime();element.attr("id",idLabel)}var eleLabel=document.createElement("label");eleLabel.htmlFor=idLabel;eleLabel.style.left=element.position().left+"px";element.before(eleLabel);placeholderLabel=eleLabel;$(eleLabel).css({position:"absolute",height:"20px","line-height":"20px","padding-left":"5px",color:"#bbb","z-index":"995",cursor:"text","white-space":"nowrap"})}element.bind("focus",function(){placeholderLabel.innerHTML=""});element.bind("blur",function(){if(element.val()==""){placeholderLabel.innerHTML=placeholder}});var lastCall=(new Date()).getTime(),resizeDefer,resizeThrottle=60,win=window;var positionLeft=function(event){var now=(new Date()).getTime();if(lastCall&&now-lastCall<resizeThrottle){win.clearTimeout(resizeDefer);resizeDefer=win.setTimeout(positionLeft,resizeThrottle);return}else{lastCall=now}placeholderLabel.style.left=element.position().left+"px"};$(window).bind("resize",positionLeft);if(element.val()==""){placeholderLabel.innerHTML=placeholder}}},typeInit:function(){var currentLi=searchType.find("li.current").get(0);searchType.on("mouseenter",function(){$(this).addClass("hover")}).on("mouseleave",function(){$(this).removeClass("hover")});searchType.delegate("li","click",typeChangeHandler);$("a",searchType).click(function(e){e.preventDefault()});if(currentLi){typeChangeHandler.call(currentLi,$.Event("click"),true)}function typeChangeHandler(e,isinit){var li=$(this),type,config;if(!isinit&&li.hasClass("current")){return}$(">li",searchType).removeClass("current");searchType.removeClass("hover");li.addClass("current");searchType.prepend(li);type=li.data("type");config=currentCfg=eval("("+li.data("config")+")");configChangeHandler(currentCfg);currentType=type}},suggestionInit:function(){$.add("web-suggestion",{requires:["ui-autocomplete"],js:["suggestion.js"]});if(currentCfg&&currentCfg.suggest){$.use("web-suggestion",function(){suggestion=new FE.ui.Suggestion(keywords,{appendTo:searchKeywords,url:currentCfg.url,type:currentCfg.type,position:{my:"left top",at:"left bottom",offset:"-5 0"},history:true,widthfix:8,onSelected:function(e,ui){submit.click()}})})}},marketInit:function(){if(ie6){switchMarket.on("mouseenter",function(){$(this).addClass("hover")}).on("mouseleave",function(){$(this).removeClass("hover")})}},actionInit:function(){$("button.market",searchContainer).click(function(){if(currentType==="alisearch-product"){from.val("industrySearch");industryFlag.val($(this).data("industryFlag")||"")}else{from.val("");industryFlag.val("")}});$("button.global",searchContainer).click(function(){if(currentType==="alisearch-product"){from.val("marketSearch")}else{from.val("")}industryFlag.val("");form.trigger("submit")})},submitInit:function(){form.get(0).onsubmit=function(){if(!keywords.val()){keywords.focus();return false}return true}},iePNGFix:function(){if(ie6){var pngImg=$("img.iepngfix",masthead);if(pngImg.length){pngImg.each(function(i,img){$(img).css("filter",'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+img.src+'",sizingMethod="scale");');img.src="http://img.china.alibaba.com/images/common/util/1x1.gif"})}}}};function configChangeHandler(o){keywords[0].setAttribute("placeholder",o.placeholder);handlers.placeholderInit(o.placeholder);if(suggestion){if(o.suggest){suggestion.setOptions({url:o.url,type:o.type}).enable()}else{suggestion.disable()}}form.removeClass().addClass(o.cls).attr("action",o.action)}for(var p in handlers){handlers[p]()}});$(function(){var nav=$("#ali-nav-5i");if(!nav.length){return}var timer,aliNavContainer=$(".ali-nav-container",nav),mainNav=$("#ali-nav-main .ali-nav-category ul"),mainNavList=mainNav.find("li"),subNav=$("#ali-nav-sub"),subNavList=subNav.find("ul"),currentNavIndex=mainNavList.index(mainNavList.filter(".current")),hoverNavIndex=-1,setLeftPosition=function(index){var pageWidth=aliNavContainer.width()||952,mainWidth=mainNavList.eq(index).width(),mainLeft=mainNavList.eq(index).position().left,subWidth=subNavList.eq(index).width(),subLeft=mainLeft-Math.floor((subWidth-mainWidth)/2),maxLeft;subWidth=subWidth>pageWidth?pageWidth:subWidth;maxLeft=pageWidth-subWidth;subLeft=subLeft>0?subLeft:0;subLeft=subLeft<maxLeft?subLeft:maxLeft;subNavList.eq(index).css("left",subLeft+"px")},switchNav=function(index){hoverNavIndex=index;clearTimeout(timer);timer=setTimeout(function(){if(hoverNavIndex>=0){if(hoverNavIndex===currentNavIndex){subNav.removeClass("hover")}else{if(!subNav.hasClass("hover")){subNav.addClass("hover")}}setLeftPosition(hoverNavIndex);mainNavList.eq(hoverNavIndex).addClass("hover");mainNavList.eq(hoverNavIndex).siblings("li").removeClass("hover");subNavList.eq(hoverNavIndex).show();subNavList.eq(hoverNavIndex).siblings("ul").hide()}else{subNavList.hide();subNavList.eq(currentNavIndex).show();mainNavList.removeClass("hover");subNav.removeClass("hover")}},200)};currentNavIndex=currentNavIndex>0?currentNavIndex:0;setLeftPosition(currentNavIndex);subNavList.eq(currentNavIndex).show();mainNav.on("mouseenter","li",function(){var self=$(this),index=mainNavList.index(self);switchNav(index)}).on("mouseleave","li",function(){switchNav(-1)});subNav.on("mouseenter","ul",function(){var self=$(this),index=subNavList.index(self);switchNav(index)}).on("mouseleave","ul",function(){switchNav(-1)})});$(function(){function baseClick(param){var url="http://stat.1688.com/search/queryreport.html";param="?static="+param+"&rule_id=501";if(typeof window.dmtrack!="undefined"){dmtrack.clickstat(url,param)}else{var d=new Date();if(document.images){(new Image).src=url+param+"&time="+d.getTime()}}return true}$("#header").on("mousedown","a,button",function(){var param=$(this).data("headerTrace")||"";if(param){baseClick(param)}})})})(jQuery);
