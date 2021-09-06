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
    },
    arithmeticExpression: {
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
    arrayPreviousLess: {
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
    beautifulText: {
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
    bishopAndPawn: {
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
    boxBlur: {
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
    buildPalindrome: {
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
    candles: {
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
    characterParity: {
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
    chessBishopDream: {
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
Number Array Array
String Array Array 

*/