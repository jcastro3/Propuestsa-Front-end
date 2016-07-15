function Navigation() {
  var navigation;
  
  return {
    setNavigation: function (nav) {
      navigation = nav;
    },
    $get: function () {
      return {
        getNavigation: function () {
          return navigation;
        }
      };
    } 
  };
}

Navigation.$inject = [];

angular
  .module('mop')
  .provider('Navigation', Navigation);