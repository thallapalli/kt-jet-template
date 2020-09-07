/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore","ojs/ojobservable","ojs/ojurlpathadapter","ojs/ojlogger"],function(t,e,r,o){"use strict";function n(t){"@babel/helpers - typeof";return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}return function(){var t,i,s=[];function a(o,n,s){if(n=n||{},this._name="/",this._offset=0,this.beforeStateChange=new e.BehaviorSubject({accept:function(){}}),this.currentState=new e.BehaviorSubject({complete:function(){}}),this._noHistory=s&&s._noHistory||"skip"===n.history,this._noHistoryOffset=0,this._parentRouter=s,s)this._name=s._name+s._activeState.path+"/",this._offset=s._offset+1,s._noHistory&&(this._noHistoryOffset=s._noHistoryOffset+1);else{if(t)throw Error("Only one root CoreRouter instance may exist at a time");t=this,i=n.urlAdapter||new r,this._setupNavigationListener()}this._configure(o)}return a.prototype._configure=function(t){this._states=[],t&&t.forEach(function(t){var e=t.path,r=e;if("string"==typeof e)r=new RegExp("^"+e+"$");else if(!(e instanceof RegExp))throw Error("Router path must be a string or RegExp");var o={path:e,detail:t.detail,params:{},_match:r,_redirect:t.redirect};this._states.push(o)},this)},a.prototype.sync=function(){var t=this,e=this._getRouteSegment();return this._execute(e||{path:"",params:{}}).then(function(e){var r=e,o=t._childRouter;return o?r=o.sync():t._noHistory||(s=[]),r})},a.prototype._getRouteSegment=function(){var t;this._noHistory?t=s[this._noHistoryOffset]:t=i.getRoutesForUrl()[this._offset];return t},a.prototype.go=function(){var e,r=Array.prototype.slice.call(arguments,0);if(r.forEach(function(t){var r=t.params;r&&Object.keys(r).forEach(function(t){"object"===n(r[t])&&(e=Promise.reject('"params" object may only contain scalar values'))})}),!e){var a=r.map(function(t){return t.path}).join("/"),c=function(){for(var e,r=t,o=[];r;)(e=r._activeState)&&o.push({path:e.path||"",params:e.params}),r=r._childRouter;return o}(),h=i.getUrlForRoutes(c),u=c.slice(0,this._offset).concat(r),p=i.getUrlForRoutes(u);this._noHistory?(o.info("Navigating non-history tracking router(".concat(this._name,") to ").concat(a)),s=s.slice(0,this._noHistoryOffset).concat(r)):h!==p&&(o.info("Navigating router(".concat(this._name,") to ").concat(a)),window.history.pushState(null,"path",p)),e=this.sync()}return e},a.prototype._execute=function(t){var e,r=this._getPendingState(t);return r?(e=this._prepublish(r),this._isCurrentState(r)||(e=e.then(function(){Promise.resolve(!1);return this._publish(r)}.bind(this)))):e=Promise.reject("Router("+this._name+') has no state matching "'+t.path+'"'),e},a.prototype._prepublish=function(e){var r=[];this.beforeStateChange.next({state:e,accept:function(t){r.push(t)}});var n=Promise.all(r).then(function(){return e}),s=this._childRouter;return s&&(n=n.then(function(){return s._prepublish(e)})),n=n.then(function(t){return n!==this._activeSync?Promise.reject():t}.bind(this),function(e){if(n===this._activeSync){o.info("Router sync failed: "+e);var r=function(){for(var e=t,r=[];e;){var o=e._activeState;r.push(o),e=e._childRouter}return i.getUrlForRoutes(r)}();window.history.replaceState(null,"path",r)}return Promise.reject(e)}.bind(this)),this._activeSync=n,n},a.prototype._publish=function(t){var e=[];return this._childRouter=null,this._activeState=t,this.currentState.next({state:t,complete:function(t){e.push(t)}}),Promise.all(e).then(function(){return t})},a.prototype._setupNavigationListener=function(){this===t&&(this._popstateHandler=this.sync.bind(this),window.addEventListener("popstate",this._popstateHandler,!1))},a.prototype._isCurrentState=function(t){var e,r,o=this._activeState;return!!o&&(e=o,r=t,i.getUrlForRoutes([e])===i.getUrlForRoutes([r]))},a.prototype._getPendingState=function(t){var e,r,o=t.path,n=t.params||{};return this._states.some(function(t){return!!t._match.test(o)&&(e=t,!0)}),e&&e._redirect&&(o=e._redirect,e=this._getPendingState({path:o,params:n})),e&&(r={path:o,detail:e.detail,params:n,_match:e._match,_redirect:e._redirect},Object.freeze(r)),r},a.prototype.createChildRouter=function(t,e){var r=this._activeState;if(!r)throw Error("Router("+this._name+") has no current state. Call sync() on the router first.");if(this._childRouter)throw Error("Router("+this._name+") state("+r.path+") already has a child router");var o=new a(t,e,this);return this._childRouter=o,o},a.prototype.destroy=function(){this===t&&(window.removeEventListener("popstate",this._popstateHandler,!1),t=null)},a}()});