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

// 또 다른 함수를 추가, 새롭게 추가 된 함수는 파라미터로 학생의 정보를 받아서 그 정보를 저장하는 함수
// 파라미터에 방금 전 선언한 Interface 인 Student 를 4개의 변수에 타입으로 지정 - 코드 재사용
function saveStuentDetails(student: Student): void{
    // student.studentID = 11222;
}

// 아무 문제 없이 컴파일
// 위에 작성한 student1 
saveStuentDetails(student1);

/*
Type	JS	TS	Description
boolean	◯	◯	true와 false
null	◯	◯	값이 없다는 것을 명시
undefined	◯	◯	값을 할당하지 않은 변수의 초기값
number	◯	◯	숫자(정수와 실수, Infinity, NaN)
string	◯	◯	문자열
symbol	◯	◯	고유하고 수정 불가능한 데이터 타입이며 주로 객체 프로퍼티들의 식별자로 사용(ES6에서 추가)
object	◯	◯	객체형(참조형)
array	 	◯	배열
tuple	 	◯	고정된 요소수 만큼의 타입을 미리 선언후 배열을 표현
enum	 	◯	열거형. 숫자값 집합에 이름을 지정한 것이다.
any	 	◯	타입 추론(type inference)할 수 없거나 타입 체크가 필요없는 변수에 사용. var 키워드로 선언한 변수와 같이 어떤 타입의 값이라도 할당 가능.
void	 	◯	일반적으로 함수에서 반환값이 없을 경우 사용한다.
never	 	◯	결코 발생하지 않는 값
*/