(window.webpackJsonp=window.webpackJsonp||[]).push([[16,102],{157:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(160),o=n(162),i=n(22),c=n(170),s=n(2),m=n(6),u=n(163),d=n(164),b=n(190),f=n(182),p=n(187),h=n(188),g=n(189),v=n(186),k=n(161),E=n(173),j=n(75),x=n.n(j);var O=function e(t,n){return"link"===t.type?Object(b.a)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))};function C(e){var t,n,l,o=e.item,i=e.onItemClick,c=e.collapsible,d=e.activePath,b=Object(m.a)(e,["item","onItemClick","collapsible","activePath"]),f=o.items,p=o.label,h=O(o,d),g=(n=h,l=Object(a.useRef)(n),Object(a.useEffect)((function(){l.current=n}),[n]),l.current),v=Object(a.useState)((function(){return!!c&&(!h&&o.collapsed)})),k=v[0],E=v[1];Object(a.useEffect)((function(){h&&!g&&k&&E(!1)}),[h,g,k]);var j=Object(a.useCallback)((function(e){e.preventDefault(),E((function(e){return!e}))}),[E]);return 0===f.length?null:r.a.createElement("li",{className:Object(u.a)("menu__list-item",{"menu__list-item--collapsed":k}),key:p},r.a.createElement("a",Object(s.a)({className:Object(u.a)("menu__link",(t={"menu__link--sublist":c,"menu__link--active":c&&h},t[x.a.menuLinkText]=!c,t)),onClick:c?j:void 0,href:c?"#!":void 0},b),p),r.a.createElement("ul",{className:"menu__list"},f.map((function(e){return r.a.createElement(y,{tabIndex:k?"-1":"0",key:e.label,item:e,onItemClick:i,collapsible:c,activePath:d})}))))}function N(e){var t=e.item,n=e.onItemClick,a=e.activePath,l=(e.collapsible,Object(m.a)(e,["item","onItemClick","activePath","collapsible"])),o=t.href,i=t.label,c=O(t,a);return r.a.createElement("li",{className:"menu__list-item",key:i},r.a.createElement(k.a,Object(s.a)({className:Object(u.a)("menu__link",{"menu__link--active":c}),to:o},Object(E.a)(o)?{isNavLink:!0,exact:!0,onClick:n}:{target:"_blank",rel:"noreferrer noopener"},l),i))}function y(e){switch(e.item.type){case"category":return r.a.createElement(C,e);case"link":default:return r.a.createElement(N,e)}}var _=function(e){var t,n,l=e.path,i=e.sidebar,c=e.sidebarCollapsible,m=void 0===c||c,b=Object(a.useState)(!1),E=b[0],j=b[1],O=Object(d.a)().navbar,C=O.title,N=O.hideOnScroll,_=Object(o.a)().isClient,w=Object(g.a)(),M=w.logoLink,I=w.logoLinkProps,P=w.logoImageUrl,S=w.logoAlt,L=Object(f.a)().isAnnouncementBarClosed,R=Object(v.a)().scrollY;Object(p.a)(E);var U=Object(h.a)();return Object(a.useEffect)((function(){U===h.b.desktop&&j(!1)}),[U]),r.a.createElement("div",{className:Object(u.a)(x.a.sidebar,(t={},t[x.a.sidebarWithHideableNavbar]=N,t))},N&&r.a.createElement(k.a,Object(s.a)({tabIndex:-1,className:x.a.sidebarLogo,to:M},I),null!=P&&r.a.createElement("img",{key:_,src:P,alt:S}),null!=C&&r.a.createElement("strong",null,C)),r.a.createElement("div",{className:Object(u.a)("menu","menu--responsive",x.a.menu,(n={"menu--show":E},n[x.a.menuWithAnnouncementBar]=!L&&0===R,n))},r.a.createElement("button",{"aria-label":E?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){j(!E)}},E?r.a.createElement("span",{className:Object(u.a)(x.a.sidebarMenuIcon,x.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{"aria-label":"Menu",className:x.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},i.map((function(e){return r.a.createElement(y,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),j(!1)},collapsible:m,activePath:l})})))))},w=n(177),M=n(181),I=n(168),P=n(79),S=n.n(P),L=n(191);function R(e){var t,n,a=e.currentDocRoute,i=e.versionMetadata,s=e.children,m=Object(o.a)(),u=m.siteConfig,d=m.isClient,b=i.pluginId,f=i.permalinkToSidebar,p=i.docsSidebars,h=i.version,g=f[a.path],v=p[g];return r.a.createElement(c.a,{key:d,searchMetadatas:{version:h,tag:Object(L.b)(b,h)}},r.a.createElement("div",{className:S.a.docPage},v&&r.a.createElement("div",{className:S.a.docSidebarContainer,role:"complementary"},r.a.createElement(_,{key:g,sidebar:v,path:a.path,sidebarCollapsible:null===(t=null===(n=u.themeConfig)||void 0===n?void 0:n.sidebarCollapsible)||void 0===t||t})),r.a.createElement("main",{className:S.a.docMainContainer},r.a.createElement(l.a,{components:w.a},s))))}t.default=function(e){var t=e.route.routes,n=e.versionMetadata,a=e.location,l=t.find((function(e){return Object(I.matchPath)(a.pathname,e)}));return l?r.a.createElement(R,{currentDocRoute:l,versionMetadata:n},Object(i.a)(t)):r.a.createElement(M.default,e)}},175:function(e,t,n){"use strict";var a=n(176),r=n(0),l=n.n(r),o=n(162);n(53);t.a=function(e){var t=Object(o.a)().siteConfig.themeConfig.sandpack,n=e.children,r=e.template,i=void 0===r?"react":r,c=e.file,s=void 0===c?"/App.js":c,m=e.theme,u=void 0===m?t.theme:m;if(e.live){var d,b=n.split(/(```([\s\S]*?(?:(?!\\)[\s\S]))```)/gm).filter((function(e){return e.startsWith("```")})),f=b.reduce((function(e,t){var n,a,r,l=t.replace(/```/g,"").split("\n"),o=l[0],i=l.slice(1),c=null!==(n=null===(a=o.match(/file=(.+)/))||void 0===a?void 0:a[1])&&void 0!==n?n:"";return Object.assign({},e,((r={})[c]={code:i.join("\n")},r))}),{});return l.a.createElement(a.a,{editorHeight:600,customSetup:{dependencies:Object.assign({"react-virtuoso":"latest"},e["include-data"]?{faker:"5.1.0",lodash:"latest"}:{},"@mui/material"===e.import?{"@mui/material":"latest","@emotion/styled":"latest","@emotion/react":"latest"}:{},"react-table"===e.import?{"react-table":"latest"}:{},"react-sortable-hoc"===e.import?{"react-sortable-hoc":"^1.11.0"}:{},"react-beautiful-dnd"===e.import?{"react-beautiful-dnd":"latest"}:{},"@emotion/styled"===e.import?{"@emotion/styled":"latest","@emotion/react":"latest"}:{})},files:n?b.length?f:Object.assign((d={},d[s]=n,d),e["include-data"]?{"/data.js":{code:"\nimport faker from 'faker'\nimport { groupBy } from 'lodash'\nimport React from 'react'\n\nconst randomHeight = () => Math.floor(Math.random() * 30 + 24)\n\nconst generateRandomItems = (count) => {\n  return Array.from({ length: count }).map((_, i) => ({\n    text: `Item ${i + 1}`,\n    height: randomHeight(),\n    longText: faker.lorem.paragraphs(1),\n  }))\n}\n\nconst generated = []\n\nexport function toggleBg(index) {\n  return index % 2 ? '#f5f5f5' : 'white'\n}\n\nexport function user(index = 0) {\n  let firstName = faker.name.firstName()\n  let lastName = faker.name.lastName()\n\n  return {\n    index: index + 1,\n    bgColor: toggleBg(index),\n    name: `${firstName} ${lastName}`,\n    initials: `${firstName.substr(0, 1)}${lastName.substr(0, 1)}`,\n    jobTitle: faker.name.jobTitle(),\n    description: faker.lorem.sentence(10),\n    longText: faker.lorem.paragraphs(1),\n  }\n}\n\nexport const getUser = (index) => {\n  if (!generated[index]) {\n    generated[index] = user(index)\n  }\n\n  return generated[index]\n}\n\nconst userSorter = (a, b) => {\n  if (a.name < b.name) {\n    return -1\n  }\n  if (a.name > b.name) {\n    return 1\n  }\n  return 0\n}\n\nexport function generateUsers(length, startIndex = 0) {\n  return Array.from({ length }).map((_, i) => getUser(i + startIndex))\n}\n\nexport function generateGroupedUsers(length) {\n  const users = Array.from({ length })\n    .map((_, i) => getUser(i))\n    .sort(userSorter)\n  const groupedUsers = groupBy(users, (user) => user.name[0])\n  const groupCounts = Object.values(groupedUsers).map((users) => users.length)\n  const groups = Object.keys(groupedUsers)\n\n  return { users, groupCounts, groups }\n}\n\nexport const avatar = () =>\n  React.createElement(\n    'div',\n    {\n      style: {\n        backgroundColor: 'blue',\n        borderRadius: '50%',\n        width: 50,\n        height: 50,\n        paddingTop: 15,\n        paddingLeft: 15,\n        color: 'white',\n        boxSizing: 'border-box'\n      },\n    },\n    \"AB\"\n  )\n\nexport const avatarPlaceholder = (text = ' ') =>\n  React.createElement(\n    'div',\n    {\n      style: {\n        backgroundColor: '#eef2f4',\n        borderRadius: '50%',\n        width: 50,\n        height: 50,\n      },\n    },\n    text\n  )\n\nconst range = (len) => {\n  const arr = []\n  for (let i = 0; i < len; i++) {\n    arr.push(i)\n  }\n  return arr\n}\n\nconst newPerson = () => {\n  const statusChance = Math.random()\n  return {\n    firstName: faker.name.firstName(),\n    lastName: faker.name.lastName(),\n    age: Math.floor(Math.random() * 30),\n    visits: Math.floor(Math.random() * 100),\n    progress: Math.floor(Math.random() * 100),\n    status: statusChance > 0.66 ? 'relationship' : statusChance > 0.33 ? 'complicated' : 'single',\n  }\n}\n\nexport function makeData(...lens) {\n  const makeDataLevel = (depth = 0) => {\n    const len = lens[depth]\n    return range(len).map((d) => {\n      return {\n        ...newPerson(),\n        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,\n      }\n    })\n  }\n\n  return makeDataLevel()\n}\n",hidden:!0}}:{}):void 0,template:i,theme:u})}return l.a.createElement(a.c,{customSetup:{entry:"index.ts",files:{"index.ts":n.trim()}}},l.a.createElement(a.d,{theme:u},l.a.createElement("button",{className:"sandpack__copy-button",onClick:function(){navigator.clipboard.writeText(n.trim())}},l.a.createElement("svg",{fill:"none",height:"100%",viewBox:"0 0 12 13",width:"100%"},l.a.createElement("g",{clipPath:"url(#a)"},l.a.createElement("path",{d:"M8.21 1.344H2.317c-.54 0-.983.463-.983 1.03v7.212h.983V2.374H8.21v-1.03Zm1.474 2.06H4.281c-.54 0-.983.464-.983 1.03v7.213c0 .566.442 1.03.983 1.03h5.403c.54 0 .983-.464.983-1.03V4.435c0-.567-.442-1.03-.983-1.03Zm0 8.243H4.281V4.435h5.403v7.212Z",fill:"currentColor"})),l.a.createElement("defs",null,l.a.createElement("clipPath",{id:"a"},l.a.createElement("path",{d:"M0 0h12v12H0z",fill:"currentColor",transform:"translate(0 .676)"}))))),l.a.createElement(a.b,null)))}},181:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(170);t.default=function(){return r.a.createElement(l.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);