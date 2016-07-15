function Sample2Sub2Ctrl($scope) {
  console.log('Sample2Sub2Ctrl');
}

angular
  .module('core.sample2.sub2', [])
  .controller('Sample2Sub2Ctrl', Sample2Sub2Ctrl);
  