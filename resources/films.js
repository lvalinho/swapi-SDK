var films = (function (films, swapi) {

	var resource_name = "films";

	films.get = function(id, callback){
		var url = resource_name + "/" + id;
		swapi.request(url, callback);
	};

	films.getAll = function(callback){
		swapi.request(resource_name, callback);
	};

	films.search = function(query, callback){
		var url = resource_name + "/?search=" + query;
		swapi.request(url, callback);
	};

	films.schema = function(callback){
		var url = resource_name + "/schema";
		swapi.request(url, callback);
	};
	
	swapi.films = films;

}(films || {}, swapi));