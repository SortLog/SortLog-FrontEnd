(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[829],{36336:function(t,e,n){"use strict";n.d(e,{Z:function(){return W}});var r=n(63366),a=n(87462),i=n(67294),o=n(86010),s=n(28320),p=n(34867),u=n(94780),c=n(29628);var d=(0,n(70182).ZP)(),h=n(66500),l=n(85893);const m=["className","component","disableGutters","fixed","maxWidth","classes"],g=(0,h.Z)(),x=d("div",{name:"MuiContainer",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[`maxWidth${(0,s.Z)(String(n.maxWidth))}`],n.fixed&&e.fixed,n.disableGutters&&e.disableGutters]}}),f=t=>(0,c.Z)({props:t,name:"MuiContainer",defaultTheme:g});var v=n(36622),Z=n(81719),b=n(78884);const y=function(t={}){const{createStyledComponent:e=x,useThemeProps:n=f,componentName:c="MuiContainer"}=t,d=e((({theme:t,ownerState:e})=>(0,a.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!e.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}})),(({theme:t,ownerState:e})=>e.fixed&&Object.keys(t.breakpoints.values).reduce(((e,n)=>{const r=n,a=t.breakpoints.values[r];return 0!==a&&(e[t.breakpoints.up(r)]={maxWidth:`${a}${t.breakpoints.unit}`}),e}),{})),(({theme:t,ownerState:e})=>(0,a.Z)({},"xs"===e.maxWidth&&{[t.breakpoints.up("xs")]:{maxWidth:Math.max(t.breakpoints.values.xs,444)}},e.maxWidth&&"xs"!==e.maxWidth&&{[t.breakpoints.up(e.maxWidth)]:{maxWidth:`${t.breakpoints.values[e.maxWidth]}${t.breakpoints.unit}`}}))),h=i.forwardRef((function(t,e){const i=n(t),{className:h,component:g="div",disableGutters:x=!1,fixed:f=!1,maxWidth:v="lg"}=i,Z=(0,r.Z)(i,m),b=(0,a.Z)({},i,{component:g,disableGutters:x,fixed:f,maxWidth:v}),y=((t,e)=>{const{classes:n,fixed:r,disableGutters:a,maxWidth:i}=t,o={root:["root",i&&`maxWidth${(0,s.Z)(String(i))}`,r&&"fixed",a&&"disableGutters"]};return(0,u.Z)(o,(t=>(0,p.Z)(e,t)),n)})(b,c);return(0,l.jsx)(d,(0,a.Z)({as:g,ownerState:b,className:(0,o.Z)(y.root,h),ref:e},Z))}));return h}({createStyledComponent:(0,Z.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[`maxWidth${(0,v.Z)(String(n.maxWidth))}`],n.fixed&&e.fixed,n.disableGutters&&e.disableGutters]}}),useThemeProps:t=>(0,b.Z)({props:t,name:"MuiContainer"})});var W=y},29630:function(t,e,n){"use strict";n.d(e,{Z:function(){return b}});var r=n(63366),a=n(87462),i=n(67294),o=n(86010),s=n(39707),p=n(94780),u=n(81719),c=n(78884),d=n(36622),h=n(1588),l=n(34867);function m(t){return(0,l.Z)("MuiTypography",t)}(0,h.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var g=n(85893);const x=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],f=(0,u.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.variant&&e[n.variant],"inherit"!==n.align&&e[`align${(0,d.Z)(n.align)}`],n.noWrap&&e.noWrap,n.gutterBottom&&e.gutterBottom,n.paragraph&&e.paragraph]}})((({theme:t,ownerState:e})=>(0,a.Z)({margin:0},e.variant&&t.typography[e.variant],"inherit"!==e.align&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16}))),v={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var b=i.forwardRef((function(t,e){const n=(0,c.Z)({props:t,name:"MuiTypography"}),i=(t=>Z[t]||t)(n.color),u=(0,s.Z)((0,a.Z)({},n,{color:i})),{align:h="inherit",className:l,component:b,gutterBottom:y=!1,noWrap:W=!1,paragraph:w=!1,variant:k="body1",variantMapping:S=v}=u,C=(0,r.Z)(u,x),M=(0,a.Z)({},u,{align:h,color:i,className:l,component:b,gutterBottom:y,noWrap:W,paragraph:w,variant:k,variantMapping:S}),N=b||(w?"p":S[k]||v[k])||"span",R=(t=>{const{align:e,gutterBottom:n,noWrap:r,paragraph:a,variant:i,classes:o}=t,s={root:["root",i,"inherit"!==t.align&&`align${(0,d.Z)(e)}`,n&&"gutterBottom",r&&"noWrap",a&&"paragraph"]};return(0,p.Z)(s,m,o)})(M);return(0,g.jsx)(f,(0,a.Z)({as:N,ref:e,ownerState:M,className:(0,o.Z)(R.root,l)},C))}))},77075:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/store",function(){return n(14330)}])},14330:function(t,e,n){"use strict";n.r(e);var r=n(85893),a=n(9473),i=n(2222),o=n(54225),s=n(30120),p=n(36336),u=n(29630);e.default=function(){var t=(0,a.v9)(i.F6),e=(0,a.I0)();return(0,r.jsx)(p.Z,{component:"main",maxWidth:"xs",children:(0,r.jsxs)(s.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,r.jsx)(u.Z,{component:"h1",variant:"h5",children:t}),(0,r.jsx)(o.Z,{onClick:function(){return e((0,i.nP)())},children:"Increment"}),(0,r.jsx)(o.Z,{onClick:function(){return e((0,i.Mj)())},children:"Decrement"}),(0,r.jsx)(o.Z,{onClick:function(){return e((0,i.ds)(100))},children:"Plus 100"}),(0,r.jsx)(o.Z,{onClick:function(){return e((0,i.ZH)())},children:"Clear"})]})})}}},function(t){t.O(0,[774,888,179],(function(){return e=77075,t(t.s=e);var e}));var e=t.O();_N_E=e}]);