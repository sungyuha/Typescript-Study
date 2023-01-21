let studentID: number = 12345;
let studentName:string = 'YUHA KIM';
let age:number = 28;
let gender:string = 'female';
let subject:string = 'Javascript';
let courseCompleted: boolean = false;

// 오브젝트를 바깥에 새성하고 오브젝트의 이름을 assignment 에 패스
let student1 = {
    studentID: 122233,
    studentName: 'Janet Jacksan',
    age: 30,
    gender: 'female',
    subject: 'Mongo DB',
    courseCompleted: false
}

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

// 또 다른 함수를 추가, 새롭게 추가 된 함ㅅ는 파라미터로 학생의 정보를 받아서 그 정보를 저장하는 함수
// 파라미터에 방금 전 선언한 Interface 인 Student 를 4개의 변수에 타입으로 지정 - 코드 재사용
function saveStuentDetails(student: Student): void
{

}

// 아무 문제 없이 컴파일
// 위에 작성한 student1 
saveStuentDetails(student1);