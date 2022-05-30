 // program to display a text
 //declaring a function
 function sayHello(){
console.log("Hello World");
}

//calling a function
sayHello();

/************************************************/


//function with a parameter that displays a text
//declaring a function
function greetByName(name){
    console.log("Hello "+name);
    }

let name = prompt("Enter a name: ");

//calling a function
greetByName(name);

/************************************************/


// A function that multiplies two numbers
//declaring a function
function multiply(x,y){
    console(x*y);
}
//calling a function twice
multiply(3,4);
multiply(5,9);

/************************************************/


//A function that adds two numbers
//declaring a function
function add(a,b){
    return a+b;
}

//take input from the user
let number1 =parseFloat(prompt("Enter first number: "));
let number2 =parseFloat(prompt("Enter first number: "));

//calling function 
console.log("The sum is " + add(number1,number2));

/************************************************/

//function to calculate the area of a rectangle
//declaring a function
function rectangleArea(a,b){
    return `The area of a rectangle is ${a*b}`;
}

//calling function 
console.log(rectangleArea(75,45));
console.log(rectangleArea(200,185));

/* ***********************************************/

/*write a function that calculates the area 
and perimeter of a circle*/
//declaring a function
function circleAreaAndPerimeter(rad){
    return `Perimeter: ${2*Math.PI*rad}, Area:${Math.PI*rad*rad}`;
    }
 console.log(circleAreaAndPerimeter(10));
 console.log(circleAreaAndPerimeter(30));

/* ***********************************************/

//Functions that converts celsius to fahrenheit 
//declaring a function
function calFahrenheit(cel) {
    return (cel*9/5)+32; //Conversion formula
  }
  
  console.log(calFahrenheit(0)) //32
  console.log(calFahrenheit(20)) //68
  console.log(calFahrenheit(40)) //104

/* ***********************************************/

//Functions that count the number of vowels in a string 
function countVowel(str) {
    var count = 0;
    str=str.toLowerCase();
    for(var i=0;i<str.length;i++){
      if(str.charAt(i)=="a"||str.charAt(i)=="e"||str.charAt(i)=="i"||
         str.charAt(i)=="o"||str.charAt(i)=="u"){
         count++; //Increment vowel count
      }
    }
    return count;
  }
  
  console.log(countVowel("FiveLiveFreeCodeSchool")) //2
  console.log(countVowel("ProgrammingIsFun")) //3

/* ***********************************************/

//Functions that checks if an input string is a palindrome
//declaring a function
function checkPalindrome(str) {
    for(var i=0;i<str.length;i++){
      if(str.charAt(i)!=str.charAt(str.length-i-1)){ // Comparison fail
        return false;
      }
    }
    return true;
  }
  
  console.log(checkPalindrome("bannana")) //false
  console.log(checkPalindrome("racecar")) //true
  console.log(checkPalindrome("madam")) //true
  console.log(checkPalindrome("madam")) //true
  console.log(checkPalindrome("1234321")) //true


  /* ***********************************************/


//Function that generates a random number
//declaring a function
function genRandom(start, end) {
    return Math.floor(Math.random() * end) + start
  }
  
  console.log(genRandom(1,10)) // random int between 1 to 10
  console.log(genRandom(80,90)) // random int between 80 to 90

  
  /* ***********************************************/
//Functions that finds the factorial of a number
//declaring a function
function getFactorial(num) {
    if(num==1){
      return 1; // Termination condition
    }
    if(num==0 || num<0){
      return 0; // Termination condition
    }
    return num*getFactorial(num-1);
  }
  
  console.log(getFactorial(5)) // 120
  console.log(getFactorial(12)) // 479001600

  /* ***********************************************/

  //Function to find the count of a letter in a string 
   //declaring a function

   function letterCount(str, c) {
    var count=0;
    str=str.toLowerCase(); //Case insensitive
    for(var i=0;i<str.length;i++){
       if(str.charAt(i)==c){ 
         count++; //Increment count
       }
    }
    return count;
  }
  
  console.log(letterCount("Connect the dots ",'c')) // 2
  console.log(letterCount("Five Live Free Code School",'e')) // 2
  /* ***********************************************/
