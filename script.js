// 1 - Given a string ,reverse each word in the sentence

var str="i love my india and i proud be indian";
var savedStr=str.split(" ").map(function(word){

   return  word.split("").reverse().join("")
})
console.log(savedStr.join(" "));   

// output - i evol ym aidni dna i duorp eb naidni


// 2 - How to check if an object is an array or not? Provide some code.

function checkArray(elm){

    console.log( Array.isArray(elm));
}
checkArray([]);            
checkArray({});    

// output - true
// output - false

// 3 - How to empty an array in javaScript? Do not reset to it to new array,and do not loop through to pop each value.

var arr = [1,2,3,4,5,6,7];
console.log(arr.length);
arr.length=0;
console.log(arr.length);
console.log(arr);

//  output - []

// 4 - How would you check if a number is an integer?

var value = 9;
if(value % 1 == 0){
    console.log("integer");
}
else{
    console.log(" not an integer");
}

// output - integer

// 5 - Duplicate the array.

function duplicate(arr){

    console.log(arr.concat(arr));
}
duplicate([1,2,3,4,5,6]);

// output - [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]

// 6 - Write a javascript function that reverse a Number

    // method 1

function reverseNumber(num){
   var b= Number(num.toString().split("").reverse().join(""));
   console.log(b)
   console.log(typeof(b))
}
reverseNumber(23)

// output - 32

// method 2

function reverseNumber(num){
    var rev = 0;
    while(num>0){
     
        var rem=num%10;
        rev=rev*10+rem;
        num=Math.floor(num/10)
    }
    return rev;
}
console.log(reverseNumber(12345));

// output - 54321

// 7 - Write a Javascript function that checks whether a passed number is palindrome or not.

// palidrome number(on reversing it will remain same) e.g - 2332

function stringPalChecker(str){
 var rev = str.split("").reverse().join("")
 if(rev===str){
    return true;
}
    else{

        return false;
    }
}
console.log(stringPalChecker("poop"))   //true
console.log(stringPalChecker("334422")) //false

// 8 - Write a js function that returns a passed string with letters in alphabetical order

function stringAlphabeticalOrder(str){

    console.log(str.split("").sort().join("")); //adeehjr

}
stringAlphabeticalOrder("dheeraj");

// 9 - Write a Javascript function that accepts a string as a parameter and converts the first letter of each word in string in uppercase.
function capitalizeKaro(str){

    var showString = str.split(" ").map(function(word){
       return word.charAt(0).toUpperCase() + word.substring(1)
    })
    console.log(showString.join(" ")); 

}
capitalizeKaro("hello my name is dheeraj prajapati");  // Hello My Name Is Dheeraj Prajapati


// 10 - write a js function to get the number of occurrances of each letter in specified String.

function occ(str){
    var occurances ={};
    str.split("").forEach(function(elm){

       if( occurances.hasOwnProperty(elm)===false){
        occurances[elm]=1;
       }
       else{
        occurances[elm]++;
       }
    })
    return occurances;
}
console.log(occ("dheeraj"));  //{d: 1, h: 1, e: 2, r: 1, a: 1, …}

console.log(occ("prajapati"));  //{p: 2, r: 1, a: 3, j: 1, t: 1, …}

// 11 - loop an array and add all members of it.

var arr=[1,2,3,4,5,6,7,8,9,10];
var sum = 0;
arr.forEach(function(elm){

    sum=sum+elm;
})
console.log(sum); //55

// 12 - In an array of numbers and SVGStringList,only add those members which are not strings.

var arr=["dheeraj",123,"212wa",1,"2123","jqwdjw",23,44];
var sum=0;

arr.forEach(function(elm){

    if(typeof elm==="number"){

        sum=sum+elm;
    }
})
console.log(sum);  //191

// 13 - Loop an array of objects and remove all objects which donn't have gender's value.

