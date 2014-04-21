App.controller('TrojansCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/trojans.json').then(
    function(stories){
      $scope.stories = stories.data;
    }
  );
}]);

App.controller('TrojansHomeCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/trojans/official.json').then(
    function(official){
      $scope.official = official.data;
    }
  );
  $http.get('/api/trojans/espn.json').then(
    function(espn){
      $scope.espn = espn.data;
    }
  );
  $http.get('/api/trojans/latimes.json').then(
    function(latimes){
      $scope.latimes = latimes.data;
    }
  );
  $http.get('/api/trojans/ocregister.json').then(
    function(ocregister){
      $scope.ocregister = ocregister.data;
    }
  );
  $http.get('/api/trojans/bleacher_report.json').then(
    function(bleacher_report){
      $scope.bleacher_report = bleacher_report.data;
    }
  );
  $http.get('/api/trojans/fox_sports.json').then(
    function(fox_sports){
      $scope.fox_sports = fox_sports.data;
    }
  );
  $http.get('/api/trojans/inside_usc.json').then(
    function(inside_usc){
      $scope.inside_usc = inside_usc.data;
    }
  );
  $http.get('/api/trojans/conquest_chronicles.json').then(
    function(conquest_chronicles){
      $scope.conquest_chronicles = conquest_chronicles.data;
    }
  );
  $http.get('/api/trojans/scout.json').then(
    function(scout){
      $scope.scout = scout.data;
    }
  );
  $http.get('/api/trojans/rivals.json').then(
    function(rivals){
      $scope.rivals = rivals.data;
    }
  );
}]);

App.controller('TrojansTweetsCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/trojans/twitter.json').then(
    function(tweets) {
      $scope.tweets = tweets.data;
    }
  );
}]);

App.controller('TrojansInstagramCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/trojans/instagram.json').then(
    function(instagram) {
      $scope.instagram = instagram.data;
    }
  );
}]);

App.controller('TrojansYoutubeCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/trojans/youtube.json').then(
    function(youtube) {
      $scope.youtube = youtube.data;
    }
  );
}]);