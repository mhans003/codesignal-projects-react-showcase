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