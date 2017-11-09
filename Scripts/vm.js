define(["knockout"],function(ko){
	var vm={
		One:ko.observable("one")
	}
	ko.applyBindings(vm);
	
	return vm;
})
