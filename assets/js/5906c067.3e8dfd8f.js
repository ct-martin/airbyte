"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[2342],{3905:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),p=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return r?n.createElement(f,o(o({ref:e},u),{},{components:r})):n.createElement(f,o({ref:e},u))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},60947:function(t,e,r){r.r(e),r.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],l={},s="Baton",p={unversionedId:"integrations/sources/hellobaton",id:"integrations/sources/hellobaton",title:"Baton",description:"Sync overview",source:"@site/../docs/integrations/sources/hellobaton.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/hellobaton",permalink:"/integrations/sources/hellobaton",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/hellobaton.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Harvest",permalink:"/integrations/sources/harvest"},next:{title:"HTTP Request (Graveyarded)",permalink:"/integrations/sources/http-request"}},u={},c=[{value:"Sync overview",id:"sync-overview",level:2},{value:"This Source Supports the Following Streams",id:"this-source-supports-the-following-streams",level:2},{value:"Data type mapping",id:"data-type-mapping",level:3},{value:"Features",id:"features",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3}],m={toc:c};function d(t){var e=t.components,r=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"baton"},"Baton"),(0,i.kt)("h2",{id:"sync-overview"},"Sync overview"),(0,i.kt)("p",null,"This source can sync data from the ",(0,i.kt)("a",{parentName:"p",href:"https://app.hellobaton.com/api/redoc/"},"baton API"),". At present this connector only supports full refresh syncs meaning that each time you use the connector it will sync all available records from scratch. Please use cautiously if you expect your API to have a lot of records."),(0,i.kt)("h2",{id:"this-source-supports-the-following-streams"},"This Source Supports the Following Streams"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"activity"),(0,i.kt)("li",{parentName:"ul"},"companies"),(0,i.kt)("li",{parentName:"ul"},"milestones"),(0,i.kt)("li",{parentName:"ul"},"phases"),(0,i.kt)("li",{parentName:"ul"},"project_attachments"),(0,i.kt)("li",{parentName:"ul"},"projects"),(0,i.kt)("li",{parentName:"ul"},"task_attachemnts"),(0,i.kt)("li",{parentName:"ul"},"tasks"),(0,i.kt)("li",{parentName:"ul"},"templates"),(0,i.kt)("li",{parentName:"ul"},"time_entries"),(0,i.kt)("li",{parentName:"ul"},"users")),(0,i.kt)("p",null,"Baton adds new streams fairly regularly please submit an issue or PR if this project doesn't support required streams for your use case."),(0,i.kt)("h3",{id:"data-type-mapping"},"Data type mapping"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Integration Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Airbyte Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"integer")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"integer")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"array")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"array")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"object")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"object")),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h3",{id:"features"},"Features"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,i.kt)("p",null,"The connector is rate limited at 1000 requests per minute per api key. If you find yourself receiving errors contact your customer success manager and request a rate limit increase."),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("h3",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Baton account"),(0,i.kt)("li",{parentName:"ul"},"Baton api key")))}d.isMDXComponent=!0}}]);