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