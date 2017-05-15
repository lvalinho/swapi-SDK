var species = (function (species, swapi) {

	var resource_name = "species";

	species.get = function(id, callback){
		var url = resource_name + "/" + id;
		swapi.request(url, callback);
	};

	species.getAll = function(callback){
		swapi.request(resource_name, callback);
	};

	species.search = function(query, callback){
		var url = resource_name + "/?search=" + query;
		swapi.request(url, callback);
	};

	species.schema = function(callback){
		var url = resource_name + "/schema";
		swapi.request(url, callback);
	};
	
	swapi.species = species;

}(species || {}, swapi));