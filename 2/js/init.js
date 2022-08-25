import * as smaloa from 'https://cdn.jsdelivr.net/gh/00-59/smaloa-68-00-59@4.2.2/smaloa.js';
smaloa.CONFIG['components root']='./';	// look for components directory


var replaceClasses = function (){
	var nodeList;
	smaloa.addClassToQNodes("classToAdd", "#elementId");

}

smaloa.CONFIG['phase 3'] = replaceClasses;

smaloa.load();

