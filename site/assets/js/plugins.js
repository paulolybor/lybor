// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

/*!
 * Fotorama 4.6.4 | https://fotorama.io/license/
 */
fotoramaVersion="4.6.4",function(a,b,c,d,e){"use strict";function f(a){var b="bez_"+d.makeArray(arguments).join("_").replace(".","p");if("function"!=typeof d.easing[b]){var c=function(a,b){var c=[null,null],d=[null,null],e=[null,null],f=function(f,g){return e[g]=3*a[g],d[g]=3*(b[g]-a[g])-e[g],c[g]=1-e[g]-d[g],f*(e[g]+f*(d[g]+f*c[g]))},g=function(a){return e[0]+a*(2*d[0]+3*c[0]*a)},h=function(a){for(var b,c=a,d=0;++d<14&&(b=f(c,0)-a,!(Math.abs(b)<.001));)c-=b/g(c);return c};return function(a){return f(h(a),1)}};d.easing[b]=function(b,d,e,f,g){return f*c([a[0],a[1]],[a[2],a[3]])(d/g)+e}}return b}function g(){}function h(a,b,c){return Math.max(isNaN(b)?-1/0:b,Math.min(isNaN(c)?1/0:c,a))}function i(a){return a.match(/ma/)&&a.match(/-?\d+(?!d)/g)[a.match(/3d/)?12:4]}function j(a){return Ic?+i(a.css("transform")):+a.css("left").replace("px","")}function k(a){var b={};return Ic?b.transform="translate3d("+a+"px,0,0)":b.left=a,b}function l(a){return{"transition-duration":a+"ms"}}function m(a,b){return isNaN(a)?b:a}function n(a,b){return m(+String(a).replace(b||"px",""))}function o(a){return/%$/.test(a)?n(a,"%"):e}function p(a,b){return m(o(a)/100*b,n(a))}function q(a){return(!isNaN(n(a))||!isNaN(n(a,"%")))&&a}function r(a,b,c,d){return(a-(d||0))*(b+(c||0))}function s(a,b,c,d){return-Math.round(a/(b+(c||0))-(d||0))}function t(a){var b=a.data();if(!b.tEnd){var c=a[0],d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",msTransition:"MSTransitionEnd",transition:"transitionend"};T(c,d[uc.prefixed("transition")],function(a){b.tProp&&a.propertyName.match(b.tProp)&&b.onEndFn()}),b.tEnd=!0}}function u(a,b,c,d){var e,f=a.data();f&&(f.onEndFn=function(){e||(e=!0,clearTimeout(f.tT),c())},f.tProp=b,clearTimeout(f.tT),f.tT=setTimeout(function(){f.onEndFn()},1.5*d),t(a))}function v(a,b){if(a.length){var c=a.data();Ic?(a.css(l(0)),c.onEndFn=g,clearTimeout(c.tT)):a.stop();var d=w(b,function(){return j(a)});return a.css(k(d)),d}}function w(){for(var a,b=0,c=arguments.length;c>b&&(a=b?arguments[b]():arguments[b],"number"!=typeof a);b++);return a}function x(a,b){return Math.round(a+(b-a)/1.5)}function y(){return y.p=y.p||("https:"===c.protocol?"https://":"https://"),y.p}function z(a){var c=b.createElement("a");return c.href=a,c}function A(a,b){if("string"!=typeof a)return a;a=z(a);var c,d;if(a.host.match(/youtube\.com/)&&a.search){if(c=a.search.split("v=")[1]){var e=c.indexOf("&");-1!==e&&(c=c.substring(0,e)),d="youtube"}}else a.host.match(/youtube\.com|youtu\.be/)?(c=a.pathname.replace(/^\/(embed\/|v\/)?/,"").replace(/\/.*/,""),d="youtube"):a.host.match(/vimeo\.com/)&&(d="vimeo",c=a.pathname.replace(/^\/(video\/)?/,"").replace(/\/.*/,""));return c&&d||!b||(c=a.href,d="custom"),c?{id:c,type:d,s:a.search.replace(/^\?/,""),p:y()}:!1}function B(a,b,c){var e,f,g=a.video;return"youtube"===g.type?(f=y()+"img.youtube.com/vi/"+g.id+"/default.jpg",e=f.replace(/\/default.jpg$/,"/hqdefault.jpg"),a.thumbsReady=!0):"vimeo"===g.type?d.ajax({url:y()+"vimeo.com/api/v2/video/"+g.id+".json",dataType:"jsonp",success:function(d){a.thumbsReady=!0,C(b,{img:d[0].thumbnail_large,thumb:d[0].thumbnail_small},a.i,c)}}):a.thumbsReady=!0,{img:e,thumb:f}}function C(a,b,c,e){for(var f=0,g=a.length;g>f;f++){var h=a[f];if(h.i===c&&h.thumbsReady){var i={videoReady:!0};i[Xc]=i[Zc]=i[Yc]=!1,e.splice(f,1,d.extend({},h,i,b));break}}}function D(a){function b(a,b,e){var f=a.children("img").eq(0),g=a.attr("href"),h=a.attr("src"),i=f.attr("src"),j=b.video,k=e?A(g,j===!0):!1;k?g=!1:k=j,c(a,f,d.extend(b,{video:k,img:b.img||g||h||i,thumb:b.thumb||i||h||g}))}function c(a,b,c){var e=c.thumb&&c.img!==c.thumb,f=n(c.width||a.attr("width")),g=n(c.height||a.attr("height"));d.extend(c,{width:f,height:g,thumbratio:S(c.thumbratio||n(c.thumbwidth||b&&b.attr("width")||e||f)/n(c.thumbheight||b&&b.attr("height")||e||g))})}var e=[];return a.children().each(function(){var a=d(this),f=R(d.extend(a.data(),{id:a.attr("id")}));if(a.is("a, img"))b(a,f,!0);else{if(a.is(":empty"))return;c(a,null,d.extend(f,{html:this,_html:a.html()}))}e.push(f)}),e}function E(a){return 0===a.offsetWidth&&0===a.offsetHeight}function F(a){return!d.contains(b.documentElement,a)}function G(a,b,c,d){return G.i||(G.i=1,G.ii=[!0]),d=d||G.i,"undefined"==typeof G.ii[d]&&(G.ii[d]=!0),a()?b():G.ii[d]&&setTimeout(function(){G.ii[d]&&G(a,b,c,d)},c||100),G.i++}function H(a){c.replace(c.protocol+"//"+c.host+c.pathname.replace(/^\/?/,"/")+c.search+"#"+a)}function I(a,b,c,d){var e=a.data(),f=e.measures;if(f&&(!e.l||e.l.W!==f.width||e.l.H!==f.height||e.l.r!==f.ratio||e.l.w!==b.w||e.l.h!==b.h||e.l.m!==c||e.l.p!==d)){var g=f.width,i=f.height,j=b.w/b.h,k=f.ratio>=j,l="scaledown"===c,m="contain"===c,n="cover"===c,o=$(d);k&&(l||m)||!k&&n?(g=h(b.w,0,l?g:1/0),i=g/f.ratio):(k&&n||!k&&(l||m))&&(i=h(b.h,0,l?i:1/0),g=i*f.ratio),a.css({width:g,height:i,left:p(o.x,b.w-g),top:p(o.y,b.h-i)}),e.l={W:f.width,H:f.height,r:f.ratio,w:b.w,h:b.h,m:c,p:d}}return!0}function J(a,b){var c=a[0];c.styleSheet?c.styleSheet.cssText=b:a.html(b)}function K(a,b,c){return b===c?!1:b>=a?"left":a>=c?"right":"left right"}function L(a,b,c,d){if(!c)return!1;if(!isNaN(a))return a-(d?0:1);for(var e,f=0,g=b.length;g>f;f++){var h=b[f];if(h.id===a){e=f;break}}return e}function M(a,b,c){c=c||{},a.each(function(){var a,e=d(this),f=e.data();f.clickOn||(f.clickOn=!0,d.extend(cb(e,{onStart:function(b){a=b,(c.onStart||g).call(this,b)},onMove:c.onMove||g,onTouchEnd:c.onTouchEnd||g,onEnd:function(c){c.moved||b.call(this,a)}}),{noMove:!0}))})}function N(a,b){return'<div class="'+a+'">'+(b||"")+"</div>"}function O(a){for(var b=a.length;b;){var c=Math.floor(Math.random()*b--),d=a[b];a[b]=a[c],a[c]=d}return a}function P(a){return"[object Array]"==Object.prototype.toString.call(a)&&d.map(a,function(a){return d.extend({},a)})}function Q(a,b,c){a.scrollLeft(b||0).scrollTop(c||0)}function R(a){if(a){var b={};return d.each(a,function(a,c){b[a.toLowerCase()]=c}),b}}function S(a){if(a){var b=+a;return isNaN(b)?(b=a.split("/"),+b[0]/+b[1]||e):b}}function T(a,b,c,d){b&&(a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent("on"+b,c))}function U(a){return!!a.getAttribute("disabled")}function V(a){return{tabindex:-1*a+"",disabled:a}}function W(a,b){T(a,"keyup",function(c){U(a)||13==c.keyCode&&b.call(a,c)})}function X(a,b){T(a,"focus",a.onfocusin=function(c){b.call(a,c)},!0)}function Y(a,b){a.preventDefault?a.preventDefault():a.returnValue=!1,b&&a.stopPropagation&&a.stopPropagation()}function Z(a){return a?">":"<"}function $(a){return a=(a+"").split(/\s+/),{x:q(a[0])||bd,y:q(a[1])||bd}}function _(a,b){var c=a.data(),e=Math.round(b.pos),f=function(){c.sliding=!1,(b.onEnd||g)()};"undefined"!=typeof b.overPos&&b.overPos!==b.pos&&(e=b.overPos,f=function(){_(a,d.extend({},b,{overPos:b.pos,time:Math.max(Qc,b.time/2)}))});var h=d.extend(k(e),b.width&&{width:b.width});c.sliding=!0,Ic?(a.css(d.extend(l(b.time),h)),b.time>10?u(a,"transform",f,b.time):f()):a.stop().animate(h,b.time,_c,f)}function ab(a,b,c,e,f,h){var i="undefined"!=typeof h;if(i||(f.push(arguments),Array.prototype.push.call(arguments,f.length),!(f.length>1))){a=a||d(a),b=b||d(b);var j=a[0],k=b[0],l="crossfade"===e.method,m=function(){if(!m.done){m.done=!0;var a=(i||f.shift())&&f.shift();a&&ab.apply(this,a),(e.onEnd||g)(!!a)}},n=e.time/(h||1);c.removeClass(Rb+" "+Qb),a.stop().addClass(Rb),b.stop().addClass(Qb),l&&k&&a.fadeTo(0,0),a.fadeTo(l?n:0,1,l&&m),b.fadeTo(n,0,m),j&&l||k||m()}}function bb(a){var b=(a.touches||[])[0]||a;a._x=b.pageX,a._y=b.clientY,a._now=d.now()}function cb(a,c){function e(a){return m=d(a.target),u.checked=p=q=s=!1,k||u.flow||a.touches&&a.touches.length>1||a.which>1||ed&&ed.type!==a.type&&gd||(p=c.select&&m.is(c.select,t))?p:(o="touchstart"===a.type,q=m.is("a, a *",t),n=u.control,r=u.noMove||u.noSwipe||n?16:u.snap?0:4,bb(a),l=ed=a,fd=a.type.replace(/down|start/,"move").replace(/Down/,"Move"),(c.onStart||g).call(t,a,{control:n,$target:m}),k=u.flow=!0,void((!o||u.go)&&Y(a)))}function f(a){if(a.touches&&a.touches.length>1||Nc&&!a.isPrimary||fd!==a.type||!k)return k&&h(),void(c.onTouchEnd||g)();bb(a);var b=Math.abs(a._x-l._x),d=Math.abs(a._y-l._y),e=b-d,f=(u.go||u.x||e>=0)&&!u.noSwipe,i=0>e;o&&!u.checked?(k=f)&&Y(a):(Y(a),(c.onMove||g).call(t,a,{touch:o})),!s&&Math.sqrt(Math.pow(b,2)+Math.pow(d,2))>r&&(s=!0),u.checked=u.checked||f||i}function h(a){(c.onTouchEnd||g)();var b=k;u.control=k=!1,b&&(u.flow=!1),!b||q&&!u.checked||(a&&Y(a),gd=!0,clearTimeout(hd),hd=setTimeout(function(){gd=!1},1e3),(c.onEnd||g).call(t,{moved:s,$target:m,control:n,touch:o,startEvent:l,aborted:!a||"MSPointerCancel"===a.type}))}function i(){u.flow||setTimeout(function(){u.flow=!0},10)}function j(){u.flow&&setTimeout(function(){u.flow=!1},Pc)}var k,l,m,n,o,p,q,r,s,t=a[0],u={};return Nc?(T(t,"MSPointerDown",e),T(b,"MSPointerMove",f),T(b,"MSPointerCancel",h),T(b,"MSPointerUp",h)):(T(t,"touchstart",e),T(t,"touchmove",f),T(t,"touchend",h),T(b,"touchstart",i),T(b,"touchend",j),T(b,"touchcancel",j),Ec.on("scroll",j),a.on("mousedown",e),Fc.on("mousemove",f).on("mouseup",h)),a.on("click","a",function(a){u.checked&&Y(a)}),u}function db(a,b){function c(c,d){A=!0,j=l=c._x,q=c._now,p=[[q,j]],m=n=D.noMove||d?0:v(a,(b.getPos||g)()),(b.onStart||g).call(B,c)}function e(a,b){s=D.min,t=D.max,u=D.snap,w=a.altKey,A=z=!1,y=b.control,y||C.sliding||c(a)}function f(d,e){D.noSwipe||(A||c(d),l=d._x,p.push([d._now,l]),n=m-(j-l),o=K(n,s,t),s>=n?n=x(n,s):n>=t&&(n=x(n,t)),D.noMove||(a.css(k(n)),z||(z=!0,e.touch||Nc||a.addClass(ec)),(b.onMove||g).call(B,d,{pos:n,edge:o})))}function i(e){if(!D.noSwipe||!e.moved){A||c(e.startEvent,!0),e.touch||Nc||a.removeClass(ec),r=d.now();for(var f,i,j,k,o,q,v,x,y,z=r-Pc,C=null,E=Qc,F=b.friction,G=p.length-1;G>=0;G--){if(f=p[G][0],i=Math.abs(f-z),null===C||j>i)C=f,k=p[G][1];else if(C===z||i>j)break;j=i}v=h(n,s,t);var H=k-l,I=H>=0,J=r-C,K=J>Pc,L=!K&&n!==m&&v===n;u&&(v=h(Math[L?I?"floor":"ceil":"round"](n/u)*u,s,t),s=t=v),L&&(u||v===n)&&(y=-(H/J),E*=h(Math.abs(y),b.timeLow,b.timeHigh),o=Math.round(n+y*E/F),u||(v=o),(!I&&o>t||I&&s>o)&&(q=I?s:t,x=o-q,u||(v=q),x=h(v+.03*x,q-50,q+50),E=Math.abs((n-x)/(y/F)))),E*=w?10:1,(b.onEnd||g).call(B,d.extend(e,{moved:e.moved||K&&u,pos:n,newPos:v,overPos:x,time:E}))}}var j,l,m,n,o,p,q,r,s,t,u,w,y,z,A,B=a[0],C=a.data(),D={};return D=d.extend(cb(b.$wrap,d.extend({},b,{onStart:e,onMove:f,onEnd:i})),D)}function eb(a,b){var c,e,f,h=a[0],i={prevent:{}};return T(h,Oc,function(a){var h=a.wheelDeltaY||-1*a.deltaY||0,j=a.wheelDeltaX||-1*a.deltaX||0,k=Math.abs(j)&&!Math.abs(h),l=Z(0>j),m=e===l,n=d.now(),o=Pc>n-f;e=l,f=n,k&&i.ok&&(!i.prevent[l]||c)&&(Y(a,!0),c&&m&&o||(b.shift&&(c=!0,clearTimeout(i.t),i.t=setTimeout(function(){c=!1},Rc)),(b.onEnd||g)(a,b.shift?l:j)))}),i}function fb(){d.each(d.Fotorama.instances,function(a,b){b.index=a})}function gb(a){d.Fotorama.instances.push(a),fb()}function hb(a){d.Fotorama.instances.splice(a.index,1),fb()}var ib="fotorama",jb="fullscreen",kb=ib+"__wrap",lb=kb+"--css2",mb=kb+"--css3",nb=kb+"--video",ob=kb+"--fade",pb=kb+"--slide",qb=kb+"--no-controls",rb=kb+"--no-shadows",sb=kb+"--pan-y",tb=kb+"--rtl",ub=kb+"--only-active",vb=kb+"--no-captions",wb=kb+"--toggle-arrows",xb=ib+"__stage",yb=xb+"__frame",zb=yb+"--video",Ab=xb+"__shaft",Bb=ib+"__grab",Cb=ib+"__pointer",Db=ib+"__arr",Eb=Db+"--disabled",Fb=Db+"--prev",Gb=Db+"--next",Hb=ib+"__nav",Ib=Hb+"-wrap",Jb=Hb+"__shaft",Kb=Hb+"--dots",Lb=Hb+"--thumbs",Mb=Hb+"__frame",Nb=Mb+"--dot",Ob=Mb+"--thumb",Pb=ib+"__fade",Qb=Pb+"-front",Rb=Pb+"-rear",Sb=ib+"__shadow",Tb=Sb+"s",Ub=Tb+"--left",Vb=Tb+"--right",Wb=ib+"__active",Xb=ib+"__select",Yb=ib+"--hidden",Zb=ib+"--fullscreen",$b=ib+"__fullscreen-icon",_b=ib+"__error",ac=ib+"__loading",bc=ib+"__loaded",cc=bc+"--full",dc=bc+"--img",ec=ib+"__grabbing",fc=ib+"__img",gc=fc+"--full",hc=ib+"__dot",ic=ib+"__thumb",jc=ic+"-border",kc=ib+"__html",lc=ib+"__video",mc=lc+"-play",nc=lc+"-close",oc=ib+"__caption",pc=ib+"__caption__wrap",qc=ib+"__spinner",rc='" tabindex="0" role="button',sc=d&&d.fn.jquery.split(".");if(!sc||sc[0]<1||1==sc[0]&&sc[1]<8)throw"Fotorama requires jQuery 1.8 or later and will not run without it.";var tc={},uc=function(a,b,c){function d(a){r.cssText=a}function e(a,b){return typeof a===b}function f(a,b){return!!~(""+a).indexOf(b)}function g(a,b){for(var d in a){var e=a[d];if(!f(e,"-")&&r[e]!==c)return"pfx"==b?e:!0}return!1}function h(a,b,d){for(var f in a){var g=b[a[f]];if(g!==c)return d===!1?a[f]:e(g,"function")?g.bind(d||b):g}return!1}function i(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),f=(a+" "+u.join(d+" ")+d).split(" ");return e(b,"string")||e(b,"undefined")?g(f,b):(f=(a+" "+v.join(d+" ")+d).split(" "),h(f,b,c))}var j,k,l,m="2.6.2",n={},o=b.documentElement,p="modernizr",q=b.createElement(p),r=q.style,s=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),t="Webkit Moz O ms",u=t.split(" "),v=t.toLowerCase().split(" "),w={},x=[],y=x.slice,z=function(a,c,d,e){var f,g,h,i,j=b.createElement("div"),k=b.body,l=k||b.createElement("body");if(parseInt(d,10))for(;d--;)h=b.createElement("div"),h.id=e?e[d]:p+(d+1),j.appendChild(h);return f=["&#173;",'<style id="s',p,'">',a,"</style>"].join(""),j.id=p,(k?j:l).innerHTML+=f,l.appendChild(j),k||(l.style.background="",l.style.overflow="hidden",i=o.style.overflow,o.style.overflow="hidden",o.appendChild(l)),g=c(j,a),k?j.parentNode.removeChild(j):(l.parentNode.removeChild(l),o.style.overflow=i),!!g},A={}.hasOwnProperty;l=e(A,"undefined")||e(A.call,"undefined")?function(a,b){return b in a&&e(a.constructor.prototype[b],"undefined")}:function(a,b){return A.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=y.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(y.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(y.call(arguments)))};return d}),w.csstransforms3d=function(){var a=!!i("perspective");return a};for(var B in w)l(w,B)&&(k=B.toLowerCase(),n[k]=w[B](),x.push((n[k]?"":"no-")+k));return n.addTest=function(a,b){if("object"==typeof a)for(var d in a)l(a,d)&&n.addTest(d,a[d]);else{if(a=a.toLowerCase(),n[a]!==c)return n;b="function"==typeof b?b():b,"undefined"!=typeof enableClasses&&enableClasses&&(o.className+=" "+(b?"":"no-")+a),n[a]=b}return n},d(""),q=j=null,n._version=m,n._prefixes=s,n._domPrefixes=v,n._cssomPrefixes=u,n.testProp=function(a){return g([a])},n.testAllProps=i,n.testStyles=z,n.prefixed=function(a,b,c){return b?i(a,b,c):i(a,"pfx")},n}(a,b),vc={ok:!1,is:function(){return!1},request:function(){},cancel:function(){},event:"",prefix:""},wc="webkit moz o ms khtml".split(" ");if("undefined"!=typeof b.cancelFullScreen)vc.ok=!0;else for(var xc=0,yc=wc.length;yc>xc;xc++)if(vc.prefix=wc[xc],"undefined"!=typeof b[vc.prefix+"CancelFullScreen"]){vc.ok=!0;break}vc.ok&&(vc.event=vc.prefix+"fullscreenchange",vc.is=function(){switch(this.prefix){case"":return b.fullScreen;case"webkit":return b.webkitIsFullScreen;default:return b[this.prefix+"FullScreen"]}},vc.request=function(a){return""===this.prefix?a.requestFullScreen():a[this.prefix+"RequestFullScreen"]()},vc.cancel=function(){return""===this.prefix?b.cancelFullScreen():b[this.prefix+"CancelFullScreen"]()});var zc,Ac={lines:12,length:5,width:2,radius:7,corners:1,rotate:15,color:"rgba(128, 128, 128, .75)",hwaccel:!0},Bc={top:"auto",left:"auto",className:""};!function(a,b){zc=b()}(this,function(){function a(a,c){var d,e=b.createElement(a||"div");for(d in c)e[d]=c[d];return e}function c(a){for(var b=1,c=arguments.length;c>b;b++)a.appendChild(arguments[b]);return a}function d(a,b,c,d){var e=["opacity",b,~~(100*a),c,d].join("-"),f=.01+c/d*100,g=Math.max(1-(1-a)/b*(100-f),a),h=m.substring(0,m.indexOf("Animation")).toLowerCase(),i=h&&"-"+h+"-"||"";return o[e]||(p.insertRule("@"+i+"keyframes "+e+"{0%{opacity:"+g+"}"+f+"%{opacity:"+a+"}"+(f+.01)+"%{opacity:1}"+(f+b)%100+"%{opacity:"+a+"}100%{opacity:"+g+"}}",p.cssRules.length),o[e]=1),e}function f(a,b){var c,d,f=a.style;for(b=b.charAt(0).toUpperCase()+b.slice(1),d=0;d<n.length;d++)if(c=n[d]+b,f[c]!==e)return c;return f[b]!==e?b:void 0}function g(a,b){for(var c in b)a.style[f(a,c)||c]=b[c];return a}function h(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)a[d]===e&&(a[d]=c[d])}return a}function i(a){for(var b={x:a.offsetLeft,y:a.offsetTop};a=a.offsetParent;)b.x+=a.offsetLeft,b.y+=a.offsetTop;return b}function j(a,b){return"string"==typeof a?a:a[b%a.length]}function k(a){return"undefined"==typeof this?new k(a):void(this.opts=h(a||{},k.defaults,q))}function l(){function b(b,c){return a("<"+b+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',c)}p.addRule(".spin-vml","behavior:url(#default#VML)"),k.prototype.lines=function(a,d){function e(){return g(b("group",{coordsize:k+" "+k,coordorigin:-i+" "+-i}),{width:k,height:k})}function f(a,f,h){c(m,c(g(e(),{rotation:360/d.lines*a+"deg",left:~~f}),c(g(b("roundrect",{arcsize:d.corners}),{width:i,height:d.width,left:d.radius,top:-d.width>>1,filter:h}),b("fill",{color:j(d.color,a),opacity:d.opacity}),b("stroke",{opacity:0}))))}var h,i=d.length+d.width,k=2*i,l=2*-(d.width+d.length)+"px",m=g(e(),{position:"absolute",top:l,left:l});if(d.shadow)for(h=1;h<=d.lines;h++)f(h,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(h=1;h<=d.lines;h++)f(h);return c(a,m)},k.prototype.opacity=function(a,b,c,d){var e=a.firstChild;d=d.shadow&&d.lines||0,e&&b+d<e.childNodes.length&&(e=e.childNodes[b+d],e=e&&e.firstChild,e=e&&e.firstChild,e&&(e.opacity=c))}}var m,n=["webkit","Moz","ms","O"],o={},p=function(){var d=a("style",{type:"text/css"});return c(b.getElementsByTagName("head")[0],d),d.sheet||d.styleSheet}(),q={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"};k.defaults={},h(k.prototype,{spin:function(b){this.stop();var c,d,e=this,f=e.opts,h=e.el=g(a(0,{className:f.className}),{position:f.position,width:0,zIndex:f.zIndex}),j=f.radius+f.length+f.width;if(b&&(b.insertBefore(h,b.firstChild||null),d=i(b),c=i(h),g(h,{left:("auto"==f.left?d.x-c.x+(b.offsetWidth>>1):parseInt(f.left,10)+j)+"px",top:("auto"==f.top?d.y-c.y+(b.offsetHeight>>1):parseInt(f.top,10)+j)+"px"})),h.setAttribute("role","progressbar"),e.lines(h,e.opts),!m){var k,l=0,n=(f.lines-1)*(1-f.direction)/2,o=f.fps,p=o/f.speed,q=(1-f.opacity)/(p*f.trail/100),r=p/f.lines;!function s(){l++;for(var a=0;a<f.lines;a++)k=Math.max(1-(l+(f.lines-a)*r)%p*q,f.opacity),e.opacity(h,a*f.direction+n,k,f);e.timeout=e.el&&setTimeout(s,~~(1e3/o))}()}return e},stop:function(){var a=this.el;return a&&(clearTimeout(this.timeout),a.parentNode&&a.parentNode.removeChild(a),this.el=e),this},lines:function(b,e){function f(b,c){return g(a(),{position:"absolute",width:e.length+e.width+"px",height:e.width+"px",background:b,boxShadow:c,transformOrigin:"left",transform:"rotate("+~~(360/e.lines*i+e.rotate)+"deg) translate("+e.radius+"px,0)",borderRadius:(e.corners*e.width>>1)+"px"})}for(var h,i=0,k=(e.lines-1)*(1-e.direction)/2;i<e.lines;i++)h=g(a(),{position:"absolute",top:1+~(e.width/2)+"px",transform:e.hwaccel?"translate3d(0,0,0)":"",opacity:e.opacity,animation:m&&d(e.opacity,e.trail,k+i*e.direction,e.lines)+" "+1/e.speed+"s linear infinite"}),e.shadow&&c(h,g(f("#000","0 0 4px #000"),{top:"2px"})),c(b,c(h,f(j(e.color,i),"0 0 1px rgba(0,0,0,.1)")));return b},opacity:function(a,b,c){b<a.childNodes.length&&(a.childNodes[b].style.opacity=c)}});var r=g(a("group"),{behavior:"url(#default#VML)"});return!f(r,"transform")&&r.adj?l():m=f(r,"animation"),k});var Cc,Dc,Ec=d(a),Fc=d(b),Gc="quirks"===c.hash.replace("#",""),Hc=uc.csstransforms3d,Ic=Hc&&!Gc,Jc=Hc||"CSS1Compat"===b.compatMode,Kc=vc.ok,Lc=navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i),Mc=!Ic||Lc,Nc=navigator.msPointerEnabled,Oc="onwheel"in b.createElement("div")?"wheel":b.onmousewheel!==e?"mousewheel":"DOMMouseScroll",Pc=250,Qc=300,Rc=1400,Sc=5e3,Tc=2,Uc=64,Vc=500,Wc=333,Xc="$stageFrame",Yc="$navDotFrame",Zc="$navThumbFrame",$c="auto",_c=f([.1,0,.25,1]),ad=99999,bd="50%",cd={width:null,minwidth:null,maxwidth:"100%",height:null,minheight:null,maxheight:null,ratio:null,margin:Tc,glimpse:0,fit:"contain",position:bd,thumbposition:bd,nav:"dots",navposition:"bottom",navwidth:null,thumbwidth:Uc,thumbheight:Uc,thumbmargin:Tc,thumbborderwidth:Tc,thumbfit:"cover",allowfullscreen:!1,transition:"slide",clicktransition:null,transitionduration:Qc,captions:!0,hash:!1,startindex:0,loop:!1,autoplay:!1,stopautoplayontouch:!0,keyboard:!1,arrows:!0,click:!0,swipe:!0,trackpad:!1,enableifsingleframe:!1,controlsonstart:!0,shuffle:!1,direction:"ltr",shadows:!0,spinner:null},dd={left:!0,right:!0,down:!1,up:!1,space:!1,home:!1,end:!1};G.stop=function(a){G.ii[a]=!1};var ed,fd,gd,hd;jQuery.Fotorama=function(a,e){function f(){d.each(yd,function(a,b){if(!b.i){b.i=me++;var c=A(b.video,!0);if(c){var d={};b.video=c,b.img||b.thumb?b.thumbsReady=!0:d=B(b,yd,ie),C(yd,{img:d.img,thumb:d.thumb},b.i,ie)}}})}function g(a){return Zd[a]||ie.fullScreen}function i(a){var b="keydown."+ib,c=ib+je,d="keydown."+c,f="resize."+c+" orientationchange."+c;a?(Fc.on(d,function(a){var b,c;Cd&&27===a.keyCode?(b=!0,md(Cd,!0,!0)):(ie.fullScreen||e.keyboard&&!ie.index)&&(27===a.keyCode?(b=!0,ie.cancelFullScreen()):a.shiftKey&&32===a.keyCode&&g("space")||37===a.keyCode&&g("left")||38===a.keyCode&&g("up")?c="<":32===a.keyCode&&g("space")||39===a.keyCode&&g("right")||40===a.keyCode&&g("down")?c=">":36===a.keyCode&&g("home")?c="<<":35===a.keyCode&&g("end")&&(c=">>")),(b||c)&&Y(a),c&&ie.show({index:c,slow:a.altKey,user:!0})}),ie.index||Fc.off(b).on(b,"textarea, input, select",function(a){!Dc.hasClass(jb)&&a.stopPropagation()}),Ec.on(f,ie.resize)):(Fc.off(d),Ec.off(f))}function j(b){b!==j.f&&(b?(a.html("").addClass(ib+" "+ke).append(qe).before(oe).before(pe),gb(ie)):(qe.detach(),oe.detach(),pe.detach(),a.html(ne.urtext).removeClass(ke),hb(ie)),i(b),j.f=b)}function m(){yd=ie.data=yd||P(e.data)||D(a),zd=ie.size=yd.length,!xd.ok&&e.shuffle&&O(yd),f(),Je=y(Je),zd&&j(!0)}function o(){var a=2>zd&&!e.enableifsingleframe||Cd;Me.noMove=a||Sd,Me.noSwipe=a||!e.swipe,!Wd&&se.toggleClass(Bb,!e.click&&!Me.noMove&&!Me.noSwipe),Nc&&qe.toggleClass(sb,!Me.noSwipe)}function t(a){a===!0&&(a=""),e.autoplay=Math.max(+a||Sc,1.5*Vd)}function u(){function a(a,c){b[a?"add":"remove"].push(c)}ie.options=e=R(e),Sd="crossfade"===e.transition||"dissolve"===e.transition,Md=e.loop&&(zd>2||Sd&&(!Wd||"slide"!==Wd)),Vd=+e.transitionduration||Qc,Yd="rtl"===e.direction,Zd=d.extend({},e.keyboard&&dd,e.keyboard);var b={add:[],remove:[]};zd>1||e.enableifsingleframe?(Nd=e.nav,Pd="top"===e.navposition,b.remove.push(Xb),we.toggle(!!e.arrows)):(Nd=!1,we.hide()),Rb(),Bd=new zc(d.extend(Ac,e.spinner,Bc,{direction:Yd?-1:1})),Gc(),Hc(),e.autoplay&&t(e.autoplay),Td=n(e.thumbwidth)||Uc,Ud=n(e.thumbheight)||Uc,Ne.ok=Pe.ok=e.trackpad&&!Mc,o(),ed(e,[Le]),Od="thumbs"===Nd,Od?(lc(zd,"navThumb"),Ad=Be,he=Zc,J(oe,d.Fotorama.jst.style({w:Td,h:Ud,b:e.thumbborderwidth,m:e.thumbmargin,s:je,q:!Jc})),ye.addClass(Lb).removeClass(Kb)):"dots"===Nd?(lc(zd,"navDot"),Ad=Ae,he=Yc,ye.addClass(Kb).removeClass(Lb)):(Nd=!1,ye.removeClass(Lb+" "+Kb)),Nd&&(Pd?xe.insertBefore(re):xe.insertAfter(re),wc.nav=!1,wc(Ad,ze,"nav")),Qd=e.allowfullscreen,Qd?(De.prependTo(re),Rd=Kc&&"native"===Qd):(De.detach(),Rd=!1),a(Sd,ob),a(!Sd,pb),a(!e.captions,vb),a(Yd,tb),a("always"!==e.arrows,wb),Xd=e.shadows&&!Mc,a(!Xd,rb),qe.addClass(b.add.join(" ")).removeClass(b.remove.join(" ")),Ke=d.extend({},e)}function x(a){return 0>a?(zd+a%zd)%zd:a>=zd?a%zd:a}function y(a){return h(a,0,zd-1)}function z(a){return Md?x(a):y(a)}function E(a){return a>0||Md?a-1:!1}function U(a){return zd-1>a||Md?a+1:!1}function $(){Me.min=Md?-1/0:-r(zd-1,Le.w,e.margin,Fd),Me.max=Md?1/0:-r(0,Le.w,e.margin,Fd),Me.snap=Le.w+e.margin}function bb(){Oe.min=Math.min(0,Le.nw-ze.width()),Oe.max=0,ze.toggleClass(Bb,!(Oe.noMove=Oe.min===Oe.max))}function cb(a,b,c){if("number"==typeof a){a=new Array(a);var e=!0}return d.each(a,function(a,d){if(e&&(d=a),"number"==typeof d){var f=yd[x(d)];if(f){var g="$"+b+"Frame",h=f[g];c.call(this,a,d,f,h,g,h&&h.data())}}})}function fb(a,b,c,d){(!$d||"*"===$d&&d===Ld)&&(a=q(e.width)||q(a)||Vc,b=q(e.height)||q(b)||Wc,ie.resize({width:a,ratio:e.ratio||c||a/b},0,d!==Ld&&"*"))}function Pb(a,b,c,f,g,h){cb(a,b,function(a,i,j,k,l,m){function n(a){var b=x(i);fd(a,{index:b,src:w,frame:yd[b]})}function o(){t.remove(),d.Fotorama.cache[w]="error",j.html&&"stage"===b||!y||y===w?(!w||j.html||r?"stage"===b&&(k.trigger("f:load").removeClass(ac+" "+_b).addClass(bc),n("load"),fb()):(k.trigger("f:error").removeClass(ac).addClass(_b),n("error")),m.state="error",!(zd>1&&yd[i]===j)||j.html||j.deleted||j.video||r||(j.deleted=!0,ie.splice(i,1))):(j[v]=w=y,Pb([i],b,c,f,g,!0))}function p(){d.Fotorama.measures[w]=u.measures=d.Fotorama.measures[w]||{width:s.width,height:s.height,ratio:s.width/s.height},fb(u.measures.width,u.measures.height,u.measures.ratio,i),t.off("load error").addClass(fc+(r?" "+gc:"")).prependTo(k),I(t,(d.isFunction(c)?c():c)||Le,f||j.fit||e.fit,g||j.position||e.position),d.Fotorama.cache[w]=m.state="loaded",setTimeout(function(){k.trigger("f:load").removeClass(ac+" "+_b).addClass(bc+" "+(r?cc:dc)),"stage"===b?n("load"):(j.thumbratio===$c||!j.thumbratio&&e.thumbratio===$c)&&(j.thumbratio=u.measures.ratio,vd())},0)}function q(){var a=10;G(function(){return!fe||!a--&&!Mc},function(){p()})}if(k){var r=ie.fullScreen&&j.full&&j.full!==j.img&&!m.$full&&"stage"===b;if(!m.$img||h||r){var s=new Image,t=d(s),u=t.data();m[r?"$full":"$img"]=t;var v="stage"===b?r?"full":"img":"thumb",w=j[v],y=r?null:j["stage"===b?"thumb":"img"];if("navThumb"===b&&(k=m.$wrap),!w)return void o();d.Fotorama.cache[w]?!function z(){"error"===d.Fotorama.cache[w]?o():"loaded"===d.Fotorama.cache[w]?setTimeout(q,0):setTimeout(z,100)}():(d.Fotorama.cache[w]="*",t.on("load",q).on("error",o)),m.state="",s.src=w}}})}function Qb(a){Ie.append(Bd.spin().el).appendTo(a)}function Rb(){Ie.detach(),Bd&&Bd.stop()}function Sb(){var a=Dd[Xc];a&&!a.data().state&&(Qb(a),a.on("f:load f:error",function(){a.off("f:load f:error"),Rb()}))}function ec(a){W(a,sd),X(a,function(){setTimeout(function(){Q(ye)},0),Rc({time:Vd,guessIndex:d(this).data().eq,minMax:Oe})})}function lc(a,b){cb(a,b,function(a,c,e,f,g,h){if(!f){f=e[g]=qe[g].clone(),h=f.data(),h.data=e;var i=f[0];"stage"===b?(e.html&&d('<div class="'+kc+'"></div>').append(e._html?d(e.html).removeAttr("id").html(e._html):e.html).appendTo(f),e.caption&&d(N(oc,N(pc,e.caption))).appendTo(f),e.video&&f.addClass(zb).append(Fe.clone()),X(i,function(){setTimeout(function(){Q(re)},0),pd({index:h.eq,user:!0})}),te=te.add(f)):"navDot"===b?(ec(i),Ae=Ae.add(f)):"navThumb"===b&&(ec(i),h.$wrap=f.children(":first"),Be=Be.add(f),e.video&&h.$wrap.append(Fe.clone()))}})}function sc(a,b,c,d){return a&&a.length&&I(a,b,c,d)}function tc(a){cb(a,"stage",function(a,b,c,f,g,h){if(f){var i=x(b),j=c.fit||e.fit,k=c.position||e.position;h.eq=i,Re[Xc][i]=f.css(d.extend({left:Sd?0:r(b,Le.w,e.margin,Fd)},Sd&&l(0))),F(f[0])&&(f.appendTo(se),md(c.$video)),sc(h.$img,Le,j,k),sc(h.$full,Le,j,k)}})}function uc(a,b){if("thumbs"===Nd&&!isNaN(a)){var c=-a,f=-a+Le.nw;Be.each(function(){var a=d(this),g=a.data(),h=g.eq,i=function(){return{h:Ud,w:g.w}},j=i(),k=yd[h]||{},l=k.thumbfit||e.thumbfit,m=k.thumbposition||e.thumbposition;j.w=g.w,g.l+g.w<c||g.l>f||sc(g.$img,j,l,m)||b&&Pb([h],"navThumb",i,l,m)})}}function wc(a,b,c){if(!wc[c]){var f="nav"===c&&Od,g=0;b.append(a.filter(function(){for(var a,b=d(this),c=b.data(),e=0,f=yd.length;f>e;e++)if(c.data===yd[e]){a=!0,c.eq=e;break}return a||b.remove()&&!1}).sort(function(a,b){return d(a).data().eq-d(b).data().eq}).each(function(){if(f){var a=d(this),b=a.data(),c=Math.round(Ud*b.data.thumbratio)||Td;b.l=g,b.w=c,a.css({width:c}),g+=c+e.thumbmargin}})),wc[c]=!0}}function xc(a){return a-Se>Le.w/3}function yc(a){return!(Md||Je+a&&Je-zd+a||Cd)}function Gc(){var a=yc(0),b=yc(1);ue.toggleClass(Eb,a).attr(V(a)),ve.toggleClass(Eb,b).attr(V(b))}function Hc(){Ne.ok&&(Ne.prevent={"<":yc(0),">":yc(1)})}function Lc(a){var b,c,d=a.data();return Od?(b=d.l,c=d.w):(b=a.position().left,c=a.width()),{c:b+c/2,min:-b+10*e.thumbmargin,max:-b+Le.w-c-10*e.thumbmargin}}function Oc(a){var b=Dd[he].data();_(Ce,{time:1.2*a,pos:b.l,width:b.w-2*e.thumbborderwidth})}function Rc(a){var b=yd[a.guessIndex][he];if(b){var c=Oe.min!==Oe.max,d=a.minMax||c&&Lc(Dd[he]),e=c&&(a.keep&&Rc.l?Rc.l:h((a.coo||Le.nw/2)-Lc(b).c,d.min,d.max)),f=c&&h(e,Oe.min,Oe.max),g=1.1*a.time;_(ze,{time:g,pos:f||0,onEnd:function(){uc(f,!0)}}),ld(ye,K(f,Oe.min,Oe.max)),Rc.l=e}}function Tc(){_c(he),Qe[he].push(Dd[he].addClass(Wb))}function _c(a){for(var b=Qe[a];b.length;)b.shift().removeClass(Wb)}function bd(a){var b=Re[a];d.each(Ed,function(a,c){delete b[x(c)]}),d.each(b,function(a,c){delete b[a],c.detach()})}function cd(a){Fd=Gd=Je;var b=Dd[Xc];b&&(_c(Xc),Qe[Xc].push(b.addClass(Wb)),a||ie.show.onEnd(!0),v(se,0,!0),bd(Xc),tc(Ed),$(),bb())}function ed(a,b){a&&d.each(b,function(b,c){c&&d.extend(c,{width:a.width||c.width,height:a.height,minwidth:a.minwidth,maxwidth:a.maxwidth,minheight:a.minheight,maxheight:a.maxheight,ratio:S(a.ratio)})})}function fd(b,c){a.trigger(ib+":"+b,[ie,c])}function gd(){clearTimeout(hd.t),fe=1,e.stopautoplayontouch?ie.stopAutoplay():ce=!0}function hd(){fe&&(e.stopautoplayontouch||(id(),jd()),hd.t=setTimeout(function(){fe=0},Qc+Pc))}function id(){ce=!(!Cd&&!de)}function jd(){if(clearTimeout(jd.t),G.stop(jd.w),!e.autoplay||ce)return void(ie.autoplay&&(ie.autoplay=!1,fd("stopautoplay")));ie.autoplay||(ie.autoplay=!0,fd("startautoplay"));var a=Je,b=Dd[Xc].data();jd.w=G(function(){return b.state||a!==Je},function(){jd.t=setTimeout(function(){if(!ce&&a===Je){var b=Kd,c=yd[b][Xc].data();jd.w=G(function(){return c.state||b!==Kd},function(){ce||b!==Kd||ie.show(Md?Z(!Yd):Kd)})}},e.autoplay)})}function kd(){ie.fullScreen&&(ie.fullScreen=!1,Kc&&vc.cancel(le),Dc.removeClass(jb),Cc.removeClass(jb),a.removeClass(Zb).insertAfter(pe),Le=d.extend({},ee),md(Cd,!0,!0),rd("x",!1),ie.resize(),Pb(Ed,"stage"),Q(Ec,ae,_d),fd("fullscreenexit"))}function ld(a,b){Xd&&(a.removeClass(Ub+" "+Vb),b&&!Cd&&a.addClass(b.replace(/^|\s/g," "+Tb+"--")))}function md(a,b,c){b&&(qe.removeClass(nb),Cd=!1,o()),a&&a!==Cd&&(a.remove(),fd("unloadvideo")),c&&(id(),jd())}function nd(a){qe.toggleClass(qb,a)}function od(a){if(!Me.flow){var b=a?a.pageX:od.x,c=b&&!yc(xc(b))&&e.click;od.p!==c&&re.toggleClass(Cb,c)&&(od.p=c,od.x=b)}}function pd(a){clearTimeout(pd.t),e.clicktransition&&e.clicktransition!==e.transition?setTimeout(function(){var b=e.transition;ie.setOptions({transition:e.clicktransition}),Wd=b,pd.t=setTimeout(function(){ie.show(a)},10)},0):ie.show(a)}function qd(a,b){var c=a.target,f=d(c);f.hasClass(mc)?ie.playVideo():c===Ee?ie.toggleFullScreen():Cd?c===He&&md(Cd,!0,!0):b?nd():e.click&&pd({index:a.shiftKey||Z(xc(a._x)),slow:a.altKey,user:!0})}function rd(a,b){Me[a]=Oe[a]=b}function sd(a){var b=d(this).data().eq;pd({index:b,slow:a.altKey,user:!0,coo:a._x-ye.offset().left})}function td(a){pd({index:we.index(this)?">":"<",slow:a.altKey,user:!0})}function ud(a){X(a,function(){setTimeout(function(){Q(re)},0),nd(!1)})}function vd(){if(m(),u(),!vd.i){vd.i=!0;var a=e.startindex;(a||e.hash&&c.hash)&&(Ld=L(a||c.hash.replace(/^#/,""),yd,0===ie.index||a,a)),Je=Fd=Gd=Hd=Ld=z(Ld)||0}if(zd){if(wd())return;Cd&&md(Cd,!0),Ed=[],bd(Xc),vd.ok=!0,ie.show({index:Je,time:0}),ie.resize()}else ie.destroy()}function wd(){return!wd.f===Yd?(wd.f=Yd,Je=zd-1-Je,ie.reverse(),!0):void 0}function xd(){xd.ok||(xd.ok=!0,fd("ready"))}Cc=d("html"),Dc=d("body");var yd,zd,Ad,Bd,Cd,Dd,Ed,Fd,Gd,Hd,Id,Jd,Kd,Ld,Md,Nd,Od,Pd,Qd,Rd,Sd,Td,Ud,Vd,Wd,Xd,Yd,Zd,$d,_d,ae,be,ce,de,ee,fe,ge,he,ie=this,je=d.now(),ke=ib+je,le=a[0],me=1,ne=a.data(),oe=d("<style></style>"),pe=d(N(Yb)),qe=d(N(kb)),re=d(N(xb)).appendTo(qe),se=(re[0],d(N(Ab)).appendTo(re)),te=d(),ue=d(N(Db+" "+Fb+rc)),ve=d(N(Db+" "+Gb+rc)),we=ue.add(ve).appendTo(re),xe=d(N(Ib)),ye=d(N(Hb)).appendTo(xe),ze=d(N(Jb)).appendTo(ye),Ae=d(),Be=d(),Ce=(se.data(),ze.data(),d(N(jc)).appendTo(ze)),De=d(N($b+rc)),Ee=De[0],Fe=d(N(mc)),Ge=d(N(nc)).appendTo(re),He=Ge[0],Ie=d(N(qc)),Je=!1,Ke={},Le={},Me={},Ne={},Oe={},Pe={},Qe={},Re={},Se=0,Te=[];
qe[Xc]=d(N(yb)),qe[Zc]=d(N(Mb+" "+Ob+rc,N(ic))),qe[Yc]=d(N(Mb+" "+Nb+rc,N(hc))),Qe[Xc]=[],Qe[Zc]=[],Qe[Yc]=[],Re[Xc]={},qe.addClass(Ic?mb:lb).toggleClass(qb,!e.controlsonstart),ne.fotorama=this,ie.startAutoplay=function(a){return ie.autoplay?this:(ce=de=!1,t(a||e.autoplay),jd(),this)},ie.stopAutoplay=function(){return ie.autoplay&&(ce=de=!0,jd()),this},ie.show=function(a){var b;"object"!=typeof a?(b=a,a={}):b=a.index,b=">"===b?Gd+1:"<"===b?Gd-1:"<<"===b?0:">>"===b?zd-1:b,b=isNaN(b)?L(b,yd,!0):b,b="undefined"==typeof b?Je||0:b,ie.activeIndex=Je=z(b),Id=E(Je),Jd=U(Je),Kd=x(Je+(Yd?-1:1)),Ed=[Je,Id,Jd],Gd=Md?b:Je;var c=Math.abs(Hd-Gd),d=w(a.time,function(){return Math.min(Vd*(1+(c-1)/12),2*Vd)}),f=a.overPos;a.slow&&(d*=10);var g=Dd;ie.activeFrame=Dd=yd[Je];var i=g===Dd&&!a.user;md(Cd,Dd.i!==yd[x(Fd)].i),lc(Ed,"stage"),tc(Mc?[Gd]:[Gd,E(Gd),U(Gd)]),rd("go",!0),i||fd("show",{user:a.user,time:d}),ce=!0;var j=ie.show.onEnd=function(b){if(!j.ok){if(j.ok=!0,b||cd(!0),i||fd("showend",{user:a.user}),!b&&Wd&&Wd!==e.transition)return ie.setOptions({transition:Wd}),void(Wd=!1);Sb(),Pb(Ed,"stage"),rd("go",!1),Hc(),od(),id(),jd()}};if(Sd){var k=Dd[Xc],l=Je!==Hd?yd[Hd][Xc]:null;ab(k,l,te,{time:d,method:e.transition,onEnd:j},Te)}else _(se,{pos:-r(Gd,Le.w,e.margin,Fd),overPos:f,time:d,onEnd:j});if(Gc(),Nd){Tc();var m=y(Je+h(Gd-Hd,-1,1));Rc({time:d,coo:m!==Je&&a.coo,guessIndex:"undefined"!=typeof a.coo?m:Je,keep:i}),Od&&Oc(d)}return be="undefined"!=typeof Hd&&Hd!==Je,Hd=Je,e.hash&&be&&!ie.eq&&H(Dd.id||Je+1),this},ie.requestFullScreen=function(){return Qd&&!ie.fullScreen&&(_d=Ec.scrollTop(),ae=Ec.scrollLeft(),Q(Ec),rd("x",!0),ee=d.extend({},Le),a.addClass(Zb).appendTo(Dc.addClass(jb)),Cc.addClass(jb),md(Cd,!0,!0),ie.fullScreen=!0,Rd&&vc.request(le),ie.resize(),Pb(Ed,"stage"),Sb(),fd("fullscreenenter")),this},ie.cancelFullScreen=function(){return Rd&&vc.is()?vc.cancel(b):kd(),this},ie.toggleFullScreen=function(){return ie[(ie.fullScreen?"cancel":"request")+"FullScreen"]()},T(b,vc.event,function(){!yd||vc.is()||Cd||kd()}),ie.resize=function(a){if(!yd)return this;var b=arguments[1]||0,c=arguments[2];ed(ie.fullScreen?{width:"100%",maxwidth:null,minwidth:null,height:"100%",maxheight:null,minheight:null}:R(a),[Le,c||ie.fullScreen||e]);var d=Le.width,f=Le.height,g=Le.ratio,i=Ec.height()-(Nd?ye.height():0);return q(d)&&(qe.addClass(ub).css({width:d,minWidth:Le.minwidth||0,maxWidth:Le.maxwidth||ad}),d=Le.W=Le.w=qe.width(),Le.nw=Nd&&p(e.navwidth,d)||d,e.glimpse&&(Le.w-=Math.round(2*(p(e.glimpse,d)||0))),se.css({width:Le.w,marginLeft:(Le.W-Le.w)/2}),f=p(f,i),f=f||g&&d/g,f&&(d=Math.round(d),f=Le.h=Math.round(h(f,p(Le.minheight,i),p(Le.maxheight,i))),re.stop().animate({width:d,height:f},b,function(){qe.removeClass(ub)}),cd(),Nd&&(ye.stop().animate({width:Le.nw},b),Rc({guessIndex:Je,time:b,keep:!0}),Od&&wc.nav&&Oc(b)),$d=c||!0,xd())),Se=re.offset().left,this},ie.setOptions=function(a){return d.extend(e,a),vd(),this},ie.shuffle=function(){return yd&&O(yd)&&vd(),this},ie.destroy=function(){return ie.cancelFullScreen(),ie.stopAutoplay(),yd=ie.data=null,j(),Ed=[],bd(Xc),vd.ok=!1,this},ie.playVideo=function(){var a=Dd,b=a.video,c=Je;return"object"==typeof b&&a.videoReady&&(Rd&&ie.fullScreen&&ie.cancelFullScreen(),G(function(){return!vc.is()||c!==Je},function(){c===Je&&(a.$video=a.$video||d(d.Fotorama.jst.video(b)),a.$video.appendTo(a[Xc]),qe.addClass(nb),Cd=a.$video,o(),we.blur(),De.blur(),fd("loadvideo"))})),this},ie.stopVideo=function(){return md(Cd,!0,!0),this},re.on("mousemove",od),Me=db(se,{onStart:gd,onMove:function(a,b){ld(re,b.edge)},onTouchEnd:hd,onEnd:function(a){ld(re);var b=(Nc&&!ge||a.touch)&&e.arrows&&"always"!==e.arrows;if(a.moved||b&&a.pos!==a.newPos&&!a.control){var c=s(a.newPos,Le.w,e.margin,Fd);ie.show({index:c,time:Sd?Vd:a.time,overPos:a.overPos,user:!0})}else a.aborted||a.control||qd(a.startEvent,b)},timeLow:1,timeHigh:1,friction:2,select:"."+Xb+", ."+Xb+" *",$wrap:re}),Oe=db(ze,{onStart:gd,onMove:function(a,b){ld(ye,b.edge)},onTouchEnd:hd,onEnd:function(a){function b(){Rc.l=a.newPos,id(),jd(),uc(a.newPos,!0)}if(a.moved)a.pos!==a.newPos?(ce=!0,_(ze,{time:a.time,pos:a.newPos,overPos:a.overPos,onEnd:b}),uc(a.newPos),Xd&&ld(ye,K(a.newPos,Oe.min,Oe.max))):b();else{var c=a.$target.closest("."+Mb,ze)[0];c&&sd.call(c,a.startEvent)}},timeLow:.5,timeHigh:2,friction:5,$wrap:ye}),Ne=eb(re,{shift:!0,onEnd:function(a,b){gd(),hd(),ie.show({index:b,slow:a.altKey})}}),Pe=eb(ye,{onEnd:function(a,b){gd(),hd();var c=v(ze)+.25*b;ze.css(k(h(c,Oe.min,Oe.max))),Xd&&ld(ye,K(c,Oe.min,Oe.max)),Pe.prevent={"<":c>=Oe.max,">":c<=Oe.min},clearTimeout(Pe.t),Pe.t=setTimeout(function(){Rc.l=c,uc(c,!0)},Pc),uc(c)}}),qe.hover(function(){setTimeout(function(){fe||nd(!(ge=!0))},0)},function(){ge&&nd(!(ge=!1))}),M(we,function(a){Y(a),td.call(this,a)},{onStart:function(){gd(),Me.control=!0},onTouchEnd:hd}),we.each(function(){W(this,function(a){td.call(this,a)}),ud(this)}),W(Ee,ie.toggleFullScreen),ud(Ee),d.each("load push pop shift unshift reverse sort splice".split(" "),function(a,b){ie[b]=function(){return yd=yd||[],"load"!==b?Array.prototype[b].apply(yd,arguments):arguments[0]&&"object"==typeof arguments[0]&&arguments[0].length&&(yd=P(arguments[0])),vd(),ie}}),vd()},d.fn.fotorama=function(b){return this.each(function(){var c=this,e=d(this),f=e.data(),g=f.fotorama;g?g.setOptions(b,!0):G(function(){return!E(c)},function(){f.urtext=e.html(),new d.Fotorama(e,d.extend({},cd,a.fotoramaDefaults,b,f))})})},d.Fotorama.instances=[],d.Fotorama.cache={},d.Fotorama.measures={},d=d||{},d.Fotorama=d.Fotorama||{},d.Fotorama.jst=d.Fotorama.jst||{},d.Fotorama.jst.style=function(a){{var b,c="";tc.escape}return c+=".fotorama"+(null==(b=a.s)?"":b)+" .fotorama__nav--thumbs .fotorama__nav__frame{\npadding:"+(null==(b=a.m)?"":b)+"px;\nheight:"+(null==(b=a.h)?"":b)+"px}\n.fotorama"+(null==(b=a.s)?"":b)+" .fotorama__thumb-border{\nheight:"+(null==(b=a.h-a.b*(a.q?0:2))?"":b)+"px;\nborder-width:"+(null==(b=a.b)?"":b)+"px;\nmargin-top:"+(null==(b=a.m)?"":b)+"px}"},d.Fotorama.jst.video=function(a){function b(){c+=d.call(arguments,"")}var c="",d=(tc.escape,Array.prototype.join);return c+='<div class="fotorama__video"><iframe src="',b(("youtube"==a.type?a.p+"youtube.com/embed/"+a.id+"?autoplay=1":"vimeo"==a.type?a.p+"player.vimeo.com/video/"+a.id+"?autoplay=1&badge=0":a.id)+(a.s&&"custom"!=a.type?"&"+a.s:"")),c+='" frameborder="0" allowfullscreen></iframe></div>\n'},d(function(){d("."+ib+':not([data-auto="false"])').fotorama()})}(window,document,location,"undefined"!=typeof jQuery&&jQuery);

/*
 * Chosen v1.0.0 | (c) 2011-2013 by Harvest | MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md
 */
!function(){var a,AbstractChosen,Chosen,SelectParser,b,c={}.hasOwnProperty,d=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a};SelectParser=function(){function SelectParser(){this.options_index=0,this.parsed=[]}return SelectParser.prototype.add_node=function(a){return"OPTGROUP"===a.nodeName.toUpperCase()?this.add_group(a):this.add_option(a)},SelectParser.prototype.add_group=function(a){var b,c,d,e,f,g;for(b=this.parsed.length,this.parsed.push({array_index:b,group:!0,label:this.escapeExpression(a.label),children:0,disabled:a.disabled}),f=a.childNodes,g=[],d=0,e=f.length;e>d;d++)c=f[d],g.push(this.add_option(c,b,a.disabled));return g},SelectParser.prototype.add_option=function(a,b,c){return"OPTION"===a.nodeName.toUpperCase()?(""!==a.text?(null!=b&&(this.parsed[b].children+=1),this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,value:a.value,text:a.text,html:a.innerHTML,selected:a.selected,disabled:c===!0?c:a.disabled,group_array_index:b,classes:a.className,style:a.style.cssText})):this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,empty:!0}),this.options_index+=1):void 0},SelectParser.prototype.escapeExpression=function(a){var b,c;return null==a||a===!1?"":/[\&\<\>\"\'\`]/.test(a)?(b={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},c=/&(?!\w+;)|[\<\>\"\'\`]/g,a.replace(c,function(a){return b[a]||"&amp;"})):a},SelectParser}(),SelectParser.select_to_array=function(a){var b,c,d,e,f;for(c=new SelectParser,f=a.childNodes,d=0,e=f.length;e>d;d++)b=f[d],c.add_node(b);return c.parsed},AbstractChosen=function(){function AbstractChosen(a,b){this.form_field=a,this.options=null!=b?b:{},AbstractChosen.browser_is_supported()&&(this.is_multiple=this.form_field.multiple,this.set_default_text(),this.set_default_values(),this.setup(),this.set_up_html(),this.register_observers())}return AbstractChosen.prototype.set_default_values=function(){var a=this;return this.click_test_action=function(b){return a.test_active_click(b)},this.activate_action=function(b){return a.activate_field(b)},this.active_field=!1,this.mouse_on_container=!1,this.results_showing=!1,this.result_highlighted=null,this.result_single_selected=null,this.allow_single_deselect=null!=this.options.allow_single_deselect&&null!=this.form_field.options[0]&&""===this.form_field.options[0].text?this.options.allow_single_deselect:!1,this.disable_search_threshold=this.options.disable_search_threshold||0,this.disable_search=this.options.disable_search||!1,this.enable_split_word_search=null!=this.options.enable_split_word_search?this.options.enable_split_word_search:!0,this.group_search=null!=this.options.group_search?this.options.group_search:!0,this.search_contains=this.options.search_contains||!1,this.single_backstroke_delete=null!=this.options.single_backstroke_delete?this.options.single_backstroke_delete:!0,this.max_selected_options=this.options.max_selected_options||1/0,this.inherit_select_classes=this.options.inherit_select_classes||!1,this.display_selected_options=null!=this.options.display_selected_options?this.options.display_selected_options:!0,this.display_disabled_options=null!=this.options.display_disabled_options?this.options.display_disabled_options:!0},AbstractChosen.prototype.set_default_text=function(){return this.default_text=this.form_field.getAttribute("data-placeholder")?this.form_field.getAttribute("data-placeholder"):this.is_multiple?this.options.placeholder_text_multiple||this.options.placeholder_text||AbstractChosen.default_multiple_text:this.options.placeholder_text_single||this.options.placeholder_text||AbstractChosen.default_single_text,this.results_none_found=this.form_field.getAttribute("data-no_results_text")||this.options.no_results_text||AbstractChosen.default_no_result_text},AbstractChosen.prototype.mouse_enter=function(){return this.mouse_on_container=!0},AbstractChosen.prototype.mouse_leave=function(){return this.mouse_on_container=!1},AbstractChosen.prototype.input_focus=function(){var a=this;if(this.is_multiple){if(!this.active_field)return setTimeout(function(){return a.container_mousedown()},50)}else if(!this.active_field)return this.activate_field()},AbstractChosen.prototype.input_blur=function(){var a=this;return this.mouse_on_container?void 0:(this.active_field=!1,setTimeout(function(){return a.blur_test()},100))},AbstractChosen.prototype.results_option_build=function(a){var b,c,d,e,f;for(b="",f=this.results_data,d=0,e=f.length;e>d;d++)c=f[d],b+=c.group?this.result_add_group(c):this.result_add_option(c),(null!=a?a.first:void 0)&&(c.selected&&this.is_multiple?this.choice_build(c):c.selected&&!this.is_multiple&&this.single_set_selected_text(c.text));return b},AbstractChosen.prototype.result_add_option=function(a){var b,c;return a.search_match?this.include_option_in_results(a)?(b=[],a.disabled||a.selected&&this.is_multiple||b.push("active-result"),!a.disabled||a.selected&&this.is_multiple||b.push("disabled-result"),a.selected&&b.push("result-selected"),null!=a.group_array_index&&b.push("group-option"),""!==a.classes&&b.push(a.classes),c=""!==a.style.cssText?' style="'+a.style+'"':"",'<li class="'+b.join(" ")+'"'+c+' data-option-array-index="'+a.array_index+'">'+a.search_text+"</li>"):"":""},AbstractChosen.prototype.result_add_group=function(a){return a.search_match||a.group_match?a.active_options>0?'<li class="group-result">'+a.search_text+"</li>":"":""},AbstractChosen.prototype.results_update_field=function(){return this.set_default_text(),this.is_multiple||this.results_reset_cleanup(),this.result_clear_highlight(),this.result_single_selected=null,this.results_build(),this.results_showing?this.winnow_results():void 0},AbstractChosen.prototype.results_toggle=function(){return this.results_showing?this.results_hide():this.results_show()},AbstractChosen.prototype.results_search=function(){return this.results_showing?this.winnow_results():this.results_show()},AbstractChosen.prototype.winnow_results=function(){var a,b,c,d,e,f,g,h,i,j,k,l,m;for(this.no_results_clear(),e=0,g=this.get_search_text(),a=g.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),d=this.search_contains?"":"^",c=new RegExp(d+a,"i"),j=new RegExp(a,"i"),m=this.results_data,k=0,l=m.length;l>k;k++)b=m[k],b.search_match=!1,f=null,this.include_option_in_results(b)&&(b.group&&(b.group_match=!1,b.active_options=0),null!=b.group_array_index&&this.results_data[b.group_array_index]&&(f=this.results_data[b.group_array_index],0===f.active_options&&f.search_match&&(e+=1),f.active_options+=1),(!b.group||this.group_search)&&(b.search_text=b.group?b.label:b.html,b.search_match=this.search_string_match(b.search_text,c),b.search_match&&!b.group&&(e+=1),b.search_match?(g.length&&(h=b.search_text.search(j),i=b.search_text.substr(0,h+g.length)+"</em>"+b.search_text.substr(h+g.length),b.search_text=i.substr(0,h)+"<em>"+i.substr(h)),null!=f&&(f.group_match=!0)):null!=b.group_array_index&&this.results_data[b.group_array_index].search_match&&(b.search_match=!0)));return this.result_clear_highlight(),1>e&&g.length?(this.update_results_content(""),this.no_results(g)):(this.update_results_content(this.results_option_build()),this.winnow_results_set_highlight())},AbstractChosen.prototype.search_string_match=function(a,b){var c,d,e,f;if(b.test(a))return!0;if(this.enable_split_word_search&&(a.indexOf(" ")>=0||0===a.indexOf("["))&&(d=a.replace(/\[|\]/g,"").split(" "),d.length))for(e=0,f=d.length;f>e;e++)if(c=d[e],b.test(c))return!0},AbstractChosen.prototype.choices_count=function(){var a,b,c,d;if(null!=this.selected_option_count)return this.selected_option_count;for(this.selected_option_count=0,d=this.form_field.options,b=0,c=d.length;c>b;b++)a=d[b],a.selected&&(this.selected_option_count+=1);return this.selected_option_count},AbstractChosen.prototype.choices_click=function(a){return a.preventDefault(),this.results_showing||this.is_disabled?void 0:this.results_show()},AbstractChosen.prototype.keyup_checker=function(a){var b,c;switch(b=null!=(c=a.which)?c:a.keyCode,this.search_field_scale(),b){case 8:if(this.is_multiple&&this.backstroke_length<1&&this.choices_count()>0)return this.keydown_backstroke();if(!this.pending_backstroke)return this.result_clear_highlight(),this.results_search();break;case 13:if(a.preventDefault(),this.results_showing)return this.result_select(a);break;case 27:return this.results_showing&&this.results_hide(),!0;case 9:case 38:case 40:case 16:case 91:case 17:break;default:return this.results_search()}},AbstractChosen.prototype.container_width=function(){return null!=this.options.width?this.options.width:""+this.form_field.offsetWidth+"px"},AbstractChosen.prototype.include_option_in_results=function(a){return this.is_multiple&&!this.display_selected_options&&a.selected?!1:!this.display_disabled_options&&a.disabled?!1:a.empty?!1:!0},AbstractChosen.browser_is_supported=function(){return"Microsoft Internet Explorer"===window.navigator.appName?document.documentMode>=8:/iP(od|hone)/i.test(window.navigator.userAgent)?!1:/Android/i.test(window.navigator.userAgent)&&/Mobile/i.test(window.navigator.userAgent)?!1:!0},AbstractChosen.default_multiple_text="Select Some Options",AbstractChosen.default_single_text="Select an Option",AbstractChosen.default_no_result_text="No results match",AbstractChosen}(),a=jQuery,a.fn.extend({chosen:function(b){return AbstractChosen.browser_is_supported()?this.each(function(){var c,d;c=a(this),d=c.data("chosen"),"destroy"===b&&d?d.destroy():d||c.data("chosen",new Chosen(this,b))}):this}}),Chosen=function(c){function Chosen(){return b=Chosen.__super__.constructor.apply(this,arguments)}return d(Chosen,c),Chosen.prototype.setup=function(){return this.form_field_jq=a(this.form_field),this.current_selectedIndex=this.form_field.selectedIndex,this.is_rtl=this.form_field_jq.hasClass("chosen-rtl")},Chosen.prototype.set_up_html=function(){var b,c;return b=["chosen-container"],b.push("chosen-container-"+(this.is_multiple?"multi":"single")),this.inherit_select_classes&&this.form_field.className&&b.push(this.form_field.className),this.is_rtl&&b.push("chosen-rtl"),c={"class":b.join(" "),style:"width: "+this.container_width()+";",title:this.form_field.title},this.form_field.id.length&&(c.id=this.form_field.id.replace(/[^\w]/g,"_")+"_chosen"),this.container=a("<div />",c),this.is_multiple?this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="'+this.default_text+'" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>'):this.container.html('<a class="chosen-single chosen-default" tabindex="-1"><span>'+this.default_text+'</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'),this.form_field_jq.hide().after(this.container),this.dropdown=this.container.find("div.chosen-drop").first(),this.search_field=this.container.find("input").first(),this.search_results=this.container.find("ul.chosen-results").first(),this.search_field_scale(),this.search_no_results=this.container.find("li.no-results").first(),this.is_multiple?(this.search_choices=this.container.find("ul.chosen-choices").first(),this.search_container=this.container.find("li.search-field").first()):(this.search_container=this.container.find("div.chosen-search").first(),this.selected_item=this.container.find(".chosen-single").first()),this.results_build(),this.set_tab_index(),this.set_label_behavior(),this.form_field_jq.trigger("chosen:ready",{chosen:this})},Chosen.prototype.register_observers=function(){var a=this;return this.container.bind("mousedown.chosen",function(b){a.container_mousedown(b)}),this.container.bind("mouseup.chosen",function(b){a.container_mouseup(b)}),this.container.bind("mouseenter.chosen",function(b){a.mouse_enter(b)}),this.container.bind("mouseleave.chosen",function(b){a.mouse_leave(b)}),this.search_results.bind("mouseup.chosen",function(b){a.search_results_mouseup(b)}),this.search_results.bind("mouseover.chosen",function(b){a.search_results_mouseover(b)}),this.search_results.bind("mouseout.chosen",function(b){a.search_results_mouseout(b)}),this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen",function(b){a.search_results_mousewheel(b)}),this.form_field_jq.bind("chosen:updated.chosen",function(b){a.results_update_field(b)}),this.form_field_jq.bind("chosen:activate.chosen",function(b){a.activate_field(b)}),this.form_field_jq.bind("chosen:open.chosen",function(b){a.container_mousedown(b)}),this.search_field.bind("blur.chosen",function(b){a.input_blur(b)}),this.search_field.bind("keyup.chosen",function(b){a.keyup_checker(b)}),this.search_field.bind("keydown.chosen",function(b){a.keydown_checker(b)}),this.search_field.bind("focus.chosen",function(b){a.input_focus(b)}),this.is_multiple?this.search_choices.bind("click.chosen",function(b){a.choices_click(b)}):this.container.bind("click.chosen",function(a){a.preventDefault()})},Chosen.prototype.destroy=function(){return a(document).unbind("click.chosen",this.click_test_action),this.search_field[0].tabIndex&&(this.form_field_jq[0].tabIndex=this.search_field[0].tabIndex),this.container.remove(),this.form_field_jq.removeData("chosen"),this.form_field_jq.show()},Chosen.prototype.search_field_disabled=function(){return this.is_disabled=this.form_field_jq[0].disabled,this.is_disabled?(this.container.addClass("chosen-disabled"),this.search_field[0].disabled=!0,this.is_multiple||this.selected_item.unbind("focus.chosen",this.activate_action),this.close_field()):(this.container.removeClass("chosen-disabled"),this.search_field[0].disabled=!1,this.is_multiple?void 0:this.selected_item.bind("focus.chosen",this.activate_action))},Chosen.prototype.container_mousedown=function(b){return this.is_disabled||(b&&"mousedown"===b.type&&!this.results_showing&&b.preventDefault(),null!=b&&a(b.target).hasClass("search-choice-close"))?void 0:(this.active_field?this.is_multiple||!b||a(b.target)[0]!==this.selected_item[0]&&!a(b.target).parents("a.chosen-single").length||(b.preventDefault(),this.results_toggle()):(this.is_multiple&&this.search_field.val(""),a(document).bind("click.chosen",this.click_test_action),this.results_show()),this.activate_field())},Chosen.prototype.container_mouseup=function(a){return"ABBR"!==a.target.nodeName||this.is_disabled?void 0:this.results_reset(a)},Chosen.prototype.search_results_mousewheel=function(a){var b,c,d;return b=-(null!=(c=a.originalEvent)?c.wheelDelta:void 0)||(null!=(d=a.originialEvent)?d.detail:void 0),null!=b?(a.preventDefault(),"DOMMouseScroll"===a.type&&(b=40*b),this.search_results.scrollTop(b+this.search_results.scrollTop())):void 0},Chosen.prototype.blur_test=function(){return!this.active_field&&this.container.hasClass("chosen-container-active")?this.close_field():void 0},Chosen.prototype.close_field=function(){return a(document).unbind("click.chosen",this.click_test_action),this.active_field=!1,this.results_hide(),this.container.removeClass("chosen-container-active"),this.clear_backstroke(),this.show_search_field_default(),this.search_field_scale()},Chosen.prototype.activate_field=function(){return this.container.addClass("chosen-container-active"),this.active_field=!0,this.search_field.val(this.search_field.val()),this.search_field.focus()},Chosen.prototype.test_active_click=function(b){return this.container.is(a(b.target).closest(".chosen-container"))?this.active_field=!0:this.close_field()},Chosen.prototype.results_build=function(){return this.parsing=!0,this.selected_option_count=null,this.results_data=SelectParser.select_to_array(this.form_field),this.is_multiple?this.search_choices.find("li.search-choice").remove():this.is_multiple||(this.single_set_selected_text(),this.disable_search||this.form_field.options.length<=this.disable_search_threshold?(this.search_field[0].readOnly=!0,this.container.addClass("chosen-container-single-nosearch")):(this.search_field[0].readOnly=!1,this.container.removeClass("chosen-container-single-nosearch"))),this.update_results_content(this.results_option_build({first:!0})),this.search_field_disabled(),this.show_search_field_default(),this.search_field_scale(),this.parsing=!1},Chosen.prototype.result_do_highlight=function(a){var b,c,d,e,f;if(a.length){if(this.result_clear_highlight(),this.result_highlight=a,this.result_highlight.addClass("highlighted"),d=parseInt(this.search_results.css("maxHeight"),10),f=this.search_results.scrollTop(),e=d+f,c=this.result_highlight.position().top+this.search_results.scrollTop(),b=c+this.result_highlight.outerHeight(),b>=e)return this.search_results.scrollTop(b-d>0?b-d:0);if(f>c)return this.search_results.scrollTop(c)}},Chosen.prototype.result_clear_highlight=function(){return this.result_highlight&&this.result_highlight.removeClass("highlighted"),this.result_highlight=null},Chosen.prototype.results_show=function(){return this.is_multiple&&this.max_selected_options<=this.choices_count()?(this.form_field_jq.trigger("chosen:maxselected",{chosen:this}),!1):(this.container.addClass("chosen-with-drop"),this.form_field_jq.trigger("chosen:showing_dropdown",{chosen:this}),this.results_showing=!0,this.search_field.focus(),this.search_field.val(this.search_field.val()),this.winnow_results())},Chosen.prototype.update_results_content=function(a){return this.search_results.html(a)},Chosen.prototype.results_hide=function(){return this.results_showing&&(this.result_clear_highlight(),this.container.removeClass("chosen-with-drop"),this.form_field_jq.trigger("chosen:hiding_dropdown",{chosen:this})),this.results_showing=!1},Chosen.prototype.set_tab_index=function(){var a;return this.form_field.tabIndex?(a=this.form_field.tabIndex,this.form_field.tabIndex=-1,this.search_field[0].tabIndex=a):void 0},Chosen.prototype.set_label_behavior=function(){var b=this;return this.form_field_label=this.form_field_jq.parents("label"),!this.form_field_label.length&&this.form_field.id.length&&(this.form_field_label=a("label[for='"+this.form_field.id+"']")),this.form_field_label.length>0?this.form_field_label.bind("click.chosen",function(a){return b.is_multiple?b.container_mousedown(a):b.activate_field()}):void 0},Chosen.prototype.show_search_field_default=function(){return this.is_multiple&&this.choices_count()<1&&!this.active_field?(this.search_field.val(this.default_text),this.search_field.addClass("default")):(this.search_field.val(""),this.search_field.removeClass("default"))},Chosen.prototype.search_results_mouseup=function(b){var c;return c=a(b.target).hasClass("active-result")?a(b.target):a(b.target).parents(".active-result").first(),c.length?(this.result_highlight=c,this.result_select(b),this.search_field.focus()):void 0},Chosen.prototype.search_results_mouseover=function(b){var c;return c=a(b.target).hasClass("active-result")?a(b.target):a(b.target).parents(".active-result").first(),c?this.result_do_highlight(c):void 0},Chosen.prototype.search_results_mouseout=function(b){return a(b.target).hasClass("active-result")?this.result_clear_highlight():void 0},Chosen.prototype.choice_build=function(b){var c,d,e=this;return c=a("<li />",{"class":"search-choice"}).html("<span>"+b.html+"</span>"),b.disabled?c.addClass("search-choice-disabled"):(d=a("<a />",{"class":"search-choice-close","data-option-array-index":b.array_index}),d.bind("click.chosen",function(a){return e.choice_destroy_link_click(a)}),c.append(d)),this.search_container.before(c)},Chosen.prototype.choice_destroy_link_click=function(b){return b.preventDefault(),b.stopPropagation(),this.is_disabled?void 0:this.choice_destroy(a(b.target))},Chosen.prototype.choice_destroy=function(a){return this.result_deselect(a[0].getAttribute("data-option-array-index"))?(this.show_search_field_default(),this.is_multiple&&this.choices_count()>0&&this.search_field.val().length<1&&this.results_hide(),a.parents("li").first().remove(),this.search_field_scale()):void 0},Chosen.prototype.results_reset=function(){return this.form_field.options[0].selected=!0,this.selected_option_count=null,this.single_set_selected_text(),this.show_search_field_default(),this.results_reset_cleanup(),this.form_field_jq.trigger("change"),this.active_field?this.results_hide():void 0},Chosen.prototype.results_reset_cleanup=function(){return this.current_selectedIndex=this.form_field.selectedIndex,this.selected_item.find("abbr").remove()},Chosen.prototype.result_select=function(a){var b,c,d;return this.result_highlight?(b=this.result_highlight,this.result_clear_highlight(),this.is_multiple&&this.max_selected_options<=this.choices_count()?(this.form_field_jq.trigger("chosen:maxselected",{chosen:this}),!1):(this.is_multiple?b.removeClass("active-result"):(this.result_single_selected&&(this.result_single_selected.removeClass("result-selected"),d=this.result_single_selected[0].getAttribute("data-option-array-index"),this.results_data[d].selected=!1),this.result_single_selected=b),b.addClass("result-selected"),c=this.results_data[b[0].getAttribute("data-option-array-index")],c.selected=!0,this.form_field.options[c.options_index].selected=!0,this.selected_option_count=null,this.is_multiple?this.choice_build(c):this.single_set_selected_text(c.text),(a.metaKey||a.ctrlKey)&&this.is_multiple||this.results_hide(),this.search_field.val(""),(this.is_multiple||this.form_field.selectedIndex!==this.current_selectedIndex)&&this.form_field_jq.trigger("change",{selected:this.form_field.options[c.options_index].value}),this.current_selectedIndex=this.form_field.selectedIndex,this.search_field_scale())):void 0},Chosen.prototype.single_set_selected_text=function(a){return null==a&&(a=this.default_text),a===this.default_text?this.selected_item.addClass("chosen-default"):(this.single_deselect_control_build(),this.selected_item.removeClass("chosen-default")),this.selected_item.find("span").text(a)},Chosen.prototype.result_deselect=function(a){var b;return b=this.results_data[a],this.form_field.options[b.options_index].disabled?!1:(b.selected=!1,this.form_field.options[b.options_index].selected=!1,this.selected_option_count=null,this.result_clear_highlight(),this.results_showing&&this.winnow_results(),this.form_field_jq.trigger("change",{deselected:this.form_field.options[b.options_index].value}),this.search_field_scale(),!0)},Chosen.prototype.single_deselect_control_build=function(){return this.allow_single_deselect?(this.selected_item.find("abbr").length||this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'),this.selected_item.addClass("chosen-single-with-deselect")):void 0},Chosen.prototype.get_search_text=function(){return this.search_field.val()===this.default_text?"":a("<div/>").text(a.trim(this.search_field.val())).html()},Chosen.prototype.winnow_results_set_highlight=function(){var a,b;return b=this.is_multiple?[]:this.search_results.find(".result-selected.active-result"),a=b.length?b.first():this.search_results.find(".active-result").first(),null!=a?this.result_do_highlight(a):void 0},Chosen.prototype.no_results=function(b){var c;return c=a('<li class="no-results">'+this.results_none_found+' "<span></span>"</li>'),c.find("span").first().html(b),this.search_results.append(c)},Chosen.prototype.no_results_clear=function(){return this.search_results.find(".no-results").remove()},Chosen.prototype.keydown_arrow=function(){var a;return this.results_showing&&this.result_highlight?(a=this.result_highlight.nextAll("li.active-result").first())?this.result_do_highlight(a):void 0:this.results_show()},Chosen.prototype.keyup_arrow=function(){var a;return this.results_showing||this.is_multiple?this.result_highlight?(a=this.result_highlight.prevAll("li.active-result"),a.length?this.result_do_highlight(a.first()):(this.choices_count()>0&&this.results_hide(),this.result_clear_highlight())):void 0:this.results_show()},Chosen.prototype.keydown_backstroke=function(){var a;return this.pending_backstroke?(this.choice_destroy(this.pending_backstroke.find("a").first()),this.clear_backstroke()):(a=this.search_container.siblings("li.search-choice").last(),a.length&&!a.hasClass("search-choice-disabled")?(this.pending_backstroke=a,this.single_backstroke_delete?this.keydown_backstroke():this.pending_backstroke.addClass("search-choice-focus")):void 0)},Chosen.prototype.clear_backstroke=function(){return this.pending_backstroke&&this.pending_backstroke.removeClass("search-choice-focus"),this.pending_backstroke=null},Chosen.prototype.keydown_checker=function(a){var b,c;switch(b=null!=(c=a.which)?c:a.keyCode,this.search_field_scale(),8!==b&&this.pending_backstroke&&this.clear_backstroke(),b){case 8:this.backstroke_length=this.search_field.val().length;break;case 9:this.results_showing&&!this.is_multiple&&this.result_select(a),this.mouse_on_container=!1;break;case 13:a.preventDefault();break;case 38:a.preventDefault(),this.keyup_arrow();break;case 40:a.preventDefault(),this.keydown_arrow()}},Chosen.prototype.search_field_scale=function(){var b,c,d,e,f,g,h,i,j;if(this.is_multiple){for(d=0,h=0,f="position:absolute; left: -1000px; top: -1000px; display:none;",g=["font-size","font-style","font-weight","font-family","line-height","text-transform","letter-spacing"],i=0,j=g.length;j>i;i++)e=g[i],f+=e+":"+this.search_field.css(e)+";";return b=a("<div />",{style:f}),b.text(this.search_field.val()),a("body").append(b),h=b.width()+25,b.remove(),c=this.container.outerWidth(),h>c-10&&(h=c-10),this.search_field.css({width:h+"px"})}},Chosen}(AbstractChosen)}.call(this);


/*!
 * Jasny Bootstrap v3.1.3 (https://jasny.github.io/bootstrap)
 * Copyright 2012-2014 Arnold Daniels
 * Licensed under Apache-2.0 (https://github.com/jasny/bootstrap/blob/master/LICENSE)
 */

if (typeof jQuery === 'undefined') { throw new Error('Jasny Bootstrap\'s JavaScript requires jQuery') }

/* ========================================================================
 * Bootstrap: transition.js v3.1.3
 * https://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: https://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  if ($.support.transition !== undefined) return  // Prevent conflict with Twitter Bootstrap

  // https://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false, $el = this
    $(this).one($.support.transition.end, function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()
  })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: offcanvas.js v3.1.3
 * https://jasny.github.io/bootstrap/javascript/#offcanvas
 * ========================================================================
 * Copyright 2013-2014 Arnold Daniels
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */

+function ($) { "use strict";

  // OFFCANVAS PUBLIC CLASS DEFINITION
  // =================================

  var OffCanvas = function (element, options) {
    this.$element = $(element)
    this.options  = $.extend({}, OffCanvas.DEFAULTS, options)
    this.state    = null
    this.placement = null
    
    if (this.options.recalc) {
      this.calcClone()
      $(window).on('resize', $.proxy(this.recalc, this))
    }
    
    if (this.options.autohide)
      $(document).on('click', $.proxy(this.autohide, this))

    if (this.options.toggle) this.toggle()
    
    if (this.options.disablescrolling) {
        this.options.disableScrolling = this.options.disablescrolling
        delete this.options.disablescrolling
    }
  }

  OffCanvas.DEFAULTS = {
    toggle: true,
    placement: 'auto',
    autohide: true,
    recalc: true,
    disableScrolling: true
  }

  OffCanvas.prototype.offset = function () {
    switch (this.placement) {
      case 'left':
      case 'right':  return this.$element.outerWidth()
      case 'top':
      case 'bottom': return this.$element.outerHeight()
    }
  }
  
  OffCanvas.prototype.calcPlacement = function () {
    if (this.options.placement !== 'auto') {
        this.placement = this.options.placement
        return
    }
    
    if (!this.$element.hasClass('in')) {
      this.$element.css('visiblity', 'hidden !important').addClass('in')
    } 
    
    var horizontal = $(window).width() / this.$element.width()
    var vertical = $(window).height() / this.$element.height()
        
    var element = this.$element
    function ab(a, b) {
      if (element.css(b) === 'auto') return a
      if (element.css(a) === 'auto') return b
      
      var size_a = parseInt(element.css(a), 10)
      var size_b = parseInt(element.css(b), 10)
  
      return size_a > size_b ? b : a
    }
    
    this.placement = horizontal >= vertical ? ab('left', 'right') : ab('top', 'bottom')
      
    if (this.$element.css('visibility') === 'hidden !important') {
      this.$element.removeClass('in').css('visiblity', '')
    }
  }
  
  OffCanvas.prototype.opposite = function (placement) {
    switch (placement) {
      case 'top':    return 'bottom'
      case 'left':   return 'right'
      case 'bottom': return 'top'
      case 'right':  return 'left'
    }
  }
  
  OffCanvas.prototype.getCanvasElements = function() {
    // Return a set containing the canvas plus all fixed elements
    var canvas = this.options.canvas ? $(this.options.canvas) : this.$element
    
    var fixed_elements = canvas.find('*').filter(function() {
      return $(this).css('position') === 'fixed'
    }).not(this.options.exclude)
    
    return canvas.add(fixed_elements)
  }
  
  OffCanvas.prototype.slide = function (elements, offset, callback) {
    // Use jQuery animation if CSS transitions aren't supported
    if (!$.support.transition) {
      var anim = {}
      anim[this.placement] = "+=" + offset
      return elements.animate(anim, 350, callback)
    }

    var placement = this.placement
    var opposite = this.opposite(placement)
    
    elements.each(function() {
      if ($(this).css(placement) !== 'auto')
        $(this).css(placement, (parseInt($(this).css(placement), 10) || 0) + offset)
      
      if ($(this).css(opposite) !== 'auto')
        $(this).css(opposite, (parseInt($(this).css(opposite), 10) || 0) - offset)
    })
    
    this.$element
      .one($.support.transition.end, callback)
      .emulateTransitionEnd(350)
  }

  OffCanvas.prototype.disableScrolling = function() {
    var bodyWidth = $('body').width()
    var prop = 'padding-' + this.opposite(this.placement)

    if ($('body').data('offcanvas-style') === undefined) {
      $('body').data('offcanvas-style', $('body').attr('style') || '')
    }
      
    $('body').css('overflow', 'hidden')

    if ($('body').width() > bodyWidth) {
      var padding = parseInt($('body').css(prop), 10) + $('body').width() - bodyWidth
      
      setTimeout(function() {
        $('body').css(prop, padding)
      }, 1)
    }
  }

  OffCanvas.prototype.show = function () {
    if (this.state) return
    
    var startEvent = $.Event('show.bs.offcanvas')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    this.state = 'slide-in'
    this.calcPlacement();
    
    var elements = this.getCanvasElements()
    var placement = this.placement
    var opposite = this.opposite(placement)
    var offset = this.offset()

    if (elements.index(this.$element) !== -1) {
      $(this.$element).data('offcanvas-style', $(this.$element).attr('style') || '')
      this.$element.css(placement, -1 * offset)
      this.$element.css(placement); // Workaround: Need to get the CSS property for it to be applied before the next line of code
    }

    elements.addClass('canvas-sliding').each(function() {
      if ($(this).data('offcanvas-style') === undefined) $(this).data('offcanvas-style', $(this).attr('style') || '')
      if ($(this).css('position') === 'static') $(this).css('position', 'relative')
      if (($(this).css(placement) === 'auto' || $(this).css(placement) === '0px') &&
          ($(this).css(opposite) === 'auto' || $(this).css(opposite) === '0px')) {
        $(this).css(placement, 0)
      }
    })
    
    if (this.options.disableScrolling) this.disableScrolling()
    
    var complete = function () {
      if (this.state != 'slide-in') return
      
      this.state = 'slid'

      elements.removeClass('canvas-sliding').addClass('canvas-slid')
      this.$element.trigger('shown.bs.offcanvas')
    }

    setTimeout($.proxy(function() {
      this.$element.addClass('in')
      this.slide(elements, offset, $.proxy(complete, this))
    }, this), 1)
  }

  OffCanvas.prototype.hide = function (fast) {
    if (this.state !== 'slid') return

    var startEvent = $.Event('hide.bs.offcanvas')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    this.state = 'slide-out'

    var elements = $('.canvas-slid')
    var placement = this.placement
    var offset = -1 * this.offset()

    var complete = function () {
      if (this.state != 'slide-out') return
      
      this.state = null
      this.placement = null
      
      this.$element.removeClass('in')
      
      elements.removeClass('canvas-sliding')
      elements.add(this.$element).add('body').each(function() {
        $(this).attr('style', $(this).data('offcanvas-style')).removeData('offcanvas-style')
      })

      this.$element.trigger('hidden.bs.offcanvas')
    }

    elements.removeClass('canvas-slid').addClass('canvas-sliding')
    
    setTimeout($.proxy(function() {
      this.slide(elements, offset, $.proxy(complete, this))
    }, this), 1)
  }

  OffCanvas.prototype.toggle = function () {
    if (this.state === 'slide-in' || this.state === 'slide-out') return
    this[this.state === 'slid' ? 'hide' : 'show']()
  }

  OffCanvas.prototype.calcClone = function() {
    this.$calcClone = this.$element.clone()
      .html('')
      .addClass('offcanvas-clone').removeClass('in')
      .appendTo($('body'))
  }

  OffCanvas.prototype.recalc = function () {
    if (this.$calcClone.css('display') === 'none' || (this.state !== 'slid' && this.state !== 'slide-in')) return
    
    this.state = null
    this.placement = null
    var elements = this.getCanvasElements()
    
    this.$element.removeClass('in')
    
    elements.removeClass('canvas-slid')
    elements.add(this.$element).add('body').each(function() {
      $(this).attr('style', $(this).data('offcanvas-style')).removeData('offcanvas-style')
    })
  }
  
  OffCanvas.prototype.autohide = function (e) {
    if ($(e.target).closest(this.$element).length === 0) this.hide()
  }

  // OFFCANVAS PLUGIN DEFINITION
  // ==========================

  var old = $.fn.offcanvas

  $.fn.offcanvas = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.offcanvas')
      var options = $.extend({}, OffCanvas.DEFAULTS, $this.data(), typeof option === 'object' && option)

      if (!data) $this.data('bs.offcanvas', (data = new OffCanvas(this, options)))
      if (typeof option === 'string') data[option]()
    })
  }

  $.fn.offcanvas.Constructor = OffCanvas


  // OFFCANVAS NO CONFLICT
  // ====================

  $.fn.offcanvas.noConflict = function () {
    $.fn.offcanvas = old
    return this
  }


  // OFFCANVAS DATA-API
  // =================

  $(document).on('click.bs.offcanvas.data-api', '[data-toggle=offcanvas]', function (e) {
    var $this   = $(this), href
    var target  = $this.attr('data-target')
        || e.preventDefault()
        || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
    var $canvas = $(target)
    var data    = $canvas.data('bs.offcanvas')
    var option  = data ? 'toggle' : $this.data()

    e.stopPropagation()

    if (data) data.toggle()
      else $canvas.offcanvas(option)
  })

}(window.jQuery);

