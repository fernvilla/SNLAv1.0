App.controller 'BruinsCtrl', ['$scope', 'Bruins', ($scope, Bruins) ->
  $scope.stories = Bruins.query()
]
.factory 'Bruins', ['$resource', ($resource) ->
  $resource '/api/bruins'
]