//Include global BigInt (as comment) in order to prevent no-undef in this environment.
/* global BigInt */

const challenges_o_r = {
    pagesNumberingWithInk: {
        instructions: `You work in a company that prints and publishes books. You are responsible for designing the page numbering mechanism in the printer. You know how many digits a printer can print with the leftover ink. Now you want to write a function to determine what the last page of the book is that you can number given the current page and numberOfDigits left. A page is considered numbered if it has the full number printed on it (e.g. if we are working with page 102 but have ink only for two digits then this page will not be considered numbered).

        It's guaranteed that you can number the current page, and that you can't number the last one in the book.`,
        codeOutput: 
        `function pagesNumberingWithInk(current, numberOfDigits) {
            //Keep track of digits left and the current page.
            let digitsLeft = numberOfDigits;
            let currentPage = current;
            //As long as we have enough digits left, remove the necessary number of digits and go to the next page.
            while(digitsLeft >= String(currentPage).length) {
                digitsLeft -= String(currentPage).length;
                currentPage++;
            }
            //Since there will be an extra page accounted for, decrement by 1 before returning each time.
            return --currentPage;
        }`,
        code: function pagesNumberingWithInk(current, numberOfDigits) {
            //Keep track of digits left and the current page.
            let digitsLeft = numberOfDigits;
            let currentPage = current;
            //As long as we have enough digits left, remove the necessary number of digits and go to the next page.
            while(digitsLeft >= String(currentPage).length) {
                digitsLeft -= String(currentPage).length;
                currentPage++;
            }
            //Since there will be an extra page accounted for, decrement by 1 before returning each time.
            return --currentPage;
        },
        arguments: {
            descriptions: [
                {
                    text: "Integer (Current Page)",
                    type: "Number"
                },
                {
                    text: "Integer (Number of Digits Left)",
                    type: "Number"
                }
            ]
        }
    },
    pairOfShoes: {
        instructions: `Yesterday you found some shoes in the back of your closet. Each shoe is described by two values:

        type indicates if it's a left or a right shoe;
        size is the size of the shoe.
        Your task is to check whether it is possible to pair the shoes you found in such a way that each pair consists of a right and a left shoe of an equal size.`,
        codeOutput: 
        `function pairOfShoes(shoes) {
            //Store key/value maps of how many of each size there are as well as the 'total' in all the left/right fields([0])
            let uniqueVals = {};
            let shoeSides = {};
            //Going through each shoe, tally within total of this size and total for right/left
            shoes.forEach(shoe => {
                if(uniqueVals[shoe[1]]) {
                    uniqueVals[shoe[1]]++;
                    shoeSides[shoe[1]] += shoe[0];
                } else {
                    uniqueVals[shoe[1]] = 1;
                    shoeSides[shoe[1]] = shoe[0];
                }
            });
            //If the total number of shoes of each size divided by the total left/right count for the same size, then there is a pair for each shoe.
            for(let size in uniqueVals) {
                if(uniqueVals[size] / 2 !== shoeSides[size]) return false;
            }
            return true;
        }`,
        code: function pairOfShoes(shoes) {
            //Store key/value maps of how many of each size there are as well as the 'total' in all the left/right fields([0])
            let uniqueVals = {};
            let shoeSides = {};
            //Going through each shoe, tally within total of this size and total for right/left
            shoes.forEach(shoe => {
                if(uniqueVals[shoe[1]]) {
                    uniqueVals[shoe[1]]++;
                    shoeSides[shoe[1]] += shoe[0];
                } else {
                    uniqueVals[shoe[1]] = 1;
                    shoeSides[shoe[1]] = shoe[0];
                }
            });
            //If the total number of shoes of each size divided by the total left/right count for the same size, then there is a pair for each shoe.
            for(let size in uniqueVals) {
                if(uniqueVals[size] / 2 !== shoeSides[size]) return false;
            }
            return true;
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Integer Arrays; Left Element Is 0 or 1; Right Element Is Positive Integer (Form of [0,21], [1,23]...)",
                    type: "NumberArrayArray"
                }
            ]
        }
    },
    palindromeRearranging: {
        instructions: `Given a string, find out if its characters can be rearranged to form a palindrome.`,
        codeOutput: 
        `function palindromeRearranging(inputString) {
            //Create a character map in an object for the string characters.
            let charMap = {};
            for(let i = 0; i < inputString.length; i++) {
                !charMap[inputString[i]] ? charMap[inputString[i]] = 1 : charMap[inputString[i]]++;
            }
            
            //Check through each character in the map object. In order to be arranged into a palindrome, only one set of characters can be odd (the center letter).
            let oddsLeft = 1;
            for(let letter in charMap) {
                if(charMap[letter] % 2 !== 0) {
                    oddsLeft--;
                }
            }
            
            //If there is 0-1 odd set of characters, we can make it into a palindrome.
            if(oddsLeft > -1) return true;
            
            return false;
        }`,
        code: function palindromeRearranging(inputString) {
            //Create a character map in an object for the string characters.
            let charMap = {};
            for(let i = 0; i < inputString.length; i++) {
                !charMap[inputString[i]] ? charMap[inputString[i]] = 1 : charMap[inputString[i]]++;
            }
            
            //Check through each character in the map object. In order to be arranged into a palindrome, only one set of characters can be odd (the center letter).
            let oddsLeft = 1;
            for(let letter in charMap) {
                if(charMap[letter] % 2 !== 0) {
                    oddsLeft--;
                }
            }
            
            //If there is 0-1 odd set of characters, we can make it into a palindrome.
            if(oddsLeft > -1) return true;
            
            return false;
        },
        arguments: {
            descriptions: [
                {
                    text: "Input String",
                    type: "String"
                }
            ]
        }
    },
    phoneCall: {
        instructions: `Some phone usage rate may be described as follows:

        first minute of a call costs min1 cents,
        each minute from the 2nd up to 10th (inclusive) costs min2_10 cents
        each minute after 10th costs min11 cents.
        You have s cents on your account before the call. What is the duration of the longest call (in minutes rounded down to the nearest integer) you can have?`,
        codeOutput: 
        `function phoneCall(min1, min2_10, min11, s) {    
            let centsLeft = s;
            totalMinutes = 0;
            
            //Purchase first minute.
            if(centsLeft - min1 >= 0) {
                totalMinutes++;
                centsLeft -= min1;
            }
            //Purchase minutes 2-10.
            while(totalMinutes < 10 && centsLeft - min2_10 >= 0) {
                totalMinutes++;
                centsLeft -= min2_10;
            }
            //Purchase minutes past 10th.
            while(totalMinutes >= 10 && centsLeft - min11 >= 0) {
                totalMinutes++;
                centsLeft -= min11;
            }
            
            return totalMinutes;
        }`,
        code: function phoneCall(min1, min2_10, min11, s) {    
            let centsLeft = s;
            let totalMinutes = 0;
            
            //Purchase first minute.
            if(centsLeft - min1 >= 0) {
                totalMinutes++;
                centsLeft -= min1;
            }
            //Purchase minutes 2-10.
            while(totalMinutes < 10 && centsLeft - min2_10 >= 0) {
                totalMinutes++;
                centsLeft -= min2_10;
            }
            //Purchase minutes past 10th.
            while(totalMinutes >= 10 && centsLeft - min11 >= 0) {
                totalMinutes++;
                centsLeft -= min11;
            }
            
            return totalMinutes;
        },
        arguments: {
            descriptions: [
                {
                    text: "Integer (min1)",
                    type: "Number"
                },
                {
                    text: "Integer (min2_10)",
                    type: "Number"
                },
                {
                    text: "Integer (min11)",
                    type: "Number"
                },
                {
                    text: "Integer (s)",
                    type: "Number"
                }
            ]
        }
    },
    polygonPerimeter: {
        instructions: `You have a rectangular white board with some black cells. The black cells create a connected black figure, i.e. it is possible to get from any black cell to any other one through connected adjacent (sharing a common side) black cells.

        Find the perimeter of the black figure assuming that a single cell has unit length.
        
        It's guaranteed that there is at least one black cell on the table.`,
        codeOutput: 
        `function polygonPerimeter(matrix) {
            let perimeter = 0;
            //Loop through every square.
            matrix.forEach((row, rowIndex) => {
                row.forEach((square, squareIndex) => {
                    //If this value is true:
                    if(square) {
                        //Look to all sides. If that location is not a valid square, add to perimeter.
                        if(!row[squareIndex - 1]) perimeter++;
                        if(!row[squareIndex + 1]) perimeter++;
                        if(!matrix[rowIndex + 1] || !matrix[rowIndex + 1][squareIndex]) perimeter++;
                        if(!matrix[rowIndex - 1] || !matrix[rowIndex - 1][squareIndex]) perimeter++;
                    }
                });
            });
            return perimeter;
        }`,
        code: function polygonPerimeter(matrix) {
            let perimeter = 0;
            //Loop through every square.
            matrix.forEach((row, rowIndex) => {
                row.forEach((square, squareIndex) => {
                    //If this value is true:
                    if(square) {
                        //Look to all sides. If that location is not a valid square, add to perimeter.
                        if(!row[squareIndex - 1]) perimeter++;
                        if(!row[squareIndex + 1]) perimeter++;
                        if(!matrix[rowIndex + 1] || !matrix[rowIndex + 1][squareIndex]) perimeter++;
                        if(!matrix[rowIndex - 1] || !matrix[rowIndex - 1][squareIndex]) perimeter++;
                    }
                });
            });
            return perimeter;
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Boolean Arrays (Form of [false,true,true], [true,true,false]...)",
                    type: "BooleanArrayArray"
                }
            ]
        }
    },
    properNounCorrection: {
        instructions: `Proper nouns always begin with a capital letter, followed by small letters. Correct a given proper noun so that it fits this statement.`,
        codeOutput: 
        `function properNounCorrection(noun) {
            return noun[0].toUpperCase() + noun.slice(1).toLowerCase();
        }`,
        code: function properNounCorrection(noun) {
            return noun[0].toUpperCase() + noun.slice(1).toLowerCase();
        },
        arguments: {
            descriptions: [
                {
                    text: "Single Noun",
                    type: "String"
                }
            ]
        }
    },
    rangeBitCount: {
        instructions: `You are given two numbers a and b where 0 ≤ a ≤ b. Imagine you construct an array of all the integers from a to b inclusive. You need to count the number of 1s in the binary representations of all the numbers in the array.`,
        codeOutput: 
        `function rangeBitCount(a, b) {
            //Create the range of numbers in binary.
            let binary = [];
            for(let i = a; i <= b; i++) {
                binary.push(i.toString(2));
            }
            //Go through each binary representation and add up the number of "1"s.
            let total = 0;
            for(let i = 0; i < binary.length; i++) {
                let thisNumber = String(binary[i])
                for(let j = 0; j < binary[i].length; j++) {
                    if(thisNumber[j] === "1") total++;
                }
            }
            return total;
        }`,
        code: function rangeBitCount(a, b) {
            //Create the range of numbers in binary.
            let binary = [];
            for(let i = a; i <= b; i++) {
                binary.push(i.toString(2));
            }
            //Go through each binary representation and add up the number of "1"s.
            let total = 0;
            for(let i = 0; i < binary.length; i++) {
                let thisNumber = String(binary[i])
                for(let j = 0; j < binary[i].length; j++) {
                    if(thisNumber[j] === "1") total++;
                }
            }
            return total;
        },
        arguments: {
            descriptions: [
                {
                    text: "Non-Negative Integer a",
                    type: "Number"
                },
                {
                    text: "Non-Negative Integer b (Greater Than or Equal To a)",
                    type: "Number"
                }
            ]
        }
    }
};

export default challenges_o_r;

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