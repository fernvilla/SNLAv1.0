App.controller('KingsCtrl', function($scope, $http) {
  $http.get('/api/kings.json').then(
    function(stories){
      $scope.stories = stories.data;
    }
  );
});