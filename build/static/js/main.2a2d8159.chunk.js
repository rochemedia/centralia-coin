(this["webpackJsonpcentralia-coin"]=this["webpackJsonpcentralia-coin"]||[]).push([[0],{147:function(t,e,a){t.exports=a(257)},177:function(t,e){},178:function(t,e){},200:function(t,e){},202:function(t,e){},257:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),r=a(13),s=a.n(r),l=a(292);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(142),c=a.n(o),u=a(93),h=a.n(u)()({palette:{primary:{main:"#b3294e"},secondary:{main:"#4829B2"},contrastThreshold:3,tonalOffset:.2},typography:{useNextVariants:!0}}),m=a(27),d=a(11),p=a(8),f=a(18),g=a(19),v=a(20),b=a(15),y=a.n(b),k=a(258),E=a(291),w=a(5),T=a(287),C=a(289),O=a(290),j=a(294);var x=Object(w.a)((function(t){return{grow:{flexGrow:1},marginRight:{marginRight:t.spacing.unit},menuLink:{textDecoration:"none",color:t.palette.common.white}}}),{withTheme:!0})((function(t){var e=t.classes,a=t.switchTab;return i.a.createElement(T.a,{position:"static"},i.a.createElement(C.a,null,i.a.createElement(O.a,{variant:"h6",color:"inherit",className:e.grow},i.a.createElement("b",null,"TimCOIN")," - The not so decentralized cryptocurrency"),i.a.createElement(j.a,{color:"inherit",size:"large",className:e.marginRight,onClick:function(){a("Wallet")}},"Wallet"),i.a.createElement(j.a,{color:"inherit",size:"large",onClick:function(){a("Mine")}},"Mine")))})),B=a(293),N=function(t){function e(){var t,a;Object(d.a)(this,e);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(f.a)(this,(t=Object(g.a)(e)).call.apply(t,[this].concat(i)))).state={timoshis:"",pk:""},a.checkBalance=function(){var t=a.props.timChain,e=a.state.pk;a.setState({timoshis:t.getBalanceOfAddress(e)})},a}return Object(v.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){var t=this,e=this.props.classes,a=this.state,r=a.pk,s=a.timoshis;return i.a.createElement(n.Fragment,null,i.a.createElement(O.a,{paragraph:!0,variant:"h6"},"Enter the public key of a wallet to find out it's timoshis"),i.a.createElement(B.a,{value:r,fullWidth:!0,variant:"outlined",margin:"normal",onChange:function(e){t.setState({pk:e.target.value})},multiline:!0,label:"Public Key"}),i.a.createElement(B.a,{value:s,fullWidth:!0,variant:"outlined",margin:"normal",InputProps:{readOnly:!0},multiline:!0,label:"timoshis"}),i.a.createElement(j.a,{fullWidth:!0,onClick:this.checkBalance,color:"primary",variant:"contained",className:e.button,disabled:!r},"Check Balance"))}}]),e}(n.PureComponent),P=y()((function(t){return{button:{marginTop:4*t.spacing.unit}}}),{withTheme:!0})(N),W=a(51).ec;var S=function(){var t=new W("secp256k1").genKeyPair();return{pk:t.getPublic("hex"),sk:t.getPrivate("hex")}},A=function(t){function e(){var t,a;Object(d.a)(this,e);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(f.a)(this,(t=Object(g.a)(e)).call.apply(t,[this].concat(i)))).state={pk:"",sk:""},a.createWallet=function(){var t=S();a.setState({pk:t.pk,sk:t.sk})},a}return Object(v.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){var t=this.props.classes,e=this.state,a=e.pk,r=e.sk;return i.a.createElement(n.Fragment,null,i.a.createElement(O.a,{paragraph:!0,variant:"h6"},"Generate a keypair using secp256k1"),i.a.createElement(B.a,{value:a,fullWidth:!0,variant:"outlined",margin:"normal",InputProps:{readOnly:!0},multiline:!0,label:"Public Key"}),i.a.createElement(B.a,{value:r,fullWidth:!0,variant:"outlined",margin:"normal",InputProps:{readOnly:!0},multiline:!0,label:"Private Key"}),i.a.createElement(j.a,{fullWidth:!0,onClick:this.createWallet,color:"primary",variant:"contained",className:t.button},"Generate Wallet"))}}]),e}(n.PureComponent),M=y()((function(t){return{button:{marginTop:4*t.spacing.unit}}}),{withTheme:!0})(A),H=a(70),L=a.n(H),R=new(0,a(51).ec)("secp256k1"),F=function(){function t(e,a,n){Object(d.a)(this,t),this.fromAddress=e,this.toAddress=a,this.amount=n,this.timestamp=Date.now()}return Object(p.a)(t,[{key:"calculateHash",value:function(){return L()(this.fromAddress+this.toAddress+this.amount+this.timestamp).toString()}},{key:"signTransaction",value:function(t,e){var a=R.keyFromPrivate(e);if(t!==this.fromAddress)throw new Error("You cannot sign transactions for other wallets!");var n=this.calculateHash(),i=a.sign(n,"base64");this.signature=i.toDER("hex")}},{key:"isValid",value:function(){if(null===this.fromAddress)return!0;if(!this.signature||0===this.signature.length)throw new Error("No signature in this transaction");return R.keyFromPublic(this.fromAddress,"hex").verify(this.calculateHash(),this.signature)}}]),t}(),I=a(141),V=a.n(I);var D=y()((function(t){return{main:{backgroundColor:"rgba(253, 200, 69, .2)",border:"2px solid rgba(253, 200, 69, .4)",padding:2*t.spacing.unit,borderRadius:t.shape.borderRadius}}}),{withTheme:!0})((function(t){var e=t.className,a=t.children,n=t.classes;return i.a.createElement("div",{className:V()(n.main,e||null)},i.a.createElement(O.a,null,a))})),G=function(t){function e(){var t,a;Object(d.a)(this,e);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(f.a)(this,(t=Object(g.a)(e)).call.apply(t,[this].concat(i)))).state={pk:"",sk:"",timoshis:"",recPk:"",status:null},a.makeTransaction=function(){a.setState({status:null});var t=a.props.timChain,e=a.state,n=e.pk,i=e.recPk,r=e.sk,s=e.timoshis,l=new F(n,i,parseInt(s));try{l.signTransaction(n,r),t.addTransaction(l),a.setState({status:"Transaction will be in the next block if it's valid"})}catch(o){if(console.log(o),"Cannot add invalid transaction to chain"!==o.message&&"You cannot sign transactions for other wallets!"!==o.message)throw o;a.setState({status:o.message})}},a}return Object(v.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){var t=this,e=this.props.classes,a=this.state,r=a.pk,s=a.sk,l=a.timoshis,o=a.recPk,c=a.status;return i.a.createElement(n.Fragment,null,i.a.createElement(O.a,{paragraph:!0,variant:"h6"},"Transfer timoshis from one wallet to another"),i.a.createElement(B.a,{value:r,fullWidth:!0,variant:"outlined",margin:"normal",onChange:function(e){t.setState({pk:e.target.value})},multiline:!0,label:"Your wallets public key"}),i.a.createElement(B.a,{value:s,fullWidth:!0,variant:"outlined",margin:"normal",onChange:function(e){t.setState({sk:e.target.value})},multiline:!0,label:"Your wallets private key"}),i.a.createElement(B.a,{value:o,fullWidth:!0,variant:"outlined",margin:"normal",onChange:function(e){t.setState({recPk:e.target.value})},multiline:!0,label:"The recipient's wallet public key"}),i.a.createElement(B.a,{value:l,fullWidth:!0,variant:"outlined",margin:"normal",onChange:function(e){var a=e.target.value;isNaN(a)||t.setState({timoshis:e.target.value})},multiline:!0,label:"Timoshis to send"}),c&&i.a.createElement(D,{className:e.highLightedInformation},c),i.a.createElement(j.a,{className:e.button,fullWidth:!0,variant:"contained",color:"primary",disabled:!r||!s||!o||!l,onClick:this.makeTransaction},"Create Transaction"))}}]),e}(n.PureComponent),J=y()((function(t){return{button:{marginTop:4*t.spacing.unit},highLightedInformation:{marginTop:2*t.spacing.unit}}}),{withTheme:!0})(G),K=function(t){function e(){var t,a;Object(d.a)(this,e);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(f.a)(this,(t=Object(g.a)(e)).call.apply(t,[this].concat(r)))).state={activeMenu:"Create Wallet"},a.printContent=function(){var t=a.props.timChain;switch(a.state.activeMenu){case"Create Wallet":return i.a.createElement(M,null);case"Balance":return i.a.createElement(P,{timChain:t});case"Make Transaction":return i.a.createElement(J,{timChain:t});default:throw new Error("No branch selected in switcht statement.")}},a}return Object(v.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){var t=this,e=this.props.classes,a=this.state.activeMenu;return i.a.createElement(n.Fragment,null,i.a.createElement("div",{className:e.flexBox},i.a.createElement(j.a,{className:e.rightMargin,onClick:function(){t.setState({activeMenu:"Create Wallet"})},variant:"Create Wallet"===a?"outlined":"text",color:"primary"},"Create Wallet"),i.a.createElement(j.a,{className:e.rightMargin,onClick:function(){t.setState({activeMenu:"Balance"})},variant:"Balance"===a?"outlined":"text",color:"primary"},"Balance"),i.a.createElement(j.a,{variant:"Make Transaction"===a?"outlined":"text",onClick:function(){t.setState({activeMenu:"Make Transaction"})},color:"primary"},"Make Transaction")),i.a.createElement("div",{className:e.contentWrapper},this.printContent()))}}]),e}(n.PureComponent),Y=y()((function(t){return{flexBox:{display:"flex"},rightMargin:{marginRight:t.spacing.unit},contentWrapper:{marginTop:3*t.spacing.unit}}}),{withTheme:!0})(K);var z=y()((function(t){return{paper:{padding:2*t.spacing.unit,overflowX:"hidden"},transactionPaper:{padding:t.spacing.unit,overflowX:"hidden",marginTop:t.spacing.unit}}}),{withTheme:!0})((function(t){var e=t.hash,a=t.prevHash,n=t.transactions,r=t.index,s=t.nonce,l=t.classes,o=t.timestamp;return i.a.createElement(k.a,{className:l.paper},i.a.createElement(O.a,{variant:"body1"},i.a.createElement("b",null,"Index:")," ",r),i.a.createElement(O.a,{variant:"body1"},i.a.createElement("b",null,"Previous hash:")," ",a),i.a.createElement(O.a,{variant:"body1"},i.a.createElement("b",null,"Hash:")," ",e),i.a.createElement(O.a,{variant:"body1"},i.a.createElement("b",null,"Nonce:")," ",s),i.a.createElement(O.a,{variant:"body1"},i.a.createElement("b",null,"Timestamp:")," ",o),i.a.createElement(O.a,{variant:"body1"},i.a.createElement("b",null,"Transactions:")),n.map((function(t){return i.a.createElement(k.a,{key:t.index,className:l.transactionPaper,square:!0,elevation:1},i.a.createElement(O.a,null,i.a.createElement("b",null,"From address:")," ",t.fromAddress?t.fromAddress:"Mining rewards have no address of sender"),i.a.createElement(O.a,null,i.a.createElement("b",null,"To address:")," ",t.toAddress),i.a.createElement(O.a,null,i.a.createElement("b",null,"Signature:")," ",t.signature?t.signature:"Mining rewards have no signature"),i.a.createElement(O.a,null,i.a.createElement("b",null,"Timoshis:")," ",t.amount),i.a.createElement(O.a,null,i.a.createElement("b",null,"Timestamp:")," ",t.timestamp))})))})),X=function(t){function e(){var t,a;Object(d.a)(this,e);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(f.a)(this,(t=Object(g.a)(e)).call.apply(t,[this].concat(i)))).state={},a}return Object(v.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){var t=this.props,e=t.chain,a=t.classes;return i.a.createElement(n.Fragment,null,i.a.createElement(O.a,{paragraph:!0,variant:"body1"},i.a.createElement("b",null,"The blockchain")),e.map((function(t,n){return i.a.createElement("div",{className:n!==e.length-1?a.marginBottom:null,key:t.timestamp},i.a.createElement(z,{index:t.index,prevHash:t.previousHash,hash:t.hash,nonce:t.nonce,timestamp:t.timestamp,transactions:t.transactions}))})))}}]),e}(n.PureComponent),q=y()((function(t){return{marginBottom:{marginBottom:t.spacing.unit}}}))(X),$=function(t){function e(){var t,a;Object(d.a)(this,e);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(f.a)(this,(t=Object(g.a)(e)).call.apply(t,[this].concat(i)))).state={pk:"",hash:"",mining:!1,transactions:[]},a.startMining=function(){var t=a.props.timChain,e=a.state,n=e.pk;if(e.mining){t.minePendingTransactions(n);var i=t.curBlock;a.setState({index:i.index,prevHash:i.previousHash,hash:i.hash,nonce:i.nonce,timestamp:i.timestamp,transactions:i.transactions}),window.setTimeout(a.startMining,10)}},a.initMiningLoop=function(){a.setState({mining:!0},a.startMining)},a.stopMiningLoop=function(){a.setState({mining:!1})},a}return Object(v.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){var t=this,e=this.props.classes,a=this.state,r=a.pk,s=a.mining,l=a.index,o=a.prevHash,c=a.hash,u=a.nonce,h=a.timestamp,m=a.transactions;return i.a.createElement(n.Fragment,null,i.a.createElement(O.a,{paragraph:!0,variant:"h6"},"Mine blocks to get timoshis"),i.a.createElement(B.a,{value:r,onChange:function(e){t.setState({pk:e.target.value})},fullWidth:!0,variant:"outlined",margin:"normal",multiline:!0,label:"Public key of wallet to reward"}),s&&i.a.createElement("div",{className:e.curBlockPaper},i.a.createElement(z,{index:l,hash:c,prevHash:o,nonce:u,timestamp:h,transactions:m})),i.a.createElement(j.a,{fullWidth:!0,onClick:s?this.stopMiningLoop:this.initMiningLoop,color:"primary",variant:"contained",className:e.button,disabled:!r},s?"Stop Mining":"Start Mining"))}}]),e}(n.PureComponent),Q=y()((function(t){return{button:{marginTop:4*t.spacing.unit},curBlockPaper:{marginTop:t.spacing.unit}}}),{withTheme:!0})($),U=function(){function t(e,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;Object(d.a)(this,t),this.previousHash=n,this.timestamp=e,this.transactions=a,this.nonce=0,this.index=i,this.hash=this.calculateHash()}return Object(p.a)(t,[{key:"calculateHash",value:function(){return L()(this.previousHash+this.timestamp+JSON.stringify(this.transactions)+this.nonce+this.index).toString()}},{key:"mineBlock",value:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=0;this.hash.substring(0,t)!==Array(t+1).join("0");){if(e&&a>e)return!1;this.nonce++,a++,this.hash=this.calculateHash()}return!0}},{key:"hasValidTransactions",value:function(){var t=!0,e=!1,a=void 0;try{for(var n,i=this.transactions[Symbol.iterator]();!(t=(n=i.next()).done);t=!0){if(!n.value.isValid())return!1}}catch(r){e=!0,a=r}finally{try{t||null==i.return||i.return()}finally{if(e)throw a}}return!0}}]),t}(),Z=function(){function t(e){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];Object(d.a)(this,t),this.needsNewBlock=!0,this.updateChain=a;var n=this.createGenesisBlock();this.updateChain&&this.updateChain([n]),this.chain=[n],this.difficulty=e,this.pendingTransactions=[],this.miningReward=1e3}return Object(p.a)(t,[{key:"createGenesisBlock",value:function(){return new U(Date.now(),[],"Im the genesis block, i got no\tpredecessor",0)}},{key:"getLatestBlock",value:function(){return this.chain[this.chain.length-1]}},{key:"minePendingTransactions",value:function(t){var e=new F(null,t,this.miningReward);if(this.needsNewBlock||this.pendingTransactions.length>0){for(var a=[],n=0;n<this.pendingTransactions.length;n++){var i=this.pendingTransactions[n];i.isValid()&&this.hasEnoughTimoshis(i)&&a.push(i)}a.push(e),this.curBlock=new U(Date.now(),a,this.getLatestBlock().hash,this.getLatestBlock().index+1),this.pendingTransactions=[],this.needsNewBlock=!1}return!!this.curBlock.mineBlock(this.difficulty,150)&&(this.chain.push(this.curBlock),this.updateChain&&this.updateChain(this.chain),this.pendingTransactions=[],this.needsNewBlock=!0,!0)}},{key:"hasEnoughTimoshis",value:function(t){return!(t.amount>this.getBalanceOfAddress(t.fromAddress))}},{key:"addTransaction",value:function(t){if(!t.fromAddress||!t.toAddress)throw new Error("Transaction must include from and to address");if(!t.isValid())throw new Error("Cannot add invalid transaction to chain");if(t.amount<=0)throw new Error("Transaction amount should be higher than 0");this.pendingTransactions.push(t)}},{key:"getBalanceOfAddress",value:function(t){var e=0,a=!0,n=!1,i=void 0;try{for(var r,s=this.chain[Symbol.iterator]();!(a=(r=s.next()).done);a=!0){var l=r.value,o=!0,c=!1,u=void 0;try{for(var h,m=l.transactions[Symbol.iterator]();!(o=(h=m.next()).done);o=!0){var d=h.value;d.fromAddress===t&&(e-=d.amount),d.toAddress===t&&(e+=d.amount)}}catch(p){c=!0,u=p}finally{try{o||null==m.return||m.return()}finally{if(c)throw u}}}}catch(p){n=!0,i=p}finally{try{a||null==s.return||s.return()}finally{if(n)throw i}}return e}},{key:"getAllTransactionsForWallet",value:function(t){var e=[],a=!0,n=!1,i=void 0;try{for(var r,s=this.chain[Symbol.iterator]();!(a=(r=s.next()).done);a=!0){var l=r.value,o=!0,c=!1,u=void 0;try{for(var h,m=l.transactions[Symbol.iterator]();!(o=(h=m.next()).done);o=!0){var d=h.value;d.fromAddress!==t&&d.toAddress!==t||e.push(d)}}catch(p){c=!0,u=p}finally{try{o||null==m.return||m.return()}finally{if(c)throw u}}}}catch(p){n=!0,i=p}finally{try{a||null==s.return||s.return()}finally{if(n)throw i}}return e}},{key:"isChainValid",value:function(){if(JSON.stringify(this.createGenesisBlock())!==JSON.stringify(this.chain[0]))return!1;for(var t=1;t<this.chain.length;t++){var e=this.chain[t];if(!e.hasValidTransactions())return!1;if(e.hash!==e.calculateHash())return!1}return!0}}]),t}(),_=function(t){function e(){var t,a;Object(d.a)(this,e);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(f.a)(this,(t=Object(g.a)(e)).call.apply(t,[this].concat(r)))).state={timChain:null,chain:[],selectedTab:"Wallet"},a.updateChain=function(t){var e=Object(m.a)(t);a.setState({chain:e})},a.printContent=function(){var t=a.state,e=t.selectedTab,n=t.timChain;switch(e){case"Wallet":return i.a.createElement(Y,{timChain:n});case"Mine":return i.a.createElement(Q,{timChain:n});default:throw new Error("No branch selected in switch statement")}},a.switchTab=function(t){a.setState({selectedTab:t})},a}return Object(v.a)(e,t),Object(p.a)(e,[{key:"componentDidMount",value:function(){var t=new Z(4,this.updateChain);this.setState({timChain:t})}},{key:"render",value:function(){var t=this.props.classes,e=this.state.chain;return i.a.createElement(n.Fragment,null,i.a.createElement(x,{switchTab:this.switchTab}),i.a.createElement("div",{className:t.flexBox},i.a.createElement("div",{className:t.contentWrapper},i.a.createElement(E.a,{container:!0,justify:"space-between"},i.a.createElement(E.a,{item:!0,xs:12,md:7},i.a.createElement(k.a,{className:t.paperPaddingLeft},this.printContent())),i.a.createElement(E.a,{item:!0,xs:12,md:4},i.a.createElement(k.a,{className:t.explorerPaper},i.a.createElement(q,{chain:e})))))))}}]),e}(n.PureComponent),tt=y()((function(t){return{contentWrapper:{maxWidth:1400,width:"100%",marginLeft:t.spacing.unit,marginRiht:t.spacing.unit},flexBox:{marginTop:8*t.spacing.unit,display:"flex",justifyContent:"center"},fullWidth:{width:"100%"},paperPaddingLeft:{paddingTop:2*t.spacing.unit,paddingBottom:2*t.spacing.unit,paddingLeft:3*t.spacing.unit,paddingRight:3*t.spacing.unit,width:"100%"},explorerPaper:{padding:2*t.spacing.unit,marginBottom:4*t.spacing.unit}}}),{withTheme:!0})(_);s.a.render(i.a.createElement(c.a,{theme:h},i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Baloo+Bhaijaan|Roboto:300,400,500",rel:"stylesheet"}),i.a.createElement(l.a,null),i.a.createElement(tt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[147,1,2]]]);
//# sourceMappingURL=main.2a2d8159.chunk.js.map