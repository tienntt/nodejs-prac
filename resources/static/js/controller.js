var app = angular.module('app', []);
 
//app.controller('postcontroller', function($scope, $http, $location) {
app.controller('postController', ($scope, $http, $location) => {
	$scope.submitUserForm = function(){
		var url = "/api/users/save";
		
		var config = {
                headers : {
                    'Accept': 'text/plain'
                }
        }
		var data = {
            firstname: $scope.firstname,
            lastname: $scope.lastname
        };
		
		//$http.post(url, data, config).then(function (response) {
		$http.post(url, data, config).then((response) => {
			var user = response.data;
			$scope.postMsg = "Posted User: "  + user.firstname + " " + user.lastname;
		}, (response) => {
			$scope.postErrMsg = "Error Status: " +  response.statusText;
		});
		
		// reset data fields
		$scope.firstname = "";
		$scope.lastname = "";
	}
});
 
app.controller('getController', ($scope, $http, $location) =>{
	$scope.getAllUsers = function(){
		var url = "/api/users/all";
		
		$http.get(url).then((response) => {
			$scope.users = response.data;
		}, (response) => {
			$scope.getErrMsg = "Error Status: " +  response.statusText;
		});
	}
});