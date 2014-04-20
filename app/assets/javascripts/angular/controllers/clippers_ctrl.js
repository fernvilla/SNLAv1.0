App.controller('ClippersCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/clippers.json').then(
    function(stories){
      $scope.stories = stories.data;
    }
  );
}]);

App.controller('ClippersHomeCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/clippers/official.json').then(
    function(official){
      $scope.official = official.data;
    }
  );
  $http.get('/api/clippers/espn.json').then(
    function(espn){
      $scope.espn = espn.data;
    }
  );
  $http.get('/api/clippers/latimes.json').then(
    function(latimes){
      $scope.latimes = latimes.data;
    }
  );
  $http.get('/api/clippers/ocregister.json').then(
    function(ocregister){
      $scope.ocregister = ocregister.data;
    }
  );
  $http.get('/api/clippers/dailynews.json').then(
    function(dailynews){
      $scope.dailynews = dailynews.data;
    }
  );
  $http.get('/api/clippers/cbs.json').then(
    function(cbs){
      $scope.cbs = cbs.data;
    }
  );
  $http.get('/api/clippers/bleacher_report.json').then(
    function(bleacher_report){
      $scope.bleacher_report = bleacher_report.data;
    }
  );
  $http.get('/api/clippers/fox_sports.json').then(
    function(fox_sports){
      $scope.fox_sports = fox_sports.data;
    }
  );
}]);

App.controller('ClippersTweetsCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/clippers/twitter.json').then(
    function(tweets) {
      $scope.tweets = tweets.data;
    }
  );
}]);

App.controller('ClippersInstagramCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/clippers/instagram.json').then(
    function(instagram) {
      $scope.instagram = instagram.data;
    }
  );
}]);