(function(b,a){a.theme.company={themeConfig:{hasQuantity:1,priceLabel:"\u6279\u53d1\u4ef7",companyLabel:"\u8d27\u6e90\uff1a",quantityLabel:"\u8d77\u6279\u91cf\uff1a",hasTracelog:0,tracelogParam:""},getHtmlDescription:function(d,e){var c='<dd class="explain">\u4e3b\u8425\uff1a'+e.cut(24)+"</dd>";return c},getHtmlCity:function(d){var c="<dd>\u6240\u5728\u5730\u533a\uff1a"+d+"</dd>";return c},getHtmlCompany:function(h,e,g,i,d){var f=d.cut(32);var c='<dt><a href="'+a.Util.getCompanyUrl(e,g,i)+'" title="'+f+'">'+f+"</a></dt>";return c},getHtmlOfferItem:function(e,i,h,f){var c=[],d=a.Util.getOfferSearchUrl(f,i.displayCatIds,i.id,i.isEtc),g;e++;if(e==7){g='<li class="last-row"><dl>'}else{g='<li><dl class="company">'}c.push(g);c.push(this.getHtmlCompany(h.companyLabel,i.trustType,i.domainId,i.memberId,i.company));c.push(this.getHtmlDescription(d,i.subject));c.push("</dl></li>");return c.join("")},getHtmlOfferList:function(g,j,f){var e=[];for(var h=0,d=g.length,c=f.pagesize;h<d&&h<c;h++){e.push(this.getHtmlOfferItem(h,g[h],j,f.keywords))}return e.join("")},tracelog:function(f,c,e){if((f-0)&&(c!=="")){var d=$$("#"+e+" .list-vertical a");$E.addListener(d,"mousedown",function(){a.Util.tracelog(c)})}},getHtmlRoot:function(c,f,d){var e=[];f=FD.common.applyIf(f,this.themeConfig);e.push('<ul class="list-vertical">');e.push(this.getHtmlOfferList(c.searchResultList,f,d));e.push("</ul>");$(f.containerId).innerHTML=e.join("");this.tracelog(f.hasTracelog,f.tracelogParam,f.containerId)},getErrorTips:function(d,c){switch(c){case"failure":c="\u52a0\u8f7d\u51fa\u9519\uff0c\u8bf7\u7a0d\u540e\u64cd\u4f5c\uff01";break;case"timeout":c="\u7f51\u7edc\u7e41\u5fd9\uff0c\u8bf7\u7a0d\u540e\u64cd\u4f5c\uff01";break}},end:0}})(window,FD.sys.opensearch);
