(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[696],{1953:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var i=r(7462),a=r(3366),n=r(7294),o=r(6010),s=r(9731),l=r(6523),d=r(9707),c=r(9718),u=r(5893);const h=["className","component"];var p=r(7078);const m=function(e={}){const{defaultTheme:t,defaultClassName:r="MuiBox-root",generateClassName:p,styleFunctionSx:m=l.Z}=e,x=(0,s.ZP)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(m);return n.forwardRef((function(e,n){const s=(0,c.Z)(t),l=(0,d.Z)(e),{className:m,component:f="div"}=l,g=(0,a.Z)(l,h);return(0,u.jsx)(x,(0,i.Z)({as:f,ref:n,className:(0,o.Z)(m,p?p(r):r),theme:s},g))}))}({defaultTheme:(0,r(9762).Z)(),defaultClassName:"MuiBox-root",generateClassName:p.Z.generate});var x=m},6336:function(e,t,r){"use strict";r.d(t,{Z:function(){return C}});var i=r(3366),a=r(7462),n=r(7294),o=r(6010),s=r(8320),l=r(4867),d=r(4780),c=r(5149);var u=(0,r(182).ZP)(),h=r(6500),p=r(5893);const m=["className","component","disableGutters","fixed","maxWidth","classes"],x=(0,h.Z)(),f=u("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`maxWidth${(0,s.Z)(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),g=e=>(0,c.Z)({props:e,name:"MuiContainer",defaultTheme:x});var v=r(6622),Z=r(1719),b=r(8884);const w=function(e={}){const{createStyledComponent:t=f,useThemeProps:r=g,componentName:c="MuiContainer"}=e,u=t((({theme:e,ownerState:t})=>(0,a.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}})),(({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce(((t,r)=>{const i=r,a=e.breakpoints.values[i];return 0!==a&&(t[e.breakpoints.up(i)]={maxWidth:`${a}${e.breakpoints.unit}`}),t}),{})),(({theme:e,ownerState:t})=>(0,a.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}}))),h=n.forwardRef((function(e,t){const n=r(e),{className:h,component:x="div",disableGutters:f=!1,fixed:g=!1,maxWidth:v="lg"}=n,Z=(0,i.Z)(n,m),b=(0,a.Z)({},n,{component:x,disableGutters:f,fixed:g,maxWidth:v}),w=((e,t)=>{const{classes:r,fixed:i,disableGutters:a,maxWidth:n}=e,o={root:["root",n&&`maxWidth${(0,s.Z)(String(n))}`,i&&"fixed",a&&"disableGutters"]};return(0,d.Z)(o,(e=>(0,l.Z)(t,e)),r)})(b,c);return(0,p.jsx)(u,(0,a.Z)({as:x,ownerState:b,className:(0,o.Z)(w.root,h),ref:t},Z))}));return h}({createStyledComponent:(0,Z.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`maxWidth${(0,v.Z)(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,b.Z)({props:e,name:"MuiContainer"})});var C=w},4898:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/userprofile",function(){return r(1433)}])},1433:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return _}});var i=r(5893),a=r(7294),n=r(793),o=r(1953),s=r(6336),l=r(9630),d=r(3366),c=r(7462),u=r(6010),h=r(4780),p=r(1796),m=r(1719),x=r(8884),f=r(4867),g=r(1588);function v(e){return(0,f.Z)("MuiDivider",e)}(0,g.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);const Z=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],b=(0,m.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.absolute&&t.absolute,t[r.variant],r.light&&t.light,"vertical"===r.orientation&&t.vertical,r.flexItem&&t.flexItem,r.children&&t.withChildren,r.children&&"vertical"===r.orientation&&t.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignLeft]}})((({theme:e,ownerState:t})=>(0,c.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:(0,p.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"})),(({theme:e,ownerState:t})=>(0,c.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}})),(({theme:e,ownerState:t})=>(0,c.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(e.vars||e).palette.divider}`,transform:"translateX(0%)"}})),(({ownerState:e})=>(0,c.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),w=(0,m.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.wrapper,"vertical"===r.orientation&&t.wrapperVertical]}})((({theme:e,ownerState:t})=>(0,c.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`})));var C=a.forwardRef((function(e,t){const r=(0,x.Z)({props:e,name:"MuiDivider"}),{absolute:a=!1,children:n,className:o,component:s=(n?"div":"hr"),flexItem:l=!1,light:p=!1,orientation:m="horizontal",role:f=("hr"!==s?"separator":void 0),textAlign:g="center",variant:C="fullWidth"}=r,S=(0,d.Z)(r,Z),j=(0,c.Z)({},r,{absolute:a,component:s,flexItem:l,light:p,orientation:m,role:f,textAlign:g,variant:C}),N=(e=>{const{absolute:t,children:r,classes:i,flexItem:a,light:n,orientation:o,textAlign:s,variant:l}=e,d={root:["root",t&&"absolute",l,n&&"light","vertical"===o&&"vertical",a&&"flexItem",r&&"withChildren",r&&"vertical"===o&&"withChildrenVertical","right"===s&&"vertical"!==o&&"textAlignRight","left"===s&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]};return(0,h.Z)(d,v,i)})(j);return(0,i.jsx)(b,(0,c.Z)({as:s,className:(0,u.Z)(N.root,o),role:f,ref:t,ownerState:j},S,{children:n?(0,i.jsx)(w,{className:N.wrapper,ownerState:j,children:n}):null}))})),S=r(918);function j(e){return(0,f.Z)("MuiCard",e)}(0,g.Z)("MuiCard",["root"]);const N=["className","raised"],y=(0,m.ZP)(S.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"})));var W=a.forwardRef((function(e,t){const r=(0,x.Z)({props:e,name:"MuiCard"}),{className:a,raised:n=!1}=r,o=(0,d.Z)(r,N),s=(0,c.Z)({},r,{raised:n}),l=(e=>{const{classes:t}=e;return(0,h.Z)({root:["root"]},j,t)})(s);return(0,i.jsx)(y,(0,c.Z)({className:(0,u.Z)(l.root,a),elevation:n?8:void 0,ref:t,ownerState:s},o))}));function R(e){return(0,f.Z)("MuiCardActions",e)}(0,g.Z)("MuiCardActions",["root","spacing"]);const M=["disableSpacing","className"],A=(0,m.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,!r.disableSpacing&&t.spacing]}})((({ownerState:e})=>(0,c.Z)({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})));var P=a.forwardRef((function(e,t){const r=(0,x.Z)({props:e,name:"MuiCardActions"}),{disableSpacing:a=!1,className:n}=r,o=(0,d.Z)(r,M),s=(0,c.Z)({},r,{disableSpacing:a}),l=(e=>{const{classes:t,disableSpacing:r}=e,i={root:["root",!r&&"spacing"]};return(0,h.Z)(i,R,t)})(s);return(0,i.jsx)(A,(0,c.Z)({className:(0,u.Z)(l.root,n),ownerState:s,ref:t},o))}));function k(e){return(0,f.Z)("MuiCardContent",e)}(0,g.Z)("MuiCardContent",["root"]);const I=["className","component"],V=(0,m.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}})));var $=a.forwardRef((function(e,t){const r=(0,x.Z)({props:e,name:"MuiCardContent"}),{className:a,component:n="div"}=r,o=(0,d.Z)(r,I),s=(0,c.Z)({},r,{component:n}),l=(e=>{const{classes:t}=e;return(0,h.Z)({root:["root"]},k,t)})(s);return(0,i.jsx)(V,(0,c.Z)({as:n,className:(0,u.Z)(l.root,a),ownerState:s,ref:t},o))})),F=r(5084),G=r(784),L={card:{margin:"40px"},cardInput:{display:"flex",flexWrap:"wrap",justifyContent:"flex-start",gap:"10%",width:"100%"},textField:{width:"40%",margin:"20px 0"}};function _(){return(0,i.jsxs)(a.Fragment,{children:[(0,i.jsx)(n.ZP,{}),(0,i.jsxs)(s.Z,{maxWidth:"md",children:[(0,i.jsx)(o.Z,{sx:{width:"100%",maxWidth:500}}),(0,i.jsx)(l.Z,{sx:{fontSize:40},color:"text.secondary",gutterBottom:!0,children:"User Profile"}),(0,i.jsx)(C,{variant:"middle"}),(0,i.jsxs)(W,{style:L.card,sx:{minWidth:275},children:[(0,i.jsxs)($,{children:[(0,i.jsx)(l.Z,{sx:{fontSize:20},color:"text.secondary",gutterBottom:!0,children:"Personal Information"}),(0,i.jsxs)("div",{style:L.cardInput,children:[(0,i.jsx)(G.Z,{style:L.textField,required:!0,id:"outlined-required",label:"First Name",defaultValue:""}),(0,i.jsx)(G.Z,{style:L.textField,required:!0,id:"outlined-required",label:"Last Name",defaultValue:""}),(0,i.jsx)(G.Z,{style:L.textField,required:!0,id:"outlined-password-input",label:"Email",defaultValue:""}),(0,i.jsx)(G.Z,{style:L.textField,required:!0,id:"outlined-read-only-input",label:"Company Name",defaultValue:""})]})]}),(0,i.jsx)(P,{children:(0,i.jsx)(F.Z,{children:"SAVE CHANGES"})})]}),(0,i.jsxs)(W,{style:L.card,sx:{minWidth:275},children:[(0,i.jsxs)($,{children:[(0,i.jsx)(l.Z,{sx:{fontSize:20},color:"text.secondary",gutterBottom:!0,children:"Change Password"}),(0,i.jsxs)("div",{style:L.cardInput,children:[(0,i.jsx)(G.Z,{style:L.textField,required:!0,id:"outlined-required",label:"Current Password",defaultValue:""}),(0,i.jsx)(G.Z,{style:L.textField,required:!0,id:"outlined-required",label:"New Password",defaultValue:""})]})]}),(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,i.jsx)(P,{children:(0,i.jsx)(F.Z,{children:"SAVE CHANGES"})}),(0,i.jsx)("a",{style:{margin:"0 30px",textDecoration:"none"},href:"#",children:"Forgot password?"})]})]})]})]})}}},function(e){e.O(0,[84,64,149,774,888,179],(function(){return t=4898,e(e.s=t);var t}));var t=e.O();_N_E=t}]);