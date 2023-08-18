/* 
typescript 변수 타입 종류
number
string
boolean
null
undefined
any 
*/

let a:number = 3
let b:string = "like you"

// 프로젝트에서 any 타입 사용은 자제해야 함 -> 잘 안씀
let c:any = 4
c = "abcdefg"

// 타입 2개 지정 가능
let d: number | string = "add"
d = 3

// 배열(array) 타입
let e:string[] = ['apple', 'momgo']
let f:number[] = [1, 2]

// 함수 예제
function addNumber(g:number, h:number):number{
    return g+h
}

addNumber(3, 7)