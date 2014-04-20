App.controller('KingsCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/kings.json').then(
    function(stories){
      $scope.stories = stories.data;
    }
  );
}]);

App.controller('KingsHomeCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/kings/official.json').then(
    function(official){
      $scope.official = official.data;
    }
  );
  $http.get('/api/kings/espn.json').then(
    function(espn){
      $scope.espn = espn.data;
    }
  );
  $http.get('/api/kings/latimes.json').then(
    function(latimes){
      $scope.latimes = latimes.data;
    }
  );
  $http.get('/api/kings/ocregister.json').then(
    function(ocregister){
      $scope.ocregister = ocregister.data;
    }
  );
  $http.get('/api/kings/dailynews.json').then(
    function(dailynews){
      $scope.dailynews = dailynews.data;
    }
  );
  $http.get('/api/kings/cbs.json').then(
    function(cbs){
      $scope.cbs = cbs.data;
    }
  );
  $http.get('/api/kings/bleacher_report.json').then(
    function(bleacher_report){
      $scope.bleacher_report = bleacher_report.data;
    }
  );
  $http.get('/api/kings/fox_sports.json').then(
    function(fox_sports){
      $scope.fox_sports = fox_sports.data;
    }
  );
}]);

App.controller('KingsTweetsCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/kings/twitter.json').then(
    function(tweets) {
      $scope.tweets = tweets.data;
    }
  );
}]);

App.controller('KingsInstagramCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/kings/instagram.json').then(
    function(instagram) {
      $scope.instagram = instagram.data;
    }
  );
}]);