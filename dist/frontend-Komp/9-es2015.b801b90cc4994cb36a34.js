(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{SAwP:function(n,t,e){"use strict";e.r(t),e.d(t,"SVCPageModule",(function(){return f}));var o=e("tyNb"),i=e("PCNd"),c=e("uo3u"),a=e("fXoL"),r=e("ofXK");function s(n,t){if(1&n&&(a.Mb(0,"li",13),a.oc(1),a.Lb()),2&n){const n=t.$implicit;a.zb(1),a.rc(" ",n.term,": ",n.price," \u0440\u0443\u0431. ")}}function g(n,t){if(1&n&&(a.Mb(0,"div",6),a.Mb(1,"h3",7),a.oc(2),a.Lb(),a.Mb(3,"p",8),a.oc(4),a.Lb(),a.Mb(5,"ul",9),a.mc(6,s,2,2,"li",10),a.Lb(),a.Mb(7,"p",11),a.oc(8),a.Lb(),a.Mb(9,"p",12),a.oc(10),a.Lb(),a.Lb()),2&n){const n=a.Wb();a.bc("@slideUp",void 0),a.zb(2),a.pc(n.serviceShowedComponent.title),a.zb(2),a.pc(n.serviceShowedComponent.main.text),a.zb(2),a.bc("ngForOf",n.serviceShowedComponent.main.types),a.zb(2),a.pc(n.serviceShowedComponent.main.nexttext),a.zb(2),a.pc(n.serviceShowedComponent.about)}}function d(n,t){1&n&&(a.Mb(0,"div",6),a.oc(1,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u043e \u0441\u0435\u0440\u0432\u0438\u0441\u0435..."),a.Lb())}const b=function(n){return["/services",n]},l=function(n,t){return{backgroundColor:n,color:t}};function p(n,t){if(1&n){const n=a.Nb();a.Mb(0,"li",16),a.Ub("click",(function(){a.ic(n);const t=a.Wb(2);return t.toggle=!t.toggle})),a.Mb(1,"h3",17),a.oc(2),a.Xb(3,"uppercase"),a.Lb(),a.Lb()}if(2&n){const n=t.$implicit,e=a.Wb(2);a.cc("id",n.name),a.bc("routerLink",a.ec(6,b,n.name)),a.zb(1),a.bc("ngStyle",a.fc(8,l,n.name==e.paramsName?"#403D7A":"rgba(251, 251, 251, 0.97)",n.name==e.paramsName?"rgba(251, 251, 251, 0.97)":"#403D7A")),a.zb(1),a.pc(a.Yb(3,4,n.title))}}function m(n,t){if(1&n&&(a.Mb(0,"aside",14),a.Mb(1,"ul"),a.mc(2,p,4,11,"li",15),a.Lb(),a.Lb()),2&n){const n=a.Wb();a.bc("@slide",void 0),a.zb(2),a.bc("ngForOf",n.asideListCard)}}let u=(()=>{class n{constructor(n,t){this.router=n,this.actRoute=t,this.paramsName="",this.toggle=!1,this.small=!1,this.big=!0,this.asideListCard=[],this.serviceInfo=[],window.addEventListener("resize",()=>{window.innerWidth<=650?(this.small=!0,this.big=!1):window.innerWidth>650&&(this.small=!1,this.big=!0)}),window.innerWidth<=650?(this.small=!0,this.big=!1,this.toggle=!1):window.innerWidth>650&&(this.small=!1,this.big=!0,this.toggle=!0)}ngOnInit(){this.subActRoute=this.actRoute.data.subscribe(n=>{this.asideListCard=n.asideList}),this.subParams=this.actRoute.params.subscribe(n=>{this.paramsName=n.name,this.subService=this.actRoute.data.subscribe(n=>{this.serviceInfo=n.serviceInf,this.serviceShowedComponent=this.serviceInfo.find(n=>n.name===this.paramsName)})})}ngAfterContentChecked(){this.serviceShowedComponent=this.serviceInfo.find(n=>n.name==this.paramsName)}ngOnDestroy(){this.subParams&&this.subParams.unsubscribe(),this.subService&&this.subService.unsubscribe(),this.subActRoute&&this.subActRoute.unsubscribe()}}return n.\u0275fac=function(t){return new(t||n)(a.Jb(o.c),a.Jb(o.a))},n.\u0275cmp=a.Db({type:n,selectors:[["app-service-card"]],decls:8,vars:4,consts:[[1,"canvas"],["class","information",4,"ngIf"],["loading",""],[1,"up-block",3,"click"],["type","button",1,"slideUp"],["class","sidebar",4,"ngIf"],[1,"information"],[1,"heading"],["id","text-before"],["id","list-work"],["class","items",4,"ngFor","ngForOf"],["id","text-after"],[1,"about"],[1,"items"],[1,"sidebar"],["class","slip",3,"routerLink","id","click",4,"ngFor","ngForOf"],[1,"slip",3,"routerLink","id","click"],[3,"ngStyle"]],template:function(n,t){1&n&&(a.Mb(0,"section"),a.Mb(1,"div",0),a.mc(2,g,11,6,"div",1),a.mc(3,d,2,0,"ng-template",null,2,a.nc),a.Mb(5,"div",3),a.Ub("click",(function(){return t.toggle=!t.toggle})),a.Kb(6,"button",4),a.Lb(),a.mc(7,m,3,2,"aside",5),a.Lb(),a.Lb()),2&n&&(a.zb(2),a.bc("ngIf",t.serviceShowedComponent&&(t.toggle||!t.small||t.big)),a.zb(4),a.Bb("rotated",!t.toggle),a.zb(1),a.bc("ngIf",!t.toggle||t.small||t.big))},directives:[r.k,r.j,o.d,r.l],pipes:[r.o],styles:['@charset "UTF-8";.canvas[_ngcontent-%COMP%]{margin:120px 0 100px;display:grid;grid-template-columns:10px 6fr 2fr 10px;grid-template-rows:30px 1fr 30px;-moz-column-gap:2%;column-gap:2%;color:#403d7a}@media (max-width:650px){.canvas[_ngcontent-%COMP%]{grid-template-columns:10px 1fr 10px;row-gap:10px;padding-top:5px}}.canvas[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]{grid-column:2;grid-row:2;background-color:hsla(0,0%,98.4%,.97);border-radius:5px;padding:1% 2%;position:relative;min-height:100%}@media (max-width:650px){.canvas[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]{grid-column-start:2;grid-column-end:3}}.canvas[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{font-size:1.45rem;margin:0 0 10px}.canvas[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   #text-after[_ngcontent-%COMP%], .canvas[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   #text-before[_ngcontent-%COMP%]{font-weight:400;line-height:.5rem;letter-spacing:.06rem;word-spacing:.2rem;line-height:1.15rem}.canvas[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   #text-after[_ngcontent-%COMP%]{color:#000}.canvas[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   #list-work[_ngcontent-%COMP%]{font-size:17px;font-weight:400;margin:10px 0}.canvas[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   #list-work[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]{margin:.1rem;padding-left:0}.canvas[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   #list-work[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]:before{content:"\u2022";font-size:20px}.canvas[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]{font-weight:400;letter-spacing:.05rem;word-spacing:.2rem;line-height:1.15rem;margin:30px 0 0}.canvas[_ngcontent-%COMP%]   .up-block[_ngcontent-%COMP%]{display:none;width:80px;height:30px;margin:0 auto;cursor:pointer;position:relative}@media (max-width:650px){.canvas[_ngcontent-%COMP%]   .up-block[_ngcontent-%COMP%]{display:block;grid-column:2;grid-row:1}}.canvas[_ngcontent-%COMP%]   .up-block[_ngcontent-%COMP%]   .slideUp[_ngcontent-%COMP%]{display:block;position:absolute;border:none;background-color:transparent;top:50%;right:42%}.canvas[_ngcontent-%COMP%]   .up-block[_ngcontent-%COMP%]   .slideUp[_ngcontent-%COMP%]:after, .canvas[_ngcontent-%COMP%]   .up-block[_ngcontent-%COMP%]   .slideUp[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;width:40px;height:5px;border-radius:15px;border:none;background-color:#403d7a;transform-origin:center;transition-duration:.2s}.canvas[_ngcontent-%COMP%]   .up-block[_ngcontent-%COMP%]   .slideUp[_ngcontent-%COMP%]:after{right:3px;transform:rotate(20deg)}.canvas[_ngcontent-%COMP%]   .up-block[_ngcontent-%COMP%]   .slideUp[_ngcontent-%COMP%]:before{left:3px;transform:rotate(-20deg)}.canvas[_ngcontent-%COMP%]   .up-block[_ngcontent-%COMP%]   .slideUp.rotated[_ngcontent-%COMP%]:after{transform:rotate(-20deg)}.canvas[_ngcontent-%COMP%]   .up-block[_ngcontent-%COMP%]   .slideUp.rotated[_ngcontent-%COMP%]:before{transform:rotate(20deg)}.canvas[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{grid-column:3;grid-row:2}@media (max-width:650px){.canvas[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{grid-column:2}}.canvas[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{height:100%;display:flex;flex-flow:column nowrap;justify-content:space-between}.canvas[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{cursor:pointer;margin:5px 0}.canvas[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{transition-duration:.3s;background-color:hsla(0,0%,98.4%,.97);border-radius:5px;padding:8px 10px;color:#403d7a}.canvas[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover{transform:translateX(-5px)}@media (max-width:650px){.canvas[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover{transform:none}}'],data:{animation:c.a}}),n})();var C=e("GwtJ"),M=e("a9NN");const h=[{path:"",component:u,resolve:{asideList:C.a,serviceInf:(()=>{class n{constructor(n){this.reqService=n}resolve(n,t){return this.reqService.getServiceInfo()}}return n.\u0275fac=function(t){return new(t||n)(a.Qb(M.a))},n.\u0275prov=a.Fb({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}}];let f=(()=>{class n{}return n.\u0275mod=a.Hb({type:n}),n.\u0275inj=a.Gb({factory:function(t){return new(t||n)},imports:[[i.a,o.g.forChild(h)],o.g]}),n})()}}]);