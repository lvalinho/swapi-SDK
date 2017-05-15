var root = (function (root, swapi) {

	var resource_name = "";

	root.getAll = function(callback){
		swapi.request(resource_name, callback)
	};
	
	swapi.root = root;

}(root || {}, swapi));