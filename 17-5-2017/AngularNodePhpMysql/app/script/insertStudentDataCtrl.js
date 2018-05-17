app.controller("insertStudentDataCtrl",["$scope","$http",function($scope,$http){
	console.log("insertStudentDataCtrl called");
	$scope.sex = "male";

	$scope.insertData = function(name,rollno,phoneNo,sex,class1){

		console.log(name,rollno,phoneNo,sex,class1,$scope.sex);
		if(name == undefined || phoneNo == undefined || sex == undefined || class1 == undefined ){
			console.log("called if")
		}else{
			console.log("called else")
		}
		return false;
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

