(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[130],{49837:function(t,e,r){"use strict";r.d(e,{Z:function(){return x}});var n=r(87462),a=r(63366),o=r(67294),i=r(86010),s=r(94780),d=r(81719),u=r(78884),l=r(70918),c=r(1588),p=r(34867);function m(t){return(0,p.Z)("MuiCard",t)}(0,c.Z)("MuiCard",["root"]);var h=r(85893);const g=["className","raised"],f=(0,d.ZP)(l.Z,{name:"MuiCard",slot:"Root",overridesResolver:(t,e)=>e.root})((()=>({overflow:"hidden"})));var x=o.forwardRef((function(t,e){const r=(0,u.Z)({props:t,name:"MuiCard"}),{className:o,raised:d=!1}=r,l=(0,a.Z)(r,g),c=(0,n.Z)({},r,{raised:d}),p=(t=>{const{classes:e}=t;return(0,s.Z)({root:["root"]},m,e)})(c);return(0,h.jsx)(f,(0,n.Z)({className:(0,i.Z)(p.root,o),elevation:d?8:void 0,ref:e,ownerState:c},l))}))},62026:function(t,e,r){"use strict";r.d(e,{Z:function(){return f}});var n=r(63366),a=r(87462),o=r(67294),i=r(86010),s=r(94780),d=r(81719),u=r(78884),l=r(1588),c=r(34867);function p(t){return(0,c.Z)("MuiCardActions",t)}(0,l.Z)("MuiCardActions",["root","spacing"]);var m=r(85893);const h=["disableSpacing","className"],g=(0,d.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,!r.disableSpacing&&e.spacing]}})((({ownerState:t})=>(0,a.Z)({display:"flex",alignItems:"center",padding:8},!t.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})));var f=o.forwardRef((function(t,e){const r=(0,u.Z)({props:t,name:"MuiCardActions"}),{disableSpacing:o=!1,className:d}=r,l=(0,n.Z)(r,h),c=(0,a.Z)({},r,{disableSpacing:o}),f=(t=>{const{classes:e,disableSpacing:r}=t,n={root:["root",!r&&"spacing"]};return(0,s.Z)(n,p,e)})(c);return(0,m.jsx)(g,(0,a.Z)({className:(0,i.Z)(f.root,d),ownerState:c,ref:e},l))}))},91359:function(t,e,r){"use strict";r.d(e,{Z:function(){return f}});var n=r(87462),a=r(63366),o=r(67294),i=r(86010),s=r(94780),d=r(81719),u=r(78884),l=r(1588),c=r(34867);function p(t){return(0,c.Z)("MuiCardContent",t)}(0,l.Z)("MuiCardContent",["root"]);var m=r(85893);const h=["className","component"],g=(0,d.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(t,e)=>e.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}})));var f=o.forwardRef((function(t,e){const r=(0,u.Z)({props:t,name:"MuiCardContent"}),{className:o,component:d="div"}=r,l=(0,a.Z)(r,h),c=(0,n.Z)({},r,{component:d}),f=(t=>{const{classes:e}=t;return(0,s.Z)({root:["root"]},p,e)})(c);return(0,m.jsx)(g,(0,n.Z)({as:d,className:(0,i.Z)(f.root,o),ownerState:c,ref:e},l))}))},36336:function(t,e,r){"use strict";r.d(e,{Z:function(){return S}});var n=r(63366),a=r(87462),o=r(67294),i=r(86010),s=r(28320),d=r(34867),u=r(94780),l=r(29628);var c=(0,r(70182).ZP)(),p=r(66500),m=r(85893);const h=["className","component","disableGutters","fixed","maxWidth","classes"],g=(0,p.Z)(),f=c("div",{name:"MuiContainer",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,e[`maxWidth${(0,s.Z)(String(r.maxWidth))}`],r.fixed&&e.fixed,r.disableGutters&&e.disableGutters]}}),x=t=>(0,l.Z)({props:t,name:"MuiContainer",defaultTheme:g});var Z=r(36622),v=r(81719),y=r(78884);const b=function(t={}){const{createStyledComponent:e=f,useThemeProps:r=x,componentName:l="MuiContainer"}=t,c=e((({theme:t,ownerState:e})=>(0,a.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!e.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}})),(({theme:t,ownerState:e})=>e.fixed&&Object.keys(t.breakpoints.values).reduce(((e,r)=>{const n=r,a=t.breakpoints.values[n];return 0!==a&&(e[t.breakpoints.up(n)]={maxWidth:`${a}${t.breakpoints.unit}`}),e}),{})),(({theme:t,ownerState:e})=>(0,a.Z)({},"xs"===e.maxWidth&&{[t.breakpoints.up("xs")]:{maxWidth:Math.max(t.breakpoints.values.xs,444)}},e.maxWidth&&"xs"!==e.maxWidth&&{[t.breakpoints.up(e.maxWidth)]:{maxWidth:`${t.breakpoints.values[e.maxWidth]}${t.breakpoints.unit}`}}))),p=o.forwardRef((function(t,e){const o=r(t),{className:p,component:g="div",disableGutters:f=!1,fixed:x=!1,maxWidth:Z="lg"}=o,v=(0,n.Z)(o,h),y=(0,a.Z)({},o,{component:g,disableGutters:f,fixed:x,maxWidth:Z}),b=((t,e)=>{const{classes:r,fixed:n,disableGutters:a,maxWidth:o}=t,i={root:["root",o&&`maxWidth${(0,s.Z)(String(o))}`,n&&"fixed",a&&"disableGutters"]};return(0,u.Z)(i,(t=>(0,d.Z)(e,t)),r)})(y,l);return(0,m.jsx)(c,(0,a.Z)({as:g,ownerState:y,className:(0,i.Z)(b.root,p),ref:e},v))}));return p}({createStyledComponent:(0,v.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,e[`maxWidth${(0,Z.Z)(String(r.maxWidth))}`],r.fixed&&e.fixed,r.disableGutters&&e.disableGutters]}}),useThemeProps:t=>(0,y.Z)({props:t,name:"MuiContainer"})});var S=b},29630:function(t,e,r){"use strict";r.d(e,{Z:function(){return y}});var n=r(63366),a=r(87462),o=r(67294),i=r(86010),s=r(39707),d=r(94780),u=r(81719),l=r(78884),c=r(36622),p=r(1588),m=r(34867);function h(t){return(0,m.Z)("MuiTypography",t)}(0,p.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var g=r(85893);const f=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],x=(0,u.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.variant&&e[r.variant],"inherit"!==r.align&&e[`align${(0,c.Z)(r.align)}`],r.noWrap&&e.noWrap,r.gutterBottom&&e.gutterBottom,r.paragraph&&e.paragraph]}})((({theme:t,ownerState:e})=>(0,a.Z)({margin:0},e.variant&&t.typography[e.variant],"inherit"!==e.align&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16}))),Z={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},v={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var y=o.forwardRef((function(t,e){const r=(0,l.Z)({props:t,name:"MuiTypography"}),o=(t=>v[t]||t)(r.color),u=(0,s.Z)((0,a.Z)({},r,{color:o})),{align:p="inherit",className:m,component:y,gutterBottom:b=!1,noWrap:S=!1,paragraph:w=!1,variant:C="body1",variantMapping:W=Z}=u,j=(0,n.Z)(u,f),N=(0,a.Z)({},u,{align:p,color:o,className:m,component:y,gutterBottom:b,noWrap:S,paragraph:w,variant:C,variantMapping:W}),M=y||(w?"p":W[C]||Z[C])||"span",P=(t=>{const{align:e,gutterBottom:r,noWrap:n,paragraph:a,variant:o,classes:i}=t,s={root:["root",o,"inherit"!==t.align&&`align${(0,c.Z)(e)}`,r&&"gutterBottom",n&&"noWrap",a&&"paragraph"]};return(0,d.Z)(s,h,i)})(N);return(0,g.jsx)(x,(0,a.Z)({as:M,ref:e,ownerState:N,className:(0,i.Z)(P.root,m)},j))}))},20473:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/settings",function(){return r(1375)}])},1375:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return x}});var n=r(85893),a=r(67294),o=r(30120),i=r(36336),s=r(29630),d=r(44373),u=r(49837),l=r(62026),c=r(91359),p=r(54225),m=r(67836),h=r(22469),g=r(86501),f={card:{margin:"40px"},cardInput:{display:"flex",flexWrap:"wrap",justifyContent:"flex-start",gap:"10%",width:"100%"},textField:{width:"40%",margin:"20px 0"}};function x(){var t=JSON.parse(localStorage.getItem("currentUser")),e=(0,a.useState)(t.name),r=e[0],x=e[1],Z=(0,a.useState)(t.email),v=Z[0],y=Z[1],b=(0,a.useState)(t.provider),S=b[0],w=b[1],C=(0,a.useState)(""),W=(C[0],C[1]),j=(0,a.useState)(""),N=(j[0],j[1]);return(0,n.jsxs)(i.Z,{maxWidth:"md",children:[(0,n.jsx)(o.Z,{sx:{width:"100%",maxWidth:500}}),(0,n.jsx)(s.Z,{sx:{fontSize:40},color:"text.secondary",gutterBottom:!0,children:"User Profile"}),(0,n.jsx)(d.Z,{variant:"middle"}),(0,n.jsxs)(u.Z,{style:f.card,sx:{minWidth:275},children:[(0,n.jsxs)(c.Z,{children:[(0,n.jsx)(s.Z,{sx:{fontSize:20},color:"text.secondary",gutterBottom:!0,children:"Personal Information"}),(0,n.jsxs)("div",{style:f.cardInput,children:[(0,n.jsx)(m.Z,{style:f.textField,required:!0,id:"outlined-required",label:"Name",defaultValue:t.name,value:r,onChange:function(t){return x(t.target.value)}}),(0,n.jsx)(m.Z,{style:f.textField,required:!0,inputProps:{readOnly:!0},id:"outlined-password-input",label:"Email",defaultValue:t.email,value:v,onChange:function(t){return y(t.target.value)}}),(0,n.jsx)(m.Z,{style:f.textField,required:!0,id:"outlined-read-only-input",label:"Company Name",defaultValue:t.provider,value:S,onChange:function(t){return w(t.target.value)}})]})]}),(0,n.jsx)(l.Z,{children:(0,n.jsx)(p.Z,{onClick:function(){console.log("change user info"+t),t.name=r,t.provider=S;try{h._W(t._id,t),localStorage.setItem("currentUser",JSON.stringify(t)),g.ZP.success("Personal info updated successfully")}catch(e){console.log(e),g.ZP.error(e.message)}},children:"SAVE CHANGES"})})]}),(0,n.jsxs)(u.Z,{style:f.card,sx:{minWidth:275},children:[(0,n.jsxs)(c.Z,{children:[(0,n.jsx)(s.Z,{sx:{fontSize:20},color:"text.secondary",gutterBottom:!0,children:"Change Password"}),(0,n.jsxs)("div",{style:f.cardInput,children:[(0,n.jsx)(m.Z,{style:f.textField,required:!0,id:"outlined-required",label:"Old Password",defaultValue:"",onChange:function(t){return W(t.target.value)}}),(0,n.jsx)(m.Z,{style:f.textField,required:!0,id:"outlined-required",label:"New Password",defaultValue:"",onChange:function(t){return N(t.target.value)}})]})]}),(0,n.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,n.jsx)(l.Z,{children:(0,n.jsx)(p.Z,{children:"SAVE CHANGES"})}),(0,n.jsx)("a",{style:{margin:"0 30px",textDecoration:"none"},href:"#",children:"Forgot password?"})]})]})]})}},22469:function(t,e,r){"use strict";r.d(e,{CX:function(){return a},_W:function(){return o}});var n=r(21744),a=function(t){return(0,n.h)("/users/email/".concat(t),{method:"GET"})},o=function(t,e){return(0,n.h)("/users/".concat(t),{method:"PUT",data:e})}}},function(t){t.O(0,[836,774,888,179],(function(){return e=20473,t(t.s=e);var e}));var e=t.O();_N_E=e}]);