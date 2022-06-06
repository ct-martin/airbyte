"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[2888],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return u}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),u=n,k=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return r?a.createElement(k,i(i({ref:t},c),{},{components:r})):a.createElement(k,i({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},17875:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],l={},p="Looker",s={unversionedId:"integrations/sources/looker",id:"integrations/sources/looker",title:"Looker",description:"Overview",source:"@site/../docs/integrations/sources/looker.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/looker",permalink:"/integrations/sources/looker",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/looker.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Linnworks",permalink:"/integrations/sources/linnworks"},next:{title:"Magento",permalink:"/integrations/sources/magento"}},c={},m=[{value:"Overview",id:"overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Features",id:"features",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"CHANGELOG",id:"changelog",level:2}],d={toc:m};function u(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"looker"},"Looker"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The Looker source supports Full Refresh syncs. That is, every time a sync is run, Airbyte will copy all rows in the tables and columns you set up for replication into the destination in a new table."),(0,o.kt)("h3",{id:"output-schema"},"Output schema"),(0,o.kt)("p",null,"Several output streams are available from this source:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.looker.com/reference/api-and-integration/api-reference/v3.1/color-collection#get_all_color_collections"},"Color Collections")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.looker.com/reference/api-and-integration/api-reference/v3.1/connection#get_all_connections"},"Connections")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.looker.com/reference/api-and-integration/api-reference/v3.1/content#get_all_content_metadatas"},"Content Metadata")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.looker.com/reference/api-and-integration/api-reference/v3.1/content#get_all_content_metadata_accesses"},"Content Metadata Access")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.looker.com/reference/api-and-integration/api-reference/v3.1/dashboard#get_all_dashboards"},"Dashboards"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.looker.com/reference/api-and-integration/api-reference/v3.1/dashboard#get_all_dashboardelements"},"Dashboard Elements")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.looker.com/reference/api-and-integration/api-reference/v3.1/dashboard#get_all_dashboard_filters"},"Dashboard Filters")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.looker.com/reference/api-and-integration/api-reference/v3.1/dashboard#get_all_dashboardlayouts"},"Dashboard Layouts")," "))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.looker.com/reference/api-and-integration/api-reference/v3.1/datagroup#get_all_datagroups"},"Datagroups")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.looker.com/reference/api-and-integration/api-reference/v3.1/folder#get_all_folders"},"Folders")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.looker.com/reference/api-and-integration/api-reference/v3.1/group#get_all_groups"},"Groups")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.looker.com/reference/api-and-integration/api-reference/v3.1/homepage#get_all_homepages"},"Homepages")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.looker.com/reference/api-and-integration/api-reference/v3.1/integration#get_all_integration_hubs"},"Integration Hubs")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.looker.com/reference/api-and-integration/api-reference/v3.1/integration#get_all_integrations"},"Integrations")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.looker.com/reference/api-and-integration/api-reference/v3.1/dashboard#get_all_dashboards"},"Lookml Dashboards")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.looker.com/reference/api-and-integration/api-reference/v3.1/lookml-model#get_all_lookml_models"},"Lookml Models")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.looker.com/reference/api-and-integration/api-reference/v3.1/look#get_all_looks"},"Looks")," ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.looker.com/reference/api-and-integration/api-reference/v3.1/look#run_look"},"Run Look")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.looker.com/reference/api-and-integration/api-reference/v3.1/project#get_all_projects"},"Projects")," ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.looker.com/reference/api-and-integration/api-reference/v3.1/project#get_all_project_files"},"Project Files")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.looker.com/reference/api-and-integration/api-reference/v3.1/project#get_all_git_branches"},"Git Branches")," "))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.looker.com/reference/api-and-integration/api-reference/v3.1/query#run_query"},"Query History")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.looker.com/reference/api-and-integration/api-reference/v3.1/role#get_all_roles"},"Roles")," ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.looker.com/reference/api-and-integration/api-reference/v3.1/role#get_all_model_sets"},"Model Sets")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.looker.com/reference/api-and-integration/api-reference/v3.1/role#get_all_permission_sets"},"Permission Sets")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.looker.com/reference/api-and-integration/api-reference/v3.1/role#get_all_permissions"},"Permissions")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.looker.com/reference/api-and-integration/api-reference/v3.1/role#get_role_groups"},"Role Groups")," "))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.looker.com/reference/api-and-integration/api-reference/v3.1/scheduled-plan#get_all_scheduled_plans"},"Scheduled Plans")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.looker.com/reference/api-and-integration/api-reference/v3.1/space#get_all_spaces"},"Spaces")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.looker.com/reference/api-and-integration/api-reference/v3.1/user-attribute#get_all_user_attributes"},"User Attributes")," ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.looker.com/reference/api-and-integration/api-reference/v3.1/user-attribute#get_user_attribute_group_values"},"User Attribute Group Value")," "))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.looker.com/reference/api-and-integration/api-reference/v3.1/auth#get_all_user_login_lockouts"},"User Login Lockouts")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.looker.com/reference/api-and-integration/api-reference/v3.1/user#get_all_users"},"Users")," ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.looker.com/reference/api-and-integration/api-reference/v3.1/user#get_user_attribute_values"},"User Attribute Values")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.looker.com/reference/api-and-integration/api-reference/v3.1/user#get_all_web_login_sessions"},"User Sessions")," "))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.looker.com/reference/api-and-integration/api-reference/v3.1/config#get_apiversion"},"Versions")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.looker.com/reference/api-and-integration/api-reference/v3.1/workspace"},"Workspaces")," ")),(0,o.kt)("p",null,"If there are more endpoints you'd like Airbyte to support, please ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/new/choose"},"create an issue.")),(0,o.kt)("h3",{id:"features"},"Features"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Coming soon")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Replicate Incremental Deletes"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Coming soon")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"SSL connection"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,o.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,o.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,o.kt)("p",null,"The Looker connector should not run into Looker API limitations under normal usage. Please ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues"},"create an issue")," if you see any rate limit issues that are not automatically retried successfully."),(0,o.kt)("h2",{id:"getting-started"},"Getting started"),(0,o.kt)("h3",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Client Id"),(0,o.kt)("li",{parentName:"ul"},"Client Secret"),(0,o.kt)("li",{parentName:"ul"},"Domain")),(0,o.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,o.kt)("p",null,'Please read the "API3 Key" section in ',(0,o.kt)("a",{parentName:"p",href:"https://docs.looker.com/admin-options/settings/users"},"Looker's information for users docs")," for instructions on how to generate Client Id and Client Secret."),(0,o.kt)("h2",{id:"changelog"},"CHANGELOG"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"0.2.7"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2022-01-24"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9609"},"#","9609")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Migrate to native CDK and fixing of intergration tests")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"0.2.6"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-12-07"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8578"},"#","8578")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Updated titles and descriptions")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"0.2.5"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-10-27"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7284"},"#","7284")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Migrate Looker source to CDK structure, add SAT testing.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"0.2.4"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-06-25"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/3911"},"#","3911")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Added ",(0,o.kt)("inlineCode",{parentName:"td"},"run_look")," endpoint.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"0.2.3"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-06-22"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/3587"},"#","3587")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Added support for self-hosted instances.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"0.2.2"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-06-09"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/3973"},"#","3973")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Added ",(0,o.kt)("inlineCode",{parentName:"td"},"AIRBYTE_ENTRYPOINT")," for kubernetes support.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"0.2.1"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-04-02"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/2726"},"#","2726")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Fixed connector base versioning.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"0.2.0"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-03-09"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/2238"},"#","2238")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Allowed future / unknown properties in the protocol.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-01-27"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/1857"},"#","1857")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Fix failed CI tests.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2020-12-24"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/1441"},"#","1441")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Added looker connector.")))))}u.isMDXComponent=!0}}]);