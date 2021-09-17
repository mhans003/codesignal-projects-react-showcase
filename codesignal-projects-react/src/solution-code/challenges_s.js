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