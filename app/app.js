// TODO
// GET module config json
   //  type:  {}
   //  description: this will contain all the configuration the CORE needs to set up a specific module
   //  sample: { name: 'sample1', module: 'core.sample1', sref: 'core.sample1', parentState: 'core', nested: [{}] }
//

 var config = [
     {
       name: 'core-main',
       title: 'Core Main View',
       module: 'mop.core',
       controller: 'CoreCtrl',
       templateUrl: 'app/core/templates/core.html',
       url: '/core',
       sref: 'mop.core',
       view: 'subview-mop',
       permission: ['core_main']
     },
     {
       name: 'sample1',
       title: 'Sample 1',
       module: 'mop.core.sample1',
       controller: 'Sample1Ctrl',
       templateUrl: 'app/core/templates/cs1.html',
       url: '/sample1',
       sref: 'mop.core.sample1',
       view: 'subview-mop',
       permission: ['sample1_permission'],
       nested: [
       {
         name: 'sample1 subitem1',
         title: 'Sample 1 Subitem 1',
         module: 'mop.core.sample1.subitem1',
         controller: 'Sample1Subitem1Ctrl',
         templateUrl: 'app/core/templates/cs1s1.html',
         url: '/sample1sub1',
         sref: 'mop.core.sample1.subitem1',
         view: 'subview-mop',
         permission: ['sample1_permission']
       },
       {
         name: 'sample1 subitem2',
         title: 'Sample 1 Subitem 2',
         module: 'mop.core.sample1.subitem2',
         controller: 'Sample1Subitem2Ctrl',
         templateUrl: 'app/core/templates/cs1s2.html',
         url: '/sampl1sub2',
         sref: 'mop.core.sample1.subitem2',
         view: 'subview-mop',
         permission: ['sample1_permission']
       }
     ]
   }
 ];
 var dependencies = [
     'core',                          // core
     'ui.router',                    // Routing
     'oc.lazyLoad',                  // ocLazyLoad
     'ui.bootstrap'                  // ngSanitize
 ];
 angular
   .module('mop', dependencies)
   .constant('CORE_CONFIG', config);
 
 angular.element(document).ready(function() {
   angular.bootstrap(document.getElementsByTagName('html'), ['mop']);
 });
