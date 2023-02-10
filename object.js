import { Person , Student, Course} from "./class.js";

// Create a new Person object using the Person class.

function createPerson(firstName, lastName, id){
    try{
        return new Person(firstName, lastName, id);
    }
    catch(error){
        console.log(`Error creating Person ${firstName} ${lastName}`);
        console.log(`${error}`);
    }
}

let person1 = createPerson("John", "Smith", 123);
let person2 = createPerson("", "Doe", '456');
let person3 = createPerson("John", "", 789);
let person4 = createPerson("John", "Smith", '123');

// Create a new Course object using the Course class.

function createCourse(name, code, teacher){
    try{
        return new Course(name, code, teacher);
    }
    catch(error){
        console.log(`Error creating Course ${name}`);
        console.log(`${error}`);
    }
}
let course1 = createCourse("Math", "MATH101", "John Smith");
let course2 = createCourse("English", "ENG101", "Jane Doe");
let course3 = createCourse("Science", "SCI101", "John Smith");
let course4 = createCourse("Physics", "PH101", "Jane Doe");

// Create a new Student object using the Student class.

function createStudent(firstName, lastName, id){
    try{
        return new Student(firstName, lastName, id);
    }
    catch(error){
        console.log(`Error creating Student ${firstName} ${lastName}`);
        console.log(`${error}`);
    }
}

let student1 = createStudent("Jane", "Doe", 456);
let student2 = createStudent("John", "Smith", '123');



try{
    student1.enroll("Math");
    student1.enroll("English");   
}
catch(error){
    console.log(`${error}`);
}



