App.controller('BruinsCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/bruins.json').then(
    function(stories){
      $scope.stories = stories.data;
    }
  );
}]);