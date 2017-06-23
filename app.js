(function (){
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {
  $scope.array = ""

  $scope.checkIftoMuch = function () {
    console.log($scope.array.split(','));
    var wordAmmount = $scope.array.split(',')
                               .filter(function(el) {
                                 return el.trim()
                               })
                               .length
    console.log(wordAmmount);
    if (wordAmmount > 3) {
      $scope.message = "Too much!"
      $scope.color = "green";
    } else if (wordAmmount === 0) {
      $scope.message = "Please enter data first"
      $scope.color = "red";

    } else {
      $scope.message = "Enjoy!"
      $scope.color = "green";
    }
  }

}




})();
