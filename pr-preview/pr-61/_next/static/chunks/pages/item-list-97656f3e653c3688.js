(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4934],{24162:function(e,n,i){"use strict";var t=i(64836);n.Z=void 0;var r=t(i(64938)),a=i(85893),s=(0,r.default)((0,a.jsx)("path",{d:"m19 15-1.41-1.41L13 18.17V2h-2v16.17l-4.59-4.59L5 15l7 7 7-7z"}),"South");n.Z=s},83284:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/item-list",function(){return i(69152)}])},69152:function(e,n,i){"use strict";i.r(n);var t=i(26042),r=i(69396),a=i(85893),s=i(67294),o=i(36336),c=i(78340),l=i(80562),d=i(29630),x=i(43918),h=i(79072),p=i(44373),u=i(70918),m=i(89722),g=i(54225),f=i(72428),j=i(18377),Z=i(81011),b=i(42761),y=i(78394),P=i(24162),v=i(48056),w=i(82638),N=i(35953);var _=[{id:1,img:"https://source.unsplash.com/random",name:"Item 1",quantity:1,price:100,tag:["tools","ryobi"]},{id:2,img:"https://source.unsplash.com/random",name:"Item 2",quantity:123,price:200,tag:["tools","ryobi"]},{id:3,img:"https://source.unsplash.com/random",name:"Item 3",quantity:2,price:300,tag:["ryobi"]}],S=[{field:"name",headerName:"Name"},{field:"quantity",headerName:"Quantity"},{field:"price",headerName:"Price"},{field:"tag",headerName:"Tag"}],k=function(e,n){return e.filter((function(e){return e.name.includes(n)||e.tag.find((function(e){return e.includes(n)}))})).map((function(e){return(0,r.Z)((0,t.Z)({},e),{quantity:e.quantity.toString()+" unit",price:"$"+(n=e.price,parseFloat(n).toFixed(2).toString().split("").reverse().join("").replace(/(\d{3})/g,"$1,").replace(/\,$/,"").split("").reverse().join(""))});var n}))};n.default=function(){var e,n=(0,s.useState)(!1),i=n[0],r=n[1],C=(0,s.useState)(""),I=C[0],T=C[1],q=0,W=0,A=0;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(o.Z,{maxWidth:"lg",color:"background",children:(0,a.jsx)("div",{className:"App",children:(0,a.jsxs)("header",{className:"App-header",children:[(0,a.jsx)(x.Z,{styles:{body:{backgroundColor:"#eeecec"}}}),(0,a.jsxs)(h.ZP,{container:!0,spacing:6,paddingTop:"60px",justifyContent:"space-between",children:[(0,a.jsxs)(d.Z,{variant:"h3",color:"#6a6a6c",paddingLeft:"76px",children:[(0,a.jsx)(c.Z,{fontSize:"large",sx:{marginRight:"10px",paddingTop:1}}),"All Items"]}),(0,a.jsx)(g.Z,{variant:"contained",startIcon:(0,a.jsx)(f.Z,{}),sx:{backgroundColor:"#e70a3e"},children:"ADD NEW"})]}),(0,a.jsx)(p.Z,{sx:{color:"#d5cfcf",margin:3,border:1,width:1129}}),(0,a.jsxs)(h.ZP,{container:!0,spacing:6,paddingTop:"50px",paddingLeft:"76px",justifyContent:"space-between",children:[(0,a.jsxs)(u.Z,{component:"form",sx:{maxHeight:"45px",maxWidth:"262px",display:"flex",alignItems:"center",width:300},children:[(0,a.jsx)(m.Z,{sx:{paddingLeft:"6px",color:"#c2c0c0",width:30},children:(0,a.jsx)(b.Z,{})}),(0,a.jsx)(Z.ZP,{sx:{ml:1,flex:1},placeholder:"Search All Items",inputProps:{"aria-label":"search google maps"},onChange:function(e){T(e.target.value)}}),(0,a.jsx)(p.Z,{sx:{height:28,m:.5},orientation:"vertical"}),(0,a.jsx)(l.Z,{sx:{p:"10px",color:"#2d2a2a"},"aria-label":"QrCodeScannerIcon",children:(0,a.jsx)(y.Z,{})})]}),(0,a.jsxs)(h.ZP,{children:[(0,a.jsxs)(g.Z,{variant:"text",color:"inherit",sx:{marginBottom:"13px",marginRight:"13px",":hover":{backgroundColor:"#3a3939",color:"#ffffff"}},children:["Updated At",(0,a.jsx)(P.Z,{})]}),(0,a.jsx)(N.Z,{setIsGrid:r,sx:{height:100}})]})]}),(e=_,e.map((function(e){return(0,t.Z)({},e)}))).map((function(e){return(0,a.jsx)(j.Z,{sx:{mt:3,mr:3},children:(0,a.jsxs)(d.Z,{sx:{display:"none"},children:[q+=1," ",W+=e.quantity," ",A+=e.price]})},e.id)})),(0,a.jsxs)(h.ZP,{container:!0,spacing:6,pb:"10px",children:[(0,a.jsxs)(h.ZP,{item:!0,color:"#6a6a6c",children:["Folders:"," ",(0,a.jsx)(h.ZP,{sx:{display:"inline"},color:"#393939",fontWeight:"bold",children:"0"})]}),(0,a.jsxs)(h.ZP,{item:!0,color:"#6a6a6c",children:["Items:"," ",(0,a.jsx)(h.ZP,{sx:{display:"inline"},color:"#393939",fontWeight:"bold",children:q})]}),(0,a.jsxs)(h.ZP,{item:!0,color:"#6a6a6c",children:["Total Quantity:"," ",(0,a.jsxs)(h.ZP,{sx:{display:"inline"},color:"#393939",fontWeight:"bold",children:[W," unit(s)"]})]}),(0,a.jsxs)(h.ZP,{item:!0,color:"#6a6a6c",children:["Total Value:"," ",(0,a.jsxs)(h.ZP,{sx:{display:"inline"},color:"#393939",fontWeight:"bold",children:["$",A,".00"]})]})]}),(0,a.jsx)(j.Z,{children:i?(0,a.jsx)(h.ZP,{container:!0,children:k(_,I).map((function(e){return(0,a.jsx)(j.Z,{sx:{mt:3,mr:3},children:(0,a.jsx)(w.Z,{data:e})},e.id)}))}):(0,a.jsx)(j.Z,{sx:{height:600,width:"100%",bgcolor:"#dadada"},children:(0,a.jsx)(v._,{rows:k(_,I),columns:S,pageSize:5,rowsPerPageOptions:[5],checkboxSelection:!0,disableSelectionOnClick:!0})})})]})})})})}}},function(e){e.O(0,[9429,9072,752,2261,8448,669,8821,9774,2888,179],(function(){return n=83284,e(e.s=n);var n}));var n=e.O();_N_E=n}]);