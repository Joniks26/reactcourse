(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,function(e,s,t){e.exports={nav:"Navbar_nav__2imOE",item:"Navbar_item__zmMk4",activeLink:"Navbar_activeLink__3etBE"}},,function(e,s,t){e.exports={dialogs:"Dialogs_dialogs__2xRSA",dialogsItems:"Dialogs_dialogsItems__2sNe2",active:"Dialogs_active__2sQhs",messages:"Dialogs_messages__1w_Up",message:"Dialogs_message__1xIDh"}},,,function(e,s,t){e.exports={item:"Post_item__ihtu9",content:"Post_content__1RpGJ",avat:"Post_avat__3hcfr",like:"Post_like__oViQh",likee:"Post_likee__3kIjn"}},function(e,s,t){e.exports={postsBlock:"MyPosts_postsBlock__2ifKf",posts:"MyPosts_posts__3tZ1c"}},,,,,function(e,s,t){e.exports={item:"ProfileInfo_item__2oxPX",ava:"ProfileInfo_ava__K96Gt",open:"ProfileInfo_open__2l0t7"}},,,function(e,s,t){e.exports={header:"Header_header__1VCKf"}},,,,,,,function(e,s,t){},function(e,s,t){},,,,,,function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){"use strict";t.r(s);var a=t(0),i=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,40)).then((function(s){var t=s.getCLS,a=s.getFID,i=s.getFCP,n=s.getLCP,c=s.getTTFB;t(e),a(e),i(e),n(e),c(e)}))},n=function(){console.log("state changed")},c={profilePage:{posts:[{id:1,message:"HI, how are you?",likes:12},{id:2,message:"It's my first post!",likes:111}],newPostText:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442"},messagesPage:{dialogs:[{id:1,name:"Smems"},{id:2,name:"Bled"},{id:3,name:"NoName"},{id:4,name:"Anonimus"},{id:5,name:"Snowman"}],messages:[{id:1,message:"Hi"},{id:2,message:"How are you"},{id:3,message:"Im OK"},{id:4,message:"And you"},{id:5,message:"Im fine"}]}};window.state=c;var o=function(){var e={id:3,message:c.profilePage.newPostText,likes:0};c.profilePage.posts.push(e),c.profilePage.newPostText="",n(c)},r=function(e){c.profilePage.newPostText=e,n(c)},d=c,l=t(1),j=t.n(l),m=t(20),u=t.n(m),x=(t(28),t(29),t(21)),g=t.n(x),p=function(){return Object(a.jsx)("nav",{className:g.a.header,children:Object(a.jsx)("img",{src:"https://avatars1.githubusercontent.com/u/9919?s=200&v=4"})})},b=t(7),f=t.n(b),v=t(8),h=function(){return Object(a.jsxs)("nav",{className:f.a.nav,children:[Object(a.jsx)("div",{className:f.a.item,children:Object(a.jsx)(v.b,{to:"/profile",activeClassName:f.a.activeLink,children:"Profile"})}),Object(a.jsx)("div",{className:f.a.item,children:Object(a.jsx)(v.b,{to:"/dialogs",activeClassName:f.a.activeLink,children:"Messages"})}),Object(a.jsx)("div",{className:f.a.item,children:Object(a.jsx)(v.b,{to:"/news",activeClassName:f.a.activeLink,children:"News"})}),Object(a.jsx)("div",{className:f.a.item,children:Object(a.jsx)(v.b,{to:"/music",activeClassName:f.a.activeLink,children:"Music"})}),Object(a.jsx)("div",{className:f.a.item,children:Object(a.jsx)(v.b,{to:"/settings",activeClassName:f.a.activeLink,children:"Settings"})})]})},O=(t(35),t(13)),_=t.n(O),P=t(12),N=t.n(P),w=function(e){return Object(a.jsxs)("div",{className:N.a.item,children:[Object(a.jsx)("img",{className:N.a.avat,src:"https://cdn.shopify.com/s/files/1/0023/8469/1252/products/LED-Tiger_5000x.jpg?v=1587676083"}),e.message,Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{className:N.a.likee,src:"https://cdn.worldvectorlogo.com/logos/facebook-like.svg"}),Object(a.jsx)("span",{className:N.a.like,children:e.likes})]})]})},k=function(e){var s=e.posts.map((function(e){return Object(a.jsx)(w,{message:e.message,likes:e.likes})})),t=j.a.createRef();return Object(a.jsxs)("div",{className:_.a.content,children:[Object(a.jsx)("div",{className:_.a.postsBlock,children:Object(a.jsx)("h3",{children:"My posts"})}),Object(a.jsx)("div",{children:Object(a.jsx)("textarea",{onChange:function(){var s=t.current.value;e.updateNewPostText(s)},ref:t,value:e.newPostText})}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{onClick:function(){e.addPost()},children:"Add Post"})}),Object(a.jsx)("div",{className:_.a.posts,children:s})]})},T=t(18),I=t.n(T),y=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:Object(a.jsx)("img",{className:I.a.open,src:"https://www.spellbrand.com/images/blog/images/neon-logo-designs.jpg"})}),Object(a.jsx)("div",{children:Object(a.jsx)("img",{className:I.a.ava,src:"https://cdn.shopify.com/s/files/1/0023/8469/1252/products/LED-Tiger_5000x.jpg?v=1587676083"})})]})},C=function(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)(y,{}),Object(a.jsx)(k,{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText,updateNewPostText:e.updateNewPostText,addPost:e.addPost})]})},L=t(9),D=t.n(L),B=function(e){var s="/dialogs/"+e.id;return Object(a.jsx)("div",{className:D.a.dialog+" "+D.a.active,children:Object(a.jsx)(v.b,{to:s,children:e.name})})},M=function(e){return Object(a.jsx)("div",{className:D.a.Dialog,children:e.message})},S=function(e){var s=e.state.dialogs.map((function(e){return Object(a.jsx)(B,{name:e.name,id:e.id})})),t=e.state.messages.map((function(e){return Object(a.jsx)(M,{message:e.message})}));return Object(a.jsxs)("div",{className:D.a.dialogs,children:[Object(a.jsx)("div",{className:D.a.dialogsItems,children:s}),Object(a.jsx)("div",{className:D.a.messages,children:t})]})},E=(t(36),function(e){return Object(a.jsx)("div",{children:"Music"})}),A=(t(37),function(e){return Object(a.jsx)("div",{children:"News"})}),F=(t(38),function(e){return Object(a.jsx)("div",{children:"Settings"})}),H=t(2),K=function(e){return Object(a.jsxs)("div",{className:"app-wrapper",children:[Object(a.jsx)(p,{}),Object(a.jsx)(h,{}),Object(a.jsxs)("div",{className:"app-wrapper-content",children:[Object(a.jsx)(H.a,{path:"/profile",render:function(){return Object(a.jsx)(C,{profilePage:e.state.profilePage,addPost:e.addPost,updateNewPostText:e.updateNewPostText})}}),Object(a.jsx)(H.a,{path:"/dialogs",render:function(){return Object(a.jsx)(S,{state:e.state.messagesPage})}}),Object(a.jsx)(H.a,{path:"/news",render:function(){return Object(a.jsx)(A,{})}}),Object(a.jsx)(H.a,{path:"/music",render:function(){return Object(a.jsx)(E,{})}}),Object(a.jsx)(H.a,{path:"/settings",render:function(){return Object(a.jsx)(F,{})}})]})]})},J=function(e){u.a.render(Object(a.jsx)(v.a,{children:Object(a.jsx)(K,{state:e,addPost:o,updateNewPostText:r})}),document.getElementById("root"))};J(d),n=J,i()}],[[39,1,2]]]);
//# sourceMappingURL=main.af3d7a88.chunk.js.map