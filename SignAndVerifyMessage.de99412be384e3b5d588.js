(self.webpackJsonp=self.webpackJsonp||[]).push([[18],{2702:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(0),i=n(79),s=f(n(6)),l=n(14),r=n(11),o=n(7),d=f(n(9)),u=n(2760),c=n(4);function f(e){return e&&e.__esModule?e:{default:e}}const{SCREEN_SM:g}=o.BREAK_POINTS,p=s.default.div.withConfig({displayName:"SignAndVerifyMessage__HeadingWrapper",componentId:"fbcsky-0"})(["display:flex;flex-direction:column;width:100%;"]),S=s.default.div.withConfig({displayName:"SignAndVerifyMessage__Heading",componentId:"fbcsky-1"})(["display:flex;justify-content:space-between;margin-bottom:10px;@media (max-width:","){flex-direction:column;align-items:center;}"],g),m=s.default.div.withConfig({displayName:"SignAndVerifyMessage__Title",componentId:"fbcsky-2"})(["margin-bottom:10px;@media (max-width:","){width:100%;}"],g),y=s.default.div.withConfig({displayName:"SignAndVerifyMessage__SubTitle",componentId:"fbcsky-3"})(["margin-bottom:10px;font-size:18px;font-weight:normal;@media (max-width:","){display:none;}"],g),_=s.default.div.withConfig({displayName:"SignAndVerifyMessage__SubTitleMobile",componentId:"fbcsky-4"})(["margin-bottom:10px;font-size:18px;font-weight:normal;align-self:flex-start;@media (min-width:","){display:none;}"],g),h=s.default.div.withConfig({displayName:"SignAndVerifyMessage__TabsWrapper",componentId:"fbcsky-5"})(["max-height:50px;margin-top:8px;width:fit-content;"]);var x=(0,i.withRouter)((function({history:e,location:t}){const[n,i]=(0,a.useState)(!0),s=u.tabsConfig.find(e=>r.ROUTE_PATHS[e.key].path===t.pathname),o=u.tabsConfig.map(t=>({title:r.ROUTE_PATHS[t.key].title,onClick:()=>((e,t)=>{e.push(t)})(e,r.ROUTE_PATHS[t.key].path)}));return s?(0,c.jsx)(l.ExtendedContentPanel,{heading:(0,c.jsxs)(p,{children:[(0,c.jsxs)(S,{children:[(0,c.jsx)(m,{children:r.ROUTE_PATHS[s.key].title}),n&&(0,c.jsx)(_,{children:(0,d.default)(s.subtitle)}),(0,c.jsx)(h,{children:(0,c.jsx)(l.Tabs,{tabs:o,selectedIndex:u.tabsConfig.findIndex(e=>e.key===s.key)})})]}),n&&(0,c.jsx)(y,{children:(0,d.default)(s.subtitle)})]}),width:"850px",children:(0,c.jsx)(s.component,{setShowSubtitle:i})}):(0,c.jsx)(c.Fragment,{})}));t.default=x},2760:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.tabsConfig=void 0;var a=n(11),i=l(n(2761)),s=l(n(2763));function l(e){return e&&e.__esModule?e:{default:e}}const r=[{key:a.ROUTE_PATHS.SIGN_MESSAGE.name,subtitle:"SIGN_MESSAGE_DESCRIPTION",component:i.default},{key:a.ROUTE_PATHS.VERIFY_MESSAGE.name,subtitle:"VERIFY_MESSAGE_DESCRIPTION",component:s.default}];t.tabsConfig=r},2761:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(0),i=n(36),s=n(44),l=n(96),r=x(n(6)),o=x(n(443)),d=n(14),u=n(11),c=n(25),f=n(7),g=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=h(t);if(n&&n.has(e))return n.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var l=i?Object.getOwnPropertyDescriptor(e,s):null;l&&(l.get||l.set)?Object.defineProperty(a,s,l):a[s]=e[s]}a.default=e,n&&n.set(e,a);return a}(n(9)),p=n(16),S=n(19),m=n(1132),y=n(2762),_=n(4);function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(h=function(e){return e?n:t})(e)}function x(e){return e&&e.__esModule?e:{default:e}}const E=(0,r.default)(d.Button).withConfig({displayName:"SignMessage__SignButton",componentId:"sc-1ytfja3-0"})([""," @media (max-width:","){width:100%;}"],e=>e.disabled&&"opacity: 0.4;",f.BREAK_POINTS.SCREEN_XS),w=(0,r.default)(i.Button).withConfig({displayName:"SignMessage__BackButton",componentId:"sc-1ytfja3-1"})(["align-self:flex-start;color:#007a99;font-weight:bold;display:flex;align-items:center;font-size:20px;"," img{margin-right:8px;}"],e=>e.marginBottom&&"margin-bottom: 40px;");var M=(0,l.connect)(e=>({isDemoMode:(0,c.getIsDemoMode)(e),status:(0,m.selectSignMessageStatus)(e),error:(0,m.selectSignMessageError)(e),signedMessage:(0,m.selectSignedMessage)(e),message:(0,m.selectMessage)(e),walletId:(0,m.selectWalletId)(e)}),e=>(0,s.bindActionCreators)({walletSelect:m.walletSelect,messageUpdate:m.messageUpdate,signMessageReset:m.signMessageReset,signMessage:m.signMessage},e))((function({setShowSubtitle:e,isDemoMode:t,signedMessage:n,message:i,messageUpdate:s,status:l,error:r,walletSelect:f,walletId:m,signMessageReset:h,signMessage:x}){const[M,b]=(0,a.useState)(void 0),v=(0,c.useSelector)((0,c.getWalletConnection)(m));(0,S.useUnmount)(()=>{M&&m===p.WalletId.WALLETCONNECT&&M.kill(),h()});const I=(0,y.getStories)().find(e=>e.name===m),j=I&&I.steps[0];return(0,_.jsxs)(d.Box,{variant:"columnAlign",children:[t&&(0,_.jsx)(d.DemoGatewayBanner,{}),m?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(w,{marginBottom:!!M,basic:!0,onClick:()=>{h(),b(void 0),e(!0)},children:[(0,_.jsx)("img",{src:o.default,alt:"Back arrow"}),(0,g.translateRaw)("CHANGE_WALLET_BUTTON")]}),!M&&(0,_.jsx)(j,{wallet:u.WALLETS_CONFIG[m],walletParams:v,onUnlock:e=>{const t=Array.isArray(e)?e[0]:e;b(t)},formData:{network:u.DEFAULT_NETWORK}})]}):(0,_.jsx)(d.WalletList,{wallets:(0,y.getStories)(),onSelect:t=>{e(!1),f(t)}}),M&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(d.InputField,{value:i,label:(0,g.default)("MSG_MESSAGE"),placeholder:(0,g.translateRaw)("SIGN_MSG_PLACEHOLDER"),textarea:!0,onChange:e=>s(e.target.value),height:"150px",inputError:r&&(0,g.translateRaw)("SIGN_MESSAGE_ERROR")}),(0,_.jsx)(E,{disabled:!i||t,onClick:()=>{if(!M||!i)throw Error("[signMessageWorker]: Missing arguments");x({message:i,wallet:M})},loading:"SIGN_REQUEST"===l,children:"SIGN_REQUEST"===l?(0,g.default)("SUBMITTING"):(0,g.default)("NAV_SIGNMSG")}),"SIGN_SUCCESS"===l&&(0,_.jsxs)(d.Box,{mt:"10px",width:"100%",children:[(0,_.jsx)(d.Text,{variant:"label",children:(0,g.default)("MSG_SIGNATURE")}),(0,_.jsx)(d.Box,{width:"100%",children:(0,_.jsx)(d.CodeBlock,{children:JSON.stringify(n,null,2)})})]})]})]})}));t.default=M},2762:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getStories=void 0;var a=n(14),i=n(187),s=n(16);t.getStories=()=>[{name:s.WalletId.WEB3,steps:[a.Web3ProviderDecrypt]},{name:s.WalletId.LEDGER_NANO_S_NEW,steps:[a.HWLegacy]},{name:s.WalletId.TREZOR,steps:[a.HWLegacy]},{name:s.WalletId.GRIDPLUS,steps:[a.HWLegacy]},{name:s.WalletId.WALLETCONNECT,steps:[(0,i.withWalletConnect)(a.WalletConnectDecrypt,!1)]}]},2763:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,i=n(0),s=n(660),l=n(79),r=(a=n(6))&&a.__esModule?a:{default:a},o=n(14),d=n(76),u=n(25),c=n(7),f=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var l=i?Object.getOwnPropertyDescriptor(e,s):null;l&&(l.get||l.set)?Object.defineProperty(a,s,l):a[s]=e[s]}a.default=e,n&&n.set(e,a);return a}(n(9)),g=n(8),p=n(1131),S=n(4);function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}const{SCREEN_XS:y}=c.BREAK_POINTS,{WHITE:_,SUCCESS_GREEN:h}=c.COLORS,x=r.default.div.withConfig({displayName:"VerifyMessage__Content",componentId:"wyprxg-0"})(["display:flex;flex-direction:column;align-items:center;"]),E=(0,r.default)(o.Button).withConfig({displayName:"VerifyMessage__VerifyButton",componentId:"wyprxg-1"})(["@media (max-width:","){width:100%;}"],y),w=r.default.div.withConfig({displayName:"VerifyMessage__SignedMessage",componentId:"wyprxg-2"})(["margin-top:15px;padding:15px;color:",";font-size:16px;background-color:",";width:100%;overflow:auto;"],_,h),M=JSON.stringify({address:"0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8",msg:"asdfasdfasdf",sig:"0x4771d78f13ba...",version:"2"},null,2);var b=(0,l.withRouter)(({location:e})=>{const[t,n]=(0,i.useState)(""),[a,l]=(0,i.useState)(void 0),[r,c]=(0,i.useState)(null),[m,y]=(0,i.useState)(!1),_=(0,u.useSelector)(u.selectDefaultNetwork),h=new d.ProviderHandler(_),b=async(e,n)=>{const a=null!=e?e:t;y(!0);try{const e=n?(0,p.normalizeSingleQuotes)(a):a,t=(0,p.normalizeJson)(e),i=(0,g.verifySignedMessage)(t),s=!i&&await h.isValidEIP1271Signature(t);if(!i&&!s)throw Error();l(void 0),c(t)}catch(e){if(!n)return b(a,!0);l((0,f.translateRaw)("ERROR_38")),c(null)}finally{y(!1)}};return(0,i.useEffect)(()=>{const{address:t,message:a,signature:i}=(0,s.parse)(e.search);if(t&&a&&i){const e=JSON.stringify({address:t,msg:a,sig:i,version:"2"},null,2);n(e),b(e)}},[]),(0,S.jsxs)(x,{children:[(0,S.jsx)(o.InputField,{value:t,label:(0,f.default)("MSG_SIGNATURE"),placeholder:M,textarea:!0,onChange:e=>{return t=e.target.value,n(t),l(void 0),void c(null);var t},height:"150px",inputError:a}),(0,S.jsx)(E,{disabled:!t,loading:m,onClick:()=>b(),children:(0,f.default)("MSG_VERIFY")}),r&&(0,S.jsx)(w,{"data-testid":"sign-result",children:(0,f.default)("VERIFY_MESSAGE_SIGNED",{$address:r.address,$msg:r.msg})})]})});t.default=b}}]);
//# sourceMappingURL=SignAndVerifyMessage.de99412be384e3b5d588.js.map