(this["webpackJsonpreact-task-tracker"]=this["webpackJsonpreact-task-tracker"]||[]).push([[0],{11:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),r=n(4),s=n.n(r),u=(n(9),n(0)),i=function(t){var e=t.title;return Object(u.jsx)("header",{className:"header",children:Object(u.jsx)("h1",{children:e})})},o=n(3),j=function(t){var e=t.onSubmit,n=Object(c.useState)(0),a=Object(o.a)(n,2),r=a[0],s=a[1],i=Object(c.useState)(""),j=Object(o.a)(i,2),b=j[0],l=j[1];return Object(u.jsxs)("div",{children:[Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),l(e(Number(t.target[0].value))),console.log(b)},className:"form",children:[Object(u.jsx)("input",{type:"number",value:r,onChange:function(t){return s(t.target.value)},min:"0",className:"field"}),Object(u.jsx)("input",{type:"submit",value:"Calculate",className:"btn"})]}),Object(u.jsx)("h2",{children:b})]})},b=1.618033988749895,l=function(t){return Math.round((Math.pow(b,t+1)-Math.pow(1-b,t+1))/Math.sqrt(5))};var h=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(i,{title:"Number of Stairs"}),Object(u.jsx)(j,{onSubmit:l})]})},d=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),c(t),a(t),r(t),s(t)}))};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root")),d()},9:function(t,e,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.ad8636a0.chunk.js.map