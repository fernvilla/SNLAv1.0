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