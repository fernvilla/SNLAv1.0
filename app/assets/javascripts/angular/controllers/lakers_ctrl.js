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
  $http.get('/api/lakers/inside_the_lakers.json').then(
    function(inside_the_lakers){
      $scope.inside_the_lakers = inside_the_lakers.data;
    }
  );
  $http.get('/api/lakers/lakers_nation.json').then(
    function(lakers_nation){
      $scope.lakers_nation = lakers_nation.data;
    }
  );
  $http.get('/api/lakers/forum_blue_and_gold.json').then(
    function(forum_blue_and_gold){
      $scope.forum_blue_and_gold = forum_blue_and_gold.data;
    }
  );
  $http.get('/api/lakers/silver_screen_and_roll.json').then(
    function(silver_screen_and_roll){
      $scope.silver_screen_and_roll = silver_screen_and_roll.data;
    }
  );
  $http.get('/api/lakers/laker_nation.json').then(
    function(laker_nation){
      $scope.laker_nation = laker_nation.data;
    }
  );
  $http.get('/api/lakers/lakerholicz.json').then(
    function(lakerholicz){
      $scope.lakerholicz = lakerholicz.data;
    }
  );
  $http.get('/api/lakers/lake_show_life.json').then(
    function(lake_show_life){
      $scope.lake_show_life = lake_show_life.data;
    }
  );
  $http.get('/api/lakers/la_sports_hub.json').then(
    function(la_sports_hub){
      $scope.la_sports_hub = la_sports_hub.data;
    }
  );
  $http.get('/api/lakers/fansided.json').then(
    function(fansided){
      $scope.fansided = fansided.data;
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

App.controller('LakersTumblrCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/lakers/tumblr.json').then(
    function(tumblr) {
      $scope.tumblr = tumblr.data;
    }
  );
}]);