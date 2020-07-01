// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.

var prograd1 = "ProGrad";
console.log("The driver's name is " + prograd1);
var prograd2 = "Upendranadh";
console.log("The navigator's name is " + prograd2);

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
if (prograd1.length > prograd2.length) {
    console.log("The driver has the longest name, " + "it has " + prograd1.length + " characters")
} else if (prograd2.length > prograd1.length) {
    console.log("The navigator has the longest name, " + "it has " + prograd2.length + " characters")
} else {
    console.log(" Wow, you both have equally long names, " + prograd1.length + " characters")
}

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5. 

prograd1.toLowerCase;
var hasVowels;
for (var i = 0; i < prograd1.length; i++) {
    var c = prograd1[i];

    if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === "u") {
        console.log(c, i);
        hasVowels = true;
    }
}
if (hasVowels === false) {
    console.log('no vowels')
}




// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
var smallCount = 0;
var largeCount = 0;
for (var i = 0; i < prograd1.length; i++) {

    var ch = prograd1.charCodeAt(i);
    if (ch >= 97 && ch <= 122) {
        smallCount++;
    } else if (ch >= 65 && ch <= 90) {
        largeCount++;
    }
}
console.log("number of upper case characters are " + largeCount);
console.log("number of lower case characters are " + smallCount);




// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"
var driver = prograd1.toUpperCase();
var driverStr = "";
for (var i = 0; i <= driver.length; i++) {
    driverStr += driver[i] + " ";
}

console.log(driverStr);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"

var revNavigator = "";
var len = prograd2.length - 1;

while (len >= 0) {
    revNavigator += prograd2[len];
    len--;
}
console.log(revNavigator);


// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"

var combinedWord = prograd1 + " " + prograd2
console.log(combinedWord);
var combinedArray = combinedWord.split(" ");
var lastElement = combinedArray[1];
combinedArray[1] = combinedArray[0];
combinedArray[0] = lastElement;
var mystring = combinedArray.join(" ");
console.log(mystring);



// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"

// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 