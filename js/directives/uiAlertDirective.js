angular.module("icomptvApp").directive("uiAlert", function(){
	return{
		templateUrl: "view/alert.html",
		replace: true,
		restric: "AE",
		scope: {
			title: "@title",//passa por parametro.
			//errorMessage: "=message"//mapeia o atributo.
		},
		transclude: true
	};
});