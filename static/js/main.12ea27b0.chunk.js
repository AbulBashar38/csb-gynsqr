(this["webpackJsonpreact-router-practice"]=this["webpackJsonpreact-router-practice"]||[]).push([[0],{310:function(e,t,c){},311:function(e,t,c){"use strict";c.r(t);var n=c(0),j=c(148),s=c(32),r=c(4),a=c(313),i=c(317),h=c(162),o=c(163),d=c(76),b=c(72),O=c(165),u=c(3);function l(){return Object(u.jsxs)(a.a,{width:730,height:250,data:[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}],margin:{top:5,right:30,left:20,bottom:5},children:[Object(u.jsx)(i.a,{strokeDasharray:"3 3"}),Object(u.jsx)(h.a,{dataKey:"name"}),Object(u.jsx)(o.a,{}),Object(u.jsx)(d.a,{}),Object(u.jsx)(b.a,{}),Object(u.jsx)(O.a,{type:"monotone",dataKey:"pv",stroke:"#8884d8"}),Object(u.jsx)(O.a,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"})]})}function x(){return Object(u.jsx)("div",{children:Object(u.jsx)("h1",{children:"wellcome this is Home page"})})}function m(){return Object(u.jsx)("div",{children:Object(u.jsx)("h1",{children:"This is Shop"})})}function p(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"this page is not found"}),Object(u.jsx)("h4",{children:"404"})]})}c(310);var f=c(9),v=c(319);function g(e){var t=e.friend,c=t.id,n=t.name,j=(t.email,t.username),s=Object(r.l)();return Object(u.jsxs)("div",{children:[Object(u.jsxs)("h4",{children:["name: ",n]}),Object(u.jsxs)(v.a,{onClick:function(){s("/friend/".concat(c))},children:[j,", id: ",c]})]})}function y(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),c=t[0],j=t[1];return Object(n.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return j(e)}))}),[]),Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Hellow friends.how are you"}),Object(u.jsxs)("h3",{children:["hi friend this is my length",c.length]}),c.map((function(e){return Object(u.jsx)(g,{friend:e},e.id)}))]})}function P(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(s.b,{to:"/home",children:"Home"}),Object(u.jsx)(s.b,{to:"/friends",children:"Friends"}),Object(u.jsx)(s.b,{to:"/shop",children:"Shop"}),Object(u.jsx)(s.b,{to:"/chart",children:"Cart"})]})}function k(){var e,t=Object(r.n)().friendId,c=Object(n.useState)({}),j=Object(f.a)(c,2),s=j[0],a=j[1];return Object(n.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users/".concat(t)).then((function(e){return e.json()})).then((function(e){return a(e)}))}),[t]),Object(u.jsxs)("div",{children:[Object(u.jsxs)("h4",{children:["name: ",s.name]}),Object(u.jsxs)("h4",{children:["username: ",s.username]}),Object(u.jsxs)("h4",{children:["address: ",null===(e=s.address)||void 0===e?void 0:e.city]})]})}function w(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(P,{}),Object(u.jsxs)(r.c,{children:[Object(u.jsx)(r.a,{path:"/",element:Object(u.jsx)(x,{})}),Object(u.jsx)(r.a,{path:"/home",element:Object(u.jsx)(x,{})}),Object(u.jsx)(r.a,{path:"/shop",element:Object(u.jsx)(m,{})}),Object(u.jsx)(r.a,{path:"/chart",element:Object(u.jsx)(l,{})}),Object(u.jsx)(r.a,{path:"/friends",element:Object(u.jsx)(y,{})}),Object(u.jsx)(r.a,{path:"/friend/:friendId",element:Object(u.jsx)(k,{})}),Object(u.jsx)(r.a,{path:"*",element:Object(u.jsx)(p,{})})]})]})}var S=document.getElementById("root");Object(j.createRoot)(S).render(Object(u.jsx)(n.StrictMode,{children:Object(u.jsx)(s.a,{children:Object(u.jsx)(w,{})})}))}},[[311,1,2]]]);
//# sourceMappingURL=main.12ea27b0.chunk.js.map