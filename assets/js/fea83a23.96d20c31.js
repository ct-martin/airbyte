"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[8602],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return k}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(a),k=r,u=c["".concat(p,".").concat(k)]||c[k]||m[k]||i;return a?n.createElement(u,l(l({ref:t},d),{},{components:a})):n.createElement(u,l({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},40105:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return m}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=["components"],o={},p="LinkedIn Ads",s={unversionedId:"integrations/sources/linkedin-ads",id:"integrations/sources/linkedin-ads",title:"LinkedIn Ads",description:"Sync overview",source:"@site/../docs/integrations/sources/linkedin-ads.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/linkedin-ads",permalink:"/integrations/sources/linkedin-ads",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/linkedin-ads.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Lever Hiring",permalink:"/integrations/sources/lever-hiring"},next:{title:"Linnworks",permalink:"/integrations/sources/linnworks"}},d={},m=[{value:"Sync overview",id:"sync-overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"NOTE:",id:"note",level:3},{value:"Data type mapping",id:"data-type-mapping",level:3},{value:"Features",id:"features",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Authentication",id:"authentication",level:3},{value:"Generate the <code>Access Token</code>",id:"generate-the-access-token",level:5},{value:"OAuth2 authentication",id:"oauth2-authentication",level:5},{value:"Changelog",id:"changelog",level:2}],c={toc:m};function k(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"linkedin-ads"},"LinkedIn Ads"),(0,i.kt)("h2",{id:"sync-overview"},"Sync overview"),(0,i.kt)("p",null,"The LinkedIn Ads source supports both Full Refresh and Incremental syncs. You can choose if this connector will copy only the new or updated data, or all rows in the tables and columns you set up for replication, every time a sync is run."),(0,i.kt)("p",null,"This Source Connector is based on a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.airbyte.io/connector-development/cdk-python"},"Airbyte CDK"),". Airbyte uses ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/linkedin/marketing/integrations/marketing-integrations-overview"},"LinkedIn Marketing Developer Platform - API")," to fetch data from LinkedIn Ads."),(0,i.kt)("h3",{id:"output-schema"},"Output schema"),(0,i.kt)("p",null,"This Source is capable of syncing the following data as streams:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/linkedin/marketing/integrations/ads/account-structure/create-and-manage-accounts?tabs=http#search-for-accounts"},"Accounts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/linkedin/marketing/integrations/ads/account-structure/create-and-manage-account-users?tabs=http#find-ad-account-users-by-accounts"},"Account Users")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/linkedin/marketing/integrations/ads/account-structure/create-and-manage-campaign-groups?tabs=http#search-for-campaign-groups"},"Campaign Groups")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/linkedin/marketing/integrations/ads/account-structure/create-and-manage-campaigns?tabs=http#search-for-campaigns"},"Campaigns")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/linkedin/marketing/integrations/ads/account-structure/create-and-manage-creatives?tabs=http#search-for-creatives"},"Creatives")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/linkedin/marketing/integrations/ads/advertising-targeting/create-and-manage-video?tabs=http#finders"},"Ad Direct Sponsored Contents")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/linkedin/marketing/integrations/ads-reporting/ads-reporting?tabs=curl#ad-analytics"},"Ad Analytics by Campaign")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/linkedin/marketing/integrations/ads-reporting/ads-reporting?tabs=curl#ad-analytics"},"Ad Analytics by Creative")," ")),(0,i.kt)("h3",{id:"note"},"NOTE:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Ad Direct Sponsored Contents")," includes the information about VIDEO ADS, as well as SINGLE IMAGE ADS and other directly sponsored ads your account might have."),(0,i.kt)("h3",{id:"data-type-mapping"},"Data type mapping"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Integration Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Airbyte Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"float number")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"integer")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"integer")),(0,i.kt)("td",{parentName:"tr",align:"left"},"whole number")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"date")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"FORMAT YYYY-MM-DD")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"datetime")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"FORMAT YYYY-MM-DDThh:mm:ss")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"array")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"array")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},"True/False")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h3",{id:"features"},"Features"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Overwrite Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Append Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append + Deduplication Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,i.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,i.kt)("p",null,"There are official Rate Limits for LinkedIn Ads API Usage, ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/linkedin/shared/api-guide/concepts/rate-limits?context=linkedin/marketing/context"},"more information here"),". Rate limited requests will receive a 429 response. Rate limits specify the maximum number of API calls that can be made in a 24 hour period. These limits reset at midnight UTC every day. In rare cases, LinkedIn may also return a 429 response as part of infrastructure protection. API service will return to normal automatically. In such cases you will receive the next error message:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\"Caught retryable error '<some_error> or null' after <some_number> tries. Waiting <some_number> seconds then retrying...\"\n")),(0,i.kt)("p",null,"This is expected when the connector hits the 429 - Rate Limit Exceeded HTTP Error. If the maximum of available API requests capacity is reached, you will have the following message:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'"Max try rate limit exceded..."\n')),(0,i.kt)("p",null,"After 5 unsuccessful attempts - the connector will stop the sync operation. In such cases check your Rate Limits ",(0,i.kt)("a",{parentName:"p",href:"https://www.linkedin.com/developers/apps"},"on this page")," ",">"," Choose you app ",">"," Analytics. "),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("p",null,"The API user account should be assigned the following permissions for the API endpoints:\nEndpoints such as: ",(0,i.kt)("inlineCode",{parentName:"p"},"Accounts"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Account Users"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Ad Direct Sponsored Contents"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Campaign Groups"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Campaings"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Creatives")," requires the next permissions set:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"r_ads"),": read ads ","(","Recommended",")",", ",(0,i.kt)("inlineCode",{parentName:"li"},"rw_ads"),": read-write ads\nEndpoints such as: ",(0,i.kt)("inlineCode",{parentName:"li"},"Ad Analytics by Campaign"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Ad Analytics by Creatives")," requires the next permissions set:"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"r_ads_reporting"),": read ads reporting\nThe complete set of permissions is:"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"r_emailaddress,r_liteprofile,r_ads,r_ads_reporting,r_organization_social"))),(0,i.kt)("p",null,"The API user account should be assigned one of the following roles:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ACCOUNT","_","BILLING","_","ADMIN"),(0,i.kt)("li",{parentName:"ul"},"ACCOUNT","_","MANAGER"),(0,i.kt)("li",{parentName:"ul"},"CAMPAIGN","_","MANAGER"),(0,i.kt)("li",{parentName:"ul"},"CREATIVE","_","MANAGER"),(0,i.kt)("li",{parentName:"ul"},"VIEWER ","(","Recommended",")")),(0,i.kt)("h3",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"There are 2 authentication methods:"),(0,i.kt)("h5",{id:"generate-the-access-token"},"Generate the ",(0,i.kt)("inlineCode",{parentName:"h5"},"Access Token")),(0,i.kt)("p",null,"The source LinkedIn uses ",(0,i.kt)("inlineCode",{parentName:"p"},"access_token")," provided in the UI connector's settings to make API requests. Access tokens expire after ",(0,i.kt)("inlineCode",{parentName:"p"},"2 months from generating date (60 days)")," and require a user to manually authenticate again. If you receive a ",(0,i.kt)("inlineCode",{parentName:"p"},"401 invalid token response"),", the error logs will state that your access token has expired and to re-authenticate your connection to generate a new token. This is described more ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/linkedin/shared/authentication/authorization-code-flow?context=linkedin/context"},"here"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Login to LinkedIn as the API user."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Create an App")," ",(0,i.kt)("a",{parentName:"p",href:"https://www.linkedin.com/developers/apps"},"here"),":"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"App Name"),": airbyte-source")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Company"),": search and find your company LinkedIn page")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Privacy policy URL"),": link to company privacy policy")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Business email"),": developer/admin email address")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"App logo"),": Airbyte's ","(","or Company's",")"," logo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Products"),": Select ",(0,i.kt)("a",{parentName:"p",href:"https://www.linkedin.com/developers/apps/122632736/products/marketing-developer-platform"},"Marketing Developer Platform")," ","(","checkbox",")"),(0,i.kt)("p",{parentName:"li"},"Review/agree to legal terms and create app.")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Verify App"),":"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Provide the verify URL to your Company's LinkedIn Admin to verify and authorize the app."),(0,i.kt)("li",{parentName:"ul"},"Once verified, select the App in the Console ",(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/developers/apps"},"here"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Review the ",(0,i.kt)("inlineCode",{parentName:"strong"},"Auth")," tab"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Record ",(0,i.kt)("inlineCode",{parentName:"li"},"client_id")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"client_secret")," ","(","for later steps",")","."),(0,i.kt)("li",{parentName:"ul"},"Review permissions and ensure app has the permissions ","(","above",")","."),(0,i.kt)("li",{parentName:"ul"},"Oauth 2.0 settings: Provide a ",(0,i.kt)("inlineCode",{parentName:"li"},"redirect_uri")," ","(","for later steps",")",": ",(0,i.kt)("inlineCode",{parentName:"li"},"https://airbyte.io")),(0,i.kt)("li",{parentName:"ul"},"Review the ",(0,i.kt)("inlineCode",{parentName:"li"},"Products")," tab and ensure ",(0,i.kt)("inlineCode",{parentName:"li"},"Marketing Developer Platform")," has been added and approved ","(","listed in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Products")," section/tab",")","."),(0,i.kt)("li",{parentName:"ul"},"Review the ",(0,i.kt)("inlineCode",{parentName:"li"},"Usage & limits")," tab. This shows the daily application and user/member limits with percent used for each resource endpoint."))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Authorize App"),": ","(","The authorization token ",(0,i.kt)("inlineCode",{parentName:"p"},"lasts 60-days before expiring"),". The connector app will need to be reauthorized when the authorization token expires.",")",":"),(0,i.kt)("p",{parentName:"li"}," Create an Authorization URL with the following pattern:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The permissions set you need to use is: ",(0,i.kt)("inlineCode",{parentName:"li"},"r_emailaddress,r_liteprofile,r_ads,r_ads_reporting,r_organization_social")),(0,i.kt)("li",{parentName:"ul"},"URL pattern: Provide the scope from permissions above ","(","with + delimiting each permission",")"," and replace the other highlighted parameters: ",(0,i.kt)("inlineCode",{parentName:"li"},"https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&scope=r_emailaddress,r_liteprofile,r_ads,r_ads_reporting,r_organization_social")),(0,i.kt)("li",{parentName:"ul"},"Modify and open the ",(0,i.kt)("inlineCode",{parentName:"li"},"url")," in the browser."),(0,i.kt)("li",{parentName:"ul"},"Once redirected, click ",(0,i.kt)("inlineCode",{parentName:"li"},"Allow")," to authorize app."),(0,i.kt)("li",{parentName:"ul"},"The browser will be redirected to the ",(0,i.kt)("inlineCode",{parentName:"li"},"redirect_uri"),". Record the ",(0,i.kt)("inlineCode",{parentName:"li"},"code")," parameter listed in the redirect URL in the Browser header URL."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Run the following curl command")," using ",(0,i.kt)("inlineCode",{parentName:"p"},"Terminal")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Command line")," with the parameters replaced to return your ",(0,i.kt)("inlineCode",{parentName:"p"},"access_token"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"access_token")," expires in 2-months."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-text"},' curl -0 -v -X POST https://www.linkedin.com/oauth/v2/accessToken\\\n -H "Accept: application/json"\\\n -H "application/x-www-form-urlencoded"\\\n -d "grant_type=authorization_code"\\\n -d "code=YOUR_CODE"\\\n -d "client_id=YOUR_CLIENT_ID"\\\n -d "client_secret=YOUR_CLIENT_SECRET"\\\n -d "redirect_uri=YOUR_REDIRECT_URI"\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Use the ",(0,i.kt)("inlineCode",{parentName:"strong"},"access_token"))," from response from the ",(0,i.kt)("inlineCode",{parentName:"p"},"Step 5")," to autorize LinkedIn Ads connector."))),(0,i.kt)("h5",{id:"oauth2-authentication"},"OAuth2 authentication"),(0,i.kt)("p",null,"The source LinkedIn supports the oAuth2 protocol. Everyone can use it directly via the Airbyte Web interface. As result Airbyte server will save a 'refresh_token' which expire after ",(0,i.kt)("inlineCode",{parentName:"p"},"1 year from generating date (356 days)")," and require a user to manually authenticate again."),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.7"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-05-04"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12482"},"#","12482")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Update input configuration copy")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.6"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-04-04"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11690"},"11690")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Small documenation corrections")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.5"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-12-21"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8984"},"8984")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Update connector fields title/description")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-12-02"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8382"},"8382")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Modify log message in rate-limit cases")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-11-11"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7839"},"7839")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Added oauth support")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-11-08"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7499"},"7499")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Remove base-python dependencies")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-10-02"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6610"},"6610")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fix for  ",(0,i.kt)("inlineCode",{parentName:"td"},"Campaigns/targetingCriteria")," transformation, coerced  ",(0,i.kt)("inlineCode",{parentName:"td"},"Creatives/variables/values")," to string by default")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-09-05"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5285"},"5285")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Initial release of Native LinkedIn Ads connector for Airbyte")))))}k.isMDXComponent=!0}}]);