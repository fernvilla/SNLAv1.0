App.controller('PrepsCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/preps.json').then(
    function(stories){
      $scope.stories = stories.data;
    }
  );
}]);

App.controller('PrepsTweetsCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/preps/twitter.json').then(
    function(tweets) {
      $scope.tweets = tweets.data;
    }
  );
}]);