FD.widget.ShuntAlitalk=function(A,B){this._init(A,B)};FD.widget.ShuntAlitalk.defConfig={aliTalkId:"aliservice29",ruleId:"ALITALK_INCALL_ROLE_CTP01",positionId:"Top_Banner",attname:"rel",lock:true,lockclass:"shunt-lock",remote:false,autoLogin:false};FD.widget.ShuntAlitalk.prototype={_init:function(A,B){var C=this;C.container=FYD.getElementsByClassName(A);C.config=FD.common.applyIf(B||{},FD.widget.ShuntAlitalk.defConfig);C.classfocus=A;FYE.on(C.container,"mouseover",C._overHandler,C,true);(C.container).forEach(function(D){var E=FD.common.parse(FYD.getAttribute(D,C.config.attname));C._setTalkId(D,E)})},_overHandler:function(C){FYE.preventDefault(C);var A=this,B=FYE.getTarget(C);if(!FYD.hasClass(B,A.classfocus)){B=FYD.getAncestorByClassName(B,A.classfocus)}var D=FD.common.parse(FYD.getAttribute(B,A.config.attname));A.config=FD.common.applyIf(D||{},A.config);if(!FYD.hasClass(B,A.config.lockclass)){A._requestHandler(B)}},_requestHandler:function(B){var A=this,E={};E.memberId=A._getLoginid();E.ruleId=A.config.ruleId;E.positionId=A.config.positionId;var D={onCallback:function(F){if(F.success){switch(F.resultType){case"aliYUrl":FD.common.goTo(F.aliTalkId,"_blank");break;case"alitalkId":default:if(A.config.lock){FYD.addClass(B,A.config.lockclass)}A._setTalkId(B,F);A._shuntTalk(B);break}}else{A._setTalkId(B,F);A._shuntTalk(B)}},onTimeout:function(F){A._shuntTalk(B)}};var C=FD.common.request("jsonp","http://athena.1688.com/athena/aliTalkInCall.json",D,E)},_setTalkId:function(C,D){var B=this,A=D.aliTalkId||B.config.aliTalkId;FYD.setAttribute(C,"alitalk","{id:'"+A+"'}")},_shuntTalk:function(B){var A=this;if(typeof FD.widget.Alitalk==="undefined"){var D={onSuccess:function(E){new FD.widget.Alitalk(B,{remote:A.config.remote,autoLogin:A.config.autoLogin})}};var C=FD.common.request("jsonp","http://style.c.aliimg.com/js/lib/fdev-v3/widget/alitalk/alitalk-min.js",D)}else{new FD.widget.Alitalk(B,{remote:A.config.remote,autoLogin:A.config.autoLogin})}},_getCookie:function(B){var A=document.cookie.match("(?:^|;)\\s*"+B+"=([^;]*)");return A?unescape(A[1]):""},_getLoginid:function(){return(this._getCookie("__cn_logon__")&&this._getCookie("__cn_logon__")==="true")?this._getCookie("__last_loginid__"):""}};