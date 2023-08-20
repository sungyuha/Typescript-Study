// 레스토랑 관련 타입 생성
/*
let data = {
    name: '기본 식당',
    category: 'western',
    address: {
        city: 'seoul',
        detail: 'somewhere',
        zipCode: 123456
    },
    // 메뉴는 array
    meun: [{name: 'rose pasta', price: 8000, category: 'PASTA'}, {name: 'garlic steak', price: 10000, category: 'STEAK'}]
}
*/

// export 붙여주면 타입 사용 가능
export type Restaurant = {
    name: string;
    category: string;
    address:Address;
    menu: Menu[]; // Menu타입 array
}

export type Address = {
    city: string;
    detail: string;
    zipCode: number;
}

export type Menu = {
    name: string;
    price: number;
    category: string;
}
// 타입을 세분화하면 할 수록 좋음

// type을 빼고 싶을 때 사용 // Omit는 빼기. 빼줌
export type AddressWithoutZip = Omit<Address, 'zipCode'> // Address에서 zipCode를 빼주세요

// Pick은 추가보단 선택해주세요
// Restaurant의 category만 가져옴
export type RestaurantOnlyCategory = Pick<Restaurant, 'category'>