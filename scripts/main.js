var app = angular.module('app', ['rzModule']);

app.controller('BudgetCtrl', function($scope, $rootScope, $timeout){
	$scope.loadtime = "";
	$scope.budget = 100;
	$scope.connection = "";
	$scope.error = "";
	$scope.step = 1;
	$scope.cssSlider = 0;
	$scope.htmlSlider = 0;
	$scope.jsSlider = 0;
	$scope.imagesSlider = 0;
	$scope.videoSlider = 0;
	$scope.fontsSlider = 0;

	$scope.calculate = function() {
		var connectionSpeed = parseFloat($scope.connection);
		var loadTime = parseFloat($scope.loadtime);

		if(isNaN(connectionSpeed) || isNaN(loadTime)) {
			$scope.error = 'Please enter ';
		}
		else {
			$scope.step = 2;
			$scope.budget = loadTime * connectionSpeed;

			$timeout(function(){
				$rootScope.$broadcast('rzSliderForceRender');
			}, 10)

			
		}
	};
})