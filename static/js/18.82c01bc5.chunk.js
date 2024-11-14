(this["webpackJsonphubble-webapp"]=this["webpackJsonphubble-webapp"]||[]).push([[18],{790:function(e,t,a){"use strict";var n=a(9),c=a(6),r=a(0),l=a(775),s=a(14),i=a.n(s),o=a(63),d=a(106),b=r.createContext(null),j=b.Provider,u=b,p=a(54),m=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(a[n[c]]=e[n[c]])}return a},x=function(e,t){var a,s=r.useContext(u),b=r.useContext(d.b),j=b.getPrefixCls,x=b.direction,O=r.useRef(),v=Object(o.a)(t,O);r.useEffect((function(){Object(p.a)(!("optionType"in e),"Radio","`optionType` is only support in Radio.Group.")}),[]);var f=e.prefixCls,y=e.className,h=e.children,g=e.style,E=m(e,["prefixCls","className","children","style"]),C=j("radio",f),N=Object(c.a)({},E);s&&(N.name=s.name,N.onChange=function(t){var a,n;null===(a=e.onChange)||void 0===a||a.call(e,t),null===(n=null===s||void 0===s?void 0:s.onChange)||void 0===n||n.call(s,t)},N.checked=e.value===s.value,N.disabled=e.disabled||s.disabled);var w=i()("".concat(C,"-wrapper"),(a={},Object(n.a)(a,"".concat(C,"-wrapper-checked"),N.checked),Object(n.a)(a,"".concat(C,"-wrapper-disabled"),N.disabled),Object(n.a)(a,"".concat(C,"-wrapper-rtl"),"rtl"===x),a),y);return r.createElement("label",{className:w,style:g,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},r.createElement(l.a,Object(c.a)({},N,{prefixCls:C,ref:v})),void 0!==h?r.createElement("span",null,h):null)},O=r.forwardRef(x);O.displayName="Radio",O.defaultProps={type:"radio"};var v=O,f=a(13),y=a(84),h=a(93);var g=r.forwardRef((function(e,t){var a=r.useContext(d.b),l=a.getPrefixCls,s=a.direction,o=r.useContext(h.b),b=Object(y.a)(e.defaultValue,{value:e.value}),u=Object(f.a)(b,2),p=u[0],m=u[1];return r.createElement(j,{value:{onChange:function(t){var a=p,n=t.target.value;"value"in e||m(n);var c=e.onChange;c&&n!==a&&c(t)},value:p,disabled:e.disabled,name:e.name}},function(){var a,d=e.prefixCls,b=e.className,j=void 0===b?"":b,u=e.options,m=e.optionType,x=e.buttonStyle,O=void 0===x?"outline":x,f=e.disabled,y=e.children,h=e.size,g=e.style,E=e.id,C=e.onMouseEnter,N=e.onMouseLeave,w=l("radio",d),T="".concat(w,"-group"),P=y;if(u&&u.length>0){var S="button"===m?"".concat(w,"-button"):w;P=u.map((function(e){return"string"===typeof e?r.createElement(v,{key:e,prefixCls:S,disabled:f,value:e,checked:p===e},e):r.createElement(v,{key:"radio-group-value-options-".concat(e.value),prefixCls:S,disabled:e.disabled||f,value:e.value,checked:p===e.value,style:e.style},e.label)}))}var k=h||o,R=i()(T,"".concat(T,"-").concat(O),(a={},Object(n.a)(a,"".concat(T,"-").concat(k),k),Object(n.a)(a,"".concat(T,"-rtl"),"rtl"===s),a),j);return r.createElement("div",Object(c.a)({},function(e){return Object.keys(e).reduce((function(t,a){return"data-"!==a.substr(0,5)&&"aria-"!==a.substr(0,5)&&"role"!==a||"data-__"===a.substr(0,7)||(t[a]=e[a]),t}),{})}(e),{className:R,style:g,onMouseEnter:C,onMouseLeave:N,id:E,ref:t}),P)}())})),E=r.memo(g),C=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(a[n[c]]=e[n[c]])}return a},N=function(e,t){var a=r.useContext(u),n=r.useContext(d.b).getPrefixCls,l=e.prefixCls,s=C(e,["prefixCls"]),i=n("radio-button",l);return a&&(s.checked=e.value===a.value,s.disabled=e.disabled||a.disabled),r.createElement(v,Object(c.a)({prefixCls:i},s,{type:"radio",ref:t}))},w=r.forwardRef(N),T=v;T.Button=w,T.Group=E;t.a=T},799:function(e,t,a){"use strict";var n=a(757),c=(a(800),a(19));t.a=function(e){var t=e.firstLineTitle,a=e.firstLineValue,r=e.collateralRatioName,l=void 0===r?"Collateral Ratio":r,s=e.newCollateralRatio,i=e.prevCollateralRatio,o=e.className,d=void 0===o?"bottom-container":o,b=e.isPrev,j=void 0===b||b;return Object(c.jsxs)("div",{className:d,children:[Object(c.jsxs)("div",{className:"item-center",style:{justifyContent:"space-between",marginTop:10},children:[Object(c.jsx)(n.a.Text,{type:"secondary",children:t}),Object(c.jsx)(n.a.Text,{strong:!0,children:a})]}),Object(c.jsxs)("div",{className:"item-center",style:{justifyContent:"space-between",marginTop:10},children:[Object(c.jsx)(n.a.Text,{type:"secondary",children:l}),Object(c.jsxs)("div",{children:[Object(c.jsx)(n.a.Text,{strong:!0,children:s}),Object(c.jsx)(n.a.Text,{type:"secondary",children:j?"(Prev.".concat(i,")"):i})]})]})]})}},800:function(e,t,a){},803:function(e,t,a){"use strict";var n=a(9),c=a(6),r=a(0),l=a(14),s=a.n(l),i=a(58),o=a(106),d=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(a[n[c]]=e[n[c]])}return a},b=function(e){var t=e.prefixCls,a=e.className,l=e.hoverable,i=void 0===l||l,b=d(e,["prefixCls","className","hoverable"]);return r.createElement(o.a,null,(function(e){var l=(0,e.getPrefixCls)("card",t),o=s()("".concat(l,"-grid"),a,Object(n.a)({},"".concat(l,"-grid-hoverable"),i));return r.createElement("div",Object(c.a)({},b,{className:o}))}))},j=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(a[n[c]]=e[n[c]])}return a},u=function(e){return r.createElement(o.a,null,(function(t){var a=t.getPrefixCls,n=e.prefixCls,l=e.className,i=e.avatar,o=e.title,d=e.description,b=j(e,["prefixCls","className","avatar","title","description"]),u=a("card",n),p=s()("".concat(u,"-meta"),l),m=i?r.createElement("div",{className:"".concat(u,"-meta-avatar")},i):null,x=o?r.createElement("div",{className:"".concat(u,"-meta-title")},o):null,O=d?r.createElement("div",{className:"".concat(u,"-meta-description")},d):null,v=x||O?r.createElement("div",{className:"".concat(u,"-meta-detail")},x,O):null;return r.createElement("div",Object(c.a)({},b,{className:p}),m,v)}))},p=a(789),m=a(781),x=a(780),O=a(93),v=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(a[n[c]]=e[n[c]])}return a};var f=function(e){var t,a,l,d=r.useContext(o.b),j=d.getPrefixCls,u=d.direction,f=r.useContext(O.b),y=e.prefixCls,h=e.className,g=e.extra,E=e.headStyle,C=void 0===E?{}:E,N=e.bodyStyle,w=void 0===N?{}:N,T=e.title,P=e.loading,S=e.bordered,k=void 0===S||S,R=e.size,L=e.type,A=e.cover,M=e.actions,z=e.tabList,B=e.children,I=e.activeTabKey,K=e.defaultActiveTabKey,U=e.tabBarExtraContent,D=e.hoverable,G=e.tabProps,V=void 0===G?{}:G,$=v(e,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),H=j("card",y),F=0===w.padding||"0px"===w.padding?{padding:24}:void 0,J=r.createElement("div",{className:"".concat(H,"-loading-block")}),_=r.createElement("div",{className:"".concat(H,"-loading-content"),style:F},r.createElement(m.a,{gutter:8},r.createElement(x.a,{span:22},J)),r.createElement(m.a,{gutter:8},r.createElement(x.a,{span:8},J),r.createElement(x.a,{span:15},J)),r.createElement(m.a,{gutter:8},r.createElement(x.a,{span:6},J),r.createElement(x.a,{span:18},J)),r.createElement(m.a,{gutter:8},r.createElement(x.a,{span:13},J),r.createElement(x.a,{span:9},J)),r.createElement(m.a,{gutter:8},r.createElement(x.a,{span:4},J),r.createElement(x.a,{span:3},J),r.createElement(x.a,{span:16},J))),q=void 0!==I,Q=Object(c.a)(Object(c.a)({},V),(t={},Object(n.a)(t,q?"activeKey":"defaultActiveKey",q?I:K),Object(n.a)(t,"tabBarExtraContent",U),t)),W=z&&z.length?r.createElement(p.a,Object(c.a)({size:"large"},Q,{className:"".concat(H,"-head-tabs"),onChange:function(t){var a;null===(a=e.onTabChange)||void 0===a||a.call(e,t)}}),z.map((function(e){return r.createElement(p.a.TabPane,{tab:e.tab,disabled:e.disabled,key:e.key})}))):null;(T||g||W)&&(l=r.createElement("div",{className:"".concat(H,"-head"),style:C},r.createElement("div",{className:"".concat(H,"-head-wrapper")},T&&r.createElement("div",{className:"".concat(H,"-head-title")},T),g&&r.createElement("div",{className:"".concat(H,"-extra")},g)),W));var X=A?r.createElement("div",{className:"".concat(H,"-cover")},A):null,Y=r.createElement("div",{className:"".concat(H,"-body"),style:w},P?_:B),Z=M&&M.length?r.createElement("ul",{className:"".concat(H,"-actions")},function(e){return e.map((function(t,a){return r.createElement("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(a)},r.createElement("span",null,t))}))}(M)):null,ee=Object(i.a)($,["onTabChange"]),te=R||f,ae=s()(H,(a={},Object(n.a)(a,"".concat(H,"-loading"),P),Object(n.a)(a,"".concat(H,"-bordered"),k),Object(n.a)(a,"".concat(H,"-hoverable"),D),Object(n.a)(a,"".concat(H,"-contain-grid"),function(){var t;return r.Children.forEach(e.children,(function(e){e&&e.type&&e.type===b&&(t=!0)})),t}()),Object(n.a)(a,"".concat(H,"-contain-tabs"),z&&z.length),Object(n.a)(a,"".concat(H,"-").concat(te),te),Object(n.a)(a,"".concat(H,"-type-").concat(L),!!L),Object(n.a)(a,"".concat(H,"-rtl"),"rtl"===u),a),h);return r.createElement("div",Object(c.a)({},ee,{className:ae}),l,X,Y,Z)};f.Grid=b,f.Meta=u;t.a=f},848:function(e,t,a){},855:function(e,t,a){"use strict";a.r(t);var n=a(757),c=a(780),r=a(781),l=a(803),s=a(784),i=a(776),o=(a(848),a(763)),d=a(766),b=a(799),j=a(19),u=n.a.Title;t.default=function(){var e=[{icon:o.a,item:"BTC",price:82.5,amount:100,value:"$2,000.00"},{icon:d.a,item:"SOL",price:82.5,amount:100,value:"$2,000.00"}];return Object(j.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexGrow:1,width:"100%",marginTop:"100px"},children:[Object(j.jsx)(c.a,{className:"first-redeem-box",children:Object(j.jsx)("div",{children:Object(j.jsxs)(r.a,{children:[Object(j.jsxs)(c.a,{span:24,children:[Object(j.jsxs)(l.a,{className:"redeem-card",children:[Object(j.jsxs)(r.a,{className:"item-center justify-center",children:[Object(j.jsx)(u,{level:3,children:"Redeem"}),Object(j.jsx)(c.a,{span:24,className:"item-center justify-center",children:Object(j.jsx)(s.a,{value:100,max:100,redeem:!0,topic:"Available Balance: 139.98"})})]}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{style:{textAlign:"left"},children:[Object(j.jsx)(n.a.Text,{style:{marginLeft:"10px"},children:"Select Collateral"}),Object(j.jsxs)(l.a,{style:{backgroundColor:"#2F3A4A !important",marginTop:"10px"},children:[Object(j.jsxs)(r.a,{children:[Object(j.jsx)(c.a,{span:6,children:Object(j.jsx)(n.a.Text,{type:"secondary",children:"Token"})}),Object(j.jsx)(c.a,{span:6,children:Object(j.jsx)(n.a.Text,{type:"secondary",children:"Price"})}),Object(j.jsx)(c.a,{span:6,children:Object(j.jsx)(n.a.Text,{type:"secondary",children:"Amount"})}),Object(j.jsx)(c.a,{span:6,children:Object(j.jsx)(n.a.Text,{type:"secondary",children:"Value"})})]}),Object(j.jsx)("hr",{}),e.map((function(t,a){return Object(j.jsxs)("div",{children:[Object(j.jsxs)(r.a,{children:[Object(j.jsxs)(c.a,{span:6,children:[Object(j.jsx)("img",{src:t.icon,alt:"Icon"}),"\xa0",Object(j.jsx)(n.a.Text,{children:t.item})]}),Object(j.jsx)(c.a,{span:6,children:Object(j.jsx)(n.a.Text,{children:t.price})}),Object(j.jsx)(c.a,{span:6,children:Object(j.jsx)(n.a.Text,{children:t.amount})}),Object(j.jsx)(c.a,{span:6,children:Object(j.jsx)(n.a.Text,{children:t.value})})]}),a!==e.length-1?Object(j.jsx)("hr",{}):""]},a)}))]})]})]}),Object(j.jsx)(b.a,{firstLineTitle:"Redemption Fee",firstLineValue:"$10 (0.5%)",collateralRatioName:"Receiving",newCollateralRatio:"",prevCollateralRatio:"$3,000.04",className:"vault-bottom-container",isPrev:!1})]}),Object(j.jsx)("div",{style:{marginTop:"100px",width:"100%"},children:Object(j.jsx)(i.a,{text:"Approve",isLoading:!1,disabled:!1})})]})})}),Object(j.jsx)(c.a,{className:"between-redeem-box"}),Object(j.jsx)(c.a,{className:"second-redeem-box",children:Object(j.jsx)("div",{children:Object(j.jsx)(r.a,{style:{textAlign:"left"},children:Object(j.jsxs)(c.a,{span:24,children:[Object(j.jsx)(n.a.Text,{strong:!0,children:"How it works"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsxs)(n.a.Text,{style:{marginTop:"10px"},children:["USDH is a fully collateralized US dollar stablecoin. USDC",Object(j.jsx)("br",{})," is the bridge between dollars and trading on",Object(j.jsx)("br",{})," cryptocurrency exchanges",Object(j.jsx)("br",{}),Object(j.jsx)("br",{})," USDH is a fully collateralized US dollar stablecoin. USDC",Object(j.jsx)("br",{})," is the bridge between dollars and trading on",Object(j.jsx)("br",{})," cryptocurrency exchanges"]})]})})})})]})}}}]);