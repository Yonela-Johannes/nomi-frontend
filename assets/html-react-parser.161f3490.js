import{l as ee}from"./react-property.eaac8e83.js";import{r as j}from"./react.6bac1629.js";import{c as m}from"./attr-accept.d4f66889.js";import{l as R}from"./domelementtype.4be9d55f.js";import{h as te}from"./html-dom-parser.b90dc621.js";import{c as ne}from"./style-to-js.d7109a81.js";var M={},l={},y=m&&m.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,s){i.__proto__=s}||function(i,s){for(var u in s)Object.prototype.hasOwnProperty.call(s,u)&&(i[u]=s[u])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function i(){this.constructor=t}t.prototype=n===null?Object.create(n):(i.prototype=n.prototype,new i)}}(),x=m&&m.__assign||function(){return x=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},x.apply(this,arguments)};Object.defineProperty(l,"__esModule",{value:!0});l.cloneNode=l.hasChildren=l.isDocument=l.isDirective=l.isComment=l.isText=l.isCDATA=l.isTag=l.Element=l.Document=l.CDATA=l.NodeWithChildren=l.ProcessingInstruction=l.Comment=l.Text=l.DataNode=l.Node=void 0;var d=R,I=function(){function e(){this.parent=null,this.prev=null,this.next=null,this.startIndex=null,this.endIndex=null}return Object.defineProperty(e.prototype,"parentNode",{get:function(){return this.parent},set:function(t){this.parent=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"previousSibling",{get:function(){return this.prev},set:function(t){this.prev=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"nextSibling",{get:function(){return this.next},set:function(t){this.next=t},enumerable:!1,configurable:!0}),e.prototype.cloneNode=function(t){return t===void 0&&(t=!1),S(this,t)},e}();l.Node=I;var E=function(e){y(t,e);function t(n){var i=e.call(this)||this;return i.data=n,i}return Object.defineProperty(t.prototype,"nodeValue",{get:function(){return this.data},set:function(n){this.data=n},enumerable:!1,configurable:!0}),t}(I);l.DataNode=E;var L=function(e){y(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n.type=d.ElementType.Text,n}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 3},enumerable:!1,configurable:!0}),t}(E);l.Text=L;var B=function(e){y(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n.type=d.ElementType.Comment,n}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 8},enumerable:!1,configurable:!0}),t}(E);l.Comment=B;var U=function(e){y(t,e);function t(n,i){var s=e.call(this,i)||this;return s.name=n,s.type=d.ElementType.Directive,s}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),t}(E);l.ProcessingInstruction=U;var N=function(e){y(t,e);function t(n){var i=e.call(this)||this;return i.children=n,i}return Object.defineProperty(t.prototype,"firstChild",{get:function(){var n;return(n=this.children[0])!==null&&n!==void 0?n:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lastChild",{get:function(){return this.children.length>0?this.children[this.children.length-1]:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"childNodes",{get:function(){return this.children},set:function(n){this.children=n},enumerable:!1,configurable:!0}),t}(I);l.NodeWithChildren=N;var V=function(e){y(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n.type=d.ElementType.CDATA,n}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 4},enumerable:!1,configurable:!0}),t}(N);l.CDATA=V;var k=function(e){y(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n.type=d.ElementType.Root,n}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 9},enumerable:!1,configurable:!0}),t}(N);l.Document=k;var $=function(e){y(t,e);function t(n,i,s,u){s===void 0&&(s=[]),u===void 0&&(u=n==="script"?d.ElementType.Script:n==="style"?d.ElementType.Style:d.ElementType.Tag);var c=e.call(this,s)||this;return c.name=n,c.attribs=i,c.type=u,c}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"tagName",{get:function(){return this.name},set:function(n){this.name=n},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"attributes",{get:function(){var n=this;return Object.keys(this.attribs).map(function(i){var s,u;return{name:i,value:n.attribs[i],namespace:(s=n["x-attribsNamespace"])===null||s===void 0?void 0:s[i],prefix:(u=n["x-attribsPrefix"])===null||u===void 0?void 0:u[i]}})},enumerable:!1,configurable:!0}),t}(N);l.Element=$;function W(e){return(0,d.isTag)(e)}l.isTag=W;function H(e){return e.type===d.ElementType.CDATA}l.isCDATA=H;function F(e){return e.type===d.ElementType.Text}l.isText=F;function J(e){return e.type===d.ElementType.Comment}l.isComment=J;function G(e){return e.type===d.ElementType.Directive}l.isDirective=G;function Y(e){return e.type===d.ElementType.Root}l.isDocument=Y;function re(e){return Object.prototype.hasOwnProperty.call(e,"children")}l.hasChildren=re;function S(e,t){t===void 0&&(t=!1);var n;if(F(e))n=new L(e.data);else if(J(e))n=new B(e.data);else if(W(e)){var i=t?w(e.children):[],s=new $(e.name,x({},e.attribs),i);i.forEach(function(r){return r.parent=s}),e.namespace!=null&&(s.namespace=e.namespace),e["x-attribsNamespace"]&&(s["x-attribsNamespace"]=x({},e["x-attribsNamespace"])),e["x-attribsPrefix"]&&(s["x-attribsPrefix"]=x({},e["x-attribsPrefix"])),n=s}else if(H(e)){var i=t?w(e.children):[],u=new V(i);i.forEach(function(o){return o.parent=u}),n=u}else if(Y(e)){var i=t?w(e.children):[],c=new k(i);i.forEach(function(o){return o.parent=c}),e["x-mode"]&&(c["x-mode"]=e["x-mode"]),n=c}else if(G(e)){var a=new U(e.name,e.data);e["x-name"]!=null&&(a["x-name"]=e["x-name"],a["x-publicId"]=e["x-publicId"],a["x-systemId"]=e["x-systemId"]),n=a}else throw new Error("Not implemented yet: ".concat(e.type));return n.startIndex=e.startIndex,n.endIndex=e.endIndex,e.sourceCodeLocation!=null&&(n.sourceCodeLocation=e.sourceCodeLocation),n}l.cloneNode=S;function w(e){for(var t=e.map(function(i){return S(i,!0)}),n=1;n<t.length;n++)t[n].prev=t[n-1],t[n-1].next=t[n];return t}(function(e){var t=m&&m.__createBinding||(Object.create?function(a,r,o,f){f===void 0&&(f=o);var p=Object.getOwnPropertyDescriptor(r,o);(!p||("get"in p?!r.__esModule:p.writable||p.configurable))&&(p={enumerable:!0,get:function(){return r[o]}}),Object.defineProperty(a,f,p)}:function(a,r,o,f){f===void 0&&(f=o),a[f]=r[o]}),n=m&&m.__exportStar||function(a,r){for(var o in a)o!=="default"&&!Object.prototype.hasOwnProperty.call(r,o)&&t(r,a,o)};Object.defineProperty(e,"__esModule",{value:!0}),e.DomHandler=void 0;var i=R,s=l;n(l,e);var u={withStartIndices:!1,withEndIndices:!1,xmlMode:!1},c=function(){function a(r,o,f){this.dom=[],this.root=new s.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null,typeof o=="function"&&(f=o,o=u),typeof r=="object"&&(o=r,r=void 0),this.callback=r!=null?r:null,this.options=o!=null?o:u,this.elementCB=f!=null?f:null}return a.prototype.onparserinit=function(r){this.parser=r},a.prototype.onreset=function(){this.dom=[],this.root=new s.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null},a.prototype.onend=function(){this.done||(this.done=!0,this.parser=null,this.handleCallback(null))},a.prototype.onerror=function(r){this.handleCallback(r)},a.prototype.onclosetag=function(){this.lastNode=null;var r=this.tagStack.pop();this.options.withEndIndices&&(r.endIndex=this.parser.endIndex),this.elementCB&&this.elementCB(r)},a.prototype.onopentag=function(r,o){var f=this.options.xmlMode?i.ElementType.Tag:void 0,p=new s.Element(r,o,void 0,f);this.addNode(p),this.tagStack.push(p)},a.prototype.ontext=function(r){var o=this.lastNode;if(o&&o.type===i.ElementType.Text)o.data+=r,this.options.withEndIndices&&(o.endIndex=this.parser.endIndex);else{var f=new s.Text(r);this.addNode(f),this.lastNode=f}},a.prototype.oncomment=function(r){if(this.lastNode&&this.lastNode.type===i.ElementType.Comment){this.lastNode.data+=r;return}var o=new s.Comment(r);this.addNode(o),this.lastNode=o},a.prototype.oncommentend=function(){this.lastNode=null},a.prototype.oncdatastart=function(){var r=new s.Text(""),o=new s.CDATA([r]);this.addNode(o),r.parent=o,this.lastNode=r},a.prototype.oncdataend=function(){this.lastNode=null},a.prototype.onprocessinginstruction=function(r,o){var f=new s.ProcessingInstruction(r,o);this.addNode(f)},a.prototype.handleCallback=function(r){if(typeof this.callback=="function")this.callback(r,this.dom);else if(r)throw r},a.prototype.addNode=function(r){var o=this.tagStack[this.tagStack.length-1],f=o.children[o.children.length-1];this.options.withStartIndices&&(r.startIndex=this.parser.startIndex),this.options.withEndIndices&&(r.endIndex=this.parser.endIndex),o.children.push(r),f&&(r.prev=f,f.next=r),r.parent=o,this.lastNode=null},a}();e.DomHandler=c,e.default=c})(M);var ie=j.exports,ae=ne.default;function oe(e,t){if(!e||typeof e!="object")throw new TypeError("First argument must be an object");var n,i,s=typeof t=="function",u={},c={};for(n in e){if(i=e[n],s&&(u=t(n,i),u&&u.length===2)){c[u[0]]=u[1];continue}typeof i=="string"&&(c[i]=n)}return c}function se(e,t){if(e.indexOf("-")===-1)return t&&typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var le={reactCompat:!0};function ue(e,t){if(e!=null)try{t.style=ae(e,le)}catch{t.style={}}}var ce=ie.version.split(".")[0]>=16,q=new Set(["tr","tbody","thead","tfoot","colgroup","table","head","html","frameset"]);function fe(e){return!q.has(e.name)}var z={PRESERVE_CUSTOM_ATTRIBUTES:ce,invertObject:oe,isCustomComponent:se,setStyleProp:ue,canTextBeChildOfNode:fe,elementsWithNoTextChildren:q},g=ee,D=z,pe=["checked","value"],de=["input","select","textarea"],he={reset:!0,submit:!0},K=function(t,n){t=t||{};var i,s,u,c,a,r={},o=t.type&&he[t.type];for(i in t){if(u=t[i],g.isCustomAttribute(i)){r[i]=u;continue}if(s=i.toLowerCase(),c=A(s),c){switch(a=g.getPropertyInfo(c),pe.indexOf(c)!==-1&&de.indexOf(n)!==-1&&!o&&(c=A("default"+s)),r[c]=u,a&&a.type){case g.BOOLEAN:r[c]=!0;break;case g.OVERLOADED_BOOLEAN:u===""&&(r[c]=!0);break}continue}D.PRESERVE_CUSTOM_ATTRIBUTES&&(r[i]=u)}return D.setStyleProp(t.style,r),r};function A(e){return g.possibleStandardNames[e]}var me=j.exports,ye=K,O=z,ve=O.setStyleProp,Te=O.canTextBeChildOfNode;function Q(e,t){t=t||{};for(var n=t.library||me,i=n.cloneElement,s=n.createElement,u=n.isValidElement,c=[],a,r,o=typeof t.replace=="function",f,p,P,Z=t.trim,b=0,_=e.length;b<_;b++){if(a=e[b],o&&(f=t.replace(a),u(f))){_>1&&(f=i(f,{key:f.key||b})),c.push(f);continue}if(a.type==="text"){if(r=!a.data.trim().length,r&&a.parent&&!Te(a.parent)||Z&&r)continue;c.push(a.data);continue}switch(p=a.attribs,be(a)?ve(p.style,p):p&&(p=ye(p,a.name)),P=null,a.type){case"script":case"style":a.children[0]&&(p.dangerouslySetInnerHTML={__html:a.children[0].data});break;case"tag":a.name==="textarea"&&a.children[0]?p.defaultValue=a.children[0].data:a.children&&a.children.length&&(P=Q(a.children,t));break;default:continue}_>1&&(p.key=b),c.push(s(a.name,p,P))}return c.length===1?c[0]:c}function be(e){return O.PRESERVE_CUSTOM_ATTRIBUTES&&e.type==="tag"&&O.isCustomComponent(e.name,e.attribs)}var ge=Q,C=M,T=te,xe=K,X=ge;T=typeof T.default=="function"?T.default:T;var Oe={lowerCaseAttributeNames:!1};function h(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");return e===""?[]:(t=t||{},X(T(e,t.htmlparser2||Oe),t))}h.domToReact=X;h.htmlToDOM=T;h.attributesToProps=xe;h.Comment=C.Comment;h.Element=C.Element;h.ProcessingInstruction=C.ProcessingInstruction;h.Text=C.Text;var v=h;h.default=h;v.domToReact;v.htmlToDOM;v.attributesToProps;v.Comment;v.Element;v.ProcessingInstruction;v.Text;export{v as h};