/* ============================================================
 * Bootstrap: rowlink.js v3.1.3
 * https://jasny.github.io/bootstrap/javascript/#rowlink
 * ============================================================
 * Copyright 2012-2014 Arnold Daniels
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */

+function ($) { "use strict";

  var Rowlink = function (element, options) {
    this.$element = $(element)
    this.options = $.extend({}, Rowlink.DEFAULTS, options)
    
    this.$element.on('click.bs.rowlink', 'td:not(.rowlink-skip)', $.proxy(this.click, this))
  }

  Rowlink.DEFAULTS = {
    target: "a"
  }

  Rowlink.prototype.click = function(e) {
    var target = $(e.currentTarget).closest('tr').find(this.options.target)[0]
    if ($(e.target)[0] === target) return
    
    e.preventDefault();
    
    if (target.click) {
      target.click()
    } else if (document.createEvent) {
      var evt = document.createEvent("MouseEvents"); 
      evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null); 
      target.dispatchEvent(evt);
    }
  }

  
  // ROWLINK PLUGIN DEFINITION
  // ===========================

  var old = $.fn.rowlink

  $.fn.rowlink = function (options) {
    return this.each(function () {
      var $this = $(this)
      var data = $this.data('bs.rowlink')
      if (!data) $this.data('bs.rowlink', (data = new Rowlink(this, options)))
    })
  }

  $.fn.rowlink.Constructor = Rowlink


  // ROWLINK NO CONFLICT
  // ====================

  $.fn.rowlink.noConflict = function () {
    $.fn.rowlink = old
    return this
  }


  // ROWLINK DATA-API
  // ==================

  $(document).on('click.bs.rowlink.data-api', '[data-link="row"]', function (e) {
    if ($(e.target).closest('.rowlink-skip').length !== 0) return
    
    var $this = $(this)
    if ($this.data('bs.rowlink')) return
    $this.rowlink($this.data())
    $(e.target).trigger('click.bs.rowlink')
  })
  
}(window.jQuery);

