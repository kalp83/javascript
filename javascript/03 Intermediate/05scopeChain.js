var name = "kalp";

console.log("line number 3", name);

function sayName() {
    var name = "MR. kalp"
    console.log("line number 6", name);

    sayNameTwo();

    function sayNameTwo() {
        var name = "mr. kp";
        console.log("line number 11", name);
    }
}
sayName();
//it called as story of pop-cycle
//output:- hitesh because it's won't it own ice cream
//now where do i get from?? ofcouse from global scope the bigger guy 
//outPut:-
/*line number 3 kalp
line number 6 MR. kalp
*/
//now both of them are having ice-cream enjoy