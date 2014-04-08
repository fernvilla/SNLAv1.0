App.controller('LakersCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/lakers.json').then(
    function(stories){
      $scope.stories = stories.data;
    }
  );
}]);