angular.module("icomptvApp").controller("mainController", function(
	$scope,
	$filter, 
	$http, 
	$location,
	formService,
	resColaboradores,
	resDiretores,
	resJustificativas,
	resOcorrencias,
	appLog
	){

	appLog.log("mainController iniciado");
	$scope.showTable2=false;
	$scope.responsavel = "Marco";
	$scope.colaborador = "Raphael";
	$scope.ocorrencia = "Ausência de batida";
	$scope.justificativa = "Isso mesmo.";

	$scope.horarios = [];

	$scope.ocorrencias = resOcorrencias.data;

	$scope.justificativas = resJustificativas.data;
	$scope.colaboradores = resColaboradores.data;
	$scope.responsaveis = resDiretores.data;

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
				if(formulario.just.ID == 5){
					return true;
				}else{
					return false;
				}
			}else{
				return false;
			}

			/*if(formulario.just.ID == 5){
				return true;
			}else{
				return false;
			}*/
		}else{
			return false;
		}
	};

	$scope.exibeOutrosOcorrencia = function(formulario){
		//console.log(formulario);
		if(formulario){
			if(formulario.ocorr){
				if(formulario.ocorr.ID == 2){
					return true;
				}else{
					return false;
				}
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

	var validaCampoOutrosOcorrencia = function(formulario){
		var validacao = true;
		if($scope.exibeOutrosOcorrencia(formulario)){
    		console.log("exibe");
    		if(formulario.outrosOcorrencia){
	    		if(formulario.outrosOcorrencia.length>0){
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

    	if(formulario){
    		
    		if(formulario.resp &&
				formulario.colab &&
				formulario.ocorr &&
				formulario.just && 
				$scope.horarios.length>0 
				&& validaCampoOutros(formulario) 
				&& validaCampoOutrosOcorrencia(formulario)
				){
	    		validacao = true;
	    	}else{
	    		validacao = false;
	    	}

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

	/*var test = function(){
		$http.get("http://192.168.3.19:8081/Colaboradores").success(function(data, status){
			console.log(data);
		}).error(function(data, status){
			console.log("deu merda");
		});
	};

	test();*/
    
});