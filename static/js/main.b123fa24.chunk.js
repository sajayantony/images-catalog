(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(45)},22:function(e,t,n){},24:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),r=n(9),i=n.n(r),c=(n(22),n(10)),s=n(11),l=n(14),u=n(12),p=n(15),m=(n(24),n(13)),h=n.n(m),d=function(e){function t(){var e,n;Object(c.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={repositories:[]},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get("/data/repositories.json").then(function(t){var n=t.data.repositories;e.setState({repositories:n})}).catch(function(e){console.log(e.response)})}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("ol",null,this.state.repositories.map(function(e){return a.a.createElement("li",null,a.a.createElement("a",{className:"App-link",href:"https://mcr.microsoft.com/v2/"+e+"/tags/list",target:"_blank",rel:"noopener noreferrer"},e))}))))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.b123fa24.chunk.js.map