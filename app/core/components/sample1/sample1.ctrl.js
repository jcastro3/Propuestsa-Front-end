function Sample1Ctrl($scope) {
  console.log('Sample1Ctrl');
}

angular
  .module('mop.sample1', [])
  .controller('Sample1Ctrl', Sample1Ctrl);
  