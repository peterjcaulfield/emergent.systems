(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{151:function(e,t,n){"use strict";n.r(t);n(50);var a=n(7),r=n.n(a),i=n(0),o=n.n(i),l=n(159),c=n(154),d=n(153),u=n(162),s=Object(d.c)("div",{target:"ef7enng0"})("color:rgba(0,0,0,0.54);font-size:0.85em;"),p=Object(d.c)("div",{target:"ef7enng1"})("p{font-size:",16/18*100,"%;}"),m=Object(d.a)('position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden;text-indent:-100%;white-space:nowrap;z-index:0;"&&":{border:0;box-shadow:none;"&:hover":{background:none;}}'),f=function(e){var t=e.node;return o.a.createElement(u.a,{interactive:!0,style:{position:"relative"}},o.a.createElement(s,null,o.a.createElement("span",null,t.frontmatter.date)," - ",o.a.createElement("span",null,t.timeToRead," min read")),o.a.createElement(p,null,o.a.createElement("h4",null,t.frontmatter.title," "),o.a.createElement("p",null,t.excerpt)),o.a.createElement(c.Link,{className:m,to:t.fields.slug},"Read more"))},g=n(161),h=n.n(g);n.d(t,"query",function(){return y});var b=Object(d.c)("div",{target:"ewricfv0"})("display:flex;height:100%;align-items:center;"),x=Object(d.c)("div",{target:"ewricfv1"})(),v=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data;return o.a.createElement("div",null,o.a.createElement("h5",null,"Latest Posts"),e.allMarkdownRemark.edges.map(function(e){var t=e.node;return o.a.createElement(f,{node:t,key:t.id})}))},t}(o.a.Component),w=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement(l.a,{location:this.props.location},o.a.createElement(h.a,null,o.a.createElement("title",null,"Emergent Systems"),o.a.createElement("link",{rel:"canonical",href:"https://emergent.systems"})),o.a.createElement(b,null,o.a.createElement(x,null,o.a.createElement(v,{data:this.props.data}))))},t}(o.a.Component),y="417587419";t.default=w},154:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(152),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var d=n(155),u=n.n(d);n.d(t,"PageRenderer",function(){return u.a});var s=n(34);n.d(t,"parsePath",function(){return s.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},155:function(e,t,n){var a;e.exports=(a=n(158))&&a.default||a},156:function(e,t,n){"use strict";var a={headerBg:"rgba(248,245,237,0.9)",footerBg:"rgba(32,35,42)",bodyBg:"rgba(248,245,237)",primary:"rgb(248,50,50)",yellow:"rgba(255,186,82)",primaryRed:"rgb(247,34,42)",darkRed:"#EF2D56",primaryBlue:"rgb(103,218,249)",secondaryBlue:"rgb(34,135,249)"};n.d(t,"a",function(){return a});t.b={mobile:"(min-width: 400px)",Mobile:"@media (min-width: 400px)",phablet:"(min-width: 550px)",Phablet:"@media (min-width: 550px)",tablet:"(min-width: 750px)",Tablet:"@media (min-width: 750px)",desktop:"(min-width: 1000px)",Desktop:"@media (min-width: 1000px)",hd:"(min-width: 1200px)",Hd:"@media (min-width: 1200px)",VHd:"@media (min-width: 1450px)",VVHd:"@media (min-width: 1650px)",radius:2,radiusLg:4,gutters:{default:1.25,HdR:2.5,VHdR:3,VVHdR:4.5},animation:{curveDefault:"cubic-bezier(0.4, 0, 0.2, 1)",speedDefault:"250ms",speedFast:"100ms",speedSlow:"350ms"},logoOffset:1.8,headerHeight:"3.5rem",bannerHeight:"2.5rem",sidebarUtilityHeight:"2.5rem"}},157:function(e){e.exports={data:{site:{siteMetadata:{title:"Emergent Systems"}}}}},158:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(51),c=n(2),d=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=d},159:function(e,t,n){"use strict";n(78);var a=n(7),r=n.n(a),i=(n(49),n(80),n(157)),o=n(0),l=n.n(o),c=(n(160),n(48)),d=n.n(c),u=(n(33),n(154)),s=n(153),p=Object(s.c)("div",{target:"eqgcrdt0"})("width:100%;z-index:2;"),m=Object(s.c)("div",{target:"eqgcrdt1"})("text-align:center;overflow:auto;h1{font-size:3.5rem;line-height:3.5rem;margin:2rem;}a,a:hover,a:visited{text-decoration:none;font-family:Abril Fatface;color:#000;}background:rgb(242,77,50);"),f=Object(s.c)("div",{target:"eqgcrdt2"})("width:100%;z-index:2;position:relative;display:flex;flex-direction:row;padding-top:1rem;background:rgb(242,77,50);a{text-decoration:none;color:#fff;}"),g=Object(s.c)("div",{target:"eqgcrdt3"})("display:flex;flex-grow:1;"),h=Object(s.a)("&::after{content:'';display:block;width:100%;margin-top:0.75rem;height:5px;transition:transform 250ms ease;transform:scaleX(0);background-color:#fff;}&#active::after,&:hover::after{transform:scaleX(1);}"),b=function(e){var t=e.href,n=e.location,a=e.isPartiallyCurrent;if("/"===t||-1!==t.indexOf("blog")){if("/"===n.pathname||-1!==n.pathname.indexOf("blog"))return{id:"active"}}else if(a)return{id:"active"};return null},x=Object(s.c)("div",{target:"eqgcrdt4"})("font-size:18px;padding:0 1.5rem;text-decoration:none;",h,";").withComponent(function(e){return l.a.createElement(u.Link,Object.assign({},e,{getProps:b}))},{target:"eqgcrdt5"}),v=Object(s.c)("div",{target:"eqgcrdt6"})("font-family:Roboto;font-style:normal;padding:0 20px 0 20px;display:flex;"),w=Object(s.a)("position:fixed;top:0;width:100%;box-shadow:rgba(25,17,34,0.2) 0px 0px 10px;"),y=Object(s.c)("div",{target:"eqgcrdt7"})("height:65px;"),E=function(e){function t(t){var n;return(n=e.call(this,t)||this).titleRef=null,n.state={fixMenu:!1},n.handleScroll=n.handleScroll.bind(d()(d()(n))),n}r()(t,e);var n=t.prototype;return n.handleScroll=function(){if(this.titleRef){var e=this.titleRef.getBoundingClientRect(),t=e.height,n=e.top;n<0&&Math.abs(n)>parseInt(t,10)?this.state.fixMenu||this.setState(function(e){return Object.assign({},e,{fixMenu:!0})}):this.state.fixMenu&&this.setState(function(e){return Object.assign({},e,{fixMenu:!1})})}},n.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},n.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},n.render=function(){var e=this,t=this.props.title;return l.a.createElement(p,null,l.a.createElement(m,{innerRef:function(t){return e.titleRef=t}},l.a.createElement("h1",null,l.a.createElement(u.Link,{to:"/"},t))),l.a.createElement(f,{className:this.state.fixMenu?w:""},l.a.createElement(g,null,l.a.createElement(v,null,l.a.createElement(x,{to:"/"},"Blog"),l.a.createElement(x,{to:"/about"},"About")))),l.a.createElement(y,{style:{display:this.state.fixMenu?"block":"none"}}))},t}(l.a.Component),j=Object(s.c)("div",{target:"ekjt4po0"})("min-height:100%;overflow:auto;margin:0 auto;"),O=Object(s.c)("div",{target:"ekjt4po1"})("min-height:100%;max-width:780px;margin:0 auto 1rem auto;padding:0 0.5rem;"),k=Object(s.c)("div",{target:"ekjt4po2"})("height:100%;overflow:auto;position:relative;"),R=Object(s.c)("div",{target:"ekjt4po3"})("text-align:center;"),q=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.getPlaceHolder=function(){return l.a.createElement(R,null,l.a.createElement("h1",null,"Under Construction"))},n.getContent=function(e,t,n,a){return l.a.createElement(l.a.Fragment,null,l.a.createElement(E,{title:e.site.siteMetadata.title,isBlogPage:t,isHomepage:n}),l.a.createElement(j,null,l.a.createElement(O,null,a)))},n.render=function(){var e=this,t=this.props,n=t.children,a=t.location,r="/"===a.pathname,o=-1!==a.pathname.indexOf("blog");return l.a.createElement(u.StaticQuery,{query:"194255774",render:function(t){return l.a.createElement(k,null,e.getContent(t,o,r,n))},data:i})},t}(l.a.Component);t.a=q},162:function(e,t,n){"use strict";n(33);var a=n(0),r=n.n(a),i=n(153),o=n(156),l=Object(i.a)("cursor:pointer;transition:transform ",o.b.animation.speedDefault," ",o.b.animation.curveDefault,",box-shadow ",o.b.animation.speedDefault," ",o.b.animation.curveDefault,",padding ",o.b.animation.speedDefault," ",o.b.animation.curveDefault,";&:hover{transform:translateY(-4px);box-shadow:0 10px 42px rgba(25,17,34,0.1);}"),c=Object(i.a)("background-color:#fff;border-radius:5px;border:solid 1px rgba(0,0,0,0.1);padding:30px 20px 10px 30px;box-shadow:rgba(25,17,34,0.05) 0px 3px 10px;"),d=Object(i.c)("div",{target:"e6hex9n0"})().withComponent(function(e){return e.interactive?r.a.createElement("div",Object.assign({},e,{className:Object(i.b)(c,l)})):r.a.createElement("div",Object.assign({},e,{className:c}))},{target:"e6hex9n1"});t.a=d}}]);
//# sourceMappingURL=component---src-pages-index-js-b285f305bbdefd9574a6.js.map