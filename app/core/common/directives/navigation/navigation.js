function navigationItems(Navigation) {
  return {
    restrict: 'A',
    templateUrl: 'app/core/common/directives/navigation/navigation.tpl.html',
    link: function (scope, attr, elem, ctrl) {
       scope.navigation = Navigation.getNavigation();
    }
  };
}

navigationItems.$inject = ['Navigation'];

angular
  .module('core')
  .directive('navigationItems', navigationItems);