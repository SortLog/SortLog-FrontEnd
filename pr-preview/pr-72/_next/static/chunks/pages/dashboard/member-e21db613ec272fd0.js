(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6310],{41733:function(e,t,r){"use strict";var n=r(64836);t.Z=void 0;var o=n(r(64938)),a=r(85893),i=(0,o.default)((0,a.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=i},44731:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var n=r(63366),o=r(87462),a=r(67294),i=r(86010),s=r(94780),l=r(81719),c=r(78884),d=r(58175),u=r(85893),m=(0,d.Z)((0,u.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),f=r(1588),p=r(34867);function h(e){return(0,p.Z)("MuiAvatar",e)}(0,f.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const v=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],g=(0,l.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],r.colorDefault&&t.colorDefault]}})((({theme:e,ownerState:t})=>(0,o.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===t.variant&&{borderRadius:(e.vars||e).shape.borderRadius},"square"===t.variant&&{borderRadius:0},t.colorDefault&&(0,o.Z)({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[600]})))),x=(0,l.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),Z=(0,l.ZP)(m,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"});var b=a.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiAvatar"}),{alt:l,children:d,className:m,component:f="div",imgProps:p,sizes:b,src:w,srcSet:y,variant:S="circular"}=r,C=(0,n.Z)(r,v);let R=null;const j=function({crossOrigin:e,referrerPolicy:t,src:r,srcSet:n}){const[o,i]=a.useState(!1);return a.useEffect((()=>{if(!r&&!n)return;i(!1);let o=!0;const a=new Image;return a.onload=()=>{o&&i("loaded")},a.onerror=()=>{o&&i("error")},a.crossOrigin=e,a.referrerPolicy=t,a.src=r,n&&(a.srcset=n),()=>{o=!1}}),[e,t,r,n]),o}((0,o.Z)({},p,{src:w,srcSet:y})),A=w||y,M=A&&"error"!==j,k=(0,o.Z)({},r,{colorDefault:!M,component:f,variant:S}),z=(e=>{const{classes:t,variant:r,colorDefault:n}=e,o={root:["root",r,n&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,s.Z)(o,h,t)})(k);return R=M?(0,u.jsx)(x,(0,o.Z)({alt:l,src:w,srcSet:y,sizes:b,ownerState:k,className:z.img},p)):null!=d?d:A&&l?l[0]:(0,u.jsx)(Z,{className:z.fallback}),(0,u.jsx)(g,(0,o.Z)({as:f,ownerState:k,className:(0,i.Z)(z.root,m),ref:t},C,{children:R}))}))},49837:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var n=r(87462),o=r(63366),a=r(67294),i=r(86010),s=r(94780),l=r(81719),c=r(78884),d=r(81401),u=r(1588),m=r(34867);function f(e){return(0,m.Z)("MuiCard",e)}(0,u.Z)("MuiCard",["root"]);var p=r(85893);const h=["className","raised"],v=(0,l.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"})));var g=a.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiCard"}),{className:a,raised:l=!1}=r,d=(0,o.Z)(r,h),u=(0,n.Z)({},r,{raised:l}),m=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},f,t)})(u);return(0,p.jsx)(v,(0,n.Z)({className:(0,i.Z)(m.root,a),elevation:l?8:void 0,ref:t,ownerState:u},d))}))},91359:function(e,t,r){"use strict";r.d(t,{Z:function(){return v}});var n=r(87462),o=r(63366),a=r(67294),i=r(86010),s=r(94780),l=r(81719),c=r(78884),d=r(1588),u=r(34867);function m(e){return(0,u.Z)("MuiCardContent",e)}(0,d.Z)("MuiCardContent",["root"]);var f=r(85893);const p=["className","component"],h=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}})));var v=a.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiCardContent"}),{className:a,component:l="div"}=r,d=(0,o.Z)(r,p),u=(0,n.Z)({},r,{component:l}),v=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},m,t)})(u);return(0,f.jsx)(h,(0,n.Z)({as:l,className:(0,i.Z)(v.root,a),ownerState:u,ref:t},d))}))},36336:function(e,t,r){"use strict";r.d(t,{Z:function(){return y}});var n=r(63366),o=r(87462),a=r(67294),i=r(86010),s=r(28320),l=r(34867),c=r(94780),d=r(29628);var u=(0,r(70182).ZP)(),m=r(66500),f=r(85893);const p=["className","component","disableGutters","fixed","maxWidth","classes"],h=(0,m.Z)(),v=u("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`maxWidth${(0,s.Z)(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),g=e=>(0,d.Z)({props:e,name:"MuiContainer",defaultTheme:h});var x=r(36622),Z=r(81719),b=r(78884);const w=function(e={}){const{createStyledComponent:t=v,useThemeProps:r=g,componentName:d="MuiContainer"}=e,u=t((({theme:e,ownerState:t})=>(0,o.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}})),(({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce(((t,r)=>{const n=r,o=e.breakpoints.values[n];return 0!==o&&(t[e.breakpoints.up(n)]={maxWidth:`${o}${e.breakpoints.unit}`}),t}),{})),(({theme:e,ownerState:t})=>(0,o.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}}))),m=a.forwardRef((function(e,t){const a=r(e),{className:m,component:h="div",disableGutters:v=!1,fixed:g=!1,maxWidth:x="lg"}=a,Z=(0,n.Z)(a,p),b=(0,o.Z)({},a,{component:h,disableGutters:v,fixed:g,maxWidth:x}),w=((e,t)=>{const{classes:r,fixed:n,disableGutters:o,maxWidth:a}=e,i={root:["root",a&&`maxWidth${(0,s.Z)(String(a))}`,n&&"fixed",o&&"disableGutters"]};return(0,c.Z)(i,(e=>(0,l.Z)(t,e)),r)})(b,d);return(0,f.jsx)(u,(0,o.Z)({as:h,ownerState:b,className:(0,i.Z)(w.root,m),ref:t},Z))}));return m}({createStyledComponent:(0,Z.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`maxWidth${(0,x.Z)(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,b.Z)({props:e,name:"MuiContainer"})});var y=w},44373:function(e,t,r){"use strict";var n=r(63366),o=r(87462),a=r(67294),i=r(86010),s=r(94780),l=r(41796),c=r(81719),d=r(78884),u=r(75741),m=r(85893);const f=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],p=(0,c.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.absolute&&t.absolute,t[r.variant],r.light&&t.light,"vertical"===r.orientation&&t.vertical,r.flexItem&&t.flexItem,r.children&&t.withChildren,r.children&&"vertical"===r.orientation&&t.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignLeft]}})((({theme:e,ownerState:t})=>(0,o.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:(0,l.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"})),(({theme:e,ownerState:t})=>(0,o.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}})),(({theme:e,ownerState:t})=>(0,o.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(e.vars||e).palette.divider}`,transform:"translateX(0%)"}})),(({ownerState:e})=>(0,o.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),h=(0,c.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.wrapper,"vertical"===r.orientation&&t.wrapperVertical]}})((({theme:e,ownerState:t})=>(0,o.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`}))),v=a.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiDivider"}),{absolute:a=!1,children:l,className:c,component:v=(l?"div":"hr"),flexItem:g=!1,light:x=!1,orientation:Z="horizontal",role:b=("hr"!==v?"separator":void 0),textAlign:w="center",variant:y="fullWidth"}=r,S=(0,n.Z)(r,f),C=(0,o.Z)({},r,{absolute:a,component:v,flexItem:g,light:x,orientation:Z,role:b,textAlign:w,variant:y}),R=(e=>{const{absolute:t,children:r,classes:n,flexItem:o,light:a,orientation:i,textAlign:l,variant:c}=e,d={root:["root",t&&"absolute",c,a&&"light","vertical"===i&&"vertical",o&&"flexItem",r&&"withChildren",r&&"vertical"===i&&"withChildrenVertical","right"===l&&"vertical"!==i&&"textAlignRight","left"===l&&"vertical"!==i&&"textAlignLeft"],wrapper:["wrapper","vertical"===i&&"wrapperVertical"]};return(0,s.Z)(d,u.V,n)})(C);return(0,m.jsx)(p,(0,o.Z)({as:v,className:(0,i.Z)(R.root,c),role:b,ref:t,ownerState:C},S,{children:l?(0,m.jsx)(h,{className:R.wrapper,ownerState:C,children:l}):null}))}));t.Z=v},75741:function(e,t,r){"use strict";r.d(t,{V:function(){return a}});var n=r(1588),o=r(34867);function a(e){return(0,o.Z)("MuiDivider",e)}const i=(0,n.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);t.Z=i},80562:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var n=r(63366),o=r(87462),a=r(67294),i=r(86010),s=r(94780),l=r(41796),c=r(81719),d=r(78884),u=r(50522),m=r(36622),f=r(1588),p=r(34867);function h(e){return(0,p.Z)("MuiIconButton",e)}var v=(0,f.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),g=r(85893);const x=["edge","children","className","color","disabled","disableFocusRipple","size"],Z=(0,c.ZP)(u.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,"default"!==r.color&&t[`color${(0,m.Z)(r.color)}`],r.edge&&t[`edge${(0,m.Z)(r.edge)}`],t[`size${(0,m.Z)(r.size)}`]]}})((({theme:e,ownerState:t})=>(0,o.Z)({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,l.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})),(({theme:e,ownerState:t})=>{var r;const n=null==(r=(e.vars||e).palette)?void 0:r[t.color];return(0,o.Z)({},"inherit"===t.color&&{color:"inherit"},"inherit"!==t.color&&"default"!==t.color&&(0,o.Z)({color:null==n?void 0:n.main},!t.disableRipple&&{"&:hover":(0,o.Z)({},n&&{backgroundColor:e.vars?`rgba(${n.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,l.Fq)(n.main,e.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===t.size&&{padding:5,fontSize:e.typography.pxToRem(18)},"large"===t.size&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${v.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}})}));var b=a.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiIconButton"}),{edge:a=!1,children:l,className:c,color:u="default",disabled:f=!1,disableFocusRipple:p=!1,size:v="medium"}=r,b=(0,n.Z)(r,x),w=(0,o.Z)({},r,{edge:a,color:u,disabled:f,disableFocusRipple:p,size:v}),y=(e=>{const{classes:t,disabled:r,color:n,edge:o,size:a}=e,i={root:["root",r&&"disabled","default"!==n&&`color${(0,m.Z)(n)}`,o&&`edge${(0,m.Z)(o)}`,`size${(0,m.Z)(a)}`]};return(0,s.Z)(i,h,t)})(w);return(0,g.jsx)(Z,(0,o.Z)({className:(0,i.Z)(y.root,c),centerRipple:!0,focusRipple:!p,disabled:f,ref:t,ownerState:w},b,{children:l}))}))},41886:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/member",function(){return r(90499)}])},90499:function(e,t,r){"use strict";r.r(t);var n=r(47568),o=r(26042),a=r(29815),i=r(20414),s=r(85893),l=r(36336),c=r(30120),d=r(29630),u=r(44373),m=r(49837),f=r(91359),p=r(54225),h=r(67836),v=r(79072),g=r(80562),x=r(41733),Z=r(44731),b=r(67294),w=r(50784),y={card:{margin:"40px"},cardInput:{textAlign:"center"},textField:{width:"50%",margin:"20px 0"}};t.default=function(){var e=function(e){var t,r=0;for(t=0;t<e.length;t+=1)r=e.charCodeAt(t)+((r<<5)-r);var n="#";for(t=0;t<3;t+=1){n+="00".concat((r>>8*t&255).toString(16)).slice(-2)}return n},t=(0,b.useState)(""),r=t[0],S=t[1],C=JSON.parse(localStorage.getItem("currentUser")),R=(0,b.useState)(C.provider),j=R[0],A=R[1],M=(0,b.useState)(""),k=M[0],z=M[1],N=(0,b.useState)([]),W=N[0],I=N[1],$=(0,b.useState)("block"),_=$[0],P=$[1],T=(0,b.useState)("none"),D=T[0],F=T[1],B=(0,b.useState)([]),E=B[0],O=B[1];(0,b.useEffect)((function(){var e=function(){var e=(0,n.Z)((function(){var e;return(0,i.__generator)(this,(function(t){switch(t.label){case 0:return[4,w.ds()];case 1:return e=t.sent().data,O(e),[2]}}))}));return function(){return e.apply(this,arguments)}}();e()}),[]);var L=function(){var e=(0,n.Z)((function(e){var t,n,o;return(0,i.__generator)(this,(function(a){switch(a.label){case 0:for(t=0;t<E.length;t++)if(E[t].companyName===e)return S(E[t]._id),console.log(r),[2,E[t].teamMember];return t!==E.length?[3,2]:(n={companyName:"".concat(e),teamMember:[]},[4,w.lQ(n)]);case 1:return o=a.sent(),S(o.data._id),[2,n.teamMember];case 2:return[2]}}))}));return function(t){return e.apply(this,arguments)}}(),G=W.map((function(t){return(0,s.jsx)(v.ZP,{item:!0,xs:6,children:(0,s.jsxs)(m.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,s.jsx)(Z.Z,(0,o.Z)({},(r="".concat(t.toUpperCase()),{sx:{bgcolor:e(r)},children:"".concat(r.split(" ")[0][0])}))),(0,s.jsx)(d.Z,{sx:{flex:1,marginLeft:2},children:t}),(0,s.jsx)(g.Z,{"aria-label":"delete",onClick:function(){return e=t,void I((function(t){for(var r=0;r<t.length;r++)t[r]===e&&t.splice(r,1);return(0,a.Z)(t)}));var e},children:(0,s.jsx)(x.Z,{})})]})},t);var r})),V=function(){var e=(0,n.Z)((function(e){var t,r;return(0,i.__generator)(this,(function(n){switch(n.label){case 0:e.preventDefault(),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,L(j)];case 2:return t=n.sent(),I(t),P("none"),F("block"),[3,4];case 3:return r=n.sent(),console.error("Failed to match company due to error: ",r),[3,4];case 4:return console.log(e),[2]}}))}));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=(0,n.Z)((function(e){return(0,i.__generator)(this,(function(t){var r;return e.preventDefault(),/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(k)?(r=k,I((function(e){return(0,a.Z)(e).concat([r])})),alert("A new member has joined your team")):alert("Invalid email format"),z(""),[2]}))}));return function(t){return e.apply(this,arguments)}}();return(0,b.useEffect)((function(){var e={companyName:j,teamMember:W};console.log(r,e);var t=function(){var t=(0,n.Z)((function(){return(0,i.__generator)(this,(function(t){switch(t.label){case 0:return[4,w.FS(r,e)];case 1:return t.sent(),[2]}}))}));return function(){return t.apply(this,arguments)}}();t()}),[W]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(l.Z,{component:"form",onSubmit:V,maxWidth:"md",sx:{display:"".concat(_)},children:[(0,s.jsx)(c.Z,{sx:{width:"100%"}}),(0,s.jsx)(d.Z,{sx:{fontSize:40},color:"text.secondary",gutterBottom:!0,children:"Create Company"}),(0,s.jsx)(u.Z,{variant:"middle"}),(0,s.jsx)(m.Z,{style:y.card,sx:{minWidth:275},children:(0,s.jsxs)(f.Z,{children:[(0,s.jsx)(d.Z,{sx:{fontSize:20,textAlign:"center"},color:"text.secondary",gutterBottom:!0,children:"What is the name of your company?"}),(0,s.jsx)(c.Z,{sx:y.cardInput,children:(0,s.jsx)(h.Z,{style:y.textField,inputProps:{readOnly:!0},required:!0,label:"Company Name",value:j,onChange:function(e){var t=e.target.value;A(t),console.log(t)}})})]})}),(0,s.jsx)(u.Z,{variant:"middle"}),(0,s.jsx)("div",{style:{display:"flex",flexDirection:"row-reverse"},children:(0,s.jsx)(p.Z,{type:"submit",sx:{margin:"20px"},children:"NEXT"})})]}),(0,s.jsxs)(l.Z,{maxWidth:"md",sx:{display:"".concat(D)},children:[(0,s.jsx)(c.Z,{sx:{width:"100%"}}),(0,s.jsx)(m.Z,{style:y.card,sx:{minWidth:275},children:(0,s.jsxs)(f.Z,{component:"form",onSubmit:q,children:[(0,s.jsxs)(d.Z,{sx:{fontSize:20,marginBottom:5},color:"text.secondary",gutterBottom:!0,children:["Team Members of ",C.provider]}),(0,s.jsx)(v.ZP,{container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:3},sx:{marginBottom:8},children:G}),(0,s.jsxs)("div",{style:{display:"flex"},children:[(0,s.jsx)(h.Z,{style:{flex:1},required:!0,label:"Email of team members",value:k,onChange:function(e){var t=e.target.value;z(t),console.log(k),console.log(k)}}),(0,s.jsx)(p.Z,{type:"submit",children:"+ Add"})]})]})})]})]})}},50784:function(e,t,r){"use strict";r.d(t,{FS:function(){return s},ds:function(){return o},lQ:function(){return i},tI:function(){return a}});var n=r(21744),o=function(){return(0,n.h)("/companies/list",{method:"GET"})},a=function(e){return(0,n.h)("/companies/".concat(e),{method:"GET"})},i=function(e){return(0,n.h)("/companies/add",{method:"POST",data:e})},s=function(e,t){return(0,n.h)("/companies/".concat(e),{method:"PUT",data:t})}},20943:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,{Z:function(){return n}})},13375:function(e,t,r){"use strict";function n(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}r.d(t,{Z:function(){return n}})},29815:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(20943);var o=r(13375);var a=r(91566);function i(e){return function(e){if(Array.isArray(e))return(0,n.Z)(e)}(e)||(0,o.Z)(e)||(0,a.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},91566:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(20943);function o(e,t){if(e){if("string"===typeof e)return(0,n.Z)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,n.Z)(e,t):void 0}}}},function(e){e.O(0,[9429,9072,9774,2888,179],(function(){return t=41886,e(e.s=t);var t}));var t=e.O();_N_E=t}]);