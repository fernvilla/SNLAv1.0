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
  $http.get('/api/galaxy/bleacher_report.json').then(
    function(bleacher_report){
      $scope.bleacher_report = bleacher_report.data;
    }
  );
  $http.get('/api/galaxy/lag_confidential.json').then(
    function(lag_confidential){
      $scope.lag_confidential = lag_confidential.data;
    }
  );
  $http.get('/api/galaxy/corner_of_the_galaxy.json').then(
    function(corner_of_the_galaxy){
      $scope.corner_of_the_galaxy = corner_of_the_galaxy.data;
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