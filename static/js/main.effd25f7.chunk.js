(this.webpackJsonptask_tracker=this.webpackJsonptask_tracker||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(7),o=n.n(s),r=(n(14),n(9)),i=n(5),d=n(2),l=(n(15),n(0)),u=function(e){var t=e.addTask,n=Object(a.useState)(""),c=Object(d.a)(n,2),s=c[0],o=c[1],r=Object(a.useState)(""),i=Object(d.a)(r,2),u=i[0],j=i[1];return Object(l.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),t({text:s,day:u,isDone:!1}),o(""),j("")},children:[Object(l.jsxs)("div",{className:"form-control",children:[Object(l.jsx)("label",{htmlFor:"task",children:"Task"}),Object(l.jsx)("input",{id:"task",name:"text",type:"text",placeholder:"AddTask",value:s,onChange:function(e){return o(e.target.value)}})]}),Object(l.jsxs)("div",{className:"form-control",children:[Object(l.jsx)("label",{htmlFor:"day",children:"Day & Time"}),Object(l.jsx)("input",{id:"day",name:"day",type:"text",placeholder:"Add Day & Time",value:u,onChange:function(e){return j(e.target.value)}})]}),Object(l.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})},j=function(e){var t=e.color,n=e.text,a=e.toggleShow;return Object(l.jsx)("div",{children:Object(l.jsx)("button",{className:"btn",style:{backgroundColor:t},onClick:a,children:n})})},b=function(e){var t=e.title,n=e.showAddTask,a=e.toggleShow;return Object(l.jsxs)("header",{className:"header",children:[Object(l.jsx)("h1",{children:t}),Object(l.jsx)(j,{color:n?"red":"purple",text:n?"Close Add Task Bar":"Show Add Task Bar",toggleShow:a})]})},h=n(8),O=function(e){var t=e.task,n=e.deleteTask,a=e.toggleDone;return Object(l.jsxs)("div",{className:"task ".concat(t.isDone?"done":""),onDoubleClick:function(){return a(t.id)},children:[Object(l.jsxs)("h3",{children:[t.text,Object(l.jsx)(h.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(l.jsx)("p",{children:t.day})]})},x=function(e){var t=e.tasks,n=e.deleteTask,a=e.toggleDone;return Object(l.jsx)("div",{children:t.map((function(e){return Object(l.jsx)(O,{task:e,deleteTask:n,toggleDone:a},e.id)}))})};var k=function(){var e=Object(a.useState)([{id:1,text:"Study React Pre-Class Notes",day:"Feb 5th at 2:30pm",isDone:!1},{id:2,text:"Feed the Dog",day:"Feb 6th at 1:30pm",isDone:!1},{id:3,text:"Attend in-Class",day:"Feb 7th at 20:00pm",isDone:!1}]),t=Object(d.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),o=Object(d.a)(s,2),j=o[0],h=o[1];return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(b,{title:"Task Tracker",showAddTask:j,toggleShow:function(){return h(!j)}}),j&&Object(l.jsx)(u,{addTask:function(e){var t=Math.floor(100*Math.random())+1,a=Object(i.a)({id:t},e);c([].concat(Object(r.a)(n),[a]))}}),n.length>0?Object(l.jsx)(x,{tasks:n,deleteTask:function(e){c(n.filter((function(t){return t.id!==e})))},toggleDone:function(e){c(n.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{isDone:!t.isDone}):t})))}}):"No Tasks to Show"]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root")),f()}},[[17,1,2]]]);
//# sourceMappingURL=main.effd25f7.chunk.js.map