(this.webpackJsonpfora_soft_task_frontend=this.webpackJsonpfora_soft_task_frontend||[]).push([[0],{118:function(e,a,t){},123:function(e,a,t){},124:function(e,a,t){},125:function(e,a,t){},126:function(e,a,t){},127:function(e,a,t){},128:function(e,a,t){},129:function(e,a,t){},130:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(57),c=t.n(s),o=(t(67),t(8)),u=t.n(o),m=t(17),l=t(5),i=t(7),d=t(1),E=t(58),f=t.n(E)()(),p=t(26),b=t.n(p);b.a.defaults.baseURL=Object({NODE_ENV:"production",PUBLIC_URL:"/fora_soft_task_frontend",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).SERVER_DEV_URL;var g=b.a,O=t(59),N=t.n(O),v=(t(118),function(e){var a=e.match,t=e.onLogin,s=Object(n.useState)(a.params.id),c=Object(l.a)(s,2),o=c[0],d=c[1],E=Object(n.useState)(""),p=Object(l.a)(E,2),b=p[0],O=p[1],v=Object(n.useState)(!1),j=Object(l.a)(v,2),S=j[0],h=j[1],y=Object(n.useState)(!1),_=Object(l.a)(y,2),I=_[0],k=_[1],T=Object(n.useState)(!1),M=Object(l.a)(T,2),R=M[0],x=M[1];Object(n.useEffect)((function(){o?null===o.match("(?=.*[0-9])(?=.*[a-z])[0-9a-z]{10}")&&x(!0):d(N()(10,"a0"))}),[o]);var D=function(){var e=Object(m.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a={roomId:o,userName:b},b){e.next=5;break}h(!0),e.next=11;break;case 5:return k(!0),e.next=8,g.post("/rooms",a);case 8:f.connect(),t(a),h(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"join-block"},R?r.a.createElement("p",{className:"text-danger"},"RoomID is wrong!"):r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"text",placeholder:"Your name",value:b,onChange:function(e){return O(e.target.value.trim())}}),r.a.createElement(i.b,{to:"/dialog/".concat(o)},r.a.createElement("button",{className:"btn btn-success",onClick:D,disabled:I},I?"Loading...":"ENTER")),r.a.createElement("p",null,"Your room ID is: ",o),S?r.a.createElement("p",{className:"text-danger"},"Username is required!"):null))}),j=(t(123),t(124),function(e){var a=e.roomId,t=e.onGoBack,n=e.users;return r.a.createElement("div",{className:"chat-users"},"RoomID: ",r.a.createElement("b",null,a),r.a.createElement("hr",null),r.a.createElement(i.b,{onClick:function(){return t()},to:"/dialog/".concat(a)},r.a.createElement("button",{type:"button",className:"btn btn-secondary chat-go-back"},"Back")),r.a.createElement("b",null,"Online:"),r.a.createElement("ul",null,n.map((function(e,a){return r.a.createElement("li",{key:e+a},e)}))),r.a.createElement("p",{className:"chat-users-invitation-link"},"The link for invitation: ",r.a.createElement("a",{href:window.location.href,style:{fontSize:11}},window.location.href)))}),S=(t(125),t(126),t(127),function(e){var a=e.message,t=(e.index,e.userName);return r.a.createElement("div",{className:a.userName!==t?"message":"message message-is-me"},r.a.createElement("p",null,a.text),r.a.createElement("div",null,r.a.createElement("span",{className:"message-username"},a.userName),r.a.createElement("span",null,a.sendingTime)))}),h=function(e){var a=e.messages,t=e.userName,s=Object(n.useRef)(null);return Object(n.useEffect)((function(){s.current.scrollTo(0,99999)}),[a]),r.a.createElement("div",{ref:s,className:"message-list"},a.map((function(e,a){return r.a.createElement(S,{message:e,key:a,userName:t})})))},y=t(30),_=t.n(y),I=(t(128),function(e){var a=e.userName,t=e.roomId,s=e.onAddMessage,c=Object(n.useState)(""),o=Object(l.a)(c,2),u=o[0],m=o[1],i=function(){f.emit("ROOM:NEW_MESSAGE",{userName:a,roomId:t,text:u,sendingTime:_()().format("D-MM-YYYY HH:mm")}),s({userName:a,text:u,sendingTime:_()().format("D-MM-YYYY HH:mm")}),m("")};return r.a.createElement("form",{className:"message-form"},r.a.createElement("textarea",{value:u,onChange:function(e){return m(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),i())},className:"form-control",rows:"3"}),r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:i},"Send"))}),k=function(e){var a=e.messages,t=e.userName,n=e.roomId,s=e.onAddMessage;return r.a.createElement("div",{className:"chat-message-panel"},r.a.createElement(h,{messages:a,userName:t}),r.a.createElement(I,{userName:t,roomId:n,onAddMessage:s}))},T=function(e){var a=e.users,t=e.messages,n=e.userName,s=e.roomId,c=e.onAddMessage,o=e.onUnjoin;return r.a.createElement("div",{className:"chat"},r.a.createElement(j,{roomId:s,onGoBack:function(){f.disconnect(),o()},users:a}),r.a.createElement(k,{messages:t,userName:n,roomId:s,onAddMessage:c}))};T.defaultProps={messages:[]};var M=T,R=t(61),x=t(9),D=function(e,a){switch(a.type){case"JOINED":return Object(x.a)({},e,{joined:!0,roomId:a.payload.roomId,userName:a.payload.userName});case"SET_DATA":return Object(x.a)({},e,{users:a.payload.users,messages:a.payload.messages});case"SET_USERS":return Object(x.a)({},e,{users:a.payload});case"NEW_MESSAGE":return Object(x.a)({},e,{messages:[].concat(Object(R.a)(e.messages),[a.payload])});case"UNJOINED":return Object(x.a)({},e,{joined:!1});default:return e}},A=(t(129),function(){var e=Object(n.useReducer)(D,{joined:!1,roomId:null,userName:null,users:[],messages:[]}),a=Object(l.a)(e,2),t=a[0],s=a[1],c=function(){var e=Object(m.a)(u.a.mark((function e(a){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s({type:"JOINED",payload:a}),f.emit("ROOM:JOIN",a),e.next=4,g.get("/room/".concat(a.roomId));case 4:t=e.sent,n=t.data,s({type:"SET_DATA",payload:n});case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),o=function(e){s({type:"SET_USERS",payload:e})},E=function(e){e.text&&s({type:"NEW_MESSAGE",payload:e})},p=function(){s({type:"UNJOINED"})};return Object(n.useEffect)((function(){f.on("ROOM:SET_USERS",o),f.on("ROOM:NEW_MESSAGE",E)}),[]),r.a.createElement("div",{className:"wrapper"},r.a.createElement(i.a,null,r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:function(e){var a=e.match;return r.a.createElement(v,{onLogin:c,match:a})}}),r.a.createElement(d.a,{path:"/dialog/:id",render:function(e){var a=e.match;return t.joined?r.a.createElement(M,Object.assign({},t,{onAddMessage:E,onUnjoin:p})):r.a.createElement(v,{onLogin:c,match:a})}}))))});c.a.render(r.a.createElement(A,null),document.getElementById("root"))},62:function(e,a,t){e.exports=t(130)},67:function(e,a,t){},99:function(e,a){}},[[62,1,2]]]);
//# sourceMappingURL=main.3ed0fb20.chunk.js.map