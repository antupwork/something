var userInfoModule=angular.module('UserInfoModule',[]);
	userInfoModule.controller('userCtrl',['$scope',function($scope){	//告诉angular注入$scope
			$scope.userInfo={
				email:'antupmain@gmail.com',
				password:'1234',
				autoLogin:true
			};
			$scope.getFormData=function(){
				console.log($scope.userInfo)
			};
			$scope.setFormData=function(){
				$scope.userInfo={
					email:'12223@gmail.com',
					password:'1233334',
					autoLogin:false					
				};
			};
			$scope.resetFormData=function () {
				$scope.userInfo={
					email:'antupmain@gmail.com',
					password:'1234',
					autoLogin:true
				};			
			}
	}]);