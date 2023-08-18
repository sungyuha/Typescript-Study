import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import Store from './Store';
import {Address, Restaurant} from "./model/resturant";

// 레스토랑 정보
// 아래처럼 객체형 타입은 직접 만들어줄 수 있음
let data:Restaurant = { // 직접 만들어준 타입으로 지정
  name: '기본 식당',
  category: 'western',
  address: {
    city: 'seoul',
    detail: 'somewhere',
    zipCode: 123456
  },
  // 메뉴는 array
  menu: [{name: 'rose pasta', price: 8000, category: 'PASTA'}, {name: 'garlic steak', price: 10000, category: 'STEAK'}]
}

// 타입스크립트로 변경
const App:React.FC = () => { // 함수 컴포넌트 타입 지정 : React.FC

  // <>는 제네릭 문법, useState는 리액트 함수. useState를 부를때부터 타입 지정가능한데 그때 사용 가능한게 제네릭 문법임
  const [myResturant, setMyResturan] = useState<Restaurant>(data);

  // 함수 타입스크립트로 정의
  const changeAddress = (address:Address) => {
    setMyResturan({...myResturant, address: address})
  }

  return (
    <div className="App">
      {/* info의 타입 */} {/* setMyResturan를 보내줌 */}
      <Store info={myResturant} changeAddress={changeAddress} />
    </div>
  );
}

export default App;
