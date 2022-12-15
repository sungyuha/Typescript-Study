// polymorphism : 다형성

type SuperPrint = {
    // 제너릭 : 함수 타입을 입력하는것을 허용
    //<TypePlaceholder>(arr: TypePlaceholder[]):TypePlaceholder
    <T>(arr: T[]): T
    // (arr: boolean[]):void
    // (arr: string[]):void
    // (arr: (number|boolean)[]):void
}

const superPrint: SuperPrint = (arr) => arr[0] // 리턴을 바꾸고 싶으면
    //arr.forEach(i => console.log(i))


const a = superPrint([1, 2, 3, 4])
const b = superPrint([true, false, true])
const c = superPrint(["a", "b", "c"])
const d = superPrint([1, 2, true, false, "hello"])