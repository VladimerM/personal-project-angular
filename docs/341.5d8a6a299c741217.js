"use strict";(self.webpackChunkpersonal_project_angular=self.webpackChunkpersonal_project_angular||[]).push([[341],{1341:(ie,I,p)=>{p.r(I),p.d(I,{MainModule:()=>ee});var l=p(6895),C=p(1135),e=p(8274),M=p(7555),m=p(1068),k=p(8649);function T(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"a",12),e.NdJ("keyup.enter",function(){e.CHM(t),e.oxw(3);const r=e.MAs(1);return e.KtG(r.previous())})("click",function(){e.CHM(t),e.oxw(3);const r=e.MAs(1);return e.KtG(r.previous())}),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()}if(2&i){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.previousLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function y(i,a){if(1&i&&(e.TgZ(0,"span",14),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()),2&i){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.previousLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function L(i,a){if(1&i&&(e.TgZ(0,"li",9),e.YNc(1,T,4,2,"a",10),e.YNc(2,y,4,2,"span",11),e.qZA()),2&i){e.oxw(2);const t=e.MAs(1);e.ekj("disabled",t.isFirstPage()),e.xp6(1),e.Q6J("ngIf",1<t.getCurrent()),e.xp6(1),e.Q6J("ngIf",t.isFirstPage())}}function F(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"a",12),e.NdJ("keyup.enter",function(){e.CHM(t);const r=e.oxw().$implicit;e.oxw(2);const s=e.MAs(1);return e.KtG(s.setCurrent(r.value))})("click",function(){e.CHM(t);const r=e.oxw().$implicit;e.oxw(2);const s=e.MAs(1);return e.KtG(s.setCurrent(r.value))}),e.TgZ(1,"span",13),e._uU(2),e.qZA(),e.TgZ(3,"span"),e._uU(4),e.ALo(5,"number"),e.qZA()()}if(2&i){const t=e.oxw().$implicit,n=e.oxw(2);e.xp6(2),e.hij("",n.screenReaderPageLabel," "),e.xp6(2),e.Oqu("..."===t.label?t.label:e.xi3(5,2,t.label,""))}}function O(i,a){if(1&i&&(e.ynx(0),e.TgZ(1,"span",16)(2,"span",13),e._uU(3),e.qZA(),e.TgZ(4,"span"),e._uU(5),e.ALo(6,"number"),e.qZA()(),e.BQk()),2&i){const t=e.oxw().$implicit,n=e.oxw(2);e.xp6(3),e.hij("",n.screenReaderCurrentLabel," "),e.xp6(2),e.Oqu("..."===t.label?t.label:e.xi3(6,2,t.label,""))}}function Z(i,a){if(1&i&&(e.TgZ(0,"li"),e.YNc(1,F,6,5,"a",10),e.YNc(2,O,7,5,"ng-container",15),e.qZA()),2&i){const t=a.$implicit;e.oxw(2);const n=e.MAs(1);e.ekj("current",n.getCurrent()===t.value)("ellipsis","..."===t.label),e.xp6(1),e.Q6J("ngIf",n.getCurrent()!==t.value),e.xp6(1),e.Q6J("ngIf",n.getCurrent()===t.value)}}function A(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"a",12),e.NdJ("keyup.enter",function(){e.CHM(t),e.oxw(3);const r=e.MAs(1);return e.KtG(r.next())})("click",function(){e.CHM(t),e.oxw(3);const r=e.MAs(1);return e.KtG(r.next())}),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()}if(2&i){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.nextLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function J(i,a){if(1&i&&(e.TgZ(0,"span",14),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()),2&i){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.nextLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function N(i,a){if(1&i&&(e.TgZ(0,"li",17),e.YNc(1,A,4,2,"a",10),e.YNc(2,J,4,2,"span",11),e.qZA()),2&i){e.oxw(2);const t=e.MAs(1);e.ekj("disabled",t.isLastPage()),e.xp6(1),e.Q6J("ngIf",!t.isLastPage()),e.xp6(1),e.Q6J("ngIf",t.isLastPage())}}function D(i,a){if(1&i&&(e.TgZ(0,"ul",4),e.YNc(1,L,3,4,"li",5),e.TgZ(2,"li",6),e._uU(3),e.qZA(),e.YNc(4,Z,3,6,"li",7),e.YNc(5,N,3,4,"li",8),e.qZA()),2&i){const t=e.oxw(),n=e.MAs(1);e.ekj("responsive",t.responsive),e.xp6(1),e.Q6J("ngIf",t.directionLinks),e.xp6(2),e.AsE(" ",n.getCurrent()," / ",n.getLastPage()," "),e.xp6(1),e.Q6J("ngForOf",n.pages)("ngForTrackBy",t.trackByIndex),e.xp6(1),e.Q6J("ngIf",t.directionLinks)}}class b{constructor(){this.change=new e.vpe,this.instances={},this.DEFAULT_ID="DEFAULT_PAGINATION_ID"}defaultId(){return this.DEFAULT_ID}register(a){return null==a.id&&(a.id=this.DEFAULT_ID),this.instances[a.id]?this.updateInstance(a):(this.instances[a.id]=a,!0)}updateInstance(a){let t=!1;for(let n in this.instances[a.id])a[n]!==this.instances[a.id][n]&&(this.instances[a.id][n]=a[n],t=!0);return t}getCurrentPage(a){return this.instances[a]?this.instances[a].currentPage:1}setCurrentPage(a,t){if(this.instances[a]){let n=this.instances[a];t<=Math.ceil(n.totalItems/n.itemsPerPage)&&1<=t&&(this.instances[a].currentPage=t,this.change.emit(a))}}setTotalItems(a,t){this.instances[a]&&0<=t&&(this.instances[a].totalItems=t,this.change.emit(a))}setItemsPerPage(a,t){this.instances[a]&&(this.instances[a].itemsPerPage=t,this.change.emit(a))}getInstance(a=this.DEFAULT_ID){return this.instances[a]?this.clone(this.instances[a]):{}}clone(a){var t={};for(var n in a)a.hasOwnProperty(n)&&(t[n]=a[n]);return t}}const S=Number.MAX_SAFE_INTEGER;let q=(()=>{class i{constructor(t){this.service=t,this.state={}}transform(t,n){if(!(t instanceof Array)){let _=n.id||this.service.defaultId();return this.state[_]?this.state[_].slice:t}let c,g,r=n.totalItems&&n.totalItems!==t.length,s=this.createInstance(t,n),o=s.id,d=s.itemsPerPage,h=this.service.register(s);if(!r&&t instanceof Array){if(d=+d||S,c=(s.currentPage-1)*d,g=c+d,this.stateIsIdentical(o,t,c,g))return this.state[o].slice;{let x=t.slice(c,g);return this.saveState(o,t,x,c,g),this.service.change.emit(o),x}}return h&&this.service.change.emit(o),this.saveState(o,t,t,c,g),t}createInstance(t,n){return this.checkConfig(n),{id:null!=n.id?n.id:this.service.defaultId(),itemsPerPage:+n.itemsPerPage||0,currentPage:+n.currentPage||1,totalItems:+n.totalItems||t.length}}checkConfig(t){const r=["itemsPerPage","currentPage"].filter(s=>!(s in t));if(0<r.length)throw new Error(`PaginatePipe: Argument is missing the following required properties: ${r.join(", ")}`)}saveState(t,n,r,s,o){this.state[t]={collection:n,size:n.length,slice:r,start:s,end:o}}stateIsIdentical(t,n,r,s){let o=this.state[t];return!(!o||o.size!==n.length||o.start!==r||o.end!==s)&&o.slice.every((g,d)=>g===n[r+d])}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(b,16))},i.\u0275pipe=e.Yjl({name:"paginate",type:i,pure:!1}),i})(),j=(()=>{class i{constructor(t,n){this.service=t,this.changeDetectorRef=n,this.maxSize=7,this.pageChange=new e.vpe,this.pageBoundsCorrection=new e.vpe,this.pages=[],this.changeSub=this.service.change.subscribe(r=>{this.id===r&&(this.updatePageLinks(),this.changeDetectorRef.markForCheck(),this.changeDetectorRef.detectChanges())})}ngOnInit(){void 0===this.id&&(this.id=this.service.defaultId()),this.updatePageLinks()}ngOnChanges(t){this.updatePageLinks()}ngOnDestroy(){this.changeSub.unsubscribe()}previous(){this.checkValidId(),this.setCurrent(this.getCurrent()-1)}next(){this.checkValidId(),this.setCurrent(this.getCurrent()+1)}isFirstPage(){return 1===this.getCurrent()}isLastPage(){return this.getLastPage()===this.getCurrent()}setCurrent(t){this.pageChange.emit(t)}getCurrent(){return this.service.getCurrentPage(this.id)}getLastPage(){let t=this.service.getInstance(this.id);return t.totalItems<1?1:Math.ceil(t.totalItems/t.itemsPerPage)}getTotalItems(){return this.service.getInstance(this.id).totalItems}checkValidId(){null==this.service.getInstance(this.id).id&&console.warn(`PaginationControlsDirective: the specified id "${this.id}" does not match any registered PaginationInstance`)}updatePageLinks(){let t=this.service.getInstance(this.id);const n=this.outOfBoundCorrection(t);n!==t.currentPage?setTimeout(()=>{this.pageBoundsCorrection.emit(n),this.pages=this.createPageArray(t.currentPage,t.itemsPerPage,t.totalItems,this.maxSize)}):this.pages=this.createPageArray(t.currentPage,t.itemsPerPage,t.totalItems,this.maxSize)}outOfBoundCorrection(t){const n=Math.ceil(t.totalItems/t.itemsPerPage);return n<t.currentPage&&0<n?n:t.currentPage<1?1:t.currentPage}createPageArray(t,n,r,s){s=+s;let o=[];const c=Math.max(Math.ceil(r/n),1),g=Math.ceil(s/2),d=t<=g,h=c-g<t,_=!d&&!h;let x=s<c,f=1;for(;f<=c&&f<=s;){let P,w=this.calculatePageNumber(f,t,s,c),te=2===f&&(_||h),ne=f===s-1&&(_||d);P=x&&(te||ne)?"...":w,o.push({label:P,value:w}),f++}return o}calculatePageNumber(t,n,r,s){let o=Math.ceil(r/2);return t===r?s:1===t?t:r<s?s-o<n?s-r+t:o<n?n-o+t:t:t}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(b),e.Y36(e.sBO))},i.\u0275dir=e.lG2({type:i,selectors:[["pagination-template"],["","pagination-template",""]],inputs:{id:"id",maxSize:"maxSize"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},exportAs:["paginationApi"],features:[e.TTD]}),i})();function v(i){return!!i&&"false"!==i}let U=(()=>{class i{constructor(){this.maxSize=7,this.previousLabel="Previous",this.nextLabel="Next",this.screenReaderPaginationLabel="Pagination",this.screenReaderPageLabel="page",this.screenReaderCurrentLabel="You're on page",this.pageChange=new e.vpe,this.pageBoundsCorrection=new e.vpe,this._directionLinks=!0,this._autoHide=!1,this._responsive=!1}get directionLinks(){return this._directionLinks}set directionLinks(t){this._directionLinks=v(t)}get autoHide(){return this._autoHide}set autoHide(t){this._autoHide=v(t)}get responsive(){return this._responsive}set responsive(t){this._responsive=v(t)}trackByIndex(t){return t}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["pagination-controls"]],inputs:{id:"id",maxSize:"maxSize",directionLinks:"directionLinks",autoHide:"autoHide",responsive:"responsive",previousLabel:"previousLabel",nextLabel:"nextLabel",screenReaderPaginationLabel:"screenReaderPaginationLabel",screenReaderPageLabel:"screenReaderPageLabel",screenReaderCurrentLabel:"screenReaderCurrentLabel"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},decls:4,vars:4,consts:[[3,"id","maxSize","pageChange","pageBoundsCorrection"],["p","paginationApi"],["role","navigation"],["class","ngx-pagination",3,"responsive",4,"ngIf"],[1,"ngx-pagination"],["class","pagination-previous",3,"disabled",4,"ngIf"],[1,"small-screen"],[3,"current","ellipsis",4,"ngFor","ngForOf","ngForTrackBy"],["class","pagination-next",3,"disabled",4,"ngIf"],[1,"pagination-previous"],["tabindex","0",3,"keyup.enter","click",4,"ngIf"],["aria-disabled","true",4,"ngIf"],["tabindex","0",3,"keyup.enter","click"],[1,"show-for-sr"],["aria-disabled","true"],[4,"ngIf"],["aria-live","polite"],[1,"pagination-next"]],template:function(t,n){if(1&t&&(e.TgZ(0,"pagination-template",0,1),e.NdJ("pageChange",function(s){return n.pageChange.emit(s)})("pageBoundsCorrection",function(s){return n.pageBoundsCorrection.emit(s)}),e.TgZ(2,"nav",2),e.YNc(3,D,6,8,"ul",3),e.qZA()()),2&t){const r=e.MAs(1);e.Q6J("id",n.id)("maxSize",n.maxSize),e.xp6(2),e.uIk("aria-label",n.screenReaderPaginationLabel),e.xp6(1),e.Q6J("ngIf",!(n.autoHide&&r.pages.length<=1))}},dependencies:[j,l.O5,l.sg,l.JJ],styles:['.ngx-pagination{margin-left:0;margin-bottom:1rem}.ngx-pagination:before,.ngx-pagination:after{content:" ";display:table}.ngx-pagination:after{clear:both}.ngx-pagination li{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;margin-right:.0625rem;border-radius:0}.ngx-pagination li{display:inline-block}.ngx-pagination a,.ngx-pagination button{color:#0a0a0a;display:block;padding:.1875rem .625rem;border-radius:0}.ngx-pagination a:hover,.ngx-pagination button:hover{background:#e6e6e6}.ngx-pagination .current{padding:.1875rem .625rem;background:#2199e8;color:#fefefe;cursor:default}.ngx-pagination .disabled{padding:.1875rem .625rem;color:#cacaca;cursor:default}.ngx-pagination .disabled:hover{background:transparent}.ngx-pagination a,.ngx-pagination button{cursor:pointer}.ngx-pagination .pagination-previous a:before,.ngx-pagination .pagination-previous.disabled:before{content:"\\ab";display:inline-block;margin-right:.5rem}.ngx-pagination .pagination-next a:after,.ngx-pagination .pagination-next.disabled:after{content:"\\bb";display:inline-block;margin-left:.5rem}.ngx-pagination .show-for-sr{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}.ngx-pagination .small-screen{display:none}@media screen and (max-width: 601px){.ngx-pagination.responsive .small-screen{display:inline-block}.ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next){display:none}}\n'],encapsulation:2,changeDetection:0}),i})(),z=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[b],imports:[[l.ez]]}),i})();function E(i,a){1&i&&(e.TgZ(0,"span",20),e._uU(1,"NEW!"),e.qZA())}function Y(i,a){1&i&&(e.TgZ(0,"span",21),e._uU(1,"FEATURED"),e.qZA())}function B(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"li",22),e.NdJ("click",function(){const s=e.CHM(t).$implicit,o=e.oxw(2);return e.KtG(o.onAddFilter(s))}),e._uU(1),e.qZA()}if(2&i){const t=a.$implicit;e.xp6(1),e.hij(" ",t," ")}}function H(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"div",4)(1,"div",5)(2,"div",6),e._UZ(3,"img",7),e.qZA(),e.TgZ(4,"div",8)(5,"div",9)(6,"span",10),e.NdJ("click",function(){const s=e.CHM(t).$implicit,o=e.oxw();return e.KtG(o.openJob(s))}),e._uU(7),e.qZA(),e.YNc(8,E,2,0,"span",11),e.YNc(9,Y,2,0,"span",12),e.qZA(),e.TgZ(10,"div",13),e._uU(11),e.qZA(),e.TgZ(12,"ul",14)(13,"li",15),e._uU(14),e.qZA(),e.TgZ(15,"li",15),e._uU(16),e.qZA(),e.TgZ(17,"li",15),e._uU(18),e.qZA(),e.TgZ(19,"li",15),e._uU(20),e.qZA()()()(),e.TgZ(21,"ul",16),e.YNc(22,B,2,1,"li",17),e.qZA(),e.TgZ(23,"div",18)(24,"img",19),e.NdJ("click",function(){const s=e.CHM(t).$implicit,o=e.oxw();return e.KtG(o.onClickChangeHeart(s))}),e.qZA()()()}if(2&i){const t=a.$implicit,n=e.oxw();e.xp6(3),e.s9C("src",t.img,e.LSH),e.xp6(4),e.Oqu(t.company),e.xp6(1),e.Q6J("ngIf",n.checkDate(t)),e.xp6(1),e.Q6J("ngIf",!1),e.xp6(2),e.Oqu(t.title),e.xp6(3),e.Oqu(n.getPostDate(t)),e.xp6(2),e.Oqu(t.workTime),e.xp6(2),e.Oqu(t.location),e.xp6(2),e.hij("Deadline: ",t.deadline,""),e.xp6(2),e.Q6J("ngForOf",t.datas),e.xp6(2),e.Q6J("src",t.heartSrc,e.LSH)}}function Q(i,a){1&i&&(e.TgZ(0,"h1",23),e._uU(1,"Please wait."),e.qZA())}const R=function(i){return{itemsPerPage:10,currentPage:i}};let G=(()=>{class i{constructor(t,n){this.jobsService=t,this.router=n,this.filterItem=new e.vpe,this.heartFilled=!1,this.favorites=[],this.page=1}ngOnInit(){localStorage.getItem("favorites")&&(this.favorites=JSON.parse(localStorage.getItem("favorites")))}onClickChangeHeart(t){t.heartFilled?(t.heartSrc="assets/images/icons/heart.svg",t.heartFilled=!t.heartFilled,this.favorites.splice(this.favorites.indexOf(t.id),1),localStorage.setItem("favorites",JSON.stringify(this.favorites)),this.jobsService.editJobs(t.id,t).subscribe()):(t.heartSrc="assets/images/icons/filled-heart.svg",t.heartFilled=!t.heartFilled,this.favorites.push(t.id),localStorage.setItem("favorites",JSON.stringify(this.favorites)),this.jobsService.editJobs(t.id,t).subscribe())}onAddFilter(t){this.filterItem.emit(t)}openJob(t){this.router.navigate([`/main/jobs/${t.id}`])}checkDate(t){return Date.now()-t.date<864e5}getPostDate(t){return Math.floor((Date.now()-t.date)/864e5)<1?Math.floor((Date.now()-t.date)/36e5)+" hours ago":Math.floor((Date.now()-t.date)/864e5)+" days ago"}onTableDataChange(t){this.page=t,window.scroll({top:0,left:0,behavior:"smooth"})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(M.e),e.Y36(m.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-list"]],inputs:{jobs:"jobs"},outputs:{filterItem:"filterItem"},decls:5,vars:7,consts:[[1,"main"],["class","job",4,"ngFor","ngForOf"],["class","message",4,"ngIf"],["previousLabel","Prev","nextLabel","Next",3,"pageChange"],[1,"job"],[1,"job__info","info"],[1,"info__img"],["alt","Company Logo",3,"src"],[1,"info__info"],[1,"info__header"],[1,"info__header-name",3,"click"],["class","info__header-tag new",4,"ngIf"],["class","info__header-tag featured",4,"ngIf"],[1,"info__title"],[1,"info__about-list"],[1,"info__about-item"],[1,"job__data","data-list"],["class","data-list__item",3,"click",4,"ngFor","ngForOf"],[1,"job__favorites"],["alt","favorites",3,"src","click"],[1,"info__header-tag","new"],[1,"info__header-tag","featured"],[1,"data-list__item",3,"click"],[1,"message"]],template:function(t,n){1&t&&(e.TgZ(0,"main",0),e.YNc(1,H,25,11,"div",1),e.ALo(2,"paginate"),e.YNc(3,Q,2,0,"h1",2),e.TgZ(4,"pagination-controls",3),e.NdJ("pageChange",function(s){return n.onTableDataChange(s)}),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("ngForOf",e.xi3(2,2,n.jobs,e.VKq(5,R,n.page))),e.xp6(2),e.Q6J("ngIf",!n.jobs.length))},dependencies:[l.sg,l.O5,U,q],styles:["header[_ngcontent-%COMP%]{width:100%;height:80px;background-color:#046363}.main[_ngcontent-%COMP%]{max-width:1148px;margin:0 auto;font-family:arial;padding:15px}@media (max-width: 440px){.main[_ngcontent-%COMP%]{padding:15px}}.main[_ngcontent-%COMP%]   pagination-controls[_ngcontent-%COMP%]{text-align:center;margin:20px 0}.main[_ngcontent-%COMP%]   h1.message[_ngcontent-%COMP%]{text-align:center;font-size:24px}.job[_ngcontent-%COMP%]{background-color:#fff;width:100%;padding:40px 20px 20px;border-radius:5px;box-shadow:-2px -1px 44px 10px #344f78a1;display:flex;justify-content:space-between;position:relative;gap:20px;margin-bottom:15px}@media (max-width: 840px){.job[_ngcontent-%COMP%]{flex-direction:column;align-items:center}}.job__favorites[_ngcontent-%COMP%]{position:absolute;top:10px;right:10px;cursor:pointer;color:#046363}.job__favorites[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{transition:.3s}.job__favorites[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{color:red}.job__favorites[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:20px;width:20px}.info[_ngcontent-%COMP%]{display:flex;align-items:center;gap:25px;width:50%}@media (max-width: 840px){.info[_ngcontent-%COMP%]{width:100%;flex-wrap:wrap;padding:0 0 15px 5px;border-bottom:2px solid rgb(175,174,174);margin-bottom:15px}}.info__img[_ngcontent-%COMP%]{background-color:#5f9ea0;border-radius:50%;width:50px;height:50px}.info__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}.info__info[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:15px}.info__header-name[_ngcontent-%COMP%]{color:#5ba4a4;font-weight:700;font-size:18px;margin-right:15px;cursor:pointer}.info__header-tag[_ngcontent-%COMP%]{background-color:#5ba4a4;color:#fff;border:0;padding:5px 9px;border-radius:15px;font-weight:700;margin-right:5px;font-size:13px}.info__header-tag.featured[_ngcontent-%COMP%]{background-color:#000}.info__title[_ngcontent-%COMP%]{color:#5ba4a4;font-weight:700;font-size:18px;margin-right:15px}.info__about-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;gap:20px}.info__about-item[_ngcontent-%COMP%]{color:#7b8e8e;font-size:14px}.data-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;gap:20px;width:50%}@media (max-width: 840px){.data-list[_ngcontent-%COMP%]{width:100%}}.data-list__item[_ngcontent-%COMP%]{background-color:#fff;color:#5ba4a4;border:0;padding:9px 9px 9px 0;border-radius:5px;font-weight:700;cursor:pointer;transition:.4s;text-transform:uppercase}.data-list__item[_ngcontent-%COMP%]:hover{color:#fff;background-color:#5ba4a4}"],changeDetection:0}),i})();var u=p(433);function $(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"li",9)(1,"span",10),e._uU(2),e.qZA(),e.TgZ(3,"span",11),e.NdJ("click",function(){const s=e.CHM(t).index,o=e.oxw();return e.KtG(o.deleteFilterItem(s))}),e._UZ(4,"i",12),e.qZA()()}if(2&i){const t=a.$implicit;e.xp6(2),e.Oqu(t)}}function K(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"div",13),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.clearFilter())}),e._uU(1," Clear "),e.qZA()}}let V=(()=>{class i{constructor(){this.filters=new C.X([]),this.deleteFilterItemIndex=new e.vpe,this._clearFilter=new e.vpe,this.filterItem=new e.vpe,this.searchFormGroup=new u.cw({search:new u.NI("")})}ngOnInit(){}deleteFilterItem(t){this.deleteFilterItemIndex.emit(t)}clearFilter(){this._clearFilter.emit()}addFilter(){console.log(this.filters),this.filterItem.emit(this.searchFormGroup.get("search")?.value),this.searchFormGroup.get("search")?.setValue("")}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-filter"]],inputs:{filters:"filters"},outputs:{deleteFilterItemIndex:"deleteFilterItemIndex",_clearFilter:"_clearFilter",filterItem:"filterItem"},decls:10,vars:5,consts:[[1,"filter-container"],[1,"filter"],[1,"filter__list"],["class","filter__list-item",4,"ngFor","ngForOf"],["class","filter__clear",3,"click",4,"ngIf"],[1,"search",3,"formGroup"],["type","text","formControlName","search"],[3,"click"],[1,"fa-solid","fa-magnifying-glass"],[1,"filter__list-item"],[1,"filter__list-item-name"],[1,"filter__list-clear",3,"click"],[1,"fa-solid","fa-xmark"],[1,"filter__clear",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"ul",2),e.YNc(3,$,5,1,"li",3),e.ALo(4,"async"),e.qZA(),e.YNc(5,K,2,0,"div",4),e.qZA(),e.TgZ(6,"form",5),e._UZ(7,"input",6),e.TgZ(8,"button",7),e.NdJ("click",function(){return n.addFilter()}),e._UZ(9,"i",8),e.qZA()()()),2&t&&(e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,3,n.filters)),e.xp6(2),e.Q6J("ngIf",n.filters.getValue().length),e.xp6(1),e.Q6J("formGroup",n.searchFormGroup))},dependencies:[l.sg,l.O5,u._Y,u.Fj,u.JJ,u.JL,u.sg,u.u,l.Ov],styles:[".filter-container[_ngcontent-%COMP%]{width:100%;justify-content:flex-end;display:flex;align-items:center;gap:20px;min-height:70px;padding:15px}.filter[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex:1 1 auto;background-color:#fff;padding:20px;border-radius:5px;box-shadow:#5ba4a41a 0 5px 15px;font-family:Arial,Helvetica,sans-serif}.filter__list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:20px}.filter__list-item[_ngcontent-%COMP%]{display:flex;align-items:center;text-transform:capitalize;font-weight:700;font-size:18px;background-color:#def5f5;color:#5ba4a4}.filter__list-item-name[_ngcontent-%COMP%]{padding:0 5px}.filter__list-clear[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;background-color:#5ba4a4;cursor:pointer;width:30px;height:30px;border-top-right-radius:5px;border-bottom-right-radius:5px;transition:.3s}.filter__list-clear[_ngcontent-%COMP%]:hover{background-color:#db2727}.filter__list-clear[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff}.filter__clear[_ngcontent-%COMP%]{font-size:18px;font-weight:700;text-decoration:underline;color:#5ba4a4;cursor:pointer}.search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:transparent}.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:25px;width:90px;font-size:18px;border-radius:5px}.search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#000;position:relative;left:-18px}"],changeDetection:0}),i})(),X=(()=>{class i{constructor(t,n,r,s){this.jobsService=t,this.activatedRoute=n,this.router=r,this.loaderService=s,this.jobs=new C.X([]),this.filters=new C.X([]),this.today=(0,l.p6)(new Date,"yyyy-MM-dd","en").toString().split("-")}ngOnInit(){this.jobsService.getJobs().subscribe(t=>{this.jobs.next(t)})}deleteJob(t){this.jobsService.deleteJob(t).subscribe()}addFilter(t){if(!this.filters.getValue().includes(t.toLowerCase())){let n=this.filters.getValue();n.push(t.toLowerCase()),this.filters.next(n)}this.filter()}deleteFilterItem(t){let n=this.filters.getValue();n.splice(t,1),this.filters.next(n),this.filter()}clearFilter(){this.filters.next([]),this.filter()}filter(){0===this.filters.getValue().length?this.jobsService.getJobs().subscribe(t=>{this.jobs.next(t)}):this.jobsService.getJobs().subscribe(t=>{this.jobs.next(t.filter(n=>{let r=!0;for(let s of this.filters.getValue())n.datas.includes(s)||(r=!1);return r}))})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(M.e),e.Y36(m.gz),e.Y36(m.F0),e.Y36(k.D))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-main"]],decls:7,vars:4,consts:[[1,"main"],[1,"main__filter"],[3,"filters","deleteFilterItemIndex","_clearFilter","filterItem"],[1,"main__list"],[3,"jobs","filterItem"]],template:function(t,n){1&t&&(e._UZ(0,"header"),e.TgZ(1,"main",0)(2,"div",1)(3,"app-filter",2),e.NdJ("deleteFilterItemIndex",function(s){return n.deleteFilterItem(s)})("_clearFilter",function(){return n.clearFilter()})("filterItem",function(s){return n.addFilter(s)}),e.qZA()(),e.TgZ(4,"div",3)(5,"app-list",4),e.NdJ("filterItem",function(s){return n.addFilter(s)}),e.ALo(6,"async"),e.qZA()()()),2&t&&(e.xp6(3),e.Q6J("filters",n.filters),e.xp6(2),e.Q6J("jobs",e.lcZ(6,2,n.jobs)))},dependencies:[G,V,l.Ov],styles:["header[_ngcontent-%COMP%]{width:100%;height:200px;background-color:#065a5a;position:absolute;z-index:-1;top:0;left:0}.main[_ngcontent-%COMP%]{max-width:1148px;margin:0 auto;padding:0}.main__filter[_ngcontent-%COMP%]{margin-top:30px;margin-bottom:25px}"],changeDetection:0}),i})();var W=p(4466);let ee=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[l.ez,z,W.m,m.Bz.forChild([{path:"",component:X}])]}),i})()}}]);