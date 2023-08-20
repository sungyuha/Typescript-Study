import React from 'react';
import {Menu} from './model/resturant';


// 함수 등 더 붙이고 싶을 때 사용 -> 확장을 시키다
// extends 

// extends로 정의 된 Menu type을 가져올 수 있음
/*
interface OwnProps extends Menu {
    // 함수를 받아옴
    showBestMenuName(name:string):string
}
*/

// price를 뺀 경우
interface OwnProps extends Omit<Menu, 'price'> {
    // 함수를 받아옴
    showBestMenuName(name:string):string
}

// props는 type으로 만들어주는게 좋음 // props를 가져옴
const BestMenu:React.FC<OwnProps> = ({name, category, showBestMenuName}) => {
    return (
        <div>
            {name}
        </div>
    )
}

export default BestMenu;