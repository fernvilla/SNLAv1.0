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