App.controller 'LakersCtrl', ['$scope', 'Lakers', ($scope, Lakers) ->
  $scope.stories = Lakers.query()
]
.factory 'Lakers', ['$resource', ($resource) ->
  $resource '/api/lakers'
]