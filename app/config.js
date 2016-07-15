/**
 * INSPINIA - Responsive Admin Theme
 *
 * Inspinia theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written state for all view in theme.
 *
 */




function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, CORE_CONFIG, NavigationProvider) {
    $urlRouterProvider.otherwise("/mop/dashboard");
  NavigationProvider.setNavigation(CORE_CONFIG);
  $ocLazyLoadProvider.config({
      // Set to true if you want to see what and when is dynamically loaded
      debug: false
  });

  $stateProvider
    .state('mop', {
        abstract: true,
        url: "/mop",
        views: {
          mop: {
            templateUrl: 'app/core/common/templates/content.html'
          }
        }
    });
    
  configurePluginRoutes();
  
  function configurePluginRoutes(c) {
    var config = c || CORE_CONFIG;
    config.forEach(function (config) {
      buildConfiguration(config);
    });
  }
  
  function buildConfiguration(config) {
    $stateProvider.state(config.module, createRouteObject(config));
    if(areThereNestedViews(config)) {
      //recursion
      configurePluginRoutes(config.nested);
    }
  }
  
  function areThereNestedViews(config) {
    return (config.nested && angular.isArray(config.nested) && config.nested.length);
  }
    
  function createRouteObject(config) {
    //TODO: make this dinamic object will be constructed depending on params
    //some might not include the same parameters of configuration e.g. abstract, controller, url.
    
    var route =  {
      url: config.url,
      data: {
        pageTitle: config.title
      }
    };

    route.views = {};
    route.views[config.view] = {
      templateUrl: config.templateUrl,
      permission: config.permission
    };
    
    if(config.hasOwnProperty('controller')) {
      route.controller = config.controller;
    }
    
    return route;
  }
  
}

function run($rootScope, $state) {
  $rootScope.$state = $state;
  $rootScope.$on( '$stateChangeError', function(event, toState, toParams, fromState, fromParams, error){ 
    console.error(error, event, toState);
  });
}

function MainCtrl($scope) {
  
}

config.$inject = ['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', 'CORE_CONFIG', 'NavigationProvider'];
run.$inject = ['$rootScope', '$state'];
Navigation.$inject = [];


angular
  .module('mop')
  .provider('Navigation', Navigation)
  .config(config)
  .run(run)
  .controller('MainCtrl', MainCtrl);


