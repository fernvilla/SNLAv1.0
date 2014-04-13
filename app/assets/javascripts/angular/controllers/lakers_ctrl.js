App.controller('LakersCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/lakers.json').then(
    function(stories){
      $scope.stories = stories.data;
    }
  );
  $scope.addFavorite = function(id) {
    $http.post('/api/favorites.json', {id: id-1, title: $scope.id});
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