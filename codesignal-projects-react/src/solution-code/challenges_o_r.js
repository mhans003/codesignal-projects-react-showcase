//Include global BigInt (as comment) in order to prevent no-undef in this environment.
/* global BigInt */

const challenges_o_r = {
    pagesNumberingWithInk: {
        name: 'pagesNumberingWithInk',
        instructions: `You work in a company that prints and publishes books. You are responsible for designing the page numbering mechanism in the printer. You know how many digits a printer can print with the leftover ink. Now you want to write a function to determine what the last page of the book is that you can number given the current page and numberOfDigits left. A page is considered numbered if it has the full number printed on it (e.g. if we are working with page 102 but have ink only for two digits then this page will not be considered numbered).

        It's guaranteed that you can number the current page, and that you can't number the last one in the book.`,
        codeOutput: 
        `function pagesNumberingWithInk(current, numberOfDigits) {
            //Keep track of digits left and the current page.
            let digitsLeft = numberOfDigits;
            let currentPage = current;
            //As long as we have enough digits left, remove the necessary number of digits and go to the next page.
            while(digitsLeft >= String(currentPage).length) {
                digitsLeft -= String(currentPage).length;
                currentPage++;
            }
            //Since there will be an extra page accounted for, decrement by 1 before returning each time.
            return --currentPage;
        }`,
        code: function pagesNumberingWithInk(current, numberOfDigits) {
            //Keep track of digits left and the current page.
            let digitsLeft = numberOfDigits;
            let currentPage = current;
            //As long as we have enough digits left, remove the necessary number of digits and go to the next page.
            while(digitsLeft >= String(currentPage).length) {
                digitsLeft -= String(currentPage).length;
                currentPage++;
            }
            //Since there will be an extra page accounted for, decrement by 1 before returning each time.
            return --currentPage;
        },
        arguments: {
            descriptions: [
                {
                    text: "Integer (Current Page)",
                    type: "Number"
                },
                {
                    text: "Integer (Number of Digits Left)",
                    type: "Number"
                }
            ]
        }
    },
    pairOfShoes: {
        name: 'pairOfShoes',
        instructions: `Yesterday you found some shoes in the back of your closet. Each shoe is described by two values:

        type indicates if it's a left or a right shoe;
        size is the size of the shoe.
        Your task is to check whether it is possible to pair the shoes you found in such a way that each pair consists of a right and a left shoe of an equal size.`,
        codeOutput: 
        `function pairOfShoes(shoes) {
            //Store key/value maps of how many of each size there are as well as the 'total' in all the left/right fields([0])
            let uniqueVals = {};
            let shoeSides = {};
            //Going through each shoe, tally within total of this size and total for right/left
            shoes.forEach(shoe => {
                if(uniqueVals[shoe[1]]) {
                    uniqueVals[shoe[1]]++;
                    shoeSides[shoe[1]] += shoe[0];
                } else {
                    uniqueVals[shoe[1]] = 1;
                    shoeSides[shoe[1]] = shoe[0];
                }
            });
            //If the total number of shoes of each size divided by the total left/right count for the same size, then there is a pair for each shoe.
            for(let size in uniqueVals) {
                if(uniqueVals[size] / 2 !== shoeSides[size]) return false;
            }
            return true;
        }`,
        code: function pairOfShoes(shoes) {
            //Store key/value maps of how many of each size there are as well as the 'total' in all the left/right fields([0])
            let uniqueVals = {};
            let shoeSides = {};
            //Going through each shoe, tally within total of this size and total for right/left
            shoes.forEach(shoe => {
                if(uniqueVals[shoe[1]]) {
                    uniqueVals[shoe[1]]++;
                    shoeSides[shoe[1]] += shoe[0];
                } else {
                    uniqueVals[shoe[1]] = 1;
                    shoeSides[shoe[1]] = shoe[0];
                }
            });
            //If the total number of shoes of each size divided by the total left/right count for the same size, then there is a pair for each shoe.
            for(let size in uniqueVals) {
                if(uniqueVals[size] / 2 !== shoeSides[size]) return false;
            }
            return true;
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Integer Arrays; Left Element Is 0 or 1; Right Element Is Positive Integer (Form of [0,21], [1,23]...)",
                    type: "NumberArrayArray"
                }
            ]
        }
    },
    palindromeRearranging: {
        name: 'palindromeRearranging',
        instructions: `Given a string, find out if its characters can be rearranged to form a palindrome.`,
        codeOutput: 
        `function palindromeRearranging(inputString) {
            //Create a character map in an object for the string characters.
            let charMap = {};
            for(let i = 0; i < inputString.length; i++) {
                !charMap[inputString[i]] ? charMap[inputString[i]] = 1 : charMap[inputString[i]]++;
            }
            
            //Check through each character in the map object. In order to be arranged into a palindrome, only one set of characters can be odd (the center letter).
            let oddsLeft = 1;
            for(let letter in charMap) {
                if(charMap[letter] % 2 !== 0) {
                    oddsLeft--;
                }
            }
            
            //If there is 0-1 odd set of characters, we can make it into a palindrome.
            if(oddsLeft > -1) return true;
            
            return false;
        }`,
        code: function palindromeRearranging(inputString) {
            //Create a character map in an object for the string characters.
            let charMap = {};
            for(let i = 0; i < inputString.length; i++) {
                !charMap[inputString[i]] ? charMap[inputString[i]] = 1 : charMap[inputString[i]]++;
            }
            
            //Check through each character in the map object. In order to be arranged into a palindrome, only one set of characters can be odd (the center letter).
            let oddsLeft = 1;
            for(let letter in charMap) {
                if(charMap[letter] % 2 !== 0) {
                    oddsLeft--;
                }
            }
            
            //If there is 0-1 odd set of characters, we can make it into a palindrome.
            if(oddsLeft > -1) return true;
            
            return false;
        },
        arguments: {
            descriptions: [
                {
                    text: "Input String",
                    type: "String"
                }
            ]
        }
    },
    pascalsTriangle: {
        name: `pascalsTriangle`,
        instructions: `Given an integer numRows, return the first numRows of Pascal's triangle.`,
        codeOutput: 
        `var pascalsTriangle = function(numRows) {
            let result = [[1]];
            for(let i = 1; i < numRows; i++) {
                //Start this row (only will run if generating more than first row)
                let thisRow = [];
                for(let j = 0; j <= result[result.length - 1].length - 2; j++) {
                    //Add next two elements of last array in the result array.
                    thisRow.push(result[result.length - 1][j] + result[result.length - 1][j + 1]);
                }
                //Push 1 to the beginning and end of the row.
                thisRow.unshift(1);
                thisRow.push(1);
                //Push this row to the result.
                result.push(thisRow);
            }
            return result;
        };`,
        code: function pascalsTriangle(numRows) {
            let result = [[1]];
            for(let i = 1; i < numRows; i++) {
                //Start this row (only will run if generating more than first row)
                let thisRow = [];
                for(let j = 0; j <= result[result.length - 1].length - 2; j++) {
                    //Add next two elements of last array in the result array.
                    thisRow.push(result[result.length - 1][j] + result[result.length - 1][j + 1]);
                }
                //Push 1 to the beginning and end of the row.
                thisRow.unshift(1);
                thisRow.push(1);
                //Push this row to the result.
                result.push(thisRow);
            }
            return result;
        },
        arguments: {
            descriptions: [
                {
                    text: "Integer Number (of Rows)",
                    type: "Number"
                }
            ]
        }
    },
    pascalsTriangle2: {
        name: `pascalsTriangle2`,
        instructions: `Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.`,
        codeOutput: 
        `var pascalsTriangle2 = function(rowIndex) {
            let result = [[1]];
            for(let i = 1; i <= rowIndex; i++) {
                //Start this row (only will run if generating more than first row)
                let thisRow = [];
                for(let j = 0; j <= result[result.length - 1].length - 2; j++) {
                    //Add next two elements of last array in the result array.
                    thisRow.push(result[result.length - 1][j] + result[result.length - 1][j + 1]);
                }
                //Push 1 to the beginning and end of the row.
                thisRow.unshift(1);
                thisRow.push(1);
                //Push this row to the result.
                result.push(thisRow);
            }
            return result[rowIndex];
        };`,
        code: function pascalsTriangle2(rowIndex) {
            let result = [[1]];
            for(let i = 1; i <= rowIndex; i++) {
                //Start this row (only will run if generating more than first row)
                let thisRow = [];
                for(let j = 0; j <= result[result.length - 1].length - 2; j++) {
                    //Add next two elements of last array in the result array.
                    thisRow.push(result[result.length - 1][j] + result[result.length - 1][j + 1]);
                }
                //Push 1 to the beginning and end of the row.
                thisRow.unshift(1);
                thisRow.push(1);
                //Push this row to the result.
                result.push(thisRow);
            }
            return result[rowIndex];
        },
        arguments: {
            descriptions: [
                {
                    text: "Whole Number Integer (0 or Greater)",
                    type: "Number"
                }
            ]
        }
    },
    phoneCall: {
        name: 'phoneCall',
        instructions: `Some phone usage rate may be described as follows:

        first minute of a call costs min1 cents,
        each minute from the 2nd up to 10th (inclusive) costs min2_10 cents
        each minute after 10th costs min11 cents.
        You have s cents on your account before the call. What is the duration of the longest call (in minutes rounded down to the nearest integer) you can have?`,
        codeOutput: 
        `function phoneCall(min1, min2_10, min11, s) {    
            let centsLeft = s;
            totalMinutes = 0;
            
            //Purchase first minute.
            if(centsLeft - min1 >= 0) {
                totalMinutes++;
                centsLeft -= min1;
            }
            //Purchase minutes 2-10.
            while(totalMinutes < 10 && centsLeft - min2_10 >= 0) {
                totalMinutes++;
                centsLeft -= min2_10;
            }
            //Purchase minutes past 10th.
            while(totalMinutes >= 10 && centsLeft - min11 >= 0) {
                totalMinutes++;
                centsLeft -= min11;
            }
            
            return totalMinutes;
        }`,
        code: function phoneCall(min1, min2_10, min11, s) {    
            let centsLeft = s;
            let totalMinutes = 0;
            
            //Purchase first minute.
            if(centsLeft - min1 >= 0) {
                totalMinutes++;
                centsLeft -= min1;
            }
            //Purchase minutes 2-10.
            while(totalMinutes < 10 && centsLeft - min2_10 >= 0) {
                totalMinutes++;
                centsLeft -= min2_10;
            }
            //Purchase minutes past 10th.
            while(totalMinutes >= 10 && centsLeft - min11 >= 0) {
                totalMinutes++;
                centsLeft -= min11;
            }
            
            return totalMinutes;
        },
        arguments: {
            descriptions: [
                {
                    text: "Integer (min1)",
                    type: "Number"
                },
                {
                    text: "Integer (min2_10)",
                    type: "Number"
                },
                {
                    text: "Integer (min11)",
                    type: "Number"
                },
                {
                    text: "Integer (s)",
                    type: "Number"
                }
            ]
        }
    },
    pivotIndex: {
        name: `pivotIndex`,
        instructions: `Given an array of integers nums, calculate the pivot index of this array.

        The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
        
        If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.
        
        Return the leftmost pivot index. If no such index exists, return -1.`,
        codeOutput: 
        `var pivotIndex = function(nums) {
            //Loop through every possible index.
            for(let i = 0; i < nums.length; i++) {
                //Split the array into two parts (not including current index i), and sum up the values.
                let leftSum = nums.slice(0, i).reduce((a, b) => a += b, 0);
                let rightSum = nums.slice(i + 1).reduce((a, b) => a += b, 0);
                //If these sums are the same, return the index number.
                if(leftSum === rightSum) return i;
            }
            return -1;
        };`,
        code: function pivotIndex(nums) {
            //Loop through every possible index.
            for(let i = 0; i < nums.length; i++) {
                //Split the array into two parts (not including current index i), and sum up the values.
                let leftSum = nums.slice(0, i).reduce((a, b) => a += b, 0);
                let rightSum = nums.slice(i + 1).reduce((a, b) => a += b, 0);
                //If these sums are the same, return the index number.
                if(leftSum === rightSum) return i;
            }
            return -1;
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Integers (e.g. 1,7,3,6,5,6)",
                    type: "NumberArray"
                }
            ]
        }
    },
    plusOne: {
        name: `plusOne`,
        instructions: `You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
        Increment the large integer by one and return the resulting array of digits.`,
        codeOutput: 
        `var plusOne = function(digits) {
            //Use BigInt constructor to prevent overflow and innacuracy. 
            let num = BigInt(digits.join(''));
            //Increment the value and return as a new array.
            num++;
            return Array.from(num.toString()).map(Number);
        };`,
        code: function plusOne(digits) {
            //Use BigInt constructor to prevent overflow and innacuracy. 
            let num = BigInt(digits.join(''));
            //Increment the value and return as a new array.
            num++;
            return Array.from(num.toString()).map(Number);
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Single-Digit Integers (No Brackets []; Form of 1,2,3...)",
                    type: "NumberArray"
                }
            ]
        }
    },
    polygonPerimeter: {
        name: 'polygonPerimeter',
        instructions: `You have a rectangular white board with some black cells. The black cells create a connected black figure, i.e. it is possible to get from any black cell to any other one through connected adjacent (sharing a common side) black cells.

        Find the perimeter of the black figure assuming that a single cell has unit length.
        
        It's guaranteed that there is at least one black cell on the table.`,
        codeOutput: 
        `function polygonPerimeter(matrix) {
            let perimeter = 0;
            //Loop through every square.
            matrix.forEach((row, rowIndex) => {
                row.forEach((square, squareIndex) => {
                    //If this value is true:
                    if(square) {
                        //Look to all sides. If that location is not a valid square, add to perimeter.
                        if(!row[squareIndex - 1]) perimeter++;
                        if(!row[squareIndex + 1]) perimeter++;
                        if(!matrix[rowIndex + 1] || !matrix[rowIndex + 1][squareIndex]) perimeter++;
                        if(!matrix[rowIndex - 1] || !matrix[rowIndex - 1][squareIndex]) perimeter++;
                    }
                });
            });
            return perimeter;
        }`,
        code: function polygonPerimeter(matrix) {
            let perimeter = 0;
            //Loop through every square.
            matrix.forEach((row, rowIndex) => {
                row.forEach((square, squareIndex) => {
                    //If this value is true:
                    if(square) {
                        //Look to all sides. If that location is not a valid square, add to perimeter.
                        if(!row[squareIndex - 1]) perimeter++;
                        if(!row[squareIndex + 1]) perimeter++;
                        if(!matrix[rowIndex + 1] || !matrix[rowIndex + 1][squareIndex]) perimeter++;
                        if(!matrix[rowIndex - 1] || !matrix[rowIndex - 1][squareIndex]) perimeter++;
                    }
                });
            });
            return perimeter;
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Boolean Arrays (Form of [false,true,true], [true,true,false]...)",
                    type: "BooleanArrayArray"
                }
            ]
        }
    },
    properNounCorrection: {
        name: 'properNounCorrection',
        instructions: `Proper nouns always begin with a capital letter, followed by small letters. Correct a given proper noun so that it fits this statement.`,
        codeOutput: 
        `function properNounCorrection(noun) {
            return noun[0].toUpperCase() + noun.slice(1).toLowerCase();
        }`,
        code: function properNounCorrection(noun) {
            return noun[0].toUpperCase() + noun.slice(1).toLowerCase();
        },
        arguments: {
            descriptions: [
                {
                    text: "Single Noun",
                    type: "String"
                }
            ]
        }
    },
    rangeBitCount: {
        name: 'rangeBitCount',
        instructions: `You are given two numbers a and b where 0 ≤ a ≤ b. Imagine you construct an array of all the integers from a to b inclusive. You need to count the number of 1s in the binary representations of all the numbers in the array.`,
        codeOutput: 
        `function rangeBitCount(a, b) {
            //Create the range of numbers in binary.
            let binary = [];
            for(let i = a; i <= b; i++) {
                binary.push(i.toString(2));
            }
            //Go through each binary representation and add up the number of "1"s.
            let total = 0;
            for(let i = 0; i < binary.length; i++) {
                let thisNumber = String(binary[i])
                for(let j = 0; j < binary[i].length; j++) {
                    if(thisNumber[j] === "1") total++;
                }
            }
            return total;
        }`,
        code: function rangeBitCount(a, b) {
            //Create the range of numbers in binary.
            let binary = [];
            for(let i = a; i <= b; i++) {
                binary.push(i.toString(2));
            }
            //Go through each binary representation and add up the number of "1"s.
            let total = 0;
            for(let i = 0; i < binary.length; i++) {
                let thisNumber = String(binary[i])
                for(let j = 0; j < binary[i].length; j++) {
                    if(thisNumber[j] === "1") total++;
                }
            }
            return total;
        },
        arguments: {
            descriptions: [
                {
                    text: "Non-Negative Integer a",
                    type: "Number"
                },
                {
                    text: "Non-Negative Integer b (Greater Than or Equal To a)",
                    type: "Number"
                }
            ]
        }
    },
    reachNextLevel: {
        name: 'reachNextLevel',
        instructions: `You are playing an RPG game. Currently your experience points (XP) total is equal to experience. To reach the next level your XP should be at least at threshold. If you kill the monster in front of you, you will gain more experience points in the amount of the reward.

        Given values experience, threshold and reward, check if you reach the next level after killing the monster.`,
        codeOutput: 
        `function reachNextLevel(experience, threshold, reward) {
            if(experience + reward >= threshold) return true;
            return false;
        }`,
        code: function reachNextLevel(experience, threshold, reward) {
            if(experience + reward >= threshold) return true;
            return false;
        },
        arguments: {
            descriptions: [
                {
                    text: "Integer (experience)",
                    type: "Number"
                },
                {
                    text: "Integer (threshold)",
                    type: "Number"
                },
                {
                    text: "Integer (reward)",
                    type: "Number"
                }
            ]
        }
    },
    rectangleRotation: {
        name: 'rectangleRotation',
        instructions: `A rectangle with sides equal to even integers a and b is drawn on the Cartesian plane. Its center (the intersection point of its diagonals) coincides with the point (0, 0), but the sides of the rectangle are not parallel to the axes; instead, they are forming 45 degree angles with the axes.

        How many points with integer coordinates are located inside the given rectangle (including on its sides)?`,
        codeOutput: 
        `function rectangleRotation(a, b) {
            //Get number of diagonal units along both rectangle axes (halve the resuls);
            let xSide_unis = (a / Math.sqrt(2)) / 2;
            let ySide_units = (b / Math.sqrt(2)) / 2;
            
            //Get the number of points along both axes of the outer rectangle of points.
            let outerRectLen = 2 * Math.floor(xSide_unis) + 1;
            let outerRectWidth = 2 * Math.floor(ySide_units) + 1;
            
            //Get the number of points along both axes of the inner rectange of points.
            let innerRectLen = 2 * Math.floor(xSide_unis) + (xSide_unis % 1 < 0.5 ? 0 : 2);
            let innerRectWidth = 2 * Math.floor(ySide_units) + (ySide_units % 1 < 0.5 ? 0 : 2);
            
            //Return the total number of points inside the whole rectangle.
            return outerRectLen * outerRectWidth + innerRectLen * innerRectWidth;
        }`,
        code: function rectangleRotation(a, b) {
            //Get number of diagonal units along both rectangle axes (halve the resuls);
            let xSide_unis = (a / Math.sqrt(2)) / 2;
            let ySide_units = (b / Math.sqrt(2)) / 2;
            
            //Get the number of points along both axes of the outer rectangle of points.
            let outerRectLen = 2 * Math.floor(xSide_unis) + 1;
            let outerRectWidth = 2 * Math.floor(ySide_units) + 1;
            
            //Get the number of points along both axes of the inner rectange of points.
            let innerRectLen = 2 * Math.floor(xSide_unis) + (xSide_unis % 1 < 0.5 ? 0 : 2);
            let innerRectWidth = 2 * Math.floor(ySide_units) + (ySide_units % 1 < 0.5 ? 0 : 2);
            
            //Return the total number of points inside the whole rectangle.
            return outerRectLen * outerRectWidth + innerRectLen * innerRectWidth;
        },
        arguments: {
            descriptions: [
                {
                    text: "Integer a",
                    type: "Number"
                },
                {
                    text: "Integer b",
                    type: "Number"
                }
            ]
        }
    },
    reflectString: {
        name: 'reflectString',
        instructions: `Define an alphabet reflection as follows: a turns into z, b turns into y, c turns into x, ..., n turns into m, m turns into n, ..., z turns into a.

        Define a string reflection as the result of applying the alphabet reflection to each of its characters.
        
        Reflect the given string.`,
        codeOutput: 
        `function reflectString(inputString) {
            return inputString
            .split("")
            .map(character => {
                if(character.charCodeAt(0) < 110) {
                    return String.fromCharCode(122 - (character.charCodeAt(0) - 97));
                } else {
                    return String.fromCharCode(97 + (122 - character.charCodeAt(0)));
                }
            })
            .join("");
        } `,
        code: function reflectString(inputString) {
            return inputString
            .split("")
            .map(character => {
                if(character.charCodeAt(0) < 110) {
                    return String.fromCharCode(122 - (character.charCodeAt(0) - 97));
                } else {
                    return String.fromCharCode(97 + (122 - character.charCodeAt(0)));
                }
            })
            .join("");
        } ,
        arguments: {
            descriptions: [
                {
                    text: "Word (String of Lowercase Letters)",
                    type: "String"
                }
            ]
        }
    },
    regularMonths: {
        name: 'regularMonths',
        instructions: `In an effort to be more innovative, your boss introduced a strange new tradition: the first day of every month you're allowed to work from home. You like this rule when the day falls on a Monday, because any excuse to skip rush hour traffic is great!

        You and your colleagues have started calling these months regular months. Since you're a fan of working from home, you decide to find out how far away the nearest regular month is, given that the currMonth has just started.
        
        For your convenience, here is a list of month lengths (from January to December, respectively):
        
        Month lengths: 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31.
        Please, note that in leap years February has 29 days.`,
        codeOutput: 
        `function regularMonths(currMonth) {
            //Format the current month into two numbers.
            let currentDate = currMonth.split("-").map(str => Number(str));
            
            //Keep track of months
            let months = [
                { name: "January", days: 31 },
                { name: "February", days: 28 },
                { name: "March", days: 31 },
                { name: "April", days: 30 },
                { name: "May", days: 31 },
                { name: "June", days: 30 },
                { name: "July", days: 31 },
                { name: "August", days: 31 },
                { name: "September", days: 30 },
                { name: "October", days: 31 },
                { name: "November", days: 30 },
                { name: "December", days: 31 }
            ];
        
            //Find the day of the week of the current month.
            const findCurrentDay = inputDate => {
                //Find the number of days in years passed since 1968.
                let days = ((inputDate[1] - 1968) * 365);
                //Add in the total number of leap days that passed in years before.
                days += Math.ceil((inputDate[1] - 1968) / 4);
                //Add in one more day if this year is a leap year, AND if leap day already passed, excluding 2100 (which isn't a leap year)
                let isLeap = false;
                if(inputDate[1] % 4 === 0 && inputDate[0] > 2 && inputDate[1] !== 2100) {
                    days++;
                    isLeap = true;
                };
                
                //Add in the number of days that have passed so far before this month this year (leap day already included if this is a leap year).
                for(let i = 0; i < inputDate[0] - 1; i++) {
                    days += months[i].days;
                }
                
                //Return the number of the current day of the week from the input string (if 0 - Monday, 6 - Sunday, etc.)
                return days % 7;
            };
            
            //Get the 'offset' for the current day of the week of the input day. This will be used when counting the number of days until the next Monday.
            let currentDay = findCurrentDay(currentDate);
            
            //Keep track of the 'current month' we are looking at, starting with the next month.
            let currentMonth = currentDate[0];
            
            //Keep track of the 'current year' we are looking at, starting with the current year, unless we move on to next year.
            let currentYear = currentDate[1];
            
            //Keep moving one month into the future, counting the number of days passed, starting at 0 if Monday, 1 if Tuesday, and so un until 6 if Sunday.
            let daysPassed = currentDay;
            do {
                //Add to the days passed
                daysPassed += months[currentMonth - 1].days;
                //Add an extra day if this is a leap year and we just added February
                if(currentYear % 4 === 0 && currentYear !== 2100 && currentMonth === 2) daysPassed++;
                
                //Update the current month and current year.
                currentMonth = currentMonth === 12 ? 
                1 :
                currentMonth + 1;
                
                currentYear = currentMonth === 1 ? 
                currentYear + 1 :
                currentYear;
                //Continue this loop until we reach a total number of days passed that divides by 7, which means Monday has been reached.
            } while(daysPassed % 7);
            
            //Return the resulting date when the day will be Monday, but format the month appropriately.
            return \`\${currentMonth < 10 ? \`0\${currentMonth}\` : currentMonth}-\${currentYear}\`
        }`,
        code: function regularMonths(currMonth) {
            //Format the current month into two numbers.
            let currentDate = currMonth.split("-").map(str => Number(str));
            
            //Keep track of months
            let months = [
                { name: "January", days: 31 },
                { name: "February", days: 28 },
                { name: "March", days: 31 },
                { name: "April", days: 30 },
                { name: "May", days: 31 },
                { name: "June", days: 30 },
                { name: "July", days: 31 },
                { name: "August", days: 31 },
                { name: "September", days: 30 },
                { name: "October", days: 31 },
                { name: "November", days: 30 },
                { name: "December", days: 31 }
            ];
        
            //Find the day of the week of the current month.
            const findCurrentDay = inputDate => {
                //Find the number of days in years passed since 1968.
                let days = ((inputDate[1] - 1968) * 365);
                //Add in the total number of leap days that passed in years before.
                days += Math.ceil((inputDate[1] - 1968) / 4);
                //Add in one more day if this year is a leap year, AND if leap day already passed, excluding 2100 (which isn't a leap year)
                let isLeap = false;
                if(inputDate[1] % 4 === 0 && inputDate[0] > 2 && inputDate[1] !== 2100) {
                    days++;
                    isLeap = true;
                };
                
                //Add in the number of days that have passed so far before this month this year (leap day already included if this is a leap year).
                for(let i = 0; i < inputDate[0] - 1; i++) {
                    days += months[i].days;
                }
                
                //Return the number of the current day of the week from the input string (if 0 - Monday, 6 - Sunday, etc.)
                return days % 7;
            };
            
            //Get the 'offset' for the current day of the week of the input day. This will be used when counting the number of days until the next Monday.
            let currentDay = findCurrentDay(currentDate);
            
            //Keep track of the 'current month' we are looking at, starting with the next month.
            let currentMonth = currentDate[0];
            
            //Keep track of the 'current year' we are looking at, starting with the current year, unless we move on to next year.
            let currentYear = currentDate[1];
            
            //Keep moving one month into the future, counting the number of days passed, starting at 0 if Monday, 1 if Tuesday, and so un until 6 if Sunday.
            let daysPassed = currentDay;
            do {
                //Add to the days passed
                daysPassed += months[currentMonth - 1].days;
                //Add an extra day if this is a leap year and we just added February
                if(currentYear % 4 === 0 && currentYear !== 2100 && currentMonth === 2) daysPassed++;
                
                //Update the current month and current year.
                currentMonth = currentMonth === 12 ? 
                1 :
                currentMonth + 1;
                
                currentYear = currentMonth === 1 ? 
                currentYear + 1 :
                currentYear;
                //Continue this loop until we reach a total number of days passed that divides by 7, which means Monday has been reached.
            } while(daysPassed % 7);
            
            //Return the resulting date when the day will be Monday, but format the month appropriately.
            return `${currentMonth < 10 ? `0${currentMonth}` : currentMonth}-${currentYear}`
        },
        arguments: {
            descriptions: [
                {
                    text: "Input Date String (Form of 02-2016)",
                    type: "String"
                }
            ]
        }
    },
    removeArrayPart: {
        name: 'removeArrayPart',
        instructions: `Remove a part of a given array between given 0-based indexes l and r (inclusive).`,
        codeOutput: 
        `function removeArrayPart(inputArray, l, r) {
            return inputArray.slice(0, l).concat(inputArray.slice(r + 1));
        }`,
        code: function removeArrayPart(inputArray, l, r) {
            return inputArray.slice(0, l).concat(inputArray.slice(r + 1));
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Integers (No Brackets []; Form of 1,2,3...)",
                    type: "NumberArray"
                },
                {
                    text: "Integer l",
                    type: "Number"
                },
                {
                    text: "Integer r",
                    type: "Number"
                }
            ]
        }
    },
    removeDuplicates: {
        name: `removeDuplicates`,
        instructions: `Remove array duplicates in-place.`,
        codeOutput: 
        `var removeDuplicates = function(nums) {   
            let i = 0;
            //As long as the end of the array is not reached, remove one element if the next is a duplicate.
            while(i < nums.length - 1) {
                if(nums[i] === nums[i + 1]) {
                    nums.splice(i, 1);
                } else {
                    i++;
                }
            }
            return nums;
        }`,
        code: function removeDuplicates(nums) {   
            let i = 0;
            //As long as the end of the array is not reached, remove one element if the next is a duplicate.
            while(i < nums.length - 1) {
                if(nums[i] === nums[i + 1]) {
                    nums.splice(i, 1);
                } else {
                    i++;
                }
            }
            return nums;
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Integers (Form of 1,2,3...)",
                    type: "NumberArray"
                }
            ]
        }
    },
    removeOuterParentheses: {
        name: `removeOuterParentheses`,
        instructions: `A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.

        For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
        A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.
        
        Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.
        
        Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.`,
        codeOutput: 
        `var removeOuterParentheses = function(s) {
    
            //Keep track of whether there is an open outer parentheses at any given point.
            let removeStack = [];
            //Store indexes of characters to remove.
            let removeIndexes = [];
            //Keep track of the current inner parentheses.
            let keepStack = [];
            
            for(let i = 0; i < s.length; i++) {
                //If this is (
                if(s[i] === "(") {
                    //Determine if this is an 'outer' set. If so, move it to the removeStack.
                    if(!removeStack.length) {
                        //If the remove stack is empty, push the open parentheses and store this as a position to remove.
                        removeStack.push(s[i]);
                        removeIndexes.push(i);
                    } else {
                        //If the remove stack is not empty, it means this is not outer parentheses
                        keepStack.push(s[i]);
                    }
                //If this is )
                } else {
                    //If there is anything still in the keepStack, this is the closing for a set in the keepStack. Remove it.
                    if(keepStack.length) {
                        keepStack.pop();
                    } else {
                        //Otherwise, this is a closing parentheses for the outer set. Store this as an index to remove.
                        removeStack.pop();
                        removeIndexes.push(i);
                    }
                }
            }
            
            //Using the stored indexes to remove, iterate through string, removing characters, and turn back into string.
            return s.split("").filter((char, index) => {
                if(!removeIndexes.includes(index)) {
                    return char;
                }
            }).join("");
        };`,
        code: function removeOuterParentheses(s) {
    
            //Keep track of whether there is an open outer parentheses at any given point.
            let removeStack = [];
            //Store indexes of characters to remove.
            let removeIndexes = [];
            //Keep track of the current inner parentheses.
            let keepStack = [];
            
            for(let i = 0; i < s.length; i++) {
                //If this is (
                if(s[i] === "(") {
                    //Determine if this is an 'outer' set. If so, move it to the removeStack.
                    if(!removeStack.length) {
                        //If the remove stack is empty, push the open parentheses and store this as a position to remove.
                        removeStack.push(s[i]);
                        removeIndexes.push(i);
                    } else {
                        //If the remove stack is not empty, it means this is not outer parentheses
                        keepStack.push(s[i]);
                    }
                //If this is )
                } else {
                    //If there is anything still in the keepStack, this is the closing for a set in the keepStack. Remove it.
                    if(keepStack.length) {
                        keepStack.pop();
                    } else {
                        //Otherwise, this is a closing parentheses for the outer set. Store this as an index to remove.
                        removeStack.pop();
                        removeIndexes.push(i);
                    }
                }
            }
            
            //Using the stored indexes to remove, iterate through string, removing characters, and turn back into string.
            return s.split("").filter((char, index) => {
                if(!removeIndexes.includes(index)) {
                    return char;
                }
            }).join("");
        },
        arguments: {
            descriptions: [
                {
                    text: "String of properly nested parentheses (e.g. (()(())) )",
                    type: "String"
                }
            ]
        }
    },
    replaceAllDigitsRegExp: {
        name: 'replaceAllDigitsRegExp',
        instructions: `Implement a function that replaces each digit in the given string with a '#' character.`,
        codeOutput: 
        `function replaceAllDigitsRegExp(input) {
            //Perform a global replace on all digits between 0-9.
            return input.replaceAll(/[0-9]/g, "#");
        }`,
        code: function replaceAllDigitsRegExp(input) {
            //Perform a global replace on all digits between 0-9.
            return input.replaceAll(/[0-9]/g, "#");
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
    replaceMiddle: {
        name: 'replaceMiddle',
        instructions: `We define the middle of the array arr as follows:

        if arr contains an odd number of elements, its middle is the element whose index number is the same when counting from the beginning of the array and from its end;
        if arr contains an even number of elements, its middle is the sum of the two elements whose index numbers when counting from the beginning and from the end of the array differ by one.
        Given array arr, your task is to find its middle, and, if it consists of two elements, replace those elements with the value of middle. Return the resulting array as the answer.`,
        codeOutput: 
        `function replaceMiddle(arr) {
            return arr.length % 2 ?
            arr :
            arr.slice(0, Math.floor(arr.length / 2) - 1)
            .concat(arr[Math.floor(arr.length / 2) - 1] + arr[Math.floor(arr.length / 2)])
            .concat(arr.slice(Math.floor(arr.length / 2) + 1));
        }`,
        code: function replaceMiddle(arr) {
            return arr.length % 2 ?
            arr :
            arr.slice(0, Math.floor(arr.length / 2) - 1)
            .concat(arr[Math.floor(arr.length / 2) - 1] + arr[Math.floor(arr.length / 2)])
            .concat(arr.slice(Math.floor(arr.length / 2) + 1));
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Integers (No Brackets []; Form of 1,2,3...)",
                    type: "NumberArray"
                }
            ]
        }
    },
    reverseInParentheses: {
        name: 'reverseInParentheses',
        instructions: `Write a function that reverses characters in (possibly nested) parentheses in the input string.

        Input strings will always be well-formed with matching ()s.`,
        codeOutput: 
        `function reverseInParentheses(inputString) {
            //split the string into an array
            let stringArray = inputString.split("");
            //This will hold the final array to be turned back to a string
            let resultArray = [];
            //Loop through each of the array items (each character)
            for(let i = 0; i < stringArray.length; i++) {
                //If the current character is not a closed parenthesis
                if(stringArray[i] !== ")") {
                    //Push it into the result array
                    resultArray.push(stringArray[i]);
                } else {
                    //Otherwise, create a temp array that will be the reverse of what is in result array.
                    let tempArray = reverseArrayString(resultArray);
                    //Take out the characters starting at the beginning and ending at the last index of (, and save that back to the result array.
                    resultArray = resultArray.splice(0, resultArray.lastIndexOf("("));          //
                    resultArray = resultArray.concat(tempArray);
                }
            }
            return resultArray.join("");
        }
        
        function reverseArrayString(array) {
            let array2 = [];
            for(let i = array.length; i >= 0; i--) {
                if(array[i] !== "(") {
                    array2.push(array[i]);
                } else {
                    break;
                }
            }
            return array2;
        }`,
        code: function reverseInParentheses(inputString) {
            //split the string into an array
            let stringArray = inputString.split("");
            //This will hold the final array to be turned back to a string
            let resultArray = [];
            //Loop through each of the array items (each character)
            for(let i = 0; i < stringArray.length; i++) {
                //If the current character is not a closed parenthesis
                if(stringArray[i] !== ")") {
                    //Push it into the result array
                    resultArray.push(stringArray[i]);
                } else {
                    //Otherwise, create a temp array that will be the reverse of what is in result array.
                    let tempArray = reverseArrayString(resultArray);
                    //Take out the characters starting at the beginning and ending at the last index of (, and save that back to the result array.
                    resultArray = resultArray.splice(0, resultArray.lastIndexOf("("));          //
                    resultArray = resultArray.concat(tempArray);
                }
            }
            return resultArray.join("");

            function reverseArrayString(array) {
                let array2 = [];
                for(let i = array.length; i >= 0; i--) {
                    if(array[i] !== "(") {
                        array2.push(array[i]);
                    } else {
                        break;
                    }
                }
                return array2;
            }
        },
        arguments: {
            descriptions: [
                {
                    text: "Input String With Properly Nested Parentheses",
                    type: "String"
                }
            ]
        }
    },
    reverseOnDiagonals: {
        name: 'reverseOnDiagonals',
        instructions: `The longest diagonals of a square matrix are defined as follows:

        the first longest diagonal goes from the top left corner to the bottom right one;
        the second longest diagonal goes from the top right corner to the bottom left one.
        Given a square matrix, your task is to reverse the order of elements on both of its longest diagonals.`,
        codeOutput: 
        `function reverseOnDiagonals(matrix) {
            matrix.forEach((row, index) => {
                //Swap first diagonals
                if(index < Math.floor(matrix.length / 2)) {
                    [row[index], matrix[matrix.length - 1 - index][matrix.length - 1 - index]] = [matrix[matrix.length - 1 - index][matrix.length - 1 - index], row[index]];
                } else {
                    //Swap second diagonals
                    [row[matrix.length - 1 - index], matrix[matrix.length - 1 - index][0 + index]] = [matrix[matrix.length - 1 - index][0 + index], row[matrix.length - 1 - index]];
                }
            });
            return matrix;
        }`,
        code: function reverseOnDiagonals(matrix) {
            matrix.forEach((row, index) => {
                //Swap first diagonals
                if(index < Math.floor(matrix.length / 2)) {
                    [row[index], matrix[matrix.length - 1 - index][matrix.length - 1 - index]] = [matrix[matrix.length - 1 - index][matrix.length - 1 - index], row[index]];
                } else {
                    //Swap second diagonals
                    [row[matrix.length - 1 - index], matrix[matrix.length - 1 - index][0 + index]] = [matrix[matrix.length - 1 - index][0 + index], row[matrix.length - 1 - index]];
                }
            });
            return matrix;
        },
        arguments: {
            descriptions: [
                {
                    text: "Square Matrix - Array of Integer Arrays (Form of [1,2,3], [4,5,6], [7,8,9])",
                    type: "NumberArrayArray"
                }
            ]
        }
    },
    reverseString: {
        name: `reverseString`,
        instructions: `Write a function that reverses a string. The input string is given as an array of characters s.

        You must do this by modifying the input array in-place with O(1) extra memory.`,
        codeOutput: 
        `var reverseString = function(s) {
            //Create pointers
            let left = 0; 
            let right = s.length - 1;
            
            //Using the beginning and end pointers, iterate down to the center of the array that represents the string, and swap values.
            while(left <= right) {
                //Swap the values.
                [s[left], s[right]] = [s[right], s[left]];
                
                //Update the pointer values.
                left++;
                right--;
            }
            
            return s;
        };`,
        code: function reverseString(s) {
            //Create pointers
            let left = 0; 
            let right = s.length - 1;
            
            //Using the beginning and end pointers, iterate down to the center of the array that represents the string, and swap values.
            while(left <= right) {
                //Swap the values.
                [s[left], s[right]] = [s[right], s[left]];
                
                //Update the pointer values.
                left++;
                right--;
            }
            
            return s;
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Characters (e.g. h,e,l,l,o)",
                    type: "StringArray"
                }
            ]
        }
    },
    reverseVowels: {
        name: `reverseVowels`,
        instructions: `Given a string s, reverse only all the vowels in the string and return it.

        The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.`,
        codeOutput: 
        `var reverseVowels = function(s) {
            let vowels = ['a','e','i','o','u'];
            //Check each character in string and if vowel, save in an array.
            let stringVowels = s.split("").filter(char => {
                if(vowels.includes(char.toLowerCase())) return char;
            });
            //Iterate through string. If character is vowel, replace it with the LAST element in the array of vowels from the string. 
            return s.split("").map(char => {
                if(vowels.includes(char.toLowerCase())) return stringVowels.pop();
                return char;
            }).join("");
        };`,
        code: function reverseVowels(s) {
            let vowels = ['a','e','i','o','u'];
            //Check each character in string and if vowel, save in an array.
            let stringVowels = s.split("").filter(char => {
                if(vowels.includes(char.toLowerCase())) return char;
            });
            //Iterate through string. If character is vowel, replace it with the LAST element in the array of vowels from the string. 
            return s.split("").map(char => {
                if(vowels.includes(char.toLowerCase())) return stringVowels.pop();
                return char;
            }).join("");
        },
        arguments: {
            descriptions: [
                {
                    text: "String of Characters",
                    type: "String"
                }
            ]
        }
    },
    romanToInt: {
        name: `romanToInt`,
        instructions: `Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
        I can be placed before V (5) and X (10) to make 4 and 9. 
        X can be placed before L (50) and C (100) to make 40 and 90. 
        C can be placed before D (500) and M (1000) to make 400 and 900.
        Given a roman numeral, convert it to an integer.`,
        codeOutput: 
        `var romanToInt = function(s) {
            //IMPORTANT: Works up to 3,999
            
            //Keep track of number to be output:
            let output = [];
            
            //Get current number (for loop), based on what it is, run particular function
            for(let i = 0; i < s.length; i++) {
                //Determine which function to run 
                switch(s[i]) {
                    case 'M':
                        i = thousands(i);
                        break;
                    case 'C':
                    case 'D':
                        i = hundreds(i);
                        break;
                    case 'X':
                    case 'L':
                        i = tens(i);
                        break;
                    case 'I':
                    case 'V':
                        i = ones(i);
                        break;
                    default:
                        break;
                }
            }
            
            //Return the appropriate number.
            console.log(output);
            return output.reduce((a, b) => a + b, 0);
            
            //Helper functions
            function thousands(startingIndex) {
                //See if this is 1, 2, or 3 thousand.
                let num = s[startingIndex + 2] === 'M' && s[startingIndex + 1] === 'M' ?
                    3000 :
                    s[startingIndex + 1] === 'M' ?
                    2000 :
                    1000;
                
                output.push(num);
                
                //Return the appropraite value of i
                return num === 3000 ? 
                    startingIndex + 2 :
                    num === 2000 ?
                    startingIndex + 1 :
                    startingIndex;
            }
            
            function hundreds(startingIndex) {
                //See which hundred this is.
                let num = "";
                if(s[startingIndex] === 'C') {
                    //See if this is 1, 2, 3, 4, or 9 hundred.
                    num = s[startingIndex + 2] === 'C' && s[startingIndex + 1] === 'C' ?
                        300 :
                        s[startingIndex + 1] === 'C' ?
                        200 :
                        s[startingIndex + 1] === 'D' ?
                        400 :
                        s[startingIndex + 1] === 'M' ?
                        900 :
                        100;
                } else if(s[startingIndex] === 'D') {
                    //See if this is 5, 6, 7, or 8 hundred.
                    num = s[startingIndex + 3] === 'C' && s[startingIndex + 2] === 'C' && s[startingIndex + 1] === 'C' ?
                        800 :
                        s[startingIndex + 2] === 'C' && s[startingIndex + 1] === 'C' ?
                        700 :
                        s[startingIndex + 1] === 'C' ?
                        600 :
                        500; 
                }
                
                output.push(num);
                
                //Return the appropriate value of i
                return num === 800 ?
                    startingIndex + 3 :
                    num === 300 || num === 700 ?
                    startingIndex + 2 :
                    num === 900 || num === 600 || num === 400 || num === 200 ?
                    startingIndex + 1 :
                    startingIndex;
            } 
            
            function tens(startingIndex) {
                //See what ten this is
                let num = "";
                if(s[startingIndex] === 'X') {
                    num = s[startingIndex + 2] === 'X' && s[startingIndex + 1] === 'X'?
                        30 :
                        s[startingIndex + 1] === 'X' ?
                        20 :
                        s[startingIndex + 1] === 'L' ?
                        40 :
                        s[startingIndex + 1] === 'C' ?
                        90 :
                        10;
                } else if(s[startingIndex] === 'L') {
                    num = s[startingIndex + 3] === 'X' && s[startingIndex + 2] === 'X' && s[startingIndex + 1] === 'X'?
                        80 :
                        s[startingIndex + 2] === 'X' && s[startingIndex + 1] === 'X' ?
                        70 :
                        s[startingIndex + 1] === 'X' ?
                        60 :
                        50; 
                }
                
                output.push(num);
                
                //Return the appropriate value of i
                return num === 80 ?
                    startingIndex + 3 :
                    num === 30 || num === 70 ?
                    startingIndex + 2 :
                    num === 90 || num === 60 || num === 40 || num === 20 ?
                    startingIndex + 1 :
                    startingIndex;
            } 
            
            function ones(startingIndex) {
                //See what one this is
                let num = "";
                if(s[startingIndex] === 'I') {
                    num = s[startingIndex + 2] === 'I' ?
                        3 :
                        s[startingIndex + 1] === 'I' ?
                        2 :
                        s[startingIndex + 1] === 'V' ?
                        4 :
                        s[startingIndex + 1] === 'X' ?
                        9 :
                        1;
                } else if(s[startingIndex] === 'V') {
                    num = s[startingIndex + 3] === 'I' ?
                        8 :
                        s[startingIndex + 2] === 'I' ?
                        7 :
                        s[startingIndex + 1] === 'I' ?
                        6 :
                        5; 
                }
                
                output.push(num);
                
                //Return the appropriate value of i
                return num === 8 ?
                    startingIndex + 3 :
                    num === 3 || num === 7 ?
                    startingIndex + 2 :
                    num === 9 || num === 6 || num === 4 || num === 2 ?
                    startingIndex + 1 :
                    startingIndex;
            }
        };`,
        code: function romanToInt(s) {
            //IMPORTANT: Works up to 3,999
            
            //Keep track of number to be output:
            let output = [];
            
            //Get current number (for loop), based on what it is, run particular function
            for(let i = 0; i < s.length; i++) {
                //Determine which function to run 
                switch(s[i]) {
                    case 'M':
                        i = thousands(i);
                        break;
                    case 'C':
                    case 'D':
                        i = hundreds(i);
                        break;
                    case 'X':
                    case 'L':
                        i = tens(i);
                        break;
                    case 'I':
                    case 'V':
                        i = ones(i);
                        break;
                    default:
                        break;
                }
            }
            
            //Return the appropriate number.
            console.log(output);
            return output.reduce((a, b) => a + b, 0);
            
            //Helper functions
            function thousands(startingIndex) {
                //See if this is 1, 2, or 3 thousand.
                let num = s[startingIndex + 2] === 'M' && s[startingIndex + 1] === 'M' ?
                    3000 :
                    s[startingIndex + 1] === 'M' ?
                    2000 :
                    1000;
                
                output.push(num);
                
                //Return the appropraite value of i
                return num === 3000 ? 
                    startingIndex + 2 :
                    num === 2000 ?
                    startingIndex + 1 :
                    startingIndex;
            }
            
            function hundreds(startingIndex) {
                //See which hundred this is.
                let num = "";
                if(s[startingIndex] === 'C') {
                    //See if this is 1, 2, 3, 4, or 9 hundred.
                    num = s[startingIndex + 2] === 'C' && s[startingIndex + 1] === 'C' ?
                        300 :
                        s[startingIndex + 1] === 'C' ?
                        200 :
                        s[startingIndex + 1] === 'D' ?
                        400 :
                        s[startingIndex + 1] === 'M' ?
                        900 :
                        100;
                } else if(s[startingIndex] === 'D') {
                    //See if this is 5, 6, 7, or 8 hundred.
                    num = s[startingIndex + 3] === 'C' && s[startingIndex + 2] === 'C' && s[startingIndex + 1] === 'C' ?
                        800 :
                        s[startingIndex + 2] === 'C' && s[startingIndex + 1] === 'C' ?
                        700 :
                        s[startingIndex + 1] === 'C' ?
                        600 :
                        500; 
                }
                
                output.push(num);
                
                //Return the appropriate value of i
                return num === 800 ?
                    startingIndex + 3 :
                    num === 300 || num === 700 ?
                    startingIndex + 2 :
                    num === 900 || num === 600 || num === 400 || num === 200 ?
                    startingIndex + 1 :
                    startingIndex;
            } 
            
            function tens(startingIndex) {
                //See what ten this is
                let num = "";
                if(s[startingIndex] === 'X') {
                    num = s[startingIndex + 2] === 'X' && s[startingIndex + 1] === 'X'?
                        30 :
                        s[startingIndex + 1] === 'X' ?
                        20 :
                        s[startingIndex + 1] === 'L' ?
                        40 :
                        s[startingIndex + 1] === 'C' ?
                        90 :
                        10;
                } else if(s[startingIndex] === 'L') {
                    num = s[startingIndex + 3] === 'X' && s[startingIndex + 2] === 'X' && s[startingIndex + 1] === 'X'?
                        80 :
                        s[startingIndex + 2] === 'X' && s[startingIndex + 1] === 'X' ?
                        70 :
                        s[startingIndex + 1] === 'X' ?
                        60 :
                        50; 
                }
                
                output.push(num);
                
                //Return the appropriate value of i
                return num === 80 ?
                    startingIndex + 3 :
                    num === 30 || num === 70 ?
                    startingIndex + 2 :
                    num === 90 || num === 60 || num === 40 || num === 20 ?
                    startingIndex + 1 :
                    startingIndex;
            } 
            
            function ones(startingIndex) {
                //See what one this is
                let num = "";
                if(s[startingIndex] === 'I') {
                    num = s[startingIndex + 2] === 'I' ?
                        3 :
                        s[startingIndex + 1] === 'I' ?
                        2 :
                        s[startingIndex + 1] === 'V' ?
                        4 :
                        s[startingIndex + 1] === 'X' ?
                        9 :
                        1;
                } else if(s[startingIndex] === 'V') {
                    num = s[startingIndex + 3] === 'I' ?
                        8 :
                        s[startingIndex + 2] === 'I' ?
                        7 :
                        s[startingIndex + 1] === 'I' ?
                        6 :
                        5; 
                }
                
                output.push(num);
                
                //Return the appropriate value of i
                return num === 8 ?
                    startingIndex + 3 :
                    num === 3 || num === 7 ?
                    startingIndex + 2 :
                    num === 9 || num === 6 || num === 4 || num === 2 ?
                    startingIndex + 1 :
                    startingIndex;
            }
        },
        arguments: {
            descriptions: [
                {
                    text: "Roman Integer String (Form of XIV, etc. - Up to 3,999)",
                    type: "String"
                }
            ]
        }
    },
    rotateString: {
        name: `rotateString`,
        instructions: `Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

        A shift on s consists of moving the leftmost character of s to the rightmost position.
        
        For example, if s = "abcde", then it will be "bcdea" after one shift.`,
        codeOutput: 
        `var rotateString = function(s, goal) {
            if((s + s).includes(goal) && goal.length >= s.length) return true;
            return false;
        };`,
        code: function rotateString(s, goal) {
            if((s + s).includes(goal) && goal.length >= s.length) return true;
            return false;
        },
        arguments: {
            descriptions: [
                {
                    text: "String to Check",
                    type: "String"
                },
                {
                    text: "String to Check Against (Goal)",
                    type: "String"
                }
            ]
        }
    },
    rounders: {
        name: 'rounders',
        instructions: `We want to turn the given integer into a number that has only one non-zero digit using a tail rounding approach. This means that at each step we take the last non 0 digit of the number and round it to 0 or to 10. If it's less than 5 we round it to 0 if it's larger than or equal to 5 we round it to 10 (rounding to 10 means increasing the next significant digit by 1). The process stops immediately once there is only one non-zero digit left.`,
        codeOutput: 
        `function rounders(n) {
            //Keep track of current number and get the number of loops based on integer length.
            let currentNumber = n;
            let numRounds = String(n).length - 1;
            
            //For each iteration, use each value of i to generate the power of ten we are using.
            for(let i = 0; i < numRounds; i++) {
                let powerOfTen = 10 ** (i + 1);
                //We have to divide by a power of ten to make this number non-whole to round and update.
                currentNumber = Math.round(currentNumber / powerOfTen) * powerOfTen;
            }
            
            return currentNumber;
        }`,
        code: function rounders(n) {
            //Keep track of current number and get the number of loops based on integer length.
            let currentNumber = n;
            let numRounds = String(n).length - 1;
            
            //For each iteration, use each value of i to generate the power of ten we are using.
            for(let i = 0; i < numRounds; i++) {
                let powerOfTen = 10 ** (i + 1);
                //We have to divide by a power of ten to make this number non-whole to round and update.
                currentNumber = Math.round(currentNumber / powerOfTen) * powerOfTen;
            }
            
            return currentNumber;
        },
        arguments: {
            descriptions: [
                {
                    text: "Integer Input",
                    type: "Integer"
                }
            ]
        }
    },
    rowsRearranging: {
        name: 'rowsRearranging',
        instructions: `Given a rectangular matrix of integers, check if it is possible to rearrange its rows in such a way that all its columns become strictly increasing sequences (read from top to bottom).`,
        codeOutput: 
        `function rowsRearranging(matrix) {
            //Sort array rows by total sum of each row.
            matrix.sort((a, b) => {
                return b.reduce((i, j) => i += j, 0) - a.reduce((i, j) => i += j, 0);
            });
                
            //Loop through each row and ensure that they are strictly increasing.
            for(let i = 0; i < matrix.length - 1; i++) {
                //For each row, loop through each number and compare that index to the one below.
                for(let j = 0; j < matrix[i].length; j++) {
                    if(!(matrix[i][j] > matrix[i + 1][j])) return false;
                }
            }
            
            return true;
        }`,
        code: function rowsRearranging(matrix) {
            //Sort array rows by total sum of each row.
            matrix.sort((a, b) => {
                return b.reduce((i, j) => i += j, 0) - a.reduce((i, j) => i += j, 0);
            });
                
            //Loop through each row and ensure that they are strictly increasing.
            for(let i = 0; i < matrix.length - 1; i++) {
                //For each row, loop through each number and compare that index to the one below.
                for(let j = 0; j < matrix[i].length; j++) {
                    if(!(matrix[i][j] > matrix[i + 1][j])) return false;
                }
            }
            
            return true;
        },
        arguments: {
            descriptions: [
                {
                    text: "Square Matrix - Array of Integer Arrays (Form of [1,2,3], [4,5,6], [7,8,9])",
                    type: "NumberArrayArray"
                }
            ]
        }
    },
    runnersMeetings: {
        name: 'runnersMeetings',
        instructions: `Some people run along a straight line in the same direction. They start simultaneously at pairwise distinct positions and run with constant speed (which may differ from person to person).

        If two or more people are at the same point at some moment we call that a meeting. The number of people gathered at the same point is called meeting cardinality.
        
        For the given starting positions and speeds of runners find the maximum meeting cardinality assuming that people run infinitely long. If there will be no meetings, return -1 instead.`,
        codeOutput: 
        `function runnersMeetings(startPosition, speed) {
            let intersections = {};
            //Void helper function to see if two lines(people) will cross.
            const findIntersection = (speed1, speed2, start1, start2) => {
                //If the slopes are the same, return (this would result in x,y keys of +/- Infinity)
                if(speed1 - speed2 === 0) return;
                //Use y=mx+b to solve for x and y (set runners equal to each other, solve for x, then for y)
                let xVal = (start2 - start1) / (speed1 - speed2);
                let yVal = (speed1 * xVal) + start1;
                //If there is an intersection already marked, check to see if each runner is in the intersection's array already (to exclude duplicates)
                if(intersections[\`\${xVal},\${yVal}\`]) {
                    if(!intersections[\`\${xVal},\${yVal}\`].includes(\`\${start1},\${speed1}\`)) {
                        intersections[\`\${xVal},\${yVal}\`].push(\`\${start1},\${speed1}\`);
                    }
                    if(!intersections[\`\${xVal},\${yVal}\`].includes(\`\${start2},\${speed2}\`)) {
                        intersections[\`\${xVal},\${yVal}\`].push(\`\${start2},\${speed2}\`);
                    }
                    //Otherwise, put both runners in the new array for this intersection.
                } else {
                    intersections[\`\${xVal},\${yVal}\`] = [\`\${start1},\${speed1}\`, \`\${start2},\${speed2}\`];
                }
            };
            //Count number of meetings for each element using the helper function, except for when both indexes refer to the same runner.
            for(let i = 0; i < startPosition.length; i++) {
                for(let j = 0; j < startPosition.length; j++) {
                    if(i === j) continue;
                    findIntersection(speed[i], speed[j], startPosition[i], startPosition[j]);
                }
            }
            
            //If there are keys in the interseections object, return the array with the max intersecting runners.
            return Object.keys(intersections).length === 0 ? -1 : 
            Math.max(...Object.values(intersections).map(intersection => {
                return intersection.length;
            }));
        }`,
        code: function runnersMeetings(startPosition, speed) {
            let intersections = {};
            //Void helper function to see if two lines(people) will cross.
            const findIntersection = (speed1, speed2, start1, start2) => {
                //If the slopes are the same, return (this would result in x,y keys of +/- Infinity)
                if(speed1 - speed2 === 0) return;
                //Use y=mx+b to solve for x and y (set runners equal to each other, solve for x, then for y)
                let xVal = (start2 - start1) / (speed1 - speed2);
                let yVal = (speed1 * xVal) + start1;
                //If there is an intersection already marked, check to see if each runner is in the intersection's array already (to exclude duplicates)
                if(intersections[`${xVal},${yVal}`]) {
                    if(!intersections[`${xVal},${yVal}`].includes(`${start1},${speed1}`)) {
                        intersections[`${xVal},${yVal}`].push(`${start1},${speed1}`);
                    }
                    if(!intersections[`${xVal},${yVal}`].includes(`${start2},${speed2}`)) {
                        intersections[`${xVal},${yVal}`].push(`${start2},${speed2}`);
                    }
                    //Otherwise, put both runners in the new array for this intersection.
                } else {
                    intersections[`${xVal},${yVal}`] = [`${start1},${speed1}`, `${start2},${speed2}`];
                }
            };
            //Count number of meetings for each element using the helper function, except for when both indexes refer to the same runner.
            for(let i = 0; i < startPosition.length; i++) {
                for(let j = 0; j < startPosition.length; j++) {
                    if(i === j) continue;
                    findIntersection(speed[i], speed[j], startPosition[i], startPosition[j]);
                }
            }
            
            //If there are keys in the interseections object, return the array with the max intersecting runners.
            return Object.keys(intersections).length === 0 ? -1 : 
            Math.max(...Object.values(intersections).map(intersection => {
                return intersection.length;
            }));
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Integers (No Brackets []; Form of 1,2,3...)",
                    type: "NumberArray"
                },
                {
                    text: "Array of Integers of Same Length (No Brackets []; Form of 1,2,3...)",
                    type: "NumberArray"
                }
            ]
        }
    }
};

export default challenges_o_r;

/*

Template:

name: {
    name: ``,
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