App.controller('DodgersCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/dodgers.json').then(
    function(stories){
      $scope.stories = stories.data;
    }
  );
}]);

App.controller('DodgersTweetsCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/dodgers/twitter.json').then(
    function(tweets) {
      $scope.tweets = tweets.data;
    }
  );
}]);