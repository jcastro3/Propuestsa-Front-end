function Sample2Ctrl($scope) {
  console.log('Sample2Ctrl');
}

angular
  .module('mop.sample2', [])
  .controller('Sample2Ctrl', Sample2Ctrl);
  