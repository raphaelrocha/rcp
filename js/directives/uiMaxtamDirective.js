angular.module("icomptvApp").directive("uiMaxtam", function($filter){
	return{
		require: "ngModel",
		link: function(scope, element, attrs, ctrl){
			var _formatDate = function(date){
				if(date.length>50){
					date = date.substring(0,50);
				}
				console.log(date);
				return date;
			}

			element.bind("keyup", function (){
				ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
				ctrl.$render();	
			});
		}
	};
});