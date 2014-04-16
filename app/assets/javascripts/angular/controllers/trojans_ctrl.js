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