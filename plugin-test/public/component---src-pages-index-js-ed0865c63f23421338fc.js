(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{Cm0i:function(e){e.exports=JSON.parse('{"data":{"sitePlugin":{"pluginOptions":{"username":"thepetlabco.com","business":"5c9df8263ff4c4000185ea05"}}}}')},J10k:function(e,t,r){"use strict";r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi"),r("HQhv"),r("JHok"),r("AqHK"),r("E5k/"),r("4DPX");var n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var r,s,u=o(e),l=1;l<arguments.length;l++){for(var c in r=Object(arguments[l]))a.call(r,c)&&(u[c]=r[c]);if(n){s=n(r);for(var p=0;p<s.length;p++)i.call(r,s[p])&&(u[s[p]]=r[s[p]])}}return u}},RXBc:function(e,t,r){"use strict";r.r(t);var n,a=r("q1tI"),i=r.n(a),o=r("BgHN"),s=r.n(o),u="539ad60defb9600b94d7df2c",l="5419b732fbfb950b10de65e5";var c=function(e){var t,r;function a(t){var r;return r=e.call(this,t)||this,n=setInterval(r.loadLibrary.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r)),1e3),r}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=a.prototype;return i.componentDidMount=function(){this.loadLibrary()},i.componentWillUnmount=function(){clearInterval(n)},i.loadLibrary=function(){"undefined"!=typeof window&&window.Trustpilot&&(window.Trustpilot.loadFromElement(this.props.reference.current,!0),clearInterval(n))},i.render=function(){var e=this.props,t=e.theme,r=e.height,n=e.width,a=e.reference,i=e.template,o=e.business,u=e.username,l=e.stars,c=this.props.language.toLowerCase(),p=this.props.culture.toUpperCase(),h="en"===c?"www":c;return s.a.createElement("div",{ref:a,className:"trustpilot-widget","data-locale":c+"-"+p,"data-template-id":i,"data-businessunit-id":o,"data-style-height":r,"data-style-width":n,"data-theme":t,"data-stars":l},s.a.createElement("a",{href:"https://"+h+".trustpilot.com/review/"+u,target:"_blank",rel:"noopener"},"Trustpilot"))},a}(s.a.Component),p=(r("E5k/"),r("Cm0i")),h=function(){console.log("hooking");var e=p.data.sitePlugin;return Object.assign({},e.pluginOptions)},f=function(e){var t=e.language,r=e.culture,n=e.theme,a=e.height,i=e.width,l=e.stars,p=s.a.createRef(),f=h(),d=f.business,g=f.username;return console.log("listing"),s.a.createElement(o.Fragment,null,s.a.createElement(c,{reference:p,language:t,culture:r,theme:n,height:a,width:i,template:u,business:d,username:g,stars:l}))};f.defaultProps={language:"en",culture:"US",theme:"light",height:"52px",width:"100%"};var d=f,g=function(e){var t=e.language,r=e.culture,n=e.theme,a=e.height,i=e.width,u=s.a.createRef(),p=h(),f=p.business,d=p.username;return s.a.createElement(o.Fragment,null,s.a.createElement(c,{reference:u,template:l,business:f,username:d,language:t,culture:r,theme:n,height:a,width:i}))};g.defaultProps={language:"en",culture:"US",theme:"light",height:"52px",width:"100%"};var m=g;t.default=function(){return console.log("fire"),i.a.createElement("div",null,i.a.createElement(d,{height:"400px"}),i.a.createElement(m,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-ed0865c63f23421338fc.js.map