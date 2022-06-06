"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[9419],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,k=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46664:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={},l="Pulsar",p={unversionedId:"integrations/destinations/pulsar",id:"integrations/destinations/pulsar",title:"Pulsar",description:"Overview",source:"@site/../docs/integrations/destinations/pulsar.md",sourceDirName:"integrations/destinations",slug:"/integrations/destinations/pulsar",permalink:"/integrations/destinations/pulsar",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/destinations/pulsar.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Google PubSub",permalink:"/integrations/destinations/pubsub"},next:{title:"RabbitMQ",permalink:"/integrations/destinations/rabbitmq"}},u={},c=[{value:"Overview",id:"overview",level:2},{value:"Sync overview",id:"sync-overview",level:3},{value:"Output schema",id:"output-schema",level:4},{value:"Features",id:"features",level:4},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"Network Access",id:"network-access",level:4},{value:"<strong>Permissions</strong>",id:"permissions",level:4},{value:"Target topics",id:"target-topics",level:4},{value:"Setup the Pulsar destination in Airbyte",id:"setup-the-pulsar-destination-in-airbyte",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pulsar"},"Pulsar"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The Airbyte Pulsar destination allows you to sync data to Pulsar. Each stream is written to the corresponding Pulsar topic."),(0,i.kt)("h3",{id:"sync-overview"},"Sync overview"),(0,i.kt)("h4",{id:"output-schema"},"Output schema"),(0,i.kt)("p",null,"Each stream will be output into a Pulsar topic."),(0,i.kt)("p",null,"Currently, this connector only writes data with JSON format. More formats ","(","e.g. Apache Avro",")"," will be supported in the future."),(0,i.kt)("p",null,"Each record will contain in its key the uuid assigned by Airbyte, and in the value these 3 fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_airbyte_ab_id"),": a uuid assigned by Airbyte to each event that is processed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_airbyte_emitted_at"),":  a timestamp representing when the event was pulled from the data source."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_airbyte_data"),": a json blob representing with the event data encoded in base64 ."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_airbyte_stream"),": the name of each record's stream.")),(0,i.kt)("h4",{id:"features"},"Features"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incremental - Deduped History"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"},"As this connector does not support dbt, we don't support this sync mode on this destination.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("h3",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"To use the Pulsar destination, you'll need:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A Pulsar cluster 2.8 or above.")),(0,i.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,i.kt)("h4",{id:"network-access"},"Network Access"),(0,i.kt)("p",null,"Make sure your Pulsar brokers can be accessed by Airbyte."),(0,i.kt)("h4",{id:"permissions"},(0,i.kt)("strong",{parentName:"h4"},"Permissions")),(0,i.kt)("p",null,"Airbyte should be allowed to write messages into topics, and these topics should be created before writing into Pulsar or, at least, enable the configuration in the brokers ",(0,i.kt)("inlineCode",{parentName:"p"},"allowAutoTopicCreation")," ","(","which is not recommended for production environments",")","."),(0,i.kt)("p",null,"Note that if you choose to use dynamic topic names, you will probably need to enable ",(0,i.kt)("inlineCode",{parentName:"p"},"allowAutoTopicCreation")," to avoid your connection failing if there was an update to the source connector's schema. Otherwise a hardcoded topic name may be best."),(0,i.kt)("p",null,"Also, notice that the messages will be sent to topics based on the configured Pulsar ",(0,i.kt)("inlineCode",{parentName:"p"},"topic_tenant")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"topic_namespace")," configs with their ",(0,i.kt)("inlineCode",{parentName:"p"},"topic_type"),"."),(0,i.kt)("h4",{id:"target-topics"},"Target topics"),(0,i.kt)("p",null,"You can determine the topics to which messages are written via the ",(0,i.kt)("inlineCode",{parentName:"p"},"topic_pattern")," configuration parameter in its corresponding Pulsar ",(0,i.kt)("inlineCode",{parentName:"p"},"topic_tenant"),"-",(0,i.kt)("inlineCode",{parentName:"p"},"topic_namespace"),". Messages can be written to either a hardcoded, pre-defined topic, or dynamically written to different topics based on the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.airbyte.io/understanding-airbyte/namespaces"},"namespace")," or stream they came from."),(0,i.kt)("p",null,"To write all messages to a single hardcoded topic, enter its name in the ",(0,i.kt)("inlineCode",{parentName:"p"},"topic_pattern")," field e.g: setting ",(0,i.kt)("inlineCode",{parentName:"p"},"topic_pattern")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"my-topic-name")," will write all messages from all streams and namespaces to that topic."),(0,i.kt)("p",null,"To define the output topics dynamically, you can leverage the ",(0,i.kt)("inlineCode",{parentName:"p"},"{namespace}")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"{stream}")," pattern variables, which cause messages to be written to different topics based on the values present when producing the records. For example, setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"topic_pattern")," parameter to ",(0,i.kt)("inlineCode",{parentName:"p"},"airbyte_syncs/{namespace}/{stream}")," means that messages from namespace ",(0,i.kt)("inlineCode",{parentName:"p"},"n1")," and stream ",(0,i.kt)("inlineCode",{parentName:"p"},"s1")," will get written to the topic ",(0,i.kt)("inlineCode",{parentName:"p"},"airbyte_syncs/n1/s1"),", and messages from ",(0,i.kt)("inlineCode",{parentName:"p"},"s2")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"airbyte_syncs/n1/s2")," etc."),(0,i.kt)("p",null,"If you define output topic dynamically, you might want to enable ",(0,i.kt)("inlineCode",{parentName:"p"},"allowAutoTopicCreation")," to avoid your connection failing if there was an update to the source connector's schema. Otherwise, you'll need to manually create topics in Pulsar as they are added/updated in the source, which is the recommended option for production environments."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTICE"),": a naming convention transformation will be applied to the target topic name using the ",(0,i.kt)("inlineCode",{parentName:"p"},"StandardNameTransformer")," so that some special characters will be replaced."),(0,i.kt)("h3",{id:"setup-the-pulsar-destination-in-airbyte"},"Setup the Pulsar destination in Airbyte"),(0,i.kt)("p",null,"You should now have all the requirements needed to configure Pulsar as a destination in the UI. You can configure the following parameters on the Pulsar destination ","(","though many of these are optional or have default values",")",":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Pulsar brokers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Use TLS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Topic type")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Topic tenant")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Topic namespace")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Topic pattern")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Test topic")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Producer name")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Sync producer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Compression type")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Message send timeout")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Max pending messages")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Max pending messages across partitions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Enable batching")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Batching max messages")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Batching max publish delay")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Block if queue is full"))),(0,i.kt)("p",null,"More info about this can be found in the ",(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/docs/en/client-libraries-java/#producer"},"Pulsar producer configs documentation site"),"."))}m.isMDXComponent=!0}}]);