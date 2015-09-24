var app = angular.module('app', []);

app.controller('BudgetCtrl', function($scope){
	$scope.loadtime = "";
	$scope.budget = 0;
	$scope.connection = "";
	$scope.error = "";

	$scope.calculate = function() {
		var connectionSpeed = parseFloat($scope.connection);
		var loadTime = parseFloat($scope.loadtime);

		if(isNaN(loadTime) || isNaN(loadTime)) {
			$scope.budget = 0;
			$scope.error 
		}

		$scope.budget = loadTime * connectionSpeed;
	};
})