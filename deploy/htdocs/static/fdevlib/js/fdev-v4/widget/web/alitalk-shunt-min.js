("shunt" in FE.util.alitalk)||(function($,Util){var defaults={attr:"shunt",aliTalkId:"aliservice29",ruleId:"ALITALK_INCALL_ROLE_CTP01",positionId:"Top_Banner",shuntUrl:"http://athena.1688.com/athena/aliTalkInCall.json"},shunt=function(els,options){if($.isPlainObject(els)){$.extendIf(options,defaults);els=$("a[data-"+options.attr+"]")}else{options=options||{};$.extendIf(options,defaults);els=$(els)}if(els.length){els.each(function(){var el=$(this),dataStr=el.attr(options.attr)||el.data(options.attr)||"{}";dataStr=$.extendIf(eval("("+((typeof dataStr==="string")?dataStr:"{}")+")"),options);el.data("alitalkShunt",dataStr)}).bind("click",onClickHandler)}};function onClickHandler(event){var t=this,data=$(t).data("alitalkShunt"),talkObjId={};event.preventDefault();if(data.onClickBegin){if(!data.onClickBegin.call(t,event)){return}}talkObjId.id=data.aliTalkId;$.ajax(data.shuntUrl,{dataType:"jsonp",data:{memberId:Util.loginId,ruleId:data.ruleId,positionId:data.positionId},success:function(o){if(o.success&&o.aliTalkId){switch(o.resultType){case"aliYUrl":Util.goTo(o.aliTalkId,"_blank");break;case"alitalkId":default:talkObjId.id=o.aliTalkId;Util.alitalk(talkObjId);break}}else{Util.alitalk(talkObjId)}},error:function(){Util.alitalk(talkObjId)}});if(data.onClickEnd){data.onClickEnd.call(t,event)}}Util.alitalk.shunt=shunt;$.add("web-alitak-shunt")})(jQuery,FE.util);
