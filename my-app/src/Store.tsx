import React from 'react';
import { Restaurant } from './model/resturant';

// interface를 사용해서 타입 생성
interface OwnProps {
    info: Restaurant // info타입 지정
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