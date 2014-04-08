App.controller('ClippersCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/clippers.json').then(
    function(stories){
      $scope.stories = stories.data;
    }
  );
}]);