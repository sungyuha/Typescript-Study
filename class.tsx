// 추상 클래스 - 다른 클래스가 상속 받을 수 있는 클래스
abstract class User {
    constructor (
        protected firstName: string,
        protected lastName: string,
        //public nickname:string
        protected nickname:string
    ) {}
    abstract getNickName():void

    // USer로 부터 메소드를 상속 받음 / 메소드는 클래스 안에 존재하는 함수
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

class Player extends User {
    getNickName() {
        console.log(this.nickname)
    }
}

const yuri = new Player("yuri", "last", "유리");

yuri.getFullName();