app.controller("insertStudentDataCtrl",["$scope","$http",function($scope,$http){
	console.log("insertStudentDataCtrl called");

	$scope.insertData = function(name,rollno,phoneNo){
		console.log(name,rollno,phoneNo);
		var data = {
			"name" : name,
			"rollno" : rollno,
			"phoneNo" : phoneNo
		}
		console.log("data",data);
		$http.post("/add",data).then(function(response){
			console.log("response",response);

			if(response.data.data.affectedRows > 0){
				
			}
		});
	}
}]);