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
  $http.get('/api/dodgers/dailynews.json').then(
    function(dailynews){
      $scope.dailynews = dailynews.data;
    }
  );
  $http.get('/api/dodgers/cbs.json').then(
    function(cbs){
      $scope.cbs = cbs.data;
    }
  );
  $http.get('/api/dodgers/bleacher_report.json').then(
    function(bleacher_report){
      $scope.bleacher_report = bleacher_report.data;
    }
  );
  $http.get('/api/dodgers/fox_sports.json').then(
    function(fox_sports){
      $scope.fox_sports = fox_sports.data;
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

App.controller('DodgersTumblrCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/dodgers/tumblr.json').then(
    function(tumblr) {
      $scope.tumblr = tumblr.data;
    }
  );
}]);