App.controller('GalaxyCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/galaxies.json').then(
    function(stories){
      $scope.stories = stories.data;
    }
  );
}]);

App.controller('GalaxyTweetsCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/galaxies/twitter.json').then(
    function(tweets) {
      $scope.tweets = tweets.data;
    }
  );
}]);