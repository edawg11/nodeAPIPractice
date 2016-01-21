'use strict'

module.exports = {
	square: function square(a){
		return parseInt(a)*parseInt(a);
	},

	sumArray: function sumArr(arr){

		return arr.reduce(function(a,b){
			return parseInt(a)+parseInt(b);
		})
	}
}