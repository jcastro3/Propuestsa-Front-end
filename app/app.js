(function ($, angular) {
  'use strict';
  angular
    .module('mop', [
        'core',
        'core.sample1',                          // core
        'core.sample1.sub1',                          // core
        'core.sample2',                          // core
        'core.sample2.sub2',                          // core
        'ui.router',                    // Routing
        'oc.lazyLoad',                  // ocLazyLoad
        'ui.bootstrap'                  // ngSanitize
    ]);
  
  $.ajax({
    url: 'http://www.mocky.io/v2/578c7bf40f0000141b37086b',
    method: 'GET'
  }).done(boostrapAngular);
    
  function boostrapAngular(data) {
    angular
      .module('mop')
      .constant('CORE_CONFIG', data);
      
    angular.element(document).ready(function() {
      angular.bootstrap(document.getElementsByTagName('html'), ['mop']);
    });
  }

})($, angular);
