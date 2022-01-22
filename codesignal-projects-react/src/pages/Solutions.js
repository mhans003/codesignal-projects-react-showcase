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
            <div className="container mt-5">
                <div className="form-group">
                    <label for="select-challenge" className="field-heading">Select Challenge:</label>
                    <select className="form-control form-control-lg dropdown-items" id="select-challenge" onChange={e => handleChallengeChange(e)} ref={challengeDropdown}>
                        <option selected>Select a Challenge</option>
                        <option value="absvaluesumminimization">Abs Value Sum Minimization</option>
                        <option value="adanumber">Ada Number</option>
                        <option value="addBinary">Add Binary</option>
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
                        <option value="canConstruct">Can Construct</option>
                        <option value="candies">Candies</option>
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
                        <option value="climbStairs">Climb Stairs</option>
                        <option value="combs">Combs</option>
                        <option value="comfortableNumbers">Comfortable Numbers</option>
                        <option value="commonCharacterCount">Common Character Count</option>
                        <option value="concatenateArrays">Concatenate Arrays</option>
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
                        <option value="decipher">Decipher</option>
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
                        <option value="hammingWeight">Hamming Weight</option>
                        <option value="higherVersion">Higher Version</option>
                        <option value="holiday">Holiday</option>
                        <option value="houseNumbersSum">House Numbers Sum</option>
                        <option value="houseOfCats">House of Cats</option>
                        <option value="htmlEndTagByStartTag">HTML End Tag By Start Tag</option>
                        <option value="increaseNumberRoundness">Increase Number Roundness</option>
                        <option value="insertionSortList">Insertion Sort List</option>
                        <option value="integerToStringOfFixedWidth">Integer to String of Fixed Width</option>
                        <option value="isBeautifulString">Is Beautiful String</option>
                        <option value="isCaseInsensitivePalindrome">Is Case Insensitive Palindrome</option>
                        <option value="isDigit">Is Digit</option>
                        <option value="isInfiniteProcess">Is Infinite Process</option>
                        <option value="isInformationConsistent">Is Information Consistent</option>
                        <option value="isIPv4Address">Is IPv4 Address</option>
                        <option value="isLucky">Is Lucky</option>
                        <option value="isMAC48Address">Is MAC48 Address</option>
                        <option value="isPalindrome">Is Palindrome</option>
                        <option value="isPerfectSquare">Is Perfect Square</option>
                        <option value="isPower">Is Power</option>
                        <option value="isSentenceCorrect">Is Sentence Correct</option>
                        <option value="isSmooth">Is Smooth</option>
                        <option value="isSubsequence">Is Subsequence</option>
                        <option value="isSubstitutionCipher">Is Substitution Cipher</option>
                        <option value="isSumOfConsecutive2">Is Sum of Consecutive 2</option>
                        <option value="isUnstablePair">Is Unstable Pair</option>
                        <option value="isValidParentheses">Is Valid Parentheses</option>
                        <option value="killKthBit">Kill Kth Bit</option>
                        <option value="knapsackLight">Knapsack Light</option>
                        <option value="largestNumber">Largest Number</option>
                        <option value="lateRide">Late Ride</option>
                        <option value="leastFactorial">Least Factorial</option>
                        <option value="lengthOfLastWord">Length of Last Word</option>
                        <option value="lineEncoding">Line Encoding</option>
                        <option value="lineUp">Line Up</option>
                        <option value="longestCommonPrefix">Longest Common Prefix</option>
                        <option value="longestDigitsPrefix">Longest Digits Prefix</option>
                        <option value="longestWord">Longest Word</option>
                        <option value="magicalWell">Magical Well</option>
                        <option value="majorityElement">Majority Element</option>
                        <option value="makeArrayConsecutive2">Make Array Consecutive 2</option>
                        <option value="matrixElementsSum">Matrix Elements Sum</option>
                        <option value="arrayMaxConsecutiveSum">Array Max Consecutive Sum</option>
                        <option value="maximumSum">Maximum Sum</option>
                        <option value="maxMultiple">Max Multiple</option>
                        <option value="messageFromBinaryCode">Message From Binary Code</option>
                        <option value="metroCard">Metro Card</option>
                        <option value="minesweeper">Minesweeper</option>
                        <option value="minimalNumberOfCoins">Minimal Number of Coins</option>
                        <option value="mirrorBits">Mirror Bits</option>
                        <option value="missedClasses">Missed Classes</option>
                        <option value="mostFrequentDigitSum">Most Frequent Digit Sum</option>
                        <option value="newNumeralSystem">New Numeral System</option>
                        <option value="newYearCelebrations">New Year Celebrations</option>
                        <option value="noIfsNoButs">No Ifs No Buts</option>
                        <option value="nthNumber">Nth Number</option>
                        <option value="numberOfClans">Number of Clans</option>
                        <option value="numbersGrouping">Numbers Grouping</option>
                        <option value="pagesNumberingWithInk">Pages Numbering With Ink</option>
                        <option value="pairOfShoes">Pair of Shoes</option>
                        <option value="palindromeRearranging">Palindrome Rearranging</option>
                        <option value="pascalsTriangle">Pascals Triangle</option>
                        <option value="pascalsTriangle2">Pascals Triangle 2</option>
                        <option value="phoneCall">Phone Call</option>
                        <option value="plusOne">Plus One</option>
                        <option value="polygonPerimeter">Polygon Perimeter</option>
                        <option value="properNounCorrection">Proper Noun Correction</option>
                        <option value="rangeBitCount">Range Bit Count</option>
                        <option value="reachNextLevel">Reach Next Level</option>
                        <option value="rectangleRotation">Rectangle Rotation</option>
                        <option value="reflectString">Reflect String</option>
                        <option value="regularMonths">Regular Months</option>
                        <option value="removeArrayPart">Remove Array Part</option>
                        <option value="removeDuplicates">Remove Duplicates</option>
                        <option value="replaceAllDigitsRegExp">Replace All Digits RegExp</option>
                        <option value="replaceMiddle">Replace Middle</option>
                        <option value="reverseInParentheses">Reverse In Parentheses</option>
                        <option value="reverseOnDiagonals">Reverse on Diagonals</option>
                        <option value="rounders">Rounders</option>
                        <option value="rowsRearranging">Rows Rearranging</option>
                        <option value="runnersMeetings">Runners Meetings</option>
                        <option value="seatsInTheater">Seats in Theater</option>
                        <option value="secondRightmostZeroBit">Second Right-Most Zero Bit</option>
                        <option value="shapeArea">Shape Area</option>
                        <option value="shuffledArray">Shuffled Array</option>
                        <option value="sortByHeight">Sort by Height</option>
                        <option value="sortByLength">Sort by Length</option>
                        <option value="spiralNumbers">Spiral Numbers</option>
                        <option value="squareDigitsSequence">Square Digits Sequence</option>
                        <option value="starRotation">Star Rotation</option>
                        <option value="stolenLunch">Stolen Lunch</option>
                        <option value="stringsConstruction">Strings Construction</option>
                        <option value="stringsCrossover">Strings Crossover</option>
                        <option value="stringsRearrangement">Strings Rearrangement</option>
                        <option value="sudoku">Sudoku</option>
                        <option value="sumUpNumbers">Sum Up Numbers</option>
                        <option value="swapAdjacentBits">Swap Adjacent Bits</option>
                        <option value="swapAdjacentWords">Swap Adjacent Words</option>
                        <option value="swapDiagonals">Swap Diagonals</option>
                        <option value="switchLights">Switch Lights</option>
                        <option value="isTandemRepeat">Is Tandem Repeat</option>
                        <option value="tennisSet">Tennis Set</option>
                        <option value="threeSplit">Three Split</option>
                        <option value="timedReading">Timed Reading</option>
                        <option value="uniqueDigitProducts">Unique Digit Products</option>
                        <option value="validTime">Valid Time</option>
                        <option value="variableName">Variable Name</option>
                        <option value="videoPart">Video Part</option>
                        <option value="volleyballPositions">Volleyball Positions</option>
                        <option value="weakNumbers">Weak Numbers</option>
                        <option value="whoseTurn">Whose Turn</option>
                        <option value="willYou">Will You</option>
                    </select>
                </div>
                <Solution challengeName={challengeName}/>
            </div>
        </>
    );
};

export default Solutions;