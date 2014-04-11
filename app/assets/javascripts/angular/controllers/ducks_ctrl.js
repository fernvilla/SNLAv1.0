App.controller('DucksCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/ducks.json').then(
    function(stories){
      $scope.stories = stories.data;
    }
  );
  $http.get('/api/ducks/twitter.json').then(
    function(tweets) {
      $scope.tweets = tweets.data;
    }
  );
}]);