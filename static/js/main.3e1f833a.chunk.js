(this.webpackJsonpfstbackup=this.webpackJsonpfstbackup||[]).push([[0],{39:function(e,a,t){e.exports=t(70)},44:function(e,a,t){},68:function(e,a,t){},70:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(33),o=t.n(c),l=(t(44),t(5)),s=t(6),i=t(8),m=t(7),u=t(9),p=t(12);function h(e){var a=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm\r navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},a),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"}),"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"}),"Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"}),"About"))))))}h.defaultProps={branding:"Contacts Management"};var d=h,b=t(2),f=t.n(b),v=t(13),E=t(37),y=t(19),g=t(14),C=t.n(g),N=r.a.createContext(),O=function(e,a){switch(a.type){case"DELETE_CONTACT":return Object(y.a)({},e,{contacts:e.contacts.filter((function(e){return e.id!==a.payload}))});case"ADD_CONTACT":return Object(y.a)({},e,{contacts:[a.payload].concat(Object(E.a)(e.contacts))});case"UPDATE_CONTACT":return Object(y.a)({},e,{contacts:e.contacts.map((function(e){return e.id===a.payload.id?e=a.payload:e}))});default:return e}},j=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){t.setState((function(a){return O(a,e)}))}},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark((function e(){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("https://jsonplaceholder.typicode.com/users");case 2:a=e.sent,this.setState({contacts:a.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(N.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),k=N.Consumer,w=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},t.onDeleteClick=function(){var e=Object(v.a)(f.a.mark((function e(a,t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.delete("https://jsonplaceholder.typicode.com/users/".concat(a));case 3:t({type:"DELETE_CONTACT",payload:a}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),t({type:"DELETE_CONTACT",payload:a});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.props.contact,t=a.id,n=a.name,c=a.email,o=a.phone,l=this.state.showContactInfo;return r.a.createElement(k,null,(function(a){var s=a.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h3",null,n," ",r.a.createElement("i",{onClick:function(){return e.setState({showContactInfo:!e.state.showContactInfo})},className:"fas fa-sort-down",style:{cursor:"pointer"}}),r.a.createElement("i",{className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"},onClick:e.onDeleteClick.bind(e,t,s)}),r.a.createElement(p.b,{to:"contact/edit/".concat(t)},r.a.createElement("i",{className:"fas fa-pencil-alt",style:{cursor:"pointer",float:"right",color:"black",marginRight:"1rem"}}))),l?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email: ",c),r.a.createElement("li",{className:"list-group-item"},"Phone: ",o)):null)}))}}]),a}(n.Component),x=function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(k,null,(function(e){var a=e.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-danger"},"Contact"),"List"),a.map((function(e){return r.a.createElement(w,{key:e.id,contact:e})})))}))}}]),a}(n.Component),A=(t(68),t(69),t(17)),S=t(36),T=t.n(S),D=function(e){var a=e.label,t=e.name,n=e.type,c=e.placeholder,o=e.value,l=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",{type:n,name:t,className:T()("form-control form-control-lg",{"is-invalid":s}),placeholder:c,onChange:l,value:o}),s&&r.a.createElement("div",{className:"invalid-feedback"},s))};D.defaultProps={type:"text"};var P=D,_=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},t.onChange=function(e){t.setState(Object(A.a)({},e.target.name,e.target.value))},t.onSubmit=function(){var e=Object(v.a)(f.a.mark((function e(a,n){var r,c,o,l,s,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r=t.state,c=r.name,o=r.email,l=r.phone,r.errors,""===c&&(t.setState={errors:{name:"Name is required"}}),""===o&&(t.setState={errors:{email:"Email is required"}}),""===l&&(t.setState={errors:{name:"Phone is required"}}),s={name:c,email:o,phone:l},e.next=8,C.a.post("https://jsonplaceholder.typicode.com/users",s);case 8:i=e.sent,a({type:"ADD_CONTACT",payload:i.data}),t.setState={name:"",email:"",phone:"",errors:{}},t.props.history.push("/");case 12:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,o=a.errors;return r.a.createElement(k,null,(function(a){var l=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact "),r.a.createElement("div",{className:"card-body "},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(P,{label:"Name",name:"name",value:t,placeholder:"Enter Name",onChange:e.onChange,error:o.name}),r.a.createElement(P,{label:"Email",name:"email",value:n,placeholder:"Enter Email",onChange:e.onChange,type:"email",error:o.email}),r.a.createElement(P,{label:"Phone",name:"phone",value:c,placeholder:"Enter Phone",onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-light btn-block"}))))}))}}]),a}(n.Component),q=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},t.onChange=function(e){t.setState(Object(A.a)({},e.target.name,e.target.value))},t.onSubmit=function(){var e=Object(v.a)(f.a.mark((function e(a,n){var r,c,o,l,s,i,m;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=t.state,c=r.name,o=r.email,l=r.phone,r.errors,""!==c){e.next=5;break}return t.setState={errors:{name:"Name is really required"}},e.abrupt("return");case 5:if(""!==o){e.next=8;break}return t.setState={errors:{email:"Email is required"}},e.abrupt("return");case 8:if(""!==l){e.next=11;break}return t.setState={errors:{name:"Phone is required"}},e.abrupt("return");case 11:return s=t.props.match.params.id,i={name:c,email:o,phone:l},console.log("value in updcontact"+i),e.next=16,C.a.put("http://jsonplaceholder.typicode.com/users/".concat(s),i);case 16:m=e.sent,a({type:"UPDATE_CONTACT",payload:m.data}),t.setState({name:"",email:"",phone:"",errors:{}}),t.props.history.push("/");case 20:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark((function e(){var a,t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("componentdidmount invoked"),a=this.props.match.params.id,e.next=4,C.a.get("https://jsonplaceholder.typicode.com/users/".concat(a));case 4:t=e.sent,n=t.data,console.log(n),this.setState({name:n.name,email:n.email,phone:n.phone});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,o=a.errors;return r.a.createElement(k,null,(function(a){var l=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact "),r.a.createElement("div",{className:"card-body "},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(P,{label:"Name",name:"name",value:t,placeholder:"Enter Name",onChange:e.onChange,error:o.name}),r.a.createElement(P,{label:"Email",name:"email",value:n,placeholder:"Enter Email",onChange:e.onChange,type:"email",error:o.email}),r.a.createElement(P,{label:"Phone",name:"phone",value:c,placeholder:"Enter Phone",onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Edit Contact",className:"btn btn-light btn-block"}))))}))}}]),a}(n.Component),I=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display_4"},"About Contact Manager"),r.a.createElement("p",{className:"lead"},"Simple app to manage contacts"),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))},M=t(15),L=function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(j,null,r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(d,{branding:"Contacts Mananger"}),r.a.createElement("div",{className:"container"},r.a.createElement(M.c,null,r.a.createElement(M.a,{exact:!0,path:"/",component:x}),r.a.createElement(M.a,{exact:!0,path:"/contact/add",component:_}),r.a.createElement(M.a,{exact:!0,path:"/contact/edit/:id",component:q}),r.a.createElement(M.a,{exact:!0,path:"/about",component:I}))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.3e1f833a.chunk.js.map