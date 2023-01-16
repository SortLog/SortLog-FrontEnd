"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[838],{36336:function(e,t,n){n.d(t,{Z:function(){return O}});var r=n(63366),o=n(87462),i=n(67294),a=n(86010),s=n(28320),c=n(34867),p=n(94780),l=n(29628);var f=(0,n(70182).ZP)(),d=n(66500),u=n(85893);const m=["className","component","disableGutters","fixed","maxWidth","classes"],h=(0,d.Z)(),v=f("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`maxWidth${(0,s.Z)(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),b=e=>(0,l.Z)({props:e,name:"MuiContainer",defaultTheme:h});var g=n(36622),y=n(81719),x=n(78884);const w=function(e={}){const{createStyledComponent:t=v,useThemeProps:n=b,componentName:l="MuiContainer"}=e,f=t((({theme:e,ownerState:t})=>(0,o.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}})),(({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce(((t,n)=>{const r=n,o=e.breakpoints.values[r];return 0!==o&&(t[e.breakpoints.up(r)]={maxWidth:`${o}${e.breakpoints.unit}`}),t}),{})),(({theme:e,ownerState:t})=>(0,o.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}}))),d=i.forwardRef((function(e,t){const i=n(e),{className:d,component:h="div",disableGutters:v=!1,fixed:b=!1,maxWidth:g="lg"}=i,y=(0,r.Z)(i,m),x=(0,o.Z)({},i,{component:h,disableGutters:v,fixed:b,maxWidth:g}),w=((e,t)=>{const{classes:n,fixed:r,disableGutters:o,maxWidth:i}=e,a={root:["root",i&&`maxWidth${(0,s.Z)(String(i))}`,r&&"fixed",o&&"disableGutters"]};return(0,p.Z)(a,(e=>(0,c.Z)(t,e)),n)})(x,l);return(0,u.jsx)(f,(0,o.Z)({as:h,ownerState:x,className:(0,a.Z)(w.root,d),ref:t},y))}));return d}({createStyledComponent:(0,y.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`maxWidth${(0,g.Z)(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,x.Z)({props:e,name:"MuiContainer"})});var O=w},90060:function(e,t,n){n.d(t,{Z:function(){return k}});var r=n(63366),o=n(87462),i=n(67294),a=n(86010),s=n(94780),c=n(41796),p=n(81719),l=n(78884),f=n(57742),d=n(50522),u=n(63289),m=n(84771),h=n(75741),v=n(1588);var b=(0,v.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]);var g=(0,v.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),y=n(34867);function x(e){return(0,y.Z)("MuiMenuItem",e)}var w=(0,v.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),O=n(85893);const Z=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],P=(0,p.ZP)(d.Z,{shouldForwardProp:e=>(0,p.FO)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.dense&&t.dense,n.divider&&t.divider,!n.disableGutters&&t.gutters]}})((({theme:e,ownerState:t})=>(0,o.Z)({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${w.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${w.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${w.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${w.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${w.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${h.Z.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${h.Z.inset}`]:{marginLeft:52},[`& .${g.root}`]:{marginTop:0,marginBottom:0},[`& .${g.inset}`]:{paddingLeft:36},[`& .${b.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&(0,o.Z)({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${b.root} svg`]:{fontSize:"1.25rem"}}))));var k=i.forwardRef((function(e,t){const n=(0,l.Z)({props:e,name:"MuiMenuItem"}),{autoFocus:c=!1,component:p="li",dense:d=!1,divider:h=!1,disableGutters:v=!1,focusVisibleClassName:b,role:g="menuitem",tabIndex:y,className:w}=n,k=(0,r.Z)(n,Z),j=i.useContext(f.Z),E=i.useMemo((()=>({dense:d||j.dense||!1,disableGutters:v})),[j.dense,d,v]),M=i.useRef(null);(0,u.Z)((()=>{c&&M.current&&M.current.focus()}),[c]);const R=(0,o.Z)({},n,{dense:E.dense,divider:h,disableGutters:v}),W=(e=>{const{disabled:t,dense:n,divider:r,disableGutters:i,selected:a,classes:c}=e,p={root:["root",n&&"dense",t&&"disabled",!i&&"gutters",r&&"divider",a&&"selected"]},l=(0,s.Z)(p,x,c);return(0,o.Z)({},c,l)})(n),S=(0,m.Z)(M,t);let C;return n.disabled||(C=void 0!==y?y:-1),(0,O.jsx)(f.Z.Provider,{value:E,children:(0,O.jsx)(P,(0,o.Z)({ref:S,role:g,tabIndex:C,component:p,focusVisibleClassName:(0,a.Z)(W.focusVisible,b),className:(0,a.Z)(W.root,w)},k,{ownerState:R,classes:W}))})}))},58402:function(e,t,n){n.d(t,{Z:function(){return He}});var r=n(87462),o=n(63366),i=n(67294),a=n(30067),s=n(16600),c=n(57094);function p(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function l(e){return e instanceof p(e).Element||e instanceof Element}function f(e){return e instanceof p(e).HTMLElement||e instanceof HTMLElement}function d(e){return"undefined"!==typeof ShadowRoot&&(e instanceof p(e).ShadowRoot||e instanceof ShadowRoot)}var u=Math.max,m=Math.min,h=Math.round;function v(){var e=navigator.userAgentData;return null!=e&&e.brands?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function b(){return!/^((?!chrome|android).)*safari/i.test(v())}function g(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var r=e.getBoundingClientRect(),o=1,i=1;t&&f(e)&&(o=e.offsetWidth>0&&h(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&h(r.height)/e.offsetHeight||1);var a=(l(e)?p(e):window).visualViewport,s=!b()&&n,c=(r.left+(s&&a?a.offsetLeft:0))/o,d=(r.top+(s&&a?a.offsetTop:0))/i,u=r.width/o,m=r.height/i;return{width:u,height:m,top:d,right:c+u,bottom:d+m,left:c,x:c,y:d}}function y(e){var t=p(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function x(e){return e?(e.nodeName||"").toLowerCase():null}function w(e){return((l(e)?e.ownerDocument:e.document)||window.document).documentElement}function O(e){return g(w(e)).left+y(e).scrollLeft}function Z(e){return p(e).getComputedStyle(e)}function P(e){var t=Z(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function k(e,t,n){void 0===n&&(n=!1);var r=f(t),o=f(t)&&function(e){var t=e.getBoundingClientRect(),n=h(t.width)/e.offsetWidth||1,r=h(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),i=w(t),a=g(e,o,n),s={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&(("body"!==x(t)||P(i))&&(s=function(e){return e!==p(e)&&f(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:y(e);var t}(t)),f(t)?((c=g(t,!0)).x+=t.clientLeft,c.y+=t.clientTop):i&&(c.x=O(i))),{x:a.left+s.scrollLeft-c.x,y:a.top+s.scrollTop-c.y,width:a.width,height:a.height}}function j(e){var t=g(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function E(e){return"html"===x(e)?e:e.assignedSlot||e.parentNode||(d(e)?e.host:null)||w(e)}function M(e){return["html","body","#document"].indexOf(x(e))>=0?e.ownerDocument.body:f(e)&&P(e)?e:M(E(e))}function R(e,t){var n;void 0===t&&(t=[]);var r=M(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=p(r),a=o?[i].concat(i.visualViewport||[],P(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(R(E(a)))}function W(e){return["table","td","th"].indexOf(x(e))>=0}function S(e){return f(e)&&"fixed"!==Z(e).position?e.offsetParent:null}function C(e){for(var t=p(e),n=S(e);n&&W(n)&&"static"===Z(n).position;)n=S(n);return n&&("html"===x(n)||"body"===x(n)&&"static"===Z(n).position)?t:n||function(e){var t=/firefox/i.test(v());if(/Trident/i.test(v())&&f(e)&&"fixed"===Z(e).position)return null;var n=E(e);for(d(n)&&(n=n.host);f(n)&&["html","body"].indexOf(x(n))<0;){var r=Z(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}var D="top",L="bottom",$="right",T="left",A="auto",B=[D,L,$,T],H="start",N="end",I="viewport",V="popper",G=B.reduce((function(e,t){return e.concat([t+"-"+H,t+"-"+N])}),[]),q=[].concat(B,[A]).reduce((function(e,t){return e.concat([t,t+"-"+H,t+"-"+N])}),[]),F=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function U(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function _(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var z={placement:"bottom",modifiers:[],strategy:"absolute"};function X(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function Y(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?z:o;return function(e,t,n){void 0===n&&(n=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},z,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],s=!1,c={state:o,setOptions:function(n){var s="function"===typeof n?n(o.options):n;p(),o.options=Object.assign({},i,o.options,s),o.scrollParents={reference:l(e)?R(e):e.contextElement?R(e.contextElement):[],popper:R(t)};var f=function(e){var t=U(e);return F.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,o.options.modifiers)));return o.orderedModifiers=f.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var s=i({state:o,name:t,instance:c,options:r}),p=function(){};a.push(s||p)}})),c.update()},forceUpdate:function(){if(!s){var e=o.elements,t=e.reference,n=e.popper;if(X(t,n)){o.rects={reference:k(t,C(n),"fixed"===o.options.strategy),popper:j(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,p=i.options,l=void 0===p?{}:p,f=i.name;"function"===typeof a&&(o=a({state:o,options:l,name:f,instance:c})||o)}else o.reset=!1,r=-1}}},update:_((function(){return new Promise((function(e){c.forceUpdate(),e(o)}))})),destroy:function(){p(),s=!0}};if(!X(e,t))return c;function p(){a.forEach((function(e){return e()})),a=[]}return c.setOptions(n).then((function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)})),c}}var J={passive:!0};function K(e){return e.split("-")[0]}function Q(e){return e.split("-")[1]}function ee(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function te(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?K(o):null,a=o?Q(o):null,s=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2;switch(i){case D:t={x:s,y:n.y-r.height};break;case L:t={x:s,y:n.y+n.height};break;case $:t={x:n.x+n.width,y:c};break;case T:t={x:n.x-r.width,y:c};break;default:t={x:n.x,y:n.y}}var p=i?ee(i):null;if(null!=p){var l="y"===p?"height":"width";switch(a){case H:t[p]=t[p]-(n[l]/2-r[l]/2);break;case N:t[p]=t[p]+(n[l]/2-r[l]/2)}}return t}var ne={top:"auto",right:"auto",bottom:"auto",left:"auto"};function re(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,c=e.gpuAcceleration,l=e.adaptive,f=e.roundOffsets,d=e.isFixed,u=a.x,m=void 0===u?0:u,v=a.y,b=void 0===v?0:v,g="function"===typeof f?f({x:m,y:b}):{x:m,y:b};m=g.x,b=g.y;var y=a.hasOwnProperty("x"),x=a.hasOwnProperty("y"),O=T,P=D,k=window;if(l){var j=C(n),E="clientHeight",M="clientWidth";if(j===p(n)&&"static"!==Z(j=w(n)).position&&"absolute"===s&&(E="scrollHeight",M="scrollWidth"),o===D||(o===T||o===$)&&i===N)P=L,b-=(d&&j===k&&k.visualViewport?k.visualViewport.height:j[E])-r.height,b*=c?1:-1;if(o===T||(o===D||o===L)&&i===N)O=$,m-=(d&&j===k&&k.visualViewport?k.visualViewport.width:j[M])-r.width,m*=c?1:-1}var R,W=Object.assign({position:s},l&&ne),S=!0===f?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:h(t*r)/r||0,y:h(n*r)/r||0}}({x:m,y:b}):{x:m,y:b};return m=S.x,b=S.y,c?Object.assign({},W,((R={})[P]=x?"0":"",R[O]=y?"0":"",R.transform=(k.devicePixelRatio||1)<=1?"translate("+m+"px, "+b+"px)":"translate3d("+m+"px, "+b+"px, 0)",R)):Object.assign({},W,((t={})[P]=x?b+"px":"",t[O]=y?m+"px":"",t.transform="",t))}var oe={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=q.reduce((function(e,n){return e[n]=function(e,t,n){var r=K(e),o=[T,D].indexOf(r)>=0?-1:1,i="function"===typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[T,$].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],c=s.x,p=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=p),t.modifiersData[r]=a}},ie={left:"right",right:"left",bottom:"top",top:"bottom"};function ae(e){return e.replace(/left|right|bottom|top/g,(function(e){return ie[e]}))}var se={start:"end",end:"start"};function ce(e){return e.replace(/start|end/g,(function(e){return se[e]}))}function pe(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&d(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function le(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function fe(e,t,n){return t===I?le(function(e,t){var n=p(e),r=w(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,c=0;if(o){i=o.width,a=o.height;var l=b();(l||!l&&"fixed"===t)&&(s=o.offsetLeft,c=o.offsetTop)}return{width:i,height:a,x:s+O(e),y:c}}(e,n)):l(t)?function(e,t){var n=g(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):le(function(e){var t,n=w(e),r=y(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=u(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=u(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+O(e),c=-r.scrollTop;return"rtl"===Z(o||n).direction&&(s+=u(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:c}}(w(e)))}function de(e,t,n,r){var o="clippingParents"===t?function(e){var t=R(E(e)),n=["absolute","fixed"].indexOf(Z(e).position)>=0&&f(e)?C(e):e;return l(n)?t.filter((function(e){return l(e)&&pe(e,n)&&"body"!==x(e)})):[]}(e):[].concat(t),i=[].concat(o,[n]),a=i[0],s=i.reduce((function(t,n){var o=fe(e,n,r);return t.top=u(o.top,t.top),t.right=m(o.right,t.right),t.bottom=m(o.bottom,t.bottom),t.left=u(o.left,t.left),t}),fe(e,a,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function ue(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function me(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function he(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,i=n.strategy,a=void 0===i?e.strategy:i,s=n.boundary,c=void 0===s?"clippingParents":s,p=n.rootBoundary,f=void 0===p?I:p,d=n.elementContext,u=void 0===d?V:d,m=n.altBoundary,h=void 0!==m&&m,v=n.padding,b=void 0===v?0:v,y=ue("number"!==typeof b?b:me(b,B)),x=u===V?"reference":V,O=e.rects.popper,Z=e.elements[h?x:u],P=de(l(Z)?Z:Z.contextElement||w(e.elements.popper),c,f,a),k=g(e.elements.reference),j=te({reference:k,element:O,strategy:"absolute",placement:o}),E=le(Object.assign({},O,j)),M=u===V?E:k,R={top:P.top-M.top+y.top,bottom:M.bottom-P.bottom+y.bottom,left:P.left-M.left+y.left,right:M.right-P.right+y.right},W=e.modifiersData.offset;if(u===V&&W){var S=W[o];Object.keys(R).forEach((function(e){var t=[$,L].indexOf(e)>=0?1:-1,n=[D,L].indexOf(e)>=0?"y":"x";R[e]+=S[n]*t}))}return R}function ve(e,t,n){return u(e,m(t,n))}var be={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,c=n.boundary,p=n.rootBoundary,l=n.altBoundary,f=n.padding,d=n.tether,h=void 0===d||d,v=n.tetherOffset,b=void 0===v?0:v,g=he(t,{boundary:c,rootBoundary:p,padding:f,altBoundary:l}),y=K(t.placement),x=Q(t.placement),w=!x,O=ee(y),Z="x"===O?"y":"x",P=t.modifiersData.popperOffsets,k=t.rects.reference,E=t.rects.popper,M="function"===typeof b?b(Object.assign({},t.rects,{placement:t.placement})):b,R="number"===typeof M?{mainAxis:M,altAxis:M}:Object.assign({mainAxis:0,altAxis:0},M),W=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,S={x:0,y:0};if(P){if(i){var A,B="y"===O?D:T,N="y"===O?L:$,I="y"===O?"height":"width",V=P[O],G=V+g[B],q=V-g[N],F=h?-E[I]/2:0,U=x===H?k[I]:E[I],_=x===H?-E[I]:-k[I],z=t.elements.arrow,X=h&&z?j(z):{width:0,height:0},Y=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},J=Y[B],te=Y[N],ne=ve(0,k[I],X[I]),re=w?k[I]/2-F-ne-J-R.mainAxis:U-ne-J-R.mainAxis,oe=w?-k[I]/2+F+ne+te+R.mainAxis:_+ne+te+R.mainAxis,ie=t.elements.arrow&&C(t.elements.arrow),ae=ie?"y"===O?ie.clientTop||0:ie.clientLeft||0:0,se=null!=(A=null==W?void 0:W[O])?A:0,ce=V+oe-se,pe=ve(h?m(G,V+re-se-ae):G,V,h?u(q,ce):q);P[O]=pe,S[O]=pe-V}if(s){var le,fe="x"===O?D:T,de="x"===O?L:$,ue=P[Z],me="y"===Z?"height":"width",be=ue+g[fe],ge=ue-g[de],ye=-1!==[D,T].indexOf(y),xe=null!=(le=null==W?void 0:W[Z])?le:0,we=ye?be:ue-k[me]-E[me]-xe+R.altAxis,Oe=ye?ue+k[me]+E[me]-xe-R.altAxis:ge,Ze=h&&ye?function(e,t,n){var r=ve(e,t,n);return r>n?n:r}(we,ue,Oe):ve(h?we:be,ue,h?Oe:ge);P[Z]=Ze,S[Z]=Ze-ue}t.modifiersData[r]=S}},requiresIfExists:["offset"]};var ge={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=K(n.placement),c=ee(s),p=[T,$].indexOf(s)>=0?"height":"width";if(i&&a){var l=function(e,t){return ue("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:me(e,B))}(o.padding,n),f=j(i),d="y"===c?D:T,u="y"===c?L:$,m=n.rects.reference[p]+n.rects.reference[c]-a[c]-n.rects.popper[p],h=a[c]-n.rects.reference[c],v=C(i),b=v?"y"===c?v.clientHeight||0:v.clientWidth||0:0,g=m/2-h/2,y=l[d],x=b-f[p]-l[u],w=b/2-f[p]/2+g,O=ve(y,w,x),Z=c;n.modifiersData[r]=((t={})[Z]=O,t.centerOffset=O-w,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r)))&&pe(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ye(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function xe(e){return[D,$,L,T].some((function(t){return e[t]>=0}))}var we=Y({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,c=p(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&l.forEach((function(e){e.addEventListener("scroll",n.update,J)})),s&&c.addEventListener("resize",n.update,J),function(){i&&l.forEach((function(e){e.removeEventListener("scroll",n.update,J)})),s&&c.removeEventListener("resize",n.update,J)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=te({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,c=void 0===s||s,p={placement:K(t.placement),variation:Q(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,re(Object.assign({},p,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,re(Object.assign({},p,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];f(o)&&x(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});f(r)&&x(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},oe,{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,c=n.fallbackPlacements,p=n.padding,l=n.boundary,f=n.rootBoundary,d=n.altBoundary,u=n.flipVariations,m=void 0===u||u,h=n.allowedAutoPlacements,v=t.options.placement,b=K(v),g=c||(b===v||!m?[ae(v)]:function(e){if(K(e)===A)return[];var t=ae(e);return[ce(e),t,ce(t)]}(v)),y=[v].concat(g).reduce((function(e,n){return e.concat(K(n)===A?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,p=void 0===c?q:c,l=Q(r),f=l?s?G:G.filter((function(e){return Q(e)===l})):B,d=f.filter((function(e){return p.indexOf(e)>=0}));0===d.length&&(d=f);var u=d.reduce((function(t,n){return t[n]=he(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[K(n)],t}),{});return Object.keys(u).sort((function(e,t){return u[e]-u[t]}))}(t,{placement:n,boundary:l,rootBoundary:f,padding:p,flipVariations:m,allowedAutoPlacements:h}):n)}),[]),x=t.rects.reference,w=t.rects.popper,O=new Map,Z=!0,P=y[0],k=0;k<y.length;k++){var j=y[k],E=K(j),M=Q(j)===H,R=[D,L].indexOf(E)>=0,W=R?"width":"height",S=he(t,{placement:j,boundary:l,rootBoundary:f,altBoundary:d,padding:p}),C=R?M?$:T:M?L:D;x[W]>w[W]&&(C=ae(C));var N=ae(C),I=[];if(i&&I.push(S[E]<=0),s&&I.push(S[C]<=0,S[N]<=0),I.every((function(e){return e}))){P=j,Z=!1;break}O.set(j,I)}if(Z)for(var V=function(e){var t=y.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return P=t,"break"},F=m?3:1;F>0;F--){if("break"===V(F))break}t.placement!==P&&(t.modifiersData[r]._skip=!0,t.placement=P,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},be,ge,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=he(t,{elementContext:"reference"}),s=he(t,{altBoundary:!0}),c=ye(a,r),p=ye(s,o,i),l=xe(c),f=xe(p);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:p,isReferenceHidden:l,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":f})}}]}),Oe=n(94780),Ze=n(78385),Pe=n(34867);function ke(e){return(0,Pe.Z)("MuiPopperUnstyled",e)}(0,n(1588).Z)("MuiPopperUnstyled",["root"]);var je=n(18793),Ee=n(85893);const Me=["anchorEl","children","component","direction","disablePortal","modifiers","open","ownerState","placement","popperOptions","popperRef","slotProps","slots","TransitionProps"],Re=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition"];function We(e){return"function"===typeof e?e():e}const Se={},Ce=i.forwardRef((function(e,t){var n;const{anchorEl:c,children:p,component:l,direction:f,disablePortal:d,modifiers:u,open:m,ownerState:h,placement:v,popperOptions:b,popperRef:g,slotProps:y={},slots:x={},TransitionProps:w}=e,O=(0,o.Z)(e,Me),Z=i.useRef(null),P=(0,a.Z)(Z,t),k=i.useRef(null),j=(0,a.Z)(k,g),E=i.useRef(j);(0,s.Z)((()=>{E.current=j}),[j]),i.useImperativeHandle(g,(()=>k.current),[]);const M=function(e,t){if("ltr"===t)return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}(v,f),[R,W]=i.useState(M);i.useEffect((()=>{k.current&&k.current.forceUpdate()})),(0,s.Z)((()=>{if(!c||!m)return;We(c);let e=[{name:"preventOverflow",options:{altBoundary:d}},{name:"flip",options:{altBoundary:d}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:e})=>{W(e.placement)}}];null!=u&&(e=e.concat(u)),b&&null!=b.modifiers&&(e=e.concat(b.modifiers));const t=we(We(c),Z.current,(0,r.Z)({placement:M},b,{modifiers:e}));return E.current(t),()=>{t.destroy(),E.current(null)}}),[c,d,u,m,b,M]);const S={placement:R};null!==w&&(S.TransitionProps=w);const C=(0,Oe.Z)({root:["root"]},ke,{}),D=null!=(n=null!=l?l:x.root)?n:"div",L=(0,je.Z)({elementType:D,externalSlotProps:y.root,externalForwardedProps:O,additionalProps:{role:"tooltip",ref:P},ownerState:(0,r.Z)({},e,h),className:C.root});return(0,Ee.jsx)(D,(0,r.Z)({},L,{children:"function"===typeof p?p(S):p}))}));var De=i.forwardRef((function(e,t){const{anchorEl:n,children:a,container:s,direction:p="ltr",disablePortal:l=!1,keepMounted:f=!1,modifiers:d,open:u,placement:m="bottom",popperOptions:h=Se,popperRef:v,style:b,transition:g=!1}=e,y=(0,o.Z)(e,Re),[x,w]=i.useState(!0);if(!f&&!u&&(!g||x))return null;const O=s||(n?(0,c.Z)(We(n)).body:void 0);return(0,Ee.jsx)(Ze.Z,{disablePortal:l,container:O,children:(0,Ee.jsx)(Ce,(0,r.Z)({anchorEl:n,direction:p,disablePortal:l,modifiers:d,ref:t,open:g?!x:u,placement:m,popperOptions:h,popperRef:v},y,{style:(0,r.Z)({position:"fixed",top:0,left:0,display:u||!f||g&&!x?null:"none"},b),TransitionProps:g?{in:u,onEnter:()=>{w(!1)},onExited:()=>{w(!0)}}:null,children:a}))})})),Le=n(34168),$e=n(81719),Te=n(78884);const Ae=["components","componentsProps","slots","slotProps"],Be=(0,$e.ZP)(De,{name:"MuiPopper",slot:"Root",overridesResolver:(e,t)=>t.root})({});var He=i.forwardRef((function(e,t){var n;const i=(0,Le.Z)(),a=(0,Te.Z)({props:e,name:"MuiPopper"}),{components:s,componentsProps:c,slots:p,slotProps:l}=a,f=(0,o.Z)(a,Ae),d=null!=(n=null==p?void 0:p.root)?n:null==s?void 0:s.Root;return(0,Ee.jsx)(Be,(0,r.Z)({direction:null==i?void 0:i.direction,slots:{root:d},slotProps:null!=l?l:c},f,{ref:t}))}))}}]);