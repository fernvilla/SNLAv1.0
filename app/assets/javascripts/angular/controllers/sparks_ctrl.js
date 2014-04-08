App.controller('SparksCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/sparks.json').then(
    function(stories){
      $scope.stories = stories.data;
    }
  );
}]);