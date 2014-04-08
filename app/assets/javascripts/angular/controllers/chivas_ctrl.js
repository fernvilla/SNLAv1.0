App.controller('ChivasCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/chivas.json').then(
    function(stories){
      $scope.stories = stories.data;
    }
  );
}]);