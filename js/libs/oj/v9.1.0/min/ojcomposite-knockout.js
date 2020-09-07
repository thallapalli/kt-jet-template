/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore","knockout","ojs/ojtemplateengine","ojs/ojlogger","ojs/ojkoshared"],function(e,o,t,n,r){"use strict";!function(){function o(e,o){var n,r,i=["name","slot"],l=!1;if(o?(l=!0,i.push("data"),i.push("as"),r="ko _ojBindTemplateSlot_:{"):(l=!0,i.push("index"),r="ko _ojBindSlot_:{"),l){for(var s=[],d=0;d<i.length;d++){var a=i[d],p=t(e.getAttribute(a));p&&s.push(a+":"+p)}r+=s.join(","),r+="}";var u=document.createComment(r),m=document.createComment("/ko");n=[u];var c=e.parentNode;for(c.insertBefore(u,e);e.childNodes.length>0;){var _=e.childNodes[0];c.insertBefore(_,e),n.push(_)}n.push(m),c.replaceChild(m,e)}return n}function t(o){if(null!=o){var t=e.__AttributeUtils.getExpressionInfo(o).expr;return null==t&&(t="'"+o+"'"),t}return null}r.registerPreprocessor("oj-bind-slot",o),r.registerPreprocessor("oj-slot",o),r.registerPreprocessor("oj-bind-template-slot",function(e){return o(e,!0)})}(),e.CompositeTemplateRenderer={},e.CompositeTemplateRenderer.renderTemplate=function(t,n,r){var i=e.CompositeTemplateRenderer._storeNodes(n,r);o.virtualElements.setDomNodeChildren(n,r),e.CompositeTemplateRenderer.invokeViewModelMethod(n,t.viewModel,"attached",[t.viewModelContext]),e.CompositeTemplateRenderer.invokeViewModelMethod(n,t.viewModel,"connected",[t.viewModelContext]);var l=e.CompositeTemplateRenderer._getKoBindingContext().createChildContext(t.viewModel,void 0,function(o){o[e.Composite.__COMPOSITE_PROP]=n,o.__oj_slots=t.slotMap,o.__oj_nodestorage=i,o.$slotNodeCounts=t.slotNodeCounts,o.$slotCounts=t.slotNodeCounts,o.$props=t.props,o.$properties=t.props,o.$unique=t.unique,o.$uniqueId=t.uniqueId,o.$parent=null,o.$parentContext=null,o.$parents=null,o.$provided=null});o.applyBindingsToDescendants(l,n),e.CompositeTemplateRenderer.invokeViewModelMethod(n,t.viewModel,"bindingsApplied",[t.viewModelContext])},e.CompositeTemplateRenderer.getEnclosingComposite=function(t){for(var n=null,r=o.contextFor(t);r&&!n;r=r.$parentContext)n=r[e.Composite.__COMPOSITE_PROP];return n},e.CompositeTemplateRenderer.createTracker=function(){return o.observable()},e.CompositeTemplateRenderer.invokeViewModelMethod=function(e,t,n,r){if(null!=t){var i=t[n];if("function"==typeof i)try{return o.ignoreDependencies(i,t,r)}catch(o){throw new Error("Error while invoking "+n+" callback for "+e.tagName.toLowerCase()+" with id '"+e.id+"'.")}}},e.CompositeTemplateRenderer._storeNodes=function(o,t){var n,r=o.childNodes;if(r){(n=document.createElement("div")).setAttribute("data-bind","_ojNodeStorage_"),n.style.display="none",t.push(n);for(var i=[],l=0;l<r.length;l++){var s=r[l];e.BaseCustomElementBridge.isSlotable(s)&&i.push(s)}i.forEach(function(e){n.appendChild(e)}),e.Components&&e.Components.subtreeHidden(n)}return n},e.CompositeTemplateRenderer._getKoBindingContext=function(){if(!e.CompositeTemplateRenderer._BINDING_CONTEXT){var t=document.createElement("div");o.applyBindings(null,t),e.CompositeTemplateRenderer._BINDING_CONTEXT=o.contextFor(t),o.cleanNode(t)}return e.CompositeTemplateRenderer._BINDING_CONTEXT},e.CompositeTemplateRenderer._BINDING_CONTEXT=null,o.bindingHandlers._ojNodeStorage_={init:function(){return{controlsDescendantBindings:!0}}},o.bindingHandlers._ojBindSlot_={init:function(t,n,r,l,s){o.utils.domNodeDisposal.addDisposeCallback(t,i.cleanup.bind(null,t,s));var d=s.__oj_slots,a=n(),p=o.utils.unwrapObservable,u=p(a.name)||"",m=p(a.slot)||"",c=p(a.index),_=null!=c?[d[u][c]]:d[u];if(_){var C;for(C=0;C<_.length;C++){_[C].__oj_slots=m}if(o.virtualElements.setDomNodeChildren(t,_),e.Components)for(C=0;C<_.length;C++){var v=_[C];1===v.nodeType&&e.Components.subtreeShown(v)}return{controlsDescendantBindings:!0}}o.virtualElements.childNodes(t).forEach(function(e){var o;(1===(o=e).nodeType||3===o.nodeType&&o.nodeValue.trim())&&(e.__oj_slots=m)})}},o.virtualElements.allowedBindings._ojBindSlot_=!0;var i={cleanup:function(t,n){var r=n.__oj_nodestorage;if(r)for(var i=o.virtualElements.firstChild(t);i;){var l=o.virtualElements.nextSibling(i);null!=i.__oj_slots&&(r.appendChild(i),e.Components&&1===i.nodeType&&e.Components.subtreeHidden(i)),i=l}}};o.bindingHandlers._ojBindTemplateSlot_={init:function(r,l,s,d,a){o.utils.domNodeDisposal.addDisposeCallback(r,i.cleanup.bind(null,r,a));var p=a.__oj_slots,u=l(),m=o.utils.unwrapObservable,c=m(u.name)||"",_=p[c],C=_&&_[_.length-1],v=!1;if(!C)for(var f=o.virtualElements.childNodes(r),g=0;g<f.length;g++)if("TEMPLATE"===f[g].tagName){v=!0,C=f[g];break}if(C){var h=a[e.Composite.__COMPOSITE_PROP];"TEMPLATE"!==C.tagName&&n.error("Slot content for slot '"+c+"' under "+h.tagName.toLowerCase()+" with id '"+h.id+"' should be wrapped inside a <template> node."),C.__oj_slots=m(u.slot)||"",o.computed(function(){var e=m(u.data),n=m(u.as),i=t.execute(v?r:h,C,e,v?n:null);o.virtualElements.setDomNodeChildren(r,i)})}else o.virtualElements.setDomNodeChildren(r,[]);return{controlsDescendantBindings:!0}}},o.virtualElements.allowedBindings._ojBindTemplateSlot_=!0});