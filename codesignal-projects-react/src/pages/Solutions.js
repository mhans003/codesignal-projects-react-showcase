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
                <option value="electionsWinners">Elections Winners</option>
                <option value="equalPairOfBits">Equal Pair of Bits</option>
                <option value="evenDigitsOnly">Even Digits Only</option>
                <option value="extractEachKth">Extract Each Kth</option>
                <option value="extractMatrixColumn">Extract Matrix Column</option>
                <option value="extraNumber">Extra Number</option>
                <option value="eyeRhyme">Eye Rhyme</option>
                <option value="fileNaming">File Naming</option>
                <option value="findEmailDomain">Find Email Domain</option>
                <option value="firstDigit">First Digit</option>
                <option value="firstReverseTry">First Reverse Try</option>
                <option value="gravitation">Gravitation</option>
                <option value="growingPlant">Growing Plant</option>
                <option value="holiday">Holiday</option>
                <option value="houseNumbersSum">House Numbers Sum</option>
                <option value="houseOfCats">House of Cats</option>
                <option value="htmlEndTagByStartTag">HTML End Tag By Start Tag</option>
                <option value="increaseNumberRoundness">Increase Number Roundness</option>
                <option value="integerToStringOfFixedWidth">Integer to String of Fixed Width</option>
                <option value="isBeautifulString">Is Beautiful String</option>
                <option value="isCaseInsensitivePalindrome">Is Case Insensitive Palindrome</option>
                <option value="isDigit">Is Digit</option>
                <option value="isInfiniteProcess">Is Infinite Process</option>
                <option value="isInformationConsistent">Is Information Consistent</option>
                <option value="isIPv4Address">Is IPv4 Address</option>
                <option value="isLucky">Is Lucky</option>
                <option value="isMAC48Address">Is MAC48 Address</option>
                <option value="isPower">Is Power</option>
                <option value="isSentenceCorrect">Is Sentence Correct</option>
                <option value="isSmooth">Is Smooth</option>
                <option value="isSubsequence">Is Subsequence</option>
                <option value="isSubstitutionCipher">Is Substitution Cipher</option>
                <option value="isSumOfConsecutive2">Is Sum of Consecutive 2</option>
                <option value="isUnstablePair">Is Unstable Pair</option>
                <option value="killKthBit">Kill Kth Bit</option>
                <option value="knapsackLight">Knapsack Light</option>
                <option value="largestNumber">Largest Number</option>
                <option value="lateRide">Late Ride</option>
                <option value="leastFactorial">Least Factorial</option>
                <option value="lineEncoding">Line Encoding</option>
                <option value="lineUp">Line Up</option>
                <option value="longestDigitsPrefix">Longest Digits Prefix</option>
                <option value="longestWord">Longest Word</option>
                <option value="magicalWell">Magical Well</option>
                <option value="makeArrayConsecutive2">Make Array Consecutive 2</option>
                <option value="matrixElementsSum">Matrix Elements Sum</option>
                <option value="arrayMaxConsecutiveSum">Array Max Consecutive Sum</option>
                <option value="maximumSum">Maximum Sum</option>
                <option value="maxMultiple">Max Multiple</option>
                <option value="messageFromBinaryCode">Message From Binary Code</option>
                <option value="metroCard">Metro Card</option>
                <option value="minesweeper">Minesweeper</option>
                <option value="minimalNumberOfCoins">Minimal Number of Coins</option>
            </select>
            <Solution challengeName={challengeName}/>
        </>
    );
};

export default Solutions;