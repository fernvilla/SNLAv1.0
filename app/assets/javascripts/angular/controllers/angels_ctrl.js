App.controller('AngelsCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/angels.json').then(
    function(stories){
      $scope.stories = stories.data;
    }
  );
}]);

App.controller('AngelsHomeCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/angels/official.json').then(
    function(official){
      $scope.official = official.data;
    }
  );
  $http.get('/api/angels/espn.json').then(
    function(espn){
      $scope.espn = espn.data;
    }
  );
  $http.get('/api/angels/latimes.json').then(
    function(latimes){
      $scope.latimes = latimes.data;
    }
  );
  $http.get('/api/angels/ocregister.json').then(
    function(ocregister){
      $scope.ocregister = ocregister.data;
    }
  );
  $http.get('/api/angels/dailynews.json').then(
    function(dailynews){
      $scope.dailynews = dailynews.data;
    }
  );
  $http.get('/api/angels/cbs.json').then(
    function(cbs){
      $scope.cbs = cbs.data;
    }
  );
  $http.get('/api/angels/bleacher_report.json').then(
    function(bleacher_report){
      $scope.bleacher_report = bleacher_report.data;
    }
  );
  $http.get('/api/angels/fox_sports.json').then(
    function(fox_sports){
      $scope.fox_sports = fox_sports.data;
    }
  );
}]);

App.controller('AngelsTweetsCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/angels/twitter.json').then(
    function(tweets) {
      $scope.tweets = tweets.data;
    }
  );
}]);

App.controller('AngelsInstagramCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/angels/instagram.json').then(
    function(instagram) {
      $scope.instagram = instagram.data;
    }
  );
}]);

App.controller('AngelsTumblrCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/angels/tumblr.json').then(
    function(tumblr) {
      $scope.tumblr = tumblr.data;
    }
  );
}]);