(function(angular) {
  'use strict';
angular.module('groupM',['ngMaterial','ngMessages'])
.config(function($mdThemingProvider) {

    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('yellow')
      .dark();

  }).controller('MainCtrl', function MainCtrl() {
});
})(window.angular);