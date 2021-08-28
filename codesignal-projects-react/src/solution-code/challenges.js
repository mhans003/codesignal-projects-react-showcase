const challenges = {
    candies: {
        instructions: `n children have got m pieces of candy. They want to eat as much candy as they can, but each child must eat exactly the same amount of candy as any other child. Determine how many pieces of candy will be eaten by all the children together. Individual pieces of candy cannot be split.`,
        codeOutput: 
        `function candies(n, m) { 
            return Math.floor(m / n) * n; 
        }`,
        code: function candies(n, m) {
            return Math.floor(m / n) * n;
        }
    },
    absvaluesumminimization: {
        instructions: `Given a sorted array of integers a, your task is to determine which element of a is closest to all other values of a. In other words, find the element x in a, which minimizes the following sum:

        abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)
        (where abs denotes the absolute value)
        
        If there are several possible answers, output the smallest one.`,
        codeOutput: 
        `function absoluteValuesSumMinimization(a) {
            //Keep track of the smallest sum and smallest subtracting element
            let smallestSum = Infinity;
            let smallestSubtract = Infinity;
            
            //Loop through all elements to use as subtractors.
            for(let i = 0; i < a.length; i++) {
                let thisSum = 0;
                //For each subtractor, repeat the summing algorithm for each difference.
                for(let j = 0; j < a.length; j++) {
                    thisSum += Math.abs(a[j] - a[i]);
                }
                //If this produced the smallest sum, save this as the current smallest 'subtractor'
                if(thisSum < smallestSum) {
                    smallestSum = thisSum;
                    smallestSubtract = i;
                }
                
            }
            //Return the element at the index that represents the best 'subtractor' 
            return a[smallestSubtract];
        }`,
        code: function absoluteValuesSumMinimization(a) {
            //Keep track of the smallest sum and smallest subtracting element
            let smallestSum = Infinity;
            let smallestSubtract = Infinity;
            
            //Loop through all elements to use as subtractors.
            for(let i = 0; i < a.length; i++) {
                let thisSum = 0;
                //For each subtractor, repeat the summing algorithm for each difference.
                for(let j = 0; j < a.length; j++) {
                    thisSum += Math.abs(a[j] - a[i]);
                }
                //If this produced the smallest sum, save this as the current smallest 'subtractor'
                if(thisSum < smallestSum) {
                    smallestSum = thisSum;
                    smallestSubtract = i;
                }
                
            }
            //Return the element at the index that represents the best 'subtractor' 
            return a[smallestSubtract];
        }
    }
};

export default challenges;