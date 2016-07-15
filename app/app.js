(function ($, angular) {
  'use strict';
  angular
    .module('mop', [
        'core',                          // core
        'ui.router',                    // Routing
        'oc.lazyLoad',                  // ocLazyLoad
        'ui.bootstrap'                  // ngSanitize
    ]);
  
  $.ajax({
    url: 'http://www.mocky.io/v2/57889a250f00002f1dbd16d1',
    method: 'GET'
  }).done(boostrapAngular);
    
  function boostrapAngular(data) {
    console.log(data);
    angular
      .module('mop')
      .constant('CORE_CONFIG', data);
      
    angular.element(document).ready(function() {
      angular.bootstrap(document.getElementsByTagName('html'), ['mop']);
    });
  }

})($, angular);
