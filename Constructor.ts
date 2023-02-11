// 1. Constructor(생성자) : 클래스 로부터 객체를 생성할 때, 호출되며, "객체의 초기화를 담당"
class Employeee {
    funName: string;
    age: number;
    jobTitle: string;
    hourlyRate: number;
    workingHoursPerWeek: number;

    // constructor는 매개변수, 즉 파라미터를 가질 수 있음 
    constructor(funName:string, age:number, jobTitle:string,
    hourlyRate:number, workingHoursPerWeek: number) {
        // thos 뒤에 나타는 객체는 상단의 변수들을 가리킴
        this.funName = funName;
        this.age = age;
        this.jobTitle = jobTitle;
        this.hourlyRate = hourlyRate;
        this.workingHoursPerWeek = workingHoursPerWeek;
    }

    printEmployeeDetails = ():void => {
        // this.funName}는 상단에 선언 된 변수들을 가리킴
        console.log(`${this.funName}의 작업은 ${this.jobTitle} 이고 일주일의 수업은 
        ${this.hourlyRate * this.workingHoursPerWeek} 달러 이다.`)
    }
}    

// 클래스를 통해서 객체를 생성할 때, Constructor(생성자)에 정의 된 Parameter (매개변수들)의 값이, Arguments 로 전ㄷ라 되어야 함
// let employeee1 = new Employeee(); -> 에러가 발생 . 이류는 바로 위에 작성

let employeee1 = new Employeee('민수', 28, '주니어 개발자', 40, 35);

employeee1.printEmployeeDetails();

/* 모든 클래스는 Constructor(생성자)를 가짐

객체 지향 안에는 Constructor(생성자)가 있음  */


// 2. Access Modifiers(접근 제한자)


// 3. Getter 와 Setter