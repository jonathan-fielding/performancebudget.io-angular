var AVERAGE_PERCENTS = {
	css: 3.25,
	html: 2.5,
	js: 16.5,
	images: 63,
	video: 9.75,
	fonts: 5 
};

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

			setDefaults($scope.budget);

			$timeout(function(){
				$rootScope.$broadcast('rzSliderForceRender');
			}, 10)

			
		}
	};

	$scope.finish = function() {
		$scope.step = 3;
	};

	function setDefaults (budget) {
		$scope.cssSlider = Math.round((budget * AVERAGE_PERCENTS.css)) / 100;
		$scope.htmlSlider = Math.round((budget * AVERAGE_PERCENTS.html)) / 100;
		$scope.jsSlider = Math.round((budget * AVERAGE_PERCENTS.js)) / 100;
		$scope.imagesSlider = Math.round((budget * AVERAGE_PERCENTS.images)) / 100;
		$scope.videoSlider = Math.round((budget * AVERAGE_PERCENTS.video)) / 100;
		$scope.fontsSlider = Math.round((budget * AVERAGE_PERCENTS.fonts)) / 100;
	}
});

app.directive('numberMask', function() {
    return {
        restrict: 'A',
        link: function($scope, element, attrs) {
            element.on('keydown', function(e){
            	var code = (e.which) ? e.which : e.keyCode;
			    
			    if (code > 31 && (code < 48 || code > 57)) {
			      e.preventDefault();
			    }

            });
        }
    }
});