var starships = (function (starships, swapi) {

	var resource_name = "starships";

	starships.get = function(id, callback){
		var url = resource_name + "/" + id;
		swapi.request(url, callback);
	};

	starships.getAll = function(callback){
		swapi.request(resource_name, callback);
	};

	starships.search = function(query, callback){
		var url = resource_name + "/?search=" + query;
		swapi.request(url, callback);
	};

	starships.schema = function(callback){
		var url = resource_name + "/schema";
		swapi.request(url, callback);
	};
	
	swapi.starships = starships;

}(starships || {}, swapi));