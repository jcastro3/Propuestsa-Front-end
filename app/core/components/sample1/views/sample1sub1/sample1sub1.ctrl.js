function Sample1Sub1Ctrl($scope) {
  console.log('Sample1Sub1Ctrl');
}

angular
  .module('mop.sample1.sub2', [])
  .controller('Sample1Sub1Ctrl', Sample1Sub1Ctrl);
  