//Include global BigInt (as comment) in order to prevent no-undef in this environment.
/* global BigInt */

const challenges_k_n = {
    killKthBit: {
        instructions: `In order to stop the Mad Coder evil genius you need to decipher the encrypted message he sent to his minions. The message contains several numbers that, when typed into a supercomputer, will launch a missile into the sky blocking out the sun, and making all the people on Earth grumpy and sad.

        You figured out that some numbers have a modified single digit in their binary representation. More specifically, in the given number n the kth bit from the right was initially set to 0, but its current value might be different. It's now up to you to write a function that will change the kth bit of n back to 0.`,
        codeOutput: 
        `function killKthBit(n, k) {
            //Convert n to binary (string), then check if the bit at position k is set.
            //If so, remove that bit from n, otherwise return n as is.
            return n.toString(2)[n.toString(2).length - k] === "1" ?
            n - (2 ** (k - 1)) :
            n;
        }`,
        code: function killKthBit(n, k) {
            //Convert n to binary (string), then check if the bit at position k is set.
            //If so, remove that bit from n, otherwise return n as is.
            return n.toString(2)[n.toString(2).length - k] === "1" ?
            n - (2 ** (k - 1)) :
            n;
        },
        arguments: {
            descriptions: [
                {
                    text: "Integer n",
                    type: "Number"
                },
                {
                    text: "Integer k",
                    type: "Number"
                }
            ]
        }
    },
    knapsackLight: {
        instructions: `You found two items in a treasure chest! The first item weighs weight1 and is worth value1, and the second item weighs weight2 and is worth value2. What is the total maximum value of the items you can take with you, assuming that your max weight capacity is maxW and you can't come back for the items later?`,
        codeOutput: 
        `function knapsackLight(value1, weight1, value2, weight2, maxW) {
            //Use chained conditionals to first see if we can carry both items, then determine if either of the other values work (if so, choose the most valuable). Otherwise, return 0 (none of the items can be carried).
            return weight1 + weight2 <= maxW ? 
                   value1 + value2 :
                   weight1 <= maxW && weight2 <= maxW ?
                   Math.max(value1, value2) :
                   weight1 <= maxW ?
                   value1 :
                   weight2 <= maxW ?
                   value2 :
                   0;
        }`,
        code: function knapsackLight(value1, weight1, value2, weight2, maxW) {
            //Use chained conditionals to first see if we can carry both items, then determine if either of the other values work (if so, choose the most valuable). Otherwise, return 0 (none of the items can be carried).
            return weight1 + weight2 <= maxW ? 
                   value1 + value2 :
                   weight1 <= maxW && weight2 <= maxW ?
                   Math.max(value1, value2) :
                   weight1 <= maxW ?
                   value1 :
                   weight2 <= maxW ?
                   value2 :
                   0;
        },
        arguments: {
            descriptions: [
                {
                    text: "Integer 'value1'",
                    type: "Number"
                },
                {
                    text: "Integer 'weight1'",
                    type: "Number"
                },
                {
                    text: "Integer 'value2'",
                    type: "Number"
                },
                {
                    text: "Integer 'weight2'",
                    type: "Number"
                },
                {
                    text: "Integer 'maxW'",
                    type: "Number"
                }
            ]
        }
    },
    largestNumber: {
        instructions: `Given an integer n, return the largest number that contains exactly n digits.`,
        codeOutput: 
        `function largestNumber(n) {
            let count = 0;
            let output = "";
            //Iteratively add a 9 to the output n times and return it as a number.
            while(count < n) {
                output += "9";
                count++;
            }
            return Number(output);
        }`,
        code: function largestNumber(n) {
            let count = 0;
            let output = "";
            //Iteratively add a 9 to the output n times and return it as a number.
            while(count < n) {
                output += "9";
                count++;
            }
            return Number(output);
        },
        arguments: {
            descriptions: [
                {
                    text: "Integer n",
                    type: "Number"
                }
            ]
        }
    },
    lateRide: {
        instructions: `One night you go for a ride on your motorcycle. At 00:00 you start your engine, and the built-in timer automatically begins counting the length of your ride, in minutes. Off you go to explore the neighborhood.

        When you finally decide to head back, you realize there's a chance the bridges on your route home are up, leaving you stranded! Unfortunately, you don't have your watch on you and don't know what time it is. All you know thanks to the bike's timer is that n minutes have passed since 00:00.
        
        Using the bike's timer, calculate the current time. Return an answer as the sum of digits that the digital timer in the format hh:mm would show.`,
        codeOutput: 
        `function lateRide(n) {
            let total = 0;
            //Get each digit (hours and minutes) and add them all up.
            String(Math.floor(n / 60)).split("").forEach(digit => total += Number(digit)) +
            String(n % 60).split("").forEach(digit => total += Number(digit));
            return total;
        }`,
        code: function lateRide(n) {
            //Comment out this code (original) due to no-unused-vars error in React environment.
            //let total = 0;
            //String(Math.floor(n / 60)).split("").forEach(digit => total += Number(digit)) +
            //String(n % 60).split("").forEach(digit => total += Number(digit));

            //Modified code for React environment:
            //Get each digit (hours and minutes) and add them all up.
            let total = String(Math.floor(n / 60)).split("").reduce((a, b) => a += Number(b), 0) +
            String(n % 60).split("").reduce((a, b) => a += Number(b), 0);
            return total;
        },
        arguments: {
            descriptions: [
                {
                    text: "Integer n (Minutes)",
                    type: "Number"
                }
            ]
        }
    },
    leastFactorial: {
        instructions: `Given an integer n, find the minimal k such that

        k = m! (where m! = 1 * 2 * ... * m) for some integer m;
        k >= n.
        In other words, find the smallest factorial which is not less than n.`,
        codeOutput: 
        `function leastFactorial(n) {
            //Keep track of the current product and start with 1.
            let multiplier = 1, 
                currentProduct = multiplier;
                
            //Keep multiplying incrementing integers until reaching above the threshold.
            while(currentProduct < n) {
                currentProduct *= multiplier;
                multiplier++;
            }
            
            return currentProduct;
        }`,
        code: function leastFactorial(n) {
            //Keep track of the current product and start with 1.
            let multiplier = 1, 
                currentProduct = multiplier;
                
            //Keep multiplying incrementing integers until reaching above the threshold.
            while(currentProduct < n) {
                currentProduct *= multiplier;
                multiplier++;
            }
            
            return currentProduct;
        },
        arguments: {
            descriptions: [
                {
                    text: "Integer n",
                    type: "Number"
                }
            ]
        }
    },
    lineEncoding: {
        instructions: `Given a string, return its encoding defined as follows:

        First, the string is divided into the least possible number of disjoint substrings consisting of identical characters
        for example, "aabbbc" is divided into ["aa", "bbb", "c"]
        Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating character
        for example, substring "bbb" is replaced by "3b"
        Finally, all the new strings are concatenated together in the same order and a new string is returned.`,
        codeOutput: 
        `function lineEncoding(s) {
            //Create the substring groups
            let substrings = [];
            //Keep track of the last character and group currently being built.
            let lastChar = s[0];
            let lastGroup = {
                chars: lastChar,
                count: 1
            }
            
            //Go through each character to build the substrings.
            for(let i = 1; i < s.length; i++) {
                //If this character is the same as last, add to the current group.
                if(s[i] === lastChar) {
                    lastGroup.chars += s[i];
                    lastGroup.count++;
                } else {
                    //Otherwise, push the groups and update the last character and current group.
                    substrings.push(lastGroup);
                    
                    lastChar = s[i];
                    lastGroup = {
                        chars: lastChar,
                        count: 1
                    }
                }
                
                //At the end, push the last group.
                if(i === s.length - 1) substrings.push(lastGroup);
            }
            
            //Build string to return.
            let output = "";
            
            substrings.forEach(group => {
                //If the count is greater than 1, add the number before the character.
                group.count > 1 ? output += group.count : output;
                //Add the character of this group.
                output += group.chars[0];
            });
            
            return output;
        }`,
        code: function lineEncoding(s) {
            //Create the substring groups
            let substrings = [];
            //Keep track of the last character and group currently being built.
            let lastChar = s[0];
            let lastGroup = {
                chars: lastChar,
                count: 1
            }
            
            //Go through each character to build the substrings.
            for(let i = 1; i < s.length; i++) {
                //If this character is the same as last, add to the current group.
                if(s[i] === lastChar) {
                    lastGroup.chars += s[i];
                    lastGroup.count++;
                } else {
                    //Otherwise, push the groups and update the last character and current group.
                    substrings.push(lastGroup);
                    
                    lastChar = s[i];
                    lastGroup = {
                        chars: lastChar,
                        count: 1
                    }
                }
                
                //At the end, push the last group.
                if(i === s.length - 1) substrings.push(lastGroup);
            }
            
            //Build string to return.
            let output = "";
          
            substrings.forEach(group => {
                //If the count is greater than 1, add the number before the character.
                //Comment out ternary version to avoid React error which expects an assignment here.
                //group.count > 1 ? output += group.count : output;
                if(group.count > 1) output += group.count;
                //Add the character of this group.
                output += group.chars[0];
            });
            
            
            return output;
        },
        arguments: {
            descriptions: [
                {
                    text: "Input String s",
                    type: "String"
                }
            ]
        }
    },
    lineUp: {
        instructions: `To prepare his students for an upcoming game, the sports coach decides to try some new training drills. To begin with, he lines them up and starts with the following warm-up exercise: when the coach says 'L', he instructs the students to turn to the left. Alternatively, when he says 'R', they should turn to the right. Finally, when the coach says 'A', the students should turn around.

        Unfortunately some students (not all of them, but at least one) can't tell left from right, meaning they always turn right when they hear 'L' and left when they hear 'R'. The coach wants to know how many times the students end up facing the same direction.
        
        Given the list of commands the coach has given, count the number of such commands after which the students will be facing the same direction.`,
        codeOutput: 
        `function lineUp(commands) {
            let count = 0;
            let correct = "front";
            let incorrect = "front";
            for(let i = 0; i < commands.length; i++) {
                if(commands[i] === "L") {
                    correct === "front" ? 
                    correct = "left" : correct === "left" ? 
                    correct = "back" : correct === "back" ? 
                    correct = "right" : correct = "front";
                    
                    incorrect === "front" ? 
                    incorrect = "right" : incorrect === "right" ? 
                    incorrect = "back" : incorrect === "back" ? 
                    incorrect = "left" : incorrect = "front"; 
                } else if(commands[i] === "R") {
                    correct === "front" ? 
                    correct = "right" : correct === "right" ? 
                    correct = "back" : correct === "back" ? 
                    correct = "left" : correct = "front";
                    
                    incorrect === "front" ? 
                    incorrect = "left" : incorrect === "left" ? 
                    incorrect = "back" : incorrect === "back" ? 
                    incorrect = "right" : incorrect = "front"; 
                } else {
                    correct === "front" ?
                    correct = "back" : correct === "back" ?
                    correct = "front" : correct === "left" ?
                    correct = "right" : correct = "left";
                    
                    incorrect === "front" ?
                    incorrect = "back" : incorrect === "back" ?
                    incorrect = "front" : incorrect === "left" ?
                    incorrect = "right" : incorrect = "left";
                }
                
                if(correct === incorrect) count++;
            }
            return count;
        }`,
        code: function lineUp(commands) {
            let count = 0;
            let correct = "front";
            let incorrect = "front";
            for(let i = 0; i < commands.length; i++) {
                if(commands[i] === "L") {
                    correct === "front" ? 
                    correct = "left" : correct === "left" ? 
                    correct = "back" : correct === "back" ? 
                    correct = "right" : correct = "front";
                    
                    incorrect === "front" ? 
                    incorrect = "right" : incorrect === "right" ? 
                    incorrect = "back" : incorrect === "back" ? 
                    incorrect = "left" : incorrect = "front"; 
                } else if(commands[i] === "R") {
                    correct === "front" ? 
                    correct = "right" : correct === "right" ? 
                    correct = "back" : correct === "back" ? 
                    correct = "left" : correct = "front";
                    
                    incorrect === "front" ? 
                    incorrect = "left" : incorrect === "left" ? 
                    incorrect = "back" : incorrect === "back" ? 
                    incorrect = "right" : incorrect = "front"; 
                } else {
                    correct === "front" ?
                    correct = "back" : correct === "back" ?
                    correct = "front" : correct === "left" ?
                    correct = "right" : correct = "left";
                    
                    incorrect === "front" ?
                    incorrect = "back" : incorrect === "back" ?
                    incorrect = "front" : incorrect === "left" ?
                    incorrect = "right" : incorrect = "left";
                }
                
                if(correct === incorrect) count++;
            }
            return count;
        },
        arguments: {
            descriptions: [
                {
                    text: "String (Uppercase L, R, and A only)",
                    type: "String"
                }
            ]
        }
    },
    longestDigitsPrefix: {
        instructions: `Given a string, output its longest prefix which contains only digits.`,
        codeOutput: 
        `function longestDigitsPrefix(inputString) {
            //Start with a blank prefix and starting index.
            let prefix = "";
            let currentIndex = 0;
            //Loop through every character until we are no longer finding a digit, and add to the prefix.
            while(inputString.charCodeAt(currentIndex) > 47 && inputString.charCodeAt(currentIndex) < 58 && currentIndex < inputString.length) {
                prefix += inputString[currentIndex];
                currentIndex++;
            }
            return prefix;
        }`,
        code: function longestDigitsPrefix(inputString) {
            //Start with a blank prefix and starting index.
            let prefix = "";
            let currentIndex = 0;
            //Loop through every character until we are no longer finding a digit, and add to the prefix.
            while(inputString.charCodeAt(currentIndex) > 47 && inputString.charCodeAt(currentIndex) < 58 && currentIndex < inputString.length) {
                prefix += inputString[currentIndex];
                currentIndex++;
            }
            return prefix;
        },
        arguments: {
            descriptions: [
                {
                    text: "String of Characters (Beginning With 1+ Digits)",
                    type: "String"
                }
            ]
        }
    },
    longestWord: {
        instructions: `Define a word as a sequence of consecutive English letters. Find the longest word from the given string.`,
        codeOutput: 
        `function longestWord(text) {
            let words = [];
            let currentWord = "";
            for(let i = 0; i < text.length; i++) {
                //If this is a letter, add to the current word.
                if(text.charCodeAt(i) > 96 && text.charCodeAt(i) < 123 || 
                text.charCodeAt(i) > 64 && text.charCodeAt(i) < 91) {
                    currentWord += text[i];
                } else {
                    //Otherwise, add the last word built to the array and start over with a new word.
                    if(currentWord.length) {
                        words.push(currentWord);
                        currentWord = "";
                    }
                }
                //If at the end, add the last group of letters.
                if(i === text.length - 1 && currentWord.length) words.push(currentWord); 
            }
            
            //Keep track of the longest word and length.
            let longestLength = 0;
            let longestWord = "";
            
            //Go through each word and see if its length is longer than the current longest.
            words.forEach(word => {
                if(word.length > longestLength) {
                    longestLength = word.length;
                    longestWord = word;
                }
            });
            
            return longestWord;
        }`,
        code: function longestWord(text) {
            let words = [];
            let currentWord = "";
            for(let i = 0; i < text.length; i++) {
                //If this is a letter, add to the current word.
                if(text.charCodeAt(i) > 96 && text.charCodeAt(i) < 123 || 
                text.charCodeAt(i) > 64 && text.charCodeAt(i) < 91) {
                    currentWord += text[i];
                } else {
                    //Otherwise, add the last word built to the array and start over with a new word.
                    if(currentWord.length) {
                        words.push(currentWord);
                        currentWord = "";
                    }
                }
                //If at the end, add the last group of letters.
                if(i === text.length - 1 && currentWord.length) words.push(currentWord); 
            }
            
            //Keep track of the longest word and length.
            let longestLength = 0;
            let longestWord = "";
            
            //Go through each word and see if its length is longer than the current longest.
            words.forEach(word => {
                if(word.length > longestLength) {
                    longestLength = word.length;
                    longestWord = word;
                }
            });
            
            return longestWord;
        },
        arguments: {
            descriptions: [
                {
                    text: "Input Sentence",
                    type: "String"
                }
            ]
        }
    },
    magicalWell: {
        instructions: `You are standing at a magical well. It has two positive integers written on it: a and b. Each time you cast a magic marble into the well, it gives you a * b dollars and then both a and b increase by 1. You have n magic marbles. How much money will you make?`,
        codeOutput: 
        `function magicalWell(a, b, n) {
            //Keep track of total.
            let total = 0;
            //Each time a marble is cast, find the new total, update values, and decrease marbles.
            while(n > 0) {
                total += (a * b);
                a++;
                b++;
                n--;
            }
            return total;
        }`,
        code: function magicalWell(a, b, n) {
            //Keep track of total.
            let total = 0;
            //Each time a marble is cast, find the new total, update values, and decrease marbles.
            while(n > 0) {
                total += (a * b);
                a++;
                b++;
                n--;
            }
            return total;
        },
        arguments: {
            descriptions: [
                {
                    text: "Integer a",
                    type: "Number"
                },
                {
                    text: "Integer b",
                    type: "Number"
                },
                {
                    text: "Integer n",
                    type: "Number"
                }
            ]
        }
    },
    makeArrayConsecutive2: {
        instructions: `Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.`,
        codeOutput: 
        `function makeArrayConsecutive2(statues) {
   
            let sorted = []; 
            for(let currentHeight = 0; currentHeight <= 20; currentHeight++) {
                statues.forEach((statue) => {
                    if(statue === currentHeight) {
                        sorted.push(statue); 
                    }
                });   
            }
            
            let missing = 0; 
            for(let currentHeight = sorted[0]; currentHeight < sorted[sorted.length - 1]; currentHeight++) {
                let contains = false; 
                sorted.forEach((size) => {
                    if(size === currentHeight) {
                        contains = true; 
                    }
                }); 
                if(contains === false) {
                    missing++; 
                }
             
            }
            
            return missing;  
        }`,
        code: function makeArrayConsecutive2(statues) {
   
            let sorted = []; 
            for(let currentHeight = 0; currentHeight <= 20; currentHeight++) {
                statues.forEach((statue) => {
                    if(statue === currentHeight) {
                        sorted.push(statue); 
                    }
                });   
            }
            
            let missing = 0; 
            for(let currentHeight = sorted[0]; currentHeight < sorted[sorted.length - 1]; currentHeight++) {
                let contains = false; 
                sorted.forEach((size) => {
                    if(size === currentHeight) {
                        contains = true; 
                    }
                }); 
                if(contains === false) {
                    missing++; 
                }
             
            }
            
            return missing;  
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Integers (No Brackets []; Form of 1,2,3...)",
                    type: "NumberArray"
                }
            ]
        }
    },
    matrixElementsSum: {
        instructions: `After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.

        Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a 0).`,
        codeOutput: 
        `function matrixElementsSum(matrix) {
            var haunted = []; 
            var sum = 0; 
            for(var i = 0; i < matrix.length; i++) {
                for(var j = 0; j < matrix[i].length; j++) {
                    if(matrix[i][j] < 1) {
                        haunted.push(j); 
                        console.log(haunted, j); 
                    }
                    var thisRoomIsHanted = false; 
                    if(haunted.length > 0) {
                        haunted.forEach((haunted) => {
                            if(haunted === j) {
                                thisRoomIsHanted = true; 
                            }
                        });
                    }
                    if(!thisRoomIsHanted) {
                        sum += matrix[i][j]; 
                    }
                }
            }
            return sum; 
        }`,
        code: function matrixElementsSum(matrix) {
            var haunted = []; 
            var sum = 0; 
            for(var i = 0; i < matrix.length; i++) {
                for(var j = 0; j < matrix[i].length; j++) {
                    if(matrix[i][j] < 1) {
                        haunted.push(j); 
                        console.log(haunted, j); 
                    }
                    var thisRoomIsHanted = false; 
                    if(haunted.length > 0) {
                        haunted.forEach((haunted) => {
                            if(haunted === j) {
                                thisRoomIsHanted = true; 
                            }
                        });
                    }
                    if(!thisRoomIsHanted) {
                        sum += matrix[i][j]; 
                    }
                }
            }
            return sum; 
        },
        arguments: {
            descriptions: [
                {
                    text: "Rectangular Matrix (Array of Integer Arrays); Form of [1,2,3], [4,5,6]...etc.",
                    type: "NumberArrayArray"
                }
            ]
        }
    },
    arrayMaxConsecutiveSum: {
        instructions: `Given array of integers, find the maximal possible sum of some of its k consecutive elements.`,
        codeOutput: 
        `function arrayMaxConsecutiveSum(inputArray, k) {
            //Keep track of the max sum.
            let maxSum = 0;
            //Go through each character, before going out of bounds based on k.
            for(let i = 0; i < inputArray.length - k + 1; i++) {
                //If k is greater than 1, add the next two elements (otherwise, just make this total the element value itself)
                let thisTotal = k > 1 ? inputArray[i] + inputArray[i + 1] : inputArray[i];
                for(let j = i + 2; j < i + k; j++) {
                    //If k is greater than 2, continue to add to the total within this range of k.
                    thisTotal += inputArray[j];
                }
                //See if this total is greater than the max.
                if(thisTotal > maxSum) maxSum = thisTotal;
            }
            return maxSum;
        }`,
        code: function arrayMaxConsecutiveSum(inputArray, k) {
            //Keep track of the max sum.
            let maxSum = 0;
            //Go through each character, before going out of bounds based on k.
            for(let i = 0; i < inputArray.length - k + 1; i++) {
                //If k is greater than 1, add the next two elements (otherwise, just make this total the element value itself)
                let thisTotal = k > 1 ? inputArray[i] + inputArray[i + 1] : inputArray[i];
                for(let j = i + 2; j < i + k; j++) {
                    //If k is greater than 2, continue to add to the total within this range of k.
                    thisTotal += inputArray[j];
                }
                //See if this total is greater than the max.
                if(thisTotal > maxSum) maxSum = thisTotal;
            }
            return maxSum;
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Integers (No Brackets []; Form of 1,2,3...)",
                    type: "NumberArray"
                },
                {
                    text: "Integer k",
                    type: "Number"
                }
            ]
        }
    },
    maximumSum: {
        instructions: `You are given an array of integers a. A range sum query is defined by a pair of non-negative integers l and r (l <= r). The output to a range sum query on the given array a is the sum of all the elements of a that have indices from l to r, inclusive.

        You have the array a and a list of range sum queries q. Find an algorithm that can rearrange the array a in such a way that the total sum of all of the query outputs is maximized, and return this total sum.`,
        codeOutput: 
        `function maximumSum(a, q) {
            //Find q most frequent index.
            let qMap = {};
            q.forEach(range => {
                for(let i = range[0]; i <= range[1]; i++) {
                    if(qMap[i]) {
                        qMap[i]++;
                    } else {
                        qMap[i] = 1;
                    }
                }
            });
            //Use this map data to create an array to be sorted and iterated over.
            let maxqVal = 0;
            let maxqIndex = 0;
            let qMapArray = [];
            for(let index in qMap) {
                qMapArray.push({
                    "index": index,
                    "count": qMap[index]
                });
                if(qMap[index] > maxqVal) {
                    maxqVal = qMap[index];
                    maxqIndex = index;
                }
            }   
            
            //Sort the starting array in order.
            a.sort((a, b) => a - b);
            
            //Sort the array containing the index occurences.
            qMapArray.sort((a, b) => b["count"] - a["count"]);
            
            //Next, sort the indexes in qMap so that one by one, the largest values in the array can be popped off and inserted at the next most frequent index.
            let arrayToSum = new Array(a.length).fill(0);
            
            //Start filling in the array to be summed up with the sorted values for maximal sum.
            while(qMapArray.length) {
                let thisIndex = qMapArray.shift();
                let nextLargestVal = a.pop();
                arrayToSum[thisIndex["index"]] = nextLargestVal;
            }
            
            //Fill in any remaining values that may exist in the original array.
            while(a.length) {
                let nextLargestVal = a.pop();
                for(let i = 0; i < arrayToSum.length; i++) {
                    if(!arrayToSum[i]) arrayToSum[i] = nextLargestVal;
                }
            }
            
            //Loop through the sorted array and add up the ranges of sums.
            let maxSum = 0;
            q.forEach(range => {
                for(let i = range[0]; i <= range[1]; i++) {
                    maxSum += arrayToSum[i];
                }
            });  
            
            return maxSum;
        }`,
        code: function maximumSum(a, q) {
            //Find q most frequent index.
            let qMap = {};
            q.forEach(range => {
                for(let i = range[0]; i <= range[1]; i++) {
                    if(qMap[i]) {
                        qMap[i]++;
                    } else {
                        qMap[i] = 1;
                    }
                }
            });
            //Use this map data to create an array to be sorted and iterated over.
            let maxqVal = 0;
            let maxqIndex = 0;
            let qMapArray = [];
            for(let index in qMap) {
                qMapArray.push({
                    "index": index,
                    "count": qMap[index]
                });
                if(qMap[index] > maxqVal) {
                    maxqVal = qMap[index];
                    maxqIndex = index;
                }
            }   
            
            //Sort the starting array in order.
            a.sort((a, b) => a - b);
            
            //Sort the array containing the index occurences.
            qMapArray.sort((a, b) => b["count"] - a["count"]);
            
            //Next, sort the indexes in qMap so that one by one, the largest values in the array can be popped off and inserted at the next most frequent index.
            let arrayToSum = new Array(a.length).fill(0);
            
            //Start filling in the array to be summed up with the sorted values for maximal sum.
            while(qMapArray.length) {
                let thisIndex = qMapArray.shift();
                let nextLargestVal = a.pop();
                arrayToSum[thisIndex["index"]] = nextLargestVal;
            }
            
            //Fill in any remaining values that may exist in the original array.
            while(a.length) {
                let nextLargestVal = a.pop();
                for(let i = 0; i < arrayToSum.length; i++) {
                    if(!arrayToSum[i]) arrayToSum[i] = nextLargestVal;
                }
            }
            
            //Loop through the sorted array and add up the ranges of sums.
            let maxSum = 0;
            q.forEach(range => {
                for(let i = range[0]; i <= range[1]; i++) {
                    maxSum += arrayToSum[i];
                }
            });  
            
            return maxSum;
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Integers (No Brackets []; Form of 1,2,3...)",
                    type: "NumberArray"
                },
                {
                    text: "Array of Integer Arrays (Form of [1,2,3], [4,5,6]...)",
                    type: "NumberArrayArray"
                }
            ]
        }
    },
    maxMultiple: {
        instructions: `Given a divisor and a bound, find the largest integer N such that:

        N is divisible by divisor.
        N is less than or equal to bound.
        N is greater than 0.
        It is guaranteed that such a number exists.`,
        codeOutput: 
        `function maxMultiple(divisor, bound) {
            return Math.floor(bound / divisor) * divisor;
        }`,
        code: function maxMultiple(divisor, bound) {
            return Math.floor(bound / divisor) * divisor;
        },
        arguments: {
            descriptions: [
                {
                    text: "Integer (Divisor)",
                    type: "Number"
                },
                {
                    text: "Integer (Bound)",
                    type: "Number"
                }
            ]
        }
    }
};

export default challenges_k_n;

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