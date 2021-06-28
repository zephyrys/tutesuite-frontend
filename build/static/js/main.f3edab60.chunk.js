(this["webpackJsonptutesuite-frontend"]=this["webpackJsonptutesuite-frontend"]||[]).push([[0],{40:function(e,t,n){},41:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var s=n(2),r=n.n(s),a=n(17),c=n.n(a),i=(n(40),n(7)),o=n(8),l=n(10),u=n(9),j=(n(41),n(1)),d=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{className:this.props.light?"":"bg-dark text-white",children:this.props.children})}}]),n}(s.Component),h=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(j.jsx)(d,{light:this.props.light,children:Object(j.jsx)("header",{className:"p-3",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start",children:[Object(j.jsx)("a",{href:"",className:"d-flex align-items-center mb-2 mb-lg-0 text-decoration-none mx-3",children:"TuteSuite"}),Object(j.jsx)("div",{className:"text-end",children:Object(j.jsx)(d,{light:this.props.light,children:this.props.children})})]})})})})}}]),n}(s.Component),p=n(90),b=n(74),O=n(75),g=n(76),f=n(77),m=n(78),x=n(79),_=n(80),v=n(81),y=n(82),w=n(35),k=function(e){return function(t){e.setState(Object(w.a)({},t.target.name,t.target.value))}},N=function(e,t){return e+"/"+function(e){return"030F-95139B24F-D7846C058AEA-"+JSON.stringify(e)}(t)},S=n(13),C=n.n(S),q=n(16),E=n(19),J=n.n(E),T="https://tutesuite-backend.herokuapp.com/",A=function(e){return function(){var t=Object(q.a)(C.a.mark((function t(n,s,r,a){var c,i,o,l;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c=e.token,i=e.user,console.log(e),t.t0=n,t.next="get_requests"===t.t0?5:"create_request"===t.t0?7:11;break;case 5:return F(c,r,a),t.abrupt("break",11);case 7:console.log(s),o=s.description,l=s.subject,L(c,{description:o,subject:l,student:i.student[0].id,active:!0},r,a);case 11:case"end":return t.stop()}}),t)})));return function(e,n,s,r){return t.apply(this,arguments)}}()},L=function(){var e=Object(q.a)(C.a.mark((function e(t,n,s,r){var a,c,i,o,l;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(n),a=n.description,c=n.subject,i=n.student,o=n.active,e.next=5,J.a.post(T+"api/requests",{description:a,subject:c,student:i,active:o},{headers:{Authorization:"Token "+t,"Content-type":"application/json"}});case 5:return l=e.sent,e.abrupt("return",s(l.data));case 9:e.prev=9,e.t0=e.catch(0),r(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n,s,r){return e.apply(this,arguments)}}(),F=function(){var e=Object(q.a)(C.a.mark((function e(t,n,s){var r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J.a.get(T+"api/requests",{headers:{Authorization:"Token "+t,"Content-type":"application/json"}});case 3:return r=e.sent,e.abrupt("return",n(r.data));case 7:e.prev=7,e.t0=e.catch(0),s(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,s){return e.apply(this,arguments)}}(),D=function(){var e=Object(q.a)(C.a.mark((function e(t,n,s){var r,a,c,i,o;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.username,a=t.email,c=t.password,i=t.first_name,o=t.last_name,console.log(t),e.prev=2,e.next=5,J.a.post(T+"api/users",{username:r,password:c,email:a,first_name:i,last_name:o,student:[],tutor:[]},{headers:{}});case 5:e.sent,P(r,c,n,s),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),s(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,n,s){return e.apply(this,arguments)}}(),P=function(){var e=Object(q.a)(C.a.mark((function e(t,n,s,r){var a,c,i;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J.a.post(T+"api/token-auth/",{username:t,password:n},{headers:{"Content-type":"application/json"}});case 3:return a=e.sent,c=a.data.token,e.next=7,U(c,t);case 7:i=e.sent,s({token:c,user:i}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),r(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n,s,r){return e.apply(this,arguments)}}(),U=function(){var e=Object(q.a)(C.a.mark((function e(t,n){var s;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J.a.get(T+"api/username/"+n+"/",{headers:{Authorization:"Token "+t,"Content-type":"application/json"}});case 3:return s=e.sent,e.abrupt("return",s.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),Y=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).login_fail=function(e){s.setState({show_login_err:!0,login_err:e.toString()})},s.login_success=function(e){s.props.toggle(),s.props.login_success(e)},s.state={show_login_err:!1,login_err:"",username:"",password:""},s}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.props.toggle,n=this.state,s=n.login_err,r=n.show_login_err;return Object(j.jsxs)(p.a,{isOpen:!0,toggle:t,children:[Object(j.jsx)(b.a,{toggle:t,children:"Log in to TuteSuite"}),Object(j.jsxs)(O.a,{children:[Object(j.jsxs)(g.a,{children:[Object(j.jsxs)(f.a,{children:[Object(j.jsx)(m.a,{for:"user-username",children:"Username"}),Object(j.jsx)(x.a,{type:"text",id:"user-username",name:"username",placeholder:"Enter Your username",onChange:k(this)})]}),Object(j.jsxs)(f.a,{children:[Object(j.jsx)(m.a,{for:"user-password",children:"Password"}),Object(j.jsx)(x.a,{type:"password",id:"user-password",name:"password",placeholder:"Enter Password",onChange:k(this)})]})]}),Object(j.jsx)(_.a,{color:"danger",hidden:!r,children:s})]}),Object(j.jsx)(v.a,{children:Object(j.jsx)(y.a,{color:"success",onClick:function(){P(e.state.username,e.state.password,e.login_success,e.login_fail)},children:"Login"})})]})}}]),n}(s.Component),z=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).modal_toggle=function(){s.setState({login_modal:!s.state.login_modal})},s.state={login_modal:!1},s}return Object(o.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"d-inline",children:[Object(j.jsx)("button",{type:"button",className:this.props.className,onClick:this.modal_toggle,children:this.props.children}),this.state.login_modal?Object(j.jsx)(Y,{toggle:this.modal_toggle,login_success:this.props.handle_login}):null]})}}]),n}(s.Component),B=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).signup_fail=function(e){s.setState({show_signup_err:!0,signup_err:e.toString()})},s.signup_success=function(e){s.props.toggle(),s.props.signup_success(e)},s.state={show_signup_err:!1,signup_err:"",username:"",password:"",email:"",first_name:"",last_name:""},s}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.props.toggle,n=this.state,s=n.signup_err,r=n.show_signup_err,a=n.email,c=n.username,i=n.password,o=n.first_name,l=n.last_name;return Object(j.jsxs)(p.a,{isOpen:!0,toggle:t,children:[Object(j.jsx)(b.a,{toggle:t,children:"Sign up to TuteSuite"}),Object(j.jsxs)(O.a,{children:[Object(j.jsxs)(g.a,{children:[Object(j.jsxs)(f.a,{children:[Object(j.jsx)(m.a,{for:"user-username",children:"Username"}),Object(j.jsx)(x.a,{type:"text",id:"user-username",name:"username",placeholder:"Enter Your username",onChange:k(this)})]}),Object(j.jsxs)(f.a,{children:[Object(j.jsx)(m.a,{for:"user-password",children:"Password"}),Object(j.jsx)(x.a,{type:"password",id:"user-password",name:"password",placeholder:"Enter Password",onChange:k(this)})]}),Object(j.jsxs)(f.a,{children:[Object(j.jsx)(m.a,{for:"user-email",children:"Email"}),Object(j.jsx)(x.a,{type:"email",id:"user-email",name:"email",placeholder:"Enter Email",onChange:k(this)})]}),Object(j.jsxs)(f.a,{children:[Object(j.jsx)(m.a,{for:"user-first-name",children:"First Name"}),Object(j.jsx)(x.a,{type:"text",id:"user-first-name",name:"first_name",placeholder:"Enter First Name",onChange:k(this)})]}),Object(j.jsxs)(f.a,{children:[Object(j.jsx)(m.a,{for:"user-last-name",children:"Last Name"}),Object(j.jsx)(x.a,{type:"text",id:"user-last-name",name:"last_name",placeholder:"Enter Last Name",onChange:k(this)})]})]}),Object(j.jsx)(_.a,{color:"danger",hidden:!r,children:s})]}),Object(j.jsx)(v.a,{children:Object(j.jsx)(y.a,{color:"success",onClick:function(){D({username:c,password:i,first_name:o,last_name:l,email:a},e.signup_success,e.signup_fail)},children:"Sign Up"})})]})}}]),n}(s.Component),I=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).modal_toggle=function(){s.setState({signup_modal:!s.state.signup_modal})},s.state={signup_modal:!1},s}return Object(o.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"d-inline",children:[Object(j.jsx)("button",{type:"button",className:this.props.className,onClick:this.modal_toggle,children:this.props.children}),this.state.signup_modal?Object(j.jsx)(B,{toggle:this.modal_toggle,signup_success:this.props.handle_signup}):null]})}}]),n}(s.Component),K=n(83),M=n(84),R=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).create_request=function(){console.log(s.state),s.props.api("create_request",{description:s.state.description,subject:s.state.subject},s.handle_request,s.handle_fail)},s.handle_request=function(e){console.log(e),s.setState({active_request:JSON.stringify(e)})},s.handle_fail=function(e){console.log(e)},s.state={active_request:!1,description:"",subject:""},s}return Object(o.a)(n,[{key:"render",value:function(){return this.state.active_request?Object(j.jsx)("div",{children:Object(j.jsx)("code",{children:this.state.active_request})}):Object(j.jsxs)(K.a,{className:"justify-content-center",children:[Object(j.jsx)("h2",{className:"display-5 fw-bold",children:"Request a Tutor"}),Object(j.jsx)(M.a,{className:"my-5",lg:7,children:Object(j.jsxs)(g.a,{children:[Object(j.jsxs)(f.a,{children:[Object(j.jsx)(m.a,{for:"request-subject",children:"Enter Your Subject"}),Object(j.jsx)(x.a,{type:"text",id:"request-subject",name:"subject",onChange:k(this)})]}),Object(j.jsxs)(f.a,{children:[Object(j.jsx)(m.a,{for:"request-description",children:"Enter Your Description"}),Object(j.jsx)(x.a,{type:"text",id:"request-description",name:"description",onChange:k(this)})]}),Object(j.jsx)(y.a,{color:"primary",className:"my-2",onClick:this.create_request,children:"Submit Request"})]})})]})}}]),n}(s.Component),G=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(j.jsxs)(K.a,{children:[Object(j.jsx)("h1",{className:"display-5 fw-bold",children:"TuteSuite is up"}),Object(j.jsx)(M.a,{className:"my-5",children:Object(j.jsx)("p",{className:"lead mb-4",children:Object(j.jsx)("code",{children:JSON.stringify(this.props.user)})})})]})}}]),n}(s.Component),H=n(85),Q=n(86),V=n(87),W=n(88),X=n(89),Z=(n(71),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).handle_requests=function(e){s.setState({requests:e,hide_failure:!0})},s.handle_request_fail=function(e){s.setState({hide_failure:!0,request_failure:JSON.stringify(e)})},s.render_req=function(e){return Object(j.jsx)(H.a,{className:s.props.light?"bg-white":"bg-secondary",children:Object(j.jsxs)(Q.a,{children:[Object(j.jsx)(V.a,{tag:"h5",children:JSON.stringify(e.student)}),Object(j.jsx)(W.a,{tag:"h6",className:"mb-2 text-muted",children:JSON.stringify(e.description)}),Object(j.jsxs)(X.a,{children:[console.log(e),"Subject: ",Object(j.jsx)("code",{children:JSON.stringify(e.subject)})," ",Object(j.jsx)("br",{}),"Date: ",Object(j.jsx)("code",{children:e.date})," ",Object(j.jsx)("br",{}),"Accepted Tutors: ",Object(j.jsx)("code",{children:JSON.stringify(JSON.stringify(e.accepted_tutors))})," ",Object(j.jsx)("br",{}),"Active: ",Object(j.jsx)("code",{children:JSON.stringify(e.active)})," ",Object(j.jsx)("br",{}),"Key: ",Object(j.jsx)("code",{children:e.pk})," ",Object(j.jsx)("br",{}),Object(j.jsx)("a",{href:N("https://localhost",e.id),children:"Link"})]})]})})},s.render_raw=function(e){return Object(j.jsx)("code",{children:JSON.stringify(e)})},s.state={requests:[{date:"Date",subject:"Subject",student:"Student",accepted_tutors:"Accepted Tutors",active:"Active",pk:"Key"}],hide_failure:!0,request_failure:""},s}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsxs)(K.a,{className:"justify-content-center",children:[Object(j.jsx)("h2",{className:"display-5 fw-bold",children:"Tutor a Student"}),Object(j.jsxs)(M.a,{className:"my-5",lg:7,children:[Object(j.jsx)(_.a,{color:"danger",hidden:this.state.hide_failure,children:this.state.request_failure}),Object(j.jsx)("div",{className:"lead mb-4",children:this.state.requests.map((function(t,n){return Object(j.jsxs)("div",{children:[e.render_req(t),Object(j.jsx)("br",{})]},n)}))})]})]})}},{key:"componentDidMount",value:function(){this.props.api("get_requests",null,this.handle_requests,this.handle_request_fail)}}]),n}(s.Component)),$=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).handle_login=function(e){var t=e.token,n=e.user;s.setState({is_logged_in:!0,token:t,user:n,api:A(e)})},s.state={is_logged_in:!1,token:null,user:null,api:null,light:!0},s}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{children:[Object(j.jsx)("header",{children:Object(j.jsxs)(h,{light:this.state.light,children:[this.state.is_logged_in?null:Object(j.jsxs)("div",{className:"d-inline",children:[Object(j.jsx)(z,{handle_login:this.handle_login,className:"btn btn-outline-dark mx-1",children:Object(j.jsx)(d,{light:this.state.light,children:"Login"})}),Object(j.jsx)(I,{handle_signup:this.handle_login,className:"btn btn-warning mx-1",children:"Sign Up"})]}),Object(j.jsx)("button",{onClick:function(){e.setState({light:!e.state.light})},className:"btn btn-outline-dark d-inline mx-1",children:Object(j.jsx)(d,{light:this.state.light,children:"Light"})})]})}),Object(j.jsx)("main",{children:Object(j.jsx)("div",{className:"px-4 py-5 text-center "+(this.state.light?"bg-light":"bg-dark text-white"),children:this.state.is_logged_in?Object(j.jsxs)("div",{children:[Object(j.jsx)(G,{user:this.state.user}),Object(j.jsx)(R,{api:this.state.api}),Object(j.jsx)(Z,{api:this.state.api,light:this.state.light})]}):null})})]})}}]),n}(s.Component),ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,91)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),s(e),r(e),a(e),c(e)}))};n(72);c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)($,{})}),document.getElementById("root")),ee()}},[[73,1,2]]]);
//# sourceMappingURL=main.f3edab60.chunk.js.map