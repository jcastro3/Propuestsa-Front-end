function Sample2Sub1Ctrl($scope) {
  console.log('Sample2Sub1Ctrl');
}

angular
  .module('core.sample2.sub1', [])
  .controller('Sample2Sub1Ctrl', Sample2Sub1Ctrl);
  