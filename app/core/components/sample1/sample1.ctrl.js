function Sample1Ctrl($scope) {
  console.log('Sample1Ctrl');
}

angular
  .module('core.sample1', [])
  .controller('Sample1Ctrl', Sample1Ctrl);
  