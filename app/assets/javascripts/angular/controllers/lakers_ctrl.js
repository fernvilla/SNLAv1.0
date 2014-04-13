App.controller('LakersCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/lakers.json').then(
    function(stories){
      $scope.stories = stories.data;
    }
  );
  $scope.addFavorite = function(id) {
    console.log($scope.stories[id-1]);
  }
}]);

App.controller('LakersTweetsCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/lakers/twitter.json').then(
    function(tweets) {
      $scope.tweets = tweets.data;
    }
  );
}]);