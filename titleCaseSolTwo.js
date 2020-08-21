/*
Basic Algorithm Scripting: Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

//Solution Two

function titleCase(str) {                                                 //1
  var convertToArray = str.toLowerCase().split(" ");                      //2
  var result = convertToArray.map(function(val) {                         //3
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());       //4
  });
  return result.join(" ");                                                //5
}

console.log(titleCase("I'm a little tea pot"));


//Notes
/*

//1 function that takes in one argument - a String

The toLowerCase() method returns the calling string value converted to lower case.
Source - [https://devdocs.io/javascript/global_objects/string/tolowercase]

The split() method splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.
Source - [https://devdocs.io/javascript/global_objects/string/split]

//2 var convertToArray = str.toLowerCase().split(" ");

    This variable will store the input string. The toLowercase() will set all characters in the string to lowercase and the split method will convert the string to an array. The space in between the quotation marks indicates that the string should be split by word. 

    var convertToArray = [ "i'm", 'a', 'little', 'tea', 'pot' ];

The map() method creates a new array with the results of calling a provided function on every element in the calling array.
Source - [https://devdocs.io/javascript/global_objects/array/map]

The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. If pattern is a string, only the first occurrence will be replaced.
Source - [https://devdocs.io/javascript/global_objects/string/replace]

The String object's charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.
Source - [https://devdocs.io/javascript/global_objects/string/charat]

The toUpperCase() method returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).
Source - [https://devdocs.io/javascript/global_objects/string/touppercase]

The reason why this replace method works for each word in the array is because the map() method allows replace to be applied to each item/index in the array.

//3 && 4
The variable result will store the coverted array in //2. 
It chains a method map which allows one to perform a callback function on each item/index in the array.

In this case the function performed on each item/index in the array will return the word in each index with the first letter capatalized. 
This is made possible by the replace method which takes two arguments
    1st arg - The character to be replaced
    2nd arg - That to replace the character with.

As can be seen in the second argument of the replace method. The character should be replaced with a capatalized version of itself. 

//5
Finally the entire results array ([ "I'm", 'A', 'Little', 'Tea', 'Pot' ]) is converted back to a string with the join method. (The space in between the quotation marks indicates that the string should be joined by word.)


*/

