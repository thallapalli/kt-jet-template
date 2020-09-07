/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore","jquery","ojs/ojcontext","ojs/ojthemeutils","ojs/ojcomponentcore","ojs/ojconverterutils","ojs/ojconverter-number","ojs/ojvalidator-numberrange","ojs/ojlogger","ojs/ojeditablevalue","ojs/ojbutton"],function(t,e,n,i,s,r,o,a,u){"use strict";var l={properties:{asyncValidators:{type:"Array<Object>",value:[]},autocomplete:{type:"string",value:"on",extension:{_COPY_TO_INNER_ELEM:!0}},autofocus:{type:"boolean",value:!1,extension:{_COPY_TO_INNER_ELEM:!0}},converter:{type:"object"},describedBy:{type:"string"},disabled:{type:"boolean",value:!1},displayOptions:{type:"object",properties:{converterHint:{type:"Array<string>|string",value:["placeholder","notewindow"]},helpInstruction:{type:"Array<string>|string",value:["notewindow"]},messages:{type:"Array<string>|string",value:["inline"]},validatorHint:{type:"Array<string>|string",value:["notewindow"]}}},help:{type:"object",properties:{instruction:{type:"string",value:""}}},helpHints:{type:"object",properties:{definition:{type:"string",value:""},source:{type:"string",value:""}}},labelEdge:{type:"string",enumValues:["inside","none","provided"]},labelHint:{type:"string",value:""},labelledBy:{type:"string"},max:{type:"number"},messagesCustom:{type:"Array<Object>",writeback:!0,value:[]},min:{type:"number"},name:{type:"string",value:"",extension:{_COPY_TO_INNER_ELEM:!0}},placeholder:{type:"string",value:""},rawValue:{type:"string",writeback:!0,readOnly:!0},readonly:{type:"boolean",value:!1},required:{type:"boolean",value:!1},step:{type:"number"},transientValue:{type:"number",writeback:!0,readOnly:!0},translations:{type:"object",value:{},properties:{numberRange:{type:"object",properties:{hint:{type:"object",properties:{exact:{type:"string"},inRange:{type:"string"},max:{type:"string"},min:{type:"string"}}},messageDetail:{type:"object",properties:{exact:{type:"string"},rangeOverflow:{type:"string"},rangeUnderflow:{type:"string"}}},messageSummary:{type:"object",properties:{rangeOverflow:{type:"string"},rangeUnderflow:{type:"string"}}}}},required:{type:"object",properties:{hint:{type:"string"},messageDetail:{type:"string"},messageSummary:{type:"string"}}},tooltipDecrement:{type:"string"},tooltipIncrement:{type:"string"}}},userAssistanceDensity:{type:"string",enumValues:["compact","efficient","reflow"],value:"reflow"},valid:{type:"string",writeback:!0,enumValues:["invalidHidden","invalidShown","pending","valid"],readOnly:!0},validators:{type:"Array<Object>",value:[]},value:{type:"number",writeback:!0},virtualKeyboard:{type:"string",enumValues:["auto","number","text"],value:"auto"}},methods:{refresh:{},stepDown:{},stepUp:{},validate:{},reset:{},showMessages:{},setProperty:{},getProperty:{},setProperties:{},getNodeBySubId:{},getSubIdByNode:{}},events:{ojAnimateStart:{},ojAnimateEnd:{}},extension:{}};
/**
 * @preserve Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */t.__registerWidget("oj.ojInputNumber",e.oj.editableValue,{version:"1.0.0",defaultElement:"<input>",widgetEventPrefix:"oj",_ALLOWED_TYPES:["number","text"],options:{asyncValidators:[],autocomplete:void 0,autofocus:!1,converter:new o.IntlNumberConverter(null),labelledBy:null,max:null,min:null,name:"",placeholder:"",rawValue:void 0,readOnly:!1,required:!1,step:1,transientValue:null,validators:[],value:null,virtualKeyboard:"auto"},getNodeBySubId:function(t){var e,n=this._superApply(arguments);return n||("oj-inputnumber-up"===(e=t.subId)&&(n=this.widget()[0].querySelector(".oj-inputnumber-up")),"oj-inputnumber-down"===e&&(n=this.widget()[0].querySelector(".oj-inputnumber-down")),"oj-inputnumber-input"===e&&(n=this.widget()[0].querySelector(".oj-inputnumber-input"))),n||null},getSubIdByNode:function(t){var e=null;return null!=t&&(t===this.widget()[0].querySelector(".oj-inputnumber-up")?e={subId:"oj-inputnumber-up"}:t===this.widget()[0].querySelector(".oj-inputnumber-down")?e={subId:"oj-inputnumber-down"}:t===this.widget()[0].querySelector(".oj-inputnumber-input")&&(e={subId:"oj-inputnumber-input"})),e||this._superApply(arguments)},refresh:function(){this._super(),this._setup()},stepDown:function(t){var e=this.options.step;if(0!==e){var n=(null!=t?t:1)*e*-1;this._step(n)}},stepUp:function(t){var e=this.options.step;if(0!==e){var n=(null!=t?t:1)*e;this._step(n)}},widget:function(){return e(this.uiInputNumber)},_InitOptions:function(e,n){var i=this.options,s=this;if(this._superApply(arguments),this._IsCustomElement()||t.EditableValueUtils.initializeOptionsFromDom([{attribute:"disabled",validateOption:!0},{attribute:"placeholder"},{attribute:"value"},{attribute:"readonly",option:"readOnly",validateOption:!0},{attribute:"required",coerceDomValue:!0,validateOption:!0},{attribute:"title"},{attribute:"min"},{attribute:"max"},{attribute:"step"}],n,this,function(t){for(var e=["value","step","min","max"],n=0;n<e.length;n++){var r=e[n],o=r in t?t[r]:i[r];null!=o&&(t[r]="step"===r?s._parseStep(o):s._parse(r,o))}}),this._IsCustomElement()&&s._parseStep(i.step),this.initialValue=i.value,null!=i.min&&null!=i.max&&i.max<i.min)throw new Error("ojInputNumber's max must not be less than min")},_ComponentCreate:function(){this._super(),this._draw(),this._inputNumberDefaultValidators={},this._setup(),this._registerEvents(),this._focusable({element:e(this.uiInputNumber),applyHighlight:!0})},_AfterCreate:function(){if(this._super(),this.option({transientValue:this.options.value},{_context:{writeback:!0,internalSet:!0,readOnly:!0}}),this._refreshAriaMinMax(),this.stepQueue=[],this._blurEnterSetValueCounter=0,this._IsCustomElement()){let t=this.options.labelledBy;this._initInputIdLabelForConnection(this._GetContentElement()[0],this.widget()[0].id,t)}this.options.readOnly&&this._createOrUpdateReadonlyDiv(this.element[0])},_AfterSetOption:function(e,n,i){switch(this._superApply(arguments),e){case"min":case"max":this._Refresh(e,this.options[e]);break;case"readOnly":this._AfterSetOptionDisabledReadOnly(e,t.EditableValueUtils.readOnlyOptionOptions);break;case"required":this._AfterSetOptionRequired(e);break;case"validators":this._AfterSetOptionValidators(e);break;case"asyncValidators":this._AfterSetOptionAsyncValidators(e);break;case"converter":this._AfterSetOptionConverter(e);break;case"virtualKeyboard":this._SetInputType(this._ALLOWED_TYPES)}},_CanSetValue:function(){return!!this._super()&&!this.options.readOnly},_AfterSetOptionValue:function(t,e){this._superApply(arguments);var n,i,s=e?e._context:null;s&&(n=!!s.originalEvent,i=s.doNotClearMessages||!1),n||i||(this.initialValue=this.options.value)},_SetDisplayValue:function(t){if(this._superApply(arguments),this.options.readOnly){let e=this._getReadonlyDiv();e&&(e.textContent=t)}},_IsRequired:function(){return this.options.required},_AfterSetOptionRequired:t.EditableValueUtils._AfterSetOptionRequired,_AfterSetOptionValidators:t.EditableValueUtils._AfterSetOptionValidators,_AfterSetOptionAsyncValidators:t.EditableValueUtils._AfterSetOptionAsyncValidators,_AfterSetOptionConverter:t.EditableValueUtils._AfterSetOptionConverter,_ResetConverter:t.EditableValueUtils._ResetConverter,_ResetAllValidators:function(){this._inputNumberDefaultValidators={},this._superApply(arguments)},_GetConverter:function(){return this.options.converter?this._getConverter():e.oj.ojInputNumber.prototype.options.converter},_GetNormalizedValidatorsFromOption:t.EditableValueUtils._GetNormalizedValidatorsFromOption,_GetNormalizedAsyncValidatorsFromOption:t.EditableValueUtils._GetNormalizedAsyncValidatorsFromOption,_AriaRequiredUnsupported:function(){return!1},_setOption:function(t,e,n){var i;if(this._IsCustomElement()||"value"!==t&&"max"!==t&&"min"!==t)if("step"===t)i=this._parseStep(e);else{if("transientValue"===t)return void u.error(t+" option cannot be set");i=e}else i=this._parse(t,e);if(this._super(t,i,n),"value"===t&&this.option({transientValue:this.options.value},{_context:{writeback:!0,internalSet:!0,readOnly:!0}}),"max"!==t&&"min"!==t||this._AfterSetOptionValidators(),"disabled"===t&&(this.element[0].disabled=!!e),"readOnly"===t&&(this._createOrDestroyOjButtonset(),this.element[0].readOnly=!!e,e&&this._createOrUpdateReadonlyDiv(this.element[0]),this._refreshStateTheming("readOnly",this.options.readOnly)),"step"===t&&this._createOrDestroyOjButtonset(),"labelledBy"===t){let t=this.options.labelledBy;if(t){var s=this._GetContentElement()[0].id;this._labelledByUpdatedForInputComp(t,s)}}},_destroy:function(){var n=this._super();return this.buttonSet&&this._destroyOjButtonset(),this.initialValue=null,this.element.off("blur keydown keyup compositionstart compositionend input"),t.DomUtils.unwrap(this.element,e(this.uiInputNumber)),clearTimeout(this.timer),n},validate:t.EditableValueUtils.validate,_Refresh:function(t,e,n){var i;switch(this._superApply(arguments),t){case"value":i=this.options.value||0,this._updateButtonsAria(i);break;case"disabled":i=this.options.value||0,this._updateButtons(i);break;case"max":case"min":this._refreshAriaMinMax(),i=this._getDisplayValueParsed(),this._updateButtons(i);break;case"converter":i=this.options.value,this._refreshAriaText(i);break;case"required":this._refreshRequired(e)}},_labelledByUpdatedForInputComp:t.EditableValueUtils._labelledByUpdatedForInputComp,_initInputIdLabelForConnection:t.EditableValueUtils._initInputIdLabelForConnection,_linkLabelForInputComp:t.EditableValueUtils._linkLabelForInputComp,_refreshRequired:t.EditableValueUtils._refreshRequired,_GetImplicitValidators:function(){var t=this._superApply(arguments);return null==this.options.min&&null==this.options.max||(this._inputNumberDefaultValidators.numberrange=this._getImplicitNumberRangeValidator()),Object.assign(this._inputNumberDefaultValidators,t)},_GetDefaultStyleClass:function(){return"oj-inputnumber"},_SetLoading:function(){this._super(),this.element[0].readOnly=!0,this._refreshRoleSpinbutton(!1)},_ClearLoading:function(){this._super();var t=this.options.readOnly;this.element[0].readOnly=t},_IsTextFieldComponent:function(){return!0},_GetContentWrapper:function(){if(this._IsCustomElement())return this._getRootElement().querySelector(".oj-text-field-middle")},_GetAriaLabelElement:function(){return this.element[0]},_BUNDLE_KEY:{_TOOLTIP_DECREMENT:"tooltipDecrement",_TOOLTIP_INCREMENT:"tooltipIncrement"},_OPTION_TO_CSS_MAPPING:{readOnly:"oj-read-only"},_getImplicitNumberRangeValidator:function(){var t=this._createRangeValidatorOptions();return new a(t)},_setup:function(){var t=this._needsButtonset();if(t){var e=this.getTranslatedString(this._BUNDLE_KEY._TOOLTIP_INCREMENT),n=this.getTranslatedString(this._BUNDLE_KEY._TOOLTIP_DECREMENT);this.upButton.ojButton({label:e}),this.downButton.ojButton({label:n})}"boolean"==typeof this.options.readOnly&&(this.element[0].readOnly=this.options.readOnly),this._refreshStateTheming("readOnly",this.options.readOnly),this._refreshRoleSpinbutton(t),this._refreshRequired(this.options.required)},_markInternalComponents:function(){this.upButton[0].setAttribute("data-oj-internal",""),this.downButton[0].setAttribute("data-oj-internal",""),this.buttonSet[0].setAttribute("data-oj-internal","")},_createOjButtonset:function(){var t=this._createButtonset();this.inputNumberWrapper.appendChild(t.buttonSet);for(var n=this.uiInputNumber.querySelectorAll(".oj-inputnumber-button"),s=n.length,r=0;r<s;r++)n[r].setAttribute("tabIndex","-1");const o=(i.parseJSONFromFontFamily("oj-input-number-option-defaults")||{}).buttonChroming||"solid";var a=t.upButton.parentNode;this.upButton=e(t.upButton).ojButton({display:"icons",chroming:o,label:this.getTranslatedString(this._BUNDLE_KEY._TOOLTIP_INCREMENT),icons:{start:"oj-component-icon oj-inputnumber-up-icon"}}),this.downButton=e(t.downButton).ojButton({display:"icons",chroming:o,label:this.getTranslatedString(this._BUNDLE_KEY._TOOLTIP_DECREMENT),icons:{start:"oj-component-icon oj-inputnumber-down-icon"}}),this.buttonSet=e(a).ojButtonset({focusManagement:"none",chroming:o}),this._markInternalComponents()},_destroyOjButtonset:function(){this.buttonSet.ojButtonset("destroy"),this.buttonSet.remove(),this.upButton=null,this.downButton=null,this.buttonSet=null},_createOrDestroyOjButtonset:function(){let t=this._needsButtonset();t&&null==this.buttonSet?(this._createOjButtonset(),this._updateButtons(this.options.value||0),this.uiInputNumber.classList.add("oj-has-buttons")):!t&&this.buttonSet&&(this._destroyOjButtonset(),this.uiInputNumber.classList.remove("oj-has-buttons")),this._refreshRoleSpinbutton(t)},_draw:function(){var t=this.element[0];t.classList.add("oj-inputnumber-input"),t.classList.add("oj-text-field-input");var e=document.createElement("span");e.className="oj-inputnumber-wrapper",this.inputNumberWrapper=e,this.uiInputNumber=e;var n=document.createElement("div");if(n.className="oj-text-field-container",n.setAttribute("role","presentation"),this.OuterWrapper){n.appendChild(e);var i=this._CreateMiddleWrapper();e.appendChild(i),i.appendChild(t),this.OuterWrapper.appendChild(n),this.uiInputNumber=this.OuterWrapper,this.uiInputNumber.classList.add("oj-inputnumber"),this.uiInputNumber.classList.add("oj-component")}else{var s=document.createElement("div");s.className="oj-inputnumber oj-component",t.parentNode.insertBefore(s,t),s.appendChild(n),n.appendChild(e),e.appendChild(t),this.uiInputNumber=s}this.saveType=t.type,this._SetInputType(this._ALLOWED_TYPES),this._needsButtonset()&&(this._createOjButtonset(),this.uiInputNumber.classList.add("oj-has-buttons"))},_needsButtonset:function(){return!0!==this.options.readOnly&&this.options.step>0},_createButtonset:function(){var t=document.createElement("div");t.className="oj-buttonset-width-auto";var e=document.createElement("button");e.setAttribute("type","button"),e.className="oj-inputnumber-button oj-inputnumber-down",t.appendChild(e);var n=document.createElement("button");return n.setAttribute("type","button"),n.className="oj-inputnumber-button oj-inputnumber-up",t.appendChild(n),{buttonSet:t,downButton:e,upButton:n}},_start:function(){return this.spinning=!0,!0},_repeat:function(e,n,i,s){var r,o=!1,a=this,u=this.options.step;n>0?this.upButton[0].classList.contains("oj-disabled")&&(o=!0):this.downButton[0].classList.contains("oj-disabled")&&(o=!0),e=e||500,clearTimeout(this.timer),this.timer=setTimeout(function(){o||a._repeat(40,n,i,!0)},e),s?(r=this.element[0],t.Context.getContext(r).getBusyContext().isReady()&&(this.stepQueue=[],this._spin(n*u,i,!0))):this._stepNoStartStop(n*u,i)},_spin:function(t,e,n){var i,s=this._GetDisplayValue()||0,r=this._ParseValueShowErrors(s);return void 0!==r?(i=this._adjustParsedValueOnSpinAndUpdateDisplay(r,t),this._valuePending=n,this._SetValue(i,e,{validationMode:this._VALIDATION_MODE.VALIDATORS_ONLY,targetOptions:n?["transientValue"]:["transientValue","value"]})):(this._updateButtonsAria(r),!1)},_adjustParsedValueOnSpinAndUpdateDisplay:function(t,e){var n,i,s=this.options,r=s.min,o=s.max,a=s.step,u=this.initialValue;return n=this._precision(r,a,u),i=this._adjustValue(t,e,r,o,a,n,u),this._CanSetValue()&&void 0!==this._UpdateElementDisplayValue(i,!0)&&this._updateButtonsAria(i),i},_precision:function(t,e,n){var i=this._precisionOf(e);return null!=t&&(i=Math.max(i,this._precisionOf(t))),null!=n&&(i=Math.max(i,this._precisionOf(n))),i},_precisionOf:function(t){var e=t.toString(),n=e.indexOf(".");return-1===n?0:e.length-n-1},_adjustValue:function(t,e,n,i,s,r,o){var a,l,p;if(r>0)return this._adjustValueForFractions(t,e,n,i,s,r,o);null==(l=null!=n?n:o)&&(l=0);try{t=parseFloat(t.toFixed(r))}catch(e){e instanceof TypeError&&(u.warn("inputNumber's value after conversion is not a number. \nThe converter must convert the value to a Number. coercing using +"),t=+t)}p=t-l;var h=Math.round(p/s)*s;if(a=(h=parseFloat(h.toFixed(r)))===p?t+e:l+(p=e<0?Math.ceil(p/s)*s:Math.floor(p/s)*s)+e,a=parseFloat(a.toFixed(r)),null!=n&&a<n)return n;if(null!=i&&a>i){var d=Math.floor((i-l)/s)*s+l;return d=parseFloat(d.toFixed(r))}return a},_adjustValueForFractions:function(e,n,i,s,r,o,a){t.Assert.assert(o>0);var u=Math.pow(10,o),l=null!=i?Math.round(i*u):i,p=null!=s?Math.round(s*u):s,h=Math.round(r*u);return this._adjustValue(Math.round(e*u),Math.round(n*u),l,p,h,0,Math.round(a*u))/u},_stop:function(t){if(this.spinning){if(this._valuePending){var e={originalEvent:t,internalSet:!0};this.option({value:this.options.transientValue},{_context:e}),this._valuePending=!1}clearTimeout(this.timer),this.spinning=!1}},_isRealMouseEvent:function(){return!t.DomUtils.recentTouchEnd()},_updateButtons:function(t){var e,n,i=this.options,s=i.max,r=i.min,o=this.downButton,a=this.upButton,u=null!=s,l=null!=r;(o||a)&&(e=o[0].classList.contains("oj-disabled"),n=a[0].classList.contains("oj-disabled"),i.disabled||void 0===t||u&&l&&s===r&&t===s?(e||o.ojButton("disable"),n||a.ojButton("disable")):u&&t>=s?(e&&o.ojButton("enable"),n||a.ojButton("disable")):l&&t<=r?(e||o.ojButton("disable"),n&&a.ojButton("enable")):(e&&o.ojButton("enable"),n&&a.ojButton("enable")))},_getConverter:t.EditableValueUtils._GetConverter,_createOrUpdateReadonlyDiv:t.EditableValueUtils._createOrUpdateReadonlyDiv,_getDisplayValueParsed:function(){var t,e;try{e=this._GetDisplayValue()||0,t=this._parseValue(e)}catch(e){t=void 0}return t},_blurEnterSetValue:function(t){var e,n,i,s=this.element.val(),r=this;this._stop(t),this.stepQueue=[],this._blurEnterSetValueCounter+=1,i=this._blurEnterSetValueCounter,this._valuePending=!1,(n=this._SetValue(s,t,{targetOptions:["transientValue","value"]}))instanceof Promise?n.then(function(t){i===r._blurEnterSetValueCounter&&(t||(e=r._getDisplayValueParsed(),r._updateButtonsAria(e)))}):(e=n?this.options.value:this._getDisplayValueParsed(),this._updateButtonsAria(e))},_updateButtonsAria:function(t){this._refreshAriaValueNowText(t),this._updateButtons(t)},_createRangeValidatorOptions:function(){var t,e,n,i,s,r,o,a,u,l=this.options,p=l.min,h=l.max,d=null!=p?p:void 0,_=null!=h?h:void 0,c=l.translations,m=c&&c.numberRange||{},b=m.hint||{},v=m.messageDetail||{},f=m.messageSummary||{};return null!==b&&(t=b.min||null,e=b.max||null,n=b.inRange||null,i=b.exact||null),null!==v&&(s=v.rangeOverflow||null,r=v.rangeUnderflow||null,o=v.exact||null),null!==f&&(a=f.rangeOverflow||null,u=f.rangeUnderflow||null),{min:d,max:_,hint:{min:t||null,max:e||null,inRange:n||null,exact:i||null},messageDetail:{rangeOverflow:s||null,rangeUnderflow:r||null,exact:o||null},messageSummary:{rangeOverflow:a||null,rangeUnderflow:u||null},converter:this._GetConverter()}},_parse:function(t,e){var n;if(n=null!==e?+e:e,isNaN(n))throw new Error("ojInputNumber's "+t+" option is not a number");return n},_parseStep:function(t){var e;if(null===t)return 1;if(""===t)throw new Error("Invalid step for ojInputNumber; step must be a number 0 or greater.");if((e=this._parse("step",t))<0)throw new Error("Invalid step for ojInputNumber; step must be 0 or greater.");return e},_refreshStateTheming:function(t,e){-1!==Object.keys(this._OPTION_TO_CSS_MAPPING).indexOf(t)&&(e?this.widget()[0].classList.add(this._OPTION_TO_CSS_MAPPING[t]):this.widget()[0].classList.remove(this._OPTION_TO_CSS_MAPPING[t]))},_refreshRoleSpinbutton:function(t){t?this.element[0].setAttribute("role","spinbutton"):this.element[0].removeAttribute("role")},_refreshAriaMinMax:function(){this._setAttr("aria-valuemin",this.options.min),this._setAttr("aria-valuemax",this.options.max)},_refreshAriaValueNowText:function(t){this._setAttr("aria-valuenow",t),this._refreshAriaText(t)},_refreshAriaText:function(t){var e=this.element.val();""===e||this._CompareOptionValues("value",""+t,e)?this._setAttr("aria-valuetext",null):this._setAttr("aria-valuetext",e)},_setAttr:function(t,e){void 0!==e&&(null===e?this.element[0].removeAttribute(t):this.element[0].setAttribute(t,e))},_stepNoStartStop:function(t,e){var n,i,s,r,o=this;if(void 0===t){if(0===this.stepQueue.length)return;i=(n=this.stepQueue.shift()).step,s=n.event}else{if(this.stepQueue.length>=1)return void this.stepQueue.push({step:t,event:e});i=t,s=e}(r=this._spin(i,s,!1))instanceof Promise&&(this.stepQueue.push({step:i,event:s}),r.then(function(){o.stepQueue.shift(),o._stepNoStartStop(void 0,s)}))},_step:function(t,e){this._start(),this._stepNoStartStop(t,e),this._stop(e)},_SetInputType:t.EditableValueUtils._SetInputType,_regularEventsAndListeners:{compositionstart:function(){this._isComposing=!0},compositionend:function(t){this._isComposing=!1,this._SetRawValue(this.element.val(),t)},input:function(t){this._isComposing||this._SetRawValue(this.element.val(),t)},keydown:function(t){var n=e.ui.keyCode;switch(t.keyCode){case n.ENTER:this._blurEnterSetValue(t),t.preventDefault();break;case n.UP:this._needsButtonset()&&(this.spinning||(this._start(),this._repeat(null,1,t))),t.preventDefault();break;case n.DOWN:this._needsButtonset()&&(this.spinning||(this._start(),this._repeat(null,-1,t))),t.preventDefault()}},keyup:function(t){var n=e.ui.keyCode;switch(t.keyCode){case n.UP:case n.DOWN:default:this._stop(t)}},blur:function(t){this._blurEnterSetValue(t)},"touchend .oj-inputnumber-button":function(t){this._stop(t)},"touchcancel .oj-inputnumber-button":function(t){this._stop(t)},"mousedown .oj-inputnumber-button.oj-enabled":function(t){this._isRealMouseEvent(t)&&(this._start(),this._repeat(null,t.currentTarget.classList.contains("oj-inputnumber-up")?1:-1,t))},"mouseup .oj-inputnumber-button":function(t){this._isRealMouseEvent(t)&&this._stop(t)},"mouseenter .oj-inputnumber-button.oj-enabled":function(t){t.currentTarget.classList.contains("oj-active")&&this._isRealMouseEvent(t)&&(this._start(),this._repeat(null,t.currentTarget.classList.contains("oj-inputnumber-up")?1:-1,t))},"mouseleave .oj-inputnumber-button":function(t){this._isRealMouseEvent(t)&&this._stop(t)}},_passiveEventsAndListeners:{"touchstart .oj-inputnumber-button.oj-enabled":function(t){this._start(),this._repeat(null,t.currentTarget.classList.contains("oj-inputnumber-up")?1:-1,t)}},_registerEvents:function(){this._on(this._regularEventsAndListeners),this._on(this._passiveEventsAndListeners)}}),s.setDefaultOptions({ojInputNumber:{step:s.createDynamicPropertyGetter(function(){return(i.parseJSONFromFontFamily("oj-input-number-option-defaults")||{}).step})}}),l.extension._WIDGET_NAME="ojInputNumber",l.extension._ALIASED_PROPS={readonly:"readOnly"},l.extension._INNER_ELEM="input",l.extension._GLOBAL_TRANSFER_ATTRS=["accesskey","aria-label","tabindex"],t.CustomElementBridge.register("oj-input-number",{metadata:t.CollectionUtils.mergeDeep(l,{properties:{readonly:{binding:{consume:{name:"readonly"}}},userAssistanceDensity:{binding:{consume:{name:"userAssistanceDensity"}}}}})})});