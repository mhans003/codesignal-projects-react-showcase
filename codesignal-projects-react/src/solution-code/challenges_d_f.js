//Include global BigInt (as comment) in order to prevent no-undef in this environment.
/* global BigInt */

const challenges_d_f = {
    dayOfWeek: {
        instructions: `Whenever you decide to celebrate your birthday you always do this your favorite café, which is quite popular and as such usually very crowded. This year you got lucky: when you and your friend enter the café you're surprised to see that it's almost empty. The waiter lets slip that there are always very few people on this day of the week.

        You enjoyed having the café all to yourself, and are now curious about the next time you'll be this lucky. Given the current birthdayDate, determine the number of years until it will fall on the same day of the week.
        
        For your convenience, here is the list of months lengths (from January to December, respectively):
        
        Months lengths: 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31.
        Please, note that in leap years February has 29 days. If your birthday is on the 29th of February, you celebrate it once in four years. Otherwise you birthday is celebrated each year`,
        codeOutput: 
        `function dayOfWeek(birthdayDate) {
            //Helper function to find the total number of days in a current date.
            const findDays = date => {
                //Days array to define which day it currently is
                let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                //Keep track of number of days in each month
                let monthLengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                
                //Parse out the date.
                let currentDate = date.split("-").map(str => Number(str));
                
                //If this is not a leap year, yet the day is 29, return. 
                if((currentDate[0] === 2 && currentDate[1] === 29 && (currentDate[2] - 1900) % 4)) {
                    return "Not Leap";
                }
                //If this date is 2/29 on a non-leap year divisible by 100, return (ignore 1900 due to guaranteed constraints)
                if(currentDate[0] === 2 && currentDate[1] === 29 && currentDate[2] % 400 && !(currentDate[2] % 100) && currentDate[2] > 1900) {
                    return "Not Leap"
                }
                
                //Convert the date into the total days since Jan 1, 1900.
                //Add up the total number of days in the months that have passed.
                let totalDays = monthLengths.slice(0, currentDate[0] - 1).reduce((a, b) => a += b, 0) +
                //Add the number of days passed in the current month.
                currentDate[1] + 
                //Add the number of days passed in every previous standard year.
                ((currentDate[2] - 1900) * 365) +
                //Add the number of leap year extra days.
                Math.floor((currentDate[2] - 1900) / 4)  -
                //If the current year is a leap year, and the date is not yet Feb 29, remove one leap day
                (((currentDate[2] - 1900) % 4 === 0) && (currentDate[0] < 3) && ((currentDate[2] - 1900) / 4 >= 1) ? 
                1 :
                0) -
                //If we are currently counting after 2100, delete one more leap year
                (currentDate[2] >= 2100 && currentDate[1] > 2 ? 1 : 0);
                return days[totalDays % 7];
            };
            
            //Keep track of the day we want to find as well as the next year's date to check.
            let dayToFind = findDays(birthdayDate);
            let nextDate = birthdayDate;
            //Count the years that have passed.
            let totalYears = 0;
            
            //Keep counting until the number of years is reached.
            while(dayToFind !== findDays(nextDate) || !totalYears) {
                totalYears++;
                let nextDateArray = nextDate.split("-");
                nextDateArray[2]++;
                nextDate = nextDateArray.join("-");
            }
            
            return totalYears; 
        }`,
        code: function dayOfWeek(birthdayDate) {
            //Helper function to find the total number of days in a current date.
            const findDays = date => {
                //Days array to define which day it currently is
                let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                //Keep track of number of days in each month
                let monthLengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                
                //Parse out the date.
                let currentDate = date.split("-").map(str => Number(str));
                
                //If this is not a leap year, yet the day is 29, return. 
                if((currentDate[0] === 2 && currentDate[1] === 29 && (currentDate[2] - 1900) % 4)) {
                    return "Not Leap";
                }
                //If this date is 2/29 on a non-leap year divisible by 100, return (ignore 1900 due to guaranteed constraints)
                if(currentDate[0] === 2 && currentDate[1] === 29 && currentDate[2] % 400 && !(currentDate[2] % 100) && currentDate[2] > 1900) {
                    return "Not Leap"
                }
                
                //Convert the date into the total days since Jan 1, 1900.
                //Add up the total number of days in the months that have passed.
                let totalDays = monthLengths.slice(0, currentDate[0] - 1).reduce((a, b) => a += b, 0) +
                //Add the number of days passed in the current month.
                currentDate[1] + 
                //Add the number of days passed in every previous standard year.
                ((currentDate[2] - 1900) * 365) +
                //Add the number of leap year extra days.
                Math.floor((currentDate[2] - 1900) / 4)  -
                //If the current year is a leap year, and the date is not yet Feb 29, remove one leap day
                (((currentDate[2] - 1900) % 4 === 0) && (currentDate[0] < 3) && ((currentDate[2] - 1900) / 4 >= 1) ? 
                1 :
                0) -
                //If we are currently counting after 2100, delete one more leap year
                (currentDate[2] >= 2100 && currentDate[1] > 2 ? 1 : 0);
                return days[totalDays % 7];
            };
            
            //Keep track of the day we want to find as well as the next year's date to check.
            let dayToFind = findDays(birthdayDate);
            let nextDate = birthdayDate;
            //Count the years that have passed.
            let totalYears = 0;
            
            //Keep counting until the number of years is reached.
            while(dayToFind !== findDays(nextDate) || !totalYears) {
                totalYears++;
                let nextDateArray = nextDate.split("-");
                nextDateArray[2]++;
                nextDate = nextDateArray.join("-");
            }
            
            return totalYears; 
        },
        arguments: {
            descriptions: [
                {
                    text: "Date String (Form of MM-DD-YYYY)",
                    type: "String"
                }
            ]
        }
    },
    deleteDigit: {
        instructions: `Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.`,
        codeOutput: 
        `function deleteDigit(n) {
            //Create string representation.
            let numberString = String(n);
            //Create the initial max number by removing the first digit character.
            let maxNumber = Number(numberString.substring(1));
            console.log(maxNumber);
            
            //Go through each character of the string representation of the number.
            for(let i = 1; i < numberString.length; i++) {
                //Form the new number by removing this character.
                let thisNumber = i === numberString.length - 1 ? 
                Number(numberString.substring(0, i)) :
                Number(numberString.substring(0, i) + numberString.substring(i + 1));
                 
                //See if this current number (with the removed digit) is larger than the current max.
                maxNumber = thisNumber > maxNumber ? thisNumber : maxNumber;
            }
            
            return maxNumber;
        }`,
        code: function deleteDigit(n) {
            //Create string representation.
            let numberString = String(n);
            //Create the initial max number by removing the first digit character.
            let maxNumber = Number(numberString.substring(1));
            console.log(maxNumber);
            
            //Go through each character of the string representation of the number.
            for(let i = 1; i < numberString.length; i++) {
                //Form the new number by removing this character.
                let thisNumber = i === numberString.length - 1 ? 
                Number(numberString.substring(0, i)) :
                Number(numberString.substring(0, i) + numberString.substring(i + 1));
                 
                //See if this current number (with the removed digit) is larger than the current max.
                maxNumber = thisNumber > maxNumber ? thisNumber : maxNumber;
            }
            
            return maxNumber;
        },
        arguments: {
            descriptions: [
                {
                    text: "Integer (To Remove Digit From)",
                    type: "Number"
                }
            ]
        }
    },
    depositProfit: {
        instructions: `You have deposited a specific amount of money into your bank account. Each year your balance increases at the same growth rate. With the assumption that you don't make any additional deposits, find out how long it would take for your balance to pass a specific threshold.`,
        codeOutput: 
        `function depositProfit(deposit, rate, threshold) {
            //Keep track of current total amount and years passed.
            let total = deposit;
            let years = 0;
            while(total < threshold) {
                //Keep adding one year and adding this rate to the total until past threshold.
                years++;
                total += (total * rate / 100);
            }
            return years;
        }`,
        code: function depositProfit(deposit, rate, threshold) {
            //Keep track of current total amount and years passed.
            let total = deposit;
            let years = 0;
            while(total < threshold) {
                //Keep adding one year and adding this rate to the total until past threshold.
                years++;
                total += (total * rate / 100);
            }
            return years;
        },
        arguments: {
            descriptions: [
                {
                    text: "Deposit (Positive Integer)",
                    type: "Number"
                },
                {
                    text: "Growth Rate (Positive Integer)",
                    type: "Number"
                },
                {
                    text: "Threshold (Positive Integer)",
                    type: "Number"
                }
            ]
        }
    },
    differentRightmostBit: {
        instructions: `You're given two integers, n and m. Find position of the rightmost bit in which they differ in their binary representations (it is guaranteed that such a bit exists), counting from right to left. Return the value of 2position_of_the_found_bit (0-based).`,
        codeOutput: 
        `function differentRightmostBit(n, m) {
            //Handle edge case (difference is only 1, then move on to other cases)
            //Take binary versions of both numbers:
            //Taking the first (n), filter it into array down to only values.
            //Where there are null values, put a placeholder value of 999 so that 
            //next map can run.
            //Final map function sees if every element is 999. If so, we know 
            //That the element we are looking for is out of bounds of this array, and specifically 
            //has the next unique bit in the next spot (so we use the length of the smaller number in binary form)
            //Finally, we take the resulting array and use Math.min to find the smallest index,
            //Making sure to spread the values out with ...
            return m - n === 1 ? 1 : 2 ** Math.min(...(n.toString(2)
            .split("")
            .reverse()
            .map((bit, index) => {
                if(bit !== m.toString(2).split("").reverse()[index]) {
                    return index;
                }
            })
            .map((element, index, array) => {
                //Filter out null values.
                return element ? element : 999;
            })
            .map((number, index, array) => {
                console.log(array);
                if(array.every(element => element === 999)) {
                    return m.toString(2).length > n.toString(2).length ? 
                    m.toString(2).length - 1 :
                    n.toString(2).length - 1;
                } else {
                    return number;
                }
            })
            ));
        }`,
        code: function differentRightmostBit(n, m) {
            //Handle edge case (difference is only 1, then move on to other cases)
            //Take binary versions of both numbers:
            //Taking the first (n), filter it into array down to only values.
            //Where there are null values, put a placeholder value of 999 so that 
            //next map can run.
            //Final map function sees if every element is 999. If so, we know 
            //That the element we are looking for is out of bounds of this array, and specifically 
            //has the next unique bit in the next spot (so we use the length of the smaller number in binary form)
            //Finally, we take the resulting array and use Math.min to find the smallest index,
            //Making sure to spread the values out with ...
            return m - n === 1 ? 1 : 2 ** Math.min(...(n.toString(2)
            .split("")
            .reverse()
            .map((bit, index) => {
                if(bit !== m.toString(2).split("").reverse()[index]) {
                    return index;
                }
            })
            .map((element, index, array) => {
                //Filter out null values.
                return element ? element : 999;
            })
            .map((number, index, array) => {
                console.log(array);
                if(array.every(element => element === 999)) {
                    return m.toString(2).length > n.toString(2).length ? 
                    m.toString(2).length - 1 :
                    n.toString(2).length - 1;
                } else {
                    return number;
                }
            })
            ));
        },
        arguments: {
            descriptions: [
                {
                    text: "Integer n",
                    type: "Number"
                },
                {
                    text: "Integer m",
                    type: "Number"
                }
            ]
        }
    }
};

export default challenges_d_f;

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