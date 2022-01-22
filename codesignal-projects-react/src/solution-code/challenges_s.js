//Include global BigInt (as comment) in order to prevent no-undef in this environment.
/* global BigInt */

const challenges_s = {
    searchInsert: {
        name: `searchInsert`,
        instructions: `Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
        You must write an algorithm with O(log n) runtime complexity.`,
        codeOutput: 
        `var searchInsert = function(nums, target) {
            if(nums.includes(target)) return nums.indexOf(target);
            //If target is not already part of nums, put it in the array, sort it, and return the index.
            nums.push(target);
            nums.sort((a,b) => a - b);
            return nums.indexOf(target)
        };`,
        code: function searchInsert(nums, target) {
            if(nums.includes(target)) return nums.indexOf(target);
            //If target is not already part of nums, put it in the array, sort it, and return the index.
            nums.push(target);
            nums.sort((a,b) => a - b);
            return nums.indexOf(target)
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Sorted Distinct Integers (e.g. 1,2,5,7,10)",
                    type: "NumberArray"
                },
                {
                    text: "Single Integer for Target",
                    type: "Number"
                }
            ]
        }
    },
    seatsInTheater: {
        name: 'seatsInTheater',
        instructions: `Given the total number of rows and columns in the theater (nRows and nCols, respectively), and the row and column you're sitting in, return the number of people who sit strictly behind you and in your column or to the left, assuming all seats are occupied.`,
        codeOutput: 
        `function seatsInTheater(nCols, nRows, col, row) {
            //Since we are including this column in the area, add it back into the equation.
            return (nCols - col + 1) * (nRows - row);
        }`,
        code: function seatsInTheater(nCols, nRows, col, row) {
            //Since we are including this column in the area, add it back into the equation.
            return (nCols - col + 1) * (nRows - row);
        },
        arguments: {
            descriptions: [
                {
                    text: "Integer (Total Cols)",
                    type: "Number"
                },
                {
                    text: "Integer (Total Rows)",
                    type: "Number"
                },
                {
                    text: "Integer (Current Col)",
                    type: "Number"
                },
                {
                    text: "Integer (Current Row)",
                    type: "Number"
                }
            ]
        }
    },
    secondRightmostZeroBit: {
        name: 'secondRightmostZeroBit',
        instructions: `Presented with the integer n, find the 0-based position of the second rightmost zero bit in its binary representation (it is guaranteed that such a bit exists), counting from right to left.

        Return the value of 2position_of_the_found_bit.`,
        codeOutput: 
        `function secondRightmostZeroBit(n) {
            //Return 2 to the power of the following expression:
            //Take the reversed binary string representation of this integer
            //Remove the first part of the string with the first 0 and count its length
            //Add that length to the position of the first zero in the second part of the string,
            //where we find the index of the first 0 in the second half (therefore the second 0)
            return 2 ** (n.toString(2)
                  .split("")
                  .reverse()
                  .join("")
                  .substring(0, n.toString(2).split("").reverse().join("").indexOf("0") + 1)
                  .length +
              
                  n.toString(2)
                  .split("")
                  .reverse()
                  .join("")
                  .substring(n.toString(2).split("").reverse().join("").indexOf("0") + 1)
                  .indexOf("0"));
        }`,
        code: function secondRightmostZeroBit(n) {
            //Return 2 to the power of the following expression:
            //Take the reversed binary string representation of this integer
            //Remove the first part of the string with the first 0 and count its length
            //Add that length to the position of the first zero in the second part of the string,
            //where we find the index of the first 0 in the second half (therefore the second 0)
            return 2 ** (n.toString(2)
                  .split("")
                  .reverse()
                  .join("")
                  .substring(0, n.toString(2).split("").reverse().join("").indexOf("0") + 1)
                  .length +
              
                  n.toString(2)
                  .split("")
                  .reverse()
                  .join("")
                  .substring(n.toString(2).split("").reverse().join("").indexOf("0") + 1)
                  .indexOf("0"));
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
    shapeArea: {
        name: 'shapeArea',
        instructions: `Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

        A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.`,
        codeOutput: 
        `function shapeArea(n) {
            let area = 1; 
            
            for(i = 1; i < n; i++) {
                area += (4 * i); 
            }
            
            return area; 
        }`,
        code: function shapeArea(n) {
            let area = 1; 
            
            for(let i = 1; i < n; i++) {
                area += (4 * i); 
            }
            
            return area; 
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
    shuffledArray: {
        name: 'shuffledArray',
        instructions: `A noob programmer was given two simple tasks: sum and sort the elements of the given array
        a = [a1, a2, ..., an]. He started with summing and did it easily, but decided to store the sum he found in some random position of the original array which was a bad idea. Now he needs to cope with the second task, sorting the original array a, and it's giving him trouble since he modified it.
        
        Given the array shuffled, consisting of elements a1, a2, ..., an, a1 + a2 + ... + an in random order, return the sorted array of original elements a1, a2, ..., an.`,
        codeOutput: 
        `function shuffledArray(shuffled) {
            //Store the index where the sum is located.
            let sumIndex = 0;
            //Find the sum of all elements, with the correct sum included.
            let shuffledSum = shuffled.reduce((a, b) => a += b, 0);
            for(let i = 0; i < shuffled.length; i++) {
                //Loop through each element, taking the number away from the shuffled sum, seeing if it is the sum.
                if(shuffledSum - shuffled[i] === shuffled[i]) {
                    //Store the correct sum
                    sumIndex = i;
                    break;
                }
            }
            //Remove the sum from the shuffled array.
            shuffled.splice(sumIndex, 1)
            //Return the sorted array.
            return shuffled.sort((a, b) => a - b);
        }`,
        code: function shuffledArray(shuffled) {
            //Store the index where the sum is located.
            let sumIndex = 0;
            //Find the sum of all elements, with the correct sum included.
            let shuffledSum = shuffled.reduce((a, b) => a += b, 0);
            for(let i = 0; i < shuffled.length; i++) {
                //Loop through each element, taking the number away from the shuffled sum, seeing if it is the sum.
                if(shuffledSum - shuffled[i] === shuffled[i]) {
                    //Store the correct sum
                    sumIndex = i;
                    break;
                }
            }
            //Remove the sum from the shuffled array.
            shuffled.splice(sumIndex, 1)
            //Return the sorted array.
            return shuffled.sort((a, b) => a - b);
        },
        arguments: {
            descriptions: [
                {
                    text: "Integer Array Including Sum of All Other Elements (No Brackets; Example: 1,12,3,6,2)",
                    type: "NumberArray"
                }
            ]
        }
    },
    singleNumber: {
        name: `singleNumber`,
        instructions: `Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.`,
        codeOutput: 
        `var singleNumber = function(nums) {
            let numMap = {};
            nums.forEach(num => {
                if(numMap[num]) {
                    numMap[num]++
                } else {
                    numMap[num] = 1;
                }
            });
            for(let num in numMap) {
                if(numMap[num] === 1) return num;    
            }
        };`,
        code: function singleNumber(nums) {
            let numMap = {};
            nums.forEach(num => {
                if(numMap[num]) {
                    numMap[num]++
                } else {
                    numMap[num] = 1;
                }
            });
            for(let num in numMap) {
                if(numMap[num] === 1) return num;    
            }
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Integers (All numbers appear twice except one; e.g. 1,1,2,2,3)",
                    type: "NumberArray"
                }
            ]
        }
    },
    sortByHeight: {
        name: 'sortByHeight',
        instructions: `Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!`,
        codeOutput: 
        `function sortByHeight(a) {
            //Extract non -1 values
            let values = a.filter(value => value !== -1).sort((a, b) => a - b);
            //Loop through array, placing sorted values into place.
            return a.map(value => {
                //If this value is not -1, insert the next value in the sorted portions of the array.
                if(value !== -1) return values.shift();
                return value;
            });
        }`,
        code: function sortByHeight(a) {
            //Extract non -1 values
            let values = a.filter(value => value !== -1).sort((a, b) => a - b);
            //Loop through array, placing sorted values into place.
            return a.map(value => {
                //If this value is not -1, insert the next value in the sorted portions of the array.
                if(value !== -1) return values.shift();
                return value;
            });
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Integers Mixed With -1 Values (No Brackets; Example: -1,150,190,170,-1,-1,160,180)",
                    type: "NumberArray"
                }
            ]
        }
    },
    sortByLength: {
        name: 'sortByLength',
        instructions: `Given an array of strings, sort them in the order of increasing lengths. If two strings have the same length, their relative order must be the same as in the initial array.`,
        codeOutput: 
        `function sortByLength(inputArray) {
            //Create a mapping of all lengths and strings with that length (in order).
            let lengthMap = {};
            inputArray.forEach(string => {
                //See if an array for this length exists. If so, push to it. Otherwise, create it.
                if(lengthMap[string.length]) {
                    lengthMap[string.length].push(string);
                } else {
                    lengthMap[string.length] = [string];
                }
            });
            //For every length, spread out the array values in a new array to be returned.
            let sorted = [];
            for(let length in lengthMap) {
                sorted.push(...lengthMap[length]);
            }
            return sorted;
        }`,
        code: function sortByLength(inputArray) {
            //Create a mapping of all lengths and strings with that length (in order).
            let lengthMap = {};
            inputArray.forEach(string => {
                //See if an array for this length exists. If so, push to it. Otherwise, create it.
                if(lengthMap[string.length]) {
                    lengthMap[string.length].push(string);
                } else {
                    lengthMap[string.length] = [string];
                }
            });
            //For every length, spread out the array values in a new array to be returned.
            let sorted = [];
            for(let length in lengthMap) {
                sorted.push(...lengthMap[length]);
            }
            return sorted;
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Strings (No Brackets; Form of hello,string,hi...)",
                    type: "StringArray"
                }
            ]
        }
    },
    spiralNumbers: {
        name: 'spiralNumbers',
        instructions: `Construct a square matrix with a size N × N containing integers from 1 to N * N in a spiral order, starting from top-left and in clockwise direction.`,
        codeOutput: 
        `function spiralNumbers(n) {
            //Create initial matrix.
            let matrix = [];
            for(let i = 0; i < n; i++) {
                matrix.push([]);
                for(let j = 0; j < n; j++) {
                    matrix[i].push(0);
                }
            }
            
            //Fill in the spiral square-by-square.
            //Keep track of the bounds of the current square and current number.
            let min = 0;
            let max = n - 1;
            let count = 1;
            
            //For each 'square'
            while(min <= max) {
                //Fill top row
                for(let i = min; i <= max; i++) {
                    if(matrix[min]) {
                        matrix[min][i] = count;
                        count++;
                    } 
                }
                //Fill right col 
                for(let i = min + 1; i <= max; i++) {
                    if(matrix[i]) {
                        matrix[i][max] = count;
                        count++;
                    }
                }
                //Fill bottom row backwards
                for(let i = max - 1; i >= min; i--) {
                    if(matrix[max]) {
                        matrix[max][i] = count;
                        count++;
                    }
                }
                //Fill left col backwards
                for(let i = max - 1; i > min; i--) {
                    if(matrix[i]) {
                        matrix[i][min] = count;
                        count++;
                    }
                }
            
                //Make the dimensions of the square smaller.
                min++;
                max--;
            }
            
            return matrix;
        }`,
        code: function spiralNumbers(n) {
            //Create initial matrix.
            let matrix = [];
            for(let i = 0; i < n; i++) {
                matrix.push([]);
                for(let j = 0; j < n; j++) {
                    matrix[i].push(0);
                }
            }
            
            //Fill in the spiral square-by-square.
            //Keep track of the bounds of the current square and current number.
            let min = 0;
            let max = n - 1;
            let count = 1;
            
            //For each 'square'
            while(min <= max) {
                //Fill top row
                for(let i = min; i <= max; i++) {
                    if(matrix[min]) {
                        matrix[min][i] = count;
                        count++;
                    } 
                }
                //Fill right col 
                for(let i = min + 1; i <= max; i++) {
                    if(matrix[i]) {
                        matrix[i][max] = count;
                        count++;
                    }
                }
                //Fill bottom row backwards
                for(let i = max - 1; i >= min; i--) {
                    if(matrix[max]) {
                        matrix[max][i] = count;
                        count++;
                    }
                }
                //Fill left col backwards
                for(let i = max - 1; i > min; i--) {
                    if(matrix[i]) {
                        matrix[i][min] = count;
                        count++;
                    }
                }
            
                //Make the dimensions of the square smaller.
                min++;
                max--;
            }
            
            return matrix;
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
    squareDigitsSequence: {
        name: 'squareDigitsSequence',
        instructions: `Consider a sequence of numbers a0, a1, ..., an, in which an element is equal to the sum of squared digits of the previous element. The sequence ends once an element that has already been in the sequence appears again.

        Given the first element a0, find the length of the sequence.`,
        codeOutput: 
        `function squareDigitsSequence(a0) {
            //Keep track of total.
            let count = 0;
            //Starting value is also the current.
            let current = a0;
            //Keep track of numbers in the sequence (used to check for repeats)
            let found = [];
            //As long as the new 'current' value is not already in the array, keep generating numbers (always do the first one).
            do {
                //Save the current value.
                found.push(current);
                //Add to the count.
                count++;
                //Split the current value into squared digits and add (this is the new current).
                current = String(current).split("").reduce((total, thisDigit) => {
                    return total += (Number(thisDigit * Number(thisDigit)));
                }, 0);
            } while(!found.find(value => value === current));
            //Return the total count (plus the last iteration).
            return count + 1;
        }`,
        code: function squareDigitsSequence(a0) {
            //Keep track of total.
            let count = 0;
            //Starting value is also the current.
            let current = a0;
            //Keep track of numbers in the sequence (used to check for repeats)
            let found = [];
            //As long as the new 'current' value is not already in the array, keep generating numbers (always do the first one).
            do {
                //Save the current value.
                found.push(current);
                //Add to the count.
                count++;
                //Split the current value into squared digits and add (this is the new current).
                current = String(current).split("").reduce((total, thisDigit) => {
                    return total += (Number(thisDigit * Number(thisDigit)));
                }, 0);
            } while(!found.find(value => value === current));
            //Return the total count (plus the last iteration).
            return count + 1;
        },
        arguments: {
            descriptions: [
                {
                    text: "Integer a0",
                    type: "Number"
                }
            ]
        }
    },
    starRotation: {
        name: 'starRotation',
        instructions: `Consider a (2k+1) × (2k+1) square subarray of an integer integers matrix. Let's call the union of the square's two longest diagonals, middle column and middle row a star. Given the coordinates of the star's center in the matrix and its width, rotate it 45 · t degrees clockwise preserving position of all matrix elements that do not belong to the star.`,
        codeOutput: 
        `function starRotation(matrix, width, center, t) {
            //Get rid of uncessary rotations, since every 8 rotations the elements are back in the same place.
            let totalRotations = t % 8;
            
            //Helper function to rotate square elements
            const rotateElements = squareElements => {
                //Create new array for rotation (excludes middle value at index 4) in the order of the square going clockwise.
                const arrayToRotate = [
                    ...squareElements.slice(0,3), 
                    squareElements[5],
                    ...squareElements.slice(6).reverse(),
                    squareElements[3]
                ];
                
                //Reverse the elements a specific number of times
                for(let i = 0; i < totalRotations; i++) {
                    let lastElement = arrayToRotate.pop();
                    arrayToRotate.unshift(lastElement);
                }
                        
                //Return the array rearranged back into row/col order.
                return [
                    ...arrayToRotate.slice(0, 3),
                    arrayToRotate[7],
                    squareElements[4],
                    arrayToRotate[3],
                    ...arrayToRotate.slice(4, 7).reverse()
                ];
            };
            
            //Find the initial 'starting point' for the square (upper-left corner indexes)
            let start_i = center[0] - Math.floor(width / 2);
            let start_j = center[1] - Math.floor(width / 2);
            
            //Start with the initial width of the largest (outer) square.
            let currentSquareWidth = width;
            
            //Loop through each 'outer square' of the star
            while(currentSquareWidth > 2) {
                //Extract the values of this square and rotate (return array of new order)
                let elements = [];
                
                //Loop over each 'row' of the square.
                for(let i_offset = start_i; i_offset - start_i < currentSquareWidth; i_offset += Math.floor(currentSquareWidth / 2)) {
                    //Loop over each 'col' of the square.
                    for(let j_offset = start_j; j_offset - start_j < currentSquareWidth; j_offset += Math.floor(currentSquareWidth / 2)) {
                        //Place this element into the array to be rotated.
                        elements.push(matrix[i_offset][j_offset]);
                    }
                }
                
                //Create array to pull rotated values from.
                let rotatedSquare = rotateElements(elements);
                
                //Fill in these elements with the new values
                //Loop over each 'row' of the square.
                for(let i_offset = start_i; i_offset - start_i < currentSquareWidth; i_offset += Math.floor(currentSquareWidth / 2)) {
                    //Loop over each 'col' of the square.
                    for(let j_offset = start_j; j_offset - start_j < currentSquareWidth; j_offset += Math.floor(currentSquareWidth / 2)) {     
                        //Use the newly filled rotated square array to incrementally place elements into their spots.
                        matrix[i_offset][j_offset] = rotatedSquare.shift();
                    }
                }
                    
                //After finishing with this square, update values of start_i and start_j and width.
                start_i++;
                start_j++;
                currentSquareWidth -= 2;
            }
            
            //Return the array, with updated elements in place.
            return matrix;
        }`,
        code: function starRotation(matrix, width, center, t) {
            //Get rid of uncessary rotations, since every 8 rotations the elements are back in the same place.
            let totalRotations = t % 8;
            
            //Helper function to rotate square elements
            const rotateElements = squareElements => {
                //Create new array for rotation (excludes middle value at index 4) in the order of the square going clockwise.
                const arrayToRotate = [
                    ...squareElements.slice(0,3), 
                    squareElements[5],
                    ...squareElements.slice(6).reverse(),
                    squareElements[3]
                ];
                
                //Reverse the elements a specific number of times
                for(let i = 0; i < totalRotations; i++) {
                    let lastElement = arrayToRotate.pop();
                    arrayToRotate.unshift(lastElement);
                }
                        
                //Return the array rearranged back into row/col order.
                return [
                    ...arrayToRotate.slice(0, 3),
                    arrayToRotate[7],
                    squareElements[4],
                    arrayToRotate[3],
                    ...arrayToRotate.slice(4, 7).reverse()
                ];
            };
            
            //Find the initial 'starting point' for the square (upper-left corner indexes)
            let start_i = center[0] - Math.floor(width / 2);
            let start_j = center[1] - Math.floor(width / 2);
            
            //Start with the initial width of the largest (outer) square.
            let currentSquareWidth = width;
            
            //Loop through each 'outer square' of the star
            while(currentSquareWidth > 2) {
                //Extract the values of this square and rotate (return array of new order)
                let elements = [];
                
                //Loop over each 'row' of the square.
                for(let i_offset = start_i; i_offset - start_i < currentSquareWidth; i_offset += Math.floor(currentSquareWidth / 2)) {
                    //Loop over each 'col' of the square.
                    for(let j_offset = start_j; j_offset - start_j < currentSquareWidth; j_offset += Math.floor(currentSquareWidth / 2)) {
                        //Place this element into the array to be rotated.
                        elements.push(matrix[i_offset][j_offset]);
                    }
                }
                
                //Create array to pull rotated values from.
                let rotatedSquare = rotateElements(elements);
                
                //Fill in these elements with the new values
                //Loop over each 'row' of the square.
                for(let i_offset = start_i; i_offset - start_i < currentSquareWidth; i_offset += Math.floor(currentSquareWidth / 2)) {
                    //Loop over each 'col' of the square.
                    for(let j_offset = start_j; j_offset - start_j < currentSquareWidth; j_offset += Math.floor(currentSquareWidth / 2)) {     
                        //Use the newly filled rotated square array to incrementally place elements into their spots.
                        matrix[i_offset][j_offset] = rotatedSquare.shift();
                    }
                }
                    
                //After finishing with this square, update values of start_i and start_j and width.
                start_i++;
                start_j++;
                currentSquareWidth -= 2;
            }
            
            //Return the array, with updated elements in place.
            return matrix;
        },
        arguments: {
            descriptions: [
                {
                    text: "Matrix of Integers (Example to Copy: [1,0,0,2,0,0,3], [0,1,0,2,0,3,0], [0,0,1,2,3,0,0], [8,8,8,9,4,4,4], [0,0,7,6,5,0,0], [0,7,0,6,0,5,0], [7,0,0,6,0,0,5])",
                    type: "NumberArrayArray"
                },
                {
                    text: "Width (Integer)",
                    type: "Number"
                },
                {
                    text: "2-Digit Array Without Brackets (Example: 3,3)",
                    type: "NumberArray"
                },
                {
                    text: "Integer t",
                    type: "Number"
                }
            ]
        }
    },
    stolenLunch: {
        name: 'stolenLunch',
        instructions: `When you recently visited your little nephew, he told you a sad story: there's a bully at school who steals his lunch every day, and locks it away in his locker. He also leaves a note with a strange, coded message. Your nephew gave you one of the notes in hope that you can decipher it for him. And you did: it looks like all the digits in it are replaced with letters and vice versa. Digit 0 is replaced with 'a', 1 is replaced with 'b' and so on, with digit 9 replaced by 'j'.

        The note is different every day, so you decide to write a function that will decipher it for your nephew on an ongoing basis.`,
        codeOutput: 
        `function stolenLunch(note) {
            return note.split("")
            .map(character => {
                //Convert numbers to letters (check for spaces to avoid space becoming 'a')
                if(Number(character) >= 0 && Number(character) <= 9 && character !== " ") {
                    return String.fromCharCode(97 + Number(character));
                    //Convert letters to numbers, using char code differences
                } else if(character.charCodeAt(0) >= 97 && character.charCodeAt(0) <= 106) {
                    return character.charCodeAt(0) - 97;
                } else {
                    //Otherwise, return the character as normal
                    return character;
                }
            })
            .join("");
        }`,
        code: function stolenLunch(note) {
            return note.split("")
            .map(character => {
                //Convert numbers to letters (check for spaces to avoid space becoming 'a')
                if(Number(character) >= 0 && Number(character) <= 9 && character !== " ") {
                    return String.fromCharCode(97 + Number(character));
                    //Convert letters to numbers, using char code differences
                } else if(character.charCodeAt(0) >= 97 && character.charCodeAt(0) <= 106) {
                    return character.charCodeAt(0) - 97;
                } else {
                    //Otherwise, return the character as normal
                    return character;
                }
            })
            .join("");
        },
        arguments: {
            descriptions: [
                {
                    text: "String message with letters a-j replaced by 0-9, respectively",
                    type: "String"
                }
            ]
        }
    },
    stringsConstruction: {
        name: 'stringsConstruction',
        instructions: `Given two strings a and b, both consisting only of lowercase English letters, your task is to calculate how many strings equal to a can be constructed using only letters from the string b? Each letter can be used only once and in one string only.`,
        codeOutput: 
        `function stringsConstruction(a, b) {
            //Create character map for string b.
            let charMap = {};
            for(let i = 0; i < b.length; i++) {
                if(charMap[b[i]]) {
                    charMap[b[i]]++
                } else {
                    charMap[b[i]] = 1;
                }
            }
            //Keep track of number of strings created.
            let count = 0;
            //Start at index 0 (keep track of index we are currently at in building an instance of string a)
            let thisIndex = 0;
            //Build the string.
            let currentString = "";
            //As long as the desired character of string a is left in the character map of string b
            while(charMap[a[thisIndex]]) {
                //Add to the string.
                currentString += a[thisIndex];
                //See if we have reached the desired string. If so, increase count and reset the building string.
                if(currentString === a) {
                    count++;
                    currentString = "";
                }
                //Removed the used character from the character map and update the index we are at (update the loop).
                charMap[a[thisIndex]]--;
                thisIndex = thisIndex === a.length - 1 ? 0 : thisIndex + 1;
            }
            
            return count;
        }`,
        code: function stringsConstruction(a, b) {
            //Create character map for string b.
            let charMap = {};
            for(let i = 0; i < b.length; i++) {
                if(charMap[b[i]]) {
                    charMap[b[i]]++
                } else {
                    charMap[b[i]] = 1;
                }
            }
            //Keep track of number of strings created.
            let count = 0;
            //Start at index 0 (keep track of index we are currently at in building an instance of string a)
            let thisIndex = 0;
            //Build the string.
            let currentString = "";
            //As long as the desired character of string a is left in the character map of string b
            while(charMap[a[thisIndex]]) {
                //Add to the string.
                currentString += a[thisIndex];
                //See if we have reached the desired string. If so, increase count and reset the building string.
                if(currentString === a) {
                    count++;
                    currentString = "";
                }
                //Removed the used character from the character map and update the index we are at (update the loop).
                charMap[a[thisIndex]]--;
                thisIndex = thisIndex === a.length - 1 ? 0 : thisIndex + 1;
            }
            
            return count;
        },
        arguments: {
            descriptions: [
                {
                    text: "String a (Lowercase Letters)",
                    type: "String"
                },
                {
                    text: "String b (Lowercase Letters)",
                    type: "String"
                }
            ]
        }
    },
    stringsCrossover: {
        name: 'stringsCrossover',
        instructions: `Define crossover operation over two equal-length strings A and B as follows:

        the result of that operation is a string of the same length as the input strings
        result[i] is either A[i] or B[i], chosen at random
        Given array of strings inputArray and a string result, find for how many pairs of strings from inputArray the result of the crossover operation over them may be equal to result.
        
        Note that (A, B) and (B, A) are the same pair. Also note that the pair cannot include the same element of the array twice (however, if there are two equal elements in the array, they can form a pair).`,
        codeOutput: 
        `function stringsCrossover(inputArray, result) {
            let count = 0;
            //Loop through each string element.
            for(let i = 0; i < inputArray.length; i++) {
                //For each string element, loop through all other strings.
                for(let j = 0; j < inputArray.length; j++) {
                    //Skip this iteration of j if the two strings being compared are the same.
                    if(i === j) continue;
                    //Compare each of the characters in these two strings in a loop
                    let valid = true;
                    for(let k = 0; k < inputArray[i].length; k++) {
                        //Check if either character being compared is equal to this index of the result string.
                        //If neither of the characters equal the target character, this combination doesn't work.
                        if(!(inputArray[i][k] === result[k]) && !(inputArray[j][k] === result[k])) {
                            //At any point, if this doesn't work, mark this as false. 
                            valid = false;
                        }
                    }
                    //If this is a true match, add one to the overall count and continue.
                    if(valid) {
                        count++;
                    }        
                }
            }
            //Return the number of pairs, but halved since we don't count diplicates in a different order.
            return count / 2;
        }`,
        code: function stringsCrossover(inputArray, result) {
            let count = 0;
            //Loop through each string element.
            for(let i = 0; i < inputArray.length; i++) {
                //For each string element, loop through all other strings.
                for(let j = 0; j < inputArray.length; j++) {
                    //Skip this iteration of j if the two strings being compared are the same.
                    if(i === j) continue;
                    //Compare each of the characters in these two strings in a loop
                    let valid = true;
                    for(let k = 0; k < inputArray[i].length; k++) {
                        //Check if either character being compared is equal to this index of the result string.
                        //If neither of the characters equal the target character, this combination doesn't work.
                        if(!(inputArray[i][k] === result[k]) && !(inputArray[j][k] === result[k])) {
                            //At any point, if this doesn't work, mark this as false. 
                            valid = false;
                        }
                    }
                    //If this is a true match, add one to the overall count and continue.
                    if(valid) {
                        count++;
                    }        
                }
            }
            //Return the number of pairs, but halved since we don't count diplicates in a different order.
            return count / 2;
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Equal-Length Strings (Form of abc,aaa,aba...)",
                    type: "StringArray"
                },
                {
                    text: "String of Equal Length to Array Strings",
                    type: "String"
                }
            ]
        }
    },
    stringsRearrangement: {
        name: 'stringsRearrangement',
        instructions: `Given an array of equal-length strings, you'd like to know if it's possible to rearrange the order of the elements in such a way that each consecutive pair of strings differ by exactly one character. Return true if it's possible, and false if not.`,
        codeOutput: 
        `function stringsRearrangement(inputArray) {
            //Create a helper function to find all permutations of these strings.
            const createPermutations = inputArray => {
                let permutations = [];
                
                const permutation = (inputArr, m = []) => {
                    //When this is first called, 'm' is an empty array.
                    if(inputArr.length === 0) {
                        //Once the array is empty, we know we are ready to 'unwind' recursion.
                        permutations.push(m);
                    } else {
                        //Loop through every string element in the array.
                        for(let i = 0; i < inputArr.length; i++) {
                            //Take a copy of the current array
                            let currentArray = inputArr.slice();
                            //Take out an element from the array and save it.
                            let nextElement = currentArray.splice(i, 1);
                            permutation(currentArray.slice(), m.concat(nextElement));
                        }
                    }
                }
                permutation(inputArray);
                
                return permutations;
            };
            
            let allPermutations = createPermutations(inputArray);
            
            //Go through each permutation and check if any change by exactly one character each iteration
            
            for(let i = 0; i < allPermutations.length; i++) {
                //Loop through every string in this permutation
                for(let j = 0; j < allPermutations[i].length - 1; j++) {
                    //Compare the characters in the string at this index (j) to the characters in the string at the next index (j + 1), and keep track of how many differences there are.
                    let differences = 0;
                    for(let k = 0; k < allPermutations[i][j].length; k++) {
                        if(allPermutations[i][j][k] !== allPermutations[i][j + 1][k]) {
                            differences++;
                        }
                    }
                    console.log(differences);
                    if(differences !== 1) {
                        break;
                    } 
                    
                    //If we have reached the end of this permutation with only one difference between each string, we found a working set.
                    if(j === allPermutations[i].length - 2) {
                        return true;
                    }
                }
            }
           return false;
        }`,
        code: function stringsRearrangement(inputArray) {
            //Create a helper function to find all permutations of these strings.
            const createPermutations = inputArray => {
                let permutations = [];
                
                const permutation = (inputArr, m = []) => {
                    //When this is first called, 'm' is an empty array.
                    if(inputArr.length === 0) {
                        //Once the array is empty, we know we are ready to 'unwind' recursion.
                        permutations.push(m);
                    } else {
                        //Loop through every string element in the array.
                        for(let i = 0; i < inputArr.length; i++) {
                            //Take a copy of the current array
                            let currentArray = inputArr.slice();
                            //Take out an element from the array and save it.
                            let nextElement = currentArray.splice(i, 1);
                            permutation(currentArray.slice(), m.concat(nextElement));
                        }
                    }
                }
                permutation(inputArray);
                
                return permutations;
            };
            
            let allPermutations = createPermutations(inputArray);
            
            //Go through each permutation and check if any change by exactly one character each iteration
            
            for(let i = 0; i < allPermutations.length; i++) {
                //Loop through every string in this permutation
                for(let j = 0; j < allPermutations[i].length - 1; j++) {
                    //Compare the characters in the string at this index (j) to the characters in the string at the next index (j + 1), and keep track of how many differences there are.
                    let differences = 0;
                    for(let k = 0; k < allPermutations[i][j].length; k++) {
                        if(allPermutations[i][j][k] !== allPermutations[i][j + 1][k]) {
                            differences++;
                        }
                    }
                    console.log(differences);
                    if(differences !== 1) {
                        break;
                    } 
                    
                    //If we have reached the end of this permutation with only one difference between each string, we found a working set.
                    if(j === allPermutations[i].length - 2) {
                        return true;
                    }
                }
            }
           return false;
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Equal Length Strings (Form of this,that,more...)",
                    type: "StringArray"
                }
            ]
        }
    },
    sudoku: {
        name: 'sudoku',
        instructions: `Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with digits so that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid contains all of the digits from 1 to 9.

        This algorithm should check if the given grid of numbers represents a correct solution to Sudoku.`,
        codeOutput: 
        `function sudoku(grid) {
            let valid = true;
            //Test the rows.
            for(let i = 0; i < grid.length; i++) {
                let existingNums = {};
                for(let j = 0; j < grid[i].length; j++) {
                    //If we find a repeating number in this row, return false.
                    if(existingNums[grid[i][j]]) {
                        valid = false;
                    }
                    existingNums[grid[i][j]] = true;
                }
            }
            //Test the columns
            for(let j = 0; j < grid.length; j++) {
                let existingNums = {};
                for(let i = 0; i < grid.length; i++) {
                    //If we find a repeating number in this column, return false;
                    if(existingNums[grid[i][j]]) {
                        valid = false;
                    }
                    existingNums[grid[i][j]] = true;
                }
            }
            //Test the squares
            for(let i = 0; i < grid.length; i += 3) {
                for(let j = 0; j < grid[i].length; j += 3) {
                    let existingNums = {};
                    //For each square, start iteration through the individual numbers
                    for(let i_prime = i; i_prime < i + 3; i_prime++) {
                        for(let j_prime = j; j_prime < j + 3; j_prime++) {
                            //If we find a repeating number in this column, return false;
                            if(existingNums[grid[i_prime][j_prime]]) {
                                valid = false;
                            }
                            existingNums[grid[i_prime][j_prime]] = true;
                        }
                    }
                }
            }
            
            return valid;
        }`,
        code: function sudoku(grid) {
            let valid = true;
            //Test the rows.
            for(let i = 0; i < grid.length; i++) {
                let existingNums = {};
                for(let j = 0; j < grid[i].length; j++) {
                    //If we find a repeating number in this row, return false.
                    if(existingNums[grid[i][j]]) {
                        valid = false;
                    }
                    existingNums[grid[i][j]] = true;
                }
            }
            //Test the columns
            for(let j = 0; j < grid.length; j++) {
                let existingNums = {};
                for(let i = 0; i < grid.length; i++) {
                    //If we find a repeating number in this column, return false;
                    if(existingNums[grid[i][j]]) {
                        valid = false;
                    }
                    existingNums[grid[i][j]] = true;
                }
            }
            //Test the squares
            for(let i = 0; i < grid.length; i += 3) {
                for(let j = 0; j < grid[i].length; j += 3) {
                    let existingNums = {};
                    //For each square, start iteration through the individual numbers
                    for(let i_prime = i; i_prime < i + 3; i_prime++) {
                        for(let j_prime = j; j_prime < j + 3; j_prime++) {
                            //If we find a repeating number in this column, return false;
                            if(existingNums[grid[i_prime][j_prime]]) {
                                valid = false;
                            }
                            existingNums[grid[i_prime][j_prime]] = true;
                        }
                    }
                }
            }
            
            return valid;
        },
        arguments: {
            descriptions: [
                {
                    text: "Sudoku Board Represented by Array of Integer Arrays (Example: [1,3,2,5,4,6,9,8,7], [4,6,5,8,7,9,3,2,1], [7,9,8,2,1,3,6,5,4], [9,2,1,4,3,5,8,7,6], [3,5,4,7,6,8,2,1,9], [6,8,7,1,9,2,5,4,3], [5,7,6,9,8,1,4,3,2], [2,4,3,6,5,7,1,9,8], [8,1,9,3,2,4,7,6,5])",
                    type: "NumberArrayArray"
                }
            ]
        }
    },
    sumUpNumbers: {
        name: 'sumUpNumbers',
        instructions: `CodeMaster has just returned from shopping. He scanned the check of the items he bought and gave the resulting string to Ratiorg to figure out the total number of purchased items. Since Ratiorg is a bot he is definitely going to automate it, so he needs a program that sums up all the numbers which appear in the given input.

        Help Ratiorg by writing a function that returns the sum of numbers that appear in the given inputString.`,
        codeOutput: 
        `function sumUpNumbers(inputString) {
            //Remove unwanted characters from the string so only spaces and numbers remain.
            let stringToTrim = inputString;
            for(let i = 0; i < inputString.length; i++) {
                if(!(inputString.charCodeAt(i) > 47 && inputString.charCodeAt(i) < 58)) {
                    stringToTrim = stringToTrim.replace(stringToTrim[i], " ")
                }
            }
            
            //Remove the spaces (non-numbers), parse strings into numbers, and return array of only prices.
            let parsedNumbers = stringToTrim.split(" ").filter(number => {
                if(!isNaN(number)) return parseInt(number) + 0;
            }).map(number => parseInt(number));
            
            //Go through each price (if the array contains any prices) and add to the total.
            let total = 0;
            if(parsedNumbers.length) {
                total = parsedNumbers.reduce((accumulator, current) => {
                    return accumulator += current;
                });
            }
            
            return total;
        }`,
        code: function sumUpNumbers(inputString) {
            //Remove unwanted characters from the string so only spaces and numbers remain.
            let stringToTrim = inputString;
            for(let i = 0; i < inputString.length; i++) {
                if(!(inputString.charCodeAt(i) > 47 && inputString.charCodeAt(i) < 58)) {
                    stringToTrim = stringToTrim.replace(stringToTrim[i], " ")
                }
            }
            
            //Remove the spaces (non-numbers), parse strings into numbers, and return array of only prices.
            let parsedNumbers = stringToTrim.split(" ").filter(number => {
                if(!isNaN(number)) return parseInt(number) + 0;
            }).map(number => parseInt(number));
            
            //Go through each price (if the array contains any prices) and add to the total.
            let total = 0;
            if(parsedNumbers.length) {
                total = parsedNumbers.reduce((accumulator, current) => {
                    return accumulator += current;
                });
            }
            
            return total;
        },
        arguments: {
            descriptions: [
                {
                    text: "String With Numbers and Other Characters",
                    type: "String"
                }
            ]
        }
    },
    swapAdjacentBits: {
        name: 'swapAdjacentBits',
        instructions: `You're given an arbitrary 32-bit integer n. Take its binary representation, split bits into it in pairs (bit number 0 and 1, bit number 2 and 3, etc.) and swap bits in each pair. Then return the result as a decimal number.`,
        codeOutput: 
        `function swapAdjacentBits(n) {
            //Check edge cases
            return n === 0 ?
            0 :
            n === 1 ? 
            2 :
            //If this number in binary form has an odd number of digits, add a 0 in front to make pairs.
            n.toString(2).length % 2 === 1 ?
            Number(
              ("0" + n.toString(2))
              //Split into individual arrays.
              .split("")
              //Swap the pairs
              .map((thisBit, index, array) => {
                  if(index % 2 === 0 && index < array.length) {
                      return [array[index], array[index + 1]] = [array[index + 1], array[index]];
                  }
              })
              //Get rid of null values
              .filter(thisElement => {
                  if(Array.isArray(thisElement)) {
                      let digits = "";
                      thisElement.forEach(digit => {
                          digits += digit;
                      });
                      return digits;
                  } 
              })
              //Put the pairs back together
              .map(pair => {
                  let thisPair = "";
                  pair.forEach(digit => {
                      thisPair += digit;
                  });
                  return thisPair;
              })
              //Make into a new array that is reversed and each element a single digit
              .join("")
              .split("")
              .reverse()
              //Add up each power of two value to get output after swap.
              .reduce((currentTotal, currentDigit, index, array) => {
                  currentTotal = parseInt(currentTotal);
                  let currentValue = Number(currentDigit);
                  return currentValue === 1 ? parseInt(currentTotal += (2 ** (index))) : parseInt(currentTotal);
              })
            )
            //If the binary form has an even number of digits, do the same but without the extra 0
              :
            Number(
              n.toString(2)
              .split("")
              .map((thisBit, index, array) => {
                  if(index % 2 === 0 && index < array.length) {
                      return [array[index], array[index + 1]] = [array[index + 1], array[index]];
                  }
              })
              .filter(thisElement => {
                  if(Array.isArray(thisElement)) {
                      let digits = "";
                      thisElement.forEach(digit => {
                          digits += digit;
                      });
                      return digits;
                  } 
              })
              .map(pair => {
                  let thisPair = "";
                  pair.forEach(digit => {
                      thisPair += digit;
                  });
                  return thisPair;
              })
              .join("")
              .split("")
              .reverse()
              .reduce((currentTotal, currentDigit, index, array) => {
                  currentTotal = parseInt(currentTotal);
                  console.log(currentTotal);
                  let currentValue = Number(currentDigit);
                  //console.log(array[index - 1]);
                  return currentValue === 1 ? parseInt(currentTotal += (2 ** (index))) : parseInt(currentTotal);
              })
            );
        }`,
        code: function swapAdjacentBits(n) {
            //Check edge cases
            return n === 0 ?
            0 :
            n === 1 ? 
            2 :
            //If this number in binary form has an odd number of digits, add a 0 in front to make pairs.
            n.toString(2).length % 2 === 1 ?
            Number(
              ("0" + n.toString(2))
              //Split into individual arrays.
              .split("")
              //Swap the pairs
              .map((thisBit, index, array) => {
                  if(index % 2 === 0 && index < array.length) {
                      return [array[index], array[index + 1]] = [array[index + 1], array[index]];
                  }
              })
              //Get rid of null values
              .filter(thisElement => {
                  if(Array.isArray(thisElement)) {
                      let digits = "";
                      thisElement.forEach(digit => {
                          digits += digit;
                      });
                      return digits;
                  } 
              })
              //Put the pairs back together
              .map(pair => {
                  let thisPair = "";
                  pair.forEach(digit => {
                      thisPair += digit;
                  });
                  return thisPair;
              })
              //Make into a new array that is reversed and each element a single digit
              .join("")
              .split("")
              .reverse()
              //Add up each power of two value to get output after swap.
              .reduce((currentTotal, currentDigit, index, array) => {
                  currentTotal = parseInt(currentTotal);
                  let currentValue = Number(currentDigit);
                  return currentValue === 1 ? parseInt(currentTotal += (2 ** (index))) : parseInt(currentTotal);
              })
            )
            //If the binary form has an even number of digits, do the same but without the extra 0
              :
            Number(
              n.toString(2)
              .split("")
              .map((thisBit, index, array) => {
                  if(index % 2 === 0 && index < array.length) {
                      return [array[index], array[index + 1]] = [array[index + 1], array[index]];
                  }
              })
              .filter(thisElement => {
                  if(Array.isArray(thisElement)) {
                      let digits = "";
                      thisElement.forEach(digit => {
                          digits += digit;
                      });
                      return digits;
                  } 
              })
              .map(pair => {
                  let thisPair = "";
                  pair.forEach(digit => {
                      thisPair += digit;
                  });
                  return thisPair;
              })
              .join("")
              .split("")
              .reverse()
              .reduce((currentTotal, currentDigit, index, array) => {
                  currentTotal = parseInt(currentTotal);
                  console.log(currentTotal);
                  let currentValue = Number(currentDigit);
                  //console.log(array[index - 1]);
                  return currentValue === 1 ? parseInt(currentTotal += (2 ** (index))) : parseInt(currentTotal);
              })
            );
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
    swapAdjacentWords: {
        name: 'swapAdjacentWords',
        instructions: `Implement the missing code, denoted by ellipses. You may not modify the pre-existing code.
        You are given a string consisting of words separated by whitespace characters, where the words consist only of English letters. Your task is to swap pairs of consecutive words and return the result.`,
        codeOutput: 
        `function swapAdjacentWords(s) {
            //Capture the entire string with .*
            return s.replace(/.*/g, (string) => {
                //Split the words into an array.
                let words = string.split(" ");
                //Loop through each pair available (igornes any odd final word).
                for(let i = 0; i < words.length - 1; i += 2) {
                    //Replace this element in the current pair with its next.
                    [words[i], words[i + 1]] = [words[i + 1], words[i]];
                }
                //return the sentence joined together after swaps.
                return words.join(" ");
            });
        }`,
        code: function swapAdjacentWords(s) {
            //Capture the entire string with .*
            return s.replace(/.*/g, (string) => {
                //Split the words into an array.
                let words = string.split(" ");
                //Loop through each pair available (igornes any odd final word).
                for(let i = 0; i < words.length - 1; i += 2) {
                    //Replace this element in the current pair with its next.
                    [words[i], words[i + 1]] = [words[i + 1], words[i]];
                }
                //return the sentence joined together after swaps.
                return words.join(" ");
            });
        },
        arguments: {
            descriptions: [
                {
                    text: "String With Spaces",
                    type: "String"
                }
            ]
        }
    },
    swapDiagonals: {
        name: 'swapDiagonals',
        instructions: `The longest diagonals of a square matrix are defined as follows:

        the first longest diagonal goes from the top left corner to the bottom right one;
        the second longest diagonal goes from the top right corner to the bottom left one.
        Given a square matrix, your task is to swap its longest diagonals by exchanging their elements at the corresponding positions.`,
        codeOutput: 
        `function swapDiagonals(matrix) {
            matrix.forEach((row, index) => {
                //Traverse each row, swapping corresponding elements until diagonals are reversed.
                [row[0 + index], row[matrix.length - 1 - index]] = [row[matrix.length - 1 - index], row[0 + index]];
            });
            return matrix;
        }`,
        code: function swapDiagonals(matrix) {
            matrix.forEach((row, index) => {
                //Traverse each row, swapping corresponding elements until diagonals are reversed.
                [row[0 + index], row[matrix.length - 1 - index]] = [row[matrix.length - 1 - index], row[0 + index]];
            });
            return matrix;
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Equal-Length Integer Arrays (Example: [1,2,3], [4,5,6], [7,8,9])",
                    type: "NumberArrayArray"
                }
            ]
        }
    },
    switchLights: {
        name: 'switchLights',
        instructions: `N candles are placed in a row, some of them are initially lit. For each candle from the 1st to the Nth the following algorithm is applied: if the observed candle is lit then states of this candle and all candles before it are changed to the opposite. Which candles will remain lit after applying the algorithm to all candles in the order they are placed in the line?`,
        codeOutput: 
        `function switchLights(a) {
            for(let i = 0; i < a.length; i++) {
                //If this element is lit(1), loop through all elements up to this point and change to opposite.
                if(a[i] === 1) {
                    for(let j = 0; j <= i; j++) {
                        a[j] = a[j] === 1 ? 0 : 1;
                    }
                }
            }
            return a;
        }`,
        code: function switchLights(a) {
            for(let i = 0; i < a.length; i++) {
                //If this element is lit(1), loop through all elements up to this point and change to opposite.
                if(a[i] === 1) {
                    for(let j = 0; j <= i; j++) {
                        a[j] = a[j] === 1 ? 0 : 1;
                    }
                }
            }
            return a;
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Integers With 1s and 0s (Example: 1,0,1,0,1)",
                    type: "NumberArray"
                }
            ]
        }
    }
};

export default challenges_s;

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