'use strict'

module.exports = {
	letters: function letters(str){
		var strSpl = str.split(' ');
    var doubleSpl = str.split('');
    var b = doubleSpl.length - (strSpl.length-1);
    return b;
	},
	spaces: function spaces(str){
		var strSpl = str.split(' ');
		return (strSpl.length-1);
	},
	words: function words(str){
		var strSpl = str.split(' ');
		return (strSpl.length);
	}
}

