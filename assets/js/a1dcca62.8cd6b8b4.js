(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[129],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return u},kt:function(){return c}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),p=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(m.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=p(a),c=r,k=d["".concat(m,".").concat(c)]||d[c]||s[c]||l;return a?n.createElement(k,o(o({ref:e},u),{},{components:a})):n.createElement(k,o({ref:e},u))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8818:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return m},default:function(){return u}});var n=a(2122),r=a(9756),l=(a(7294),a(3905)),o={sidebar_position:2},i={unversionedId:"Components/Customers",id:"Components/Customers",isDocsHomePage:!1,title:"Customers",description:"Create Customer",source:"@site/docs/Components/Customers.md",sourceDirName:"Components",slug:"/Components/Customers",permalink:"/react-native-bildit-flybuy/docs/Components/Customers",editUrl:"https://github.com/bildit-llc/react-native-bildit-flybuy/edit/main/website/docs/Components/Customers.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Orders",permalink:"/react-native-bildit-flybuy/docs/Components/Orders"},next:{title:"Sites",permalink:"/react-native-bildit-flybuy/docs/Components/Sites"}},m=[{value:"Create Customer",id:"create-customer",children:[]},{value:"Update Customer",id:"update-customer",children:[]},{value:"Get Current Customer",id:"get-current-customer",children:[]},{value:"Login with Email/Password",id:"login-with-emailpassword",children:[]},{value:"Login with Token",id:"login-with-token",children:[]},{value:"Logout",id:"logout",children:[]}],p={toc:m};function u(t){var e=t.components,a=(0,r.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"create-customer"},"Create Customer"),(0,l.kt)("h4",{id:"params"},"Params"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"customer"),(0,l.kt)("td",{parentName:"tr",align:null},"Obj"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{name: 'Abdelkhalek Zellat',carType: 'Nothing',carColor: 'Silver',licensePlate: 'Nothing',phone: '555-555-5555',}"))))),(0,l.kt)("h4",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"Flybuy.Customer.createCustomer({\n      name: 'Abdelkhalek Zellat',\n      carType: 'Nothing',\n      carColor: 'Silver',\n      licensePlate: 'Nothing',\n      phone: '555-555-5555',\n    })\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://www.radiusnetworks.com/developers/flybuy/#/api/v1/customers?id=create-a-customer"},"flybuy Create Customer Documentation"))),(0,l.kt)("h2",{id:"update-customer"},"Update Customer"),(0,l.kt)("h4",{id:"params-1"},"Params"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"customer"),(0,l.kt)("td",{parentName:"tr",align:null},"Obj"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{name: 'Abdelkhalek Zellat',carType: 'Nothing',carColor: 'Silver',licensePlate: 'Nothing',phone: '555-555-5555',}"))))),(0,l.kt)("h4",{id:"example-1"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"Flybuy.Customer.updateCustomer({\n      name: 'Abdelkhalek Zellat',\n      carType: 'Nothing',\n      carColor: 'Purple',\n      licensePlate: 'Nothing',\n      phone: '555-555-5555',\n    })\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://www.radiusnetworks.com/developers/flybuy/#/api/v1/customers?id=update-a-customer"},"flybuy Update Customer Documentation"))),(0,l.kt)("h2",{id:"get-current-customer"},"Get Current Customer"),(0,l.kt)("h4",{id:"params-2"},"Params"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("h4",{id:"example-2"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"Flybuy.Customer.getCurrentCustomer()\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://www.radiusnetworks.com/developers/flybuy/#/sdk/customer?id=get-the-current-customer"},"flybuy Get Current Customer Documentation"))),(0,l.kt)("h2",{id:"login-with-emailpassword"},"Login with Email/Password"),(0,l.kt)("h4",{id:"params-3"},"Params"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"email"),(0,l.kt)("td",{parentName:"tr",align:null},"Str"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'name@email.com'"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"Str"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'password'"))))),(0,l.kt)("h4",{id:"example-3"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"Flybuy.Customer.login(`<email>`, `<password>`)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://www.radiusnetworks.com/developers/flybuy/#/sdk-2.0/customer?id=login"},"flybuy Login with Email/Password Documentation"))),(0,l.kt)("h2",{id:"login-with-token"},"Login with Token"),(0,l.kt)("h4",{id:"params-4"},"Params"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"token"),(0,l.kt)("td",{parentName:"tr",align:null},"Str"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'F69PGKM1QXCN7Dj3ybEXCpU4'"))))),(0,l.kt)("h4",{id:"eample"},"Eample"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"Flybuy.Customer.loginWithToken(`<token>`)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://www.radiusnetworks.com/developers/flybuy/#/sdk-2.0/customer?id=login-via-customer-token"},"flybuy Login with Token Documentation"))),(0,l.kt)("h2",{id:"logout"},"Logout"),(0,l.kt)("h4",{id:"params-5"},"Params"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("h4",{id:"example-4"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"Flybuy.Customer.logout()\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://www.radiusnetworks.com/developers/flybuy/#/sdk-2.0/customer?id=logout"},"flybuy Logout Documentation"))))}u.isMDXComponent=!0}}]);