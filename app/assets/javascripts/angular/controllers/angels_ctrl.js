App.controller('AngelsCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/angels.json').then(
    function(stories){
      $scope.stories = stories.data;
    }
  );
}]);