/* ===========================================================
 * Bootstrap: inputmask.js v3.1.0
 * https://jasny.github.io/bootstrap/javascript/#inputmask
 * 
 * Based on Masked Input plugin by Josh Bush (digitalbush.com)
 * ===========================================================
 * Copyright 2012-2014 Arnold Daniels
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

+function ($) { "use strict";

  var isIphone = (window.orientation !== undefined)
  var isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1
  var isIE = window.navigator.appName == 'Microsoft Internet Explorer'

  // INPUTMASK PUBLIC CLASS DEFINITION
  // =================================

  var Inputmask = function (element, options) {
    if (isAndroid) return // No support because caret positioning doesn't work on Android
    
    this.$element = $(element)
    this.options = $.extend({}, Inputmask.DEFAULTS, options)
    this.mask = String(this.options.mask)
    
    this.init()
    this.listen()
        
    this.checkVal() //Perform initial check for existing values
  }

  Inputmask.DEFAULTS = {
    mask: "",
    placeholder: "_",
    definitions: {
      '9': "[0-9]",
      'a': "[A-Za-z]",
      'w': "[A-Za-z0-9]",
      '*': "."
    }
  }

  Inputmask.prototype.init = function() {
    var defs = this.options.definitions
    var len = this.mask.length

    this.tests = [] 
    this.partialPosition = this.mask.length
    this.firstNonMaskPos = null

    $.each(this.mask.split(""), $.proxy(function(i, c) {
      if (c == '?') {
        len--
        this.partialPosition = i
      } else if (defs[c]) {
        this.tests.push(new RegExp(defs[c]))
        if (this.firstNonMaskPos === null)
          this.firstNonMaskPos =  this.tests.length - 1
      } else {
        this.tests.push(null)
      }
    }, this))

    this.buffer = $.map(this.mask.split(""), $.proxy(function(c, i) {
      if (c != '?') return defs[c] ? this.options.placeholder : c
    }, this))

    this.focusText = this.$element.val()

    this.$element.data("rawMaskFn", $.proxy(function() {
      return $.map(this.buffer, function(c, i) {
        return this.tests[i] && c != this.options.placeholder ? c : null
      }).join('')
    }, this))
  }
    
  Inputmask.prototype.listen = function() {
    if (this.$element.attr("readonly")) return

    var pasteEventName = (isIE ? 'paste' : 'input') + ".mask"

    this.$element
      .on("unmask.bs.inputmask", $.proxy(this.unmask, this))

      .on("focus.bs.inputmask", $.proxy(this.focusEvent, this))
      .on("blur.bs.inputmask", $.proxy(this.blurEvent, this))

      .on("keydown.bs.inputmask", $.proxy(this.keydownEvent, this))
      .on("keypress.bs.inputmask", $.proxy(this.keypressEvent, this))

      .on(pasteEventName, $.proxy(this.pasteEvent, this))
  }

  //Helper Function for Caret positioning
  Inputmask.prototype.caret = function(begin, end) {
    if (this.$element.length === 0) return
    if (typeof begin == 'number') {
      end = (typeof end == 'number') ? end : begin
      return this.$element.each(function() {
        if (this.setSelectionRange) {
          this.setSelectionRange(begin, end)
        } else if (this.createTextRange) {
          var range = this.createTextRange()
          range.collapse(true)
          range.moveEnd('character', end)
          range.moveStart('character', begin)
          range.select()
        }
      })
    } else {
      if (this.$element[0].setSelectionRange) {
        begin = this.$element[0].selectionStart
        end = this.$element[0].selectionEnd
      } else if (document.selection && document.selection.createRange) {
        var range = document.selection.createRange()
        begin = 0 - range.duplicate().moveStart('character', -100000)
        end = begin + range.text.length
      }
      return {
        begin: begin, 
        end: end
      }
    }
  }
  
  Inputmask.prototype.seekNext = function(pos) {
    var len = this.mask.length
    while (++pos <= len && !this.tests[pos]);

    return pos
  }
  
  Inputmask.prototype.seekPrev = function(pos) {
    while (--pos >= 0 && !this.tests[pos]);

    return pos
  }

  Inputmask.prototype.shiftL = function(begin,end) {
    var len = this.mask.length

    if (begin < 0) return

    for (var i = begin, j = this.seekNext(end); i < len; i++) {
      if (this.tests[i]) {
        if (j < len && this.tests[i].test(this.buffer[j])) {
          this.buffer[i] = this.buffer[j]
          this.buffer[j] = this.options.placeholder
        } else
          break
        j = this.seekNext(j)
      }
    }
    this.writeBuffer()
    this.caret(Math.max(this.firstNonMaskPos, begin))
  }

  Inputmask.prototype.shiftR = function(pos) {
    var len = this.mask.length

    for (var i = pos, c = this.options.placeholder; i < len; i++) {
      if (this.tests[i]) {
        var j = this.seekNext(i)
        var t = this.buffer[i]
        this.buffer[i] = c
        if (j < len && this.tests[j].test(t))
          c = t
        else
          break
      }
    }
  },

  Inputmask.prototype.unmask = function() {
    this.$element
      .unbind(".mask")
      .removeData("inputmask")
  }

  Inputmask.prototype.focusEvent = function() {
    this.focusText = this.$element.val()
    var len = this.mask.length 
    var pos = this.checkVal()
    this.writeBuffer()

    var that = this
    var moveCaret = function() {
      if (pos == len)
        that.caret(0, pos)
      else
        that.caret(pos)
    }

    moveCaret()
    setTimeout(moveCaret, 50)
  }

  Inputmask.prototype.blurEvent = function() {
    this.checkVal()
    if (this.$element.val() !== this.focusText)
      this.$element.trigger('change')
  }

  Inputmask.prototype.keydownEvent = function(e) {
    var k = e.which

    //backspace, delete, and escape get special treatment
    if (k == 8 || k == 46 || (isIphone && k == 127)) {
      var pos = this.caret(),
      begin = pos.begin,
      end = pos.end

      if (end - begin === 0) {
        begin = k != 46 ? this.seekPrev(begin) : (end = this.seekNext(begin - 1))
        end = k == 46 ? this.seekNext(end) : end
      }
      this.clearBuffer(begin, end)
      this.shiftL(begin, end - 1)

      return false
    } else if (k == 27) {//escape
      this.$element.val(this.focusText)
      this.caret(0, this.checkVal())
      return false
    }
  }

  Inputmask.prototype.keypressEvent = function(e) {
    var len = this.mask.length

    var k = e.which,
    pos = this.caret()

    if (e.ctrlKey || e.altKey || e.metaKey || k < 32)  {//Ignore
      return true
    } else if (k) {
      if (pos.end - pos.begin !== 0) {
        this.clearBuffer(pos.begin, pos.end)
        this.shiftL(pos.begin, pos.end - 1)
      }

      var p = this.seekNext(pos.begin - 1)
      if (p < len) {
        var c = String.fromCharCode(k)
        if (this.tests[p].test(c)) {
          this.shiftR(p)
          this.buffer[p] = c
          this.writeBuffer()
          var next = this.seekNext(p)
          this.caret(next)
        }
      }
      return false
    }
  }

  Inputmask.prototype.pasteEvent = function() {
    var that = this

    setTimeout(function() {
      that.caret(that.checkVal(true))
    }, 0)
  }

  Inputmask.prototype.clearBuffer = function(start, end) {
    var len = this.mask.length

    for (var i = start; i < end && i < len; i++) {
      if (this.tests[i])
        this.buffer[i] = this.options.placeholder
    }
  }

  Inputmask.prototype.writeBuffer = function() {
    return this.$element.val(this.buffer.join('')).val()
  }

  Inputmask.prototype.checkVal = function(allow) {
    var len = this.mask.length
    //try to place characters where they belong
    var test = this.$element.val()
    var lastMatch = -1

    for (var i = 0, pos = 0; i < len; i++) {
      if (this.tests[i]) {
        this.buffer[i] = this.options.placeholder
        while (pos++ < test.length) {
          var c = test.charAt(pos - 1)
          if (this.tests[i].test(c)) {
            this.buffer[i] = c
            lastMatch = i
            break
          }
        }
        if (pos > test.length)
          break
      } else if (this.buffer[i] == test.charAt(pos) && i != this.partialPosition) {
        pos++
        lastMatch = i
      }
    }
    if (!allow && lastMatch + 1 < this.partialPosition) {
      this.$element.val("")
      this.clearBuffer(0, len)
    } else if (allow || lastMatch + 1 >= this.partialPosition) {
      this.writeBuffer()
      if (!allow) this.$element.val(this.$element.val().substring(0, lastMatch + 1))
    }
    return (this.partialPosition ? i : this.firstNonMaskPos)
  }

  
  // INPUTMASK PLUGIN DEFINITION
  // ===========================

  var old = $.fn.inputmask
  
  $.fn.inputmask = function (options) {
    return this.each(function () {
      var $this = $(this)
      var data = $this.data('bs.inputmask')
      
      if (!data) $this.data('bs.inputmask', (data = new Inputmask(this, options)))
    })
  }

  $.fn.inputmask.Constructor = Inputmask


  // INPUTMASK NO CONFLICT
  // ====================

  $.fn.inputmask.noConflict = function () {
    $.fn.inputmask = old
    return this
  }


  // INPUTMASK DATA-API
  // ==================

  $(document).on('focus.bs.inputmask.data-api', '[data-mask]', function (e) {
    var $this = $(this)
    if ($this.data('bs.inputmask')) return
    $this.inputmask($this.data())
  })

}(window.jQuery);

/* ===========================================================
 * Bootstrap: fileinput.js v3.1.3
 * https://jasny.github.com/bootstrap/javascript/#fileinput
 * ===========================================================
 * Copyright 2012-2014 Arnold Daniels
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

+function ($) { "use strict";

  var isIE = window.navigator.appName == 'Microsoft Internet Explorer'

  // FILEUPLOAD PUBLIC CLASS DEFINITION
  // =================================

  var Fileinput = function (element, options) {
    this.$element = $(element)
    
    this.$input = this.$element.find(':file')
    if (this.$input.length === 0) return

    this.name = this.$input.attr('name') || options.name

    this.$hidden = this.$element.find('input[type=hidden][name="' + this.name + '"]')
    if (this.$hidden.length === 0) {
      this.$hidden = $('<input type="hidden">').insertBefore(this.$input)
    }

    this.$preview = this.$element.find('.fileinput-preview')
    var height = this.$preview.css('height')
    if (this.$preview.css('display') !== 'inline' && height !== '0px' && height !== 'none') {
      this.$preview.css('line-height', height)
    }
        
    this.original = {
      exists: this.$element.hasClass('fileinput-exists'),
      preview: this.$preview.html(),
      hiddenVal: this.$hidden.val()
    }
    
    this.listen()
  }
  
  Fileinput.prototype.listen = function() {
    this.$input.on('change.bs.fileinput', $.proxy(this.change, this))
    $(this.$input[0].form).on('reset.bs.fileinput', $.proxy(this.reset, this))
    
    this.$element.find('[data-trigger="fileinput"]').on('click.bs.fileinput', $.proxy(this.trigger, this))
    this.$element.find('[data-dismiss="fileinput"]').on('click.bs.fileinput', $.proxy(this.clear, this))
  },

  Fileinput.prototype.change = function(e) {
    var files = e.target.files === undefined ? (e.target && e.target.value ? [{ name: e.target.value.replace(/^.+\\/, '')}] : []) : e.target.files
    
    e.stopPropagation()

    if (files.length === 0) {
      this.clear()
      return
    }

    this.$hidden.val('')
    this.$hidden.attr('name', '')
    this.$input.attr('name', this.name)

    var file = files[0]

    if (this.$preview.length > 0 && (typeof file.type !== "undefined" ? file.type.match(/^image\/(gif|png|jpeg)$/) : file.name.match(/\.(gif|png|jpe?g)$/i)) && typeof FileReader !== "undefined") {
      var reader = new FileReader()
      var preview = this.$preview
      var element = this.$element

      reader.onload = function(re) {
        var $img = $('<img>')
        $img[0].src = re.target.result
        files[0].result = re.target.result
        
        element.find('.fileinput-filename').text(file.name)
        
        // if parent has max-height, using `(max-)height: 100%` on child doesn't take padding and border into account
        if (preview.css('max-height') != 'none') $img.css('max-height', parseInt(preview.css('max-height'), 10) - parseInt(preview.css('padding-top'), 10) - parseInt(preview.css('padding-bottom'), 10)  - parseInt(preview.css('border-top'), 10) - parseInt(preview.css('border-bottom'), 10))
        
        preview.html($img)
        element.addClass('fileinput-exists').removeClass('fileinput-new')

        element.trigger('change.bs.fileinput', files)
      }

      reader.readAsDataURL(file)
    } else {
      this.$element.find('.fileinput-filename').text(file.name)
      this.$preview.text(file.name)
      
      this.$element.addClass('fileinput-exists').removeClass('fileinput-new')
      
      this.$element.trigger('change.bs.fileinput')
    }
  },

  Fileinput.prototype.clear = function(e) {
    if (e) e.preventDefault()
    
    this.$hidden.val('')
    this.$hidden.attr('name', this.name)
    this.$input.attr('name', '')

    //ie8+ doesn't support changing the value of input with type=file so clone instead
    if (isIE) { 
      var inputClone = this.$input.clone(true);
      this.$input.after(inputClone);
      this.$input.remove();
      this.$input = inputClone;
    } else {
      this.$input.val('')
    }

    this.$preview.html('')
    this.$element.find('.fileinput-filename').text('')
    this.$element.addClass('fileinput-new').removeClass('fileinput-exists')
    
    if (e !== undefined) {
      this.$input.trigger('change')
      this.$element.trigger('clear.bs.fileinput')
    }
  },

  Fileinput.prototype.reset = function() {
    this.clear()

    this.$hidden.val(this.original.hiddenVal)
    this.$preview.html(this.original.preview)
    this.$element.find('.fileinput-filename').text('')

    if (this.original.exists) this.$element.addClass('fileinput-exists').removeClass('fileinput-new')
     else this.$element.addClass('fileinput-new').removeClass('fileinput-exists')
    
    this.$element.trigger('reset.bs.fileinput')
  },

  Fileinput.prototype.trigger = function(e) {
    this.$input.trigger('click')
    e.preventDefault()
  }

  
  // FILEUPLOAD PLUGIN DEFINITION
  // ===========================

  var old = $.fn.fileinput
  
  $.fn.fileinput = function (options) {
    return this.each(function () {
      var $this = $(this),
          data = $this.data('bs.fileinput')
      if (!data) $this.data('bs.fileinput', (data = new Fileinput(this, options)))
      if (typeof options == 'string') data[options]()
    })
  }

  $.fn.fileinput.Constructor = Fileinput


  // FILEINPUT NO CONFLICT
  // ====================

  $.fn.fileinput.noConflict = function () {
    $.fn.fileinput = old
    return this
  }


  // FILEUPLOAD DATA-API
  // ==================

  $(document).on('click.fileinput.data-api', '[data-provides="fileinput"]', function (e) {
    var $this = $(this)
    if ($this.data('bs.fileinput')) return
    $this.fileinput($this.data())
      
    var $target = $(e.target).closest('[data-dismiss="fileinput"],[data-trigger="fileinput"]');
    if ($target.length > 0) {
      e.preventDefault()
      $target.trigger('click.bs.fileinput')
    }
  })

}(window.jQuery);


jQuery.extend({

    createUploadIframe: function(id, uri)
    {
            //create frame
            var frameId = 'jUploadFrame' + id;
            var iframeHtml = '<iframe id="' + frameId + '" name="' + frameId + '" style="position:absolute; top:-9999px; left:-9999px"';
            if(window.ActiveXObject)
            {
                if(typeof uri== 'boolean'){
                    iframeHtml += ' src="' + 'javascript:false' + '"';

                }
                else if(typeof uri== 'string'){
                    iframeHtml += ' src="' + uri + '"';

                }   
            }
            iframeHtml += ' />';
            jQuery(iframeHtml).appendTo(document.body);

            return jQuery('#' + frameId).get(0);            
    },
    createUploadForm: function(id, fileElementId, data)
    {
        //create form   
        var formId = 'jUploadForm' + id;
        var fileId = 'jUploadFile' + id;
        var form = jQuery('<form  action="" method="POST" name="' + formId + '" id="' + formId + '" enctype="multipart/form-data"></form>');    
        if(data)
        {
            for(var i in data)
            {
                jQuery('<input type="hidden" name="' + i + '" value="' + data[i] + '" />').appendTo(form);
            }           
        }       
        var oldElement = jQuery('#' + fileElementId);
        var newElement = jQuery(oldElement).clone();
        jQuery(oldElement).attr('id', fileId);
        jQuery(oldElement).before(newElement);
        jQuery(oldElement).appendTo(form);


        
        //set attributes
        jQuery(form).css('position', 'absolute');
        jQuery(form).css('top', '-1200px');
        jQuery(form).css('left', '-1200px');
        jQuery(form).appendTo('body');      
        return form;
    },

    ajaxFileUpload: function(s) {
        // TODO introduce global settings, allowing the client to modify them for all requests, not only timeout        
        s = jQuery.extend({}, jQuery.ajaxSettings, s);
        var id = new Date().getTime()        
        var form = jQuery.createUploadForm(id, s.fileElementId, (typeof(s.data)=='undefined'?false:s.data));
        var io = jQuery.createUploadIframe(id, s.secureuri);
        var frameId = 'jUploadFrame' + id;
        var formId = 'jUploadForm' + id;        
        // Watch for a new set of requests
        if ( s.global && ! jQuery.active++ )
        {
            jQuery.event.trigger( "ajaxStart" );
        }            
        var requestDone = false;
        // Create the request object
        var xml = {}   
        if ( s.global )
            jQuery.event.trigger("ajaxSend", [xml, s]);
        // Wait for a response to come back
        var uploadCallback = function(isTimeout)
        {           
            var io = document.getElementById(frameId);
            try 
            {               
                if(io.contentWindow)
                {
                     xml.responseText = io.contentWindow.document.body?io.contentWindow.document.body.innerHTML:null;
                     xml.responseXML = io.contentWindow.document.XMLDocument?io.contentWindow.document.XMLDocument:io.contentWindow.document;
                     
                }else if(io.contentDocument)
                {
                     xml.responseText = io.contentDocument.document.body?io.contentDocument.document.body.innerHTML:null;
                    xml.responseXML = io.contentDocument.document.XMLDocument?io.contentDocument.document.XMLDocument:io.contentDocument.document;
                }                       
            }catch(e)
            {
                jQuery.handleError(s, xml, null, e);
            }
            if ( xml || isTimeout == "timeout") 
            {               
                requestDone = true;
                var status;
                try {
                    status = isTimeout != "timeout" ? "success" : "error";
                    // Make sure that the request was successful or notmodified
                    if ( status != "error" )
                    {
                        // process the data (runs the xml through httpData regardless of callback)
                        var data = jQuery.uploadHttpData( xml, s.dataType );    
                        // If a local callback was specified, fire it and pass it the data
                        if ( s.success )
                            s.success( data, status );
    
                        // Fire the global callback
                        if( s.global )
                            jQuery.event.trigger( "ajaxSuccess", [xml, s] );
                    } else
                        jQuery.handleError(s, xml, status);
                } catch(e) 
                {
                    status = "error";
                    jQuery.handleError(s, xml, status, e);
                }

                // The request was completed
                if( s.global )
                    jQuery.event.trigger( "ajaxComplete", [xml, s] );

                // Handle the global AJAX counter
                if ( s.global && ! --jQuery.active )
                    jQuery.event.trigger( "ajaxStop" );

                // Process result
                if ( s.complete )
                    s.complete(xml, status);

                jQuery(io).unbind()

                setTimeout(function()
                                    {   try 
                                        {
                                            jQuery(io).remove();
                                            jQuery(form).remove();  
                                            
                                        } catch(e) 
                                        {
                                            jQuery.handleError(s, xml, null, e);
                                        }                                   

                                    }, 100)

                xml = null

            }
        }
        // Timeout checker
        if ( s.timeout > 0 ) 
        {
            setTimeout(function(){
                // Check to see if the request is still happening
                if( !requestDone ) uploadCallback( "timeout" );
            }, s.timeout);
        }
        try 
        {

            var form = jQuery('#' + formId);
            jQuery(form).attr('action', s.url);
            jQuery(form).attr('method', 'POST');
            jQuery(form).attr('target', frameId);
            if(form.encoding)
            {
                jQuery(form).attr('encoding', 'multipart/form-data');               
            }
            else
            {   
                jQuery(form).attr('enctype', 'multipart/form-data');            
            }           
            jQuery(form).submit();

        } catch(e) 
        {           
            jQuery.handleError(s, xml, null, e);
        }
        
        jQuery('#' + frameId).load(uploadCallback   );
        return {abort: function () {}}; 

    },

    uploadHttpData: function( r, type ) {
        var data = !type;
        data = type == "xml" || data ? r.responseXML : r.responseText;
        // If the type is "script", eval it in global context
        if ( type == "script" )
            jQuery.globalEval( data );
        // Get the JavaScript object, if JSON is used.
        if ( type == "json" )
            eval( "data = " + data );
        // evaluate scripts within html
        if ( type == "html" )
            jQuery("<div>").html(data).evalScripts();

        return data;
    }
})


/*
 * jQuery Easing v1.3 - https://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Ã‚Â© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
    def: 'easeOutQuad',
    swing: function (x, t, b, c, d) {
        //alert(jQuery.easing.default);
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    },
    easeInQuad: function (x, t, b, c, d) {
        return c*(t/=d)*t + b;
    },
    easeOutQuad: function (x, t, b, c, d) {
        return -c *(t/=d)*(t-2) + b;
    },
    easeInOutQuad: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t + b;
        return -c/2 * ((--t)*(t-2) - 1) + b;
    },
    easeInCubic: function (x, t, b, c, d) {
        return c*(t/=d)*t*t + b;
    },
    easeOutCubic: function (x, t, b, c, d) {
        return c*((t=t/d-1)*t*t + 1) + b;
    },
    easeInOutCubic: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t + b;
        return c/2*((t-=2)*t*t + 2) + b;
    },
    easeInQuart: function (x, t, b, c, d) {
        return c*(t/=d)*t*t*t + b;
    },
    easeOutQuart: function (x, t, b, c, d) {
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    },
    easeInOutQuart: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
        return -c/2 * ((t-=2)*t*t*t - 2) + b;
    },
    easeInQuint: function (x, t, b, c, d) {
        return c*(t/=d)*t*t*t*t + b;
    },
    easeOutQuint: function (x, t, b, c, d) {
        return c*((t=t/d-1)*t*t*t*t + 1) + b;
    },
    easeInOutQuint: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
        return c/2*((t-=2)*t*t*t*t + 2) + b;
    },
    easeInSine: function (x, t, b, c, d) {
        return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
    },
    easeOutSine: function (x, t, b, c, d) {
        return c * Math.sin(t/d * (Math.PI/2)) + b;
    },
    easeInOutSine: function (x, t, b, c, d) {
        return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
    },
    easeInExpo: function (x, t, b, c, d) {
        return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
    },
    easeOutExpo: function (x, t, b, c, d) {
        return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
    },
    easeInOutExpo: function (x, t, b, c, d) {
        if (t==0) return b;
        if (t==d) return b+c;
        if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
        return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function (x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
    },
    easeOutCirc: function (x, t, b, c, d) {
        return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
    },
    easeInOutCirc: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
        return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
    },
    easeInElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    },
    easeOutElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
    },
    easeInOutElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
    },
    easeInBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*(t/=d)*t*((s+1)*t - s) + b;
    },
    easeOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
    },
    easeInOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158; 
        if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
        return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
    },
    easeInBounce: function (x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
    },
    easeOutBounce: function (x, t, b, c, d) {
        if ((t/=d) < (1/2.75)) {
            return c*(7.5625*t*t) + b;
        } else if (t < (2/2.75)) {
            return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
        } else if (t < (2.5/2.75)) {
            return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
        } else {
            return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
        }
    },
    easeInOutBounce: function (x, t, b, c, d) {
        if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
        return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
    }
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Ã‚Â© 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */


