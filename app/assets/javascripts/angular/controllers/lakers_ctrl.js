App.controller('LakersCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/lakers.json').then(
    function(stories){
      $scope.stories = stories.data;

      // for (var i = 0; i < stories.data.length; i++) {
      //   if (stories.data[i].published) { 
      //     var clock = new Date(); 
      //     console.log(stories.data[i].published);
      //     console.log(clock);
      //     break;
      //   }
      // }
    }
  );

  $scope.addFavorite = function(story) {
    var favorite = new Favorite ({title: $scope.title})
  }
}]);

App.controller('LakersHomeCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/lakers.json').then(
    function(stories){
      $scope.havePics = [];
      for (var i = 0; i < stories.data.length; i++) {
        if (stories.data[i].image) {
          $scope.havePics.push(stories.data[i]);
        }
      };
    }
  );
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
  $http.get('/api/lakers/fox_sports.json').then(
    function(fox_sports){
      $scope.fox_sports = fox_sports.data;
    }
  );
  $http.get('/api/lakers/hoops_hype.json').then(
    function(hoops_hype){
      $scope.hoops_hype = hoops_hype.data;
    }
  );
  $http.get('/api/lakers/nba.json').then(
    function(nba){
      $scope.nba = nba.data;
    }
  );
  $http.get('/api/lakers/triple_threat.json').then(
    function(triple_threat){
      $scope.triple_threat = triple_threat.data;
    }
  );
  $http.get('/api/lakers/land_o_lakers.json').then(
    function(land_o_lakers){
      $scope.land_o_lakers = land_o_lakers.data;
    }
  );
  $http.get('/api/lakers/real_gm.json').then(
    function(real_gm){
      $scope.real_gm = real_gm.data;
    }
  );
  $http.get('/api/lakers/rant_sports.json').then(
    function(rant_sports){
      $scope.rant_sports = rant_sports.data;
    }
  );
  $http.get('/api/lakers/ny_times.json').then(
    function(ny_times){
      $scope.ny_times = ny_times.data;
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