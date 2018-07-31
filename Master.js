/*
* @Developer: Divek
* @Project  : NodeJS-app-to-Generate-all-Words-in-Dictionary-All-Combinations
* @Date     : 30-7-2018
* @copyright: Divek John
* @license  : GPL
* @version  : 1.0
* @usage	: example : input name is @str ****!!Important!!**** your old data will be appended.., all words will be stored in result.txt on pwd
* @bugs		: Comments will be added in next commit Sorry....  :)
*/

var str="hihel";//input your string here like ABCDEF*/-123
var fs = require('fs');

function writeit(data){
	 fs.appendFileSync("result.txt",data, err => {
          if (err) throw err;
     })  
	
}


//var str=prompt("Enter A string");
var count=0;
 var combinations = function(set) {
  return (function acc(xs, set) {
    var x = xs[0];
    if(typeof x === "undefined")
      return set;
    for(var i = 0, l = set.length; i < l; ++i)
      set.push(set[i].concat(x));
    return acc(xs.slice(1), set);
  })(set, [[]]).slice(1);
};

//and strings


function show(arr) {

  arr.forEach(function(p) {
	var str=p.join("").toString()
    console.log(" Combination of :",str);
	writeit("\r\t"+str+" Combination :")

	test=getAllPermutations(str)
for(x in test ){
console.log(test[x]);
count++;
writeit("\r\t"+test[x])
}
  });
   console.log('total combination:'+count);
   writeit("\r\t"+'total combination:'+count)
}
 
 function getAllPermutations(string) {
	
  var results = [];
  if (string.length === 1) {
    results.push(string);
    return results;
  }


  for (var i = 0; i < string.length; i++) {
	
    var firstChar = string[i];
    var charsLeft = string.substring(0, i) + string.substring(i + 1);
    var innerPermutations = getAllPermutations(charsLeft);
    for (var j = 0; j < innerPermutations.length; j++) {
      results.push(firstChar + innerPermutations[j]);
	
    }
	 }

	   return results;
}

show(combinations(str));
