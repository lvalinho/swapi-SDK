# swapi-SDK
JS SDK to [Star Wars API](http://swapi.co/).

## Installation
Load the swapi.js file on your document
```html
<script src="swapi.js"></script>
```
Set default configuration on swapi.js file. Here you can define the modules to load, the default root path o the library and the swapi url. Feel free to change it and adapt it to your project.
```javascript
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
```
The actual version includes modules "root", "films", "people", "planets", "species", "starships" and "vehicles".
Nem modules can be added but should be implemented on resource folder.

## Call examples

```javascript
//---films---
//get film with id 1
swapi.films.get("1", function(resp){
  //process response
})
//get all films
swapi.films.getAll(function(resp){
  //process response here
})
//search films
swapi.films.search("query string here",function(resp){
  //process response here
})
//schema films
swapi.films.schema(function(resp){
  //process response here
})

//---people---
//get people with id 1
swapi.people.get("1", function(resp){
  //process response
})
//get all people
swapi.people.getAll(function(resp){
  //process response here
})
//search people
swapi.people.search("query string here",function(resp){
  //process response here
})
//schema people
swapi.people.schema(function(resp){
  //process response here
})

//---planets---
//get planets with id 1
swapi.planets.get("1", function(resp){
  //process response
})
//get all planets
swapi.planets.getAll(function(resp){
  //process response here
})
//search planets
swapi.planets.search("query string here",function(resp){
  //process response here
})
//schema planets
swapi.planets.schema(function(resp){
  //process response here
})

//---species---
//get species with id 1
swapi.species.get("1", function(resp){
  //process response
})
//get all species
swapi.species.getAll(function(resp){
  //process response here
})
//search species
swapi.species.search("query string here",function(resp){
  //process response here
})
//schema species
swapi.species.schema(function(resp){
  //process response here
})

//---starships---
//get starships with id 1
swapi.starships.get("1", function(resp){
  //process response
})
//get all starships
swapi.starships.getAll(function(resp){
  //process response here
})
//search starships
swapi.starships.search("query string here",function(resp){
  //process response here
})
//schema starships
swapi.starships.schema(function(resp){
  //process response here
})

//---vehicles---
//get vehicles with id 1
swapi.vehicles.get("1", function(resp){
  //process response
})
//get all vehicles
swapi.vehicles.getAll(function(resp){
  //process response here
})
//search vehicles
swapi.vehicles.search("query string here",function(resp){
  //process response here
})
//schema vehicles
swapi.vehicles.schema(function(resp){
  //process response here
})

//---root---
//get root
swapi.root.getAll(function(resp){
  //process response here
})

```

## Add New Module
Add new module to this project should follow the next rules:
* The js file must be in the folder 'resources'.
* The name of the js file will be the name of module that will be imported to the sdk.
* The plugin must have the "core" swapi implementation as input
* The implementation should have the follow structure:
```javascript
var myModule = (function (myModule, swapi) {

	myModule.myFunctionA = function(){
    //function code here
  }
  
	myModule.myFunctionB = function(){
    //function code here
  }
  
  swapi.myModule = myModule;
  
}(myModule || {}, swapi));
```

## Future Work

* Possibilitie to "expand" nodes of plugins, for instance, when swapi.starships.getAll is called, in addition to return the starships data also deploys the branch of the films which appeared in.

