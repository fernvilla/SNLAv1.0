App.controller 'ChivasCtrl', ['$scope', 'Chivas', ($scope, Chivas) ->
  $scope.stories = Chivas.query()
]
.factory 'Chivas', ['$resource', ($resource) ->
  $resource '/api/chivas'
]