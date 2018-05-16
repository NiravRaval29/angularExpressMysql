app.controller("StudentInfoCtrl",["$scope","$http",function($scope,$http){
	$scope.homePageTitle = "Student's Information";
	console.log("StudentInfoCtrl called ",$scope.homePageTitle);
/*
	$http.get("http://localhost:3000/space/1").then(function(response){
		console.log("response",response);
	})*/

	$http.get("http://localhost:3000/view").then(function(response){
			console.log("response view",response);
			$scope.studentList = response.data.data;
		})	

	$scope.add = function(){
		$http.post("http://localhost:3000/add").then(function(response){
			console.log("response add",response);
		})
	}

	$scope.view = function(){
		
	}

	$scope.delete = function(){
		$http.post("http://localhost:3000/delete").then(function(response){
			console.log("response delete",response);
		})	
	}

	$scope.update = function(){
		$http.get("http://localhost:3000/update").then(function(response){
			console.log("response update",response);
		})	
	}
}]);