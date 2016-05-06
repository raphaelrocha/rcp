angular.module("icomptvApp").controller("mainController", function(
	$scope,
	$filter, 
	$http, 
	$location,
	formService
	){
	//console.log("mainController iniciado.");
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

	//console.log(resColaboradores.data);
	$scope.showTable2=false;
	$scope.responsavel = "Marco";
	$scope.colaborador = "Raphael";
	$scope.ocorrencia = "Ausência de batida";
	$scope.justificativa = "Isso mesmo.";

	$scope.horarios = [];

	$scope.responsaveis = [
		{sigla:"MAG",nome:"Marco Antônio Giágio"},
		{sigla:"DME",nome:"Daniel do Nasciemento Melo"},
	];

	$scope.ocorrencias = [
		{codigo:1,nome:"Ausência de batida"},
		{codigo:2,nome:"Outros"}
	];

	$scope.justificativas = [
		{codigo:1,nome:"Realização de serviço externo"},
		{codigo:2,nome:"Esquecimento da batida"},
	];

	$scope.colaboradores = [
		{sigla:"RLI",nome:"Raphael Lima da Rocha"},
		{sigla:"EMQ",nome:"Elyseo Malveira"},
	];

	if($scope.horarios.length > 4){
		$scope.showTable2=true;
	}

	$scope.addHorario = function(data) {
		if(data){
			if($scope.horarios.length < 8){
				$scope.horarios.push(data);
			}else{
				alert("Você atingiu o limite máximo de horários que podem ser informados por RCP. Clique em gerar, e depois gere um movo formulário.");
			}			
		}else{
			alert("Informe uma data e uma hora.");
		}
        
        delete $scope.horario;
    }

    $scope.enviar = function(formulario) {
    	
    	formService.addFormulario($scope.formulario);
    	formService.addHorarios($scope.horarios);
        
        $location.path("/rcp");
    }

    $scope.checkHoras = function() {
    	
    	if($scope.horarios.length>0){
    		return true;
    	}else{
    		return false;
    	}
    }

	$scope.random = function() {
        return 0.5 - Math.random();
    }

    $scope.mostraTabela = function() {
        if($scope.horarios.length>0){
        	return true;
        }else{
        	return false;
        }
    }

    
});