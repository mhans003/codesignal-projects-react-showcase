//Include global BigInt (as comment) in order to prevent no-undef in this environment.
/* global BigInt */

const challenges_o_r = {
    pagesNumberingWithInk: {
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
    phoneCall: {
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
    polygonPerimeter: {
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
    replaceAllDigitsRegExp: {
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
    }
};

export default challenges_o_r;

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