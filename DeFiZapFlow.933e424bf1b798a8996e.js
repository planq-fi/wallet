(self.webpackJsonp=self.webpackJsonp||[]).push([[5],{2705:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(79),r=u(n(1137)),o=n(449),s=u(n(2787)),c=n(4);function u(e){return e&&e.__esModule?e:{default:e}}var d=(0,a.withRouter)(({match:e})=>{const{zapName:t}=e.params,n=t?o.ZAPS_CONFIG[t]:void 0;return(0,c.jsx)(c.Fragment,{children:n?(0,c.jsx)(s.default,{selectedZap:n}):(0,c.jsx)(r.default,{})})});t.default=d},2787:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=f(n(1127)),r=n(11),o=f(n(1135)),s=n(9),c=n(8),u=f(n(1139)),d=f(n(1138)),i=f(n(1140)),l=f(n(2788)),p=n(4);function f(e){return e&&e.__esModule?e:{default:e}}var x=({selectedZap:e})=>{const{zapFlowState:t,handleUserInputFormSubmit:n,handleTxSigned:f}=(0,c.useStateReducer)(l.default,{zapSelected:e,txConfig:void 0,txReceipt:void 0});const x=[{label:(0,s.translateRaw)("ZAP_FLOW_ADD_FUNDS"),component:d.default,props:t,actions:(e,t)=>n(e,t)},{label:(0,s.translateRaw)("CONFIRM_TRANSACTION"),component:u.default,props:(({txConfig:e,zapSelected:t})=>({txConfig:e,zapSelected:t}))(t)},{label:"",component:o.default,props:(({txConfig:e})=>({txConfig:e}))(t),actions:(e,t)=>f(e,t)},{label:(0,s.translateRaw)("BROADCAST_TX_RECEIPT_TITLE"),component:i.default,props:(({txConfig:e,zapSelected:t,txReceipt:n})=>({txConfig:e,zapSelected:t,txReceipt:n}))(t)}];return(0,p.jsx)(a.default,{steps:x,defaultBackPath:r.ROUTE_PATHS.DEFIZAP.path,defaultBackPathLabel:r.ROUTE_PATHS.DEFIZAP.title,completeBtnText:(0,s.translateRaw)("SEND_ASSETS_SEND_ANOTHER")})};t.default=x},2788:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(95),r=n(33),o=n(76),s=n(16),c=n(8);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=({state:e,setState:t})=>{const{addTxToAccount:n}=(0,r.useAccounts)(),{getNetworkById:u}=(0,r.useNetworks)();return{handleUserInputFormSubmit:(n,r)=>{const o={rawTransaction:(0,a.makeTxFromForm)(d(d({},n),{},{address:e.zapSelected.contractAddress,gasLimit:e.zapSelected.minimumGasLimit}),(0,c.inputValueToHex)(n.amount),"0x"),amount:n.amount,senderAccount:n.account,receiverAddress:e.zapSelected.contractAddress,networkId:n.network.id,asset:n.asset,baseAsset:n.asset||{},from:n.account.address};t(d(d({},e),{},{txConfig:o})),r()},handleTxSigned:async(r,i)=>{const{txConfig:l}=e;if(l.senderAccount)if((0,c.isWeb3Wallet)(l.senderAccount.wallet)){const a=r&&r.hash?r:{hash:r,asset:l.asset};n(e.txConfig.senderAccount,d(d({},a),{},{to:e.txConfig.receiverAddress,from:e.txConfig.senderAccount.address,amount:e.txConfig.amount,txType:s.ITxType.DEFIZAP,status:s.ITxStatus.PENDING})),t(e=>d(d({},e),{},{txReceipt:a})),i()}else{new o.ProviderHandler(u(l.networkId)).sendRawTx(r).then(e=>e.hash).catch(e=>e).then(r=>{const o=(0,a.makePendingTxReceipt)(r)(s.ITxType.DEFIZAP,l);n(e.txConfig.senderAccount,o),t(e=>d(d({},e),{},{txReceipt:o})),i()})}},zapFlowState:e}};t.default=l}}]);
//# sourceMappingURL=DeFiZapFlow.933e424bf1b798a8996e.js.map