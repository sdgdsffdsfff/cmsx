(function(b,a){a.theme.agency={themeConfig:{hasQuantity:1,companyLabel:"Ʒ���̣�",hasTracelog:0,tracelogParam:""},getHtmlRoot:function(c,g,d){var f=[],e;switch(g.imgType){case 0:e="opensearch-basic type-img-100";break;case 1:e="opensearch-basic type-img-150";break;case 2:e="opensearch-basic type-img-220";break;case 3:e="opensearch-basic type-img-310";break}g=FD.common.applyIf(g,this.themeConfig);f.push('<ul class="list-product '+e+'">');f.push(this.getHtmlOfferList(c.searchResultList,g,d));f.push("</ul>");$(g.containerId).innerHTML=f.join("");this.tracelog(g.hasTracelog,g.tracelogParam,g.containerId)},getHtmlOfferList:function(g,j,f){var e=[];for(var h=0,d=g.length,c=f.pagesize;h<d&&h<c;h++){e.push(this.getHtmlOfferItem(g[h],j,f.keywords,f.featureArray))}return e.join("")},getHtmlOfferItem:function(j,i,g,f){var c=[],d=0,h=0,e=a.Util.getOfferUrl(i.urlType,j.privateInfo,g,j.displayCatIds,j.id,j.isEtc,f);switch(j.privateInfo){case 1:d=1;break;case 2:h=1;break;case 3:d=1;h=1;break}c.push('<li><dl class="cell-product-2nd">');c.push(this.getHtmlDt(e,j.subject,j.offerImgURI,i.imgType,d));c.push(this.getBrand(j.brief));c.push(this.getHtmlDescription(e,j.subject));c.push(this.getHtmlCompany(i.companyLabel,j.trustType,j.domainId,j.memberId,j.company));c.push("</dl></li>");return c.join("")},getHtmlDt:function(e,f,h,g,d){var c='<dt class="vertical-img"><a class="a-img box-img" href="'+e+'" title="'+f+'"><img src="'+a.Util.getOfferImgUrl(h,g,d)+'" alt="'+f+'"/></a></dt>';return c},getBrand:function(c){var d=c.split(" ")[0].split(":")[1];return'<dd class="price"><em class="value">'+d+'</em><span class="icon-alliance"></span></dd>'},getHtmlDescription:function(d,e){var c='<dd class="description"><a href="'+d+'" title="'+e+'">'+e+"</a></dd>";return c},getHtmlCompany:function(g,e,f,h,d){var c='<dd class="company"><span class="label">'+g+'</span><a href="'+a.Util.getCompanyUrl(e,f,h)+'" title="'+d+'">'+d+"</a></dd>";return c},tracelog:function(f,c,e){if((f-0)&&(c!=="")){var d=$$("#"+e+" .list-product a");$E.addListener(d,"mousedown",function(){a.Util.tracelog(c)})}},end:0}})(window,FD.sys.opensearch);