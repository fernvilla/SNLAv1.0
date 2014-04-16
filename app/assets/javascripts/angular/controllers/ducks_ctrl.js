App.controller('DucksCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/ducks.json').then(
    function(stories){
      $scope.stories = stories.data;
    }
  );
}]);

App.controller('DucksHomeCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/ducks/official.json').then(
    function(official){
      $scope.official = official.data;
    }
  );
  $http.get('/api/ducks/espn.json').then(
    function(espn){
      $scope.espn = espn.data;
    }
  );
  $http.get('/api/ducks/latimes.json').then(
    function(latimes){
      $scope.latimes = latimes.data;
    }
  );
  $http.get('/api/ducks/ocregister.json').then(
    function(ocregister){
      $scope.ocregister = ocregister.data;
    }
  );
}]);

App.controller('DucksTweetsCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/ducks/twitter.json').then(
    function(tweets) {
      $scope.tweets = tweets.data;
    }
  );
}]);

App.controller('DucksInstagramCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/ducks/instagram.json').then(
    function(instagram) {
      $scope.instagram = instagram.data;
    }
  );
}]);