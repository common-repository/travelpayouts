"use strict";(self.travelpayoutsWpPlugin=self.travelpayoutsWpPlugin||[]).push([[682],{71682:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});n(61013),n(19068),n(87211),n(25901),n(92189),n(63238),n(95163),n(99785),n(50987),n(63515),n(12274),n(3214),n(74374),n(92571),n(98010),n(20252),n(95374),n(55849),n(14009),n(12699),n(91047),n(5769),n(17460),n(14078);var r=n(14206),o=n.n(r),i=n(47504),u=n.n(i),a=n(99729),l=n.n(a),c=n(80631),p=n.n(c),s=n(43785),f=n.n(s),y=n(23615),v=n.n(y),b=n(27378),d=n(80200);function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){S(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,C(r.key),r)}}function P(e,t){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},P(e,t)}function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=_(e);if(t){var o=_(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return w(e)}(this,n)}}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}function S(e,t,n){return(t=C(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e){var t=function(e,t){if("object"!==g(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===g(t)?t:String(t)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(a,e);var t,n,r,i=j(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),S(w(t=i.call(this,e)),"setValueFromProps",(function(){var e=w(t).props.value;if(e)try{t.setState({value:JSON.parse(e)})}catch(e){return!1}return!1})),S(w(t),"handleChange",(function(e){var n=window.redux_change,r=w(t)._autocompleteContainer;t.setState({value:e}),n&&r&&n(r.current)})),S(w(t),"loadOptions",(function(e){return(0,w(t).debounced)(e)})),S(w(t),"handleInputChange",(function(e){var n=e.toLowerCase();return t.setState({inputValue:n}),n})),S(w(t),"compileUrl",(function(e){var n=w(t),r=n.compileTemplate,o=n.props.url,i=void 0===o?"":o;return console.log(i),r(i,{query:e})})),S(w(t),"filterOptions",(function(e){var n=w(t),r=n.compileTemplate,i=n.compileUrl,u=n.props,a=u.optionLabel,c=void 0===a?"":a,p=u.sourcePath;if(!e.length)return[];var s=i(e);return o().get(s).then((function(e){var t=e.status,n=e.data;return 200===t?(p?l()(n,p,[]):n).map((function(e){var t=m(m({},e),{},{get:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return l()(e,t,n)},has:function(t){return l()(e,t)}});return m(m({},e),{},{_label:r(c,t),_value:f()()})})):[]}))})),S(w(t),"compileTemplate",(function(e,t){return p()(e,{interpolate:/{{([\s\S]+?)}}/g})(t)})),t.state={value:null,inputValue:""},t._autocompleteContainer=b.createRef(),t.debounced=u()(t.filterOptions,300,{leading:!0}),t}return t=a,(n=[{key:"componentDidMount",value:function(){this.setValueFromProps()}},{key:"render",value:function(){var e=this.state.value,t=this.handleChange,n=this.loadOptions,r=this.handleInputChange,o=this._autocompleteContainer,i=this.props,u=i.noOptionsMessage,a=i.loadingMessage,l=i.inputId,c=i.inputName;return b.createElement("div",{ref:o},b.createElement(d.ZP,{className:"travelpayouts-autocomplete__container",classNamePrefix:"travelpayouts-autocomplete",value:e,loadOptions:n,defaultOptions:!0,onInputChange:r,onChange:t,getOptionLabel:function(e){var t=e._label;return void 0===t?"":t},getOptionValue:function(e){var t=e._value;return void 0===t?"":t},noOptionsMessage:function(e){return e.inputValue.length>=3?u:null},loadingMessage:function(e){return e.inputValue.length>=3?a:null}}),b.createElement("input",{id:l,name:c,type:"hidden",value:JSON.stringify(e)}))}}])&&O(t.prototype,n),r&&O(t,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(b.Component);E.propTypes={optionLabel:v().string.isRequired,url:v().string.isRequired,value:v().string,noOptionsMessage:v().string,loadingMessage:v().string,sourcePath:v().string,inputId:v().string,inputName:v().string,placeholder:v().string}}}]);