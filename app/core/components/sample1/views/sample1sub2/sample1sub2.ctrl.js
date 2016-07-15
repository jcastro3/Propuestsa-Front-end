function Sample1Sub2Ctrl($scope) {
  console.log('Sample1Sub2Ctrl');
}

angular
  .module('core.sample1.sub2', [])
  .controller('Sample1Sub2Ctrl', Sample1Sub2Ctrl);
  