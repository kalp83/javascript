 var loggedin = true;
 var verifedEmail = true;
 var cardinfo = true;

// if(loggedin){
//     console.log("logged in successfully");
//     if(verifedEmail){
//         console.log("Email is verified");
//         if(cardinfo){
//             console.log("you Can make a Purchase");
//         }
//     }
// }

if (loggedin && verifedEmail && cardinfo){
    console.log("Allow user to Purchase");
}   else {
    console.log("you are not allowed to do that");
}