// const names = ["Youtube", "Facebook", "Instagram", "Netlfix", "Amazon"];

// for (const n of names) {
//     console.log(n);
// }

const symbol = {
    yt: "Youtube",
    ig: "Instagram",
    fb: "facebook",
    lco: "learncodeonline.in"
}

for (const n in symbol){
    // console.log(symbol[n]);
    console.log(`Keys is: ${n} and the value is: ${symbol[n]}`);
}