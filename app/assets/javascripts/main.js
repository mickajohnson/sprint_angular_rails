var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: "../templates/tasks.html",
    controller: "taskController"
  })
  .when('/new', {
    templateUrl: "../templates/new.html",
    controller: "createController"
  })
  .otherwise({
    redirectTo: '/'
  })
})
