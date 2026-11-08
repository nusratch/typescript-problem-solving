

// problem solving 1

function multiplyValue(value: number, multiplier?: number) {
    if (multiplier === undefined) {
        multiplier = 2;
    }
    
    
    return value * multiplier;
}






// problem solving 2 

 function processInput(input: string | number | boolean): string | number  {
    if (typeof input === "string") {
        return input.trim().toLowerCase();
    }
     else if (typeof input === "number") {
        return input * 10;
    } else {
        if (input === true) {
            return "Active";
        } else {
            return "Inactive";
        }
    }
}






// problem solving 3


function formatCoordinate(

    coordinate: readonly [number, number, string]
){

    const [latitude, longitude, locationName] = coordinate;

    return `Location: ${locationName} (${latitude}, ${longitude})`;
}





// problem solving 4

 function concatenateArrays<T>(...arrays: T[][]) {

    const result: T[] = [];

    for (const array of arrays) {

        result.push(...array);
    }

    return result;
}





// problem solving 5

interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

function getPopularCourses(
    courses: Course[],
    minStudents: number
): Course[] {
    const popularCourses: Course[] = [];

    for (const course of courses) {
        if (course.isPublished === true && course.students >= minStudents) {
            popularCourses.push(course);
        }
    }

    return popularCourses;
}


// problem solving 6

function pluckValues<T, K extends keyof T>(array: T[], key: K): T[K][] {
    const result: T[K][] = [];

    for (const item of array) {
        result.push(item[key]);
    }

    return result;
}
  

// problem solving 7



class Employee {
    protected name: string;
    private baseSalary: number;

    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    private department: string;

    constructor(name: string, baseSalary: number, department: string) {
        super(name, baseSalary);
        this.department = department;
    }

    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}


// problem solving 8

async function validateAgeAsync(age: number): Promise<string> {
    if (age < 18) {
        throw new Error("Access Denied: Must be 18 or older");
    }

    await new Promise<void>((resolve) => {
        setTimeout(resolve, 1000);
    });

    return "Access Granted";
}

