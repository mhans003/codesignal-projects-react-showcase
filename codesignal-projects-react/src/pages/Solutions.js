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
                <option value="almostIncreasingSequence">Almost Increasing Sequence</option>
                <option value="alphabeticShift">Alphabetic Shift</option>
                <option value="alphabetSubsequence">Alphabet Subsequence</option>
                <option value="alphanumericLess">Alphanumeric Less</option>
                <option value="alternatingSums">Alternating Sums</option>
                <option value="appleBoxes">Apple Boxes</option>
                <option value="areEquallyStrong">Are Equally Strong</option>
                <option value="areIsomorphic">Are Isomorphic</option>
                <option value="areSimilar">Are Similar</option>
                <option value="areSimilar2">Are Similar - Version 2</option>
                <option value="arithmeticExpression">Arithmetic Expression</option>
                <option value="arrayChange">Array Change</option>
                <option value="concatenateArrays">Concatenate Arrays</option>
                <option value="arrayConversion">Array Conversion</option>
                <option value="arrayMaximalAdjacentDifference">Array Maximal Adjacent Difference</option>
                <option value="arrayPacking">Array Packing</option>
                <option value="arrayPreviousLess">Array Previous Less</option>
                <option value="arrayReplace">Array Replace</option>
                <option value="avoidObstacles">Avoid Obstacles</option>
                <option value="beautifulText">Beautiful Text</option>
                <option value="bishopAndPawn">Bishop and Pawn</option>
                <option value="bishopDiagonal">Bishop Diagonal</option>
                <option value="boxBlur">Box Blur</option>
                <option value="boxesPacking">Boxes Packing</option>
                <option value="buildPalindrome">Build Palindrome</option>
                <option value="candles">Candles</option>
                <option value="characterParity">Character Parity</option>
                <option value="checkPalindrome">Check Palindrome</option>
                <option value="chessBishopDream">Chess Bishop Dream</option>
                <option value="chessBoardCellColor">Chess Board Cell Color</option>
                <option value="chessKnight">Chess Knight</option>
                <option value="chessTriangle">Chess Triangle</option>
                <option value="christmasTree">Christmas Tree</option>
                <option value="cipher26">Cipher 26</option>
                <option value="circleOfNumbers">Circle of Numbers</option>
                <option value="combs">Combs</option>
                <option value="comfortableNumbers">Comfortable Numbers</option>
                <option value="commonCharacterCount">Common Character Count</option>
                <option value="constructSquare">Construct Square</option>
                <option value="contoursShifting">Contours Shifting</option>
                <option value="correctNonogram">Correct Nonogram</option>
                <option value="countSumOfTwoRepresentations2">Count Sum of Two Representations 2</option>
                <option value="createAnagram">Create Anagram</option>
                <option value="crossingSum">Crossing Sum</option>
                <option value="crosswordFormation">Crossword Formation</option>
                <option value="curiousClock">Curious Clock</option>
                <option value="cyclicString">Cyclic String</option>
                <option value="dayOfWeek">Day of Week</option>
                <option value="deleteDigit">Delete Digit</option>
                <option value="depositProfit">Deposit Profit</option>
                <option value="differentRightmostBit">Different Right-Most Bit</option>
                <option value="differentSquares">Different Squares</option>
                <option value="differentSymbolsNaive">Different Symbols Naive</option>
                <option value="digitDegree">Digit Degree</option>
                <option value="digitDifferenceSort">Digit Difference Sort</option>
                <option value="digitsProduct">Digits Product</option>
                <option value="drawRectangle">Draw Rectangle</option>
            </select>
            <Solution challengeName={challengeName}/>
        </>
    );
};

export default Solutions;