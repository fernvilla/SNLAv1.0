App.controller 'DodgersCtrl', ['$scope', 'Dodgers', ($scope, Dodgers) ->
  $scope.stories = Dodgers.query()
]
.factory 'Dodgers', ['$resource', ($resource) ->
  $resource '/api/dodgers'
]