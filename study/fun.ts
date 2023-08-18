// type이 명시되지 않음
// function sendGreeting (message, userName) {
//     // 매개변수를 받아서 콘솔로그에 출력 -> 아무것도 반환 하지 않는 함수
//     console.log(`${message}, ${userName}`);
// }

// sendGreeting('Hello', 'Mark');

// *타입스크릅트에서 함수의 타입 명시
/* 1) 함수의 반환 (Return) 타입
    - 함수의 반환 값을 명시하기 위해서 사용
    ex ) function 함수잉름 ( 매개변수1, 매개변수2 ): {

    }
*/ 

// void 타입 : 아무것도 반환 하지 않는 함수의 반환 값으로만 사용될 수 있는 타입
function sendGreeting (message, userName):void {
    console.log(`${message}, ${userName}`);
}

// 2) 함수의 매개변수 (Parameter)