app.config(["$routeProvider",function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "../view/view.html",
        controller : "StudentInfoCtrl"
    })
    .when("/insert", {
        templateUrl : "../view/insert.html",
        controller : "insertStudentDataCtrl"
    })
    .when("/studentDetails/:param1", {
        templateUrl : "../view/viewOne.html",
        controller : "studentDetailsCtrl"
    }).otherwise({
            redirectTo: '/'
        });
}]);