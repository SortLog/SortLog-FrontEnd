(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[852],{9805:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/example",function(){return e(2682)}])},2682:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return _}});var r=e(5893),a=e(7294),i=e(6991),o=e(5084),s=e(1953),c=e(6336),u=e(9630),l=e(1799),f=e(9669),d=e.n(f),h=function(n,t){var e=function(){var n=d().create();n.defaults.baseURL="http://localhost:4000/api/";var t=localStorage.getItem("token");return n.defaults.headers.common.Authorization=t||"",n.interceptors.response.use((function(n){return n}),(function(n){return n&&console.log(n.response),Promise.reject(n)})),n}();return e(n,(0,l.Z)({},t))},m=function(){return n="/api/hello",t={method:"GET"},d().create()(n,(0,l.Z)({},t));var n,t},v=e(7297);function x(){var n=(0,v.Z)(['\n  query {\n    token(email: "vinod@test.com")\n  }\n']);return x=function(){return n},n}var p=(0,e(7283).Ps)(x()),Z=e(6501),_=function(){var n=(0,a.useState)([]),t=n[0],e=n[1],l=(0,a.useState)(""),f=l[0],d=l[1],v=(0,i.a)(p),x=v.loading,_=v.error,g=v.data;return(0,a.useEffect)((function(){var n;h("/user/1",{method:"GET"}).then((function(n){e(n.data)})),(n="1",h("/user/".concat(n),{method:"GET"})).then((function(n){console.log(n.data)}))}),[]),(0,r.jsx)(c.Z,{component:"main",maxWidth:"xs",children:(0,r.jsxs)(s.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,r.jsx)(o.Z,{variant:"contained",sx:{mt:3,mb:2},onClick:function(){m().then((function(n){d(n.data),Z.ZP.success("Successfully toasted!")}))},children:"Nextjs api Get Hello Data"}),(0,r.jsx)(u.Z,{variant:"subtitle1",children:JSON.stringify(f)}),(0,r.jsx)(u.Z,{sx:{mt:2},variant:"h5",children:"Backend api Get getUser1:"}),(0,r.jsx)(u.Z,{variant:"subtitle1",children:JSON.stringify(t)}),(0,r.jsx)(u.Z,{sx:{mt:2},variant:"h5",children:"Graphql Get User:"}),(0,r.jsx)(u.Z,{variant:"subtitle1",children:JSON.stringify(x||_||g)})]})})}}},function(n){n.O(0,[84,813,774,888,179],(function(){return t=9805,n(n.s=t);var t}));var t=n.O();_N_E=t}]);