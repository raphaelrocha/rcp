angular.module("icomptvApp").config(function($routeProvider){
	$routeProvider.when("/rcp",{
		templateUrl: "view/rcp.html",
		controller: "printFormController",
		/*resolve:{
			resMaisVistos: function(connApi){
				return connApi.getVideos();
			},
			resRecomendados: function(connApi){
				return connApi.getVideos();
			},
			resCanais: function(connApi){
				return connApi.getCanais();
			},
			resPlayslists: function(connApi){
				return connApi.getPlaylists();
			}
		}*/
	});
	$routeProvider.when("/formulario",{
		templateUrl: "view/rcp-form.html",
		controller: "mainController",
		resolve:{
			resColaboradores: function(connApi){
				return connApi.getColaboradores();
			}
		}
	});
	$routeProvider.when("/canal",{
		templateUrl: "view/canal.html",
		controller: "canalController",
		resolve:{
			resVideos: function(connApi){
				return connApi.getVideos();
			},
			resVideo: function(connApi){
				return connApi.getVideo(1);//id temporarario
			}
		}
	});
	$routeProvider.when("/result",{
		templateUrl: "view/result.html",
		controller: "resultController",
	});
	$routeProvider.when("/video/:id",{
		templateUrl: "view/video.html",
		controller: "videoController",
		resolve:{
			resVideo: function(connApi, $route){
				return connApi.getVideo($route.current.params.id);
			},
			resVideos: function(connApi){
				return connApi.getVideos();
			}
		}
	});
	$routeProvider.when("/playlist/:id",{
		templateUrl: "view/playlist.html",
		controller: "playlistController",
		resolve:{
			resPlaylist: function(connApi, $route){
				return connApi.getPlaylist($route.current.params.id);
			}
		}
	});

	$routeProvider.when("/teste",{
		templateUrl: "view/t.html",
		controller: "headerFooterController",
	});
	
	$routeProvider.otherwise({redirectTo: "/main"});

});