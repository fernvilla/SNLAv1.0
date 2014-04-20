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
  $http.get('/api/chivas/bleacher_report.json').then(
    function(bleacher_report){
      $scope.bleacher_report = bleacher_report.data;
    }
  );
  $http.get('/api/chivas/the_goat_parade.json').then(
    function(the_goat_parade){
      $scope.the_goat_parade = the_goat_parade.data;
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