var people = (function (people, swapi) {

	var resource_name = "people";

	people.get = function(id, callback){
		var url = resource_name + "/" + id;
		swapi.request(url, callback);
	};

	people.getAll = function(callback){
		swapi.request(resource_name, callback);
	};

	people.search = function(query, callback){
		var url = resource_name + "/?search=" + query;
		swapi.request(url, callback);
	};

	people.schema = function(callback){
		var url = resource_name + "/schema";
		swapi.request(url, callback);
	};
	
	swapi.people = people;

}(people || {}, swapi));