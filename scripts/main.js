var app = angular.module('app', ['rzModule']);

app.controller('BudgetCtrl', function($scope){
	$scope.loadtime = "";
	$scope.budget = 0;
	$scope.connection = "";
	$scope.error = "";
	$scope.step = 1;
	$scope.cssSlider = 0;

	$scope.calculate = function() {
		var connectionSpeed = parseFloat($scope.connection);
		var loadTime = parseFloat($scope.loadtime);

		$scope.step = 2;

		if(isNaN(loadTime) || isNaN(loadTime)) {
			$scope.budget = 0;
			$scope.error = 'Please enter';
		}

		$scope.budget = loadTime * connectionSpeed;
	};
})