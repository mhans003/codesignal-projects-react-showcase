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