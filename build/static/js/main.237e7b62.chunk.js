(this["webpackJsonpreact-35-module-1"]=this["webpackJsonpreact-35-module-1"]||[]).push([[0],{113:function(e,t,n){},145:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(31),s=n.n(c),i=(n(113),n(95)),o=n.n(i),l=n(8),u=n(34),j=n.n(u),b=n(70),p=n.n(b),d=n(18),h=Object(d.b)("contacts/filter"),f=n(14),m=n(63),O=function(e){return e.contacts.items},g=function(e){return e.contacts.filter},x=Object(m.a)([O,g],(function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))})),v=n(1);var _=function(){var e=Object(f.c)(g),t=Object(f.b)();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(v.Fragment,{}),Object(v.jsx)("div",{className:p.a.wrapper,children:Object(v.jsxs)("label",{className:p.a.label,children:["Find contacts by name",Object(v.jsx)("input",{className:p.a.input,type:"text",name:"name",value:e,onChange:function(e){return t(h(e.target.value))}})]})})]})},C=n(43),w=n.n(C),k=n(24),L=n.n(k),y=n(40),N=n(29),I=n.n(N);I.a.defaults.baseURL="https://connections-api.herokuapp.com";var S=Object(d.c)("contacts/fetchContacts",function(){var e=Object(y.a)(L.a.mark((function e(t,n){var a,r,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.rejectWithValue,e.prev=1,e.next=4,I.a.get("/contacts");case 4:return r=e.sent,c=r.data,e.abrupt("return",c);case 9:e.prev=9,e.t0=e.catch(1),a(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),V=Object(d.c)("contacts/addContact",function(){var e=Object(y.a)(L.a.mark((function e(t,n){var a,r,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.rejectWithValue,e.prev=1,e.next=4,I.a.post("/contacts",t);case 4:return r=e.sent,c=r.data,e.abrupt("return",c);case 9:e.prev=9,e.t0=e.catch(1),a(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),W=Object(d.c)("contacts/deleteContact",function(){var e=Object(y.a)(L.a.mark((function e(t,n){var a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.rejectWidthValue,e.prev=1,e.next=4,I.a.delete("/contacts/".concat(t));case 4:if(200!==e.sent.status){e.next=9;break}return e.abrupt("return",t);case 9:throw new Error({message:"error"});case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),a(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t,n){return e.apply(this,arguments)}}()),F={addContacts:V,deleteContacts:W,fetchContacts:S},R=n(38),A=function(){var e=Object(f.c)(x),t=Object(f.b)();return Object(a.useEffect)((function(){t(F.fetchContacts())}),[t]),Object(v.jsx)("div",{className:w.a.listWrapper,children:Object(v.jsx)("ul",{className:w.a.contactsList,children:e.map((function(e){var n=e.name,a=e.number,r=e.id;return Object(v.jsxs)("ol",{className:w.a.item,children:[Object(v.jsxs)("div",{className:w.a.textWrapper,children:[Object(v.jsxs)("p",{className:w.a.text,children:[n,":"]}),Object(v.jsx)("p",{className:w.a.text,children:a})]}),Object(v.jsx)("button",{className:w.a.button,type:"button",onClick:function(){return t(F.deleteContacts(r,R.b.success("Contact ".concat(n," has been deleted successfully!"))))},children:"Delete"})]},r)}))})})};var z=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),s=Object(l.a)(c,2),i=s[0],o=s[1],u=Object(f.c)(O),b=Object(f.b)(),p=function(e){switch(e.target.name){case"name":r(e.target.value);break;case"number":o(e.target.value);break;default:return}},d=function(){r(""),o("")};return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{className:j.a.formWrapper,children:[Object(v.jsx)("h1",{className:j.a.title,children:"Phonebook"}),Object(v.jsxs)("form",{className:j.a.form,onSubmit:function(e){if(e.preventDefault(),u.find((function(e){return e.name.toLowerCase()===n.toLowerCase()})))return alert("This contact has already been added to the list");b(F.addContacts({name:n,number:i})),R.b.success("Contact ".concat(n," has been added to the list~")),d()},children:[Object(v.jsxs)("div",{className:j.a.labelWrapper,children:[Object(v.jsxs)("label",{className:j.a.label,children:["Name",Object(v.jsx)("input",{className:j.a.input,value:n,type:"text",name:"name",placeholder:"Name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",onChange:p})]}),Object(v.jsxs)("label",{className:j.a.label,children:["Number",Object(v.jsx)("input",{className:j.a.input,type:"tel",value:i,name:"number",placeholder:"Number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",onChange:p})]})]}),Object(v.jsx)("button",{className:j.a.button,children:"Add contact"})]})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{className:j.a.title,children:"Contacts"}),Object(v.jsx)(_,{}),Object(v.jsx)(A,{})]})]})},U=n(9),E={container:{minHeight:"calc(100vh - 50px)",display:"flex",alignItems:"center",justifyContent:"center"},title:{fontWeight:500,fontSize:48,textAlign:"center"}},T=function(){return Object(v.jsx)("div",{style:E.container,children:Object(v.jsx)("h1",{style:E.title,children:"Welcome to phonebook "})})};I.a.defaults.baseURL="https://connections-api.herokuapp.com";var D=function(e){I.a.defaults.headers.common.Authorization="Bearer ".concat(e)},M=function(){I.a.defaults.headers.common.Authorization=""},B=Object(d.c)("auth/register",function(){var e=Object(y.a)(L.a.mark((function e(t,n){var a,r,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.rejectWithValue,e.prev=1,e.next=4,I.a.post("/users/signup",t);case 4:return r=e.sent,c=r.data,D(c.token),e.abrupt("return",c);case 10:e.prev=10,e.t0=e.catch(1),a(R.b.error("Try again please!"));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}()),Z=Object(d.c)("auth/login",function(){var e=Object(y.a)(L.a.mark((function e(t,n){var a,r,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.rejectWithValue,e.prev=1,e.next=4,I.a.post("/users/login",t);case 4:return r=e.sent,c=r.data,D(c.token),e.abrupt("return",c);case 10:e.prev=10,e.t0=e.catch(1),a(R.b.error("Try again please!"));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}()),J=Object(d.c)("auth/logout",function(){var e=Object(y.a)(L.a.mark((function e(t,n){var a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.rejectWithValue,e.prev=1,e.next=4,I.a.post("/users/logout");case 4:M(),e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",a(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}()),q=Object(d.c)("auth/refresh",function(){var e=Object(y.a)(L.a.mark((function e(t,n){var a,r,c,s;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.getState(),null!==(r=a.auth.token)){e.next=4;break}return e.abrupt("return",n.rejectWithValue());case 4:return D(r),e.prev=5,e.next=8,I.a.get("/users/current");case 8:return c=e.sent,s=c.data,e.abrupt("return",s);case 13:return e.prev=13,e.t0=e.catch(5),e.abrupt("return",n.rejectWithValue(e.t0.message));case 16:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(t,n){return e.apply(this,arguments)}}()),X={register:B,logIn:Z,logOut:J,refreshCurrentUser:q},G=n(35),H=n.n(G),P={getIsLoggedIn:function(e){return e.auth.isLoggedIn},getUserName:function(e){return e.auth.user.name},getIsRefreshingCurrentUser:function(e){return e.auth.isRefreshing},getToken:function(e){return e.auth.token},getisLoading:function(e){return e.auth.isLoading}},Y=n(26);function $(){var e=Object(f.b)(),t=Object(a.useState)(""),n=Object(l.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(""),i=Object(l.a)(s,2),o=i[0],u=i[1],j=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"email":return c(a);case"password":return u(a);default:return}};return!Object(f.c)(P.getIsLoggedIn)&&Object(v.jsxs)("div",{className:H.a.container,children:[Object(v.jsx)("h1",{className:H.a.title,children:"Sign in"}),Object(v.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(X.logIn({email:r,password:o})),c(""),u("")},autoComplete:"off",children:[Object(v.jsxs)("div",{className:H.a.inputs,children:[Object(v.jsxs)("label",{className:H.a.label,children:["E-mail",Object(v.jsx)("input",{className:H.a.input,type:"email",name:"email",value:r,onChange:j,autoComplete:"off"})]}),Object(v.jsxs)("label",{className:H.a.label,children:["Password",Object(v.jsx)("input",{className:H.a.input,type:"password",name:"password",value:o,onChange:j,minLength:"8",autoComplete:"off"})]})]}),Object(v.jsx)("button",{type:"submit",className:H.a.button,children:"Log in"})]}),Object(v.jsxs)("p",{className:H.a.text,children:["Don't have an account?",Object(v.jsx)(Y.b,{to:"/register",className:H.a.link,children:"Sign up"})]})]})}var K=n(30),Q=n.n(K);function ee(){var e=Object(f.b)(),t=Object(a.useState)(""),n=Object(l.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(""),i=Object(l.a)(s,2),o=i[0],u=i[1],j=Object(a.useState)(""),b=Object(l.a)(j,2),p=b[0],d=b[1],h=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":return c(a);case"email":return u(a);case"password":return d(a);default:return}};return Object(v.jsxs)("div",{className:Q.a.container,children:[Object(v.jsx)("h1",{className:Q.a.title,children:"Sign Up"}),Object(v.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(X.register({name:r,email:o,password:p})),c(""),u(""),d("")},autoComplete:"off",children:[Object(v.jsxs)("div",{className:Q.a.inputs,children:[Object(v.jsxs)("label",{className:Q.a.label,children:["Name",Object(v.jsx)("input",{className:Q.a.input,type:"text",name:"name",value:r,onChange:h,autoComplete:"off"})]}),Object(v.jsxs)("label",{className:Q.a.label,children:["E-mail",Object(v.jsx)("input",{className:Q.a.input,type:"email",name:"email",value:o,onChange:h,autoComplete:"off"})]}),Object(v.jsxs)("label",{className:Q.a.label,children:["Password",Object(v.jsx)("input",{className:Q.a.input,type:"password",name:"password",value:p,onChange:h,minLength:"8",autoComplete:"off"})]})]}),Object(v.jsx)("button",{className:Q.a.button,type:"submit",children:"Register"})]}),Object(v.jsxs)("p",{className:Q.a.text,children:["Already have an account?",Object(v.jsx)(Y.b,{to:"/login",className:Q.a.link,children:"Sign in"})]})]})}var te=n(190),ne=n(189),ae=n(191),re=n(192),ce=n(193),se=n(99),ie=n.n(se),oe=n(186),le=n(184),ue={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"#2A363B"},activeLink:{color:"#E84A5F"}},je=function(){var e=Object(f.c)(P.getIsLoggedIn);return Object(v.jsxs)("nav",{children:[Object(v.jsx)(Y.b,{to:"/",style:ue.link,children:"Home"}),e&&Object(v.jsx)(Y.b,{to:"/contacts",style:ue.link,children:"Contacts"})]})},be=n(188),pe=n(97),de=n.n(pe),he={container:{display:"flex",alignItems:"center"},avatar:{marginRight:10},name:{fontWeight:700,marginRight:12}};function fe(){var e=Object(f.b)(),t=Object(f.c)(P.getUserName);return Object(v.jsxs)("div",{style:he.container,children:[Object(v.jsx)(be.a,{src:"/broken-image.jpg",style:he.avatar}),Object(v.jsxs)("span",{style:he.name,children:["Welcome, ",t]}),Object(v.jsx)("button",{className:de.a.btn,type:"button",onClick:function(){return e(X.logOut())},children:"Log out"})]})}var me={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"#2A363B"},activeLink:{color:"#E84A5F"}};function Oe(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(Y.b,{to:"/register",style:me.link,children:"Sign Up"}),Object(v.jsx)(Y.b,{to:"/login",style:me.link,children:"Sign In"})]})}function ge(){var e=Object(f.c)(P.getIsLoggedIn),t=a.useState(!0),n=Object(l.a)(t,2),r=n[0],c=(n[1],a.useState(null)),s=Object(l.a)(c,2),i=s[0],o=s[1],u=function(){o(null)};return Object(v.jsx)(ne.a,{sx:{flexGrow:1},children:Object(v.jsx)(te.a,{position:"static",children:Object(v.jsxs)(ae.a,{children:[Object(v.jsx)(re.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:Object(v.jsx)(je,{})}),r&&Object(v.jsx)("div",{children:e?Object(v.jsx)(oe.a,{onClick:u,children:Object(v.jsx)(fe,{})}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(ce.a,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){o(e.currentTarget)},color:"inherit",children:Object(v.jsx)(ie.a,{})}),Object(v.jsx)(le.a,{id:"menu-appbar",anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(i),onClose:u,children:Object(v.jsx)(oe.a,{onClick:u,children:Object(v.jsx)(Oe,{})})})]})})]})})})}function xe(e){var t=e.isLoggedIn,n=e.component;return Object(v.jsx)(v.Fragment,{children:t?Object(v.jsx)(n,{}):Object(v.jsx)(U.a,{to:"/login"})})}function ve(e){var t=e.isLoggedIn,n=e.component,a=e.restricted,r=void 0!==a&&a,c=(e.redirectTo,t&&r);return Object(v.jsx)(v.Fragment,{children:c?Object(v.jsx)(U.a,{to:"/contacts"}):Object(v.jsx)(n,{})})}n(142);var _e=n(103),Ce={spinner:{display:"flex",alignItems:"center",marginBottom:10,fontSize:24}};var we=function(){return Object(v.jsx)("div",{role:"alert",children:Object(v.jsxs)("div",{style:Ce.spinner,children:[Object(v.jsx)(_e.a,{size:"32",className:"icon-spin"}),"Loading..."]})})};var ke,Le,ye=function(){var e=Object(f.b)(),t=Object(f.c)(P.getIsLoggedIn),n=Object(f.c)(P.getIsRefreshingCurrentUser),r=Object(f.c)(P.getToken);return Object(a.useEffect)((function(){r&&e(X.refreshCurrentUser())}),[e,r]),Object(v.jsxs)("div",{className:o.a.App,children:[n?Object(v.jsx)(we,{}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(ge,{}),Object(v.jsx)(a.Suspense,{fallback:Object(v.jsx)(we,{}),children:Object(v.jsxs)(U.d,{children:[Object(v.jsx)(U.b,{path:"/",element:Object(v.jsx)(ve,{isLoggedIn:t,component:T})}),Object(v.jsx)(U.b,{path:"/register",element:Object(v.jsx)(ve,{isLoggedIn:t,component:ee,restricted:!0})}),Object(v.jsx)(U.b,{path:"/login",element:Object(v.jsx)(ve,{isLoggedIn:t,component:$,redirectTo:"/contacts",restricted:!0})}),Object(v.jsx)(U.b,{path:"/contacts",element:Object(v.jsx)(xe,{isLoggedIn:t,component:z})})]})})]}),Object(v.jsx)(R.a,{autoClose:3e3})]})},Ne=n(6),Ie=n(23),Se=n(22),Ve=F.addContacts,We=F.deleteContacts,Fe=F.fetchContacts,Re=Object(d.d)([],(ke={},Object(Ne.a)(ke,Fe.fulfilled,(function(e,t){return t.payload})),Object(Ne.a)(ke,Ve.fulfilled,(function(e,t){var n=t.payload;return[].concat(Object(Ie.a)(e),[n])})),Object(Ne.a)(ke,We.fulfilled,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),ke)),Ae=Object(d.d)("",Object(Ne.a)({},h,(function(e,t){return t.payload}))),ze=Object(Se.b)({items:Re,filter:Ae}),Ue=n(41),Ee=n(100),Te=n.n(Ee),De=Object(d.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1,isRefreshing:!1,isLoading:!1},extraReducers:(Le={},Object(Ne.a)(Le,X.register.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(Ne.a)(Le,X.logIn.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(Ne.a)(Le,X.logOut.fulfilled,(function(e,t){e.user={name:null,email:null},e.token=null,e.isLoggedIn=!1})),Object(Ne.a)(Le,X.logOut.rejected,(function(e,t){e.user={name:null,email:null},e.token=null,e.isLoggedIn=!1})),Object(Ne.a)(Le,X.refreshCurrentUser.pending,(function(e){e.isRefreshing=!0,e.isLoading=!0})),Object(Ne.a)(Le,X.refreshCurrentUser.fulfilled,(function(e,t){e.user=t.payload,e.isLoggedIn=!0,e.isRefreshing=!1,e.isLoading=!1})),Object(Ne.a)(Le,X.refreshCurrentUser.rejected,(function(e){e.isRefreshing=!1})),Le)}).reducer,Me={key:"auth",storage:Te.a,whitelist:["token"]},Be=Object(d.a)({reducer:{auth:Object(Ue.g)(Me,De),contacts:ze},middleware:function(e){return e({serializableCheck:{ignoredActions:[Ue.a,Ue.f,Ue.b,Ue.c,Ue.d,Ue.e]}})},devTools:!1}),Ze=Object(Ue.h)(Be),Je=n(101);s.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(f.a,{store:Be,children:Object(v.jsx)(Je.a,{persistor:Ze,children:Object(v.jsx)(Y.a,{children:Object(v.jsx)(ye,{})})})})}),document.getElementById("root"))},30:function(e,t,n){e.exports={container:"RegisterView_container__3FbzC",title:"RegisterView_title__1EN1f",inputs:"RegisterView_inputs__2wFoh",text:"RegisterView_text__2Et-g",link:"RegisterView_link__ySAmT",label:"RegisterView_label__3EOGS",input:"RegisterView_input__1f9tv",button:"RegisterView_button__21s8I"}},34:function(e,t,n){e.exports={title:"ContactForm_title__1RIHc",formWrapper:"ContactForm_formWrapper__IlJ9U",labelWrapper:"ContactForm_labelWrapper__2MfL0",form:"ContactForm_form__3zVLS",label:"ContactForm_label__Z97D6",input:"ContactForm_input__CJXAl",button:"ContactForm_button__3xRXL"}},35:function(e,t,n){e.exports={text:"LoginView_text__3x_9s",link:"LoginView_link__3Y160",container:"LoginView_container__33qtv",title:"LoginView_title__1v3jX",inputs:"LoginView_inputs__VC1lW",label:"LoginView_label__3TaWx",input:"LoginView_input__2aDMh",button:"LoginView_button__1wlSz"}},43:function(e,t,n){e.exports={item:"ContactList_item__6sM8D",textWrapper:"ContactList_textWrapper__2JZgh",title:"ContactList_title__24AMn",text:"ContactList_text__1x8xN",button:"ContactList_button__28ppz"}},70:function(e,t,n){e.exports={label:"Filter_label__ILI0F",input:"Filter_input__1sZzL",wrapper:"Filter_wrapper__1IqqT"}},95:function(e,t,n){e.exports={App:"App_App__F-nXy",title:"App_title__Leqx5"}},97:function(e,t,n){e.exports={btn:"UserMenu_btn__4ox4d"}}},[[145,1,2]]]);
//# sourceMappingURL=main.237e7b62.chunk.js.map