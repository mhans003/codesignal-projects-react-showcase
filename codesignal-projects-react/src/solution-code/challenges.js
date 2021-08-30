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

*/

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
                    type: "string"
                }
            ]
        }
    }
};

export default challenges;