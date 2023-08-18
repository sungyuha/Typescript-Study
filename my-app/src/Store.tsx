import React from 'react';
import { Address, Restaurant } from './model/resturant';

// interface로 타입 지정
interface OwnProps {
    info: Restaurant, // info타입 지정
    // 함수 타입스크립토 정의
    // changeAddress의 타입은 함수인데 address를 받고, 타입은 Address다고 지정 
    changeAddress(address: Address): void // :뒤에는 리턴의 타입. 현재는 리턴 타입이 없으므로 void / void는 타입이 없다는 의미
}

// 리액트 FC의 타입도 제네릭 가능
const Store:React.FC<OwnProps> = ({info}) => { // props의 타입 지정, 나중에는 info 읽어올 수 있음
    return (
        <div>
            {/* 조회 */}
            {info.name}
        </div>
    )
}

export default Store;