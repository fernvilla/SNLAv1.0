App.controller('ChivasCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/chivas.json').then(
    function(stories){
      $scope.stories = stories.data;
    }
  );
}]);

App.controller('ChivasTweetsCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/chivas/twitter.json').then(
    function(tweets) {
      $scope.tweets = tweets.data;
    }
  );
}]);