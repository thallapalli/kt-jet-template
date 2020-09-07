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
'use strict';
define(['knockout', 'appUtils', 'ojs/ojknockout', 'ojs/ojformlayout', 'ojs/ojlabelvalue'], function(ko, appUtils) {
  function incidentTabSummary(params) {
    var self = this;
    self.goToPriority = params.goToPriority;
    self.goToStatus = params.goToStatus;
    self.goToCustomer = params.goToCustomer;
    self.incidentData = params.incidentData;
    self.mapHref = ko.observable();
    self.goToCustomerLocationMap = params.goToCustomerLocationMap;

    self.prefetch = function() {
      // Data is passed as parameter. No new data to load
      return Promise.resolve();
    }

    // adjust content padding top
    self.connected = function() {
      appUtils.adjustContentPadding();
      self.mapHref(appUtils.getMapPrefix() + '0,0?q=' + self.incidentData().location.formattedAddress);
    };

    // trigger click when selection changes
    self.optionChange = function (event) {
      var detail = event.detail;
      if(detail.items && detail.items[0]) {
        detail.items[0].click();
      }
    };

    //get init caps of the passed string
    self.getInitCap = function(text) {
      if (text) {
        return text.charAt(0).toUpperCase() + text.slice(1);
      }
    };

  }

  return incidentTabSummary;
});
