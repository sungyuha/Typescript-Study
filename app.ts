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
let someValue: any = 5;
someValue = 'hello';
someValue = true;

// 타입스크립트는 '타입에 관한 더 많은 정보를 명시할 수록 더 좋음!'
// 타입을 명확히 하면 컴파일 에러도 잡고 -> 효괴적인 코드의 유지 보수