if(typeof COASE.modules=="undefined"){throw new Error("Error:coaseClass is undefined!")}COASE.modules.specificSpider=function(A,B){isCoaseCompleted=true;A=A||"";B=B||{};switch(A){case"offer":specificSpiderClass.offer(B);break;case"company":specificSpiderClass.company(B);break;case"detail":specificSpiderClass.detail(B);break;default:break}};var specificSpiderClass={_doClick:function(E,D,B){var G=COASE;var A=new G.getUrlParams(E);A.page_id=G.util.getPageId();A.refer=escape(document.location.href);D=D||{};A=G.lang.merge(A,D);var F=G.util.substitute(G.coaseConfig.api,A);G.coaseClick(F)},offer:function(B){var A={ctr_type:"2",page_area:"1",object_type:"offer"};if(B.isCoaseOut){return}this._doClick(B,A);if(B.isHasGoldAds){this._goldAds(B)}},company:function(B){var A={ctr_type:"2",page_area:"1",object_type:"company"};if(B.isCoaseOut){return}this._doClick(B,A);if(B.isHasGoldAds){this._goldAds(B,"company")}},detail:function(B){if(B.isCoaseOut){return}var A={ctr_type:"3",object_type:"offer"};this._doClick(B,A)},profile:function(B){if(B.isCoaseOut){return}var A={ctr_type:"2",page_area:"1",object_type:"company"};this._doClick(B,A)},_goldAds:function(C,B){C.object_ids=C.gold_ad_ids;B=B||"company";var A={ctr_type:"2",page_area:"3",object_type:B,page_size:"",page_no:""};this._doClick(C,A)}};