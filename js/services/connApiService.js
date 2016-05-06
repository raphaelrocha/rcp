angular.module("icomptvApp").factory("connApi", function($http, config, $localStorage){
	var _getColaboradores = function(){
		//return $http.get(config.baseUrl+"/mocs/ws.php");
		return $http.get(config.baseUrl+"/CertiService/Colaboradores");
		//return $http.get(config.baseUrl+"/api/v1/videos");
	};
	var _getVideo = function(id){
		//return $http.get(config.baseUrl+"/mocs/video.php");
		return $http.get(config.baseUrl+"/videos/"+id);
		//return $http.get(config.baseUrl+"/api/v1/videos/"+id);
	};
	var _addVideo = function(video){
		$http.post(config.baseUrl+"/videos",video);
	};
	var _getAuth = function(data){
		$http.post(config.baseUrl+"/auth",data);
	};

	var _getCanais = function(){
		//return $http.get(config.baseUrl+"/mocs/ws.php");
		return $http.get(config.baseUrl+"/canais");
		//return $http.get(config.baseUrl+"/api/v1/videos");
	};
	var _getCanal = function(id){
		//return $http.get(config.baseUrl+"/mocs/video.php");
		return $http.get(config.baseUrl+"/canais/"+id);
		//return $http.get(config.baseUrl+"/api/v1/videos/"+id);
	};

	var _getPlaylists = function(){
		return $http.get(config.baseUrl+"/playlists");
	};
	var _getPlaylist = function(id){
		return $http.get(config.baseUrl+"/playlists/"+id);
	};

	/////
	

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
		getVideo: _getVideo,
		addVideo: _addVideo,
		getAuth: _getAuth,
		getCanais: _getCanais,
		getCanal: _getCanal,
		getPlaylist: _getPlaylist,
		getPlaylists: _getPlaylists,
		save: _save,
		sign: _sign,
		me: _me,
		logout: _logout,
		///////
	};
});