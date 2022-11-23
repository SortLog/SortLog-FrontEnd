(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6684],{64518:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/verify-code",function(){return n(8732)}])},8732:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return k}});var i=n(85893),t=n(9008),o=n.n(t),a=n(41664),s=n.n(a),l=n(11163),c=n(30120),u=n(49837),d=n(29630),h=n(44373),m=n(68346),f=n(47568),x=n(20414),g=n(67294),v=n(74231),y=n(82580),p=n(67836),b=n(32631),j=n(54225),Z=n(89731),_=n(46723),S=n(86501),C=function(){var e=(0,_.s)(),r=(0,l.useRouter)(),n=(0,Z.a)(),t=n.verifyCode,o=n.registerBackend,a=(0,g.useState)(""),s=a[0],u=a[1],h=JSON.parse(localStorage.getItem("currentUser"));console.log("get user info"+h);var m=(0,y.TA)({enableReinitialize:!0,initialValues:{email:h.email,code:["","","","","",""],submit:null},validationSchema:v.Ry({email:v.Z_().email("Must be a valid email").max(255).required("Email is required"),code:v.IX().of(v.Z_().required("Code is required"))}),onSubmit:function(){var n=(0,f.Z)((function(n,i){var a;return(0,x.__generator)(this,(function(s){switch(s.label){case 0:return s.trys.push([0,3,,4]),console.log("verify code"),[4,t(n.email,n.code.join(""))];case 1:return s.sent(),console.log("register in the backend"),[4,o(h.email,h.name,h.provider)];case 2:return s.sent(),e()&&r.push("/login").catch(console.error),[3,4];case 3:return a=s.sent(),console.error(a),S.ZP.error(a.message),e()&&(i.setStatus({success:!1}),i.setErrors({submit:a.message}),i.setSubmitting(!1)),[3,4];case 4:return[2]}}))}));return function(e,r){return n.apply(this,arguments)}}()});(0,g.useEffect)((function(){var e=sessionStorage.getItem("username");e&&u(e)}),[]);var C=function(e){var r=e.clipboardData.getData("text").split("");if(6===r.length){var n=!0;r.forEach((function(e){Number.isInteger(parseInt(e,10))||(n=!1)})),n&&m.setFieldValue("code",r)}};return(0,i.jsxs)("form",{noValidate:!0,onSubmit:m.handleSubmit,children:[s?(0,i.jsx)(p.Z,{disabled:!0,fullWidth:!0,margin:"normal",value:s}):(0,i.jsx)(p.Z,{autoFocus:!0,error:Boolean(m.touched.email&&m.errors.email),fullWidth:!0,label:"Email Address",margin:"normal",name:"email",onBlur:m.handleBlur,onChange:m.handleChange,type:"email",value:m.values.email}),(0,i.jsx)(d.Z,{color:"textSecondary",sx:{mb:2,mt:3},variant:"subtitle2",children:"Verification code"}),(0,i.jsx)(c.Z,{sx:{columnGap:"16px",display:"grid",gridTemplateColumns:"repeat(7, 1fr)",pt:1},children:[1,2,3,4,5,6].map((function(e,r){return(0,i.jsx)(p.Z,{error:Boolean(Array.isArray(m.touched.code)&&6===m.touched.code.length&&m.errors.code),fullWidth:!0,name:"code[".concat(r,"]"),onBlur:m.handleBlur,onKeyDown:function(e){return function(e,r){if("Enter"===e.code){if(m.values.code[r])return void m.setFieldValue("code[".concat(r,"]"),"");if(r>0)return void m.setFieldValue("code[".concat(r,"]"),"")}Number.isInteger(parseInt(e.key,10))&&m.setFieldValue("code[".concat(r,"]"),e.key)}(e,r)},onPaste:C,value:m.values.code[r],sx:{display:"inline-block",textAlign:"center","& .MuiInputBase-input":{textAlign:"center"}}},"code-".concat(r))}))}),Boolean(Array.isArray(m.touched.code)&&6===m.touched.code.length&&m.errors.code)&&(0,i.jsx)(b.Z,{error:!0,sx:{mx:"14px"},children:Array.isArray(m.errors.code)&&m.errors.code.find((function(e){return void 0!==e}))}),m.errors.submit&&(0,i.jsx)(c.Z,{sx:{mt:3},children:(0,i.jsx)(b.Z,{error:!0,children:m.errors.submit})}),(0,i.jsx)(c.Z,{sx:{mt:3},children:(0,i.jsx)(j.Z,{disabled:m.isSubmitting,fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"Verify"})})]})},A=n(37510),k=function(){var e=(0,l.useRouter)(),r=(0,Z.a)().platform,n=e.query.disableGuard;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o(),{children:(0,i.jsx)("title",{children:"Verify Code | Creatalog"})}),(0,i.jsx)(c.Z,{sx:{backgroundColor:"background.default",display:"flex",flexDirection:"column",minHeight:"100vh"},children:(0,i.jsxs)(u.Z,{elevation:16,sx:{p:4},children:[(0,i.jsxs)(c.Z,{sx:{alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center"},children:[(0,i.jsx)(s(),{href:"/",passHref:!0,children:(0,i.jsx)("a",{children:(0,i.jsx)(A.T,{sx:{height:40,width:40}})})}),(0,i.jsx)(d.Z,{variant:"h4",children:"Verify Code"}),(0,i.jsx)(d.Z,{color:"textSecondary",sx:{mt:2},variant:"body2",children:"Confirm registration using your verification code"})]}),(0,i.jsx)(c.Z,{sx:{flexGrow:1,mt:3},children:"Amplify"===r&&(0,i.jsx)(C,{})}),(0,i.jsx)(h.Z,{sx:{my:3}}),"Amplify"===r&&(0,i.jsx)("div",{children:(0,i.jsx)(s(),{href:n?"/authentication/login?disableGuard=".concat(n):"/authentication/login",passHref:!0,children:(0,i.jsx)(m.Z,{color:"textSecondary",variant:"body2",children:"Did you not receive the code?"})})})]})})]})}}},function(e){e.O(0,[7836,9161,401,9774,2888,179],(function(){return r=64518,e(e.s=r);var r}));var r=e.O();_N_E=r}]);