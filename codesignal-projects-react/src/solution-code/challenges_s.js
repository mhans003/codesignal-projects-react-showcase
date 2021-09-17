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