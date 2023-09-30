import Sidebar from './layout/Sidebar';

interface LayoutProps {
    children: React.ReactNode;
}

// 타입스크립트로 변경
// <>는 제네릭 문법
// children을 props를 가져옴
const Layout:React.FC<LayoutProps> = ({children}) => { // 함수 컴포넌트 타입 지정 : React.FC
    return (
        <div className='h-screen bg-black'>
            <div className='container h-full mx-auto xl:px-30 max-w-6xl'>
                <div className='grid grid-cols-4 h-full'>
                    {/* 사이드바 추가 */}
                    <Sidebar />
                    <div className='
                        col-span-3 
                        lg:col-span-2 
                        border-x-[1px] 
                        border-neutral-800
                    '>
                        {/* children을 넣어줌 */}
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout;