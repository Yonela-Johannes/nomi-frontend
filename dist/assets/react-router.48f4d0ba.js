import{i as p,r as U,j as C,A as j,p as w,s as L,m as I,a as T}from"./@remix-run.0f90e68c.js";import{R,r as o}from"./react.6bac1629.js";/**
 * React Router v6.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P.apply(this,arguments)}function V(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const k=typeof Object.is=="function"?Object.is:V,{useState:_,useEffect:$,useLayoutEffect:G,useDebugValue:W}=R;function X(e,t,n){const r=t(),[{inst:a},l]=_({inst:{value:r,getSnapshot:t}});return G(()=>{a.value=r,a.getSnapshot=t,y(a)&&l({inst:a})},[e,r,t]),$(()=>(y(a)&&l({inst:a}),e(()=>{y(a)&&l({inst:a})})),[e]),W(r),r}function y(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!k(n,r)}catch{return!0}}function Y(e,t,n){return t()}const q=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined",z=!q,K=z?Y:X;"useSyncExternalStore"in R&&(e=>e.useSyncExternalStore)(R);const Q=o.exports.createContext(null),Z=o.exports.createContext(null),N=o.exports.createContext(null),D=o.exports.createContext(null),E=o.exports.createContext(null),f=o.exports.createContext({outlet:null,matches:[]}),F=o.exports.createContext(null);function ie(e,t){let{relative:n}=t===void 0?{}:t;v()||p(!1);let{basename:r,navigator:a}=o.exports.useContext(D),{hash:l,pathname:s,search:i}=A(e,{relative:n}),u=s;return r!=="/"&&(u=s==="/"?r:C([r,s])),a.createHref({pathname:u,search:i,hash:l})}function v(){return o.exports.useContext(E)!=null}function B(){return v()||p(!1),o.exports.useContext(E).location}function J(e){return e.filter((t,n)=>n===0||!t.route.index&&t.pathnameBase!==e[n-1].pathnameBase)}function ce(){v()||p(!1);let{basename:e,navigator:t}=o.exports.useContext(D),{matches:n}=o.exports.useContext(f),{pathname:r}=B(),a=JSON.stringify(J(n).map(i=>i.pathnameBase)),l=o.exports.useRef(!1);return o.exports.useEffect(()=>{l.current=!0}),o.exports.useCallback(function(i,u){if(u===void 0&&(u={}),!l.current)return;if(typeof i=="number"){t.go(i);return}let c=U(i,JSON.parse(a),r,u.relative==="path");e!=="/"&&(c.pathname=c.pathname==="/"?e:C([e,c.pathname])),(u.replace?t.replace:t.push)(c,u.state,u)},[e,t,a,r])}function pe(){let{matches:e}=o.exports.useContext(f),t=e[e.length-1];return t?t.params:{}}function A(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=o.exports.useContext(f),{pathname:a}=B(),l=JSON.stringify(J(r).map(s=>s.pathnameBase));return o.exports.useMemo(()=>U(e,JSON.parse(l),a,n==="path"),[e,l,a,n])}function H(e,t){v()||p(!1);let n=o.exports.useContext(N),{matches:r}=o.exports.useContext(f),a=r[r.length-1],l=a?a.params:{};a&&a.pathname;let s=a?a.pathnameBase:"/";a&&a.route;let i=B(),u;if(t){var c;let d=typeof t=="string"?w(t):t;s==="/"||((c=d.pathname)==null?void 0:c.startsWith(s))||p(!1),u=d}else u=i;let h=u.pathname||"/",g=s==="/"?h:h.slice(s.length)||"/",x=I(e,{pathname:g}),m=ne(x&&x.map(d=>Object.assign({},d,{params:Object.assign({},l,d.params),pathname:C([s,d.pathname]),pathnameBase:d.pathnameBase==="/"?s:C([s,d.pathnameBase])})),r,n||void 0);return t?o.exports.createElement(E.Provider,{value:{location:P({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:j.Pop}},m):m}function ee(){let e=ae(),t=T(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:r},l={padding:"2px 4px",backgroundColor:r};return o.exports.createElement(o.exports.Fragment,null,o.exports.createElement("h2",null,"Unhandled Thrown Error!"),o.exports.createElement("h3",{style:{fontStyle:"italic"}},t),n?o.exports.createElement("pre",{style:a},n):null,o.exports.createElement("p",null,"\u{1F4BF} Hey developer \u{1F44B}"),o.exports.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own\xA0",o.exports.createElement("code",{style:l},"errorElement")," props on\xA0",o.exports.createElement("code",{style:l},"<Route>")))}class te extends o.exports.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?o.exports.createElement(F.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function re(e){let{routeContext:t,match:n,children:r}=e,a=o.exports.useContext(Q);return a&&n.route.errorElement&&(a._deepestRenderedBoundaryId=n.route.id),o.exports.createElement(f.Provider,{value:t},r)}function ne(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,a=n==null?void 0:n.errors;if(a!=null){let l=r.findIndex(s=>s.route.id&&(a==null?void 0:a[s.route.id]));l>=0||p(!1),r=r.slice(0,Math.min(r.length,l+1))}return r.reduceRight((l,s,i)=>{let u=s.route.id?a==null?void 0:a[s.route.id]:null,c=n?s.route.errorElement||o.exports.createElement(ee,null):null,h=()=>o.exports.createElement(re,{match:s,routeContext:{outlet:l,matches:t.concat(r.slice(0,i+1))}},u?c:s.route.element!==void 0?s.route.element:l);return n&&(s.route.errorElement||i===0)?o.exports.createElement(te,{location:n.location,component:c,error:u,children:h()}):h()},null)}var S;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(S||(S={}));function oe(e){let t=o.exports.useContext(N);return t||p(!1),t}function ae(){var e;let t=o.exports.useContext(F),n=oe(S.UseRouteError),r=o.exports.useContext(f),a=r.matches[r.matches.length-1];return t||(r||p(!1),a.route.id||p(!1),(e=n.errors)==null?void 0:e[a.route.id])}function se(e){p(!1)}function de(e){let{basename:t="/",children:n=null,location:r,navigationType:a=j.Pop,navigator:l,static:s=!1}=e;v()&&p(!1);let i=t.replace(/^\/*/,"/"),u=o.exports.useMemo(()=>({basename:i,navigator:l,static:s}),[i,l,s]);typeof r=="string"&&(r=w(r));let{pathname:c="/",search:h="",hash:g="",state:x=null,key:m="default"}=r,d=o.exports.useMemo(()=>{let O=L(c,i);return O==null?null:{pathname:O,search:h,hash:g,state:x,key:m}},[i,c,h,g,x,m]);return d==null?null:o.exports.createElement(D.Provider,{value:u},o.exports.createElement(E.Provider,{children:n,value:{location:d,navigationType:a}}))}function he(e){let{children:t,location:n}=e,r=o.exports.useContext(Z),a=r&&!t?r.router.routes:b(t);return H(a,n)}var M;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(M||(M={}));new Promise(()=>{});function b(e,t){t===void 0&&(t=[]);let n=[];return o.exports.Children.forEach(e,(r,a)=>{if(!o.exports.isValidElement(r))return;if(r.type===o.exports.Fragment){n.push.apply(n,b(r.props.children,t));return}r.type!==se&&p(!1);let l=[...t,a],s={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(s.children=b(r.props.children,l)),n.push(s)}),n}export{de as R,ce as a,B as b,A as c,pe as d,he as e,se as f,ie as u};