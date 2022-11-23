"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[879],{90060:function(e,t,n){n.d(t,{Z:function(){return j}});var r=n(63366),o=n(87462),i=n(67294),a=n(86010),s=n(94780),c=n(41796),p=n(81719),f=n(78884),l=n(57742),d=n(50522),u=n(63289),m=n(84771),h=n(75741),v=n(1588);var g=(0,v.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]);var y=(0,v.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),b=n(34867);function x(e){return(0,b.Z)("MuiMenuItem",e)}var w=(0,v.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),O=n(85893);const P=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],Z=(0,p.ZP)(d.Z,{shouldForwardProp:e=>(0,p.FO)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.dense&&t.dense,n.divider&&t.divider,!n.disableGutters&&t.gutters]}})((({theme:e,ownerState:t})=>(0,o.Z)({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${w.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${w.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${w.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${w.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${w.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${h.Z.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${h.Z.inset}`]:{marginLeft:52},[`& .${y.root}`]:{marginTop:0,marginBottom:0},[`& .${y.inset}`]:{paddingLeft:36},[`& .${g.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&(0,o.Z)({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${g.root} svg`]:{fontSize:"1.25rem"}}))));var j=i.forwardRef((function(e,t){const n=(0,f.Z)({props:e,name:"MuiMenuItem"}),{autoFocus:c=!1,component:p="li",dense:d=!1,divider:h=!1,disableGutters:v=!1,focusVisibleClassName:g,role:y="menuitem",tabIndex:b,className:w}=n,j=(0,r.Z)(n,P),E=i.useContext(l.Z),k=i.useMemo((()=>({dense:d||E.dense||!1,disableGutters:v})),[E.dense,d,v]),M=i.useRef(null);(0,u.Z)((()=>{c&&M.current&&M.current.focus()}),[c]);const R=(0,o.Z)({},n,{dense:k.dense,divider:h,disableGutters:v}),D=(e=>{const{disabled:t,dense:n,divider:r,disableGutters:i,selected:a,classes:c}=e,p={root:["root",n&&"dense",t&&"disabled",!i&&"gutters",r&&"divider",a&&"selected"]},f=(0,s.Z)(p,x,c);return(0,o.Z)({},c,f)})(n),C=(0,m.Z)(M,t);let A;return n.disabled||(A=void 0!==b?b:-1),(0,O.jsx)(l.Z.Provider,{value:k,children:(0,O.jsx)(Z,(0,o.Z)({ref:C,role:y,tabIndex:A,component:p,focusVisibleClassName:(0,a.Z)(D.focusVisible,g),className:(0,a.Z)(D.root,w)},j,{ownerState:R,classes:D}))})}))},58402:function(e,t,n){n.d(t,{Z:function(){return He}});var r=n(87462),o=n(63366),i=n(67294),a=n(30067),s=n(16600),c=n(57094);function p(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function f(e){return e instanceof p(e).Element||e instanceof Element}function l(e){return e instanceof p(e).HTMLElement||e instanceof HTMLElement}function d(e){return"undefined"!==typeof ShadowRoot&&(e instanceof p(e).ShadowRoot||e instanceof ShadowRoot)}var u=Math.max,m=Math.min,h=Math.round;function v(){var e=navigator.userAgentData;return null!=e&&e.brands?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function g(){return!/^((?!chrome|android).)*safari/i.test(v())}function y(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var r=e.getBoundingClientRect(),o=1,i=1;t&&l(e)&&(o=e.offsetWidth>0&&h(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&h(r.height)/e.offsetHeight||1);var a=(f(e)?p(e):window).visualViewport,s=!g()&&n,c=(r.left+(s&&a?a.offsetLeft:0))/o,d=(r.top+(s&&a?a.offsetTop:0))/i,u=r.width/o,m=r.height/i;return{width:u,height:m,top:d,right:c+u,bottom:d+m,left:c,x:c,y:d}}function b(e){var t=p(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function x(e){return e?(e.nodeName||"").toLowerCase():null}function w(e){return((f(e)?e.ownerDocument:e.document)||window.document).documentElement}function O(e){return y(w(e)).left+b(e).scrollLeft}function P(e){return p(e).getComputedStyle(e)}function Z(e){var t=P(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function j(e,t,n){void 0===n&&(n=!1);var r=l(t),o=l(t)&&function(e){var t=e.getBoundingClientRect(),n=h(t.width)/e.offsetWidth||1,r=h(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),i=w(t),a=y(e,o,n),s={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&(("body"!==x(t)||Z(i))&&(s=function(e){return e!==p(e)&&l(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:b(e);var t}(t)),l(t)?((c=y(t,!0)).x+=t.clientLeft,c.y+=t.clientTop):i&&(c.x=O(i))),{x:a.left+s.scrollLeft-c.x,y:a.top+s.scrollTop-c.y,width:a.width,height:a.height}}function E(e){var t=y(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function k(e){return"html"===x(e)?e:e.assignedSlot||e.parentNode||(d(e)?e.host:null)||w(e)}function M(e){return["html","body","#document"].indexOf(x(e))>=0?e.ownerDocument.body:l(e)&&Z(e)?e:M(k(e))}function R(e,t){var n;void 0===t&&(t=[]);var r=M(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=p(r),a=o?[i].concat(i.visualViewport||[],Z(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(R(k(a)))}function D(e){return["table","td","th"].indexOf(x(e))>=0}function C(e){return l(e)&&"fixed"!==P(e).position?e.offsetParent:null}function A(e){for(var t=p(e),n=C(e);n&&D(n)&&"static"===P(n).position;)n=C(n);return n&&("html"===x(n)||"body"===x(n)&&"static"===P(n).position)?t:n||function(e){var t=/firefox/i.test(v());if(/Trident/i.test(v())&&l(e)&&"fixed"===P(e).position)return null;var n=k(e);for(d(n)&&(n=n.host);l(n)&&["html","body"].indexOf(x(n))<0;){var r=P(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}var L="top",S="bottom",T="right",B="left",W="auto",$=[L,S,T,B],H="start",I="end",V="viewport",N="popper",q=$.reduce((function(e,t){return e.concat([t+"-"+H,t+"-"+I])}),[]),F=[].concat($,[W]).reduce((function(e,t){return e.concat([t,t+"-"+H,t+"-"+I])}),[]),U=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function G(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function _(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var z={placement:"bottom",modifiers:[],strategy:"absolute"};function X(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function Y(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?z:o;return function(e,t,n){void 0===n&&(n=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},z,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],s=!1,c={state:o,setOptions:function(n){var s="function"===typeof n?n(o.options):n;p(),o.options=Object.assign({},i,o.options,s),o.scrollParents={reference:f(e)?R(e):e.contextElement?R(e.contextElement):[],popper:R(t)};var l=function(e){var t=G(e);return U.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,o.options.modifiers)));return o.orderedModifiers=l.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var s=i({state:o,name:t,instance:c,options:r}),p=function(){};a.push(s||p)}})),c.update()},forceUpdate:function(){if(!s){var e=o.elements,t=e.reference,n=e.popper;if(X(t,n)){o.rects={reference:j(t,A(n),"fixed"===o.options.strategy),popper:E(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,p=i.options,f=void 0===p?{}:p,l=i.name;"function"===typeof a&&(o=a({state:o,options:f,name:l,instance:c})||o)}else o.reset=!1,r=-1}}},update:_((function(){return new Promise((function(e){c.forceUpdate(),e(o)}))})),destroy:function(){p(),s=!0}};if(!X(e,t))return c;function p(){a.forEach((function(e){return e()})),a=[]}return c.setOptions(n).then((function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)})),c}}var J={passive:!0};function K(e){return e.split("-")[0]}function Q(e){return e.split("-")[1]}function ee(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function te(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?K(o):null,a=o?Q(o):null,s=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2;switch(i){case L:t={x:s,y:n.y-r.height};break;case S:t={x:s,y:n.y+n.height};break;case T:t={x:n.x+n.width,y:c};break;case B:t={x:n.x-r.width,y:c};break;default:t={x:n.x,y:n.y}}var p=i?ee(i):null;if(null!=p){var f="y"===p?"height":"width";switch(a){case H:t[p]=t[p]-(n[f]/2-r[f]/2);break;case I:t[p]=t[p]+(n[f]/2-r[f]/2)}}return t}var ne={top:"auto",right:"auto",bottom:"auto",left:"auto"};function re(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,c=e.gpuAcceleration,f=e.adaptive,l=e.roundOffsets,d=e.isFixed,u=a.x,m=void 0===u?0:u,v=a.y,g=void 0===v?0:v,y="function"===typeof l?l({x:m,y:g}):{x:m,y:g};m=y.x,g=y.y;var b=a.hasOwnProperty("x"),x=a.hasOwnProperty("y"),O=B,Z=L,j=window;if(f){var E=A(n),k="clientHeight",M="clientWidth";if(E===p(n)&&"static"!==P(E=w(n)).position&&"absolute"===s&&(k="scrollHeight",M="scrollWidth"),o===L||(o===B||o===T)&&i===I)Z=S,g-=(d&&E===j&&j.visualViewport?j.visualViewport.height:E[k])-r.height,g*=c?1:-1;if(o===B||(o===L||o===S)&&i===I)O=T,m-=(d&&E===j&&j.visualViewport?j.visualViewport.width:E[M])-r.width,m*=c?1:-1}var R,D=Object.assign({position:s},f&&ne),C=!0===l?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:h(t*r)/r||0,y:h(n*r)/r||0}}({x:m,y:g}):{x:m,y:g};return m=C.x,g=C.y,c?Object.assign({},D,((R={})[Z]=x?"0":"",R[O]=b?"0":"",R.transform=(j.devicePixelRatio||1)<=1?"translate("+m+"px, "+g+"px)":"translate3d("+m+"px, "+g+"px, 0)",R)):Object.assign({},D,((t={})[Z]=x?g+"px":"",t[O]=b?m+"px":"",t.transform="",t))}var oe={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=F.reduce((function(e,n){return e[n]=function(e,t,n){var r=K(e),o=[B,L].indexOf(r)>=0?-1:1,i="function"===typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[B,T].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],c=s.x,p=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=p),t.modifiersData[r]=a}},ie={left:"right",right:"left",bottom:"top",top:"bottom"};function ae(e){return e.replace(/left|right|bottom|top/g,(function(e){return ie[e]}))}var se={start:"end",end:"start"};function ce(e){return e.replace(/start|end/g,(function(e){return se[e]}))}function pe(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&d(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function fe(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function le(e,t,n){return t===V?fe(function(e,t){var n=p(e),r=w(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,c=0;if(o){i=o.width,a=o.height;var f=g();(f||!f&&"fixed"===t)&&(s=o.offsetLeft,c=o.offsetTop)}return{width:i,height:a,x:s+O(e),y:c}}(e,n)):f(t)?function(e,t){var n=y(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):fe(function(e){var t,n=w(e),r=b(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=u(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=u(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+O(e),c=-r.scrollTop;return"rtl"===P(o||n).direction&&(s+=u(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:c}}(w(e)))}function de(e,t,n,r){var o="clippingParents"===t?function(e){var t=R(k(e)),n=["absolute","fixed"].indexOf(P(e).position)>=0&&l(e)?A(e):e;return f(n)?t.filter((function(e){return f(e)&&pe(e,n)&&"body"!==x(e)})):[]}(e):[].concat(t),i=[].concat(o,[n]),a=i[0],s=i.reduce((function(t,n){var o=le(e,n,r);return t.top=u(o.top,t.top),t.right=m(o.right,t.right),t.bottom=m(o.bottom,t.bottom),t.left=u(o.left,t.left),t}),le(e,a,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function ue(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function me(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function he(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,i=n.strategy,a=void 0===i?e.strategy:i,s=n.boundary,c=void 0===s?"clippingParents":s,p=n.rootBoundary,l=void 0===p?V:p,d=n.elementContext,u=void 0===d?N:d,m=n.altBoundary,h=void 0!==m&&m,v=n.padding,g=void 0===v?0:v,b=ue("number"!==typeof g?g:me(g,$)),x=u===N?"reference":N,O=e.rects.popper,P=e.elements[h?x:u],Z=de(f(P)?P:P.contextElement||w(e.elements.popper),c,l,a),j=y(e.elements.reference),E=te({reference:j,element:O,strategy:"absolute",placement:o}),k=fe(Object.assign({},O,E)),M=u===N?k:j,R={top:Z.top-M.top+b.top,bottom:M.bottom-Z.bottom+b.bottom,left:Z.left-M.left+b.left,right:M.right-Z.right+b.right},D=e.modifiersData.offset;if(u===N&&D){var C=D[o];Object.keys(R).forEach((function(e){var t=[T,S].indexOf(e)>=0?1:-1,n=[L,S].indexOf(e)>=0?"y":"x";R[e]+=C[n]*t}))}return R}function ve(e,t,n){return u(e,m(t,n))}var ge={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,c=n.boundary,p=n.rootBoundary,f=n.altBoundary,l=n.padding,d=n.tether,h=void 0===d||d,v=n.tetherOffset,g=void 0===v?0:v,y=he(t,{boundary:c,rootBoundary:p,padding:l,altBoundary:f}),b=K(t.placement),x=Q(t.placement),w=!x,O=ee(b),P="x"===O?"y":"x",Z=t.modifiersData.popperOffsets,j=t.rects.reference,k=t.rects.popper,M="function"===typeof g?g(Object.assign({},t.rects,{placement:t.placement})):g,R="number"===typeof M?{mainAxis:M,altAxis:M}:Object.assign({mainAxis:0,altAxis:0},M),D=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,C={x:0,y:0};if(Z){if(i){var W,$="y"===O?L:B,I="y"===O?S:T,V="y"===O?"height":"width",N=Z[O],q=N+y[$],F=N-y[I],U=h?-k[V]/2:0,G=x===H?j[V]:k[V],_=x===H?-k[V]:-j[V],z=t.elements.arrow,X=h&&z?E(z):{width:0,height:0},Y=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},J=Y[$],te=Y[I],ne=ve(0,j[V],X[V]),re=w?j[V]/2-U-ne-J-R.mainAxis:G-ne-J-R.mainAxis,oe=w?-j[V]/2+U+ne+te+R.mainAxis:_+ne+te+R.mainAxis,ie=t.elements.arrow&&A(t.elements.arrow),ae=ie?"y"===O?ie.clientTop||0:ie.clientLeft||0:0,se=null!=(W=null==D?void 0:D[O])?W:0,ce=N+oe-se,pe=ve(h?m(q,N+re-se-ae):q,N,h?u(F,ce):F);Z[O]=pe,C[O]=pe-N}if(s){var fe,le="x"===O?L:B,de="x"===O?S:T,ue=Z[P],me="y"===P?"height":"width",ge=ue+y[le],ye=ue-y[de],be=-1!==[L,B].indexOf(b),xe=null!=(fe=null==D?void 0:D[P])?fe:0,we=be?ge:ue-j[me]-k[me]-xe+R.altAxis,Oe=be?ue+j[me]+k[me]-xe-R.altAxis:ye,Pe=h&&be?function(e,t,n){var r=ve(e,t,n);return r>n?n:r}(we,ue,Oe):ve(h?we:ge,ue,h?Oe:ye);Z[P]=Pe,C[P]=Pe-ue}t.modifiersData[r]=C}},requiresIfExists:["offset"]};var ye={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=K(n.placement),c=ee(s),p=[B,T].indexOf(s)>=0?"height":"width";if(i&&a){var f=function(e,t){return ue("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:me(e,$))}(o.padding,n),l=E(i),d="y"===c?L:B,u="y"===c?S:T,m=n.rects.reference[p]+n.rects.reference[c]-a[c]-n.rects.popper[p],h=a[c]-n.rects.reference[c],v=A(i),g=v?"y"===c?v.clientHeight||0:v.clientWidth||0:0,y=m/2-h/2,b=f[d],x=g-l[p]-f[u],w=g/2-l[p]/2+y,O=ve(b,w,x),P=c;n.modifiersData[r]=((t={})[P]=O,t.centerOffset=O-w,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r)))&&pe(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function be(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function xe(e){return[L,T,S,B].some((function(t){return e[t]>=0}))}var we=Y({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,c=p(t.elements.popper),f=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&f.forEach((function(e){e.addEventListener("scroll",n.update,J)})),s&&c.addEventListener("resize",n.update,J),function(){i&&f.forEach((function(e){e.removeEventListener("scroll",n.update,J)})),s&&c.removeEventListener("resize",n.update,J)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=te({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,c=void 0===s||s,p={placement:K(t.placement),variation:Q(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,re(Object.assign({},p,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,re(Object.assign({},p,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];l(o)&&x(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});l(r)&&x(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},oe,{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,c=n.fallbackPlacements,p=n.padding,f=n.boundary,l=n.rootBoundary,d=n.altBoundary,u=n.flipVariations,m=void 0===u||u,h=n.allowedAutoPlacements,v=t.options.placement,g=K(v),y=c||(g===v||!m?[ae(v)]:function(e){if(K(e)===W)return[];var t=ae(e);return[ce(e),t,ce(t)]}(v)),b=[v].concat(y).reduce((function(e,n){return e.concat(K(n)===W?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,p=void 0===c?F:c,f=Q(r),l=f?s?q:q.filter((function(e){return Q(e)===f})):$,d=l.filter((function(e){return p.indexOf(e)>=0}));0===d.length&&(d=l);var u=d.reduce((function(t,n){return t[n]=he(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[K(n)],t}),{});return Object.keys(u).sort((function(e,t){return u[e]-u[t]}))}(t,{placement:n,boundary:f,rootBoundary:l,padding:p,flipVariations:m,allowedAutoPlacements:h}):n)}),[]),x=t.rects.reference,w=t.rects.popper,O=new Map,P=!0,Z=b[0],j=0;j<b.length;j++){var E=b[j],k=K(E),M=Q(E)===H,R=[L,S].indexOf(k)>=0,D=R?"width":"height",C=he(t,{placement:E,boundary:f,rootBoundary:l,altBoundary:d,padding:p}),A=R?M?T:B:M?S:L;x[D]>w[D]&&(A=ae(A));var I=ae(A),V=[];if(i&&V.push(C[k]<=0),s&&V.push(C[A]<=0,C[I]<=0),V.every((function(e){return e}))){Z=E,P=!1;break}O.set(E,V)}if(P)for(var N=function(e){var t=b.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return Z=t,"break"},U=m?3:1;U>0;U--){if("break"===N(U))break}t.placement!==Z&&(t.modifiersData[r]._skip=!0,t.placement=Z,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},ge,ye,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=he(t,{elementContext:"reference"}),s=he(t,{altBoundary:!0}),c=be(a,r),p=be(s,o,i),f=xe(c),l=xe(p);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:p,isReferenceHidden:f,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":l})}}]}),Oe=n(94780),Pe=n(78385),Ze=n(34867);function je(e){return(0,Ze.Z)("MuiPopperUnstyled",e)}(0,n(1588).Z)("MuiPopperUnstyled",["root"]);var Ee=n(18793),ke=n(85893);const Me=["anchorEl","children","component","direction","disablePortal","modifiers","open","ownerState","placement","popperOptions","popperRef","slotProps","slots","TransitionProps"],Re=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition"];function De(e){return"function"===typeof e?e():e}const Ce={},Ae=i.forwardRef((function(e,t){var n;const{anchorEl:c,children:p,component:f,direction:l,disablePortal:d,modifiers:u,open:m,ownerState:h,placement:v,popperOptions:g,popperRef:y,slotProps:b={},slots:x={},TransitionProps:w}=e,O=(0,o.Z)(e,Me),P=i.useRef(null),Z=(0,a.Z)(P,t),j=i.useRef(null),E=(0,a.Z)(j,y),k=i.useRef(E);(0,s.Z)((()=>{k.current=E}),[E]),i.useImperativeHandle(y,(()=>j.current),[]);const M=function(e,t){if("ltr"===t)return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}(v,l),[R,D]=i.useState(M);i.useEffect((()=>{j.current&&j.current.forceUpdate()})),(0,s.Z)((()=>{if(!c||!m)return;De(c);let e=[{name:"preventOverflow",options:{altBoundary:d}},{name:"flip",options:{altBoundary:d}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:e})=>{D(e.placement)}}];null!=u&&(e=e.concat(u)),g&&null!=g.modifiers&&(e=e.concat(g.modifiers));const t=we(De(c),P.current,(0,r.Z)({placement:M},g,{modifiers:e}));return k.current(t),()=>{t.destroy(),k.current(null)}}),[c,d,u,m,g,M]);const C={placement:R};null!==w&&(C.TransitionProps=w);const A=(0,Oe.Z)({root:["root"]},je,{}),L=null!=(n=null!=f?f:x.root)?n:"div",S=(0,Ee.Z)({elementType:L,externalSlotProps:b.root,externalForwardedProps:O,additionalProps:{role:"tooltip",ref:Z},ownerState:(0,r.Z)({},e,h),className:A.root});return(0,ke.jsx)(L,(0,r.Z)({},S,{children:"function"===typeof p?p(C):p}))}));var Le=i.forwardRef((function(e,t){const{anchorEl:n,children:a,container:s,direction:p="ltr",disablePortal:f=!1,keepMounted:l=!1,modifiers:d,open:u,placement:m="bottom",popperOptions:h=Ce,popperRef:v,style:g,transition:y=!1}=e,b=(0,o.Z)(e,Re),[x,w]=i.useState(!0);if(!l&&!u&&(!y||x))return null;const O=s||(n?(0,c.Z)(De(n)).body:void 0);return(0,ke.jsx)(Pe.Z,{disablePortal:f,container:O,children:(0,ke.jsx)(Ae,(0,r.Z)({anchorEl:n,direction:p,disablePortal:f,modifiers:d,ref:t,open:y?!x:u,placement:m,popperOptions:h,popperRef:v},b,{style:(0,r.Z)({position:"fixed",top:0,left:0,display:u||!l||y&&!x?null:"none"},g),TransitionProps:y?{in:u,onEnter:()=>{w(!1)},onExited:()=>{w(!0)}}:null,children:a}))})})),Se=n(34168),Te=n(81719),Be=n(78884);const We=["components","componentsProps","slots","slotProps"],$e=(0,Te.ZP)(Le,{name:"MuiPopper",slot:"Root",overridesResolver:(e,t)=>t.root})({});var He=i.forwardRef((function(e,t){var n;const i=(0,Se.Z)(),a=(0,Be.Z)({props:e,name:"MuiPopper"}),{components:s,componentsProps:c,slots:p,slotProps:f}=a,l=(0,o.Z)(a,We),d=null!=(n=null==p?void 0:p.root)?n:null==s?void 0:s.Root;return(0,ke.jsx)($e,(0,r.Z)({direction:null==i?void 0:i.direction,slots:{root:d},slotProps:null!=f?f:c},l,{ref:t}))}))}}]);