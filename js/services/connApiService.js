angular.module("rcpApp").factory("connApi", function($http, config, $localStorage){
	var _getColaboradores = function(){
		//return $http.get(config.baseUrl+"/mocs/ws.php");
		//return $http.get(config.baseUrl+"/CertiService/Colaboradores");
		//return $http.get(config.baseUrl+"/tqeguyd67737691gtdxs7dasytf3732");
		return $http.get(config.baseUrl+"/api/colaboradores");
		//return $http.get(config.baseUrl+"/api/v1/videos");
	};
	var _getDiretores = function(){
		return $http.get(config.baseUrl+"/api/diretores");
	};
	var _getJustificativas = function(){
		return $http.get(config.baseUrl+"/api/justificativas");
	};
	var _getOcorrencias = function(){
		return $http.get(config.baseUrl+"/api/ocorrencias");
	};

	function changeUser(user) {
        angular.extend(currentUser, user);
    }

    function urlBase64Decode(str) {
        var output = str.replace('-', '+').replace('_', '/');
        switch (output.length % 4) {
            case 0:
                break;
            case 2:
                output += '==';
                break;
            case 3:
                output += '=';
                break;
            default:
                throw 'Illegal base64url string!';
        }
        return window.atob(output);
    }

    function getUserFromToken() {
        var token = $localStorage.token;
        var user = {};
        if (typeof token !== 'undefined') {
            var encoded = token.split('.')[1];
            user = JSON.parse(urlBase64Decode(encoded));
        }
        return user;
    }
 
    var currentUser = getUserFromToken();

    var _save = function(data) {
        $http.post(baseUrl + '/signin', data);
    };
    var _sign = function(data, success, error) {
        $http.post(baseUrl + '/authenticate', data);
    };

    var _me = function(success, error) {
        $http.get(baseUrl + '/me');
    };

    var _logout = function(success) {
        changeUser({});
        delete $localStorage.token;
        success();
    };

	/////


	return {
		getColaboradores: _getColaboradores,
		getDiretores: _getDiretores,
		getJustificativas: _getJustificativas,
		getOcorrencias: _getOcorrencias,
	
		save: _save,
		sign: _sign,
		me: _me,
		logout: _logout,
		///////
	};
});