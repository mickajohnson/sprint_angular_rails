app.controller("createController", ["$scope", "taskFactory", "$location", function($scope, taskFactory, $location){
  $scope.create = function(){
    taskFactory.create($scope.task, function(data){
      if (data.data.error){
        $scope.errors = (data.data.error.errors);
      }
      else {
        $location.url('/')
      }
    })
  }
}])
