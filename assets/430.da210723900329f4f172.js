(self.travelpayoutsWpPlugin=self.travelpayoutsWpPlugin||[]).push([[430],{25247:e=>{e.exports={stylesWrapper:"styles-wrapper__xSYRq",stylesBody:"styles-body__jm0fI",stylesHasTitle:"styles--hasTitle__JFLXz",stylesHeader:"styles-header__weUwD",stylesHeaderInteractive:"styles-header--interactive__qNJGZ",stylesIsClose:"styles--isClose__rRuly"}},29692:e=>{e.exports={stylesWrapper:"styles-wrapper__L6i7a"}},73040:e=>{e.exports={stylesCard:"styles-card__XIL2A"}},13638:(e,t,a)=>{"use strict";a.d(t,{O:()=>r});var s=a(60042),n=a.n(s),l=a(27378),c=a(25247);const r=e=>{const{children:t,className:a,onClick:s,interactive:r}=e;return l.createElement("div",{className:n()(c.stylesHeader,a,{[c.stylesHeaderInteractive]:s||r}),onClick:s},t)}},54528:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var s=a(60042),n=a.n(s),l=a(27378),c=a(13638),r=a(25247);const i=e=>{const{children:t,title:a,className:s,header:i}=e,o=i||l.createElement(c.O,null,a);return l.createElement("div",{className:n()(r.stylesWrapper,s)},(a||i)&&o,t&&l.createElement("div",{className:n()(r.stylesBody)},t))}},18902:(e,t,a)=>{"use strict";function s(e){return null!=e}a.d(t,{S:()=>s})},69032:(e,t,a)=>{"use strict";a.d(t,{Jw:()=>s,uj:()=>r,E8:()=>i});const s=e=>({disabled:!e.length,minimal:!0,fill:!0});var n=a(27378),l=a(27998),c=a(44057);const r=e=>(t,a)=>{const{modifiers:{active:s,disabled:l,matchesPredicate:r},handleClick:i,index:o}=a,u=e(t,a);return u&&r?n.createElement(c.sN,{key:o,active:s,disabled:l,onClick:l?void 0:i,text:u}):null},i=({items:e,itemsParentRef:t,query:a,renderItem:s})=>{const r=e.map(s).filter((e=>null!=e));return n.createElement(c.v2,{ulRef:t,style:{overflow:"inherit"}},n.createElement(l.ZP,{autoHeightMax:300,autoHeight:!0},r))}},44430:(e,t,a)=>{"use strict";a.r(t),a.d(t,{App2:()=>ee,ColumnTitles:()=>ae});var s=a(60042),n=a.n(s),l=a(27378),c=a(89003),r=a(9246),i=a(54528),o=a(73040),u=a(44057),d=a(60130),m=a(80809),v=a(93683),p=a(33098),h=function(e,t,a,s){return new(a||(a=Promise))((function(n,l){function c(e){try{i(s.next(e))}catch(e){l(e)}}function r(e){try{i(s.throw(e))}catch(e){l(e)}}function i(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(c,r)}i((s=s.apply(e,t||[])).next())}))};const f={create:(0,m.HA)("i18n/request",((e,{dispatch:t})=>h(void 0,void 0,void 0,(function*(){const{data:a,locale:s}=e,n=(0,v.d)({locale:s,messages:a},(0,p.Sn)());t(f.success({intl:n,currentLocale:s}))})))),success:(0,m.HA)("i18n/success")},g={intlShape:(0,v.d)({locale:"en",messages:{},defaultLocale:"en",onError:()=>!0},(0,p.Sn)()),currentLocale:"en"},y=(0,m.xy)("i18n",g,(e=>[e(f.success,((e,t)=>Object.assign(Object.assign({},e),{intlShape:t.intl,currentLocale:t.currentLocale})))])),b=(0,m.UI)(y,(e=>e.intlShape)),E=((0,m.UI)(y,(e=>e.currentLocale)),{set:(0,m.HA)("setOutputSelectorActionSetNew"),update:(0,m.HA)("setOutputSelectorActionUpdate",((e,{getState:t})=>{const{fireEvent:a,data:s}=e,{selectorString:n}=t(P);if(n){const e=document.querySelector(n);if(e&&(e.value=s,a)){const t=new Event("change",{bubbles:!0});e.dispatchEvent(t)}}}))}),O={selectorString:void 0},P=(0,m.xy)("outputSelector",O,(e=>[e(E.set,((e,t)=>Object.assign(Object.assign({},e),{selectorString:t})))]));var S=a(14206);const I=a.n(S)().create({baseURL:window.ajaxurl,params:{action:"travelpayouts_routes"}});var j=function(e,t,a,s){return new(a||(a=Promise))((function(n,l){function c(e){try{i(s.next(e))}catch(e){l(e)}}function r(e){try{i(s.throw(e))}catch(e){l(e)}}function i(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(c,r)}i((s=s.apply(e,t||[])).next())}))};var w=function(e,t,a,s){return new(a||(a=Promise))((function(n,l){function c(e){try{i(s.next(e))}catch(e){l(e)}}function r(e){try{i(s.throw(e))}catch(e){l(e)}}function i(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(c,r)}i((s=s.apply(e,t||[])).next())}))};const L=(0,m.HA)("setCurrentLocaleAction",((e,{dispatch:t})=>w(void 0,void 0,void 0,(function*(){const{localeId:a}=e,s=yield(n=a,j(void 0,void 0,void 0,(function*(){try{if(n.length>0){const e=yield I.get("",{params:{page:"columnTitles/translationPhrases",locale:n}}),{data:t,success:a}=e.data;return a?t:[]}return[]}catch(e){return console.log(e),[]}})));var n;t(x({data:s}))})))),x=(0,m.HA)("setTranslationPhrases");var H=function(e,t,a,s){return new(a||(a=Promise))((function(n,l){function c(e){try{i(s.next(e))}catch(e){l(e)}}function r(e){try{i(s.throw(e))}catch(e){l(e)}}function i(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(c,r)}i((s=s.apply(e,t||[])).next())}))};var C=function(e,t,a,s){return new(a||(a=Promise))((function(n,l){function c(e){try{i(s.next(e))}catch(e){l(e)}}function r(e){try{i(s.throw(e))}catch(e){l(e)}}function i(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(c,r)}i((s=s.apply(e,t||[])).next())}))};const T={request:(0,m.HA)("fetchColumnTitlesDataRequest",((e,{dispatch:t})=>C(void 0,void 0,void 0,(function*(){const e=yield H(void 0,void 0,void 0,(function*(){try{const e=yield I.get("",{params:{page:"columnTitles/data"}}),{data:t,success:a}=e.data;return a?t:null}catch(e){return console.log(e),null}}));if(e){const{i18n:a,locale:s,translatedPhrases:n,availableLocales:l}=e;t(f.create({data:a,locale:s})),t(T.success({data:{translatedPhrases:n,availableLocales:l}})),t(L({localeId:s})),t(E.update({data:JSON.stringify(n)}))}else t(T.failure())})))),success:(0,m.HA)("fetchColumnTitlesDataSuccess"),failure:(0,m.HA)("fetchColumnTitlesDataFailure")},_=(0,m.HA)("setTranslatedPhrases"),N=(0,m.xy)("columnTitlesData",{isPending:!1,isSuccess:!1,data:{translatedPhrases:{},availableLocales:[]}},(e=>[e(T.success,((e,{data:t})=>Object.assign(Object.assign({},e),{isPending:!1,isSuccess:!0,data:t}))),e(T.request,(e=>Object.assign(Object.assign({},e),{isPending:!0,isSuccess:!1}))),e(T.failure,(e=>Object.assign(Object.assign({},e),{isPending:!1,isSuccess:!1}))),e(_,((e,{data:t})=>Object.assign(Object.assign({},e),{data:Object.assign(Object.assign({},e.data),{translatedPhrases:t})})))])),A=(0,m.UI)("selectColumnTitlesDataIsLoading",N,(e=>e.isPending)),U=(0,m.UI)("selectAvailableLocales",N,(e=>e.data.availableLocales)),k=(0,m.UI)("selectTranslatedPhrases",N,(e=>e.data.translatedPhrases));var q=a(18902);const R=(0,m.HA)("setTranslatedPhrase",((e,{getState:t,dispatch:a})=>{const{locale:s,value:n,key:l}=e,c=t(k),r=t((e=>(0,m.UI)("selectTranslatedPhrasesByLocaleId",k,(t=>{var a;return null!==(a=t[e])&&void 0!==a?a:{}})))(s)),i=n.trim()?n:void 0,o=Object.assign(Object.assign({},r),{[l]:i}),u=Object.values(o).filter(q.S).length,d=Object.assign(Object.assign({},c),{[s]:u?o:void 0});a(_({data:d})),a(E.update({data:JSON.stringify(d),fireEvent:!0}))}));var D=a(29692);const K=e=>{const{labels:t}=e,a=t.length>1,{formatMessage:s}=(0,c.Z)();if(a){const[e,...a]=t;return l.createElement("div",{className:n()(D.stylesWrapper)},l.createElement("div",null,e),l.createElement(u.u,{className:n()("tp-ms-2","tp-mt-0"),content:l.createElement("div",null,l.createElement("div",null,s({id:"phrase.has_synonyms",defaultMessage:"This phrase also used for columns"}),":"),l.createElement("ul",null,a.map(((e,t)=>l.createElement("li",{key:t},e)))))},l.createElement(u.Vp,{round:!0},a.length)))}return l.createElement("div",null,l.createElement("div",null,t.join(", ")))},B=e=>{const t=(0,d.BH)(R),{phrase:a,localeId:s}=e,{id:c,labels:r,placeholder:i}=a,o=(0,d.KO)((v=s,p=c,(0,m.UI)("selectTranslatedPhrase",k,(e=>{var t,a;return null!==(a=(null!==(t=e[v])&&void 0!==t?t:{})[p])&&void 0!==a?a:null}))));var v,p;const h="string"==typeof o?o:"";return l.createElement(u.cw,{label:l.createElement(K,{labels:r}),labelFor:c},l.createElement("input",{id:c,className:n()("tp-input tp-input--fill"),placeholder:i,value:h,onChange:e=>{t({value:e.target.value,locale:s,key:c})}}))},M=e=>{const{category:t,localeId:a}=e,{data:s,label:c}=t;return s.length?l.createElement(i.Z,{title:c,className:n()(o.stylesCard)},s.map(((e,t)=>l.createElement(B,{key:t,phrase:e,localeId:a})))):null};a(96341);var J=a(23236),W=a(69032);const Z=e=>{const{options:t,placeholder:a,onChange:s,value:n}=e;return l.createElement("form",{onSubmit:e=>{e.preventDefault()}},l.createElement(J.U,{itemsEqual:"value",itemRenderer:(0,W.uj)((e=>`${e.label}`)),items:t,noResults:l.createElement(l.Fragment,null),resetOnClose:!0,popoverProps:(0,W.Jw)(t),onItemSelect:e=>{s(e.value)},inputValueRenderer:e=>e.label,itemPredicate:(e,t)=>{const a=t.label.toLowerCase(),s=e.toLowerCase().trim();return!s||a.includes(s)},selectedItem:n,inputProps:{placeholder:a}}))},$={isPending:!1,isSuccess:!1,data:[],localeId:void 0,phrases:[]},F=(0,m.xy)("translationPhrases",$,(e=>[e(L,((e,{localeId:t})=>Object.assign(Object.assign({},e),{isPending:!0,isSuccess:!1,phrases:[],localeId:t}))),e(x,((e,{data:t})=>Object.assign(Object.assign({},e),{isPending:!1,isSuccess:!0,phrases:t})))])),z=(0,m.UI)("selectTranslationPhrasesIsLoading",F,(e=>e.isPending)),V=(0,m.UI)("selectTranslationCategories",F,(e=>e.phrases)),X=(0,m.UI)(F,(e=>{var t;return null!==(t=e.localeId)&&void 0!==t?t:null})),G=(0,m.UI)("selectSelectedLocaleOption",(0,m.$e)([X,U]),(([e,t])=>{if(e){const a=t.find((({value:t})=>t===e));return a||null}return null})),Y=(0,m.$e)([y,N,F,P]),Q=(0,m.MT)(Y),ee=()=>{const e=(0,d.KO)(G),t=(0,d.KO)(X),a=(0,d.KO)(U),s=(0,d.KO)(z),r=(0,d.BH)(L),{formatMessage:i}=(0,c.Z)(),o=(0,d.KO)(V);return l.createElement("div",null,l.createElement("div",{className:n()("tp-card tp-card--gray tp-m-0")},l.createElement("h5",{className:n()("tp-heading")},i({id:"locale_select.title",defaultMessage:"Select which column titles language you want to customize"})),l.createElement(Z,{value:e,options:a,placeholder:i({id:"locale_select.placeholder",defaultMessage:"Select languages..."}),onChange:e=>{r({localeId:e})}})),s&&l.createElement(u.$j,{className:n()("tp-m-3")}),t&&l.createElement("div",{className:n()("tp-mt-3")},o.map(((e,a)=>l.createElement(M,{key:a,category:e,localeId:t})))))},te=e=>{const{outputSelector:t,apiUrl:a}=e,s=(0,d.BH)(E.set),c=(0,d.KO)(b),i=(0,d.KO)(A),o=(0,d.BH)(T.request);return a&&(I.defaults.baseURL=a),(0,l.useEffect)((()=>{t&&s(t),o()}),[]),i?l.createElement(u.$j,{className:n()("tp-m-6")}):l.createElement(r.zt,{value:c},l.createElement(ee,null))},ae=e=>((0,l.useEffect)((()=>{0}),[]),l.createElement(d.Do.Provider,{value:Q},l.createElement(te,Object.assign({},e))))}}]);