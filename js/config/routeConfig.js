angular.module("icomptvApp").config(function($routeProvider){
	$routeProvider.when("/rcp",{
		templateUrl: "view/rcp.html",
		controller: "printFormController",
	});
	
	$routeProvider.when("/formulario",{
		templateUrl: "view/rcp-form.html",
		controller: "mainController",
		resolve:{
			resColaboradores: function(connApi){
				return connApi.getColaboradores();
			},
			resDiretores: function(connApi){
				return connApi.getDiretores();
			},
			resJustificativas: function(connApi){
				return connApi.getJustificativas();
			}
			,
			resOcorrencias: function(connApi){
				return connApi.getOcorrencias();
			}
		}
	});
	
	$routeProvider.when("/teste",{
		templateUrl: "view/t.html",
		controller: "headerFooterController",
	});
	
	$routeProvider.otherwise({redirectTo: "/main"});

});