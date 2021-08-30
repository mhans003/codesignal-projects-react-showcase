import Nav from '../components/Nav';
import Solution from '../components/Solution';
import { useState, useRef } from 'react';

//This page will allow the user to select from a dropdown of solutions, which is passed down into the Solution component.

const Solutions = () => {
    const [challengeName, setChallengeName] = useState("");
    const challengeDropdown = useRef();
    const handleChallengeChange = e => {
        console.log(e.value);
        setChallengeName(challengeDropdown.current.value);
    }

    return (
        <>
            <Nav/>
            <select onChange={e => handleChallengeChange(e)} ref={challengeDropdown}>
                <option value="candies">Candies</option>
                <option value="absvaluesumminimization">Abs Value Sum Minimization</option>
                <option value="adanumber">Ada Number</option>
                <option value="addborder">Add Border</option>
                <option value="additionWithoutCarrying">Addition Without Carrying</option>
                <option value="adjacentElementsProduct">Adjacent Elements Product</option>
                <option value="allLongestStrings">All Longest Strings</option>
            </select>
            <Solution challengeName={challengeName}/>
        </>
    );
};

export default Solutions;