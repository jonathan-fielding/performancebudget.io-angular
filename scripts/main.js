var app = angular.module('app', []);

app.controller('BudgetCtrl', function($scope){
	$scope.loadtime = "";
	$scope.budget = 0;
	$scope.connection = 0;

	$scope.calculate = function() {
		var connectionSpeed = parseFloat($scope.connection);
		var loadTime = parseFloat($scope.loadtime);

		$scope.budget = loadTime * connectionSpeed;
	};
})