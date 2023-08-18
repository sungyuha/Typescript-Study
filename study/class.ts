/* 
- 우리가 살고 있는 세상은 수 많은 객체들로 이루어져 있음, 우리 주위를 둘러보면 수 많은 사물. 즉, 객체들에 둘러 쌓여 있음
    ex) 노트북, TV, 책상, 의자 등등이 객체
- 각각의 갹체는 속성과 행동을 가지게 됨 
*/

// 1. 객체 지향 프로그래밍 : 연관 된 변수와 함수들을 한 덩어리로 묶어서 구조화하여 표현한 프로그래밍 스타일

/*
1) 쇼핑 어플리케이션은 무엇이 객체일따?
- 무엇을 하는 어플리케이션 일까? - 액션. 손님이 물건을 장바구니에 담아서 주문.결재 한다
여기서 객체는 '손님', '물건', '장바구니', '주문', '결재'
*/

// 1-2. 객체 지향 프로그래밍: 어플리케이션을 실제 세상에 존재하는 객체와 같은 단위로 쪼개고 객체들이 서로 상호 작용함으로써 시스템이 동작!
// 갹체 : 연된 된 변수와 함수들의 집합

// 객체들은 클래스를 통해서 만둘어 질 수 있음, 클래스는 객제의 뼈대, 설계도, 생산물


// 2. 클래스를 선언하기 위해 class
// 2-2. class는 let과 같은 키워드를 작성하지 않아도 됨
class Employee {
funName: string;
age: number;
jobTitle: string;
hourlyRate: number;
workingHoursPerWeek: number;

/* 삭제 전
printEmployeeDetails = (funName:string, jobTitle:string,
    hourlyRate:number, workingHoursPerWeek:number):void => {
        console.log(`${funName}의 작업은 ${jobTitle} 이고 일주일의 수업은 
        ${hourlyRate * workingHoursPerWeek} 달러 이다.`)
    }*/

// 매개변수인 함수를 다 삭제
// 함수의 내에 매개변수를 삭제 한 이유는 -> 클래스 내에서 this키워드를 통해 접근 가능!
printEmployeeDetails = ():void => {
        // this.funName}는 상단에 선언 된 변수들을 가리킴
        console.log(`${this.funName}의 작업은 ${this.jobTitle} 이고 일주일의 수업은 
        ${this.hourlyRate * this.workingHoursPerWeek} 달러 이다.`)
    }
}    
/* 2-3. 클래스 속에서 정의 된 함수들은 클래스 내 정의 된 변수들에게 접근 가능. 그러므로 상대적으로 적은 매개변수를 가짐 */
// 2-4. 매개변수를 많이 사용하면 쉬운 코드, 클론코드 사용 가눙해 유지보수 용이

/* 클래스 내에 정의 된 변수 : 프로퍼티 (Property)
클래스 내에 정의 된 함수 : 메소드(Method) */

// 3. 오브젝트
// 클래스의 인스턴트

// 코드가 실행 되면 employee1 이라는 객체가 생성
let employee1 = new Employee();
// 코드 에디터에서 점을 찍고 p를 타이핑 하면 클래스의 메소드인 printEmployeeDetails 가 나타남
// employee1 객체는 Employee를 뼈대로 삼아 만들어진 객체, Employee에 선언 된 프로퍼티와 메소드를 그대로 객체 자신에 프로퍼티와 메소드로 가지게 됨

// 변수의 값을 할당해줘야 undifined가 안나옴
employee1.funName = '민수';
employee1.age = 28;
employee1.jobTitle = '주니어 웹개발자';
employee1.hourlyRate = 40;
employee1.workingHoursPerWeek = 35;
employee1.printEmployeeDetails();

// 붕어빵처럼 동일한 객체 생성 가능
let employee2 = new Employee();
employee2.funName = '미래';
employee2.age = 32;
employee2.jobTitle = '프로덕트매니저 웹개발자';
employee2.hourlyRate = 38;
employee2.workingHoursPerWeek = 50;