app.controller('studentDetailsCtrl',["$scope","$routeParams","$location",function($scope,$routeParams,$location){
	console.log("studentDetailsCtrl called",$routeParams,$location);

	var id = $routeParams.param1;
	console.log("id",id);

}]);

