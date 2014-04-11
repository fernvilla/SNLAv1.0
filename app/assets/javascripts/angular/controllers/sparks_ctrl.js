App.controller('SparksCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/sparks.json').then(
    function(stories){
      $scope.stories = stories.data;
    }
  );
  $http.get('/api/sparks/twitter.json').then(
    function(tweets) {
      $scope.tweets = tweets.data;
    }
  );
}]);