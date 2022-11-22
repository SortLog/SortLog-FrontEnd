"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1900],{90060:function(e,t,n){n.d(t,{Z:function(){return P}});var r=n(63366),o=n(87462),i=n(67294),a=n(86010),s=n(94780),c=n(41796),l=n(81719),p=n(78884),d=n(57742),f=n(50522),u=n(63289),m=n(84771),h=n(75741),v=n(1588);var g=(0,v.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]);var y=(0,v.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),b=n(34867);function x(e){return(0,b.Z)("MuiMenuItem",e)}var w=(0,v.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),O=n(85893);const Z=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],k=(0,l.ZP)(f.Z,{shouldForwardProp:e=>(0,l.FO)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.dense&&t.dense,n.divider&&t.divider,!n.disableGutters&&t.gutters]}})((({theme:e,ownerState:t})=>(0,o.Z)({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${w.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${w.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${w.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${w.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${w.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${h.Z.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${h.Z.inset}`]:{marginLeft:52},[`& .${y.root}`]:{marginTop:0,marginBottom:0},[`& .${y.inset}`]:{paddingLeft:36},[`& .${g.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&(0,o.Z)({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${g.root} svg`]:{fontSize:"1.25rem"}}))));var P=i.forwardRef((function(e,t){const n=(0,p.Z)({props:e,name:"MuiMenuItem"}),{autoFocus:c=!1,component:l="li",dense:f=!1,divider:h=!1,disableGutters:v=!1,focusVisibleClassName:g,role:y="menuitem",tabIndex:b,className:w}=n,P=(0,r.Z)(n,Z),j=i.useContext(d.Z),C=i.useMemo((()=>({dense:f||j.dense||!1,disableGutters:v})),[j.dense,f,v]),E=i.useRef(null);(0,u.Z)((()=>{c&&E.current&&E.current.focus()}),[c]);const M=(0,o.Z)({},n,{dense:C.dense,divider:h,disableGutters:v}),R=(e=>{const{disabled:t,dense:n,divider:r,disableGutters:i,selected:a,classes:c}=e,l={root:["root",n&&"dense",t&&"disabled",!i&&"gutters",r&&"divider",a&&"selected"]},p=(0,s.Z)(l,x,c);return(0,o.Z)({},c,p)})(n),D=(0,m.Z)(E,t);let T;return n.disabled||(T=void 0!==b?b:-1),(0,O.jsx)(d.Z.Provider,{value:C,children:(0,O.jsx)(k,(0,o.Z)({ref:D,role:y,tabIndex:T,component:l,focusVisibleClassName:(0,a.Z)(R.focusVisible,g),className:(0,a.Z)(R.root,w)},P,{ownerState:M,classes:R}))})}))},58402:function(e,t,n){n.d(t,{Z:function(){return We}});var r=n(87462),o=n(63366),i=n(67294),a=n(30067),s=n(16600),c=n(57094);function l(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function p(e){return e instanceof l(e).Element||e instanceof Element}function d(e){return e instanceof l(e).HTMLElement||e instanceof HTMLElement}function f(e){return"undefined"!==typeof ShadowRoot&&(e instanceof l(e).ShadowRoot||e instanceof ShadowRoot)}var u=Math.max,m=Math.min,h=Math.round;function v(){var e=navigator.userAgentData;return null!=e&&e.brands?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function g(){return!/^((?!chrome|android).)*safari/i.test(v())}function y(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var r=e.getBoundingClientRect(),o=1,i=1;t&&d(e)&&(o=e.offsetWidth>0&&h(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&h(r.height)/e.offsetHeight||1);var a=(p(e)?l(e):window).visualViewport,s=!g()&&n,c=(r.left+(s&&a?a.offsetLeft:0))/o,f=(r.top+(s&&a?a.offsetTop:0))/i,u=r.width/o,m=r.height/i;return{width:u,height:m,top:f,right:c+u,bottom:f+m,left:c,x:c,y:f}}function b(e){var t=l(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function x(e){return e?(e.nodeName||"").toLowerCase():null}function w(e){return((p(e)?e.ownerDocument:e.document)||window.document).documentElement}function O(e){return y(w(e)).left+b(e).scrollLeft}function Z(e){return l(e).getComputedStyle(e)}function k(e){var t=Z(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function P(e,t,n){void 0===n&&(n=!1);var r=d(t),o=d(t)&&function(e){var t=e.getBoundingClientRect(),n=h(t.width)/e.offsetWidth||1,r=h(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),i=w(t),a=y(e,o,n),s={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&(("body"!==x(t)||k(i))&&(s=function(e){return e!==l(e)&&d(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:b(e);var t}(t)),d(t)?((c=y(t,!0)).x+=t.clientLeft,c.y+=t.clientTop):i&&(c.x=O(i))),{x:a.left+s.scrollLeft-c.x,y:a.top+s.scrollTop-c.y,width:a.width,height:a.height}}function j(e){var t=y(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function C(e){return"html"===x(e)?e:e.assignedSlot||e.parentNode||(f(e)?e.host:null)||w(e)}function E(e){return["html","body","#document"].indexOf(x(e))>=0?e.ownerDocument.body:d(e)&&k(e)?e:E(C(e))}function M(e,t){var n;void 0===t&&(t=[]);var r=E(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=l(r),a=o?[i].concat(i.visualViewport||[],k(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(M(C(a)))}function R(e){return["table","td","th"].indexOf(x(e))>=0}function D(e){return d(e)&&"fixed"!==Z(e).position?e.offsetParent:null}function T(e){for(var t=l(e),n=D(e);n&&R(n)&&"static"===Z(n).position;)n=D(n);return n&&("html"===x(n)||"body"===x(n)&&"static"===Z(n).position)?t:n||function(e){var t=/firefox/i.test(v());if(/Trident/i.test(v())&&d(e)&&"fixed"===Z(e).position)return null;var n=C(e);for(f(n)&&(n=n.host);d(n)&&["html","body"].indexOf(x(n))<0;){var r=Z(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}var A="top",$="bottom",H="right",S="left",L="auto",B=[A,$,H,S],W="start",N="end",z="viewport",I="popper",V=B.reduce((function(e,t){return e.concat([t+"-"+W,t+"-"+N])}),[]),q=[].concat(B,[L]).reduce((function(e,t){return e.concat([t,t+"-"+W,t+"-"+N])}),[]),F=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function U(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function _(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var G={placement:"bottom",modifiers:[],strategy:"absolute"};function X(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function Y(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?G:o;return function(e,t,n){void 0===n&&(n=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},G,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],s=!1,c={state:o,setOptions:function(n){var s="function"===typeof n?n(o.options):n;l(),o.options=Object.assign({},i,o.options,s),o.scrollParents={reference:p(e)?M(e):e.contextElement?M(e.contextElement):[],popper:M(t)};var d=function(e){var t=U(e);return F.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,o.options.modifiers)));return o.orderedModifiers=d.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var s=i({state:o,name:t,instance:c,options:r}),l=function(){};a.push(s||l)}})),c.update()},forceUpdate:function(){if(!s){var e=o.elements,t=e.reference,n=e.popper;if(X(t,n)){o.rects={reference:P(t,T(n),"fixed"===o.options.strategy),popper:j(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,l=i.options,p=void 0===l?{}:l,d=i.name;"function"===typeof a&&(o=a({state:o,options:p,name:d,instance:c})||o)}else o.reset=!1,r=-1}}},update:_((function(){return new Promise((function(e){c.forceUpdate(),e(o)}))})),destroy:function(){l(),s=!0}};if(!X(e,t))return c;function l(){a.forEach((function(e){return e()})),a=[]}return c.setOptions(n).then((function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)})),c}}var J={passive:!0};function K(e){return e.split("-")[0]}function Q(e){return e.split("-")[1]}function ee(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function te(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?K(o):null,a=o?Q(o):null,s=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2;switch(i){case A:t={x:s,y:n.y-r.height};break;case $:t={x:s,y:n.y+n.height};break;case H:t={x:n.x+n.width,y:c};break;case S:t={x:n.x-r.width,y:c};break;default:t={x:n.x,y:n.y}}var l=i?ee(i):null;if(null!=l){var p="y"===l?"height":"width";switch(a){case W:t[l]=t[l]-(n[p]/2-r[p]/2);break;case N:t[l]=t[l]+(n[p]/2-r[p]/2)}}return t}var ne={top:"auto",right:"auto",bottom:"auto",left:"auto"};function re(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,c=e.gpuAcceleration,p=e.adaptive,d=e.roundOffsets,f=e.isFixed,u=a.x,m=void 0===u?0:u,v=a.y,g=void 0===v?0:v,y="function"===typeof d?d({x:m,y:g}):{x:m,y:g};m=y.x,g=y.y;var b=a.hasOwnProperty("x"),x=a.hasOwnProperty("y"),O=S,k=A,P=window;if(p){var j=T(n),C="clientHeight",E="clientWidth";if(j===l(n)&&"static"!==Z(j=w(n)).position&&"absolute"===s&&(C="scrollHeight",E="scrollWidth"),o===A||(o===S||o===H)&&i===N)k=$,g-=(f&&j===P&&P.visualViewport?P.visualViewport.height:j[C])-r.height,g*=c?1:-1;if(o===S||(o===A||o===$)&&i===N)O=H,m-=(f&&j===P&&P.visualViewport?P.visualViewport.width:j[E])-r.width,m*=c?1:-1}var M,R=Object.assign({position:s},p&&ne),D=!0===d?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:h(t*r)/r||0,y:h(n*r)/r||0}}({x:m,y:g}):{x:m,y:g};return m=D.x,g=D.y,c?Object.assign({},R,((M={})[k]=x?"0":"",M[O]=b?"0":"",M.transform=(P.devicePixelRatio||1)<=1?"translate("+m+"px, "+g+"px)":"translate3d("+m+"px, "+g+"px, 0)",M)):Object.assign({},R,((t={})[k]=x?g+"px":"",t[O]=b?m+"px":"",t.transform="",t))}var oe={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=q.reduce((function(e,n){return e[n]=function(e,t,n){var r=K(e),o=[S,A].indexOf(r)>=0?-1:1,i="function"===typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[S,H].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],c=s.x,l=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=l),t.modifiersData[r]=a}},ie={left:"right",right:"left",bottom:"top",top:"bottom"};function ae(e){return e.replace(/left|right|bottom|top/g,(function(e){return ie[e]}))}var se={start:"end",end:"start"};function ce(e){return e.replace(/start|end/g,(function(e){return se[e]}))}function le(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&f(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function pe(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function de(e,t,n){return t===z?pe(function(e,t){var n=l(e),r=w(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,c=0;if(o){i=o.width,a=o.height;var p=g();(p||!p&&"fixed"===t)&&(s=o.offsetLeft,c=o.offsetTop)}return{width:i,height:a,x:s+O(e),y:c}}(e,n)):p(t)?function(e,t){var n=y(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):pe(function(e){var t,n=w(e),r=b(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=u(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=u(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+O(e),c=-r.scrollTop;return"rtl"===Z(o||n).direction&&(s+=u(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:c}}(w(e)))}function fe(e,t,n,r){var o="clippingParents"===t?function(e){var t=M(C(e)),n=["absolute","fixed"].indexOf(Z(e).position)>=0&&d(e)?T(e):e;return p(n)?t.filter((function(e){return p(e)&&le(e,n)&&"body"!==x(e)})):[]}(e):[].concat(t),i=[].concat(o,[n]),a=i[0],s=i.reduce((function(t,n){var o=de(e,n,r);return t.top=u(o.top,t.top),t.right=m(o.right,t.right),t.bottom=m(o.bottom,t.bottom),t.left=u(o.left,t.left),t}),de(e,a,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function ue(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function me(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function he(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,i=n.strategy,a=void 0===i?e.strategy:i,s=n.boundary,c=void 0===s?"clippingParents":s,l=n.rootBoundary,d=void 0===l?z:l,f=n.elementContext,u=void 0===f?I:f,m=n.altBoundary,h=void 0!==m&&m,v=n.padding,g=void 0===v?0:v,b=ue("number"!==typeof g?g:me(g,B)),x=u===I?"reference":I,O=e.rects.popper,Z=e.elements[h?x:u],k=fe(p(Z)?Z:Z.contextElement||w(e.elements.popper),c,d,a),P=y(e.elements.reference),j=te({reference:P,element:O,strategy:"absolute",placement:o}),C=pe(Object.assign({},O,j)),E=u===I?C:P,M={top:k.top-E.top+b.top,bottom:E.bottom-k.bottom+b.bottom,left:k.left-E.left+b.left,right:E.right-k.right+b.right},R=e.modifiersData.offset;if(u===I&&R){var D=R[o];Object.keys(M).forEach((function(e){var t=[H,$].indexOf(e)>=0?1:-1,n=[A,$].indexOf(e)>=0?"y":"x";M[e]+=D[n]*t}))}return M}function ve(e,t,n){return u(e,m(t,n))}var ge={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,c=n.boundary,l=n.rootBoundary,p=n.altBoundary,d=n.padding,f=n.tether,h=void 0===f||f,v=n.tetherOffset,g=void 0===v?0:v,y=he(t,{boundary:c,rootBoundary:l,padding:d,altBoundary:p}),b=K(t.placement),x=Q(t.placement),w=!x,O=ee(b),Z="x"===O?"y":"x",k=t.modifiersData.popperOffsets,P=t.rects.reference,C=t.rects.popper,E="function"===typeof g?g(Object.assign({},t.rects,{placement:t.placement})):g,M="number"===typeof E?{mainAxis:E,altAxis:E}:Object.assign({mainAxis:0,altAxis:0},E),R=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,D={x:0,y:0};if(k){if(i){var L,B="y"===O?A:S,N="y"===O?$:H,z="y"===O?"height":"width",I=k[O],V=I+y[B],q=I-y[N],F=h?-C[z]/2:0,U=x===W?P[z]:C[z],_=x===W?-C[z]:-P[z],G=t.elements.arrow,X=h&&G?j(G):{width:0,height:0},Y=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},J=Y[B],te=Y[N],ne=ve(0,P[z],X[z]),re=w?P[z]/2-F-ne-J-M.mainAxis:U-ne-J-M.mainAxis,oe=w?-P[z]/2+F+ne+te+M.mainAxis:_+ne+te+M.mainAxis,ie=t.elements.arrow&&T(t.elements.arrow),ae=ie?"y"===O?ie.clientTop||0:ie.clientLeft||0:0,se=null!=(L=null==R?void 0:R[O])?L:0,ce=I+oe-se,le=ve(h?m(V,I+re-se-ae):V,I,h?u(q,ce):q);k[O]=le,D[O]=le-I}if(s){var pe,de="x"===O?A:S,fe="x"===O?$:H,ue=k[Z],me="y"===Z?"height":"width",ge=ue+y[de],ye=ue-y[fe],be=-1!==[A,S].indexOf(b),xe=null!=(pe=null==R?void 0:R[Z])?pe:0,we=be?ge:ue-P[me]-C[me]-xe+M.altAxis,Oe=be?ue+P[me]+C[me]-xe-M.altAxis:ye,Ze=h&&be?function(e,t,n){var r=ve(e,t,n);return r>n?n:r}(we,ue,Oe):ve(h?we:ge,ue,h?Oe:ye);k[Z]=Ze,D[Z]=Ze-ue}t.modifiersData[r]=D}},requiresIfExists:["offset"]};var ye={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=K(n.placement),c=ee(s),l=[S,H].indexOf(s)>=0?"height":"width";if(i&&a){var p=function(e,t){return ue("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:me(e,B))}(o.padding,n),d=j(i),f="y"===c?A:S,u="y"===c?$:H,m=n.rects.reference[l]+n.rects.reference[c]-a[c]-n.rects.popper[l],h=a[c]-n.rects.reference[c],v=T(i),g=v?"y"===c?v.clientHeight||0:v.clientWidth||0:0,y=m/2-h/2,b=p[f],x=g-d[l]-p[u],w=g/2-d[l]/2+y,O=ve(b,w,x),Z=c;n.modifiersData[r]=((t={})[Z]=O,t.centerOffset=O-w,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r)))&&le(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function be(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function xe(e){return[A,H,$,S].some((function(t){return e[t]>=0}))}var we=Y({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,c=l(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&p.forEach((function(e){e.addEventListener("scroll",n.update,J)})),s&&c.addEventListener("resize",n.update,J),function(){i&&p.forEach((function(e){e.removeEventListener("scroll",n.update,J)})),s&&c.removeEventListener("resize",n.update,J)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=te({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,c=void 0===s||s,l={placement:K(t.placement),variation:Q(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,re(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,re(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];d(o)&&x(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});d(r)&&x(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},oe,{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,c=n.fallbackPlacements,l=n.padding,p=n.boundary,d=n.rootBoundary,f=n.altBoundary,u=n.flipVariations,m=void 0===u||u,h=n.allowedAutoPlacements,v=t.options.placement,g=K(v),y=c||(g===v||!m?[ae(v)]:function(e){if(K(e)===L)return[];var t=ae(e);return[ce(e),t,ce(t)]}(v)),b=[v].concat(y).reduce((function(e,n){return e.concat(K(n)===L?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,l=void 0===c?q:c,p=Q(r),d=p?s?V:V.filter((function(e){return Q(e)===p})):B,f=d.filter((function(e){return l.indexOf(e)>=0}));0===f.length&&(f=d);var u=f.reduce((function(t,n){return t[n]=he(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[K(n)],t}),{});return Object.keys(u).sort((function(e,t){return u[e]-u[t]}))}(t,{placement:n,boundary:p,rootBoundary:d,padding:l,flipVariations:m,allowedAutoPlacements:h}):n)}),[]),x=t.rects.reference,w=t.rects.popper,O=new Map,Z=!0,k=b[0],P=0;P<b.length;P++){var j=b[P],C=K(j),E=Q(j)===W,M=[A,$].indexOf(C)>=0,R=M?"width":"height",D=he(t,{placement:j,boundary:p,rootBoundary:d,altBoundary:f,padding:l}),T=M?E?H:S:E?$:A;x[R]>w[R]&&(T=ae(T));var N=ae(T),z=[];if(i&&z.push(D[C]<=0),s&&z.push(D[T]<=0,D[N]<=0),z.every((function(e){return e}))){k=j,Z=!1;break}O.set(j,z)}if(Z)for(var I=function(e){var t=b.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return k=t,"break"},F=m?3:1;F>0;F--){if("break"===I(F))break}t.placement!==k&&(t.modifiersData[r]._skip=!0,t.placement=k,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},ge,ye,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=he(t,{elementContext:"reference"}),s=he(t,{altBoundary:!0}),c=be(a,r),l=be(s,o,i),p=xe(c),d=xe(l);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:p,hasPopperEscaped:d},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":d})}}]}),Oe=n(94780),Ze=n(78385),ke=n(34867);function Pe(e){return(0,ke.Z)("MuiPopperUnstyled",e)}(0,n(1588).Z)("MuiPopperUnstyled",["root"]);var je=n(18793),Ce=n(85893);const Ee=["anchorEl","children","component","direction","disablePortal","modifiers","open","ownerState","placement","popperOptions","popperRef","slotProps","slots","TransitionProps"],Me=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition"];function Re(e){return"function"===typeof e?e():e}const De={},Te=i.forwardRef((function(e,t){var n;const{anchorEl:c,children:l,component:p,direction:d,disablePortal:f,modifiers:u,open:m,ownerState:h,placement:v,popperOptions:g,popperRef:y,slotProps:b={},slots:x={},TransitionProps:w}=e,O=(0,o.Z)(e,Ee),Z=i.useRef(null),k=(0,a.Z)(Z,t),P=i.useRef(null),j=(0,a.Z)(P,y),C=i.useRef(j);(0,s.Z)((()=>{C.current=j}),[j]),i.useImperativeHandle(y,(()=>P.current),[]);const E=function(e,t){if("ltr"===t)return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}(v,d),[M,R]=i.useState(E);i.useEffect((()=>{P.current&&P.current.forceUpdate()})),(0,s.Z)((()=>{if(!c||!m)return;Re(c);let e=[{name:"preventOverflow",options:{altBoundary:f}},{name:"flip",options:{altBoundary:f}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:e})=>{R(e.placement)}}];null!=u&&(e=e.concat(u)),g&&null!=g.modifiers&&(e=e.concat(g.modifiers));const t=we(Re(c),Z.current,(0,r.Z)({placement:E},g,{modifiers:e}));return C.current(t),()=>{t.destroy(),C.current(null)}}),[c,f,u,m,g,E]);const D={placement:M};null!==w&&(D.TransitionProps=w);const T=(0,Oe.Z)({root:["root"]},Pe,{}),A=null!=(n=null!=p?p:x.root)?n:"div",$=(0,je.Z)({elementType:A,externalSlotProps:b.root,externalForwardedProps:O,additionalProps:{role:"tooltip",ref:k},ownerState:(0,r.Z)({},e,h),className:T.root});return(0,Ce.jsx)(A,(0,r.Z)({},$,{children:"function"===typeof l?l(D):l}))}));var Ae=i.forwardRef((function(e,t){const{anchorEl:n,children:a,container:s,direction:l="ltr",disablePortal:p=!1,keepMounted:d=!1,modifiers:f,open:u,placement:m="bottom",popperOptions:h=De,popperRef:v,style:g,transition:y=!1}=e,b=(0,o.Z)(e,Me),[x,w]=i.useState(!0);if(!d&&!u&&(!y||x))return null;const O=s||(n?(0,c.Z)(Re(n)).body:void 0);return(0,Ce.jsx)(Ze.Z,{disablePortal:p,container:O,children:(0,Ce.jsx)(Te,(0,r.Z)({anchorEl:n,direction:l,disablePortal:p,modifiers:f,ref:t,open:y?!x:u,placement:m,popperOptions:h,popperRef:v},b,{style:(0,r.Z)({position:"fixed",top:0,left:0,display:u||!d||y&&!x?null:"none"},g),TransitionProps:y?{in:u,onEnter:()=>{w(!1)},onExited:()=>{w(!0)}}:null,children:a}))})})),$e=n(34168),He=n(81719),Se=n(78884);const Le=["components","componentsProps","slots","slotProps"],Be=(0,He.ZP)(Ae,{name:"MuiPopper",slot:"Root",overridesResolver:(e,t)=>t.root})({});var We=i.forwardRef((function(e,t){var n;const i=(0,$e.Z)(),a=(0,Se.Z)({props:e,name:"MuiPopper"}),{components:s,componentsProps:c,slots:l,slotProps:p}=a,d=(0,o.Z)(a,Le),f=null!=(n=null==l?void 0:l.root)?n:null==s?void 0:s.Root;return(0,Ce.jsx)(Be,(0,r.Z)({direction:null==i?void 0:i.direction,slots:{root:f},slotProps:null!=p?p:c},d,{ref:t}))}))},21109:function(e,t,n){const r=n(67294).createContext();t.Z=r},80858:function(e,t,n){const r=n(67294).createContext();t.Z=r},5605:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(63366),o=n(87462),i=n(67294),a=n(86010),s=n(94780),c=n(41796),l=n(36622),p=n(21109),d=n(80858),f=n(78884),u=n(81719),m=n(1588),h=n(34867);function v(e){return(0,h.Z)("MuiTableCell",e)}var g=(0,m.Z)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),y=n(85893);const b=["align","className","component","padding","scope","size","sortDirection","variant"],x=(0,u.ZP)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`size${(0,l.Z)(n.size)}`],"normal"!==n.padding&&t[`padding${(0,l.Z)(n.padding)}`],"inherit"!==n.align&&t[`align${(0,l.Z)(n.align)}`],n.stickyHeader&&t.stickyHeader]}})((({theme:e,ownerState:t})=>(0,o.Z)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid\n    ${"light"===e.palette.mode?(0,c.$n)((0,c.Fq)(e.palette.divider,1),.88):(0,c._j)((0,c.Fq)(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},"head"===t.variant&&{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},"body"===t.variant&&{color:(e.vars||e).palette.text.primary},"footer"===t.variant&&{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},"small"===t.size&&{padding:"6px 16px",[`&.${g.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},"checkbox"===t.padding&&{width:48,padding:"0 0 0 4px"},"none"===t.padding&&{padding:0},"left"===t.align&&{textAlign:"left"},"center"===t.align&&{textAlign:"center"},"right"===t.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===t.align&&{textAlign:"justify"},t.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default})));var w=i.forwardRef((function(e,t){const n=(0,f.Z)({props:e,name:"MuiTableCell"}),{align:c="inherit",className:u,component:m,padding:h,scope:g,size:w,sortDirection:O,variant:Z}=n,k=(0,r.Z)(n,b),P=i.useContext(p.Z),j=i.useContext(d.Z),C=j&&"head"===j.variant;let E;E=m||(C?"th":"td");let M=g;!M&&C&&(M="col");const R=Z||j&&j.variant,D=(0,o.Z)({},n,{align:c,component:E,padding:h||(P&&P.padding?P.padding:"normal"),size:w||(P&&P.size?P.size:"medium"),sortDirection:O,stickyHeader:"head"===R&&P&&P.stickyHeader,variant:R}),T=(e=>{const{classes:t,variant:n,align:r,padding:o,size:i,stickyHeader:a}=e,c={root:["root",n,a&&"stickyHeader","inherit"!==r&&`align${(0,l.Z)(r)}`,"normal"!==o&&`padding${(0,l.Z)(o)}`,`size${(0,l.Z)(i)}`]};return(0,s.Z)(c,v,t)})(D);let A=null;return O&&(A="asc"===O?"ascending":"descending"),(0,y.jsx)(x,(0,o.Z)({as:E,ref:t,className:(0,a.Z)(T.root,u),"aria-sort":A,scope:M,ownerState:D},k))}))}}]);