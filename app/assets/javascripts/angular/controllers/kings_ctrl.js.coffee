App.controller 'KingsCtrl', ['$scope', 'Kings', ($scope, Kings) ->
  $scope.stories = Kings.query()
]
.factory 'Kings', ['$resource', ($resource) ->
  $resource '/api/kings'
]