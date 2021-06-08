(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[265],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5882:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return l},default:function(){return c}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),o={sidebar_position:4},p={unversionedId:"Types/Order",id:"Types/Order",isDocsHomePage:!1,title:"Order Object Type",description:"Order object type provides details for an order.",source:"@site/docs/Types/Order.md",sourceDirName:"Types",slug:"/Types/Order",permalink:"/docs/Types/Order",editUrl:"https://github.com/bildit-Platform/react-native-bildit-flybuy/edit/main/website/docs/Types/Order.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Site Object Type",permalink:"/docs/Types/Site"},next:{title:"PickupWindow Object Type",permalink:"/docs/Types/PickupWindow"}},l=[{value:"Example",id:"example",children:[]},{value:"Returned in",id:"returned-in",children:[]}],s={toc:l};function c(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Order")," object type provides details for an order."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "siteName": "Test Site",\n  "customerState": "departed",\n  "customerName": "Lamia Selmane AB",\n  "siteLongitude": "-122.3300605",\n  "siteDescription": "",\n  "state": "ready",\n  "siteLatitude": "47.6234207",\n  "customerRating": "5",\n  "etaAt": null,\n  "redemptionCode": "ABA57PQ674",\n  "id": 46084566,\n  "customerCarColor": "Silver",\n  "customerCarType": "Nothing",\n  "pickupWindow": ["2021-06-03 03:44:44 +0000", "2022-12-02 00:00:00 +0000"],\n  "pickupType": "delivery",\n  "siteFullAddress": "500 Yale Ave N, Seattle, WA 98109, USA",\n  "siteID": 15942,\n  "partnerIdentifier": "573836",\n  "siteInstructions": "",\n  "customerComment": "Awesome!",\n  "siteCoverPhotoURL": null,\n  "customerLicensePlate": "Nothing",\n  "sitePhone": "+18882458277",\n  "redeemedAt": "2021-06-03 03:44:45 +0000"\n}\n')),(0,i.kt)("h2",{id:"returned-in"},"Returned in"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../../Components/Orders#create-order"},(0,i.kt)("inlineCode",{parentName:"a"},"createOrder"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../../Components/Orders#fetch-orders"},(0,i.kt)("inlineCode",{parentName:"a"},"fetchOrders"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../../Components/Orders#claim-order"},(0,i.kt)("inlineCode",{parentName:"a"},"claimOrder"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../../Components/Orders#update-order-state"},(0,i.kt)("inlineCode",{parentName:"a"},"updateOrderState"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../../Components/Orders#update-order-customer-state"},(0,i.kt)("inlineCode",{parentName:"a"},"updateOrderCustomerState"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../../Components/Orders#rate-order"},(0,i.kt)("inlineCode",{parentName:"a"},"rateOrder")))))}c.isMDXComponent=!0}}]);