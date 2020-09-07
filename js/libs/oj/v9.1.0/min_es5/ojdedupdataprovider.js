/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore","jquery","ojs/ojdataprovider","ojs/ojcachediteratorresultsdataprovider","ojs/ojcomponentcore","ojs/ojeventtarget"],function(t,e,a,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,a){return e&&r(t.prototype,e),a&&r(t,a),t}var o=function(){function e(r){var o=this;n(this,e),this.dataProvider=r,this.DedupAsyncIterable=function(){return function t(e,a,i,r){var s=this;n(this,t),this._parent=e,this.params=a,this.dataProviderAsyncIterator=i,this.cache=r,this[Symbol.asyncIterator]=function(){return new s._parent.DedupAsyncIterator(s._parent,s.params,s.dataProviderAsyncIterator,s.cache)}}}(),this.DedupAsyncIterator=function(){function a(t,e,i,r){n(this,a),this._parent=t,this.params=e,this.asyncIterator=i,this.cache=r,this._cachedOffset=0}return s(a,[{key:"next",value:function(){var a=this,n=this,r=new Set;this.params.size>0&&this._parent.cache.getDataByOffset({offset:0,size:this._cachedOffset}).results.forEach(function(t){r.add(t.metadata.key)});return this.asyncIterator.next().then(function(s){var o=s[e._VALUE],c=o.metadata.map(function(t){return t[e._KEY]});a._cachedOffset=a._cachedOffset+c.length;var h=new Set;c.forEach(function(t){h.add(t)});var d=[],u=[],f=[];if(h.forEach(function(t,e){r.has(t)&&(d.push(t),u.push(o.data[e]),f.push(o.metadata[e]))}),d.length>0){var v=new Set;d.map(function(t){v.add(t)});var p=new n._parent.DataProviderOperationEventDetail(n._parent,v,f,u,[]),E=new n._parent.DataProviderMutationEventDetail(n._parent,null,p,null);n._parent.dispatchEvent(new t.DataProviderMutationEvent(E))}return n._parent.dataProvider instanceof i||n._parent.cache.addListResult(s),s})}}]),a}(),this.DataProviderMutationEventDetail=function(){return function t(a,i,r,s){n(this,t),this._parent=a,this.add=i,this.remove=r,this.update=s,this[e._ADD]=i,this[e._REMOVE]=r,this[e._UPDATE]=s}}(),this.DataProviderOperationEventDetail=function(){return function t(a,i,r,s,o){n(this,t),this._parent=a,this.keys=i,this.metadata=r,this.data=s,this.indexes=o,this[e._KEYS]=i,this[e._METADATA]=r,this[e._DATA]=s,this[e._INDEXES]=o}}();var c=this;this.cache=r instanceof i?r.cache:new a.DataCache,r.createOptimizedKeyMap&&(this.createOptimizedKeyMap=function(t){return r.createOptimizedKeyMap(t)}),r.createOptimizedKeySet&&(this.createOptimizedKeySet=function(t){return r.createOptimizedKeySet(t)}),r.addEventListener(e._MUTATE,function(t){t.detail&&t.detail.add&&o._processAddMutations(t.detail.add),c.dispatchEvent(t)}),r.addEventListener(e._REFRESH,function(t){c.cache.reset(),c.dispatchEvent(t)})}return s(e,[{key:"containsKeys",value:function(t){return this.dataProvider.containsKeys(t)}},{key:"fetchByKeys",value:function(t){return this.dataProvider.fetchByKeys(t)}},{key:"fetchByOffset",value:function(t){return this.dataProvider.fetchByOffset(t)}},{key:"fetchFirst",value:function(t){var e=this.dataProvider.fetchFirst(t);return new this.DedupAsyncIterable(this,t,e[Symbol.asyncIterator](),this.cache)}},{key:"getCapability",value:function(t){var e=this.dataProvider.getCapability(t);return"dedup"===t?{type:"iterator"}:e}},{key:"getTotalSize",value:function(){return this.dataProvider.getTotalSize()}},{key:"isEmpty",value:function(){return this.dataProvider.isEmpty()}},{key:"_processAddMutations",value:function(a){var i=a[e._KEYS];if(i&&i.size>0){var n=new Set,r=[],s=[];if(this.cache.getDataByKeys({keys:i}).results.forEach(function(t,e){n.add(e),r.push(t.data),s.push(t.metadata)}),n.size>0){var o=new this.DataProviderOperationEventDetail(this,n,s,r,[]),c=new this.DataProviderMutationEventDetail(this,null,o,null);this.dispatchEvent(new t.DataProviderMutationEvent(c))}}}}]),e}();
/**
 * @preserve Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
return o._KEY="key",o._KEYS="keys",o._DATA="data",o._METADATA="metadata",o._ITEMS="items",o._FROM="from",o._OFFSET="offset",o._REFRESH="refresh",o._MUTATE="mutate",o._SIZE="size",o._FETCHPARAMETERS="fetchParameters",o._VALUE="value",o._DONE="done",o._RESULTS="results",o._ADD="add",o._UPDATE="update",o._REMOVE="remove",o._INDEXES="indexes",t.DedupDataProvider=o,t.DedupDataProvider=o,t.EventTargetMixin.applyMixin(o),o});