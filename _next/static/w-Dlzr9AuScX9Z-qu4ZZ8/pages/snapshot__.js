(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{FK7u:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/snapshot__",function(){return n("xOxn")}])},rePB:function(t,e,n){"use strict";function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return c}))},xOxn:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return O}));var c=n("1OyB"),a=n("vuIU"),o=n("JX7q"),r=n("Ji7U"),i=n("md7G"),u=n("foSv"),s=n("rePB"),f=n("q1tI"),l=n.n(f),h=n("8Kt/"),p=n.n(h),d=n("VFWX"),m=n("vDqi"),g=n.n(m),v=l.a.createElement;function b(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,c=Object(u.a)(t);if(e){var a=Object(u.a)(this).constructor;n=Reflect.construct(c,arguments,a)}else n=c.apply(this,arguments);return Object(i.a)(this,n)}}var w,y="https://cors-anywhere.herokuapp.com/",O=function(t){Object(r.a)(n,t);var e=b(n);function n(t){var a;return Object(c.a)(this,n),a=e.call(this,t),Object(s.a)(Object(o.a)(a),"fetchPage",(function(t){a.setState({fetching:!0}),g()({method:"get",headers:{Accept:"application/json"},url:"".concat(y,"https://api.github.com/repos/rowthan/pagenote/issues/").concat(t)}).then((function(t){t.data&&a.resolveHTML(t.data)})).catch((function(){a.setState({errMsg:"\u8bf7\u6c42\u6570\u636e\u5f02\u5e38",loading:!1})}))})),Object(s.a)(Object(o.a)(a),"resolveHTML",(function(t){var e=Object(o.a)(a);w=new PageNote;var n={};if(t&&t.body)if(n=JSON.parse(t.body),e.setState({metaInfo:n}),n.html)r(n.html,n);else if(n.htmlUrl){var c=n.htmlUrl.match(/gists\/(\w+)$/)[1];gh.getGist(c).read((function(t,e){try{r(e.files["pagenote.html"].content||"",n)}catch(c){i("\u89e3\u6790\u5931\u8d25")}})).catch((function(){i("\u52a0\u8f7d\u5931\u8d25")}))}else n.commentHtmlId&&issue.getIssueComment(n.commentHtmlId,(function(t,e){r(e.body,n)})).catch((function(t){i(t)}));else i("\u65e0\u6570\u636e\u4fe1\u606f");function r(t,n){e.setState({snapHtml:t,fetching:!1},(function(){w.init(n)}))}function i(t){e.setState({fetching:!1,errMsg:t||"\u52a0\u8f7d\u5931\u8d25"})}})),a.state={snapHtml:"",fetching:!1,errMsg:"",metaInfo:{}},a}return Object(a.a)(n,[{key:"componentDidMount",value:function(){if(!w){var t=window.location.search.match(/pagenote=(.*)$/),e=t?t[1]:"";this.fetchPage(e)}}},{key:"render",value:function(){var t=this.state,e=t.snapHtml,n=t.fetching,c=t.metaInfo,a=t.errMsg,o=c.title,r=void 0===o?"":o;new Date(c.lastModified).toLocaleDateString();return v("div",null,v(p.a,null,v("title",null,"\u7f51\u9875\u5feb\u7167",r),v("script",{defer:!0,src:"/pagenote.js"})),v("div",{id:"pagenote-share-content-container"},e&&v("div",{dangerouslySetInnerHTML:{__html:e}}),n&&v("div",null,"\u5c1d\u8bd5\u52a0\u8f7d\u5feb\u7167\u7f51\u9875...",v(d.a,null)),a&&v("p",null,a)))}}]),n}(f.Component)}},[["FK7u",0,1,2,3]]]);