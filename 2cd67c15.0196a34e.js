(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{155:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),m=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=m(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=m(n),d=r,b=l["".concat(i,".").concat(d)]||l[d]||u[d]||a;return n?o.a.createElement(b,c(c({ref:t},p),{},{components:n})):o.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return m}));var r=n(2),o=n(6),a=(n(0),n(155)),i={id:"customize-structure",title:"Customize Rendering",sidebar_label:"Customize Rendering",slug:"/customize-structure/"},c={unversionedId:"customize-structure",id:"customize-structure",isDocsHomePage:!1,title:"Customize Rendering",description:'The React Virtuoso component renders as several nested DIV elements. The default values in the component prop entries are "div".',source:"@site/docs/customize-structure.md",slug:"/customize-structure/",permalink:"/customize-structure/",editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/site/docs/customize-structure.md",version:"current",sidebar_label:"Customize Rendering",sidebar:"someSidebar",previous:{title:"Customize Root Element",permalink:"/custom-scroll-container/"},next:{title:"Virtuoso API Reference",permalink:"/virtuoso-api-reference/"}},s=[{value:"TypeScript Interfaces",id:"typescript-interfaces",children:[]}],p={rightToc:s};function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The React Virtuoso component renders as several nested ",Object(a.b)("inlineCode",{parentName:"p"},"DIV")," elements. The default values in the ",Object(a.b)("inlineCode",{parentName:"p"},"component")," prop entries are ",Object(a.b)("inlineCode",{parentName:"p"},'"div"'),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-txt"}),"components.Scroller (div)\n  |-viewport (div)\n    |-header(div* headerFooterTag)\n      |-components.Header\n    |-components.List (div)\n      |-components.Group (div+)\n        |-groupItemContent\n      |-components.Item (div+)\n        |-itemContent\n      |-components.EmptyPlaceholder\n    |-footer(div*, headerFooterTag)\n      |-components.Footer\n    |-components.List (Top Items) (div)\n      |-components.Item (div+)\n        |-itemContent\n      |-components.Group (div+)\n        |-groupItemContent\n\n")),Object(a.b)("p",null,"Pass a custom component to the specified key in ",Object(a.b)("inlineCode",{parentName:"p"},"components")," to change rendering.\nNotice that the ",Object(a.b)("inlineCode",{parentName:"p"},"List")," component must accept and pass its ",Object(a.b)("inlineCode",{parentName:"p"},"ref")," to the actual DOM element.\nThe example below adds borders to each customizable element."),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"If you pass the components inline and combine that with ",Object(a.b)("inlineCode",{parentName:"p"},"useState"),", each re-render will pass a fresh instance component, causing unnecessary unmounting and remounting.\nDon't do"),Object(a.b)("pre",{parentName:"div"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"<Virtuoso components={{ Header:() => <div></div> }} />\n")),Object(a.b)("p",{parentName:"div"},"Move the components outside. If you need to capture a certain state in them, use the ",Object(a.b)("inlineCode",{parentName:"p"},"context")," prop."))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"live import=@emotion/styled",live:!0,import:"@emotion/styled"}),"import styled from '@emotion/styled'\nimport React from 'react'\nimport { Virtuoso } from 'react-virtuoso'\n\nconst Item = styled.div`\n  border: 2px solid red;\n`\nconst ListEl = styled.div`\n  border: 1px solid blue;\n`\nconst Header = () => 'Header'\nconst Footer = () => 'Footer'\n\nconst List = React.forwardRef((props, ref) => {\n  return <ListEl {...props} ref={ref} />\n})\n\nexport default function App() {\n  return (\n    <Virtuoso style={{ height: 400 }} components={{ Item, List, Header, Footer }} totalCount={30} itemContent={(idx) => `Item ${idx}`} />\n  )\n}\n")),Object(a.b)("h2",{id:"typescript-interfaces"},"TypeScript Interfaces"),Object(a.b)("p",null,"The types for each component are available in the ",Object(a.b)("inlineCode",{parentName:"p"},"Components")," interface. The example below annotates the ",Object(a.b)("inlineCode",{parentName:"p"},"Scroller")," custom component:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"import { Components } from 'react-virtuoso'\n\nconst Scroller: Components['Scroller'] = React.forwardRef(({ style, children }, ref) => {\n  return (\n    <div style={style} ref={ref}>\n      {children}\n    </div>\n  )\n})\n")))}m.isMDXComponent=!0}}]);