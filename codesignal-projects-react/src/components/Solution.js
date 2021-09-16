//This component receives as props the object code for whatever challenge is selected

//This component will contain the code (placed on Solutions page) that will then hold two child components:
//SolutionCodeDisplay - The actual source code displayed in a non-editable region
//SolutionCode - The function itself used to process output.
//SolutionTest - A form which passes a user's input to the function 
    //SolutionTest - Contains SolutionOutput

import { useRef } from 'react';

//Test solution(s) with an example
import challenges from '../solution-code/challenges';
import challenges_d_f from '../solution-code/challenges_d_f';
import challenges_g_j from '../solution-code/challenges_g_j';
import challenges_k_n from '../solution-code/challenges_k_n';
import challenges_o_r from '../solution-code/challenges_o_r';
import challenges_s from '../solution-code/challenges_s';

let allChallenges = {
    ...challenges, 
    ...challenges_d_f, 
    ...challenges_g_j, 
    ...challenges_k_n,
    ...challenges_o_r,
    ...challenges_s
};

const Solution = props => {
    //Create an empty array to hold references to dynamic inputs (created when a challenge is selected).
    const refs = useRef([]);

    //Create a reference to the output where a solution will be placed.
    const solutionOutput = useRef("");

    //Convert input to number.
    const convertToNumber = stringInput => {
        return Number(stringInput);
    }

    //Convert user input into an array of strings.
    const convertToStringArray = stringInput => {
        return stringInput.split(",");
    }

    //Convert user input into an array of integers.
    const convertToNumberArray = stringInput => {
        return stringInput.split(",").map(str => Number(str));
    }

    //Convert user input into an array of number arrays.
    const convertToArrayOfNumberArrays = stringInput => {
        return stringInput.split(", ").map(arrayString => {
            //Eliminate beginning and ending brackets.
            let strippedArrayString = arrayString.substr(1, arrayString.length - 2);
            //Extract the numbers from this sub-array.
            return strippedArrayString.split(",").map(arrayStringElement => {
                return Number(arrayStringElement);
            });
        });
    }

    //Convert user input into an array of (string) arrays.
    const convertToArrayOfArrays = stringInput => {
        return stringInput.split(", ").map(arrayString => {
            //Eliminate beginning and ending brackets.
            let strippedArrayString = arrayString.substr(1, arrayString.length - 2);
            //Extract the elements from this sub-array.
            return strippedArrayString.split(",").map(arrayStringElement => {
                return arrayStringElement;
            });
        });
    }

    //Convert user input into an array of boolean arrays.
    const convertToArrayOfBooleanArrays = stringInput => {
        return stringInput.split(", ").map(arrayString => {
            //Eliminate beginning and ending brackets.
            let strippedArrayString = arrayString.substr(1, arrayString.length - 2);
            //Extract the elements from this sub-array.
            return strippedArrayString.split(",").map(arrayStringElement => {
                if(arrayStringElement === "true") return true;
                return false;
            })
        })
    }

    //Generate output based on user test input.
    const generateOutput = () => {
        console.log("refs: " + refs.current.map(thisRef => thisRef.value))
        console.log("refs: " + refs.current.map(thisRef => thisRef.getAttribute("inputtype")))
        //Convert inputs to correct types.
        const args = refs.current.map(thisRef => {
            //Convert input to number.
            if(thisRef.getAttribute("inputtype") === "Number") {
                return convertToNumber(thisRef.value);
            }
            if(thisRef.getAttribute("inputtype") === "NumberArray") {
                return convertToNumberArray(thisRef.value);
            }
            if(thisRef.getAttribute("inputtype") === "StringArray") {
                return convertToStringArray(thisRef.value);
            }
            if(thisRef.getAttribute('inputtype') === "NumberArrayArray") {
                return convertToArrayOfNumberArrays(thisRef.value);
            }
            if(thisRef.getAttribute('inputtype') === "ArrayArray") {
                return convertToArrayOfArrays(thisRef.value);
            }
            if(thisRef.getAttribute('inputtype') === "BooleanArrayArray") {
                return convertToArrayOfBooleanArrays(thisRef.value);
            }
            //HERE, put other input conversion code (inlcuding arrays, etc.).
            //Otherwise, keep this as a string.
            return thisRef.value;
        });
        console.log(args);

        //Run function with user's input (converted to correct types).
        let output = allChallenges[`${props.challengeName}`].code(...args);

        //Output the solution to the page.
        console.log(output);
        solutionOutput.current.value = output;
        solutionOutput.current.innerHTML = output;
        console.log(solutionOutput.current);
    };

    return (
        <>
            {
                props.challengeName ? 
                <div>
                    <code>{allChallenges[`${props.challengeName}`].codeOutput}</code>
                    <p>{allChallenges[`${props.challengeName}`].instructions}</p>
                    {allChallenges[`${props.challengeName}`].arguments.descriptions.map((description, index) => {
                        return (
                            //Dynamically create input fields for the number of inputs for this challenge.
                            //This will create a reference to that input element so that we can capture a user's input test value.
                            <div key={index}>
                                <label>{description.text}</label>
                                <input 
                                    type="text" 
                                    inputtype={description.type}
                                    ref={el => (refs.current[index] = el)}
                                />        
                            </div>
                        );
                    })}
                    <button onClick={generateOutput}>Test</button>
                    <p ref={solutionOutput}></p>
                </div>
                : null
            }
        </>
    );
};

export default Solution;