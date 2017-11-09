require.config({
	baseUrl: "",
	paths:{
		"jquery":["https://xupeng1115.github.io/resume/js/jquery.min"],
		"add":["Scripts/math","js/knockout.min"],
		"knockout":["js/knockout.min"],
		"vm":["Scripts/vm"]
	}
})
require(["jquery","knockout","vm","add"],function($,ko,vm,math){
	console.log(ko);
	console.log(vm);
	vm.One("Two");
	$(function(){
		console.log($(".one"));
	})
})


