(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{74963:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var r=n(63366),o=n(87462),i=n(67294),a=n(86010),s=n(28320),l=n(34867),c=n(94780),u=n(31607);var d=(0,n(9852).ZP)(),m=n(46567),p=n(85893);const h=["className","component","disableGutters","fixed","maxWidth","classes"],x=(0,m.Z)(),f=d("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`maxWidth${(0,s.Z)(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),b=e=>(0,u.Z)({props:e,name:"MuiContainer",defaultTheme:x});var g=n(36622),v=n(81719),y=n(78884);const Z=function(e={}){const{createStyledComponent:t=f,useThemeProps:n=b,componentName:u="MuiContainer"}=e,d=t((({theme:e,ownerState:t})=>(0,o.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}})),(({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce(((t,n)=>{const r=n,o=e.breakpoints.values[r];return 0!==o&&(t[e.breakpoints.up(r)]={maxWidth:`${o}${e.breakpoints.unit}`}),t}),{})),(({theme:e,ownerState:t})=>(0,o.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}}))),m=i.forwardRef((function(e,t){const i=n(e),{className:m,component:x="div",disableGutters:f=!1,fixed:b=!1,maxWidth:g="lg"}=i,v=(0,r.Z)(i,h),y=(0,o.Z)({},i,{component:x,disableGutters:f,fixed:b,maxWidth:g}),Z=((e,t)=>{const{classes:n,fixed:r,disableGutters:o,maxWidth:i}=e,a={root:["root",i&&`maxWidth${(0,s.Z)(String(i))}`,r&&"fixed",o&&"disableGutters"]};return(0,c.Z)(a,(e=>(0,l.Z)(t,e)),n)})(y,u);return(0,p.jsx)(d,(0,o.Z)({as:x,ownerState:y,className:(0,a.Z)(Z.root,m),ref:t},v))}));return m}({createStyledComponent:(0,v.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`maxWidth${(0,g.Z)(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,y.Z)({props:e,name:"MuiContainer"})});var w=Z},68346:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var r=n(63366),o=n(87462),i=n(67294),a=n(86010),s=n(94780),l=n(36622),c=n(81719),u=n(78884),d=n(51625),m=n(84771),p=n(29630),h=n(34867);function x(e){return(0,h.Z)("MuiLink",e)}var f=(0,n(1588).Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),b=n(34439),g=n(94581);const v={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var y=({theme:e,ownerState:t})=>{const n=(e=>v[e]||e)(t.color),r=(0,b.D)(e,`palette.${n}`,!1)||t.color,o=(0,b.D)(e,`palette.${n}Channel`);return"vars"in e&&o?`rgba(${o} / 0.4)`:(0,g.Fq)(r,.4)},Z=n(85893);const w=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],j=(0,c.ZP)(p.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`underline${(0,l.Z)(n.underline)}`],"button"===n.component&&t.button]}})((({theme:e,ownerState:t})=>(0,o.Z)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&(0,o.Z)({textDecoration:"underline"},"inherit"!==t.color&&{textDecorationColor:y({theme:e,ownerState:t})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===t.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${f.focusVisible}`]:{outline:"auto"}})));var k=i.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiLink"}),{className:c,color:p="primary",component:h="a",onBlur:f,onFocus:b,TypographyClasses:g,underline:y="always",variant:k="inherit",sx:C}=n,S=(0,r.Z)(n,w),{isFocusVisibleRef:W,onBlur:N,onFocus:P,ref:O}=(0,d.Z)(),[R,_]=i.useState(!1),$=(0,m.Z)(t,O),E=(0,o.Z)({},n,{color:p,component:h,focusVisible:R,underline:y,variant:k}),M=(e=>{const{classes:t,component:n,focusVisible:r,underline:o}=e,i={root:["root",`underline${(0,l.Z)(o)}`,"button"===n&&"button",r&&"focusVisible"]};return(0,s.Z)(i,x,t)})(E);return(0,Z.jsx)(j,(0,o.Z)({color:p,className:(0,a.Z)(M.root,c),classes:g,component:h,onBlur:e=>{N(e),!1===W.current&&_(!1),f&&f(e)},onFocus:e=>{P(e),!0===W.current&&_(!0),b&&b(e)},ref:$,ownerState:E,variant:k,sx:[...Object.keys(v).includes(p)?[]:[{color:p}],...Array.isArray(C)?C:[C]]},S))}))},83236:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return n(13739)}])},13739:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Z}});var r=n(47568),o=n(70655),i=n(85893),a=n(77169),s=n(74963),l=n(79072),c=n(70918),u=n(93789),d=n(29630),m=n(54225),p=n(68346),h=n(81719),x=n(81872),f=n(67294),b=function(e){var t=(0,f.useState)(e),n=t[0],r=t[1];return{value:n,setValue:r,reset:function(){return r("")},bind:{value:n,onChange:function(e){r(e.target.value)},required:!0}}},g=n(9432),v=n(11163),y=(0,h.ZP)(a.Z)({borderRadius:"5px",background:"transparent"}),Z=function(){var e=b(""),t=e.value,n=e.bind,a=b(""),h=a.value,f=a.bind,Z=(0,v.useRouter)(),w=function(){var e=(0,r.Z)((function(e){var n,r;return(0,o.__generator)(this,(function(o){switch(o.label){case 0:e.preventDefault(),o.label=1;case 1:return o.trys.push([1,3,,4]),[4,g.g.signIn(t,h)];case 2:return n=o.sent(),console.log(n),n.challengeName?(console.error('Unable to login, because challenge "'.concat(n.challengeName,'" is mandated and we did not handle this case.')),[2]):(Z.push("/dashboard"),[3,4]);case 3:return r=o.sent(),console.log(r),[3,4];case 4:return[2]}}))}));return function(t){return e.apply(this,arguments)}}();return(0,i.jsx)(s.Z,{children:(0,i.jsxs)(l.ZP,{container:!0,component:"main",sx:{height:"100vh",flexWrap:"wrap"},spacing:2,children:[(0,i.jsx)(l.ZP,{item:!0,xs:12,sm:8,md:6,component:c.Z,elevation:6,square:!0,alignItems:"center",display:"flex",children:(0,i.jsxs)(u.Z,{sx:{my:8,mx:4,display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[(0,i.jsx)(u.Z,{sx:{mb:1},children:(0,i.jsx)("img",{src:"./png/favicon.png",style:{backgroundPosition:"center",backgroundSize:"cover",width:"32px",height:"32px"}})}),(0,i.jsx)(d.Z,{component:"h1",variant:"h2",sx:{mb:1},children:"Welcome Back!"}),(0,i.jsx)(d.Z,{component:"p",sx:{mb:2},children:"Log in to your account."}),(0,i.jsxs)(u.Z,{component:"form",noValidate:!0,onSubmit:w,sx:{mt:1},children:[(0,i.jsx)(y,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",type:"text",autoFocus:!0,onChange:function(e){return n.onChange(e)}}),(0,i.jsx)(y,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",onChange:function(e){return f.onChange(e)}}),(0,i.jsx)(m.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2,bgcolor:"neutral.200",color:"text.primary"},children:"Continue"}),(0,i.jsxs)(u.Z,{display:"flex",sx:{alignItems:"center","& hr":{flexBasis:"45%",height:1,bgcolor:"divider"}},children:[(0,i.jsx)("hr",{}),(0,i.jsx)(d.Z,{component:"span",sx:{color:"text.secondary"},children:"OR"}),(0,i.jsx)("hr",{})]}),(0,i.jsxs)(m.Z,{type:"submit",fullWidth:!0,variant:"outlined",sx:{mt:3,mb:2,bgcolor:"background.default",color:"text.primary",display:"flex",borderColor:"neutral.300"},children:[(0,i.jsx)(x.JM8,{fontSize:22,style:{justifySelf:"flex-start"}}),(0,i.jsx)(d.Z,{component:"p",sx:{margin:"0 auto"},children:"Sign in via Google"})]}),(0,i.jsx)(u.Z,{display:"flex",justifyContent:"center",children:(0,i.jsxs)(d.Z,{children:["New here?\xa0",(0,i.jsx)(p.Z,{href:"#",variant:"body2",color:"info.main",children:"Create an account"})]})})]})]})}),(0,i.jsx)(l.ZP,{item:!0,xs:!1,sm:4,md:6,alignItems:"center",sx:{backgroundColor:"#fff","&>span":{height:"100% !important"}},children:(0,i.jsx)("img",{src:"./png/logo-color.png",alt:"logo",style:{objectFit:"contain",width:"100%",height:"100%",minWidth:"300px"}})})]})})}},88357:function(e,t,n){"use strict";n.d(t,{w_:function(){return c}});var r=n(67294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)},s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function l(e){return e&&e.map((function(e,t){return r.createElement(e.tag,a({key:t},e.attr),l(e.child))}))}function c(e){return function(t){return r.createElement(u,a({attr:a({},e.attr)},t),l(e.child))}}function u(e){var t=function(t){var n,o=e.attr,i=e.size,l=e.title,c=s(e,["attr","size","title"]),u=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,c,{className:n,style:a(a({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(o)}}},function(e){e.O(0,[994,440,169,774,888,179],(function(){return t=83236,e(e.s=t);var t}));var t=e.O();_N_E=t}]);