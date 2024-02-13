(self.webpackJsonp=self.webpackJsonp||[]).push([[21],{2710:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(0),a=n(2),o=n(36),c=O(n(660)),s=n(79),i=O(n(6)),u=n(14),l=n(11),T=n(33),d=n(25),p=n(7),f=n(9),h=n(8),x=n(19),S=n(2801),_=n(2802),y=n(4);function O(e){return e&&e.__esModule?e:{default:e}}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const w=i.default.div.withConfig({displayName:"TxStatus__Wrapper",componentId:"x6xzik-0"})([""," min-height:600px;"],({fullPageLoading:e})=>e&&"\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"),R=(0,i.default)(u.Button).withConfig({displayName:"TxStatus__SButton",componentId:"x6xzik-1"})(["margin-top:0;"]),b=i.default.label.withConfig({displayName:"TxStatus__SLabel",componentId:"x6xzik-2"})(["margin-top:",";color:",";font-weight:normal;"],p.SPACING.SM,p.COLORS.GREY_DARKEST);var C=(0,s.withRouter)(({history:e,location:t})=>{const n=c.default.parse(t.search),{assets:s}=(0,T.useAssets)(),{networks:i}=(0,T.useNetworks)(),p=(0,d.useSelector)(d.getStoreAccounts),O=(0,d.useSelector)(d.getMergedTxHistory),C=n.hash?n.hash:"",j=n.network?n.network:l.DEFAULT_NETWORK,k=(0,_.generateInitialState)(C,j),[m,H]=(0,r.useReducer)(_.txStatusReducer,k),{networkId:v,txHash:P,tx:F,error:A,fetching:X,fromLink:N}=m;(0,x.useEffectOnce)(()=>{(0,h.isVoid)(C)||I(!0)}),(0,x.useUpdateEffect)(()=>{v===l.DEFAULT_NETWORK?e.replace(`${l.ROUTE_PATHS.TX_STATUS.path}/?hash=${P}`):e.replace(`${l.ROUTE_PATHS.TX_STATUS.path}/?hash=${P}&network=${v}`)},[P,v]),(0,r.useEffect)(()=>{X&&(0,S.fetchTxStatus)({networks:i,txHash:P,networkId:v,txCache:O}).then(e=>(0,S.makeTx)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){E(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({txHash:P,networkId:v,accounts:p,assets:s,networks:i},e))).then(e=>H({type:_.txStatusReducer.actionTypes.FETCH_TX_SUCCESS,payload:e})).catch(e=>{console.error(e),H({type:_.txStatusReducer.actionTypes.FETCH_TX_ERROR})})},[X]);const I=e=>{H({type:_.txStatusReducer.actionTypes.FETCH_TX,payload:e})},U=N&&!F,D=P.length>0&&(0,a.isHexString)(P);return(0,y.jsx)(u.ContentPanel,{heading:(0,f.translateRaw)("TX_STATUS"),children:(0,y.jsxs)(w,{fullPageLoading:null!=U&&U,children:[!F&&!N&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(u.NetworkSelector,{network:v||void 0,onChange:e=>H({type:_.txStatusReducer.actionTypes.SET_NETWORK,payload:e})}),(0,y.jsx)(b,{htmlFor:"txhash",children:(0,f.translateRaw)("TX_HASH")}),(0,y.jsx)(o.Input,{name:"txhash",value:P,onChange:e=>H({type:_.txStatusReducer.actionTypes.SET_TX_HASH,payload:e.currentTarget.value})}),A&&(0,y.jsx)(u.InlineMessage,{value:A}),(0,y.jsx)(u.Button,{disabled:!D,loading:X,onClick:()=>I(!1),fullwidth:!0,children:(0,f.translateRaw)("FETCH")})]}),U&&(0,y.jsx)(u.Spinner,{color:"brand",size:4}),F&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(u.TxReceipt,{txConfig:F.config,txReceipt:F.receipt,resetFlow:h.noOp,onComplete:h.noOp,disableDynamicTxReceiptDisplay:!0,disablePendingState:!0}),(0,y.jsx)(R,{onClick:()=>{H({type:_.txStatusReducer.actionTypes.CLEAR_FORM})},fullwidth:!0,colorScheme:"inverted",children:(0,f.translateRaw)("TX_STATUS_GO_BACK")})]})]})})});t.default=C},2801:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.makeTx=t.fetchTxStatus=void 0;var r=n(95),a=n(33),o=n(16);t.fetchTxStatus=async({txHash:e,networkId:t,networks:n,txCache:r})=>{const o=n.find(e=>e.id===t),c=r.find(n=>n.hash===e&&n.asset.networkId===t);if(c)return{cachedTx:c,fetchedTx:void 0};const s=new a.ProviderHandler(o),i=await s.getTransactionByHash(e,!0);return i?{fetchedTx:i,cachedTx:void 0}:void 0};t.makeTx=({txHash:e,networkId:t,networks:n,accounts:a,assets:c,cachedTx:s,fetchedTx:i})=>{const u=n.find(e=>e.id===t);if(s)return{config:(0,r.makeTxConfigFromTxReceipt)(s,c,u,a),receipt:s};{const t=(0,r.makeTxConfigFromTx)(i,c,u,a);return{config:t,receipt:(0,r.makeUnknownTxReceipt)(e)(o.ITxType.UNKNOWN,t)}}}},2802:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.txStatusReducer=t.generateInitialState=void 0;var r,a=n(11),o=(r=n(9))&&r.__esModule?r:{default:r};function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.generateInitialState=(e,t)=>({txHash:e,networkId:t,fetching:!1,error:void 0});const u=(e,t)=>{switch(t.type){case u.actionTypes.SET_NETWORK:return s(s({},e),{},{networkId:t.payload});case u.actionTypes.SET_TX_HASH:return s(s({},e),{},{txHash:t.payload});case u.actionTypes.FETCH_TX:{const n=t.payload;return s(s({},e),{},{fetching:!0,fromLink:n})}case u.actionTypes.FETCH_TX_SUCCESS:{const n=t.payload;return s(s({},e),{},{fetching:!1,tx:n,error:n?void 0:(0,o.default)("TX_NOT_FOUND"),fromLink:!1})}case u.actionTypes.FETCH_TX_ERROR:return s(s({},e),{},{fetching:!1,error:(0,o.default)("TX_NOT_FOUND"),fromLink:!1});case u.actionTypes.CLEAR_FORM:return{tx:void 0,txHash:"",networkId:a.DEFAULT_NETWORK,fetching:!1,error:void 0};default:return e}};t.txStatusReducer=u,u.actionTypes={SET_NETWORK:"SET_NETWORK",SET_TX_HASH:"SET_TX_HASH",FETCH_TX:"FETCH_TX",FETCH_TX_SUCCESS:"FETCH_TX_SUCCESS",FETCH_TX_ERROR:"FETCH_TX_ERROR",CLEAR_FORM:"CLEAR_FORM"}}}]);
//# sourceMappingURL=TxStatus.afc320424f5a93afab06.js.map