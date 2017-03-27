app.controller("taskController", ["$scope", "taskFactory", function($scope, taskFactory){
  var getTasks = function(toDo, Doing, Done){
    $scope.toDoTasks = toDo;

    $scope.DoingTasks = Doing;

    $scope.DoneTasks = Done;
    $scope.task = {};
  }
  $scope.index = function(){
    taskFactory.index(getTasks)
  }
  $scope.index();
  $scope.today = new Date()

  $scope.changeStatus = function(id){
    taskFactory.changeStatus(id, function(data){
      $scope.index();
    })
  }

}])
