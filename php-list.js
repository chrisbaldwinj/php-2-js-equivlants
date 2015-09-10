function list(fn,array){
   if(fn.length && array.length){
		for(var i=0;i<array.length;i++){
		    var applyArray = [];
			for(var j=0;j<array[i].length;j++){
				fn[j] = array[i][j];
				applyArray.push(fn[j]);
			}
			fn.apply(this,applyArray);
		}
   }
}

/*
  Usage
  
//array array mixture for composure
 var arrayMixture = [ ["coffee","sugar","milk"], ["tea","sugar","honey"] ];
//call our function


list(function(treat,addin,addin2){
   console.log("I like "+treat+" with " + addin + " and " + addin2);
},arrayMixture);


//output:
//I like coffee with sugar and milk
//I like tea with sugar and honey

*/
