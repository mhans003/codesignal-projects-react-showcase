//Include global BigInt (as comment) in order to prevent no-undef in this environment.
/* global BigInt */

const challenges_g_j = {
    gravitation: {
        instructions: `You are given a vertical box divided into equal columns. Someone dropped several stones from its top through the columns. Stones are falling straight down at a constant speed (equal for all stones) while possible (i.e. while they haven't reached the ground or they are not blocked by another motionless stone). Given the state of the box at some moment in time, find out which columns become motionless first.`,
        codeOutput: 
        `function gravitation(rows) {
            let motionless = [];
            let smallest = Infinity;
            //Count number of non-stone spaces in each column.
            for(let col = 0; col < rows[0].length; col++) {
                let spaces = 0;
                let foundStones = false;
                for(let row = 0; row < rows.length; row++) {
                    //Once a # is found, spaces can be counted.
                    if(rows[row][col] === "#") foundStones = true;
                    if(foundStones && rows[row][col] === ".") spaces++;
                }
                //Once the number of spaces are counted, see if this is the smallest so far.
                //If this is the smallest, mark as the new smallest and recrete the motionless array to include this column
                if(spaces < smallest) {
                    smallest = spaces;
                    motionless = [col];
                } else if(spaces === smallest) {
                    //If this is equal to the current smallest, push this column.
                    motionless.push(col);
                }
            }
            //Return the array with all the indexes.
            return motionless;
        }`,
        code: function gravitation(rows) {
            console.log(rows);
            let motionless = [];
            let smallest = Infinity;
            //Count number of non-stone spaces in each column.
            for(let col = 0; col < rows[0].length; col++) {
                let spaces = 0;
                let foundStones = false;
                for(let row = 0; row < rows.length; row++) {
                    //Once a # is found, spaces can be counted.
                    if(rows[row][col] === "#") foundStones = true;
                    if(foundStones && rows[row][col] === ".") spaces++;
                }
                //Once the number of spaces are counted, see if this is the smallest so far.
                //If this is the smallest, mark as the new smallest and recrete the motionless array to include this column
                if(spaces < smallest) {
                    smallest = spaces;
                    motionless = [col];
                } else if(spaces === smallest) {
                    //If this is equal to the current smallest, push this column.
                    motionless.push(col);
                }
            }
            //Return the array with all the indexes.
            return motionless;
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Equal-Length Strings (Only . and #; No Spaces or Brackets; Form of #..##,.##.#, etc.)",
                    type: "StringArray"
                }
            ]
        }
    },
    growingPlant: {
        instructions: `Caring for a plant can be hard work, but since you tend to it regularly, you have a plant that grows consistently. Each day, its height increases by a fixed amount represented by the integer upSpeed. But due to lack of sunlight, the plant decreases in height every night, by an amount represented by downSpeed.

        Since you grew the plant from a seed, it started at height 0 initially. Given an integer desiredHeight, your task is to find how many days it'll take for the plant to reach this height.`,
        codeOutput: 
        `function growingPlant(upSpeed, downSpeed, desiredHeight) {
            let days = 0;
            let currentHeight = 0;
            //Loop each day, continuing until the height from the day reaches the desired height. If not yet reached, continue by decreasing height from the night and move on to the next day.
            while(true) {
                days++;
                currentHeight += upSpeed;
                if(currentHeight >= desiredHeight) return days;
                currentHeight -= downSpeed;
            }
        }`,
        code: function growingPlant(upSpeed, downSpeed, desiredHeight) {
            let days = 0;
            let currentHeight = 0;
            //Loop each day, continuing until the height from the day reaches the desired height. If not yet reached, continue by decreasing height from the night and move on to the next day.
            while(true) {
                days++;
                currentHeight += upSpeed;
                if(currentHeight >= desiredHeight) return days;
                currentHeight -= downSpeed;
            }
        },
        arguments: {
            descriptions: [
                {
                    text: "Integer for upSpeed",
                    type: "Number"
                },
                {
                    text: "Integer for downSpeed",
                    type: "Number"
                },
                {
                    text: "Integer for desiredHeight",
                    type: "Number"
                }
            ]
        }
    },
    holiday: {
        instructions: `John Doe likes holidays very much, and he was very happy to hear that his country's government decided to introduce yet another one. He heard that the new holiday will be celebrated each year on the xth week of month, on weekDay.

        Your task is to return the day of month on which the holiday will be celebrated in the year yearNumber.
        
        For your convenience, here are the lists of months names and lengths and the list of days of the week names.
        
        Months: "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December".
        Months lengths: 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31.
        Days of the week: "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday".
        Please, note that in leap years February has 29 days.`,
        codeOutput: 
        `function holiday(x, weekDay, month, yearNumber) {
            //Keep track of months.
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
                //Keep track of if this year is a leap year.
                let isLeap = false;
                
                //Keep track of days.
                let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
                
                //Find the day of the week that it will be at the beginning of a given month.
                const findCurrentDay = inputDate => {
                    //Find the number of days in years passed since 1996.
                    let days = ((inputDate[1] - 1996) * 365);
                    //Add in the total number of leap days that passed in years before.
                    days += Math.ceil((inputDate[1] - 1996) / 4);
                    //Remove extra leap day from specific years.
                    if(inputDate[1] > 2100) days--;
                    if(inputDate[1] > 2200) days--;
                    if(inputDate[1] > 2300) days--;
                    //Add in one more day if this year is a leap year, AND if leap day already passed, excluding certain years (which aren't a leap year)
                    
                    if(inputDate[1] % 4 === 0 && inputDate[1] !== 2100 && inputDate[1] !== 2200 && inputDate[1] !== 2300 && inputDate[1] !== 2500) {
                        if(inputDate[0] > 2) days++;
                        isLeap = true;
                    };
                    
                    //Add in the number of days that have passed so far before this month this year (leap day already included if this is a leap year).
                    for(let i = 0; i < inputDate[0] - 1; i++) {
                        days += months[i].days;
                    }
                    
                    //Finally, add in the number of days passed this month.
                    days += (inputDate[2] - 1);
                    
                    //Return the number of the current day of the week from the input string (if 0 - Monday, 6 - Sunday, etc.)
                    return days % 7;
                };
                
                //Find the month number of the month name passed into the function.
                let monthNumber = months.indexOf(months.find(thisMonth => thisMonth.name === month)) + 1;
                
                //Find the day of the week (0 - Monday; 6 - Sunday) on the first day of the target month/year.
                let dayOfFirst = findCurrentDay([monthNumber, yearNumber, 1]);
                
                //Find the date when the holiday will occur.
                let dateOfHoliday = 1 + (days.indexOf(weekDay) === dayOfFirst  ? 0 : days.indexOf(weekDay) > dayOfFirst ? days.indexOf(weekDay) - dayOfFirst : (7 - dayOfFirst) + days.indexOf(weekDay)) + (7 * (x - 1));
                
                //Check one final case: If this is an actual leap day, don't return -1. In any case, return the date if not over bounds of the given month.    
                return dateOfHoliday <= months[months.indexOf(months.find(thisMonth => thisMonth.name === month))].days ||
                (isLeap && month === "February" && dateOfHoliday === 29) ? 
                dateOfHoliday :
                -1;
        }`,
        code: function holiday(x, weekDay, month, yearNumber) {
            //Keep track of months.
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
                //Keep track of if this year is a leap year.
                let isLeap = false;
                
                //Keep track of days.
                let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
                
                //Find the day of the week that it will be at the beginning of a given month.
                const findCurrentDay = inputDate => {
                    //Find the number of days in years passed since 1996.
                    let days = ((inputDate[1] - 1996) * 365);
                    //Add in the total number of leap days that passed in years before.
                    days += Math.ceil((inputDate[1] - 1996) / 4);
                    //Remove extra leap day from specific years.
                    if(inputDate[1] > 2100) days--;
                    if(inputDate[1] > 2200) days--;
                    if(inputDate[1] > 2300) days--;
                    //Add in one more day if this year is a leap year, AND if leap day already passed, excluding certain years (which aren't a leap year)
                    
                    if(inputDate[1] % 4 === 0 && inputDate[1] !== 2100 && inputDate[1] !== 2200 && inputDate[1] !== 2300 && inputDate[1] !== 2500) {
                        if(inputDate[0] > 2) days++;
                        isLeap = true;
                    };
                    
                    //Add in the number of days that have passed so far before this month this year (leap day already included if this is a leap year).
                    for(let i = 0; i < inputDate[0] - 1; i++) {
                        days += months[i].days;
                    }
                    
                    //Finally, add in the number of days passed this month.
                    days += (inputDate[2] - 1);
                    
                    //Return the number of the current day of the week from the input string (if 0 - Monday, 6 - Sunday, etc.)
                    return days % 7;
                };
                
                //Find the month number of the month name passed into the function.
                let monthNumber = months.indexOf(months.find(thisMonth => thisMonth.name === month)) + 1;
                
                //Find the day of the week (0 - Monday; 6 - Sunday) on the first day of the target month/year.
                let dayOfFirst = findCurrentDay([monthNumber, yearNumber, 1]);
                
                //Find the date when the holiday will occur.
                let dateOfHoliday = 1 + (days.indexOf(weekDay) === dayOfFirst  ? 0 : days.indexOf(weekDay) > dayOfFirst ? days.indexOf(weekDay) - dayOfFirst : (7 - dayOfFirst) + days.indexOf(weekDay)) + (7 * (x - 1));
                
                //Check one final case: If this is an actual leap day, don't return -1. In any case, return the date if not over bounds of the given month.    
                return dateOfHoliday <= months[months.indexOf(months.find(thisMonth => thisMonth.name === month))].days ||
                (isLeap && month === "February" && dateOfHoliday === 29) ? 
                dateOfHoliday :
                -1;
        },
        arguments: {
            descriptions: [
                {
                    text: "Integer x",
                    type: "Number"
                },
                {
                    text: "Weekday (Written Correctly)",
                    type: "String"
                },
                {
                    text: "Month (Written Correctly)",
                    type: "String"
                },
                {
                    text: "Year (Written Correctly)",
                    type: "Number"
                }
            ]
        }
    },
    houseNumbersSum: {
        instructions: `A boy is walking a long way from school to his home. To make the walk more fun he decides to add up all the numbers of the houses that he passes by during his walk. Unfortunately, not all of the houses have numbers written on them, and on top of that the boy is regularly taking turns to change streets, so the numbers don't appear to him in any particular order.

        At some point during the walk the boy encounters a house with number 0 written on it, which surprises him so much that he stops adding numbers to his total right after seeing that house.
        
        For the given sequence of houses determine the sum that the boy will get. It is guaranteed that there will always be at least one 0 house on the path.`,
        codeOutput: 
        `function houseNumbersSum(inputArray) {
            return inputArray.slice(0, inputArray.findIndex(element => element === 0)).reduce((a, b) => a += b, 0); 
        }`,
        code: function houseNumbersSum(inputArray) {
            return inputArray.slice(0, inputArray.findIndex(element => element === 0)).reduce((a, b) => a += b, 0); 
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Integers (No Brackets []; Form of 1,2,3,4...)",
                    type: "NumberArray"
                }
            ]
        }
    },
    houseOfCats: {
        instructions: `There are some people and cats in a house. You are given the number of legs they have all together. Your task is to return an array containing every possible number of people that could be in the house sorted in ascending order. It's guaranteed that each person has 2 legs and each cat has 4 legs.`,
        codeOutput: 
        `function houseOfCats(legs) {
            //Start assuming all legs belong to people.
            //Incrementally group 4 legs into cats, each time grouping the legs left into 2 (people)
            let legsLeft = legs;
            let possiblePeople = [];
            while(legsLeft >= 0) {
                //Put this possible number into the beginning of the array so it is sorted.
                possiblePeople.unshift(legsLeft / 2);
                legsLeft -= 4;
            }
            return possiblePeople;
        }`,
        code: function houseOfCats(legs) {
            //Start assuming all legs belong to people.
            //Incrementally group 4 legs into cats, each time grouping the legs left into 2 (people)
            let legsLeft = legs;
            let possiblePeople = [];
            while(legsLeft >= 0) {
                //Put this possible number into the beginning of the array so it is sorted.
                possiblePeople.unshift(legsLeft / 2);
                legsLeft -= 4;
            }
            return possiblePeople;
        },
        arguments: {
            descriptions: [
                {
                    text: "Integer (Number of Legs)",
                    type: "Number"
                }
            ]
        }
    },
    htmlEndTagByStartTag: {
        instructions: `You are implementing your own HTML editor. To make it more comfortable for developers you would like to add an auto-completion feature to it.

        Given the starting HTML tag, find the appropriate end tag which your editor should propose.`,
        codeOutput: 
        `function htmlEndTagByStartTag(startTag) {
            //Get the tag name.
            let tag = startTag.substr(1, startTag.indexOf(" ")) ? 
            startTag.substr(1, startTag.indexOf(" ") - 1) : 
            startTag.substr(1, startTag.indexOf(">") - 1);
            //Return the closing version of the tag.
            return \`</\${tag}>\`;
        }`,
        code: function htmlEndTagByStartTag(startTag) {
            //Get the tag name.
            let tag = startTag.substr(1, startTag.indexOf(" ")) ? 
            startTag.substr(1, startTag.indexOf(" ") - 1) : 
            startTag.substr(1, startTag.indexOf(">") - 1);
            //Return the closing version of the tag (Formatted for output in browser).
            return `&lt;/${tag}&gt;`;
        },
        arguments: {
            descriptions: [
                {
                    text: "Starting HTML Tag",
                    type: "String"
                }
            ]
        }
    },
    increaseNumberRoundness: {
        instructions: `Define an integer's roundness as the number of trailing zeroes in it.

        Given an integer n, check if it's possible to increase n's roundness by swapping some pair of its digits.`,
        codeOutput: 
        `function increaseNumberRoundness(n) {
            //Create an array out of this number.
            let number = String(n).split("").reverse();
            let zeroEnd = false;
            console.log(number);
            //Go through each number. If we encounter a "second" group of zeros, we know we can swap.
            for(let i = 0; i < number.length; i++) {
                if(number[i] !== "0") {
                    zeroEnd = true;
                } else if(number[i] === "0" && zeroEnd) {
                    return true;
                }
            }
            return false;
        }`,
        code: function increaseNumberRoundness(n) {
            //Create an array out of this number.
            let number = String(n).split("").reverse();
            let zeroEnd = false;
            console.log(number);
            //Go through each number. If we encounter a "second" group of zeros, we know we can swap.
            for(let i = 0; i < number.length; i++) {
                if(number[i] !== "0") {
                    zeroEnd = true;
                } else if(number[i] === "0" && zeroEnd) {
                    return true;
                }
            }
            return false;
        },
        arguments: {
            descriptions: [
                {
                    text: "Whole Number Integer",
                    type: "Number"
                }
            ]
        }
    },
    integerToStringOfFixedWidth: {
        instructions: `Given a positive integer number and a certain length, we need to modify the given number to have a specified length. We are allowed to do that either by cutting out leading digits (if the number needs to be shortened) or by adding 0s in front of the original number.`,
        codeOutput: 
        `function integerToStringOfFixedWidth(number, width) {
            //If the number string is the same size, simply return string version.
            //If the number string is longer, return a substring trimming off the first characters until the sizes are equal.
            //If the number string is shorter, put 0s into the front by using array concat, filling with the correct number of 0s, then joining back into a string.
            return String(number).length === width ? 
            String(number) :
            String(number).length > width ?
            String(number).substr(String(number).length - width) :
            [].concat(...new Array(width - String(number).length).fill(0), String(number).split("")).join("");
        }`,
        code: function integerToStringOfFixedWidth(number, width) {
            //If the number string is the same size, simply return string version.
            //If the number string is longer, return a substring trimming off the first characters until the sizes are equal.
            //If the number string is shorter, put 0s into the front by using array concat, filling with the correct number of 0s, then joining back into a string.
            return String(number).length === width ? 
            String(number) :
            String(number).length > width ?
            String(number).substr(String(number).length - width) :
            [].concat(...new Array(width - String(number).length).fill(0), String(number).split("")).join("");
        },
        arguments: {
            descriptions: [
                {
                    text: "Integer (number)",
                    type: "Number"
                },
                {
                    text: "Integer (width)",
                    type: "Number"
                }
            ]
        }
    },
    isBeautifulString: {
        instructions: `A string is said to be beautiful if each letter in the string appears at most as many times as the previous letter in the alphabet within the string; ie: b occurs no more times than a; c occurs no more times than b; etc. Note that letter a has no previous letter.

        Given a string, check whether it is beautiful.`,
        codeOutput: 
        `function isBeautifulString(inputString) {
            //Create character map using character codes as keys
            let inputArray = inputString.split("");
            let charMap = {};
            
            inputArray.forEach(character => {
                charMap[String(character.charCodeAt(0))] ? 
                charMap[String(character.charCodeAt(0))]++ : 
                charMap[String(character.charCodeAt(0))] = 1;
            });
            
            //Go through each key in the character map.
            for(let charKey in charMap) {
                //If this key has more than the 'previous' key based on character codes, OR if we are not at 'a' and there is no key for the previous character code, return false;
                if(charMap[charKey] > charMap[String(Number(charKey) - 1)] || !charMap[String(Number(charKey) - 1)] && charKey !== "97") return false;
            }
            
            return true;
        }`,
        code: function isBeautifulString(inputString) {
            //Create character map using character codes as keys
            let inputArray = inputString.split("");
            let charMap = {};
            
            inputArray.forEach(character => {
                charMap[String(character.charCodeAt(0))] ? 
                charMap[String(character.charCodeAt(0))]++ : 
                charMap[String(character.charCodeAt(0))] = 1;
            });
            
            //Go through each key in the character map.
            for(let charKey in charMap) {
                //If this key has more than the 'previous' key based on character codes, OR if we are not at 'a' and there is no key for the previous character code, return false;
                if(charMap[charKey] > charMap[String(Number(charKey) - 1)] || !charMap[String(Number(charKey) - 1)] && charKey !== "97") return false;
            }
            
            return true;
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
    isCaseInsensitivePalindrome: {
        instructions: `Given a string, check if it can become a palindrome through a case change of some (possibly, none) letters.`,
        codeOutput: 
        `function isCaseInsensitivePalindrome(inputString) {
            //Default to lower case to compare palindromes.
            let lowerString = inputString.toLowerCase();
            //If the lowercase version is a palindrome, return true;
            if(lowerString.split("").reverse().join("") === lowerString) return true;
            return false;
        }`,
        code: function isCaseInsensitivePalindrome(inputString) {
            //Default to lower case to compare palindromes.
            let lowerString = inputString.toLowerCase();
            //If the lowercase version is a palindrome, return true;
            if(lowerString.split("").reverse().join("") === lowerString) return true;
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
    isDigit: {
        instructions: `Determine if symbol is a digit`,
        codeOutput: 
        `function isDigit(symbol) {
            if(!(symbol.charCodeAt(0) > 47 && symbol.charCodeAt(0) < 58)) return false;
            return true;
        }`,
        code: function isDigit(symbol) {
            if(!(symbol.charCodeAt(0) > 47 && symbol.charCodeAt(0) < 58)) return false;
            return true;
        },
        arguments: {
            descriptions: [
                {
                    text: "Single Character",
                    type: "String"
                }
            ]
        }
    },
    isInfiniteProcess: {
        instructions: `Given integers a and b, determine whether the following pseudocode results in an infinite loop

        while a is not equal to b do
          increase a by 1
          decrease b by 1
        Assume that the program is executed on a virtual machine which can store arbitrary long numbers and execute forever.`,
        codeOutput: 
        `function isInfiniteProcess(a, b) {
            //Is a greater than b? If so, it is already infinite.
            return a > b ? 
            true : 
            //Otherwise, is a equal to b? If so, this is not infinite.
            a === b ? 
            false : 
            //Otherwise, does the difference between b and a result in an odd number greater than 0? 
            //If so, it is infinite. Otherwise, it is not.
            b - a > 0 && (b - a) % 2 === 1 ? 
            true : 
            false;
        }`,
        code: function isInfiniteProcess(a, b) {
            //Is a greater than b? If so, it is already infinite.
            return a > b ? 
            true : 
            //Otherwise, is a equal to b? If so, this is not infinite.
            a === b ? 
            false : 
            //Otherwise, does the difference between b and a result in an odd number greater than 0? 
            //If so, it is infinite. Otherwise, it is not.
            b - a > 0 && (b - a) % 2 === 1 ? 
            true : 
            false;
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
    isInformationConsistent: {
        instructions: `Court is in session. We got a group of witnesses who have all taken an oath to tell the truth. The prosecutor is pointing at the defendants one by one and asking each witnesses a simple question - "guilty or not?". The witnesses are allowed to respond in one of the following three ways:

        I am sure he/she is guilty.
        I am sure he/she is innocent.
        I have no idea.
        The prosecutor has a hunch that one of the witnesses might not be telling the truth so she decides to cross-check all of their testimonies and see if the information gathered is consistent, i.e. there are no two witnesses A and B and a defendant C such that A says C is guilty while B says C is innocent.`,
        codeOutput: 
        `function isInformationConsistent(evidences) {
            //Loop through each column and see if we see values of 1 and -1 simultaneously.
            for(let col = 0; col < evidences[0].length; col++) {
                //Loop through each witness (row) of this defendant (col).
                let foundGuilty = false;
                let foundInnocent = false;
                for(let row = 0; row < evidences.length; row++) {
                    //Check if a guilty or innocent value is found.
                    if(evidences[row][col] === -1) foundInnocent = true;
                    if(evidences[row][col] === 1) foundGuilty = true;
                    //If both innocent and guilty verdicts have been found, return false.
                    if(foundGuilty && foundInnocent) return false;
                }
            }
            return true;
        }`,
        code: function isInformationConsistent(evidences) {
            //Loop through each column and see if we see values of 1 and -1 simultaneously.
            for(let col = 0; col < evidences[0].length; col++) {
                //Loop through each witness (row) of this defendant (col).
                let foundGuilty = false;
                let foundInnocent = false;
                for(let row = 0; row < evidences.length; row++) {
                    //Check if a guilty or innocent value is found.
                    if(evidences[row][col] === -1) foundInnocent = true;
                    if(evidences[row][col] === 1) foundGuilty = true;
                    //If both innocent and guilty verdicts have been found, return false.
                    if(foundGuilty && foundInnocent) return false;
                }
            }
            return true;
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Equal-Length Integer Arrays With Only 1, -1, and 0's (Form of [-1,0,1], [1,0,-1]...)",
                    type: "NumberArrayArray"
                }
            ]
        }
    }
};

export default challenges_g_j;

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

*/