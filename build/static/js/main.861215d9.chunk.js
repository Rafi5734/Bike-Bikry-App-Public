(this["webpackJsonpsimple-firebase-authentication"]=this["webpackJsonpsimple-firebase-authentication"]||[]).push([[0],{108:function(e,t,c){},109:function(e,t,c){},110:function(e,t,c){},111:function(e,t,c){},112:function(e,t,c){},113:function(e,t,c){},116:function(e,t,c){},117:function(e,t,c){},118:function(e,t,c){},119:function(e,t,c){},120:function(e,t,c){},121:function(e,t,c){},122:function(e,t,c){},123:function(e,t,c){},124:function(e,t,c){},125:function(e,t,c){},126:function(e,t,c){},127:function(e,t,c){},128:function(e,t,c){},129:function(e,t,c){},130:function(e,t,c){},131:function(e,t,c){},132:function(e,t,c){},134:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(35),i=c.n(a),r=(c(94),c(95),c(144)),o=c(137),l=c(141),j=c(142),d=c(138),b=c(13),u=c(9),h=c(46),m=c(82),O={apiKey:"AIzaSyBTftVd-3Mz45kOi-CI74NsnZx3N6n6OpY",authDomain:"simple-firebase-authenti-b3a2a.firebaseapp.com",projectId:"simple-firebase-authenti-b3a2a",storageBucket:"simple-firebase-authenti-b3a2a.appspot.com",messagingSenderId:"616398286500",appId:"1:616398286500:web:0522d835ed72c6aa2d0031",measurementId:"G-ZS6BLS943Q"};Object(m.a)(O);var x=new h.a,p=function(){var e=Object(h.c)(),t=Object(n.useState)({}),c=Object(u.a)(t,2),s=c[0],a=c[1],i=Object(n.useState)(!0),r=Object(u.a)(i,2),o=r[0],l=r[1],j=Object(n.useState)(!1),d=Object(u.a)(j,2),b=d[0],m=d[1];Object(n.useEffect)((function(){Object(h.d)(e,(function(e){a(e||{}),l(!1)}))}),[]);Object(n.useEffect)((function(){fetch("https://stark-spire-82280.herokuapp.com/user/".concat(null===s||void 0===s?void 0:s.email)).then((function(e){return e.json()})).then((function(e){m(e.admin)}))}),[null===s||void 0===s?void 0:s.email]);var O=Object(n.useState)([]),p=Object(u.a)(O,2),f=p[0],v=p[1],g=Object(n.useState)([]),N=Object(u.a)(g,2),y=N[0],k=(N[1],Object(n.useState)([])),S=Object(u.a)(k,2),w=S[0],C=(S[1],Object(n.useState)([])),T=Object(u.a)(C,2),I=T[0];T[1];Object(n.useEffect)((function(){fetch("https://stark-spire-82280.herokuapp.com/services").then((function(e){return e.json()})).then((function(e){v(e)}))}),[]);return{cartItems:I,sortItems:w,admin:b,user:s,signInUsingGoogle:function(){return l(!0),Object(h.f)(e,x)},googleSignOut:function(){l(!0),Object(h.g)(e).then((function(){a({})})).finally((function(){return l(!1)})).catch((function(e){}))},btn:y,handleAddToCart:function(e){var t=f[e];t.email=null===s||void 0===s?void 0:s.email,t.status="pending...",fetch("https://stark-spire-82280.herokuapp.com/placeorder",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){console.log(e)}))},handleCart:function(e){},products:f,setIsLoading:l,isLoading:o,registerUser:function(t,c,n,s){l(!0),Object(h.b)(e,t,c).then((function(e){var t,c=(null===(t=n.state)||void 0===t?void 0:t.from)||"/home";s.push(c);e.user})).catch((function(e){e.code,e.message})).finally((function(){return l(!1)}))},logIn:function(t,c,n,s){Object(h.e)(e,t,c).then((function(e){var t,c=(null===(t=n.state)||void 0===t?void 0:t.from)||"/home";s.push(c);e.user})).catch((function(e){e.code,e.message}))}}},f=c(0),v=Object(n.createContext)(),g=function(e){var t=e.children,c=p();return Object(f.jsx)(v.Provider,{value:c,children:t})},N=function(){return Object(n.useContext)(v)},y=(c(98),c(99),function(){var e=N(),t=e.user,c=e.googleSignOut;e.btn;return Object(f.jsx)("div",{children:Object(f.jsx)(r.a,{bg:"light",expand:"lg",children:Object(f.jsxs)(o.a,{children:[Object(f.jsx)(r.a.Brand,{href:"#",className:"navbar-title",children:Object(f.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0461/8371/0869/t/2/assets/logo.png?v=13690937016588724828",className:"logo-img"})}),Object(f.jsx)(r.a.Toggle,{"aria-controls":"navbarScroll"}),Object(f.jsxs)(r.a.Collapse,{id:"navbarScroll",children:[Object(f.jsxs)(l.a,{className:"me-auto my-2 my-lg-0",style:{maxHeight:"100px"},navbarScroll:!0,children:[Object(f.jsx)(b.b,{to:"/home",className:"navbar-link",children:"Home"}),Object(f.jsx)(b.b,{to:"/service",className:"navbar-link",children:"Explore"}),t.email?Object(f.jsx)("div",{children:Object(f.jsx)(b.b,{to:"/dashboard",className:"navbar-link",children:"Dashboard"})}):null]}),Object(f.jsxs)(j.a,{className:"d-flex",children:[Object(f.jsx)("h5",{className:"user-name me-3 mt-2",children:t.email}),(null===t||void 0===t?void 0:t.email)?Object(f.jsx)("div",{children:Object(f.jsx)(d.a,{variant:"outline-success sign-btn text-nowrap",onClick:c,children:"Sign Out"})}):Object(f.jsx)("div",{children:Object(f.jsx)(d.a,{variant:"outline-success sign-btn text-nowrap",children:Object(f.jsx)(b.b,{to:"/register",children:"Sign In"})})})]})]})]})})})}),k=c(19),S=(c(108),c(7)),w=c(10),C=c(14),T=c(15),I=(c(109),function(e){Object(C.a)(c,e);var t=Object(T.a)(c);function c(){return Object(S.a)(this,c),t.apply(this,arguments)}return Object(w.a)(c,[{key:"render",value:function(){return Object(f.jsx)("div",{children:Object(f.jsxs)(o.a,{className:"footer-bg",children:[Object(f.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/0461/8371/0869/files/rayz-logo-light_x40@2x.png?v=1597905068",className:"mb-5 mt-5"}),Object(f.jsx)("p",{className:"lead mb-5",children:"Rayz quam elementum pulvinar etiam non quam. Erat velit scelerisque in dictum non consectetur. Nibh cras pulvinar mattis nunc sed."}),Object(f.jsx)("h1",{className:"footer-title",children:"FOLLOW US"}),Object(f.jsxs)("div",{className:"all-icons",children:[Object(f.jsx)("i",{className:"fab fa-facebook-f"}),Object(f.jsx)("i",{className:"fab fa-youtube"}),Object(f.jsx)("i",{className:"fab fa-twitter"})]})]})})}}]),c}(n.Component)),P=I,E=(c(110),function(){return Object(f.jsx)(o.a,{children:Object(f.jsx)("div",{className:"banner-class",children:Object(f.jsxs)("div",{className:"banner-description",children:[Object(f.jsx)("p",{className:"lead",children:"New to Motocross"}),Object(f.jsx)("h1",{className:"banner-heading",children:"RIDER CLASS"}),Object(f.jsx)("p",{className:"banner-para",children:"We offer new rider classes every week. Theses courses are free for all types of riders from newbies to professional racers."}),Object(f.jsx)(b.b,{to:"/service",children:Object(f.jsx)("button",{className:"banner-btn lead",children:"Explore More"})})]})})})}),A=c(140),R=c(139),B=c(86),F=(c(111),function(){return Object(f.jsx)("div",{children:Object(f.jsxs)(o.a,{className:"choose-header",children:[Object(f.jsx)("h1",{className:"mb-5 mt-5 main-about choose-main",children:"About Us"}),Object(f.jsx)("hr",{}),Object(f.jsx)(o.a,{children:Object(f.jsxs)(R.a,{children:[Object(f.jsx)(B.a,{className:"mb-5",children:Object(f.jsx)("img",{src:"https://img.freepik.com/free-photo/driving-green-neon-color-motorcycle-road_114579-5031.jpg?size=626&ext=jpg&ga=GA1.2.895263172.1632374025",className:"img-fluid"})}),Object(f.jsxs)(B.a,{className:"mb-5 about-2",children:[Object(f.jsx)("h3",{className:"choose-title",children:"MOTORIZED QUADRACYCLE"}),Object(f.jsx)("p",{className:"lead",children:"Magna fringilla urna porttitor rhoncus dolor purus non enim. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Amet volutpat consequat mauris nunc congue nisi vitae suscipit. Aliquam id diam maecenas ultricies mi eget. Nulla aliquet enim tortor at."}),Object(f.jsx)(d.a,{variant:"secondary",children:"Read More"})," "]})]})})]})})}),U=c(4),_=(c(112),c(34)),M=function(){var e=N(),t=e.user,c=e.products,s=Object(k.i)().placeId,a=Object(n.useState)([]),i=Object(u.a)(a,2),r=i[0],l=i[1];Object(n.useEffect)((function(){var e=c.find((function(e){return e._id==s}));l(e)}),[c]);var j=Object(_.a)(),d=j.register,h=j.handleSubmit;console.log(c),console.log(t.email,t.metadata.lastSignInTime);return Object(f.jsxs)("div",{className:"place-order-form",children:[Object(f.jsx)("h1",{className:"mt-5 mb-5 place-order",children:"Place Your Order"}),Object(f.jsx)(o.a,{children:Object(f.jsxs)("form",{onSubmit:h((function(e){console.log(e)})),className:"place-order-form",children:[Object(f.jsx)("input",Object(U.a)(Object(U.a)({defaultValue:t.email},d("email",{required:!0})),{},{placeholder:"Email Name"})),Object(f.jsx)("input",Object(U.a)(Object(U.a)({defaultValue:t.displayName},d("name",{})),{},{placeholder:"Name"})),Object(f.jsx)("input",Object(U.a)(Object(U.a)({type:"text"},d("from",{required:!0})),{},{placeholder:"From"})),Object(f.jsx)("input",Object(U.a)(Object(U.a)({type:"text",value:r.name},d("to",{})),{},{placeholder:"To"})),Object(f.jsx)("input",Object(U.a)(Object(U.a)({value:r.price,type:"number"},d("price",{})),{},{placeholder:"Price"})),Object(f.jsx)("input",Object(U.a)(Object(U.a)({defaultValue:"Dhaka",type:"text"},d("destination",{})),{},{placeholder:"Destination"})),Object(f.jsx)(b.b,{to:"/myorder",children:Object(f.jsx)("button",{type:"submit",value:"place order",className:"submit-btn",onClick:function(e){var n=t.email,s=c.name,a={userName:n,time:t.metadata.lastSignInTime,itemName:s};fetch("https://stark-spire-82280.herokuapp.com/myorder",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(a)})},children:"Place Order"})})]})})]})},D=c(146),L=(c(113),c(87)),q=c.n(L),H=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],s=t[1];Object(n.useEffect)((function(){fetch("https://stark-spire-82280.herokuapp.com/review").then((function(e){return e.json()})).then((function(e){s(e)}))}),[]);var a=function(e){console.log(e)};return Object(f.jsx)("div",{children:Object(f.jsxs)(o.a,{children:[Object(f.jsx)("h1",{className:"mt-5 mb-5 review-title",children:"Our Customer Review"}),Object(f.jsx)("hr",{}),Object(f.jsx)("div",{className:"cards",children:c.map((function(e){return Object(f.jsxs)(D.a,{style:{width:"18rem"},children:[Object(f.jsxs)("p",{className:"ms-3 mt-3",children:[Object(f.jsx)("span",{className:"card-name",children:"User:"}),Object(f.jsx)("span",{className:"ms-1 fw-1 card-item",children:e.userName})]}),Object(f.jsxs)("p",{className:"ms-3 mt-3",children:[Object(f.jsx)("span",{className:"card-name",children:"Product:"}),Object(f.jsx)("span",{className:"ms-1 fw-1 card-item",children:e.itemName})]}),Object(f.jsxs)("p",{className:"ms-3 mt-3",children:[Object(f.jsx)("span",{className:"card-name",children:"FeedBack:"}),Object(f.jsx)("span",{className:"ms-1 fw-1 card-item",children:e.feedBack})]}),Object(f.jsxs)("p",{className:"ms-3 mt-3",children:[Object(f.jsx)("span",{className:"card-name",children:"Rating:"}),Object(f.jsx)(q.a,{count:e.rating,onChange:a,size:24,isHalf:!0,emptyIcon:Object(f.jsx)("i",{className:"far fa-star"}),halfIcon:Object(f.jsx)("i",{className:"fa fa-star-half-alt"}),fullIcon:Object(f.jsx)("i",{className:"fa fa-star"}),activeColor:"#ffd700"})]})]})}))})]})})},J=function(){var e=N(),t=e.handleAddToCart,c=(e.handleCart,e.products,e.isLoading),s=Object(n.useState)([]),a=Object(u.a)(s,2),i=a[0],r=a[1];return Object(n.useEffect)((function(){fetch("https://stark-spire-82280.herokuapp.com/services").then((function(e){return e.json()})).then((function(e){var t=e.slice(0,6);r(t)}))}),[]),Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{children:[Object(f.jsx)(E,{}),Object(f.jsx)("h1",{className:"tasks mt-5 mb-5 home-title",children:"Our Tasks"}),Object(f.jsx)("hr",{}),c?Object(f.jsx)("div",{children:Object(f.jsx)(A.a,{animation:"border",variant:"danger",className:"card-spinner"})}):Object(f.jsx)("div",{className:"home-card",children:i.map((function(e,c){return Object(f.jsxs)("div",{className:"card",style:{width:"18rem"},children:[Object(f.jsx)("img",{src:e.image,className:"card-img-top",alt:"..."}),Object(f.jsxs)("div",{className:"card-body",children:[Object(f.jsx)("h5",{className:"card-title",children:e.name}),Object(f.jsx)("p",{className:"card-text",children:e.description}),Object(f.jsx)("br",{}),Object(f.jsx)(b.b,{to:"/placeorder/".concat(null===e||void 0===e?void 0:e._id),children:Object(f.jsx)("button",{className:"btn btn-primary",onClick:function(){return t(c)},children:"Purchase Now"})})]})]})}))}),Object(f.jsx)(H,{}),Object(f.jsx)(F,{}),Object(f.jsx)(P,{})]})})},Y=(c(116),c(143)),z=(c(117),function(e){var t=e.show,c=e.handleClose,s=N(),a=(s.products,s.user),i=(Object(k.i)().modalId,Object(n.useState)({})),r=Object(u.a)(i,2),o=(r[0],r[1],Object(_.a)()),l=o.register,j=o.handleSubmit,b=(o.watch,o.formState.errors);return Object(f.jsx)("div",{children:Object(f.jsxs)(Y.a,{show:t,onHide:c,children:[Object(f.jsx)(Y.a.Header,{closeButton:!0,children:Object(f.jsx)(Y.a.Title,{children:"Review This Product."})}),Object(f.jsxs)("form",{onSubmit:j((function(e){var t=a.email,c={itemName:e.item_name,feedBack:e.feedBack,rating:e.rate,userName:t};fetch("https://stark-spire-82280.herokuapp.com/review",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(c)}).then((function(e){return e.json()})).then((function(e){console.log(e)})),console.log(e)})),className:"modal-form",children:[Object(f.jsx)("input",Object(U.a)(Object(U.a)({placeholder:"Your Product"},l("item_name")),{},{className:"modal-input mb-3"})),Object(f.jsx)("input",Object(U.a)(Object(U.a)({placeholder:"Your feedback"},l("feedBack")),{},{className:"modal-input mb-3"})),Object(f.jsx)("input",Object(U.a)(Object(U.a)({placeholder:"Your rating"},l("rate")),{},{className:"modal-input mb-3"})),b.exampleRequired&&Object(f.jsx)("span",{children:"This field is required"}),Object(f.jsx)("input",{type:"submit",className:"modal-btn"})]}),Object(f.jsx)(Y.a.Footer,{children:Object(f.jsx)(d.a,{variant:"secondary",onClick:c,children:"Close"})})]})})}),G=function(){var e=N().handleAddToCart,t=Object(n.useState)([]),c=Object(u.a)(t,2),s=c[0],a=c[1];Object(n.useEffect)((function(){fetch("https://stark-spire-82280.herokuapp.com/services").then((function(e){return e.json()})).then((function(e){a(e)}))}),[]);var i=Object(n.useState)(!1),r=Object(u.a)(i,2),l=r[0],j=r[1],h=function(){return j(!0)};return Object(f.jsxs)("div",{children:[Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{className:"services-title mb-5 mt-5",children:"Our Products"}),Object(f.jsxs)(o.a,{className:"service-section",children:[s.map((function(t,c){return Object(f.jsxs)(D.a,{style:{width:"18rem"},children:[Object(f.jsx)(D.a.Img,{variant:"top",src:t.image}),Object(f.jsxs)(D.a.Body,{children:[Object(f.jsx)(D.a.Title,{className:"card-title",children:t.name}),Object(f.jsx)(D.a.Text,{className:"card-text",children:t.description}),Object(f.jsxs)(D.a.Text,{children:[Object(f.jsx)("span",{className:"price",children:"Price: $"}),t.price]}),Object(f.jsx)(b.b,{to:"/placeorder/".concat(null===t||void 0===t?void 0:t._id),children:Object(f.jsx)("button",{className:"btn btn-primary me-4 service-btn",onClick:function(){return e(c)},children:"Purchase Now"})}),Object(f.jsx)(d.a,{variant:"success",onClick:h,explore:s,className:"service-btn",children:"Review It"})," "]})]})})),Object(f.jsx)(z,{show:l,handleClose:function(){return j(!1)}})]})]}),Object(f.jsx)(P,{})]})},$=(c(118),c(119),function(){var e,t=N(),c=(t.user,t.signInUsingGoogle),n=t.setIsLoading,s=Object(k.g)(),a=(null===(e=Object(k.h)().state)||void 0===e?void 0:e.from)||"/home";return Object(f.jsx)("div",{children:Object(f.jsxs)("div",{className:"google-login",children:[Object(f.jsxs)("h1",{className:"signIn-title",children:[Object(f.jsx)("i",{class:"fab fa-google"})," Sign In"]}),Object(f.jsx)("button",{type:"button",class:"btn btn-outline-success",onClick:function(){c().then((function(){s.push(a)})).finally((function(){return n(!1)}))},children:"Google Sign In"})]})})}),V=(c(120),function(){var e=Object(k.g)(),t=Object(k.h)(),c=Object(n.useState)({}),s=Object(u.a)(c,2),a=(s[0],s[1]),i=N(),r=i.registerUser,l=(i.user,Object(_.a)()),j=l.register,d=l.handleSubmit,h=(l.watch,l.formState.errors);return Object(f.jsx)("div",{children:Object(f.jsxs)(o.a,{className:"register",children:[Object(f.jsx)("img",{src:"https://www.mrisoftware.com/wp-content/uploads/2021/06/asset6-600x330.png",className:"img-fluid register-img"}),Object(f.jsxs)(B.a,{className:"col-2 order-1 order-sm-1",children:[Object(f.jsx)("h1",{children:"Register Account"}),Object(f.jsxs)("form",{onSubmit:d((function(c){alert("form submitted");var n={email:c.email,role:"no admin"};fetch("https://stark-spire-82280.herokuapp.com/user",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(n)}),a(c.email,c.password),r(c.email,c.password,t,e)})),children:[Object(f.jsx)("input",Object(U.a)(Object(U.a)({placeholder:"User Name"},j("User Name")),{},{className:"input"})),Object(f.jsx)("input",Object(U.a)(Object(U.a)({placeholder:"Email Address"},j("email")),{},{className:"input"})),Object(f.jsx)("input",Object(U.a)(Object(U.a)({placeholder:"password"},j("password")),{},{className:"input"})),h.exampleRequired&&Object(f.jsx)("span",{children:"This field is required"}),Object(f.jsx)("input",{type:"submit"})]}),Object(f.jsx)(b.b,{to:"/login",children:Object(f.jsx)("p",{children:"Already Have a new account?Sign in now"})})]})]})})}),Z=c(8),Q=(c(121),["children"]),W=function(e){var t=e.children,c=Object(Z.a)(e,Q),n=N(),s=n.user;return n.isLoading?Object(f.jsx)(A.a,{animation:"grow",variant:"danger",className:"private-spinner"}):Object(f.jsx)(k.b,Object(U.a)(Object(U.a)({},c),{},{render:function(e){var c=e.location;return s.email?t:Object(f.jsx)(k.a,{to:{pathname:"/register",state:{from:c}}})}}))},K=(c(122),function(){var e=N(),t=(e.btn,e.handleDeleteBtn,e.cartItems,e.user),c=Object(n.useState)([]),s=Object(u.a)(c,2),a=s[0],i=s[1];Object(n.useEffect)((function(){fetch("https://stark-spire-82280.herokuapp.com/placeorder?email=".concat(t.email)).then((function(e){return e.json()})).then((function(e){i(e)}))}),[t.email]);return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{className:"my-order text-center mt-5 mb-5",children:"My All Orders."}),Object(f.jsx)(o.a,{className:"order-container",children:a.map((function(e,t){return Object(f.jsxs)(D.a,{style:{width:"18rem"},children:[Object(f.jsx)(D.a.Img,{variant:"top",src:e.image}),Object(f.jsxs)(D.a.Body,{children:[Object(f.jsx)(D.a.Title,{children:e.name}),Object(f.jsx)(D.a.Text,{children:e.description}),Object(f.jsxs)(D.a.Text,{children:[" ",Object(f.jsx)("span",{children:"Price:$"})," ",e.price]}),Object(f.jsxs)(D.a.Text,{children:[" ",Object(f.jsx)("i",{className:"fas fa-star mt-4 mb-4",children:e.rating})]}),Object(f.jsxs)(D.a.Text,{children:[" User Name: ",e.email]}),Object(f.jsx)("button",{type:"button",className:"btn btn-outline-danger me-3 ms-4",onClick:function(){return t=e._id,void(window.confirm("Are You want to delete this item?")&&fetch("https://stark-spire-82280.herokuapp.com/placeorder/".concat(t),{method:"DELETE",headers:{"content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){if(e.deletedCount>0){alert("item deleted successfully.");var c=a.filter((function(e){return e._id!==t}));i(c)}})));var t},updateCartItems:a,children:"Delete"})]})]})}))})]})}),X=(c(123),function(){N().user;var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],s=t[1];Object(n.useEffect)((function(){fetch("https://stark-spire-82280.herokuapp.com/allorder").then((function(e){return e.json()})).then((function(e){console.log(e),s(e)}))}),[]);var a=function(e){window.confirm("Are you sure you want to delete this order?")&&fetch("https://stark-spire-82280.herokuapp.com/allorder/".concat(e),{method:"DELETE",headers:{"content-type":"application/json"}}).then((function(e){return e.json()})).then((function(t){if(t.deletedCount>0){alert("item deleted successfully.");var n=c.filter((function(t){return t._id!==e}));s(n)}}))};return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{className:"text-center mt-5 mb-5",children:"Manage all the orders."}),Object(f.jsx)(o.a,{className:"manage-Order",children:c.map((function(e){return Object(f.jsxs)(D.a,{style:{width:"18rem"},children:[Object(f.jsx)(D.a.Img,{variant:"top",src:e.image,className:"img-fluid"}),Object(f.jsxs)(D.a.Body,{children:[Object(f.jsx)(D.a.Title,{children:e.name}),Object(f.jsx)(D.a.Text,{children:e.description}),Object(f.jsx)(D.a.Text,{children:Object(f.jsx)("i",{className:"fas fa-star mt-4 mb-4",children:e.rating})}),Object(f.jsxs)(D.a.Text,{children:[" Price: $ ",e.price]}),Object(f.jsxs)(D.a.Text,{children:[" User: ",e.email]}),Object(f.jsx)(d.a,{variant:"primary",onClick:function(){return a(e._id)},children:"Delete"}),Object(f.jsx)("br",{}),Object(f.jsx)("input",{type:"text",value:e.status,className:"manage-input"}),Object(f.jsxs)(b.b,{to:"/update/".concat(e._id),children:[Object(f.jsx)(d.a,{variant:"warning",className:"ms-3",children:"Update Status"})," "]})]})]})}))})]})}),ee=(c(124),function(){var e=N(),t=(e.user,e.handleAddToCart),c=Object(k.i)().detailsId,s=Object(n.useState)({}),a=Object(u.a)(s,2),i=a[0],r=a[1];Object(n.useEffect)((function(){fetch("https://ghastly-castle-73206.herokuapp.com/details/".concat(c)).then((function(e){return e.json()})).then((function(e){r(e)}))}),[]);return Object(f.jsx)("div",{className:"single-item",children:Object(f.jsxs)(D.a,{style:{width:"18rem"},children:[Object(f.jsx)(D.a.Img,{variant:"top",src:null===i||void 0===i?void 0:i.image}),Object(f.jsxs)(D.a.Body,{children:[Object(f.jsx)(D.a.Title,{children:null===i||void 0===i?void 0:i.name}),Object(f.jsx)(D.a.Text,{children:null===i||void 0===i?void 0:i.description}),Object(f.jsxs)("h3",{children:["$ ",null===i||void 0===i?void 0:i.price]}),Object(f.jsx)("i",{className:"fas fa-star mt-4 mb-4"}),Object(f.jsx)("br",{}),Object(f.jsx)(b.b,{to:"/myorder",children:Object(f.jsx)(d.a,{variant:"primary",onClick:function(){return t(null===i||void 0===i?void 0:i._id)},children:"Place Book"})})]})]})})}),te=(c(125),function(){var e=Object(n.useState)({}),t=Object(u.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(!1),i=Object(u.a)(a,2),r=(i[0],i[1]),o=Object(k.i)().updateId;Object(n.useEffect)((function(){fetch("https://stark-spire-82280.herokuapp.com/update/".concat(o)).then((function(e){return e.json()})).then((function(e){s(e)}))}),[]);return Object(f.jsxs)("div",{className:"update-div",children:[Object(f.jsx)("h1",{className:"text-center mt-5 mb-5",children:"Updating My Current Status."}),Object(f.jsx)("input",{type:"text",value:null===c||void 0===c?void 0:c.status,onChange:function(e){var t=e.target.value;s({status:t})},className:"update-input"}),Object(f.jsxs)(b.b,{to:"/manageorder",children:[Object(f.jsx)(d.a,{variant:"success",className:"ms-3",onClick:function(){fetch("https://stark-spire-82280.herokuapp.com/update/".concat(o),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).then((function(e){return e.json()})).then((function(e){e.modifiedCount&&(alert("Admin Make Successfully"),r(!0)),console.log(e)}))},children:"Update"})," "]})]})}),ce=c(145),ne=(c(126),function(){var e=Object(n.useRef)(""),t=Object(n.useRef)(""),c=Object(n.useRef)(""),s=Object(n.useRef)(""),a=Object(n.useRef)("");return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{className:"mt-5 mb-5 text-center add-title",children:"Add a new service one."}),Object(f.jsx)(o.a,{className:"add-container",children:Object(f.jsxs)(j.a,{onSubmit:function(n){var i,r,o,l,j;n.preventDefault();var d=null===(i=e.current)||void 0===i?void 0:i.value,b=null===(r=t.current)||void 0===r?void 0:r.value,u=null===(o=c.current)||void 0===o?void 0:o.value,h=null===(l=s.current)||void 0===l?void 0:l.value,m={name:b,description:u,price:null===(j=a.current)||void 0===j?void 0:j.value,rating:h,image:d};fetch("https://stark-spire-82280.herokuapp.com/services",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m)}).then((function(e){return e.json()})).then((function(e){e.insertedId&&alert("service added successfully")}))},children:[Object(f.jsxs)(j.a.Floating,{className:"mb-3",children:[Object(f.jsx)(j.a.Control,{id:"floatingInputCustom",type:"text",placeholder:"img-url",ref:e}),Object(f.jsx)("label",{htmlFor:"floatingInputCustom",children:"Image URL"})]}),Object(f.jsxs)(j.a.Floating,{className:"mb-3",children:[Object(f.jsx)(j.a.Control,{id:"floatingPasswordCustom",type:"text",placeholder:"Tour Name",ref:t}),Object(f.jsx)("label",{htmlFor:"floatingPasswordCustom",children:"Tour Name"})]}),Object(f.jsxs)(j.a.Floating,{className:"mb-3",children:[Object(f.jsx)(j.a.Control,{id:"floatingPasswordCustom",type:"text",placeholder:"Description",ref:c}),Object(f.jsx)("label",{htmlFor:"floatingPasswordCustom",children:"Description"})]}),Object(f.jsxs)(j.a.Floating,{className:"mb-3",children:[Object(f.jsx)(j.a.Control,{id:"floatingPasswordCustom",type:"text",placeholder:"Rating",ref:s}),Object(f.jsx)("label",{htmlFor:"floatingPasswordCustom",children:"Rating"})]}),Object(f.jsxs)(j.a.Floating,{className:"mb-3",children:[Object(f.jsx)(j.a.Control,{id:"floatingPasswordCustom",type:"text",placeholder:"Price",ref:a}),Object(f.jsx)("label",{htmlFor:"floatingPasswordCustom",children:"Price"})]}),Object(f.jsx)(d.a,{variant:"outline-success",type:"submit",children:"Submit"})," "]})})]})}),se=(c(127),function(){var e=Object(_.a)(),t=(e.register,e.handleSubmit,e.watch,e.formState.errors,N().user,Object(n.useState)([])),c=Object(u.a)(t,2),s=c[0],a=c[1],i=Object(n.useState)(!1),r=Object(u.a)(i,2);r[0],r[1];return Object(n.useEffect)((function(){fetch("https://stark-spire-82280.herokuapp.com/user").then((function(e){return e.json()})).then((function(e){console.log(e),a(e)}))}),[]),Object(f.jsxs)("div",{className:"admin-form",children:[Object(f.jsx)("h1",{className:"mb-5",children:"Making Admin Here"}),Object(f.jsx)("img",{src:"https://teleme.io/assets/feature_updates/tg_group_admins.jpg"}),s.map((function(e,t){return Object(f.jsx)(D.a,{style:{width:"18rem"},children:Object(f.jsxs)(D.a.Body,{children:[Object(f.jsxs)(D.a.Title,{children:["User: ",e.email]}),Object(f.jsxs)(D.a.Text,{children:["Role: ",e.role]}),Object(f.jsx)(b.b,{to:"/buildadmin/".concat(e._id),children:Object(f.jsx)(d.a,{variant:"danger",children:"Make Admin"})})]})})}))]})}),ae=(c(128),function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],s=t[1];Object(n.useEffect)((function(){fetch("https://stark-spire-82280.herokuapp.com/services").then((function(e){return e.json()})).then((function(e){s(e)}))}),[]);return Object(f.jsxs)(o.a,{children:[Object(f.jsx)("h1",{children:"Manage All Products"}),Object(f.jsx)("div",{className:"manage-card",children:c.map((function(e,t){return Object(f.jsxs)(D.a,{style:{width:"18rem"},children:[Object(f.jsx)(D.a.Img,{variant:"top",src:e.image,className:"img-fluid table-img"}),Object(f.jsxs)(D.a.Body,{children:[Object(f.jsx)(D.a.Title,{children:e.name}),Object(f.jsxs)(D.a.Title,{children:["$ ",e.price]}),Object(f.jsx)(D.a.Text,{children:e.description}),Object(f.jsx)(d.a,{variant:"danger",onClick:function(){return t=e._id,void(window.confirm("Are you sure you want to delete this order?")&&fetch("https://stark-spire-82280.herokuapp.com/manageproduct/".concat(t),{method:"DELETE"}).then((function(e){return e.json()})).then((function(e){if(e.deletedCount>0){alert("item deleted successfully.");var n=c.filter((function(e){return e._id!==t}));s(n)}})));var t},children:"delete"})]})]})}))})]})}),ie=function(){return Object(f.jsx)("div",{children:Object(f.jsx)("h1",{children:"Payment Comming Soon."})})},re=(c(129),function(){var e=N(),t=e.user,c=e.googleSignOut,s=e.admin,a=Object(n.useState)(!1),i=Object(u.a)(a,2),r=i[0],o=i[1],l=Object(k.j)(),j=l.path,h=l.url;return Object(f.jsx)("div",{className:"dashBoard",children:Object(f.jsxs)("div",{children:[Object(f.jsx)(d.a,{variant:"primary",onClick:function(){return o(!0)},className:"mt-3 ms-3",children:"DashBoard"}),Object(f.jsxs)(ce.a,{show:r,onHide:function(){return o(!1)},children:[Object(f.jsx)(ce.a.Header,{closeButton:!0,children:Object(f.jsx)(ce.a.Title,{children:"Offcanvas"})}),Object(f.jsxs)(ce.a.Body,{children:[Object(f.jsx)("ul",{children:s?Object(f.jsxs)("div",{children:[Object(f.jsx)("li",{children:Object(f.jsx)(b.b,{to:"".concat(h,"/manageorder"),children:"Manage All Orders"})}),Object(f.jsx)("li",{children:Object(f.jsx)(b.b,{to:"".concat(h,"/manageproduct"),children:"Manage All Products"})}),Object(f.jsx)("li",{children:Object(f.jsx)(b.b,{to:"".concat(h,"/makeadmin"),children:"Make Admin"})}),Object(f.jsx)("li",{children:Object(f.jsx)(b.b,{to:"".concat(h,"/addservice"),children:"Add a service"})})]}):Object(f.jsxs)("div",{children:[Object(f.jsx)("li",{children:Object(f.jsx)(b.b,{to:"".concat(h,"/myorder"),children:"My Orders"})}),Object(f.jsx)("li",{children:Object(f.jsx)(b.b,{to:"".concat(h,"/pay"),children:"Pay Your Bill"})}),Object(f.jsx)("li",{children:Object(f.jsx)(b.b,{to:"".concat(h,"/review"),children:"Our Reviews"})})]})}),t.email?Object(f.jsx)("div",{children:Object(f.jsx)(d.a,{variant:"outline-success sign-btn text-nowrap",onClick:c,children:"Sign Out"})}):Object(f.jsx)("div",{children:Object(f.jsx)(d.a,{variant:"outline-success sign-btn text-nowrap",children:Object(f.jsx)(b.b,{to:"/register",children:"Sign In"})})})]})]}),Object(f.jsxs)(k.d,{children:[Object(f.jsx)(k.b,{exact:!0,path:j}),Object(f.jsx)(k.b,{path:"".concat(j,"/myorder"),children:Object(f.jsx)(K,{})}),Object(f.jsx)(k.b,{path:"".concat(j,"/manageorder"),children:Object(f.jsx)(X,{})}),Object(f.jsx)(k.b,{path:"".concat(j,"/manageproduct"),children:Object(f.jsx)(ae,{})}),Object(f.jsx)(k.b,{path:"".concat(j,"/makeadmin"),children:Object(f.jsx)(se,{})}),Object(f.jsx)(k.b,{path:"".concat(j,"/addservice"),children:Object(f.jsx)(ne,{})}),Object(f.jsx)(k.b,{path:"".concat(j,"/review"),children:Object(f.jsx)(H,{})}),Object(f.jsx)(k.b,{path:"".concat(j,"/pay"),children:Object(f.jsx)(ie,{})})]})]})})}),oe=(c(130),function(){return Object(f.jsx)("div",{children:Object(f.jsx)("div",{className:"error",children:Object(f.jsxs)(b.b,{to:"",children:[Object(f.jsx)(d.a,{variant:"danger",children:"Go To Home"})," "]})})})}),le=(c(131),function(){var e=Object(k.g)(),t=Object(k.h)(),c=N(),s=(c.user,c.logIn),a=(c.isLoading,Object(n.useState)({})),i=Object(u.a)(a,2),r=(i[0],i[1],Object(_.a)()),l=r.register,j=r.handleSubmit,d=(r.watch,r.formState.errors);return Object(f.jsx)("div",{children:Object(f.jsxs)(o.a,{children:[Object(f.jsx)("img",{src:"https://img.freepik.com/free-vector/businessman-unlocks-his-smartphone-via-fingerprint-scanner-which-provides-cyber-security_491047-143.jpg?size=626&ext=jpg&ga=GA1.2.895263172.1632374025",className:"img-fluid login-img"}),Object(f.jsxs)(B.a,{className:"col-2",children:[Object(f.jsx)("h1",{children:"Login"}),Object(f.jsxs)("form",{onSubmit:j((function(c){console.log(c),s(c.email,c.password,t,e)})),children:[Object(f.jsx)("input",Object(U.a)(Object(U.a)({placeholder:"Email Address"},l("email")),{},{className:"input"})),Object(f.jsx)("input",Object(U.a)(Object(U.a)({placeholder:"password"},l("password")),{},{className:"input"})),d.exampleRequired&&Object(f.jsx)("span",{children:"This field is required"}),Object(f.jsx)("input",{type:"submit"}),Object(f.jsx)(b.b,{to:"/register",children:Object(f.jsx)("p",{children:"Create an account"})})]})]})]})})}),je=(c(132),function(){var e=Object(n.useState)({}),t=Object(u.a)(e,2),c=t[0],s=t[1],a=Object(k.i)().adminId;Object(n.useEffect)((function(){fetch("https://stark-spire-82280.herokuapp.com/buildadmin/".concat(a)).then((function(e){return e.json()})).then((function(e){s(e)}))}),[]);return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Making Admin Role"}),Object(f.jsx)("input",{type:"text",value:null===c||void 0===c?void 0:c.role,onChange:function(e){var t=e.target.value;s({role:t})},className:"update-input"}),Object(f.jsxs)(b.b,{to:"/dashboard",children:[Object(f.jsx)(d.a,{variant:"success",className:"ms-3",onClick:function(){fetch("https://stark-spire-82280.herokuapp.com/buildadmin/".concat(a),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).then((function(e){return e.json()})).then((function(e){console.log(e)}))},children:"Update Role"})," "]})]})});var de=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(g,{children:Object(f.jsxs)(b.a,{children:[Object(f.jsx)(y,{}),Object(f.jsxs)(k.d,{children:[Object(f.jsx)(k.b,{exact:!0,path:"/",children:Object(f.jsx)(J,{})}),Object(f.jsx)(k.b,{exact:!0,path:"/home",children:Object(f.jsx)(J,{})}),Object(f.jsx)(k.b,{path:"/service",children:Object(f.jsx)(G,{})}),Object(f.jsx)(k.b,{path:"/review",children:Object(f.jsx)(H,{})}),Object(f.jsx)(k.b,{path:"/signin",children:Object(f.jsx)($,{})}),Object(f.jsx)(k.b,{path:"/register",children:Object(f.jsx)(V,{})}),Object(f.jsx)(W,{path:"/placeorder/:placeId",children:Object(f.jsx)(M,{})}),Object(f.jsx)(k.b,{path:"/manageorder",children:Object(f.jsx)(X,{})}),Object(f.jsx)(k.b,{path:"/myorder",children:Object(f.jsx)(K,{})}),Object(f.jsx)(k.b,{path:"/update/:updateId",children:Object(f.jsx)(te,{})}),Object(f.jsx)(k.b,{path:"/details/:detailsId",children:Object(f.jsx)(ee,{})}),Object(f.jsx)(k.b,{path:"/dashboard",children:Object(f.jsx)(re,{})}),Object(f.jsx)(k.b,{path:"/buildadmin/:adminId",children:Object(f.jsx)(je,{})}),Object(f.jsx)(k.b,{path:"/login",children:Object(f.jsx)(le,{})}),Object(f.jsx)(k.b,{path:"*",children:Object(f.jsx)(oe,{})})]})]})})})},be=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,147)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};c(133);i.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(de,{})}),document.getElementById("root")),be()},94:function(e,t,c){},95:function(e,t,c){},98:function(e,t){},99:function(e,t,c){}},[[134,1,2]]]);
//# sourceMappingURL=main.861215d9.chunk.js.map