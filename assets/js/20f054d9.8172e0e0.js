"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[7691],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return k}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),p=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return r.createElement(d.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=p(a),k=n,g=c["".concat(d,".").concat(k)]||c[k]||s[k]||l;return a?r.createElement(g,i(i({ref:e},m),{},{components:a})):r.createElement(g,i({ref:e},m))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},76566:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),i=["components"],o={},d="CockroachDB",p={unversionedId:"integrations/sources/cockroachdb",id:"integrations/sources/cockroachdb",title:"CockroachDB",description:"Overview",source:"@site/../docs/integrations/sources/cockroachdb.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/cockroachdb",permalink:"/integrations/sources/cockroachdb",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/cockroachdb.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Close.com",permalink:"/integrations/sources/close-com"},next:{title:"Commercetools",permalink:"/integrations/sources/commercetools"}},m={},s=[{value:"Overview",id:"overview",level:2},{value:"Resulting schema",id:"resulting-schema",level:3},{value:"Data type mapping",id:"data-type-mapping",level:3},{value:"Features",id:"features",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"1. Make sure your database is accessible from the machine running Airbyte",id:"1-make-sure-your-database-is-accessible-from-the-machine-running-airbyte",level:4},{value:"2. Create a dedicated read-only user with access to the relevant tables (Recommended but optional)",id:"2-create-a-dedicated-read-only-user-with-access-to-the-relevant-tables-recommended-but-optional",level:4},{value:"3. That&#39;s it!",id:"3-thats-it",level:4},{value:"Changelog",id:"changelog",level:2},{value:"Changelog source-cockroachdb-strict-encrypt",id:"changelog-source-cockroachdb-strict-encrypt",level:2}],c={toc:s};function k(t){var e=t.components,a=(0,n.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"cockroachdb"},"CockroachDB"),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"The CockroachDB source supports both Full Refresh and Incremental syncs. You can choose if this connector will copy only the new or updated data, or all rows in the tables and columns you set up for replication, every time a sync is run."),(0,l.kt)("h3",{id:"resulting-schema"},"Resulting schema"),(0,l.kt)("p",null,"The CockroachDb source does not alter the schema present in your database. Depending on the destination connected to this source, however, the schema may be altered. See the destination's documentation for more details."),(0,l.kt)("h3",{id:"data-type-mapping"},"Data type mapping"),(0,l.kt)("p",null,"CockroachDb data types are mapped to the following data types when synchronizing data:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"CockroachDb Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Resulting Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"bigint")),(0,l.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"bit")),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"character")),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"character varying")),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"date")),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"double precision")),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"enum")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"inet")),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"int")),(0,l.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"json")),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"jsonb")),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"numeric")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"smallint")),(0,l.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"text")),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"time with timezone")),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"may be written as a native date type depending on the destination")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"time without timezone")),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"may be written as a native date type depending on the destination")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"timestamp with timezone")),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"may be written as a native date type depending on the destination")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"timestamp without timezone")),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"may be written as a native date type depending on the destination")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"uuid")),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," arrays for all the above types as well as custom types are supported, although they may be de-nested depending on the destination."),(0,l.kt)("h3",{id:"features"},"Features"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Supported"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Change Data Capture"),(0,l.kt)("td",{parentName:"tr",align:"left"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"SSL Support"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h2",{id:"getting-started"},"Getting started"),(0,l.kt)("h3",{id:"requirements"},"Requirements"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"CockroachDb ",(0,l.kt)("inlineCode",{parentName:"li"},"v1.15.x")," or above"),(0,l.kt)("li",{parentName:"ol"},"Allow connections from Airbyte to your CockroachDb database ","(","if they exist in separate VPCs",")"),(0,l.kt)("li",{parentName:"ol"},"Create a dedicated read-only Airbyte user with access to all tables needed for replication")),(0,l.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,l.kt)("h4",{id:"1-make-sure-your-database-is-accessible-from-the-machine-running-airbyte"},"1. Make sure your database is accessible from the machine running Airbyte"),(0,l.kt)("p",null,"This is dependent on your networking setup. The easiest way to verify if Airbyte is able to connect to your CockroachDb instance is via the check connection tool in the UI."),(0,l.kt)("h4",{id:"2-create-a-dedicated-read-only-user-with-access-to-the-relevant-tables-recommended-but-optional"},"2. Create a dedicated read-only user with access to the relevant tables ","(","Recommended but optional",")"),(0,l.kt)("p",null,"This step is optional but highly recommended to allow for better permission control and auditing. Alternatively, you can use Airbyte with an existing user in your database."),(0,l.kt)("p",null,"To create a dedicated database user, run the following commands against your database:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER airbyte PASSWORD 'your_password_here';\n")),(0,l.kt)("p",null,"Then give it access to the relevant schema:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT USAGE ON SCHEMA <schema_name> TO airbyte\n")),(0,l.kt)("p",null,"Note that to replicate data from multiple CockroachDb schemas, you can re-run the command above to grant access to all the relevant schemas, but you'll need to set up multiple sources connecting to the same db on multiple schemas."),(0,l.kt)("p",null,"Next, grant the user read-only access to the relevant tables. The simplest way is to grant read access to all tables in the schema as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT SELECT ON ALL TABLES IN SCHEMA <schema_name> TO airbyte;\n\n# Allow airbyte user to see tables created in the future\nALTER DEFAULT PRIVILEGES IN SCHEMA <schema_name> GRANT SELECT ON TABLES TO airbyte;\n")),(0,l.kt)("h4",{id:"3-thats-it"},"3. That's it!"),(0,l.kt)("p",null,"Your database user should now be ready for use with Airbyte."),(0,l.kt)("h2",{id:"changelog"},"Changelog"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"0.1.12"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2022-04-29"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12480"},"12480")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Query tables with adaptive fetch size to optimize JDBC memory consumption")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"0.1.11"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2022-04-06"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11729"},"11729")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Bump mina-sshd from 2.7.0 to 2.8.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"0.1.10"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2022-02-24"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10235"},"10235")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Fix Replication Failure due Multiple portal opens")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"0.1.9"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2022-02-21"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10242"},"10242")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Fixed cursor for old connectors that use non-microsecond format. Now connectors work with both formats")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"0.1.8"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2022-02-18"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10242"},"10242")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Updated timestamp transformation with microseconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"0.1.7"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2022-02-14"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10256"},"10256")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Add ",(0,l.kt)("inlineCode",{parentName:"td"},"-XX:+ExitOnOutOfMemoryError")," JVM option")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"0.1.6"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2022-02-08"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10173"},"10173")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Improved  discovering tables in case if user does not have permissions to any table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"0.1.5"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-12-24"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9004"},"9004")),(0,l.kt)("td",{parentName:"tr",align:"left"},"User can see only permmited tables during discovery")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-12-24"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8958"},"8958")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Add support for JdbcType.ARRAY")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-10-10"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7819"},"7819")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Fixed Datatype errors during Cockroach DB parsing")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-08-13"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4699"},"4699")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Added json config validator")))),(0,l.kt)("h2",{id:"changelog-source-cockroachdb-strict-encrypt"},"Changelog source-cockroachdb-strict-encrypt"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"0.1.12"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2022-04-29"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12480"},"12480")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Query tables with adaptive fetch size to optimize JDBC memory consumption")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"0.1.8"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2022-04-06"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11729"},"11729")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Bump mina-sshd from 2.7.0 to 2.8.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"0.1.6"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2022-02-21"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10242"},"10242")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Fixed cursor for old connectors that use non-microsecond format. Now connectors work with both formats")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"0.1.5"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2022-02-18"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10242"},"10242")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Updated timestamp transformation with microseconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2022-02-14"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10256"},"10256")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Add ",(0,l.kt)("inlineCode",{parentName:"td"},"-XX:+ExitOnOutOfMemoryError")," JVM option")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2022-02-08"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10173"},"10173")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Improved  discovering tables in case if user does not have permissions to any table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-12-24"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9004"},"9004")),(0,l.kt)("td",{parentName:"tr",align:"left"},"User can see only permmited tables during discovery")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-12-24"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8958"},"8958")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Add support for JdbcType.ARRAY")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-11-23"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7457"},"7457")),(0,l.kt)("td",{parentName:"tr",align:"left"},"CockroachDb source: Add only encrypted version for the connector")))))}k.isMDXComponent=!0}}]);