var arr=[
    {name:"dheeraj",gender:"male"},
    {name:"keerthi",gender:"female"},
    {name:"abcd",gender:"notSpecified"},
    {name:"anupma",gender:"female"},
]
for (var j=1;j<=arr.length;j++){
    if(arr[j].gender !== "male"){
        arr.splice(j,1);
    }
}
console.log(arr);

// output -
// {name: 'dheeraj', gender: 'male'}
// {name: 'abcd', gender: 'notSpecified'}

// 14 - Write  a js function to clone an Array.

     // method 1

function cloneArr(arr){

    return [...arr];
}
var newVar =cloneArr([1,2,3,4,5]);
console.log(newVar); //(5) [1, 2, 3, 4, 5]

    //  method 2

     function cloneArr(arr){

        var newArr=[];
        arr.forEach(function(e){
            newArr.push(e);
        })
        return newArr;
    }
    var abcd=[1,2,3,4,5]
    var newArr =cloneArr(abcd);
    console.log(newArr) //(5) [1, 2, 3, 4, 5]
    newArr.pop();   
    
    // method 3

    function cloneArr(arr){
        var newArr =arr.map(function(e){
            return e;
        })
    }
    console.log([1,2,3,4,5]);  //(5) [1, 2, 3, 4, 5]

// 15 - Write a javascript function which accepts an arguments and returns the type(Note:There are six possible values that typeof returns :object,boolean,function,number,string and undefined).

function typeTeller(elm){

    return typeof elm;
}
console.log(typeTeller([1,1,2,3])); //object

console.log(typeTeller(12)); //number

console.log(typeTeller("12")); //string

console.log(typeTeller(true)); //boolean

console.log(typeTeller(undefined));  //undefined
console.log(typeTeller(function(){}));  //function


// 16 - Write a js function to get the first element of an Array.Passing a parameter 'n' will return the first 'n' elements of the array.

function retrieve(arr,n=1){
if (n<=arr.length){
    for(var i=0;i<n;i++){
        console.log(arr[i]);
    }
}
    else{
        console.log(n + " elements not available..")
    }
}
retrieve([1,2,3,4,5],5)  // 1 2 3 4 5 

// 17 - Write a js function to get the last element of an Array.Passing a parameter 'n' will return the last 'n' elements of the array.

function retrieve(arr,n=1){
if (n<=arr.length){
    for(var i=0;i<n;i++){
        console.log(arr[arr.length-1-i]);
    }
}
    else{
        console.log(n + " elements not available..")
    }
}
retrieve([1,2,3,4,5],5)  // 5 4 3 2 1 

// 18 - write a js program to find the most frequent item of an Array.

function freq(arr){
    var freq={};
    arr.forEach(function(elm){
        if(freq.hasOwnProperty(elm)) freq[elm]++;
        else freq[elm]=1;
    })
    var ans = Object.keys(freq).reduce(function(acc,next){
        return freq[acc] > freq[next] ? acc : next;
    })
    console.log(ans); // 1
}
freq([1,2,3,2,3,5,5,1,2,1,3,6,1]);

// 19 - Write a js program to shuffle an Array.

function shuffleKaro(arr){

    var totalShuffleArea=arr.length;
    while(totalShuffleArea>0){

        totalShuffleArea--;
        var indexToExchanged = Math.floor(Math.random()*totalShuffleArea);
        var temp = arr[totalShuffleArea];
        arr[totalShuffleArea]=arr[indexToExchanged];
        arr[indexToExchanged]=temp;
        }
        return arr;
}
console.log(shuffleKaro([1,2,3,4,5,6,7,8])); // [2, 4, 5, 8, 1, 3, 6, 7]

// 20 - Write the js program to compute the union of two arrays:
// Sample Data:
// console.log(union([1,2,3],[100,2,1,10]));
// [1,2,3,10,100]

function union(arr1,arr2){
return[...new Set(arr1.concat(arr2))];
}
console.log(union([1,2,3,4],[1,2,3,5,6,7])); //[1, 2, 3, 4, 5, 6, 7]

