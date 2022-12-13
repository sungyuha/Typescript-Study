// 타입 스크립트는 타입을 지정해줘야 함
let a : number[] = [1,2];
let b : string[] = ["il","1"];
let c : boolean[] = [true];

// ex - error code
/*const player = {
    // typescript가 player 안에 있는 name은 string이라는 것을 추론함
    name: "yuri"
}
player.name = 1;*/

type Age = number;
type Name = string;
type Player = {
    name:Name,
    age?:Age
}
/*function playerMaker(name:string) {
    return {
        // object를 return 
        name:name
    }
}*/
const playerMaker = (name:string) : Player => ({name})
const yuri = playerMaker("yuri")
//yuri.name = ""
yuri.age = 15