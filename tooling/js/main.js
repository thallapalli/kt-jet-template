/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/**
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 */
/**
 * Example of Require.js boostrap javascript
 */
'use strict';
(function () {
  
  function _ojIsIE11() {
    var nAgt = navigator.userAgent;
    return nAgt.indexOf('MSIE') !== -1 || !!nAgt.match(/Trident.*rv:11./);
  };
  var _ojNeedsES5 = _ojIsIE11();

  requirejs.config({
    // Path mappings for the logical module names
    paths:
    //injector:mainReleasePaths
    {
      'knockout': 'libs/knockout/knockout-3.5.1',
      'mapping': 'libs/knockout/knockout.mapping-latest',
      'jquery': 'libs/jquery/jquery-3.5.1.min',
      'jqueryui-amd': 'libs/jquery/jqueryui-amd-1.12.1.min',
      'hammerjs': 'libs/hammer/hammer-2.0.8.min',
      'ojdnd': 'libs/dnd-polyfill/dnd-polyfill-1.0.2.min',
      'ojs': 'libs/oj/v9.1.0/min' + (_ojNeedsES5 ? '_es5' : ''),
      'ojL10n': 'libs/oj/v9.1.0/ojL10n',
      'ojtranslations': 'libs/oj/v9.1.0/resources',
      'signals': 'libs/js-signals/signals.min',
      'text': 'libs/require/text',
      'oraclemapviewer': 'libs/oraclemapsv2',
      'oracleelocation': 'libs/oracleelocationv3',
      'customElements': 'libs/webcomponents/custom-elements.min',
      'css': 'libs/require-css/css.min',
      'touchr': 'libs/touchr/touchr',
      'corejs' : 'libs/corejs/shim',
      'chai': 'libs/chai/chai-4.2.0',
      'regenerator-runtime' : 'libs/regenerator-runtime/runtime',
      'pouchdb': 'libs/pouchdb/min/pouchdb-6.3.4',
      'pouchfind': 'libs/pouchdb/min/pouchdb.find',
      'persist': 'libs/persist/min',
      'appConfig': 'appConfigExternal',
      'oj-sample-mobile-internal':'auth-cca/oj-sample-mobile-internal',
      'listBundle': 'listBundle' + (_ojNeedsES5 ? '_es5' : ''),
      'mapviewBundle': 'mapviewBundle' + (_ojNeedsES5 ? '_es5' : ''),
      'incidentsBundle': 'incidentsBundle' + (_ojNeedsES5 ? '_es5' : ''),
      'landingBundle': 'landingBundle' + (_ojNeedsES5 ? '_es5' : ''),
      'signinBundle': 'signinBundle' + (_ojNeedsES5 ? '_es5' : ''),
      'customerBundle': 'customerBundle' + (_ojNeedsES5 ? '_es5' : ''),
      'profileBundle': 'profileBundle' + (_ojNeedsES5 ? '_es5' : ''),
      'settingsBundle': 'settingsBundle' + (_ojNeedsES5 ? '_es5' : ''),
      'persistenceBundle': 'persistenceBundle' + (_ojNeedsES5 ? '_es5' : ''),
    }
    //endinjector
  });
}());
requirejs.config ({
  bundles:
  {
    'listBundle': ['ojL10n', 'ojs/ojanimation', 'ojtranslations/nls/ojtranslations', 'ojs/ojcore', 'hammer', 'ojs/ojjquery-hammer',
      'jqueryui-amd/version',  'jqueryui-amd/widget', 'jqueryui-amd/unique-id',
      'jqueryui-amd/keycode', 'jqueryui-amd/focusable', 'jqueryui-amd/tabbable', 'ojs/ojmessaging', 'customElements', 'ojs/ojcomponentcore', 'ojs/ojoffcanvas',
      'ojs/ojswipetoreveal', 'ojs/ojpulltorefresh', 'ojs/ojdomscroller', 'ojs/ojlistview', 'ojs/ojdatasource-common', 'ojs/ojarraytabledatasource'],
    'mapviewBundle': ['oraclemapviewer', 'ojs/oracleelocation'],
    'incidentsBundle': ['ojs/ojradioset', 'ojs/ojformlayout', 'ojs/ojtrain', 'ojs/ojconverter-number', 'ojs/ojchart', 'ojs/ojswipeactions','ojs/ojrefresher'],
    'landingBundle': [ 'ojs/ojbutton', 'ojs/ojcomposite-knockout',
      'ojs/ojcomposite', 'ojs/ojcontext', 'ojs/ojconverterutils',
      'ojs/ojconverter', 'ojs/ojconverterutils-i18n',
      'ojs/ojdatacollection-common', 'ojs/ojdataprovider', 'ojs/ojformlayout',
      'ojs/ojhtmlutils', 'ojs/ojinputtext', 'ojs/ojkeysetimpl',
      'ojs/ojknockout', 'ojs/ojknockouttemplateutils', 'ojs/ojkoshared',
      'ojs/ojlocaledata', 'ojs/ojlogger', 'ojs/ojmenu', 'ojs/ojmessage',
      'ojs/ojmessages', 'ojs/ojmodule-element', 'ojs/ojmodule-element-utils',
      'ojs/ojmodule', 'ojs/ojmoduleanimations', 'ojs/ojnavigationlist',
      'ojs/ojoption', 'ojs/ojpopupcore', 'ojs/ojradioset',
      'ojs/ojresponsiveknockoututils', 'ojs/ojrouter','ojs/ojswitch',
      'ojs/ojtemplateengine', 'ojs/ojthemeutils', 'ojs/ojvalidation-error',
      'ojs/ojvalidator'],
    'signinBundle': [ 'ojs/ojvalidationgroup', 'ojs/ojcheckboxset', 'ojs/ojradiocheckbox'],
    'customerBundle': ['ojs/ojindexer', 'ojs/ojindexermodeltreedatasource',
      'ojs/ojlistdataproviderview', 'ojs/ojoptgroup', 'ojs/ojselectcombobox',
      'ojs/ojtreedataprovideradapter',
      'ojs/ojtreedataproviderview'],
    'profileBundle': ['ojs/ojformlayout'],
    'settingsBundle': ['ojs/ojformlayout', 'ojs/ojswitch'],
    'persistenceBundle': ['persist/persistenceManager', 'persist/PersistenceStore',
      'persist/persistenceStoreManager', 'persist/impl/PersistenceSyncManager',
      'persist/persistenceUtils', 'persist/impl/PersistenceXMLHttpRequest',
      'persist/impl/offlineCacheManager', 'persist/impl/OfflineCache', 'persist/cacheStrategies',
      'persist/impl/defaultCacheHandler','persist/defaultResponseProxy',
      'persist/impl/fetch', 'persist/fetchStrategies', 'persist/impl/logger',
      'persist/simpleJsonShredding', 'persist/impl/storageUtils','persist/pouchDBPersistenceStoreFactory',
      'persist/impl/pouchDBPersistenceStore']
  },
  // This section configures the i18n plugin. It is merging the Oracle JET built-in translation
  // resources with a custom translation file.
  // Any resource file added, must be placed under a directory named "nls". You can use a path mapping or you can define
  // a path that is relative to the location of this main.js file.
  // In case of windows platform, ensure that the localePrefix config that is inserted automatically by tooling
  // is included while using this section.
  // config: {
  //   ojL10n: {
  //     merge: {
  //      'ojtranslations/nls/ojtranslations': 'resources/nls/menu'
  //     }
  //   }
  // },
  // Increase timeout threshold to 30 seconds..
  waitSeconds: 30
});

require(['pouchdb'], function (pouchdb) {
  window.PouchDB = pouchdb;
});

/**
 * A top-level require call executed by the Application.
 * Although 'ojcore' and 'knockout' would be loaded in any case (they are specified as dependencies
 * by the modules themselves), we are listing them explicitly to get the references to the 'oj' and 'ko'
 * objects in the callback
 */
require(['ojs/ojcore', 'knockout', 'appController', 'jquery'], function (oj, ko, app, $) {

  $(function() {

    function init() {
      oj.Router.sync().then(function () {
        // bind your ViewModel for the content of the whole page body.
        ko.applyBindings(app, document.getElementById('page'));
      }, function (error) {
        oj.Logger.error('Error in root start: ' + error.message);
      });
    }

    // If running in a hybrid (e.g. Cordova) environment, we need to wait for the deviceready
    // event before executing any code that might interact with Cordova APIs or plugins.
    if ($(document.body).hasClass('oj-hybrid')) {
      document.addEventListener("deviceready", init);
    } else {
      init();
    }

  });

});