/**
 * Endless Scroll plugin for jQuery
 *
 * v1.4.8
 *
 * Copyright (c) 2008 Fred Wu
 *
 * Dual licensed under the MIT and GPL licenses:
 *   https://www.opensource.org/licenses/mit-license.php
 *   https://www.gnu.org/licenses/gpl.html
 */

/**
 * Usage:
 *
 * // using default options
 * $(document).endlessScroll();
 *
 * // using some custom options
 * $(document).endlessScroll({
 *   fireOnce: false,
 *   fireDelay: false,
 *   loader: "<div class=\"loading\"><div>",
 *   callback: function(){
 *     alert("test");
 *   }
 * });
 *
 * Configuration options:
 *
 * bottomPixels  integer          the number of pixels from the bottom of the page that triggers the event
 * fireOnce      boolean          only fire once until the execution of the current event is completed
 * fireDelay     integer          delay the subsequent firing, in milliseconds, 0 or false to disable delay
 * loader        string           the HTML to be displayed during loading
 * data          string|function  plain HTML data, can be either a string or a function that returns a string,
 *                                when passed as a function it accepts one argument: fire sequence (the number
 *                                of times the event triggered during the current page session)
 * insertAfter   string           jQuery selector syntax: where to put the loader as well as the plain HTML data
 * callback      function         callback function, accepts one argument: fire sequence (the number of times
 *                                the event triggered during the current page session)
 * resetCounter  function         resets the fire sequence counter if the function returns true, this function
 *                                could also perform hook actions since it is applied at the start of the event
 * ceaseFire     function         stops the event (no more endless scrolling) if the function returns true
 *
 * Usage tips:
 *
 * The plugin is more useful when used with the callback function, which can then make AJAX calls to retrieve content.
 * The fire sequence argument (for the callback function) is useful for 'pagination'-like features.
 */

(function($){

  $.fn.endlessScroll = function(options) {

    var defaults = {
      bottomPixels: 50,
      fireOnce: true,
      fireDelay: 150,
      loader: "<br />Loading...<br />",
      data: "",
      insertAfter: "div:last",
      resetCounter: function() { return false; },
      callback: function() { return true; },
      ceaseFire: function() { return false; }
    };

    var options = $.extend({}, defaults, options);

    var firing       = true;
    var fired        = false;
    var fireSequence = 0;

    if (options.ceaseFire.apply(this) === true) {
      firing = false;
    }

    if (firing === true) {
      $(this).scroll(function() {
        if (options.ceaseFire.apply(this) === true) {
          firing = false;
          return; // Scroll will still get called, but nothing will happen
        }

        if (this == document || this == window) {
          var is_scrollable = $(document).height() - $(window).height() <= $(window).scrollTop() + options.bottomPixels;
        } else {
          // calculates the actual height of the scrolling container
          var inner_wrap = $(".endless_scroll_inner_wrap", this);
          if (inner_wrap.length == 0) {
            inner_wrap = $(this).wrapInner("<div class=\"endless_scroll_inner_wrap\" />").find(".endless_scroll_inner_wrap");
          }
          var is_scrollable = inner_wrap.length > 0 &&
            (inner_wrap.height() - $(this).height() <= $(this).scrollTop() + options.bottomPixels);
        }

        if (is_scrollable && (options.fireOnce == false || (options.fireOnce == true && fired != true))) {
          if (options.resetCounter.apply(this) === true) fireSequence = 0;

          fired = true;
          fireSequence++;

          $(options.insertAfter).after("<div id=\"endless_scroll_loader\">" + options.loader + "</div>");

          data = typeof options.data == 'function' ? options.data.apply(this, [fireSequence]) : options.data;

          if (data !== false) {
            $(options.insertAfter).after("<div id=\"endless_scroll_data\">" + data + "</div>");
            $("div#endless_scroll_data").hide().fadeIn();
            $("div#endless_scroll_data").removeAttr("id");

            options.callback.apply(this, [fireSequence]);

            if (options.fireDelay !== false || options.fireDelay !== 0) {
              $("body").after("<div id=\"endless_scroll_marker\"></div>");
              // slight delay for preventing event firing twice
              $("div#endless_scroll_marker").fadeTo(options.fireDelay, 1, function() {
                $(this).remove();
                fired = false;
              });
            }
            else {
              fired = false;
            }
          }

          $("div#endless_scroll_loader").remove();
        }
      });
    }
  };

})(jQuery);

/*!
 *
 * MediaElement.js
 * HTML5 <video> and <audio> shim and player
 * https://mediaelementjs.com/
 *
 * Creates a JavaScript object that mimics HTML5 MediaElement API
 * for browsers that don't understand HTML5 or can't play the provided codec
 * Can play MP4 (H.264), Ogg, WebM, FLV, WMV, WMA, ACC, and MP3
 *
 * Copyright 2010-2014, John Dyer (https://j.hn)
 * License: MIT
 *
 */
// Namespace
var mejs = mejs || {};

// version number
mejs.version = '2.16.4'; 


// player number (for missing, same id attr)
mejs.meIndex = 0;

// media types accepted by plugins
mejs.plugins = {
  silverlight: [
    {version: [3,0], types: ['video/mp4','video/m4v','video/mov','video/wmv','audio/wma','audio/m4a','audio/mp3','audio/wav','audio/mpeg']}
  ],
  flash: [
    {version: [9,0,124], types: ['video/mp4','video/m4v','video/mov','video/flv','video/rtmp','video/x-flv','audio/flv','audio/x-flv','audio/mp3','audio/m4a','audio/mpeg', 'video/youtube', 'video/x-youtube', 'application/x-mpegURL']}
    //,{version: [12,0], types: ['video/webm']} // for future reference (hopefully!)
  ],
  youtube: [
    {version: null, types: ['video/youtube', 'video/x-youtube', 'audio/youtube', 'audio/x-youtube']}
  ],
  vimeo: [
    {version: null, types: ['video/vimeo', 'video/x-vimeo']}
  ]
};

/*
Utility methods
*/
mejs.Utility = {
  encodeUrl: function(url) {
    return encodeURIComponent(url); //.replace(/\?/gi,'%3F').replace(/=/gi,'%3D').replace(/&/gi,'%26');
  },
  escapeHTML: function(s) {
    return s.toString().split('&').join('&amp;').split('<').join('&lt;').split('"').join('&quot;');
  },
  absolutizeUrl: function(url) {
    var el = document.createElement('div');
    el.innerHTML = '<a href="' + this.escapeHTML(url) + '">x</a>';
    return el.firstChild.href;
  },
  getScriptPath: function(scriptNames) {
    var
      i = 0,
      j,
      codePath = '',
      testname = '',
      slashPos,
      filenamePos,
      scriptUrl,
      scriptPath,     
      scriptFilename,
      scripts = document.getElementsByTagName('script'),
      il = scripts.length,
      jl = scriptNames.length;
      
    // go through all <script> tags
    for (; i < il; i++) {
      scriptUrl = scripts[i].src;
      slashPos = scriptUrl.lastIndexOf('/');
      if (slashPos > -1) {
        scriptFilename = scriptUrl.substring(slashPos + 1);
        scriptPath = scriptUrl.substring(0, slashPos + 1);
      } else {
        scriptFilename = scriptUrl;
        scriptPath = '';      
      }
      
      // see if any <script> tags have a file name that matches the 
      for (j = 0; j < jl; j++) {
        testname = scriptNames[j];
        filenamePos = scriptFilename.indexOf(testname);
        if (filenamePos > -1) {
          codePath = scriptPath;
          break;
        }
      }
      
      // if we found a path, then break and return it
      if (codePath !== '') {
        break;
      }
    }
    
    // send the best path back
    return codePath;
  },
  secondsToTimeCode: function(time, forceHours, showFrameCount, fps) {
    //add framecount
    if (typeof showFrameCount == 'undefined') {
        showFrameCount=false;
    } else if(typeof fps == 'undefined') {
        fps = 25;
    }
  
    var hours = Math.floor(time / 3600) % 24,
      minutes = Math.floor(time / 60) % 60,
      seconds = Math.floor(time % 60),
      frames = Math.floor(((time % 1)*fps).toFixed(3)),
      result = 
          ( (forceHours || hours > 0) ? (hours < 10 ? '0' + hours : hours) + ':' : '')
            + (minutes < 10 ? '0' + minutes : minutes) + ':'
            + (seconds < 10 ? '0' + seconds : seconds)
            + ((showFrameCount) ? ':' + (frames < 10 ? '0' + frames : frames) : '');
  
    return result;
  },
  
  timeCodeToSeconds: function(hh_mm_ss_ff, forceHours, showFrameCount, fps){
    if (typeof showFrameCount == 'undefined') {
        showFrameCount=false;
    } else if(typeof fps == 'undefined') {
        fps = 25;
    }
  
    var tc_array = hh_mm_ss_ff.split(":"),
      tc_hh = parseInt(tc_array[0], 10),
      tc_mm = parseInt(tc_array[1], 10),
      tc_ss = parseInt(tc_array[2], 10),
      tc_ff = 0,
      tc_in_seconds = 0;
    
    if (showFrameCount) {
        tc_ff = parseInt(tc_array[3])/fps;
    }
    
    tc_in_seconds = ( tc_hh * 3600 ) + ( tc_mm * 60 ) + tc_ss + tc_ff;
    
    return tc_in_seconds;
  },
  

  convertSMPTEtoSeconds: function (SMPTE) {
    if (typeof SMPTE != 'string') 
      return false;

    SMPTE = SMPTE.replace(',', '.');
    
    var secs = 0,
      decimalLen = (SMPTE.indexOf('.') != -1) ? SMPTE.split('.')[1].length : 0,
      multiplier = 1;
    
    SMPTE = SMPTE.split(':').reverse();
    
    for (var i = 0; i < SMPTE.length; i++) {
      multiplier = 1;
      if (i > 0) {
        multiplier = Math.pow(60, i); 
      }
      secs += Number(SMPTE[i]) * multiplier;
    }
    return Number(secs.toFixed(decimalLen));
  },  
  
  /* borrowed from SWFObject: https://code.google.com/p/swfobject/source/browse/trunk/swfobject/src/swfobject.js#474 */
  removeSwf: function(id) {
    var obj = document.getElementById(id);
    if (obj && /object|embed/i.test(obj.nodeName)) {
      if (mejs.MediaFeatures.isIE) {
        obj.style.display = "none";
        (function(){
          if (obj.readyState == 4) {
            mejs.Utility.removeObjectInIE(id);
          } else {
            setTimeout(arguments.callee, 10);
          }
        })();
      } else {
        obj.parentNode.removeChild(obj);
      }
    }
  },
  removeObjectInIE: function(id) {
    var obj = document.getElementById(id);
    if (obj) {
      for (var i in obj) {
        if (typeof obj[i] == "function") {
          obj[i] = null;
        }
      }
      obj.parentNode.removeChild(obj);
    }   
  }
};


// Core detector, plugins are added below
mejs.PluginDetector = {

  // main public function to test a plug version number PluginDetector.hasPluginVersion('flash',[9,0,125]);
  hasPluginVersion: function(plugin, v) {
    var pv = this.plugins[plugin];
    v[1] = v[1] || 0;
    v[2] = v[2] || 0;
    return (pv[0] > v[0] || (pv[0] == v[0] && pv[1] > v[1]) || (pv[0] == v[0] && pv[1] == v[1] && pv[2] >= v[2])) ? true : false;
  },

  // cached values
  nav: window.navigator,
  ua: window.navigator.userAgent.toLowerCase(),

  // stored version numbers
  plugins: [],

  // runs detectPlugin() and stores the version number
  addPlugin: function(p, pluginName, mimeType, activeX, axDetect) {
    this.plugins[p] = this.detectPlugin(pluginName, mimeType, activeX, axDetect);
  },

  // get the version number from the mimetype (all but IE) or ActiveX (IE)
  detectPlugin: function(pluginName, mimeType, activeX, axDetect) {

    var version = [0,0,0],
      description,
      i,
      ax;

    // Firefox, Webkit, Opera
    if (typeof(this.nav.plugins) != 'undefined' && typeof this.nav.plugins[pluginName] == 'object') {
      description = this.nav.plugins[pluginName].description;
      if (description && !(typeof this.nav.mimeTypes != 'undefined' && this.nav.mimeTypes[mimeType] && !this.nav.mimeTypes[mimeType].enabledPlugin)) {
        version = description.replace(pluginName, '').replace(/^\s+/,'').replace(/\sr/gi,'.').split('.');
        for (i=0; i<version.length; i++) {
          version[i] = parseInt(version[i].match(/\d+/), 10);
        }
      }
    // Internet Explorer / ActiveX
    } else if (typeof(window.ActiveXObject) != 'undefined') {
      try {
        ax = new ActiveXObject(activeX);
        if (ax) {
          version = axDetect(ax);
        }
      }
      catch (e) { }
    }
    return version;
  }
};

// Add Flash detection
mejs.PluginDetector.addPlugin('flash','Shockwave Flash','application/x-shockwave-flash','ShockwaveFlash.ShockwaveFlash', function(ax) {
  // adapted from SWFObject
  var version = [],
    d = ax.GetVariable("$version");
  if (d) {
    d = d.split(" ")[1].split(",");
    version = [parseInt(d[0], 10), parseInt(d[1], 10), parseInt(d[2], 10)];
  }
  return version;
});

// Add Silverlight detection
mejs.PluginDetector.addPlugin('silverlight','Silverlight Plug-In','application/x-silverlight-2','AgControl.AgControl', function (ax) {
  // Silverlight cannot report its version number to IE
  // but it does have a isVersionSupported function, so we have to loop through it to get a version number.
  // adapted from https://www.silverlightversion.com/
  var v = [0,0,0,0],
    loopMatch = function(ax, v, i, n) {
      while(ax.isVersionSupported(v[0]+ "."+ v[1] + "." + v[2] + "." + v[3])){
        v[i]+=n;
      }
      v[i] -= n;
    };
  loopMatch(ax, v, 0, 1);
  loopMatch(ax, v, 1, 1);
  loopMatch(ax, v, 2, 10000); // the third place in the version number is usually 5 digits (4.0.xxxxx)
  loopMatch(ax, v, 2, 1000);
  loopMatch(ax, v, 2, 100);
  loopMatch(ax, v, 2, 10);
  loopMatch(ax, v, 2, 1);
  loopMatch(ax, v, 3, 1);

  return v;
});
// add adobe acrobat
/*
PluginDetector.addPlugin('acrobat','Adobe Acrobat','application/pdf','AcroPDF.PDF', function (ax) {
  var version = [],
    d = ax.GetVersions().split(',')[0].split('=')[1].split('.');

  if (d) {
    version = [parseInt(d[0], 10), parseInt(d[1], 10), parseInt(d[2], 10)];
  }
  return version;
});
*/
// necessary detection (fixes for <IE9)
mejs.MediaFeatures = {
  init: function() {
    var
      t = this,
      d = document,
      nav = mejs.PluginDetector.nav,
      ua = mejs.PluginDetector.ua.toLowerCase(),
      i,
      v,
      html5Elements = ['source','track','audio','video'];

    // detect browsers (only the ones that have some kind of quirk we need to work around)
    t.isiPad = (ua.match(/ipad/i) !== null);
    t.isiPhone = (ua.match(/iphone/i) !== null);
    t.isiOS = t.isiPhone || t.isiPad;
    t.isAndroid = (ua.match(/android/i) !== null);
    t.isBustedAndroid = (ua.match(/android 2\.[12]/) !== null);
    t.isBustedNativeHTTPS = (location.protocol === 'https:' && (ua.match(/android [12]\./) !== null || ua.match(/macintosh.* version.* safari/) !== null));
    t.isIE = (nav.appName.toLowerCase().indexOf("microsoft") != -1 || nav.appName.toLowerCase().match(/trident/gi) !== null);
    t.isChrome = (ua.match(/chrome/gi) !== null);
    t.isChromium = (ua.match(/chromium/gi) !== null);
    t.isFirefox = (ua.match(/firefox/gi) !== null);
    t.isWebkit = (ua.match(/webkit/gi) !== null);
    t.isGecko = (ua.match(/gecko/gi) !== null) && !t.isWebkit && !t.isIE;
    t.isOpera = (ua.match(/opera/gi) !== null);
    t.hasTouch = ('ontouchstart' in window); //  && window.ontouchstart != null); // this breaks iOS 7
    
    // borrowed from Modernizr
    t.svg = !! document.createElementNS &&
        !! document.createElementNS('https://www.w3.org/2000/svg','svg').createSVGRect;

    // create HTML5 media elements for IE before 9, get a <video> element for fullscreen detection
    for (i=0; i<html5Elements.length; i++) {
      v = document.createElement(html5Elements[i]);
    }
    
    t.supportsMediaTag = (typeof v.canPlayType !== 'undefined' || t.isBustedAndroid);

    // Fix for IE9 on Windows 7N / Windows 7KN (Media Player not installer)
    try{
      v.canPlayType("video/mp4");
    }catch(e){
      t.supportsMediaTag = false;
    }

    // detect native JavaScript fullscreen (Safari/Firefox only, Chrome still fails)
    
    // iOS
    t.hasSemiNativeFullScreen = (typeof v.webkitEnterFullscreen !== 'undefined');
    
    // W3C
    t.hasNativeFullscreen = (typeof v.requestFullscreen !== 'undefined');
    
    // webkit/firefox/IE11+
    t.hasWebkitNativeFullScreen = (typeof v.webkitRequestFullScreen !== 'undefined');
    t.hasMozNativeFullScreen = (typeof v.mozRequestFullScreen !== 'undefined');
    t.hasMsNativeFullScreen = (typeof v.msRequestFullscreen !== 'undefined');
    
    t.hasTrueNativeFullScreen = (t.hasWebkitNativeFullScreen || t.hasMozNativeFullScreen || t.hasMsNativeFullScreen);
    t.nativeFullScreenEnabled = t.hasTrueNativeFullScreen;
    
    // Enabled?
    if (t.hasMozNativeFullScreen) {
      t.nativeFullScreenEnabled = document.mozFullScreenEnabled;
    } else if (t.hasMsNativeFullScreen) {
      t.nativeFullScreenEnabled = document.msFullscreenEnabled;   
    }
    
    if (t.isChrome) {
      t.hasSemiNativeFullScreen = false;
    }
    
    if (t.hasTrueNativeFullScreen) {
      
      t.fullScreenEventName = '';
      if (t.hasWebkitNativeFullScreen) { 
        t.fullScreenEventName = 'webkitfullscreenchange';
        
      } else if (t.hasMozNativeFullScreen) {
        t.fullScreenEventName = 'mozfullscreenchange';
        
      } else if (t.hasMsNativeFullScreen) {
        t.fullScreenEventName = 'MSFullscreenChange';
      }
      
      t.isFullScreen = function() {
        if (t.hasMozNativeFullScreen) {
          return d.mozFullScreen;
        
        } else if (t.hasWebkitNativeFullScreen) {
          return d.webkitIsFullScreen;
        
        } else if (t.hasMsNativeFullScreen) {
          return d.msFullscreenElement !== null;
        }
      }
          
      t.requestFullScreen = function(el) {
    
        if (t.hasWebkitNativeFullScreen) {
          el.webkitRequestFullScreen();
          
        } else if (t.hasMozNativeFullScreen) {
          el.mozRequestFullScreen();

        } else if (t.hasMsNativeFullScreen) {
          el.msRequestFullscreen();

        }
      }
      
      t.cancelFullScreen = function() {       
        if (t.hasWebkitNativeFullScreen) {
          document.webkitCancelFullScreen();
          
        } else if (t.hasMozNativeFullScreen) {
          document.mozCancelFullScreen();
          
        } else if (t.hasMsNativeFullScreen) {
          document.msExitFullscreen();
          
        }
      } 
      
    }
    
    
    // OS X 10.5 can't do this even if it says it can :(
    if (t.hasSemiNativeFullScreen && ua.match(/mac os x 10_5/i)) {
      t.hasNativeFullScreen = false;
      t.hasSemiNativeFullScreen = false;
    }
    
  }
};
mejs.MediaFeatures.init();

/*
extension methods to <video> or <audio> object to bring it into parity with PluginMediaElement (see below)
*/
mejs.HtmlMediaElement = {
  pluginType: 'native',
  isFullScreen: false,

  setCurrentTime: function (time) {
    this.currentTime = time;
  },

  setMuted: function (muted) {
    this.muted = muted;
  },

  setVolume: function (volume) {
    this.volume = volume;
  },

  // for parity with the plugin versions
  stop: function () {
    this.pause();
  },

  // This can be a url string
  // or an array [{src:'file.mp4',type:'video/mp4'},{src:'file.webm',type:'video/webm'}]
  setSrc: function (url) {
    
    // Fix for IE9 which can't set .src when there are <source> elements. Awesome, right?
    var 
      existingSources = this.getElementsByTagName('source');
    while (existingSources.length > 0){
      this.removeChild(existingSources[0]);
    }
  
    if (typeof url == 'string') {
      this.src = url;
    } else {
      var i, media;

      for (i=0; i<url.length; i++) {
        media = url[i];
        if (this.canPlayType(media.type)) {
          this.src = media.src;
          break;
        }
      }
    }
  },

  setVideoSize: function (width, height) {
    this.width = width;
    this.height = height;
  }
};

/*
Mimics the <video/audio> element by calling Flash's External Interface or Silverlights [ScriptableMember]
*/
mejs.PluginMediaElement = function (pluginid, pluginType, mediaUrl) {
  this.id = pluginid;
  this.pluginType = pluginType;
  this.src = mediaUrl;
  this.events = {};
  this.attributes = {};
};

// JavaScript values and ExternalInterface methods that match HTML5 video properties methods
// https://www.adobe.com/livedocs/flash/9.0/ActionScriptLangRefV3/fl/video/FLVPlayback.html
// https://www.whatwg.org/specs/web-apps/current-work/multipage/video.html
mejs.PluginMediaElement.prototype = {

  // special
  pluginElement: null,
  pluginType: '',
  isFullScreen: false,

  // not implemented :(
  playbackRate: -1,
  defaultPlaybackRate: -1,
  seekable: [],
  played: [],

  // HTML5 read-only properties
  paused: true,
  ended: false,
  seeking: false,
  duration: 0,
  error: null,
  tagName: '',

  // HTML5 get/set properties, but only set (updated by event handlers)
  muted: false,
  volume: 1,
  currentTime: 0,

  // HTML5 methods
  play: function () {
    if (this.pluginApi != null) {
      if (this.pluginType == 'youtube' || this.pluginType == 'vimeo') {
        this.pluginApi.playVideo();
      } else {
        this.pluginApi.playMedia();
      }
      this.paused = false;
    }
  },
  load: function () {
    if (this.pluginApi != null) {
      if (this.pluginType == 'youtube' || this.pluginType == 'vimeo') {
      } else {
        this.pluginApi.loadMedia();
      }
      
      this.paused = false;
    }
  },
  pause: function () {
    if (this.pluginApi != null) {
      if (this.pluginType == 'youtube' || this.pluginType == 'vimeo') {
        this.pluginApi.pauseVideo();
      } else {
        this.pluginApi.pauseMedia();
      }     
      
      
      this.paused = true;
    }
  },
  stop: function () {
    if (this.pluginApi != null) {
      if (this.pluginType == 'youtube' || this.pluginType == 'vimeo') {
        this.pluginApi.stopVideo();
      } else {
        this.pluginApi.stopMedia();
      } 
      this.paused = true;
    }
  },
  canPlayType: function(type) {
    var i,
      j,
      pluginInfo,
      pluginVersions = mejs.plugins[this.pluginType];

    for (i=0; i<pluginVersions.length; i++) {
      pluginInfo = pluginVersions[i];

      // test if user has the correct plugin version
      if (mejs.PluginDetector.hasPluginVersion(this.pluginType, pluginInfo.version)) {

        // test for plugin playback types
        for (j=0; j<pluginInfo.types.length; j++) {
          // find plugin that can play the type
          if (type == pluginInfo.types[j]) {
            return 'probably';
          }
        }
      }
    }

    return '';
  },
  
  positionFullscreenButton: function(x,y,visibleAndAbove) {
    if (this.pluginApi != null && this.pluginApi.positionFullscreenButton) {
      this.pluginApi.positionFullscreenButton(Math.floor(x),Math.floor(y),visibleAndAbove);
    }
  },
  
  hideFullscreenButton: function() {
    if (this.pluginApi != null && this.pluginApi.hideFullscreenButton) {
      this.pluginApi.hideFullscreenButton();
    }   
  },  
  

  // custom methods since not all JavaScript implementations support get/set

  // This can be a url string
  // or an array [{src:'file.mp4',type:'video/mp4'},{src:'file.webm',type:'video/webm'}]
  setSrc: function (url) {
    if (typeof url == 'string') {
      this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(url));
      this.src = mejs.Utility.absolutizeUrl(url);
    } else {
      var i, media;

      for (i=0; i<url.length; i++) {
        media = url[i];
        if (this.canPlayType(media.type)) {
          this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(media.src));
          this.src = mejs.Utility.absolutizeUrl(url);
          break;
        }
      }
    }

  },
  setCurrentTime: function (time) {
    if (this.pluginApi != null) {
      if (this.pluginType == 'youtube' || this.pluginType == 'vimeo') {
        this.pluginApi.seekTo(time);
      } else {
        this.pluginApi.setCurrentTime(time);
      }       
      
      
      
      this.currentTime = time;
    }
  },
  setVolume: function (volume) {
    if (this.pluginApi != null) {
      // same on YouTube and MEjs
      if (this.pluginType == 'youtube') {
        this.pluginApi.setVolume(volume * 100);
      } else {
        this.pluginApi.setVolume(volume);
      }
      this.volume = volume;
    }
  },
  setMuted: function (muted) {
    if (this.pluginApi != null) {
      if (this.pluginType == 'youtube') {
        if (muted) {
          this.pluginApi.mute();
        } else {
          this.pluginApi.unMute();
        }
        this.muted = muted;
        this.dispatchEvent('volumechange');
      } else {
        this.pluginApi.setMuted(muted);
      }
      this.muted = muted;
    }
  },

  // additional non-HTML5 methods
  setVideoSize: function (width, height) {
    
    //if (this.pluginType == 'flash' || this.pluginType == 'silverlight') {
      if (this.pluginElement && this.pluginElement.style) {
        this.pluginElement.style.width = width + 'px';
        this.pluginElement.style.height = height + 'px';
      }
      if (this.pluginApi != null && this.pluginApi.setVideoSize) {
        this.pluginApi.setVideoSize(width, height);
      }
    //}
  },

  setFullscreen: function (fullscreen) {
    if (this.pluginApi != null && this.pluginApi.setFullscreen) {
      this.pluginApi.setFullscreen(fullscreen);
    }
  },
  
  enterFullScreen: function() {
    if (this.pluginApi != null && this.pluginApi.setFullscreen) {
      this.setFullscreen(true);
    }   
    
  },
  
  exitFullScreen: function() {
    if (this.pluginApi != null && this.pluginApi.setFullscreen) {
      this.setFullscreen(false);
    }
  },  

  // start: fake events
  addEventListener: function (eventName, callback, bubble) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(callback);
  },
  removeEventListener: function (eventName, callback) {
    if (!eventName) { this.events = {}; return true; }
    var callbacks = this.events[eventName];
    if (!callbacks) return true;
    if (!callback) { this.events[eventName] = []; return true; }
    for (var i = 0; i < callbacks.length; i++) {
      if (callbacks[i] === callback) {
        this.events[eventName].splice(i, 1);
        return true;
      }
    }
    return false;
  },  
  dispatchEvent: function (eventName) {
    var i,
      args,
      callbacks = this.events[eventName];

    if (callbacks) {
      args = Array.prototype.slice.call(arguments, 1);
      for (i = 0; i < callbacks.length; i++) {
        callbacks[i].apply(this, args);
      }
    }
  },
  // end: fake events
  
  // fake DOM attribute methods
  hasAttribute: function(name){
    return (name in this.attributes);  
  },
  removeAttribute: function(name){
    delete this.attributes[name];
  },
  getAttribute: function(name){
    if (this.hasAttribute(name)) {
      return this.attributes[name];
    }
    return '';
  },
  setAttribute: function(name, value){
    this.attributes[name] = value;
  },

  remove: function() {
    mejs.Utility.removeSwf(this.pluginElement.id);
    mejs.MediaPluginBridge.unregisterPluginElement(this.pluginElement.id);
  }
};

