var swapi_config = {
	modules: [
        "root",
        "films",
        "people",
        "planets",
        "species",
        "starships",
        "vehicles"
    ],
	root_path: "lib/swapi/",
    base_swapi_url: "http://swapi.co/api/"
};

var swapi = (function (api, config) {
	
    api.resource_name = "swapi";

    /*
    * Process requests
    */
    api.request = function(path, callback){

        console.log("request from: " + path);

        var responseCallback = function(resp){
            return callback(JSON.parse(resp.target.responseText));
        }
        
        var xhr = new XMLHttpRequest();
        xhr.open("GET", config.base_swapi_url + path, true);
        xhr.onload = responseCallback;
        xhr.send();
        
    }

    /*
    * Load Modules
    */
    var loadModules = function(config){
        for (var i = 0; i < config.modules.length; i++){
            var imported = document.createElement('script');
            imported.type = 'text/javascript';
            imported.src = config.root_path + 'resources/' + config.modules[i] + '.js';
            document.head.appendChild(imported);
        }
    }

    loadModules(swapi_config);

    return api;

}(swapi || {}, swapi_config));