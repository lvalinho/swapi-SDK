var planets = (function (planets, swapi) {

	var resource_name = "planets";

	planets.get = function(id, callback){
		var url = resource_name + "/" + id;
		swapi.request(url, callback);
	};

	planets.getAll = function(callback){
		swapi.request(resource_name, callback);
	};

	planets.search = function(query, callback){
		var url = resource_name + "/?search=" + query;
		swapi.request(url, callback);
	};

	planets.schema = function(callback){
		var url = resource_name + "/schema";
		swapi.request(url, callback);
	};
	
	swapi.planets = planets;

}(planets || {}, swapi));