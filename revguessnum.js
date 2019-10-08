console.log ("I'm thinking of a number between 1 and 100\nTake a guess!");
process.stdin.on ('data', (chunk) => {
    let number = chunk;
    if (number > 20) {
        console.log("Sorry! The number I'm thinking of is lower than " + number);
    } else if (number < 20) {
            console.log("Sorry! The number I'm thinking of is higher than " + number);
        } else {
    console.log ("Correct! How'd you know?");} 
    
});