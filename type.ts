let studentID: number = 12345;
let studentName:string = 'YUHA KIM';
let age:number = 28;
let gender:string = 'female';
let subject:string = 'Javascript';
let courseCompleted: boolean = false;

// 열거형 (Enum) 과 리터럴 타입
// Enum이란, 연관 된  아이템들을 함께 묶어서 표현 할 수 있는 수단
// Enum을 선언하기 위해서는 키워드를 명시
enum GenderType {
    Male,
    Female
}

// 오브젝트를 바깥에 새성하고 오브젝트의 이름을 assignment 에 패스
let student1 = {
    studentID: 122233,
    studentName: 'Janet Jacksan',
    age: 30,
    gender: GenderType.Female,
    subject: 'Mongo DB',
    courseCompleted: false
}

// 타입으로 사용되는 인터페이스
interface Student {
    // 뱐화되는 객체의 구조를 타입으로 지정
    readonly studentID:number; // Readonly 프로퍼티는 읽기 전용 프로퍼티로 '객체 생성시 할당 된 프로퍼티의 값을 바꿀 수 없다.'
    studentName:string;
    age?:number;
    gender:GenderType;
    subject:string;
    courseCompleted: boolean;

    // 메소드는 객체내에서 선언 된 함수

    // addComment을 가진 메소드를 정의
    // comment를 string value의 매게변수 파라미터를 가짐
    // string 값을 반환하는 메소드
    // addComment (comment: string): string;
    // 
    addComment?: (comment: string) => string;
}

// 변환값늬 타입 지정 -> Student
function getStuentDetails(studentID: number): Student
{
    return {
        // 프로퍼티
        studentID: 123456,
        studentName: 'Mark',
        gender: GenderType.Male,
        subject: 'Node JS',
        courseCompleted: true
    };
}

// 또 다른 함수를 추가, 새롭게 추가 된 함ㅅ는 파라미터로 학생의 정보를 받아서 그 정보를 저장하는 함수
// 파라미터에 방금 전 선언한 Interface 인 Student 를 4개의 변수에 타입으로 지정 - 코드 재사용
function saveStuentDetails(student: Student): void{
    // student.studentID = 11222;
}

// 아무 문제 없이 컴파일
// 위에 작성한 student1 
saveStuentDetails(student1);