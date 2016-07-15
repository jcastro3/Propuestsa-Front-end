function CoreCtrl() {
  
}

//Controllers DI
CoreCtrl.$inject = ['$scope'];

angular
  .module('core', [])
  .controller('CoreCtrl', CoreCtrl);


