var getUserRole = function (name, role){

switch(role){
    case "admin":
        return `${name} is admin with all access`;
         //not necessary
    case "sub-admin":
        return `${name} is sub-admin with access to create and delete course`;
         //not necessary
    case "testPrep":
        return `${name} is testPrep with access to create/delete Test`;
         //not necessary
    case "user":
        return `${name} is user with access to consume the content`;
         //not necessary
    default:
        return `${name} is an trial user`;     
        
}
}
console.log(getUserRole("Kalp","sub-admin"));
