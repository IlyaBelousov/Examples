(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),l=n(5),r=n.n(l),o=(n(10),n(2)),s=(n(11),n(0));function j(){var e=Object(c.useState)(0),t=Object(o.a)(e,2),n=t[0],i=t[1],l=function(e){i(e)};return Object(s.jsxs)("div",{children:[Object(s.jsx)(d,{selected:n>0,SetRatingHandler:function(){return l(1)}}),Object(s.jsx)(d,{selected:n>1,SetRatingHandler:function(){return l(2)}}),Object(s.jsx)(d,{selected:n>2,SetRatingHandler:function(){return l(3)}}),Object(s.jsx)(d,{selected:n>3,SetRatingHandler:function(){return l(4)}}),Object(s.jsx)(d,{selected:n>4,SetRatingHandler:function(){return l(5)}})]})}function d(e){return Object(s.jsx)("span",{onClick:function(){return e.SetRatingHandler()},children:e.selected?Object(s.jsx)("b",{children:" star"}):" star"})}function a(e){var t=Object(c.useState)(!1),n=Object(o.a)(t,2),i=n[0],l=n[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)(u,{ClickHandler:function(){l(!i)},titleValue:e.title}),i&&Object(s.jsx)(b,{})]})}function u(e){return Object(s.jsxs)("h3",{onClick:e.ClickHandler,children:["--",e.titleValue,"--"]})}function b(e){return Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:"1"}),Object(s.jsx)("li",{children:"2"}),Object(s.jsx)("li",{children:"3"})]})}function x(e){var t={width:"30px",height:"20px",border:"1px solid black",display:"inline-block",padding:"2px",backgroundColor:e.on?"green":"white"},n={width:"30px",height:"20px",border:"1px solid black",display:"inline-block",marginLeft:"5px",padding:"2px",backgroundColor:e.on?"white":"red"},c={width:"10px",height:"10px",borderRadius:"15px",border:"1px solid black",display:"inline-block",marginLeft:"5px",backgroundColor:e.on?"green":"red"};return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{style:t,onClick:function(){e.onChange(!0)},children:"On"}),Object(s.jsx)("div",{style:n,onClick:function(){e.onChange(!1)},children:"Off"}),Object(s.jsx)("div",{style:c})]})}function O(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)(h,{selected:e.value>0,onClick:e.onClick,value:1}),Object(s.jsx)(h,{selected:e.value>1,onClick:e.onClick,value:2}),Object(s.jsx)(h,{selected:e.value>2,onClick:e.onClick,value:3}),Object(s.jsx)(h,{selected:e.value>3,onClick:e.onClick,value:4}),Object(s.jsx)(h,{selected:e.value>4,onClick:e.onClick,value:5})]})}function h(e){return Object(s.jsx)("span",{onClick:function(){return e.onClick(e.value)},children:e.selected?Object(s.jsx)("b",{children:" star"}):" star"})}function p(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)(k,{ClickHandler:e.setAccordionCollapsed,titleValue:e.title}),e.collapsed&&Object(s.jsx)(v,{onClick:e.onClick,items:e.items})]})}function k(e){return Object(s.jsxs)("h3",{onClick:function(){return e.ClickHandler()},children:["--",e.titleValue,"--"]})}function v(e){var t;return Object(s.jsx)("ul",{children:null===(t=e.items)||void 0===t?void 0:t.map((function(t,n){return Object(s.jsx)("li",{onClick:function(){e.onClick&&e.onClick(t.value)},children:t.title},n)}))})}function f(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],i=t[1];console.log("on"+n);var l={width:"30px",height:"20px",border:"1px solid black",display:"inline-block",padding:"2px",backgroundColor:n?"green":"white"},r={width:"30px",height:"20px",border:"1px solid black",display:"inline-block",marginLeft:"5px",padding:"2px",backgroundColor:n?"white":"red"},j={width:"10px",height:"10px",borderRadius:"15px",border:"1px solid black",display:"inline-block",marginLeft:"5px",backgroundColor:n?"green":"red"};return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{style:l,onClick:function(){i(!0)},children:"On"}),Object(s.jsx)("div",{style:r,onClick:function(){i(!1)},children:"Off"}),Object(s.jsx)("div",{style:j})]})}var C=n(4),g=function(e){var t=Object.assign({},e);return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("select",Object(C.a)(Object(C.a)({},t),{},{children:[Object(s.jsx)("option",{value:"1",children:"none"}),Object(s.jsx)("option",{value:"2",children:"Moscow"}),Object(s.jsx)("option",{value:"3",children:"Kiev"}),Object(s.jsx)("option",{value:"4",children:"Minsk"})]}))})};var m=function(){var e=Object(c.useState)(0),t=Object(o.a)(e,2),n=t[0],i=t[1],l=Object(c.useState)(!1),r=Object(o.a)(l,2),d=r[0],u=r[1],b=Object(c.useState)(!1),h=Object(o.a)(b,2),k=h[0],v=h[1];return Object(s.jsxs)("div",{className:"app",children:[Object(s.jsx)(y,{}),Object(s.jsx)(j,{}),Object(s.jsx)(O,{value:n,onClick:i}),Object(s.jsx)(x,{on:k,onChange:v}),Object(s.jsx)(f,{}),Object(s.jsx)(a,{title:"Users"}),Object(s.jsx)(p,{items:[{title:"Ilya",value:1},{title:"Dimych",value:2},{title:"Viktor",value:3}],title:"Menu",collapsed:d,setAccordionCollapsed:function(){return u(!d)}}),Object(s.jsx)(g,{})]})};function y(){return Object(s.jsx)(s.Fragment,{children:"This is App Component"})}var S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,l=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),l(e),r(e)}))};r.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(m,{})}),document.getElementById("root")),S()}},[[13,1,2]]]);
//# sourceMappingURL=main.a8a323ec.chunk.js.map