/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
({
  baseUrl: "js",
  appDir: "../",
  dir: "rjs_built",
  modules: [
    {
      name: "rjs_bundles/listBundle",
      create: true,
      include: ['ojs/ojcore', 'ojs/ojswipetoreveal', 'ojs/ojoffcanvas', 
        'ojs/ojpulltorefresh', 'ojs/ojlistview', 'ojs/ojarraytabledatasource'],
      exclude: ['jquery']
    },
    {
      name: "rjs_bundles/mapviewBundle",
      create: true,
      include: ['oraclemapviewer', 'oracleelocation'],
      exclude: ['jquery']
    }, {
      name: "rjs_bundles/landingBundle",
      create: true,
      include: [ 'ojs/ojanimation', 'ojs/ojbutton', 'ojs/ojcomposite-knockout', 
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
      exclude: ['jquery']
    }, {
      name: "rjs_bundles/incidentsBundle",
      create: true,
      include: [ 'ojs/ojconverter-number', 'ojs/ojchart', 'ojs/ojrefresher', 
        'ojs/ojswipeactions', 'ojs/ojtrain'],
      exclude: ['jquery']
    }, {
      name: "rjs_bundles/signinBundle",
      create: true,
      include: [ 'ojs/ojvalidationgroup', 'ojs/ojcheckboxset', 
        'ojs/ojradiocheckbox'],
      exclude: ['jquery']
    }, {
      name: "rjs_bundles/customerBundle",
      create: true,
      include: ['ojs/ojindexer', 'ojs/ojindexermodeltreedatasource', 
        'ojs/ojlistdataproviderview', 'ojs/ojoptgroup', 'ojs/ojselectcombobox', 
        'ojs/ojtreedataprovideradapter', 
        'ojs/ojtreedataproviderview'],
      exclude: ['jquery']
    }, {
      name: "rjs_bundles/persistenceBundle",
      create: true,
      include: ['persist/persistenceManager', 'persist/PersistenceStore',
       'persist/persistenceStoreManager', 'persist/impl/PersistenceSyncManager',
       'persist/persistenceUtils', 'persist/impl/PersistenceXMLHttpRequest',
       'persist/impl/offlineCacheManager', 'persist/impl/OfflineCache', 'persist/cacheStrategies',
       'persist/impl/defaultCacheHandler','persist/defaultResponseProxy',
       'persist/impl/fetch', 'persist/fetchStrategies', 'persist/impl/logger',
       'persist/simpleJsonShredding', 'persist/impl/storageUtils','persist/pouchDBPersistenceStoreFactory',
       'persist/impl/pouchDBPersistenceStore'],
      exclude: ['jquery']
    }
  ],
  paths:
  // injector:mainReleasePaths
  {
    'knockout': 'libs/knockout/knockout-3.5.1',
    'mapping': 'libs/knockout/knockout.mapping-latest',
    'jquery': 'libs/jquery/jquery-3.5.1.min',
    'jqueryui-amd': 'libs/jquery/jqueryui-amd-1.12.1.min',
    'promise': 'libs/es6-promise/es6-promise.min',
    'hammerjs': 'libs/hammer/hammer-2.0.8.min',
    'ojdnd': 'libs/dnd-polyfill/dnd-polyfill-1.0.2.min',
    'ojs': 'libs/oj/v9.1.0/min',
    'ojL10n': 'libs/oj/v9.1.0/ojL10n',
    'ojtranslations': 'libs/oj/v9.1.0/resources',
    'signals': 'libs/js-signals/signals.min',
    'text': 'libs/require/text',
    'oraclemapviewer': 'libs/oraclemapsv2',
    'oracleelocation': 'libs/oracleelocationv3',
    'customElements': 'libs/webcomponents/custom-elements.min',
    'css': 'libs/require-css/css.min',
    'touchr': 'libs/touchr/touchr',
    'persist': 'libs/persist/min',
    'pouchdb': 'libs/pouchdb/min/pouchdb-6.3.4'
  },
  // endinjector
  optimize: "none"
})
