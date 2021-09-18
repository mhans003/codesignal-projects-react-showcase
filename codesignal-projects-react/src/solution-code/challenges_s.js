//Include global BigInt (as comment) in order to prevent no-undef in this environment.
/* global BigInt */

const challenges_s = {
    seatsInTheater: {
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
    sortByHeight: {
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
    }
};

export default challenges_s;

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
BooleanArrayArray

*/