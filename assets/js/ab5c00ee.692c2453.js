"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[3222],{3905:function(t,e,a){a.d(e,{Zo:function(){return s},kt:function(){return k}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),u=d(a),k=r,c=u["".concat(p,".").concat(k)]||u[k]||m[k]||l;return a?n.createElement(c,i(i({ref:e},s),{},{components:a})):n.createElement(c,i({ref:e},s))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},58874:function(t,e,a){a.r(e),a.d(e,{assets:function(){return s},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return m}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],o={},p="Files",d={unversionedId:"integrations/sources/file",id:"integrations/sources/file",title:"Files",description:"Features",source:"@site/../docs/integrations/sources/file.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/file",permalink:"/integrations/sources/file",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/file.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Faker",permalink:"/integrations/sources/faker"},next:{title:"Flexport",permalink:"/integrations/sources/flexport"}},s={},m=[{value:"Features",id:"features",level:2},{value:"Storage Providers",id:"storage-providers",level:3},{value:"File / Stream Compression",id:"file--stream-compression",level:3},{value:"File Formats",id:"file-formats",level:3},{value:"Getting Started (Airbyte Cloud)",id:"getting-started-airbyte-cloud",level:2},{value:"Getting Started (Airbyte Open-Source)",id:"getting-started-airbyte-open-source",level:2},{value:"Provider Specific Information",id:"provider-specific-information",level:4},{value:"Reader Options",id:"reader-options",level:3},{value:"Changing data types of source columns",id:"changing-data-types-of-source-columns",level:4},{value:"Examples",id:"examples",level:3},{value:"Performance Considerations and Notes",id:"performance-considerations-and-notes",level:2},{value:"Changelog",id:"changelog",level:2}],u={toc:m};function k(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"files"},"Files"),(0,l.kt)("h2",{id:"features"},"Features"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Feature"),(0,l.kt)("th",{parentName:"tr",align:null},"Supported?"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Full Refresh Sync"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Incremental Sync"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Replicate Incremental Deletes"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Replicate Folders (multiple Files)"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Replicate Glob Patterns (multiple Files)"),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("p",null,"This source produces a single table for the target file as it replicates only one file at a time for the moment. Note that you should provide the ",(0,l.kt)("inlineCode",{parentName:"p"},"dataset_name")," which dictates how the table will be identified in the destination (since ",(0,l.kt)("inlineCode",{parentName:"p"},"URL")," can be made of complex characters)."),(0,l.kt)("h3",{id:"storage-providers"},"Storage Providers"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Storage Providers"),(0,l.kt)("th",{parentName:"tr",align:null},"Supported?"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HTTPS"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Google Cloud Storage"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Amazon Web Services S3"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SFTP"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SSH / SCP"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"local filesystem"),(0,l.kt)("td",{parentName:"tr",align:null},"Local use only (inaccessible for Airbyte Cloud)")))),(0,l.kt)("h3",{id:"file--stream-compression"},"File / Stream Compression"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Compression"),(0,l.kt)("th",{parentName:"tr",align:null},"Supported?"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Gzip"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Zip"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Bzip2"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Lzma"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Xz"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Snappy"),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("h3",{id:"file-formats"},"File Formats"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Format"),(0,l.kt)("th",{parentName:"tr",align:null},"Supported?"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CSV"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JSON"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HTML"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"XML"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Excel"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Excel Binary Workbook"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Feather"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Parquet"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Pickle"),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"This connector does not support syncing unstructured data files such as raw text, audio, or videos.")),(0,l.kt)("h2",{id:"getting-started-airbyte-cloud"},"Getting Started (Airbyte Cloud)"),(0,l.kt)("p",null,"Setup through Airbyte Cloud will be exactly the same as the open-source setup, except for the fact that local files are disabled."),(0,l.kt)("h2",{id:"getting-started-airbyte-open-source"},"Getting Started (Airbyte Open-Source)"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Once the File Source is selected, you should define both the storage provider along its URL and format of the file."),(0,l.kt)("li",{parentName:"ol"},"Depending on the provider choice and privacy of the data, you will have to configure more options.")),(0,l.kt)("h4",{id:"provider-specific-information"},"Provider Specific Information"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"In case of GCS, it is necessary to provide the content of the service account keyfile to access private buckets. See settings of ",(0,l.kt)("a",{parentName:"li",href:"/integrations/destinations/bigquery"},"BigQuery Destination")),(0,l.kt)("li",{parentName:"ul"},"In case of AWS S3, the pair of ",(0,l.kt)("inlineCode",{parentName:"li"},"aws_access_key_id")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"aws_secret_access_key")," is necessary to access private S3 buckets."),(0,l.kt)("li",{parentName:"ul"},"In case of AzBlob, it is necessary to provide the ",(0,l.kt)("inlineCode",{parentName:"li"},"storage_account")," in which the blob you want to access resides. Either ",(0,l.kt)("inlineCode",{parentName:"li"},"sas_token")," ",(0,l.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/storage/blobs/sas-service-create?tabs=dotnet"},"(info)")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"shared_key")," ",(0,l.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?tabs=azure-portal"},"(info)")," is necessary to access private blobs.")),(0,l.kt)("h3",{id:"reader-options"},"Reader Options"),(0,l.kt)("p",null,"The Reader in charge of loading the file format is currently based on ",(0,l.kt)("a",{parentName:"p",href:"https://pandas.pydata.org/pandas-docs/stable/user_guide/io.html"},"Pandas IO Tools"),". It is possible to customize how to load the file into a Pandas DataFrame as part of this Source Connector. This is doable in the ",(0,l.kt)("inlineCode",{parentName:"p"},"reader_options")," that should be in JSON format and depends on the chosen file format. See pandas' documentation, depending on the format:"),(0,l.kt)("p",null,"For example, if the format ",(0,l.kt)("inlineCode",{parentName:"p"},"CSV")," is selected, then options from the ",(0,l.kt)("a",{parentName:"p",href:"https://pandas.pydata.org/pandas-docs/stable/user_guide/io.html#io-read-csv-table"},"read","_","csv")," functions are available."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"It is therefore possible to customize the ",(0,l.kt)("inlineCode",{parentName:"li"},"delimiter")," (or ",(0,l.kt)("inlineCode",{parentName:"li"},"sep"),") to  in case of tab separated files."),(0,l.kt)("li",{parentName:"ul"},"Header line can be ignored with ",(0,l.kt)("inlineCode",{parentName:"li"},"header=0")," and customized with ",(0,l.kt)("inlineCode",{parentName:"li"},"names")),(0,l.kt)("li",{parentName:"ul"},"etc")),(0,l.kt)("p",null,"We would therefore provide in the ",(0,l.kt)("inlineCode",{parentName:"p"},"reader_options")," the following json:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{ "sep" : "\\t", "header" : 0, "names": "column1, column2"}\n')),(0,l.kt)("p",null,"In case you select ",(0,l.kt)("inlineCode",{parentName:"p"},"JSON")," format, then options from the ",(0,l.kt)("a",{parentName:"p",href:"https://pandas.pydata.org/pandas-docs/stable/user_guide/io.html#io-json-reader"},"read","_","json")," reader are available."),(0,l.kt)("p",null,"For example, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},'{"orient" : "records"}')," to change how orientation of data is loaded (if data is ",(0,l.kt)("inlineCode",{parentName:"p"},"[{column -> value}, \u2026 , {column -> value}]"),")"),(0,l.kt)("h4",{id:"changing-data-types-of-source-columns"},"Changing data types of source columns"),(0,l.kt)("p",null,"Normally, Airbyte tries to infer the data type from the source, but you can use ",(0,l.kt)("inlineCode",{parentName:"p"},"reader_options")," to force specific data types. If you input ",(0,l.kt)("inlineCode",{parentName:"p"},'{"dtype":"string"}'),", all columns will be forced to be parsed as strings. If you only want a specific column to be parsed as a string, simply use ",(0,l.kt)("inlineCode",{parentName:"p"},'{"dtype" : {"column name": "string"}}'),"."),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("p",null,"Here are a list of examples of possible file inputs:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Dataset Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Storage"),(0,l.kt)("th",{parentName:"tr",align:null},"URL"),(0,l.kt)("th",{parentName:"tr",align:null},"Reader Impl"),(0,l.kt)("th",{parentName:"tr",align:null},"Service Account"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"epidemiology"),(0,l.kt)("td",{parentName:"tr",align:null},"HTTPS"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://storage.googleapis.com/covid19-open-data/v2/latest/epidemiology.csv"},"https://storage.googleapis.com/covid19-open-data/v2/latest/epidemiology.csv")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://console.cloud.google.com/marketplace/product/bigquery-public-datasets/covid19-public-data-program?filter=solution-type:dataset%5C&id=7d6cc408-53c8-4485-a187-b8cb9a5c0b56"},"COVID-19 Public dataset")," on BigQuery")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hr","_","and","_","financials"),(0,l.kt)("td",{parentName:"tr",align:null},"GCS"),(0,l.kt)("td",{parentName:"tr",align:null},"gs://airbyte-vault/financial.csv"),(0,l.kt)("td",{parentName:"tr",align:null},"smart","_","open or gcfs"),(0,l.kt)("td",{parentName:"tr",align:null},'{"type": "service',"_",'account", "private',"_","key","_",'id": "XXXXXXXX", ...}'),(0,l.kt)("td",{parentName:"tr",align:null},"data from a private bucket, a service account is necessary")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"landsat","_","index"),(0,l.kt)("td",{parentName:"tr",align:null},"GCS"),(0,l.kt)("td",{parentName:"tr",align:null},"gcp-public-data-landsat/index.csv.gz"),(0,l.kt)("td",{parentName:"tr",align:null},"smart","_","open"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Using smart","_","open, we don't need to specify the compression (note the gs:// is optional too, same for other providers)")))),(0,l.kt)("p",null,"Examples with reader options:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Dataset Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Storage"),(0,l.kt)("th",{parentName:"tr",align:null},"URL"),(0,l.kt)("th",{parentName:"tr",align:null},"Reader Impl"),(0,l.kt)("th",{parentName:"tr",align:null},"Reader Options"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"landsat","_","index"),(0,l.kt)("td",{parentName:"tr",align:null},"GCS"),(0,l.kt)("td",{parentName:"tr",align:null},"gs://gcp-public-data-landsat/index.csv.gz"),(0,l.kt)("td",{parentName:"tr",align:null},"GCFS"),(0,l.kt)("td",{parentName:"tr",align:null},'{"compression": "gzip"}'),(0,l.kt)("td",{parentName:"tr",align:null},"Additional reader options to specify a compression option to ",(0,l.kt)("inlineCode",{parentName:"td"},"read_csv"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GDELT"),(0,l.kt)("td",{parentName:"tr",align:null},"S3"),(0,l.kt)("td",{parentName:"tr",align:null},"s3://gdelt-open-data/events/20190914.export.csv"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},'{"sep": "\\t", "header": null}'),(0,l.kt)("td",{parentName:"tr",align:null},"Here is TSV data separated by tabs without header row from ",(0,l.kt)("a",{parentName:"td",href:"https://registry.opendata.aws/gdelt/"},"AWS Open Data"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"server","_","logs"),(0,l.kt)("td",{parentName:"tr",align:null},"local"),(0,l.kt)("td",{parentName:"tr",align:null},"/local/logs.log"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},'{"sep": ";"}'),(0,l.kt)("td",{parentName:"tr",align:null},"After making sure a local text file exists at ",(0,l.kt)("inlineCode",{parentName:"td"},"/tmp/airbyte_local/logs.log")," with logs file from some server that are delimited by ';' delimiters")))),(0,l.kt)("p",null,"Example for SFTP:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Dataset Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Storage"),(0,l.kt)("th",{parentName:"tr",align:null},"User"),(0,l.kt)("th",{parentName:"tr",align:null},"Password"),(0,l.kt)("th",{parentName:"tr",align:null},"Host"),(0,l.kt)("th",{parentName:"tr",align:null},"URL"),(0,l.kt)("th",{parentName:"tr",align:null},"Reader Options"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Test Rebext"),(0,l.kt)("td",{parentName:"tr",align:null},"SFTP"),(0,l.kt)("td",{parentName:"tr",align:null},"demo"),(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"test.rebext.net"),(0,l.kt)("td",{parentName:"tr",align:null},"/pub/example/readme.txt"),(0,l.kt)("td",{parentName:"tr",align:null},'{"sep": "\\r\\n", "header": null, "names": ',"[",'"text"], "engine": "python"}'),(0,l.kt)("td",{parentName:"tr",align:null},"We use ",(0,l.kt)("inlineCode",{parentName:"td"},"python")," engine for ",(0,l.kt)("inlineCode",{parentName:"td"},"read_csv")," in order to handle delimiter of more than 1 character while providing our own column names.")))),(0,l.kt)("p",null,"Please see (or add) more at ",(0,l.kt)("inlineCode",{parentName:"p"},"airbyte-integrations/connectors/source-file/integration_tests/integration_source_test.py")," for further usages examples."),(0,l.kt)("h2",{id:"performance-considerations-and-notes"},"Performance Considerations and Notes"),(0,l.kt)("p",null,"In order to read large files from a remote location, this connector uses the ",(0,l.kt)("a",{parentName:"p",href:"https://pypi.org/project/smart-open/"},"smart","_","open")," library. However, it is possible to switch to either ",(0,l.kt)("a",{parentName:"p",href:"https://gcsfs.readthedocs.io/en/latest/"},"GCSFS")," or ",(0,l.kt)("a",{parentName:"p",href:"https://s3fs.readthedocs.io/en/latest/"},"S3FS")," implementations as it is natively supported by the ",(0,l.kt)("inlineCode",{parentName:"p"},"pandas")," library. This choice is made possible through the optional ",(0,l.kt)("inlineCode",{parentName:"p"},"reader_impl")," parameter."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Note that for local filesystem, the file probably have to be stored somewhere in the ",(0,l.kt)("inlineCode",{parentName:"li"},"/tmp/airbyte_local")," folder with the same limitations as the ",(0,l.kt)("a",{parentName:"li",href:"/integrations/destinations/local-csv"},"CSV Destination")," so the ",(0,l.kt)("inlineCode",{parentName:"li"},"URL")," should also starts with ",(0,l.kt)("inlineCode",{parentName:"li"},"/local/"),"."),(0,l.kt)("li",{parentName:"ul"},"The JSON implementation needs to be tweaked in order to produce more complex catalog and is still in an experimental state: Simple JSON schemas should work at this point but may not be well handled when there are multiple layers of nesting.")),(0,l.kt)("h2",{id:"changelog"},"Changelog"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Date"),(0,l.kt)("th",{parentName:"tr",align:null},"Pull Request"),(0,l.kt)("th",{parentName:"tr",align:null},"Subject"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0.2.9"),(0,l.kt)("td",{parentName:"tr",align:null},"2022-02-01"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9974"},"9974")),(0,l.kt)("td",{parentName:"tr",align:null},"Update airbyte-cdk 0.1.47")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0.2.8"),(0,l.kt)("td",{parentName:"tr",align:null},"2021-12-06"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8524"},"8524")),(0,l.kt)("td",{parentName:"tr",align:null},"Update connector fields title/description")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0.2.7"),(0,l.kt)("td",{parentName:"tr",align:null},"2021-10-28"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7387"},"7387")),(0,l.kt)("td",{parentName:"tr",align:null},"Migrate source to CDK structure, add SAT testing.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0.2.6"),(0,l.kt)("td",{parentName:"tr",align:null},"2021-08-26"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5613"},"5613")),(0,l.kt)("td",{parentName:"tr",align:null},"Add support to xlsb format")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0.2.5"),(0,l.kt)("td",{parentName:"tr",align:null},"2021-07-26"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4953"},"4953")),(0,l.kt)("td",{parentName:"tr",align:null},"Allow non-default port for SFTP type")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0.2.4"),(0,l.kt)("td",{parentName:"tr",align:null},"2021-06-09"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/3973"},"3973")),(0,l.kt)("td",{parentName:"tr",align:null},"Add AIRBYTE","_","ENTRYPOINT for Kubernetes support")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0.2.3"),(0,l.kt)("td",{parentName:"tr",align:null},"2021-06-01"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/3771"},"3771")),(0,l.kt)("td",{parentName:"tr",align:null},"Add Azure Storage Blob Files option")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0.2.2"),(0,l.kt)("td",{parentName:"tr",align:null},"2021-04-16"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/2883"},"2883")),(0,l.kt)("td",{parentName:"tr",align:null},"Fix CSV discovery memory consumption")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0.2.1"),(0,l.kt)("td",{parentName:"tr",align:null},"2021-04-03"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/2726"},"2726")),(0,l.kt)("td",{parentName:"tr",align:null},"Fix base connector versioning")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0.2.0"),(0,l.kt)("td",{parentName:"tr",align:null},"2021-03-09"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/2238"},"2238")),(0,l.kt)("td",{parentName:"tr",align:null},"Protocol allows future/unknown properties")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0.1.10"),(0,l.kt)("td",{parentName:"tr",align:null},"2021-02-18"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/2118"},"2118")),(0,l.kt)("td",{parentName:"tr",align:null},"Support JSONL format")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0.1.9"),(0,l.kt)("td",{parentName:"tr",align:null},"2021-02-02"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/1768"},"1768")),(0,l.kt)("td",{parentName:"tr",align:null},"Add test cases for all formats")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0.1.8"),(0,l.kt)("td",{parentName:"tr",align:null},"2021-01-27"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/1738"},"1738")),(0,l.kt)("td",{parentName:"tr",align:null},"Adopt connector best practices")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0.1.7"),(0,l.kt)("td",{parentName:"tr",align:null},"2020-12-16"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/1331"},"1331")),(0,l.kt)("td",{parentName:"tr",align:null},"Refactor Python base connector")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0.1.6"),(0,l.kt)("td",{parentName:"tr",align:null},"2020-12-08"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/1249"},"1249")),(0,l.kt)("td",{parentName:"tr",align:null},"Handle NaN values")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0.1.5"),(0,l.kt)("td",{parentName:"tr",align:null},"2020-11-30"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/1046"},"1046")),(0,l.kt)("td",{parentName:"tr",align:null},"Add connectors using an index YAML file")))))}k.isMDXComponent=!0}}]);