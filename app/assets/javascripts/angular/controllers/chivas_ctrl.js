App.controller('ChivasCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/chivas.json').then(
    function(stories){
      $scope.stories = stories.data;
    }
  );
}]);

App.controller('ChivasHomeCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/chivas/official.json').then(
    function(official){
      $scope.official = official.data;
    }
  );
  $http.get('/api/chivas/espn.json').then(
    function(espn){
      $scope.espn = espn.data;
    }
  );
  $http.get('/api/chivas/latimes.json').then(
    function(latimes){
      $scope.latimes = latimes.data;
    }
  );
  $http.get('/api/chivas/ocregister.json').then(
    function(ocregister){
      $scope.ocregister = ocregister.data;
    }
  );
}]);

App.controller('ChivasTweetsCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/chivas/twitter.json').then(
    function(tweets) {
      $scope.tweets = tweets.data;
    }
  );
}]);

App.controller('ChivasInstagramCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/chivas/instagram.json').then(
    function(instagram) {
      $scope.instagram = instagram.data;
    }
  );
}]);