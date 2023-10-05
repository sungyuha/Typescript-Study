import { useRouter } from 'next/router';
import { useCallback } from 'react';

// 헤더에 대한 인터페이스 
interface HeaderProps {
    // 문자열
    label: string;
    // 선택 사항
    showBackArrow?: boolean;
}

const Header:React.FC<HeaderProps> = ({label, showBackArrow}) => { // labal을 추출하고 showBackArrow랑 함께 Props로 전달
    // 라우터 가져오기
    const router = useRouter();

    // handleBack 함수
    const handleBack = useCallback(() => {
        router.back();
        // router를 사용하는지 확인
    }, [router]);

    return (
        <div className='border-b-[1px] border-neutral-800 p-5'>
            <div>{showBackArrow}</div>
            <h1 className='text-white text-xl font-semibold'>
                {label}
            </h1>
        </div>
    );
}

export default Header;