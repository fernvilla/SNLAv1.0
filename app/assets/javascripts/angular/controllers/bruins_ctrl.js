App.controller('BruinsCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/bruins.json').then(
    function(stories){
      $scope.stories = stories.data;
    }
  );
}]);

App.controller('BruinsHomeCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/bruins/official.json').then(
    function(official){
      $scope.official = official.data;
    }
  );
  $http.get('/api/bruins/espn.json').then(
    function(espn){
      $scope.espn = espn.data;
    }
  );
  $http.get('/api/bruins/latimes.json').then(
    function(latimes){
      $scope.latimes = latimes.data;
    }
  );
  $http.get('/api/bruins/ocregister.json').then(
    function(ocregister){
      $scope.ocregister = ocregister.data;
    }
  );
  $http.get('/api/bruins/bleacher_report.json').then(
    function(bleacher_report){
      $scope.bleacher_report = bleacher_report.data;
    }
  );
  $http.get('/api/bruins/fox_sports.json').then(
    function(fox_sports){
      $scope.fox_sports = fox_sports.data;
    }
  );
  $http.get('/api/bruins/inside_ucla.json').then(
    function(inside_ucla){
      $scope.inside_ucla = inside_ucla.data;
    }
  );
  $http.get('/api/bruins/bruins_nation.json').then(
    function(bruins_nation){
      $scope.bruins_nation = bruins_nation.data;
    }
  );
  $http.get('/api/bruins/punting_is_winning.json').then(
    function(punting_is_winning){
      $scope.punting_is_winning = punting_is_winning.data;
    }
  );
  $http.get('/api/bruins/go_joe_bruin.json').then(
    function(go_joe_bruin){
      $scope.go_joe_bruin = go_joe_bruin.data;
    }
  );
  $http.get('/api/bruins/bruin_247.json').then(
    function(bruin_247){
      $scope.bruin_247 = bruin_247.data;
    }
  );
  $http.get('/api/bruins/rivals.json').then(
    function(rivals){
      $scope.rivals = rivals.data;
    }
  );

  $http.get('/api/bruins/scout.json').then(
    function(scout){
      $scope.scout = scout.data;
    }
  );
}]);

App.controller('BruinsTweetsCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/bruins/twitter.json').then(
    function(tweets) {
      $scope.tweets = tweets.data;
    }
  );
}]);

App.controller('BruinsInstagramCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/bruins/instagram.json').then(
    function(instagram) {
      $scope.instagram = instagram.data;
    }
  );
}]);