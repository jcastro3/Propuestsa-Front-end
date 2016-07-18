function Sample1Sub1Ctrl($scope) {
  console.log('Sample1Sub1Ctrl');
}

angular
  .module('core.sample1.sub1', [])
  .controller('Sample1Sub1Ctrl', Sample1Sub1Ctrl);
  
  
  
[{
    "name": "Sample 1",
    "title": "This is Sample 1",
	"module": "mop.sample1",
	"browser_url": "/sample1",
	"sref": "mop.sample1",
	"view": "subview-mop",
	"controller": "Sample1Ctrl",
	"templateUrl": "app/core/components/sample1/sample1.view.html",
	"scripts": [
		"IF_COMPONENT_WAS_ADDED_AFTER_DEPLOYMENT_WILL_NEED_ITS_SCRIPT_ROUTES"
	],
	"permission": [
		"PERMISSIONS_GO_HERE"
	],
	"abstract": [
		"MIGHT_NOT_BE_NEEDED"
	],
	"lazyload": [
		"EXTERNAL_LIBRARIES_FOR_LAZY_LOADING"
	],
	"nested": [{
		"name": "Sample 1 Sub 1",
		"title": "This is Sample 1 Subitem 1",
		"module": "mop.sample1.sub1",
		"controller": "Sample1Sub1Ctrl",
		"templateUrl": "app/core/components/sample1/views/sample1sub1.view.html",
		"browser_url": "/sample1_sub1",
		"sref": "mop.sample1.sub1",
		"view": "subview-mop",
		"permission": [
			"EXTERNAL_LIBRARIES_FOR_LAZY_LOADING"
		]
	}, {
		"name": "Sample 1 Sub 1",
		"title": "This is Sample 1 Subitem 2",
		"module": "mop.sample1.sub2",
		"controller": "Sample1Sub2Ctrl",
		"templateUrl": "app/core/components/sample1/views/sample1sub2.view.html",
		"browser_url": "/sample1_sub2",
		"sref": "mop.sample1.sub2",
		"view": "subview-mop",
		"permission": [
			"sample1_permission"
		]
	}]
}, {
	"name": "Sample 2",
	"title": "This is Sample 2",
	"module": "mop.sample2",
	"browser_url": "/sample2",
	"sref": "mop.sample2",
	"view": "subview-mop",
	"controller": "Sample2Ctrl",
	"templateUrl": "app/core/components/sample2/sample2.view.html",
	"scripts": [
		"IF_COMPONENT_WAS_ADDED_AFTER_DEPLOYMENT_WILL_NEED_ITS_SCRIPT_ROUTES"
	],
	"permission": [
		"PERMISSIONS_GO_HERE"
	],
	"abstract": [
		"MIGHT_NOT_BE_NEEDED"
	],
	"lazyload": [
		"EXTERNAL_LIBRARIES_FOR_LAZY_LOADING"
	],
	"nested": [{
		"name": "Sample 2 Sub 1--",
		"title": "This is Sample 2 Subitem 1",
		"module": "mop.sample2.sub1",
		"controller": "Sample2Sub1Ctrl",
		"templateUrl": "app/core/components/sample2/views/sample2sub1.view.html",
		"browser_url": "/sample2_sub1",
		"sref": "mop.sample2.sub1",
		"view": "subview-mop",
		"permission": [
			"EXTERNAL_LIBRARIES_FOR_LAZY_LOADING"
		]
	}, {
		"name": "Sample 2 Sub 1",
		"title": "This is Sample 2 Subitem 2",
		"module": "mop.sample2.sub2",
		"controller": "Sample2Sub2Ctrl",
		"templateUrl": "app/core/components/sample2/views/sample2sub2.view.html",
		"browser_url": "/sample2_sub2",
		"sref": "mop.sample2.sub2",
		"view": "subview-mop",
		"permission": [
			"sample2_permission"
		]
	}]
}]