App.controller 'TrojansCtrl', ['$scope', 'Trojans', ($scope, Trojans) ->
  $scope.stories = Trojans.query()
]
.factory 'Trojans', ['$resource', ($resource) ->
  $resource '/api/trojans'
]