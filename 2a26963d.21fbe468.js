(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{155:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),u=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},g=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(t),g=r,m=p["".concat(l,".").concat(g)]||p[g]||d[g]||a;return t?o.a.createElement(m,i(i({ref:n},s),{},{components:t})):o.a.createElement(m,i({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=g;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<a;s++)l[s]=t[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},81:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(2),o=t(6),a=(t(0),t(155)),l={id:"scroll-handling",title:"Scroll Handling",sidebar_label:"Scroll Handling",slug:"/scroll-handling/"},i={unversionedId:"scroll-handling",id:"scroll-handling",isDocsHomePage:!1,title:"Scroll Handling",description:"Loading and rendering complex content while scrolling affects the scrolling performance.",source:"@site/docs/scroll-handling.md",slug:"/scroll-handling/",permalink:"/scroll-handling/",editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/site/docs/scroll-handling.md",version:"current",sidebar_label:"Scroll Handling",sidebar:"someSidebar",previous:{title:"Auto Resizing Virtual List",permalink:"/auto-resizing/"},next:{title:"Scroll to Index",permalink:"/scroll-to-index/"}},c=[],s={rightToc:c};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Loading and rendering complex content while scrolling affects the scrolling performance."),Object(a.b)("p",null,"To let the integrator address that issue, the ",Object(a.b)("inlineCode",{parentName:"p"},"Virtuoso")," component exposes a ",Object(a.b)("inlineCode",{parentName:"p"},"isScrolling")," event property which gets called when the user starts/stops scrolling.\nThe callback receives true when the user starts scrolling and false shortly after the last scroll event."),Object(a.b)("p",null,"Handling this event can improve performance by hiding/replacing certain heavy elements in the items."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"live include-data",live:!0,"include-data":!0}),"import { Virtuoso } from 'react-virtuoso'\nimport { generateUsers, avatar, avatarPlaceholder } from './data'\nimport { useState, useMemo } from 'react'\n\nexport default function App() {\n  const [isScrolling, setIsScrolling] = useState(false);\n  const users = useMemo(() => generateUsers(100), [])\n  return (\n    <Virtuoso\n      style={{ height: 400 }}\n      data={users}\n      isScrolling={setIsScrolling}\n      itemContent={(index, user) => {\n        return (\n          <div\n            style={{\n              backgroundColor: user.bgColor,\n              padding: '1rem 0'\n            }}\n          >\n            \n            <div style={{ float: 'left', margin: '1rem' }}>\n              {isScrolling ? avatarPlaceholder() : avatar() }\n            </div>\n\n            <h4>{user.name}</h4>\n            <div style={{ marginTop: '1rem' }}>\n            {user.longText}\n            </div>\n          </div>\n        )\n      }}\n    />\n  )\n}\n")))}u.isMDXComponent=!0}}]);