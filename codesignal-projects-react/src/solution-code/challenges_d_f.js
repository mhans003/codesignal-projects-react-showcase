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
    },
    differentSquares: {
        instructions: `Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.`,
        codeOutput: 
        `function differentSquares(matrix) {
            //Keep track of unique squares.
            let uniqueSquares = {};
            //Loop through each square start.
            for(let row = 0; row < matrix.length - 1; row++) {
                for(let col = 0; col < matrix[0].length - 1; col++) {
                    //Loop through this square, and build this square's string representation.
                    let thisSquare = "";
                    for(let row_prime = row; row_prime < row + 2; row_prime++) {
                        for(let col_prime = col; col_prime < col + 2; col_prime++) {
                            thisSquare += matrix[row_prime][col_prime];
                        }
                    }
                    //If this is not already a unique square, add it to unique squares.
                    if(!uniqueSquares[thisSquare]) uniqueSquares[thisSquare] = 1;
                }
            }
            //Total up the number of unique squares stored and return.
            let total = 0;
            for(let square in uniqueSquares) {
                total++;
            }
            return total;
        }`,
        code: function differentSquares(matrix) {
            //Keep track of unique squares.
            let uniqueSquares = {};
            //Loop through each square start.
            for(let row = 0; row < matrix.length - 1; row++) {
                for(let col = 0; col < matrix[0].length - 1; col++) {
                    //Loop through this square, and build this square's string representation.
                    let thisSquare = "";
                    for(let row_prime = row; row_prime < row + 2; row_prime++) {
                        for(let col_prime = col; col_prime < col + 2; col_prime++) {
                            thisSquare += matrix[row_prime][col_prime];
                        }
                    }
                    //If this is not already a unique square, add it to unique squares.
                    if(!uniqueSquares[thisSquare]) uniqueSquares[thisSquare] = 1;
                }
            }
            //Total up the number of unique squares stored and return.
            let total = 0;
            for(let square in uniqueSquares) {
                total++;
            }
            return total;
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Integer Arrays (Form of [1,2,3], [1,2,3]...); Each Array Has Same Length",
                    type: "NumberArrayArray"
                }
            ]
        }
    },
    differentSymbolsNaive: {
        instructions: `Given a string, find the number of different characters in it.`,
        codeOutput: 
        `function differentSymbolsNaive(s) {
            //Create a character map object from the string.
            let charMap = {};
            for(let i = 0; i < s.length; i++) {
                charMap[s[i]] ? charMap[s[i]]++ : charMap[s[i]] = 1;
            }
            
            //Count the number of unique characters as properties in the character map object.
            let uniqueChars = 0;
            for(let letter in charMap) uniqueChars++;
            
            return uniqueChars;
        }`,
        code: function differentSymbolsNaive(s) {
            //Create a character map object from the string.
            let charMap = {};
            for(let i = 0; i < s.length; i++) {
                charMap[s[i]] ? charMap[s[i]]++ : charMap[s[i]] = 1;
            }
            
            //Count the number of unique characters as properties in the character map object.
            let uniqueChars = 0;
            for(let letter in charMap) uniqueChars++;
            
            return uniqueChars;
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
    digitDegree: {
        instructions: `Let's define digit degree of some positive integer as the number of times we need to replace this number with the sum of its digits until we get to a one digit number.

        Given an integer, find its digit degree.`,
        codeOutput: 
        `function digitDegree(n) {
            //Copy string representation of this number.
            let currentNumber = String(n);
            let iterations = 0;
            //Iteratively split the number into digits, add them together, and see if this new number is one digit.
            while(currentNumber.length > 1) {
                iterations++;
                let digitArray = currentNumber.split("");
                let sum = 0;
                for(let i = 0; i < digitArray.length; i++) {
                    sum += Number(digitArray[i]);
                }
                currentNumber = String(sum);
            }
            return iterations;
        }`,
        code: function digitDegree(n) {
            //Copy string representation of this number.
            let currentNumber = String(n);
            let iterations = 0;
            //Iteratively split the number into digits, add them together, and see if this new number is one digit.
            while(currentNumber.length > 1) {
                iterations++;
                let digitArray = currentNumber.split("");
                let sum = 0;
                for(let i = 0; i < digitArray.length; i++) {
                    sum += Number(digitArray[i]);
                }
                currentNumber = String(sum);
            }
            return iterations;
        },
        arguments: {
            descriptions: [
                {
                    text: "Positive Integer",
                    type: "Number"
                }
            ]
        }
    },
    digitDifferenceSort: {
        instructions: `Given an array of integers, sort its elements by the difference of their largest and smallest digits. In the case of a tie, that with the larger index in the array should come first.`,
        codeOutput: 
        `function digitDifferenceSort(a) {
            let differenceMap = {};
            //Find the difference of all elements and map them out.
            a.forEach(element => {
                //Find the largest and smallest digits.
                let largest = 0;
                let smallest = 9;
                let currentNumber = element;
                while(currentNumber) {
                    let lastDigit = currentNumber % 10;
                    //Compare this digit to the current largest/smallest digits.
                    largest = Math.max(largest, lastDigit);
                    smallest = Math.min(smallest, lastDigit);
                    //Update number to go to the next digit.
                    currentNumber = Math.floor(currentNumber / 10);
                }
                //Find the difference and store it.
                let difference = largest - smallest;
                if(differenceMap[difference]) {
                    //Unshift the elements so that they are in the correct order.
                    differenceMap[difference].unshift(element);
                } else {
                    differenceMap[difference] = [element];
                }
            });
            //Turn the difference map into a sorted array.
            let differenceArray = [];
            for(let difference in differenceMap) {
                differenceArray.push(...differenceMap[difference]);
            }
            
            return differenceArray;
        }`,
        code: function digitDifferenceSort(a) {
            let differenceMap = {};
            //Find the difference of all elements and map them out.
            a.forEach(element => {
                //Find the largest and smallest digits.
                let largest = 0;
                let smallest = 9;
                let currentNumber = element;
                while(currentNumber) {
                    let lastDigit = currentNumber % 10;
                    //Compare this digit to the current largest/smallest digits.
                    largest = Math.max(largest, lastDigit);
                    smallest = Math.min(smallest, lastDigit);
                    //Update number to go to the next digit.
                    currentNumber = Math.floor(currentNumber / 10);
                }
                //Find the difference and store it.
                let difference = largest - smallest;
                if(differenceMap[difference]) {
                    //Unshift the elements so that they are in the correct order.
                    differenceMap[difference].unshift(element);
                } else {
                    differenceMap[difference] = [element];
                }
            });
            //Turn the difference map into a sorted array.
            let differenceArray = [];
            for(let difference in differenceMap) {
                differenceArray.push(...differenceMap[difference]);
            }
            
            return differenceArray;
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Integers (Form of 1,2,3... No Brackets)",
                    type: "NumberArray"
                }
            ]
        }
    },
    digitsProduct: {
        instructions: `Given an integer product, find the smallest positive (i.e. greater than 0) integer the product of whose digits is equal to product. If there is no such integer, return -1 instead.`,
        codeOutput: 
        `function digitsProduct(product) {
            //Return early in special cases: product is 0 or a one-digit number.
            if(product === 0) return 10
            if(product < 10) return product;
            
            //Find all factors
            let factors = [];
            for(let i = 1; i <= 9; i++) {
                if(product % i === 0) factors.push(i);
            }
            console.log(factors);
            
            //Return early if number is prime and longer than one digit.
            if(factors.length < 2) return -1;
            
            //Using only the number's one-digit factors, work backwards to divide the product recursively by the largest possible factor until reaching one.
            
            //Keep track of the digits and the current product.
            let digits = [];
            let currentProduct = product;
            
            //While the product has not been divided down to 1:
            while(currentProduct > 1) {
                //Each time we divide, start with the largest possible one-digit factor.
                for(let i = factors.length - 1; i > 0; i--) {
                    //If this factor can be used to divide the current product evenly, it becomes one of our result digits, and we continue to divide the product down. Break out of this iteration if so.
                    if(currentProduct % factors[i] === 0) {
                        digits.unshift(factors[i]);
                        currentProduct = currentProduct / factors[i];
                        break;
                    } else if(i === 1) {
                        //If we have not found a factor to divide evenly with, then there is no way to build this number.
                        return -1;
                    }
                }
            }
        
            //Join the digits together and return.
            return Number(digits.join(""));
        }`,
        code: function digitsProduct(product) {
            //Return early in special cases: product is 0 or a one-digit number.
            if(product === 0) return 10
            if(product < 10) return product;
            
            //Find all factors
            let factors = [];
            for(let i = 1; i <= 9; i++) {
                if(product % i === 0) factors.push(i);
            }
            console.log(factors);
            
            //Return early if number is prime and longer than one digit.
            if(factors.length < 2) return -1;
            
            //Using only the number's one-digit factors, work backwards to divide the product recursively by the largest possible factor until reaching one.
            
            //Keep track of the digits and the current product.
            let digits = [];
            let currentProduct = product;
            
            //While the product has not been divided down to 1:
            while(currentProduct > 1) {
                //Each time we divide, start with the largest possible one-digit factor.
                for(let i = factors.length - 1; i > 0; i--) {
                    //If this factor can be used to divide the current product evenly, it becomes one of our result digits, and we continue to divide the product down. Break out of this iteration if so.
                    if(currentProduct % factors[i] === 0) {
                        digits.unshift(factors[i]);
                        currentProduct = currentProduct / factors[i];
                        break;
                    } else if(i === 1) {
                        //If we have not found a factor to divide evenly with, then there is no way to build this number.
                        return -1;
                    }
                }
            }
        
            //Join the digits together and return.
            return Number(digits.join(""));
        },
        arguments: {
            descriptions: [
                {
                    text: "Product Input (Positive Integer)",
                    type: "Number"
                }
            ]
        }
    },
    drawRectangle: {
        instructions: `You are implementing a command-line version of the Paint app. Since the command line doesn't support colors, you are using different characters to represent pixels. Your current goal is to support rectangle x1 y1 x2 y2 operation, which draws a rectangle that has an upper left corner at (x1, y1) and a lower right corner at (x2, y2). Here the x-axis points from left to right, and the y-axis points from top to bottom.

        Given the initial canvas state and the array that represents the coordinates of the two corners, return the canvas state after the operation is applied. For the details about how rectangles are painted, see the example.`,
        codeOutput: 
        `function drawRectangle(canvas, rectangle) {
            for(let row = 0; row < canvas.length; row++) {
                //Skip over loops out of bounds of the rectangle.
                if(row < rectangle[1] || row > rectangle[3]) continue;
                //Handle top and bottom rows of the rectangle.
                if(row === rectangle[1] || row === rectangle[3]) {
                    //Loop over all positions of the top and bottom row of the rectangle.
                    for(let position = rectangle[0]; position <= rectangle[2]; position++) {
                        //Handle corners.
                        if(position === rectangle[0] || position === rectangle[2]) {
                            canvas[row][position] = "*";
                        } else {
                            canvas[row][position] = "-";
                        }
                    }
                } else {
                    //Otherwise, this is a rectangle side.
                    canvas[row][rectangle[0]] = "|";
                    canvas[row][rectangle[2]] = "|";
                }
            }
            return canvas;
        }`,
        code: function drawRectangle(canvas, rectangle) {
            for(let row = 0; row < canvas.length; row++) {
                //Skip over loops out of bounds of the rectangle.
                if(row < rectangle[1] || row > rectangle[3]) continue;
                //Handle top and bottom rows of the rectangle.
                if(row === rectangle[1] || row === rectangle[3]) {
                    //Loop over all positions of the top and bottom row of the rectangle.
                    for(let position = rectangle[0]; position <= rectangle[2]; position++) {
                        //Handle corners.
                        if(position === rectangle[0] || position === rectangle[2]) {
                            canvas[row][position] = "*";
                        } else {
                            canvas[row][position] = "-";
                        }
                    }
                } else {
                    //Otherwise, this is a rectangle side.
                    canvas[row][rectangle[0]] = "|";
                    canvas[row][rectangle[2]] = "|";
                }
            }
            return canvas;
        },
        arguments: {
            descriptions: [
                {
                    text: 'Canvas Array (Example: [a,a,a,a,a,a,a,a], [a,a,a,a,a,a,a,a], [a,a,a,a,a,a,a,a], [b,b,b,b,b,b,b,b], [b,b,b,b,b,b,b,b])',
                    type: "ArrayArray"
                },
                {
                    text: "Number Rectangle Array (Example: 1,1,4,3)",
                    type: "NumberArray"
                }
            ]
        }
    },
    electionsWinners: {
        instructions: `Elections are in progress!

        Given an array of the numbers of votes given to each of the candidates so far, and an integer k equal to the number of voters who haven't cast their vote yet, find the number of candidates who still have a chance to win the election.
        
        The winner of the election must secure strictly more votes than any other candidate. If two or more candidates receive the same (maximum) number of votes, assume there is no winner at all.`,
        codeOutput: 
        `function electionsWinners(votes, k) {
            //Find the number of votes needed to win.
            let votesToWin = Math.max(...votes);
            //Keep track of the number of candidates that will be eligible.
            let numberOfCandidates = 0;
            
            //If there are no voters left, we need to return 1 if there is 1 max, or return 0 if there are ties for the max number of votes.
            if(k === 0) {
                let numMax = 0;
                for(let i = 0; i < votes.length; i++) {
                    if(votes[i] === votesToWin) numMax++;
                    if(numMax > 1) return 0;
                }
                return 1;
            }
            
            //Otherwise, go through each candidate and see if adding the remaining votes would secure a win.
            votes.forEach(candidate => {
                if(candidate + k > votesToWin) numberOfCandidates++;
            });
            
            return numberOfCandidates;
        }`,
        code: function electionsWinners(votes, k) {
            //Find the number of votes needed to win.
            let votesToWin = Math.max(...votes);
            //Keep track of the number of candidates that will be eligible.
            let numberOfCandidates = 0;
            
            //If there are no voters left, we need to return 1 if there is 1 max, or return 0 if there are ties for the max number of votes.
            if(k === 0) {
                let numMax = 0;
                for(let i = 0; i < votes.length; i++) {
                    if(votes[i] === votesToWin) numMax++;
                    if(numMax > 1) return 0;
                }
                return 1;
            }
            
            //Otherwise, go through each candidate and see if adding the remaining votes would secure a win.
            votes.forEach(candidate => {
                if(candidate + k > votesToWin) numberOfCandidates++;
            });
            
            return numberOfCandidates;
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Integers for Votes (Form of 1,2,3,4...); No Brackets []",
                    type: "NumberArray"
                },
                {
                    text: "Integer for k",
                    type: "Number"
                }
            ]
        }
    },
    equalPairOfBits: {
        instructions: `You're given two integers, n and m. Find position of the rightmost pair of equal bits in their binary representations (it is guaranteed that such a pair exists), counting from right to left.

        Return the value of 2position_of_the_found_pair (0-based).`,
        codeOutput: 
        `function equalPairOfBits(n, m) {
            return 2 ** n.toString(2)
            .split("")
            .reverse()
            .map((bit, index, array) => {
                //compare this bit and it's next neighbor with that of the other string m
                let m_bits = m.toString(2).split("").reverse();
                //If the pairs are equal, push those.
                if(bit === m_bits[index] && array[index + 1] === m_bits[index + 1]) {
                    console.log("Values are equal")
                    return index;
                }
                //Add the array length in case there are no matching pairs in the bits shown.
                if(index === array.length - 1) return array.length;
            })
            .filter((value, index, array) => {
                if(value === 0) return "0";
                if(value) return value;
            })
            .map((value, index, array) => {
                console.log(array);
                return value;
            })[0]
            ;
        }`,
        code: function equalPairOfBits(n, m) {
            return 2 ** n.toString(2)
            .split("")
            .reverse()
            .map((bit, index, array) => {
                //compare this bit and it's next neighbor with that of the other string m
                let m_bits = m.toString(2).split("").reverse();
                //If the pairs are equal, push those.
                if(bit === m_bits[index] && array[index + 1] === m_bits[index + 1]) {
                    console.log("Values are equal")
                    return index;
                }
                //Add the array length in case there are no matching pairs in the bits shown.
                if(index === array.length - 1) return array.length;
            })
            .filter((value, index, array) => {
                if(value === 0) return "0";
                if(value) return value;
            })
            .map((value, index, array) => {
                console.log(array);
                return value;
            })[0]
            ;
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
    },
    evenDigitsOnly: {
        instructions: `Check if all digits of the given integer are even.`,
        codeOutput: 
        `function evenDigitsOnly(n) {
            let numberString = String(n);
            //Loop through every 'character' in the stringified number.
            for(let i = 0; i < numberString.length; i++) {
                //If any digit is odd, return early.
                if(Number(numberString[i]) % 2 !== 0) {
                    return false;
                }
            }
            return true;
        }`,
        code: function evenDigitsOnly(n) {
            let numberString = String(n);
            //Loop through every 'character' in the stringified number.
            for(let i = 0; i < numberString.length; i++) {
                //If any digit is odd, return early.
                if(Number(numberString[i]) % 2 !== 0) {
                    return false;
                }
            }
            return true;
        },
        arguments: {
            descriptions: [
                {
                    text: "Integer to Check",
                    type: "Number"
                }
            ]
        }
    },
    extractEachKth: {
        instructions: `Given array of integers, remove each kth element from it.`,
        codeOutput: 
        `function extractEachKth(inputArray, k) {
            //Save the current index to represent the amount of skips between each number.
            let index = k - 1;
            
            //While we still have elements to work with within that skip range, remove the next element from the correct position and update the new skip index.
            while(index < inputArray.length) {
                inputArray.splice(index, 1);
                index += k - 1;
            }
            
            return inputArray;
        }`,
        code: function extractEachKth(inputArray, k) {
            //Save the current index to represent the amount of skips between each number.
            let index = k - 1;
            
            //While we still have elements to work with within that skip range, remove the next element from the correct position and update the new skip index.
            while(index < inputArray.length) {
                inputArray.splice(index, 1);
                index += k - 1;
            }
            
            return inputArray;
        },
        arguments: {
            descriptions: [
                {
                    text: "Integer Array (Form of 1,2,3...); No Brackets []",
                    type: "NumberArray"
                },
                {
                    text: "Integer k",
                    type: "Number"
                }
            ]
        }
    },
    extractMatrixColumn: {
        instructions: `Given a rectangular matrix and an integer column, return an array containing the elements of the columnth column of the given matrix (the leftmost column is the 0th one).`,
        codeOutput: 
        `function extractMatrixColumn(matrix, column) {
            //Take out each 'row' (array element) and return the element at position [column]
            return matrix.map(row => row[column]);
        }`,
        code: function extractMatrixColumn(matrix, column) {
            //Take out each 'row' (array element) and return the element at position [column]
            return matrix.map(row => row[column]);
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Integer Arrays (Form of [1,2,3], [4,5,6]...)",
                    type: "NumberArrayArray"
                },
                {
                    text: "Column Number (Integer)",
                    type: "Number"
                }
            ]
        }
    },
    extraNumber: {
        instructions: `You're given three integers, a, b and c. It is guaranteed that two of these integers are equal to each other. What is the value of the third integer?`,
        codeOutput: 
        `function extraNumber(a, b, c) {
            return a === b ? c : a === c ? b : a;
        }`,
        code: function extraNumber(a, b, c) {
            return a === b ? c : a === c ? b : a;
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
                },
                {
                    text: "Integer c",
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