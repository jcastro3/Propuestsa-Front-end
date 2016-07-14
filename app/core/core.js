function CoreCtrl() {
  
}

function Sample1Ctrl() {
  
}

function Sample1Subitem1Ctrl() {
  
}

function Sample1Subitem2Ctrl() {
  
}

//Controllers DI
CoreCtrl.$inject            = ['$scope'];
Sample1Ctrl.$inject         = ['$scope'];
Sample1Subitem1Ctrl.$inject = ['$scope'];
Sample1Subitem2Ctrl.$inject = ['$scope'];

angular
  .module('core', [])
  .controller('CoreCtrl', CoreCtrl);
angular
  .module('core.sample1', [])
  .controller('Sample1Ctrl', Sample1Ctrl);
angular
  .module('core.sample1.subitem1', [])
  .controller('Sample1Subitem1Ctrl', Sample1Subitem1Ctrl);
angular
  .module('core.sample1.subitem2', [])
  .controller('Sample1Subitem2Ctrl', Sample1Subitem2Ctrl);

