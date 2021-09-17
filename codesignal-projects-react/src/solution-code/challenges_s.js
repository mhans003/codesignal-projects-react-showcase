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