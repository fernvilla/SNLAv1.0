App.controller('PrepsCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/preps.json').then(
    function(stories){
      $scope.stories = stories.data;
    }
  );
}]);

App.controller('PrepsHomeCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/preps/latimes.json').then(
    function(latimes){
      $scope.latimes = latimes.data;
    }
  );
  $http.get('/api/preps/espn.json').then(
    function(espn){
      $scope.espn = espn.data;
    }
  );
  $http.get('/api/preps/ocregister.json').then(
    function(ocregister){
      $scope.ocregister = ocregister.data;
    }
  );
  $http.get('/api/preps/dailynews.json').then(
    function(dailynews){
      $scope.dailynews = dailynews.data;
    }
  );
  $http.get('/api/preps/cbs.json').then(
    function(cbs){
      $scope.cbs = cbs.data;
    }
  );
}]);

App.controller('PrepsTweetsCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/preps/twitter.json').then(
    function(tweets) {
      $scope.tweets = tweets.data;
    }
  );
}]);