require.config({
	paths:{
		"jquery":["https://xupeng1115.github.io/resume/js/jquery.min"],
		"a":["Scripts/a","js/knockout.min"],
		"knockout":["js/knockout.min"]
	}
})

require(["jquery","knockout","a"],function($,ko){
	console.log($(".one"));
	var vm={
		One:ko.observable("one")
	}
	
	ko.applyBindings(vm);
	$(function(){
		alert("load finished");
	})
});


