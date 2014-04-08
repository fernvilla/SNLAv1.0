App.controller 'SparksCtrl', ['$scope', 'Sparks', ($scope, Sparks) ->
  $scope.stories = Sparks.query()
]
.factory 'Sparks', ['$resource', ($resource) ->
  $resource '/api/sparks'
]