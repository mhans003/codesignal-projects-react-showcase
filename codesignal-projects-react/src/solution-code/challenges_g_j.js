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