var app = angular.module('app', []);

app.controller('BudgetCtrl', function($scope){
	$scope.loadtime = "";
	$scope.budget = 0;
	$scope.connection = "";
	$scope.error = "";
	$scope.step = 1;

	$scope.calculate = function() {
		var connectionSpeed = parseFloat($scope.connection);
		var loadTime = parseFloat($scope.loadtime);

		$scope.step = 2;

		if(isNaN(connectionSpeed) || isNaN(loadTime)) {
			$scope.budget = 0;
			$scope.error = 'Please enter';
		} else {
			$scope.budget = loadTime * connectionSpeed;
		}
	};
})