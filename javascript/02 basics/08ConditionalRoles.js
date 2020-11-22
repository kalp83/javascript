var user ="TestPrep";

switch (user) {
    case "admin":
        console.log("You Get The Full Access");
        break;
        case "subAdmin":
            console.log("You Get The Full Access Too");
            break;
        case "TestPrep":
                console.log("You Get The Access Too Prepare Tests");
            break;
            case "user":
                console.log("You Get The Access To Consume The Content");
                break;
            
    default:
        console.log("Trial User");
        break;
}