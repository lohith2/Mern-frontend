(this.webpackJsonpprojfrontend=this.webpackJsonpprojfrontend||[]).push([[0],{29:function(e,t,a){},45:function(e,t,a){e.exports=a(72)},72:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(4),o=a(8),l=a(5),s=(a(29),"https://freakstore.herokuapp.com/api/"),m=function(){return"undefined"!=typeof window&&(!!localStorage.getItem("jwt")&&JSON.parse(localStorage.getItem("jwt")))},i=function(e,t){return e.location.pathname===t?{color:"#2ecc72"}:{color:"#FFFFFF"}},u=Object(o.g)((function(e){var t=e.history;return n.a.createElement("div",null,n.a.createElement("ul",{className:"nav nav-tabs"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(r.b,{style:i(t,"/"),className:"nav-link",to:"/"},"Home")),m()&&n.a.createElement("li",{className:"nav-item"},n.a.createElement(r.b,{style:i(t,"/cart"),className:"nav-link",to:"/cart"},"Cart")),m()&&0===m().user.role&&n.a.createElement("li",{className:"nav-item"},n.a.createElement(r.b,{style:i(t,"/user/dashboard"),className:"nav-link",to:"/user/dashboard"})),m()&&1===m().user.role&&n.a.createElement("li",{className:"nav-item"},n.a.createElement(r.b,{style:i(t,"/admin/dashboard"),className:"nav-link",to:"/admin/dashboard"},"A. Dashboard")),!m()&&n.a.createElement(c.Fragment,null,n.a.createElement("li",{className:"nav-item"},n.a.createElement(r.b,{style:i(t,"/signup"),className:"nav-link",to:"/signup"},"Signup")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(r.b,{style:i(t,"/signin"),className:"nav-link",to:"/signin"},"Sign In"))),m()&&n.a.createElement("li",{className:"nav-item"},n.a.createElement("span",{className:"nav-link text-warning",onClick:function(){!function(e){if("undefined"!==typeof window)localStorage.removeItem("jwt"),e(),fetch("".concat(s,"/signout"),{method:"GET"}).then((function(e){return console.log("signout success")})).catch((function(e){return console.log(e)}))}((function(){t.push("/")}))}},"Signout"))))}));var d=function(){return n.a.createElement("image",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQffCvxLUbAllWRrvZk644qp19Ht6vP6Umhg&usqp=CAU",alt:"my logo"})},p=a(17),E=function(){return n.a.createElement(p.e,{className:"font-small pt-4 mt-4 bg-light"},n.a.createElement(p.d,{fluid:!0,className:"text-center text-md-left"},n.a.createElement(p.j,null,n.a.createElement(p.c,{md:"6"},n.a.createElement("h5",{className:"title"},"Freakstore"),n.a.createElement("div",{className:""},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm"},n.a.createElement("p",{className:"text-info"},"About Us"),n.a.createElement("div",{className:"row-sm"},"Our Leadership"),n.a.createElement("div",{className:"row-sm"},"History"),n.a.createElement("div",{className:"row-sm"},"Alliances"),n.a.createElement("div",{className:"row-sm"},"Franchies")),n.a.createElement("div",{className:"col-sm"},n.a.createElement("p",{className:"text-info"},"Why Join"),n.a.createElement("div",{className:"row-sm"},"What to Expect"),n.a.createElement("div",{className:"row-sm"},"Our Stories"),n.a.createElement("div",{className:"row-sm"},"Find A Chapter"),n.a.createElement("div",{className:"row-sm"},"Contact Us")),n.a.createElement("div",{className:"col-sm"},n.a.createElement("p",{className:"text-info"},"Services"),n.a.createElement("div",{className:"row-sm"},"Risk and Financial Advisory"),n.a.createElement("div",{className:"row-sm"},"Audit and Assurance"),n.a.createElement("div",{className:"row-sm"},"Consulting"),n.a.createElement("div",{className:"row-sm"},"Tax"))))),n.a.createElement(p.c,{md:"6"},n.a.createElement("h5",{className:"title"},"Wana Connect ?"),n.a.createElement("ul",null,n.a.createElement("li",{className:"list-unstyled text-dark"},n.a.createElement("a",{href:"#!"},"Facebook")),n.a.createElement("li",{className:"list-unstyled"},n.a.createElement("a",{href:"#!"},"Twitter")),n.a.createElement("li",{className:"list-unstyled"},n.a.createElement("a",{href:"#!"},"Gmail")),n.a.createElement("li",{className:"list-unstyled"},n.a.createElement("a",{href:"#!"},"Apple")))))),n.a.createElement("div",{className:"footer-copyright text-center py-3"},n.a.createElement(p.d,{fluid:!0},"\xa9 ",(new Date).getFullYear()," Copyright: ",n.a.createElement("a",{href:"https://www.mdbootstrap.com"}," freakstore.com "))))},f=function(e){var t=e.title,a=void 0===t?"My Title":t,c=e.description,r=void 0===c?"My desription":c,o=(e.logo,e.className),l=void 0===o?"hello":o,s=e.children;return n.a.createElement("div",null,n.a.createElement(u,null),n.a.createElement("div",{className:""},n.a.createElement("div",{className:"jumbotron bg-dark text-white text-center"},n.a.createElement("h2",{className:"display-4"},a),n.a.createElement("p",{className:"lead"},r),d),n.a.createElement("div",{className:l},s)),n.a.createElement("footer",{className:""},n.a.createElement("div",{className:"container-fluid"},n.a.createElement(E,null))))},b=function(e){var t=e.product,a=t?"".concat(s,"/product/photo/").concat(t._id):"https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";return n.a.createElement("div",{className:"rounded border border-success p-2"},n.a.createElement("img",{src:a,alt:"photo",style:{maxHeight:"100%",maxWidth:"100%"},className:"mb-3 rounded"}))},g=a(3),h=function(e){var t=e.product,a=e.addtoCart,r=void 0===a||a,s=e.removeFromCart,m=void 0!==s&&s,i=e.setReload,u=void 0===i?function(e){return e}:i,d=e.reload,p=void 0===d?void 0:d,E=Object(c.useState)(!1),f=Object(l.a)(E,2),h=f[0],N=f[1],v=Object(c.useState)(t.count),j=Object(l.a)(v,2),y=(j[0],j[1],t?t.name:"A photo from pexels"),O=t?t.description:"Default description",w=t?t.price:"DEFAULT",x=function(){!function(e,t){var a=[];void 0!==typeof window&&(localStorage.getItem("cart")&&(a=JSON.parse(localStorage.getItem("cart"))),a.push(Object(g.a)(Object(g.a)({},e),{},{count:1})),localStorage.setItem("cart",JSON.stringify(a)),t())}(t,(function(){return N(!0)}))};return n.a.createElement("div",{className:"card text-white bg-dark border border-info "},n.a.createElement("div",{className:"card-header lead"},y),n.a.createElement("div",{className:"card-body"},function(e){if(e)return n.a.createElement(o.a,{to:"/cart"})}(h),n.a.createElement(b,{product:t}),n.a.createElement("p",{className:"lead bg-success font-weight-normal text-wrap"},O),n.a.createElement("p",{className:"btn btn-success rounded  btn-sm px-4"},"$ ",w),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},function(e){return e&&n.a.createElement("button",{onClick:x,className:"btn btn-block btn-outline-success mt-2 mb-2"},"Add to Cart")}(r)),n.a.createElement("div",{className:"col-12"},function(e){return e&&n.a.createElement("button",{onClick:function(){!function(e){var t=[];void 0!==typeof window&&(localStorage.getItem("cart")&&(t=JSON.parse(localStorage.getItem("cart"))),t.map((function(a,c){a._id===e&&t.splice(c,1)})),localStorage.setItem("cart",JSON.stringify(t)))}(t._id),u(!p)},className:"btn btn-block btn-outline-danger mt-2 mb-2"},"Remove from cart")}(m)))))};function N(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1],o=Object(c.useState)(!1),m=Object(l.a)(o,2),i=(m[0],m[1]),u=function(){fetch("".concat(s,"/products"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)})).then((function(e){e.error?i(e.error):r(e)}))};return Object(c.useEffect)((function(){u()}),[]),n.a.createElement(f,{title:"Home Page",description:"Welcome to the Store"},n.a.createElement("div",{className:"row text-center"},n.a.createElement("h1",{className:"text-white",style:{marginLeft:50}},"Crazy collections"),n.a.createElement("div",{className:"row"},a.map((function(e,t){return n.a.createElement("div",{key:t,className:"col-4 mb-4"},n.a.createElement(h,{product:e}))})))))}var v=a(13),j=function(){var e=Object(c.useState)({name:"",email:"",password:"",error:"",success:!1}),t=Object(l.a)(e,2),a=t[0],o=t[1],m=a.name,i=a.email,u=a.password,d=a.error,p=a.success,E=function(e){return function(t){o(Object(g.a)(Object(g.a)({},a),{},Object(v.a)({error:!1},e,t.target.value)))}},b=function(e){var t;e.preventDefault(),o(Object(g.a)(Object(g.a)({},a),{},{error:!1})),(t={name:m,email:i,password:u},fetch("".concat(s,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))).then((function(e){e.error?o(Object(g.a)(Object(g.a)({},a),{},{error:e.error,success:!1})):o(Object(g.a)(Object(g.a)({},a),{},{name:"",email:"",password:"",error:"",success:!0}))})).catch(console.log("Error in signup"))};return n.a.createElement(f,{title:"Sign up page",description:"A page for user to sign up!"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6 offset-sm-3 text-left"},n.a.createElement("div",{className:"alert alert-success",style:{display:p?"":"none"}},"New account was created successfully. Please",n.a.createElement(r.b,{to:"/signin"},"Login Here")))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6 offset-sm-3 text-left"},n.a.createElement("div",{className:"alert alert-danger",style:{display:d?"":"none"}},d))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6 offset-sm-3 text-left"},n.a.createElement("form",null,n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{className:"text-light"},"Name"),n.a.createElement("input",{className:"form-control",onChange:E("name"),type:"text",value:m})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{className:"text-light"},"Email"),n.a.createElement("input",{className:"form-control",onChange:E("email"),type:"email",value:i})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{className:"text-light"},"Password"),n.a.createElement("input",{onChange:E("password"),className:"form-control",type:"password",value:u})),n.a.createElement("button",{onClick:b,className:"btn btn-success btn-block"},"Submit")))))},y=function(){var e=Object(c.useState)({email:"",password:"",error:"",loading:!1,didRedirect:!1}),t=Object(l.a)(e,2),a=t[0],r=t[1],i=a.email,u=a.password,d=a.error,p=a.loading,E=a.didRedirect,b=m().user,h=function(e){return function(t){r(Object(g.a)(Object(g.a)({},a),{},Object(v.a)({error:!1},e,t.target.value)))}},N=function(e){e.preventDefault(),r(Object(g.a)(Object(g.a)({},a),{},{error:!1,loading:!0})),function(e){return fetch("".concat(s,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}({email:i,password:u}).then((function(e){e.error?r(Object(g.a)(Object(g.a)({},a),{},{error:e.error,loading:!1})):function(e,t){"undefined"!==typeof window&&(localStorage.setItem("jwt",JSON.stringify(e)),t())}(e,(function(){r(Object(g.a)(Object(g.a)({},a),{},{didRedirect:!0}))}))})).catch(console.log("signin request failed"))};return n.a.createElement(f,{title:"Sign In page",description:"A page for user to sign in!"},p&&n.a.createElement("div",{className:"alert alert-info"},n.a.createElement("h2",null,"Loading...")),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6 offset-sm-3 text-left"},n.a.createElement("div",{className:"alert alert-danger",style:{display:d?"":"none"}},d))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6 offset-sm-3 text-left"},n.a.createElement("form",null,n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{className:"text-light"},"Email"),n.a.createElement("input",{onChange:h("email"),value:i,className:"form-control",type:"email"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{className:"text-light"},"Password"),n.a.createElement("input",{onChange:h("password"),value:u,className:"form-control",type:"password"})),n.a.createElement("button",{onClick:N,className:"btn btn-success btn-block"},"Submit")))),E?b&&1===b.role?n.a.createElement(o.a,{to:"/admin/dashboard"}):n.a.createElement(o.a,{to:"/user/dashboard"}):m()?n.a.createElement(o.a,{to:"/"}):void 0)},O=a(22),w=function(e){var t=e.component,a=Object(O.a)(e,["component"]);return n.a.createElement(o.b,Object.assign({},a,{render:function(e){return m()&&1===m().user.role?n.a.createElement(t,e):n.a.createElement(o.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},x=function(e){var t=e.component,a=Object(O.a)(e,["component"]);return n.a.createElement(o.b,Object.assign({},a,{render:function(e){return m()?n.a.createElement(t,e):n.a.createElement(o.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},k=function(){var e=m().user,t=e.name,a=e.email;e.role;return n.a.createElement(f,{title:"Welcome to Freakstore",description:"You are at the right place",className:"container p-4"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-9"},n.a.createElement("div",{className:"card mb-4"},n.a.createElement("h4",{className:"card-header"},"User Information"),n.a.createElement("ul",{className:"list-group"},n.a.createElement("li",{className:"list-group-item"},n.a.createElement("span",{className:"badge badge-success mr-2"},"Name:")," ",t),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("span",{className:"badge badge-success mr-2"},"Email:")," ",a),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("span",{className:"badge badge-danger"},"User Area")))))))},C=function(){var e=m().user,t=e.name,a=e.email;e.role;return n.a.createElement(f,{title:"Welcome to admin area",description:"Manage all of your products here",className:"container bg-success p-4"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-3"},n.a.createElement("div",{className:"card"},n.a.createElement("h4",{className:"card-header bg-dark text-white"},"Admin Navigation"),n.a.createElement("ul",{className:"list-group"},n.a.createElement("li",{className:"list-group-item"},n.a.createElement(r.b,{to:"/admin/create/category",className:"nav-link text-success"},"Create Categories")),n.a.createElement("li",{className:"list-group-item"},n.a.createElement(r.b,{to:"/admin/categories",className:"nav-link text-success"},"Manage Categories")),n.a.createElement("li",{className:"list-group-item"},n.a.createElement(r.b,{to:"/admin/create/product",className:"nav-link text-success"},"Create Product")),n.a.createElement("li",{className:"list-group-item"},n.a.createElement(r.b,{to:"/admin/products",className:"nav-link text-success"},"Manage Products"))))),n.a.createElement("div",{className:"col-9"},n.a.createElement("div",{className:"card mb-4"},n.a.createElement("h4",{className:"card-header"},"Admin Information"),n.a.createElement("ul",{className:"list-group"},n.a.createElement("li",{className:"list-group-item"},n.a.createElement("span",{className:"badge badge-success mr-2"},"Name:")," ",t),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("span",{className:"badge badge-success mr-2"},"Email:")," ",a),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("span",{className:"badge badge-danger"},"Admin Area")))))))},S=function(){return fetch("".concat(s,"/categories"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},A=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),a=t[0],o=t[1],i=Object(c.useState)(!1),u=Object(l.a)(i,2),d=u[0],p=u[1],E=Object(c.useState)(!1),b=Object(l.a)(E,2),g=b[0],h=b[1],N=m(),v=N.user,j=N.token,y=function(e){p(""),o(e.target.value)},O=function(e){e.preventDefault(),p(""),h(!1),function(e,t,a){return fetch("".concat(s,"/category/create/").concat(e),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(a)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}(v._id,j,{name:a}).then((function(e){e.error?p(!0):(p(""),h(!0),o(""))}))};return n.a.createElement(f,{title:"Create a category here",description:"Add a new category for new tshirts",className:"container bg-info p-4"},n.a.createElement("div",{className:"row bg-white rounded"},n.a.createElement("div",{className:"col-md-8 offset-md-2"},function(){if(g)return n.a.createElement("h4",{className:"text-success"},"Category created successfully")}(),function(){if(d)return n.a.createElement("h4",{className:"text-success"},"Failed to create category")}(),n.a.createElement("form",null,n.a.createElement("div",{className:"form-group"},n.a.createElement("p",{className:"lead"},"Enter the category"),n.a.createElement("input",{type:"text",className:"form-control my-3",onChange:y,value:a,autoFocus:!0,required:!0,placeholder:"For Ex. Summer"}),n.a.createElement("button",{onClick:O,className:"btn btn-outline-info"},"Create Category"))),n.a.createElement("div",{className:"mt-5"},n.a.createElement(r.b,{className:"btn btn-sm btn-success mb-3",to:"/admin/dashboard"},"Admin Home")))))},P=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),a=t[0],o=t[1],s=m();s.user,s.token;return Object(c.useEffect)((function(){S().then((function(e){e.error?console.log(e.error):o(e)}))}),[]),n.a.createElement(f,{title:"Welcome admin",description:"Manage categories here"},n.a.createElement("h2",{className:"mb-4"},"All products:"),n.a.createElement(r.b,{className:"btn btn-info",to:"/admin/dashboard"},n.a.createElement("span",{className:""},"Admin Home")),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("h2",{className:"text-center text-white my-3"}),a.map((function(e,t){return n.a.createElement("h3",{className:"text-white",key:t},e.name)})),n.a.createElement("div",{className:"row text-center mb-2 "},n.a.createElement("div",{className:"col-4"},n.a.createElement("h3",{className:"text-white text-left"},"I write code")),n.a.createElement("div",{className:"col-4"},n.a.createElement(r.b,{className:"btn btn-success",to:"/admin/product/update/productId"},n.a.createElement("span",{className:""},"Update"))),n.a.createElement("div",{className:"col-4"},n.a.createElement("button",{onClick:function(){},className:"btn btn-danger"},"Delete"))))))},D=function(){var e=m(),t=e.user,a=e.token,o=Object(c.useState)({name:"",description:"",price:"",stock:"",photo:"",categories:[],category:"",loading:!1,error:"",createdProduct:"",getaRedirect:!1,formData:""}),i=Object(l.a)(o,2),u=i[0],d=i[1],p=u.name,E=u.description,b=u.price,h=u.stock,N=u.categories,j=(u.category,u.loading,u.error,u.createdProduct),y=(u.getaRedirect,u.formData);Object(c.useEffect)((function(){S().then((function(e){e.error?d(Object(g.a)(Object(g.a)({},u),{},{error:e.error})):d(Object(g.a)(Object(g.a)({},u),{},{categories:e,formData:new FormData}))}))}),[]);var O=function(e){e.preventDefault(),d(Object(g.a)(Object(g.a)({},u),{},{error:"",loading:!0})),function(e,t,a){return fetch("".concat(s,"/product/create/").concat(e),{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)},body:a}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}(t._id,a,y).then((function(e){e.error?d(Object(g.a)(Object(g.a)({},u),{},{error:e.error})):d(Object(g.a)(Object(g.a)({},u),{},{name:"",description:"",price:"",photo:"",stock:"",loading:!1,createdProduct:e.name}))}))},w=function(e){return function(t){var a="photo"===e?t.target.files[0]:t.target.value;y.set(e,a),d(Object(g.a)(Object(g.a)({},u),{},Object(v.a)({},e,a)))}};return n.a.createElement(f,{title:"Add a product here!",description:"Welcome to product creation section",className:"container bg-info p-4"},n.a.createElement(r.b,{to:"/admin/dashboard",className:"btn btn-md btn-dark mb-3"},"Admin Home"),n.a.createElement("div",{className:"row bg-dark text-white rounded"},n.a.createElement("div",{className:"col-md-8 offset-md-2"},n.a.createElement("div",{className:"alert alert-success mt-3",style:{display:j?"":"none"}},n.a.createElement("h4",null,j," created successfully")),n.a.createElement("form",null,n.a.createElement("span",null,"Post photo"),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{className:"btn btn-block btn-success"},n.a.createElement("input",{onChange:w("photo"),type:"file",name:"photo",accept:"image",placeholder:"choose a file"}))),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{onChange:w("name"),name:"photo",className:"form-control",placeholder:"Name",value:p})),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{onChange:w("description"),name:"photo",className:"form-control",placeholder:"Description",value:E})),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{onChange:w("price"),type:"number",className:"form-control",placeholder:"Price",value:b})),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{onChange:w("category"),className:"form-control",placeholder:"Category"},n.a.createElement("option",null,"Select"),N&&N.map((function(e,t){return n.a.createElement("option",{key:t,value:e._id},e.name)})))),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{onChange:w("stock"),type:"number",className:"form-control",placeholder:"Stock",value:h})),n.a.createElement("button",{type:"submit",onClick:O,className:"btn btn-outline-success mb-3"},"Create Product")))))},F=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),a=t[0],o=t[1],i=m(),u=i.user,d=i.token,p=function(){fetch("".concat(s,"/products"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)})).then((function(e){e.error?console.log(e.error):o(e)}))};Object(c.useEffect)((function(){p()}),[]);var E=function(e){(function(e,t,a){return fetch("".concat(s,"/product/").concat(e,"/").concat(t),{method:"DELETE",headers:{Accept:"application/json",Authorization:"Bearer ".concat(a)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})(e,u._id,d).then((function(e){e.error?console.log(e.error):p()}))};return n.a.createElement(f,{title:"Welcome admin",description:"Manage products here"},n.a.createElement("h2",{className:"mb-4"},"All products:"),n.a.createElement(r.b,{className:"btn btn-info",to:"/admin/dashboard"},n.a.createElement("span",{className:""},"Admin Home")),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("h2",{className:"text-center text-white my-3"},"Total 3 products"),a.map((function(e,t){return n.a.createElement("div",{key:t,className:"row text-center mb-2 "},n.a.createElement("div",{className:"col-4"},n.a.createElement("h3",{className:"text-white text-left"},e.name)),n.a.createElement("div",{className:"col-4"},n.a.createElement(r.b,{className:"btn btn-success",to:"/admin/product/update/".concat(e._id)},n.a.createElement("span",{className:""},"Update"))),n.a.createElement("div",{className:"col-4"},n.a.createElement("button",{onClick:function(){E(e._id)},className:"btn btn-danger"},"Delete")))})))))},I=function(e){var t=e.match,a=m(),o=a.user,i=a.token,u=Object(c.useState)({name:"",description:"",price:"",stock:"",photo:"",categories:[],category:"",loading:!1,error:"",createdProduct:"",getaRedirect:!1,formData:""}),d=Object(l.a)(u,2),p=d[0],E=d[1],b=p.name,h=p.description,N=p.price,j=p.stock,y=p.categories,O=(p.category,p.loading,p.error,p.createdProduct),w=(p.getaRedirect,p.formData),x=function(e){(function(e){return fetch("".concat(s,"/product/").concat(e),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})(e).then((function(e){e.error?E(Object(g.a)(Object(g.a)({},p),{},{error:e.error})):(k(),E(Object(g.a)(Object(g.a)({},p),{},{name:e.name,description:e.description,price:e.price,category:e.category._id,stock:e.stock,formData:new FormData})))}))},k=function(){S().then((function(e){e.error?E(Object(g.a)(Object(g.a)({},p),{},{error:e.error})):E({categories:e,formData:new FormData})}))};Object(c.useEffect)((function(){x(t.params.productId)}),[]);var C=function(e){e.preventDefault(),E(Object(g.a)(Object(g.a)({},p),{},{error:"",loading:!0})),function(e,t,a,c){return fetch("".concat(s,"/product/").concat(e,"/").concat(t),{method:"PUT",headers:{Accept:"application/json",Authorization:"Bearer ".concat(a)},body:c}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}(t.params.productId,o._id,i,w).then((function(e){e.error?E(Object(g.a)(Object(g.a)({},p),{},{error:e.error})):E(Object(g.a)(Object(g.a)({},p),{},{name:"",description:"",price:"",photo:"",stock:"",loading:!1,createdProduct:e.name}))}))},A=function(e){return function(t){var a="photo"===e?t.target.files[0]:t.target.value;w.set(e,a),E(Object(g.a)(Object(g.a)({},p),{},Object(v.a)({},e,a)))}};return n.a.createElement(f,{title:"Add a product here!",description:"Welcome to product creation section",className:"container bg-info p-4"},n.a.createElement(r.b,{to:"/admin/dashboard",className:"btn btn-md btn-dark mb-3"},"Admin Home"),n.a.createElement("div",{className:"row bg-dark text-white rounded"},n.a.createElement("div",{className:"col-md-8 offset-md-2"},n.a.createElement("div",{className:"alert alert-success mt-3",style:{display:O?"":"none"}},n.a.createElement("h4",null,O," updated successfully")),n.a.createElement("form",null,n.a.createElement("span",null,"Post photo"),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{className:"btn btn-block btn-success"},n.a.createElement("input",{onChange:A("photo"),type:"file",name:"photo",accept:"image",placeholder:"choose a file"}))),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{onChange:A("name"),name:"photo",className:"form-control",placeholder:"Name",value:b})),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{onChange:A("description"),name:"photo",className:"form-control",placeholder:"Description",value:h})),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{onChange:A("price"),type:"number",className:"form-control",placeholder:"Price",value:N})),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{onChange:A("category"),className:"form-control",placeholder:"Category"},n.a.createElement("option",null,"Select"),y&&y.map((function(e,t){return n.a.createElement("option",{key:t,value:e._id},e.name)})))),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{onChange:A("stock"),type:"number",className:"form-control",placeholder:"Stock",value:j})),n.a.createElement("button",{type:"submit",onClick:C,className:"btn btn-outline-success mb-3"},"Update Product")))))},T=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1],o=Object(c.useState)(!1),s=Object(l.a)(o,2),i=s[0],u=s[1];Object(c.useEffect)((function(){r(function(){if(void 0!==typeof window&&localStorage.getItem("cart"))return JSON.parse(localStorage.getItem("cart"))}())}),[i]);return n.a.createElement(f,{title:"Cart Page",description:"Ready to checkout"},n.a.createElement("div",{className:"row text-center"},n.a.createElement("div",{className:"col-6"},m()&&n.a.createElement("div",null,a.map((function(e,t){return n.a.createElement(h,{key:t,product:e,removeFromCart:!0,addtoCart:!1,setReload:u,reload:i})}))))))},J=function(){return n.a.createElement(r.a,null,n.a.createElement(o.d,null,n.a.createElement(o.b,{path:"/",exact:!0,component:N}),n.a.createElement(o.b,{path:"/signup",exact:!0,component:j}),n.a.createElement(o.b,{path:"/signin",exact:!0,component:y}),n.a.createElement(x,{path:"/cart",exact:!0,component:T}),n.a.createElement(x,{path:"/user/dashboard",exact:!0,component:k}),n.a.createElement(w,{path:"/admin/dashboard",exact:!0,component:C}),n.a.createElement(w,{path:"/admin/create/category",exact:!0,component:A}),n.a.createElement(w,{path:"/admin/categories",exact:!0,component:P}),n.a.createElement(w,{path:"/admin/create/product",exact:!0,component:D}),n.a.createElement(w,{path:"/admin/products",exact:!0,component:F}),n.a.createElement(w,{path:"/admin/product/update/:productId",exact:!0,component:I})))},R=a(15);a.n(R).a.render(n.a.createElement(J,null),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.bd63b653.chunk.js.map