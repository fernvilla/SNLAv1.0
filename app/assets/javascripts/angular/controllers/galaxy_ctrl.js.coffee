App.controller 'GalaxyCtrl', ['$scope', 'Galaxy', ($scope, Galaxy) ->
  $scope.stories = Galaxy.query()
]
.factory 'Galaxy', ['$resource', ($resource) ->
  $resource '/api/galaxies'
]