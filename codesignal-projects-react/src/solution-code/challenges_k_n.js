//Include global BigInt (as comment) in order to prevent no-undef in this environment.
/* global BigInt */

const challenges_k_n = {
    killKthBit: {
        name: 'killKthBit',
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
        name: 'knapsackLight',
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
    largeGroupPositions: {
        name: `largeGroupPositions`,
        instructions: `In a string s of lowercase letters, these letters form consecutive groups of the same character.

        For example, a string like s = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z", and "yy".
        
        A group is identified by an interval [start, end], where start and end denote the start and end indices (inclusive) of the group. In the above example, "xxxx" has the interval [3,6].
        
        A group is considered large if it has 3 or more characters.
        
        Return the intervals of every large group sorted in increasing order by start index.`,
        codeOutput: 
        `var largeGroupPositions = function(s) {
            //Save the current group and character in that group.
            let currentGroup = [];
            let currentChar;
            //Store all groups greater than lengths of 3.
            let groups = [];
            
            for(let i = 0; i < s.length; i++) {
                //If this character is the same as the last one, add to the end index.
                if(s[i] === currentChar) {
                    currentGroup[1]++;
                } else {
                    //Otherwise, create a new group
                    //First, see if this group has a length of 3 or more and store it if so.
                    if(currentGroup.length) {
                        if(currentGroup[1] - currentGroup[0] >= 2) {
                            groups.push(currentGroup);
                        }
                    }
                    //Reset the current group.
                    currentChar = s[i];
                    currentGroup = [i, i]
                }
            }
            //If the last group created has a length of 3 or more, store it.
            if(currentGroup.length) {
                if(currentGroup[1] - currentGroup[0] >= 2) {
                    groups.push(currentGroup);
                }
            }
            
            return groups;
        };`,
        code: function largeGroupPositions(s) {
            //Save the current group and character in that group.
            let currentGroup = [];
            let currentChar;
            //Store all groups greater than lengths of 3.
            let groups = [];
            
            for(let i = 0; i < s.length; i++) {
                //If this character is the same as the last one, add to the end index.
                if(s[i] === currentChar) {
                    currentGroup[1]++;
                } else {
                    //Otherwise, create a new group
                    //First, see if this group has a length of 3 or more and store it if so.
                    if(currentGroup.length) {
                        if(currentGroup[1] - currentGroup[0] >= 2) {
                            groups.push(currentGroup);
                        }
                    }
                    //Reset the current group.
                    currentChar = s[i];
                    currentGroup = [i, i]
                }
            }
            //If the last group created has a length of 3 or more, store it.
            if(currentGroup.length) {
                if(currentGroup[1] - currentGroup[0] >= 2) {
                    groups.push(currentGroup);
                }
            }
            
            return groups;
        },
        arguments: {
            descriptions: [
                {
                    text: "String with character 'groups' (e.g. aabbbccccdde)",
                    type: "String"
                }
            ]
        }
    },
    largestNumber: {
        name: 'largestNumber',
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
        name: 'lateRide',
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
    longestCommonPrefix: {
        name: `longestCommonPrefix`,
        instructions: `Write a function to find the longest common prefix string amongst an array of strings.
        If there is no common prefix, return an empty string "".`,
        codeOutput: 
        `var longestCommonPrefix = function(strs) {
            let prefix = "";
            //Sort the strings by length.
            strs.sort((a, b) => a.length - b.length);
            //Get the longest that a prefix can be.
            let maxPrefix = strs[0];
            for(let i = 1; i <= maxPrefix.length; i++) {
                //Starting with the first letter of the shortest word, begin to check for the longest prefix.
                let currentPrefix = maxPrefix.substring(0, i);
                //Check if all elements have this current prefix at the beginning.
                if(strs.every(current => current.substring(0, i) === currentPrefix)) {
                    //Set this as the longest prefix currently.
                    prefix = currentPrefix;
                } else {
                    //Otherwise, we have the longest prefix possible (break out).
                    break;
                }
            }
            return prefix;
        };`,
        code: function longestCommonPrefix(strs) {
            let prefix = "";
            //Sort the strings by length.
            strs.sort((a, b) => a.length - b.length);
            //Get the longest that a prefix can be.
            let maxPrefix = strs[0];
            for(let i = 1; i <= maxPrefix.length; i++) {
                //Starting with the first letter of the shortest word, begin to check for the longest prefix.
                let currentPrefix = maxPrefix.substring(0, i);
                //Check if all elements have this current prefix at the beginning.
                if(strs.every(current => current.substring(0, i) === currentPrefix)) {
                    //Set this as the longest prefix currently.
                    prefix = currentPrefix;
                } else {
                    //Otherwise, we have the longest prefix possible (break out).
                    break;
                }
            }
            return prefix;
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of strings (Form of example,example,example...)",
                    type: "StringArray"
                }
            ]
        }
    },
    leastFactorial: {
        name: 'leastFactorial',
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
    lengthOfLastWord: {
        name: `lengthOfLastWord`,
        instructions: `Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.
        A word is a maximal substring consisting of non-space characters only.`,
        codeOutput: 
        `var lengthOfLastWord = function(s) {
            //Turn the string into an array, filtering out blank strings.
            let words = s.split(' ').filter(s => s !== '');
            //Return the length of the last 'word' in the string.
            return words[words.length - 1].length;
        };`,
        code: function lengthOfLastWord(s) {
            //Turn the string into an array, filtering out blank strings.
            let words = s.split(' ').filter(s => s !== '');
            //Return the length of the last 'word' in the string.
            return words[words.length - 1].length;
        },
        arguments: {
            descriptions: [
                {
                    text: "String with one or more words",
                    type: "String"
                }
            ]
        }
    },
    lineEncoding: {
        name: 'lineEncoding',
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
        name: 'lineUp',
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
        name: 'longestDigitsPrefix',
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
        name: 'longestWord',
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
        name: 'magicalWell',
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
    majorityElement: {
        name: `majorityElement`,
        instructions: `Given an array nums of size n, return the majority element.
        The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.`,
        codeOutput: 
        `var majorityElement = function(nums) {
            //Create an object to hold all values that appear in the array.
            let numsMap = {};
            //Map out the number of occurrences of each value.
            nums.forEach(num => {
                if(numsMap[num]) {
                    numsMap[num]++;
                } else {
                    numsMap[num] = 1;
                }
            });
            //Using the object, get all object keys (numbers that appear) into an array, 
            //Then, reduce the array down to the one with the largest value.
            return Object.keys(numsMap)
                .reduce((prev, current) => numsMap[prev] > numsMap[current] ? prev : current);
        };`,
        code: function majorityElement(nums) {
            //Create an object to hold all values that appear in the array.
            let numsMap = {};
            //Map out the number of occurrences of each value.
            nums.forEach(num => {
                if(numsMap[num]) {
                    numsMap[num]++;
                } else {
                    numsMap[num] = 1;
                }
            });
            //Using the object, get all object keys (numbers that appear) into an array, 
            //Then, reduce the array down to the one with the largest value.
            return Object.keys(numsMap)
                .reduce((prev, current) => numsMap[prev] > numsMap[current] ? prev : current);
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Integers (Form of 1,2,3...)",
                    type: "NumberArray"
                }
            ]
        }
    },
    makeArrayConsecutive2: {
        name: 'makeArrayConsecutive2',
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
        name: 'matrixElementsSum',
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
    matrixReshape: {
        name: `matrixReshape`,
        instructions: `In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

        You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.
        
        The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.
        
        If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.`,
        codeOutput: 
        `var matrixReshape = function(mat, r, c) {
            //Return the original array if not possible.
            if(mat[0].length * mat.length !== r * c) return mat; 
            
            //Flatten the incoming array to use numbers.
            let numbers = mat.flat();
            
            //Create result array for new array.
            let result = [];
            
            //Insert the numbers into new array with dimensions r, c.
            for(let i = 0; i < r; i++) {
                let thisRow = [];
                for(let j = 0; j < c; j++) {
                    //Using the flattened array, take the first element and place it into the next position of the result.
                    thisRow.push(numbers.shift());
                }
                //Insert this row into the result array.
                result.push(thisRow);
            }
            
            return result;
        };`,
        code: function matrixReshape(mat, r, c) {
            //Return the original array if not possible.
            if(mat[0].length * mat.length !== r * c) return formatOutput(mat); 
            
            //Flatten the incoming array to use numbers.
            let numbers = mat.flat();
            
            //Create result array for new array.
            let result = [];
            
            //Insert the numbers into new array with dimensions r, c.
            for(let i = 0; i < r; i++) {
                let thisRow = [];
                for(let j = 0; j < c; j++) {
                    //Using the flattened array, take the first element and place it into the next position of the result.
                    thisRow.push(numbers.shift());
                }
                //Insert this row into the result array.
                result.push(thisRow);
            }
            
            //For this React version only, convert the output to a string for readability.
            function formatOutput(matrix) {
                let outputString = '';
                for(let i = 0; i < matrix.length; i++) {
                    outputString += '[';
                    for(let j = 0; j < matrix[0].length; j++) {
                        outputString += matrix[i][j];
                        if(j !== matrix[i].length - 1) outputString += ',';
                    }
                    outputString += ']'
                    if(i !== matrix.length - 1) outputString += ',';
                }
                return outputString;
            }
            
            //return result;
            return formatOutput(result);
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Equal-Sized Integer Arrays (Form of [1,2,3], [4,5,6]...)",
                    type: "NumberArrayArray"
                },
                {
                    text: "Integer for New Dimension 'r'",
                    type: "Number"
                },
                {
                    text: "Integer for New Dimension 'c'",
                    type: "Number"
                }
            ]
        }
    },
    maxArea: {
        name: `maxArea`,
        instructions: `You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

        Find two lines that together with the x-axis form a container, such that the container contains the most water.
        
        Return the maximum amount of water a container can store.
        
        Notice that you may not slant the container.`,
        codeOutput: 
        `var maxArea = function(height) {
            //Establish starting values 
            //x refers to dimensions across 
            let x1 = 0;
            let x2 = height.length - 1;
            //y refers to height (always use smallest end so the water wouldn't 'pour out')
            let y = Math.min(height[0], height[height.length - 1]);
            //Establish a first area (with largest width possible)
            let maxArea = (x2 - x1) * y;
            
            while(x2 > x1) {
                //Update values (make smaller range; smaller width of rectangle)
                //Update x1 or x2.
                if(height[x1] === height[x2]) {
                    if((height[x1 + 1]) > (height[x2 - 1])) {
                        x2--;
                    } else {
                        x1++;
                    }
                } else if(height[x1] > height[x2]) {
                    x2--;
                } else {
                    x1++;
                }
                
                //Update y
                y = Math.min(height[x1], height[x2]);
                
                //Find this new max area
                let thisArea = (x2 - x1) * y;
                if(thisArea > maxArea) maxArea = thisArea;
            }
            
            return maxArea;
        };`,
        code: function maxArea(height) {
            //Establish starting values 
            //x refers to dimensions across 
            let x1 = 0;
            let x2 = height.length - 1;
            //y refers to height (always use smallest end so the water wouldn't 'pour out')
            let y = Math.min(height[0], height[height.length - 1]);
            //Establish a first area (with largest width possible)
            let maxArea = (x2 - x1) * y;
            
            while(x2 > x1) {
                //Update values (make smaller range; smaller width of rectangle)
                //Update x1 or x2.
                if(height[x1] === height[x2]) {
                    if((height[x1 + 1]) > (height[x2 - 1])) {
                        x2--;
                    } else {
                        x1++;
                    }
                } else if(height[x1] > height[x2]) {
                    x2--;
                } else {
                    x1++;
                }
                
                //Update y
                y = Math.min(height[x1], height[x2]);
                
                //Find this new max area
                let thisArea = (x2 - x1) * y;
                if(thisArea > maxArea) maxArea = thisArea;
            }
            
            return maxArea;
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of positive integers in correct form (e.g. 1,8,6,2,5,4,8,3,7)",
                    type: "NumberArray"
                }
            ]
        }
    },
    arrayMaxConsecutiveSum: {
        name: 'arrayMaxConsecutiveSum',
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
    maximumProduct: {
        name: `maximumProduct`,
        instructions: `Given an integer array nums, find three numbers whose product is maximum and return the maximum product.`,
        codeOutput: 
        `var maximumProduct = function(nums) {
            //Sort the array.
            nums.sort((a,b) => a - b);
            
            //Get the product of the first two elements AND the very last element
            //This will potentially multiply the first two negatives (to make a positive) with the largest positive at the end
            let beginningProduct = nums[0] * nums[1] * nums[nums.length - 1];
            //This will multiply the largest 3 elements.
            let endProduct = nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];
            
            //See which combination of elements multiply to larger product.
            return Math.max(beginningProduct, endProduct);
        };`,
        code: function maximumProduct(nums) {
            //Sort the array.
            nums.sort((a,b) => a - b);
            
            //Get the product of the first two elements AND the very last element
            //This will potentially multiply the first two negatives (to make a positive) with the largest positive at the end
            let beginningProduct = nums[0] * nums[1] * nums[nums.length - 1];
            //This will multiply the largest 3 elements.
            let endProduct = nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];
            
            //See which combination of elements multiply to larger product.
            return Math.max(beginningProduct, endProduct);
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Integers (e.g. -1,8,9,-2,-10,-29,50)",
                    type: "NumberArray"
                }
            ]
        }
    },
    maximumSum: {
        name: 'maximumSum',
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
        name: 'maxMultiple',
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
    },
    maxScore: {
        name: `maxScore`,
        instructions: `Given a string s of zeros and ones, return the maximum score after splitting the string into two non-empty substrings (i.e. left substring and right substring).

        The score after splitting a string is the number of zeros in the left substring plus the number of ones in the right substring.`,
        codeOutput: 
        `var maxScore = function(s) {
            //Start with the number of zeros present with only the first element (1 or 0)
            let zeroCount = s[0] === "0" ? 1 : 0;
            //Start with the number of ones in the rest of the characters.
            let onesCount = s.split("").reduce((prev, curr, index) => prev = curr === "1" && index > 0 ? prev + 1 : prev, 0);
            
            //Add up the initial total of the left and right side. 
            let currentTotal = zeroCount + onesCount;
            
            //Go through the characters. 
            for(let i = 1; i < s.length - 1; i++) {
                //When a zero is encountered, add it to the left frame. 
                if(s[i] === "0") {
                    zeroCount++;
                } else {
                    //If a one is encountered, remove from the left side (don't let it become negative).
                    if(onesCount > 0) onesCount--;
                }
                //If the current total of the zero side and the one side is larger than the stored total, replace it. 
                currentTotal = Math.max(currentTotal, zeroCount + onesCount);
            }
            
            return currentTotal;
        };`,
        code: function maxScore(s) {
            //Start with the number of zeros present with only the first element (1 or 0)
            let zeroCount = s[0] === "0" ? 1 : 0;
            //Start with the number of ones in the rest of the characters.
            let onesCount = s.split("").reduce((prev, curr, index) => prev = curr === "1" && index > 0 ? prev + 1 : prev, 0);
            
            //Add up the initial total of the left and right side. 
            let currentTotal = zeroCount + onesCount;
            
            //Go through the characters. 
            for(let i = 1; i < s.length - 1; i++) {
                //When a zero is encountered, add it to the left frame. 
                if(s[i] === "0") {
                    zeroCount++;
                } else {
                    //If a one is encountered, remove from the left side (don't let it become negative).
                    if(onesCount > 0) onesCount--;
                }
                //If the current total of the zero side and the one side is larger than the stored total, replace it. 
                currentTotal = Math.max(currentTotal, zeroCount + onesCount);
            }
            
            return currentTotal;
        },
        arguments: {
            descriptions: [
                {
                    text: "String of only 1s and 0s",
                    type: "String"
                }
            ]
        }
    },
    messageFromBinaryCode: {
        name: 'messageFromBinaryCode',
        instructions: `You are taking part in an Escape Room challenge designed specifically for programmers. In your efforts to find a clue, you've found a binary code written on the wall behind a vase, and realized that it must be an encrypted message. After some thought, your first guess is that each consecutive 8 bits of the code stand for the character with the corresponding extended ASCII code.

        Assuming that your hunch is correct, decode the message.`,
        codeOutput: 
        `function messageFromBinaryCode(code) {
            //Extract the binary code in groups of 8 bits.
            let letters = [];
            for(let i = 0; i < code.length; i += 8) {
                let thisLetter = "";
                for(let j = i; j < i + 8; j++) {
                    thisLetter += code[j];
                }
                letters.push(thisLetter);
            }
            //For each byte, find the binary value in decimal (reverse the string so that we can use the indexes from left to right).
            let codes = [];
            letters.forEach(letter => {
                let thisLetter = letter.split("").reverse().join("");
                console.log(thisLetter);
                let thisCode = 0;
                for(let i = 0; i < letter.length; i++) {
                    if(thisLetter[i] === "1") thisCode += 2 ** i;
                }
                codes.push(thisCode);
            });
            
            //Build the message using the decimal values.
            let message = "";
            codes.forEach(thisCode => {
                message += String.fromCharCode(thisCode);
            });
            
            return message;
        }`,
        code: function messageFromBinaryCode(code) {
            //Extract the binary code in groups of 8 bits.
            let letters = [];
            for(let i = 0; i < code.length; i += 8) {
                let thisLetter = "";
                for(let j = i; j < i + 8; j++) {
                    thisLetter += code[j];
                }
                letters.push(thisLetter);
            }
            //For each byte, find the binary value in decimal (reverse the string so that we can use the indexes from left to right).
            let codes = [];
            letters.forEach(letter => {
                let thisLetter = letter.split("").reverse().join("");
                console.log(thisLetter);
                let thisCode = 0;
                for(let i = 0; i < letter.length; i++) {
                    if(thisLetter[i] === "1") thisCode += 2 ** i;
                }
                codes.push(thisCode);
            });
            
            //Build the message using the decimal values.
            let message = "";
            codes.forEach(thisCode => {
                message += String.fromCharCode(thisCode);
            });
            
            return message;
        },
        arguments: {
            descriptions: [
                {
                    text: "Single String of Binary Code (Form of '0000111011010100...')",
                    type: "String"
                }
            ]
        }
    },
    metroCard: {
        name: 'metroCard',
        instructions: `You just bought a public transit card that allows you to ride the Metro for a certain number of days.

        Here is how it works: upon first receiving the card, the system allocates you a 31-day pass, which equals the number of days in January. The second time you pay for the card, your pass is extended by 28 days, i.e. the number of days in February (note that leap years are not considered), and so on. The 13th time you extend the pass, you get 31 days again.
        
        You just ran out of days on the card, and unfortunately you've forgotten how many times your pass has been extended so far. However, you do remember the number of days you were able to ride the Metro during this most recent month. Figure out the number of days by which your pass will now be extended, and return all the options as an array sorted in increasing order.`,
        codeOutput: 
        `function metroCard(lastNumberOfDays) {
            return lastNumberOfDays === 30 || lastNumberOfDays === 28 ? 
            [31] :
            [28, 30, 31];
        }`,
        code: function metroCard(lastNumberOfDays) {
            return lastNumberOfDays === 30 || lastNumberOfDays === 28 ? 
            [31] :
            [28, 30, 31];
        },
        arguments: {
            descriptions: [
                {
                    text: "Integer (28, 30, or 31)",
                    type: "Number"
                }
            ]
        }
    },
    minesweeper: {
        name: 'minesweeper',
        instructions: `In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.`,
        codeOutput: 
        `function minesweeper(matrix) {
            //start with an output array of the same size and same length as matrix with all 0's
            let output = [];
            for(let i = 0; i < matrix.length; i++) {
                let thisRow = [];
                for(let j = 0; j < matrix[i].length; j++) {
                    thisRow.push(0);
                }
                output.push(thisRow);
            }
            //Find all 'true' values in each row of the matrix
            for(let row = 0; row < matrix.length; row++) {
                for(let col = 0; col < matrix[row].length; col++) {
                    //If this value is true, initiate loop to go around it and add 1 to surrouding elements in the ouput array.
                    if(matrix[row][col]) {
                        console.log(\`LOOPING THROUGH ELEMENTS AROUND \${row},\${col}\`);
                        //Loop through surrounding elements
                        for(let row_prime = row - 1; row_prime < row + 2; row_prime++) {
                            for(let col_prime = col - 1; col_prime < col + 2; col_prime++) {
                                //Make sure this element is not out of bounds or equal to the element where we currently are
                                if(row_prime > -1 && 
                                col_prime > -1 &&
                                row_prime < matrix.length &&
                                col_prime < matrix[row].length &&
                                !(col_prime === col && row_prime === row)
                                ) {
                                    console.log(\`Adding at location \${row_prime},\${col_prime}\`);
                                    //Add to this element in the output array.
                                    output[row_prime][col_prime]++;
                                }
                            }
                        }
                    }
                }
            }
            return output;
        }`,
        code: function minesweeper(matrix) {
            //start with an output array of the same size and same length as matrix with all 0's
            let output = [];
            for(let i = 0; i < matrix.length; i++) {
                let thisRow = [];
                for(let j = 0; j < matrix[i].length; j++) {
                    thisRow.push(0);
                }
                output.push(thisRow);
            }
            //Find all 'true' values in each row of the matrix
            for(let row = 0; row < matrix.length; row++) {
                for(let col = 0; col < matrix[row].length; col++) {
                    //If this value is true, initiate loop to go around it and add 1 to surrouding elements in the ouput array.
                    if(matrix[row][col]) {
                        console.log(`LOOPING THROUGH ELEMENTS AROUND ${row},${col}`);
                        //Loop through surrounding elements
                        for(let row_prime = row - 1; row_prime < row + 2; row_prime++) {
                            for(let col_prime = col - 1; col_prime < col + 2; col_prime++) {
                                //Make sure this element is not out of bounds or equal to the element where we currently are
                                if(row_prime > -1 && 
                                col_prime > -1 &&
                                row_prime < matrix.length &&
                                col_prime < matrix[row].length &&
                                !(col_prime === col && row_prime === row)
                                ) {
                                    console.log(`Adding at location ${row_prime},${col_prime}`);
                                    //Add to this element in the output array.
                                    output[row_prime][col_prime]++;
                                }
                            }
                        }
                    }
                }
            }
            return output;
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Equal-Length Boolean Arrays (Form of [true,false,true], [false,false,true]...)",
                    type: "BooleanArrayArray"
                }
            ]
        }
    },
    minimalNumberOfCoins: {
        name: 'minimalNumberOfCoins',
        instructions: `You find yourself in Bananaland trying to buy a banana. You are super rich so you have an unlimited supply of banana-coins, but you are trying to use as few coins as possible.

        The coin values available in Bananaland are stored in a sorted array coins. coins[0] = 1, and for each i (0 < i < coins.length) coins[i] is divisible by coins[i - 1]. Find the minimal number of banana-coins you'll have to spend to buy a banana given the banana's price.`,
        codeOutput: 
        `function minimalNumberOfCoins(coins, price) {
            let costLeft = price;
            //Loop through every coin in the array.
            let total = 0;
            for(let coin = coins.length - 1; coin >= 0; coin--) {
                //Find the number of this coin value that can be used, and then update the leftover price to be the remainder.
                total += Math.floor(costLeft / coins[coin]);
                costLeft %= coins[coin];
                //If this total is equal to the price, return the total.
                if(total === price) return total;
            }
            return total;
        }`,
        code: function minimalNumberOfCoins(coins, price) {
            let costLeft = price;
            //Loop through every coin in the array.
            let total = 0;
            for(let coin = coins.length - 1; coin >= 0; coin--) {
                //Find the number of this coin value that can be used, and then update the leftover price to be the remainder.
                total += Math.floor(costLeft / coins[coin]);
                costLeft %= coins[coin];
                //If this total is equal to the price, return the total.
                if(total === price) return total;
            }
            return total;
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Integers (No Brackets []; Form of 1,2,3...)",
                    type: "NumberArray"
                },
                {
                    text: "Integer (Price)",
                    type: "Number"
                }
            ]
        }
    },
    minOperations: {
        name: `minOperations`,
        instructions: `The Leetcode file system keeps a log each time some user performs a change folder operation.

        The operations are described below:
        
        "../" : Move to the parent folder of the current folder. (If you are already in the main folder, remain in the same folder).
        "./" : Remain in the same folder.
        "x/" : Move to the child folder named x (This folder is guaranteed to always exist).
        You are given a list of strings logs where logs[i] is the operation performed by the user at the ith step.
        
        The file system starts in the main folder, then the operations in logs are performed.
        
        Return the minimum number of operations needed to go back to the main folder after the change folder operations.`,
        codeOutput: 
        `var minOperations = function(logs) {
            let stepsBack = 0;
            
            //Decrement the 'steps' backward needed if ../, do nothing if ./, or go into the next folder.
            logs.forEach(log => {
                switch(log) {
                    case "../":
                        if(stepsBack > 0) stepsBack--;
                    case "./":
                        break;
                    default:
                        stepsBack++;
                }
            });
            
            return stepsBack;
        };`,
        code: function minOperations(logs) {
            let stepsBack = 0;
            
            //Decrement the 'steps' backward needed if ../, do nothing if ./, or go into the next folder.
            logs.forEach(log => {
                switch(log) {
                    case "../":
                        if(stepsBack > 0) stepsBack--;
                    case "./":
                        break;
                    default:
                        stepsBack++;
                }
            });
            
            return stepsBack;
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of strings exactly in format like this example: d1/,d2/,./,d3/,../,d31/",
                    type: "StringArray"
                }
            ]
        }
    },
    mirrorBits: {
        name: 'mirrorBits',
        instructions: `Reverse the order of the bits in a given integer.`,
        codeOutput: 
        `function mirrorBits(a) {
            //Convert this integer into binary.
            let binary = a.toString(2).split("").reverse().join("");
            //Convert the reversed binary back into an integer.
            let output = parseInt(binary, 2);
            return output;
        }`,
        code: function mirrorBits(a) {
            //Convert this integer into binary.
            let binary = a.toString(2).split("").reverse().join("");
            //Convert the reversed binary back into an integer.
            let output = parseInt(binary, 2);
            return output;
        },
        arguments: {
            descriptions: [
                {
                    text: "Integer Input",
                    type: "Number"
                }
            ]
        }
    },
    missedClasses: {
        name: 'missedClasses',
        instructions: `Your Math teacher takes education very seriously, and hates it when a class is missed or canceled for any reason. He even made up the following rule: if a class is missed because of a holiday, the teacher will compensate for it with a makeup class after school.

        You're given an array, daysOfTheWeek, with the weekdays on which your teacher's classes are scheduled, and holidays, representing the dates of the holidays throughout the academic year (from 1st of September in year to 31st of May in year + 1). How many times will you be forced to stay after school for a makeup class because of holiday conflicts in the current academic year?
        
        For your convenience, here is the list of month lengths (from January to December, respectively):
        
        Month lengths: 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31.
        Please note that in leap years February has 29 days.`,
        codeOutput: 
        `function missedClasses(year, daysOfTheWeek, holidays) {
            //Keep track of months.
            let months = [
                { name: "January", days: 31 },
                { name: "February", days: 28 },
                { name: "March", days: 31 },
                { name: "April", days: 30 },
                { name: "May", days: 31 },
                { name: "June", days: 30 },
                { name: "July", days: 31 },
                { name: "August", days: 31 },
                { name: "September", days: 30 },
                { name: "October", days: 31 },
                { name: "November", days: 30 },
                { name: "December", days: 31 }
            ];
            //Find the day of the week that it will be at the beginning of a given month.
                const findCurrentDay = inputDate => {
                    //Find the number of days in years passed since 1872.
                    let days = ((inputDate[1] - 1872) * 365);
                    //Add in the total number of leap days that passed in years before.
                    days += Math.ceil((inputDate[1] - 1872) / 4);
                    //Remove extra leap day from 1900 or 2100.
                    if(inputDate[1] > 1900) days--;
                    if(inputDate[1] > 2100) days--;
                    //Add in one more day if this year is a leap year, AND if leap day already passed, excluding 2100 (which isn't a leap year)
                    let isLeap = false;
                    if(inputDate[1] % 4 === 0 && inputDate[0] > 2 && inputDate[1] !== 2100 && inputDate[1] !== 1900) {
                        days++;
                        isLeap = true;
                    };
                    
                    //Add in the number of days that have passed so far before this month this year (leap day already included if this is a leap year).
                    for(let i = 0; i < inputDate[0] - 1; i++) {
                        days += months[i].days;
                    }
                    
                    //Finally, add in the number of days passed this month.
                    days += (inputDate[2] - 1);
                    
                    //Return the number of the current day of the week from the input string (if 0 - Monday, 6 - Sunday, etc.)
                    return days % 7;
                };
            
            //Keep track of the number of days that will be missed.
            let missedClasses = 0;
            
            //For each holiday, see if the day of the week matches one of the days in the days of the week array. If so, add to the count of missed classes.
            holidays.forEach(holiday => {
                //Format this holiday.
                let thisDate = holiday.split("-").map(str => Number(str));
                //Check if this date lands on one of the class days.
                daysOfTheWeek.forEach(day => {
                    //Pass this date into the function, making sure we pass in the next year if the dates are for the winter/spring sessions.
                    if(findCurrentDay([thisDate[0], thisDate[0] > 8 ? year : year + 1, thisDate[1]]) === day - 1) missedClasses++;
                });
            });
            
            return missedClasses;
        }`,
        code: function missedClasses(year, daysOfTheWeek, holidays) {
            //Keep track of months.
            let months = [
                { name: "January", days: 31 },
                { name: "February", days: 28 },
                { name: "March", days: 31 },
                { name: "April", days: 30 },
                { name: "May", days: 31 },
                { name: "June", days: 30 },
                { name: "July", days: 31 },
                { name: "August", days: 31 },
                { name: "September", days: 30 },
                { name: "October", days: 31 },
                { name: "November", days: 30 },
                { name: "December", days: 31 }
            ];
            //Find the day of the week that it will be at the beginning of a given month.
                const findCurrentDay = inputDate => {
                    //Find the number of days in years passed since 1872.
                    let days = ((inputDate[1] - 1872) * 365);
                    //Add in the total number of leap days that passed in years before.
                    days += Math.ceil((inputDate[1] - 1872) / 4);
                    //Remove extra leap day from 1900 or 2100.
                    if(inputDate[1] > 1900) days--;
                    if(inputDate[1] > 2100) days--;
                    //Add in one more day if this year is a leap year, AND if leap day already passed, excluding 2100 (which isn't a leap year)
                    let isLeap = false;
                    if(inputDate[1] % 4 === 0 && inputDate[0] > 2 && inputDate[1] !== 2100 && inputDate[1] !== 1900) {
                        days++;
                        isLeap = true;
                    };
                    
                    //Add in the number of days that have passed so far before this month this year (leap day already included if this is a leap year).
                    for(let i = 0; i < inputDate[0] - 1; i++) {
                        days += months[i].days;
                    }
                    
                    //Finally, add in the number of days passed this month.
                    days += (inputDate[2] - 1);
                    
                    //Return the number of the current day of the week from the input string (if 0 - Monday, 6 - Sunday, etc.)
                    return days % 7;
                };
            
            //Keep track of the number of days that will be missed.
            let missedClasses = 0;
            
            //For each holiday, see if the day of the week matches one of the days in the days of the week array. If so, add to the count of missed classes.
            holidays.forEach(holiday => {
                //Format this holiday.
                let thisDate = holiday.split("-").map(str => Number(str));
                //Check if this date lands on one of the class days.
                daysOfTheWeek.forEach(day => {
                    //Pass this date into the function, making sure we pass in the next year if the dates are for the winter/spring sessions.
                    if(findCurrentDay([thisDate[0], thisDate[0] > 8 ? year : year + 1, thisDate[1]]) === day - 1) missedClasses++;
                });
            });
            
            return missedClasses;
        },
        arguments: {
            descriptions: [
                {
                    text: "Integer (Year)",
                    type: "Number"
                },
                {
                    text: "Array of Integers for Days of the Week (No Brackets []; Form of 1,2,3...)",
                    type: "NumberArray"
                },
                {
                    text: "Array of Strings for Date-Day (No Brackets []; Form of 11-04,02-22...)",
                    type: "StringArray"
                }
            ]
        }
    },
    mostFrequentDigitSum: {
        name: 'mostFrequentDigitSum',
        instructions: `A step(x) operation works like this: it changes a number x into x - s(x), where s(x) is the sum of x's digits. You like applying functions to numbers, so given the number n, you decide to build a decreasing sequence of numbers: n, step(n), step(step(n)), etc., with 0 as the last element.

        Building a single sequence isn't enough for you, so you replace all elements of the sequence with the sums of their digits (s(x)). Now you're curious as to which number appears in the new sequence most often. If there are several answers, return the maximal one.`,
        codeOutput: 
        `function mostFrequentDigitSum(n) {
            let sequenceNumbers = {};
            let currentNumber = n;
            //While there are still numbers left in the sequence:
            while(currentNumber > 0) {
                //Get the sum of digits.
                let currentSequenceNumber = Number(String(currentNumber).split("").reduce((a, b) => Number(a) + Number(b), 0));
                //Using this sum, add this to the object map.
                if(sequenceNumbers[currentSequenceNumber]) {
                    sequenceNumbers[currentSequenceNumber]++;
                } else {
                    sequenceNumbers[currentSequenceNumber] = 1;
                }
                currentNumber -= currentSequenceNumber;
            }
            let mostFrequent = 0;
            for(let number in sequenceNumbers) {
                //Initially, assign the most frequent to the first number in the sequence map.
                if(mostFrequent === 0) {
                    mostFrequent = number;
                }
                //See if this number occurs more than the last saved number.
                if(sequenceNumbers[number] > sequenceNumbers[mostFrequent]) {
                    mostFrequent = number;
                    //If the number of occurrences are the same yet this key is larger, replace the current most frequent with the larger key.
                } else if(sequenceNumbers[number] === sequenceNumbers[mostFrequent] && number > mostFrequent) {
                    mostFrequent = number;
                }
            }
           
            return Number(mostFrequent);
        }`,
        code: function mostFrequentDigitSum(n) {
            let sequenceNumbers = {};
            let currentNumber = n;
            //While there are still numbers left in the sequence:
            while(currentNumber > 0) {
                //Get the sum of digits.
                let currentSequenceNumber = Number(String(currentNumber).split("").reduce((a, b) => Number(a) + Number(b), 0));
                //Using this sum, add this to the object map.
                if(sequenceNumbers[currentSequenceNumber]) {
                    sequenceNumbers[currentSequenceNumber]++;
                } else {
                    sequenceNumbers[currentSequenceNumber] = 1;
                }
                currentNumber -= currentSequenceNumber;
            }
            let mostFrequent = 0;
            for(let number in sequenceNumbers) {
                //Initially, assign the most frequent to the first number in the sequence map.
                if(mostFrequent === 0) {
                    mostFrequent = number;
                }
                //See if this number occurs more than the last saved number.
                if(sequenceNumbers[number] > sequenceNumbers[mostFrequent]) {
                    mostFrequent = number;
                    //If the number of occurrences are the same yet this key is larger, replace the current most frequent with the larger key.
                } else if(sequenceNumbers[number] === sequenceNumbers[mostFrequent] && number > mostFrequent) {
                    mostFrequent = number;
                }
            }
           
            return Number(mostFrequent);
        },
        arguments: {
            descriptions: [
                {
                    text: "Input Integer",
                    type: "Number"
                }
            ]
        }
    },
    mostVisited: {
        name: `mostVisited`,
        instructions: `Given an integer n and an integer array rounds. We have a circular track which consists of n sectors labeled from 1 to n. A marathon will be held on this track, the marathon consists of m rounds. The ith round starts at sector rounds[i - 1] and ends at sector rounds[i]. For example, round 1 starts at sector rounds[0] and ends at sector rounds[1]

        Return an array of the most visited sectors sorted in ascending order.
        
        Notice that you circulate the track in ascending order of sector numbers in the counter-clockwise direction (See the first example).`,
        codeOutput: 
        `var mostVisited = function(n, rounds) {
            //Keep track of visited rounds.
            let visited = {};
            
            for(let i = 0; i < rounds.length - 1; i++) {
                let roundStart = rounds[i];
                let roundEnd = rounds[i + 1];
                
                //Count first sector on start.
                if(i === 0) visited[rounds[0]] = 1;
                
                //Count the sectors visited in this round
                if(roundStart <= roundEnd) {
                    let thisSector = roundStart + 1;
                    
                    while(thisSector <= roundEnd) {
                        //Count every sector in between the range
                        if(visited[thisSector]) {
                            visited[thisSector]++;
                        } else {
                            visited[thisSector] = 1;
                        }
                        
                        thisSector++;
                    }
                } else {
                    let thisSector = 1;
                    
                    while(thisSector <= n) {
                        //Include this sector if in the correct range.
                        if(thisSector > roundStart || thisSector <= roundEnd) {
                            if(visited[thisSector]) {
                                visited[thisSector]++;
                            } else {
                                visited[thisSector] = 1;
                            }
                        }
                        
                        thisSector++;
                    }
                }
            }
                
            //Find most frequently visited number.
            let mostVisits = Math.max(...Object.values(visited));
            
            //Return the sector numbers visited the mostVisits number of times.
            return Object.keys(visited).filter(key => visited[key] === mostVisits).map(key => Number(key)).sort((a, b) => a - b);
        };`,
        code: function mostVisited(n, rounds) {
            //Keep track of visited rounds.
            let visited = {};
            
            for(let i = 0; i < rounds.length - 1; i++) {
                let roundStart = rounds[i];
                let roundEnd = rounds[i + 1];
                
                //Count first sector on start.
                if(i === 0) visited[rounds[0]] = 1;
                
                //Count the sectors visited in this round
                if(roundStart <= roundEnd) {
                    let thisSector = roundStart + 1;
                    
                    while(thisSector <= roundEnd) {
                        //Count every sector in between the range
                        if(visited[thisSector]) {
                            visited[thisSector]++;
                        } else {
                            visited[thisSector] = 1;
                        }
                        
                        thisSector++;
                    }
                } else {
                    let thisSector = 1;
                    
                    while(thisSector <= n) {
                        //Include this sector if in the correct range.
                        if(thisSector > roundStart || thisSector <= roundEnd) {
                            if(visited[thisSector]) {
                                visited[thisSector]++;
                            } else {
                                visited[thisSector] = 1;
                            }
                        }
                        
                        thisSector++;
                    }
                }
            }
                
            //Find most frequently visited number.
            let mostVisits = Math.max(...Object.values(visited));
            
            //Return the sector numbers visited the mostVisits number of times.
            return Object.keys(visited).filter(key => visited[key] === mostVisits).map(key => Number(key)).sort((a, b) => a - b);
        },
        arguments: {
            descriptions: [
                {
                    text: "Whole number integer n within range",
                    type: "Number"
                },
                {
                    text: "Array of integers for rounds (e.g 1,3,1,2)",
                    type: "NumberArray"
                }
            ]
        }
    },
    newNumeralSystem: {
        name: 'newNumeralSystem',
        instructions: `Your Informatics teacher at school likes coming up with new ways to help you understand the material. When you started studying numeral systems, he introduced his own numeral system, which he's convinced will help clarify things. His numeral system has base 26, and its digits are represented by English capital letters - A for 0, B for 1, and so on.

        The teacher assigned you the following numeral system exercise: given a one-digit number, you should find all unordered pairs of one-digit numbers whose values add up to the number.`,
        codeOutput: 
        `function newNumeralSystem(number) {
            let pairs = [];
            //Save the char code of this 'number'
            let largeCode = number.charCodeAt(0);
            //Using the letter A as the base for the smaller code, start constructing addition expressions until the two codes meet.
            for(let i = 65; i <= largeCode; i++) {
                pairs.push(\`\${String.fromCharCode(i)} + \${String.fromCharCode(largeCode)}\`);
                largeCode--;
            }
            return pairs;
        }`,
        code: function newNumeralSystem(number) {
            let pairs = [];
            //Save the char code of this 'number'
            let largeCode = number.charCodeAt(0);
            //Using the letter A as the base for the smaller code, start constructing addition expressions until the two codes meet.
            for(let i = 65; i <= largeCode; i++) {
                pairs.push(`${String.fromCharCode(i)} + ${String.fromCharCode(largeCode)}`);
                largeCode--;
            }
            return pairs;
        },
        arguments: {
            descriptions: [
                {
                    text: "Single Character Input (A-G)",
                    type: "String"
                }
            ]
        }
    },
    newYearCelebrations: {
        name: 'newYearCelebrations',
        instructions: `You're a pretty busy billionaire, and you often fly your personal Private Jet to remote places. Usually travel doesn't bother you, but this time you are unlucky: it's New Year's Eve, and since you have to fly halfway around the world, you'll probably have to celebrate New Year's Day in mid-air!

        Your course lies west of your current location and crosses several time zones. The pilot told you the exact schedule: it is known that you will take off at takeOffTime, and in minutes[i] after takeoff you will cross the ith border between time zones. After crossing each border you will have to set your wrist watch one hour earlier (every second matters to you, so you can't let your watch show incorrect time). It is guaranteed that you won't cross the IDL (i.e. after crossing each time zone border your current time will be set one hour back).
        
        You've been thinking about this situation and realized that it might be a good opportunity to celebrate New Year's Day more than once, i.e. each time your wrist watch shows 00:00. Assuming that you set your watch immediately after the border is crossed, how many times will you be able to celebrate this New Year's Day with a nice bottle of champagne? Note that the answer should include celebrations both in mid-air and on the ground (it doesn't matter if the plane landed in the last time zone before the midnight or not, you'll not let the last opportunity to celebrate New Year slip through your fingers).`,
        codeOutput: 
        `function newYearCelebrations(takeOffTime, minutes) {
            let celebrations = 0;
            //Convert takeoff time to minutes
            let takeOffMinutes = takeOffTime.split(":").map(str => Number(str));
            takeOffMinutes = (takeOffMinutes[0] * 60) + takeOffMinutes[1];
            //If the clock is already midnight, set to a full 24-hour set of minutes.
            if(takeOffMinutes === 0) takeOffMinutes = 1440;
            
            //Convert minutes into individual increments
            let minuteIncrements = minutes.map((mins, index) => {
                if(index === 0) return mins;
                return mins - minutes[index - 1];
            });
                
            //Loop through each of the increments. 
            for(let i = 0; i < minuteIncrements.length; i++) {
                //Add this time increment. If midnight passes during this time, celebrate.
                if(takeOffMinutes < 1440 && takeOffMinutes + minuteIncrements[i] >= 1440 ||
                takeOffMinutes <= 1440 && takeOffMinutes + minuteIncrements[i] > 1440) celebrations++;
                takeOffMinutes += minuteIncrements[i];
                
                //Go back one hour at the end of the cycle.
                takeOffMinutes -= 60;
            }
            
            //Finally, if the plane landed and it is before midnight, celebrate one more time.
            if(takeOffMinutes <= 1440) celebrations++;
            return celebrations;
        }`,
        code: function newYearCelebrations(takeOffTime, minutes) {
            let celebrations = 0;
            //Convert takeoff time to minutes
            let takeOffMinutes = takeOffTime.split(":").map(str => Number(str));
            takeOffMinutes = (takeOffMinutes[0] * 60) + takeOffMinutes[1];
            //If the clock is already midnight, set to a full 24-hour set of minutes.
            if(takeOffMinutes === 0) takeOffMinutes = 1440;
            
            //Convert minutes into individual increments
            let minuteIncrements = minutes.map((mins, index) => {
                if(index === 0) return mins;
                return mins - minutes[index - 1];
            });
                
            //Loop through each of the increments. 
            for(let i = 0; i < minuteIncrements.length; i++) {
                //Add this time increment. If midnight passes during this time, celebrate.
                if(takeOffMinutes < 1440 && takeOffMinutes + minuteIncrements[i] >= 1440 ||
                takeOffMinutes <= 1440 && takeOffMinutes + minuteIncrements[i] > 1440) celebrations++;
                takeOffMinutes += minuteIncrements[i];
                
                //Go back one hour at the end of the cycle.
                takeOffMinutes -= 60;
            }
            
            //Finally, if the plane landed and it is before midnight, celebrate one more time.
            if(takeOffMinutes <= 1440) celebrations++;
            return celebrations;
        },
        arguments: {
            descriptions: [
                {
                    text: "24-Hour Input String (Hour:Minute string in the form of 23:05)",
                    type: "String"
                },
                {
                    text: "Array of Integers (No Brackets []; Form of 1,2,3...)",
                    type: "NumberArray"
                }
            ]
        }
    },
    noIfsNoButs: {
        name: 'noIfsNoButs',
        instructions: `Write a function that accepts two parameters and says whether a is smaller than, bigger than, or equal to b. No 'if' or ? can be used`,
        codeOutput: 
        `let noIfsNoButs = (a, b) => {
            let larger = Math.max(a,b);
            let smaller = Math.min(a,b);
            switch(larger) {
                case smaller:
                    return \`\${a} is equal to \${b}\`;
                case a:
                    return \`\${a} is greater than \${b}\`;
                case b:
                    return \`\${a} is smaller than \${b}\`;
            }
        }`,
        code: function noIfsNoButs(a, b) {
            let larger = Math.max(a,b);
            let smaller = Math.min(a,b);
            switch(larger) {
                case smaller:
                    return `${a} is equal to ${b}`;
                case a:
                    return `${a} is greater than ${b}`;
                case b:
                    return `${a} is smaller than ${b}`;
            }
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
                }
            ]
        }
    },
    nthNumber: {
        name: 'nthNumber',
        instructions: `You are given a string s of characters that contains at least n numbers (here, a number is defined as a consecutive series of digits, where any character immediately to the left and right of the series are not digits). The numbers may contain leading zeros, but it is guaranteed that each number has at least one non-zero digit in it.

        Your task is to find the nth number and return it as a string without leading zeros.`,
        codeOutput: 
        `function nthNumber(s, n) {
            /*
            Using the RegExp constructor, create a regular expression that matches numbers in the input string (using the global flag).
        
            For the inner group:
            [1-9]+ Matches one or more non-zero digits. This means only numbers beginning in non-zero numbers will be captured.
            [0-9]* Matches any digit following the first (there can be zero or more).
            Those two categories are grouped together () into a number.
        
            For the outer group:
            . matches any character except line break.s
            * matches zero or more.
            ? matches as few characters as possible. 
        
            {n} will make the first result of the exec() call the target nth element we are looking for.
        
            Finally, when re.exec(s)[1] is called, element 1 of the returned array will contain the number string in the format that is wanted.
            */
            var re = new RegExp(\`(([1-9]+[0-9]*).*?){\${n}}\`, 'g');
            return re.exec(s)[1];
        }`,
        code: function nthNumber(s, n) {
            /*
            Using the RegExp constructor, create a regular expression that matches numbers in the input string (using the global flag).
        
            For the inner group:
            [1-9]+ Matches one or more non-zero digits. This means only numbers beginning in non-zero numbers will be captured.
            [0-9]* Matches any digit following the first (there can be zero or more).
            Those two categories are grouped together () into a number.
        
            For the outer group:
            . matches any character except line break.s
            * matches zero or more.
            ? matches as few characters as possible. 
        
            {n} will make the first result of the exec() call the target nth element we are looking for.
        
            Finally, when re.exec(s)[1] is called, element 1 of the returned array will contain the number string in the format that is wanted.
            */
            var re = new RegExp(`(([1-9]+[0-9]*).*?){${n}}`, 'g');
            return re.exec(s)[1];
        },
        arguments: {
            descriptions: [
                {
                    text: "String With Mix of Numbers and Other Characters (Example: 8one 003number 201numbers li-000233le number444)",
                    type: "String"
                },
                {
                    text: "Integer n",
                    type: "Number"
                }
            ]
        }
    },
    numberOfClans: {
        name: 'numberOfClans',
        instructions: `Let's call two integers A and B friends if each integer from the array divisors is either a divisor of both A and B or neither A nor B. If two integers are friends, they are said to be in the same clan. How many clans are the integers from 1 to k, inclusive, broken into?`,
        codeOutput: 
        `function numberOfClans(divisors, k) {
            //Loop through every number 1-k. 
            let factorCombos = {};
            for(let i = 1; i <= k; i++) {
                //For each of them, find out all numbers from divisors that are factors.
                let factors = {};
                for(let j = 0; j < divisors.length; j++) {
                    if(i % divisors[j] === 0 && !factors[divisors[j]]) {
                        factors[divisors[j]] = true;
                    }
                }
                //Combine all factors 
                let factorString = "";
                for(let factor in factors) {
                    factorString += factor + " ";
                }
                factorString = factorString.length > 0 ? factorString.trim() : "none";
                //Add this combination of factors to the factorCombos map.
                if(factorCombos[factorString]) {
                    factorCombos[factorString]++;
                } else {
                    factorCombos[factorString] = 1;
                }
            }
            //Return total numbers of different combinations
            return Object.keys(factorCombos).length;
        }`,
        code: function numberOfClans(divisors, k) {
            //Loop through every number 1-k. 
            let factorCombos = {};
            for(let i = 1; i <= k; i++) {
                //For each of them, find out all numbers from divisors that are factors.
                let factors = {};
                for(let j = 0; j < divisors.length; j++) {
                    if(i % divisors[j] === 0 && !factors[divisors[j]]) {
                        factors[divisors[j]] = true;
                    }
                }
                //Combine all factors 
                let factorString = "";
                for(let factor in factors) {
                    factorString += factor + " ";
                }
                factorString = factorString.length > 0 ? factorString.trim() : "none";
                //Add this combination of factors to the factorCombos map.
                if(factorCombos[factorString]) {
                    factorCombos[factorString]++;
                } else {
                    factorCombos[factorString] = 1;
                }
            }
            //Return total numbers of different combinations
            return Object.keys(factorCombos).length;
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
    numbersGrouping: {
        name: 'numbersGrouping',
        instructions: `You are given an array of integers that you want distribute between several groups. The first group should contain numbers from 1 to 104, the second should contain those from 104 + 1 to 2 * 104, ..., the 100th one should contain numbers from 99 * 104 + 1 to 106 and so on.

        All the numbers will then be written down in groups to the text file in such a way that:
        
        the groups go one after another;
        each non-empty group has a header which occupies one line;
        each number in a group occupies one line.
        Calculate how many lines the resulting text file will have.`,
        codeOutput: 
        `function numbersGrouping(a) {
            //Find how many numbers are in each group.
            let groupMap = {};
            a.forEach(number => {
                //Find the group number this number is part of, and use it as key.
                let groupNumber = Math.ceil(number / 10000);
                if(groupMap[groupNumber]) {
                    groupMap[groupNumber]++;
                } else {
                    groupMap[groupNumber] = 1;
                }
            });
            
            let total = 0;
            for(let group in groupMap) {
                //Add the number of numbers in this group.
                total += groupMap[group];
                //Add the heading.
                total++;
            }
        
            return total;
        }`,
        code: function numbersGrouping(a) {
            //Find how many numbers are in each group.
            let groupMap = {};
            a.forEach(number => {
                //Find the group number this number is part of, and use it as key.
                let groupNumber = Math.ceil(number / 10000);
                if(groupMap[groupNumber]) {
                    groupMap[groupNumber]++;
                } else {
                    groupMap[groupNumber] = 1;
                }
            });
            
            let total = 0;
            for(let group in groupMap) {
                //Add the number of numbers in this group.
                total += groupMap[group];
                //Add the heading.
                total++;
            }
        
            return total;
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
    numJewelsInStones: {
        name: `numJewelsInStones`,
        instructions: `You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

        Letters are case sensitive, so "a" is considered a different type of stone from "A".`,
        codeOutput: 
        `var numJewelsInStones = function(jewels, stones) {
            //Create object map of all types of jewels.
            let jewelsMap = {};
            jewels.split("").forEach(jewel => {
                if(!jewelsMap[jewel]) {
                    jewelsMap[jewel] = 1;
                }
            });
            
            //Count the total number of jewels inside stones.
            let count = 0;
            stones.split("").forEach(stone => {
                if(jewelsMap[stone]) count++;
            });
            
            return count;
        };`,
        code: function numJewelsInStones(jewels, stones) {
            //Create object map of all types of jewels.
            let jewelsMap = {};
            jewels.split("").forEach(jewel => {
                if(!jewelsMap[jewel]) {
                    jewelsMap[jewel] = 1;
                }
            });
            
            //Count the total number of jewels inside stones.
            let count = 0;
            stones.split("").forEach(stone => {
                if(jewelsMap[stone]) count++;
            });
            
            return count;
        },
        arguments: {
            descriptions: [
                {
                    text: "String to Represent Jewels",
                    type: "String"
                },
                {
                    text: "String to Represent Stones",
                    type: "String"
                }
            ]
        }
    },
    numSpecial: {
        name: `numSpecial`,
        instructions: `Given an m x n binary matrix mat, return the number of special positions in mat.

        A position (i, j) is called special if mat[i][j] == 1 and all other elements in row i and column j are 0 (rows and columns are 0-indexed).`,
        codeOutput: 
        `var numSpecial = function(mat) {
            let specialPositions = 0;
            
            //Loop through every cell in the 2D array.
            for(let i = 0; i < mat.length; i++) {
                for(let j = 0; j < mat[i].length; j++) {
                    //Check if this position has a 1.
                    if(mat[i][j] === 1) {
                        //If so, check the vertical and horizontal positions.
                        //Use index parameter to 'skip over' the current i and current j in checking every position.
                        if(mat.every((row, index) => row[j] === 0 || index === i)
                           && mat[i].every((cell, index) => cell === 0 || index === j)) specialPositions++;
                    }
                }
            }
            
            return specialPositions;
        };`,
        code: function numSpecial(mat) {
            let specialPositions = 0;
            
            //Loop through every cell in the 2D array.
            for(let i = 0; i < mat.length; i++) {
                for(let j = 0; j < mat[i].length; j++) {
                    //Check if this position has a 1.
                    if(mat[i][j] === 1) {
                        //If so, check the vertical and horizontal positions.
                        //Use index parameter to 'skip over' the current i and current j in checking every position.
                        if(mat.every((row, index) => row[j] === 0 || index === i)
                           && mat[i].every((cell, index) => cell === 0 || index === j)) specialPositions++;
                    }
                }
            }
            
            return specialPositions;
        },
        arguments: {
            descriptions: [
                {
                    text: "2D Array according to instructions (e.g. [1,0,0], [0,0,1], [1,0,0])",
                    type: "NumberArrayArray"
                }
            ]
        }
    }
};

export default challenges_k_n;

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
BooleanArrayArray

*/