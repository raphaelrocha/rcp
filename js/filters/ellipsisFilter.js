angular.module("rcpApp").filter("ellipsisFormat", function(){
	return function (input, size){
		if(input.length <= size){
			return input;
		}
		var output = input.substring(0,(size || 5)) + "...";
		return output;
	};
});