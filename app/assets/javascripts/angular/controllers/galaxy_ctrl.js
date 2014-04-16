App.controller('GalaxyCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/galaxy.json').then(
    function(stories){
      $scope.stories = stories.data;
    }
  );
}]);

App.controller('GalaxyHomeCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/galaxy/official.json').then(
    function(official){
      $scope.official = official.data;
    }
  );
  $http.get('/api/galaxy/espn.json').then(
    function(espn){
      $scope.espn = espn.data;
    }
  );
  $http.get('/api/galaxy/latimes.json').then(
    function(latimes){
      $scope.latimes = latimes.data;
    }
  );
  $http.get('/api/galaxy/ocregister.json').then(
    function(ocregister){
      $scope.ocregister = ocregister.data;
    }
  );
}]);

App.controller('GalaxyTweetsCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/galaxy/twitter.json').then(
    function(tweets) {
      $scope.tweets = tweets.data;
    }
  );
}]);

App.controller('GalaxyInstagramCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/galaxy/instagram.json').then(
    function(instagram) {
      $scope.instagram = instagram.data;
    }
  );
}]);