// Handles calls from Flash/Silverlight and reports them as native <video/audio> events and properties
mejs.MediaPluginBridge = {

  pluginMediaElements:{},
  htmlMediaElements:{},

  registerPluginElement: function (id, pluginMediaElement, htmlMediaElement) {
    this.pluginMediaElements[id] = pluginMediaElement;
    this.htmlMediaElements[id] = htmlMediaElement;
  },

  unregisterPluginElement: function (id) {
    delete this.pluginMediaElements[id];
    delete this.htmlMediaElements[id];
  },

  // when Flash/Silverlight is ready, it calls out to this method
  initPlugin: function (id) {

    var pluginMediaElement = this.pluginMediaElements[id],
      htmlMediaElement = this.htmlMediaElements[id];

    if (pluginMediaElement) {
      // find the javascript bridge
      switch (pluginMediaElement.pluginType) {
        case "flash":
          pluginMediaElement.pluginElement = pluginMediaElement.pluginApi = document.getElementById(id);
          break;
        case "silverlight":
          pluginMediaElement.pluginElement = document.getElementById(pluginMediaElement.id);
          pluginMediaElement.pluginApi = pluginMediaElement.pluginElement.Content.MediaElementJS;
          break;
      }
  
      if (pluginMediaElement.pluginApi != null && pluginMediaElement.success) {
        pluginMediaElement.success(pluginMediaElement, htmlMediaElement);
      }
    }
  },

  // receives events from Flash/Silverlight and sends them out as HTML5 media events
  // https://www.whatwg.org/specs/web-apps/current-work/multipage/video.html
  fireEvent: function (id, eventName, values) {

    var
      e,
      i,
      bufferedTime,
      pluginMediaElement = this.pluginMediaElements[id];

    if(!pluginMediaElement){
            return;
        }
        
    // fake event object to mimic real HTML media event.
    e = {
      type: eventName,
      target: pluginMediaElement
    };

    // attach all values to element and event object
    for (i in values) {
      pluginMediaElement[i] = values[i];
      e[i] = values[i];
    }

    // fake the newer W3C buffered TimeRange (loaded and total have been removed)
    bufferedTime = values.bufferedTime || 0;

    e.target.buffered = e.buffered = {
      start: function(index) {
        return 0;
      },
      end: function (index) {
        return bufferedTime;
      },
      length: 1
    };

    pluginMediaElement.dispatchEvent(e.type, e);
  }
};

/*
Default options
*/
mejs.MediaElementDefaults = {
  // allows testing on HTML5, flash, silverlight
  // auto: attempts to detect what the browser can do
  // auto_plugin: prefer plugins and then attempt native HTML5
  // native: forces HTML5 playback
  // shim: disallows HTML5, will attempt either Flash or Silverlight
  // none: forces fallback view
  mode: 'auto',
  // remove or reorder to change plugin priority and availability
  plugins: ['flash','silverlight','youtube','vimeo'],
  // shows debug errors on screen
  enablePluginDebug: false,
  // use plugin for browsers that have trouble with Basic Authentication on HTTPS sites
  httpsBasicAuthSite: false,
  // overrides the type specified, useful for dynamic instantiation
  type: '',
  // path to Flash and Silverlight plugins
  pluginPath: mejs.Utility.getScriptPath(['mediaelement.js','mediaelement.min.js','mediaelement-and-player.js','mediaelement-and-player.min.js']),
  // name of flash file
  flashName: 'flashmediaelement.swf',
  // streamer for RTMP streaming
  flashStreamer: '',
  // turns on the smoothing filter in Flash
  enablePluginSmoothing: false,
  // enabled pseudo-streaming (seek) on .mp4 files
  enablePseudoStreaming: false,
  // start query parameter sent to server for pseudo-streaming
  pseudoStreamingStartQueryParam: 'start',
  // name of silverlight file
  silverlightName: 'silverlightmediaelement.xap',
  // default if the <video width> is not specified
  defaultVideoWidth: 480,
  // default if the <video height> is not specified
  defaultVideoHeight: 270,
  // overrides <video width>
  pluginWidth: -1,
  // overrides <video height>
  pluginHeight: -1,
  // additional plugin variables in 'key=value' form
  pluginVars: [], 
  // rate in milliseconds for Flash and Silverlight to fire the timeupdate event
  // larger number is less accurate, but less strain on plugin->JavaScript bridge
  timerRate: 250,
  // initial volume for player
  startVolume: 0.8,
  success: function () { },
  error: function () { }
};

/*
Determines if a browser supports the <video> or <audio> element
and returns either the native element or a Flash/Silverlight version that
mimics HTML5 MediaElement
*/
mejs.MediaElement = function (el, o) {
  return mejs.HtmlMediaElementShim.create(el,o);
};

mejs.HtmlMediaElementShim = {

  create: function(el, o) {
    var
      options = mejs.MediaElementDefaults,
      htmlMediaElement = (typeof(el) == 'string') ? document.getElementById(el) : el,
      tagName = htmlMediaElement.tagName.toLowerCase(),
      isMediaTag = (tagName === 'audio' || tagName === 'video'),
      src = (isMediaTag) ? htmlMediaElement.getAttribute('src') : htmlMediaElement.getAttribute('href'),
      poster = htmlMediaElement.getAttribute('poster'),
      autoplay =  htmlMediaElement.getAttribute('autoplay'),
      preload =  htmlMediaElement.getAttribute('preload'),
      controls =  htmlMediaElement.getAttribute('controls'),
      playback,
      prop;

    // extend options
    for (prop in o) {
      options[prop] = o[prop];
    }

    // clean up attributes
    src =     (typeof src == 'undefined'  || src === null || src == '') ? null : src;   
    poster =  (typeof poster == 'undefined'   || poster === null) ? '' : poster;
    preload =   (typeof preload == 'undefined'  || preload === null || preload === 'false') ? 'none' : preload;
    autoplay =  !(typeof autoplay == 'undefined' || autoplay === null || autoplay === 'false');
    controls =  !(typeof controls == 'undefined' || controls === null || controls === 'false');

    // test for HTML5 and plugin capabilities
    playback = this.determinePlayback(htmlMediaElement, options, mejs.MediaFeatures.supportsMediaTag, isMediaTag, src);
    playback.url = (playback.url !== null) ? mejs.Utility.absolutizeUrl(playback.url) : '';

    if (playback.method == 'native') {
      // second fix for android
      if (mejs.MediaFeatures.isBustedAndroid) {
        htmlMediaElement.src = playback.url;
        htmlMediaElement.addEventListener('click', function() {
          htmlMediaElement.play();
        }, false);
      }
    
      // add methods to native HTMLMediaElement
      return this.updateNative(playback, options, autoplay, preload);
    } else if (playback.method !== '') {
      // create plugin to mimic HTMLMediaElement
      
      return this.createPlugin( playback,  options, poster, autoplay, preload, controls);
    } else {
      // boo, no HTML5, no Flash, no Silverlight.
      this.createErrorMessage( playback, options, poster );
      
      return this;
    }
  },
  
  determinePlayback: function(htmlMediaElement, options, supportsMediaTag, isMediaTag, src) {
    var
      mediaFiles = [],
      i,
      j,
      k,
      l,
      n,
      type,
      result = { method: '', url: '', htmlMediaElement: htmlMediaElement, isVideo: (htmlMediaElement.tagName.toLowerCase() != 'audio')},
      pluginName,
      pluginVersions,
      pluginInfo,
      dummy,
      media;
      
    // STEP 1: Get URL and type from <video src> or <source src>

    // supplied type overrides <video type> and <source type>
    if (typeof options.type != 'undefined' && options.type !== '') {
      
      // accept either string or array of types
      if (typeof options.type == 'string') {
        mediaFiles.push({type:options.type, url:src});
      } else {
        
        for (i=0; i<options.type.length; i++) {
          mediaFiles.push({type:options.type[i], url:src});
        }
      }

    // test for src attribute first
    } else if (src !== null) {
      type = this.formatType(src, htmlMediaElement.getAttribute('type'));
      mediaFiles.push({type:type, url:src});

    // then test for <source> elements
    } else {
      // test <source> types to see if they are usable
      for (i = 0; i < htmlMediaElement.childNodes.length; i++) {
        n = htmlMediaElement.childNodes[i];
        if (n.nodeType == 1 && n.tagName.toLowerCase() == 'source') {
          src = n.getAttribute('src');
          type = this.formatType(src, n.getAttribute('type'));
          media = n.getAttribute('media');

          if (!media || !window.matchMedia || (window.matchMedia && window.matchMedia(media).matches)) {
            mediaFiles.push({type:type, url:src});
          }
        }
      }
    }
    
    // in the case of dynamicly created players
    // check for audio types
    if (!isMediaTag && mediaFiles.length > 0 && mediaFiles[0].url !== null && this.getTypeFromFile(mediaFiles[0].url).indexOf('audio') > -1) {
      result.isVideo = false;
    }
    

    // STEP 2: Test for playback method
    
    // special case for Android which sadly doesn't implement the canPlayType function (always returns '')
    if (mejs.MediaFeatures.isBustedAndroid) {
      htmlMediaElement.canPlayType = function(type) {
        return (type.match(/video\/(mp4|m4v)/gi) !== null) ? 'maybe' : '';
      };
    }   
    
    // special case for Chromium to specify natively supported video codecs (i.e. WebM and Theora) 
    if (mejs.MediaFeatures.isChromium) { 
      htmlMediaElement.canPlayType = function(type) { 
        return (type.match(/video\/(webm|ogv|ogg)/gi) !== null) ? 'maybe' : ''; 
      }; 
    }

    // test for native playback first
    if (supportsMediaTag && (options.mode === 'auto' || options.mode === 'auto_plugin' || options.mode === 'native')  && !(mejs.MediaFeatures.isBustedNativeHTTPS && options.httpsBasicAuthSite === true)) {
            
      if (!isMediaTag) {

        // create a real HTML5 Media Element 
        dummy = document.createElement( result.isVideo ? 'video' : 'audio');      
        htmlMediaElement.parentNode.insertBefore(dummy, htmlMediaElement);
        htmlMediaElement.style.display = 'none';
        
        // use this one from now on
        result.htmlMediaElement = htmlMediaElement = dummy;
      }
        
      for (i=0; i<mediaFiles.length; i++) {
        // normal check
        if (mediaFiles[i].type == "video/m3u8" || htmlMediaElement.canPlayType(mediaFiles[i].type).replace(/no/, '') !== ''
          // special case for Mac/Safari 5.0.3 which answers '' to canPlayType('audio/mp3') but 'maybe' to canPlayType('audio/mpeg')
          || htmlMediaElement.canPlayType(mediaFiles[i].type.replace(/mp3/,'mpeg')).replace(/no/, '') !== ''
          // special case for m4a supported by detecting mp4 support
          || htmlMediaElement.canPlayType(mediaFiles[i].type.replace(/m4a/,'mp4')).replace(/no/, '') !== '') {
          result.method = 'native';
          result.url = mediaFiles[i].url;
          break;
        }
      }     
      
      if (result.method === 'native') {
        if (result.url !== null) {
          htmlMediaElement.src = result.url;
        }
      
        // if `auto_plugin` mode, then cache the native result but try plugins.
        if (options.mode !== 'auto_plugin') {
          return result;
        }
      }
    }

    // if native playback didn't work, then test plugins
    if (options.mode === 'auto' || options.mode === 'auto_plugin' || options.mode === 'shim') {
      for (i=0; i<mediaFiles.length; i++) {
        type = mediaFiles[i].type;

        // test all plugins in order of preference [silverlight, flash]
        for (j=0; j<options.plugins.length; j++) {

          pluginName = options.plugins[j];
      
          // test version of plugin (for future features)
          pluginVersions = mejs.plugins[pluginName];        
          
          for (k=0; k<pluginVersions.length; k++) {
            pluginInfo = pluginVersions[k];
          
            // test if user has the correct plugin version
            
            // for youtube/vimeo
            if (pluginInfo.version == null || 
              
              mejs.PluginDetector.hasPluginVersion(pluginName, pluginInfo.version)) {

              // test for plugin playback types
              for (l=0; l<pluginInfo.types.length; l++) {
                // find plugin that can play the type
                if (type == pluginInfo.types[l]) {
                  result.method = pluginName;
                  result.url = mediaFiles[i].url;
                  return result;
                }
              }
            }
          }
        }
      }
    }
    
    // at this point, being in 'auto_plugin' mode implies that we tried plugins but failed.
    // if we have native support then return that.
    if (options.mode === 'auto_plugin' && result.method === 'native') {
      return result;
    }

    // what if there's nothing to play? just grab the first available
    if (result.method === '' && mediaFiles.length > 0) {
      result.url = mediaFiles[0].url;
    }

    return result;
  },

  formatType: function(url, type) {
    var ext;

    // if no type is supplied, fake it with the extension
    if (url && !type) {   
      return this.getTypeFromFile(url);
    } else {
      // only return the mime part of the type in case the attribute contains the codec
      // see https://www.whatwg.org/specs/web-apps/current-work/multipage/video.html#the-source-element
      // `video/mp4; codecs="avc1.42E01E, mp4a.40.2"` becomes `video/mp4`
      
      if (type && ~type.indexOf(';')) {
        return type.substr(0, type.indexOf(';')); 
      } else {
        return type;
      }
    }
  },
  
  getTypeFromFile: function(url) {
    url = url.split('?')[0];
    var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
    return (/(mp4|m4v|ogg|ogv|m3u8|webm|webmv|flv|wmv|mpeg|mov)/gi.test(ext) ? 'video' : 'audio') + '/' + this.getTypeFromExtension(ext);
  },
  
  getTypeFromExtension: function(ext) {
    
    switch (ext) {
      case 'mp4':
      case 'm4v':
      case 'm4a':
        return 'mp4';
      case 'webm':
      case 'webma':
      case 'webmv': 
        return 'webm';
      case 'ogg':
      case 'oga':
      case 'ogv': 
        return 'ogg';
      default:
        return ext;
    }
  },

  createErrorMessage: function(playback, options, poster) {
    var 
      htmlMediaElement = playback.htmlMediaElement,
      errorContainer = document.createElement('div');
      
    errorContainer.className = 'me-cannotplay';

    try {
      errorContainer.style.width = htmlMediaElement.width + 'px';
      errorContainer.style.height = htmlMediaElement.height + 'px';
    } catch (e) {}

    if (options.customError) {
      errorContainer.innerHTML = options.customError;
    } else {
      errorContainer.innerHTML = (poster !== '') ?
        '<a href="' + playback.url + '"><img src="' + poster + '" width="100%" height="100%" /></a>' :
        '<a href="' + playback.url + '"><span>' + mejs.i18n.t('Download File') + '</span></a>';
    }

    htmlMediaElement.parentNode.insertBefore(errorContainer, htmlMediaElement);
    htmlMediaElement.style.display = 'none';

    options.error(htmlMediaElement);
  },

  createPlugin:function(playback, options, poster, autoplay, preload, controls) {
    var 
      htmlMediaElement = playback.htmlMediaElement,
      width = 1,
      height = 1,
      pluginid = 'me_' + playback.method + '_' + (mejs.meIndex++),
      pluginMediaElement = new mejs.PluginMediaElement(pluginid, playback.method, playback.url),
      container = document.createElement('div'),
      specialIEContainer,
      node,
      initVars;

    // copy tagName from html media element
    pluginMediaElement.tagName = htmlMediaElement.tagName

    // copy attributes from html media element to plugin media element
    for (var i = 0; i < htmlMediaElement.attributes.length; i++) {
      var attribute = htmlMediaElement.attributes[i];
      if (attribute.specified == true) {
        pluginMediaElement.setAttribute(attribute.name, attribute.value);
      }
    }

    // check for placement inside a <p> tag (sometimes WYSIWYG editors do this)
    node = htmlMediaElement.parentNode;
    while (node !== null && node.tagName.toLowerCase() !== 'body' && node.parentNode != null) {
      if (node.parentNode.tagName.toLowerCase() === 'p') {
        node.parentNode.parentNode.insertBefore(node, node.parentNode);
        break;
      }
      node = node.parentNode;
    }

    if (playback.isVideo) {
      width = (options.pluginWidth > 0) ? options.pluginWidth : (options.videoWidth > 0) ? options.videoWidth : (htmlMediaElement.getAttribute('width') !== null) ? htmlMediaElement.getAttribute('width') : options.defaultVideoWidth;
      height = (options.pluginHeight > 0) ? options.pluginHeight : (options.videoHeight > 0) ? options.videoHeight : (htmlMediaElement.getAttribute('height') !== null) ? htmlMediaElement.getAttribute('height') : options.defaultVideoHeight;
    
      // in case of '%' make sure it's encoded
      width = mejs.Utility.encodeUrl(width);
      height = mejs.Utility.encodeUrl(height);
    
    } else {
      if (options.enablePluginDebug) {
        width = 320;
        height = 240;
      }
    }

    // register plugin
    pluginMediaElement.success = options.success;
    mejs.MediaPluginBridge.registerPluginElement(pluginid, pluginMediaElement, htmlMediaElement);

    // add container (must be added to DOM before inserting HTML for IE)
    container.className = 'me-plugin';
    container.id = pluginid + '_container';
    
    if (playback.isVideo) {
        htmlMediaElement.parentNode.insertBefore(container, htmlMediaElement);
    } else {
        document.body.insertBefore(container, document.body.childNodes[0]);
    }

    // flash/silverlight vars
    initVars = [
      'id=' + pluginid,
      'jsinitfunction=' + "mejs.MediaPluginBridge.initPlugin",
      'jscallbackfunction=' + "mejs.MediaPluginBridge.fireEvent",
      'isvideo=' + ((playback.isVideo) ? "true" : "false"),
      'autoplay=' + ((autoplay) ? "true" : "false"),
      'preload=' + preload,
      'width=' + width,
      'startvolume=' + options.startVolume,
      'timerrate=' + options.timerRate,
      'flashstreamer=' + options.flashStreamer,
      'height=' + height,
      'pseudostreamstart=' + options.pseudoStreamingStartQueryParam];

    if (playback.url !== null) {
      if (playback.method == 'flash') {
        initVars.push('file=' + mejs.Utility.encodeUrl(playback.url));
      } else {
        initVars.push('file=' + playback.url);
      }
    }
    if (options.enablePluginDebug) {
      initVars.push('debug=true');
    }
    if (options.enablePluginSmoothing) {
      initVars.push('smoothing=true');
    }
    if (options.enablePseudoStreaming) {
      initVars.push('pseudostreaming=true');
    }
    if (controls) {
      initVars.push('controls=true'); // shows controls in the plugin if desired
    }
    if (options.pluginVars) {
      initVars = initVars.concat(options.pluginVars);
    }   

    switch (playback.method) {
      case 'silverlight':
        container.innerHTML =
'<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="' + pluginid + '" name="' + pluginid + '" width="' + width + '" height="' + height + '" class="mejs-shim">' +
'<param name="initParams" value="' + initVars.join(',') + '" />' +
'<param name="windowless" value="true" />' +
'<param name="background" value="black" />' +
'<param name="minRuntimeVersion" value="3.0.0.0" />' +
'<param name="autoUpgrade" value="true" />' +
'<param name="source" value="' + options.pluginPath + options.silverlightName + '" />' +
'</object>';
          break;

      case 'flash':

        if (mejs.MediaFeatures.isIE) {
          specialIEContainer = document.createElement('div');
          container.appendChild(specialIEContainer);
          specialIEContainer.outerHTML =
'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" ' +
'id="' + pluginid + '" width="' + width + '" height="' + height + '" class="mejs-shim">' +
'<param name="movie" value="' + options.pluginPath + options.flashName + '?x=' + (new Date()) + '" />' +
'<param name="flashvars" value="' + initVars.join('&amp;') + '" />' +
'<param name="quality" value="high" />' +
'<param name="bgcolor" value="#000000" />' +
'<param name="wmode" value="transparent" />' +
'<param name="allowScriptAccess" value="always" />' +
'<param name="allowFullScreen" value="true" />' +
'<param name="scale" value="default" />' + 
'</object>';

        } else {

          container.innerHTML =
'<embed id="' + pluginid + '" name="' + pluginid + '" ' +
'play="true" ' +
'loop="false" ' +
'quality="high" ' +
'bgcolor="#000000" ' +
'wmode="transparent" ' +
'allowScriptAccess="always" ' +
'allowFullScreen="true" ' +
'type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" ' +
'src="' + options.pluginPath + options.flashName + '" ' +
'flashvars="' + initVars.join('&') + '" ' +
'width="' + width + '" ' +
'height="' + height + '" ' +
'scale="default"' + 
'class="mejs-shim"></embed>';
        }
        break;
      
      case 'youtube':
      
        
        var videoId;
        // youtu.be url from share button
        if (playback.url.lastIndexOf("youtu.be") != -1) {
          videoId = playback.url.substr(playback.url.lastIndexOf('/')+1);
          if (videoId.indexOf('?') != -1) {
            videoId = videoId.substr(0, videoId.indexOf('?'));
          }
        }
        else {
          videoId = playback.url.substr(playback.url.lastIndexOf('=')+1);
        }
        youtubeSettings = {
            container: container,
            containerId: container.id,
            pluginMediaElement: pluginMediaElement,
            pluginId: pluginid,
            videoId: videoId,
            height: height,
            width: width  
          };        
        
        if (mejs.PluginDetector.hasPluginVersion('flash', [10,0,0]) ) {
          mejs.YouTubeApi.createFlash(youtubeSettings);
        } else {
          mejs.YouTubeApi.enqueueIframe(youtubeSettings);   
        }
        
        break;
      
      // DEMO Code. Does NOT work.
      case 'vimeo':
        var player_id = pluginid + "_player";
        pluginMediaElement.vimeoid = playback.url.substr(playback.url.lastIndexOf('/')+1);
        
        container.innerHTML ='<iframe src="//player.vimeo.com/video/' + pluginMediaElement.vimeoid + '?api=1&portrait=0&byline=0&title=0&player_id=' + player_id + '" width="' + width +'" height="' + height +'" frameborder="0" class="mejs-shim" id="' + player_id + '" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
        if (typeof($f) == 'function') { // froogaloop available
          var player = $f(container.childNodes[0]);
          
          player.addEvent('ready', function() {
            
            player.playVideo = function() {
              player.api( 'play' );
            } 
            player.stopVideo = function() {
              player.api( 'unload' );
            } 
            player.pauseVideo = function() {
              player.api( 'pause' );
            } 
            player.seekTo = function( seconds ) {
              player.api( 'seekTo', seconds );
            }
            player.setVolume = function( volume ) {
              player.api( 'setVolume', volume );
            }
            player.setMuted = function( muted ) {
              if( muted ) {
                player.lastVolume = player.api( 'getVolume' );
                player.api( 'setVolume', 0 );
              } else {
                player.api( 'setVolume', player.lastVolume );
                delete player.lastVolume;
              }
            }           

            function createEvent(player, pluginMediaElement, eventName, e) {
              var obj = {
                type: eventName,
                target: pluginMediaElement
              };
              if (eventName == 'timeupdate') {
                pluginMediaElement.currentTime = obj.currentTime = e.seconds;
                pluginMediaElement.duration = obj.duration = e.duration;
              }
              pluginMediaElement.dispatchEvent(obj.type, obj);
            }

            player.addEvent('play', function() {
              createEvent(player, pluginMediaElement, 'play');
              createEvent(player, pluginMediaElement, 'playing');
            });

            player.addEvent('pause', function() {
              createEvent(player, pluginMediaElement, 'pause');
            });

            player.addEvent('finish', function() {
              createEvent(player, pluginMediaElement, 'ended');
            });

            player.addEvent('playProgress', function(e) {
              createEvent(player, pluginMediaElement, 'timeupdate', e);
            });

            pluginMediaElement.pluginElement = container;
            pluginMediaElement.pluginApi = player;

            // init mejs
            mejs.MediaPluginBridge.initPlugin(pluginid);
          });
        }
        else {
          console.warn("You need to include froogaloop for vimeo to work");
        }
        break;      
    }
    // hide original element
    htmlMediaElement.style.display = 'none';
    // prevent browser from autoplaying when using a plugin
    htmlMediaElement.removeAttribute('autoplay');

    // FYI: options.success will be fired by the MediaPluginBridge
    
    return pluginMediaElement;
  },

  updateNative: function(playback, options, autoplay, preload) {
    
    var htmlMediaElement = playback.htmlMediaElement,
      m;
    
    
    // add methods to video object to bring it into parity with Flash Object
    for (m in mejs.HtmlMediaElement) {
      htmlMediaElement[m] = mejs.HtmlMediaElement[m];
    }

    /*
    Chrome now supports preload="none"
    if (mejs.MediaFeatures.isChrome) {
    
      // special case to enforce preload attribute (Chrome doesn't respect this)
      if (preload === 'none' && !autoplay) {
      
        // forces the browser to stop loading (note: fails in IE9)
        htmlMediaElement.src = '';
        htmlMediaElement.load();
        htmlMediaElement.canceledPreload = true;

        htmlMediaElement.addEventListener('play',function() {
          if (htmlMediaElement.canceledPreload) {
            htmlMediaElement.src = playback.url;
            htmlMediaElement.load();
            htmlMediaElement.play();
            htmlMediaElement.canceledPreload = false;
          }
        }, false);
      // for some reason Chrome forgets how to autoplay sometimes.
      } else if (autoplay) {
        htmlMediaElement.load();
        htmlMediaElement.play();
      }
    }
    */

    // fire success code
    options.success(htmlMediaElement, htmlMediaElement);
    
    return htmlMediaElement;
  }
};

/*
 - test on IE (object vs. embed)
 - determine when to use iframe (Firefox, Safari, Mobile) vs. Flash (Chrome, IE)
 - fullscreen?
*/

// YouTube Flash and Iframe API
mejs.YouTubeApi = {
  isIframeStarted: false,
  isIframeLoaded: false,
  loadIframeApi: function() {
    if (!this.isIframeStarted) {
      var tag = document.createElement('script');
      tag.src = "//www.youtube.com/player_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      this.isIframeStarted = true;
    }
  },
  iframeQueue: [],
  enqueueIframe: function(yt) {
    
    if (this.isLoaded) {
      this.createIframe(yt);
    } else {
      this.loadIframeApi();
      this.iframeQueue.push(yt);
    }
  },
  createIframe: function(settings) {
    
    var
    pluginMediaElement = settings.pluginMediaElement, 
    player = new YT.Player(settings.containerId, {
      height: settings.height,
      width: settings.width,
      videoId: settings.videoId,
      playerVars: {controls:0},
      events: {
        'onReady': function() {
          
          // hook up iframe object to MEjs
          settings.pluginMediaElement.pluginApi = player;
          
          // init mejs
          mejs.MediaPluginBridge.initPlugin(settings.pluginId);
          
          // create timer
          setInterval(function() {
            mejs.YouTubeApi.createEvent(player, pluginMediaElement, 'timeupdate');
          }, 250);          
        },
        'onStateChange': function(e) {
          
          mejs.YouTubeApi.handleStateChange(e.data, player, pluginMediaElement);
          
        }
      }
    });
  },
  
  createEvent: function (player, pluginMediaElement, eventName) {
    var obj = {
      type: eventName,
      target: pluginMediaElement
    };

    if (player && player.getDuration) {
      
      // time 
      pluginMediaElement.currentTime = obj.currentTime = player.getCurrentTime();
      pluginMediaElement.duration = obj.duration = player.getDuration();
      
      // state
      obj.paused = pluginMediaElement.paused;
      obj.ended = pluginMediaElement.ended;     
      
      // sound
      obj.muted = player.isMuted();
      obj.volume = player.getVolume() / 100;
      
      // progress
      obj.bytesTotal = player.getVideoBytesTotal();
      obj.bufferedBytes = player.getVideoBytesLoaded();
      
      // fake the W3C buffered TimeRange
      var bufferedTime = obj.bufferedBytes / obj.bytesTotal * obj.duration;
      
      obj.target.buffered = obj.buffered = {
        start: function(index) {
          return 0;
        },
        end: function (index) {
          return bufferedTime;
        },
        length: 1
      };

    }
    
    // send event up the chain
    pluginMediaElement.dispatchEvent(obj.type, obj);
  },  
  
  iFrameReady: function() {
    
    this.isLoaded = true;
    this.isIframeLoaded = true;
    
    while (this.iframeQueue.length > 0) {
      var settings = this.iframeQueue.pop();
      this.createIframe(settings);
    } 
  },
  
  // FLASH!
  flashPlayers: {},
  createFlash: function(settings) {
    
    this.flashPlayers[settings.pluginId] = settings;
    
    /*
    settings.container.innerHTML =
      '<object type="application/x-shockwave-flash" id="' + settings.pluginId + '" data="//www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid=' + settings.pluginId  + '&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0" ' +
        'width="' + settings.width + '" height="' + settings.height + '" style="visibility: visible; " class="mejs-shim">' +
        '<param name="allowScriptAccess" value="always">' +
        '<param name="wmode" value="transparent">' +
      '</object>';
    */

    var specialIEContainer,
      youtubeUrl = '//www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid=' + settings.pluginId  + '&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0';
      
    if (mejs.MediaFeatures.isIE) {
      
      specialIEContainer = document.createElement('div');
      settings.container.appendChild(specialIEContainer);
      specialIEContainer.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" ' +
'id="' + settings.pluginId + '" width="' + settings.width + '" height="' + settings.height + '" class="mejs-shim">' +
  '<param name="movie" value="' + youtubeUrl + '" />' +
  '<param name="wmode" value="transparent" />' +
  '<param name="allowScriptAccess" value="always" />' +
  '<param name="allowFullScreen" value="true" />' +
'</object>';
    } else {
    settings.container.innerHTML =
      '<object type="application/x-shockwave-flash" id="' + settings.pluginId + '" data="' + youtubeUrl + '" ' +
        'width="' + settings.width + '" height="' + settings.height + '" style="visibility: visible; " class="mejs-shim">' +
        '<param name="allowScriptAccess" value="always">' +
        '<param name="wmode" value="transparent">' +
      '</object>';
    }   
    
  },
  
  flashReady: function(id) {
    var
      settings = this.flashPlayers[id],
      player = document.getElementById(id),
      pluginMediaElement = settings.pluginMediaElement;
    
    // hook up and return to MediaELementPlayer.success 
    pluginMediaElement.pluginApi = 
    pluginMediaElement.pluginElement = player;
    mejs.MediaPluginBridge.initPlugin(id);
    
    // load the youtube video
    player.cueVideoById(settings.videoId);
    
    var callbackName = settings.containerId + '_callback';
    
    window[callbackName] = function(e) {
      mejs.YouTubeApi.handleStateChange(e, player, pluginMediaElement);
    }
    
    player.addEventListener('onStateChange', callbackName);
    
    setInterval(function() {
      mejs.YouTubeApi.createEvent(player, pluginMediaElement, 'timeupdate');
    }, 250);
    
    mejs.YouTubeApi.createEvent(player, pluginMediaElement, 'canplay');
  },
  
  handleStateChange: function(youTubeState, player, pluginMediaElement) {
    switch (youTubeState) {
      case -1: // not started
        pluginMediaElement.paused = true;
        pluginMediaElement.ended = true;
        mejs.YouTubeApi.createEvent(player, pluginMediaElement, 'loadedmetadata');
        //createYouTubeEvent(player, pluginMediaElement, 'loadeddata');
        break;
      case 0:
        pluginMediaElement.paused = false;
        pluginMediaElement.ended = true;
        mejs.YouTubeApi.createEvent(player, pluginMediaElement, 'ended');
        break;
      case 1:
        pluginMediaElement.paused = false;
        pluginMediaElement.ended = false;       
        mejs.YouTubeApi.createEvent(player, pluginMediaElement, 'play');
        mejs.YouTubeApi.createEvent(player, pluginMediaElement, 'playing');
        break;
      case 2:
        pluginMediaElement.paused = true;
        pluginMediaElement.ended = false;       
        mejs.YouTubeApi.createEvent(player, pluginMediaElement, 'pause');
        break;
      case 3: // buffering
        mejs.YouTubeApi.createEvent(player, pluginMediaElement, 'progress');
        break;
      case 5:
        // cued?
        break;            
      
    }     
    
  }
}
// IFRAME
function onYouTubePlayerAPIReady() {
  mejs.YouTubeApi.iFrameReady();
}
// FLASH
function onYouTubePlayerReady(id) {
  mejs.YouTubeApi.flashReady(id);
}

window.mejs = mejs;
window.MediaElement = mejs.MediaElement;

/*
 * Adds Internationalization and localization to mediaelement.
 *
 * This file does not contain translations, you have to add them manually.
 * The schema is always the same: me-i18n-locale-[IETF-language-tag].js
 *
 * Examples are provided both for german and chinese translation.
 *
 *
 * What is the concept beyond i18n?
 *   https://en.wikipedia.org/wiki/Internationalization_and_localization
 *
 * What langcode should i use?
 *   https://en.wikipedia.org/wiki/IETF_language_tag
 *   https://tools.ietf.org/html/rfc5646
 *
 *
 * License?
 *
 *   The i18n file uses methods from the Drupal project (drupal.js):
 *     - i18n.methods.t() (modified)
 *     - i18n.methods.checkPlain() (full copy)
 *
 *   The Drupal project is (like mediaelementjs) licensed under GPLv2.
 *    - https://drupal.org/licensing/faq/#q1
 *    - https://github.com/johndyer/mediaelement
 *    - https://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 *
 *
 * @author
 *   Tim Latz (latz.tim@gmail.com)
 *
 *
 * @params
 *  - context - document, iframe ..
 *  - exports - CommonJS, window ..
 *
 */
;(function(context, exports, undefined) {
    "use strict";

    var i18n = {
        "locale": {
            // Ensure previous values aren't overwritten.
            "language" : (exports.i18n && exports.i18n.locale.language) || '',
            "strings" : (exports.i18n && exports.i18n.locale.strings) || {}
        },
        "ietf_lang_regex" : /^(x\-)?[a-z]{2,}(\-\w{2,})?(\-\w{2,})?$/,
        "methods" : {}
    };
// start i18n


    /**
     * Get language, fallback to browser's language if empty
     *
     * IETF: RFC 5646, https://tools.ietf.org/html/rfc5646
     * Examples: en, zh-CN, cmn-Hans-CN, sr-Latn-RS, es-419, x-private
     */
    i18n.getLanguage = function () {
        var language = i18n.locale.language || window.navigator.userLanguage || window.navigator.language;
        return i18n.ietf_lang_regex.exec(language) ? language : null;

        //(WAS: convert to iso 639-1 (2-letters, lower case))
        //return language.substr(0, 2).toLowerCase();
    };

    // i18n fixes for compatibility with WordPress
    if ( typeof mejsL10n != 'undefined' ) {
        i18n.locale.language = mejsL10n.language;
    }



    /**
     * Encode special characters in a plain-text string for display as HTML.
     */
    i18n.methods.checkPlain = function (str) {
        var character, regex,
        replace = {
            '&': '&amp;',
            '"': '&quot;',
            '<': '&lt;',
            '>': '&gt;'
        };
        str = String(str);
        for (character in replace) {
            if (replace.hasOwnProperty(character)) {
                regex = new RegExp(character, 'g');
                str = str.replace(regex, replace[character]);
            }
        }
        return str;
    };

    /**
     * Translate strings to the page language or a given language.
     *
     *
     * @param str
     *   A string containing the English string to translate.
     *
     * @param options
     *   - 'context' (defaults to the default context): The context the source string
     *     belongs to.
     *
     * @return
     *   The translated string, escaped via i18n.methods.checkPlain()
     */
    i18n.methods.t = function (str, options) {

        // Fetch the localized version of the string.
        if (i18n.locale.strings && i18n.locale.strings[options.context] && i18n.locale.strings[options.context][str]) {
            str = i18n.locale.strings[options.context][str];
        }

        return i18n.methods.checkPlain(str);
    };


    /**
     * Wrapper for i18n.methods.t()
     *
     * @see i18n.methods.t()
     * @throws InvalidArgumentException
     */
    i18n.t = function(str, options) {

        if (typeof str === 'string' && str.length > 0) {

            // check every time due language can change for
            // different reasons (translation, lang switcher ..)
            var language = i18n.getLanguage();

            options = options || {
                "context" : language
            };

            return i18n.methods.t(str, options);
        }
        else {
            throw {
                "name" : 'InvalidArgumentException',
                "message" : 'First argument is either not a string or empty.'
            };
        }
    };

// end i18n
    exports.i18n = i18n;
}(document, mejs));

// i18n fixes for compatibility with WordPress
;(function(exports, undefined) {

    "use strict";

    if ( typeof mejsL10n != 'undefined' ) {
        exports[mejsL10n.language] = mejsL10n.strings;
    }

}(mejs.i18n.locale.strings));

