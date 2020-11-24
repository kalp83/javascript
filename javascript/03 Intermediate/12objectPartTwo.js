var user = {
    firstName: "Kalp",
    lastName: "Patel",
    role: "admin",
    loginCount: 64,
    facebookSignedIn: true,
    courseList: [],
    buyCourse: function (courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount: function () {
        return `${this.firstName} is enrolled in Total ${this.courseList.length} courses`;
    },
    
};

var courseList = true;
console.log(user.firstName);
user.buyCourse("react cours");
user.buyCourse("C++ Bootcamp");
console.log(user.getCourseCount());
