(function(d){var c="__sub_foreach_",f="__index_",a="__index_tmp_",i="__var_tmp_",e="__len_",g="__buf__.push(";var h=function(r){if(!this.applyData){return new h(r)}var p=new RegExp("(.*?)"+h.startDelimiter+"(.*?)"+h.endDelimiter,"g"),t=/foreach[\s\xa0]*\([\s\xa0]*(\S+?)[\s\xa0]*(?:as[\s\xa0]*(\S+?)){0,1}?[\s\xa0]*\)[\s\xa0]*\{/g,m,o,n,s=[],q=[];m=r.replace(p,function(l,v,u){u=b(u);if(v!=""){v=v.replace(/'/g,"\\'");q.push(g+"'"+v+"'");q.push(");");if(u.charAt(0)==":"){q[q.length-1]=")"}}if(u!=""){if(u.charAt(0)=="="){u=g+u.substr(1)+");"}else{if(!/[;\?\{\}:]/.test(u.charAt(u.length-1))){u=u+";"}}q.push(u)}return""});if(m){q.push(g+"'"+m+"');")}q=q.join("").replace(t,function(l,y,v){var u={type:"foreach",varName:y,definedVarName:v||false},x=s.push(u)-1,w=c+x+"_{";u.id=x;return w});for(o=0,n=s.length;o<n;o++){q=k(q,s[o])}q=["var __buf__=[],$index=null;$util.print=function(str){__buf__.push(str);};with($data){",q,"} return __buf__.join('');"].join("");this.compiled=new Function("$data","$util",q)};h.prototype.applyData=function(o,n){var l={};if(h.util){var p=h.util;for(var m in p){l[m]=p[m]}}return this.compiled.call(n||window,o,l)};function k(v,z){var u=z.id,q=z.varName,y=z.definedVarName,n=f+u,B=a+u,p=i+u,E=e+u,D=[q,"[",n,"]"].join(""),s=new RegExp(c+u+"_{","g"),t=new RegExp("{|}","g"),w,l,C,r,A,F=0,x,o;if(y){x=["var ",B,"=$index;if(typeof ",y," !='undefined')var ",p,"=",y,";else var ",y,"=null;for(var ",n,"=0,",E,"=",q,".length;",n,"<",E,";",n,"++){$index=",n,";",y,"=",D,";with(",y,"){"].join("");o=["}}$index=",B,";if(typeof ",p,"!='undefined')",y,"=",p,";"].join("")}else{x=["var ",B,"=$index;for(var ",n,"=0,",E,"=",q,".length;",n,"<",E,";",n,"++){$index=",n,";with(",D,"){"].join("");o="}}$index="+B+";"}w=s.exec(v);if(w){r=w.index;A=s.lastIndex;C=v.substr(A);while((l=t.exec(C))){if(l=="{"){F++}else{if(F>0){F--}else{C=C.substring(0,l.index)+o+C.substr(t.lastIndex);break}}}v=v.substring(0,r)+x+C}return v}function b(l){return l.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")}function j(l){l=String(l===null?"":l);return l.replace(/&(?!\w+;)|["<>\\]/g,function(m){switch(m){case"&":return"&amp;";case"\\":return"\\\\";case'"':return'"';case"<":return"&lt;";case">":return"&gt;";default:return m}})}h.setDelimiters=function(m){var l=m.replace(/[\{\[\}\]\(\)\|]/g,function(n){return"\\"+n}).split("...");h.startDelimiter=l[0];h.endDelimiter=l[1]};h.startDelimiter="<%";h.endDelimiter="%>";h.util={trim:b,escape:j};d.Sweet=h})(FD.widget);