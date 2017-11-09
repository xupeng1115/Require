define(function(){
	var add=function(x,y){
		return x+y;
	};
	
	var txt=function(){
		return $(".one").text();
	};
	return {
		add:add,
		txt:txt
	}
})
//(function(math){
//	math.add=function(x,y){
//		return x+y;
//	};
//}(window.math={}))
