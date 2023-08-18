/* TypeScript의 가장 독특한 특징은 정적 타이핑을 지원
정적 타입 언어는 타입을 명시적으로 선언하며, 타입이 결정된 후에는 타입을 변경할 수 없음 
잘못된 타입의 값이 할당 또는 반환되면 컴파일러는 이를 감지해 에러를 발생
*/

let foo: string,   // 문자열 타입
    bar: number,   // 숫자 타입
    baz: boolean;  // 불리언 타입

foo = 'Hello';
bar = 123;
//baz = 'true'; // error