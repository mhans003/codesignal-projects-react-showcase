//Include global BigInt (as comment) in order to prevent no-undef in this environment.
/* global BigInt */

const challenges = {
    candies: {
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
    addborder: {
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
    adjacentElementsProduct: {
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
                index % 2 === 1 ? sums[1] += number : sums[0] += number;
            });
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
                    } else if(secondElement = null) {
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
        instructions: `Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

        Given two arrays a and b, check whether they are similar.`,
        codeOutput: 
        `function areSimilar(a, b) {
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
        code: function areSimilar(a, b) {
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
    }
};

export default challenges;

/*
Template:

name: {
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

*/