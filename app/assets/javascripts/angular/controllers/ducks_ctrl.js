App.controller('DucksCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/ducks.json').then(
    function(stories){
      $scope.stories = stories.data;
    }
  );
}]);