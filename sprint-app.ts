/*
* 
* Author: 
* 
* ONYEN: 
* 
* UNC Honor Pledge: I certify that no unauthorized assistance has been received 
* or given in the completion of this work. I certify that I understand and 
* could now rewrite on my own, without assistance from course staff, 
* the problem set code I am submitting. 
*/
import { print, promptString, promptNumber, csvToArray } from "introcs";
import { awaitExpression } from "babel-types";

export class Course {
    department: string = "";
    num: number = 0;
    geneds: string[] = [];
    description: string = "";
}
export class Schedule {
    owner: string = "";
    courses: Course[] = [];
}


export let main = async() => {

let uncCourses: Course[] = await csvToArray("course-data.csv", Course);

// TODO: put SOME code here
// let comp101 = new Course();
// comp101 = constructCourse("COMP", 101, ["Qr"], "a cool class");
// let comp110 = new Course();
// comp110 = constructCourse("COMP", 110, ["QR"], "An awesome class!");

// let courseFilterArray: Course[] = [];
// courseFilterArray = [];
// // print (comp101);        
// // print(comp101.department);
// // print(comp101.description);
// // print(comp101.geneds);
// // print(comp101.num);
// // let a = courseToString(comp101);
// // print(a);
// // let b = scheduleToString(completeSchedule[comp101]);
// let mySchedule = new Schedule(); 
// mySchedule = addCourseToSchedule(comp101, mySchedule);
// mySchedule = addCourseToSchedule(comp110, mySchedule);

// print(scheduleToString(mySchedule));

let mySchedule = new Schedule();
mySchedule.owner = "Will";
// mySchedule.courses = filterByDepartment(uncCourses, "COMP");
// print(scheduleToString(mySchedule));

let numberOfClasses: number = await promptNumber("How many classes would you like to take?");
for (let i = 0; i < numberOfClasses; i++) {

    print(mySchedule.courses);
    let dept: string = "";
    let courseNum: number = 0; 
    let ge: string = "";
    let keyword: string = "";
    if (await promptString("Filter by department?") === "Y") {
        dept = await promptString("What value would you like to filter department by?");
    }
    if (await promptString("Filter by course number?") === "Y") {
        courseNum = await promptNumber("What value would you like to filter course number by?");
    }
    if (await promptString("Filter by gen ed?") === "Y") {
        ge = await promptString("What value would you like to filter gen ed with?");
    }
    if (await promptString("Filter by keyword?") === "Y") {
        keyword = await promptString("What value would you like to filter keyword by?");
    }

}

};

export let constructCourse = (department: string, num: number, geneds: string[], description: string): Course => {
        let aCourse = new Course();
        aCourse.department = department;
        aCourse.num = num;
        aCourse.geneds = geneds;
        aCourse.description = description;
        return aCourse; 
};

export let addCourseToSchedule = (a: Course, b: Schedule): Schedule => {
        b.courses[b.courses.length] = a;
        return b;
};

export let filterByDepartment = (a: Schedule["courses"], b: string): Course[] => {

    let filteredCourses: Course[] = [];

    for (let i = 0; i < a.length; i++) {

    if (b === "") {
        filteredCourses = a;
    } else if (a[i].department === b) {
        filteredCourses[i].department = b;
    }   
}   return filteredCourses;

};

export let filterByNumberLessThan = (a: Course[], b: number): Course[] => {

    let lessThanArray: Course[] = [];

    for (let i = 0; i < a.length; i++) {
    
    if (b === 0) {
        lessThanArray = a;
    } else if (a[i].num < b) {
        lessThanArray[i] = a[i];
    }
}   return lessThanArray;
};

export let filterByGened = (a: Course[], b: string): Course[] => {

    let genedArray: Course[] = [];

    for (let i = 0; i < a.length; i++) {

        if (b === "") {
            genedArray = a;
        } else if (a[i].geneds.indexOf(b) > -1) {
            genedArray[i] = a[i];
        }
    }   
    return genedArray;
};

export let filterByKeyword = (a: Course[], b: string): Course[] => {
    
    let keywordArray: Course[] = [];

    for (let i = 0; i < a.length; i++) {

        if (b === "") {
            keywordArray = a;    
        } else if (a[i].description.includes(b)) {
            keywordArray[i].description = b;
        }
    }
    return keywordArray;
};
// TODO: Put your EXPORTED functions here

export let courseToString = (a: Course): string => {
    let anyCourse: string = a.department  + " " + a.num + ": " + a.description;
    return anyCourse;

};
export let scheduleToString = (b: Schedule): string => {
    let a: string = b.owner + "'s" + " Schedule:" + "\n";
    for (let i = 0; i < b.courses.length; i++) {
        a = a + courseToString(b.courses[i]) + "\n";
}
    return a;
};
    
main();
