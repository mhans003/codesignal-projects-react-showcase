//Include global BigInt (as comment) in order to prevent no-undef in this environment.
/* global BigInt */

const challenges_t_z = {
    isTandemRepeat: {
        name: 'isTandemRepeat',
        instructions: `Determine whether the given string can be obtained by one concatenation of some string to itself.`,
        codeOutput: 
        `function isTandemRepeat(inputString) {
            let sub = "";
            //Up until half of the string is reached, see if the current substring concatenated to itself equals the input.
            for(let i = 0; i < inputString.length / 2; i++) {
                sub += inputString[i];
                if(sub + sub === inputString) return true;
            }
            return false;
        }`,
        code: function isTandemRepeat(inputString) {
            let sub = "";
            //Up until half of the string is reached, see if the current substring concatenated to itself equals the input.
            for(let i = 0; i < inputString.length / 2; i++) {
                sub += inputString[i];
                if(sub + sub === inputString) return true;
            }
            return false;
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
    tennisSet: {
        name: 'tennisSet',
        instructions: `In tennis, the winner of a set is based on how many games each player wins. The first player to win 6 games is declared the winner unless their opponent had already won 5 games, in which case the set continues until one of the players has won 7 games.

        Given two integers score1 and score2, your task is to determine if it is possible for a tennis set to be finished with a final score of score1 : score2.`,
        codeOutput: 
        `function tennisSet(score1, score2) {
            //If either score is over 7, we know this score is not possible.
            return score1 === 7 && score2 === 7 ?
            false :
            //If both scores are 0 or either is over 7, return false.
            score1 === 0 && score2 === 0 ?
            false :
            score1 > 7 || score2 > 7 ? 
            false : 
            //Otherwise, check if either score is 7.
            score1 === 7 || score2 === 7 ?
            //If so, make sure the other score is either 5 or 6.
            Math.abs(score1 - score2) >= 3 ? 
            //As long as the other score is 5 or 6, return true.
            false :
            true : 
            //If neither score is 7, see if one is 6.
            score1 === 6 || score2 === 6 ?
            //If so, make sure the other score is not 5.
            Math.abs(score1 - score2) < 2 ?
            //If the other score is 5, return false.
            false : 
            true :
            //If both scores are less than 6, there cannot be a winner.
            score1 < 6 && score2 < 6 ?
            false :
            true;
        }`,
        code: function tennisSet(score1, score2) {
            //If either score is over 7, we know this score is not possible.
            return score1 === 7 && score2 === 7 ?
            false :
            //If both scores are 0 or either is over 7, return false.
            score1 === 0 && score2 === 0 ?
            false :
            score1 > 7 || score2 > 7 ? 
            false : 
            //Otherwise, check if either score is 7.
            score1 === 7 || score2 === 7 ?
            //If so, make sure the other score is either 5 or 6.
            Math.abs(score1 - score2) >= 3 ? 
            //As long as the other score is 5 or 6, return true.
            false :
            true : 
            //If neither score is 7, see if one is 6.
            score1 === 6 || score2 === 6 ?
            //If so, make sure the other score is not 5.
            Math.abs(score1 - score2) < 2 ?
            //If the other score is 5, return false.
            false : 
            true :
            //If both scores are less than 6, there cannot be a winner.
            score1 < 6 && score2 < 6 ?
            false :
            true;
        },
        arguments: {
            descriptions: [
                {
                    text: "Integer score1",
                    type: "Number"
                },
                {
                    text: "Integer score2",
                    type: "Number"
                }
            ]
        }
    },
    threeSplit: {
        name: 'threeSplit',
        instructions: `You have a long strip of paper with integers written on it in a single line from left to right. You wish to cut the paper into exactly three pieces such that each piece contains at least one integer and the sum of the integers in each piece is the same. You cannot cut through a number, i.e. each initial number will unambiguously belong to one of the pieces after cutting. How many ways can you do it?

        It is guaranteed that the sum of all elements in the array is divisible by 3.`,
        codeOutput: 
        `function threeSplit(a) {
            //Get the total sum that each piece of the array should be.
            let sum = a.reduce((a,b) => a += b, 0) / 3;
            let combinations = 0;
            let firstPiece = 0;
            //Loop through each number in the array, starting at the first.
            for (let i = 0; i < a.length; i++) {
                //Incrementally add to the first piece.
                firstPiece += a[i];
                //If this current size of the first piece equals the correct sum, loop through the second piece for this iteration.
                if (firstPiece === sum) {
                    let secondPiece = 0;
                    //Loop through each number in the second piece.
                    for (let j = i + 1; j < a.length; j++) {
                        //Incrementally add to the second piece.
                        secondPiece += a[j];
                        //If this current size of the second piece equals the correct sum, we know we have reached a correct combination since the remainder must equal the other third. 
                        if (secondPiece === sum) {
                            //As long as this is not the last piece in the array, this is a working combination (there must be 3 pieces, not 2)
                            if (j < a.length - 1) {
                                combinations++;
                            }
                        }
                    }
                }
            }
            return combinations;
        }`,
        code: function threeSplit(a) {
            //Get the total sum that each piece of the array should be.
            let sum = a.reduce((a,b) => a += b, 0) / 3;
            let combinations = 0;
            let firstPiece = 0;
            //Loop through each number in the array, starting at the first.
            for (let i = 0; i < a.length; i++) {
                //Incrementally add to the first piece.
                firstPiece += a[i];
                //If this current size of the first piece equals the correct sum, loop through the second piece for this iteration.
                if (firstPiece === sum) {
                    let secondPiece = 0;
                    //Loop through each number in the second piece.
                    for (let j = i + 1; j < a.length; j++) {
                        //Incrementally add to the second piece.
                        secondPiece += a[j];
                        //If this current size of the second piece equals the correct sum, we know we have reached a correct combination since the remainder must equal the other third. 
                        if (secondPiece === sum) {
                            //As long as this is not the last piece in the array, this is a working combination (there must be 3 pieces, not 2)
                            if (j < a.length - 1) {
                                combinations++;
                            }
                        }
                    }
                }
            }
            return combinations;
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Integers (Sum of all elements must be divisible by 3; Example: 7,8,2,25,-9,12,12)",
                    type: "NumberArray"
                }
            ]
        }
    },
    timedReading: {
        name: 'timedReading',
        instructions: `Timed Reading is an educational tool used in many schools to improve and advance reading skills. A young elementary student has just finished his very first timed reading exercise. Unfortunately he's not a very good reader yet, so whenever he encountered a word longer than maxLength, he simply skipped it and read on.

        Help the teacher figure out how many words the boy has read by calculating the number of words in the text he has read, no longer than maxLength.
        Formally, a word is a substring consisting of English letters, such that characters to the left of the leftmost letter and to the right of the rightmost letter are not letters.`,
        codeOutput: 
        `function timedReading(maxLength, text) {
            let textStripped = "";
            for(let i = 0; i < text.length; i++) {
                //Add this character to the stripped version if it is a letter or space.
                if(text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90 ||
                   text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122 ||
                   text.charCodeAt(i) === 32) {
                       textStripped += text[i];
                   }
            }
            //Split the stripped text into individuals words, filter out the longer ones, and count the number of remaining words.
            return textStripped.split(" ").filter(word => word.length <= maxLength && word.length > 0).length;
        }`,
        code: function timedReading(maxLength, text) {
            let textStripped = "";
            for(let i = 0; i < text.length; i++) {
                //Add this character to the stripped version if it is a letter or space.
                if(text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90 ||
                   text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122 ||
                   text.charCodeAt(i) === 32) {
                       textStripped += text[i];
                   }
            }
            //Split the stripped text into individuals words, filter out the longer ones, and count the number of remaining words.
            return textStripped.split(" ").filter(word => word.length <= maxLength && word.length > 0).length;
        },
        arguments: {
            descriptions: [
                {
                    text: "Integer maxLength",
                    type: "Number"
                },
                {
                    text: "Input String",
                    type: "String"
                }
            ]
        }
    },
    twoSum: {
        name: `twoSum`,
        instructions: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
        You may assume that each input would have exactly one solution, and you may not use the same element twice.
        You can return the answer in any order.`,
        codeOutput: 
        `var twoSum = function(nums, target) {
            for(let i = 0; i < nums.length - 1; i++) {
                for(let j = i + 1; j < nums.length; j++) {
                    if(nums[i] + nums[j] === target) {
                        return [i, j];
                    }
                }
            }
        };`,
        code: function twoSum(nums, target) {
            for(let i = 0; i < nums.length - 1; i++) {
                for(let j = i + 1; j < nums.length; j++) {
                    if(nums[i] + nums[j] === target) {
                        return [i, j];
                    }
                }
            }
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Integers, Per Instructions (Form of 1,2,3...)",
                    type: "NumberArray"
                },
                {
                    text: "Integer for Target, Per Instructions",
                    type: "Number"
                }
            ]
        }
    },
    twoSum2: {
        name: `twoSum2`,
        instructions: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
        You may assume that each input would have exactly one solution, and you may not use the same element twice.
        You can return the answer in any order.`,
        codeOutput: 
        `var twoSum2 = function(nums, target) {
            for(let i = 0; i < nums.length - 1; i++) {
                let missingAddend = target - nums[i];
                if(nums.indexOf(missingAddend, i + 1) !== -1) {
                    return [i, nums.indexOf(missingAddend, i + 1)]
                }
            }
        };`,
        code: function twoSum2(nums, target) {
            for(let i = 0; i < nums.length - 1; i++) {
                let missingAddend = target - nums[i];
                if(nums.indexOf(missingAddend, i + 1) !== -1) {
                    return [i, nums.indexOf(missingAddend, i + 1)]
                }
            }
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Integers, Per Instructions (Form of 1,2,3...)",
                    type: "NumberArray"
                },
                {
                    text: "Integer for Target, Per Instructions",
                    type: "Number"
                }
            ]
        }
    },
    uniqueDigitProducts: {
        name: 'uniqueDigitProducts',
        instructions: `Let's call product(x) the product of x's digits. Given an array of integers a, calculate product(x) for each x in a, and return the number of distinct results you get.`,
        codeOutput: 
        `function uniqueDigitProducts(a) {
            let products = [];
            //Loop through each number, finding the product of its digits.
            a.forEach(number => {
                let currentNumber = number;
                let product = 1;
                while(currentNumber) {
                    //Get the next digit.
                    let thisDigit = currentNumber % 10;
                    //Multiply this number.
                    product *= thisDigit;
                    //Update the current number (go to next digit)
                    currentNumber = Math.floor(currentNumber / 10);
                }
                //See if this product already exists in the products array.
                if(products.indexOf(product) === -1) products.push(product);
            });
            //Return the number of unique products.
            return products.length;
        }`,
        code: function uniqueDigitProducts(a) {
            let products = [];
            //Loop through each number, finding the product of its digits.
            a.forEach(number => {
                let currentNumber = number;
                let product = 1;
                while(currentNumber) {
                    //Get the next digit.
                    let thisDigit = currentNumber % 10;
                    //Multiply this number.
                    product *= thisDigit;
                    //Update the current number (go to next digit)
                    currentNumber = Math.floor(currentNumber / 10);
                }
                //See if this product already exists in the products array.
                if(products.indexOf(product) === -1) products.push(product);
            });
            //Return the number of unique products.
            return products.length;
        },
        arguments: {
            descriptions: [
                {
                    text: "Array of Integers (No Brackets; Form of 1,2,3...)",
                    type: "NumberArray"
                }
            ]
        }
    },
    validTime: {
        name: 'validTime',
        instructions: `Check if the given string is a correct time representation of the 24-hour clock.

        Example
        
        For time = "13:58", the output should be
        validTime(time) = true;
        For time = "25:51", the output should be
        validTime(time) = false;
        For time = "02:76", the output should be
        validTime(time) = false.`,
        codeOutput: 
        `function validTime(time) {
            //Create number versions of this string.
            let values = time.split(":").map(str => Number(str));
            //Check if the values (hour and minutes) are within correct range.
            return values[0] < 24 && values[0] >= 0 ? 
            values[1] < 60 && values[1] >= 0 ?
            true :
            false :
            false;
        }`,
        code: function validTime(time) {
            //Create number versions of this string.
            let values = time.split(":").map(str => Number(str));
            //Check if the values (hour and minutes) are within correct range.
            return values[0] < 24 && values[0] >= 0 ? 
            values[1] < 60 && values[1] >= 0 ?
            true :
            false :
            false;
        },
        arguments: {
            descriptions: [
                {
                    text: "Time String (In the form of HH:MM; 24-Hour Form)",
                    type: "String"
                }
            ]
        }
    },
    variableName: {
        name: 'variableName',
        instructions: `Correct variable names consist only of English letters, digits and underscores and they can't start with a digit.

        Check if the given string is a correct variable name.`,
        codeOutput: 
        `function variableName(name) {
            //Make sure characters are alphanumeric or underscores
            for(let i = 0; i < name.length; i++) {
                
                let code = name.charCodeAt(i);
                
                //See if first character is a number. 
                if(i === 0) {
                    if(code > 47 && code < 58) return false;
                }
                
                //Check all other cases.
                if(!(code > 64 && code < 91) && 
                !(code > 96 && code < 123) && 
                !(code > 47 && code < 58) &&
                !(code === 95)) {
                    return false;
                }
            }
            
            return true;
        }`,
        code: function variableName(name) {
            //Make sure characters are alphanumeric or underscores
            for(let i = 0; i < name.length; i++) {
                
                let code = name.charCodeAt(i);
                
                //See if first character is a number. 
                if(i === 0) {
                    if(code > 47 && code < 58) return false;
                }
                
                //Check all other cases.
                if(!(code > 64 && code < 91) && 
                !(code > 96 && code < 123) && 
                !(code > 47 && code < 58) &&
                !(code === 95)) {
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
    videoPart: {
        name: 'videoPart',
        instructions: `You have been watching a video for some time. Knowing the total video duration find out what portion of the video you have already watched.

        Example
        
        For part = "02:20:00" and total = "07:00:00", the output should be
        videoPart(part, total) = [1, 3].
        
        You have watched 1 / 3 of the whole video.`,
        codeOutput: 
        `function videoPart(part, total) {
            //Get the total number of seconds for the 'part' and the 'total' length of the video.
            let partSeconds = part.split(":")
            .map(str => Number(str))
            .reduce((total, number, index) => {
                return index === 0 ?
                total += (number * 3600) :
                index === 1 ?
                total += (number * 60) :
                total += number;
            }, 0);
            
            let totalSeconds = total.split(":")
            .map(str => Number(str))
            .reduce((total, number, index) => {
                return index === 0 ?
                total += (number * 3600) :
                index === 1 ?
                total += (number * 60) :
                total += number;
            }, 0);
            
            //If there is a remainder when dividing these values, we know we need to reduce the fraction.
            if(totalSeconds % partSeconds) {
                //Find the GCF between the numerator and denominator, then return the simplified fraction.
                let commonFactor = findCommonFactors(findFactors(partSeconds), findFactors(totalSeconds))
                return [partSeconds / commonFactor, totalSeconds / commonFactor];
            }
            
            //Otherwise, return this as a unit fraction.
            return [1, totalSeconds / partSeconds];
        
            //Helper function to find all factors of each number.
            function findFactors(num) {
                let max = num === 1 ? 1 : Math.ceil(num / 2);
                let factors = [];
                for(let i = 1; i <= max; i++) {
                    if(num % i === 0) {
                        factors.push(num / i);
                        factors.push(i);
                        max = num / i;
                    }
                }
                return factors;
            }
            
            //Helper function to find the GCF between the two.
            function findCommonFactors(factors1, factors2) {
                factors1.sort((a, b) => b - a);
                for(let i = 0; i < factors1.length; i++) {
                    if(factors2.includes(factors1[i])) {
                        return factors1[i];
                    }
                }
                return 1;
            }
        }`,
        code: function videoPart(part, total) {
            //Get the total number of seconds for the 'part' and the 'total' length of the video.
            let partSeconds = part.split(":")
            .map(str => Number(str))
            .reduce((total, number, index) => {
                return index === 0 ?
                total += (number * 3600) :
                index === 1 ?
                total += (number * 60) :
                total += number;
            }, 0);
            
            let totalSeconds = total.split(":")
            .map(str => Number(str))
            .reduce((total, number, index) => {
                return index === 0 ?
                total += (number * 3600) :
                index === 1 ?
                total += (number * 60) :
                total += number;
            }, 0);
            
            //If there is a remainder when dividing these values, we know we need to reduce the fraction.
            if(totalSeconds % partSeconds) {
                //Find the GCF between the numerator and denominator, then return the simplified fraction.
                let commonFactor = findCommonFactors(findFactors(partSeconds), findFactors(totalSeconds))
                return [partSeconds / commonFactor, totalSeconds / commonFactor];
            }
            
            //Otherwise, return this as a unit fraction.
            return [1, totalSeconds / partSeconds];
        
            //Helper function to find all factors of each number.
            function findFactors(num) {
                let max = num === 1 ? 1 : Math.ceil(num / 2);
                let factors = [];
                for(let i = 1; i <= max; i++) {
                    if(num % i === 0) {
                        factors.push(num / i);
                        factors.push(i);
                        max = num / i;
                    }
                }
                return factors;
            }
            
            //Helper function to find the GCF between the two.
            function findCommonFactors(factors1, factors2) {
                factors1.sort((a, b) => b - a);
                for(let i = 0; i < factors1.length; i++) {
                    if(factors2.includes(factors1[i])) {
                        return factors1[i];
                    }
                }
                return 1;
            }
        },
        arguments: {
            descriptions: [
                {
                    text: "Length of Part of Video as Time String (Form of HH:MM:SS)",
                    type: "String"
                },
                {
                    text: "Length of Video as Time String (Form of HH:MM:SS)",
                    type: "String"
                }
            ]
        }
    },
    volleyballPositions: {
        name: 'volleyballPositions',
        instructions: `You are watching a volleyball tournament, but you missed the beginning of the very first game of your favorite team. Now you're curious about how the coach arranged the players on the field at the start of the game.

        The team you favor plays in the following formation:
        
        0 3 0
        4 0 2
        0 6 0
        5 0 1
        where positive numbers represent positions occupied by players. After the team gains the serve, its members rotate one position in a clockwise direction, so the player in position 2 moves to position 1, the player in position 3 moves to position 2, and so on, with the player in position 1 moving to position 6.
        
        Given the current formation of the team and the number of times k it gained the serve, find the initial position of each player in it.`,
        codeOutput: 
        `function volleyballPositions(formation, k) {
            //Every 6 rotations, positions are at the same place, so don't exceed 6 rotations total for each input case.
            let totalRotations = k % 6;
            
            //Helper function to shift positions once.
            let shiftOnce = currentPositions => {
                //Define position map as a 2-dimensional array to use as a 'key' for rotation positions.
                let positionMap = [
                    [0,1],
                    [1,0],
                    [3,0],
                    [2,1],
                    [3,2],
                    [1,2]
                ];
                
                //Keep track of the last element as a placeholder.
                let last = currentPositions[positionMap[5][0]][positionMap[5][1]];
                
                //Loop through each position in the position map, and move the elements around once.
                for(let position = positionMap.length - 1; position > 0; position--) {
                    currentPositions[positionMap[position][0]][positionMap[position][1]] =
                    currentPositions[positionMap[position - 1][0]][positionMap[position - 1][1]];
                }
                 
                //At the end, replace the first element with the placeholder last.   
                currentPositions[positionMap[0][0]][positionMap[0][1]] = last; 
            }
            
            //Repeat the rotation as many times as necessary.
            for(let i = 0; i < totalRotations; i++) {
                shiftOnce(formation);
            }
            
            return formation;
        }`,
        code: function volleyballPositions(formation, k) {
            //Every 6 rotations, positions are at the same place, so don't exceed 6 rotations total for each input case.
            let totalRotations = k % 6;
            
            //Helper function to shift positions once.
            let shiftOnce = currentPositions => {
                //Define position map as a 2-dimensional array to use as a 'key' for rotation positions.
                let positionMap = [
                    [0,1],
                    [1,0],
                    [3,0],
                    [2,1],
                    [3,2],
                    [1,2]
                ];
                
                //Keep track of the last element as a placeholder.
                let last = currentPositions[positionMap[5][0]][positionMap[5][1]];
                
                //Loop through each position in the position map, and move the elements around once.
                for(let position = positionMap.length - 1; position > 0; position--) {
                    currentPositions[positionMap[position][0]][positionMap[position][1]] =
                    currentPositions[positionMap[position - 1][0]][positionMap[position - 1][1]];
                }
                 
                //At the end, replace the first element with the placeholder last.   
                currentPositions[positionMap[0][0]][positionMap[0][1]] = last; 
            }
            
            //Repeat the rotation as many times as necessary.
            for(let i = 0; i < totalRotations; i++) {
                console.log(formation);
                shiftOnce(formation);
            }
            
            return formation;
        },
        arguments: {
            descriptions: [
                {
                    text: 'Array of String Arrays Showing Volleyball Formation (Example to Copy: [empty,Player5,empty], [Player4,empty,Player2], [empty,Player3,empty], [Player6,empty,Player1])',
                    type: "ArrayArray"
                },
                {
                    text: "Integer k",
                    type: "Number"
                }
            ]
        }
    },
    weakNumbers: {
        name: 'weakNumbers',
        instructions: `We define the weakness of number x as the number of positive integers smaller than x that have more divisors than x.

        It follows that the weaker the number, the greater overall weakness it has. For the given integer n, you need to answer two questions:
        
        what is the weakness of the weakest numbers in the range [1, n]?
        how many numbers in the range [1, n] have this weakness?
        Return the answer as an array of two elements, where the first element is the answer to the first question, and the second element is the answer to the second question.`,
        codeOutput: 
        `function weakNumbers(n) {
            let output = [0, 0];
            //Keep track of how many numbers in this range 1-n that have a given index as weakness level.
            let weaknessMap = {};
            //Keep track of factor numbers for each number in the range 1-n.
            let factors = {};
            //Get all factors within this range. Each time, determine weakness.
            for(let i = 1; i <= n; i++) {
                factors[i] = 0;
                let max = n;
                for(let j = 1; j < max; j++) {
                    if(i % j === 0) {
                        if(i / j === j) {
                            factors[i]++;
                        } else {
                            factors[i] += 2;
                        }
                        max = i / j;
                    }
                }
                //Now that we got all the factors, determine weakness and save.
                let weakness = 0;
                for(let number in factors) {
                    if(factors[number] > factors[i] && number !== i) {
                        weakness++;
                    }
                }
                if(weaknessMap[weakness]) {
                    weaknessMap[weakness]++;
                } else {
                    weaknessMap[weakness] = 1;
                }
            }
            
            //Get the weakest value 
            let maxWeakness = 0;
            for(let weakness in weaknessMap) {
                if(Number(weakness) > maxWeakness) maxWeakness = Number(weakness); 
            }
            //Save the values in the output as directed.
            output[0] = Number(maxWeakness);
            output[1] = weaknessMap[maxWeakness];
            
            //Return result
            return output;
        }`,
        code: function weakNumbers(n) {
            let output = [0, 0];
            //Keep track of how many numbers in this range 1-n that have a given index as weakness level.
            let weaknessMap = {};
            //Keep track of factor numbers for each number in the range 1-n.
            let factors = {};
            //Get all factors within this range. Each time, determine weakness.
            for(let i = 1; i <= n; i++) {
                factors[i] = 0;
                let max = n;
                for(let j = 1; j < max; j++) {
                    if(i % j === 0) {
                        if(i / j === j) {
                            factors[i]++;
                        } else {
                            factors[i] += 2;
                        }
                        max = i / j;
                    }
                }
                //Now that we got all the factors, determine weakness and save.
                let weakness = 0;
                for(let number in factors) {
                    if(factors[number] > factors[i] && number !== i) {
                        weakness++;
                    }
                }
                if(weaknessMap[weakness]) {
                    weaknessMap[weakness]++;
                } else {
                    weaknessMap[weakness] = 1;
                }
            }
            
            //Get the weakest value 
            let maxWeakness = 0;
            for(let weakness in weaknessMap) {
                if(Number(weakness) > maxWeakness) maxWeakness = Number(weakness); 
            }
            //Save the values in the output as directed.
            output[0] = Number(maxWeakness);
            output[1] = weaknessMap[maxWeakness];
            
            //Return result
            return output;
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
    whoseTurn: {
        name: 'whoseTurn',
        instructions: `Imagine a standard chess board with only two white and two black knights placed in their standard starting positions: the white knights on b1 and g1; the black knights on b8 and g8.

        There are two players: one plays for white, the other for black. During each move, the player picks one of his knights and moves it to an unoccupied square according to standard chess rules. Thus, a knight on d5 can move to any of the following squares: b6, c7, e7, f6, f4, e3, c3, and b4, as long as it is not occupied by either a friendly or an enemy knight.
        
        The players take turns in making moves, starting with the white player. Given the configuration p of the knights after an unspecified number of moves, determine whose turn it is.`,
        codeOutput: 
        `function whoseTurn(p) {
            //Create arrays to store the current codes.
            let whiteConfigurations = p.slice(0, 5).split(";");
            let blackConfigurations = p.slice(6).split(";");
            
            //Get the codes for black knight.
            let black1Codes = blackConfigurations.map(knight => {
                //Find the code, combining the letter's code with the number's code.
                let code = ((knight.charCodeAt(0) - 96) + Number(knight[1])) % 2 ? "odd" : "even";
                return code;
            });
            
            //Get the codes for white knight.
            let white1Codes = whiteConfigurations.map(knight => {
                //Find the code, combining the letter's code with the number's code.
                let code = ((knight.charCodeAt(0) - 96) + Number(knight[1])) % 2 ? "odd" : "even";
                return code;
            });
            
            //We know that if both codes (for each color) either have the same or both different values, it will be the white's turn.
            return black1Codes[0] === black1Codes[1] && white1Codes[0] === white1Codes[1] ?
            true :
            black1Codes[0] !== black1Codes[1] && white1Codes[0] !== white1Codes[1] ?
            true : 
            false;  
        }`,
        code: function whoseTurn(p) {
            //Create arrays to store the current codes.
            let whiteConfigurations = p.slice(0, 5).split(";");
            let blackConfigurations = p.slice(6).split(";");
            
            //Get the codes for black knight.
            let black1Codes = blackConfigurations.map(knight => {
                //Find the code, combining the letter's code with the number's code.
                let code = ((knight.charCodeAt(0) - 96) + Number(knight[1])) % 2 ? "odd" : "even";
                return code;
            });
            
            //Get the codes for white knight.
            let white1Codes = whiteConfigurations.map(knight => {
                //Find the code, combining the letter's code with the number's code.
                let code = ((knight.charCodeAt(0) - 96) + Number(knight[1])) % 2 ? "odd" : "even";
                return code;
            });
            
            //We know that if both codes (for each color) either have the same or both different values, it will be the white's turn.
            return black1Codes[0] === black1Codes[1] && white1Codes[0] === white1Codes[1] ?
            true :
            black1Codes[0] !== black1Codes[1] && white1Codes[0] !== white1Codes[1] ?
            true : 
            false;  
        },
        arguments: {
            descriptions: [
                {
                    text: "Positions of White/Black Knights on Chessboard (Form of b1;g1;b8;g8)",
                    type: "String"
                }
            ]
        }
    },
    willYou: {
        name: 'willYou',
        instructions: `Once Mary heard a famous song, and a line from it stuck in her head. That line was "Will you still love me when I'm no longer young and beautiful?". Mary believes that a person is loved if and only if he/she is both young and beautiful, but this is quite a depressing thought, so she wants to put her belief to the test.

        Knowing whether a person is young, beautiful and loved, find out if they contradict Mary's belief.
        
        A person contradicts Mary's belief if one of the following statements is true:
        
        they are young and beautiful but not loved;
        they are loved but not young or not beautiful.`,
        codeOutput: 
        `function willYou(young, beautiful, loved) {
            return loved ? 
            !(loved && (young && beautiful)) : 
            young && beautiful ?
            !(loved && (young && beautiful)) :
            loved && (young && beautiful);
        }`,
        code: function willYou(young, beautiful, loved) {
            return loved ? 
            !(loved && (young && beautiful)) : 
            young && beautiful ?
            !(loved && (young && beautiful)) :
            loved && (young && beautiful);
        },
        arguments: {
            descriptions: [
                {
                    text: "Boolean Value for Young (true or false)",
                    type: "Boolean"
                },
                {
                    text: "Boolean Value for Beautiful (true or false)",
                    type: "Boolean"
                },
                {
                    text: "Boolean Value for Loved (true or false)",
                    type: "Boolean"
                }
            ]
        }
    }
};

export default challenges_t_z;

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