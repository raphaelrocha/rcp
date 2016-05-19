angular.module("icomptvApp").controller("printFormController", function(
	$scope,
	$filter, 
	$http, 
	$location,
	formService
	){
	console.log("mainController iniciado.");
	
	$scope.showTable2=false;

	var formulario = formService.getFormulario();
	$scope.horarios = formService.getHorarios();

	$scope.responsavel = formulario.resp.SIGLA+" \\ "+formulario.resp.NOME;
	$scope.colaborador = formulario.colab.SIGLA+" \\ "+formulario.colab.NOME;
	$scope.ocorrencia = formulario.ocorr.DESCRICAO;
	$scope.justificativa = formulario.just.DESCRICAO;

	if(formulario.outros){
		$scope.justificativa = "Outros - " + formulario.outros;
	}
	if(formulario.outrosOcorrencia){
		$scope.ocorrencia = "Outros - " + formulario.outrosOcorrencia;
	}

	if($scope.horarios.length > 4){
		$scope.showTable2=true;
	}

	$scope.addHorario = function(data) {
        $scope.horarios.push(data);
        delete $scope.horario;
    }

	$scope.random = function() {
        return 0.5 - Math.random();
    }

});