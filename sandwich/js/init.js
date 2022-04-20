import * as lateJs from 'https://cdn.jsdelivr.net/gh/00-59/late.js-68-00-59@1.2.0/dist/late.min.js';

(function($){
  $(function(){

    $('.sidenav').sidenav(); // display sidenav in portrait view

  }); // end of document ready
})(jQuery); // end of jQuery name space


lateJs.load();


function replaceClasses(){
  var nodeList;
  nodeList = document.querySelectorAll("#page-footer");
  lateJs.addClassToNodes("purple", nodeList);
  nodeList = document.querySelectorAll("#title-text");
  lateJs.addClassToNodes("orange-text", nodeList);
  nodeList = document.querySelectorAll("#navbar");
  lateJs.addClassToNodes("light-green", nodeList);
  nodeList = document.querySelectorAll(".icon-text");
  lateJs.addClassToNodes("light-green-text", nodeList);
  nodeList = document.querySelectorAll(".lateButton");
  lateJs.addClassToNodes("btn-large", nodeList);
  lateJs.addClassToNodes("waves-effect", nodeList);
  lateJs.addClassToNodes("waves-light", nodeList);
  lateJs.addClassToNodes("purple", nodeList);


  lateJs.loadMicrolightCode(microlight);
}

setTimeout(function(){
	replaceClasses()
  }, 500);

