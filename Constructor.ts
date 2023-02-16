// 1. Constructor(생성자) : 클래스 로부터 객체를 생성할 때, 호출되며, "객체의 초기화를 담당"
class Employeee {
    /*private _funName: string; // 클래스 내에서 멤버변수를 나타내는 fullName 앞에서 _ (underscore) 를 넣어줌
    age: number;
    jobTitle: string;
    hourlyRate: number;
    workingHoursPerWeek: number;*/


    // constructor는 매개변수, 즉 파라미터를 가질 수 있음 
    constructor(
        /*funName:string, 
        age:number, 
        jobTitle:string, // 전달되는 매개변수를 강제하고 있음
        hourlyRate:number, 
        workingHoursPerWeek: number) { */
    
    // 객체가 생성될 때 반드시 할당하지 않아도 되는 값들로 만들고 싶으면 콘론 앞에 ?를 붙이고 선택적 매개변수로 만들어주면 됨
    /*constructor(funName:string, age:number, jobTitle?:string, // 전달되는 매개변수를 강제하고 있음
    hourlyRate:number, workingHoursPerWeek: number) {*/

        // thos 뒤에 나타는 객체는 상단의 변수들을 가리킴
        /*this.funName = funName;
        this.age = age;
        this.jobTitle = jobTitle;
        this.hourlyRate = hourlyRate;
        this.workingHoursPerWeek = workingHoursPerWeek;*/
        
        /* constructor 의 매개변수 앞에 접근 제한자 (Access Modifiers)를 앞에 붙여주면 Access Modifiers가 사용된 파라미터는 암묵적으로 class의 필드 멤버변수로 선언 됨
            -> 즉, 객체가 생성될 때, 컨스트럭터의 매개변수로 전달 된 값은, 객체의 프로퍼티 값으로 자동으로 그 값이 초기화 되고 할당 됨
        */
        private _funName:string, 
        private _age:number, 
        private _jobTitle:string,
        private _hourlyRate:number, 
        public _workingHoursPerWeek: number) {
    }

    // Getter 와 Setter -> Get 과 Set 키워드를 사용하여 Getter 와 Setter 를 선언 
    get funName () {
        // getter 불려질때 실행되는 코드 작성
        return this._funName;
    }

    // 괄호 안에는 전달 될 매개변수와 타입을 기입
    set funName (vlaue: string) {
        // 중괄호 안에는 전달 될 매개변수의 값을 비공개 멤버값으로 재할당 하는 값으로 넣어줌
        this._funName = vlaue;
    }

    printEmployeeDetails = ():void => {
        // this.funName}는 상단에 선언 된 변수들을 가리킴
        /*console.log(`${this._funName}의 작업은 ${this.jobTitle} 이고 일주일의 수업은 
        ${this.hourlyRate * this.workingHoursPerWeek} 달러 이다.`)*/

        console.log(`${this._funName}의 작업은 ${this._jobTitle} 이고 일주일의 수업은 
        ${this._hourlyRate * this._workingHoursPerWeek} 달러 이다.`)
    }
}    

// 클래스를 통해서 객체를 생성할 때, Constructor(생성자)에 정의 된 Parameter (매개변수들)의 값이, Arguments 로 (초기값리) 전달 되어야 함
// let employeee1 = new Employeee(); -> 에러가 발생 . 이류는 바로 위에 작성

let employeee1 = new Employeee('민수', 28, '주니어 개발자', 40, 35);
//employeee1.funName = '헨리'; // -> private가 있으면 외부에서 접근 불가능하므로 에러 메시지 출력

// 새로운 메소드로 할당. setter 를 통해서 새로운 값이 출력 됨
employeee1.funName = '헨리';

// employeee1.funName은 get의 funName을 부르고 getter 속에 코드가 실행되어 비 비공개 값이 funAame 값이 리턴되어서 값이 출력 됨
console.log(employeee1.funName);

employeee1.printEmployeeDetails();

let employeee2 = new Employeee('미나', 32, '프로젝트 매니저', 55, 35);

/* 모든 클래스는 Constructor(생성자)를 가짐

객체 지향 안에는 Constructor(생성자)가 있음  */

// 2. Access Modifiers(접근 제한자)
/* 클래스 속 멤버 변수(프로퍼티)와 메소드에 적응될 수 있는 키워드 -> 쿨래스 외부로 부터의 접근을 통제
하므로 버그를 줄이고 코드의 안정성을 높여줌
- Public : 클래스의 외부에서 접근 가능함
- Private : 클래스 내에서만 접근가능. 클래스의 외부에서 접근 불가능 (비공개 멤버)
- Protected : 클래스 내부, 그리고 상속 받은 자식 클래스에서 접근 가능

* 타입스크립에서는 Public 멤버를 노출시키기 위해서 Public 키워드를 명시할 필요 없음. Access Modifiers가 명시되어 있지 않으면 Public으로 생각하면 됨
*/

// 3. Getter 와 Setter
// 접근 불가능한 private를 접근 가능하게 만들기 위해 사용
// Get 과 Set 키워드를 사용하여 Getter 와 Setter 를 선언 

// 4.  Constructor 와 Access Modifiers
/* 타입스크립트에는 코드를 간결하게 나타내는 방법이 존재함
    -> Constructor의 매개변수에 Access Modifiers 직접 적용
*/