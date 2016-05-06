angular.module("icomptvApp").directive("uiHour", function($filter){
	return{
		require: "ngModel",
		link: function(scope, element, attrs, ctrl){
			var _formatDate = function(date){
				date = date.replace(/[^0-9]+/g,"");
				if(date.length>2){
					date = date.substring(0,2) + ":" + date.substring(2,4);
				}
				return date;
			}

			element.bind("keyup", function (){
				ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
				ctrl.$render();	
			});

			ctrl.$parsers.push(function(value){
				if(value.length === 5){
					return value;
				}
			});

			ctrl.$formatters.push(function(value){
				return $filter("date")(value, "dd/MM/yyyy");
			});
		}
	};
});