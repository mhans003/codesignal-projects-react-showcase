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