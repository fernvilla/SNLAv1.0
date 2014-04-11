App.controller('TrojansCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/trojans.json').then(
    function(stories){
      $scope.stories = stories.data;
    }
  );
  $http.get('/api/trojans/twitter.json').then(
    function(tweets) {
      $scope.tweets = tweets.data;
    }
  );
}]);