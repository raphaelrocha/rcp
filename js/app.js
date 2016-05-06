angular.module("icomptvApp",["ngMessages", "ngRoute", "ngStorage"]);

/*
Esta diretiva garante o funcionamento dos sliders após o carregamento com o ng-repeat
*/
angular.module("icomptvApp").directive('onFinishRender', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function () {
                    scope.$emit('ngRepeatFinished');
                    console.log("rodando o bxslider");
                    $('.bxslider').bxSlider({
                      minSlides: 2,
                      maxSlides: 5,
                      slideWidth: 207,
                      slideMargin: 15,
                    });
                });
            }
        }
    }
});

angular.module("icomptvApp").filter('trustAsResourceUrl', ['$sce', function($sce) {
    return function(val) {
        return $sce.trustAsResourceUrl(val);
    };
}]);