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