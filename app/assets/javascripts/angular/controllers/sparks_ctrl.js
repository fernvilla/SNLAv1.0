App.controller('SparksCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/sparks.json').then(
    function(stories){
      $scope.stories = stories.data;
    }
  );
}]);

App.controller('SparksHomeCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/sparks/espn.json').then(
    function(espn){
      $scope.espn = espn.data;
    }
  );
  $http.get('/api/sparks/latimes.json').then(
    function(latimes){
      $scope.latimes = latimes.data;
    }
  );
}]);


App.controller('SparksTweetsCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/sparks/twitter.json').then(
    function(tweets) {
      $scope.tweets = tweets.data;
    }
  );
}]);

App.controller('SparksInstagramCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/sparks/instagram.json').then(
    function(instagram) {
      $scope.instagram = instagram.data;
    }
  );
}]);