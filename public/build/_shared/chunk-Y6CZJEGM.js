import{a as H,p as Ct}from"/build/_shared/chunk-QX2APJAW.js";import{d as P}from"/build/_shared/chunk-G5WX4PPA.js";var Ot=P(Ct(),1),z=P(H(),1);var ft="2023-10";function $t(t,e,r){return{"content-type":t==="graphql"?"application/graphql":"application/json","X-SDK-Variant":"hydrogen-react","X-SDK-Variant-Source":"react","X-SDK-Version":e,"X-Shopify-Storefront-Access-Token":r}}var $e={storeDomain:"test",storefrontToken:"abc123",storefrontApiVersion:ft,countryIsoCode:"US",languageIsoCode:"EN",getStorefrontApiUrl(){return""},getPublicTokenHeaders(){return{}},getShopifyDomain(){return""}},Nt=(0,z.createContext)($e);function Oe({children:t,...e}){if(!e.countryIsoCode||!e.languageIsoCode||!e.storeDomain||!e.storefrontToken||!e.storefrontApiVersion)throw new Error("Please provide the necessary props to '<ShopifyProvider/>'");e.storefrontApiVersion!==ft&&console.warn(`<ShopifyProvider/>: This version of Hydrogen React is built for Shopify's Storefront API version ${ft}, but it looks like you're using version ${e.storefrontApiVersion}. There may be issues or bugs if you use a mismatched version of Hydrogen React and the Storefront API.`);let r=(0,z.useMemo)(()=>{function n(o){return o?.storeDomain??e.storeDomain}return{...e,getPublicTokenHeaders(o){return $t(o.contentType,e.storefrontApiVersion,o.storefrontToken??e.storefrontToken)},getShopifyDomain:n,getStorefrontApiUrl(o){let i=n({storeDomain:o?.storeDomain??e.storeDomain});return`${i}${i.endsWith("/")?"":"/"}api/${o?.storefrontApiVersion??e.storefrontApiVersion}/graphql.json`}}},[e]);return(0,Ot.jsx)(Nt.Provider,{value:r,children:t})}function nt(){let t=(0,z.useContext)(Nt);if(!t)throw new Error("'useShop()' must be a descendent of <ShopifyProvider/>");return t}var ot=P(Ct(),1),q=P(H(),1);var Ne=q.forwardRef(({alt:t,aspectRatio:e,crop:r="center",data:n,decoding:o="async",height:i="auto",loader:a=pt,loading:u="lazy",sizes:E,src:h,srcSetOptions:g={intervals:15,startingWidth:200,incrementSize:200,placeholderWidth:100},width:l="100%",...f},_)=>{let d=q.useMemo(()=>{let c=n?.width&&n?.height?n?.width:void 0,p=n?.width&&n?.height?n?.height:void 0;return{width:c,height:p,unitsMatch:Boolean(Lt(c,p))}},[n]),y=q.useMemo(()=>{let p=it((l||"100%").toString()),v=`${p.number}${p.unit}`,S=i==null,A=S?null:it(i.toString()),x=A?`${A.number}${A.unit}`:"",Z=S?"auto":x,W=h||n?.url,Q=n?.altText&&!t?n?.altText:t||"",tt=e||(d.unitsMatch?[at(d.width),at(d.height)].join("/"):void 0);return{width:v,height:Z,src:W,alt:Q,aspectRatio:tt}},[l,i,h,n,t,e,d,f?.key]),{intervals:R,startingWidth:b,incrementSize:U,placeholderWidth:I}=g,T=q.useMemo(()=>Me(l,R,b,U),[l,R,b,U]);return Pt(y.width)?(0,ot.jsx)(Le,{aspectRatio:e,crop:r,decoding:o,height:i,imageWidths:T,loader:a,loading:u,normalizedProps:y,passthroughProps:f,ref:_,width:l}):(0,ot.jsx)(Pe,{aspectRatio:e,crop:r,decoding:o,imageWidths:T,loader:a,loading:u,normalizedProps:y,passthroughProps:f,placeholderWidth:I,ref:_,sizes:E})}),Le=q.forwardRef(({aspectRatio:t,crop:e,decoding:r,height:n,imageWidths:o,loader:i=pt,loading:a,normalizedProps:u,passthroughProps:E,width:h},g)=>{let l=q.useMemo(()=>{let f=at(h),_=at(n),d=t||(Lt(u.width,u.height)?[f,_].join("/"):u.aspectRatio?u.aspectRatio:void 0),y=o===void 0?void 0:Ft(o,d,e),R=_||(d&&f?f*(Tt(d)??1):void 0),b=Mt(u.src,y,i),U=i({src:u.src,width:f,height:R,crop:u.height==="auto"?void 0:e});return{width:f,aspectRatio:d,height:R,srcSet:b,src:U}},[t,e,n,o,i,u,h]);return(0,ot.jsx)("img",{ref:g,alt:u.alt,decoding:r,height:l.height,loading:a,src:l.src,srcSet:l.srcSet,width:l.width,style:{aspectRatio:l.aspectRatio,...E.style},...E})}),Pe=q.forwardRef(({crop:t,decoding:e,imageWidths:r,loader:n=pt,loading:o,normalizedProps:i,passthroughProps:a,placeholderWidth:u,sizes:E},h)=>{let g=q.useMemo(()=>{let l=r===void 0?void 0:Ft(r,i.aspectRatio,t),f=i.aspectRatio&&u?u*(Tt(i.aspectRatio)??1):void 0,_=Mt(i.src,l,n),d=n({src:i.src,width:u,height:f,crop:t});return{placeholderHeight:f,srcSet:_,src:d}},[t,r,n,i,u]);return(0,ot.jsx)("img",{ref:h,alt:i.alt,decoding:e,height:g.placeholderHeight,loading:o,sizes:E,src:g.src,srcSet:g.srcSet,width:u,...a,style:{width:i.width,aspectRatio:i.aspectRatio,...a.style}})});function pt({src:t,width:e,height:r,crop:n}){if(!t)return"";let o=new URL(t);return e&&o.searchParams.append("width",Math.round(e).toString()),r&&o.searchParams.append("height",Math.round(r).toString()),n&&o.searchParams.append("crop",n),o.href}function Lt(t="100%",e="auto"){return it(t.toString()).unit===it(e.toString()).unit}function it(t){let e=t.replace(/[0-9.]/g,""),r=parseFloat(t.replace(e,""));return{unit:e===""?r===void 0?"auto":"px":e,number:r}}function at(t){if(t===void 0)return;let{unit:e,number:r}=it(t.toString());switch(e){case"em":return r*16;case"rem":return r*16;case"px":return r;case"":return r;default:return}}function Pt(t){return typeof t=="number"||typeof t=="string"&&/\d(px|em|rem)$/.test(t)}function Mt(t,e,r=pt){return t?e?.length===0||!e?t:e.map((n,o)=>`${r({src:t,width:n.width,height:n.height,crop:n.crop})} ${e.length===3?`${o+1}x`:`${n.width??0}w`}`).join(", "):""}function Me(t="100%",e,r,n){let o=Array.from({length:e},(a,u)=>u*n+r),i=Array.from({length:3},(a,u)=>(u+1)*(at(t)??0));return Pt(t)?i:o}function Tt(t){if(!t)return;let[e,r]=t.split("/");return 1/(Number(e)/Number(r))}function Ft(t,e,r="center"){return t?t.map(o=>({width:o,height:e?o*(Tt(e)??1):void 0,crop:r})):void 0}var Ue=P(Ct(),1),C=P(H(),1);function Ht(t,e){var r=typeof Symbol=="function"&&t[Symbol.iterator];if(!r)return t;var n,o,i=r.call(t),a=[];try{for(;(e===void 0||e-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(u){o={error:u}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a}var j;(function(t){t[t.NotStarted=0]="NotStarted",t[t.Running=1]="Running",t[t.Stopped=2]="Stopped"})(j||(j={}));var Bt={type:"xstate.init"};function At(t){return t===void 0?[]:[].concat(t)}function X(t){return{type:"xstate.assign",assignment:t}}function Vt(t,e){return typeof(t=typeof t=="string"&&e&&e[t]?e[t]:t)=="string"?{type:t}:typeof t=="function"?{type:t.name,exec:t}:t}function yt(t){return function(e){return t===e}}function Zt(t){return typeof t=="string"?{type:t}:t}function qt(t,e){return{value:t,context:e,actions:[],changed:!1,matches:yt(t)}}function kt(t,e,r){var n=e,o=!1;return[t.filter(function(i){if(i.type==="xstate.assign"){o=!0;var a=Object.assign({},n);return typeof i.assignment=="function"?a=i.assignment(n,r):Object.keys(i.assignment).forEach(function(u){a[u]=typeof i.assignment[u]=="function"?i.assignment[u](n,r):i.assignment[u]}),n=a,!1}return!0}),n,o]}function mt(t,e){e===void 0&&(e={});var r=Ht(kt(At(t.states[t.initial].entry).map(function(a){return Vt(a,e.actions)}),t.context,Bt),2),n=r[0],o=r[1],i={config:t,_options:e,initialState:{value:t.initial,actions:n,context:o,matches:yt(t.initial)},transition:function(a,u){var E,h,g=typeof a=="string"?{value:a,context:t.context}:a,l=g.value,f=g.context,_=Zt(u),d=t.states[l];if(d.on){var y=At(d.on[_.type]);try{for(var R=function(D){var et=typeof Symbol=="function"&&Symbol.iterator,G=et&&D[et],O=0;if(G)return G.call(D);if(D&&typeof D.length=="number")return{next:function(){return D&&O>=D.length&&(D=void 0),{value:D&&D[O++],done:!D}}};throw new TypeError(et?"Object is not iterable.":"Symbol.iterator is not defined.")}(y),b=R.next();!b.done;b=R.next()){var U=b.value;if(U===void 0)return qt(l,f);var I=typeof U=="string"?{target:U}:U,T=I.target,s=I.actions,c=s===void 0?[]:s,p=I.cond,v=p===void 0?function(){return!0}:p,S=T===void 0,A=T??l,x=t.states[A];if(v(f,_)){var Z=Ht(kt((S?At(c):[].concat(d.exit,c,x.entry).filter(function(D){return D})).map(function(D){return Vt(D,i._options.actions)}),f,_),3),W=Z[0],Q=Z[1],tt=Z[2],lt=T??l;return{value:lt,context:Q,actions:W,changed:T!==l||W.length>0||tt,matches:yt(lt)}}}}catch(D){E={error:D}}finally{try{b&&!b.done&&(h=R.return)&&h.call(R)}finally{if(E)throw E.error}}}return qt(l,f)}};return i}var Yt=function(t,e){return t.actions.forEach(function(r){var n=r.exec;return n&&n(t.context,e)})};function jt(t){var e=t.initialState,r=j.NotStarted,n=new Set,o={_machine:t,send:function(i){r===j.Running&&(e=t.transition(e,i),Yt(e,Zt(i)),n.forEach(function(a){return a(e)}))},subscribe:function(i){return n.add(i),i(e),{unsubscribe:function(){return n.delete(i)}}},start:function(i){if(i){var a=typeof i=="object"?i:{context:t.config.context,value:i};e={value:a.value,actions:[],context:a.context,matches:yt(a.value)}}else e=t.initialState;return r=j.Running,Yt(e,Bt),o},stop:function(){return r=j.Stopped,n.clear(),o},get state(){return e},get status(){return r}};return o}var K=P(H(),1);var Wt=P(H(),1),Qt=Wt.useLayoutEffect;var It={exports:{}};var vt={};var ee=P(H(),1);var gt={exports:{}};var _t={};var Xt=P(H(),1);var Gt;function Kt(){if(Gt)return _t;Gt=1;var t=Xt.default;function e(l,f){return l===f&&(l!==0||1/l===1/f)||l!==l&&f!==f}var r=typeof Object.is=="function"?Object.is:e,n=t.useState,o=t.useEffect,i=t.useLayoutEffect,a=t.useDebugValue;function u(l,f){var _=f(),d=n({inst:{value:_,getSnapshot:f}}),y=d[0].inst,R=d[1];return i(function(){y.value=_,y.getSnapshot=f,E(y)&&R({inst:y})},[l,_,f]),o(function(){return E(y)&&R({inst:y}),l(function(){E(y)&&R({inst:y})})},[l]),a(_),_}function E(l){var f=l.getSnapshot;l=l.value;try{var _=f();return!r(l,_)}catch{return!0}}function h(l,f){return f()}var g=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?h:u;return _t.useSyncExternalStore=t.useSyncExternalStore!==void 0?t.useSyncExternalStore:g,_t}var Jt;function zt(){return Jt?gt.exports:(Jt=1,gt.exports=Kt(),gt.exports)}var te;function re(){if(te)return vt;te=1;var t=ee.default,e=zt();function r(h,g){return h===g&&(h!==0||1/h===1/g)||h!==h&&g!==g}var n=typeof Object.is=="function"?Object.is:r,o=e.useSyncExternalStore,i=t.useRef,a=t.useEffect,u=t.useMemo,E=t.useDebugValue;return vt.useSyncExternalStoreWithSelector=function(h,g,l,f,_){var d=i(null);if(d.current===null){var y={hasValue:!1,value:null};d.current=y}else y=d.current;d=u(function(){function b(c){if(!U){if(U=!0,I=c,c=f(c),_!==void 0&&y.hasValue){var p=y.value;if(_(p,c))return T=p}return T=c}if(p=T,n(I,c))return p;var v=f(c);return _!==void 0&&_(p,v)?p:(I=c,T=v)}var U=!1,I,T,s=l===void 0?null:l;return[function(){return b(g())},s===null?void 0:function(){return b(s())}]},[g,l,f,_]);var R=o(h,d[0],d[1]);return a(function(){y.hasValue=!0,y.value=R},[R]),E(R),R},vt}It.exports=re();var ne=It.exports;var oe=P(H(),1);function ie(t){var e=oe.useRef();return e.current||(e.current={v:t()}),e.current.v}var Fe=globalThis&&globalThis.__read||function(t,e){var r=typeof Symbol=="function"&&t[Symbol.iterator];if(!r)return t;var n=r.call(t),o,i=[],a;try{for(;(e===void 0||e-- >0)&&!(o=n.next()).done;)i.push(o.value)}catch(u){a={error:u}}finally{try{o&&!o.done&&(r=n.return)&&r.call(n)}finally{if(a)throw a.error}}return i};function He(t){return t}var Ve=function(t){var e;return t.subscribe(function(r){e=r}).unsubscribe(),e};function ae(t,e){var r=(0,K.useRef)();if(!1)var n,o;var i=Fe(ie(function(){var h=[],g=jt(mt(t.config,e||t._options)),l=g.send;return g.send=function(f){if(g.status===j.NotStarted){h.push(f);return}l(f),r.current=g.state},[g,h]}),2),a=i[0],u=i[1];Qt(function(){e&&(a._machine._options=e)});var E=ke(a);return(0,K.useEffect)(function(){return a.start(r.current),u.forEach(a.send),r.current=a.state,function(){a.stop()}},[]),E}var qe=function(t,e){return e.changed===!1};function ke(t){var e=(0,K.useCallback)(function(){return Ve(t)},[t]),r=(0,K.useCallback)(function(o){var i=t.subscribe(o).unsubscribe;return i},[t]),n=ne.useSyncExternalStoreWithSelector(r,e,e,He,qe);return[n,t.send,t]}function ue(t){if(!t){let e=`flattenConnection(): needs a 'connection' to flatten, but received '${t??""}' instead.`;return console.error(e+" Returning an empty array"),[]}return"nodes"in t?t.nodes:"edges"in t&&Array.isArray(t.edges)?t.edges.map(e=>{if(!e?.node)throw new Error("flattenConnection(): Connection edges must contain nodes");return e.node}):[]}var F=P(H(),1);var ce=t=>`
  mutation CartLineAdd(
    $cartId: ID!
    $lines: [CartLineInput!]!
    $numCartLines: Int = 250
    $country: CountryCode = ZZ
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        ...CartFragment
      }
    }
  }

  ${t}
`,se=t=>`
  mutation CartCreate(
    $input: CartInput!
    $numCartLines: Int = 250
    $country: CountryCode = ZZ
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    cartCreate(input: $input) {
      cart {
        ...CartFragment
      }
    }
  }

  ${t}
`,le=t=>`
  mutation CartLineRemove(
    $cartId: ID!
    $lines: [ID!]!
    $numCartLines: Int = 250
    $country: CountryCode = ZZ
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    cartLinesRemove(cartId: $cartId, lineIds: $lines) {
      cart {
        ...CartFragment
      }
    }
  }

  ${t}
`,de=t=>`
  mutation CartLineUpdate(
    $cartId: ID!
    $lines: [CartLineUpdateInput!]!
    $numCartLines: Int = 250
    $country: CountryCode = ZZ
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        ...CartFragment
      }
    }
  }

  ${t}
`,fe=t=>`
  mutation CartNoteUpdate(
    $cartId: ID!
    $note: String
    $numCartLines: Int = 250
    $country: CountryCode = ZZ
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    cartNoteUpdate(cartId: $cartId, note: $note) {
      cart {
        ...CartFragment
      }
    }
  }

  ${t}
`,pe=t=>`
  mutation CartBuyerIdentityUpdate(
    $cartId: ID!
    $buyerIdentity: CartBuyerIdentityInput!
    $numCartLines: Int = 250
    $country: CountryCode = ZZ
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    cartBuyerIdentityUpdate(cartId: $cartId, buyerIdentity: $buyerIdentity) {
      cart {
        ...CartFragment
      }
    }
  }

  ${t}
`,ye=t=>`
  mutation CartAttributesUpdate(
    $attributes: [AttributeInput!]!
    $cartId: ID!
    $numCartLines: Int = 250
    $country: CountryCode = ZZ
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    cartAttributesUpdate(attributes: $attributes, cartId: $cartId) {
      cart {
        ...CartFragment
      }
    }
  }

  ${t}
`,me=t=>`
  mutation CartDiscountCodesUpdate(
    $cartId: ID!
    $discountCodes: [String!]
    $numCartLines: Int = 250
    $country: CountryCode = ZZ
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    cartDiscountCodesUpdate(cartId: $cartId, discountCodes: $discountCodes) {
      cart {
        ...CartFragment
      }
    }
  }

  ${t}
`,ve=t=>`
  query CartQuery(
    $id: ID!
    $numCartLines: Int = 250
    $country: CountryCode = ZZ
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    cart(id: $id) {
      ...CartFragment
    }
  }

  ${t}
`,ge=`
  fragment CartFragment on Cart {
    id
    checkoutUrl
    totalQuantity
    buyerIdentity {
      countryCode
      customer {
        id
        email
        firstName
        lastName
        displayName
      }
      email
      phone
    }
    lines(first: $numCartLines) {
      edges {
        node {
          id
          quantity
          attributes {
            key
            value
          }
          cost {
            totalAmount {
              amount
              currencyCode
            }
            compareAtAmountPerQuantity {
              amount
              currencyCode
            }
          }
          merchandise {
            ... on ProductVariant {
              id
              availableForSale
              compareAtPrice {
                ...MoneyFragment
              }
              price {
                ...MoneyFragment
              }
              requiresShipping
              title
              image {
                ...ImageFragment
              }
              product {
                handle
                title
                id
              }
              selectedOptions {
                name
                value
              }
            }
          }
        }
      }
    }
    cost {
      subtotalAmount {
        ...MoneyFragment
      }
      totalAmount {
        ...MoneyFragment
      }
      totalDutyAmount {
        ...MoneyFragment
      }
      totalTaxAmount {
        ...MoneyFragment
      }
    }
    note
    attributes {
      key
      value
    }
    discountCodes {
      code
      applicable
    }
  }

  fragment MoneyFragment on MoneyV2 {
    currencyCode
    amount
  }
  fragment ImageFragment on Image {
    id
    url
    altText
    width
    height
  }
`;var Te=P(H(),1);var St="shopifyCartId",_e="Shopify-Storefront-Id",Se="Shopify-Storefront-Y",he="Shopify-Storefront-S",ut="_shopify_y",ct="_shopify_s";var Ye=new Set(["domain","path","max-age","expires","samesite","secure","httponly"]);function Ee(t){let e={},r,n,o=0,i=t.split(/;\s*/g),a,u;for(;o<i.length;o++)if(n=i[o],r=n.indexOf("="),~r){if(a=n.substring(0,r++).trim(),u=n.substring(r).trim(),u[0]==='"'&&(u=u.substring(1,u.length-1)),~u.indexOf("%"))try{u=decodeURIComponent(u)}catch{}Ye.has(n=a.toLowerCase())?n==="expires"?e.expires=new Date(u):n==="max-age"?e.maxage=+u:e[n]=u:e[a]=u}else(a=n.trim().toLowerCase())&&(a==="httponly"||a==="secure")&&(e[a]=!0);return e}function Ce(t){let e=Ee(t);return{[ut]:e[ut]||"",[ct]:e[ct]||""}}function Ae(){let{storefrontId:t,getPublicTokenHeaders:e,getStorefrontApiUrl:r}=nt();return(0,Te.useCallback)(({query:n,variables:o})=>{let i=e({contentType:"json"});t&&(i[_e]=t);let a=Ce(document.cookie);return i[Se]=a[ut],i[he]=a[ct],fetch(r(),{method:"POST",headers:i,body:JSON.stringify({query:n.toString(),variables:o})}).then(u=>u.json()).catch(u=>({data:void 0,errors:u?.toString()}))},[e,t,r])}function Ie({numCartLines:t,cartFragment:e,countryCode:r="US",languageCode:n="EN"}){let o=Ae(),i=(0,F.useCallback)(d=>o({query:ve(e),variables:{id:d,numCartLines:t,country:r,language:n}}),[o,e,t,r,n]),a=(0,F.useCallback)(d=>o({query:se(e),variables:{input:d,numCartLines:t,country:r,language:n}}),[e,r,o,t,n]),u=(0,F.useCallback)((d,y)=>o({query:ce(e),variables:{cartId:d,lines:y,numCartLines:t,country:r,language:n}}),[e,r,o,t,n]),E=(0,F.useCallback)((d,y)=>o({query:de(e),variables:{cartId:d,lines:y,numCartLines:t,country:r,language:n}}),[e,r,o,t,n]),h=(0,F.useCallback)((d,y)=>o({query:le(e),variables:{cartId:d,lines:y,numCartLines:t,country:r,language:n}}),[e,r,o,t,n]),g=(0,F.useCallback)((d,y)=>o({query:fe(e),variables:{cartId:d,note:y,numCartLines:t,country:r,language:n}}),[o,e,t,r,n]),l=(0,F.useCallback)((d,y)=>o({query:pe(e),variables:{cartId:d,buyerIdentity:y,numCartLines:t,country:r,language:n}}),[e,r,o,t,n]),f=(0,F.useCallback)((d,y)=>o({query:ye(e),variables:{cartId:d,attributes:y,numCartLines:t,country:r,language:n}}),[e,r,o,t,n]),_=(0,F.useCallback)((d,y)=>o({query:me(e),variables:{cartId:d,discountCodes:y,numCartLines:t,country:r,language:n}}),[e,r,o,t,n]);return(0,F.useMemo)(()=>({cartFetch:i,cartCreate:a,cartLineAdd:u,cartLineUpdate:E,cartLineRemove:h,noteUpdate:g,buyerIdentityUpdate:l,cartAttributesUpdate:f,discountCodesUpdate:_,cartFragment:e}),[i,a,u,E,h,g,l,f,_,e])}var Rt=P(H(),1);function Y(t,e){return{entry:[...e?.entryActions||[],X({lastValidCart:r=>r?.cart}),"onCartActionEntry","onCartActionOptimisticUI",t],on:{RESOLVE:{target:e?.resolveTarget||"idle",actions:[X({prevCart:r=>r?.lastValidCart,cart:(r,n)=>{var o;return(o=n?.payload)==null?void 0:o.cart},rawCartResult:(r,n)=>{var o;return(o=n?.payload)==null?void 0:o.rawCartResult},errors:r=>{}})]},ERROR:{target:e?.errorTarget||"error",actions:[X({prevCart:r=>r?.lastValidCart,cart:r=>r?.lastValidCart,errors:(r,n)=>{var o;return(o=n?.payload)==null?void 0:o.errors}})]},CART_COMPLETED:{target:"cartCompleted",actions:X({prevCart:r=>{},cart:r=>{},lastValidCart:r=>{},rawCartResult:r=>{},errors:r=>{}})}},exit:["onCartActionComplete",...e?.exitActions||[]]}}var st={CART_FETCH:{target:"cartFetching"},CART_CREATE:{target:"cartCreating"},CART_SET:{target:"idle",actions:[X({rawCartResult:(t,e)=>e.payload.cart,cart:(t,e)=>xt(e.payload.cart)})]}},Re={CARTLINE_ADD:{target:"cartLineAdding"},CARTLINE_UPDATE:{target:"cartLineUpdating"},CARTLINE_REMOVE:{target:"cartLineRemoving"},NOTE_UPDATE:{target:"noteUpdating"},BUYER_IDENTITY_UPDATE:{target:"buyerIdentityUpdating"},CART_ATTRIBUTES_UPDATE:{target:"cartAttributesUpdating"},DISCOUNT_CODES_UPDATE:{target:"discountCodesUpdating"}};function Be(t){return mt({id:"Cart",initial:t?"idle":"uninitialized",context:{cart:t&&xt(t)},states:{uninitialized:{on:st},cartCompleted:{on:st},initializationError:{on:st},idle:{on:{...st,...Re}},error:{on:{...st,...Re}},cartFetching:Y("cartFetchAction",{errorTarget:"initializationError"}),cartCreating:Y("cartCreateAction",{errorTarget:"initializationError"}),cartLineRemoving:Y("cartLineRemoveAction"),cartLineUpdating:Y("cartLineUpdateAction"),cartLineAdding:Y("cartLineAddAction"),noteUpdating:Y("noteUpdateAction"),buyerIdentityUpdating:Y("buyerIdentityUpdateAction"),cartAttributesUpdating:Y("cartAttributesUpdateAction"),discountCodesUpdating:Y("discountCodesUpdateAction")}})}function xe({numCartLines:t,onCartActionEntry:e,onCartActionOptimisticUI:r,onCartActionComplete:n,data:o,cartFragment:i,countryCode:a,languageCode:u}){let{cartFetch:E,cartCreate:h,cartLineAdd:g,cartLineUpdate:l,cartLineRemove:f,noteUpdate:_,buyerIdentityUpdate:d,cartAttributesUpdate:y,discountCodesUpdate:R}=Ie({numCartLines:t,cartFragment:i,countryCode:a,languageCode:u}),b=(0,Rt.useMemo)(()=>Be(o),[o]),[U,I,T]=ae(b,{actions:{cartFetchAction:async(s,c)=>{var p;if(c.type!=="CART_FETCH")return;let{data:v,errors:S}=await E((p=c?.payload)==null?void 0:p.cartId),A=B(c,v?.cart,S);I(A)},cartCreateAction:async(s,c)=>{var p;if(c.type!=="CART_CREATE")return;let{data:v,errors:S}=await h(c?.payload),A=B(c,(p=v?.cartCreate)==null?void 0:p.cart,S);I(A)},cartLineAddAction:async(s,c)=>{var p,v;if(c.type!=="CARTLINE_ADD"||!((p=s?.cart)!=null&&p.id))return;let{data:S,errors:A}=await g(s.cart.id,c.payload.lines),x=B(c,(v=S?.cartLinesAdd)==null?void 0:v.cart,A);I(x)},cartLineUpdateAction:async(s,c)=>{var p,v;if(c.type!=="CARTLINE_UPDATE"||!((p=s?.cart)!=null&&p.id))return;let{data:S,errors:A}=await l(s.cart.id,c.payload.lines),x=B(c,(v=S?.cartLinesUpdate)==null?void 0:v.cart,A);I(x)},cartLineRemoveAction:async(s,c)=>{var p,v;if(c.type!=="CARTLINE_REMOVE"||!((p=s?.cart)!=null&&p.id))return;let{data:S,errors:A}=await f(s.cart.id,c.payload.lines),x=B(c,(v=S?.cartLinesRemove)==null?void 0:v.cart,A);I(x)},noteUpdateAction:async(s,c)=>{var p,v;if(c.type!=="NOTE_UPDATE"||!((p=s?.cart)!=null&&p.id))return;let{data:S,errors:A}=await _(s.cart.id,c.payload.note),x=B(c,(v=S?.cartNoteUpdate)==null?void 0:v.cart,A);I(x)},buyerIdentityUpdateAction:async(s,c)=>{var p,v;if(c.type!=="BUYER_IDENTITY_UPDATE"||!((p=s?.cart)!=null&&p.id))return;let{data:S,errors:A}=await d(s.cart.id,c.payload.buyerIdentity),x=B(c,(v=S?.cartBuyerIdentityUpdate)==null?void 0:v.cart,A);I(x)},cartAttributesUpdateAction:async(s,c)=>{var p,v;if(c.type!=="CART_ATTRIBUTES_UPDATE"||!((p=s?.cart)!=null&&p.id))return;let{data:S,errors:A}=await y(s.cart.id,c.payload.attributes),x=B(c,(v=S?.cartAttributesUpdate)==null?void 0:v.cart,A);I(x)},discountCodesUpdateAction:async(s,c)=>{var p,v;if(c.type!=="DISCOUNT_CODES_UPDATE"||!((p=s?.cart)!=null&&p.id))return;let{data:S,errors:A}=await R(s.cart.id,c.payload.discountCodes),x=B(c,(v=S?.cartDiscountCodesUpdate)==null?void 0:v.cart,A);I(x)},...e&&{onCartActionEntry:(s,c)=>{Ze(c)&&e(s,c)}},...r&&{onCartActionOptimisticUI:X((s,c)=>r(s,c))},...n&&{onCartActionComplete:(s,c)=>{je(c)&&n(s,c)}}}});return(0,Rt.useMemo)(()=>[U,I,T],[U,I,T])}function xt(t){return{...t,lines:ue(t?.lines),note:t.note??void 0}}function B(t,e,r){return r?{type:"ERROR",payload:{errors:r,cartActionEvent:t}}:e?{type:"RESOLVE",payload:{cart:xt(e),rawCartResult:e,cartActionEvent:t}}:{type:"CART_COMPLETED",payload:{cartActionEvent:t}}}function Ze(t){return t.type==="CART_CREATE"||t.type==="CARTLINE_ADD"||t.type==="CARTLINE_UPDATE"||t.type==="CARTLINE_REMOVE"||t.type==="NOTE_UPDATE"||t.type==="BUYER_IDENTITY_UPDATE"||t.type==="CART_ATTRIBUTES_UPDATE"||t.type==="DISCOUNT_CODES_UPDATE"}function je(t){return t.type==="RESOLVE"||t.type==="ERROR"||t.type==="CART_COMPLETED"}var be=(0,C.createContext)(null);function We(){let t=(0,C.useContext)(be);if(!t)throw new Error("Expected a Cart Context, but no Cart Context was found");return t}function Qe({children:t,numCartLines:e,onCreate:r,onLineAdd:n,onLineRemove:o,onLineUpdate:i,onNoteUpdate:a,onBuyerIdentityUpdate:u,onAttributesUpdate:E,onDiscountCodesUpdate:h,onCreateComplete:g,onLineAddComplete:l,onLineRemoveComplete:f,onLineUpdateComplete:_,onNoteUpdateComplete:d,onBuyerIdentityUpdateComplete:y,onAttributesUpdateComplete:R,onDiscountCodesUpdateComplete:b,data:U,cartFragment:I=ge,customerAccessToken:T,countryCode:s,languageCode:c}){var p,v,S,A,x,Z,W;let Q=nt();if(!Q)throw new Error("<CartProvider> needs to be a descendant of <ShopifyProvider>");s=(s??Q.countryIsoCode??"US").toUpperCase(),c=(c??Q.languageIsoCode??"EN").toUpperCase(),s&&(s=s.toUpperCase());let[tt,lt]=(0,C.useState)(s),[D,et]=(0,C.useState)(T),G=(0,C.useRef)(!1);(tt!==s||D!==T)&&(lt(s),et(T),G.current=!1);let[O,J]=xe({numCartLines:e,data:U,cartFragment:I,countryCode:s,languageCode:c,onCartActionEntry(m,w){try{switch(w.type){case"CART_CREATE":return r?.();case"CARTLINE_ADD":return n?.();case"CARTLINE_REMOVE":return o?.();case"CARTLINE_UPDATE":return i?.();case"NOTE_UPDATE":return a?.();case"BUYER_IDENTITY_UPDATE":return u?.();case"CART_ATTRIBUTES_UPDATE":return E?.();case"DISCOUNT_CODES_UPDATE":return h?.()}}catch(N){console.error("Cart entry action failed",N)}},onCartActionOptimisticUI(m,w){var N,k,$,rt;if(!m.cart)return{...m};switch(w.type){case"CARTLINE_REMOVE":return{...m,cart:{...m.cart,lines:(k=(N=m?.cart)==null?void 0:N.lines)==null?void 0:k.filter(M=>M?.id&&!w.payload.lines.includes(M?.id))}};case"CARTLINE_UPDATE":return{...m,cart:{...m.cart,lines:(rt=($=m?.cart)==null?void 0:$.lines)==null?void 0:rt.map(M=>{let Et=w.payload.lines.find(({id:we})=>we===M?.id);return Et&&Et.quantity?{...M,quantity:Et.quantity}:M})}}}return{...m}},onCartActionComplete(m,w){let N=w.payload.cartActionEvent;try{switch(w.type){case"RESOLVE":switch(N.type){case"CART_CREATE":return g?.();case"CARTLINE_ADD":return l?.();case"CARTLINE_REMOVE":return f?.();case"CARTLINE_UPDATE":return _?.();case"NOTE_UPDATE":return d?.();case"BUYER_IDENTITY_UPDATE":return Ke(m,N)&&(G.current=!0),y?.();case"CART_ATTRIBUTES_UPDATE":return R?.();case"DISCOUNT_CODES_UPDATE":return b?.()}}}catch(k){console.error("onCartActionComplete failed",k)}}}),dt=(0,C.useRef)(!1),bt=O.matches("cartCompleted"),Dt=(O.value==="idle"||O.value==="error"||O.value==="cartCompleted")&&s!==((S=(v=(p=O?.context)==null?void 0:p.cart)==null?void 0:v.buyerIdentity)==null?void 0:S.countryCode)&&!O.context.errors,wt=(0,C.useRef)(!1);(0,C.useEffect)(()=>{if(!dt.current&&!wt.current){if(!U&&Ut("localStorage")){wt.current=!0;try{let m=window.localStorage.getItem(St);m&&J({type:"CART_FETCH",payload:{cartId:m}})}catch(m){console.warn("error fetching cartId"),console.warn(m)}}dt.current=!0}},[U,dt,J]),(0,C.useEffect)(()=>{!Dt||G.current||J({type:"BUYER_IDENTITY_UPDATE",payload:{buyerIdentity:{countryCode:s,customerAccessToken:T}}})},[s,T,Dt,G,J]);let V=(0,C.useCallback)(m=>{if(!dt.current)return console.warn("Cart isn't ready yet");J(m)},[J]);(0,C.useEffect)(()=>{var m,w,N;if((w=(m=O?.context)==null?void 0:m.cart)!=null&&w.id&&Ut("localStorage"))try{window.localStorage.setItem(St,(N=O.context.cart)==null?void 0:N.id)}catch(k){console.warn("Failed to save cartId to localStorage",k)}},[(x=(A=O?.context)==null?void 0:A.cart)==null?void 0:x.id]),(0,C.useEffect)(()=>{if(bt&&Ut("localStorage"))try{window.localStorage.removeItem(St)}catch(m){console.warn("Failed to delete cartId from localStorage",m)}},[bt]);let ht=(0,C.useCallback)(m=>{var w,N;s&&!((w=m.buyerIdentity)!=null&&w.countryCode)&&(m.buyerIdentity==null&&(m.buyerIdentity={}),m.buyerIdentity.countryCode=s),T&&!((N=m.buyerIdentity)!=null&&N.customerAccessToken)&&(m.buyerIdentity==null&&(m.buyerIdentity={}),m.buyerIdentity.customerAccessToken=T),V({type:"CART_CREATE",payload:m})},[s,T,V]),L=Xe(O),De=(0,C.useMemo)(()=>{var m,w,N,k;return{...((m=L?.context)==null?void 0:m.cart)??{lines:[],attributes:[]},status:Ge(L.value),error:(w=L?.context)==null?void 0:w.errors,totalQuantity:((k=(N=L?.context)==null?void 0:N.cart)==null?void 0:k.totalQuantity)??0,cartCreate:ht,linesAdd($){var rt,M;(M=(rt=L?.context)==null?void 0:rt.cart)!=null&&M.id?V({type:"CARTLINE_ADD",payload:{lines:$}}):ht({lines:$})},linesRemove($){V({type:"CARTLINE_REMOVE",payload:{lines:$}})},linesUpdate($){V({type:"CARTLINE_UPDATE",payload:{lines:$}})},noteUpdate($){V({type:"NOTE_UPDATE",payload:{note:$}})},buyerIdentityUpdate($){V({type:"BUYER_IDENTITY_UPDATE",payload:{buyerIdentity:$}})},cartAttributesUpdate($){V({type:"CART_ATTRIBUTES_UPDATE",payload:{attributes:$}})},discountCodesUpdate($){V({type:"DISCOUNT_CODES_UPDATE",payload:{discountCodes:$}})},cartFragment:I}},[ht,(Z=L?.context)==null?void 0:Z.cart,(W=L?.context)==null?void 0:W.errors,L.value,I,V]);return(0,Ue.jsx)(be.Provider,{value:De,children:t})}function Ge(t){switch(t){case"uninitialized":case"initializationError":return"uninitialized";case"idle":case"cartCompleted":case"error":return"idle";case"cartFetching":return"fetching";case"cartCreating":return"creating";case"cartLineAdding":case"cartLineRemoving":case"cartLineUpdating":case"noteUpdating":case"buyerIdentityUpdating":case"cartAttributesUpdating":case"discountCodesUpdating":return"updating"}}function Xe(t){let[e,r]=(0,C.useTransition)(),[n,o]=(0,C.useState)(t),i=(0,C.useRef)(!1);e&&(i.current=!0);let a=(0,C.useRef)(!1);return!e&&i.current&&(a.current=!0),(0,C.useEffect)(()=>{r(()=>{a.current||o(t)})},[t]),a.current?t:n}function Ut(t){let e;try{e=window[t];let r="__storage_test__";return e.setItem(r,r),e.removeItem(r),!0}catch(r){return!!(r instanceof DOMException&&(r.code===22||r.code===1014||r.name==="QuotaExceededError"||r.name==="NS_ERROR_DOM_QUOTA_REACHED")&&e&&e.length!==0)}}function Ke(t,e){var r,n;return!!(e.payload.buyerIdentity.countryCode&&((n=(r=t.cart)==null?void 0:r.buyerIdentity)==null?void 0:n.countryCode)!==e.payload.buyerIdentity.countryCode)}export{Oe as a,We as b,Qe as c,Ne as d};
/*! Bundled license information:

@xstate/fsm/es/index.mjs:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

use-sync-external-store/cjs/use-sync-external-store-shim.production.min.mjs:
  (**
   * @license React
   * use-sync-external-store-shim.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.min.mjs:
  (**
   * @license React
   * use-sync-external-store-shim/with-selector.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
