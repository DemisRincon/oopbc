_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=o,t.useAmp=function(){return o(a.default.useContext(c.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},c=n("lwAK");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,c=e.hasQuery,o=void 0!==c&&c;return n||a&&o}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var c=r?Object.getOwnPropertyDescriptor(e,a):null;c&&(c.get||c.set)?Object.defineProperty(n,a,c):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),c=(r=n("Xuae"))&&r.__esModule?r:{default:r},o=n("lwAK"),i=n("FYa8"),s=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var c=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var o=a.key.slice(a.key.indexOf("$")+1);e.has(o)?c=!1:e.add(o)}switch(a.type){case"title":case"base":t.has(a.type)?c=!1:t.add(a.type);break;case"meta":for(var i=0,s=d.length;i<s;i++){var u=d[i];if(a.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?c=!1:n.add(u);else{var l=a.props[u],f=r[u]||new Set;f.has(l)?c=!1:(f.add(l),r[u]=f)}}}return c}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function p(e){var t=e.children,n=(0,a.useContext)(o.AmpStateContext),r=(0,a.useContext)(i.HeadManagerContext);return a.default.createElement(c.default,{reduceComponentsToState:h,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}p.rewind=function(){};var b=p;t.default=b},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},H0SL:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("cMU6")}])},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),c=n("ZhPi"),o=n("Bnag");e.exports=function(e){return r(e)||a(e)||c(e)||o()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),c=n("W8MJ"),o=(n("PJYZ"),n("7W2i")),i=n("a1gu"),s=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){o(n,e);var t=u(n);function n(e){var c;return a(this,n),(c=t.call(this,e))._hasHeadManager=void 0,c.emitChange=function(){c._hasHeadManager&&c.props.headManager.updateHead(c.props.reduceComponentsToState(r(c.props.headManager.mountedInstances),c.props))},c._hasHeadManager=c.props.headManager&&c.props.headManager.mountedInstances,c}return c(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},YFqc:function(e,t,n){e.exports=n("cTJO")},cMU6:function(e,t,n){"use strict";n.r(t);var r=n("q1tI");function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t){if(e){if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(s){a=!0,c=s}finally{try{r||null==i.return||i.return()}finally{if(a)throw c}}return n}}(e,t)||c(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=n("5N5F"),s=n.n(i),u=n("+r0i"),l=n.n(u),f=n("nKUr"),d=function(e){var t=e.first,n=e.nameNumber;return Object(f.jsxs)("div",{className:"".concat(l.a.BoxContainer," ").concat(l.a[n]),children:[Object(f.jsx)("div",{className:l.a.RowBox,children:!t&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:l.a.Vertical1}),Object(f.jsx)("div",{className:l.a.Box}),Object(f.jsx)("div",{className:l.a.Vertical2})]})}),Object(f.jsxs)("div",{className:l.a.SmallRowBox,children:[Object(f.jsx)("div",{className:l.a.Square}),Object(f.jsx)("div",{className:l.a.Horizontal}),Object(f.jsx)("div",{className:l.a.Square})]})]})},h=function(e){var t=e.nameNumber;return Object(f.jsxs)("div",{className:l.a.NumberContainer,children:[Object(f.jsx)(d,{first:!0,nameNumber:t}),Object(f.jsx)(d,{nameNumber:t}),Object(f.jsx)(d,{nameNumber:t})]})},p=function(e,t){var n=Object(r.useState)(e),a=n[0],c=n[1];return[{value:a,onChange:function(e){var t=e.target.value;return c(t)},placeholder:t},function(){return c(e)}]};function b(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var m=function(e,t,n){if(n>1&&e.map((function(e){for(var t=1;t<n;t++)e.splice(2,0,e[1])})),t>1)for(var r=function(t){return t.map((function(t,n){return 0===n||n===e[1].length-1?t:"\xa0 \xa0"}))},a=1;a<t;a++)e.splice(1,0,r(e[1])),e.splice(e.length-1,0,r(e[e.length-1]));return e},j=function(e,t){return m([["\xa0","_","\xa0"],["|","\xa0 \xa0","|"],["|","_","|"]],e,t)},v=function(e,t){return m([["\xa0","\xa0","\xa0"],["\xa0","\xa0","|"],["\xa0","\xa0","|"]],e,t)},O=function(e,t){return m([["\xa0","_","\xa0"],["\xa0","_","|"],["|","_","\xa0"]],e,t)},y=function(e,t){return m([["\xa0","_","\xa0"],["\xa0","_","|"],["\xa0","_","|"]],e,t)},g=function(e,t){return m([["\xa0","\xa0","\xa0"],["|","_","|"],["\xa0 ","\xa0 \xa0","|"]],e,t)},x=function(e,t){return m([["\xa0","_","\xa0"],["|","_"," "],["\xa0","_","|"]],e,t)},w=function(e,t){return m([["","_","\xa0"],["|","_","\xa0 "],["|","_","|"]],e,t)},_=function(e,t){return m([["\xa0","_","\xa0"],["\xa0","\xa0 \xa0","|"],["\xa0","\xa0 \xa0","|"]],e,t)},N=function(e,t){return m([["","_",""],["|","_","|"],["|","_","|"]],e,t)},C=function(e,t){return m([["","_",""],["|","_","|"],["\xa0","_","|"]],e,t)},S=n("rePB");function k(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var I=n("TC6i"),M=n.n(I);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){Object(S.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A=function(e){var t=e.inputControl,n=e.resetInput,r=k(e,["inputControl","resetInput"]);return Object(f.jsxs)("div",{className:M.a.InputContainer,children:[Object(f.jsx)("input",E(E({},r),{},{type:"number"},t)),Object(f.jsx)("button",{onClick:n,children:"Reset"})]})},H=n("Xn5M"),q=n.n(H),L=function(e){var t=e.children;return Object(f.jsx)("div",{className:q.a.NumberList,children:t})},R=function(e){var t=e.mod,n=e.title,a=e.legend,c=o(p("","Please write your number..."),2),i=c[0],u=c[1],l=o(p("","Please the height..."),2),d=l[0],m=l[1],S=o(p("","Please the width..."),2),k=S[0],I=S[1],M=o(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,c=Object(r.useState)(t),o=c[0],i=c[1],s=Object(r.useState)(t),u=s[0],l=s[1];return Object(r.useEffect)((function(){var t=Array.from(e),r=[],c=[];t.map((function(e){switch(e){case"0":r=[].concat(b(r),["Cero"]),c=[].concat(b(c),[j(n,a)]);break;case"1":r=[].concat(b(r),["One"]),c=[].concat(b(c),[v(n,a)]);break;case"2":r=[].concat(b(r),["Two"]),c=[].concat(b(c),[O(n,a)]);break;case"3":r=[].concat(b(r),["Three"]),c=[].concat(b(c),[y(n,a)]);break;case"4":r=[].concat(b(r),["Four"]),c=[].concat(b(c),[g(n,a)]);break;case"5":r=[].concat(b(r),["Five"]),c=[].concat(b(c),[x(n,a)]);break;case"6":r=[].concat(b(r),["Six"]),c=[].concat(b(c),[w(n,a)]);break;case"7":r=[].concat(b(r),["Seven"]),c=[].concat(b(c),[_(n,a)]);break;case"8":r=[].concat(b(r),["Eight"]),c=[].concat(b(c),[N(n,a)]);break;case"9":r=[].concat(b(r),["Nine"]),c=[].concat(b(c),[C(n,a)])}})),i(r),l(c)}),[e,n,a]),[{numbers:o,numbersConsole:u}]}(i.value,[],d.value,k.value),1)[0];return Object(f.jsxs)("main",{className:s.a.Main,children:[Object(f.jsxs)("div",{className:s.a.Exercise1Container,children:[Object(f.jsx)(A,{min:0,inputControl:i,resetInput:u}),t&&Object(f.jsx)(A,{min:1,inputControl:d,resetInput:m}),t&&Object(f.jsx)(A,{min:1,inputControl:k,resetInput:I}),Object(f.jsx)(L,{children:M.numbersConsole.map((function(e){return console.log(e),Object(f.jsx)("div",{className:s.a.NumberContainer,children:e.map((function(e){return Object(f.jsx)("div",{children:e.map((function(e){return e}))})}))})}))}),!t&&Object(f.jsx)(L,{children:M.numbers.map((function(e){return Object(f.jsx)(h,{nameNumber:e})}))})]}),Object(f.jsxs)("div",{className:s.a.ArbitLabel,children:[Object(f.jsx)("h1",{children:n}),Object(f.jsx)("h3",{children:a})]})]})},T=n("xAJo"),D=n.n(T),F=function(){return Object(f.jsx)("div",{className:D.a.MainPresentation,children:Object(f.jsxs)("div",{className:D.a.ImageContainer,children:[Object(f.jsxs)("div",{className:D.a.PresentationLabels,children:[Object(f.jsx)("h1",{children:"Development of the second part"}),Object(f.jsx)("h3",{children:"For this part just modify some components and functions, the modification for the new requirement was easy because the is developed by components, so just reuse the same component of the first part add some props and conditional rendering, I modified the logic in the par that I define the matrix that conforms the number and add an extra step before to send to print ."})]}),Object(f.jsx)("div",{className:D.a.ImageContainerPres,children:Object(f.jsx)("img",{src:"/code.png",alt:""})})]})})},B=n("YFqc"),K=n.n(B),U=n("OzxH"),J=n.n(U),W=n("uGNC"),Y=function(){return Object(f.jsxs)("footer",{children:[Object(f.jsxs)("div",{className:J.a.Frameworks,children:[Object(f.jsx)("h4",{children:W.frameworks.name}),Object(f.jsx)("ul",{children:W.frameworks.list.map((function(e,t){return Object(f.jsx)("li",{children:Object(f.jsx)("img",{src:e,alt:""})},String(e)+t)}))})]}),Object(f.jsxs)("div",{className:J.a.ContactContainer,children:[Object(f.jsx)("h4",{children:W.contact.name}),Object(f.jsx)("ul",{children:W.contact.list.map((function(e,t){return Object(f.jsx)("li",{children:Object(f.jsx)(K.a,{href:e.link,passHref:!0,children:Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("img",{src:e.img,alt:""}),Object(f.jsx)("span",{children:e.name})]})})},String(e)+t)}))})]}),Object(f.jsx)("div",{className:J.a.Legal,children:Object(f.jsx)("ul",{children:W.legal.map((function(e,t){return Object(f.jsxs)("li",{children:[" ",e]},String(e)+t)}))})})]})},z=n("8Kt/"),X=n.n(z),V=n("oIjp"),Z=n.n(V),$=n("8AoV"),G=n.n($),Q=function(){var e=o(function(){var e=Object(r.useState)(!1),t=e[0],n=e[1];return Object(r.useEffect)((function(){window.onscroll=function(){window.pageYOffset>0&&!t?n(!0):0===window.pageYOffset&&n(!1)}}),[]),[{value:t}]}(),1)[0];return Object(f.jsxs)("header",{className:"".concat(G.a.Header," ").concat(e.value&&G.a.Scrolling),children:[Object(f.jsx)("div",{className:G.a.ImageContainer,children:Object(f.jsx)("img",{src:"/logo-bc.png",alt:""})}),Object(f.jsx)("div",{className:G.a.NavContainer,children:Object(f.jsx)("nav",{children:Object(f.jsx)("ul",{children:Object(f.jsxs)("li",{children:[Object(f.jsx)("h4",{children:"Developed by Demis Rinc\xf3n"}),Object(f.jsx)("img",{src:"/photo.jpg",alt:""})]})})})})]})},ee=function(e){var t=e.children;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(X.a,{children:Object(f.jsx)("title",{children:"Bright coders exercise"})}),Object(f.jsxs)("main",{className:Z.a.MainContainer,children:[Object(f.jsx)(Q,{}),t]})]})},te=n("PEqZ"),ne=n.n(te),re=function(){return Object(f.jsx)("div",{className:ne.a.MainPresentation,children:Object(f.jsx)("div",{className:ne.a.ImageContainer,children:Object(f.jsxs)("div",{className:ne.a.PresentationLabels,children:[Object(f.jsx)("h1",{children:"Object oriented programng exercise"}),Object(f.jsx)("h3",{children:"In this page you will found the solution to the problem presented in the github file"})]})})})};t.default=function(){return Object(f.jsxs)(ee,{children:[Object(f.jsx)(re,{}),Object(f.jsx)(R,{title:"First Part of the Exercise",legend:"In this part you requested that you can write a number and \r then it should be written on the command line, so I display it in \r two different ways."}),Object(f.jsx)(F,{}),Object(f.jsx)(R,{mod:!0,title:"Second Part of the Exercise",legend:"In this part you requested that you can change the size of a number."}),Object(f.jsx)(Y,{})]})}},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var c,o=a(n("q1tI")),i=n("elyg"),s=n("nOHt"),u=new Map,l=window.IntersectionObserver,f={};var d=function(e,t){var n=c||(l?c=new l((function(e){e.forEach((function(e){if(u.has(e.target)){var t=u.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(c.unobserve(e.target),u.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),u.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}u.delete(e)}):function(){}};function h(e,t,n,r){(0,i.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),f[t+"%"+n]=!0)}var p=function(e){var t=!1!==e.prefetch,n=o.default.useState(),a=r(n,2),c=a[0],u=a[1],p=(0,s.useRouter)(),b=p&&p.pathname||"/",m=o.default.useMemo((function(){var t=(0,i.resolveHref)(b,e.href,!0),n=r(t,2),a=n[0],c=n[1];return{href:a,as:e.as?(0,i.resolveHref)(b,e.as):c||a}}),[b,e.href,e.as]),j=m.href,v=m.as;o.default.useEffect((function(){if(t&&l&&c&&c.tagName&&(0,i.isLocalURL)(j)&&!f[j+"%"+v])return d(c,(function(){h(p,j,v)}))}),[t,c,j,v,p]);var O=e.children,y=e.replace,g=e.shallow,x=e.scroll;"string"===typeof O&&(O=o.default.createElement("a",null,O));var w=o.Children.only(O),_={ref:function(e){e&&u(e),w&&"object"===typeof w&&w.ref&&("function"===typeof w.ref?w.ref(e):"object"===typeof w.ref&&(w.ref.current=e))},onClick:function(e){w.props&&"function"===typeof w.props.onClick&&w.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,c,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==o&&(o=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:c}).then((function(e){e&&o&&(window.scrollTo(0,0),document.body.focus())})))}(e,p,j,v,y,g,x)}};return t&&(_.onMouseEnter=function(e){(0,i.isLocalURL)(j)&&(w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(e),h(p,j,v,{priority:!0}))}),(e.passHref||"a"===w.type&&!("href"in w.props))&&(_.href=(0,i.addBasePath)(v)),o.default.cloneElement(w,_)};t.default=p},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},uGNC:function(e){e.exports=JSON.parse('{"frameworks":{"name":"Frameworks and tools","list":["react.svg","next.svg","sass.svg","netlify.svg"]},"contact":{"name":"Contact","list":[{"link":"https://www.linkedin.com/in/demis-alberto-rincon-martinez/","img":"in.svg","name":"Linkedin"},{"link":"https://www.facebook.com/noctisdemis.luciscaelum","img":"face.svg","name":"Facebook"},{"link":"https://bright-coders-oop.netlify.app/","img":"ntl.svg","name":"Click here to see this app also deployed on Netlify"}]},"legal":["All the images used here belong to their respective authors.","The code was written by me feel free to use it.","This is an exercise for training it don\'t have lucrative intentions."]}')}},[["H0SL",0,2,1,3]]]);