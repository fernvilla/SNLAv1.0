App.controller 'ClippersCtrl', ['$scope', 'Clippers', ($scope, Clippers) ->
  $scope.stories = Clippers.query()
]
.factory 'Clippers', ['$resource', ($resource) ->
  $resource '/api/clippers'
]