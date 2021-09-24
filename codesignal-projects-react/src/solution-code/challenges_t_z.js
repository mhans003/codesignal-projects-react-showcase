//Include global BigInt (as comment) in order to prevent no-undef in this environment.
/* global BigInt */

const challenges_t_z = {
    isTandemRepeat: {
        instructions: `Determine whether the given string can be obtained by one concatenation of some string to itself.`,
        codeOutput: 
        `function isTandemRepeat(inputString) {
            let sub = "";
            //Up until half of the string is reached, see if the current substring concatenated to itself equals the input.
            for(let i = 0; i < inputString.length / 2; i++) {
                sub += inputString[i];
                if(sub + sub === inputString) return true;
            }
            return false;
        }`,
        code: function isTandemRepeat(inputString) {
            let sub = "";
            //Up until half of the string is reached, see if the current substring concatenated to itself equals the input.
            for(let i = 0; i < inputString.length / 2; i++) {
                sub += inputString[i];
                if(sub + sub === inputString) return true;
            }
            return false;
        },
        arguments: {
            descriptions: [
                {
                    text: "String Input",
                    type: "String"
                }
            ]
        }
    },
    tennisSet: {
        instructions: `In tennis, the winner of a set is based on how many games each player wins. The first player to win 6 games is declared the winner unless their opponent had already won 5 games, in which case the set continues until one of the players has won 7 games.

        Given two integers score1 and score2, your task is to determine if it is possible for a tennis set to be finished with a final score of score1 : score2.`,
        codeOutput: 
        `function tennisSet(score1, score2) {
            //If either score is over 7, we know this score is not possible.
            return score1 === 7 && score2 === 7 ?
            false :
            //If both scores are 0 or either is over 7, return false.
            score1 === 0 && score2 === 0 ?
            false :
            score1 > 7 || score2 > 7 ? 
            false : 
            //Otherwise, check if either score is 7.
            score1 === 7 || score2 === 7 ?
            //If so, make sure the other score is either 5 or 6.
            Math.abs(score1 - score2) >= 3 ? 
            //As long as the other score is 5 or 6, return true.
            false :
            true : 
            //If neither score is 7, see if one is 6.
            score1 === 6 || score2 === 6 ?
            //If so, make sure the other score is not 5.
            Math.abs(score1 - score2) < 2 ?
            //If the other score is 5, return false.
            false : 
            true :
            //If both scores are less than 6, there cannot be a winner.
            score1 < 6 && score2 < 6 ?
            false :
            true;
        }`,
        code: function tennisSet(score1, score2) {
            //If either score is over 7, we know this score is not possible.
            return score1 === 7 && score2 === 7 ?
            false :
            //If both scores are 0 or either is over 7, return false.
            score1 === 0 && score2 === 0 ?
            false :
            score1 > 7 || score2 > 7 ? 
            false : 
            //Otherwise, check if either score is 7.
            score1 === 7 || score2 === 7 ?
            //If so, make sure the other score is either 5 or 6.
            Math.abs(score1 - score2) >= 3 ? 
            //As long as the other score is 5 or 6, return true.
            false :
            true : 
            //If neither score is 7, see if one is 6.
            score1 === 6 || score2 === 6 ?
            //If so, make sure the other score is not 5.
            Math.abs(score1 - score2) < 2 ?
            //If the other score is 5, return false.
            false : 
            true :
            //If both scores are less than 6, there cannot be a winner.
            score1 < 6 && score2 < 6 ?
            false :
            true;
        },
        arguments: {
            descriptions: [
                {
                    text: "Integer score1",
                    type: "Number"
                },
                {
                    text: "Integer score2",
                    type: "Number"
                }
            ]
        }
    },
    threeSplit: {
        instructions: `You have a long strip of paper with integers written on it in a single line from left to right. You wish to cut the paper into exactly three pieces such that each piece contains at least one integer and the sum of the integers in each piece is the same. You cannot cut through a number, i.e. each initial number will unambiguously belong to one of the pieces after cutting. How many ways can you do it?

        It is guaranteed that the sum of all elements in the array is divisible by 3.`,
        codeOutput: 
        `function threeSplit(a) {
            //Get the total sum that each piece of the array should be.
            let sum = a.reduce((a,b) => a += b, 0) / 3;
            let combinations = 0;
            let firstPiece = 0;
            //Loop through each number in the array, starting at the first.
            for (let i = 0; i < a.length; i++) {
                //Incrementally add to the first piece.
                firstPiece += a[i];
                //If this current size of the first piece equals the correct sum, loop through the second piece for this iteration.
                if (firstPiece === sum) {
                    let secondPiece = 0;
                    //Loop through each number in the second piece.
                    for (let j = i + 1; j < a.length; j++) {
                        //Incrementally add to the second piece.
                        secondPiece += a[j];
                        //If this current size of the second piece equals the correct sum, we know we have reached a correct combination since the remainder must equal the other third. 
                        if (secondPiece === sum) {
                            //As long as this is not the last piece in the array, this is a working combination (there must be 3 pieces, not 2)
                            if (j < a.length - 1) {
                                combinations++;
                            }
                        }
                    }
                }
            }
            return combinations;
        }`,
        code: function threeSplit(a) {
            //Get the total sum that each piece of the array should be.
            let sum = a.reduce((a,b) => a += b, 0) / 3;
            let combinations = 0;
            let firstPiece = 0;
            //Loop through each number in the array, starting at the first.
            for (let i = 0; i < a.length; i++) {
                //Incrementally add to the first piece.
                firstPiece += a[i];
                //If this current size of the first piece equals the correct sum, loop through the second piece for this iteration.
                if (firstPiece === sum) {
                    let secondPiece = 0;
                    //Loop through each number in the second piece.
                    for (let j = i + 1; j < a.length; j++) {
                        //Incrementally add to the second piece.
                        secondPiece += a[j];
                        //If this current size of the second piece equals the correct sum, we know we have reached a correct combination since the remainder must equal the other third. 
                        if (secondPiece === sum) {
                            //As long as this is not the last piece in the array, this is a working combination (there must be 3 pieces, not 2)
                            if (j < a.length - 1) {
                                combinations++;
                            }
                        }
                    }
                }
            }
            return combinations;
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Integers (Sum of all elements must be divisible by 3; Example: 7,8,2,25,-9,12,12)",
                    type: "NumberArray"
                }
            ]
        }
    },
    timedReading: {
        instructions: `Timed Reading is an educational tool used in many schools to improve and advance reading skills. A young elementary student has just finished his very first timed reading exercise. Unfortunately he's not a very good reader yet, so whenever he encountered a word longer than maxLength, he simply skipped it and read on.

        Help the teacher figure out how many words the boy has read by calculating the number of words in the text he has read, no longer than maxLength.
        Formally, a word is a substring consisting of English letters, such that characters to the left of the leftmost letter and to the right of the rightmost letter are not letters.`,
        codeOutput: 
        `function timedReading(maxLength, text) {
            let textStripped = "";
            for(let i = 0; i < text.length; i++) {
                //Add this character to the stripped version if it is a letter or space.
                if(text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90 ||
                   text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122 ||
                   text.charCodeAt(i) === 32) {
                       textStripped += text[i];
                   }
            }
            //Split the stripped text into individuals words, filter out the longer ones, and count the number of remaining words.
            return textStripped.split(" ").filter(word => word.length <= maxLength && word.length > 0).length;
        }`,
        code: function timedReading(maxLength, text) {
            let textStripped = "";
            for(let i = 0; i < text.length; i++) {
                //Add this character to the stripped version if it is a letter or space.
                if(text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90 ||
                   text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122 ||
                   text.charCodeAt(i) === 32) {
                       textStripped += text[i];
                   }
            }
            //Split the stripped text into individuals words, filter out the longer ones, and count the number of remaining words.
            return textStripped.split(" ").filter(word => word.length <= maxLength && word.length > 0).length;
        },
        arguments: {
            descriptions: [
                {
                    text: "Integer maxLength",
                    type: "Number"
                },
                {
                    text: "Input String",
                    type: "String"
                }
            ]
        }
    }
};

export default challenges_t_z;

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