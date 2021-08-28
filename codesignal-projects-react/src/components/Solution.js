//This component receives as props the object code for whatever challenge is selected

//This component will contain the code (placed on Solutions page) that will then hold two child components:
//SolutionCodeDisplay - The actual source code displayed in a non-editable region
//SolutionCode - The function itself used to process output.
//SolutionTest - A form which passes a user's input to the function 
    //SolutionTest - Contains SolutionOutput


//Test solution(s) with an example
import challenges from '../solution-code/challenges';

const Solution = props => {

    return (
        <>
            {
                props.challengeName ? 
                <div>
                    <p>{challenges[`${props.challengeName}`].code([1,2,3,4])}</p>
                    <code>{challenges[`${props.challengeName}`].codeOutput}</code>
                    <p>{challenges[`${props.challengeName}`].instructions}</p>
                </div>
                : null
            }
        </>
    );
};

export default Solution;