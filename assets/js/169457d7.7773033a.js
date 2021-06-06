(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[17],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=u(n),m=o,y=f["".concat(p,".").concat(m)]||f[m]||s[m]||a;return n?r.createElement(y,c(c({ref:t},l),{},{components:n})):r.createElement(y,c({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1554:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return i},toc:function(){return p},default:function(){return l}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),c={},i={unversionedId:"Example App/Button",id:"Example App/Button",isDocsHomePage:!1,title:"Button.tsx",description:"`jsx",source:"@site/docs/Example App/Button.md",sourceDirName:"Example App",slug:"/Example App/Button",permalink:"/docs/Example App/Button",editUrl:"https://github.com/bildit-llc/react-native-bildit-flybuy/edit/main/website/docs/Example App/Button.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"App.tsx",permalink:"/docs/Example App/App"}},p=[],u={toc:p};function l(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import * as React from 'react';\n\nimport { Text, TouchableOpacity, StyleSheet } from 'react-native';\n\ntype ButtonProps = {\n  title: string;\n  color?: string;\n  onPress?: () => void;\n};\n\nconst Button = ({ title, color = '#841584', onPress }: ButtonProps) => {\n  return (\n    <TouchableOpacity\n      style={[styles.button, { backgroundColor: color }]}\n      onPress={onPress}\n    >\n      <Text style={styles.text}>{title}</Text>\n    </TouchableOpacity>\n  );\n};\n\nconst styles = StyleSheet.create({\n  text: {\n    color: '#fff',\n    fontSize: 15,\n  },\n  button: {\n    width: '60%',\n    padding: 10,\n    margin: 5,\n    borderRadius: 10,\n    justifyContent: 'center',\n    alignItems: 'center',\n  },\n});\n\nexport default Button;\n")))}l.isMDXComponent=!0}}]);