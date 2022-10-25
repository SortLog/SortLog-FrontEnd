(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[310],{41733:function(e,t,r){"use strict";var o=r(64836);t.Z=void 0;var n=o(r(64938)),a=r(85893),i=(0,n.default)((0,a.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=i},44731:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var o=r(63366),n=r(87462),a=r(67294),i=r(86010),s=r(94780),c=r(81719),l=r(78884),d=r(58175),u=r(85893),m=(0,d.Z)((0,u.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),p=r(1588),f=r(34867);function h(e){return(0,f.Z)("MuiAvatar",e)}(0,p.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const v=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],g=(0,c.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],r.colorDefault&&t.colorDefault]}})((({theme:e,ownerState:t})=>(0,n.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===t.variant&&{borderRadius:(e.vars||e).shape.borderRadius},"square"===t.variant&&{borderRadius:0},t.colorDefault&&(0,n.Z)({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[600]})))),x=(0,c.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),Z=(0,c.ZP)(m,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"});var b=a.forwardRef((function(e,t){const r=(0,l.Z)({props:e,name:"MuiAvatar"}),{alt:c,children:d,className:m,component:p="div",imgProps:f,sizes:b,src:y,srcSet:w,variant:S="circular"}=r,j=(0,o.Z)(r,v);let C=null;const k=function({crossOrigin:e,referrerPolicy:t,src:r,srcSet:o}){const[n,i]=a.useState(!1);return a.useEffect((()=>{if(!r&&!o)return;i(!1);let n=!0;const a=new Image;return a.onload=()=>{n&&i("loaded")},a.onerror=()=>{n&&i("error")},a.crossOrigin=e,a.referrerPolicy=t,a.src=r,o&&(a.srcset=o),()=>{n=!1}}),[e,t,r,o]),n}((0,n.Z)({},f,{src:y,srcSet:w})),M=y||w,R=M&&"error"!==k,N=(0,n.Z)({},r,{colorDefault:!R,component:p,variant:S}),z=(e=>{const{classes:t,variant:r,colorDefault:o}=e,n={root:["root",r,o&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,s.Z)(n,h,t)})(N);return C=R?(0,u.jsx)(x,(0,n.Z)({alt:c,src:y,srcSet:w,sizes:b,ownerState:N,className:z.img},f)):null!=d?d:M&&c?c[0]:(0,u.jsx)(Z,{className:z.fallback}),(0,u.jsx)(g,(0,n.Z)({as:p,ownerState:N,className:(0,i.Z)(z.root,m),ref:t},j,{children:C}))}))},49837:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var o=r(87462),n=r(63366),a=r(67294),i=r(86010),s=r(94780),c=r(81719),l=r(78884),d=r(70918),u=r(1588),m=r(34867);function p(e){return(0,m.Z)("MuiCard",e)}(0,u.Z)("MuiCard",["root"]);var f=r(85893);const h=["className","raised"],v=(0,c.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"})));var g=a.forwardRef((function(e,t){const r=(0,l.Z)({props:e,name:"MuiCard"}),{className:a,raised:c=!1}=r,d=(0,n.Z)(r,h),u=(0,o.Z)({},r,{raised:c}),m=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},p,t)})(u);return(0,f.jsx)(v,(0,o.Z)({className:(0,i.Z)(m.root,a),elevation:c?8:void 0,ref:t,ownerState:u},d))}))},91359:function(e,t,r){"use strict";r.d(t,{Z:function(){return v}});var o=r(87462),n=r(63366),a=r(67294),i=r(86010),s=r(94780),c=r(81719),l=r(78884),d=r(1588),u=r(34867);function m(e){return(0,u.Z)("MuiCardContent",e)}(0,d.Z)("MuiCardContent",["root"]);var p=r(85893);const f=["className","component"],h=(0,c.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}})));var v=a.forwardRef((function(e,t){const r=(0,l.Z)({props:e,name:"MuiCardContent"}),{className:a,component:c="div"}=r,d=(0,n.Z)(r,f),u=(0,o.Z)({},r,{component:c}),v=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},m,t)})(u);return(0,p.jsx)(h,(0,o.Z)({as:c,className:(0,i.Z)(v.root,a),ownerState:u,ref:t},d))}))},69647:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var o=r(63366),n=r(87462),a=r(67294),i=r(86010),s=r(94780),c=r(78884),l=r(81719),d=r(1588),u=r(34867);function m(e){return(0,u.Z)("MuiCardMedia",e)}(0,d.Z)("MuiCardMedia",["root","media","img"]);var p=r(85893);const f=["children","className","component","image","src","style"],h=(0,l.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e,{isMediaComponent:o,isImageComponent:n}=r;return[t.root,o&&t.media,n&&t.img]}})((({ownerState:e})=>(0,n.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"}))),v=["video","audio","picture","iframe","img"],g=["picture","img"];var x=a.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiCardMedia"}),{children:a,className:l,component:d="div",image:u,src:x,style:Z}=r,b=(0,o.Z)(r,f),y=-1!==v.indexOf(d),w=!y&&u?(0,n.Z)({backgroundImage:`url("${u}")`},Z):Z,S=(0,n.Z)({},r,{component:d,isMediaComponent:y,isImageComponent:-1!==g.indexOf(d)}),j=(e=>{const{classes:t,isMediaComponent:r,isImageComponent:o}=e,n={root:["root",r&&"media",o&&"img"]};return(0,s.Z)(n,m,t)})(S);return(0,p.jsx)(h,(0,n.Z)({className:(0,i.Z)(j.root,l),as:d,role:!y&&u?"img":void 0,ref:t,style:w,ownerState:S,src:y?u||x:void 0},b,{children:a}))}))},36336:function(e,t,r){"use strict";r.d(t,{Z:function(){return w}});var o=r(63366),n=r(87462),a=r(67294),i=r(86010),s=r(28320),c=r(34867),l=r(94780),d=r(29628);var u=(0,r(70182).ZP)(),m=r(66500),p=r(85893);const f=["className","component","disableGutters","fixed","maxWidth","classes"],h=(0,m.Z)(),v=u("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`maxWidth${(0,s.Z)(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),g=e=>(0,d.Z)({props:e,name:"MuiContainer",defaultTheme:h});var x=r(36622),Z=r(81719),b=r(78884);const y=function(e={}){const{createStyledComponent:t=v,useThemeProps:r=g,componentName:d="MuiContainer"}=e,u=t((({theme:e,ownerState:t})=>(0,n.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}})),(({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce(((t,r)=>{const o=r,n=e.breakpoints.values[o];return 0!==n&&(t[e.breakpoints.up(o)]={maxWidth:`${n}${e.breakpoints.unit}`}),t}),{})),(({theme:e,ownerState:t})=>(0,n.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}}))),m=a.forwardRef((function(e,t){const a=r(e),{className:m,component:h="div",disableGutters:v=!1,fixed:g=!1,maxWidth:x="lg"}=a,Z=(0,o.Z)(a,f),b=(0,n.Z)({},a,{component:h,disableGutters:v,fixed:g,maxWidth:x}),y=((e,t)=>{const{classes:r,fixed:o,disableGutters:n,maxWidth:a}=e,i={root:["root",a&&`maxWidth${(0,s.Z)(String(a))}`,o&&"fixed",n&&"disableGutters"]};return(0,l.Z)(i,(e=>(0,c.Z)(t,e)),r)})(b,d);return(0,p.jsx)(u,(0,n.Z)({as:h,ownerState:b,className:(0,i.Z)(y.root,m),ref:t},Z))}));return m}({createStyledComponent:(0,Z.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`maxWidth${(0,x.Z)(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,b.Z)({props:e,name:"MuiContainer"})});var w=y},80562:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var o=r(63366),n=r(87462),a=r(67294),i=r(86010),s=r(94780),c=r(41796),l=r(81719),d=r(78884),u=r(50522),m=r(36622),p=r(1588),f=r(34867);function h(e){return(0,f.Z)("MuiIconButton",e)}var v=(0,p.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),g=r(85893);const x=["edge","children","className","color","disabled","disableFocusRipple","size"],Z=(0,l.ZP)(u.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,"default"!==r.color&&t[`color${(0,m.Z)(r.color)}`],r.edge&&t[`edge${(0,m.Z)(r.edge)}`],t[`size${(0,m.Z)(r.size)}`]]}})((({theme:e,ownerState:t})=>(0,n.Z)({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})),(({theme:e,ownerState:t})=>(0,n.Z)({},"inherit"===t.color&&{color:"inherit"},"inherit"!==t.color&&"default"!==t.color&&(0,n.Z)({color:(e.vars||e).palette[t.color].main},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}),"small"===t.size&&{padding:5,fontSize:e.typography.pxToRem(18)},"large"===t.size&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${v.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}})));var b=a.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiIconButton"}),{edge:a=!1,children:c,className:l,color:u="default",disabled:p=!1,disableFocusRipple:f=!1,size:v="medium"}=r,b=(0,o.Z)(r,x),y=(0,n.Z)({},r,{edge:a,color:u,disabled:p,disableFocusRipple:f,size:v}),w=(e=>{const{classes:t,disabled:r,color:o,edge:n,size:a}=e,i={root:["root",r&&"disabled","default"!==o&&`color${(0,m.Z)(o)}`,n&&`edge${(0,m.Z)(n)}`,`size${(0,m.Z)(a)}`]};return(0,s.Z)(i,h,t)})(y);return(0,g.jsx)(Z,(0,n.Z)({className:(0,i.Z)(w.root,l),centerRipple:!0,focusRipple:!f,disabled:p,ref:t,ownerState:y},b,{children:c}))}))},41886:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/member",function(){return r(90499)}])},90499:function(e,t,r){"use strict";r.r(t);var o=r(47568),n=r(26042),a=r(29815),i=r(20414),s=r(85893),c=r(36336),l=r(30120),d=r(29630),u=r(44373),m=r(49837),p=r(91359),f=r(54225),h=r(77169),v=r(69647),g=r(79072),x=r(80562),Z=r(41733),b=r(44731),y=r(67294),w=[{companyName:"breadtop",teamMember:["medh@hotmail.com","bufgiai@hotmail.com","vvaas70@hotmail.com","icwqboakfsf38@hotmail.com","b57@hotmail.com","owkhrenbmgu4378@hotmail.com","isofv@hotmail.com","bswupvdwboojo@hotmail.com"]},{companyName:"teamorrow",teamMember:["tbwuwurbcbd@hotmail.com","aivqeug81@hotmail.com","odujqemnwj8@hotmail.com","asphqutm47@hotmail.com","pvfqiwpingtahiu@hotmail.com","kubrqqifv@hotmail.com"]},{companyName:"authentic bites",teamMember:["steg86@hotmail.com","h75@hotmail.com","eprwowi8@hotmail.com","wvvwwet@hotmail.com","rhmqbmcp2@hotmail.com","ptkrmb8358@hotmail.com"]},{companyName:"senseplus",teamMember:["ktehaqabkifpw5@hotmail.com","jmhbiehdldjvfku@hotmail.com","wbtuecvg@hotmail.com","gosrucgwa@hotmail.com"]}],S={card:{margin:"40px"},cardInput:{textAlign:"center"},textField:{width:"50%",margin:"20px 0"}};t.default=function(){var e=function(e){var t,r=0;for(t=0;t<e.length;t+=1)r=e.charCodeAt(t)+((r<<5)-r);var o="#";for(t=0;t<3;t+=1){o+="00".concat((r>>8*t&255).toString(16)).slice(-2)}return o},t=(0,y.useState)(""),r=t[0],j=t[1],C=(0,y.useState)(""),k=C[0],M=C[1],R=(0,y.useState)([]),N=R[0],z=R[1],P=(0,y.useState)("block"),W=P[0],A=P[1],I=(0,y.useState)("none"),$=I[0],q=I[1],F=N.map((function(t){return(0,s.jsx)(g.ZP,{item:!0,xs:6,children:(0,s.jsxs)(m.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,s.jsx)(b.Z,(0,n.Z)({},(r="".concat(t.toUpperCase()),{sx:{bgcolor:e(r)},children:"".concat(r.split(" ")[0][0])}))),(0,s.jsx)(d.Z,{sx:{flex:1,marginLeft:2},children:t}),(0,s.jsx)(x.Z,{"aria-label":"delete",onClick:function(){return e=t,void z((function(t){for(var r=0;r<t.length;r++)t[r]===e&&t.splice(r,1);return(0,a.Z)(t)}));var e},children:(0,s.jsx)(Z.Z,{})})]})},t);var r})),_=function(){var e=(0,o.Z)((function(e){var t;return(0,i.__generator)(this,(function(o){e.preventDefault();try{t=function(e){var t;for(t=0;t<w.length;t++)if(w[t].companyName===e)return w[t].teamMember;t===w.length&&alert("No matched comapny")}(r),t&&(z(t),A("none"),q("block"))}catch(n){console.error("Failed to match company due to error: ",n),alert("No matched comapny exists")}return console.log(e),[2]}))}));return function(t){return e.apply(this,arguments)}}();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(c.Z,{component:"form",onSubmit:_,maxWidth:"md",sx:{display:"".concat(W)},children:[(0,s.jsx)(l.Z,{sx:{width:"100%"}}),(0,s.jsx)(d.Z,{sx:{fontSize:40},color:"text.secondary",gutterBottom:!0,children:"Create Company"}),(0,s.jsx)(u.Z,{variant:"middle"}),(0,s.jsx)(m.Z,{style:S.card,sx:{minWidth:275},children:(0,s.jsxs)(p.Z,{children:[(0,s.jsx)(v.Z,{sx:{textAlign:"center"},component:"img",image:"/png/logo-no-background-h.png",alt:"sortlog icon"}),(0,s.jsx)(d.Z,{sx:{fontSize:20,textAlign:"center"},color:"text.secondary",gutterBottom:!0,children:"What is the name of your company?"}),(0,s.jsx)(l.Z,{sx:S.cardInput,children:(0,s.jsx)(h.Z,{style:S.textField,required:!0,label:"Company Name",value:r,onChange:function(e){var t=e.target.value;j(t),console.log(t)}})})]})}),(0,s.jsx)(u.Z,{variant:"middle"}),(0,s.jsx)("div",{style:{display:"flex",flexDirection:"row-reverse"},children:(0,s.jsx)(f.Z,{type:"submit",sx:{margin:"20px"},children:"NEXT"})})]}),(0,s.jsxs)(c.Z,{maxWidth:"md",sx:{display:"".concat($)},children:[(0,s.jsx)(l.Z,{sx:{width:"100%"}}),(0,s.jsx)(m.Z,{style:S.card,sx:{minWidth:275},children:(0,s.jsxs)(p.Z,{component:"form",onSubmit:function(e){var t;e.preventDefault(),t=k,z((function(e){return(0,a.Z)(e).concat([t])})),M("")},children:[(0,s.jsx)(d.Z,{sx:{fontSize:20,marginBottom:5},color:"text.secondary",gutterBottom:!0,children:"Team Member"}),(0,s.jsx)(g.ZP,{container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:3},sx:{marginBottom:8},children:F}),(0,s.jsxs)("div",{style:{display:"flex"},children:[(0,s.jsx)(h.Z,{style:{flex:1},required:!0,label:"Email of team members",value:k,onChange:function(e){var t=e.target.value;M(t),console.log(t)}}),(0,s.jsx)(f.Z,{type:"submit",children:"+ Add"})]})]})}),(0,s.jsx)(u.Z,{variant:"middle"}),(0,s.jsx)("div",{style:{display:"flex",flexDirection:"row-reverse"},children:(0,s.jsx)(f.Z,{sx:{margin:"20px"},children:"SKIP"})})]})]})}},20943:function(e,t,r){"use strict";function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}r.d(t,{Z:function(){return o}})},13375:function(e,t,r){"use strict";function o(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}r.d(t,{Z:function(){return o}})},29815:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var o=r(20943);var n=r(13375);var a=r(91566);function i(e){return function(e){if(Array.isArray(e))return(0,o.Z)(e)}(e)||(0,n.Z)(e)||(0,a.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},91566:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var o=r(20943);function n(e,t){if(e){if("string"===typeof e)return(0,o.Z)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,o.Z)(e,t):void 0}}}},function(e){e.O(0,[440,169,774,888,179],(function(){return t=41886,e(e.s=t);var t}));var t=e.O();_N_E=t}]);