/*!
 *
 * MediaElementPlayer
 * https://mediaelementjs.com/
 *
 * Creates a controller bar for HTML5 <video> add <audio> tags
 * using jQuery and MediaElement.js (HTML5 Flash/Silverlight wrapper)
 *
 * Copyright 2010-2013, John Dyer (https://j.hn/)
 * License: MIT
 *
 */
if (typeof jQuery != 'undefined') {
  mejs.$ = jQuery;
} else if (typeof ender != 'undefined') {
  mejs.$ = ender;
}
(function ($) {

  // default player values
  mejs.MepDefaults = {
    // url to poster (to fix iOS 3.x)
    poster: '',
    // When the video is ended, we can show the poster.
    showPosterWhenEnded: false,
    // default if the <video width> is not specified
    defaultVideoWidth: 480,
    // default if the <video height> is not specified
    defaultVideoHeight: 270,
    // if set, overrides <video width>
    videoWidth: -1,
    // if set, overrides <video height>
    videoHeight: -1,
    // default if the user doesn't specify
    defaultAudioWidth: 400,
    // default if the user doesn't specify
    defaultAudioHeight: 30,

    // default amount to move back when back key is pressed
    defaultSeekBackwardInterval: function(media) {
      return (media.duration * 0.05);
    },
    // default amount to move forward when forward key is pressed
    defaultSeekForwardInterval: function(media) {
      return (media.duration * 0.05);
    },

    // set dimensions via JS instead of CSS
    setDimensions: true,

    // width of audio player
    audioWidth: -1,
    // height of audio player
    audioHeight: -1,
    // initial volume when the player starts (overrided by user cookie)
    startVolume: 0.8,
    // useful for <audio> player loops
    loop: false,
    // rewind to beginning when media ends
                autoRewind: true,
    // resize to media dimensions
    enableAutosize: true,
    // forces the hour marker (##:00:00)
    alwaysShowHours: false,

    // show framecount in timecode (##:00:00:00)
    showTimecodeFrameCount: false,
    // used when showTimecodeFrameCount is set to true
    framesPerSecond: 25,

    // automatically calculate the width of the progress bar based on the sizes of other elements
    autosizeProgress : true,
    // Hide controls when playing and mouse is not over the video
    alwaysShowControls: false,
    // Display the video control
    hideVideoControlsOnLoad: false,
    // Enable click video element to toggle play/pause
    clickToPlayPause: true,
    // force iPad's native controls
    iPadUseNativeControls: false,
    // force iPhone's native controls
    iPhoneUseNativeControls: false,
    // force Android's native controls
    AndroidUseNativeControls: false,
    // features to show
    features: ['playpause','current','progress','duration','tracks','volume','fullscreen'],
    // only for dynamic
    isVideo: true,

    // turns keyboard support on and off for this instance
    enableKeyboard: true,

    // whenthis player starts, it will pause other players
    pauseOtherPlayers: true,

    // array of keyboard actions such as play pause
    keyActions: [
        {
            keys: [
                32, // SPACE
                179 // GOOGLE play/pause button
                ],
            action: function(player, media) {
                if (media.paused || media.ended) {
                    player.play();
                } else {
                    player.pause();
                }
            }
        },
        {
            keys: [38], // UP
            action: function(player, media) {
                player.container.find('.mejs-volume-slider').css('display','block');
                if (player.isVideo) {
                    player.showControls();
                    player.startControlsTimer();
                }

                var newVolume = Math.min(media.volume + 0.1, 1);
                media.setVolume(newVolume);
            }
        },
        {
            keys: [40], // DOWN
            action: function(player, media) {
                player.container.find('.mejs-volume-slider').css('display','block');
                if (player.isVideo) {
                    player.showControls();
                    player.startControlsTimer();
                }

                var newVolume = Math.max(media.volume - 0.1, 0);
                media.setVolume(newVolume);
            }
        },
        {
            keys: [
                37, // LEFT
                227 // Google TV rewind
            ],
            action: function(player, media) {
                if (!isNaN(media.duration) && media.duration > 0) {
                    if (player.isVideo) {
                        player.showControls();
                        player.startControlsTimer();
                    }

                    // 5%
                    var newTime = Math.max(media.currentTime - player.options.defaultSeekBackwardInterval(media), 0);
                    media.setCurrentTime(newTime);
                }
            }
        },
        {
            keys: [
                39, // RIGHT
                228 // Google TV forward
            ],
            action: function(player, media) {
                if (!isNaN(media.duration) && media.duration > 0) {
                    if (player.isVideo) {
                        player.showControls();
                        player.startControlsTimer();
                    }

                    // 5%
                    var newTime = Math.min(media.currentTime + player.options.defaultSeekForwardInterval(media), media.duration);
                    media.setCurrentTime(newTime);
                }
            }
        },
        {
            keys: [70], // F
            action: function(player, media) {
                if (typeof player.enterFullScreen != 'undefined') {
                    if (player.isFullScreen) {
                        player.exitFullScreen();
                    } else {
                        player.enterFullScreen();
                    }
                }
            }
        },
        {
            keys: [77], // M
            action: function(player, media) {
                player.container.find('.mejs-volume-slider').css('display','block');
                if (player.isVideo) {
                    player.showControls();
                    player.startControlsTimer();
                }
                if (player.media.muted) {
                    player.setMuted(false);
                } else {
                    player.setMuted(true);
                }
            }
        }
    ]
  };

  mejs.mepIndex = 0;

  mejs.players = {};

  // wraps a MediaElement object in player controls
  mejs.MediaElementPlayer = function(node, o) {
    // enforce object, even without "new" (via John Resig)
    if ( !(this instanceof mejs.MediaElementPlayer) ) {
      return new mejs.MediaElementPlayer(node, o);
    }

    var t = this;

    // these will be reset after the MediaElement.success fires
    t.$media = t.$node = $(node);
    t.node = t.media = t.$media[0];

    // check for existing player
    if (typeof t.node.player != 'undefined') {
      return t.node.player;
    } else {
      // attach player to DOM node for reference
      t.node.player = t;
    }


    // try to get options from data-mejsoptions
    if (typeof o == 'undefined') {
      o = t.$node.data('mejsoptions');
    }

    // extend default options
    t.options = $.extend({},mejs.MepDefaults,o);

    // unique ID
    t.id = 'mep_' + mejs.mepIndex++;

    // add to player array (for focus events)
    mejs.players[t.id] = t;

    // start up
    t.init();

    return t;
  };

  // actual player
  mejs.MediaElementPlayer.prototype = {

    hasFocus: false,

    controlsAreVisible: true,

    init: function() {

      var
        t = this,
        mf = mejs.MediaFeatures,
        // options for MediaElement (shim)
        meOptions = $.extend(true, {}, t.options, {
          success: function(media, domNode) { t.meReady(media, domNode); },
          error: function(e) { t.handleError(e);}
        }),
        tagName = t.media.tagName.toLowerCase();

      t.isDynamic = (tagName !== 'audio' && tagName !== 'video');

      if (t.isDynamic) {
        // get video from src or href?
        t.isVideo = t.options.isVideo;
      } else {
        t.isVideo = (tagName !== 'audio' && t.options.isVideo);
      }

      // use native controls in iPad, iPhone, and Android
      if ((mf.isiPad && t.options.iPadUseNativeControls) || (mf.isiPhone && t.options.iPhoneUseNativeControls)) {

        // add controls and stop
        t.$media.attr('controls', 'controls');

        // attempt to fix iOS 3 bug
        //t.$media.removeAttr('poster');
                                // no Issue found on iOS3 -ttroxell

        // override Apple's autoplay override for iPads
        if (mf.isiPad && t.media.getAttribute('autoplay') !== null) {
          t.play();
        }

      } else if (mf.isAndroid && t.options.AndroidUseNativeControls) {

        // leave default player

      } else {

        // DESKTOP: use MediaElementPlayer controls

        // remove native controls
        t.$media.removeAttr('controls');
        var videoPlayerTitle = t.isVideo ?
          mejs.i18n.t('Video Player') : mejs.i18n.t('Audio Player');
        // insert description for screen readers
        $('<span class="mejs-offscreen">' + videoPlayerTitle + '</span>').insertBefore(t.$media);
        // build container
        t.container =
          $('<div id="' + t.id + '" class="mejs-container ' + (mejs.MediaFeatures.svg ? 'svg' : 'no-svg') +
                      '" tabindex="0" role="application" aria-label="' + videoPlayerTitle + '">'+
            '<div class="mejs-inner">'+
              '<div class="mejs-mediaelement"></div>'+
              '<div class="mejs-layers"></div>'+
              '<div class="mejs-controls"></div>'+
              '<div class="mejs-clear"></div>'+
            '</div>' +
          '</div>')
          .addClass(t.$media[0].className)
          .insertBefore(t.$media)
          .focus(function ( e ) {
            if( !t.controlsAreVisible ) {
              t.showControls(true);
              var playButton = t.container.find('.mejs-playpause-button > button');
              playButton.focus();
            }
          });

        // add classes for user and content
        t.container.addClass(
          (mf.isAndroid ? 'mejs-android ' : '') +
          (mf.isiOS ? 'mejs-ios ' : '') +
          (mf.isiPad ? 'mejs-ipad ' : '') +
          (mf.isiPhone ? 'mejs-iphone ' : '') +
          (t.isVideo ? 'mejs-video ' : 'mejs-audio ')
        );


        // move the <video/video> tag into the right spot
        if (mf.isiOS) {

          // sadly, you can't move nodes in iOS, so we have to destroy and recreate it!
          var $newMedia = t.$media.clone();

          t.container.find('.mejs-mediaelement').append($newMedia);

          t.$media.remove();
          t.$node = t.$media = $newMedia;
          t.node = t.media = $newMedia[0];

        } else {

          // normal way of moving it into place (doesn't work on iOS)
          t.container.find('.mejs-mediaelement').append(t.$media);
        }

        // find parts
        t.controls = t.container.find('.mejs-controls');
        t.layers = t.container.find('.mejs-layers');

        // determine the size

        /* size priority:
          (1) videoWidth (forced),
          (2) style="width;height;"
          (3) width attribute,
          (4) defaultVideoWidth (for unspecified cases)
        */

        var tagType = (t.isVideo ? 'video' : 'audio'),
          capsTagName = tagType.substring(0,1).toUpperCase() + tagType.substring(1);



        if (t.options[tagType + 'Width'] > 0 || t.options[tagType + 'Width'].toString().indexOf('%') > -1) {
          t.width = t.options[tagType + 'Width'];
        } else if (t.media.style.width !== '' && t.media.style.width !== null) {
          t.width = t.media.style.width;
        } else if (t.media.getAttribute('width') !== null) {
          t.width = t.$media.attr('width');
        } else {
          t.width = t.options['default' + capsTagName + 'Width'];
        }

        if (t.options[tagType + 'Height'] > 0 || t.options[tagType + 'Height'].toString().indexOf('%') > -1) {
          t.height = t.options[tagType + 'Height'];
        } else if (t.media.style.height !== '' && t.media.style.height !== null) {
          t.height = t.media.style.height;
        } else if (t.$media[0].getAttribute('height') !== null) {
          t.height = t.$media.attr('height');
        } else {
          t.height = t.options['default' + capsTagName + 'Height'];
        }

        // set the size, while we wait for the plugins to load below
        t.setPlayerSize(t.width, t.height);

        // create MediaElementShim
        meOptions.pluginWidth = t.width;
        meOptions.pluginHeight = t.height;
      }

      // create MediaElement shim
      mejs.MediaElement(t.$media[0], meOptions);

      if (typeof(t.container) != 'undefined' && t.controlsAreVisible){
        // controls are shown when loaded
        t.container.trigger('controlsshown');
      }
    },

    showControls: function(doAnimation) {
      var t = this;

      doAnimation = typeof doAnimation == 'undefined' || doAnimation;

      if (t.controlsAreVisible)
        return;

      if (doAnimation) {
        t.controls
          .css('visibility','visible')
          .stop(true, true).fadeIn(200, function() {
            t.controlsAreVisible = true;
            t.container.trigger('controlsshown');
          });

        // any additional controls people might add and want to hide
        t.container.find('.mejs-control')
          .css('visibility','visible')
          .stop(true, true).fadeIn(200, function() {t.controlsAreVisible = true;});

      } else {
        t.controls
          .css('visibility','visible')
          .css('display','block');

        // any additional controls people might add and want to hide
        t.container.find('.mejs-control')
          .css('visibility','visible')
          .css('display','block');

        t.controlsAreVisible = true;
        t.container.trigger('controlsshown');
      }

      t.setControlsSize();

    },

    hideControls: function(doAnimation) {
      var t = this;

      doAnimation = typeof doAnimation == 'undefined' || doAnimation;

      if (!t.controlsAreVisible || t.options.alwaysShowControls || t.keyboardAction)
        return;

      if (doAnimation) {
        // fade out main controls
        t.controls.stop(true, true).fadeOut(200, function() {
          $(this)
            .css('visibility','hidden')
            .css('display','block');

          t.controlsAreVisible = false;
          t.container.trigger('controlshidden');
        });

        // any additional controls people might add and want to hide
        t.container.find('.mejs-control').stop(true, true).fadeOut(200, function() {
          $(this)
            .css('visibility','hidden')
            .css('display','block');
        });
      } else {

        // hide main controls
        t.controls
          .css('visibility','hidden')
          .css('display','block');

        // hide others
        t.container.find('.mejs-control')
          .css('visibility','hidden')
          .css('display','block');

        t.controlsAreVisible = false;
        t.container.trigger('controlshidden');
      }
    },

    controlsTimer: null,

    startControlsTimer: function(timeout) {

      var t = this;

      timeout = typeof timeout != 'undefined' ? timeout : 1500;

      t.killControlsTimer('start');

      t.controlsTimer = setTimeout(function() {
        //
        t.hideControls();
        t.killControlsTimer('hide');
      }, timeout);
    },

    killControlsTimer: function(src) {

      var t = this;

      if (t.controlsTimer !== null) {
        clearTimeout(t.controlsTimer);
        delete t.controlsTimer;
        t.controlsTimer = null;
      }
    },

    controlsEnabled: true,

    disableControls: function() {
      var t= this;

      t.killControlsTimer();
      t.hideControls(false);
      this.controlsEnabled = false;
    },

    enableControls: function() {
      var t= this;

      t.showControls(false);

      t.controlsEnabled = true;
    },


    // Sets up all controls and events
    meReady: function(media, domNode) {


      var t = this,
        mf = mejs.MediaFeatures,
        autoplayAttr = domNode.getAttribute('autoplay'),
        autoplay = !(typeof autoplayAttr == 'undefined' || autoplayAttr === null || autoplayAttr === 'false'),
        featureIndex,
        feature;

      // make sure it can't create itself again if a plugin reloads
      if (t.created) {
        return;
      } else {
        t.created = true;
      }

      t.media = media;
      t.domNode = domNode;

      if (!(mf.isAndroid && t.options.AndroidUseNativeControls) && !(mf.isiPad && t.options.iPadUseNativeControls) && !(mf.isiPhone && t.options.iPhoneUseNativeControls)) {

        // two built in features
        t.buildposter(t, t.controls, t.layers, t.media);
        t.buildkeyboard(t, t.controls, t.layers, t.media);
        t.buildoverlays(t, t.controls, t.layers, t.media);

        // grab for use by features
        t.findTracks();

        // add user-defined features/controls
        for (featureIndex in t.options.features) {
          feature = t.options.features[featureIndex];
          if (t['build' + feature]) {
            try {
              t['build' + feature](t, t.controls, t.layers, t.media);
            } catch (e) {
              // TODO: report control error
              //throw e;
              
              
            }
          }
        }

        t.container.trigger('controlsready');

        // reset all layers and controls
        t.setPlayerSize(t.width, t.height);
        t.setControlsSize();


        // controls fade
        if (t.isVideo) {

          if (mejs.MediaFeatures.hasTouch) {

            // for touch devices (iOS, Android)
            // show/hide without animation on touch

            t.$media.bind('touchstart', function() {


              // toggle controls
              if (t.controlsAreVisible) {
                t.hideControls(false);
              } else {
                if (t.controlsEnabled) {
                  t.showControls(false);
                }
              }
            });

          } else {

            // create callback here since it needs access to current
            // MediaElement object
            t.clickToPlayPauseCallback = function() {
              //

              if (t.options.clickToPlayPause) {
                if (t.media.paused) {
                  t.play();
                } else {
                  t.pause();
                }
              }
            };

            // click to play/pause
            t.media.addEventListener('click', t.clickToPlayPauseCallback, false);

            // show/hide controls
            t.container
              .bind('mouseenter mouseover', function () {
                if (t.controlsEnabled) {
                  if (!t.options.alwaysShowControls ) {
                    t.killControlsTimer('enter');
                    t.showControls();
                    t.startControlsTimer(2500);
                  }
                }
              })
              .bind('mousemove', function() {
                if (t.controlsEnabled) {
                  if (!t.controlsAreVisible) {
                    t.showControls();
                  }
                  if (!t.options.alwaysShowControls) {
                    t.startControlsTimer(2500);
                  }
                }
              })
              .bind('mouseleave', function () {
                if (t.controlsEnabled) {
                  if (!t.media.paused && !t.options.alwaysShowControls) {
                    t.startControlsTimer(1000);
                  }
                }
              });
          }

          if(t.options.hideVideoControlsOnLoad) {
            t.hideControls(false);
          }

          // check for autoplay
          if (autoplay && !t.options.alwaysShowControls) {
            t.hideControls();
          }

          // resizer
          if (t.options.enableAutosize) {
            t.media.addEventListener('loadedmetadata', function(e) {
              // if the <video height> was not set and the options.videoHeight was not set
              // then resize to the real dimensions
              if (t.options.videoHeight <= 0 && t.domNode.getAttribute('height') === null && !isNaN(e.target.videoHeight)) {
                t.setPlayerSize(e.target.videoWidth, e.target.videoHeight);
                t.setControlsSize();
                t.media.setVideoSize(e.target.videoWidth, e.target.videoHeight);
              }
            }, false);
          }
        }

        // EVENTS

        // FOCUS: when a video starts playing, it takes focus from other players (possibily pausing them)
        media.addEventListener('play', function() {
          var playerIndex;

          // go through all other players
          for (playerIndex in mejs.players) {
            var p = mejs.players[playerIndex];
            if (p.id != t.id && t.options.pauseOtherPlayers && !p.paused && !p.ended) {
              p.pause();
            }
            p.hasFocus = false;
          }

          t.hasFocus = true;
        },false);


        // ended for all
        t.media.addEventListener('ended', function (e) {
          if(t.options.autoRewind) {
            try{
              t.media.setCurrentTime(0);
                            // Fixing an Android stock browser bug, where "seeked" isn't fired correctly after ending the video and jumping to the beginning
                            window.setTimeout(function(){
                                $(t.container).find('.mejs-overlay-loading').parent().hide();
                            }, 20);
            } catch (exp) {

            }
          }
          t.media.pause();

          if (t.setProgressRail) {
            t.setProgressRail();
          }
          if (t.setCurrentRail) {
            t.setCurrentRail();
          }

          if (t.options.loop) {
            t.play();
          } else if (!t.options.alwaysShowControls && t.controlsEnabled) {
            t.showControls();
          }
        }, false);

        // resize on the first play
        t.media.addEventListener('loadedmetadata', function(e) {
          if (t.updateDuration) {
            t.updateDuration();
          }
          if (t.updateCurrent) {
            t.updateCurrent();
          }

          if (!t.isFullScreen) {
            t.setPlayerSize(t.width, t.height);
            t.setControlsSize();
          }
        }, false);

        t.container.focusout(function (e) {
          if( e.relatedTarget ) { //FF is working on supporting focusout https://bugzilla.mozilla.org/show_bug.cgi?id=687787
            var $target = $(e.relatedTarget);
            if (t.keyboardAction && $target.parents('.mejs-container').length === 0) {
              t.keyboardAction = false;
              t.hideControls(true);
            }
          }
        });

        // webkit has trouble doing this without a delay
        setTimeout(function () {
          t.setPlayerSize(t.width, t.height);
          t.setControlsSize();
        }, 50);

        // adjust controls whenever window sizes (used to be in fullscreen only)
        t.globalBind('resize', function() {

          // don't resize for fullscreen mode
          if ( !(t.isFullScreen || (mejs.MediaFeatures.hasTrueNativeFullScreen && document.webkitIsFullScreen)) ) {
            t.setPlayerSize(t.width, t.height);
          }

          // always adjust controls
          t.setControlsSize();
        });

        // This is a work-around for a bug in the YouTube iFrame player, which means
        //  we can't use the play() API for the initial playback on iOS or Android;
        //  user has to start playback directly by tapping on the iFrame.
        if (t.media.pluginType == 'youtube' && ( mf.isiOS || mf.isAndroid ) ) {
          t.container.find('.mejs-overlay-play').hide();
        }
      }

      // force autoplay for HTML5
      if (autoplay && media.pluginType == 'native') {
        t.play();
      }


      if (t.options.success) {

        if (typeof t.options.success == 'string') {
          window[t.options.success](t.media, t.domNode, t);
        } else {
          t.options.success(t.media, t.domNode, t);
        }
      }
    },

    handleError: function(e) {
      var t = this;

      t.controls.hide();

      // Tell user that the file cannot be played
      if (t.options.error) {
        t.options.error(e);
      }
    },

    setPlayerSize: function(width,height) {
      var t = this;

      if( !t.options.setDimensions ) {
        return false;
      }

      if (typeof width != 'undefined') {
        t.width = width;
      }

      if (typeof height != 'undefined') {
        t.height = height;
      }

      // detect 100% mode - use currentStyle for IE since css() doesn't return percentages
      if (t.height.toString().indexOf('%') > 0 || t.$node.css('max-width') === '100%' || (t.$node[0].currentStyle && t.$node[0].currentStyle.maxWidth === '100%')) {

        // do we have the native dimensions yet?
        var nativeWidth = (function() {
          if (t.isVideo) {
            if (t.media.videoWidth && t.media.videoWidth > 0) {
              return t.media.videoWidth;
            } else if (t.media.getAttribute('width') !== null) {
              return t.media.getAttribute('width');
            } else {
              return t.options.defaultVideoWidth;
            }
          } else {
            return t.options.defaultAudioWidth;
          }
        })();

        var nativeHeight = (function() {
          if (t.isVideo) {
            if (t.media.videoHeight && t.media.videoHeight > 0) {
              return t.media.videoHeight;
            } else if (t.media.getAttribute('height') !== null) {
              return t.media.getAttribute('height');
            } else {
              return t.options.defaultVideoHeight;
            }
          } else {
            return t.options.defaultAudioHeight;
          }
        })();

        var
          parentWidth = t.container.parent().closest(':visible').width(),
          parentHeight = t.container.parent().closest(':visible').height(),
          newHeight = t.isVideo || !t.options.autosizeProgress ? parseInt(parentWidth * nativeHeight/nativeWidth, 10) : nativeHeight;

        // When we use percent, the newHeight can't be calculated so we get the container height
        if (isNaN(newHeight)) {
          newHeight = parentHeight;
        }

        if (t.container.parent()[0].tagName.toLowerCase() === 'body') { // && t.container.siblings().count == 0) {
          parentWidth = $(window).width();
          newHeight = $(window).height();
        }

        if ( newHeight && parentWidth ) {

          // set outer container size
          t.container
            .width(parentWidth)
            .height(newHeight);

          // set native <video> or <audio> and shims
          t.$media.add(t.container.find('.mejs-shim'))
            .width('100%')
            .height('100%');

          // if shim is ready, send the size to the embeded plugin
          if (t.isVideo) {
            if (t.media.setVideoSize) {
              t.media.setVideoSize(parentWidth, newHeight);
            }
          }

          // set the layers
          t.layers.children('.mejs-layer')
            .width('100%')
            .height('100%');
        }


      } else {

        t.container
          .width(t.width)
          .height(t.height);

        t.layers.children('.mejs-layer')
          .width(t.width)
          .height(t.height);

      }

      // special case for big play button so it doesn't go over the controls area
      var playLayer = t.layers.find('.mejs-overlay-play'),
        playButton = playLayer.find('.mejs-overlay-button');

      playLayer.height(t.container.height() - t.controls.height());
      playButton.css('margin-top', '-' + (playButton.height()/2 - t.controls.height()/2).toString() + 'px'  );

    },

    setControlsSize: function() {
      var t = this,
        usedWidth = 0,
        railWidth = 0,
        rail = t.controls.find('.mejs-time-rail'),
        total = t.controls.find('.mejs-time-total'),
        current = t.controls.find('.mejs-time-current'),
        loaded = t.controls.find('.mejs-time-loaded'),
        others = rail.siblings(),
        lastControl = others.last(),
        lastControlPosition = null;

      // skip calculation if hidden
      if (!t.container.is(':visible') || !rail.length || !rail.is(':visible')) {
        return;
      }


      // allow the size to come from custom CSS
      if (t.options && !t.options.autosizeProgress) {
        // Also, frontends devs can be more flexible
        // due the opportunity of absolute positioning.
        railWidth = parseInt(rail.css('width'), 10);
      }

      // attempt to autosize
      if (railWidth === 0 || !railWidth) {

        // find the size of all the other controls besides the rail
        others.each(function() {
          var $this = $(this);
          if ($this.css('position') != 'absolute' && $this.is(':visible')) {
            usedWidth += $(this).outerWidth(true);
          }
        });

        // fit the rail into the remaining space
        railWidth = t.controls.width() - usedWidth - (rail.outerWidth(true) - rail.width());
      }

      // resize the rail,
      // but then check if the last control (say, the fullscreen button) got pushed down
      // this often happens when zoomed
      do {
        // outer area
        rail.width(railWidth);
        // dark space
        total.width(railWidth - (total.outerWidth(true) - total.width()));

        if (lastControl.css('position') != 'absolute') {
          lastControlPosition = lastControl.position();
          railWidth--;
        }
      } while (lastControlPosition !== null && lastControlPosition.top > 0 && railWidth > 0);

      if (t.setProgressRail)
        t.setProgressRail();
      if (t.setCurrentRail)
        t.setCurrentRail();
    },


    buildposter: function(player, controls, layers, media) {
      var t = this,
        poster =
        $('<div class="mejs-poster mejs-layer">' +
        '</div>')
          .appendTo(layers),
        posterUrl = player.$media.attr('poster');

      // prioriy goes to option (this is useful if you need to support iOS 3.x (iOS completely fails with poster)
      if (player.options.poster !== '') {
        posterUrl = player.options.poster;
      }

      // second, try the real poster
      if ( posterUrl ) {
        t.setPoster(posterUrl);
      } else {
        poster.hide();
      }

      media.addEventListener('play',function() {
        poster.hide();
      }, false);

      if(player.options.showPosterWhenEnded && player.options.autoRewind){
        media.addEventListener('ended',function() {
          poster.show();
        }, false);
      }
    },

    setPoster: function(url) {
      var t = this,
        posterDiv = t.container.find('.mejs-poster'),
        posterImg = posterDiv.find('img');

      if (posterImg.length === 0) {
        posterImg = $('<img width="100%" height="100%" />').appendTo(posterDiv);
      }

      posterImg.attr('src', url);
      posterDiv.css({'background-image' : 'url(' + url + ')'});
    },

    buildoverlays: function(player, controls, layers, media) {
            var t = this;
      if (!player.isVideo)
        return;

      var
      loading =
        $('<div class="mejs-overlay mejs-layer">'+
          '<div class="mejs-overlay-loading"><span></span></div>'+
        '</div>')
        .hide() // start out hidden
        .appendTo(layers),
      error =
        $('<div class="mejs-overlay mejs-layer">'+
          '<div class="mejs-overlay-error"></div>'+
        '</div>')
        .hide() // start out hidden
        .appendTo(layers),
      // this needs to come last so it's on top
      bigPlay =
        $('<div class="mejs-overlay mejs-layer mejs-overlay-play">'+
          '<div class="mejs-overlay-button"></div>'+
        '</div>')
        .appendTo(layers)
        .bind('click', function() {  // Removed 'touchstart' due issues on Samsung Android devices where a tap on bigPlay started and immediately stopped the video
          if (t.options.clickToPlayPause) {
            if (media.paused) {
              media.play();
            }
          }
        });

      /*
      if (mejs.MediaFeatures.isiOS || mejs.MediaFeatures.isAndroid) {
        bigPlay.remove();
        loading.remove();
      }
      */


      // show/hide big play button
      media.addEventListener('play',function() {
        bigPlay.hide();
        loading.hide();
        controls.find('.mejs-time-buffering').hide();
        error.hide();
      }, false);

      media.addEventListener('playing', function() {
        bigPlay.hide();
        loading.hide();
        controls.find('.mejs-time-buffering').hide();
        error.hide();
      }, false);

      media.addEventListener('seeking', function() {
        loading.show();
        controls.find('.mejs-time-buffering').show();
      }, false);

      media.addEventListener('seeked', function() {
        loading.hide();
        controls.find('.mejs-time-buffering').hide();
      }, false);

      media.addEventListener('pause',function() {
        if (!mejs.MediaFeatures.isiPhone) {
          bigPlay.show();
        }
      }, false);

      media.addEventListener('waiting', function() {
        loading.show();
        controls.find('.mejs-time-buffering').show();
      }, false);


      // show/hide loading
      media.addEventListener('loadeddata',function() {
        // for some reason Chrome is firing this event
        //if (mejs.MediaFeatures.isChrome && media.getAttribute && media.getAttribute('preload') === 'none')
        //  return;

        loading.show();
        controls.find('.mejs-time-buffering').show();
                // Firing the 'canplay' event after a timeout which isn't getting fired on some Android 4.1 devices (https://github.com/johndyer/mediaelement/issues/1305)
                if (mejs.MediaFeatures.isAndroid) {
                    media.canplayTimeout = window.setTimeout(
                        function() {
                            if (document.createEvent) {
                                var evt = document.createEvent('HTMLEvents');
                                evt.initEvent('canplay', true, true);
                                return media.dispatchEvent(evt);
                            }
                        }, 300
                    );
                }
      }, false);
      media.addEventListener('canplay',function() {
        loading.hide();
        controls.find('.mejs-time-buffering').hide();
                clearTimeout(media.canplayTimeout); // Clear timeout inside 'loadeddata' to prevent 'canplay' to fire twice
      }, false);

      // error handling
      media.addEventListener('error',function() {
        loading.hide();
        controls.find('.mejs-time-buffering').hide();
        error.show();
        error.find('mejs-overlay-error').html("Error loading this resource");
      }, false);

      media.addEventListener('keydown', function(e) {
        t.onkeydown(player, media, e);
      }, false);
    },

    buildkeyboard: function(player, controls, layers, media) {

        var t = this;

        t.container.keydown(function () {
          t.keyboardAction = true;
        });

        // listen for key presses
        t.globalBind('keydown', function(e) {
          return t.onkeydown(player, media, e);
        });


        // check if someone clicked outside a player region, then kill its focus
        t.globalBind('click', function(event) {
          player.hasFocus = $(event.target).closest('.mejs-container').length !== 0;
        });

    },
    onkeydown: function(player, media, e) {
      if (player.hasFocus && player.options.enableKeyboard) {
        // find a matching key
        for (var i = 0, il = player.options.keyActions.length; i < il; i++) {
          var keyAction = player.options.keyActions[i];

          for (var j = 0, jl = keyAction.keys.length; j < jl; j++) {
            if (e.keyCode == keyAction.keys[j]) {
              if (typeof(e.preventDefault) == "function") e.preventDefault();
              keyAction.action(player, media, e.keyCode);
              return false;
            }
          }
        }
      }

      return true;
    },

    findTracks: function() {
      var t = this,
        tracktags = t.$media.find('track');

      // store for use by plugins
      t.tracks = [];
      tracktags.each(function(index, track) {

        track = $(track);

        t.tracks.push({
          srclang: (track.attr('srclang')) ? track.attr('srclang').toLowerCase() : '',
          src: track.attr('src'),
          kind: track.attr('kind'),
          label: track.attr('label') || '',
          entries: [],
          isLoaded: false
        });
      });
    },
    changeSkin: function(className) {
      this.container[0].className = 'mejs-container ' + className;
      this.setPlayerSize(this.width, this.height);
      this.setControlsSize();
    },
    play: function() {
      this.load();
      this.media.play();
    },
    pause: function() {
      try {
        this.media.pause();
      } catch (e) {}
    },
    load: function() {
      if (!this.isLoaded) {
        this.media.load();
      }

      this.isLoaded = true;
    },
    setMuted: function(muted) {
      this.media.setMuted(muted);
    },
    setCurrentTime: function(time) {
      this.media.setCurrentTime(time);
    },
    getCurrentTime: function() {
      return this.media.currentTime;
    },
    setVolume: function(volume) {
      this.media.setVolume(volume);
    },
    getVolume: function() {
      return this.media.volume;
    },
    setSrc: function(src) {
      this.media.setSrc(src);
    },
    remove: function() {
      var t = this, featureIndex, feature;

      // invoke features cleanup
      for (featureIndex in t.options.features) {
        feature = t.options.features[featureIndex];
        if (t['clean' + feature]) {
          try {
            t['clean' + feature](t);
          } catch (e) {
            // TODO: report control error
            //throw e;
            //
            //
          }
        }
      }

      // grab video and put it back in place
      if (!t.isDynamic) {
        t.$media.prop('controls', true);
        // detach events from the video
        // TODO: detach event listeners better than this;
        //       also detach ONLY the events attached by this plugin!
        t.$node.clone().insertBefore(t.container).show();
        t.$node.remove();
      } else {
        t.$node.insertBefore(t.container);
      }

      if (t.media.pluginType !== 'native') {
        t.media.remove();
      }

      // Remove the player from the mejs.players object so that pauseOtherPlayers doesn't blow up when trying to pause a non existance flash api.
      delete mejs.players[t.id];

      if (typeof t.container == 'object') {
        t.container.remove();
      }
      t.globalUnbind();
      delete t.node.player;
    },
    rebuildtracks: function(){
      var t = this;
      t.findTracks();
      t.buildtracks(t, t.controls, t.layers, t.media);
    }
  };

  (function(){
    var rwindow = /^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/;

    function splitEvents(events, id) {
      // add player ID as an event namespace so it's easier to unbind them all later
      var ret = {d: [], w: []};
      $.each((events || '').split(' '), function(k, v){
        var eventname = v + '.' + id;
        if (eventname.indexOf('.') === 0) {
          ret.d.push(eventname);
          ret.w.push(eventname);
        }
        else {
          ret[rwindow.test(v) ? 'w' : 'd'].push(eventname);
        }
      });
      ret.d = ret.d.join(' ');
      ret.w = ret.w.join(' ');
      return ret;
    }

    mejs.MediaElementPlayer.prototype.globalBind = function(events, data, callback) {
      var t = this;
      events = splitEvents(events, t.id);
      if (events.d) $(document).bind(events.d, data, callback);
      if (events.w) $(window).bind(events.w, data, callback);
    };

    mejs.MediaElementPlayer.prototype.globalUnbind = function(events, callback) {
      var t = this;
      events = splitEvents(events, t.id);
      if (events.d) $(document).unbind(events.d, callback);
      if (events.w) $(window).unbind(events.w, callback);
    };
  })();

  // turn into jQuery plugin
  if (typeof $ != 'undefined') {
    $.fn.mediaelementplayer = function (options) {
      if (options === false) {
        this.each(function () {
          var player = $(this).data('mediaelementplayer');
          if (player) {
            player.remove();
          }
          $(this).removeData('mediaelementplayer');
        });
      }
      else {
        this.each(function () {
          $(this).data('mediaelementplayer', new mejs.MediaElementPlayer(this, options));
        });
      }
      return this;
    };


    $(document).ready(function() {
      // auto enable using JSON attribute
      $('.mejs-player').mediaelementplayer();
    });
  }

  // push out to window
  window.MediaElementPlayer = mejs.MediaElementPlayer;

})(mejs.$);

(function($) {

  $.extend(mejs.MepDefaults, {
    playText: mejs.i18n.t('Play'),
    pauseText: mejs.i18n.t('Pause')
  });

  // PLAY/pause BUTTON
  $.extend(MediaElementPlayer.prototype, {
    buildplaypause: function(player, controls, layers, media) {
      var 
        t = this,
        op = t.options,
        play = 
        $('<div class="mejs-button mejs-playpause-button mejs-play" >' +
          '<button type="button" aria-controls="' + t.id + '" title="' + op.playText + '" aria-label="' + op.playText + '"></button>' +
        '</div>')
        .appendTo(controls)
        .click(function(e) {
          e.preventDefault();
        
          if (media.paused) {
            media.play();
          } else {
            media.pause();
          }
          
          return false;
        }),
        play_btn = play.find('button');


      function togglePlayPause(which) {
        if ('play' === which) {
          play.removeClass('mejs-play').addClass('mejs-pause');
          play_btn.attr({
            'title': op.pauseText,
            'aria-label': op.pauseText
          });
        } else {
          play.removeClass('mejs-pause').addClass('mejs-play');
          play_btn.attr({
            'title': op.playText,
            'aria-label': op.playText
          });
        }
      };
      togglePlayPause('pse');


      media.addEventListener('play',function() {
        togglePlayPause('play');
      }, false);
      media.addEventListener('playing',function() {
        togglePlayPause('play');
      }, false);


      media.addEventListener('pause',function() {
        togglePlayPause('pse');
      }, false);
      media.addEventListener('paused',function() {
        togglePlayPause('pse');
      }, false);
    }
  });
  
})(mejs.$);

