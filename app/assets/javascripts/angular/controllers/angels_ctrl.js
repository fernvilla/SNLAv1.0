App.controller('AngelsCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/angels.json').then(
    function(stories){
      $scope.stories = stories.data;
    }
  );
}]);

App.controller('AngelsTweetsCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/angels/twitter.json').then(
    function(tweets) {
      $scope.tweets = tweets.data;
    }
  );
}]);