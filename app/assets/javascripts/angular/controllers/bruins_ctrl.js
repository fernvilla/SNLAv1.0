App.controller('BruinsCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/bruins.json').then(
    function(stories){
      $scope.stories = stories.data;
    }
  );
}]);

App.controller('BruinsTweetsCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/bruins/twitter.json').then(
    function(tweets) {
      $scope.tweets = tweets.data;
    }
  );
}]);