import{h as A,g as _,e as b,c as y}from"./@babel.3a8c2b99.js";import{r as a,a as Ye}from"./react.6bac1629.js";import{c as oe}from"./classnames.894b94fb.js";import{R as Ce}from"./rc-resize-observer.5e4ec66b.js";import{j as qe,f as Je,a as Qe}from"./rc-util.48716302.js";import{r as Ze}from"./react-dom.743d3922.js";var et=["prefixCls","invalidate","item","renderItem","responsive","responsiveDisabled","registerSize","itemKey","className","style","children","display","order","component"],I=void 0;function tt(e,i){var l=e.prefixCls,o=e.invalidate,f=e.item,n=e.renderItem,u=e.responsive,x=e.responsiveDisabled,c=e.registerSize,C=e.itemKey,N=e.className,H=e.style,Y=e.children,q=e.display,v=e.order,O=e.component,z=O===void 0?"div":O,P=A(e,et),m=u&&!q;function $(R){c(C,R)}a.exports.useEffect(function(){return function(){$(null)}},[]);var J=n&&f!==I?n(f):Y,g;o||(g={opacity:m?0:1,height:m?0:I,overflowY:m?"hidden":I,order:u?v:I,pointerEvents:m?"none":I,position:m?"absolute":I});var k={};m&&(k["aria-hidden"]=!0);var S=a.exports.createElement(z,_({className:oe(!o&&l,N),style:b(b({},g),H)},k,P,{ref:i}),J);return u&&(S=a.exports.createElement(Ce,{onResize:function(Q){var V=Q.offsetWidth;$(V)},disabled:x},S)),S}var K=a.exports.forwardRef(tt);K.displayName="Item";function rt(e){if(typeof MessageChannel=="undefined")qe(e);else{var i=new MessageChannel;i.port1.onmessage=function(){return e()},i.port2.postMessage(void 0)}}function at(){var e=a.exports.useRef(null),i=function(o){e.current||(e.current=[],rt(function(){Ze.exports.unstable_batchedUpdates(function(){e.current.forEach(function(f){f()}),e.current=null})})),e.current.push(o)};return i}function M(e,i){var l=a.exports.useState(i),o=y(l,2),f=o[0],n=o[1],u=Je(function(x){e(function(){n(x)})});return[f,u]}var X=Ye.createContext(null),nt=["component"],st=["className"],it=["className"],ot=function(i,l){var o=a.exports.useContext(X);if(!o){var f=i.component,n=f===void 0?"div":f,u=A(i,nt);return a.exports.createElement(n,_({},u,{ref:l}))}var x=o.className,c=A(o,st),C=i.className,N=A(i,it);return a.exports.createElement(X.Provider,{value:null},a.exports.createElement(K,_({ref:l,className:oe(x,C)},c,N)))},Ne=a.exports.forwardRef(ot);Ne.displayName="RawItem";var ft=["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"],ge="responsive",we="invalidate";function lt(e){return"+ ".concat(e.length," ...")}function ut(e,i){var l=e.prefixCls,o=l===void 0?"rc-overflow":l,f=e.data,n=f===void 0?[]:f,u=e.renderItem,x=e.renderRawItem,c=e.itemKey,C=e.itemWidth,N=C===void 0?10:C,H=e.ssr,Y=e.style,q=e.className,v=e.maxCount,O=e.renderRest,z=e.renderRawRest,P=e.suffix,m=e.component,$=m===void 0?"div":m,J=e.itemComponent,g=e.onVisibleChange,k=A(e,ft),S=H==="full",R=at(),Q=M(R,null),V=y(Q,2),U=V[0],Ie=V[1],E=U||0,be=M(R,new Map),fe=y(be,2),le=fe[0],ze=fe[1],Pe=M(R,0),ue=y(Pe,2),De=ue[0],We=ue[1],Me=M(R,0),de=y(Me,2),F=de[0],Ae=de[1],Ke=M(R,0),ce=y(Ke,2),T=ce[0],Oe=ce[1],$e=a.exports.useState(null),ve=y($e,2),Z=ve[0],me=ve[1],ke=a.exports.useState(null),pe=y(ke,2),j=pe[0],Ve=pe[1],w=a.exports.useMemo(function(){return j===null&&S?Number.MAX_SAFE_INTEGER:j||0},[j,U]),Ue=a.exports.useState(!1),ye=y(Ue,2),Fe=ye[0],Te=ye[1],ee="".concat(o,"-item"),xe=Math.max(De,F),te=v===ge,p=n.length&&te,Re=v===we,je=p||typeof v=="number"&&n.length>v,h=a.exports.useMemo(function(){var t=n;return p?U===null&&S?t=n:t=n.slice(0,Math.min(n.length,E/N)):typeof v=="number"&&(t=n.slice(0,v)),t},[n,N,U,v,p]),re=a.exports.useMemo(function(){return p?n.slice(w+1):n.slice(h.length)},[n,h,p,w]),L=a.exports.useCallback(function(t,r){var s;return typeof c=="function"?c(t):(s=c&&(t==null?void 0:t[c]))!==null&&s!==void 0?s:r},[c]),Le=a.exports.useCallback(u||function(t){return t},[u]);function G(t,r,s){j===t&&(r===void 0||r===Z)||(Ve(t),s||(Te(t<n.length-1),g==null||g(t)),r!==void 0&&me(r))}function Ge(t,r){Ie(r.clientWidth)}function Se(t,r){ze(function(s){var d=new Map(s);return r===null?d.delete(t):d.set(t,r),d})}function Xe(t,r){Ae(r),We(F)}function Be(t,r){Oe(r)}function ae(t){return le.get(L(h[t],t))}Qe(function(){if(E&&typeof xe=="number"&&h){var t=T,r=h.length,s=r-1;if(!r){G(0,null);return}for(var d=0;d<r;d+=1){var W=ae(d);if(S&&(W=W||0),W===void 0){G(d-1,void 0,!0);break}if(t+=W,s===0&&t<=E||d===s-1&&t+ae(s)<=E){G(s,null);break}else if(t+xe>E){G(d-1,t-W-T+F);break}}P&&ae(0)+T>E&&me(null)}},[E,le,F,T,L,h]);var Ee=Fe&&!!re.length,he={};Z!==null&&p&&(he={position:"absolute",left:Z,top:0});var D={prefixCls:ee,responsive:p,component:J,invalidate:Re},He=x?function(t,r){var s=L(t,r);return a.exports.createElement(X.Provider,{key:s,value:b(b({},D),{},{order:r,item:t,itemKey:s,registerSize:Se,display:r<=w})},x(t,r))}:function(t,r){var s=L(t,r);return a.exports.createElement(K,_({},D,{order:r,key:s,item:t,renderItem:Le,itemKey:s,registerSize:Se,display:r<=w}))},ne,_e={order:Ee?w:Number.MAX_SAFE_INTEGER,className:"".concat(ee,"-rest"),registerSize:Xe,display:Ee};if(z)z&&(ne=a.exports.createElement(X.Provider,{value:b(b({},D),_e)},z(re)));else{var se=O||lt;ne=a.exports.createElement(K,_({},D,_e),typeof se=="function"?se(re):se)}var ie=a.exports.createElement($,_({className:oe(!Re&&o,q),style:Y,ref:i},k),h.map(He),je?ne:null,P&&a.exports.createElement(K,_({},D,{responsive:te,responsiveDisabled:!p,order:w,className:"".concat(ee,"-suffix"),registerSize:Be,display:!0,style:he}),P));return te&&(ie=a.exports.createElement(Ce,{onResize:Ge,disabled:!p},ie)),ie}var B=a.exports.forwardRef(ut);B.displayName="Overflow";B.Item=Ne;B.RESPONSIVE=ge;B.INVALIDATE=we;export{B as F};
