(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[466],{21023:function(n,r,e){"use strict";var t=e(64836);r.Z=void 0;var o=t(e(64938)),a=e(85893),i=(0,o.default)((0,a.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");r.Z=i},68346:function(n,r,e){"use strict";e.d(r,{Z:function(){return S}});var t=e(63366),o=e(87462),a=e(67294),i=e(86010),s=e(94780),l=e(36622),c=e(81719),u=e(78884),p=e(51625),h=e(84771),d=e(29630),m=e(1588),g=e(34867);function x(n){return(0,g.Z)("MuiLink",n)}var v=(0,m.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),f=e(54844),y=e(41796);const Z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var b=({theme:n,ownerState:r})=>{const e=(n=>Z[n]||n)(r.color),t=(0,f.D)(n,`palette.${e}`,!1)||r.color,o=(0,f.D)(n,`palette.${e}Channel`);return"vars"in n&&o?`rgba(${o} / 0.4)`:(0,y.Fq)(t,.4)},w=e(85893);const j=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],B=(0,c.ZP)(d.Z,{name:"MuiLink",slot:"Root",overridesResolver:(n,r)=>{const{ownerState:e}=n;return[r.root,r[`underline${(0,l.Z)(e.underline)}`],"button"===e.component&&r.button]}})((({theme:n,ownerState:r})=>(0,o.Z)({},"none"===r.underline&&{textDecoration:"none"},"hover"===r.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===r.underline&&(0,o.Z)({textDecoration:"underline"},"inherit"!==r.color&&{textDecorationColor:b({theme:n,ownerState:r})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===r.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${v.focusVisible}`]:{outline:"auto"}})));var S=a.forwardRef((function(n,r){const e=(0,u.Z)({props:n,name:"MuiLink"}),{className:c,color:d="primary",component:m="a",onBlur:g,onFocus:v,TypographyClasses:f,underline:y="always",variant:b="inherit",sx:S}=e,M=(0,t.Z)(e,j),{isFocusVisibleRef:k,onBlur:C,onFocus:N,ref:R}=(0,p.Z)(),[_,z]=a.useState(!1),P=(0,h.Z)(r,R),V=(0,o.Z)({},e,{color:d,component:m,focusVisible:_,underline:y,variant:b}),W=(n=>{const{classes:r,component:e,focusVisible:t,underline:o}=n,a={root:["root",`underline${(0,l.Z)(o)}`,"button"===e&&"button",t&&"focusVisible"]};return(0,s.Z)(a,x,r)})(V);return(0,w.jsx)(B,(0,o.Z)({color:d,className:(0,i.Z)(W.root,c),classes:f,component:m,onBlur:n=>{C(n),!1===k.current&&z(!1),g&&g(n)},onFocus:n=>{N(n),!0===k.current&&z(!0),v&&v(n)},ref:P,ownerState:V,variant:b,sx:[...Object.keys(Z).includes(d)?[]:[{color:d}],...Array.isArray(S)?S:[S]]},M))}))},29630:function(n,r,e){"use strict";e.d(r,{Z:function(){return Z}});var t=e(63366),o=e(87462),a=e(67294),i=e(86010),s=e(39707),l=e(94780),c=e(81719),u=e(78884),p=e(36622),h=e(1588),d=e(34867);function m(n){return(0,d.Z)("MuiTypography",n)}(0,h.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var g=e(85893);const x=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],v=(0,c.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(n,r)=>{const{ownerState:e}=n;return[r.root,e.variant&&r[e.variant],"inherit"!==e.align&&r[`align${(0,p.Z)(e.align)}`],e.noWrap&&r.noWrap,e.gutterBottom&&r.gutterBottom,e.paragraph&&r.paragraph]}})((({theme:n,ownerState:r})=>(0,o.Z)({margin:0},r.variant&&n.typography[r.variant],"inherit"!==r.align&&{textAlign:r.align},r.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r.gutterBottom&&{marginBottom:"0.35em"},r.paragraph&&{marginBottom:16}))),f={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},y={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var Z=a.forwardRef((function(n,r){const e=(0,u.Z)({props:n,name:"MuiTypography"}),a=(n=>y[n]||n)(e.color),c=(0,s.Z)((0,o.Z)({},e,{color:a})),{align:h="inherit",className:d,component:Z,gutterBottom:b=!1,noWrap:w=!1,paragraph:j=!1,variant:B="body1",variantMapping:S=f}=c,M=(0,t.Z)(c,x),k=(0,o.Z)({},c,{align:h,color:a,className:d,component:Z,gutterBottom:b,noWrap:w,paragraph:j,variant:B,variantMapping:S}),C=Z||(j?"p":S[B]||f[B])||"span",N=(n=>{const{align:r,gutterBottom:e,noWrap:t,paragraph:o,variant:a,classes:i}=n,s={root:["root",a,"inherit"!==n.align&&`align${(0,p.Z)(r)}`,e&&"gutterBottom",t&&"noWrap",o&&"paragraph"]};return(0,l.Z)(s,m,i)})(k);return(0,g.jsx)(v,(0,o.Z)({as:C,ref:r,ownerState:k,className:(0,i.Z)(N.root,d)},M))}))},54658:function(n,r,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/tracking-form",function(){return e(34597)}])},34597:function(n,r,e){"use strict";e.r(r),e.d(r,{default:function(){return x}});var t=e(85893),o=(e(67294),e(30120)),a=e(68346),i=e(29630),s=e(79072),l=e(54225),c=e(21023),u=e(58175),p=(0,u.Z)((0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",clipRule:"evenodd"})}),"Calendar"),h=e(5365),d=(0,u.Z)((0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:[(0,t.jsx)("path",{d:"M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"}),(0,t.jsx)("path",{fillRule:"evenodd",d:"M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z",clipRule:"evenodd"})]}),"PencilAlt"),m=e(41664),g=e.n(m);function x(){return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(o.Z,{sx:{flexGrow:1,mx:1,width:"95%"},children:[(0,t.jsx)(o.Z,{sx:{mb:4},children:(0,t.jsx)(g(),{href:"/dashboard/history",passHref:!0,children:(0,t.jsxs)(a.Z,{color:"textPrimary",component:"a",sx:{alignItems:"center",display:"flex"},children:[(0,t.jsx)(c.Z,{fontSize:"small",sx:{mr:1}}),(0,t.jsx)(i.Z,{variant:"subtitle2",children:"history"})]})})}),(0,t.jsx)(o.Z,{sx:{mb:4},children:(0,t.jsxs)(s.ZP,{container:!0,justifyContent:"space-between",spacing:3,children:[(0,t.jsxs)(s.ZP,{item:!0,children:[(0,t.jsx)(i.Z,{variant:"h4",children:"Tracking Form in development"}),(0,t.jsxs)(o.Z,{sx:{alignItems:"center",display:"flex",ml:-1,mt:1},children:[(0,t.jsx)(p,{color:"action",fontSize:"small",sx:{ml:1}}),(0,t.jsx)(i.Z,{variant:"body2",sx:{ml:1},children:"08/10/2022 14:11"})]})]}),(0,t.jsxs)(s.ZP,{item:!0,sx:{ml:-2},children:[(0,t.jsx)(l.Z,{endIcon:(0,t.jsx)(d,{fontSize:"small"}),variant:"outlined",sx:{ml:2},children:"Edit"}),(0,t.jsx)(l.Z,{endIcon:(0,t.jsx)(h._,{fontSize:"small"}),variant:"contained",sx:{ml:2},children:"Action"})]})]})})]})})}}},function(n){n.O(0,[72,774,888,179],(function(){return r=54658,n(n.s=r);var r}));var r=n.O();_N_E=r}]);