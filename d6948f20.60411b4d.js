(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(6),i=(n(0),n(156)),s={id:"endless-scrolling",title:"Endless Scrolling",sidebar_label:"Endless Scrolling",slug:"/endless-scrolling/",description:"The React Virtuoso component makes it trivial to implement infinite scrolling lists in both directions with variably sized items."},a={unversionedId:"endless-scrolling",id:"endless-scrolling",isDocsHomePage:!1,title:"Endless Scrolling",description:"The React Virtuoso component makes it trivial to implement infinite scrolling lists in both directions with variably sized items.",source:"@site/docs/endless-scrolling.md",slug:"/endless-scrolling/",permalink:"/endless-scrolling/",editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/site/docs/endless-scrolling.md",version:"current",sidebar_label:"Endless Scrolling",sidebar:"someSidebar",previous:{title:"Press to Load More",permalink:"/press-to-load-more/"},next:{title:"Prepending Items",permalink:"/prepend-items/"}},l=[],c={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Use the ",Object(i.b)("inlineCode",{parentName:"p"},"endReached")," callback to automatically load more items when the user scrolls to the bottom of the list, creating endless scrolling.\nIf you want to load items more aggressively, set the ",Object(i.b)("inlineCode",{parentName:"p"},"overscan")," or the ",Object(i.b)("inlineCode",{parentName:"p"},"increaseViewportBy")," property."),Object(i.b)("p",null,"For reverse endless scrolling implementation, check ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/prepend-items/"}),"the prepend items")," example."),Object(i.b)("p",null,"Scroll fast to the bottom of the list to load additional items."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"live include-data",live:!0,"include-data":!0}),"import { Virtuoso } from 'react-virtuoso'\nimport { generateUsers } from './data'\nimport { useState, useMemo, useCallback, useEffect, useRef } from 'react'\n\nexport default function App() {\n  const [users, setUsers] = useState(() => [])\n\n  const loadMore = useCallback(() => {\n    return setTimeout(() => {\n      setUsers((users) => [...users, ...generateUsers(100, users.length)])\n    }, 200)\n  }, [setUsers])\n\n  useEffect(() => {\n    const timeout = loadMore()\n    return () => clearTimeout(timeout)\n  }, [])\n\n  return (\n    <Virtuoso\n      style={{ height: 300 }}\n      data={users}\n      endReached={loadMore}\n      overscan={200}\n      itemContent={(index, user) => {\n        return <div style={{ backgroundColor: user.bgColor }}>{user.name}</div>\n      }}\n      components={{ Footer }}\n    />\n  )\n}\n\n\nconst Footer = () => {\n  return (\n    <div\n      style={{\n        padding: '2rem',\n        display: 'flex',\n        justifyContent: 'center',\n      }}\n    >\n      Loading...\n    </div>\n  )\n}\n\n")))}u.isMDXComponent=!0},156:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?o.a.createElement(b,a(a({ref:t},c),{},{components:n})):o.a.createElement(b,a({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);