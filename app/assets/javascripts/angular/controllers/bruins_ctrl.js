App.controller('BruinsCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/bruins.json').then(
    function(stories){
      $scope.stories = stories.data;
    }
  );
}]);

App.controller('BruinsHomeCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/bruins/official.json').then(
    function(official){
      $scope.official = official.data;
    }
  );
  $http.get('/api/bruins/espn.json').then(
    function(espn){
      $scope.espn = espn.data;
    }
  );
  $http.get('/api/bruins/latimes.json').then(
    function(latimes){
      $scope.latimes = latimes.data;
    }
  );
  $http.get('/api/bruins/ocregister.json').then(
    function(ocregister){
      $scope.ocregister = ocregister.data;
    }
  );
}]);

App.controller('BruinsTweetsCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/bruins/twitter.json').then(
    function(tweets) {
      $scope.tweets = tweets.data;
    }
  );
}]);

App.controller('BruinsInstagramCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/bruins/instagram.json').then(
    function(instagram) {
      $scope.instagram = instagram.data;
    }
  );
}]);