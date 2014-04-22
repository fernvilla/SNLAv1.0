App.controller('FavoritesCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/favorites.json').then(
    function(favorites){
      $scope.favorites = favorites.data;
    }
  );
}]);
