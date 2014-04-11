App.controller('KingsCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/kings.json').then(
    function(stories){
      $scope.stories = stories.data;
    }
  );
  $http.get('/api/kings/twitter.json').then(
    function(tweets) {
      $scope.tweets = tweets.data;
    }
  );
}]);