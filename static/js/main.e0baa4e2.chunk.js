(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(t,e,n){t.exports=n(32)},26:function(t,e,n){},31:function(t,e,n){},32:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(5),c=n.n(r),i=(n(26),n(6)),l=n(7),s=n(12),u=n(9),p=n(11),h=n(3),m=function(t){function e(){return Object(i.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(l.a)(e,[{key:"componentWillMount",value:function(){this.props.fetchPosts()}},{key:"componentWillReceiveProps",value:function(t){t.newPost&&this.props.posts.unshift(t.newPost)}},{key:"render",value:function(){var t=this.props.posts.map(function(t){return a.a.createElement("div",{key:t.id},a.a.createElement("h3",null,t.title),a.a.createElement("p",null,t.body))});return a.a.createElement("div",null,t)}}]),e}(o.Component),d=Object(h.b)(function(t){return{posts:t.posts.listItems,newPost:t.posts.listItem}},{fetchPosts:function(){return function(t){fetch("https://jsonplaceholder.typicode.com/posts").then(function(t){return t.json()}).then(function(e){return t({type:"FETCH_POSTS",payload:e})})}}})(m),b=n(10),f=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this,t))).onChange=function(t){n.setState(Object(b.a)({},t.target.name,t.target.value))},n.onSubmit=function(t){t.preventDefault();var e={title:n.state.title,body:n.state.body};n.props.createPost(e)},n.state={title:"",body:""},n}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("form",{onSubmit:this.onSubmit},a.a.createElement("input",{name:"title",type:"text",value:this.state.title,onChange:this.onChange,placeholder:"Enter Title Here"}),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("textarea",{name:"body",type:"text",value:this.state.body,onChange:this.onChange,placeholder:"Enter Post Body Here"}),a.a.createElement("br",null),a.a.createElement("button",{type:"submit"},"Submit")))}}]),e}(o.Component),y=Object(h.b)(null,{createPost:function(t){return function(e){fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}).then(function(t){return t.json()}).then(function(t){return e({type:"NEW_POST",payload:t})})}}})(f),v=n(1),E=n(20),O=n(16),j={listItems:[],listItem:[]},w=Object(v.c)({posts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"NEW_POST":return Object(O.a)({},t,{listItem:e.payload});case"FETCH_POSTS":return Object(O.a)({},t,{listItems:e.payload});default:return t}}}),g=[E.a],P=Object(v.e)(w,{},Object(v.d)(v.a.apply(void 0,g)));n(31);var S=function(){return a.a.createElement(h.a,{store:P},a.a.createElement("div",{className:"App"},a.a.createElement(y,null),a.a.createElement(d,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.e0baa4e2.chunk.js.map