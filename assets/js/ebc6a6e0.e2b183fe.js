"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[5676],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),k=s(a),m=r,u=k["".concat(p,".").concat(m)]||k[m]||d[m]||o;return a?n.createElement(u,i(i({ref:t},c),{},{components:a})):n.createElement(u,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},36424:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],l={},p="Facebook Pages",s={unversionedId:"integrations/sources/facebook-pages",id:"integrations/sources/facebook-pages",title:"Facebook Pages",description:"Sync overview",source:"@site/../docs/integrations/sources/facebook-pages.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/facebook-pages",permalink:"/integrations/sources/facebook-pages",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/facebook-pages.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Facebook Marketing",permalink:"/integrations/sources/facebook-marketing"},next:{title:"Faker",permalink:"/integrations/sources/faker"}},c={},d=[{value:"Sync overview",id:"sync-overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Data type mapping",id:"data-type-mapping",level:3},{value:"Features",id:"features",level:3},{value:"Rate Limiting &amp; Performance Considerations",id:"rate-limiting--performance-considerations",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"Facebook Developer Account",id:"facebook-developer-account",level:3},{value:"Facebook App",id:"facebook-app",level:3},{value:"If you don&#39;t have a Facebook App",id:"if-you-dont-have-a-facebook-app",level:4},{value:"Connect a User Page",id:"connect-a-user-page",level:4},{value:"Getting Page ID",id:"getting-page-id",level:4},{value:"Changelog",id:"changelog",level:2}],k={toc:d};function m(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},k,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"facebook-pages"},"Facebook Pages"),(0,o.kt)("h2",{id:"sync-overview"},"Sync overview"),(0,o.kt)("p",null,"The Facebook Pages source uses ",(0,o.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/graph-api/?locale=en_US"},"Facebook Graph API")," to read data from the Facebook social graph."),(0,o.kt)("h3",{id:"output-schema"},"Output schema"),(0,o.kt)("p",null,"This Source is capable of syncing the following core Streams:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/graph-api/reference/v11.0/page/#fields"},"Page")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/graph-api/reference/v11.0/page/feed#pubfields"},"Post")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/graph-api/reference/v11.0/page/insights/#fields"},"Page Insights")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/graph-api/reference/v11.0/insights"},"Post Insights"))),(0,o.kt)("p",null,"The linked Facebook docs go into detail about the fields present on those streams."),(0,o.kt)("h3",{id:"data-type-mapping"},"Data type mapping"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Integration Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Airbyte Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"number")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"number")),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"array")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"array")),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"object")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"object")),(0,o.kt)("td",{parentName:"tr",align:"left"})))),(0,o.kt)("h3",{id:"features"},"Features"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,o.kt)("td",{parentName:"tr",align:"left"},"No"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,o.kt)("td",{parentName:"tr",align:"left"},"No"),(0,o.kt)("td",{parentName:"tr",align:"left"})))),(0,o.kt)("h3",{id:"rate-limiting--performance-considerations"},"Rate Limiting & Performance Considerations"),(0,o.kt)("p",null,"Facebook heavily throttles API tokens generated from Facebook Apps by default, making it infeasible to use such a token for syncs with Airbyte. To be able to use this connector without your syncs taking days due to rate limiting follow the instructions in the Setup Guide below to access better rate limits."),(0,o.kt)("p",null,"See Facebook's ",(0,o.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/graph-api/overview/rate-limiting"},"documentation on rate limiting")," for more information on requesting a quota upgrade."),(0,o.kt)("h2",{id:"getting-started"},"Getting started"),(0,o.kt)("h3",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A Facebook Developer Account"),(0,o.kt)("li",{parentName:"ul"},"A Facebook App"),(0,o.kt)("li",{parentName:"ul"},"A Facebook API Page Access Token"),(0,o.kt)("li",{parentName:"ul"},"A Facebook ",(0,o.kt)("inlineCode",{parentName:"li"},"Page")," ID")),(0,o.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,o.kt)("h3",{id:"facebook-developer-account"},"Facebook Developer Account"),(0,o.kt)("p",null,"Follow the ",(0,o.kt)("a",{parentName:"p",href:"https://developers.facebook.com/async/registration/"},"Facebook Developer Account ")," link to create new account."),(0,o.kt)("h3",{id:"facebook-app"},"Facebook App"),(0,o.kt)("h4",{id:"if-you-dont-have-a-facebook-app"},"If you don't have a Facebook App"),(0,o.kt)("p",null,"Visit the ",(0,o.kt)("a",{parentName:"p",href:"https://developers.facebook.com/apps/"},"Facebook Developers App hub"),' and create an App and choose "Company" as the purpose of the app. Fill out the remaining fields to create your app, then follow along the "Connect a User Page" section.'),(0,o.kt)("h4",{id:"connect-a-user-page"},"Connect a User Page"),(0,o.kt)("p",null,"Follow the ",(0,o.kt)("a",{parentName:"p",href:"https://developers.facebook.com/tools/explorer/"},"Graph API Explorer")," link. 1. Choose your app at ",(0,o.kt)("inlineCode",{parentName:"p"},"Facebook App")," field 2. Choose your Page at ",(0,o.kt)("inlineCode",{parentName:"p"},"User or Page")," field 3. Add next permission:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"pages","_","read","_","engagement"),(0,o.kt)("li",{parentName:"ul"},"pages","_","read","_","user","_","content "),(0,o.kt)("li",{parentName:"ul"},"pages","_","show","_","list"),(0,o.kt)("li",{parentName:"ul"},"read","_","insights",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Click Generate Access Token and follow instructions.")))),(0,o.kt)("p",null,"After all the steps, it should look something like this"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(82052).Z,width:"1906",height:"978"})),(0,o.kt)("p",null,"Now can copy your Access Token from ",(0,o.kt)("inlineCode",{parentName:"p"},"Access Token")," field ","(","This is a short live Page access token, if you need a long-lived Page access token, you can ",(0,o.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/facebook-login/access-tokens/refreshing#get-a-long-lived-page-access-token"},"generate")," one from a long-lived User access token. Long-lived Page access token do not have an expiration date and only expire or are invalidated under certain conditions.",")"),(0,o.kt)("h4",{id:"getting-page-id"},"Getting Page ID"),(0,o.kt)("p",null,"You can easily get the page id from the page url. For example, if you have a page URL such as ",(0,o.kt)("inlineCode",{parentName:"p"},"https://www.facebook.com/Test-1111111111"),", the ID would be",(0,o.kt)("inlineCode",{parentName:"p"},"Test-1111111111"),"."),(0,o.kt)("h2",{id:"changelog"},"Changelog"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"0.1.6"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-12-22"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9032"},"9032")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Remove deprecated field ",(0,o.kt)("inlineCode",{parentName:"td"},"live_encoders")," from Page stream")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"0.1.5"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-11-26"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/"},"8267")),(0,o.kt)("td",{parentName:"tr",align:"left"},"updated all empty objects in schemas for Page and Post streams")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-11-26"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/"})),(0,o.kt)("td",{parentName:"tr",align:"left"},"Remove unsupported insights_export field from Pages request")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-10-28"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7440"},"7440")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Generate Page token from config access token")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-10-18"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7128"},"7128")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Upgrade Facebook API to v.12")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-09-30"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6438"},"6438")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Annotate Oauth2 flow initialization parameters in connector specification")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-09-01"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5158"},"5158")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Initial Release")))))}m.isMDXComponent=!0},82052:function(e,t,a){t.Z=a.p+"assets/images/facebook-pages-1-e8e192fd0d88bfd23825f15a985b5fa3.png"}}]);