(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[449],{87027:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/item-list",function(){return t(9881)}])},9881:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Ze}});var r=t(47568),i=t(26042),s=t(69396),a=t(828),o=t(20414),l=t(85893),c=t(67294),d=t(36336),u=t(78340),x=t(80562),h=t(29630),p=t(21448),j=t(43918),m=t(79072),Z=t(44373),f=t(81401),g=t(89722),v=t(54225),b=t(72428),w=t(18377),y=t(81011),_=t(42761),C=t(78394),P=t(48056),S=t(49837),k=t(62026),F=t(91359),N=t(69647),I=t(11961),A=t(64631),T=t(30120),q=t(67836),L=t(55343),D=t(58316),R=t(39063),O=t(9041),E=t(72389),M=t(17928),Q=t(9944),W=t(35142),$=t(77957),U=t(53626),z=t(92592),G=function(e){var n=e.data;console.log(n.id);var t=(0,c.useState)(""),i=t[0],s=t[1],a=function(){var e=(0,r.Z)((function(){var e,t;return(0,o.__generator)(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,z.toDataURL("".concat(n.id))];case 1:return e=r.sent(),console.log(e),s(e),[3,3];case 2:return t=r.sent(),console.log(t),[3,3];case 3:return[2]}}))}));return function(){return e.apply(this,arguments)}}();return a(),(0,l.jsx)(S.Z,{sx:{width:"200px",height:"200px",position:"relative",padding:"10px"},children:(0,l.jsx)(F.Z,{sx:{width:"100%"},children:(0,l.jsx)("a",{href:i,download:!0,children:(0,l.jsx)("img",{src:i,alt:"QRCode"})})})})};var V=(0,U.Z)((function(e){return{root:{"& .MuiFilledInput-root":{backgroundColor:"rgb(255, 255, 255)"},"& .MuiFilledInput-root:hover":{backgroundColor:"rgb(145, 145, 145)","@media (hover: none)":{backgroundColor:"rgb(13, 126, 239)"}},"& .MuiFilledInput-root.Mui-focused":{backgroundColor:"rgb(255, 255, 255)"}}}})),B=function(e){var n,t=e.isDrawerOpen,r=e.setIsDrawerOpen,i=e.data,s=(new Date).toLocaleDateString(),a=(new Date).toLocaleTimeString(),o=(0,c.useState)(!1),d=o[0],u=o[1],p=V(),j=(0,c.useState)(!1),f=j[0],g=j[1];return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(A.ZP,{anchor:"right",open:t,PaperProps:{sx:{width:1260,padding:2}},onClose:function(){return r(!1)},children:[(0,l.jsxs)(T.Z,{p:2,sx:{mt:3},children:[(0,l.jsx)(q.Z,{id:"standard-password-input",label:"Name",autoComplete:"current-password",variant:"standard",value:i.name,InputProps:{disableUnderline:!0},className:p.root,onChange:function(n){return e.onChange(n.target.value)},inputProps:{style:{fontSize:36}},sx:{width:300},onMouseEnter:function(){return u(!0)},onMouseLeave:function(){return u(!1)}}),d&&(0,l.jsx)($.Z,{sx:{m:3}})]}),(0,l.jsx)(Z.Z,{}),(0,l.jsxs)(m.ZP,{container:!0,spacing:6,paddingTop:"60px",paddingLeft:"76px",paddingRight:"166px",justifyContent:"space-between",children:[(0,l.jsxs)(h.Z,{variant:"subtitle1",component:"div",children:[(0,l.jsx)("text",{style:{color:"#a2a2a2"},children:"Sortlog ID:"})," ",(0,l.jsx)("text",{style:{color:"#131213"},children:i.sku})]}),(0,l.jsxs)(h.Z,{variant:"subtitle1",component:"div",children:[(0,l.jsx)("text",{style:{color:"#a2a2a2"},children:"Quantity:"})," ",(0,l.jsxs)("text",{style:{color:"#ad3c3c"},children:[i.quantity," ",(n=i.quantity,n>1?"units":"unit")]})]}),(0,l.jsxs)(h.Z,{variant:"subtitle1",component:"div",children:[(0,l.jsx)("text",{style:{color:"#a2a2a2"},children:"Total Value:"})," ",(0,l.jsxs)("text",{style:{color:"#131213"},children:["$",i.price&&parseInt(i.price).toFixed(2)]})]}),(0,l.jsxs)(h.Z,{variant:"subtitle1",component:"div",children:[(0,l.jsx)("text",{style:{color:"#a2a2a2"},children:"Updated at:"})," ",(0,l.jsxs)("text",{style:{color:"#131213"},children:[s," ",a]})]})]}),(0,l.jsxs)(m.ZP,{container:!0,sx:{mt:6},children:[(0,l.jsxs)(m.ZP,{children:[(0,l.jsxs)(m.ZP,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:[(0,l.jsxs)("div",{children:[(0,l.jsxs)(L.Z,{sx:{m:1,width:"25ch"},variant:"outlined",children:[(0,l.jsx)(D.Z,{htmlFor:"outlined-adornment-amount",children:"Quantity"}),(0,l.jsx)(R.Z,{label:"Quantity",value:i.quantity,endAdornment:(0,l.jsx)(O.Z,{position:"end",children:(0,l.jsx)(x.Z,{children:(0,l.jsx)(M.Z,{})})})})]}),(0,l.jsxs)(L.Z,{sx:{m:1,width:"25ch"},variant:"outlined",children:[(0,l.jsx)(D.Z,{htmlFor:"outlined-adornment-amount",children:"Min Level"}),(0,l.jsx)(R.Z,{label:"Min Level",value:0,endAdornment:(0,l.jsx)(O.Z,{position:"end",children:(0,l.jsx)(E.Z,{placement:"top",title:"Set a minimum level to easily identify low stock items. Item will be highlighted when its quantity is at or below min level.",arrow:!0,children:(0,l.jsx)(Q.Z,{})})})})]})]}),(0,l.jsxs)("div",{children:[(0,l.jsxs)(L.Z,{sx:{m:1,width:"25ch"},variant:"outlined",children:[(0,l.jsx)(D.Z,{htmlFor:"outlined-adornment-amount",children:"Amount"}),(0,l.jsx)(R.Z,{label:"Amount",value:i.price&&"$"+parseInt(i.price).toFixed(2).toString(),endAdornment:(0,l.jsx)(O.Z,{position:"end",children:"AUD"})})]}),(0,l.jsxs)(L.Z,{sx:{m:1,width:"25ch"},variant:"outlined",children:[(0,l.jsx)(D.Z,{htmlFor:"outlined-adornment-amount",children:"Total value"}),(0,l.jsx)(R.Z,{label:"Total value",value:i.price&&"AU$"+(i.quantity*i.price).toFixed(2),endAdornment:(0,l.jsx)(O.Z,{position:"end",children:"AUD"})})]})]})]}),(0,l.jsxs)(m.ZP,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"52ch"}},noValidate:!0,autoComplete:"off",children:[(0,l.jsx)("div",{children:(0,l.jsx)(q.Z,{label:"Tags",value:i.tags})}),(0,l.jsx)("div",{children:(0,l.jsx)(q.Z,{label:"Notes",variant:"outlined",multiline:!0,maxRows:6})})]})]}),(0,l.jsx)(m.ZP,{children:(0,l.jsx)(N.Z,{component:"img",alt:"green iguana",height:"390",sx:{ml:6},image:i.image})})]}),(0,l.jsxs)(m.ZP,{m:"20px",children:[(0,l.jsx)(h.Z,{sx:{color:"#939393",mt:3},children:"QR / BARCODES"}),(0,l.jsx)(m.ZP,{container:!0,children:(0,l.jsx)(v.Z,{variant:"outlined",color:"inherit",sx:{mt:3,ml:3,color:"#c3c0c0"},onClick:function(){return g(!f)},children:f?(0,l.jsx)(G,{data:{id:i.id}}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(W.Z,{sx:{color:"#000000"}}),(0,l.jsx)(h.Z,{ml:"10px",sx:{color:"#000000"},children:"LINK QR / BARCODE"})]})})})]}),(0,l.jsx)(Z.Z,{}),(0,l.jsx)(m.ZP,{container:!0,paddingLeft:2,paddingTop:3,children:(0,l.jsx)(v.Z,{variant:"contained",color:"secondary",sx:{bgcolor:"#2329d3"},children:"Save"})})]})})};function X(e){for(var n=new Array(e.length),t=0;t<e.length;t++)n[t]=(0,l.jsx)(p.Z,(0,i.Z)({variant:"filled",label:e[t]},{icon:(0,l.jsx)(I.Z,{})}));return n}var H=function(e){var n,t=e.data,r=(0,a.Z)(c.useState(!1),2),i=r[0],s=r[1],o=(0,a.Z)(c.useState(!0),2),d=o[0],u=o[1];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(B,{isDrawerOpen:i,setIsDrawerOpen:s,qrCode:d,setQrCode:u,data:t}),(0,l.jsxs)(S.Z,{sx:{maxWidth:345},onClick:function(){return s(!0)},children:[(0,l.jsx)(N.Z,{component:"img",alt:"green iguana",height:"200",image:t.image}),(0,l.jsx)(F.Z,{children:(0,l.jsx)(h.Z,{gutterBottom:!0,variant:"h5",component:"div",children:t.name})}),(0,l.jsxs)(k.Z,{children:[(0,l.jsxs)(h.Z,{variant:"body2",color:"text.secondary",children:[t.quantity," ",(n=t.quantity,n>1?"units":"unit")]}),(0,l.jsx)(Z.Z,{sx:{height:28,ml:2,mr:2},orientation:"vertical"}),(0,l.jsxs)(h.Z,{variant:"body2",color:"text.secondary",children:["$",parseInt(t.price).toFixed(2)]})]}),(0,l.jsx)(k.Z,{children:X(t.tags)})]})]})},K=t(62135),Y=t(23926),J=t(61760),ee=t(58402),ne=t(90060),te=t(852),re=t(28922),ie=t(16584),se=["Table","Grid"],ae=function(e){var n=e.setIsGrid,t=(0,a.Z)(c.useState(!1),2),r=t[0],o=t[1],d=c.useRef(null),u=(0,a.Z)(c.useState(0),2),x=u[0],h=u[1],p=function(e){d.current&&d.current.contains(e.target)||o(!1)};return(0,l.jsxs)(c.Fragment,{children:[(0,l.jsx)(K.Z,{variant:"contained",ref:d,"aria-label":"split button",sx:{":hover":{backgroundColor:"#3a3939",color:"#ffffff"}},children:(0,l.jsx)(v.Z,{variant:"text",color:"inherit",size:"small","aria-controls":r?"split-button-menu":void 0,"aria-expanded":r?"true":void 0,"aria-label":"select merge strategy","aria-haspopup":"menu",onClick:function(){o((function(e){return!e}))},children:0==x?(0,l.jsx)(ie.Z,{}):(0,l.jsx)(re.Z,{})})}),(0,l.jsx)(ee.Z,{sx:{zIndex:1},open:r,anchorEl:d.current,role:void 0,transition:!0,disablePortal:!0,children:function(e){var t=e.TransitionProps,r=e.placement;return(0,l.jsx)(J.Z,(0,s.Z)((0,i.Z)({},t),{style:{transformOrigin:"bottom"===r?"center top":"center bottom"},children:(0,l.jsx)(f.Z,{children:(0,l.jsx)(Y.Z,{onClickAway:p,children:(0,l.jsx)(te.Z,{id:"split-button-menu",autoFocusItem:!0,children:se.map((function(e,t){return(0,l.jsxs)(ne.Z,{selected:t===x,onClick:function(e){return function(e,n){h(n),console.info("You clicked ".concat(se[n])),o(!1)}(0,t)},children:[n(0!=x),e]},e)}))})})})}))}})]})},oe=t(77283),le=t(44850),ce=t(99349),de=t.n(ce),ue=function(e){var n=(0,c.useState)(""),t=n[0],r=n[1];return e.searchData(t),(0,l.jsx)(le.Z,{in:!0,children:(0,l.jsxs)("div",{className:de().card,children:[(0,l.jsx)("div",{className:de().line}),(0,l.jsxs)("div",{className:de().scanArea,children:[(0,l.jsx)("div",{className:de().topL}),(0,l.jsx)("div",{className:de().topR}),(0,l.jsx)("div",{className:de().btmL}),(0,l.jsx)("div",{className:de().btmR})]}),(0,l.jsx)(oe.T,{ViewFinder:function(){},constraints:{facingMode:"user"},onResult:function(e,n){e&&(r(null===e||void 0===e?void 0:e.text),console.log(t)),n&&console.info(n)}}),(0,l.jsx)("p",{children:t})]})})},xe=t(78872);function he(){return{icon:(0,l.jsx)(I.Z,{})}}function pe(e){return e>1?"units":"unit"}var je=[{field:"name",headerName:"Name"},{field:"quantity",headerName:"Quantity",valueGetter:function(e){return"".concat(e.row.quantity.toString()+" unit")}},{field:"price",headerName:"Price",valueGetter:function(e){return"".concat("$"+(n=e.row.price,parseFloat(n).toFixed(2).toString().split("").reverse().join("").replace(/(\d{3})/g,"$1,").replace(/\,$/,"").split("").reverse().join("")));var n}},{field:"tag",headerName:"Tag",renderCell:function(e){return(0,l.jsx)(p.Z,(0,i.Z)({variant:"filled",label:e.row.tags.join(" ")},he()))}}],me=function(e,n){return e.filter((function(e){return e.name.includes(n)||e.tags.find((function(e){return e.includes(n)}))}))},Ze=function(){var e=(0,c.useState)(!1),n=e[0],t=e[1],p=(0,c.useState)(""),S=p[0],k=p[1],F=(0,c.useState)(!1),N=F[0],I=F[1],A=(0,c.useState)(!1),T=A[0],q=A[1],L=(0,c.useState)(""),D=L[0],R=L[1],O=0,E=0,M=0,Q=(0,a.Z)(c.useState({}),2),W=Q[0],$=Q[1],U=(0,c.useState)(!0),z=U[0],G=U[1],V=(0,c.useState)([]),X=V[0],K=V[1];return(0,c.useEffect)((function(){var e=function(){var e=(0,r.Z)((function(){var e;return(0,o.__generator)(this,(function(n){switch(n.label){case 0:return[4,xe.Lv()];case 1:return e=n.sent().data,K(e),[2]}}))}));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(d.Z,{maxWidth:"lg",color:"background",children:(0,l.jsx)("div",{className:"App",children:(0,l.jsxs)("header",{className:"App-header",children:[(0,l.jsx)(j.Z,{styles:{body:{backgroundColor:"#eeecec"}}}),(0,l.jsxs)(m.ZP,{container:!0,spacing:6,paddingTop:"60px",justifyContent:"space-between",children:[(0,l.jsxs)(h.Z,{variant:"h3",color:"#6a6a6c",paddingLeft:"76px",children:[(0,l.jsx)(u.Z,{fontSize:"large",sx:{marginRight:"10px",paddingTop:1}}),"All Items"]}),(0,l.jsx)(v.Z,{variant:"contained",startIcon:(0,l.jsx)(b.Z,{}),sx:{backgroundColor:"#e70a3e"},onClick:function(){I(!0),$({}),G(!1)},children:"ADD NEW"})]}),(0,l.jsx)(Z.Z,{sx:{color:"#d5cfcf",margin:3,border:1,width:1129}}),(0,l.jsxs)(m.ZP,{container:!0,spacing:6,paddingTop:"50px",paddingLeft:"76px",justifyContent:"space-between",children:[(0,l.jsxs)(f.Z,{component:"form",sx:{maxHeight:"45px",maxWidth:"262px",display:"flex",alignItems:"center",width:300},children:[(0,l.jsx)(g.Z,{sx:{paddingLeft:"6px",color:"#c2c0c0",width:30},children:(0,l.jsx)(_.Z,{})}),(0,l.jsx)(y.ZP,{sx:{ml:1,flex:1},placeholder:"Search All Items",inputProps:{"aria-label":"search google maps"},onChange:function(e){k(e.target.value)},value:D||S}),(0,l.jsx)(Z.Z,{sx:{height:28,m:.5},orientation:"vertical"}),(0,l.jsx)(x.Z,{sx:{p:"10px",color:"#2d2a2a"},"aria-label":"QrCodeScannerIcon",onClick:function(){return q(!T)},children:T?(0,l.jsx)(ue,{searchData:function(e){R(e)}}):(0,l.jsx)(C.Z,{})})]}),(0,l.jsx)(m.ZP,{children:(0,l.jsx)(ae,{setIsGrid:t,sx:{height:100}})})]}),me(X,S).map((function(e){return(0,l.jsx)(w.Z,{sx:{mt:3,mr:3},children:(0,l.jsxs)(h.Z,{sx:{display:"none"},children:[O+=1," ",E+=e.quantity," ",M+=e.price,console.log(M)]})},e)})),(0,l.jsxs)(m.ZP,{container:!0,spacing:6,pb:"10px",children:[(0,l.jsxs)(m.ZP,{item:!0,color:"#6a6a6c",children:["Folders:"," ",(0,l.jsx)(m.ZP,{sx:{display:"inline"},color:"#393939",fontWeight:"bold",children:"0"})]}),(0,l.jsxs)(m.ZP,{item:!0,color:"#6a6a6c",children:["Items:"," ",(0,l.jsx)(m.ZP,{sx:{display:"inline"},color:"#393939",fontWeight:"bold",children:O})]}),(0,l.jsxs)(m.ZP,{item:!0,color:"#6a6a6c",children:["Total Quantity:"," ",(0,l.jsxs)(m.ZP,{sx:{display:"inline"},color:"#393939",fontWeight:"bold",children:[E," ",pe(E)]})]}),(0,l.jsxs)(m.ZP,{item:!0,color:"#6a6a6c",children:["Total Value:"," ",(0,l.jsxs)(m.ZP,{sx:{display:"inline"},color:"#393939",fontWeight:"bold",children:["$",M.toFixed(2)]})]})]}),(0,l.jsxs)(w.Z,{children:[n?(0,l.jsx)(m.ZP,{container:!0,children:me(X,S).map((function(e){return(0,l.jsx)(w.Z,{sx:{mt:3,mr:3},id:e.id,children:(0,l.jsx)(H,{data:e,details:W})},e.id)}))}):(0,l.jsx)(w.Z,{sx:{height:600,width:"100%",bgcolor:"#dadada"},children:(0,l.jsx)(P._,{rows:me(X,S).map((function(e){return(0,s.Z)((0,i.Z)({},e),{id:e._id})})),columns:je,pageSize:5,rowsPerPageOptions:[5],checkboxSelection:!0,disableSelectionOnClick:!0,onRowClick:function(e){I(!0),$(e.row),G(!0)}})}),(0,l.jsx)(B,{isDrawerOpen:N,setIsDrawerOpen:I,qrCode:z,setQrCode:G,data:W})]})]})})})})}},78872:function(e,n,t){"use strict";t.d(n,{Lv:function(){return i}});var r=t(21744),i=function(){return(0,r.h)("/items/list",{method:"GET"})}},99349:function(e){e.exports={card:"qrcode-scanner_card__k1pl9",scanArea:"qrcode-scanner_scanArea__oCzOh",line:"qrcode-scanner_line__t2SU4","scan-line":"qrcode-scanner_scan-line__rg26C",topL:"qrcode-scanner_topL__qnf1F",topR:"qrcode-scanner_topR__8Vtkp",btmL:"qrcode-scanner_btmL__pyApW",btmR:"qrcode-scanner_btmR__0MTeh"}}},function(e){e.O(0,[738,429,72,838,299,313,389,196,774,888,179],(function(){return n=87027,e(e.s=n);var n}));var n=e.O();_N_E=n}]);