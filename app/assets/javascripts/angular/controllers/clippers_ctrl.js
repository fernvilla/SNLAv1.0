App.controller('ClippersCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/clippers.json').then(
    function(stories){
      $scope.stories = stories.data;
    }
  );
}]);

App.controller('ClippersTweetsCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/clippers/twitter.json').then(
    function(tweets) {
      $scope.tweets = tweets.data;
    }
  );
}]);