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