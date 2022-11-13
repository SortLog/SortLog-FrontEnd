(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[130],{49837:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(87462),a=n(63366),o=n(67294),s=n(86010),i=n(94780),c=n(81719),d=n(78884),u=n(70918),l=n(1588),f=n(34867);function p(e){return(0,f.Z)("MuiCard",e)}(0,l.Z)("MuiCard",["root"]);var m=n(85893);const x=["className","raised"],Z=(0,c.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"})));var h=o.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiCard"}),{className:o,raised:c=!1}=n,u=(0,a.Z)(n,x),l=(0,r.Z)({},n,{raised:c}),f=(e=>{const{classes:t}=e;return(0,i.Z)({root:["root"]},p,t)})(l);return(0,m.jsx)(Z,(0,r.Z)({className:(0,s.Z)(f.root,o),elevation:c?8:void 0,ref:t,ownerState:l},u))}))},62026:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var r=n(63366),a=n(87462),o=n(67294),s=n(86010),i=n(94780),c=n(81719),d=n(78884),u=n(1588),l=n(34867);function f(e){return(0,l.Z)("MuiCardActions",e)}(0,u.Z)("MuiCardActions",["root","spacing"]);var p=n(85893);const m=["disableSpacing","className"],x=(0,c.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disableSpacing&&t.spacing]}})((({ownerState:e})=>(0,a.Z)({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})));var Z=o.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiCardActions"}),{disableSpacing:o=!1,className:c}=n,u=(0,r.Z)(n,m),l=(0,a.Z)({},n,{disableSpacing:o}),Z=(e=>{const{classes:t,disableSpacing:n}=e,r={root:["root",!n&&"spacing"]};return(0,i.Z)(r,f,t)})(l);return(0,p.jsx)(x,(0,a.Z)({className:(0,s.Z)(Z.root,c),ownerState:l,ref:t},u))}))},91359:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var r=n(87462),a=n(63366),o=n(67294),s=n(86010),i=n(94780),c=n(81719),d=n(78884),u=n(1588),l=n(34867);function f(e){return(0,l.Z)("MuiCardContent",e)}(0,u.Z)("MuiCardContent",["root"]);var p=n(85893);const m=["className","component"],x=(0,c.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}})));var Z=o.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiCardContent"}),{className:o,component:c="div"}=n,u=(0,a.Z)(n,m),l=(0,r.Z)({},n,{component:c}),Z=(e=>{const{classes:t}=e;return(0,i.Z)({root:["root"]},f,t)})(l);return(0,p.jsx)(x,(0,r.Z)({as:c,className:(0,s.Z)(Z.root,o),ownerState:l,ref:t},u))}))},20473:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/settings",function(){return n(97777)}])},97777:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Z}});var r=n(85893),a=n(67294),o=n(30120),s=n(36336),i=n(29630),c=n(44373),d=n(49837),u=n(62026),l=n(91359),f=n(54225),p=n(67836),m=n(21744),x={card:{margin:"40px"},cardInput:{display:"flex",flexWrap:"wrap",justifyContent:"flex-start",gap:"10%",width:"100%"},textField:{width:"40%",margin:"20px 0"}};function Z(){var e=(0,a.useState)(""),t=e[0],n=e[1],Z=(0,a.useState)(""),h=Z[0],v=Z[1],g=(0,a.useState)(""),C=g[0],w=g[1],j=(0,a.useState)(""),b=j[0],y=j[1],S=(0,a.useState)(""),N=(S[0],S[1]),_=(0,a.useState)(""),F=(_[0],_[1]);return(0,r.jsxs)(s.Z,{maxWidth:"md",children:[(0,r.jsx)(o.Z,{sx:{width:"100%",maxWidth:500}}),(0,r.jsx)(i.Z,{sx:{fontSize:40},color:"text.secondary",gutterBottom:!0,children:"User Profile"}),(0,r.jsx)(c.Z,{variant:"middle"}),(0,r.jsxs)(d.Z,{style:x.card,sx:{minWidth:275},children:[(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(i.Z,{sx:{fontSize:20},color:"text.secondary",gutterBottom:!0,children:"Personal Information"}),(0,r.jsxs)("div",{style:x.cardInput,children:[(0,r.jsx)(p.Z,{style:x.textField,required:!0,id:"outlined-required",label:"First Name",defaultValue:"",value:t,onChange:function(e){return n(e.target.value)}}),(0,r.jsx)(p.Z,{style:x.textField,required:!0,id:"outlined-required",label:"Last Name",defaultValue:"",value:h,onChange:function(e){return v(e.target.value)}}),(0,r.jsx)(p.Z,{style:x.textField,required:!0,id:"outlined-password-input",label:"Email",defaultValue:"",value:C,onChange:function(e){return w(e.target.value)}}),(0,r.jsx)(p.Z,{style:x.textField,required:!0,id:"outlined-read-only-input",label:"Company Name",defaultValue:"",value:b,onChange:function(e){return y(e.target.value)}})]})]}),(0,r.jsx)(u.Z,{children:(0,r.jsx)(f.Z,{onClick:function(){var e={id:"63343af774e468a1647f3e54",name:"user2",email:"user2@gmail.com",provider:"company2",photoUrl:"https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5288da3d-c702-41ee-9ddc-5ec8e031b81d%2FCopie_de_outils_(3).png?table=block&id=6010cc1c-8cee-40af-8ac5-8a54ab836ff9&spaceId=6ebdc1e4-1ee0-4f5b-bc89-25b5e1c54c81&width=250&userId=70765e0b-1374-4e1d-a7fb-bfef8fa25448&cache=v2",contactType:"email",phone:"20391230"};e.name="".concat(t," ").concat(h),e.provider=b,e.email=C,console.log(e),function(e,t){(0,m.h)("/users/".concat(e),{method:"PUT",data:t})}(e.id,e)},children:"SAVE CHANGES"})})]}),(0,r.jsxs)(d.Z,{style:x.card,sx:{minWidth:275},children:[(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(i.Z,{sx:{fontSize:20},color:"text.secondary",gutterBottom:!0,children:"Change Password"}),(0,r.jsxs)("div",{style:x.cardInput,children:[(0,r.jsx)(p.Z,{style:x.textField,required:!0,id:"outlined-required",label:"Current Password",defaultValue:"",onChange:function(e){return N(e.target.value)}}),(0,r.jsx)(p.Z,{style:x.textField,required:!0,id:"outlined-required",label:"New Password",defaultValue:"",onChange:function(e){return F(e.target.value)}})]})]}),(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,r.jsx)(u.Z,{children:(0,r.jsx)(f.Z,{children:"SAVE CHANGES"})}),(0,r.jsx)("a",{style:{margin:"0 30px",textDecoration:"none"},href:"#",children:"Forgot password?"})]})]})]})}},21744:function(e,t,n){"use strict";n.d(t,{h:function(){return s},n:function(){return i}});var r=n(26042),a=n(9669),o=n.n(a),s=function(e,t){var n=function(){var e=o().create();e.defaults.baseURL="http://localhost:4000/api/";var t=localStorage.getItem("token");return e.defaults.headers.common.Authorization=t||"",e.interceptors.response.use((function(e){return e}),(function(e){return e&&console.log(e.response),Promise.reject(e)})),e}();return n(e,(0,r.Z)({},t))},i=function(e,t){return o().create()(e,(0,r.Z)({},t))}}},function(e){e.O(0,[429,121,774,888,179],(function(){return t=20473,e(e.s=t);var t}));var t=e.O();_N_E=t}]);