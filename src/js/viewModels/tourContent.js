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

 // view model for the tour content with filmstrip
 'use strict';
 define(['knockout', 'ojs/ojfilmstrip', 'ojs/ojpagingcontrol', 'ojs/ojknockout'], function(ko) {
   function tourContent(params) {
     var self = this;

     self.pagingModel = ko.observable(null);
     self.filmStripOptionChange = params.filmStripOptionChange;

     // todo: need to fix the animation so that the paging model is set before the transition occurs
     self.connected = function() {
       var filmStrip = document.getElementById("filmStrip");
       oj.Context.getContext(filmStrip).getBusyContext().whenReady().then(function () {
         self.pagingModel(filmStrip.getPagingModel());
       });
     }

     self.steps = [
       {
         'title': 'Dashboard',
         'description': 'Review a dashboard of your current incidents.',
         'headingColorClass': 'oj-text-color-primary',
         'iconClass': 'oj-ux-ico-chart-pie-45 oj-icon-color-primary'
       },
       {
         'title': 'Maps',
         'description': 'Find locations and directions to your customers.',
         'headingColorClass': 'oj-text-color-secondary',
         'iconClass': 'oj-ux-ico-backtomap oj-icon-color-secondary'
       },
       {
         'title': 'Incidents',
         'description': 'Check on details about the incident including seeing feed updates and photos.',
         'headingColorClass': 'oj-text-color-danger',
         'iconClass': 'oj-ux-ico-notification oj-icon-color-danger'
       },
       {
         'title': 'Customers',
         'description': 'Have your customers information easily available.',
         'headingColorClass': 'oj-text-color-success',
         'iconClass': 'oj-ux-ico-contacts oj-icon-color-success'
       }
     ];

     self.getItemInitialDisplay = function(index) {
       return index < 1 ? '' : 'none';
     };

   }
   return tourContent;
 });
