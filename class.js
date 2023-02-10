// Create a class called Person that has properties for firstName, lastName, and id.
// Add a method fullName that returns the full name of the person.


export class Person {
    constructor(firstName, lastName, id){
        if(firstName === "" || typeof(firstName) !== "string"){
            throw new Error("First name cannot be empty and must be a string");
        }
        if(typeof(id) !== "number" || id === ""){
            throw new Error("ID must be a number and cannot be empty");
        }
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
    }

    fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

// Create a class called Student that inherits from the Person class and adds a property enrolledCourses that is an array of strings.
// Add a method enroll that takes a course name and adds it to the enrolledCourses array.

export class Student extends Person{
    constructor (firstName, lastName, id){
        super(firstName, lastName, id);
        this.enrolledCourses = [];
    }
    
    enroll(courseName){
        if(this.enrolledCourses.includes(courseName)){
            throw new Error(`Student already enrolled in ${courseName} course`);
        }
        this.enrolledCourses.push(courseName);
    }

}


// Create a class called Course that has properties for name, code, and teacher.
// Add a method toString that returns a string representation of the course.

export class Course{
    constructor(name, code, teacher){
        if(name === "" || code === "" || teacher === ""){
            throw new Error('Course name, code, and teacher cannot be empty');
        }
        if(typeof(name) !== "string" || typeof(code) !== "string" || typeof(teacher) !== "string"){
            throw new Error('Course name must be a string, code must be a number, and teacher must be a string');
        }
        this.name = name;
        this.code = code;
        this.teacher = teacher;
    }

    toString(){
        return `${this.name} (${this.code}) taught by ${this.teacher}`;
    }

}

// Modify the Student class to also have a property coursesTaken that is a Map where the keys are course codes and the values are instances of the Course class.

Student.prototype.coursesTaken = new Map();

// Add a method takeCourse that takes a Course object and adds it to the coursesTaken map.

Student.prototype.takeCourse = function(Course){
    this.coursesTaken.set((Course.code), Course);
}





