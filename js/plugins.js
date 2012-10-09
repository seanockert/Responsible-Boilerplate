// Avoid `console` errors in browsers that lack a console.
if (!(window.console && console.log)) {
    (function() {
        var noop = function() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    }());
}


/* Normalized hide address bar for iOS & Android (c) Scott Jehl, scottjehl.com MIT License */
(function(a){var b=a.document;if(!location.hash&&a.addEventListener){window.scrollTo(0,1);var c=1,d=function(){return a.pageYOffset||b.compatMode==="CSS1Compat"&&b.documentElement.scrollTop||b.body.scrollTop||0},e=setInterval(function(){if(b.body){clearInterval(e);c=d();a.scrollTo(0,c===1?0:1)}},15);a.addEventListener("load",function(){setTimeout(function(){if(d()<20){a.scrollTo(0,c===1?0:1)}},0)})}})(this);

/*! A fix for the iOS orientationchange zoom bug. Script by @scottjehl, rebound by @wilto.MIT License.*/
(function(m){var l=m.document;if(!l.querySelector){return}var n=l.querySelector("meta[name=viewport]"),a=n&&n.getAttribute("content"),k=a+",maximum-scale=1",d=a+",maximum-scale=10",g=true,j,i,h,c;if(!n){return}function f(){n.setAttribute("content",d);g=true}function b(){n.setAttribute("content",k);g=false}function e(o){c=o.accelerationIncludingGravity;j=Math.abs(c.x);i=Math.abs(c.y);h=Math.abs(c.z);if(!m.orientation&&(j>7||((h>6&&i<8||h<8&&i>6)&&j>5))){if(g){b()}}else{if(!g){f()}}}m.addEventListener("orientationchange",f,false);m.addEventListener("devicemotion",e,false)})(this); 


// HTML5 Placeholder polyfill - https://github.com/NV/placeholder.js
function inputPlaceholder(input,color){if(!input)return null;if(input.placeholder&&'placeholder'in document.createElement(input.tagName))return input;color=color||'#AAA';var default_color=input.style.color;var placeholder=input.getAttribute('placeholder');if(input.value===''||input.value==placeholder){input.value=placeholder;input.style.color=color;input.setAttribute('data-placeholder-visible','true');}
var add_event='addEventListener';input[add_event]('focus',function(){input.style.color=default_color;if(input.getAttribute('data-placeholder-visible')){input.setAttribute('data-placeholder-visible','');input.value='';}},false);input[add_event]('blur',function(){if(input.value===''){input.setAttribute('data-placeholder-visible','true');input.value=placeholder;input.style.color=color;}else{input.style.color=default_color;input.setAttribute('data-placeholder-visible','');}},false);input.form&&input.form[add_event]('submit',function(){if(input.getAttribute('data-placeholder-visible')){input.value='';}},false);return input;}

// Init Placeholder polyfill on all inputs
inputPlaceholder($('input')[0], "#999");

/* ViewToggle v.0.2 (c) 2012: Sean Ockert, http://seanockert.github.com/ViewToggle */
ViewToggle=function(e){var t=document.getElementById("viewtoggle");document.all&&!document.querySelector&&t.parentNode.removeChild(t);var n={},r=t.innerHTML,i="View mobile site",s=!1,o=980,u="device-width",a=document.querySelector("meta[name=viewport]"),f=!0;return n={load:function(){localStorage.isResponsive=localStorage.isResponsive===undefined?"true":localStorage.isResponsive,localStorage.isResponsive==="false"&&n.showFull(),document.addEventListener?t.addEventListener("click",n.toggle,!0):t.attachEvent&&t.attachEvent("onclick",n.toggle)},toggle:function(e){return e.preventDefault(),f===!0?n.showFull():n.showMobile(),s==1&&document.location.reload(!0),!1},showFull:function(){a.setAttribute("content","width="+o),f=!1,localStorage.isResponsive="false",t.innerHTML=i},showMobile:function(){a.setAttribute("content","width="+u),f=!0,localStorage.isResponsive="true",t.innerHTML=r}},n.load(),n}(window)
