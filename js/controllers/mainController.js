angular.module("icomptvApp").controller("mainController", function(
	$scope,
	$filter, 
	$http, 
	$location,
	formService,
	resColaboradores
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
		{SIGLA:"MAG",NOME:"Marco Antônio Giágio"},
		{SIGLA:"DME",NOME:"Daniel do Nascimento Melo"},
	];

	$scope.ocorrencias = [
		{codigo:1,nome:"Ausência de batida"},
		{codigo:2,nome:"Outros"}
	];

	$scope.justificativas = [
		{codigo:1,nome:"Realização de serviço externo"},
		{codigo:2,nome:"Esquecimento da batida"},
		{codigo:3,nome:"Viagem a trabalho"},
		{codigo:4,nome:"Treinamento"},
		{codigo:5,nome:"Atestado Médico"},
		{codigo:6,nome:"Acompanhamento de Familiar ao Médico"},
		{codigo:7,nome:"Erro na Digital"},
		{codigo:8,nome:"REP Inoperante"},
		{codigo:9,nome:"Outros - (Descrever no campo abaixo)"}
	];

	$scope.colaboradores = [
		{sigla:"RLI",nome:"Raphael Lima da Rocha"},
		{sigla:"EMQ",nome:"Elyseo Malveira"},
	];

	$scope.colaboradores = resColaboradores.data;

	if($scope.horarios.length > 4){
		$scope.showTable2=true;
	}

	$scope.addHorario = function(data) {
		if(data){
			if($scope.horarios.length < 8){
				if(data.data && data.hora){
					if(data.data.length <10 || data.hora.length<5){
						alert("Uma data e uma hora devem ser informadas.");
					}else{
						$scope.horarios.push(data);
						delete $scope.horario;
					}
				}else{
					alert("Uma data e uma hora devem ser informadas.");
				}
			}else{
				alert("Você atingiu o limite máximo de horários que podem ser informados por RCP. Clique em gerar, e depois gere um movo formulário.");
			}

		}else{
			alert("Informe uma data e uma hora.");
		}
    }

    $scope.enviar = function(formulario) {
    	
    	formService.addFormulario($scope.formulario);
    	formService.addHorarios($scope.horarios);
        
        $location.path("/rcp");
    };

    $scope.exibeOutros = function(formulario){
		//console.log(formulario);
		if(formulario){
			if(formulario.just){
				if(formulario.just.codigo == 9){
					return true;
				}else{
					return false;
				}
			}else{
				return false;
			}

			if(formulario.just.codigo == 9){
				return true;
			}else{
				return false;
			}
		}else{
			return false;
		}
	};

	var validaCampoOutros = function(formulario){
		var validacao = true;
		if($scope.exibeOutros(formulario)){
    		console.log("exibe");
    		if(formulario.outros){
	    		if(formulario.outros.length>0){
					validacao = true;
	    		}else{
	    			validacao = false;
	    		}
	    	}else{
	    		validacao = false;
	    	}
    	}
    	return validacao;
	}

    $scope.checkHoras = function(formulario) {
    	var validacao = false;

    	/*if($scope.horarios.length>0){
    		return true;
    	}else{
    		return false;
    	}*/

    	if(formulario){
    		
    		if(formulario.resp && formulario.colab && formulario.ocorr && formulario.just && $scope.horarios.length>0 && validaCampoOutros(formulario)){
	    		validacao = true;
	    	}else{
	    		validacao = false;
	    	}

	    	


	    	/*if(formulario.colab){
	    		validacao = true;
	    	}else{
	    		validacao = false;
	    	}

	    	if(formulario.ocorr){
	    		validacao = true;
	    	}else{
	    		validacao = false;
	    	}

	    	if(formulario.just){
	    		validacao = true;
	    	}else{
	    		validacao = false;
	    	}

	    	if($scope.exibeOutros()){
	    		if(formulario.outros){
		    		if(formulario.outros.length>0){
						validacao = true;
		    		}else{
		    			validacao = false;
		    		}
		    		console.log(validacao);
		    	}else{
		    		validacao = false;
		    	}
	    	}
			

	    	if($scope.horarios.length>0 && validacao == true){
	    		validacao = true;
	    	}else{
	    		validacao = false;	
	    	}*/
    	}
    	else{
    		validacao = false;
    	}
    	   
    	return validacao;
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

    $scope.isLinhaSelecionada = function(horarios){
		var isLinhaSelecionada = horarios.some(function(horario){
			return horario.selecionado;
		});
		return isLinhaSelecionada;
	}

	$scope.deletaHorario = function(horarios){
		$scope.horarios = horarios.filter(function(horario){
			if(!horario.selecionado){
				return horario;
			}
		});
	}

	


    
});