(function($) {

  $.extend(mejs.MepDefaults, {
    stopText: 'Stop'
  });

  // STOP BUTTON
  $.extend(MediaElementPlayer.prototype, {
    buildstop: function(player, controls, layers, media) {
      var t = this,
        stop = 
        $('<div class="mejs-button mejs-stop-button mejs-stop">' +
          '<button type="button" aria-controls="' + t.id + '" title="' + t.options.stopText + '" aria-label="' + t.options.stopText + '"></button>' +
        '</div>')
        .appendTo(controls)
        .click(function() {
          if (!media.paused) {
            media.pause();
          }
          if (media.currentTime > 0) {
            media.setCurrentTime(0);
                        media.pause();
            controls.find('.mejs-time-current').width('0px');
            controls.find('.mejs-time-handle').css('left', '0px');
            controls.find('.mejs-time-float-current').html( mejs.Utility.secondsToTimeCode(0) );
            controls.find('.mejs-currenttime').html( mejs.Utility.secondsToTimeCode(0) );         
            layers.find('.mejs-poster').show();
          }
        });
    }
  });
  
})(mejs.$);

(function($) {

  $.extend(mejs.MepDefaults, {
    progessHelpText: mejs.i18n.t(
    'Use Left/Right Arrow keys to advance one second, Up/Down arrows to advance ten seconds.')
  });

  // progress/loaded bar
  $.extend(MediaElementPlayer.prototype, {
    buildprogress: function(player, controls, layers, media) {

      $('<div class="mejs-time-rail">' +
        '<span  class="mejs-time-total mejs-time-slider">' +
        //'<span class="mejs-offscreen">' + this.options.progessHelpText + '</span>' +
        '<span class="mejs-time-buffering"></span>' +
        '<span class="mejs-time-loaded"></span>' +
        '<span class="mejs-time-current"></span>' +
        '<span class="mejs-time-handle"></span>' +
        '<span class="mejs-time-float">' +
        '<span class="mejs-time-float-current">00:00</span>' +
        '<span class="mejs-time-float-corner"></span>' +
        '</span>' +
        '</div>')
        .appendTo(controls);
      controls.find('.mejs-time-buffering').hide();

      var 
        t = this,
        total = controls.find('.mejs-time-total'),
        loaded  = controls.find('.mejs-time-loaded'),
        current  = controls.find('.mejs-time-current'),
        handle  = controls.find('.mejs-time-handle'),
        timefloat  = controls.find('.mejs-time-float'),
        timefloatcurrent  = controls.find('.mejs-time-float-current'),
                slider = controls.find('.mejs-time-slider'),
        handleMouseMove = function (e) {
          
                    var offset = total.offset(),
            width = total.outerWidth(true),
            percentage = 0,
            newTime = 0,
            pos = 0,
                        x;
                    
                    // mouse or touch position relative to the object
          if (e.originalEvent.changedTouches) {
            x = e.originalEvent.changedTouches[0].pageX;
          }else{
            x = e.pageX;
          }

          if (media.duration) {
            if (x < offset.left) {
              x = offset.left;
            } else if (x > width + offset.left) {
              x = width + offset.left;
            }
            
            pos = x - offset.left;
            percentage = (pos / width);
            newTime = (percentage <= 0.02) ? 0 : percentage * media.duration;

            // seek to where the mouse is
            if (mouseIsDown && newTime !== media.currentTime) {
              media.setCurrentTime(newTime);
            }

            // position floating time box
            if (!mejs.MediaFeatures.hasTouch) {
                timefloat.css('left', pos);
                timefloatcurrent.html( mejs.Utility.secondsToTimeCode(newTime) );
                timefloat.show();
            }
          }
        },
        mouseIsDown = false,
        mouseIsOver = false,
        lastKeyPressTime = 0,
        startedPaused = false,
        autoRewindInitial = player.options.autoRewind;
            // Accessibility for slider
            var updateSlider = function (e) {

        var seconds = media.currentTime,
          timeSliderText = mejs.i18n.t('Time Slider'),
          time = mejs.Utility.secondsToTimeCode(seconds),
          duration = media.duration;

        slider.attr({
          'aria-label': timeSliderText,
          'aria-valuemin': 0,
          'aria-valuemax': duration,
          'aria-valuenow': seconds,
          'aria-valuetext': time,
          'role': 'slider',
          'tabindex': 0
        });

      };
            
            var restartPlayer = function () {
        var now = new Date();
        if (now - lastKeyPressTime >= 1000) {
          media.play();
        }
      };

      slider.bind('focus', function (e) {
        player.options.autoRewind = false;
      });

      slider.bind('blur', function (e) {
        player.options.autoRewind = autoRewindInitial;
      });

      slider.bind('keydown', function (e) {

        if ((new Date() - lastKeyPressTime) >= 1000) {
          startedPaused = media.paused;
        }

        var keyCode = e.keyCode,
          duration = media.duration,
          seekTime = media.currentTime;

        switch (keyCode) {
        case 37: // left
          seekTime -= 1;
          break;
        case 39: // Right
          seekTime += 1;
          break;
        case 38: // Up
          seekTime += Math.floor(duration * 0.1);
          break;
        case 40: // Down
          seekTime -= Math.floor(duration * 0.1);
          break;
        case 36: // Home
          seekTime = 0;
          break;
        case 35: // end
          seekTime = duration;
          break;
        case 10: // enter
          media.paused ? media.play() : media.pause();
          return;
        case 13: // space
          media.paused ? media.play() : media.pause();
          return;
        default:
          return;
        }

        seekTime = seekTime < 0 ? 0 : (seekTime >= duration ? duration : Math.floor(seekTime));
        lastKeyPressTime = new Date();
        if (!startedPaused) {
          media.pause();
        }

        if (seekTime < media.duration && !startedPaused) {
          setTimeout(restartPlayer, 1100);
        }

        media.setCurrentTime(seekTime);

        e.preventDefault();
        e.stopPropagation();
        return false;
      });


      // handle clicks
      //controls.find('.mejs-time-rail').delegate('span', 'click', handleMouseMove);
      total
        .bind('mousedown touchstart', function (e) {
          // only handle left clicks or touch
          if (e.which === 1 || e.which === 0) {
            mouseIsDown = true;
            handleMouseMove(e);
            t.globalBind('mousemove.dur touchmove.dur', function(e) {
              handleMouseMove(e);
            });
            t.globalBind('mouseup.dur touchend.dur', function (e) {
              mouseIsDown = false;
              timefloat.hide();
              t.globalUnbind('.dur');
            });
          }
        })
        .bind('mouseenter', function(e) {
          mouseIsOver = true;
          t.globalBind('mousemove.dur', function(e) {
            handleMouseMove(e);
          });
          if (!mejs.MediaFeatures.hasTouch) {
            timefloat.show();
          }
        })
        .bind('mouseleave',function(e) {
          mouseIsOver = false;
          if (!mouseIsDown) {
            t.globalUnbind('.dur');
            timefloat.hide();
          }
        });

      // loading
      media.addEventListener('progress', function (e) {
        player.setProgressRail(e);
        player.setCurrentRail(e);
      }, false);

      // current time
      media.addEventListener('timeupdate', function(e) {
        player.setProgressRail(e);
        player.setCurrentRail(e);
        updateSlider(e);
      }, false);
      
      
      // store for later use
      t.loaded = loaded;
      t.total = total;
      t.current = current;
      t.handle = handle;
    },
    setProgressRail: function(e) {

      var
        t = this,
        target = (e !== undefined) ? e.target : t.media,
        percent = null;

      // newest HTML5 spec has buffered array (FF4, Webkit)
      if (target && target.buffered && target.buffered.length > 0 && target.buffered.end && target.duration) {
        // TODO: account for a real array with multiple values (only Firefox 4 has this so far) 
        percent = target.buffered.end(0) / target.duration;
      } 
      // Some browsers (e.g., FF3.6 and Safari 5) cannot calculate target.bufferered.end()
      // to be anything other than 0. If the byte count is available we use this instead.
      // Browsers that support the else if do not seem to have the bufferedBytes value and
      // should skip to there. Tested in Safari 5, Webkit head, FF3.6, Chrome 6, IE 7/8.
      else if (target && target.bytesTotal !== undefined && target.bytesTotal > 0 && target.bufferedBytes !== undefined) {
        percent = target.bufferedBytes / target.bytesTotal;
      }
      // Firefox 3 with an Ogg file seems to go this way
      else if (e && e.lengthComputable && e.total !== 0) {
        percent = e.loaded / e.total;
      }

      // finally update the progress bar
      if (percent !== null) {
        percent = Math.min(1, Math.max(0, percent));
        // update loaded bar
        if (t.loaded && t.total) {
          t.loaded.width(t.total.width() * percent);
        }
      }
    },
    setCurrentRail: function() {

      var t = this;
    
      if (t.media.currentTime !== undefined && t.media.duration) {

        // update bar and handle
        if (t.total && t.handle) {
          var 
            newWidth = Math.round(t.total.width() * t.media.currentTime / t.media.duration),
            handlePos = newWidth - Math.round(t.handle.outerWidth(true) / 2);

          t.current.width(newWidth);
          t.handle.css('left', handlePos);
        }
      }

    }
  });
})(mejs.$);
(function($) {
  
  // options
  $.extend(mejs.MepDefaults, {
    duration: -1,
    timeAndDurationSeparator: '<span> | </span>'
  });


  // current and duration 00:00 / 00:00
  $.extend(MediaElementPlayer.prototype, {
    buildcurrent: function(player, controls, layers, media) {
      var t = this;
      
      $('<div class="mejs-time" role="timer" aria-live="off">' +
          '<span class="mejs-currenttime">' + 
                        (player.options.alwaysShowHours ? '00:' : '') +
                        (player.options.showTimecodeFrameCount? '00:00:00':'00:00') + 
                    '</span>'+
        '</div>')
      .appendTo(controls);
      
      t.currenttime = t.controls.find('.mejs-currenttime');

      media.addEventListener('timeupdate',function() {
        player.updateCurrent();
      }, false);
    },


    buildduration: function(player, controls, layers, media) {
      var t = this;
      
      if (controls.children().last().find('.mejs-currenttime').length > 0) {
        $(t.options.timeAndDurationSeparator +
          '<span class="mejs-duration">' + 
            (t.options.duration > 0 ? 
              mejs.Utility.secondsToTimeCode(t.options.duration, t.options.alwaysShowHours || t.media.duration > 3600, t.options.showTimecodeFrameCount,  t.options.framesPerSecond || 25) :
              ((player.options.alwaysShowHours ? '00:' : '') + (player.options.showTimecodeFrameCount? '00:00:00':'00:00'))
            ) + 
          '</span>')
          .appendTo(controls.find('.mejs-time'));
      } else {

        // add class to current time
        controls.find('.mejs-currenttime').parent().addClass('mejs-currenttime-container');
        
        $('<div class="mejs-time mejs-duration-container">'+
          '<span class="mejs-duration">' + 
            (t.options.duration > 0 ? 
              mejs.Utility.secondsToTimeCode(t.options.duration, t.options.alwaysShowHours || t.media.duration > 3600, t.options.showTimecodeFrameCount,  t.options.framesPerSecond || 25) :
              ((player.options.alwaysShowHours ? '00:' : '') + (player.options.showTimecodeFrameCount? '00:00:00':'00:00')) 
            ) + 
          '</span>' +
        '</div>')
        .appendTo(controls);
      }
      
      t.durationD = t.controls.find('.mejs-duration');

      media.addEventListener('timeupdate',function() {
        player.updateDuration();
      }, false);
    },
    
    updateCurrent:  function() {
      var t = this;

      if (t.currenttime) {
        t.currenttime.html(mejs.Utility.secondsToTimeCode(t.media.currentTime, t.options.alwaysShowHours || t.media.duration > 3600, t.options.showTimecodeFrameCount,  t.options.framesPerSecond || 25));
      }
    },
    
    updateDuration: function() {
      var t = this;

      //Toggle the long video class if the video is longer than an hour.
      t.container.toggleClass("mejs-long-video", t.media.duration > 3600);
      
      if (t.durationD && (t.options.duration > 0 || t.media.duration)) {
        t.durationD.html(mejs.Utility.secondsToTimeCode(t.options.duration > 0 ? t.options.duration : t.media.duration, t.options.alwaysShowHours, t.options.showTimecodeFrameCount, t.options.framesPerSecond || 25));
      }   
    }
  });

})(mejs.$);

(function($) {

  $.extend(mejs.MepDefaults, {
    muteText: mejs.i18n.t('Mute Toggle'),
        allyVolumeControlText: mejs.i18n.t('Use Up/Down Arrow keys to increase or decrease volume.'),
    hideVolumeOnTouchDevices: true,
    
    audioVolume: 'horizontal',
    videoVolume: 'vertical'
  });

  $.extend(MediaElementPlayer.prototype, {
    buildvolume: function(player, controls, layers, media) {
        
      // Android and iOS don't support volume controls
      if ((mejs.MediaFeatures.isAndroid || mejs.MediaFeatures.isiOS) && this.options.hideVolumeOnTouchDevices)
        return;
      
      var t = this,
        mode = (t.isVideo) ? t.options.videoVolume : t.options.audioVolume,
        mute = (mode == 'horizontal') ?
        
        // horizontal version
        $('<div class="mejs-button mejs-volume-button mejs-mute">' +
          '<button type="button" aria-controls="' + t.id + 
            '" title="' + t.options.muteText + 
            '" aria-label="' + t.options.muteText +
          '"></button>'+
        '</div>' +
                  '<a href="javascript:void(0);" class="mejs-horizontal-volume-slider">' + // outer background
          '<span class="mejs-offscreen">' + t.options.allyVolumeControlText + '</span>' +
          '<div class="mejs-horizontal-volume-total"></div>'+ // line background
          '<div class="mejs-horizontal-volume-current"></div>'+ // current volume
          '<div class="mejs-horizontal-volume-handle"></div>'+ // handle
        '</a>'
        )
          .appendTo(controls) :
        
        // vertical version
        $('<div class="mejs-button mejs-volume-button mejs-mute">'+
          '<button type="button" aria-controls="' + t.id + 
            '" title="' + t.options.muteText + 
            '" aria-label="' + t.options.muteText + 
          '"></button>'+
          '<a href="javascript:void(0);" class="mejs-volume-slider">'+ // outer background
            '<span class="mejs-offscreen">' + t.options.allyVolumeControlText + '</span>' +                  
            '<div class="mejs-volume-total"></div>'+ // line background
            '<div class="mejs-volume-current"></div>'+ // current volume
            '<div class="mejs-volume-handle"></div>'+ // handle
          '</a>'+
        '</div>')
          .appendTo(controls),
      volumeSlider = t.container.find('.mejs-volume-slider, .mejs-horizontal-volume-slider'),
      volumeTotal = t.container.find('.mejs-volume-total, .mejs-horizontal-volume-total'),
      volumeCurrent = t.container.find('.mejs-volume-current, .mejs-horizontal-volume-current'),
      volumeHandle = t.container.find('.mejs-volume-handle, .mejs-horizontal-volume-handle'),

      positionVolumeHandle = function(volume, secondTry) {

        if (!volumeSlider.is(':visible') && typeof secondTry == 'undefined') {
          volumeSlider.show();
          positionVolumeHandle(volume, true);
          volumeSlider.hide();
          return;
        }

        // correct to 0-1
        volume = Math.max(0,volume);
        volume = Math.min(volume,1);

        // ajust mute button style
        if (volume === 0) {
          mute.removeClass('mejs-mute').addClass('mejs-unmute');
        } else {
          mute.removeClass('mejs-unmute').addClass('mejs-mute');
        }

                // top/left of full size volume slider background
                var totalPosition = volumeTotal.position();
        // position slider 
        if (mode == 'vertical') {
          var
                    // height of the full size volume slider background
            totalHeight = volumeTotal.height(),

                        // the new top position based on the current volume
            // 70% volume on 100px height == top:30px
            newTop = totalHeight - (totalHeight * volume);
  
          // handle
          volumeHandle.css('top', Math.round(totalPosition.top + newTop - (volumeHandle.height() / 2)));
  
          // show the current visibility
          volumeCurrent.height(totalHeight - newTop );
          volumeCurrent.css('top', totalPosition.top + newTop);
        } else {
                    var
            // height of the full size volume slider background
            totalWidth = volumeTotal.width(),
            
            // the new left position based on the current volume
            newLeft = totalWidth * volume;
  
          // handle
          volumeHandle.css('left', Math.round(totalPosition.left + newLeft - (volumeHandle.width() / 2)));
  
          // rezize the current part of the volume bar
          volumeCurrent.width( Math.round(newLeft) );
        }
      },
      handleVolumeMove = function(e) {
        
        var volume = null,
          totalOffset = volumeTotal.offset();
        
        // calculate the new volume based on the moust position
        if (mode === 'vertical') {
        
          var
            railHeight = volumeTotal.height(),
            totalTop = parseInt(volumeTotal.css('top').replace(/px/,''),10),
            newY = e.pageY - totalOffset.top;
            
          volume = (railHeight - newY) / railHeight;
            
          // the controls just hide themselves (usually when mouse moves too far up)
          if (totalOffset.top === 0 || totalOffset.left === 0) {
            return;
                    }
          
        } else {
          var
            railWidth = volumeTotal.width(),
            newX = e.pageX - totalOffset.left;
            
          volume = newX / railWidth;
        }
        
        // ensure the volume isn't outside 0-1
        volume = Math.max(0,volume);
        volume = Math.min(volume,1);
        
        // position the slider and handle
        positionVolumeHandle(volume);
        
        // set the media object (this will trigger the volumechanged event)
        if (volume === 0) {
          media.setMuted(true);
        } else {
          media.setMuted(false);
        }
        media.setVolume(volume);
      },
      mouseIsDown = false,
      mouseIsOver = false;

      // SLIDER
      
      mute
        .hover(function() {
          volumeSlider.show();
          mouseIsOver = true;
        }, function() {
          mouseIsOver = false;
            
          if (!mouseIsDown && mode == 'vertical') {
            volumeSlider.hide();
          }
        });
            
            var updateVolumeSlider = function (e) {

                var volume = Math.floor(media.volume*100);

        volumeSlider.attr({
          'aria-label': mejs.i18n.t('volumeSlider'),
          'aria-valuemin': 0,
          'aria-valuemax': 100,
          'aria-valuenow': volume,
          'aria-valuetext': volume+'%',
          'role': 'slider',
          'tabindex': 0
        });

      };
      
      volumeSlider
        .bind('mouseover', function() {
          mouseIsOver = true; 
        })
        .bind('mousedown', function (e) {
          handleVolumeMove(e);
          t.globalBind('mousemove.vol', function(e) {
            handleVolumeMove(e);
          });
          t.globalBind('mouseup.vol', function () {
            mouseIsDown = false;
            t.globalUnbind('.vol');

            if (!mouseIsOver && mode == 'vertical') {
              volumeSlider.hide();
            }
          });
          mouseIsDown = true;
            
          return false;
        })
        .bind('keydown', function (e) {
          var keyCode = e.keyCode;
          var volume = media.volume;
          switch (keyCode) {
                        case 38: // Up
                            volume += 0.1;
                            break;
                        case 40: // Down
                            volume = volume - 0.1;
                            break;
                        default:
                            return true;
                    }

          mouseIsDown = false;
          positionVolumeHandle(volume);
          media.setVolume(volume);
          return false;
        })
        .bind('blur', function () {
          volumeSlider.hide();
        });

      // MUTE button
      mute.find('button').click(function() {
        media.setMuted( !media.muted );
      });
            
            //Keyboard input
            mute.find('button').bind('focus', function () {
        volumeSlider.show();
      });

      // listen for volume change events from other sources
      media.addEventListener('volumechange', function(e) {
        if (!mouseIsDown) {
          if (media.muted) {
            positionVolumeHandle(0);
            mute.removeClass('mejs-mute').addClass('mejs-unmute');
          } else {
            positionVolumeHandle(media.volume);
            mute.removeClass('mejs-unmute').addClass('mejs-mute');
          }
        }
        updateVolumeSlider(e);
      }, false);

      if (t.container.is(':visible')) {
        // set initial volume
        positionVolumeHandle(player.options.startVolume);

        // mutes the media and sets the volume icon muted if the initial volume is set to 0
        if (player.options.startVolume === 0) {
          media.setMuted(true);
        }

        // shim gets the startvolume as a parameter, but we have to set it on the native <video> and <audio> elements
        if (media.pluginType === 'native') {
          media.setVolume(player.options.startVolume);
        }
      }
    }
  });
  
})(mejs.$);
(function($) {

  $.extend(mejs.MepDefaults, {
    usePluginFullScreen: true,
    newWindowCallback: function() { return '';},
    fullscreenText: mejs.i18n.t('Fullscreen')
  });

  $.extend(MediaElementPlayer.prototype, {

    isFullScreen: false,

    isNativeFullScreen: false,

    isInIframe: false,

    buildfullscreen: function(player, controls, layers, media) {

      if (!player.isVideo)
        return;

      player.isInIframe = (window.location != window.parent.location);

      // native events
      if (mejs.MediaFeatures.hasTrueNativeFullScreen) {

        // chrome doesn't alays fire this in an iframe
        var func = function(e) {
          if (player.isFullScreen) {
            if (mejs.MediaFeatures.isFullScreen()) {
              player.isNativeFullScreen = true;
              // reset the controls once we are fully in full screen
              player.setControlsSize();
            } else {
              player.isNativeFullScreen = false;
              // when a user presses ESC
              // make sure to put the player back into place
              player.exitFullScreen();
            }
          }
        };

        player.globalBind(mejs.MediaFeatures.fullScreenEventName, func);
      }

      var t = this,
        normalHeight = 0,
        normalWidth = 0,
        container = player.container,
        fullscreenBtn =
          $('<div class="mejs-button mejs-fullscreen-button">' +
            '<button type="button" aria-controls="' + t.id + '" title="' + t.options.fullscreenText + '" aria-label="' + t.options.fullscreenText + '"></button>' +
          '</div>')
          .appendTo(controls);

        if (t.media.pluginType === 'native' || (!t.options.usePluginFullScreen && !mejs.MediaFeatures.isFirefox)) {

          fullscreenBtn.click(function() {
            var isFullScreen = (mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen()) || player.isFullScreen;

            if (isFullScreen) {
              player.exitFullScreen();
            } else {
              player.enterFullScreen();
            }
          });

        } else {

          var hideTimeout = null,
            supportsPointerEvents = (function() {
              // TAKEN FROM MODERNIZR
              var element = document.createElement('x'),
                documentElement = document.documentElement,
                getComputedStyle = window.getComputedStyle,
                supports;
              if(!('pointerEvents' in element.style)){
                return false;
              }
              element.style.pointerEvents = 'auto';
              element.style.pointerEvents = 'x';
              documentElement.appendChild(element);
              supports = getComputedStyle &&
                getComputedStyle(element, '').pointerEvents === 'auto';
              documentElement.removeChild(element);
              return !!supports;
            })();

          //

          if (supportsPointerEvents && !mejs.MediaFeatures.isOpera) { // opera doesn't allow this :(

            // allows clicking through the fullscreen button and controls down directly to Flash

            /*
             When a user puts his mouse over the fullscreen button, the controls are disabled
             So we put a div over the video and another one on iether side of the fullscreen button
             that caputre mouse movement
             and restore the controls once the mouse moves outside of the fullscreen button
            */

            var fullscreenIsDisabled = false,
              restoreControls = function() {
                if (fullscreenIsDisabled) {
                  // hide the hovers
                  for (var i in hoverDivs) {
                    hoverDivs[i].hide();
                  }

                  // restore the control bar
                  fullscreenBtn.css('pointer-events', '');
                  t.controls.css('pointer-events', '');

                  // prevent clicks from pausing video
                  t.media.removeEventListener('click', t.clickToPlayPauseCallback);

                  // store for later
                  fullscreenIsDisabled = false;
                }
              },
              hoverDivs = {},
              hoverDivNames = ['top', 'left', 'right', 'bottom'],
              i, len,
              positionHoverDivs = function() {
                var fullScreenBtnOffsetLeft = fullscreenBtn.offset().left - t.container.offset().left,
                  fullScreenBtnOffsetTop = fullscreenBtn.offset().top - t.container.offset().top,
                  fullScreenBtnWidth = fullscreenBtn.outerWidth(true),
                  fullScreenBtnHeight = fullscreenBtn.outerHeight(true),
                  containerWidth = t.container.width(),
                  containerHeight = t.container.height();

                for (i in hoverDivs) {
                  hoverDivs[i].css({position: 'absolute', top: 0, left: 0}); //, backgroundColor: '#f00'});
                }

                // over video, but not controls
                hoverDivs['top']
                  .width( containerWidth )
                  .height( fullScreenBtnOffsetTop );

                // over controls, but not the fullscreen button
                hoverDivs['left']
                  .width( fullScreenBtnOffsetLeft )
                  .height( fullScreenBtnHeight )
                  .css({top: fullScreenBtnOffsetTop});

                // after the fullscreen button
                hoverDivs['right']
                  .width( containerWidth - fullScreenBtnOffsetLeft - fullScreenBtnWidth )
                  .height( fullScreenBtnHeight )
                  .css({top: fullScreenBtnOffsetTop,
                     left: fullScreenBtnOffsetLeft + fullScreenBtnWidth});

                // under the fullscreen button
                hoverDivs['bottom']
                  .width( containerWidth )
                  .height( containerHeight - fullScreenBtnHeight - fullScreenBtnOffsetTop )
                  .css({top: fullScreenBtnOffsetTop + fullScreenBtnHeight});
              };

            t.globalBind('resize', function() {
              positionHoverDivs();
            });

            for (i = 0, len = hoverDivNames.length; i < len; i++) {
              hoverDivs[hoverDivNames[i]] = $('<div class="mejs-fullscreen-hover" />').appendTo(t.container).mouseover(restoreControls).hide();
            }

            // on hover, kill the fullscreen button's HTML handling, allowing clicks down to Flash
            fullscreenBtn.on('mouseover',function() {

              if (!t.isFullScreen) {

                var buttonPos = fullscreenBtn.offset(),
                  containerPos = player.container.offset();

                // move the button in Flash into place
                media.positionFullscreenButton(buttonPos.left - containerPos.left, buttonPos.top - containerPos.top, false);

                // allows click through
                fullscreenBtn.css('pointer-events', 'none');
                t.controls.css('pointer-events', 'none');

                // restore click-to-play
                t.media.addEventListener('click', t.clickToPlayPauseCallback);

                // show the divs that will restore things
                for (i in hoverDivs) {
                  hoverDivs[i].show();
                }

                positionHoverDivs();

                fullscreenIsDisabled = true;
              }

            });

            // restore controls anytime the user enters or leaves fullscreen
            media.addEventListener('fullscreenchange', function(e) {
              t.isFullScreen = !t.isFullScreen;
              // don't allow plugin click to pause video - messes with
              // plugin's controls
              if (t.isFullScreen) {
                t.media.removeEventListener('click', t.clickToPlayPauseCallback);
              } else {
                t.media.addEventListener('click', t.clickToPlayPauseCallback);
              }
              restoreControls();
            });


            // the mouseout event doesn't work on the fullscren button, because we already killed the pointer-events
            // so we use the document.mousemove event to restore controls when the mouse moves outside the fullscreen button

            t.globalBind('mousemove', function(e) {

              // if the mouse is anywhere but the fullsceen button, then restore it all
              if (fullscreenIsDisabled) {

                var fullscreenBtnPos = fullscreenBtn.offset();


                if (e.pageY < fullscreenBtnPos.top || e.pageY > fullscreenBtnPos.top + fullscreenBtn.outerHeight(true) ||
                  e.pageX < fullscreenBtnPos.left || e.pageX > fullscreenBtnPos.left + fullscreenBtn.outerWidth(true)
                  ) {

                  fullscreenBtn.css('pointer-events', '');
                  t.controls.css('pointer-events', '');

                  fullscreenIsDisabled = false;
                }
              }
            });



          } else {

            // the hover state will show the fullscreen button in Flash to hover up and click

            fullscreenBtn
              .on('mouseover', function() {

                if (hideTimeout !== null) {
                  clearTimeout(hideTimeout);
                  delete hideTimeout;
                }

                var buttonPos = fullscreenBtn.offset(),
                  containerPos = player.container.offset();

                media.positionFullscreenButton(buttonPos.left - containerPos.left, buttonPos.top - containerPos.top, true);

              })
              .on('mouseout', function() {

                if (hideTimeout !== null) {
                  clearTimeout(hideTimeout);
                  delete hideTimeout;
                }

                hideTimeout = setTimeout(function() {
                  media.hideFullscreenButton();
                }, 1500);


              });
          }
        }

      player.fullscreenBtn = fullscreenBtn;

      t.globalBind('keydown',function (e) {
        if (((mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen()) || t.isFullScreen) && e.keyCode == 27) {
          player.exitFullScreen();
        }
      });

    },

    cleanfullscreen: function(player) {
      player.exitFullScreen();
    },

        containerSizeTimeout: null,

    enterFullScreen: function() {

      var t = this;

      // firefox+flash can't adjust plugin sizes without resetting :(
      if (t.media.pluginType !== 'native' && (mejs.MediaFeatures.isFirefox || t.options.usePluginFullScreen)) {
        //t.media.setFullscreen(true);
        //player.isFullScreen = true;
        return;
      }

      // set it to not show scroll bars so 100% will work
            $(document.documentElement).addClass('mejs-fullscreen');

      // store sizing
      normalHeight = t.container.height();
      normalWidth = t.container.width();

      // attempt to do true fullscreen (Safari 5.1 and Firefox Nightly only for now)
      if (t.media.pluginType === 'native') {
        if (mejs.MediaFeatures.hasTrueNativeFullScreen) {

          mejs.MediaFeatures.requestFullScreen(t.container[0]);
          //return;

          if (t.isInIframe) {
            // sometimes exiting from fullscreen doesn't work
            // notably in Chrome <iframe>. Fixed in version 17
            setTimeout(function checkFullscreen() {

              if (t.isNativeFullScreen) {
                var zoomMultiplier = window["devicePixelRatio"] || 1;
                // Use a percent error margin since devicePixelRatio is a float and not exact.
                var percentErrorMargin = 0.002; // 0.2%
                var windowWidth = zoomMultiplier * $(window).width();
                var screenWidth = screen.width;
                var absDiff = Math.abs(screenWidth - windowWidth);
                var marginError = screenWidth * percentErrorMargin;

                // check if the video is suddenly not really fullscreen
                if (absDiff > marginError) {
                  // manually exit
                  t.exitFullScreen();
                } else {
                  // test again
                  setTimeout(checkFullscreen, 500);
                }
              }


            }, 500);
          }

        } else if (mejs.MediaFeatures.hasSemiNativeFullScreen) {
          t.media.webkitEnterFullscreen();
          return;
        }
      }

      // check for iframe launch
      if (t.isInIframe) {
        var url = t.options.newWindowCallback(this);


        if (url !== '') {

          // launch immediately
          if (!mejs.MediaFeatures.hasTrueNativeFullScreen) {
            t.pause();
            window.open(url, t.id, 'top=0,left=0,width=' + screen.availWidth + ',height=' + screen.availHeight + ',resizable=yes,scrollbars=no,status=no,toolbar=no');
            return;
          } else {
            setTimeout(function() {
              if (!t.isNativeFullScreen) {
                t.pause();
                window.open(url, t.id, 'top=0,left=0,width=' + screen.availWidth + ',height=' + screen.availHeight + ',resizable=yes,scrollbars=no,status=no,toolbar=no');
              }
            }, 250);
          }
        }

      }

      // full window code



      // make full size
      t.container
        .addClass('mejs-container-fullscreen')
        .width('100%')
        .height('100%');
        //.css({position: 'fixed', left: 0, top: 0, right: 0, bottom: 0, overflow: 'hidden', width: '100%', height: '100%', 'z-index': 1000});

      // Only needed for safari 5.1 native full screen, can cause display issues elsewhere
      // Actually, it seems to be needed for IE8, too
      //if (mejs.MediaFeatures.hasTrueNativeFullScreen) {
        t.containerSizeTimeout = setTimeout(function() {
          t.container.css({width: '100%', height: '100%'});
          t.setControlsSize();
        }, 500);
      //}

      if (t.media.pluginType === 'native') {
        t.$media
          .width('100%')
          .height('100%');
      } else {
        t.container.find('.mejs-shim')
          .width('100%')
          .height('100%');

        //if (!mejs.MediaFeatures.hasTrueNativeFullScreen) {
          t.media.setVideoSize($(window).width(),$(window).height());
        //}
      }

      t.layers.children('div')
        .width('100%')
        .height('100%');

      if (t.fullscreenBtn) {
        t.fullscreenBtn
          .removeClass('mejs-fullscreen')
          .addClass('mejs-unfullscreen');
      }

      t.setControlsSize();
      t.isFullScreen = true;

      t.container.find('.mejs-captions-text').css('font-size', screen.width / t.width * 1.00 * 100 + '%');
      t.container.find('.mejs-captions-position').css('bottom', '45px');
    },

    exitFullScreen: function() {

      var t = this;

            // Prevent container from attempting to stretch a second time
            clearTimeout(t.containerSizeTimeout);

      // firefox can't adjust plugins
      if (t.media.pluginType !== 'native' && mejs.MediaFeatures.isFirefox) {
        t.media.setFullscreen(false);
        //player.isFullScreen = false;
        return;
      }

      // come outo of native fullscreen
      if (mejs.MediaFeatures.hasTrueNativeFullScreen && (mejs.MediaFeatures.isFullScreen() || t.isFullScreen)) {
        mejs.MediaFeatures.cancelFullScreen();
      }

      // restore scroll bars to document
            $(document.documentElement).removeClass('mejs-fullscreen');

      t.container
        .removeClass('mejs-container-fullscreen')
        .width(normalWidth)
        .height(normalHeight);
        //.css({position: '', left: '', top: '', right: '', bottom: '', overflow: 'inherit', width: normalWidth + 'px', height: normalHeight + 'px', 'z-index': 1});

      if (t.media.pluginType === 'native') {
        t.$media
          .width(normalWidth)
          .height(normalHeight);
      } else {
        t.container.find('.mejs-shim')
          .width(normalWidth)
          .height(normalHeight);

        t.media.setVideoSize(normalWidth, normalHeight);
      }

      t.layers.children('div')
        .width(normalWidth)
        .height(normalHeight);

      t.fullscreenBtn
        .removeClass('mejs-unfullscreen')
        .addClass('mejs-fullscreen');

      t.setControlsSize();
      t.isFullScreen = false;

      t.container.find('.mejs-captions-text').css('font-size','');
      t.container.find('.mejs-captions-position').css('bottom', '');
    }
  });

})(mejs.$);

(function($) {

  // Speed
  $.extend(mejs.MepDefaults, {

    speeds: ['2.00', '1.50', '1.25', '1.00', '0.75'],

    defaultSpeed: '1.00',
    
    speedChar: 'x'

  });

  $.extend(MediaElementPlayer.prototype, {

    buildspeed: function(player, controls, layers, media) {
      var t = this;

      if (t.media.pluginType == 'native') {
        var 
          speedButton = null,
          speedSelector = null,
          playbackSpeed = null,
          html = '<div class="mejs-button mejs-speed-button">' + 
                '<button type="button">' + t.options.defaultSpeed + t.options.speedChar + '</button>' + 
                '<div class="mejs-speed-selector">' + 
                '<ul>';
        
        if ($.inArray(t.options.defaultSpeed, t.options.speeds) === -1) {
          t.options.speeds.push(t.options.defaultSpeed);
        }

        t.options.speeds.sort(function(a, b) {
          return parseFloat(b) - parseFloat(a);
        });

        for (var i = 0, il = t.options.speeds.length; i<il; i++) {
          html += '<li>' + 
                '<input type="radio" name="speed" ' + 
                      'value="' + t.options.speeds[i] + '" ' + 
                      'id="' + t.options.speeds[i] + '" ' +
                      (t.options.speeds[i] == t.options.defaultSpeed ? ' checked' : '') + 
                      ' />' +
                '<label for="' + t.options.speeds[i] + '" ' + 
                      (t.options.speeds[i] == t.options.defaultSpeed ? ' class="mejs-speed-selected"' : '') +
                      '>' + t.options.speeds[i] + t.options.speedChar + '</label>' + 
              '</li>';
        }
        html += '</ul></div></div>';

        speedButton = $(html).appendTo(controls);
        speedSelector = speedButton.find('.mejs-speed-selector');       

        playbackspeed = t.options.defaultSpeed;

        speedSelector
          .on('click', 'input[type="radio"]', function() {
            var newSpeed = $(this).attr('value');
            playbackspeed = newSpeed;
            media.playbackRate = parseFloat(newSpeed);
            speedButton.find('button').html(newSpeed + t.options.speedChar);
            speedButton.find('.mejs-speed-selected').removeClass('mejs-speed-selected');
            speedButton.find('input[type="radio"]:checked').next().addClass('mejs-speed-selected');
          });

        speedSelector
          .height(
            speedButton.find('.mejs-speed-selector ul').outerHeight(true) + 
            speedButton.find('.mejs-speed-translations').outerHeight(true))
          .css('top', (-1 * speedSelector.height()) + 'px');
      }
    }
  });

})(mejs.$);

