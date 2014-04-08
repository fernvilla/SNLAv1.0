App.controller('TrojansCtrl', function($scope, $http) {
  $http.get('/api/trojans.json').then(
    function(stories){
      $scope.stories = stories.data;
    }
  );
});