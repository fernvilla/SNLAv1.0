App.controller('DodgersCtrl', function($scope, $http) {
  $http.get('/api/dodgers.json').then(
    function(stories){
      $scope.stories = stories.data;
    }
  );
});