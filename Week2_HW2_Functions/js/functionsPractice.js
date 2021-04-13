//you can enter arguments when invoking and get something back
//findProduct(2, 2) returns 4
//a and b are the perameters
function findProduct(a ,b) {
    return a * b
}

function findSum (array) {
    var num=0;
    for (var i = 0; i < array.length; i++) {
    array[i] = Number(array[i])
    num = num + array[i]
    }
    return num
}

function evenOrOdd (n) {
    if (n % 2 == 0)
    {
    return "even"
    } 
    else 
    {
    return "odd"
    }
}

function perametersL () {
    // this give us the arguments length enter on the HTML page 
    //console.log(arguments)
    return arguments.length
    //we would use perameters.length to get length on perameters
    //arguments are an array like object that are accessible inside functions
}

function reverseString(sentence) {
    var backWord = ""
    //we minus -1 because we are starting at the last letter
    for (var i = sentence.length - 1; i >= 0 ; i--) {
        //we use this to add each letter to the word. (o , e, l, m) if sentence was "melo" 
        backWord = backWord + sentence[i]
    }
    return backWord
}

function findLongestWord(words) {
    
    var longest;
    var temp = 0;
    for (var i = 0; i < words.length;i++)
    {  
        //we check to see if element length is bigger than the temporary variable, which it is. 
        //first element length is 3 and and temp is 0
        if (words[i].length > temp) {
            //since that statement was true, the element length is assigned to temp
            //temp is now three
            temp = words[i].length
            //if the element length is bigger than the temp varible it becomes that element gets assigned to longest.
            longest = words[i]
        } 
    }
    return longest
}

function filterLongWords(words, num) {
    var words2 = []

    for (var i = 0; i < words.length; i++) {
        if (words[i].length > num) {
            words2 = words2 + " " + words[i] 
        }
    }

    return words2.trim()

}

/*
var numArray = [1,2,3,4,5,6]
var num=0;

for (var i = 0; i < numArray.length; i++) {
    num = num + numArray[i]
}

console.log(num)
*/

/*
var word = "hey"
var backWord = ""
//we minus -1 because we are starting at the last letter
for (var i = word.length - 1; i >= 0 ; i--) {
    //we use this to add each letter to the word. (o , e, l, m) if sentence was "melo" 
    backWord = backWord + word[i]
}
console.log(backWord)
*/

/*
    var words = ["hey","here","came","because"]
    var longest;
    var temp = 0;
    for (var i = 0; i < words.length;i++)
    {  
        //we check to see if element length is bigger than the temporary variable, which it is. 
        //first element length is 3 and and temp is 0
        if (words[i].length > temp) {
            //since that statement was true, the element length is assigned to temp
            //temp is now three
            temp = words[i].length
            //if the element length is bigger than the temp varible it becomes that element gets assigned to longest.
            longest = words[i]
        } 
    }
    console.log(longest)
*/

/*
    var words = ["hey", "beach", "longest", "here", "because", "practice"]
    var num = 5;
    var words2 = []

    for (var i = 0; i < words.length; i++) {
        if (words[i].length > num) {
            words2 = words2 + " " + words[i] 
        }
    }

    console.log(words2.trim())
*/
