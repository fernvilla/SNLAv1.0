App.controller('LakersCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/lakers.json').then(
    function(stories){
      $scope.stories = stories.data;
    }
  );
}]);

App.controller('LakersHomeCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/lakers/official.json').then(
    function(official){
      $scope.official = official.data;
    }
  );
  $http.get('/api/lakers/espn.json').then(
    function(espn){
      $scope.espn = espn.data;
    }
  );
  $http.get('/api/lakers/latimes.json').then(
    function(latimes){
      $scope.latimes = latimes.data;
    }
  );
  $http.get('/api/lakers/ocregister.json').then(
    function(ocregister){
      $scope.ocregister = ocregister.data;
    }
  );
  $http.get('/api/lakers/dailynews.json').then(
    function(dailynews){
      $scope.dailynews = dailynews.data;
    }
  );
  $http.get('/api/lakers/cbs.json').then(
    function(cbs){
      $scope.cbs = cbs.data;
    }
  );
  $http.get('/api/lakers/bleacher_report.json').then(
    function(bleacher_report){
      $scope.bleacher_report = bleacher_report.data;
    }
  );
}]);

App.controller('LakersTweetsCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/lakers/twitter.json').then(
    function(tweets) {
      $scope.tweets = tweets.data;
    }
  );
}]);

App.controller('LakersInstagramCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/lakers/instagram.json').then(
    function(instagram) {
      $scope.instagram = instagram.data;
    }
  );
}]);