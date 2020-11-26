const myStates = [
    "Gujarat",
    "delhi",
    "Maharashtra",
    1989,
    "punjab",
];

for (let i = 0; i <= myStates.length; i++){
    if(typeof myStates[i]!=="string") continue;
    // if(typeof myStates[i] ==="string") continue; //only number will printed
    // if(typeof myStates[i]!=="string") break; //break after number comes up
     console.log(myStates[i]);
}