(function($) {

  // add extra default options
  $.extend(mejs.MepDefaults, {
    // this will automatically turn on a <track>
    startLanguage: '',

    tracksText: mejs.i18n.t('Captions/Subtitles'),

    // option to remove the [cc] button when no <track kind="subtitles"> are present
    hideCaptionsButtonWhenEmpty: true,

    // If true and we only have one track, change captions to popup
    toggleCaptionsButtonWhenOnlyOne: false,

    // #id or .class
    slidesSelector: ''
  });

  $.extend(MediaElementPlayer.prototype, {

    hasChapters: false,

    cleartracks: function(player, controls, layers, media){
      if(player) {
        if(player.captions) player.captions.remove();
        if(player.chapters) player.chapters.remove();
        if(player.captionsText) player.captionsText.remove();
        if(player.captionsButton) player.captionsButton.remove();
      }
    },
    buildtracks: function(player, controls, layers, media) {
      if (player.tracks.length === 0)
        return;

      var t = this,
        i,
        options = '';

      if (t.domNode.textTracks) { // if browser will do native captions, prefer mejs captions, loop through tracks and hide
        for (i = t.domNode.textTracks.length - 1; i >= 0; i--) {
          t.domNode.textTracks[i].mode = "hidden";
        }
      }
      t.cleartracks(player, controls, layers, media);
      player.chapters =
          $('<div class="mejs-chapters mejs-layer"></div>')
            .prependTo(layers).hide();
      player.captions =
          $('<div class="mejs-captions-layer mejs-layer"><div class="mejs-captions-position mejs-captions-position-hover" role="log" aria-live="assertive" aria-atomic="false"><span class="mejs-captions-text"></span></div></div>')
            .prependTo(layers).hide();
      player.captionsText = player.captions.find('.mejs-captions-text');
      player.captionsButton =
          $('<div class="mejs-button mejs-captions-button">'+
            '<button type="button" aria-controls="' + t.id + '" title="' + t.options.tracksText + '" aria-label="' + t.options.tracksText + '"></button>'+
            '<div class="mejs-captions-selector">'+
              '<ul>'+
                '<li>'+
                  '<input type="radio" name="' + player.id + '_captions" id="' + player.id + '_captions_none" value="none" checked="checked" />' +
                  '<label for="' + player.id + '_captions_none">' + mejs.i18n.t('None') +'</label>'+
                '</li>' +
              '</ul>'+
            '</div>'+
          '</div>')
            .appendTo(controls);


      var subtitleCount = 0;
      for (i=0; i<player.tracks.length; i++) {
        if (player.tracks[i].kind == 'subtitles') {
          subtitleCount++;
        }
      }

      // if only one language then just make the button a toggle
      if (t.options.toggleCaptionsButtonWhenOnlyOne && subtitleCount == 1){
        // click
        player.captionsButton.on('click',function() {
          if (player.selectedTrack === null) {
            lang = player.tracks[0].srclang;
          } else {
            lang = 'none';
          }
          player.setTrack(lang);
        });
      } else {
        // hover or keyboard focus
        player.captionsButton.on( 'mouseenter focusin', function() {
          $(this).find('.mejs-captions-selector').css('visibility','visible');
        })

        // handle clicks to the language radio buttons
        .on('click','input[type=radio]',function() {
          lang = this.value;
          player.setTrack(lang);
        });

        player.captionsButton.on( 'mouseleave focusout', function() {
          $(this).find(".mejs-captions-selector").css("visibility","hidden");
        });

      }

      if (!player.options.alwaysShowControls) {
        // move with controls
        player.container
          .bind('controlsshown', function () {
            // push captions above controls
            player.container.find('.mejs-captions-position').addClass('mejs-captions-position-hover');

          })
          .bind('controlshidden', function () {
            if (!media.paused) {
              // move back to normal place
              player.container.find('.mejs-captions-position').removeClass('mejs-captions-position-hover');
            }
          });
      } else {
        player.container.find('.mejs-captions-position').addClass('mejs-captions-position-hover');
      }

      player.trackToLoad = -1;
      player.selectedTrack = null;
      player.isLoadingTrack = false;

      // add to list
      for (i=0; i<player.tracks.length; i++) {
        if (player.tracks[i].kind == 'subtitles') {
          player.addTrackButton(player.tracks[i].srclang, player.tracks[i].label);
        }
      }

      // start loading tracks
      player.loadNextTrack();

      media.addEventListener('timeupdate',function(e) {
        player.displayCaptions();
      }, false);

      if (player.options.slidesSelector !== '') {
        player.slidesContainer = $(player.options.slidesSelector);

        media.addEventListener('timeupdate',function(e) {
          player.displaySlides();
        }, false);

      }

      media.addEventListener('loadedmetadata', function(e) {
        player.displayChapters();
      }, false);

      player.container.hover(
        function () {
          // chapters
          if (player.hasChapters) {
            player.chapters.css('visibility','visible');
            player.chapters.fadeIn(200).height(player.chapters.find('.mejs-chapter').outerHeight());
          }
        },
        function () {
          if (player.hasChapters && !media.paused) {
            player.chapters.fadeOut(200, function() {
              $(this).css('visibility','hidden');
              $(this).css('display','block');
            });
          }
        });

      // check for autoplay
      if (player.node.getAttribute('autoplay') !== null) {
        player.chapters.css('visibility','hidden');
      }
    },

    setTrack: function(lang){

      var t = this,
        i;

      if (lang == 'none') {
        t.selectedTrack = null;
        t.captionsButton.removeClass('mejs-captions-enabled');
      } else {
        for (i=0; i<t.tracks.length; i++) {
          if (t.tracks[i].srclang == lang) {
            if (t.selectedTrack === null)
              t.captionsButton.addClass('mejs-captions-enabled');
            t.selectedTrack = t.tracks[i];
            t.captions.attr('lang', t.selectedTrack.srclang);
            t.displayCaptions();
            break;
          }
        }
      }
    },

    loadNextTrack: function() {
      var t = this;

      t.trackToLoad++;
      if (t.trackToLoad < t.tracks.length) {
        t.isLoadingTrack = true;
        t.loadTrack(t.trackToLoad);
      } else {
        // add done?
        t.isLoadingTrack = false;

        t.checkForTracks();
      }
    },

    loadTrack: function(index){
      var
        t = this,
        track = t.tracks[index],
        after = function() {

          track.isLoaded = true;

          // create button
          //t.addTrackButton(track.srclang);
          t.enableTrackButton(track.srclang, track.label);

          t.loadNextTrack();

        };


      $.ajax({
        url: track.src,
        dataType: "text",
        success: function(d) {

          // parse the loaded file
          if (typeof d == "string" && (/<tt\s+xml/ig).exec(d)) {
            track.entries = mejs.TrackFormatParser.dfxp.parse(d);
          } else {
            track.entries = mejs.TrackFormatParser.webvtt.parse(d);
          }

          after();

          if (track.kind == 'chapters') {
            t.media.addEventListener('play', function(e) {
              if (t.media.duration > 0) {
                t.displayChapters(track);
              }
            }, false);
          }

          if (track.kind == 'slides') {
            t.setupSlides(track);
          }
        },
        error: function() {
          t.loadNextTrack();
        }
      });
    },

    enableTrackButton: function(lang, label) {
      var t = this;

      if (label === '') {
        label = mejs.language.codes[lang] || lang;
      }

      t.captionsButton
        .find('input[value=' + lang + ']')
          .prop('disabled',false)
        .siblings('label')
          .html( label );

      // auto select
      if (t.options.startLanguage == lang) {
        $('#' + t.id + '_captions_' + lang).prop('checked', true).trigger('click');
      }

      t.adjustLanguageBox();
    },

    addTrackButton: function(lang, label) {
      var t = this;
      if (label === '') {
        label = mejs.language.codes[lang] || lang;
      }

      t.captionsButton.find('ul').append(
        $('<li>'+
          '<input type="radio" name="' + t.id + '_captions" id="' + t.id + '_captions_' + lang + '" value="' + lang + '" disabled="disabled" />' +
          '<label for="' + t.id + '_captions_' + lang + '">' + label + ' (loading)' + '</label>'+
        '</li>')
      );

      t.adjustLanguageBox();

      // remove this from the dropdownlist (if it exists)
      t.container.find('.mejs-captions-translations option[value=' + lang + ']').remove();
    },

    adjustLanguageBox:function() {
      var t = this;
      // adjust the size of the outer box
      t.captionsButton.find('.mejs-captions-selector').height(
        t.captionsButton.find('.mejs-captions-selector ul').outerHeight(true) +
        t.captionsButton.find('.mejs-captions-translations').outerHeight(true)
      );
    },

    checkForTracks: function() {
      var
        t = this,
        hasSubtitles = false;

      // check if any subtitles
      if (t.options.hideCaptionsButtonWhenEmpty) {
        for (i=0; i<t.tracks.length; i++) {
          if (t.tracks[i].kind == 'subtitles') {
            hasSubtitles = true;
            break;
          }
        }

        if (!hasSubtitles) {
          t.captionsButton.hide();
          t.setControlsSize();
        }
      }
    },

    displayCaptions: function() {

      if (typeof this.tracks == 'undefined')
        return;

      var
        t = this,
        i,
        track = t.selectedTrack;

      if (track !== null && track.isLoaded) {
        for (i=0; i<track.entries.times.length; i++) {
          if (t.media.currentTime >= track.entries.times[i].start && t.media.currentTime <= track.entries.times[i].stop) {
            // Set the line before the timecode as a class so the cue can be targeted if needed
            t.captionsText.html(track.entries.text[i]).attr('class', 'mejs-captions-text ' + (track.entries.times[i].identifier || ''));
            t.captions.show().height(0);
            return; // exit out if one is visible;
          }
        }
        t.captions.hide();
      } else {
        t.captions.hide();
      }
    },

    setupSlides: function(track) {
      var t = this;

      t.slides = track;
      t.slides.entries.imgs = [t.slides.entries.text.length];
      t.showSlide(0);

    },

    showSlide: function(index) {
      if (typeof this.tracks == 'undefined' || typeof this.slidesContainer == 'undefined') {
        return;
      }

      var t = this,
        url = t.slides.entries.text[index],
        img = t.slides.entries.imgs[index];

      if (typeof img == 'undefined' || typeof img.fadeIn == 'undefined') {

        t.slides.entries.imgs[index] = img = $('<img src="' + url + '">')
            .on('load', function() {
              img.appendTo(t.slidesContainer)
                .hide()
                .fadeIn()
                .siblings(':visible')
                  .fadeOut();

            });

      } else {

        if (!img.is(':visible') && !img.is(':animated')) {

          //

          img.fadeIn()
            .siblings(':visible')
              .fadeOut();
        }
      }

    },

    displaySlides: function() {

      if (typeof this.slides == 'undefined')
        return;

      var
        t = this,
        slides = t.slides,
        i;

      for (i=0; i<slides.entries.times.length; i++) {
        if (t.media.currentTime >= slides.entries.times[i].start && t.media.currentTime <= slides.entries.times[i].stop){

          t.showSlide(i);

          return; // exit out if one is visible;
        }
      }
    },

    displayChapters: function() {
      var
        t = this,
        i;

      for (i=0; i<t.tracks.length; i++) {
        if (t.tracks[i].kind == 'chapters' && t.tracks[i].isLoaded) {
          t.drawChapters(t.tracks[i]);
          t.hasChapters = true;
          break;
        }
      }
    },

    drawChapters: function(chapters) {
      var
        t = this,
        i,
        dur,
        //width,
        //left,
        percent = 0,
        usedPercent = 0;

      t.chapters.empty();

      for (i=0; i<chapters.entries.times.length; i++) {
        dur = chapters.entries.times[i].stop - chapters.entries.times[i].start;
        percent = Math.floor(dur / t.media.duration * 100);
        if (percent + usedPercent > 100 || // too large
          i == chapters.entries.times.length-1 && percent + usedPercent < 100) // not going to fill it in
          {
          percent = 100 - usedPercent;
        }
        //width = Math.floor(t.width * dur / t.media.duration);
        //left = Math.floor(t.width * chapters.entries.times[i].start / t.media.duration);
        //if (left + width > t.width) {
        //  width = t.width - left;
        //}

        t.chapters.append( $(
          '<div class="mejs-chapter" rel="' + chapters.entries.times[i].start + '" style="left: ' + usedPercent.toString() + '%;width: ' + percent.toString() + '%;">' +
            '<div class="mejs-chapter-block' + ((i==chapters.entries.times.length-1) ? ' mejs-chapter-block-last' : '') + '">' +
              '<span class="ch-title">' + chapters.entries.text[i] + '</span>' +
              '<span class="ch-time">' + mejs.Utility.secondsToTimeCode(chapters.entries.times[i].start) + '&ndash;' + mejs.Utility.secondsToTimeCode(chapters.entries.times[i].stop) + '</span>' +
            '</div>' +
          '</div>'));
        usedPercent += percent;
      }

      t.chapters.find('div.mejs-chapter').click(function() {
        t.media.setCurrentTime( parseFloat( $(this).attr('rel') ) );
        if (t.media.paused) {
          t.media.play();
        }
      });

      t.chapters.show();
    }
  });



  mejs.language = {
    codes:  {
      af:'Afrikaans',
      sq:'Albanian',
      ar:'Arabic',
      be:'Belarusian',
      bg:'Bulgarian',
      ca:'Catalan',
      zh:'Chinese',
      'zh-cn':'Chinese Simplified',
      'zh-tw':'Chinese Traditional',
      hr:'Croatian',
      cs:'Czech',
      da:'Danish',
      nl:'Dutch',
      en:'English',
      et:'Estonian',
      fl:'Filipino',
      fi:'Finnish',
      fr:'French',
      gl:'Galician',
      de:'German',
      el:'Greek',
      ht:'Haitian Creole',
      iw:'Hebrew',
      hi:'Hindi',
      hu:'Hungarian',
      is:'Icelandic',
      id:'Indonesian',
      ga:'Irish',
      it:'Italian',
      ja:'Japanese',
      ko:'Korean',
      lv:'Latvian',
      lt:'Lithuanian',
      mk:'Macedonian',
      ms:'Malay',
      mt:'Maltese',
      no:'Norwegian',
      fa:'Persian',
      pl:'Polish',
      pt:'Portuguese',
      // 'pt-pt':'Portuguese (Portugal)',
      ro:'Romanian',
      ru:'Russian',
      sr:'Serbian',
      sk:'Slovak',
      sl:'Slovenian',
      es:'Spanish',
      sw:'Swahili',
      sv:'Swedish',
      tl:'Tagalog',
      th:'Thai',
      tr:'Turkish',
      uk:'Ukrainian',
      vi:'Vietnamese',
      cy:'Welsh',
      yi:'Yiddish'
    }
  };

  /*
  Parses WebVTT format which should be formatted as
  ================================
  WEBVTT

  1
  00:00:01,1 --> 00:00:05,000
  A line of text

  2
  00:01:15,1 --> 00:02:05,000
  A second line of text

  ===============================

  Adapted from: https://www.delphiki.com/html5/playr
  */
  mejs.TrackFormatParser = {
    webvtt: {
      pattern_timecode: /^((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,

      parse: function(trackText) {
        var
          i = 0,
          lines = mejs.TrackFormatParser.split2(trackText, /\r?\n/),
          entries = {text:[], times:[]},
          timecode,
          text,
          identifier;
        for(; i<lines.length; i++) {
          timecode = this.pattern_timecode.exec(lines[i]);

          if (timecode && i<lines.length) {
            if ((i - 1) >= 0 && lines[i - 1] !== '') {
              identifier = lines[i - 1];
            }
            i++;
            // grab all the (possibly multi-line) text that follows
            text = lines[i];
            i++;
            while(lines[i] !== '' && i<lines.length){
              text = text + '\n' + lines[i];
              i++;
            }
            text = $.trim(text).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, "<a href='$1' target='_blank'>$1</a>");
            // Text is in a different array so I can use .join
            entries.text.push(text);
            entries.times.push(
            {
              identifier: identifier,
              start: (mejs.Utility.convertSMPTEtoSeconds(timecode[1]) === 0) ? 0.200 : mejs.Utility.convertSMPTEtoSeconds(timecode[1]),
              stop: mejs.Utility.convertSMPTEtoSeconds(timecode[3]),
              settings: timecode[5]
            });
          }
          identifier = '';
        }
        return entries;
      }
    },
    // Thanks to Justin Capella: https://github.com/johndyer/mediaelement/pull/420
    dfxp: {
      parse: function(trackText) {
        trackText = $(trackText).filter("tt");
        var
          i = 0,
          container = trackText.children("div").eq(0),
          lines = container.find("p"),
          styleNode = trackText.find("#" + container.attr("style")),
          styles,
          begin,
          end,
          text,
          entries = {text:[], times:[]};


        if (styleNode.length) {
          var attributes = styleNode.removeAttr("id").get(0).attributes;
          if (attributes.length) {
            styles = {};
            for (i = 0; i < attributes.length; i++) {
              styles[attributes[i].name.split(":")[1]] = attributes[i].value;
            }
          }
        }

        for(i = 0; i<lines.length; i++) {
          var style;
          var _temp_times = {
            start: null,
            stop: null,
            style: null
          };
          if (lines.eq(i).attr("begin")) _temp_times.start = mejs.Utility.convertSMPTEtoSeconds(lines.eq(i).attr("begin"));
          if (!_temp_times.start && lines.eq(i-1).attr("end")) _temp_times.start = mejs.Utility.convertSMPTEtoSeconds(lines.eq(i-1).attr("end"));
          if (lines.eq(i).attr("end")) _temp_times.stop = mejs.Utility.convertSMPTEtoSeconds(lines.eq(i).attr("end"));
          if (!_temp_times.stop && lines.eq(i+1).attr("begin")) _temp_times.stop = mejs.Utility.convertSMPTEtoSeconds(lines.eq(i+1).attr("begin"));
          if (styles) {
            style = "";
            for (var _style in styles) {
              style += _style + ":" + styles[_style] + ";";
            }
          }
          if (style) _temp_times.style = style;
          if (_temp_times.start === 0) _temp_times.start = 0.200;
          entries.times.push(_temp_times);
          text = $.trim(lines.eq(i).html()).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, "<a href='$1' target='_blank'>$1</a>");
          entries.text.push(text);
          if (entries.times.start === 0) entries.times.start = 2;
        }
        return entries;
      }
    },
    split2: function (text, regex) {
      // normal version for compliant browsers
      // see below for IE fix
      return text.split(regex);
    }
  };

  // test for browsers with bad String.split method.
  if ('x\n\ny'.split(/\n/gi).length != 3) {
    // add super slow IE8 and below version
    mejs.TrackFormatParser.split2 = function(text, regex) {
      var
        parts = [],
        chunk = '',
        i;

      for (i=0; i<text.length; i++) {
        chunk += text.substring(i,i+1);
        if (regex.test(chunk)) {
          parts.push(chunk.replace(regex, ''));
          chunk = '';
        }
      }
      parts.push(chunk);
      return parts;
    };
  }

})(mejs.$);

/*
* ContextMenu Plugin
* 
*
*/

(function($) {

$.extend(mejs.MepDefaults,
  { 'contextMenuItems': [
    // demo of a fullscreen option
    { 
      render: function(player) {
        
        // check for fullscreen plugin
        if (typeof player.enterFullScreen == 'undefined')
          return null;
      
        if (player.isFullScreen) {
          return mejs.i18n.t('Turn off Fullscreen');
        } else {
          return mejs.i18n.t('Go Fullscreen');
        }
      },
      click: function(player) {
        if (player.isFullScreen) {
          player.exitFullScreen();
        } else {
          player.enterFullScreen();
        }
      }
    }
    ,
    // demo of a mute/unmute button
    { 
      render: function(player) {
        if (player.media.muted) {
          return mejs.i18n.t('Unmute');
        } else {
          return mejs.i18n.t('Mute');
        }
      },
      click: function(player) {
        if (player.media.muted) {
          player.setMuted(false);
        } else {
          player.setMuted(true);
        }
      }
    },
    // separator
    {
      isSeparator: true
    }
    ,
    // demo of simple download video
    { 
      render: function(player) {
        return mejs.i18n.t('Download Video');
      },
      click: function(player) {
        window.location.href = player.media.currentSrc;
      }
    } 
  ]}
);


  $.extend(MediaElementPlayer.prototype, {
    buildcontextmenu: function(player, controls, layers, media) {
      
      // create context menu
      player.contextMenu = $('<div class="mejs-contextmenu"></div>')
                .appendTo($('body'))
                .hide();
      
      // create events for showing context menu
      player.container.bind('contextmenu', function(e) {
        if (player.isContextMenuEnabled) {
          e.preventDefault();
          player.renderContextMenu(e.clientX-1, e.clientY-1);
          return false;
        }
      });
      player.container.bind('click', function() {
        player.contextMenu.hide();
      }); 
      player.contextMenu.bind('mouseleave', function() {

        //
        player.startContextMenuTimer();
        
      });   
    },

    cleancontextmenu: function(player) {
      player.contextMenu.remove();
    },
    
    isContextMenuEnabled: true,
    enableContextMenu: function() {
      this.isContextMenuEnabled = true;
    },
    disableContextMenu: function() {
      this.isContextMenuEnabled = false;
    },
    
    contextMenuTimeout: null,
    startContextMenuTimer: function() {
      //
      
      var t = this;
      
      t.killContextMenuTimer();
      
      t.contextMenuTimer = setTimeout(function() {
        t.hideContextMenu();
        t.killContextMenuTimer();
      }, 750);
    },
    killContextMenuTimer: function() {
      var timer = this.contextMenuTimer;
      
      //
      
      if (timer != null) {        
        clearTimeout(timer);
        delete timer;
        timer = null;
      }
    },    
    
    hideContextMenu: function() {
      this.contextMenu.hide();
    },
    
    renderContextMenu: function(x,y) {
      
      // alway re-render the items so that things like "turn fullscreen on" and "turn fullscreen off" are always written correctly
      var t = this,
        html = '',
        items = t.options.contextMenuItems;
      
      for (var i=0, il=items.length; i<il; i++) {
        
        if (items[i].isSeparator) {
          html += '<div class="mejs-contextmenu-separator"></div>';
        } else {
        
          var rendered = items[i].render(t);
        
          // render can return null if the item doesn't need to be used at the moment
          if (rendered != null) {
            html += '<div class="mejs-contextmenu-item" data-itemindex="' + i + '" id="element-' + (Math.random()*1000000) + '">' + rendered + '</div>';
          }
        }
      }
      
      // position and show the context menu
      t.contextMenu
        .empty()
        .append($(html))
        .css({top:y, left:x})
        .show();
        
      // bind events
      t.contextMenu.find('.mejs-contextmenu-item').each(function() {
              
        // which one is this?
        var $dom = $(this),
          itemIndex = parseInt( $dom.data('itemindex'), 10 ),
          item = t.options.contextMenuItems[itemIndex];
        
        // bind extra functionality?
        if (typeof item.show != 'undefined')
          item.show( $dom , t);
        
        // bind click action
        $dom.click(function() {     
          // perform click action
          if (typeof item.click != 'undefined')
            item.click(t);
          
          // close
          t.contextMenu.hide();       
        });       
      }); 
      
      // stop the controls from hiding
      setTimeout(function() {
        t.killControlsTimer('rev3');  
      }, 100);
            
    }
  });
  
})(mejs.$);
/**
 * Postroll plugin
 */
(function($) {

  $.extend(mejs.MepDefaults, {
    postrollCloseText: mejs.i18n.t('Close')
  });

  // Postroll
  $.extend(MediaElementPlayer.prototype, {
    buildpostroll: function(player, controls, layers, media) {
      var
        t = this,
        postrollLink = t.container.find('link[rel="postroll"]').attr('href');

      if (typeof postrollLink !== 'undefined') {
        player.postroll =
          $('<div class="mejs-postroll-layer mejs-layer"><a class="mejs-postroll-close" onclick="$(this).parent().hide();return false;">' + t.options.postrollCloseText + '</a><div class="mejs-postroll-layer-content"></div></div>').prependTo(layers).hide();

        t.media.addEventListener('ended', function (e) {
          $.ajax({
            dataType: 'html',
            url: postrollLink,
            success: function (data, textStatus) {
              layers.find('.mejs-postroll-layer-content').html(data);
            }
          });
          player.postroll.show();
        }, false);
      }
    }
  });

})(mejs.$);

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.5.7
  Author: Ken Wheeler
 Website: https://kenwheeler.github.io
    Docs: https://kenwheeler.github.io/slick
    Repo: https://github.com/kenwheeler/slick
  Issues: https://github.com/kenwheeler/slick/issues

 */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,e=this;e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(a,b){return'<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">'+(b+1)+"</button>"},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.hidden="hidden",e.paused=!1,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,f,d),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.registerBreakpoints(),e.init(!0),e.checkResponsive(!0)}var b=0;return c}(),b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),d[e.animType]=e.options.vertical===!1?"translate3d("+b+"px, 0px, 0px)":"translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.asNavFor=function(b){var c=this,d=c.options.asNavFor;d&&null!==d&&(d=a(d).not(c.$slider)),null!==d&&"object"==typeof d&&d.each(function(){var c=a(this).slick("getSlick");c.unslicked||c.slideHandler(b,!0)})},b.prototype.applyTransition=function(a){var b=this,c={};c[b.transitionType]=b.options.fade===!1?b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:"opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer),a.slideCount>a.options.slidesToShow&&a.paused!==!0&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this;a.options.infinite===!1?1===a.direction?(a.currentSlide+1===a.slideCount-1&&(a.direction=0),a.slideHandler(a.currentSlide+a.options.slidesToScroll)):(0===a.currentSlide-1&&(a.direction=1),a.slideHandler(a.currentSlide-a.options.slidesToScroll)):a.slideHandler(a.currentSlide+a.options.slidesToScroll)},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&(b.$prevArrow=a(b.options.prevArrow).addClass("slick-arrow"),b.$nextArrow=a(b.options.nextArrow).addClass("slick-arrow"),b.slideCount>b.options.slidesToShow?(b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.prependTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(d='<ul class="'+b.options.dotsClass+'">',c=0;c<=b.getDotCount();c+=1)d+="<li>"+b.options.customPaging.call(this,b,c)+"</li>";d+="</ul>",b.$dots=a(d).appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b).data("originalStyling",a(c).attr("style")||"")}),b.$slidesCache=b.$slides,b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.html(e),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},b.prototype.checkResponsive=function(b,c){var e,f,g,d=this,h=!1,i=d.$slider.width(),j=window.innerWidth||a(window).width();if("window"===d.respondTo?g=j:"slider"===d.respondTo?g=i:"min"===d.respondTo&&(g=Math.min(j,i)),d.options.responsive&&d.options.responsive.length&&null!==d.options.responsive){f=null;for(e in d.breakpoints)d.breakpoints.hasOwnProperty(e)&&(d.originalSettings.mobileFirst===!1?g<d.breakpoints[e]&&(f=d.breakpoints[e]):g>d.breakpoints[e]&&(f=d.breakpoints[e]));null!==f?null!==d.activeBreakpoint?(f!==d.activeBreakpoint||c)&&(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):null!==d.activeBreakpoint&&(d.activeBreakpoint=null,d.options=d.originalSettings,b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b),h=f),b||h===!1||d.$slider.trigger("breakpoint",[d,h])}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.target);switch(e.is("a")&&b.preventDefault(),e.is("li")||(e=e.closest("li")),h=0!==d.slideCount%d.options.slidesToScroll,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||e.index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c),e.children().trigger("focus");break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots&&null!==b.$dots&&(a("li",b.$dots).off("click.slick",b.changeSlide),b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).off("mouseenter.slick",a.proxy(b.setPaused,b,!0)).off("mouseleave.slick",a.proxy(b.setPaused,b,!1))),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),a(document).off(b.visibilityChange,b.visibility),b.$list.off("mouseenter.slick",a.proxy(b.setPaused,b,!0)),b.$list.off("mouseleave.slick",a.proxy(b.setPaused,b,!1)),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.html(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(b){var c=this;c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.options.arrows===!0&&(c.$prevArrow&&c.$prevArrow.length&&(c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.remove()),c.$nextArrow&&c.$nextArrow.length&&(c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.remove())),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.unslicked=!0,b||c.$slider.trigger("destroy",[c])},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:c.options.zIndex}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:c.options.zIndex}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.fadeSlideOut=function(a){var b=this;b.cssTransitions===!1?b.$slides.eq(a).animate({opacity:0,zIndex:b.options.zIndex-2},b.options.speed,b.options.easing):(b.applyTransition(a),b.$slides.eq(a).css({opacity:0,zIndex:b.options.zIndex-2}))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)for(;b<a.slideCount;)++d,b=c+a.options.slidesToShow,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else if(a.options.centerMode===!0)d=a.slideCount;else for(;b<a.slideCount;)++d,b=c+a.options.slidesToShow,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(!0),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=-1*b.slideWidth*b.options.slidesToShow,e=-1*d*b.options.slidesToShow),0!==b.slideCount%b.options.slidesToScroll&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=-1*(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth,e=-1*(b.options.slidesToShow-(a-b.slideCount))*d):(b.slideOffset=-1*b.slideCount%b.options.slidesToScroll*b.slideWidth,e=-1*b.slideCount%b.options.slidesToScroll*d))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?-1*a*b.slideWidth+b.slideOffset:-1*a*d+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?e=a.slideCount:(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(b){var c=this;a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots()),b&&c.$slider.trigger("init",[c]),c.options.accessibility===!0&&c.initADA()},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).on("mouseenter.slick",a.proxy(b.setPaused,b,!0)).on("mouseleave.slick",a.proxy(b.setPaused,b,!1))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),a(document).on(b.visibilityChange,a.proxy(b.visibility,b)),b.$list.on("mouseenter.slick",a.proxy(b.setPaused,b,!0)),b.$list.on("mouseleave.slick",a.proxy(b.setPaused,b,!1)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,a.proxy(b.orientationChange,b)),a(window).on("resize.slick.slick-"+b.instanceUid,a.proxy(b.resize,b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show(),a.options.autoplay===!0&&a.autoPlay()},b.prototype.keyHandler=function(a){var b=this;a.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:"next"}}))},b.prototype.lazyLoad=function(){function g(b){a("img[data-lazy]",b).each(function(){var b=a(this),c=a(this).attr("data-lazy"),d=document.createElement("img");d.onload=function(){b.animate({opacity:0},100,function(){b.attr("src",c).animate({opacity:1},200,function(){b.removeAttr("data-lazy").removeClass("slick-loading")})})},d.src=c})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=e+b.options.slidesToShow,b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.paused=!1,a.autoPlay()},b.prototype.postSlide=function(a){var b=this;b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay===!0&&b.paused===!1&&b.autoPlay(),b.options.accessibility===!0&&b.initADA()},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(){var c,d,b=this;c=a("img[data-lazy]",b.$slider).length,c>0&&(d=a("img[data-lazy]",b.$slider).first(),d.attr("src",d.attr("data-lazy")).removeClass("slick-loading").load(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad(),b.options.adaptiveHeight===!0&&b.setPosition()}).error(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad()}))},b.prototype.refresh=function(b){var c=this,d=c.currentSlide;c.destroy(!0),a.extend(c,c.initials,{currentSlide:d}),c.init(),b||c.changeSlide({data:{message:"index",index:d}},!1)},b.prototype.registerBreakpoints=function(){var c,d,e,b=this,f=b.options.responsive||null;if("array"===a.type(f)&&f.length){b.respondTo=b.options.respondTo||"window";for(c in f)if(e=b.breakpoints.length-1,d=f[c].breakpoint,f.hasOwnProperty(c)){for(;e>=0;)b.breakpoints[e]&&b.breakpoints[e]===d&&b.breakpoints.splice(e,1),e--;b.breakpoints.push(d),b.breakpointSettings[d]=f[c].settings}b.breakpoints.sort(function(a,c){return b.options.mobileFirst?a-c:c-a})}},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.registerBreakpoints(),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.checkResponsive(!1,!0),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses(0),b.setPosition(),b.$slider.trigger("reInit",[b]),b.options.autoplay===!0&&b.focusHandler()},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.unslicked||b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,d.reinit(),void 0)},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=-1*b.slideWidth*d,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:b.options.zIndex-2,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:b.options.zIndex-2,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:b.options.zIndex-1,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(b,c,d){var f,g,e=this;if("responsive"===b&&"array"===a.type(c))for(g in c)if("array"!==a.type(e.options.responsive))e.options.responsive=[c[g]];else{for(f=e.options.responsive.length-1;f>=0;)e.options.responsive[f].breakpoint===c[g].breakpoint&&e.options.responsive.splice(f,1),f--;e.options.responsive.push(c[g])}else e.options[b]=c;d===!0&&(e.unload(),e.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),a.options.fade&&("number"==typeof a.options.zIndex?a.options.zIndex<3&&(a.options.zIndex=3):a.options.zIndex=a.defaults.zIndex),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;d=b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),b.$slides.eq(a).addClass("slick-current"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.setPaused=function(a){var b=this;b.options.autoplay===!0&&b.options.pauseOnHover===!0&&(b.paused=a,a?b.autoPlayClear():b.autoPlay())},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.setSlideClasses(e),c.asNavFor(e),void 0):(c.slideHandler(e),void 0)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d)),void 0):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d)),void 0):(i.options.autoplay===!0&&clearInterval(i.autoPlayTimer),e=0>d?0!==i.slideCount%i.options.slidesToScroll?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?0!==i.slideCount%i.options.slidesToScroll?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?(i.fadeSlideOut(f),i.fadeSlide(e,function(){i.postSlide(e)
})):i.postSlide(e),i.animateHeight(),void 0):(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e),void 0)))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"left":"right":"vertical"},b.prototype.swipeEnd=function(){var c,b=this;if(b.dragging=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe)switch(b.swipeDirection()){case"left":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.slideHandler(c),b.currentDirection=0,b.touchObject={},b.$slider.trigger("swipe",[b,"left"]);break;case"right":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.slideHandler(c),b.currentDirection=1,b.touchObject={},b.$slider.trigger("swipe",[b,"right"])}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.swipeLeft=b.options.vertical===!1?d+f*g:d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):(b.setCSS(b.swipeLeft),void 0)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return 1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,b.dragging=!0,void 0)},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.remove(),b.$nextArrow&&b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(a){var b=this;b.$slider.trigger("unslick",[b,a]),b.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&!a.options.infinite&&(a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;document[a.hidden]?(a.paused=!0,a.autoPlayClear()):a.options.autoplay===!0&&(a.paused=!1,a.autoPlay())},b.prototype.initADA=function(){var b=this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),b.$slideTrack.attr("role","listbox"),b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c){a(this).attr({role:"option","aria-describedby":"slick-slide"+b.instanceUid+c})}),null!==b.$dots&&b.$dots.attr("role","tablist").find("li").each(function(c){a(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+b.instanceUid+c,id:"slick-slide"+b.instanceUid+c})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),b.activateADA()},b.prototype.activateADA=function(){var a=this,b=a.$slider.find("*").is(":focus");a.$slideTrack.find(".slick-active").attr({"aria-hidden":"false",tabindex:"0"}).find("a, input, button, select").attr({tabindex:"0"}),b&&a.$slideTrack.find(".slick-active").focus()},b.prototype.focusHandler=function(){var b=this;b.$slider.on("focus.slick blur.slick","*",function(c){c.stopImmediatePropagation();var d=a(this);setTimeout(function(){b.isPlay&&(d.is(":focus")?(b.autoPlayClear(),b.paused=!0):(b.paused=!1,b.autoPlay()))},0)})},a.fn.slick=function(){var g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length,f=0;for(f;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});
