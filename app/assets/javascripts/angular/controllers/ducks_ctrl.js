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
  $http.get('/api/ducks/dailynews.json').then(
    function(dailynews){
      $scope.dailynews = dailynews.data;
    }
  );
  $http.get('/api/ducks/cbs.json').then(
    function(cbs){
      $scope.cbs = cbs.data;
    }
  );
  $http.get('/api/ducks/bleacher_report.json').then(
    function(bleacher_report){
      $scope.bleacher_report = bleacher_report.data;
    }
  );
  $http.get('/api/ducks/fox_sports.json').then(
    function(fox_sports){
      $scope.fox_sports = fox_sports.data;
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

App.controller('DucksTumblrCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/ducks/tumblr.json').then(
    function(tumblr) {
      $scope.tumblr = tumblr.data;
    }
  );
}]);