app.factory("taskFactory", ["$http", function($http){
  var factory = {};
  var tasks = [];
  factory.create = function(task, callback){
    $http.post("/tasks", task).then(function(data){
      callback(data)
    })
  }
  factory.index = function(callback){
    $http.get("/tasks").then(function(data){
      tasks = data.data
      var toDo = [];
      var Doing = [];
      var Done = [];
      for(var i = 0; i < tasks.length; i++){
        if(tasks[i].status == 'to_do'){
          toDo.push(tasks[i])
        }
        else if(tasks[i].status == 'doing'){
          Doing.push(tasks[i])
      }
        else if(tasks[i].status == 'done'){
          Done.push(tasks[i])
      }
    }
      callback(toDo, Doing, Done)
    })
  }
  factory.changeStatus = function(id, callback){
    $http.patch("/tasks/"+id).then(function(data){
      callback(data)
    })
  }
  return factory;
}])
