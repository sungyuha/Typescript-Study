/*let student = {
    // 타입스크립트는 객체 속의 프로퍼티를 조사하고 어떤 값이 할당 값인지 확인 햄
    name: 'Jack',
    course: 'Gettin Started with Typscript',
    codingIQ: 80,
    code: function () {
        console.log('brain is working hard');
    }
}*/

// any타입 : 어떠한 타입이든 모든 OK!
// any type은 동적 컨텐츠를 가지고 와서 프로그램 작성 시 변수 타잊을 알수 없음 -> 타입 지정을 할 수 없는 경우만 any 타입 사용
let someValue: any = 5;
someValue = 'hello';
someValue = true;

// 타입스크립트는 '타입에 관한 더 많은 정보를 명시할 수록 더 좋음!'
// 타입을 명확히 하면 컴파일 에러도 잡고 -> 효괴적인 코드의 유지 보수

// 제한 된 타입들을 동시에 지정 하고 싶을 때 -> 유니언 타입
let price: number | string = 5;
// price를 재할당 - 에러 발생 X
price = 'face'; 
// 블러언 타입을 작성하면 에러 발생
//price = true; // 지정 된 타입이 아니므로 할당 불가능 메세지 

// 같은 조합이 계속 반복 될 경우 어떻게 코드를 향상 시킬 수 있을까?

// 같은 코드를 반복하는 것 보다는 '코드를 타입으로 지정하고 재활용!!' -> Type Aliases
// Type Aliases를 사용하면 읽기 힘들고 지저분한 코드를 가독성 높이고 재활용 가능한 코드로 활용 가능!!
// Type Aliases 를 사용하기 위해서는 타입 키워드 
type StrOrNum = number | string; // 타입 키워드를 작성해서 새로운 타입을 선언 -> Type Aliases
let totalCost: number;
//let orderID: number | string;
// 반복 되는 코드를 Type Aliases인 StrOrNum 로 변경
let orderID: StrOrNum;

// const calctlateTotalCost = (price: number | string, qty: number):void => {

// };
// 반복 되는 코드를 Type Aliases인 StrOrNum 로 변경
const calctlateTotalCost = (price: StrOrNum, qty: number):void => {

};

// const findOrderID = ( customer: {constomerId: number | string, name: string},
// prouctId: number | string): number | string => {
//     return orderID;
// }
// 반복 되는 코드를 Type Aliases인 StrOrNum 로 변경
const findOrderID = ( customer: {constomerId: StrOrNum, name: string},
    prouctId: StrOrNum): StrOrNum => {
        return orderID;
    }


// 타입 가드
// Typeof Operator 는 '변수의 데이터 타입을 반환 하는 연산자'
// 1. Typeof 연산자와 조건문 사용
type StringOrNum = string | number;
let itemPrice: number;

const setItemPrice = (price: StringOrNum):void => {
    // price 타입이 string 타입일 경우
    if (typeof price === 'string') {
        // 전달 된 매개변수
        // 숫자 0으로 할당
        itemPrice = 0;
    } else {
        // price type이 string이 아닌 경우, 즉 number type인 경우
        // itemPrice은 price에 할당
        itemPrice = price;
    }
};

setItemPrice(50);
// 유니언을 사용할 때 Typeof 연산자 사용하면 됨 -> 코드 검증을 수행
// 코드의 검증을 수행하는 것 -> 타입가드 (Type Guard)