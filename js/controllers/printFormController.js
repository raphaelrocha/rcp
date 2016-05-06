angular.module("icomptvApp").controller("printFormController", function(
	$scope,
	$filter, 
	$http, 
	$location,
	formService
	){
	console.log("mainController iniciado.");
	/*console.log(serialGenerator.generate());
	$scope.app = "Icomp.tv";
	//$scope.canais = [];
	//$scope.categorias = [];
	$scope.canais = canais.data;
	$scope.categorias = categorias.data;
	$scope.canal = {
		data: 1355284800000 
	};*/
	/*$scope.canais = [
		{nome: "Ufam", telefone: "1234-5678", cor: "blue", data: new Date()},
		{nome: "Uninorte", telefone: "8765-4321", cor: "green", data: new Date()},
		{nome: "Unip", telefone: "1212-1212", cor: "red", data: new Date()}
	];
	$scope.categorias = [
		{nome: "Infatil", faixa: "0", tipo:"Livre", valor:1},
		{nome: "Jovem", faixa: "12", tipo:"Restrito", valor:5},
		{nome: "Adulto", faixa: "18", tipo:"Restrito", valor:10}
	];*/

	/*var carregarCanais = function(){
		canaisApi.getCanais().success(function(data, status){
			console.log(data);
			$scope.canais = data;
		}).error(function(data, status){
			$scope.errorMessage = "erro de conexão: "+ status;
		});
	};
	var carregarCategorias = function(){
		categoriasApi.getCategorias().success(function(data, status){
			console.log(data);
			$scope.categorias = data;
		}).error(function(data, status){
			$scope.errorMessage = "erro de conexão: "+ status;
		});
	};
	$scope.addCanal = function(canal){
		canal.serial = serialGenerator.generate();
		$scope.canais.push(canal);
		/*$canaisApi.addCanal(canal).success(function(data){
			delete $scope.canal; //quebra o ciclo q n atualiza enquanto digita
			$scope.canalForm.$setPristine();
			carregarCanais();
		});*
		delete $scope.canal; //quebra o ciclo q n atualiza enquanto digita
		$scope.canalForm.$setPristine();
		$location.path("/canais");
	};
	$scope.isCanalSelecionado = function(canais){
		var isCanalSelecionado = canais.some(function(canal){
			return canal.selecionado;
		});
		return isCanalSelecionado;
	};
	$scope.delCanal = function(canais){
		$scope.canais = canais.filter(function(canal){
			if(!canal.selecionado){
				return canal;
			}
		});
	};
	$scope.ordenarPor = function(campo){
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};*/

	//carregarCanais();
	//carregarCategorias();

	/*$scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
		console.log("foi exeutado la no index");
		//you also get the actual event object
		//do stuff, execute functions -- whatever...
	});*/
	$scope.showTable2=false;

	var formulario = formService.getFormulario();
	$scope.horarios = formService.getHorarios();

	$scope.responsavel = formulario.resp.SIGLA+" \\ "+formulario.resp.NOME;
	$scope.colaborador = formulario.colab.SIGLA+" \\ "+formulario.colab.NOME;
	$scope.ocorrencia = formulario.ocorr.nome;
	$scope.justificativa = formulario.just.nome;

	if(formulario.outros){
		$scope.justificativa = "Outros - " + formulario.outros;
	}

	/*$scope.horarios = [
		{data:"01/03/2016",hora:"13:00"},
		{data:"01/03/2016",hora:"14:00"},
		{data:"02/03/2016",hora:"13:00"},
		{data:"02/03/2016",hora:"14:00"},
		{data:"03/03/2016",hora:"13:00"},
		{data:"03/03/2016",hora:"14:00"}
	];*/

	

	

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