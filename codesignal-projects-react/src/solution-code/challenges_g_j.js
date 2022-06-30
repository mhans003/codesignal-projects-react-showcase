//Include global BigInt (as comment) in order to prevent no-undef in this environment.
/* global BigInt */

const challenges_g_j = {
    gravitation: {
        name: 'gravitation',
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
        name: 'growingPlant',
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
    hammingWeight: {
        name: `hammingWeight`,
        instructions: `Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

        Note:
        
        Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
        In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3, the input represents the signed integer. -3.`,
        codeOutput: 
        `var hammingWeight = function(n) {
            //Convert the binary string into a string split into array form.
            //For each element in the array, if it is a '1' representing a set bit, add to a total, starting at 0.
            return n.toString(2)
                .split("")
                .reduce((prev, current) => current === "1" ? prev + 1 : prev, 0)
        };`,
        code: function hammingWeight(n) {
            //Convert the binary string into a string split into array form.
            //For each element in the array, if it is a '1' representing a set bit, add to a total, starting at 0.
            return n.toString(2)
                .split("")
                .reduce((prev, current) => current === "1" ? prev + 1 : prev, 0)
        },
        arguments: {
            descriptions: [
                {
                    text: "Standard Decimal Integer",
                    type: "Number"
                }
            ]
        }
    },
    hammingDistance: {
        name: `hammingDistance`,
        instructions: `The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

        Given two integers x and y, return the Hamming distance between them.`,
        codeOutput: 
        `var hammingDistance = function(x, y) {
            //Convert to array.
            let larger = Math.max(x, y).toString(2).split("");
            let smaller = Math.min(x, y).toString(2).split("");
            
            //Add 0 bits to the beginning of the shorter array to make same length;
            while(smaller.length < larger.length) {
                smaller.unshift("0");
            }
            
            let hammingDistance = 0;
            
            for(let i = 0; i < smaller.length; i++) {
                //Check if this spot has different bits in each number.
                if(smaller[i] !== larger[i]) hammingDistance++;
            }
            
            return hammingDistance;
        };`,
        code: function hammingDistance(x, y) {
            //Convert to array.
            let larger = Math.max(x, y).toString(2).split("");
            let smaller = Math.min(x, y).toString(2).split("");
            
            //Add 0 bits to the beginning of the shorter array to make same length;
            while(smaller.length < larger.length) {
                smaller.unshift("0");
            }
            
            let hammingDistance = 0;
            
            for(let i = 0; i < smaller.length; i++) {
                //Check if this spot has different bits in each number.
                if(smaller[i] !== larger[i]) hammingDistance++;
            }
            
            return hammingDistance;
        },
        arguments: {
            descriptions: [
                {
                    text: "Whole Number Integer x",
                    type: "Number"
                },
                {
                    text: "Whole Number Integer y",
                    type: "Number"
                }
            ]
        }
    },
    hasGroupsSizeX: {
        name: `hasGroupsSizeX`,
        instructions: `In a deck of cards, each card has an integer written on it.

        Return true if and only if you can choose X >= 2 such that it is possible to split the entire deck into 1 or more groups of cards, where:
        
        Each group has exactly X cards.
        All the cards in each group have the same integer.`,
        codeOutput: 
        `var hasGroupsSizeX = function(deck) {
            //If the deck has no more than 1 card, return false.
            if(deck.length < 2) return false; 
            
            //Create an object map of the cards
            let deckMap = {};
            
            //Go through each card in the deck, and organize with other cards of its number.
            while(deck.length) {
                let thisCard = deck.pop();
                if(deckMap[thisCard]) {
                    deckMap[thisCard]++;
                } else {
                    deckMap[thisCard] = 1;
                }
            }
            
            //Isolate every 'number' of each card number.
            let cardNumbers = Object.values(deckMap).sort((a, b) => a - b);
        
            //Get the smallest number of possible groupings to check against all number of each card number.
            let factors = getFactors(cardNumbers[0]);
            
            //Find a factor in the factor list that can divide evenly into EVERY number of each card number
            for(let i = 0; i < factors.length; i++) {
                if(cardNumbers.every(cardNumber => cardNumber % factors[i] === 0)) return true;
            }
            
            return false;
            
            //Helper function to find all factors (ignoring 1) 
            function getFactors(n) {
                let max = n;
                let factors = [];
                for(let i = 2; i <= max; i++) {
                    if(n % i === 0) {
                        factors.push(i);
                        //Ignore 1
                        if(n / i !== 1) {
                            factors.push(n / i);
                        }
                        //Update max
                        max = n / i;
                    }
                }
                //Return sorted factors
                return factors.sort((a, b) => b - a);
            }
        };`,
        code: function hasGroupsSizeX(deck) {
            //If the deck has no more than 1 card, return false.
            if(deck.length < 2) return false; 
            
            //Create an object map of the cards
            let deckMap = {};
            
            //Go through each card in the deck, and organize with other cards of its number.
            while(deck.length) {
                let thisCard = deck.pop();
                if(deckMap[thisCard]) {
                    deckMap[thisCard]++;
                } else {
                    deckMap[thisCard] = 1;
                }
            }
            
            //Isolate every 'number' of each card number.
            let cardNumbers = Object.values(deckMap).sort((a, b) => a - b);
        
            //Get the smallest number of possible groupings to check against all number of each card number.
            let factors = getFactors(cardNumbers[0]);
            
            //Find a factor in the factor list that can divide evenly into EVERY number of each card number
            for(let i = 0; i < factors.length; i++) {
                if(cardNumbers.every(cardNumber => cardNumber % factors[i] === 0)) return true;
            }
            
            return false;
            
            //Helper function to find all factors (ignoring 1) 
            function getFactors(n) {
                let max = n;
                let factors = [];
                for(let i = 2; i <= max; i++) {
                    if(n % i === 0) {
                        factors.push(i);
                        //Ignore 1
                        if(n / i !== 1) {
                            factors.push(n / i);
                        }
                        //Update max
                        max = n / i;
                    }
                }
                //Return sorted factors
                return factors.sort((a, b) => b - a);
            }
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Whole Integers (e.g. 1,2,3,4,4,3,2,1)",
                    type: "NumberArray"
                }
            ]
        }
    },
    heightChecker: {
        name: `heightChecker`,
        instructions: `A school is trying to take an annual photo of all the students. The students are asked to stand in a single file line in non-decreasing order by height. Let this ordering be represented by the integer array expected where expected[i] is the expected height of the ith student in line.

        You are given an integer array heights representing the current order that the students are standing in. Each heights[i] is the height of the ith student in line (0-indexed).
        
        Return the number of indices where heights[i] != expected[i].`,
        codeOutput: 
        `var heightChecker = function(heights) {
            let count = 0;
            
            //Duplicate array and sort.
            let sorted = [...heights];
            sorted.sort((a, b) => a - b);
                
            //Compare each index in sorted to each index in original.
            heights.forEach((height, index) => {
                if(height !== sorted[index]) count++;
            });
            
            return count;
        };`,
        code: function heightChecker(heights) {
            let count = 0;
            
            //Duplicate array and sort.
            let sorted = [...heights];
            sorted.sort((a, b) => a - b);
                
            //Compare each index in sorted to each index in original.
            heights.forEach((height, index) => {
                if(height !== sorted[index]) count++;
            });
            
            return count;
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Integers (e.g. 3,2,3,5,1,6)",
                    type: "NumberArray"
                }
            ]
        }
    },
    higherVersion: {
        name: 'higherVersion',
        instructions: `Given two version strings composed of several non-negative decimal fields separated by periods ("."), both strings contain equal number of numeric fields. Return true if the first version is higher than the second version and false otherwise.

        The syntax follows the regular semver ordering rules:
        
        1.0.5 < 1.1.0 < 1.1.5 < 1.1.10 < 1.2.0 < 1.2.2
        < 1.2.10 < 1.10.2 < 2.0.0 < 10.0.0
        There are no leading zeros in any of the numeric fields, i.e. you do not have to handle inputs like 100.020.003 (it would instead be given as 100.20.3).`,
        codeOutput: 
        `function higherVersion(ver1, ver2) {
            //If the strings are the same, return false;
            if(ver1 === ver2) return false;
            //Create array versions of each number as numbers for proper comparisons
            let ver1split = ver1.split(".").map(string => Number(string));
            let ver2split = ver2.split(".").map(string => Number(string));
            //Return early when the appropriate condition is met.
            for(let i = 0; i < ver1split.length; i++) {
                if(ver2split[i] > ver1split[i]) return false;
                if(ver1split[i] > ver2split[i]) return true;
            }
        }`,
        code: function higherVersion(ver1, ver2) {
            //If the strings are the same, return false;
            if(ver1 === ver2) return false;
            //Create array versions of each number as numbers for proper comparisons
            let ver1split = ver1.split(".").map(string => Number(string));
            let ver2split = ver2.split(".").map(string => Number(string));
            //Return early when the appropriate condition is met.
            for(let i = 0; i < ver1split.length; i++) {
                if(ver2split[i] > ver1split[i]) return false;
                if(ver1split[i] > ver2split[i]) return true;
            }
        },
        arguments: {
            descriptions: [
                {
                    text: "String of numbers/decimals as described above (e.g. 1.2.3)",
                    type: "String"
                },
                {
                    text: "String of numbers/decimals as described above (e.g. 1.2.3)",
                    type: "String"
                }
            ]
        }
    },
    holiday: {
        name: 'holiday',
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
        name: 'houseNumbersSum',
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
        name: 'houseOfCats',
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
        name: 'htmlEndTagByStartTag',
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
        name: 'increaseNumberRoundness',
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
    insertionSortList: {
        name: `insertionSortList`,
        instructions: `Implement insertion sort on an array of integers.`,
        codeOutput: 
        `var insertionSortList = function(head) {
            //Iterate through the unsorted portion.
            for(let i = 1; i < head.length; i++) {
                let currentElement = head[i];
                //Iterate back through the sorted portion of this list.
                let j = i - 1;
                while((j >= 0) && (currentElement < head[j])) {
                    //Start shifting all elements upward in the sorted portion.
                    head[j + 1] = head[j];
                    //Move to the next element down.
                    j--;
                }
                //Place the current element in its correct spot
                head[j + 1] = currentElement;
            }
            return head;
        };`,
        code: function insertionSortList(head) {
            //Iterate through the unsorted portion.
            for(let i = 1; i < head.length; i++) {
                let currentElement = head[i];
                //Iterate back through the sorted portion of this list.
                let j = i - 1;
                while((j >= 0) && (currentElement < head[j])) {
                    //Start shifting all elements upward in the sorted portion.
                    head[j + 1] = head[j];
                    //Move to the next element down.
                    j--;
                }
                //Place the current element in its correct spot
                head[j + 1] = currentElement;
            }
            return head;
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Integers (e,g. 5,4,3,2,1)",
                    type: "NumberArray"
                }
            ]
        }
    },
    integerToStringOfFixedWidth: {
        name: 'integerToStringOfFixedWidth',
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
    intersection: {
        name: `intersection`,
        instructions: `Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.`,
        codeOutput: 
        `var intersection = function(nums1, nums2) {
            //Run function with correct parameters depending on which array has larger length.
            if(nums1.length > nums2.length) return findIntersections(nums1, nums2);
            return findIntersections(nums2, nums1);
            
            //Helper function looks through the larger array to find elements in the shorter array.
            function findIntersections(shorterArray, largerArray) {
                let intersections = [];
                for(let i = 0; i < shorterArray.length; i++) {
                    //Unique new values (found in both arrays) are added as intersections.
                    if(largerArray.includes(shorterArray[i]) && !intersections.includes(shorterArray[i])) {
                        intersections.push(shorterArray[i]);
                    }
                }
                return intersections;
            }
        };`,
        code: function intersection(nums1, nums2) {
            //Run function with correct parameters depending on which array has larger length.
            if(nums1.length > nums2.length) return findIntersections(nums1, nums2);
            return findIntersections(nums2, nums1);
            
            //Helper function looks through the larger array to find elements in the shorter array.
            function findIntersections(shorterArray, largerArray) {
                let intersections = [];
                for(let i = 0; i < shorterArray.length; i++) {
                    //Unique new values (found in both arrays) are added as intersections.
                    if(largerArray.includes(shorterArray[i]) && !intersections.includes(shorterArray[i])) {
                        intersections.push(shorterArray[i]);
                    }
                }
                return intersections;
            }
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Integers (Form of 1,2,3...)",
                    type: "NumberArray"
                },
                {
                    text: "Array of Integers (Form of 1,2,3...)",
                    type: "NumberArray"
                }
            ]
        }
    },
    intToRoman: {
        name: `intToRoman`,
        instructions: `Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

        Symbol       Value
        I             1
        V             5
        X             10
        L             50
        C             100
        D             500
        M             1000
        For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
        
        Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
        
        I can be placed before V (5) and X (10) to make 4 and 9. 
        X can be placed before L (50) and C (100) to make 40 and 90. 
        C can be placed before D (500) and M (1000) to make 400 and 900.
        Given an integer, convert it to a roman numeral.`,
        codeOutput: 
        `var intToRoman = function(num) {
            //This implementation only goes to 3,999.
            if(num > 3999) return "To Large (3,999 or less)";
            
            //Used to loop over each value, starting with smallest.
            let key = [
                ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
                ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
                ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
                ['M', 'MM', 'MMM']
            ];
            
            let currentPlace = 0;
            let result = [];
            
            while(num) {
                //Get this integer value.
                let current = num % 10;
                
                //If this value is not empty (not zero), get corresponding value.
                if(current) {
                    //Add this part of the roman number to the beginning of the result array.
                    result.unshift(key[currentPlace][current - 1]);
                }
                
                //Update num (go up one place).
                num = Math.floor(num / 10);
                
                //Increment Place to use in key.
                currentPlace++;
            }
            
            //Return the result individual numbers joined together.
            return result.join("");
        };`,
        code: function intToRoman(num) {
            //This implementation only goes to 3,999.
            if(num > 3999) return "To Large (3,999 or less)";
            
            //Used to loop over each value, starting with smallest.
            let key = [
                ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
                ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
                ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
                ['M', 'MM', 'MMM']
            ];
            
            let currentPlace = 0;
            let result = [];
            
            while(num) {
                //Get this integer value.
                let current = num % 10;
                
                //If this value is not empty (not zero), get corresponding value.
                if(current) {
                    //Add this part of the roman number to the beginning of the result array.
                    result.unshift(key[currentPlace][current - 1]);
                }
                
                //Update num (go up one place).
                num = Math.floor(num / 10);
                
                //Increment Place to use in key.
                currentPlace++;
            }
            
            //Return the result individual numbers joined together.
            return result.join("");
        },
        arguments: {
            descriptions: [
                {
                    text: "Whole Number Less than 4,000",
                    type: "Number"
                }
            ]
        }
    },
    isBeautifulString: {
        name: 'isBeautifulString',
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
        name: 'isCaseInsensitivePalindrome',
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
        name: 'isDigit',
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
    isHappy: {
        name: `isHappy`,
        instructions: `Write an algorithm to determine if a number n is happy.

        A happy number is a number defined by the following process:
        
        Starting with any positive integer, replace the number by the sum of the squares of its digits.
        Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
        Those numbers for which this process ends in 1 are happy.
        Return true if n is a happy number, and false if not.`,
        codeOutput: 
        `var isHappy = function(n) {
            let current = n;
            let attempted = [];
            
            //This must run at least once, so use do while (so that condition is met on first run)
            do {
                //Split current number into digits and square.
                let digits = current.toString().split("").map(digit => Number(digit));
                //Add sums of each digit
                let sum = digits.reduce((runningSum, current) => runningSum += current * current, 0);
                //Exit loop early if this number was already found.
                if(attempted.includes(sum)) break;
                //Check if this number is happy
                if(sum === 1) return true;
                //Update current number and store this number as attempted
                current = sum;
                attempted.push(current);
            } while(current !== n)
                
            return false;
        };`,
        code: function isHappy(n) {
            let current = n;
            let attempted = [];
            
            //This must run at least once, so use do while (so that condition is met on first run)
            do {
                //Split current number into digits and square.
                let digits = current.toString().split("").map(digit => Number(digit));
                //Add sums of each digit
                let sum = digits.reduce((runningSum, current) => runningSum += current * current, 0);
                //Exit loop early if this number was already found.
                if(attempted.includes(sum)) break;
                //Check if this number is happy
                if(sum === 1) return true;
                //Update current number and store this number as attempted
                current = sum;
                attempted.push(current);
            } while(current !== n)
                
            return false;
        },
        arguments: {
            descriptions: [
                {
                    text: "Whole Positive Number",
                    type: "Number"
                }
            ]
        }
    },
    isInfiniteProcess: {
        name: 'isInfiniteProcess',
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
        name: 'isInformationConsistent',
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
    },
    isIPv4Address: {
        name: 'isIPv4Address',
        instructions: `An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.

        Given a string, find out if it satisfies the IPv4 address naming rules.`,
        codeOutput: 
        `function isIPv4Address(inputString) {
            let octets = inputString.split(".");
            console.log(octets);
            
            //Handle length
            if(octets.length !== 4) return false;
            
            //Handle the size of each octet
            if(!octets.every(octet => octet > -1 && octet < 256)) return false;
            
            //Handle blanks
            if(octets.some(octet => octet === "")) return false;
            
            //Handle number errors (more than one digit for single-digit numbers)
            if(octets.some(octet => octet < 10 && octet.length > 1)) return false;
            
            return true;
        }`,
        code: function isIPv4Address(inputString) {
            let octets = inputString.split(".");
            console.log(octets);
            
            //Handle length
            if(octets.length !== 4) return false;
            
            //Handle the size of each octet
            if(!octets.every(octet => octet > -1 && octet < 256)) return false;
            
            //Handle blanks
            if(octets.some(octet => octet === "")) return false;
            
            //Handle number errors (more than one digit for single-digit numbers)
            if(octets.some(octet => octet < 10 && octet.length > 1)) return false;
            
            return true;
        },
        arguments: {
            descriptions: [
                {
                    text: "Input Address",
                    type: "String"
                }
            ]
        }
    },
    isLucky: {
        name: 'isLucky',
        instructions: `Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

        Given a ticket number n, determine if it's lucky or not.`,
        codeOutput: 
        `function isLucky(n) {
            let nString = String(n);
            
            let sum1 = 0;
            for(let i = nString.length / 2; i < nString.length; i++) {
                sum1 += Number(nString[i]);
            }
            
            let sum2 = 0;
            for(let i = 0; i < nString.length / 2; i++) {
                sum2 += Number(nString[i]);
            }
            
            if(sum1 === sum2) {
                return true;
            } else {
                return false;
            }
        }`,
        code: function isLucky(n) {
            let nString = String(n);
            
            let sum1 = 0;
            for(let i = nString.length / 2; i < nString.length; i++) {
                sum1 += Number(nString[i]);
            }
            
            let sum2 = 0;
            for(let i = 0; i < nString.length / 2; i++) {
                sum2 += Number(nString[i]);
            }
            
            if(sum1 === sum2) {
                return true;
            } else {
                return false;
            }
        },
        arguments: {
            descriptions: [
                {
                    text: "Integer",
                    type: "Number"
                }
            ]
        }
    },
    isMAC48Address: {
        name: 'isMAC48Address',
        instructions: `A media access control address (MAC address) is a unique identifier assigned to network interfaces for communications on the physical network segment.

        The standard (IEEE 802) format for printing MAC-48 addresses in human-friendly form is six groups of two hexadecimal digits (0 to 9 or A to F), separated by hyphens (e.g. 01-23-45-67-89-AB).
        
        Your task is to check by given string inputString whether it corresponds to MAC-48 address or not.`,
        codeOutput: 
        `function isMAC48Address(inputString) {
            let groups = inputString.split("-");
            //Return early if this array is not 6 valid groups of 2 characters
            if(groups.length !== 6) return false;
            //Return early if this array's elements are not 2 characters long.
            for(let i = 0; i < groups.length; i++) {
                if(groups[i].length !== 2) return false;
            }
            
            console.log(groups);
            
            //Make sure the characters in each element are valid
            for(let i = 0; i < groups.length; i++) {
                //Go through each character of all groups, and make sure it is between 0-9 or A-F.
                if(!(groups[i].charCodeAt(0) > 47 && groups[i].charCodeAt(0) < 58 ||
                groups[i].charCodeAt(0) > 64 && groups[i].charCodeAt(0) < 71)) {
                    return false;
                }
                if(!(groups[i].charCodeAt(1) > 47 && groups[i].charCodeAt(1) < 58 ||
                groups[i].charCodeAt(1) > 64 && groups[i].charCodeAt(1) < 71)) {
                    return false;
                }
            }
            
            return true;
        }`,
        code: function isMAC48Address(inputString) {
            let groups = inputString.split("-");
            //Return early if this array is not 6 valid groups of 2 characters
            if(groups.length !== 6) return false;
            //Return early if this array's elements are not 2 characters long.
            for(let i = 0; i < groups.length; i++) {
                if(groups[i].length !== 2) return false;
            }
            
            console.log(groups);
            
            //Make sure the characters in each element are valid
            for(let i = 0; i < groups.length; i++) {
                //Go through each character of all groups, and make sure it is between 0-9 or A-F.
                if(!(groups[i].charCodeAt(0) > 47 && groups[i].charCodeAt(0) < 58 ||
                groups[i].charCodeAt(0) > 64 && groups[i].charCodeAt(0) < 71)) {
                    return false;
                }
                if(!(groups[i].charCodeAt(1) > 47 && groups[i].charCodeAt(1) < 58 ||
                groups[i].charCodeAt(1) > 64 && groups[i].charCodeAt(1) < 71)) {
                    return false;
                }
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
    isMonotonic: {
        name: `isMonotonic`,
        instructions: `An array is monotonic if it is either monotone increasing or monotone decreasing.

        An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].
        
        Given an integer array nums, return true if the given array is monotonic, or false otherwise.`,
        codeOutput: 
        `var isMonotonic = function(nums) {
            //Keep track of the first difference found (whether positive or negative)
            let difference;
            
            for(let i = 1; i < nums.length; i++) {
                //See if this difference is positive or negative (will be used to determine if consistent with main difference)
                let thisDifference = nums[i] - nums[i - 1];
                //If no difference is yet stored, save the current difference.
                if(!difference) {
                    difference = thisDifference;
                } else {
                    //If the current difference is not the same polarity (neg/pos) as the main difference, return false.
                    if(!((difference >= 0 && thisDifference >= 0) || (difference <= 0 && thisDifference <= 0))) {
                        return false;
                    }
                }
            }
            
            return true;
        };`,
        code: function isMonotonic(nums) {
            //Keep track of the first difference found (whether positive or negative)
            let difference;
            
            for(let i = 1; i < nums.length; i++) {
                //See if this difference is positive or negative (will be used to determine if consistent with main difference)
                let thisDifference = nums[i] - nums[i - 1];
                //If no difference is yet stored, save the current difference.
                if(!difference) {
                    difference = thisDifference;
                } else {
                    //If the current difference is not the same polarity (neg/pos) as the main difference, return false.
                    if(!((difference >= 0 && thisDifference >= 0) || (difference <= 0 && thisDifference <= 0))) {
                        return false;
                    }
                }
            }
            
            return true;
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Integers (e.g. 1,2,2,3,4)",
                    type: "NumberArray"
                }
            ]
        }
    },
    isNumberPalindrome: {
        name: `isNumberPalindrome`,
        instructions: `Given an integer x, return true if x is palindrome integer.

        An integer is a palindrome when it reads the same backward as forward.
        
        For example, 121 is a palindrome while 123 is not.`,
        codeOutput: 
        `var isNumberPalindrome = function(x) {
            return x.toString().split("").reverse().join("") === x.toString();
        };`,
        code: function isNumberPalindrome(x) {
            return x.toString().split("").reverse().join("") === x.toString();
        },
        arguments: {
            descriptions: [
                {
                    text: "Integer (Positive or Negative)",
                    type: "Number"
                }
            ]
        }
    },
    isOneBitCharacter: {
        name: `isOneBitCharacter`,
        instructions: `We have two special characters:

        The first character can be represented by one bit 0.
        The second character can be represented by two bits (10 or 11).
        Given a binary array bits that ends with 0, return true if the last character must be a one-bit character.`,
        codeOutput: 
        `var isOneBitCharacter = function(bits) {
            //Put all bits into groups according to the rules (10, 11, or 0).
            let groups = [];
            for(let i = 0; i < bits.length; i++) {
                let thisGroup = [];
                if(bits[i] === 1) {
                    //If this bit is a 1, it means the next bit must be part of this group.
                    thisGroup.push(bits[i]);
                    thisGroup.push(bits[i + 1]);
                    groups.push(thisGroup);
                    //Skip over next element, since it is part of this group.
                    i++;
                } else {
                    //If this bit is a 0, it means this is on its own.
                    thisGroup.push(bits[i]);
                    groups.push(thisGroup);
                }
            }
            //Remove the last group. If this is a single zero, return true.
            let lastGroup = groups.pop();
            if(lastGroup.length === 1 && lastGroup[0] === 0) return true;
            return false;
        };`,
        code: function isOneBitCharacter(bits) {
            //Put all bits into groups according to the rules (10, 11, or 0).
            let groups = [];
            for(let i = 0; i < bits.length; i++) {
                let thisGroup = [];
                if(bits[i] === 1) {
                    //If this bit is a 1, it means the next bit must be part of this group.
                    thisGroup.push(bits[i]);
                    thisGroup.push(bits[i + 1]);
                    groups.push(thisGroup);
                    //Skip over next element, since it is part of this group.
                    i++;
                } else {
                    //If this bit is a 0, it means this is on its own.
                    thisGroup.push(bits[i]);
                    groups.push(thisGroup);
                }
            }
            //Remove the last group. If this is a single zero, return true.
            let lastGroup = groups.pop();
            if(lastGroup.length === 1 && lastGroup[0] === 0) return true;
            return false;
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of 1s and 0s, built of only 10, 11, or 0 (e.g. 1,1,1,0,0)",
                    type: "NumberArray"
                }
            ]
        }
    },
    isPalindrome: {
        name: `isPalindrome`,
        instructions: `A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
        Given a string s, return true if it is a palindrome, or false otherwise.`,
        codeOutput: 
        `var isPalindrome = function(s) {
            //Compare the reversed string to the normal string (both stripped of special characters and lower case)
            return s.toLowerCase()
                .replace(/[^0-9a-z]/gi, '')
                .split('')
                .reverse()
                .join('') === s.toLowerCase().replace(/[^0-9a-z]/gi, '');
        };`,
        code: function isPalindrome(s) {
            //Compare the reversed string to the normal string (both stripped of special characters and lower case)
            return s.toLowerCase()
                .replace(/[^0-9a-z]/gi, '')
                .split('')
                .reverse()
                .join('') === s.toLowerCase().replace(/[^0-9a-z]/gi, '');
        },
        arguments: {
            descriptions: [
                {
                    text: "String to check",
                    type: "String"
                }
            ]
        }
    },
    isPerfectSquare: {
        name: `isPerfectSquare`,
        instructions: `Given a positive integer num, write a function which returns True if num is a perfect square else False.
        Follow up: Do not use any built-in library function such as sqrt.`,
        codeOutput: 
        `var isPerfectSquare = function(num) {
            //Start with a single unit length.
            let side = 1;
            //Incrementally increase the side length by 1, until we go over the desired area in square units.
            while(side * side <= num) {
                //If this side length results in the target area num, return true.
                if(side * side === num) return true;
                side++;
            }
            return false;
        };`,
        code: function isPerfectSquare(num) {
            //Start with a single unit length.
            let side = 1;
            //Incrementally increase the side length by 1, until we go over the desired area in square units.
            while(side * side <= num) {
                //If this side length results in the target area num, return true.
                if(side * side === num) return true;
                side++;
            }
            return false;
        },
        arguments: {
            descriptions: [
                {
                    text: "Integer Number",
                    type: "Number"
                }
            ]
        }
    },
    isPower: {
        name: 'isPower',
        instructions: `Determine if the given number is a power of some non-negative integer.`,
        codeOutput: 
        `function isPower(n) {
            //Handle edge case.
            if(n === 1) return true;
            
            //Find all factors of n
            let factors = [];
            let max = n;
            for(let i = 2; i < max; i++) {
                if(n % i === 0) {
                    factors.push(i);
                    factors.push(n / i);
                    max = n / 1;
                }
            }
            //Sort the factors.
            factors.sort((a, b) => a - b);
            
            //For all factors, and as long as the current factor times itself is not larger than n, see if we can equal n by multiplying that factor repeatedly. If so, return true
            for(let i = 0; i < factors.length; i++) {
                let currentProduct = factors[i];
                while(currentProduct * factors[i] <= n) {
                    currentProduct *= factors[i];
                    if(currentProduct === n) return true;
                }
            }
            
            //Once we have gone through all factors, return false.
            return false;
        }`,
        code: function isPower(n) {
            //Handle edge case.
            if(n === 1) return true;
            
            //Find all factors of n
            let factors = [];
            let max = n;
            for(let i = 2; i < max; i++) {
                if(n % i === 0) {
                    factors.push(i);
                    factors.push(n / i);
                    max = n / 1;
                }
            }
            //Sort the factors.
            factors.sort((a, b) => a - b);
            
            //For all factors, and as long as the current factor times itself is not larger than n, see if we can equal n by multiplying that factor repeatedly. If so, return true
            for(let i = 0; i < factors.length; i++) {
                let currentProduct = factors[i];
                while(currentProduct * factors[i] <= n) {
                    currentProduct *= factors[i];
                    if(currentProduct === n) return true;
                }
            }
            
            //Once we have gone through all factors, return false.
            return false;
        },
        arguments: {
            descriptions: [
                {
                    text: "Integer",
                    type: "Number"
                }
            ]
        }
    },
    isPowerOfFour: {
        name: `isPowerOfFour`,
        instructions: `Given an integer n, return true if it is a power of four. Otherwise, return false.

        An integer n is a power of four, if there exists an integer x such that n == 4x.`,
        codeOutput: 
        `var isPowerOfFour = function(n) {
            //Handle case of power of 0.
            if(n === 1) return true;
            //Start with the current number.
            let current = n;
            //Iteratively divide by 4, returning false if the current number does not have 4 as a factor. 
            while(current > 4) {
                console.log(current);
                if(current % 4 !== 0) return false;
                current /= 4;
            }
            //By the end of the loop, only 3 should remain, otherwise return false.
            if(current === 4) return true;
            return false;
        };`,
        code: function isPowerOfFour(n) {
            //Handle case of power of 0.
            if(n === 1) return true;
            //Start with the current number.
            let current = n;
            //Iteratively divide by 4, returning false if the current number does not have 4 as a factor. 
            while(current > 4) {
                console.log(current);
                if(current % 4 !== 0) return false;
                current /= 4;
            }
            //By the end of the loop, only 3 should remain, otherwise return false.
            if(current === 4) return true;
            return false;
        },
        arguments: {
            descriptions: [
                {
                    text: "Integer Number",
                    type: "Number"
                }
            ]
        }
    },
    isPowerOfThree: {
        name: `isPowerOfThree`,
        instructions: `Given an integer n, return true if it is a power of three. Otherwise, return false.

        An integer n is a power of three, if there exists an integer x such that n == 3x.`,
        codeOutput: 
        `var isPowerOfThree = function(n) {
            //Handle case of power of 0.
            if(n === 1) return true;
            //Start with the current number.
            let current = n;
            //Iteratively divide by 3, returning false if the current number does not have 3 as a factor. 
            while(current > 3) {
                console.log(current);
                if(current % 3 !== 0) return false;
                current /= 3;
            }
            //By the end of the loop, only 3 should remain, otherwise return false.
            if(current === 3) return true;
            return false;
        }`,
        code: function isPowerOfThree(n) {
            //Handle case of power of 0.
            if(n === 1) return true;
            //Start with the current number.
            let current = n;
            //Iteratively divide by 3, returning false if the current number does not have 3 as a factor. 
            while(current > 3) {
                console.log(current);
                if(current % 3 !== 0) return false;
                current /= 3;
            }
            //By the end of the loop, only 3 should remain, otherwise return false.
            if(current === 3) return true;
            return false;
        },
        arguments: {
            descriptions: [
                {
                    text: "Integer Number",
                    type: "Number"
                }
            ]
        }
    },
    isSentenceCorrect: {
        name: 'isSentenceCorrect',
        instructions: `A sentence is considered correct if:

        it starts with a capital letter;
        it ends with a full stop, question mark or exclamation point ('.', '?' or '!');
        full stops, question marks and exclamation points don't appear anywhere else in the sentence.
        Given a sentence, return true if it is correct and false otherwise.`,
        codeOutput: 
        `function isSentenceCorrect(sentence) {
            //^[A-Z] searches for a capital letter at the beginning.
            //[^.?!]* searches for 0+ instances of any character that is NOT (^) final punctuation.
            //[.?!]& searches for ending punctuation at the end of the string.
            var re = new RegExp(\`^[A-Z][^.?!]*[.?!]$\`);
            return re.test(sentence);
        }`,
        code: function isSentenceCorrect(sentence) {
            //^[A-Z] searches for a capital letter at the beginning.
            //[^.?!]* searches for 0+ instances of any character that is NOT (^) final punctuation.
            //[.?!]& searches for ending punctuation at the end of the string.
            var re = new RegExp(`^[A-Z][^.?!]*[.?!]$`);
            return re.test(sentence);
        },
        arguments: {
            descriptions: [
                {
                    text: "Sentence",
                    type: "String"
                }
            ]
        }
    },
    isSmooth: {
        name: 'isSmooth',
        instructions: `We define the middle of the array arr as follows:

        if arr contains an odd number of elements, its middle is the element whose index number is the same when counting from the beginning of the array and from its end;
        if arr contains an even number of elements, its middle is the sum of the two elements whose index numbers when counting from the beginning and from the end of the array differ by one.
        An array is called smooth if its first and its last elements are equal to one another and to the middle. Given an array arr, determine if it is smooth or not.`,
        codeOutput: 
        `function isSmooth(arr) {
            return arr.length % 2 ?
            //If the array is odd, just get middle element.
            arr[0] === arr[arr.length - 1] && arr[0] === arr[Math.floor(arr.length / 2)] ?
            true : 
            false :
            //If the array is even, get the middle two elements' sum.
            arr[0] === arr[arr.length - 1] && arr[0] === arr[Math.floor(arr.length / 2)] + arr[Math.floor(arr.length / 2) - 1] ?
            true :
            false;
        }`,
        code: function isSmooth(arr) {
            return arr.length % 2 ?
            //If the array is odd, just get middle element.
            arr[0] === arr[arr.length - 1] && arr[0] === arr[Math.floor(arr.length / 2)] ?
            true : 
            false :
            //If the array is even, get the middle two elements' sum.
            arr[0] === arr[arr.length - 1] && arr[0] === arr[Math.floor(arr.length / 2)] + arr[Math.floor(arr.length / 2) - 1] ?
            true :
            false;
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
    isSubsequence: {
        name: 'isSubsequence',
        instructions: `Given a string s, determine if it is a subsequence of a given string t.`,
        codeOutput: 
        `function isSubsequence(t, s) {
            var pattern = "";
            //For each letter in the string s (used to build the pattern to apply to string t), incrementally construct with the current element.
            //Since we are looking for that particular character, use [].
            //.* together looks for that character, then at some later point, the following character.
            for (var i = 0; i < s.length; i++) {
              pattern += \`[\${s[i]}].*\`;
            }
            var re = new RegExp(pattern);
            return re.test(t);
        }`,
        code: function isSubsequence(t, s) {
            var pattern = "";
            //For each letter in the string s (used to build the pattern to apply to string t), incrementally construct with the current element.
            //Since we are looking for that particular character, use [].
            //.* together looks for that character, then at some later point, the following character.
            for (var i = 0; i < s.length; i++) {
              pattern += `[${s[i]}].*`;
            }
            var re = new RegExp(pattern);
            return re.test(t);
        },
        arguments: {
            descriptions: [
                {
                    text: "String s",
                    type: "String"
                },
                {
                    text: "String t",
                    type: "String"
                }
            ]
        }
    },
    isSubstitutionCipher: {
        name: 'isSubstitutionCipher',
        instructions: `A ciphertext alphabet is obtained from the plaintext alphabet by means of rearranging some characters. For example "bacdef...xyz" will be a simple ciphertext alphabet where a and b are rearranged.

        A substitution cipher is a method of encoding where each letter of the plaintext alphabet is replaced with the corresponding (i.e. having the same index) letter of some ciphertext alphabet.
        
        Given two strings, check whether it is possible to obtain them from each other using some (possibly, different) substitution ciphers.`,
        codeOutput: 
        `function isSubstitutionCipher(string1, string2) {
            //Keep track of both character sets/keys.
            let charMap1 = {};
            let charMap2 = {};
            //Go through each character.
            for(let i = 0; i < string1.length; i++) {
                //If they keys for this letter don't exist yet, make them each other's key.
                if(!charMap1[string1[i]] && !charMap2[string2[i]]) {
                    charMap1[string1[i]] = string2[i];
                    charMap2[string2[i]] = string1[i];
                    //Otherwise, if a key does exist, check it against what it should be.
                } else if(charMap1[string1[i]] !== string2[i] || charMap2[string2[i]] !== string1[i]) {
                    return false;
                }
            }
        
            return true;
        }`,
        code: function isSubstitutionCipher(string1, string2) {
            //Keep track of both character sets/keys.
            let charMap1 = {};
            let charMap2 = {};
            //Go through each character.
            for(let i = 0; i < string1.length; i++) {
                //If they keys for this letter don't exist yet, make them each other's key.
                if(!charMap1[string1[i]] && !charMap2[string2[i]]) {
                    charMap1[string1[i]] = string2[i];
                    charMap2[string2[i]] = string1[i];
                    //Otherwise, if a key does exist, check it against what it should be.
                } else if(charMap1[string1[i]] !== string2[i] || charMap2[string2[i]] !== string1[i]) {
                    return false;
                }
            }
        
            return true;
        },
        arguments: {
            descriptions: [
                {
                    text: "String 1",
                    type: "String"
                },
                {
                    text: "String 2",
                    type: "String"
                }
            ]
        }
    },
    isSumOfConsecutive2: {
        name: 'isSumOfConsecutive2',
        instructions: `Find the number of ways to express n as sum of some (at least two) consecutive positive integers.`,
        codeOutput: 
        `function isSumOfConsecutive2(n) {
            let totalWays = 0;
            for(let i = 2; i < Math.floor(n / 2); i++) {
                //Get the total sum of all digits between 1 and i (current number).
                let sum = (i * (i + 1)) / 2;
                //If this sum is larger than n, we are done.
                if(sum > n) break;
                //If this current sum subtracted from the starting number is divisible by current value, this is one consecutive sum.
                if((n - sum) % i === 0) totalWays++;
            }
            return totalWays;
        }`,
        code: function isSumOfConsecutive2(n) {
            let totalWays = 0;
            for(let i = 2; i < Math.floor(n / 2); i++) {
                //Get the total sum of all digits between 1 and i (current number).
                let sum = (i * (i + 1)) / 2;
                //If this sum is larger than n, we are done.
                if(sum > n) break;
                //If this current sum subtracted from the starting number is divisible by current value, this is one consecutive sum.
                if((n - sum) % i === 0) totalWays++;
            }
            return totalWays;
        },
        arguments: {
            descriptions: [
                {
                    text: "Integer n",
                    type: "Number"
                }
            ]
        }
    },
    isThree: {
        name: `isThree`,
        instructions: `Given an integer n, return true if n has exactly three positive divisors. Otherwise, return false.

        An integer m is a divisor of n if there exists an integer k such that n = k * m.`,
        codeOutput: 
        `var isThree = function(n) {
            //Return early.
            if(n < 4) return false;
            //Save all factors found.
            let factors = [];
            //Store max number to check (this will be updated/reduced each time a new factor is found).
            let max = n;
            //Find all factors.
            for(let i = 1; i < max; i++) {
                //If i divides evenly into n, store this factor pair.
                if(n % i === 0) {
                    //Store this factor.
                    factors.push(i);
                    //If the other factor in this particular pairing is not the same as i, store it as well.
                    if(n / i !== i) {
                        factors.push(n / i);
                    }
                    //If there are now more than three factors, return early.
                    if(factors.length > 3) return false;
                    //Update max (to prevent unnecessary iterations and duplicate factors.
                    max = n / i;
                }
            }
            if(factors.length === 3) return true;
            return false;
        };`,
        code: function isThree(n) {
            //Return early.
            if(n < 4) return false;
            //Save all factors found.
            let factors = [];
            //Store max number to check (this will be updated/reduced each time a new factor is found).
            let max = n;
            //Find all factors.
            for(let i = 1; i < max; i++) {
                //If i divides evenly into n, store this factor pair.
                if(n % i === 0) {
                    //Store this factor.
                    factors.push(i);
                    //If the other factor in this particular pairing is not the same as i, store it as well.
                    if(n / i !== i) {
                        factors.push(n / i);
                    }
                    //If there are now more than three factors, return early.
                    if(factors.length > 3) return false;
                    //Update max (to prevent unnecessary iterations and duplicate factors.
                    max = n / i;
                }
            }
            if(factors.length === 3) return true;
            return false;
        },
        arguments: {
            descriptions: [
                {
                    text: "Whole Number to Check",
                    type: "Number"
                }
            ]
        }
    },
    isToeplitzMatrix: {
        name: `isToeplitzMatrix`,
        instructions: `Given an m x n matrix, return true if the matrix is Toeplitz. Otherwise, return false.

        A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same elements.`,
        codeOutput: 
        `var isToeplitzMatrix = function(matrix) {
            //Save the elements of the last row that should be present in the next.
            let lastRowElements = [];
            
            //Loop through each row and determine if valid.
            for(let row = 0; row < matrix.length; row++) {
                //If this is not the first row, check against the last row elements.
                if(row > 0) {
                    //Check the last row elements to see if they are in the correct place in the current row.
                    for(let i = 1; i < matrix[row].length; i++) {
                        //If we do not see the expected elements shifted over in this row, return false.
                        if(matrix[row][i] !== lastRowElements[i - 1]) return false;
                    }
                }
                //Save the current row to be used to check against the next row.
                lastRowElements = matrix[row].slice(0, -1);
            }
            
            return true;
        };`,
        code: function isToeplitzMatrix(matrix) {
            //Save the elements of the last row that should be present in the next.
            let lastRowElements = [];
            
            //Loop through each row and determine if valid.
            for(let row = 0; row < matrix.length; row++) {
                //If this is not the first row, check against the last row elements.
                if(row > 0) {
                    //Check the last row elements to see if they are in the correct place in the current row.
                    for(let i = 1; i < matrix[row].length; i++) {
                        //If we do not see the expected elements shifted over in this row, return false.
                        if(matrix[row][i] !== lastRowElements[i - 1]) return false;
                    }
                }
                //Save the current row to be used to check against the next row.
                lastRowElements = matrix[row].slice(0, -1);
            }
            
            return true;
        },
        arguments: {
            descriptions: [
                {
                    text: "Matrix of Numbers (Format: [1,2,3,4], [5,1,2,3], [9,5,1,2])",
                    type: "NumberArrayArray"
                }
            ]
        }
    },
    isUnstablePair: {
        name: 'isUnstablePair',
        instructions: `Some file managers sort filenames taking into account case of the letters, others compare strings as if all of the letters are of the same case. That may lead to different ways of filename ordering.

        Call two filenames an unstable pair if their ordering depends on the case.
        
        To compare two filenames a and b, find the first position i at which a[i] ≠ b[i]. If a[i] < b[i], then a < b. Otherwise a > b. If such position doesn't exist, the shorter string goes first.
        
        Given two filenames, check whether they form an unstable pair.`,
        codeOutput: 
        `function isUnstablePair(filename1, filename2) {
            //See if there is a difference between the file names as is and the file names made lowercase.
            return filename1 > filename2 === filename1.toLowerCase() > filename2.toLowerCase() ? 
            false : 
            true;
        }`,
        code: function isUnstablePair(filename1, filename2) {
            //See if there is a difference between the file names as is and the file names made lowercase.
            return filename1 > filename2 === filename1.toLowerCase() > filename2.toLowerCase() ? 
            false : 
            true;
        },
        arguments: {
            descriptions: [
                {
                    text: "Filename 1 (String)",
                    type: "String"
                },
                {
                    text: "Filename 2 (String)",
                    type: "String"
                }
            ]
        }
    },
    isValidParentheses: {
        name: `isValidParentheses`,
        instructions: `Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
        An input string is valid if:
        Open brackets must be closed by the same type of brackets.
        Open brackets must be closed in the correct order.`,
        codeOutput: 
        `var isValidParentheses = function(s) {
            //Create a stack to hold closing parentheses.
            let stack = [];
            for(let i = 0; i < s.length; i++) {
                //Check if this is an open or closing item.
                if(s[i] === '(' || s[i] === '{' || s[i] === '[') {
                    switch(s[i]) {
                        case '(':
                            stack.push(')');
                            break;
                        case '{':
                            stack.push('}');
                            break;
                        case '[':
                            stack.push(']');
                            break;
                        default:
                            break;
                    }
                } else {
                    //The current character should be the closing parentheses at the top of the stack.
                    if(s[i] !== stack.pop()) return false;
                }
            }
            //If we have reached the end and there are characters left in the stack, this is not valid.
            if(stack.length) return false;
            //Otherwise, this was a valid set.
            return true;
        };`,
        code: function isValidParentheses(s) {
            //Create a stack to hold closing parentheses.
            let stack = [];
            for(let i = 0; i < s.length; i++) {
                //Check if this is an open or closing item.
                if(s[i] === '(' || s[i] === '{' || s[i] === '[') {
                    switch(s[i]) {
                        case '(':
                            stack.push(')');
                            break;
                        case '{':
                            stack.push('}');
                            break;
                        case '[':
                            stack.push(']');
                            break;
                        default:
                            break;
                    }
                } else {
                    //The current character should be the closing parentheses at the top of the stack.
                    if(s[i] !== stack.pop()) return false;
                }
            }
            //If we have reached the end and there are characters left in the stack, this is not valid.
            if(stack.length) return false;
            //Otherwise, this was a valid set.
            return true;
        },
        arguments: {
            descriptions: [
                {
                    text: "A string containing only [], (), and {} characters",
                    type: "String"
                }
            ]
        }
    }
};

export default challenges_g_j;

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

*/