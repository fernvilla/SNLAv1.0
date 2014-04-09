App.controller('PrepsCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/preps.json').then(
    function(stories){
      $scope.stories = stories.data;
    }
  );
}]);