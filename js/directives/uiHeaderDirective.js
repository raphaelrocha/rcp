/*angular.module("rcpApp").directive("uiAccordions", function($filter){
	return{
		controller: function($scope, $element, $attrs){
			var accordions = [];
			this.registerAccordion = function(accordion){
				accordions.push(accordion);
			}
			this.closeAll = function(accordion){
				accordions.forEach(function (accordion){
					accordion.isOpened = false;
				});
			}
		}
	};
});*/

angular.module("rcpApp").directive("uiHeader", function($filter){
	return{
		templateUrl: "view/header.html",
		transclude: true,
		//require: "^uiAccordions",
		scope:{
			title: "@"
		},
		link: function(scope, element, attrs, ctrl){
			ctrl.registerAccordion(scope);
			scope.open = function (){
				//ctrl.closeAll();
				scope.isOpened=true;
			}
		}
	};
});