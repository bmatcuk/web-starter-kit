webpackJsonp([0],{"/aVi":function(e,t,n){e.exports=n("5NOw")},0:function(e,t,n){e.exports=n("hUAu")},"5NOw":function(e,t,n){"use strict";e.exports=n("nz/8")},"854U":function(e,t){},"9TY/":function(e,t,n){"use strict";e.exports=n("I5V5")},BMdv:function(e,t){e.exports={header:"G9Hr5",container:"_3q61Q",menu:"_39Icu",open:"_3s7go",active:"_1Of4y"}},CgKd:function(e,t,n){"use strict";var r=n("CwoH"),a=n.n(r),o=n("jsZ6"),c=n.n(o),s=function(){return a.a.createElement("footer",{className:c.a.footer})};t.a=s},EHrm:function(e,t){e.exports={name:"web-starter-kit",private:!0,version:"1.0.0",description:"An example app using webpack 3, babel 6, react 15, and more.",scripts:{start:"npm run start:prod","start:prod":"cross-env NODE_ENV=production node prod-server.js","start:dev":"cross-env NODE_ENV=development node dev-server.js",prebuild:"rimraf build",build:"npm run build:prod && npm run build:static","build:prod":"cross-env NODE_ENV=production webpack -p --progress","build:dev":"cross-env NODE_ENV=development webpack -d --progress","build:static":"node generate-static-pages.js",test:'cross-env NODE_ENV=test mocha --reporter nyan --compilers js:babel-register --recursive --require mock-css-modules --harmony-proxies "./src/**/*.spec.js"',"test:watch":"npm test -- --watch"},repository:{type:"git",url:"bmatcuk/web-starter-kit.git"},keywords:["react","webpack","babel","router","redux","helmet"],author:"Bob Matcuk",license:"MIT",bugs:{url:"https://github.com/bmatcuk/web-starter-kit/issues"},homepage:"https://github.com/bmatcuk/web-starter-kit#readme",devDependencies:{async:"~2.5.0","babel-core":"~6.25.0","babel-eslint":"~7.2.3","babel-loader":"~7.1.1","babel-plugin-transform-react-jsx-self":"~6.22.0","babel-plugin-transform-react-jsx-source":"~6.22.0","babel-preset-env":"~1.5.2","babel-preset-react":"~6.24.1","babel-preset-stage-3":"~6.24.1","babel-register":"~6.24.1","browser-sync":"~2.18.13","caniuse-lite":"~1.0.30000704",cheerio:"~1.0.0-rc.2","connect-history-api-fallback":"~1.3.0","cross-env":"~5.0.1","css-loader":"~0.28.4",eslint:"~4.1.1","eslint-loader":"~1.8.0","eslint-plugin-react":"~7.1.0",express:"~4.15.3","extract-text-webpack-plugin":"~3.0.0","html-webpack-plugin":"~2.29.0","mdx-loader":"~1.0.0-beta.3",mdxc:"~1.0.0-beta.6",mkdirp:"~0.5.1","normalize.css":"~7.0.0",postcss:"~6.0.8","postcss-browser-reporter":"~0.5.0","postcss-cssnext":"~3.0.2","postcss-loader":"~2.0.6","react-hot-loader":"~3.0.0-beta.7",rimraf:"~2.6.1","style-loader":"~0.18.2",stylelint:"~7.12.0","stylelint-config-standard":"~16.0.0",toposort:"~1.0.3",webpack:"~3.3.0","webpack-dev-middleware":"~1.11.0","webpack-hot-middleware":"~2.18.2"},dependencies:{classnames:"~2.2.5",react:"~15.6.1","react-dom":"~15.6.1","react-helmet":"~5.1.3","react-router-dom":"~4.1.2"}}},I5V5:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n("CwoH"),i=s.Component,l=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),c(t,[{key:"render",value:function(){return this.props.component?s.createElement(this.props.component,this.props.props):s.Children.only(this.props.children)}}]),t}(i);e.exports=l},LF3c:function(e,t,n){"use strict";var r=n("CwoH"),a=n.n(r),o=n("VBEd"),c=n("9qb7"),s=n.n(c),i=n("EHrm"),l=n.n(i),u=n("ydSC"),p=n.n(u),m=function(e){document.getElementById("features").scrollIntoView(),document.activeElement.blur(),e.preventDefault()},d=function(){return a.a.createElement("div",{className:p.a.container},a.a.createElement("header",{className:p.a.hero},a.a.createElement("h1",{className:p.a.header},l.a.name),a.a.createElement("hr",{className:p.a.rule}),a.a.createElement("h2",{className:p.a.subtitle},l.a.description),a.a.createElement(o.a,{to:"#",onClick:m},"Read More")),a.a.createElement("section",{id:"features",className:s()("main",p.a.features)},a.a.createElement("div",{className:p.a.featuresContainer},a.a.createElement("div",null,a.a.createElement("h3",null,"Newest Libraries"),a.a.createElement("p",null,"Newest versions of webpack, babel, react, and more")),a.a.createElement("div",null,a.a.createElement("h3",null,"Isomorphic"),a.a.createElement("p",null,"Render on the server and in the client; pre-render static content")),a.a.createElement("div",null,a.a.createElement("h3",null,"Hot Reload"),a.a.createElement("p",null,"Make development easier with hot reload")))))};t.a=d},N7t0:function(e,t){e.exports={libraries:"YYyLD"}},OviO:function(e,t,n){"use strict";var r=n("CwoH");n.n(r);t.a=function(e){var t=e.factories,n=void 0===t?{}:t,a=n.wrapper,o=void 0===a?Object(r.createFactory)("div"):a,c=n.h1,s=void 0===c?Object(r.createFactory)("h1"):c,i=n.li,l=void 0===i?Object(r.createFactory)("li"):i,u=n.p,p=void 0===u?Object(r.createFactory)("p"):u,m=n.strong,d=void 0===m?Object(r.createFactory)("strong"):m,b=n.ul,f=void 0===b?Object(r.createFactory)("ul"):b;return o({},s({id:"web-starter-kit"},"web-starter-kit"),p({},"A simple starting-point application utilizing the newest versions of webpack,","babel, react, and a whole lot more."),f({},l({},d({},"Isomorphic:")," Render pages on the server and in the client. Fully static","content can be pre-rendered into files to increase server-side performance."),l({},d({},"Hot Reload:")," Increase development productivity with hot reload.")))}},"UuX/":function(e,t,n){"use strict";var r=n("CwoH"),a=n.n(r),o=n("obMO"),c=n("jT85"),s=(n.n(c),n("ZJnk")),i=n("CgKd"),l=n("LF3c"),u=n("oJmI"),p=n("zXA1"),m=n("EHrm"),d=n.n(m),b=n("854U"),f=(n.n(b),function(){return a.a.createElement("div",null,a.a.createElement(c.Helmet,{titleTemplate:"%s - "+d.a.name,defaultTitle:d.a.name},a.a.createElement("html",{lang:"en"}),a.a.createElement("meta",{name:"description",content:d.a.description}),a.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})),a.a.createElement(s.a,null),a.a.createElement(o.Switch,null,a.a.createElement(o.Route,{exact:!0,path:"/",component:l.a}),a.a.createElement(o.Route,{exact:!0,path:"/about",component:u.a}),a.a.createElement(o.Route,{exact:!0,path:"/libraries",component:p.a})),a.a.createElement(i.a,null))});t.a=f},VBEd:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var a=n("CwoH"),o=n.n(a),c=n("5D9O"),s=n.n(c),i=n("obMO"),l=n("9qb7"),u=n.n(l),p=n("i5hh"),m=n.n(p),d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b=function(e){var t=e.className,n=r(e,["className"]);return o.a.createElement(i.Link,d({className:u()(m.a.button,t)},n))};b.propTypes={className:s.a.string},t.a=b},ZJnk:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n("CwoH"),s=n.n(c),i=n("obMO"),l=n("9qb7"),u=n.n(l),p=n("EHrm"),m=n.n(p),d=n("BMdv"),b=n.n(d),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),h=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={menuOpen:!1},n.toggleMenu=n.toggleMenu.bind(n),n}return o(t,e),f(t,[{key:"toggleMenu",value:function(e){this.setState({menuOpen:!this.state.menuOpen}),document.activeElement.blur(),e.preventDefault()}},{key:"render",value:function(){return s.a.createElement("header",{className:b.a.header},s.a.createElement("div",{className:b.a.container},s.a.createElement("h1",null,s.a.createElement(i.Link,{to:"/"},m.a.name)),s.a.createElement("ul",{className:u()(this.state.menuOpen&&b.a.open)},s.a.createElement("li",{className:b.a.menu},s.a.createElement("a",{href:"#",onClick:this.toggleMenu},"menu")),s.a.createElement("li",null,s.a.createElement(i.NavLink,{to:"/about",activeClassName:b.a.active},"about")),s.a.createElement("li",null,s.a.createElement(i.NavLink,{to:"/libraries",activeClassName:b.a.active},"libraries")),s.a.createElement("li",null,s.a.createElement("a",{href:m.a.homepage},"github")))))}}]),t}(c.Component);t.a=h},hUAu:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("/aVi"),a=(n.n(r),n("CwoH")),o=n.n(a),c=n("NKHc"),s=n.n(c),i=n("obMO"),l=n("UuX/"),u=document.getElementById("root");u||(u=document.createElement("div"),document.body.insertBefore(u,document.body.childNodes[0]));var p=function(e){s.a.render(o.a.createElement(r.AppContainer,null,o.a.createElement(i.BrowserRouter,null,o.a.createElement(e,null))),u)};p(l.a)},i5hh:function(e,t){e.exports={button:"vMMeQ"}},jsZ6:function(e,t){e.exports={footer:"_37FtP"}},"nz/8":function(e,t,n){"use strict";e.exports.AppContainer=n("9TY/")},oJmI:function(e,t,n){"use strict";var r=n("CwoH"),a=n.n(r),o=n("9qb7"),c=n.n(o),s=n("OviO"),i=n("qe3C"),l=n.n(i),u=function(){return a.a.createElement("section",{className:c()("main",l.a.about)},a.a.createElement(s.a,null))};t.a=u},qe3C:function(e,t){e.exports={about:"_2AT1O"}},ydSC:function(e,t){e.exports={container:"_2USmv",hero:"_3FhKB",features:"tkDa_",header:"_30StM",subtitle:"_1pEas",rule:"_3tjnD",featuresContainer:"_2n2iy"}},zXA1:function(e,t,n){"use strict";var r=n("CwoH"),a=n.n(r),o=n("9qb7"),c=n.n(o),s=n("EHrm"),i=n.n(s),l=n("N7t0"),u=n.n(l),p=function(){var e=Object.keys(i.a.devDependencies).concat(Object.keys(i.a.dependencies)).sort();return a.a.createElement("section",{className:c()("main",u.a.libraries)},a.a.createElement("p",null,"web-starter-kit uses the following packages:"),a.a.createElement("table",null,a.a.createElement("tbody",null,e.map(function(e){return a.a.createElement("tr",{key:e},a.a.createElement("td",null,a.a.createElement("a",{href:"https://www.npmjs.com/package/"+e,target:"_blank",rel:"noopener noreferrer"},e)),a.a.createElement("td",null,i.a.devDependencies[e]||i.a.dependencies[e]))}))))};t.a=p}},[0]);
//# sourceMappingURL=web.a260ef87f98be1474400.js.map