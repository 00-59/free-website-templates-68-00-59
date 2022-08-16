import * as smaloa from 'https://cdn.jsdelivr.net/gh/00-59/smaloa-68-00-59@4.2.2/smaloa.js';
smaloa.CONFIG['components root']='./';

import * as minilight from 'https://cdn.jsdelivr.net/gh/00-59/plugins-smaloa-68-00-59@4.1.2.1/plugins/minilight/minilight.js';

var replaceClasses = function (){
	var nodeList;
	smaloa.addClassToQNodes("purple", "#page-footer");
	smaloa.addClassToQNodes("orange-text", "#title-text");
	smaloa.addClassToQNodes("light-green", "#navbar");
	smaloa.addClassToQNodes("light-green-text", ".icon-text");
	smaloa.addClassToQNodes("btn-large", ".lateButton");
	smaloa.addClassToQNodes("waves-effect",  ".lateButton");
	smaloa.addClassToQNodes("waves-light",  ".lateButton");
	smaloa.addClassToQNodes("purple",  ".lateButton");


	minilight.loadMicrolightCode(smaloa);
}

smaloa.CONFIG['phase 3'] = replaceClasses;
smaloa.CONFIG['phase 5'] = replaceClasses;
smaloa.load();




// load jquery
// related with materializeCSS
// not related with smaloa
(function($){
  $(function(){

    $('.sidenav').sidenav(); // display sidenav in portrait view

  }); // end of document ready
})(jQuery); // end of jQuery name space

