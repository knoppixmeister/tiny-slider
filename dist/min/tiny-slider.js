!function(){"use strict";var t,n,e,r,i=window,a=document,o=Object,l=null,s=!0,d=!1,c=" ",u="Element",f="create"+u,v="DOMTokenList",p="__defineGetter__",h="defineProperty",m="class",g="List",y=m+g,b="rel",w=b+g,x="div",E="length",L="contains",M="apply",T="HTML",C=("item "+L+" add remove toggle toString toLocaleString").split(c),A=C[2],N=C[3],S=C[4],P="prototype",k=h in o||p in o[P]||l,D=function(t,n,e,r){o[h]?o[h](t,n,{configurable:d===k?s:!!r,get:e}):t[p](n,e)},O=function(n,e){var r=this,i=[],a={},l=0,u=0,f=function(){if(l>=u)for(;u<l;++u)(function(t){D(r,t,function(){return v(),i[t]},d)})(u)},v=function(){var t,r,o=arguments,d=/\s+/;if(o[E])for(r=0;r<o[E];++r)if(d.test(o[r]))throw t=new SyntaxError('String "'+o[r]+'" '+L+" an invalid character"),t.code=5,t.name="InvalidCharacterError",t;for(i=(""+n[e]).replace(/^\s+|\s+$/g,"").split(d),""===i[0]&&(i=[]),a={},r=0;r<i[E];++r)a[i[r]]=s;l=i[E],f()};return v(),D(r,E,function(){return v(),l}),r[C[6]]=r[C[5]]=function(){return v(),i.join(c)},r.item=function(t){return v(),i[t]},r[L]=function(t){return v(),!!a[t]},r[A]=function(){v[M](r,t=arguments);for(var t,o,d=0,u=t[E];d<u;++d)o=t[d],a[o]||(i.push(o),a[o]=s);l!==i[E]&&(l=i[E]>>>0,n[e]=i.join(c),f())},r[N]=function(){v[M](r,t=arguments);for(var t,o={},d=0,u=[];d<t[E];++d)o[t[d]]=s,delete a[t[d]];for(d=0;d<i[E];++d)o[i[d]]||u.push(i[d]);i=u,l=u[E]>>>0,n[e]=i.join(c),f()},r[S]=function(n,e){return v[M](r,[n]),t!==e?e?(r[A](n),s):(r[N](n),d):a[n]?(r[N](n),d):(r[A](n),s)},function(t,n){if(n)for(var e=0;e<7;++e)n(t,C[e],{enumerable:d})}(r,o[h]),r},z=function(t,n,e){D(t[P],n,function(){var t,r=this,i=p+h+n;if(r[i])return t;if(r[i]=s,d===k){for(var o,l=z.mirror=z.mirror||a[f](x),c=l.childNodes,u=c[E],v=0;v<u;++v)if(c[v]._R===r){o=c[v];break}o||(o=l.appendChild(a[f](x))),t=O.call(o,r,e)}else t=new O(r,e);return D(r,n,function(){return t}),delete r[i],t},s)};if(i[v])n=a[f](x)[y],P=i[v][P],n[A][M](n,C),2>n[E]&&(e=P[A],r=P[N],P[A]=function(){for(var t=0,n=arguments;t<n[E];++t)e.call(this,n[t])},P[N]=function(){for(var t=0,n=arguments;t<n[E];++t)r.call(this,n[t])}),n[S](g,d)&&(P[S]=function(n,e){var r=this;return r[(e=t===e?!r[L](n):e)?A:N](n),!!e});else{if(k)try{D({},"support")}catch(t){k=d}O.polyfill=s,i[v]=O,z(i[u],y,m+"Name"),z(i[T+"Link"+u],w,b),z(i[T+"Anchor"+u],w,b),z(i[T+"Area"+u],w,b)}}(),Date.now||(Date.now=function(){return(new Date).getTime()}),function(){"use strict";for(var t=["webkit","moz"],n=0;n<t.length&&!window.requestAnimationFrame;++n){var e=t[n];window.requestAnimationFrame=window[e+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e+"CancelAnimationFrame"]||window[e+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var r=0;window.requestAnimationFrame=function(t){var n=Date.now(),e=Math.max(r+16,n);return setTimeout(function(){t(r=e)},e-n)},window.cancelAnimationFrame=clearTimeout}}(),function(){"use strict";"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})}();var gn=function(t){return t}(window.gn||{});gn.extend=function(){for(var t,n,e,r=arguments[0]||{},i=1,a=arguments.length;i<a;i++)if(null!==(t=arguments[i]))for(n in t)e=t[n],r!==e&&void 0!==e&&(r[n]=e);return r},gn.isInViewport=function(t){var n=t.getBoundingClientRect();return n.bottom>0&&n.right>0&&n.top<document.documentElement.clientHeight&&n.left<document.documentElement.clientWidth},gn.indexOf=function(t,n){for(var e=0;e<t.length;e++)if(t[e]===n)return e;return-1},gn.getSupportedProp=function(t){for(var n=document.documentElement,e=0;e<t.length;e++)if(t[e]in n.style)return t[e]},gn.ready=function(t){if("function"==typeof t)return"complete"===document.readyState?t():void document.addEventListener("DOMContentLoaded",t,!1)},gn.isNodeList=function(t){return"undefined"!=typeof t.item},gn.append=function(t,n){var e,r=gn.isNodeList(t)?t:[t];if("undefined"!=typeof n.nodeType&&1===n.nodeType)for(e=r.length;e--;)r[e].appendChild(n);else if("string"==typeof n)for(e=r.length;e--;)r[e].insertAdjacentHTML("beforeend",n);else if(gn.isNodeList(n)){var i=document.createDocumentFragment();for(e=n.length;e--;)i.insertBefore(n[e],i.firstChild);for(var a=r.length;a--;)r[a].appendChild(i)}},gn.wrap=function(t,n){for(var e=gn.isNodeList(t)?t:[t],r=e.length;r--;){var i=r>0?n.cloneNode(!0):n,a=e[r],o=a.parentNode,l=a.nextSibling;i.appendChild(a),l?o.insertBefore(i,l):o.appendChild(i)}},gn.unwrap=function(t){for(var n=gn.isNodeList(t)?t:[t],e=n.length;e--;){for(var r=n[e],i=r.parentNode;r.firstChild;)i.insertBefore(r.firstChild,r);i.removeChild(r)}};var tns=function(){"use strict";function t(t){function f(){return"gallery"===yt||Vt||"page"===t.slideBy?wt:t.slideBy}function g(){if(o(Et,{"data-tns-role":"wrapper"}),o(Lt,{"data-tns-role":"content-wrapper"}),"vertical"===bt?o(Lt,{"data-tns-hidden":"y"}):o(Et,{"data-tns-hidden":"x"}),"carousel"===yt){var t=St&&At?D():At?At+Ct:0;Lt.style.cssText="horizontal"===bt?"margin: 0 "+t+"px;":"padding: "+t+"px 0 "+At+"px; height: "+I()+"px;"}}function y(){gt=Mn(),wt=xn();var t=St&&gt%Jt!==0?1:Nt;ht=tn-wt-t,"horizontal"!==bt||St||(Jt=En()),pt=Ln(),Xt=f()}function b(){""===xt.id?xt.id=$t=n():$t=xt.id;var t="";if(bt&&(t+=bt+" "),Ut&&(t+="autoheight"),o(xt,{"data-tns-role":"content","data-tns-mode":yt,"data-tns-features":t}),"carousel"===yt)if("horizontal"===bt){var e="width: "+(Jt+1)*tn+"px; ",r=-on*Jt,i=p?p+": translate3d("+r+"px, 0px, 0px)":"left: "+r+"px";xt.style.cssText+=e+i}else{var a=-cn[on];xt.style.cssText+=p?p+": translate3d(0px, "+a+"px, 0px)":"top: "+a+"px"}}function w(){navigator.msMaxTouchPoints&&(Et.classList.add("ms-touch"),Et.addEventListener("scroll",at,!1))}function x(){for(var t=0;t<Tt;t++){var n=Mt[t];n.id=$t+"-item"+t,"gallery"===yt&&Rt.normal&&n.classList.add(Rt.normal),"vertical"!==bt&&o(n,{style:"width: "+Jt+"px"}),o(n,{"aria-hidden":"true"});var e="carousel"===yt&&"vertical"===bt?"bottom":"right";n.innerHTML='<div data-tns-role="item-wrapper" style="margin-'+e+": "+Ct+'px">'+n.innerHTML+"</div>"}if(Gt||At){for(var r=document.createDocumentFragment(),i=document.createDocumentFragment(),a=Zt;a--;){var s=a%Tt,d=Mt[s].cloneNode(!0);if(l(d,"id"),i.insertBefore(d,i.firstChild),"carousel"===yt){var c=Mt[Tt-1-s].cloneNode(!0);l(c,"id"),r.appendChild(c)}}xt.insertBefore(r,xt.firstChild),xt.appendChild(i),Mt=xt.children}}function E(){Pt&&(t.controlsContainer||(gn.append(Et,'<div data-tns-role="controls" aria-label="Carousel Navigation"><button data-controls="prev" tabindex="-1" aria-controls="'+$t+'" type="button">'+kt[0]+'</button><button data-controls="next" tabindex="0" aria-controls="'+$t+'" type="button">'+kt[1]+"</button></div>"),Dt=Et.querySelector('[data-tns-role="controls"]')),ut=Dt.querySelector('[data-controls="prev"]'),ft=Dt.querySelector('[data-controls="next"]'),i(Dt,"tabindex")||(o(Dt,{"aria-label":"Carousel Navigation"}),o(Dt.children,{"aria-controls":$t,tabindex:"-1"})))}function L(){if(Ot){if(!t.navContainer){for(var n="",e=0;e<Tt;e++)n+='<button data-slide="'+e+'" tabindex="-1" aria-selected="false" aria-controls="'+$t+"-item"+e+'" type="button"></button>';Ht&&(n+='<button data-action="stop" type="button"><span hidden>Stop Animation</span>'+Bt[0]+"</button>"),n='<div data-tns-role="nav" aria-label="Carousel Pagination">'+n+"</div>",gn.append(Et,n),zt=Et.querySelector('[data-tns-role="nav"]')}if(vt=zt.querySelectorAll("[data-slide]"),!i(zt,"aria-label")){o(zt,{"aria-label":"Carousel Pagination"});for(var r=0;r<Tt;r++)o(vt[r],{tabindex:"-1","aria-selected":"false","aria-controls":$t+"-item"+r})}for(var a=pt;a<Tt;a++)o(vt[a],{hidden:""});nn=pt}}function M(){Ht&&(zt||(gn.append(Et,'<div data-tns-role="nav" aria-label="Carousel Pagination"><button data-action="stop" type="button"><span hidden>Stop Animation</span>'+Bt[0]+"</button></div>"),zt=Et.querySelector('[data-tns-role="nav"]')),fn=zt.querySelector("[data-action]"),J())}function T(){for(var t=on;t<on+wt;t++)o(Mt[t],{"aria-hidden":"false"}),"gallery"===yt&&(Mt[t].style.marginLeft=Jt*(t-on)+"px",Mt[t].classList.remove(Rt.normal),Mt[t].classList.add(Rt.in));Pt&&(o(ft,{tabindex:"0"}),(on===sn&&!Gt||jt)&&(ut.disabled=!0)),Ot&&o(vt[0],{tabindex:"0","aria-selected":"true"})}function C(){if("carousel"===yt&&(h&&xt.addEventListener(h,_,!1),Kt&&(xt.addEventListener("touchstart",ot,!1),xt.addEventListener("touchmove",lt,!1),xt.addEventListener("touchend",st,!1),xt.addEventListener("touchcancel",st,!1))),Ot)for(var t=0;t<Tt;t++)vt[t].addEventListener("click",$,!1),vt[t].addEventListener("keydown",it,!1);if(Pt&&(ut.addEventListener("click",Y,!1),ft.addEventListener("click",K,!1),ut.addEventListener("keydown",rt,!1),ft.addEventListener("keydown",rt,!1)),Ht&&(fn.addEventListener("click",Z,!1),Pt&&(ut.addEventListener("click",tt,!1),ft.addEventListener("click",tt,!1)),Ot))for(var n=0;n<Tt;n++)vt[n].addEventListener("click",tt,!1);It&&document.addEventListener("keydown",nt,!1),window.addEventListener("resize",dt,!1),window.addEventListener("scroll",ct,!1)}function A(){if(Yt&&gn.isInViewport(xt)){for(var t=[],n=on-1;n<on+wt+1;n++){for(var e=Mt[n].querySelectorAll('[data-tns-role="lazy-img"]'),r=e.length;r--;t.unshift(e[r]));t.unshift()}for(var i=t.length;i--;){var o=t[i];o.classList.contains("loaded")||(o.src=a(o,"data-src"),o.classList.add("loaded"))}}}function N(){if(Ut){for(var t=[],n=on;n<on+wt;n++)for(var e=Mt[n].querySelectorAll("img"),r=e.length;r--;)t.push(e[r]);0===t.length?O():S(t)}}function S(t){for(var n=t.length;n--;)u(t[n])&&t.splice(n,1);0===t.length?O():setTimeout(function(){S(t)},16)}function P(){gn.wrap(xt,Lt),gn.wrap(Lt,Et),y(),x(),"vertical"===bt&&z(),g(),b(),w(),E(),L(),M(),T(),C(),k(),A(),N()}function k(){Tt<=wt?(Ot=Pt=Ht=Gt=jt=!1,on=Zt,zt&&d(zt),Dt&&d(Dt),fn&&d(fn)):(Ot=t.nav,Pt=t.controls,Ht=t.autoplay,Gt=!t.rewind&&t.loop,jt=t.rewind,Ot&&c(zt),Pt&&c(Dt),Ht&&c(fn))}function D(){return(gt%St+Ct)/2}function O(){for(var t,n=[],e=on;e<on+wt;e++)n.push(Mt[e].offsetHeight);t=Math.max.apply(null,n),xt.style.height!==t&&(v&&j(1),xt.style.height=t+"px")}function z(){cn=[0];for(var t,n=Mt[0].getBoundingClientRect().top,e=1;e<tn;e++)t=Mt[e].getBoundingClientRect().top,cn.push(t-n)}function I(){return cn[on+wt]-cn[on]}function F(){Et.style.msScrollSnapPointsX="snapInterval(0%, "+Jt+")"}function H(){var t,n,e,r;on!==ln&&(on>ln?(t=ln,n=Math.min(ln+wt,on),e=Math.max(ln+wt,on),r=on+wt):(t=Math.max(on+wt,ln),n=ln+wt,e=on,r=Math.min(on+wt,ln))),Xt%1!==0&&(t=Math.round(t),n=Math.round(n),e=Math.round(e),r=Math.round(r));for(var i=t;i<n;i++)o(Mt[i],{"aria-hidden":"true"});for(var a=e;a<r;a++)o(Mt[a],{"aria-hidden":"false"})}function W(){if(pt!==nn)if(pt>nn)for(var t=nn;t<pt;t++)l(vt[t],"hidden");else for(var n=pt;n<nn;n++)o(vt[n],{hidden:""});nn=pt}function q(){if(Ot){if(en===-1){for(var n=on;n<Zt;)n+=Tt;n=(n-Zt)%Tt,t.navContainer?rn=n:(rn=Math.floor(n/wt),Gt||Tt%wt===0||on!==ht||(rn+=1))}else rn=en,en=-1;rn!==an&&(o(vt[an],{tabindex:"-1","aria-selected":"false"}),o(vt[rn],{tabindex:"0","aria-selected":"true"}),an=rn)}}function B(){if(Pt&&!Gt)if(on===sn||!jt&&on===ht){var t=on===sn?ut:ft,n=on===sn?ft:ut;et(t,n),t.disabled=!0,o(t,{tabindex:"-1"}),n.disabled=!1,o(n,{tabindex:"0"})}else ut.disabled=!1,ft.disabled=!1}function j(t,n){var e=Ft*t/1e3+"s";n=n||xt,n.style[v]=e,"vertical"===bt&&(Lt.style[v]=e)}function R(t,n){v&&j(t),Cn(n)}function G(){var t=Xt+Nt,n=tn-wt-Xt-1;if(on<t||on>n){V();var e=on-Tt,r=on+Tt;on=e>=t&&e<=n?e:r,R(0)}}function U(t){o(xt,{"aria-busy":"true"}),R(t),h||_()}function _(t){if("gallery"===yt&&Qt.length>0)for(var n=0;n<wt;n++){var e=Qt[n];e.classList.remove(Rt.out),e.classList.add(Rt.normal),e.style.marginLeft=""}(!h||t&&"height"!==t.propertyName)&&(Gt&&"carousel"===yt&&G(),H(),q(),B(),A(),N(),l(xt,"aria-busy"),V())}function V(){ln=on}function X(t){if("true"!==a(xt,"aria-busy")){var n=on,e=on+t*Xt,r=Math.abs(t*Xt);on=Gt?e:Math.max(sn,Math.min(e,ht)),on!==n&&U(r)}}function Y(){X(-1)}function K(){X(jt&&on===ht?-(ht-sn)/Xt:1)}function $(n){if("true"!==a(xt,"aria-busy")){for(var e,r,i=n.target||n.srcElement;gn.indexOf(vt,i)===-1;)i=i.parentNode;e=en=Number(a(i,"data-slide")),on=t.navContainer?e+Zt:e*wt+Zt,on=Gt?on:Math.min(on,ht),r=Math.abs(on-ln),U(r)}}function J(){un=setInterval(function(){X(qt)},Wt),fn.setAttribute("data-action","stop"),fn.innerHTML="<span hidden>Stop Animation</span>"+Bt[1],vn=!0}function Q(){clearInterval(un),fn.setAttribute("data-action","start"),fn.innerHTML="<span hidden>Stop Animation</span>"+Bt[0],vn=!1}function Z(){vn?Q():J()}function tt(){vn&&Q()}function nt(t){switch(t=t||window.event,t.keyCode){case m.LEFT:Y();break;case m.RIGHT:K()}}function et(t,n){"object"==typeof t&&"object"==typeof n&&t===document.activeElement&&(t.blur(),n.focus())}function rt(t){t=t||window.event;var n=t.keyCode,e=document.activeElement;switch(n){case m.LEFT:case m.UP:case m.HOME:case m.PAGEUP:e!==ut&&ut.disabled!==!0&&et(e,ut);break;case m.RIGHT:case m.DOWN:case m.END:case m.PAGEDOWN:e!==ft&&ft.disabled!==!0&&et(e,ft);break;case m.ENTER:case m.SPACE:e===ft?K():Y()}}function it(t){t=t||window.event;var n=t.keyCode,e=document.activeElement,r=a(e,"data-slide");switch(n){case m.LEFT:case m.PAGEUP:r>0&&et(e,e.previousElementSibling);break;case m.UP:case m.HOME:0!==r&&et(e,vt[0]);break;case m.RIGHT:case m.PAGEDOWN:r<pt-1&&et(e,e.nextElementSibling);break;case m.DOWN:case m.END:r<pt-1&&et(e,vt[pt-1]);break;case m.ENTER:case m.SPACE:$(t)}}function at(){R(0,xt.scrollLeft()),V()}function ot(t){var n=t.changedTouches[0];bn=parseInt(n.clientX),wn=parseInt(n.clientY);var e="horizontal"===bt?[12,-13]:[17,-8];pn=Number(xt.style[p].slice(e[0],e[1]))}function lt(t){var n=t.changedTouches[0];if(hn=parseInt(n.clientX)-bn,mn=parseInt(n.clientY)-wn,r(e(mn,hn),15)===bt){yn=!0,t.preventDefault();var i="horizontal"===bt?hn:mn;R(0,pn+i)}}function st(t){var n=t.changedTouches[0];if(hn=parseInt(n.clientX)-bn,mn=parseInt(n.clientY)-wn,yn){yn=!1,t.preventDefault();var e;if("horizontal"===bt)e=-(pn+hn)/Jt,e=hn>0?Math.floor(e):Math.ceil(e);else{var r=-(pn+mn);if(r<=0)e=sn;else if(r>=cn[cn.length-1])e=ht;else{var i=0;do i++,e=mn<0?i+1:i;while(i<tn&&r>=Math.round(cn[i+1]))}}on=Math.max(sn,Math.min(e,ht));var a="horizontal"===bt?-on*Jt:-cn[on];!St||Gt||At||on!==ht||(a=-tn*Jt+gt+Ct),R(1,a),h||_()}}function dt(){clearTimeout(mt),mt=setTimeout(function(){var t=Mn();gt!==t&&(gt=t,y(),"vertical"===bt&&z(),k(),St&&!At||Tn(),W(),navigator.msMaxTouchPoints&&F(),"carousel"===yt&&(R(0),_(),V()))},100)}function ct(){dn||window.requestAnimationFrame(function(){A(),dn=!1}),dn=!0}if(t=gn.extend({container:document.querySelector(".slider"),mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,slideByPage:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,nav:!0,navContainer:!1,arrowKeys:!1,speed:250,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],animate:{in:"tns-fadeIn",out:"tns-fadeOut",normal:"tns-normal"},loop:!0,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,rewind:!1},t||{}),"object"!=typeof t.container||null===t.container)return{init:function(){},destory:function(){}};var ut,ft,vt,pt,ht,mt,gt,yt=t.mode,bt=t.axis,wt=t.items,xt=t.container,Et=document.createElement("div"),Lt=document.createElement("div"),Mt=xt.children,Tt=Mt.length,Ct=t.gutter,At="vertical"!==yt&&t.edgePadding,Nt=At?1:0,St=t.fixedWidth,Pt=t.controls,kt=t.controlsText,Dt=!!t.controlsContainer&&t.controlsContainer,Ot=t.nav,zt=!!t.navContainer&&t.navContainer,It=t.arrowKeys,Ft=v?t.speed:0,Ht=t.autoplay,Wt=t.autoplayTimeout,qt="forward"===t.autoplayDirection?1:-1,Bt=t.autoplayText,jt=t.rewind,Rt=t.animate,Gt=!t.rewind&&t.loop,Ut="gallery"===yt||t.autoHeight,_t=!St&&t.responsive,Vt=t.slideByPage,Xt=f(),Yt=t.lazyload,Kt=t.touch,$t=xt.id||n(),Jt=St||0,Qt=[],Zt="gallery"===yt?Tt:Gt?Math.ceil(1.5*Tt):At?1:0,tn="gallery"===yt?Tt+Zt:Tt+2*Zt,nn=Tt,en=-1,rn=0,an=0,on="gallery"===yt?0:Zt,ln=on,sn=Nt,dn=!1;if("carousel"===yt&&"vertical"===bt)var cn;if(Ht)var un,fn,vn=!1;if(Kt)var pn,hn,mn,yn,bn=0,wn=0;Rt.in=Rt.in||"",Rt.out=Rt.out||"",Rt.normal=Rt.normal||"";var xn=function(){return St?function(){return Math.max(1,Math.min(Tt,Math.floor(gt/St)))}:function(){var n=t.items,e="object"==typeof _t&&Object.keys(_t);if(e)for(var r=0;r<e.length;r++)gt>=e[r]&&(n=_t[e[r]]);return Math.max(1,Math.min(Tt,n))}}(),En=function(){return navigator.appVersion.indexOf("MSIE 8")>0?function(){return Math.round((gt+Ct)/wt)}:function(){return(gt+Ct)/wt}}(),Ln=function(){return t.navContainer?function(){return Tt}:function(){return Math.ceil(Tt/wt)}}(),Mn=function(){return St||!At||"vertical"===bt?function(){return Et.clientWidth}:function(){return Et.clientWidth-2*(At+Ct)}}();P();var Tn=function(){return"horizontal"!==bt?function(){Lt.style.height=I()+"px"}:St?At?function(){Lt.style.cssText="margin: 0px "+D()+"px"}:void 0:function(){xt.style.width=(Jt+1)*tn+"px";for(var t=tn;t--;)Mt[t].style.width=Jt+"px","gallery"===yt&&t>on&&t<on+wt&&(Mt[t].style.marginLeft=Jt*(t-on)+"px")}}(),Cn=function(){return"carousel"===yt?function(t){var n=t?t:"horizontal"===bt?-Jt*on:-cn[on],e="translate3d(",r={x:[p,e,n,"px, 0px, 0px)"],y:[p,e+"0px, ",n,"px, 0px)"],l:["left","",n,"px"],t:["top","",n,"px"]},i="horizontal"===bt?p?"x":"l":p?"y":"t";xt.style[r[i][0]]=r[i][1]+r[i][2]+r[i][3],"vertical"===bt&&(Lt.style.height=I()+"px")}:function(){for(;on>ht;)on-=Tt;for(;on<sn;)on+=Tt;Qt=[],Mt[ln].removeEventListener(h,_,!1),Mt[on].addEventListener(h,_,!1);for(var t=ln,n=ln+wt;t<n;t++){var e=t<tn?t:t-Tt,r=Mt[e];v&&j(1,r),r.classList.remove(Rt.in),r.classList.add(Rt.out),Qt.push(r)}for(var i=0,a=on,o=on+wt;a<o;a++){var l=a<tn?a:a-Tt,s=Mt[l];v&&j(1,s),s.classList.remove(Rt.normal),s.classList.add(Rt.in),i>0&&(s.style.marginLeft=i*Jt+"px"),i++}}}();return{destory:function(){if(gn.unwrap(Et),gn.unwrap(Lt),Et=Lt=null,l(xt,["id","style","data-tns-role","data-tns-features"]),Gt)for(var n=Zt;n--;)Mt[0].remove(),Mt[Mt.length-1].remove();l(Mt,["id","style","aria-hidden"]),$t=Tt=null,Pt&&(t.controlsContainer?(l(Dt,["aria-label"]),l(Dt.children,["aria-controls","tabindex"]),s(Dt)):(Dt.remove(),Dt=ut=ft=null)),Ot&&(t.navContainer?(l(zt,["aria-label"]),l(vt,["aria-selected","aria-controls","tabindex"]),s(zt)):(zt.remove(),zt=null),vt=null),Ht&&(t.navContainer||null===zt?s(fn):(zt.remove(),zt=null)),s(xt),It&&document.removeEventListener("keydown",nt,!1),window.removeEventListener("resize",dt,!1),window.removeEventListener("scroll",ct,!1)},hasAttr:i,getAttr:a,setAttrs:o,removeAttrs:l,removeEvents:s,getSlideId:n,toDegree:e,getPanDirection:r,hideElement:d,showElement:c,mode:yt,axis:bt,gutter:Ct,edgePadding:At,fixedWidth:St,controls:Pt,nav:Ot,rewind:jt,loop:Gt,autoHeight:Ut,slideBy:Xt,lazyload:Yt,touch:Kt,speed:Ft,items:xn(),cloneCount:Zt,navCountVisible:function(){return pt},index:function(){return on},slideWidth:function(){return Jt},container:xt,slideItems:Mt,slideCount:Tt,controlsContainer:function(){return Dt},prevButton:function(){return ut},nextButton:function(){return ft},navContainer:function(){return zt},navItems:function(){return vt}}}function n(){return window.tnsNumber=window.tnsNumber?window.tnsNumber++:1,"tns"+window.tnsNumber}function e(t,n){return Math.atan2(t,n)*(180/Math.PI)}function r(t,n){return Math.abs(90-Math.abs(t))>=90-n?"horizontal":Math.abs(90-Math.abs(t))<=n&&"vertical"}function i(t,n){return t.hasAttribute(n)}function a(t,n){return t.getAttribute(n)}function o(t,n){if(t=gn.isNodeList(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(n))for(var e=t.length;e--;)for(var r in n)t[e].setAttribute(r,n[r])}function l(t,n){t=gn.isNodeList(t)||t instanceof Array?t:[t],n=n instanceof Array?n:[n];for(var e=n.length,r=t.length;r--;)for(var i=e;i--;)t[r].removeAttribute(n[i])}function s(t){var n=t.cloneNode(!0),e=t.parentNode;e.insertBefore(n,t),t.remove(),t=null}function d(t){i(t,"hidden")||o(t,{hidden:""})}function c(t){i(t,"hidden")&&l(t,"hidden")}function u(t){return"boolean"==typeof t.complete?t.complete:"number"==typeof t.naturalWidth?0!==t.naturalWidth:void 0}function f(){var t,n=document.createElement("fakeelement"),e={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in e)if(void 0!==n.style[t])return e[t];return!1}var v=gn.getSupportedProp(["transitionDuration","WebkitTransitionDuration","MozTransitionDuration","OTransitionDuration"]),p=gn.getSupportedProp(["transform","WebkitTransform","MozTransform","OTransform"]),h=f(),m={ENTER:13,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40};return t}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map
