//Include global BigInt (as comment) in order to prevent no-undef in this environment.
/* global BigInt */

const challenges = {
    candies: {
        name: "candies",
        instructions: `n children have got m pieces of candy. They want to eat as much candy as they can, but each child must eat exactly the same amount of candy as any other child. Determine how many pieces of candy will be eaten by all the children together. Individual pieces of candy cannot be split.`,
        codeOutput: 
        `function candies(n, m) { 
            return Math.floor(m / n) * n; 
        }`,
        code: function candies(n, m) {
            return Math.floor(m / n) * n;
        },
        arguments: {
            descriptions: [
                {
                    text: "Number of Children (Whole Number)",
                    type: "Number"
                },
                {
                    text: "Number of Pieces of Candy (Whole Number)",
                    type: "Number"
                }
            ]
        }
    },
    absvaluesumminimization: {
        name: "absoluteValuesSumMinimization",
        instructions: `Given a sorted array of integers a, your task is to determine which element of a is closest to all other values of a. In other words, find the element x in a, which minimizes the following sum:

        abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)
        (where abs denotes the absolute value)
        
        If there are several possible answers, output the smallest one.`,
        codeOutput: 
        `function absoluteValuesSumMinimization(a) {
            //Keep track of the smallest sum and smallest subtracting element
            let smallestSum = Infinity;
            let smallestSubtract = Infinity;
            
            //Loop through all elements to use as subtractors.
            for(let i = 0; i < a.length; i++) {
                let thisSum = 0;
                //For each subtractor, repeat the summing algorithm for each difference.
                for(let j = 0; j < a.length; j++) {
                    thisSum += Math.abs(a[j] - a[i]);
                }
                //If this produced the smallest sum, save this as the current smallest 'subtractor'
                if(thisSum < smallestSum) {
                    smallestSum = thisSum;
                    smallestSubtract = i;
                }
                
            }
            //Return the element at the index that represents the best 'subtractor' 
            return a[smallestSubtract];
        }`,
        code: function absoluteValuesSumMinimization(a) {
            //Keep track of the smallest sum and smallest subtracting element
            let smallestSum = Infinity;
            let smallestSubtract = Infinity;
            
            //Loop through all elements to use as subtractors.
            for(let i = 0; i < a.length; i++) {
                let thisSum = 0;
                //For each subtractor, repeat the summing algorithm for each difference.
                for(let j = 0; j < a.length; j++) {
                    thisSum += Math.abs(a[j] - a[i]);
                }
                //If this produced the smallest sum, save this as the current smallest 'subtractor'
                if(thisSum < smallestSum) {
                    smallestSum = thisSum;
                    smallestSubtract = i;
                }
                
            }
            //Return the element at the index that represents the best 'subtractor' 
            return a[smallestSubtract];
        },
        arguments: {
            descriptions: [
                {
                    text: "Sorted Array of Integers (In the form 1,2,3,...(No Square Brackets [])",
                    type: "NumberArray"
                }
            ]
        }
    },
    adanumber: {
        name: "adaNumber",
        instructions: `Consider two following representations of a non-negative integer:

        A simple decimal integer, constructed of a non-empty sequence of digits from 0 to 9;
        An integer with at least one digit in a base from 2 to 16 (inclusive), enclosed between # characters, and preceded by the base, which can only be a number between 2 and 16 in the first representation. For digits from 10 to 15 characters a, b, ..., f and A, B, ..., F are used.
        Additionally, both representations may contain underscore (_) characters; they are used only as separators for improving legibility of numbers and can be ignored while processing a number.
        
        Your task is to determine whether the given string is a valid integer representation.
        
        Note: this is how integer numbers are represented in the programming language Ada.`,
        codeOutput: 
        `function adaNumber(line) {
            //Helper function to see if chars in number part of string are valid in this base.
            const checkChar = (base, str) => {
                for(let i = 0; i < str.length; i++) {
                    //If this particular char returns NaN, we know this whole string isn't valid in this base.
                    if(isNaN(parseInt(str[i], base))) {
                        return false;
                    } 
                }
                //Make sure the string doesn't have a length of 0 (this triggers a 'false positive' true)
                return str.length === 0 ? false : true;
            };
            
            //If this number is simply a valid integer with underscores, return true.
            let stripped = line.split("").filter(char => char !== "_").join("");
            if(!isNaN(stripped) && stripped.length > 0) return true;
            
            //Otherwise, split this into an array, which should have 3 elements: a valid base, a valid number, and an empty third element.
            let hashSplit = stripped.split("#");
            
            //Return true if all 3 conditions are correct, including this array only having 3 elements.
            return hashSplit.length === 3 && 
                   hashSplit[0] > 1 && hashSplit[0] < 17 &&
                   checkChar(Number(hashSplit[0]), hashSplit[1]) &&
                   hashSplit[2].length === 0;
        }`,
        code: function adaNumber(line) {
            //Helper function to see if chars in number part of string are valid in this base.
            const checkChar = (base, str) => {
                for(let i = 0; i < str.length; i++) {
                    //If this particular char returns NaN, we know this whole string isn't valid in this base.
                    if(isNaN(parseInt(str[i], base))) {
                        return false;
                    } 
                }
                //Make sure the string doesn't have a length of 0 (this triggers a 'false positive' true)
                return str.length === 0 ? false : true;
            };
            
            //If this number is simply a valid integer with underscores, return true.
            let stripped = line.split("").filter(char => char !== "_").join("");
            if(!isNaN(stripped) && stripped.length > 0) return true;
            
            //Otherwise, split this into an array, which should have 3 elements: a valid base, a valid number, and an empty third element.
            let hashSplit = stripped.split("#");
            
            //Return true if all 3 conditions are correct, including this array only having 3 elements.
            return hashSplit.length === 3 && 
                   hashSplit[0] > 1 && hashSplit[0] < 17 &&
                   checkChar(Number(hashSplit[0]), hashSplit[1]) &&
                   hashSplit[2].length === 0;
        },
        arguments: {
            descriptions: [
                {
                    text: "Integer Number (Programming Language Ada)",
                    type: "String"
                }
            ]
        }
    },
    addBinary: {
        name: 'addBinary',
        instructions: `Given two binary strings a and b, return their sum as a binary string.`,
        codeOutput: 
        `var addBinary = function(a, b) {
            //Use BigInt to prevent overflow.
            let sum = BigInt("0b" + a) + BigInt("0b" + b);
            //Convert back to binary.
            return sum.toString(2);
        };`,
        code: function addBinary(a, b) {
            //Use BigInt to prevent overflow.
            let sum = BigInt(`0b${a}`) + BigInt(`0b${b}`);
            //Convert back to binary.
            return sum.toString(2);
        },
        arguments: {
            descriptions: [
                {
                    text: "Binary String (Example: 1010)",
                    type: "String"
                },
                {
                    text: "Binary String (Example: 1011)",
                    type: "String"
                }
            ]
        }
    },
    addborder: {
        name: 'addBorder',
        instructions: `Given a rectangular matrix of characters, add a border of asterisks(*) to it.`,
        codeOutput: 
        `function addBorder(picture) {
            picture.forEach((string, index) => {
                picture[index] = "*" + string + "*";
            });
            let frame = "";
            for(let i = 0; i < picture[0].length; i++) {
                frame += "*";
            }
            picture.unshift(frame);
            picture.push(frame);
            
            return picture;
        }`,
        code: function addBorder(picture) {
            picture.forEach((string, index) => {
                picture[index] = "*" + string + "*";
            });
            let frame = "";
            for(let i = 0; i < picture[0].length; i++) {
                frame += "*";
            }
            picture.unshift(frame);
            picture.push(frame);
            
            return picture;
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Equal-Length Strings (No Brackets []; Quotes Not Needed)",
                    type: "StringArray"
                }
            ]
        }
    },
    additionWithoutCarrying: {
        name: 'additionWithoutCarrying',
        instructions: `A little boy is studying arithmetic. He has just learned how to add two integers, written one below another, column by column. But he always forgets about the important part - carrying.

        Given two integers, your task is to find the result which the little boy will get.`,
        codeOutput: 
        `function additionWithoutCarrying(param1, param2) {
            //Find longest string for the loop.
            let length = Math.max(String(param1).length, String(param2).length);
            //Make an array of each number.
            let num1 = String(param1).split("").reverse();
            let num2 = String(param2).split("").reverse();
            //Keep track of sum as an array of digits.
            let sum = [];
            //Until the end of the longest number, add the digits, but ignore the "carried" tens place.
            for(let i = 0; i < length; i++) {
                let addend1 = num1[i] ? Number(num1[i]) : 0;
                let addend2 = num2[i] ? Number(num2[i]) : 0;
                sum.unshift((addend1 + addend2) % 10);
            }
            //Put the array back together and return as a number.
            return Number(sum.join(""));
        }`,
        code: function additionWithoutCarrying(param1, param2) {
            //Find longest string for the loop.
            let length = Math.max(String(param1).length, String(param2).length);
            //Make an array of each number.
            let num1 = String(param1).split("").reverse();
            let num2 = String(param2).split("").reverse();
            //Keep track of sum as an array of digits.
            let sum = [];
            //Until the end of the longest number, add the digits, but ignore the "carried" tens place.
            for(let i = 0; i < length; i++) {
                let addend1 = num1[i] ? Number(num1[i]) : 0;
                let addend2 = num2[i] ? Number(num2[i]) : 0;
                sum.unshift((addend1 + addend2) % 10);
            }
            //Put the array back together and return as a number.
            return Number(sum.join(""));
        },
        arguments: {
            descriptions: [
                {
                    text: "Enter an Integer",
                    type: "Number"
                },
                {
                    text: "Enter a Second Integer",
                    type: "Number"
                }
            ]
        }
    },
    addToArrayForm: {
        name: `addToArrayForm`,
        instructions: `The array-form of an integer num is an array representing its digits in left to right order.

        For example, for num = 1321, the array form is [1,3,2,1].
        Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k.`,
        codeOutput: 
        `var addToArrayForm = function(num, k) {
            return (BigInt(num.join("")) + BigInt(k)).toString().split("").map(num => parseInt(num));
        };`,
        code: function addToArrayForm(num, k) {
            return (BigInt(num.join("")) + BigInt(k)).toString().split("").map(num => parseInt(num));
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Integers to represent number (e.g. 1,2,0,0)",
                    type: "NumberArray"
                },
                {
                    text: "Whole number to add",
                    type: "Number"
                }
            ]
        }
    },
    adjacentElementsProduct: {
        name: 'adjacentElementsProduct',
        instructions: `Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.`,
        codeOutput: 
        `function adjacentElementsProduct(inputArray) {
            let product; 
            for(let thisFactor = 0; thisFactor < inputArray.length - 1; thisFactor++) {
                if(!product || inputArray[thisFactor] * inputArray[thisFactor + 1] > product) {
                    product = inputArray[thisFactor] * inputArray[thisFactor + 1]; 
                }
            }
            return product; 
        }`,
        code: function adjacentElementsProduct(inputArray) {
            let product; 
            for(let thisFactor = 0; thisFactor < inputArray.length - 1; thisFactor++) {
                if(!product || inputArray[thisFactor] * inputArray[thisFactor + 1] > product) {
                    product = inputArray[thisFactor] * inputArray[thisFactor + 1]; 
                }
            }
            return product; 
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Integers (No Brackets [])",
                    type: "NumberArray"
                }
            ]
        }
    },
    allLongestStrings: {
        name: 'allLongestStrings',
        instructions: `Given an array of strings, return another array containing all of its longest strings.`,
        codeOutput: 
        `function allLongestStrings(inputArray) {
            const longestLength = Math.max(...inputArray.map(element => element.length));
            return inputArray.filter(element => element.length === longestLength);
        }`,
        code: function allLongestStrings(inputArray) {
            const longestLength = Math.max(...inputArray.map(element => element.length));
            return inputArray.filter(element => element.length === longestLength);
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Strings (Quotes and Spaces Not Needed)",
                    type: "StringArray"
                }
            ]
        }
    },
    almostIncreasingSequence: {
        name: 'almostIncreasingSequence',
        instructions: `Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

        Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.`,
        codeOutput: 
        `function almostIncreasingSequence(sequence) {
            let removed = 0; 
              for(let i = 1; i < sequence.length; i++) {
                  if(sequence[i] <= sequence[i - 1]) {
                      removed++; 
                      if(removed > 1) {
                          return false; 
                      }
                      if(sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) {
                          return false; 
                      }
                  }
              }
            return true; 
        }`,
        code: function almostIncreasingSequence(sequence) {
            let removed = 0; 
              for(let i = 1; i < sequence.length; i++) {
                  if(sequence[i] <= sequence[i - 1]) {
                      removed++; 
                      if(removed > 1) {
                          return false; 
                      }
                      if(sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) {
                          return false; 
                      }
                  }
              }
            return true; 
        },
        arguments: {
            descriptions: [
                {
                    text: "",
                    type: "NumberArray"
                }
            ]
        }
    },
    alphabeticShift: {
        name: 'alphabeticShift',
        instructions: `Given a string, your task is to replace each of its characters by the next one in the English alphabet; i.e. replace a with b, replace b with c, etc (z would be replaced by a).`,
        codeOutput: 
        `function alphabeticShift(inputString) {
            let newString = "";
            //For each character, add one to the char code.
            for(let i = 0; i < inputString.length; i++) {
                if(inputString.charCodeAt(i) === 122) {
                    //Use 'a' if we are already at 'z'
                    newString += 'a';
                } else {
                    //Otherwise, add one to the char code.
                    newString += String.fromCharCode((inputString.charCodeAt(i) + 1));
                }
            }
            return newString;
        }`,
        code: function alphabeticShift(inputString) {
            let newString = "";
            //For each character, add one to the char code.
            for(let i = 0; i < inputString.length; i++) {
                if(inputString.charCodeAt(i) === 122) {
                    //Use 'a' if we are already at 'z'
                    newString += 'a';
                } else {
                    //Otherwise, add one to the char code.
                    newString += String.fromCharCode((inputString.charCodeAt(i) + 1));
                }
            }
            return newString;
        },
        arguments: {
            descriptions: [
                {
                    text: "String of Lowercase Letters",
                    type: "String"
                }
            ]
        }
    },
    alphabetSubsequence: {
        name: 'alphabetSubsequence',
        instructions: `Check whether the given string is a subsequence of the plaintext alphabet.`,
        codeOutput: 
        `function alphabetSubsequence(s) {
            //Keep track of the current code.
            let lastCode = s.charCodeAt(0);
            //Loop through every other character, and make sure it is 'next' in the sequence.
            for(let i = 1; i < s.length; i++) {
                //If this character has a code that is the same or less than the previous character, return false.
                if(s.charCodeAt(i) <= lastCode) return false;
                lastCode = s.charCodeAt(i);
            }
            return true;
        }`,
        code: function alphabetSubsequence(s) {
            //Keep track of the current code.
            let lastCode = s.charCodeAt(0);
            //Loop through every other character, and make sure it is 'next' in the sequence.
            for(let i = 1; i < s.length; i++) {
                //If this character has a code that is the same or less than the previous character, return false.
                if(s.charCodeAt(i) <= lastCode) return false;
                lastCode = s.charCodeAt(i);
            }
            return true;
        },
        arguments: {
            descriptions: [
                {
                    text: "String of Alphabetic Characters (All Lowercase or All Uppercase)",
                    type: "String"
                }
            ]
        }
    },
    alphanumericLess: {
        name: 'alphanumericLess',
        instructions: `An alphanumeric ordering of strings is defined as follows: each string is considered as a sequence of tokens, where each token is a letter or a number (as opposed to an isolated digit, as is the case in lexicographic ordering). For example, the tokens of the string "ab01c004" are [a, b, 01, c, 004]. In order to compare two strings, we'll first break them down into tokens and then compare the corresponding pairs of tokens with each other (i.e. compare the first token of the first string with the first token of the second string, etc).

        Here is how tokens are compared:
        
        If a letter is compared with another letter, the usual alphabetical order applies.
        A number is always considered less than a letter.
        When two numbers are compared, their values are compared. Leading zeros, if any, are ignored.
        If at some point one string has no more tokens left while the other one still does, the one with fewer tokens is considered smaller.
        
        If the two strings s1 and s2 appear to be equal, consider the smallest index i such that tokens(s1)[i] and tokens(s2)[i] (where tokens(s)[i] is the ith token of string s) differ only by the number of leading zeros. If no such i exists, the strings are indeed equal. Otherwise, the string whose ith token has more leading zeros is considered smaller.
        
        Here are some examples of comparing strings using alphanumeric ordering.
        
        "a" < "a1" < "ab"
        "ab42" < "ab000144" < "ab00144" < "ab144" < "ab000144x"
        "x11y012" < "x011y13"
        Your task is to return true if s1 is strictly less than s2, and false otherwise.`,
        codeOutput: 
        `function alphanumericLess(s1, s2) {
            //Helper function to split strings into tokens.
            const splitTokens = str => {
                let str_split = [];
                let currentNumber = '';
                
                for(let i = 0; i < str.length; i++) {
                    if(isNaN(str[i])) {
                        //If there is a currentNumber to be pushed, make sure to do that now.
                        if(currentNumber.length > 0) {
                            str_split.push(currentNumber);
                            currentNumber = '';
                        }
                        str_split.push(str[i]);
                    } else {
                        currentNumber += str[i];
                    }
                }
                if(currentNumber.length > 0) str_split.push(currentNumber);
                
                return str_split;
            };
            
            let s1_split = splitTokens(s1);
            let s2_split = splitTokens(s2);
        
            for(let i = 0; i < Math.max(s1_split.length, s2_split.length); i++) {
                //If both tokens are not numbers
                if(isNaN(s1_split[i]) && isNaN(s2_split[i])) {
                    if(s1_split[i] < s2_split[i]) {
                        return true;
                    } else if(s1_split[i] > s2_split[i]) {
                        return false;
                    }
                //If s1 has a number and s2 has a non-number
                } else if(!isNaN(s1_split[i]) && isNaN(s2_split[i])) {
                    return true;
                //If both are numbers
                } else if(!isNaN(s1_split[i]) && !isNaN(s2_split[i])) {
                    //If these numbers are too large, use bigint.
                    let num1 = s1_split[i] > Number.MAX_SAFE_INTEGER ?
                    BigInt(s1_split[i]) : Number(s1_split[i]);
                    let num2 = s2_split[i] > Number.MAX_SAFE_INTEGER ?
                    BigInt(s2_split[i]) : Number(s2_split[i]);
                    
                    if(num1 < num2 &&
                    !(i === s2_split.length - 1 && s1_split.length > s2_split.length)) { 
                        return true;
                    }
                    //See if both these numbers have the same numeric value BUT s1 has more leading zeros.
                    if(num1 === num2 && s1_split[i].length > s2_split[i].length) return true;
                }
                
                if(s1_split[i] === s2_split[i] && !s1_split[i + 1] && s2_split[i + 1]) return true;
            }
            
            //If values are equal or s1 is greater than s2, return false;
            return false;
        }`,
        code: function alphanumericLess(s1, s2) {
            //Helper function to split strings into tokens.
            const splitTokens = str => {
                let str_split = [];
                let currentNumber = '';
                
                for(let i = 0; i < str.length; i++) {
                    if(isNaN(str[i])) {
                        //If there is a currentNumber to be pushed, make sure to do that now.
                        if(currentNumber.length > 0) {
                            str_split.push(currentNumber);
                            currentNumber = '';
                        }
                        str_split.push(str[i]);
                    } else {
                        currentNumber += str[i];
                    }
                }
                if(currentNumber.length > 0) str_split.push(currentNumber);
                
                return str_split;
            };
            
            let s1_split = splitTokens(s1);
            let s2_split = splitTokens(s2);
        
            for(let i = 0; i < Math.max(s1_split.length, s2_split.length); i++) {
                //If both tokens are not numbers
                if(isNaN(s1_split[i]) && isNaN(s2_split[i])) {
                    if(s1_split[i] < s2_split[i]) {
                        return true;
                    } else if(s1_split[i] > s2_split[i]) {
                        return false;
                    }
                //If s1 has a number and s2 has a non-number
                } else if(!isNaN(s1_split[i]) && isNaN(s2_split[i])) {
                    return true;
                //If both are numbers
                } else if(!isNaN(s1_split[i]) && !isNaN(s2_split[i])) {
                    //If these numbers are too large, use bigint.
                    let num1 = s1_split[i] > Number.MAX_SAFE_INTEGER ?
                    BigInt(s1_split[i]) : Number(s1_split[i]);
                    let num2 = s2_split[i] > Number.MAX_SAFE_INTEGER ?
                    BigInt(s2_split[i]) : Number(s2_split[i]);
                    
                    if(num1 < num2 &&
                    !(i === s2_split.length - 1 && s1_split.length > s2_split.length)) { 
                        return true;
                    }
                    //See if both these numbers have the same numeric value BUT s1 has more leading zeros.
                    if(num1 === num2 && s1_split[i].length > s2_split[i].length) return true;
                }
                
                if(s1_split[i] === s2_split[i] && !s1_split[i + 1] && s2_split[i + 1]) return true;
            }
            
            //If values are equal or s1 is greater than s2, return false;
            return false;
        },
        arguments: {
            descriptions: [
                {
                    text: "String of Letters and Digits",
                    type: "String"
                },
                {
                    text: "Another String of Letters and Digits",
                    type: "String"
                }
            ]
        }
    },
    alternatingSums: {
        name: 'alternatingSums',
        instructions: `Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.
        You are given an array of positive integers - the weights of the people. Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.`,
        codeOutput: 
        `function alternatingSums(a) {
            const sums = [0,0];
            const firstVal = a.map((number, index) => {
                index % 2 === 1 ? sums[1] += number : sums[0] += number;
            });
            return sums;
        }`,
        code: function alternatingSums(a) {
            const sums = [0,0];
            const firstVal = a.map((number, index) => {
                return index % 2 === 1 ? sums[1] += number : sums[0] += number;
            });
            console.log(firstVal);
            return sums;
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Integers (No Brackets [])",
                    type: "NumberArray"
                }
            ]
        }
    },
    appleBoxes: {
        name: 'appleBoxes',
        instructions: `You have k apple boxes full of apples. Each square box of size m contains m × m apples. You just noticed two interesting properties about the boxes:

        The smallest box is size 1, the next one is size 2,..., all the way up to size k.
        Boxes that have an odd size contain only yellow apples. Boxes that have an even size contain only red apples.
        Your task is to calculate the difference between the number of red apples and the number of yellow apples.`,
        codeOutput: 
        `function appleBoxes(k) {
            //We know the first yellow box will have 1 apple.
            let yellow = 1;
            let red = 0;
            //For each box starting with the second, add the total to the correct box.
            for(let i = 2; i <= k; i++) {
                if(i % 2 === 0) {
                    red += (i * i);
                } else {
                    yellow += (i * i);
                }
            }
            //Return the difference.
            return red - yellow;
        }`,
        code: function appleBoxes(k) {
            //We know the first yellow box will have 1 apple.
            let yellow = 1;
            let red = 0;
            //For each box starting with the second, add the total to the correct box.
            for(let i = 2; i <= k; i++) {
                if(i % 2 === 0) {
                    red += (i * i);
                } else {
                    yellow += (i * i);
                }
            }
            //Return the difference.
            return red - yellow;
        },
        arguments: {
            descriptions: [
                {
                    text: "Positive Integer",
                    type: "Number"
                }
            ]
        }
    },
    areEquallyStrong: {
        name: 'areEquallyStrong',
        instructions: `Call two arms equally strong if the heaviest weights they each are able to lift are equal.

        Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.
        
        Given your and your friend's arms' lifting capabilities find out if you two are equally strong.`,
        codeOutput: 
        `function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
            return yourLeft + yourRight === friendsLeft + friendsRight &&
            (yourLeft === friendsLeft || yourRight === friendsRight || yourLeft === friendsRight || yourRight === friendsLeft);
        }`,
        code: function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
            return yourLeft + yourRight === friendsLeft + friendsRight &&
            (yourLeft === friendsLeft || yourRight === friendsRight || yourLeft === friendsRight || yourRight === friendsLeft);
        },
        arguments: {
            descriptions: [
                {
                    text: "Non-Negative Number (Left Arm)",
                    type: "Number"
                },
                {
                    text: "Non-Negative Number (Right Arm)",
                    type: "Number"
                },
                {
                    text: "Non-Negative Number (Friend's Left Arm)",
                    type: "Number"
                },
                {
                    text: "Non-Negative Number (Friend's Right Arm)",
                    type: "Number"
                }
            ]
        }
    },
    areIsomorphic: {
        name: 'areIsomorphic',
        instructions: `Two two-dimensional arrays are isomorphic if they have the same number of rows and each pair of respective rows contains the same number of elements.

        Given two two-dimensional arrays, check if they are isomorphic.`,
        codeOutput: 
        `function areIsomorphic(array1, array2) {
            //First, check that the number of rows are the same, then iterate over each array in the first and match the length to the corresponding length of the one in array2 (using every method)
            return array1.length === array2.length && array1.every((array, index) => array.length === array2[index].length);
        }`,
        code: function areIsomorphic(array1, array2) {
            //First, check that the number of rows are the same, then iterate over each array in the first and match the length to the corresponding length of the one in array2 (using every method)
            return array1.length === array2.length && array1.every((array, index) => array.length === array2[index].length);
        },
        arguments: {
            descriptions: [
                {
                    text: "Two-Dimensional Array (Without Outer Brackets []; In Form Of [1],[1,2]...)",
                    type: "StringArray"
                },
                {
                    text: "Two-Dimensional Array (Without Outer Brackets []; In Form Of [1],[1,2]...)",
                    type: "StringArray"
                }
            ]
        }
    },
    areSimilar: {
        name: 'areSimilar',
        instructions: `Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

        Given two arrays a and b, check whether they are similar.`,
        codeOutput: 
        `function areSimilar(a, b) {
            //Placeholder elements for swapping if needed
            let firstElement = null;
            let secondElement = null;
            
            //Identify first two unlike elements(will be swapped)
            a.forEach((element, index) => {
                if(element !== b[index]) {
                    firstElement === null ? firstElement = index : secondElement === null ? secondElement = index : null;
                }
            });
            
            //If there are two unlike elements, swap them.
            if(firstElement !== null && secondElement !== null) {
                [a[firstElement], a[secondElement]] = [a[secondElement], a[firstElement]];
            }
            
            //Assume the arrays are equal.
            let isEqual = true;
            
            //See if any elements are not the same.
            a.forEach((element, index) => {
                if(element !== b[index]) {
                    isEqual = false;
                }
            });
            
            //Return true or false depending on if arrays are the same now.
            if(isEqual) return true;
            
            return false;
        }`,
        code: function areSimilar(a, b) {
            //Placeholder elements for swapping if needed
            let firstElement = null;
            let secondElement = null;
            
            //Identify first two unlike elements(will be swapped)
            a.forEach((element, index) => {
                if(element !== b[index]) {
                    //Refactor the following line in order to prevent error in this environment.
                    //firstElement === null ? firstElement = index : secondElement === null ? secondElement = index : null;
                    if(firstElement === null) {
                        firstElement = index;
                    } else if(secondElement === null) {
                        secondElement = index;
                    } 
                }
            });
            
            //If there are two unlike elements, swap them.
            if(firstElement !== null && secondElement !== null) {
                [a[firstElement], a[secondElement]] = [a[secondElement], a[firstElement]];
            }
            
            //Assume the arrays are equal.
            let isEqual = true;
            
            //See if any elements are not the same.
            a.forEach((element, index) => {
                if(element !== b[index]) {
                    isEqual = false;
                }
            });
            
            //Return true or false depending on if arrays are the same now.
            if(isEqual) return true;
            
            return false;
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Integers (No Brackets [])",
                    type: "NumberArray"
                },
                {
                    text: "Array of Integers (Same Length As First)",
                    type: "NumberArray"
                }
            ]
        }
    },
    areSimilar2: {
        name: 'areSimilar2',
        instructions: `Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

        Given two arrays a and b, check whether they are similar.`,
        codeOutput: 
        `function areSimilar2(a, b) {
            //Helper function to see if arrays are equal.
            const arrayCheck = (arr1, arr2) => {
                for(let i = 0; i < arr1.length; i++) {
                    if(arr1[i] !== arr2[i]) return false;
                }
                return true;
            };
            
            //Go through each element in array a, and compare to the current element of array b.
            for(let i = 0; i < a.length; i++) {
                //Once we find an unequal value, traverse through both arrays after this point simultaneously to find a spot where the values are equal and in opposite positions, then swap.
                if(a[i] !== b[i]) {
                    for(let j = i + 1; j < b.length; j++) {
                        if(a[i] === b[j] && b[i] === a[j]) {
                            [b[i], b[j]] = [b[j], b[i]];
                            //Run an array check now to ensure only one swap is done.
                            return arrayCheck(a, b);
                        }
                    }
                }
            }
            
            return arrayCheck(a, b);
        }`,
        code: function areSimilar2(a, b) {
            //Helper function to see if arrays are equal.
            const arrayCheck = (arr1, arr2) => {
                for(let i = 0; i < arr1.length; i++) {
                    if(arr1[i] !== arr2[i]) return false;
                }
                return true;
            };
            
            //Go through each element in array a, and compare to the current element of array b.
            for(let i = 0; i < a.length; i++) {
                //Once we find an unequal value, traverse through both arrays after this point simultaneously to find a spot where the values are equal and in opposite positions, then swap.
                if(a[i] !== b[i]) {
                    for(let j = i + 1; j < b.length; j++) {
                        if(a[i] === b[j] && b[i] === a[j]) {
                            [b[i], b[j]] = [b[j], b[i]];
                            //Run an array check now to ensure only one swap is done.
                            return arrayCheck(a, b);
                        }
                    }
                }
            }
            
            return arrayCheck(a, b);
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Integers (No Brackets [])",
                    type: "NumberArray"
                },
                {
                    text: "Array of Integers (Same Length As First)",
                    type: "NumberArray"
                }
            ]
        }
    },
    arithmeticExpression: {
        name: 'arithmeticExpression',
        instructions: `Consider an arithmetic expression of the form a#b=c. Check whether it is possible to replace # with one of the four signs: +, -, * or / to obtain a correct expression.`,
        codeOutput: 
        `function arithmeticExpression(a, b, c) {
            return a + b === c ? 
            true : 
            a - b === c ? 
            true : 
            a * b === c ? 
            true : 
            a / b === c ? 
            true : 
            false;
        }`,
        code: function arithmeticExpression(a, b, c) {
            return a + b === c ? 
            true : 
            a - b === c ? 
            true : 
            a * b === c ? 
            true : 
            a / b === c ? 
            true : 
            false;
        },
        arguments: {
            descriptions: [
                {
                    text: "Number to Represent 'a'",
                    type: "Number"
                },
                {
                    text: "Number to Represent 'b'",
                    type: "Number"
                },
                {
                    text: "Number to Represent 'c'",
                    type: "Number"
                }
            ]
        }
    },
    arrayChange: {
        name: 'arrayChange',
        instructions: `You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.`,
        codeOutput: 
        `function arrayChange(inputArray) {
            let totalCount = 0;
            //Start with the beginning of the array.
            let currentVal = inputArray[0];
            
            for(let i = 1; i < inputArray.length; i++) {
                //Go through each element, compare to last element, and increment if needed (include in the total count)
                while(inputArray[i] <= currentVal) {
                    inputArray[i] = inputArray[i] + 1;
                    totalCount++;
                }
                
                //Store this new element as the one to compare to next.
                currentVal = inputArray[i];
            }
            
            //Return total number of increments.
            return totalCount;
        }`,
        code: function arrayChange(inputArray) {
            let totalCount = 0;
            //Start with the beginning of the array.
            let currentVal = inputArray[0];
            
            for(let i = 1; i < inputArray.length; i++) {
                //Go through each element, compare to last element, and increment if needed (include in the total count)
                while(inputArray[i] <= currentVal) {
                    inputArray[i] = inputArray[i] + 1;
                    totalCount++;
                }
                
                //Store this new element as the one to compare to next.
                currentVal = inputArray[i];
            }
            
            //Return total number of increments.
            return totalCount;
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Integers (Without Brackets [])",
                    type: "NumberArray"
                }
            ]
        }
    },
    concatenateArrays: {
        name: 'concatenateArrays',
        instructions: `Given two arrays of integers a and b, obtain the array formed by the elements of a followed by the elements of b.`,
        codeOutput: 
        `function concatenateArrays(a, b) {
            return a.concat(...b);
        }`,
        code: function concatenateArrays(a, b) {
            return a.concat(...b);
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Integers (Without Brackets [])",
                    type: "NumberArray"
                },
                {
                    text: "Array of Integers (Without Brackets [])",
                    type: "NumberArray"
                }
            ]
        }
    },
    arrayConversion: {
        name: 'arrayConversion',
        instructions: `Given an array of 2k integers (for some integer k), perform the following operations until the array contains only one element:

        On the 1st, 3rd, 5th, etc. iterations (1-based) replace each pair of consecutive elements with their sum;
        On the 2nd, 4th, 6th, etc. iterations replace each pair of consecutive elements with their product.
        After the algorithm has finished, there will be a single element left in the array. Return that element.`,
        codeOutput: 
        `function arrayConversion(inputArray) {
            //Keep track of the 'current' ouput array, which starts as the input.
            let output = inputArray;
            //Keep track of whether values are being added nor not.
            let add = true;
            while(output.length > 1) {
                //Build a new array.
                let thisArray = [];
                //For each element, decide whether to add or multiply the next two values.
                for(let i = 0; i < output.length; i += 2) {
                    if(add) {
                        thisArray.push(output[i] + output[i + 1]);
                    } else {
                        thisArray.push(output[i] * output[i + 1]);
                    }
                }
                //Toggle add/multiply and reset array.
                add = !add;
                output = thisArray;
            }
            //Return the first/only array value.
            return output[0];
        }`,
        code: function arrayConversion(inputArray) {
            //Keep track of the 'current' ouput array, which starts as the input.
            let output = inputArray;
            //Keep track of whether values are being added nor not.
            let add = true;
            while(output.length > 1) {
                //Build a new array.
                let thisArray = [];
                //For each element, decide whether to add or multiply the next two values.
                for(let i = 0; i < output.length; i += 2) {
                    if(add) {
                        thisArray.push(output[i] + output[i + 1]);
                    } else {
                        thisArray.push(output[i] * output[i + 1]);
                    }
                }
                //Toggle add/multiply and reset array.
                add = !add;
                output = thisArray;
            }
            //Return the first/only array value.
            return output[0];
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Integers With 2^n Number of Elements (No Brackets [])",
                    type: "NumberArray"
                }
            ]
        }
    },
    arrayMaximalAdjacentDifference: {
        name: 'arrayMaximalAdjacentDifference',
        instructions: `Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.`,
        codeOutput: 
        `function arrayMaximalAdjacentDifference(inputArray) {
            let largestDifference = 0;
            
            //For every element, get the absolute value of the difference between it and its adjacent element.
            for(let i = 0; i < inputArray.length - 1; i++) {
                let thisDifference = Math.abs(inputArray[i + 1] - inputArray[i]);
                if(thisDifference > largestDifference) largestDifference = thisDifference;
            }
            
            //Return the largest difference.
            return largestDifference;
        }`,
        code: function arrayMaximalAdjacentDifference(inputArray) {
            let largestDifference = 0;
            
            //For every element, get the absolute value of the difference between it and its adjacent element.
            for(let i = 0; i < inputArray.length - 1; i++) {
                let thisDifference = Math.abs(inputArray[i + 1] - inputArray[i]);
                if(thisDifference > largestDifference) largestDifference = thisDifference;
            }
            
            //Return the largest difference.
            return largestDifference;
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Integers (No Brackets [])",
                    type: "NumberArray"
                }
            ]
        }
    },
    arrayPacking: {
        name: 'arrayPacking',
        instructions: `You are given an array of up to four non-negative integers, each less than 256.

        Your task is to pack these integers into one number M in the following way:
        
        The first element of the array occupies the first 8 bits of M;
        The second element occupies next 8 bits, and so on.
        Return the obtained integer M.
        
        Note: the phrase "first bits of M" refers to the least significant bits of M - the right-most bits of an integer. For further clarification see the following example.`,
        codeOutput: 
        `function arrayPacking(a) {
            //Create binary representation of this number as an array, reverse the order, and join together.
            let binary = a.map(number => {
                let thisBinary = number.toString(2);
                while(thisBinary.length < 8) {
                    thisBinary = "0" + thisBinary;
                }
                return thisBinary;
            });
            let binaryJoin = binary.reverse().join("");
            //Sum up the total by going through each character (from the right), and adding the correct power of 2 to the total.
            let total = 0;
            for(let i = 0; i < binaryJoin.length; i++) {
                if (binaryJoin[binaryJoin.length - 1 - i] === "1") total += (2 ** i);
            }
            return total;
        }`,
        code: function arrayPacking(a) {
            //Create binary representation of this number as an array, reverse the order, and join together.
            let binary = a.map(number => {
                let thisBinary = number.toString(2);
                while(thisBinary.length < 8) {
                    thisBinary = "0" + thisBinary;
                }
                return thisBinary;
            });
            let binaryJoin = binary.reverse().join("");
            //Sum up the total by going through each character (from the right), and adding the correct power of 2 to the total.
            let total = 0;
            for(let i = 0; i < binaryJoin.length; i++) {
                if (binaryJoin[binaryJoin.length - 1 - i] === "1") total += (2 ** i);
            }
            return total;
        },
        arguments: {
            descriptions: [
                {
                    text: "Array (4 Elements Max) of Non-Negative Integers (< 256)",
                    type: "NumberArray"
                }
            ]
        }
    },
    arrayPairSum: {
        name: `arrayPairSum`,
        instructions: `Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.`,
        codeOutput: 
        `var arrayPairSum = function(nums) {
            //Sort the numbers from least to greatest
            nums.sort((a, b) => a - b);
            
            //Store the sum.
            let sum = 0;
            
            //Since these numbers are grouped by being sorted, add every other number.
            for(let i = 0; i < nums.length; i += 2) {
                sum += nums[i];
            }
            
            return sum;
        };`,
        code: function arrayPairSum(nums) {
            //Sort the numbers from least to greatest
            nums.sort((a, b) => a - b);
            
            //Store the sum.
            let sum = 0;
            
            //Since these numbers are grouped by being sorted, add every other number.
            for(let i = 0; i < nums.length; i += 2) {
                sum += nums[i];
            }
            
            return sum;
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Integers with Even Length (e.g 5,3,9,1,0,2)",
                    type: "NumberArray"
                }
            ]
        }
    },
    arrayPreviousLess: {
        name: 'arrayPreviousLess',
        instructions: `Given array of integers, for each position i, search among the previous positions for the last (from the left) position that contains a smaller value. Store this value at position i in the answer. If no such value can be found, store -1 instead.`,
        codeOutput: 
        `function arrayPreviousLess(items) {
            let output = items.map((item, index) => {
                //Traverse backwards in items from this position until we find (or not find) a value less than the current element.
                let thisElement = -1;
                //If we find one, replace -1 with that value.
                for(let i = index - 1; i >= 0; i--) {
                    if(items[i] < item) {
                        thisElement = items[i];
                        break;
                    }
                }
                return thisElement;
            }); 
            return output;
        }`,
        code: function arrayPreviousLess(items) {
            let output = items.map((item, index) => {
                //Traverse backwards in items from this position until we find (or not find) a value less than the current element.
                let thisElement = -1;
                //If we find one, replace -1 with that value.
                for(let i = index - 1; i >= 0; i--) {
                    if(items[i] < item) {
                        thisElement = items[i];
                        break;
                    }
                }
                return thisElement;
            }); 
            return output;
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Integers (No Brackets [])",
                    type: "NumberArray"
                }
            ]
        }
    },
    arrayReplace: {
        name: 'arrayReplace',
        instructions: `Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.`,
        codeOutput: 
        `function arrayReplace(inputArray, elemToReplace, substitutionElem) {
            //Loop through every element. Using map, return the new element if the element matches the one to be replaced. Otherwise, return the same.
            let output = inputArray.map(element => {
                if(element === elemToReplace) {
                    return substitutionElem;
                } else {
                    return element;
                }
            });
            return output; 
        }`,
        code: function arrayReplace(inputArray, elemToReplace, substitutionElem) {
            //Loop through every element. Using map, return the new element if the element matches the one to be replaced. Otherwise, return the same.
            let output = inputArray.map(element => {
                if(element === elemToReplace) {
                    return substitutionElem;
                } else {
                    return element;
                }
            });
            return output; 
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Integers (No Brackets [])",
                    type: "NumberArray"
                },
                {
                    text: "Number to Replace",
                    type: "Number"
                },
                {
                    text: "Number to Replace With",
                    type: "Number"
                }
            ]
        }
    },
    avoidObstacles: {
        name: 'avoidObstacles',
        instructions: `You are given an array of integers representing coordinates of obstacles situated on a straight line.

        Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.
        
        Find the minimal length of the jump enough to avoid all the obstacles.`,
        codeOutput: 
        `function avoidObstacles(inputArray) {
            let maxAmount = Math.max(...inputArray);
            for(let i = 2; i < inputArray.length + i - 1; i++) {
                
                let isValid = true;
                
                for(let j = 0; j < maxAmount + i; j += i) {
                    if(inputArray.some(element => element === j)) {
                        isValid = false;
                    }
                }
                
                if(isValid) return i;
            }
            
            return null;
        }`,
        code: function avoidObstacles(inputArray) {
            let maxAmount = Math.max(...inputArray);
            for(let i = 2; i < inputArray.length + i - 1; i++) {
                
                let isValid = true;
                
                for(let j = 0; j < maxAmount + i; j += i) {
                    if(inputArray.some(element => element === j)) {
                        isValid = false;
                    }
                }
                
                if(isValid) return i;
            }
            
            return null;
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Integers (No Brackets [])",
                    type: "NumberArray"
                }
            ]
        }
    },
    backspaceCompare: {
        name: `backspaceCompare`,
        instructions: `Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

        Note that after backspacing an empty text, the text will continue empty.`,
        codeOutput: 
        `var backspaceCompare = function(s, t) {
            //Build the 'typed' string for each input.
            let current_s = typeString(s);
            let current_t = typeString(t);
            
            return current_s === current_t ? true : false;
            
            //Helper function to 'type out' string.
            function typeString(str) {
                //Store typed-out string in array form.
                let current_str = [];
                
                for(let i = 0; i < str.length; i++) {
                    //Remove the last character if this is a #, otherwise add to it.
                    if(str[i] === "#") {
                        current_str.pop();
                    } else {
                        current_str.push(str[i]);
                    }
                }
                
                //Return string representation.
                return current_str.join("");
            }
        };`,
        code: function backspaceCompare(s, t) {
            //Build the 'typed' string for each input.
            let current_s = typeString(s);
            let current_t = typeString(t);
            
            return current_s === current_t ? true : false;
            
            //Helper function to 'type out' string.
            function typeString(str) {
                //Store typed-out string in array form.
                let current_str = [];
                
                for(let i = 0; i < str.length; i++) {
                    //Remove the last character if this is a #, otherwise add to it.
                    if(str[i] === "#") {
                        current_str.pop();
                    } else {
                        current_str.push(str[i]);
                    }
                }
                
                //Return string representation.
                return current_str.join("");
            }
        },
        arguments: {
            descriptions: [
                {
                    text: "First String",
                    type: "String"
                },
                {
                    text: "Second String",
                    type: "String"
                }
            ]
        }
    },
    beautifulText: {
        name: 'beautifulText',
        instructions: `Consider a string containing only letters and whitespaces. It is allowed to replace some (possibly, none) whitespaces with newline symbols to obtain a multiline text. Call a multiline text beautiful if and only if each of its lines (i.e. substrings delimited by a newline character) contains an equal number of characters (only letters and whitespaces should be taken into account when counting the total while newline characters shouldn't). Call the length of the line the text width.

        Given a string and some integers l and r (l ≤ r), check if it's possible to obtain a beautiful text from the string with a text width that's within the range [l, r].`,
        codeOutput: 
        `function beautifulText(inputString, l, r) {
            //Loop through all ranges within l -> r.
            for(let i = l; i <= r; i++) {
                //See if all of these indexes within this range of characters has a space at the end
                //Keep track of the offset(number of times to skip over spaces) and the current index, based on the current length.
                let offset = 0;
                let currentIndex = i;
                //Check if all indexes within this size range are spaces.
                while(inputString[currentIndex + offset] === " ") {
                    //Add this iteration to the offset
                    offset++;
                    //If we have reached the last possible space, make sure this splits the string into 3 strings of the same length.
                    if(currentIndex + offset + i >= inputString.length - 1) {
                        if((inputString.length - offset) / (offset + 1) === i) return true;
                    }
                    //Move on to next index within this range.
                    currentIndex += i;
                }
            }
            
            return false;
        }`,
        code: function beautifulText(inputString, l, r) {
            //Loop through all ranges within l -> r.
            for(let i = l; i <= r; i++) {
                //See if all of these indexes within this range of characters has a space at the end
                //Keep track of the offset(number of times to skip over spaces) and the current index, based on the current length.
                let offset = 0;
                let currentIndex = i;
                //Check if all indexes within this size range are spaces.
                while(inputString[currentIndex + offset] === " ") {
                    //Add this iteration to the offset
                    offset++;
                    //If we have reached the last possible space, make sure this splits the string into 3 strings of the same length.
                    if(currentIndex + offset + i >= inputString.length - 1) {
                        if((inputString.length - offset) / (offset + 1) === i) return true;
                    }
                    //Move on to next index within this range.
                    currentIndex += i;
                }
            }
            
            return false;
        },
        arguments: {
            descriptions: [
                {
                    text: "String of Text (Letters and Whitespace; Quotes Not Needed)",
                    type: "String"
                },
                {
                    text: "Positive Integer (Left Range)",
                    type: "Number"
                },
                {
                    text: "Positive Integer (Right Range)",
                    type: "Number"
                }
            ]
        }
    },
    binaryGap: {
        name: `binaryGap`,
        instructions: `Given a positive integer n, find and return the longest distance between any two adjacent 1's in the binary representation of n. If there are no two adjacent 1's, return 0.

        Two 1's are adjacent if there are only 0's separating them (possibly no 0's). The distance between two 1's is the absolute difference between their bit positions. For example, the two 1's in "1001" have a distance of 3.`,
        codeOutput: 
        `var binaryGap = function(n) {
            let greatestDistance = 0;
            let currentDistance = 0;
            
            //Create a binary representation of the integer.
            let binaryString = n.toString(2);
            
            //Iterate through every bit.
            for(let i = 0; i < binaryString.length; i++) {
                if(binaryString[i] === "1") {
                    //Only count this distance if this "1" is not the first character.
                    if(i !== 0) currentDistance++;
                    //See if this gap is the new greatest.
                    greatestDistance = currentDistance > greatestDistance ? currentDistance : greatestDistance;
                    //Reset the gap.
                    currentDistance = 0;
                } else {
                    //If this is a "0" then add to the distance.
                    currentDistance ++;
                }
            }
            
            return greatestDistance;
        };`,
        code: function binaryGap(n) {
            let greatestDistance = 0;
            let currentDistance = 0;
            
            //Create a binary representation of the integer.
            let binaryString = n.toString(2);
            
            //Iterate through every bit.
            for(let i = 0; i < binaryString.length; i++) {
                if(binaryString[i] === "1") {
                    //Only count this distance if this "1" is not the first character.
                    if(i !== 0) currentDistance++;
                    //See if this gap is the new greatest.
                    greatestDistance = currentDistance > greatestDistance ? currentDistance : greatestDistance;
                    //Reset the gap.
                    currentDistance = 0;
                } else {
                    //If this is a "0" then add to the distance.
                    currentDistance ++;
                }
            }
            
            return greatestDistance;
        },
        arguments: {
            descriptions: [
                {
                    text: "Whole Number Integer",
                    type: "Number"
                }
            ]
        }
    },
    bishopAndPawn: {
        name: 'bishopAndPawn',
        instructions: `Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.

        The bishop has no restrictions in distance for each move, but is limited to diagonal movement. Check out the example below to see how it can move:`,
        codeOutput: 
        `function bishopAndPawn(bishop, pawn) {
            let currentSquare = bishop;
            let currentLetter = currentSquare[0];
            let currentNumber = Number(currentSquare[1]);
            
            //Check up-right
            while(currentLetter < "h" && currentNumber < 8) {
                currentLetter = String.fromCharCode(currentLetter.charCodeAt(0) + 1);
                currentNumber++;
                currentSquare = currentLetter + currentNumber;
                if(currentSquare === pawn) return true;
            }
            
            currentSquare = bishop;
            currentLetter = currentSquare[0];
            currentNumber = Number(currentSquare[1]);
            
            //Check down-right
            while(currentLetter < "h" && currentNumber > 1) {
                currentLetter = String.fromCharCode(currentLetter.charCodeAt(0) + 1);
                currentNumber--;
                currentSquare = currentLetter + currentNumber;
                if(currentSquare === pawn) return true;
            }
            
            currentSquare = bishop;
            currentLetter = currentSquare[0];
            currentNumber = Number(currentSquare[1]);
            
            //Check down-left
            while(currentLetter > "a" && currentNumber > 1) {
                currentLetter = String.fromCharCode(currentLetter.charCodeAt(0) - 1);
                currentNumber--;
                currentSquare = currentLetter + currentNumber;
                if(currentSquare === pawn) return true;
            }
            
            currentSquare = bishop;
            currentLetter = currentSquare[0];
            currentNumber = Number(currentSquare[1]);
            
            //Check up-left
            while(currentLetter > "a" && currentNumber < 8) {
                currentLetter = String.fromCharCode(currentLetter.charCodeAt(0) - 1);
                currentNumber++;
                currentSquare = currentLetter + currentNumber;
                if(currentSquare === pawn) return true;
            }
            
            return false;
        }`,
        code: function bishopAndPawn(bishop, pawn) {
            let currentSquare = bishop;
            let currentLetter = currentSquare[0];
            let currentNumber = Number(currentSquare[1]);
            
            //Check up-right
            while(currentLetter < "h" && currentNumber < 8) {
                currentLetter = String.fromCharCode(currentLetter.charCodeAt(0) + 1);
                currentNumber++;
                currentSquare = currentLetter + currentNumber;
                if(currentSquare === pawn) return true;
            }
            
            currentSquare = bishop;
            currentLetter = currentSquare[0];
            currentNumber = Number(currentSquare[1]);
            
            //Check down-right
            while(currentLetter < "h" && currentNumber > 1) {
                currentLetter = String.fromCharCode(currentLetter.charCodeAt(0) + 1);
                currentNumber--;
                currentSquare = currentLetter + currentNumber;
                if(currentSquare === pawn) return true;
            }
            
            currentSquare = bishop;
            currentLetter = currentSquare[0];
            currentNumber = Number(currentSquare[1]);
            
            //Check down-left
            while(currentLetter > "a" && currentNumber > 1) {
                currentLetter = String.fromCharCode(currentLetter.charCodeAt(0) - 1);
                currentNumber--;
                currentSquare = currentLetter + currentNumber;
                if(currentSquare === pawn) return true;
            }
            
            currentSquare = bishop;
            currentLetter = currentSquare[0];
            currentNumber = Number(currentSquare[1]);
            
            //Check up-left
            while(currentLetter > "a" && currentNumber < 8) {
                currentLetter = String.fromCharCode(currentLetter.charCodeAt(0) - 1);
                currentNumber++;
                currentSquare = currentLetter + currentNumber;
                if(currentSquare === pawn) return true;
            }
            
            return false;
        },
        arguments: {
            descriptions: [
                {
                    text: "Bishop Location (In Form Of [a-h][1-8])",
                    type: "String"
                },
                {
                    text: "Pawn Location (In Form Of [a-h][1-8])",
                    type: "String"
                }
            ]
        }
    },
    bishopDiagonal: {
        name: 'bishopDiagonal',
        instructions: `In the Land Of Chess, bishops don't really like each other. In fact, when two bishops happen to stand on the same diagonal, they immediately rush towards the opposite ends of that same diagonal.

        Given the initial positions (in chess notation) of two bishops, bishop1 and bishop2, calculate their future positions. Keep in mind that bishops won't move unless they see each other along the same diagonal.`,
        codeOutput: 
        `function bishopDiagonal(bishop1, bishop2) {
            //See if bishops lie on different diagonals. If so, return initial values.
            if(!(Math.abs(bishop1.charCodeAt(0) - bishop2.charCodeAt(0)) === Math.abs(bishop1.charCodeAt(1) - bishop2.charCodeAt(1)))) return [bishop1, bishop2].sort();
            
            //Otherwise, find which directions each bishop will travel.
        
            //Helper function to move Bishops
            const moveBishops = (bishopInput, letter, number) => {
                //Taking the bishop's starting location, continue to move in the correct diagonal direction until it reaches bounds.
                let bishop = bishopInput;
                while((bishop[0] > "a" && bishop[0]) < "h" &&
                (bishop[1] > 1 && bishop[1] < 8)) {
                    console.log("In a loop")
                    //Update letter
                    bishop = letter === "add" ? 
                    String.fromCharCode(bishop.charCodeAt(0) + 1) + bishop[1] :
                    String.fromCharCode(bishop.charCodeAt(0) - 1) + bishop[1];
                    
                    //Update number
                    bishop = number === "add" ? 
                    bishop[0] + String(Number(bishop[1]) + 1) :
                    bishop[0] + String(Number(bishop[1]) - 1);
                }
                //Return the updated position.
                return bishop;
            };
            
            //Move Bishop 1
            let currentBishop1 = moveBishops(
                bishop1, 
                bishop1[0] > bishop2[0] ? "add" : "subtract",
                bishop1[1] > bishop2[1] ? "add" : "subtract"
            );
            
            //Move Bishop 2
            let currentBishop2 = moveBishops(
                bishop2, 
                bishop2[0] > bishop1[0] ? "add" : "subtract",
                bishop2[1] > bishop1[1] ? "add" : "subtract"
            );
            
            //Return final resting positions.
            return [currentBishop1, currentBishop2].sort();
        }`,
        code: function bishopDiagonal(bishop1, bishop2) {
            //See if bishops lie on different diagonals. If so, return initial values.
            if(!(Math.abs(bishop1.charCodeAt(0) - bishop2.charCodeAt(0)) === Math.abs(bishop1.charCodeAt(1) - bishop2.charCodeAt(1)))) return [bishop1, bishop2].sort();
            
            //Otherwise, find which directions each bishop will travel.
        
            //Helper function to move Bishops
            const moveBishops = (bishopInput, letter, number) => {
                //Taking the bishop's starting location, continue to move in the correct diagonal direction until it reaches bounds.
                let bishop = bishopInput;
                while((bishop[0] > "a" && bishop[0]) < "h" &&
                (bishop[1] > 1 && bishop[1] < 8)) {
                    console.log("In a loop")
                    //Update letter
                    bishop = letter === "add" ? 
                    String.fromCharCode(bishop.charCodeAt(0) + 1) + bishop[1] :
                    String.fromCharCode(bishop.charCodeAt(0) - 1) + bishop[1];
                    
                    //Update number
                    bishop = number === "add" ? 
                    bishop[0] + String(Number(bishop[1]) + 1) :
                    bishop[0] + String(Number(bishop[1]) - 1);
                }
                //Return the updated position.
                return bishop;
            };
            
            //Move Bishop 1
            let currentBishop1 = moveBishops(
                bishop1, 
                bishop1[0] > bishop2[0] ? "add" : "subtract",
                bishop1[1] > bishop2[1] ? "add" : "subtract"
            );
            
            //Move Bishop 2
            let currentBishop2 = moveBishops(
                bishop2, 
                bishop2[0] > bishop1[0] ? "add" : "subtract",
                bishop2[1] > bishop1[1] ? "add" : "subtract"
            );
            
            //Return final resting positions.
            return [currentBishop1, currentBishop2].sort();
        },
        arguments: {
            descriptions: [
                {
                    text: "First Bishop Location (In Form Of [a-h][1-8])",
                    type: "String"
                },
                {
                    text: "Second Bishop Location (In Form Of [a-h][1-8])",
                    type: "String"
                }
            ]
        }
    },
    bitwiseComplement: {
        name: `bitwiseComplement`,
        instructions: `The complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its binary representation.

        For example, The integer 5 is "101" in binary and its complement is "010" which is the integer 2.
        Given an integer n, return its complement.`,
        codeOutput: 
        `var bitwiseComplement = function(n) {
            //ParseInt will turn the result of everything BACK into an integer.
            //Turn n to a binary string, split into an array, and flip the bits.
            return parseInt(n
                .toString(2)
                .split("")
                .map(bit => {
                    return bit === "1" ? "0" : "1";
                })
                .join(""), 2);
        };`,
        code: function bitwiseComplement(n) {
            //ParseInt will turn the result of everything BACK into an integer.
            //Turn n to a binary string, split into an array, and flip the bits.
            return parseInt(n
                .toString(2)
                .split("")
                .map(bit => {
                    return bit === "1" ? "0" : "1";
                })
                .join(""), 2);
        },
        arguments: {
            descriptions: [
                {
                    text: "Integer",
                    type: "Number"
                }
            ]
        }
    },
    boxBlur: {
        name: 'boxBlur',
        instructions: `Last night you partied a little too hard. Now there's a black and white photo of you that's about to go viral! You can't let this ruin your reputation, so you want to apply the box blur algorithm to the photo to hide its content.

        The pixels in the input image are represented as integers. The algorithm distorts the input image in the following way: Every pixel x in the output image has a value equal to the average value of the pixel values from the 3 × 3 square that has its center at x, including x itself. All the pixels on the border of x are then removed.
        
        Return the blurred image as an integer, with the fractions rounded down.`,
        codeOutput: 
        `function boxBlur(image) {
            //Create output array
            let output = [];
            //Loop through all sets of 3 rows
            for(let i = 0; i <= image.length - 3; i++) {
                
                //Create this 'row' of the output array.
                let thisRow = [];
                
                //Loop through all sets of 3 cols
                for(let j = 0; j <= image[i].length - 3; j++) {
                    //Create the total of all 9 elements
                    let total = 0;
                    //Isolate the elements in this square and add them together  
                    for(let i_prime = i; i_prime <= i + 2; i_prime++) {
                        //Count the squares.
                        for(let j_prime = j; j_prime <= j + 2; j_prime++) {
                            total += image[i_prime][j_prime];
                        }
                    }
                    //Push this row to the array.
                    thisRow.push(Math.floor(total / 9));
                }
                
                //Add this completed row to the output square.
                output.push(thisRow);
            }
            //Return the completed output
            return output;
        }`,
        code: function boxBlur(image) {
            //Create output array
            let output = [];
            //Loop through all sets of 3 rows
            for(let i = 0; i <= image.length - 3; i++) {
                
                //Create this 'row' of the output array.
                let thisRow = [];
                
                //Loop through all sets of 3 cols
                for(let j = 0; j <= image[i].length - 3; j++) {
                    //Create the total of all 9 elements
                    let total = 0;
                    //Isolate the elements in this square and add them together  
                    for(let i_prime = i; i_prime <= i + 2; i_prime++) {
                        //Count the squares.
                        for(let j_prime = j; j_prime <= j + 2; j_prime++) {
                            total += image[i_prime][j_prime];
                        }
                    }
                    //Push this row to the array.
                    thisRow.push(Math.floor(total / 9));
                }
                
                //Add this completed row to the output square.
                output.push(thisRow);
            }
            //Return the completed output
            return output;
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Integer Arrays (0 - 255) - At Least 3 x 3 (Form of [1,2,3], [1,2,3]... * One Space Between Arrays)",
                    type: "NumberArrayArray"
                }
            ]
        }
    },
    boxesPacking: {
        name: 'boxesPacking',
        instructions: `You are given n rectangular boxes, the ith box has the length lengthi, the width widthi and the height heighti. Your task is to check if it is possible to pack all boxes into one so that inside each box there is no more than one another box (which, in turn, can contain at most one another box, and so on). More formally, your task is to check whether there is such sequence of n different numbers pi (1 ≤ pi ≤ n) that for each 1 ≤ i < n the box number pi can be put into the box number pi+1.
        A box can be put into another box if all sides of the first one are less than the respective ones of the second one. You can rotate each box as you wish, i.e. you can swap its length, width and height if necessary.`,
        codeOutput: 
        `function boxesPacking(length, width, height) {
            //Get all boxes with their dimensions.
            let boxes = [];
            for(let i = 0; i < arguments[0].length; i++) {
                //Get all boxes with their dimensions.
                let box = {
                    dimensions: [length[i], width[i], height[i]].sort((a, b) => a - b),
                    sum: length[i] + width[i] + height[i]
                }
                boxes.push(box);
            }
            
            //Sort by sums so that the overall box sizes are ordered.
            boxes.sort((a, b) => (a.sum > b.sum) ? 1 : -1);
            
            //Verify that for every box, the box that came before has dimensions that are all smaller.
            for(let i = 1; i < boxes.length; i++) {
                //Go through each sorted dimension.
                for(let j = 0; j < arguments.length; j++) {
                    //If we find equal or greater values in the previous box's dimensions, return false.
                    if(!(boxes[i]["dimensions"][j] > boxes[i - 1]["dimensions"][j])) return false;
                }
            }
            
            return true;
        }`,
        code: function boxesPacking(length, width, height) {
            //Get all boxes with their dimensions.
            let boxes = [];
            for(let i = 0; i < arguments[0].length; i++) {
                //Get all boxes with their dimensions.
                let box = {
                    dimensions: [length[i], width[i], height[i]].sort((a, b) => a - b),
                    sum: length[i] + width[i] + height[i]
                }
                boxes.push(box);
            }
            
            //Sort by sums so that the overall box sizes are ordered.
            boxes.sort((a, b) => (a.sum > b.sum) ? 1 : -1);
            
            //Verify that for every box, the box that came before has dimensions that are all smaller.
            for(let i = 1; i < boxes.length; i++) {
                //Go through each sorted dimension.
                for(let j = 0; j < arguments.length; j++) {
                    //If we find equal or greater values in the previous box's dimensions, return false.
                    if(!(boxes[i]["dimensions"][j] > boxes[i - 1]["dimensions"][j])) return false;
                }
            }
            
            return true;
        },
        arguments: {
            descriptions: [
                {
                    text: "Length: Array of Positive Integers (No Brackets [])",
                    type: "NumberArray"
                },
                {
                    text: "Width: Array of Positive Integers (No Brackets []) - Same Array Length",
                    type: "NumberArray"
                },
                {
                    text: "Height: Array of Positive Integers (No Brackets []) - Same Array Length",
                    type: "NumberArray"
                }
            ]
        }
    },
    buddyStrings: {
        name: `buddyStrings`,
        instructions: `Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.

        Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].
        
        For example, swapping at indices 0 and 2 in "abcd" results in "cbad".`,
        codeOutput: 
        `var buddyStrings = function(s, goal) {
            //If s already equals goal, see if two characters can be swapped around anyway to still result in equal strings.
            if(s === goal) {
                let charMap = {};
                for(let i = 0; i < s.length; i++) {
                    if(charMap[s[i]]) {
                        charMap[s[i]]++;
                    } else {
                        charMap[s[i]] = 1;
                    }
                }
                //If any character exists more than once, then we can swap those two instances.
                if(Object.values(charMap).some(count => count > 1)) return true;
                return false;
            }
            
            //Otherwise, if the strings are different, look for two characters that can be swapped.
            let swapIndex1;
            let swapIndex2;
            let swapChar1;
            let swapChar2;
            
            //Loop through each character in s, finding the first two different characters.
            for(let i = 0; i < s.length; i++) {
                if(swapIndex1 && swapIndex2) {
                    break;
                }
        
                //Save the first two different character indexes/values.
                if(s[i] !== goal[i]) {
                    if(swapIndex1 === undefined) {
                        swapIndex1 = i;
                        swapChar1 = s[i];
                    } else if (swapIndex2 === undefined) {
                        swapIndex2 = i;
                        swapChar2 = s[i];
                    }
                }
            }
            
            //If there is not more than one different character, we can't swap any.
            if(swapIndex1 === undefined || swapIndex2 === undefined) return false;
            
            //Create a new string with the swapped characters.
            let result = s.split("");
            result[swapIndex1] = swapChar2;
            result[swapIndex2] = swapChar1;
            result = result.join("");
            
            //Compare the 'swapped' string to the goal.
            if(result === goal) return true;
            return false;
        };`,
        code: function buddyStrings(s, goal) {
            //If s already equals goal, see if two characters can be swapped around anyway to still result in equal strings.
            if(s === goal) {
                let charMap = {};
                for(let i = 0; i < s.length; i++) {
                    if(charMap[s[i]]) {
                        charMap[s[i]]++;
                    } else {
                        charMap[s[i]] = 1;
                    }
                }
                //If any character exists more than once, then we can swap those two instances.
                if(Object.values(charMap).some(count => count > 1)) return true;
                return false;
            }
            
            //Otherwise, if the strings are different, look for two characters that can be swapped.
            let swapIndex1;
            let swapIndex2;
            let swapChar1;
            let swapChar2;
            
            //Loop through each character in s, finding the first two different characters.
            for(let i = 0; i < s.length; i++) {
                if(swapIndex1 && swapIndex2) {
                    break;
                }
        
                //Save the first two different character indexes/values.
                if(s[i] !== goal[i]) {
                    if(swapIndex1 === undefined) {
                        swapIndex1 = i;
                        swapChar1 = s[i];
                    } else if (swapIndex2 === undefined) {
                        swapIndex2 = i;
                        swapChar2 = s[i];
                    }
                }
            }
            
            //If there is not more than one different character, we can't swap any.
            if(swapIndex1 === undefined || swapIndex2 === undefined) return false;
            
            //Create a new string with the swapped characters.
            let result = s.split("");
            result[swapIndex1] = swapChar2;
            result[swapIndex2] = swapChar1;
            result = result.join("");
            
            //Compare the 'swapped' string to the goal.
            if(result === goal) return true;
            return false;
        },
        arguments: {
            descriptions: [
                {
                    text: "String s (string to swap characters in)",
                    type: "String"
                },
                {
                    text: "String goal (string we want to achieve)",
                    type: "String"
                }
            ]
        }
    },
    buildPalindrome: {
        name: 'buildPalindrome',
        instructions: `Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.`,
        codeOutput: 
        `function buildPalindrome(st) {
            //Helper function to check palindrome
            const checkPalindrome = checkString => {
                //Create an array out of the first and second halves of the string to check, depending on whether it has odd or even number of characters.
                let firstHalf = checkString.length % 2 === 0 ? 
                                checkString.substring(0, Math.floor(checkString.length / 2)).split("") :
                                checkString.substring(0, Math.floor(checkString.length / 2) + 1).split("");
                let secondHalf = checkString.substring(Math.floor(checkString.length / 2)).split("");
                
                //See if these two halves are the same. If we encounter different characters, it is not yet a palindrome.
                while(firstHalf.length && secondHalf.length) {
                    if(firstHalf.pop() !== secondHalf.shift()) return false;
                }
                
                if(firstHalf.length || firstHalf.length) return false;
                
                return true;  
            };
            
            //Keep track of the current word we want to be a palindrome as well as offsets for the beginning and end of the string.
            
            let palindrome = st;
            let startOffset = 0;
            let endOffset = 0;
            
            //Check if this is already a palindrome.
            //If it is not, start the iterative process of removing the next character (based on start offset) and adding it to its corresponding location at the end of the string(based on the end offset).
            //At the end of each iteration, update the palindrome word and offsets, and check if it is a palindrome yet.
            while(!checkPalindrome(palindrome)) {
                let firstHalf = palindrome.substring(0, palindrome.length - endOffset);
                let secondHalf = palindrome[palindrome.length - endOffset] ? palindrome.substring(palindrome.length - endOffset) : "";
                
                let currentCharacter = palindrome[startOffset];
                
                palindrome = firstHalf + currentCharacter + secondHalf;
                startOffset++;
                endOffset++;
            }
            
            return palindrome;
        }
        `,
        code: function buildPalindrome(st) {
            //Helper function to check palindrome
            const checkPalindrome = checkString => {
                //Create an array out of the first and second halves of the string to check, depending on whether it has odd or even number of characters.
                let firstHalf = checkString.length % 2 === 0 ? 
                                checkString.substring(0, Math.floor(checkString.length / 2)).split("") :
                                checkString.substring(0, Math.floor(checkString.length / 2) + 1).split("");
                let secondHalf = checkString.substring(Math.floor(checkString.length / 2)).split("");
                
                //See if these two halves are the same. If we encounter different characters, it is not yet a palindrome.
                while(firstHalf.length && secondHalf.length) {
                    if(firstHalf.pop() !== secondHalf.shift()) return false;
                }
                
                if(firstHalf.length || firstHalf.length) return false;
                
                return true;  
            };
            
            //Keep track of the current word we want to be a palindrome as well as offsets for the beginning and end of the string.
            
            let palindrome = st;
            let startOffset = 0;
            let endOffset = 0;
            
            //Check if this is already a palindrome.
            //If it is not, start the iterative process of removing the next character (based on start offset) and adding it to its corresponding location at the end of the string(based on the end offset).
            //At the end of each iteration, update the palindrome word and offsets, and check if it is a palindrome yet.
            while(!checkPalindrome(palindrome)) {
                let firstHalf = palindrome.substring(0, palindrome.length - endOffset);
                let secondHalf = palindrome[palindrome.length - endOffset] ? palindrome.substring(palindrome.length - endOffset) : "";
                
                let currentCharacter = palindrome[startOffset];
                
                palindrome = firstHalf + currentCharacter + secondHalf;
                startOffset++;
                endOffset++;
            }
            
            return palindrome;
        }
        ,
        arguments: {
            descriptions: [
                {
                    text: "Input String",
                    type: "String"
                }
            ]
        }
    },
    calPoints: {
        name: `calPoints`,
        instructions: `You are keeping score for a baseball game with strange rules. The game consists of several rounds, where the scores of past rounds may affect future rounds' scores.

        At the beginning of the game, you start with an empty record. You are given a list of strings ops, where ops[i] is the ith operation you must apply to the record and is one of the following:
        
        An integer x - Record a new score of x.
        "+" - Record a new score that is the sum of the previous two scores. It is guaranteed there will always be two previous scores.
        "D" - Record a new score that is double the previous score. It is guaranteed there will always be a previous score.
        "C" - Invalidate the previous score, removing it from the record. It is guaranteed there will always be a previous score.
        Return the sum of all the scores on the record.`,
        codeOutput: 
        `var calPoints = function(ops) {
            let record = [];
            
            ops.forEach(op => {
                if(parseInt(op)) {
                    //If this is a number, add new score to record in number form.
                    record.push(parseInt(op));
                } else if(op === "C") {
                    //If this is a C, clear the previous score.
                    record.pop();
                } else if(op === "D") {
                    //If this is a D, double the last score and add it.
                    record.push(parseInt(record[record.length - 1] * 2));
                } else if(op === "+") {
                    //If this is a +, combine the last two scores.
                    record.push(parseInt(record[record.length - 1] + record[record.length - 2]));
                }
            });
            
            //Add up the records.    
            return record.reduce((a, b) => a += b, 0);
        };`,
        code: function calPoints(ops) {
            let record = [];
            
            ops.forEach(op => {
                if(parseInt(op)) {
                    //If this is a number, add new score to record in number form.
                    record.push(parseInt(op));
                } else if(op === "C") {
                    //If this is a C, clear the previous score.
                    record.pop();
                } else if(op === "D") {
                    //If this is a D, double the last score and add it.
                    record.push(parseInt(record[record.length - 1] * 2));
                } else if(op === "+") {
                    //If this is a +, combine the last two scores.
                    record.push(parseInt(record[record.length - 1] + record[record.length - 2]));
                }
            });
            
            //Add up the records.    
            return record.reduce((a, b) => a += b, 0);
        },
        arguments: {
            descriptions: [
                {
                    text: "Array in format according to instructions (e.g. 5,2,C,D,+)",
                    type: "StringArray"
                }
            ]
        }
    },
    canConstruct: {
        name: `canConstruct`,
        instructions: `Given two stings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.

        Each letter in magazine can only be used once in ransomNote.`,
        codeOutput: 
        `var canConstruct = function(ransomNote, magazine) {
            //Create a character map of each character in magazine to pull characters from.
            let magazineMap = {};
            //Convert to string, then create character map.
            magazine.split("").forEach(letter => {
                if(magazineMap[letter]) {
                    magazineMap[letter]++;
                } else {
                    magazineMap[letter] = 1;
                }
            });
            
            //Create array to iteratively pull characters from.
            let noteArray = ransomNote.split("");
            //Until the end of the array is reached, see if this letter can be pulled from the magazine map.
            while(noteArray.length) {
                let thisLetter = noteArray.pop();
                if(magazineMap[thisLetter]) {
                    magazineMap[thisLetter]--;
                } else {
                    return false;
                }
            }
            
            //If we have reached the end of the noteArray, we know magazine can be used to create the note.
            return true;
        };`,
        code: function canConstruct(ransomNote, magazine) {
            //Create a character map of each character in magazine to pull characters from.
            let magazineMap = {};
            //Convert to string, then create character map.
            magazine.split("").forEach(letter => {
                if(magazineMap[letter]) {
                    magazineMap[letter]++;
                } else {
                    magazineMap[letter] = 1;
                }
            });
            
            //Create array to iteratively pull characters from.
            let noteArray = ransomNote.split("");
            //Until the end of the array is reached, see if this letter can be pulled from the magazine map.
            while(noteArray.length) {
                let thisLetter = noteArray.pop();
                if(magazineMap[thisLetter]) {
                    magazineMap[thisLetter]--;
                } else {
                    return false;
                }
            }
            
            //If we have reached the end of the noteArray, we know magazine can be used to create the note.
            return true;
        },
        arguments: {
            descriptions: [
                {
                    text: "String to represent the ransom note.",
                    type: "String"
                },
                {
                    text: "String to represent the magazine text.",
                    type: "String"
                }
            ]
        }
    },
    candles: {
        name: 'candles',
        instructions: `When a candle finishes burning it leaves a leftover. makeNew leftovers can be combined to make a new candle, which, when burning down, will in turn leave another leftover.

        You have candlesNumber candles in your possession. What's the total number of candles you can burn, assuming that you create new candles as soon as you have enough leftovers?`,
        codeOutput: 
        `function candles(candlesNumber, makeNew) {
            //Start with current number of candles.
            let currentCandles = candlesNumber;
            let currentLeftovers = 0;
            let totalBurned = 0;
            
            //Loop as long as there are whole candles to burn.
            while(currentCandles > 0) {
                //First, burn these candles.
                totalBurned += currentCandles;
                
                //Next, make these current candles into leftovers.
                currentLeftovers += currentCandles;
                currentCandles -= currentCandles;
                
                //Finally, group the new candles using as many of the leftovers as possible.
                currentCandles += Math.floor(currentLeftovers / makeNew);
                currentLeftovers -= currentCandles * makeNew;
            }
            
            return totalBurned;
        }`,
        code: function candles(candlesNumber, makeNew) {
            //Start with current number of candles.
            let currentCandles = candlesNumber;
            let currentLeftovers = 0;
            let totalBurned = 0;
            
            //Loop as long as there are whole candles to burn.
            while(currentCandles > 0) {
                //First, burn these candles.
                totalBurned += currentCandles;
                
                //Next, make these current candles into leftovers.
                currentLeftovers += currentCandles;
                currentCandles -= currentCandles;
                
                //Finally, group the new candles using as many of the leftovers as possible.
                currentCandles += Math.floor(currentLeftovers / makeNew);
                currentLeftovers -= currentCandles * makeNew;
            }
            
            return totalBurned;
        },
        arguments: {
            descriptions: [
                {
                    text: "Number of Candles (Positive Integer)",
                    type: "Number"
                },
                {
                    text: "Number of Leftovers Used For New Candle (Positive Integer)",
                    type: "Number"
                }
            ]
        }
    },
    canPlaceFlowers: {
        name: `canPlaceFlowers`,
        instructions: `You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

        Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.`,
        codeOutput: 
        `var canPlaceFlowers = function(flowerbed, n) {
    
            //Loop through all flowers in the flowerbed.
            for(let i = 0; i < flowerbed.length; i++) {
                //If all flowers have been successfully placed, return early.
                if(!n) return true;
                
                //If there is no flower here, place a flower there if its neighbors are empty.
                if(!flowerbed[i]) {
                    if(!flowerbed[i - 1] && !flowerbed[i + 1]) {
                        flowerbed[i] = 1;
                        //Decrement the number of flowers to be placed.
                        n--;
                    }
                }   
            }
            
            //If flowers are still left, they could not all be successfully placed.
            if(n > 0) return false;
            return true; 
        };`,
        code: function canPlaceFlowers(flowerbed, n) {
    
            //Loop through all flowers in the flowerbed.
            for(let i = 0; i < flowerbed.length; i++) {
                //If all flowers have been successfully placed, return early.
                if(!n) return true;
                
                //If there is no flower here, place a flower there if its neighbors are empty.
                if(!flowerbed[i]) {
                    if(!flowerbed[i - 1] && !flowerbed[i + 1]) {
                        flowerbed[i] = 1;
                        //Decrement the number of flowers to be placed.
                        n--;
                    }
                }   
            }
            
            //If flowers are still left, they could not all be successfully placed.
            if(n > 0) return false;
            return true; 
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of only 1s and 0s to represent flowerbed (e.g. 1,0,0,0,1,0,1)",
                    type: "NumberArray"
                },
                {
                    text: "Whole number to represent flowers to place",
                    type: "Number"
                }
            ]
        }
    },
    canWinNim: {
        name: `canWinNim`,
        instructions: `You are playing the following Nim Game with your friend:

        Initially, there is a heap of stones on the table.
        You and your friend will alternate taking turns, and you go first.
        On each turn, the person whose turn it is will remove 1 to 3 stones from the heap.
        The one who removes the last stone is the winner.
        Given n, the number of stones in the heap, return true if you can win the game assuming both you and your friend play optimally, otherwise return false.`,
        codeOutput: 
        `var canWinNim = function(n) {
            //Since the loser will have a disadvantage any time the number of stones is a multiple of 4, return false for all those values.
            if(n % 4 === 0) return false;
            return true;
        }`,
        code: function canWinNim(n) {
            //Since the loser will have a disadvantage any time the number of stones is a multiple of 4, return false for all those values.
            if(n % 4 === 0) return false;
            return true;
        },
        arguments: {
            descriptions: [
                {
                    text: "Integer to Represent Number of Stones",
                    type: "Number"
                }
            ]
        }
    },
    characterParity: {
        name: 'characterParity',
        instructions: `Given a character, check if it represents an odd digit, an even digit or not a digit at all.`,
        codeOutput: 
        `function characterParity(symbol) {
            return symbol % 2 ? "odd" : isNaN(symbol % 2) ? "not a digit" : "even";
        }`,
        code: function characterParity(symbol) {
            return symbol % 2 ? "odd" : isNaN(symbol % 2) ? "not a digit" : "even";
        },
        arguments: {
            descriptions: [
                {
                    text: "Single Character Symbol (UTF-8)",
                    type: "String"
                }
            ]
        }
    },
    checkPalindrome: {
        name: 'checkPalindrome',
        instructions: `Given a string, check if it is a palindrome`,
        codeOutput: 
        `function checkPalindrome(inputString) {
            return inputString.split("").reverse().join("") === inputString;
        }`,
        code: function checkPalindrome(inputString) {
            return inputString.split("").reverse().join("") === inputString;
        },
        arguments: {
            descriptions: [
                {
                    text: "String to Check",
                    type: "String"
                }
            ]
        }
    },
    checkPerfectNumber: {
        name: `checkPerfectNumber`,
        instructions: `A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. A divisor of an integer x is an integer that can divide x evenly.

        Given an integer n, return true if n is a perfect number, otherwise return false.`,
        codeOutput: 
        `var checkPerfectNumber = function(num) {
            let factors = [];
            
            //Get all factors of the number (except for number itself)
            let max = num;
            let i = 1;
            do {
                //See if this is a factor.
                if(num % i === 0) {
                    //Make sure longer side is first in set.
                    if(num / i !== num) {
                        factors.push(num / i);
                    }
                    if(i !== num) {
                        factors.push(i);
                    }
                }
                //Update max and i.
                max = Math.ceil(num / i);
                i++;
            } while(i < max);
                
            console.log(factors);
            
            //Return true if the factors add to the number.
            return num === factors.reduce((a, b) => a += b, 0);  
        };`,
        code: function checkPerfectNumber(num) {
            let factors = [];
            
            //Get all factors of the number (except for number itself)
            let max = num;
            let i = 1;
            do {
                //See if this is a factor.
                if(num % i === 0) {
                    //Make sure longer side is first in set.
                    if(num / i !== num) {
                        factors.push(num / i);
                    }
                    if(i !== num) {
                        factors.push(i);
                    }
                }
                //Update max and i.
                max = Math.ceil(num / i);
                i++;
            } while(i < max);
                
            console.log(factors);
            
            //Return true if the factors add to the number.
            return num === factors.reduce((a, b) => a += b, 0);  
        },
        arguments: {
            descriptions: [
                {
                    text: "Whole Number Integer",
                    type: "Number"
                }
            ]
        }
    },
    chessBishopDream: {
        name: 'chessBishopDream',
        instructions: `In ChessLand there is a small but proud chess bishop with a recurring dream. In the dream the bishop finds itself on an n × m chessboard with mirrors along each edge, and it is not a bishop but a ray of light. This ray of light moves only along diagonals (the bishop can't imagine any other types of moves even in its dreams), it never stops, and once it reaches an edge or a corner of the chessboard it reflects from it and moves on.

        Given the initial position and the direction of the ray, find its position after k steps where a step means either moving from one cell to the neighboring one or reflecting from a corner of the board.`,
        codeOutput: 
        `function chessBishopDream(boardSize, initPosition, initDirection, k) {
            //Keep track of count.
            let count = 0;
            //Monitor the current directions and positions.
            let directions = [...initDirection];
            let positions = [...initPosition];
            //Helper function to perform move on either dimension.
            const movePosition = position => {        
                //Make sure this dimension can be moved upward/downward.
                if(directions[position] === 1) {
                    //Check if moving this upward is within bounds.
                    if(positions[position] + directions[position] <= boardSize[position] - 1) {
                        positions[position] += directions[position];
                    } else {
                        //Flip the direction of this dimension
                        directions[position] *= -1;
                    }
                } else {
                    //Check if moving this downward is within bounds.
                    if(positions[position] + directions[position] >= 0) {
                        positions[position] += directions[position];
                    } else {
                        //Flip the direction of this dimension
                        directions[position] *= -1;
                    }    
                }
            };
            
            //Loop to perform moves.
            while(count < k) {
                //Perform move on each dimension.
                movePosition(0);
                movePosition(1);
                //update iteration count.
                count++;
                //Once the positions and directions are again the same as how they started:
                if(positions[0] === initPosition[0] && positions[1] === initPosition[1] &&
                directions[0] === initDirection[0] && directions[1] === initDirection[1]) {
                    //In order to prevent too many iterations, once the original positions and directions are arrived at again, only go as many more iterations as needed to reach the desired position.
                    if(count > 0) k = count + (k % count);
                }    
            }
            
            //Return final positions.
            return positions;
        }`,
        code: function chessBishopDream(boardSize, initPosition, initDirection, k) {
            //Keep track of count.
            let count = 0;
            //Monitor the current directions and positions.
            let directions = [...initDirection];
            let positions = [...initPosition];
            //Helper function to perform move on either dimension.
            const movePosition = position => {        
                //Make sure this dimension can be moved upward/downward.
                if(directions[position] === 1) {
                    //Check if moving this upward is within bounds.
                    if(positions[position] + directions[position] <= boardSize[position] - 1) {
                        positions[position] += directions[position];
                    } else {
                        //Flip the direction of this dimension
                        directions[position] *= -1;
                    }
                } else {
                    //Check if moving this downward is within bounds.
                    if(positions[position] + directions[position] >= 0) {
                        positions[position] += directions[position];
                    } else {
                        //Flip the direction of this dimension
                        directions[position] *= -1;
                    }    
                }
            };
            
            //Loop to perform moves.
            while(count < k) {
                //Perform move on each dimension.
                movePosition(0);
                movePosition(1);
                //update iteration count.
                count++;
                //Once the positions and directions are again the same as how they started:
                if(positions[0] === initPosition[0] && positions[1] === initPosition[1] &&
                directions[0] === initDirection[0] && directions[1] === initDirection[1]) {
                    //In order to prevent too many iterations, once the original positions and directions are arrived at again, only go as many more iterations as needed to reach the desired position.
                    if(count > 0) k = count + (k % count);
                }    
            }
            
            //Return final positions.
            return positions;
        },
        arguments: {
            descriptions: [
                {
                    text: "Board Size (Integer Array; No Brackets [])",
                    type: "NumberArray"
                },
                {
                    text: "Initial Position (Integer Array; No Brackets [])",
                    type: "NumberArray"
                },
                {
                    text: "Initial Direction (Integer Array of 1 or -1; No Brackets [])",
                    type: "NumberArray"
                },
                {
                    text: "Number of Steps",
                    type: "Number"
                }
            ]
        }
    },
    chessBoardCellColor: {
        name: 'chessBoardCellColor',
        instructions: `Given two cells on the standard chess board, determine whether they have the same color or not.`,
        codeOutput: 
        `function chessBoardCellColor(cell1, cell2) {
            let cell1Color;
            let cell2Color;
            if(cell1.charCodeAt(0) % 2 === cell1.charCodeAt(1) % 2) {
                cell1Color = 'dark';
            } else {
                cell1Color = 'light';
            }
            if(cell2.charCodeAt(0) % 2 === cell2.charCodeAt(1) % 2) {
                cell2Color = 'dark';
            } else {
                cell2Color = 'light';
            }
            return cell1Color === cell2Color;
        }`,
        code: function chessBoardCellColor(cell1, cell2) {
            let cell1Color;
            let cell2Color;
            if(cell1.charCodeAt(0) % 2 === cell1.charCodeAt(1) % 2) {
                cell1Color = 'dark';
            } else {
                cell1Color = 'light';
            }
            if(cell2.charCodeAt(0) % 2 === cell2.charCodeAt(1) % 2) {
                cell2Color = 'dark';
            } else {
                cell2Color = 'light';
            }
            return cell1Color === cell2Color;
        },
        arguments: {
            descriptions: [
                {
                    text: "Chess Board Position (In Form Of [a-h][1-8])",
                    type: "String"
                },
                {
                    text: "Chess Board Position (In Form Of [a-h][1-8])",
                    type: "String"
                }
            ]
        }
    },
    chessKnight: {
        name: 'chessKnight',
        instructions: `Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.

        The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. The complete move therefore looks like the letter L. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.`,
        codeOutput: 
        `function chessKnight(cell) {
            //Create a character code representation of the letter cell.
            let col = cell.charCodeAt(0);
            let row = Number(cell[1]);
            let totalSpaces = 0;
            
            if(col + 2 <= 104) {
                //If we can go 2 spaces to the right, check the one up and one down.
                if(row + 1 <= 8) totalSpaces++;
                if(row - 1 >= 1) totalSpaces++;
            }
        
            if(row + 2 <= 8) {
                //If we can go 2 spaces up, check one left and one right.
                if(col + 1 <= 104) totalSpaces++;
                if(col - 1 >= 97) totalSpaces++;
            }
            
            if(col - 2 >= 97) {
                //If we can go 2 spaces to the left, check the one up and one down.
                if(row + 1 <= 8) totalSpaces++;
                if(row - 1 >= 1) totalSpaces++;
            }
            
            if(row - 2 >= 1) {
                //If we can go 2 spaces down, check one left and one right.
                if(col + 1 <= 104) totalSpaces++;
                if(col - 1 >= 97) totalSpaces++;
            }
            
            return totalSpaces;
        }`,
        code: function chessKnight(cell) {
            //Create a character code representation of the letter cell.
            let col = cell.charCodeAt(0);
            let row = Number(cell[1]);
            let totalSpaces = 0;
            
            if(col + 2 <= 104) {
                //If we can go 2 spaces to the right, check the one up and one down.
                if(row + 1 <= 8) totalSpaces++;
                if(row - 1 >= 1) totalSpaces++;
            }
        
            if(row + 2 <= 8) {
                //If we can go 2 spaces up, check one left and one right.
                if(col + 1 <= 104) totalSpaces++;
                if(col - 1 >= 97) totalSpaces++;
            }
            
            if(col - 2 >= 97) {
                //If we can go 2 spaces to the left, check the one up and one down.
                if(row + 1 <= 8) totalSpaces++;
                if(row - 1 >= 1) totalSpaces++;
            }
            
            if(row - 2 >= 1) {
                //If we can go 2 spaces down, check one left and one right.
                if(col + 1 <= 104) totalSpaces++;
                if(col - 1 >= 97) totalSpaces++;
            }
            
            return totalSpaces;
        },
        arguments: {
            descriptions: [
                {
                    text: "Chess Board Position (In Form Of [a-h][1-8])",
                    type: "String"
                }
            ]
        }
    },
    chessTriangle: {
        name: 'chessTriangle',
        instructions: `Consider a bishop, a knight and a rook on an n × m chessboard. They are said to form a triangle if each piece attacks exactly one other piece and is attacked by exactly one piece. Calculate the number of ways to choose positions of the pieces to form a triangle.

        Note that the bishop attacks pieces sharing the common diagonal with it; the rook attacks in horizontal and vertical directions; and, finally, the knight attacks squares which are two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from its position.`,
        codeOutput: 
        `function chessTriangle(n, m) {
            let count = 0;
            //Loop through every square, where a knight could be.
            for(let i = 0; i < n; i++) {
                for(let j = 0; j < m; j++) {
                    //At each square, find every spot where this knight could attack.
                    
                    //Check right side (1/4)
                    
                    //Check upper 4x3 rectangle (K is corner)
                    if(i - 3 >= 0 && j + 2 < m) count++;
                    //Check upper 3x3 rectangle (K is corner)
                    if(i - 2 >= 0 && j + 2 < m) count++;
                    //Check upper 2x3 rectangle (K is corner)
                    if(i - 1 >= 0 && j + 2 < m) count += 2;
                    //Check lower 4x3 rectangle (K is corner)
                    if(i + 3 < n && j + 2 < m) count++;
                    //Check lower 3x3 rectangle (K is corner)
                    if(i + 2 < n && j + 2 < m) count++;
                    //Check lower 2x3 rectangle (K is corner) 
                    if(i + 1 < n && j + 2 < m) count += 2;
                    //Plus, check if K is middle of 3x3 rectangle
                    if(i + 1 < n && i - 1 >= 0 && j + 2 < m) count += 2;
                    //Check if K is lower end of a 4x3 rectangle
                    if(i - 2 >= 0 && i + 1 < n && j + 2 < m) count++;
                    //Check if K is higher end of a 4x3 rectangle
                    if(i - 1 >= 0 && i + 2 < n && j + 2 < m) count++;
                    //Check upper 2x4 rectangle (K is corner)
                    if(i - 1 >= 0 && j + 3 < m) count+=2;
                    //Check lower 2x4 rectangle (K is corner)
                    if(i + 1 < n && j + 3 < m) count+=2;
                    
                    //Check left side (2/4)
                    
                    //Check upper 4x3 rectangle (K is corner)
                    if(i - 3 >= 0 && j - 2 >= 0) count++;
                    //Check upper 3x3 rectangle (K is corner)
                    if(i - 2 >= 0 && j - 2 >= 0) count++;
                    //Check upper 2x3 rectangle (K is corner)
                    if(i - 1 >= 0 && j - 2 >= 0) count += 2;
                    //Check lower 4x3 rectangle (K is corner)
                    if(i + 3 < n && j - 2 >= 0) count++;
                    //Check lower 3x3 rectangle (K is corner)
                    if(i + 2 < n && j - 2 >= 0) count++;
                    //Check lower 2x3 rectangle (K is corner) 
                    if(i + 1 < n && j - 2 >= 0) count += 2;
                    //Plus, check if K is middle of 3x3 rectangle
                    if(i + 1 < n && i - 1 >= 0 && j - 2 >= 0) count += 2;
                    //Check if K is lower end of a 4x3 rectangle
                    if(i - 2 >= 0 && i + 1 < n && j - 2 >= 0) count++;
                    //Check if K is higher end of a 4x3 rectangle
                    if(i - 1 >= 0 && i + 2 < n && j - 2 >= 0) count++;
                    //Check upper 2x4 rectangle (K is corner)
                    if(i - 1 >= 0 && j - 3 >= 0) count+=2;
                    //Check lower 2x4 rectangle (K is corner)
                    if(i + 1 < n && j - 3 >= 0) count+=2;
                    
                    //Check top side (3/4)
                    
                    //Check upper 4x3 rectangle (K is corner)
                    if(j - 3 >= 0 && i - 2 >= 0) count++;
                    //Check upper 3x3 rectangle (K is corner)
                    if(j - 2 >= 0 && i - 2 >= 0) count++;
                    //Check upper 2x3 rectangle (K is corner)
                    if(j - 1 >= 0 && i - 2 >= 0) count += 2;
                    //Check lower 4x3 rectangle (K is corner)
                    if(j + 3 < m && i - 2 >= 0) count++;
                    //Check lower 3x3 rectangle (K is corner)
                    if(j + 2 < m && i - 2 >= 0) count++;
                    //Check lower 2x3 rectangle (K is corner) 
                    if(j + 1 < m && i - 2 >= 0) count += 2;
                    //Plus, check if K is middle of 3x3 rectangle
                    if(j + 1 < m && j - 1 >= 0 && i - 2 >= 0) count += 2;
                    //Check if K is lower end of a 4x3 rectangle
                    if(j - 2 >= 0 && j + 1 < m && i - 2 >= 0) count++;
                    //Check if K is higher end of a 4x3 rectangle
                    if(j - 1 >= 0 && j + 2 < m && i - 2 >= 0) count++;
                    //Check upper 2x4 rectangle (K is corner)
                    if(j - 1 >= 0 && i - 3 >= 0) count+=2;
                    //Check lower 2x4 rectangle (K is corner)
                    if(j + 1 < m && i - 3 >= 0) count+=2;
                    
                    //Check bottom side (4/4)
                    
                    //Check upper 4x3 rectangle (K is corner)
                    if(j - 3 >= 0 && i + 2 < n) count++;
                    //Check upper 3x3 rectangle (K is corner)
                    if(j - 2 >= 0 && i + 2 < n) count++;
                    //Check upper 2x3 rectangle (K is corner)
                    if(j - 1 >= 0 && i + 2 < n) count += 2;
                    //Check lower 4x3 rectangle (K is corner)
                    if(j + 3 < m && i + 2 < n) count++;
                    //Check lower 3x3 rectangle (K is corner)
                    if(j + 2 < m && i + 2 < n) count++;
                    //Check lower 2x3 rectangle (K is corner) 
                    if(j + 1 < m && i + 2 < n) count += 2;
                    //Plus, check if K is middle of 3x3 rectangle
                    if(j + 1 < m && j - 1 >= 0 && i + 2 < n) count += 2;
                    //Check if K is lower end of a 4x3 rectangle
                    if(j - 2 >= 0 && j + 1 < m && i + 2 < n) count++;
                    //Check if K is higher end of a 4x3 rectangle
                    if(j - 1 >= 0 && j + 2 < m && i + 2 < n) count++;
                    //Check upper 2x4 rectangle (K is corner)
                    if(j - 1 >= 0 && i + 3 < n) count+=2;
                    //Check lower 2x4 rectangle (K is corner)
                    if(j + 1 < m && i + 3 < n) count+=2;
                }
            }
            
            return count;
        }`,
        code: function chessTriangle(n, m) {
            let count = 0;
            //Loop through every square, where a knight could be.
            for(let i = 0; i < n; i++) {
                for(let j = 0; j < m; j++) {
                    //At each square, find every spot where this knight could attack.
                    
                    //Check right side (1/4)
                    
                    //Check upper 4x3 rectangle (K is corner)
                    if(i - 3 >= 0 && j + 2 < m) count++;
                    //Check upper 3x3 rectangle (K is corner)
                    if(i - 2 >= 0 && j + 2 < m) count++;
                    //Check upper 2x3 rectangle (K is corner)
                    if(i - 1 >= 0 && j + 2 < m) count += 2;
                    //Check lower 4x3 rectangle (K is corner)
                    if(i + 3 < n && j + 2 < m) count++;
                    //Check lower 3x3 rectangle (K is corner)
                    if(i + 2 < n && j + 2 < m) count++;
                    //Check lower 2x3 rectangle (K is corner) 
                    if(i + 1 < n && j + 2 < m) count += 2;
                    //Plus, check if K is middle of 3x3 rectangle
                    if(i + 1 < n && i - 1 >= 0 && j + 2 < m) count += 2;
                    //Check if K is lower end of a 4x3 rectangle
                    if(i - 2 >= 0 && i + 1 < n && j + 2 < m) count++;
                    //Check if K is higher end of a 4x3 rectangle
                    if(i - 1 >= 0 && i + 2 < n && j + 2 < m) count++;
                    //Check upper 2x4 rectangle (K is corner)
                    if(i - 1 >= 0 && j + 3 < m) count+=2;
                    //Check lower 2x4 rectangle (K is corner)
                    if(i + 1 < n && j + 3 < m) count+=2;
                    
                    //Check left side (2/4)
                    
                    //Check upper 4x3 rectangle (K is corner)
                    if(i - 3 >= 0 && j - 2 >= 0) count++;
                    //Check upper 3x3 rectangle (K is corner)
                    if(i - 2 >= 0 && j - 2 >= 0) count++;
                    //Check upper 2x3 rectangle (K is corner)
                    if(i - 1 >= 0 && j - 2 >= 0) count += 2;
                    //Check lower 4x3 rectangle (K is corner)
                    if(i + 3 < n && j - 2 >= 0) count++;
                    //Check lower 3x3 rectangle (K is corner)
                    if(i + 2 < n && j - 2 >= 0) count++;
                    //Check lower 2x3 rectangle (K is corner) 
                    if(i + 1 < n && j - 2 >= 0) count += 2;
                    //Plus, check if K is middle of 3x3 rectangle
                    if(i + 1 < n && i - 1 >= 0 && j - 2 >= 0) count += 2;
                    //Check if K is lower end of a 4x3 rectangle
                    if(i - 2 >= 0 && i + 1 < n && j - 2 >= 0) count++;
                    //Check if K is higher end of a 4x3 rectangle
                    if(i - 1 >= 0 && i + 2 < n && j - 2 >= 0) count++;
                    //Check upper 2x4 rectangle (K is corner)
                    if(i - 1 >= 0 && j - 3 >= 0) count+=2;
                    //Check lower 2x4 rectangle (K is corner)
                    if(i + 1 < n && j - 3 >= 0) count+=2;
                    
                    //Check top side (3/4)
                    
                    //Check upper 4x3 rectangle (K is corner)
                    if(j - 3 >= 0 && i - 2 >= 0) count++;
                    //Check upper 3x3 rectangle (K is corner)
                    if(j - 2 >= 0 && i - 2 >= 0) count++;
                    //Check upper 2x3 rectangle (K is corner)
                    if(j - 1 >= 0 && i - 2 >= 0) count += 2;
                    //Check lower 4x3 rectangle (K is corner)
                    if(j + 3 < m && i - 2 >= 0) count++;
                    //Check lower 3x3 rectangle (K is corner)
                    if(j + 2 < m && i - 2 >= 0) count++;
                    //Check lower 2x3 rectangle (K is corner) 
                    if(j + 1 < m && i - 2 >= 0) count += 2;
                    //Plus, check if K is middle of 3x3 rectangle
                    if(j + 1 < m && j - 1 >= 0 && i - 2 >= 0) count += 2;
                    //Check if K is lower end of a 4x3 rectangle
                    if(j - 2 >= 0 && j + 1 < m && i - 2 >= 0) count++;
                    //Check if K is higher end of a 4x3 rectangle
                    if(j - 1 >= 0 && j + 2 < m && i - 2 >= 0) count++;
                    //Check upper 2x4 rectangle (K is corner)
                    if(j - 1 >= 0 && i - 3 >= 0) count+=2;
                    //Check lower 2x4 rectangle (K is corner)
                    if(j + 1 < m && i - 3 >= 0) count+=2;
                    
                    //Check bottom side (4/4)
                    
                    //Check upper 4x3 rectangle (K is corner)
                    if(j - 3 >= 0 && i + 2 < n) count++;
                    //Check upper 3x3 rectangle (K is corner)
                    if(j - 2 >= 0 && i + 2 < n) count++;
                    //Check upper 2x3 rectangle (K is corner)
                    if(j - 1 >= 0 && i + 2 < n) count += 2;
                    //Check lower 4x3 rectangle (K is corner)
                    if(j + 3 < m && i + 2 < n) count++;
                    //Check lower 3x3 rectangle (K is corner)
                    if(j + 2 < m && i + 2 < n) count++;
                    //Check lower 2x3 rectangle (K is corner) 
                    if(j + 1 < m && i + 2 < n) count += 2;
                    //Plus, check if K is middle of 3x3 rectangle
                    if(j + 1 < m && j - 1 >= 0 && i + 2 < n) count += 2;
                    //Check if K is lower end of a 4x3 rectangle
                    if(j - 2 >= 0 && j + 1 < m && i + 2 < n) count++;
                    //Check if K is higher end of a 4x3 rectangle
                    if(j - 1 >= 0 && j + 2 < m && i + 2 < n) count++;
                    //Check upper 2x4 rectangle (K is corner)
                    if(j - 1 >= 0 && i + 3 < n) count+=2;
                    //Check lower 2x4 rectangle (K is corner)
                    if(j + 1 < m && i + 3 < n) count+=2;
                }
            }
            
            return count;
        },
        arguments: {
            descriptions: [
                {
                    text: "Size of Dimension #1 (Positive Integer)",
                    type: "Number"
                },
                {
                    text: "Size of Dimension #2 (Positive Integer)",
                    type: "Number"
                }
            ]
        }
    },
    christmasTree: {
        name: 'christmasTree',
        instructions: `It's Christmas time! To share his Christmas spirit with all his friends, the young Christmas Elf decided to send each of them a Christmas e-mail with a nice Christmas tree. Unfortunately, Internet traffic is very expensive in the North Pole, so instead of sending an actual image he got creative and drew the tree using nothing but asterisks ('*' symbols). He has given you the specs (see below) and your task is to write a program that will generate trees following the spec and some initial parameters.

        Here is a formal definition of how the tree should be built, but before you read it the Elf HIGHLY recommends first looking at the examples that follow:
        
        Each tree has a crown as follows:
        
         *
         *
        ***
        Define a line as a horizontal group of asterisks and a level as a collection of levelHeight lines stacked one on top of the other.
        
        Below the crown there are levelNum levels.
        
        The tree is perfectly symmetrical so all the middle asterisks of the lines lie on the center of the tree.
        
        Each line of the same level (excluding the first one) has two more asterisks than the previous one (one added to each end);
        
        The number of asterisks in the first line of each level is chosen as follows:
        
        the first line of the first level has 5 asterisks;
        the first line of each consecutive level contains two more asterisks than the first line of the previous level.
        And finally there is the tree foot which has a height of levelNum and a width of:
        
        levelHeight asterisks if levelHeight is odd;
        levelHeight + 1 asterisks if levelHeight is even.
        Given levelNum and levelHeight, return the Christmas tree of the young elf.`,
        codeOutput: 
        `function christmasTree(levelNum, levelHeight) {
            let tree = [];
            let maxLength = 5 + (2 * (levelHeight - 1)) + (2 * (levelNum - 1));
            //Create crown
            let crownTop = "";
            for(let i = 0; i <= (maxLength - 1) / 2; i++) {
                crownTop += i === (maxLength - 1) / 2 ? "*" : " ";
            }
            tree.push(crownTop);
            tree.push(crownTop);
            let crownBase = "";
            for(let i = 0; i <= ((maxLength - 1) / 2) + 1; i++) {
                crownBase += i < (((maxLength - 1) / 2) + 1) - 2 ? " " : "*";
            }   
            tree.push(crownBase);
            
            //Create Main Levels
            for(let thisLevel = 0; thisLevel < levelNum; thisLevel++) {
                //Establish the size (number of *) of the first(top) line
                let defaultTopSize = 5 + (thisLevel * 2);
                //Establish the length (number of total indexes) of the first(top) line
                let defaultTopLength = ((maxLength - 1) / 2) + 3 + (thisLevel * 1);
                
                //For each level, construct each line
                for(let thisLine = 0; thisLine < levelHeight; thisLine++) {
                    //Establish the size(number of *) of the current line
                    let line = "";
                    let thisSize = defaultTopSize + (2 * thisLine);
                    let thisLength = defaultTopLength + (1 * thisLine);
                                
                    //Fill in this line
                    for(let i = 0; i < thisLength; i++) {
                        let thisChar = i < thisLength - thisSize ? " " : "*";
                        line += thisChar;
                    }
                        
                    //Push this line into the tree.        
                    tree.push(line);
                }
            }
            
            //Construct base
            let baseWidth = levelHeight % 2 ? levelHeight : levelHeight + 1;
            let baseLength = maxLength - ((maxLength - baseWidth) / 2);
            let base = "";
                
            //Fill in the characters for the base
            for(let i = 0; i < baseLength; i++) {
                base += i < baseLength - baseWidth ? " " : "*";
            }
            
            //Using the line for the base, fill into the tree the correct number of times.
            for(let baseLevel = 0; baseLevel < levelNum; baseLevel++) {
                tree.push(base);
            }
            
            return tree;
        }`,
        code: function christmasTree(levelNum, levelHeight) {
            let tree = [];
            let maxLength = 5 + (2 * (levelHeight - 1)) + (2 * (levelNum - 1));
            //Create crown
            let crownTop = "";
            for(let i = 0; i <= (maxLength - 1) / 2; i++) {
                crownTop += i === (maxLength - 1) / 2 ? "*" : " ";
            }
            tree.push(crownTop);
            tree.push(crownTop);
            let crownBase = "";
            for(let i = 0; i <= ((maxLength - 1) / 2) + 1; i++) {
                crownBase += i < (((maxLength - 1) / 2) + 1) - 2 ? " " : "*";
            }   
            tree.push(crownBase);
            
            //Create Main Levels
            for(let thisLevel = 0; thisLevel < levelNum; thisLevel++) {
                //Establish the size (number of *) of the first(top) line
                let defaultTopSize = 5 + (thisLevel * 2);
                //Establish the length (number of total indexes) of the first(top) line
                let defaultTopLength = ((maxLength - 1) / 2) + 3 + (thisLevel * 1);
                
                //For each level, construct each line
                for(let thisLine = 0; thisLine < levelHeight; thisLine++) {
                    //Establish the size(number of *) of the current line
                    let line = "";
                    let thisSize = defaultTopSize + (2 * thisLine);
                    let thisLength = defaultTopLength + (1 * thisLine);
                                
                    //Fill in this line
                    for(let i = 0; i < thisLength; i++) {
                        let thisChar = i < thisLength - thisSize ? " " : "*";
                        line += thisChar;
                    }
                        
                    //Push this line into the tree.        
                    tree.push(line);
                }
            }
            
            //Construct base
            let baseWidth = levelHeight % 2 ? levelHeight : levelHeight + 1;
            let baseLength = maxLength - ((maxLength - baseWidth) / 2);
            let base = "";
                
            //Fill in the characters for the base
            for(let i = 0; i < baseLength; i++) {
                base += i < baseLength - baseWidth ? " " : "*";
            }
            
            //Using the line for the base, fill into the tree the correct number of times.
            for(let baseLevel = 0; baseLevel < levelNum; baseLevel++) {
                tree.push(base);
            }
            
            return tree;
        },
        arguments: {
            descriptions: [
                {
                    text: "Integer to Represent Number of Levels",
                    type: "Number"
                },
                {
                    text: "Integer to Represent Height of Levels",
                    type: "Number"
                }
            ]
        }
    },
    cipher26: {
        name: 'cipher26',
        instructions: `You've intercepted an encrypted message, and you are really curious about its contents. You were able to find out that the message initially contained only lowercase English letters, and was encrypted with the following cipher:

        Let all letters from 'a' to 'z' correspond to the numbers from 0 to 25, respectively.
        The number corresponding to the ith letter of the encrypted message is then equal to the sum of numbers corresponding to the first i letters of the initial unencrypted message modulo 26.
        Now that you know how the message was encrypted, implement the algorithm to decipher it.`,
        codeOutput: 
        `function cipher26(message) {
            let runningSum = message.charCodeAt(0) - 97;
            let decodedMessage = message[0];
            
            for(let i = 1; i < message.length; i++) {
                let currentCode = message.charCodeAt(i) - 97; 
                //Based on the current code, find what value of the decoded code would yield this current code when added to the running total modulo 26.
                let decodedCode = 0;
                while((runningSum + decodedCode) % 26 !== currentCode) {
                    decodedCode++;
                }
                //Update Values
                runningSum += decodedCode;
                decodedMessage += String.fromCharCode(decodedCode + 97);
            }
            
            return decodedMessage;
        }
        `,
        code: function cipher26(message) {
            let runningSum = message.charCodeAt(0) - 97;
            let decodedMessage = message[0];
            
            for(let i = 1; i < message.length; i++) {
                let currentCode = message.charCodeAt(i) - 97; 
                //Based on the current code, find what value of the decoded code would yield this current code when added to the running total modulo 26.
                let decodedCode = 0;
                while((runningSum + decodedCode) % 26 !== currentCode) {
                    decodedCode++;
                }
                //Update Values
                runningSum += decodedCode;
                decodedMessage += String.fromCharCode(decodedCode + 97);
            }
            
            return decodedMessage;
        },
        arguments: {
            descriptions: [
                {
                    text: "Message to Cipher (Lowercase Word)",
                    type: "String"
                }
            ]
        }
    },
    circleOfNumbers: {
        name: 'circleOfNumbers',
        instructions: `Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighboring numbers is equal (note that 0 and n - 1 are neighboring, too).

        Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.`,
        codeOutput: 
        `function circleOfNumbers(n, firstNumber) {
            return firstNumber < n / 2 ? n / 2 + firstNumber : Math.abs(n / 2 - firstNumber);
        }`,
        code: function circleOfNumbers(n, firstNumber) {
            return firstNumber < n / 2 ? n / 2 + firstNumber : Math.abs(n / 2 - firstNumber);
        },
        arguments: {
            descriptions: [
                {
                    text: "Integer (Represent Number of Numbers)",
                    type: "Number"
                },
                {
                    text: "Integer (Represent First Number)",
                    type: "Number"
                }
            ]
        }
    },
    climbStairs: {
        name: `climbStairs`,
        instructions: `You are climbing a staircase. It takes n steps to reach the top.

        Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?`,
        codeOutput: 
        `var climbStairs = function(n) {
            //Since this pattern essentially can be simplified to the fibonacci sequence, start with 0 and 1. 
            let num1 = 0;
            let num2 = 1;
            //Until we reach the destination n, repeatedly add the last two elements.
            for(let i = 1; i < n; i++) {
                let nextNum = num1 + num2;
                num1 = num2;
                num2 = nextNum;
            }
            //Finally, return the last 2 elements. This will be the number of combinations of 1 and 2 steps.
            return num1 + num2;
        };`,
        code: function climbStairs(n) {
            //Since this pattern essentially can be simplified to the fibonacci sequence, start with 0 and 1. 
            let num1 = 0;
            let num2 = 1;
            //Until we reach the destination n, repeatedly add the last two elements.
            for(let i = 1; i < n; i++) {
                let nextNum = num1 + num2;
                num1 = num2;
                num2 = nextNum;
            }
            //Finally, return the last 2 elements. This will be the number of combinations of 1 and 2 steps.
            return num1 + num2;
        },
        arguments: {
            descriptions: [
                {
                    text: "Number of Stairs",
                    type: "Number"
                }
            ]
        }
    },
    combs: {
        name: 'combs',
        instructions: `Miss X has only two combs in her possession, both of which are old and miss a tooth or two. She also has many purses of different length, in which she carries the combs. The only way they fit is horizontally and without overlapping. Given teeth' positions on both combs, find the minimum length of the purse she needs to take them with her.

        It is guaranteed that there is at least one tooth at each end of the comb.
        It is also guaranteed that the total length of two strings is smaller than 32.
        Note, that the combs can not be rotated/reversed.`,
        codeOutput: 
        `function combs(comb1, comb2) {
            //Keep track of array versions of both combs.
            let comb1Copy = comb1.split("");
            let comb2Copy = comb2.split("");
            //Keep track of the total number of space maintained by both versions of a shift.
            let leftSplit = 0;
            let rightSplit = 0;
            //Keep track of the number of spaces removed.
            let offset = 0;
            //Shift comb1 to the left (Add remaining length of comb1 to offset)
            while(comb1Copy.length && leftSplit === 0) {
                comb1Copy.shift();
                offset++;
                //Check all places to see if this is a valid 'combination'
                let valid = true;
                for(let i = 0; i < Math.min(comb1Copy.length, comb2Copy.length); i++) {
                    if(comb1Copy[i] === "*" && comb2Copy[i] === "*") {
                        valid = false;
                    }
                }
                if(valid) leftSplit = Math.max(comb1Copy.length, comb2Copy.length) + offset;
                
            }
            //Reset values to do other split.
            comb1Copy = comb1.split("");
            comb2Copy = comb2.split("");
            offset = 0;
            //Shift comb2 to the left (Add remaining length of comb1 to offset) and repeat process.
            while(comb2Copy.length && !rightSplit) {
                comb2Copy.shift();
                offset++;
                //Check all places
                let valid = true;
                for(let i = 0; i < Math.min(comb2Copy.length, comb1.length); i++) {
                    if(comb2Copy[i] === "*" && comb1[i] === "*") {
                        valid = false;
                    }
                }
                if(valid) rightSplit = comb1.length + offset;
            }
            //Return the version of the shift that takes up the least space.
            return Math.min(leftSplit, rightSplit);
        }`,
        code: function combs(comb1, comb2) {
            //Keep track of array versions of both combs.
            let comb1Copy = comb1.split("");
            let comb2Copy = comb2.split("");
            //Keep track of the total number of space maintained by both versions of a shift.
            let leftSplit = 0;
            let rightSplit = 0;
            //Keep track of the number of spaces removed.
            let offset = 0;
            //Shift comb1 to the left (Add remaining length of comb1 to offset)
            while(comb1Copy.length && leftSplit === 0) {
                comb1Copy.shift();
                offset++;
                //Check all places to see if this is a valid 'combination'
                let valid = true;
                for(let i = 0; i < Math.min(comb1Copy.length, comb2Copy.length); i++) {
                    if(comb1Copy[i] === "*" && comb2Copy[i] === "*") {
                        valid = false;
                    }
                }
                if(valid) leftSplit = Math.max(comb1Copy.length, comb2Copy.length) + offset;
                
            }
            //Reset values to do other split.
            comb1Copy = comb1.split("");
            comb2Copy = comb2.split("");
            offset = 0;
            //Shift comb2 to the left (Add remaining length of comb1 to offset) and repeat process.
            while(comb2Copy.length && !rightSplit) {
                comb2Copy.shift();
                offset++;
                //Check all places
                let valid = true;
                for(let i = 0; i < Math.min(comb2Copy.length, comb1.length); i++) {
                    if(comb2Copy[i] === "*" && comb1[i] === "*") {
                        valid = false;
                    }
                }
                if(valid) rightSplit = comb1.length + offset;
            }
            //Return the version of the shift that takes up the least space.
            return Math.min(leftSplit, rightSplit);
        },
        arguments: {
            descriptions: [
                {
                    text: "String Representing a Comb (Only * and .)",
                    type: "String"
                },
                {
                    text: "String Representing a Comb (Only * and .)",
                    type: "String"
                }
            ]
        }
    },
    comfortableNumbers: {
        name: 'comfortableNumbers',
        instructions: `Let's say that number a feels comfortable with number b if a ≠ b and b lies in the segment [a - s(a), a + s(a)], where s(x) is the sum of x's digits.

        How many pairs (a, b) are there, such that a < b, both a and b lie on the segment [l, r], and each number feels comfortable with the other (so a feels comfortable with b and b feels comfortable with a)?`,
        codeOutput: 
        `function comfortableNumbers(l, r) {
            //Get starting pairs for a and b.
            let a = l;
            let b = a + 1;
            //Keep track of comfortable pairs.
            let count = 0;
            while(a < r && b <= r) {
                //Get the comfortable range for a.
                let aMin = a - String(a).split("").reduce((total, current) => {
                    return total += Number(current);
                }, 0);
                let aMax = a + String(a).split("").reduce((total, current) => {
                    return total += Number(current);
                }, 0);
                //Get the comfortable range for b.
                let bMin = b - String(b).split("").reduce((total, current) => {
                    return total += Number(current);
                }, 0);
                let bMax = b + String(b).split("").reduce((total, current) => {
                    return total += Number(current);
                }, 0);
                //If b is with the comfortable range (and a is comfortable with the b range), add to the count.
                if(b >= aMin && b <= aMax && a !== b
                && a >= bMin && a <= bMax && a !== b) count++;
                //Move onto next pair.
                if(b < r) {
                    b++;
                } else {
                    a++;
                    b = a + 1;
                }
            }
            return count;
        }`,
        code: function comfortableNumbers(l, r) {
            //Get starting pairs for a and b.
            let a = l;
            let b = a + 1;
            //Keep track of comfortable pairs.
            let count = 0;
            while(a < r && b <= r) {
                //Get the comfortable range for a.
                let aMin = a - String(a).split("").reduce((total, current) => {
                    return total += Number(current);
                }, 0);
                let aMax = a + String(a).split("").reduce((total, current) => {
                    return total += Number(current);
                }, 0);
                //Get the comfortable range for b.
                let bMin = b - String(b).split("").reduce((total, current) => {
                    return total += Number(current);
                }, 0);
                let bMax = b + String(b).split("").reduce((total, current) => {
                    return total += Number(current);
                }, 0);
                //If b is with the comfortable range (and a is comfortable with the b range), add to the count.
                if(b >= aMin && b <= aMax && a !== b
                && a >= bMin && a <= bMax && a !== b) count++;
                //Move onto next pair.
                if(b < r) {
                    b++;
                } else {
                    a++;
                    b = a + 1;
                }
            }
            return count;
        },
        arguments: {
            descriptions: [
                {
                    text: "Left Integer",
                    type: "Number"
                },
                {
                    text: "Right Integer",
                    type: "Number"
                }
            ]
        }
    },
    commonCharacterCount: {
        name: 'commonCharacterCount',
        instructions: `Given two strings, find the number of common characters between them.`,
        codeOutput: 
        `function commonCharacterCount(s1, s2) {
            let numMatching = 0;
            let charMap1 = {};
            let charMap2 = {};
            
            for(let i = 0; i < s1.length; i++) {
                if(charMap1[s1[i]]) {
                    charMap1[s1[i]]++;
                } else {
                    charMap1[s1[i]] = 1;
                }
            } 
            
            for(let i = 0; i < s2.length; i++) {
                if(charMap2[s2[i]]) {
                    charMap2[s2[i]]++;
                } else {
                    charMap2[s2[i]] = 1;
                }
            } 
            
            console.log(charMap1);
            console.log(charMap2);
            
            for(let char in charMap1) {
                while(charMap1[char]) {
                    if(charMap2[char]) {
                        charMap2[char]--;
                        numMatching++;
                    }
                    charMap1[char]--;
                }
            }
            
            return numMatching;
        }`,
        code: function commonCharacterCount(s1, s2) {
            let numMatching = 0;
            let charMap1 = {};
            let charMap2 = {};
            
            for(let i = 0; i < s1.length; i++) {
                if(charMap1[s1[i]]) {
                    charMap1[s1[i]]++;
                } else {
                    charMap1[s1[i]] = 1;
                }
            } 
            
            for(let i = 0; i < s2.length; i++) {
                if(charMap2[s2[i]]) {
                    charMap2[s2[i]]++;
                } else {
                    charMap2[s2[i]] = 1;
                }
            } 
            
            console.log(charMap1);
            console.log(charMap2);
            
            for(let char in charMap1) {
                while(charMap1[char]) {
                    if(charMap2[char]) {
                        charMap2[char]--;
                        numMatching++;
                    }
                    charMap1[char]--;
                }
            }
            
            return numMatching;
        },
        arguments: {
            descriptions: [
                {
                    text: "First String",
                    type: "String"
                },
                {
                    text: "Second String",
                    type: "String"
                }
            ]
        }
    },
    constructRectangle: {
        name: `constructRectangle`,
        instructions: `A web developer needs to know how to design a web page's size. So, given a specific rectangular web page’s area, your job by now is to design a rectangular web page, whose length L and width W satisfy the following requirements:

        The area of the rectangular web page you designed must equal to the given target area.
        The width W should not be larger than the length L, which means L >= W.
        The difference between length L and width W should be as small as possible.
        Return an array [L, W] where L and W are the length and width of the web page you designed in sequence.`,
        codeOutput: 
        `var constructRectangle = function(area) {
            //Hold all sets of factors for this area.
            let factorSets = [];
            
            //Find all factors
            //Do-While structure allows for input of 1 to work. 
            let max = area;
            let i = 1;
            do {
                //See if this is a factor.
                if(area % i === 0) {
                    //Make sure longer side is first in set.
                    factorSets.push([area / i, i]);
                }
                //Update max and i.
                max = Math.ceil(area / i);
                i++;
            } while(i < max)
            
            //Return the last set in the list (this will have the smallest value of l - w)
            return factorSets.pop();
        };`,
        code: function constructRectangle(area) {
            //Hold all sets of factors for this area.
            let factorSets = [];
            
            //Find all factors
            //Do-While structure allows for input of 1 to work. 
            let max = area;
            let i = 1;
            do {
                //See if this is a factor.
                if(area % i === 0) {
                    //Make sure longer side is first in set.
                    factorSets.push([area / i, i]);
                }
                //Update max and i.
                max = Math.ceil(area / i);
                i++;
            } while(i < max)
            
            //Return the last set in the list (this will have the smallest value of l - w)
            return factorSets.pop();
        },
        arguments: {
            descriptions: [
                {
                    text: "Whole Number Area",
                    type: "Number"
                }
            ]
        }
    },
    constructSquare: {
        name: 'constructSquare',
        instructions: `Given a string consisting of lowercase English letters, find the largest square number which can be obtained by reordering the string's characters and replacing them with any digits you need (leading zeros are not allowed) where same characters always map to the same digits and different characters always map to different digits.

        If there is no solution, return -1.`,
        codeOutput: 
        `function constructSquare(s) {
            //Helper function to count occurances of each character.
            let countDigits = str => {
                let digits = [];
                //Until we run out of characters
                while(str.length) {
                    //Save the first character
                    let char = str[0];
                    //Find the total number of times this character occurs, save that number(push) and remove those characters.
                    digits.push(str.length - (str = str.replace(new RegExp(char, "g"), "")).length);
                }
                return digits.sort((a, b) => b - a).join("");
            };
            
            //Find largest possible square based on rearranging into largest possible number.
            let charMap = {};
            let largestUsed = 9;
            for(let i = 0; i < s.length; i++) {
                if(!charMap[s[i]]) {
                    charMap[s[i]] = largestUsed;
                    largestUsed--;
                }
            }
            let largest = [];
            for(let i = 0; i < s.length; i++) {
                largest.push(charMap[s[i]]);
            }
            //Get the smallest and largest "possible" values to be squared.
            let min = Number("1" + Array(Math.floor((s.length - 1) / 2)).fill(0).join(""));
            let max = Math.ceil(Math.sqrt(Number(largest.sort((a,b) => b - a).join(""))));
            
            //Get the count for each digit/character initially.
            let digits = countDigits(s);
            
            //Go through each number, starting at the largest possible.
            for(let i = max; i >= min; i--) {
                //See if running countDigits on this number provides the same result as the input string.
                if(countDigits(String(i * i)) === digits) return i * i;
            }
            
            //No result was found that worked.
            return -1; 
        }`,
        code: function constructSquare(s) {
            //Helper function to count occurances of each character.
            let countDigits = str => {
                let digits = [];
                //Until we run out of characters
                while(str.length) {
                    //Save the first character
                    let char = str[0];
                    //Find the total number of times this character occurs, save that number(push) and remove those characters.
                    digits.push(str.length - (str = str.replace(new RegExp(char, "g"), "")).length);
                }
                return digits.sort((a, b) => b - a).join("");
            };
            
            //Find largest possible square based on rearranging into largest possible number.
            let charMap = {};
            let largestUsed = 9;
            for(let i = 0; i < s.length; i++) {
                if(!charMap[s[i]]) {
                    charMap[s[i]] = largestUsed;
                    largestUsed--;
                }
            }
            let largest = [];
            for(let i = 0; i < s.length; i++) {
                largest.push(charMap[s[i]]);
            }
            //Get the smallest and largest "possible" values to be squared.
            let min = Number("1" + Array(Math.floor((s.length - 1) / 2)).fill(0).join(""));
            let max = Math.ceil(Math.sqrt(Number(largest.sort((a,b) => b - a).join(""))));
            
            //Get the count for each digit/character initially.
            let digits = countDigits(s);
            
            //Go through each number, starting at the largest possible.
            for(let i = max; i >= min; i--) {
                //See if running countDigits on this number provides the same result as the input string.
                if(countDigits(String(i * i)) === digits) return i * i;
            }
            
            //No result was found that worked.
            return -1; 
        },
        arguments: {
            descriptions: [
                {
                    text: "Lowercase String",
                    type: "String"
                }
            ]
        }
    },
    contoursShifting: {
        name: 'contoursShifting',
        instructions: `Mark got a rectangular array matrix for his birthday, and now he's thinking about all the fun things he can do with it. He likes shifting a lot, so he decides to shift all of its i-contours in a clockwise direction if i is even, and counterclockwise if i is odd.

        Here is how Mark defines i-contours:
        
        the 0-contour of a rectangular array as the union of left and right columns as well as top and bottom rows;
        consider the initial matrix without the 0-contour: its 0-contour is the 1-contour of the initial matrix;
        define 2-contour, 3-contour, etc. in the same manner by removing 0-contours from the obtained arrays.
        Implement a function that does exactly what Mark wants to do to his matrix.`,
        codeOutput: 
        `function contoursShifting(matrix) {
            //Helper function to shift array elements
            const shiftElements = (elements, counterClockwise, rowWidth, colHeight) => {
                //Put these elements into the correct order for rotation, ONLY if the elements are not coming in as one single row or one single column (in which case we use the same elements array values)
                let elementsToShift = rowWidth > 1 && colHeight > 1 ? [
                    ...elements.slice(0, rowWidth),
                    ...elements.slice(rowWidth, elements.length - rowWidth).filter((element, index) => index % 2),
                    ...elements.slice(rowWidth * -1).reverse(),
                    ...elements.slice(rowWidth, elements.length - rowWidth).filter((element, index) => !(index % 2)).reverse()
                ] : elements;
                        
                //Shift to the right if clockwise, otherwise to the left.
                let removedElement = counterClockwise ? elementsToShift.shift() : elementsToShift.pop();
                if(counterClockwise) {
                    elementsToShift.push(removedElement);
                } else {
                    elementsToShift.unshift(removedElement);
                }
                        
                //If the elements were rearranged, put them back into order in the same format as the input.
                if(rowWidth > 1 && colHeight > 1) {
                    //Find the values that will need to be reshuffled
                    let sectionSize = (elementsToShift.length - (rowWidth * 2)) / 2;
                    let section1 = elementsToShift.slice(rowWidth, rowWidth + sectionSize);
                    let section2 = elementsToShift.slice(sectionSize * -1);
                    //Reorder the scrambled sections.
                    let reorderedSections = [];
                    for(let i = 0; i < section1.length; i++) {
                        reorderedSections.push(section2[section2.length - 1 - i]);
                        reorderedSections.push(section1[i]);
                    }
                    //Return the reordered array.
                    return [
                        ...elementsToShift.slice(0, rowWidth),
                        ...reorderedSections,
                        ...elementsToShift.slice(rowWidth + sectionSize, (rowWidth + sectionSize) + rowWidth).reverse()
                    ];
                } 
                //Otherwise, return original array.
                return elementsToShift;
            };
            
            //Initial pointers to array indexes and dimension bounds
            let start_i = 0; 
            let start_j = 0;
            let height = matrix.length;
            let width = matrix[0].length;
            
            //Loop through every 'rectangle' in order to extract values, pass to be rotated, and then replaced.
            while(height >= 1 && width >= 1) {
                //Extract the elements bordering this rectangle.
                let elements = [];
                //Loop over every row in the 'rectangle'
                for(let i_offset = start_i; i_offset - start_i < height; i_offset++) {
                    //Loop over every col in the 'rectangle'
                    for(let j_offset = start_j; j_offset - start_j < width; j_offset++) {
                        //If this is a top or bottom row, extract all elements.
                        if(i_offset === start_i || 
                        i_offset === start_i + height - 1 ||
                        j_offset === start_j ||
                        j_offset === start_j + width - 1) {
                            elements.push(matrix[i_offset][j_offset]);
                        }
                    }
                }
                
                //Pass these elements, along with the direction value (0 or 1) and row width/height, to be shifted.
                let shiftedElements = shiftElements(elements, start_i % 2, width, height);
                        
                //Traverse this rectangle again, replacing the elements.
                //Loop over every row in the 'rectangle'
                for(let i_offset = start_i; i_offset - start_i < height; i_offset++) {
                    //Loop over every col in the 'rectangle'
                    for(let j_offset = start_j; j_offset - start_j < width; j_offset++) {
                        //If this is a top or bottom row, extract all elements.
                        if(i_offset === start_i || 
                        i_offset === start_i + height - 1 ||
                        j_offset === start_j ||
                        j_offset === start_j + width - 1) {
                            matrix[i_offset][j_offset] = shiftedElements.shift();
                        }
                    }
                }
                
                //Update values and move on to next rectangle.
                start_i++;
                start_j++;
                height -= 2;
                width -= 2;
            }
            
            //Return the final shifted matrix.
            return matrix;
        }`,
        code: function contoursShifting(matrix) {
            //Helper function to shift array elements
            const shiftElements = (elements, counterClockwise, rowWidth, colHeight) => {
                //Put these elements into the correct order for rotation, ONLY if the elements are not coming in as one single row or one single column (in which case we use the same elements array values)
                let elementsToShift = rowWidth > 1 && colHeight > 1 ? [
                    ...elements.slice(0, rowWidth),
                    ...elements.slice(rowWidth, elements.length - rowWidth).filter((element, index) => index % 2),
                    ...elements.slice(rowWidth * -1).reverse(),
                    ...elements.slice(rowWidth, elements.length - rowWidth).filter((element, index) => !(index % 2)).reverse()
                ] : elements;
                        
                //Shift to the right if clockwise, otherwise to the left.
                let removedElement = counterClockwise ? elementsToShift.shift() : elementsToShift.pop();
                if(counterClockwise) {
                    elementsToShift.push(removedElement);
                } else {
                    elementsToShift.unshift(removedElement);
                }
                        
                //If the elements were rearranged, put them back into order in the same format as the input.
                if(rowWidth > 1 && colHeight > 1) {
                    //Find the values that will need to be reshuffled
                    let sectionSize = (elementsToShift.length - (rowWidth * 2)) / 2;
                    let section1 = elementsToShift.slice(rowWidth, rowWidth + sectionSize);
                    let section2 = elementsToShift.slice(sectionSize * -1);
                    //Reorder the scrambled sections.
                    let reorderedSections = [];
                    for(let i = 0; i < section1.length; i++) {
                        reorderedSections.push(section2[section2.length - 1 - i]);
                        reorderedSections.push(section1[i]);
                    }
                    //Return the reordered array.
                    return [
                        ...elementsToShift.slice(0, rowWidth),
                        ...reorderedSections,
                        ...elementsToShift.slice(rowWidth + sectionSize, (rowWidth + sectionSize) + rowWidth).reverse()
                    ];
                } 
                //Otherwise, return original array.
                return elementsToShift;
            };
            
            //Initial pointers to array indexes and dimension bounds
            let start_i = 0; 
            let start_j = 0;
            let height = matrix.length;
            let width = matrix[0].length;
            
            //Loop through every 'rectangle' in order to extract values, pass to be rotated, and then replaced.
            while(height >= 1 && width >= 1) {
                //Extract the elements bordering this rectangle.
                let elements = [];
                //Loop over every row in the 'rectangle'
                for(let i_offset = start_i; i_offset - start_i < height; i_offset++) {
                    //Loop over every col in the 'rectangle'
                    for(let j_offset = start_j; j_offset - start_j < width; j_offset++) {
                        //If this is a top or bottom row, extract all elements.
                        if(i_offset === start_i || 
                        i_offset === start_i + height - 1 ||
                        j_offset === start_j ||
                        j_offset === start_j + width - 1) {
                            elements.push(matrix[i_offset][j_offset]);
                        }
                    }
                }
                
                //Pass these elements, along with the direction value (0 or 1) and row width/height, to be shifted.
                let shiftedElements = shiftElements(elements, start_i % 2, width, height);
                        
                //Traverse this rectangle again, replacing the elements.
                //Loop over every row in the 'rectangle'
                for(let i_offset = start_i; i_offset - start_i < height; i_offset++) {
                    //Loop over every col in the 'rectangle'
                    for(let j_offset = start_j; j_offset - start_j < width; j_offset++) {
                        //If this is a top or bottom row, extract all elements.
                        if(i_offset === start_i || 
                        i_offset === start_i + height - 1 ||
                        j_offset === start_j ||
                        j_offset === start_j + width - 1) {
                            matrix[i_offset][j_offset] = shiftedElements.shift();
                        }
                    }
                }
                
                //Update values and move on to next rectangle.
                start_i++;
                start_j++;
                height -= 2;
                width -= 2;
            }
            
            //Return the final shifted matrix.
            return matrix;
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Integer Arrays (Form of [1,2,3], [1,2,3]... * One Space Between Arrays)",
                    type: "NumberArrayArray"
                }
            ]
        }
    },
    correctNonogram: {
        name: 'correctNonogram',
        instructions: `A nonogram is also known as Paint by Numbers and Japanese Crossword. The aim in this puzzle is to color the grid into black and white squares. At the top of each column, and at the side of each row, there are sets of one or more numbers which describe the runs of black squares in that row/column in exact order. For example, if you see 10 1 along some column/row, this indicates that there will be a run of exactly ten black squares, followed by one or more white squares, followed by a single black square. The cells along the edges of the grid can also be white.

        You are given a square nonogram of size size. Its grid is given as a square matrix nonogramField of size (size + 1) / 2 + size, where the first (size + 1) / 2 cells of each row and and each column define the numbers for the corresponding row/column, and the rest size × size cells define the the grid itself.
        
        Determine if the given nonogram has been solved correctly.`,
        codeOutput: 
        `function correctNonogram(size, nonogramField) {
            //Loop through each column of the nonogram, seeing if the rules defined in the first elements are followed in the rest of the grid itself.
            for(let col = nonogramField[0].length - size; col < nonogramField[0].length; col++) {
                //Keep track of the 'rules' in the form of the number of # to be expected in each group.
                let rules = [];
                //If inside of a # group, keep track of the number found.
                let inGroup = false;
                let groupCount = 0;
                //Loop over each row of this column index.
                for(let row = 0; row < nonogramField.length; row++) {
                    //If this is a number, add to the rules.
                    if(!isNaN(nonogramField[row][col])) rules.push(nonogramField[row][col]);
                    //If this is a #, track to see if there are the correct number of # together.
                    if(nonogramField[row][col] === "#") {
                        inGroup = true;
                        groupCount++;
                    } else if(nonogramField[row][col] === ".") {
                        //If there is a group counted, see if it follows the current rule.
                        if(groupCount > 0) {
                            if(rules[0] != groupCount) {
                                //Exit the function if the rule isn't followed by this group.
                                return false;
                            }
                            //Get rid of this rule, since it was used and now passed.
                            rules.shift();
                            //Reset group count.
                            groupCount = 0;
                        }
                    }
                    //If this is the end and not all groups are accounted for, verify now.
                    if(row === nonogramField.length - 1 && groupCount) {
                        //If there is a group count but no rules left, return early.
                        if(!rules.length) return false;
                        //Otherwise, verify that the rule is followed.
                        if(rules[0] != groupCount) return false;
                        //Clear the (hopefully last) rule.
                        rules.shift();
                        //If there are still rules left, this isn't a valid column.
                        if(rules.length) return false;
                    } 
                }
            }
            
            //Loop through each row of the nonogram, seeing if the rules defined in the first elements are followed in the rest of the grid itself.
            for(let row = nonogramField.length - size; row < nonogramField.length; row++) {
                //Keep track of the 'rules' in the form of the number of # to be expected in each group.
                let rules = [];
                //If inside of a # group, keep track of the number found.
                let inGroup = false;
                let groupCount = 0;
                console.log("Looping over row " + row); 
                //Loop over each row of this column index.
                for(let col = 0; col < nonogramField[row].length; col++) {
                    //If this is a number, add to the rules.
                    if(!isNaN(nonogramField[row][col])) rules.push(nonogramField[row][col]);
                    //If this is a #, track to see if there are the correct number of # together.
                    if(nonogramField[row][col] === "#") {
                        inGroup = true;
                        groupCount++;
                    } else if(nonogramField[row][col] === ".") {
                        //If there is a group counted, see if it follows the current rule.
                        if(groupCount > 0) {
                            if(rules[0] != groupCount) {
                                //Exit the function if the rule isn't followed by this group.
                                return false;
                            }
                            //Get rid of this rule, since it was used and now passed.
                            rules.shift();
                            //Reset group count.
                            groupCount = 0;
                        }
                    }
                    //If this is the end and not all groups are accounted for, verify now.
                    if(col === nonogramField[0].length - 1 && groupCount) {
                        //If there is a group count but no rules left, return early.
                        if(!rules.length) return false;
                        //Otherwise, verify that the rule is followed.
                        if(rules[0] != groupCount) return false;
                        //Clear the (hopefully last) rule.
                        rules.shift();
                        //If there are still rules left, this isn't a valid column.
                        if(rules.length) return false;
                    } 
                }
            }
            
            return true;
        }`,
        code: function correctNonogram(size, nonogramField) {
            //Loop through each column of the nonogram, seeing if the rules defined in the first elements are followed in the rest of the grid itself.
            for(let col = nonogramField[0].length - size; col < nonogramField[0].length; col++) {
                //Keep track of the 'rules' in the form of the number of # to be expected in each group.
                let rules = [];
                //If inside of a # group, keep track of the number found.
                let inGroup = false;
                let groupCount = 0;
                //Loop over each row of this column index.
                for(let row = 0; row < nonogramField.length; row++) {
                    //If this is a number, add to the rules.
                    if(!isNaN(nonogramField[row][col])) rules.push(nonogramField[row][col]);
                    //If this is a #, track to see if there are the correct number of # together.
                    if(nonogramField[row][col] === "#") {
                        inGroup = true;
                        groupCount++;
                    } else if(nonogramField[row][col] === ".") {
                        //If there is a group counted, see if it follows the current rule.
                        if(groupCount > 0) {
                            if(rules[0] != groupCount) {
                                //Exit the function if the rule isn't followed by this group.
                                return false;
                            }
                            //Get rid of this rule, since it was used and now passed.
                            rules.shift();
                            //Reset group count.
                            groupCount = 0;
                        }
                    }
                    //If this is the end and not all groups are accounted for, verify now.
                    if(row === nonogramField.length - 1 && groupCount) {
                        //If there is a group count but no rules left, return early.
                        if(!rules.length) return false;
                        //Otherwise, verify that the rule is followed.
                        if(rules[0] != groupCount) return false;
                        //Clear the (hopefully last) rule.
                        rules.shift();
                        //If there are still rules left, this isn't a valid column.
                        if(rules.length) return false;
                    } 
                }
            }
            
            //Loop through each row of the nonogram, seeing if the rules defined in the first elements are followed in the rest of the grid itself.
            for(let row = nonogramField.length - size; row < nonogramField.length; row++) {
                //Keep track of the 'rules' in the form of the number of # to be expected in each group.
                let rules = [];
                //If inside of a # group, keep track of the number found.
                let inGroup = false;
                let groupCount = 0;
                console.log("Looping over row " + row); 
                //Loop over each row of this column index.
                for(let col = 0; col < nonogramField[row].length; col++) {
                    //If this is a number, add to the rules.
                    if(!isNaN(nonogramField[row][col])) rules.push(nonogramField[row][col]);
                    //If this is a #, track to see if there are the correct number of # together.
                    if(nonogramField[row][col] === "#") {
                        inGroup = true;
                        groupCount++;
                    } else if(nonogramField[row][col] === ".") {
                        //If there is a group counted, see if it follows the current rule.
                        if(groupCount > 0) {
                            if(rules[0] != groupCount) {
                                //Exit the function if the rule isn't followed by this group.
                                return false;
                            }
                            //Get rid of this rule, since it was used and now passed.
                            rules.shift();
                            //Reset group count.
                            groupCount = 0;
                        }
                    }
                    //If this is the end and not all groups are accounted for, verify now.
                    if(col === nonogramField[0].length - 1 && groupCount) {
                        //If there is a group count but no rules left, return early.
                        if(!rules.length) return false;
                        //Otherwise, verify that the rule is followed.
                        if(rules[0] != groupCount) return false;
                        //Clear the (hopefully last) rule.
                        rules.shift();
                        //If there are still rules left, this isn't a valid column.
                        if(rules.length) return false;
                    } 
                }
            }
            
            return true;
        },
        arguments: {
            descriptions: [
                {
                    text: "Size (Positive Integer)",
                    type: "Number"
                },
                {
                    text: 'Nonogram Field (Example: ["-","-","-","-","-","-","-","-"], ["-","-","-","2","2","1","-","1"], ["-","-","-","2","1","1","3","3"], ["-","3","1","#","#","#",".","#"], ["-","-","2","#","#",".",".","."], ["-","-","2",".",".",".","#","#"], ["-","1","2","#",".",".","#","#"], ["-","-","5","#","#","#","#","#"])',
                    type: "ArrayArray"
                }
            ]
        }
    },
    countBinarySubstrings: {
        name: `countBinarySubstrings`,
        instructions: `Give a binary string s, return the number of non-empty substrings that have the same number of 0's and 1's, and all the 0's and all the 1's in these substrings are grouped consecutively.

        Substrings that occur multiple times are counted the number of times they occur.`,
        codeOutput: 
        `var countBinarySubstrings = function(s) {
            //Get all groups of numbers with ones and zeros. 
            let allGroups = [...getMainGroups(s, "0"), ...getMainGroups(s, "1")].filter(group => {
                if(group.includes("0") && group.includes("1")) return group;
            });
            
            //Add up the total number of combinations.
            return allGroups.reduce((prev, current) => {
                //For each group, count the number of 1s and 0s. The one with the smaller amount is the number of combinations in this group (e.g. 1100 would have 2 combinations: 1100 and 10)
                return prev += Math.min(
                    current.split("")
                    .filter(num => num === "1")
                    .length, 
                    current.split("")
                    .filter(num => num === "0")
                    .length
                ); 
            }, 0);
            
            //Helper function to extract groups of 1s and 0s.
            function getMainGroups(str, starterNum) {
                let groups = [];
                let thisGroup = "";
                //By default, start with the first half of this group (whether it be 1s or 0s)
                let firstHalf = true;
                
                for(let i = 0; i < str.length; i++) {
                    if(firstHalf) {
                        //If this is the first half, add to the group, and move to the second group if the character changed.
                        thisGroup += str[i];
                        if(str[i] !== starterNum) firstHalf = false;
                    } else {
                        //Otherwise, in the second half, add to this group, OR go back to a new group and push to the groups array.
                        if(str[i] !== starterNum) {
                            thisGroup += str[i];
                        } else {
                            firstHalf = true;
                            groups.push(thisGroup);
                            thisGroup = str[i]
                        }
                    }   
                }
                //Push last group.
                groups.push(thisGroup);
                
                return groups;
            }
        };`,
        code: function countBinarySubstrings(s) {
            //Get all groups of numbers with ones and zeros. 
            let allGroups = [...getMainGroups(s, "0"), ...getMainGroups(s, "1")].filter(group => {
                if(group.includes("0") && group.includes("1")) return group;
            });
            
            //Add up the total number of combinations.
            return allGroups.reduce((prev, current) => {
                //For each group, count the number of 1s and 0s. The one with the smaller amount is the number of combinations in this group (e.g. 1100 would have 2 combinations: 1100 and 10)
                return prev += Math.min(
                    current.split("")
                    .filter(num => num === "1")
                    .length, 
                    current.split("")
                    .filter(num => num === "0")
                    .length
                ); 
            }, 0);
            
            //Helper function to extract groups of 1s and 0s.
            function getMainGroups(str, starterNum) {
                let groups = [];
                let thisGroup = "";
                //By default, start with the first half of this group (whether it be 1s or 0s)
                let firstHalf = true;
                
                for(let i = 0; i < str.length; i++) {
                    if(firstHalf) {
                        //If this is the first half, add to the group, and move to the second group if the character changed.
                        thisGroup += str[i];
                        if(str[i] !== starterNum) firstHalf = false;
                    } else {
                        //Otherwise, in the second half, add to this group, OR go back to a new group and push to the groups array.
                        if(str[i] !== starterNum) {
                            thisGroup += str[i];
                        } else {
                            firstHalf = true;
                            groups.push(thisGroup);
                            thisGroup = str[i]
                        }
                    }   
                }
                //Push last group.
                groups.push(thisGroup);
                
                return groups;
            }
        },
        arguments: {
            descriptions: [
                {
                    text: "String of only 1s and 0s (e.g. 11001110010100)",
                    type: "String"
                }
            ]
        }
    },
    countSumOfTwoRepresentations2: {
        name: 'countSumOfTwoRepresentations2',
        instructions: `Given integers n, l and r, find the number of ways to represent n as a sum of two integers A and B such that l ≤ A ≤ B ≤ r.`,
        codeOutput: 
        `function countSumOfTwoRepresentations2(n, l, r) {
            //Keep track of number of working sums.
            count = 0;
            //Check if l or r are too large/small and adjust them if needed.
            if(l + r < n) {
                l = n - r;
            } else if(l + r > n) {
                r = n - l;
            }
            //Continue to narrow down l and r until they are equal or l is no longer less than r.
            while(l <= r) {
                count++;
                l++;
                r--;
            }
            return count;
        }`,
        code: function countSumOfTwoRepresentations2(n, l, r) {
            //Keep track of number of working sums.
            let count = 0;
            //Check if l or r are too large/small and adjust them if needed.
            if(l + r < n) {
                l = n - r;
            } else if(l + r > n) {
                r = n - l;
            }
            //Continue to narrow down l and r until they are equal or l is no longer less than r.
            while(l <= r) {
                count++;
                l++;
                r--;
            }
            return count;
        },
        arguments: {
            descriptions: [
                {
                    text: "Number to Represent n",
                    type: "Number"
                },
                {
                    text: "Number to Represent l",
                    type: "Number"
                },
                {
                    text: "Number to Represent r",
                    type: "Number"
                }
            ]
        }
    },
    createAnagram: {
        name: 'createAnagram',
        instructions: `You are given two strings s and t of the same length, consisting of uppercase English letters. Your task is to find the minimum number of "replacement operations" needed to get some anagram of the string t from the string s. A replacement operation is performed by picking exactly one character from the string s and replacing it by some other character.`,
        codeOutput: 
        `function createAnagram(s, t) {
            //Create character maps for each string.
            let sMap = {};
            let tMap = {};
            for(let i = 0; i < s.length; i++) {
                if(sMap[s[i]]) {
                    sMap[s[i]]++;
                } else {
                    sMap[s[i]] = 1;
                }
            }
            for(let i = 0; i < t.length; i++) {
                if(tMap[t[i]]) {
                    tMap[t[i]]++;
                } else {
                    tMap[t[i]] = 1;
                }
            }
            //Keep track of characters to add or remove.
            let charsToAdd = [];
            let charsToRemove = [];
            for(let character in tMap) {
                //If a character exists in the first string, add it to the correct array the correct number of times.
                if(sMap[character]) {
                    if(tMap[character] - sMap[character] < 0) {
                        for(let i = 0; i < Math.abs(tMap[character] - sMap[character]); i++) {
                            charsToRemove.push(character);
                        }
                    } else if(tMap[character] - sMap[character] > 0) {
                        for(let i = 0; i < tMap[character] - sMap[character]; i++) {
                            charsToAdd.push(character);
                        }
                    }
                    //If this character isn't in the first string, we know we need to add it.
                } else {
                    for(let i = 0; i < tMap[character]; i++) {
                        charsToAdd.push(character);
                    }
                }
            }
          
            //If both arrays have the same length, divide the total by 2. Otherwise, return the size of the array of characters needed to be added.
            return charsToAdd.length === charsToRemove.length ? 
            Math.floor((charsToAdd.length + charsToRemove.length) / 2) :
            Math.floor(charsToAdd.length);
        }`,
        code: function createAnagram(s, t) {
            //Create character maps for each string.
            let sMap = {};
            let tMap = {};
            for(let i = 0; i < s.length; i++) {
                if(sMap[s[i]]) {
                    sMap[s[i]]++;
                } else {
                    sMap[s[i]] = 1;
                }
            }
            for(let i = 0; i < t.length; i++) {
                if(tMap[t[i]]) {
                    tMap[t[i]]++;
                } else {
                    tMap[t[i]] = 1;
                }
            }
            //Keep track of characters to add or remove.
            let charsToAdd = [];
            let charsToRemove = [];
            for(let character in tMap) {
                //If a character exists in the first string, add it to the correct array the correct number of times.
                if(sMap[character]) {
                    if(tMap[character] - sMap[character] < 0) {
                        for(let i = 0; i < Math.abs(tMap[character] - sMap[character]); i++) {
                            charsToRemove.push(character);
                        }
                    } else if(tMap[character] - sMap[character] > 0) {
                        for(let i = 0; i < tMap[character] - sMap[character]; i++) {
                            charsToAdd.push(character);
                        }
                    }
                    //If this character isn't in the first string, we know we need to add it.
                } else {
                    for(let i = 0; i < tMap[character]; i++) {
                        charsToAdd.push(character);
                    }
                }
            }
          
            //If both arrays have the same length, divide the total by 2. Otherwise, return the size of the array of characters needed to be added.
            return charsToAdd.length === charsToRemove.length ? 
            Math.floor((charsToAdd.length + charsToRemove.length) / 2) :
            Math.floor(charsToAdd.length);
        },
        arguments: {
            descriptions: [
                {
                    text: "String 's' (Uppercase English Letters)",
                    type: "String"
                },
                {
                    text: "String 't' (Uppercase English Letters)",
                    type: "String"
                }
            ]
        }
    },
    crossingSum: {
        name: 'crossingSum',
        instructions: `Given a rectangular matrix and integers a and b, consider the union of the ath row and the bth (both 0-based) column of the matrix (i.e. all cells that belong either to the ath row or to the bth column, or to both). Return sum of all elements of that union.`,
        codeOutput: 
        `function crossingSum(matrix, a, b) {
            //First, add the entire row at index a, then loop through all the columns (index b) except for the one that matches a (to avoid duplicate) and add the sums together.
            return matrix[a].reduce((sum, current) => sum += current, 0) + 
                   matrix.reduce((sum, current, arrayIndex) => {
                       if(arrayIndex !== a) return sum += current[b];
                       return sum;
                   }, 0);
        }`,
        code: function crossingSum(matrix, a, b) {
            //First, add the entire row at index a, then loop through all the columns (index b) except for the one that matches a (to avoid duplicate) and add the sums together.
            return matrix[a].reduce((sum, current) => sum += current, 0) + 
                   matrix.reduce((sum, current, arrayIndex) => {
                       if(arrayIndex !== a) return sum += current[b];
                       return sum;
                   }, 0);
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Integer Arrays (Form of [1,2,3], [1,2,3]... * One Space Between Arrays)",
                    type: "NumberArrayArray"
                },
                {
                    text: "Integer 'a'",
                    type: "Number"
                },
                {
                    text: "Integer 'b'",
                    type: "Number"
                }
            ]
        }
    },
    crosswordFormation: {
        name: 'crosswordFormation',
        instructions: `You're a crossword fanatic, and have finally decided to try and create your own. However, you also love symmetry and good design, so you come up with a set of rules they should follow:

        the crossword must contain exactly four words;
        these four words should form four pairwise intersections;
        all words must be written either left-to-right or top-to-bottom;
        the area of the rectangle formed by empty cells inside the intersections isn't equal to zero.
        Given 4 words, find the number of ways to make a crossword following the above-described rules. Note that two crosswords which differ by rotation are considered different.`,
        codeOutput: 
        `function crosswordFormation(words) {
            let workingCrossword = 0;
            
            //Loop through each possible combination of 4 words to see if it works.
            for (let first = 0; first < words.length; first++) {
                for (let second = 0; second < words.length; second++) {
                    for (let third = 0; third < words.length; third++) {
                        for (let fourth = 0; fourth < words.length; fourth++) {
                            if (first != second && first != third && first != fourth && 
                                second != third && second != fourth && third != fourth) {
                                    workingCrossword += check(words[first],words[second],words[third],words[fourth]); 
                            }
                        }
                    } 
                }
            }
            
            return workingCrossword;
        
            function check (firstWord, secondWord, thirdWord, fourthWord) {
                let total = 0;
                //Loop through indexes of the first word that are 2 away from each other.
                for (let firstWord_1 = 0; firstWord_1 < firstWord.length; firstWord_1++) {
                    for (let firstWord_2 = firstWord_1 + 2; firstWord_2 < firstWord.length; firstWord_2++) {
                        
                        //Loop through indexes of the second word that are two away from each other.
                        for (let secondWord_1 = 0; secondWord_1 < secondWord.length; secondWord_1++) {
                            for (let secondWord_2 = secondWord_1 + 2; secondWord_2 < secondWord.length; secondWord_2++) {
                                
                                //Loop through indexes of the third word.
                                for (let thirdWord_1 = 0; thirdWord_1 < thirdWord.length; thirdWord_1++) {
                                    //For each index of the third word, loop through each index of the fourth word.
                                    for (let fourthWord_1 = 0; fourthWord_1 < fourthWord.length; fourthWord_1++) {
                                        
                                        //Indexes of the 'pair' for third and fourth words will essentially loop around.
                                        let thirdWord_2 = thirdWord_1 + (firstWord_2 - firstWord_1);
                                        let fourthWord_2 = fourthWord_1 + (secondWord_2 - secondWord_1);
                                        
                                        //As long as we are not at the end of the third and fourth words
                                        if (thirdWord_2 < thirdWord.length && fourthWord_2 < fourthWord.length) {
                                            //Check if the characters at the current positions match where they should be in their 'partner' words.
                                            //If so, this is a working game.
                                            if (firstWord.charAt(firstWord_1) == secondWord.charAt(secondWord_1)
                                            && firstWord.charAt(firstWord_2) == fourthWord.charAt(fourthWord_1)
                                            && thirdWord.charAt(thirdWord_1) == secondWord.charAt(secondWord_2)
                                            && thirdWord.charAt(thirdWord_2) == fourthWord.charAt(fourthWord_2)) total++;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                return total;
            }
        }`,
        code: function crosswordFormation(words) {
            let workingCrossword = 0;
            
            //Loop through each possible combination of 4 words to see if it works.
            for (let first = 0; first < words.length; first++) {
                for (let second = 0; second < words.length; second++) {
                    for (let third = 0; third < words.length; third++) {
                        for (let fourth = 0; fourth < words.length; fourth++) {
                            if (first != second && first != third && first != fourth && 
                                second != third && second != fourth && third != fourth) {
                                    workingCrossword += check(words[first],words[second],words[third],words[fourth]); 
                            }
                        }
                    } 
                }
            }
            
            return workingCrossword;
        
            function check (firstWord, secondWord, thirdWord, fourthWord) {
                let total = 0;
                //Loop through indexes of the first word that are 2 away from each other.
                for (let firstWord_1 = 0; firstWord_1 < firstWord.length; firstWord_1++) {
                    for (let firstWord_2 = firstWord_1 + 2; firstWord_2 < firstWord.length; firstWord_2++) {
                        
                        //Loop through indexes of the second word that are two away from each other.
                        for (let secondWord_1 = 0; secondWord_1 < secondWord.length; secondWord_1++) {
                            for (let secondWord_2 = secondWord_1 + 2; secondWord_2 < secondWord.length; secondWord_2++) {
                                
                                //Loop through indexes of the third word.
                                for (let thirdWord_1 = 0; thirdWord_1 < thirdWord.length; thirdWord_1++) {
                                    //For each index of the third word, loop through each index of the fourth word.
                                    for (let fourthWord_1 = 0; fourthWord_1 < fourthWord.length; fourthWord_1++) {
                                        
                                        //Indexes of the 'pair' for third and fourth words will essentially loop around.
                                        let thirdWord_2 = thirdWord_1 + (firstWord_2 - firstWord_1);
                                        let fourthWord_2 = fourthWord_1 + (secondWord_2 - secondWord_1);
                                        
                                        //As long as we are not at the end of the third and fourth words
                                        if (thirdWord_2 < thirdWord.length && fourthWord_2 < fourthWord.length) {
                                            //Check if the characters at the current positions match where they should be in their 'partner' words.
                                            //If so, this is a working game.
                                            if (firstWord.charAt(firstWord_1) == secondWord.charAt(secondWord_1)
                                            && firstWord.charAt(firstWord_2) == fourthWord.charAt(fourthWord_1)
                                            && thirdWord.charAt(thirdWord_1) == secondWord.charAt(secondWord_2)
                                            && thirdWord.charAt(thirdWord_2) == fourthWord.charAt(fourthWord_2)) total++;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                return total;
            }
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Strings (No Brackets [], Quotes, or Spaces Between Strings)",
                    type: "StringArray"
                }
            ]
        }
    },
    curiousClock: {
        name: 'curiousClock',
        instructions: `Benjamin recently bought a digital clock at a magic trick shop. The seller never told Ben what was so special about it, but mentioned that one day Benjamin would be faced with a surprise.

        Indeed, the clock did surprise Benjamin: without warning, at someTime the clock suddenly started going in the opposite direction! Unfortunately, Benjamin has an important meeting very soon, and knows that at leavingTime he should leave the house so as to not be late. Ben spent all his money on the clock, so has to figure out what time his clock will show when it's time to leave.
        
        Given the someTime at which the clock started to go backwards, find out what time will be shown on the curious clock at leavingTime.`,
        codeOutput: 
        `function curiousClock(someTime, leavingTime) {
            //Array to keep track of month lengths
            let monthLengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            let monthMinutes = [44640, 40320, 44640, 43200, 44640, 43200, 44640, 44640, 43200, 44640, 43200, 44640];
            //Convert an input string into minutes.
            const convertToMins = timeString => {
                //Split this date into units.
                let timeUnits = timeString.split(" ").map((string, index) => {
                    let items = [];
                    if(index === 0) {
                        items = string.split("-");
                    } else if(index === 1) {
                        items = string.split(":");
                    }
                    return items;
                //Remove array nesting and map to numbers.
                }).flat().map(str => Number(str));        
                
                //Convert each unit to minutes.
                let totalMinutes = 
                //Convert the year to minutes (since Jan 1, 1901 up until Jan 1 of this year)
                (525600 * (timeUnits[0] - 1901)) + 
                //Account for extra minutes in leap years between 
                (1440 * (Math.floor((timeUnits[0] - 1901) / 4))) +
                //Find the number of minutes in all months leading up to the current month
                (monthMinutes.slice(0, timeUnits[1] - 1).reduce((a, b) => a += b, 0)) + 
                //Find the number of minutes in all days leading up to the current day
                (1440 * (timeUnits[2] - 1)) + 
                //Find the number of minutes in all hours leading up to the current hour
                (60 * timeUnits[3]) + 
                //Add remaining minutes
                (timeUnits[4]) +
                //If this is a leap year and leap day already passed, add in the extra leap day minutes
                (timeUnits[0] % 4 === 0 && timeUnits[1] > 2 ? 1440 : 0);
                        
                return totalMinutes;
            };
            
            const convertToString = minutesInput => { 
                //Track the minutes left to convert to other units.
                let minutesLeft = minutesInput;
                //Extract the minutes
                let mins = minutesLeft % 60;
                minutesLeft -= mins;
                //Extract the hours
                let hours = (minutesLeft % 1440);
                minutesLeft -= hours;
                hours /= 60;
                //Extract the years and remove leap days.
                let years = Math.floor(minutesLeft / 525600);
                let numLeapDays = Math.floor(years / 4);
                minutesLeft -= (525600 * years);
                years += 1901;
                minutesLeft -= (numLeapDays * 1440);
                //Extract the months.
                let monthSum = 0;
                let monthIndex = 0;
                //Incrementally add each month's minutes to a total until the current minutes left is reached.
                while(monthSum + monthMinutes[monthIndex] <= minutesLeft) {
                    monthSum += monthMinutes[monthIndex];
                    monthIndex++;
                }
                let months = monthIndex + 1;
                minutesLeft -= monthSum;
                //Extract the date
                let day = minutesLeft / 1440;
                //Determine if a day needs to be accounted for (leap day)
                if(years % 4 || (!(years % 4) && months < 3)) day++;
                
                //Format output.
                return \`\${years}-\${months < 10 ? 
                \`0\${months}\` : 
                \`\${months}\`}-\${day < 10 ?
                \`0\${day}\` :
                \`\${day}\`} \${hours < 10 ? 
                \`0\${hours}\` :
                \`\${hours}\`}:\${mins < 10 ?
                \`0\${mins}\` :
                \`\${mins}\`}\`;
            };
            
            //Find the difference between someTime and leavingTime
            let someTimeMins = convertToMins(someTime);
            let leavingTimeMins = convertToMins(leavingTime);
            let timeDifference = leavingTimeMins - someTimeMins;
            
            //Convert these minutes back to a string.
            let benTimeMins = someTimeMins - timeDifference;
            return convertToString(benTimeMins);
        }`,
        code: function curiousClock(someTime, leavingTime) {
            //Array to keep track of month lengths
            let monthLengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            let monthMinutes = [44640, 40320, 44640, 43200, 44640, 43200, 44640, 44640, 43200, 44640, 43200, 44640];
            //Convert an input string into minutes.
            const convertToMins = timeString => {
                //Split this date into units.
                let timeUnits = timeString.split(" ").map((string, index) => {
                    let items = [];
                    if(index === 0) {
                        items = string.split("-");
                    } else if(index === 1) {
                        items = string.split(":");
                    }
                    return items;
                //Remove array nesting and map to numbers.
                }).flat().map(str => Number(str));        
                
                //Convert each unit to minutes.
                let totalMinutes = 
                //Convert the year to minutes (since Jan 1, 1901 up until Jan 1 of this year)
                (525600 * (timeUnits[0] - 1901)) + 
                //Account for extra minutes in leap years between 
                (1440 * (Math.floor((timeUnits[0] - 1901) / 4))) +
                //Find the number of minutes in all months leading up to the current month
                (monthMinutes.slice(0, timeUnits[1] - 1).reduce((a, b) => a += b, 0)) + 
                //Find the number of minutes in all days leading up to the current day
                (1440 * (timeUnits[2] - 1)) + 
                //Find the number of minutes in all hours leading up to the current hour
                (60 * timeUnits[3]) + 
                //Add remaining minutes
                (timeUnits[4]) +
                //If this is a leap year and leap day already passed, add in the extra leap day minutes
                (timeUnits[0] % 4 === 0 && timeUnits[1] > 2 ? 1440 : 0);
                        
                return totalMinutes;
            };
            
            const convertToString = minutesInput => { 
                //Track the minutes left to convert to other units.
                let minutesLeft = minutesInput;
                //Extract the minutes
                let mins = minutesLeft % 60;
                minutesLeft -= mins;
                //Extract the hours
                let hours = (minutesLeft % 1440);
                minutesLeft -= hours;
                hours /= 60;
                //Extract the years and remove leap days.
                let years = Math.floor(minutesLeft / 525600);
                let numLeapDays = Math.floor(years / 4);
                minutesLeft -= (525600 * years);
                years += 1901;
                minutesLeft -= (numLeapDays * 1440);
                //Extract the months.
                let monthSum = 0;
                let monthIndex = 0;
                //Incrementally add each month's minutes to a total until the current minutes left is reached.
                while(monthSum + monthMinutes[monthIndex] <= minutesLeft) {
                    monthSum += monthMinutes[monthIndex];
                    monthIndex++;
                }
                let months = monthIndex + 1;
                minutesLeft -= monthSum;
                //Extract the date
                let day = minutesLeft / 1440;
                //Determine if a day needs to be accounted for (leap day)
                if(years % 4 || (!(years % 4) && months < 3)) day++;
                
                //Format output.
                return `${years}-${months < 10 ? 
                `0${months}` : 
                `${months}`}-${day < 10 ?
                `0${day}` :
                `${day}`} ${hours < 10 ? 
                `0${hours}` :
                `${hours}`}:${mins < 10 ?
                `0${mins}` :
                `${mins}`}`;
            };
            
            //Find the difference between someTime and leavingTime
            let someTimeMins = convertToMins(someTime);
            let leavingTimeMins = convertToMins(leavingTime);
            let timeDifference = leavingTimeMins - someTimeMins;
            
            //Convert these minutes back to a string.
            let benTimeMins = someTimeMins - timeDifference;
            return convertToString(benTimeMins);
        },
        arguments: {
            descriptions: [
                {
                    text: "Time: Date/Time String (24-Hour Form of YYYY-MM-DD HH:MM)",
                    type: "String"
                },
                {
                    text: "Leaving Time: Date/Time String (24-Hour Form of YYYY-MM-DD HH:MM)",
                    type: "String"
                }
            ]
        }
    },
    cyclicString: {
        name: 'cyclicString',
        instructions: `You're given a substring s of some cyclic string. What's the length of the smallest possible string that can be concatenated to itself many times to obtain this cyclic string?

        Example
        
        For s = "cabca", the output should be
        cyclicString(s) = 3.
        
        "cabca" is a substring of a cycle string "abcabcabcabc..." that can be obtained by concatenating "abc" to itself. Thus, the answer is 3.`,
        codeOutput: 
        `function cyclicString(s) {
            let lengths = [];
            //Start building string(s) to be repeated
            for(let i = 0; i < s.length; i++) {    
                //Build up the string starting at this point
                let subString = "";
                for(let j = i; j < s.length; j++) {
                    subString += s[j];
                    //See if this string, when repeated, creates the target string.
                    let repeatedString = "";
                    //Using the current sub-string, continue to build a repeated string and see if 's' is a part of it.
                    while(repeatedString.length <= s.length + subString.length) {
                        repeatedString += subString;
                        if(repeatedString.includes(s)) {
                            //If we find a match, push this length and continue on.
                            lengths.push(subString.length);
                            break;
                        }
                    }
                }
            }
            //Return the length of the smallest combination.
            return Math.min(...lengths);
        }`,
        code: function cyclicString(s) {
            let lengths = [];
            //Start building string(s) to be repeated
            for(let i = 0; i < s.length; i++) {    
                //Build up the string starting at this point
                let subString = "";
                for(let j = i; j < s.length; j++) {
                    subString += s[j];
                    //See if this string, when repeated, creates the target string.
                    let repeatedString = "";
                    //Using the current sub-string, continue to build a repeated string and see if 's' is a part of it.
                    while(repeatedString.length <= s.length + subString.length) {
                        repeatedString += subString;
                        if(repeatedString.includes(s)) {
                            //If we find a match, push this length and continue on.
                            lengths.push(subString.length);
                            break;
                        }
                    }
                }
            }
            //Return the length of the smallest combination.
            return Math.min(...lengths);
        },
        arguments: {
            descriptions: [
                {
                    text: "Input String",
                    type: "String"
                }
            ]
        }
    }
};

export default challenges;

/*

Template:

name: {
    name: ``,
    instructions: ``,
    codeOutput: 
    ``,
    code: ,
    arguments: {
        descriptions: [
            {
                text: "",
                type: ""
            }
        ]
    }
}

Type List:
Number
String
Number Array 
String Array
Number Array Array
String Array Array 

*/