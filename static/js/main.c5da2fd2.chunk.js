(this.webpackJsonpsemrush=this.webpackJsonpsemrush||[]).push([[0],{135:function(e,n,t){"use strict";t.r(n);var r=t(5),c=t(0),a=t.n(c),i=t(25),l=t.n(i),u=t(50),o=t(13),s=t(14),b=t(140);function j(){var e=Object(o.a)(["\n  & .ant-input-suffix {\n    font-size: 1.1rem;\n  }\n"]);return j=function(){return e},e}function f(){var e=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 0.5rem;\n  label {\n    font-size: 1rem;\n    padding: 0.1rem;\n  }\n"]);return f=function(){return e},e}var d=s.b.div(f()),O=Object(s.b)(b.a)(j()),v=function(e){var n=e.id,t=e.suffix,c=e.label,a=e.value,i=e.setter,l=e.selectSetter;return Object(r.jsxs)(d,{children:[Object(r.jsx)("label",{htmlFor:n,children:c}),Object(r.jsx)(O,{suffix:t,size:"large",id:n,value:a,onChange:function(e){var t=e.target.value;0===t.length||t.includes("\u043d\u0435")?i(null):(i(parseInt(t.replace(/\s/g,"")).toLocaleString()),"payment"===n&&l(null))}})]})},h=t(93);function x(){var e=Object(o.a)(["\n  margin: 0.5rem;\n  width: 40%;\n"]);return x=function(){return e},e}var m=Object(s.b)(h.a)(x()),p=function(e){var n=e.type,t=e.label,c=e.onClick;return Object(r.jsx)(m,{onClick:c,type:n,children:t})};function g(){var e=Object(o.a)(["\n  margin: 0.5rem;\n\n  p {\n    font-size: 1.6rem;\n    font-weight: bold;\n  }\n"]);return g=function(){return e},e}var S=s.b.div(g()),w=function(e){var n=e.label,t=e.value;return Object(r.jsxs)(S,{children:[Object(r.jsxs)("h2",{children:[n,":"]}),Object(r.jsx)("p",{children:t})]})},y=t(139);function z(){var e=Object(o.a)([""]);return z=function(){return e},e}function I(){var e=Object(o.a)(["\nwidth: 50%;\nmargin-bottom: .5rem;"]);return I=function(){return e},e}var k=y.a.Option,C=Object(s.b)(y.a)(I()),L=Object(s.b)(k)(z()),M=function(e){var n=e.value,t=e.setter,a=e.setPayment,i=e.price;return Object(c.useEffect)((function(){a(i>0&&null!==n?(i*n/100).toLocaleString()+"":null)}),[i,n,a]),Object(r.jsxs)(C,{value:n,onChange:function(e){t(e)},children:[Object(r.jsx)(L,{value:10,children:"10%"}),Object(r.jsx)(L,{value:15,children:"15%"}),Object(r.jsx)(L,{value:20,children:"20%"}),Object(r.jsx)(L,{value:25,children:"25%"}),Object(r.jsx)(L,{value:30,children:"30%"})]})};function J(){var e=Object(o.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;"]);return J=function(){return e},e}function E(){var e=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 1.3rem;\n"]);return E=function(){return e},e}function N(){var e=Object(o.a)(["\n  width: 30%;\n"]);return N=function(){return e},e}function P(){var e=Object(o.a)(["\n\n  width: 60%;\n  margin: auto;\n  h1 {\n    font-size: 3rem;\n    text-align: center;\n    margin-bottom: 3rem;\n  }\n"]);return P=function(){return e},e}function B(){var e=Object(o.a)(["\n*,\n*::before,\n*::after{\n    box-sizing:border-box;\n    }\na{\n    text-decoration:none; \n    color:inherit; \n    cursor:pointer;}\nbutton{\n    background-color:transparent; \n    color:inherit; \n    border-width:0; padding:0; \n    cursor:pointer;\n    }\nul, ol, dd{\n    margin:0; \n    padding:0; \n    list-style:none;\n    }\nh1, h2, h3, h4, h5, h6{\n    margin:0; \n    font-size:inherit; \n    font-weight:inherit;\n    }\np{margin:0;}\n\n"]);return B=function(){return e},e}var F=Object(s.a)(B()),q=s.b.div(P()),A=s.b.div(N()),D=s.b.div(E()),G=s.b.div(J());var H=function(){var e=Object(c.useState)(null),n=Object(u.a)(e,2),t=n[0],a=n[1],i=Object(c.useState)(null),l=Object(u.a)(i,2),o=l[0],s=l[1],b=Object(c.useState)(null),j=Object(u.a)(b,2),f=j[0],d=j[1],O=Object(c.useState)(null),h=Object(u.a)(O,2),x=h[0],m=h[1],g=Object(c.useState)(null),S=Object(u.a)(g,2),y=S[0],z=S[1],I=function(e){if(e)return e.replace(/\s/g,"")},k=I(t)-I(o),C=I(y)/1200,L=k*(C+C/(Math.pow(1+C,10)-1)),J=5*L/3,E=L*x-k;return Object(c.useEffect)((function(){if(window.localStorage.getItem("savedItems")){var e=JSON.parse(window.localStorage.getItem("savedItems"));a(e.price),s(e.payment),m(e.term),z(e.interest),d(e.percent)}}),[]),Object(r.jsxs)(q,{children:[Object(r.jsx)("h1",{children:"\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440 \u043a\u0440\u0435\u0434\u0438\u0442\u0430"}),Object(r.jsxs)(G,{children:[Object(r.jsxs)(A,{children:[Object(r.jsx)(v,{id:"price",suffix:"\u20bd",label:"\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u043d\u0435\u0434\u0432\u0438\u0436\u0438\u043c\u043e\u0441\u0442\u0438",value:t,setter:a}),Object(r.jsx)(v,{id:"payment",suffix:"\u20bd",label:"\u041f\u0435\u0440\u0432\u043e\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u044b\u0439 \u0432\u0437\u043d\u043e\u0441",value:o,setter:s,selectSetter:d}),Object(r.jsx)(M,{value:f,setter:d,setPayment:s,price:I(t)}),Object(r.jsx)(v,{id:"term",suffix:"\u043b\u0435\u0442",label:"\u0421\u0440\u043e\u043a \u043a\u0440\u0435\u0434\u0438\u0442\u0430",value:x,setter:m}),Object(r.jsx)(v,{id:"interest",suffix:"%",label:"\u041f\u0440\u043e\u0446\u0435\u043d\u0442\u043d\u0430\u044f \u0441\u0442\u0430\u0432\u043a\u0430",value:y,setter:z}),Object(r.jsx)(p,{type:"primary",label:"Save",onClick:function(){var e={price:t,payment:o,term:x,interest:y,percent:f};window.localStorage.setItem("savedItems",JSON.stringify(e))}}),Object(r.jsx)(p,{type:"default",label:"Clear",onClick:function(){window.localStorage.clear(),a(null),s(null),m(null),z(null),z(null)}})]}),Object(r.jsxs)(D,{children:[Object(r.jsx)(w,{label:"\u0415\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u044b\u0439 \u043f\u043b\u0430\u0442\u0435\u0436",value:L?Math.floor(L).toLocaleString():0}),Object(r.jsx)(w,{label:"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0439 \u0434\u043e\u0445\u043e\u0434",value:J?Math.floor(J).toLocaleString():0}),Object(r.jsx)(w,{label:"\u041f\u0435\u0440\u0435\u043f\u043b\u0430\u0442\u0430",value:E?Math.floor(E).toLocaleString():0}),Object(r.jsx)(w,{label:"\u0422\u0435\u043b\u043e \u043a\u0440\u0435\u0434\u0438\u0442\u0430",value:k?Math.floor(k).toLocaleString():0})]})]})]})};t(134);l.a.render(Object(r.jsxs)(a.a.StrictMode,{children:[Object(r.jsx)(F,{}),Object(r.jsx)(H,{})]}),document.getElementById("root"))}},[[135,1,2]]]);
//# sourceMappingURL=main.c5da2fd2.chunk.js.map