function Sample1Sub2Ctrl($scope) {
  console.log('Sample1Sub2Ctrl');
}

angular
  .module('mop.sample1.sub2', [])
  .controller('Sample1Sub2Ctrl', Sample1Sub2Ctrl);
  