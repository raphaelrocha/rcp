angular.module("rcpApp").controller("printFormController", function(
	$scope,
	$filter, 
	$http, 
	$location,
	formService,
	ngProgressFactory,
	config
	){
	console.log("mainController iniciado.");

	$scope.progressbar = ngProgressFactory.createInstance();
  	$scope.progressbar.setHeight(config.progressbarHeight);
  	$scope.progressbar.setColor(config.progressbarColor);
  	$scope.progressbar.start();
	
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

    $scope.progressbar.complete();

});