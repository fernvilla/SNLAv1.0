App.controller('DodgersCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/dodgers.json').then(
    function(stories){
      $scope.stories = stories.data;
    }
  );
}]);

App.controller('DodgersHomeCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/dodgers/official.json').then(
    function(official){
      $scope.official = official.data;
    }
  );
  $http.get('/api/dodgers/espn.json').then(
    function(espn){
      $scope.espn = espn.data;
    }
  );
  $http.get('/api/dodgers/latimes.json').then(
    function(latimes){
      $scope.latimes = latimes.data;
    }
  );
  $http.get('/api/dodgers/ocregister.json').then(
    function(ocregister){
      $scope.ocregister = ocregister.data;
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

App.controller('DodgersInstagramCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/dodgers/instagram.json').then(
    function(instagram) {
      $scope.instagram = instagram.data;
    }
  );
}]);