App.controller('GalaxyCtrl', function($scope, $http) {
  $http.get('/api/galaxies.json').then(
    function(stories){
      $scope.stories = stories.data;
    }
  );
});