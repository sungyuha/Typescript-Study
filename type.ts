let studentID: number = 12345;
let studentName:string = 'YUHA KIM';
let age:number = 28;
let gender:string = 'female';
let subject:string = 'Javascript';
let courseCompleted: boolean = false;

// 타입으로 사용되는 인터페이스
interface Student {
    // 뱐화되는 객체의 구조를 타입으로 지정
    studentID:number;
    studentName:string;
    age:number;
    gender:string;
    subject:string;
    courseCompleted: boolean;
}

// 변환값늬 타입 지정 -> Student
function getStuentDetails(studentID: number): Student
{
    return {
        // 프로퍼티
        studentID: 123456,
        studentName: 'Mark',
        age: 27,
        gender: 'male',
        subject: 'Node JS',
        courseCompleted: true
    };
}
