interface LayoutProps {
    children: React.ReactNode;
}

// 타입스크립트로 변경
// <>는 제네릭 문법
// children을 props를 가져옴
const Layout:React.FC<LayoutProps> = ({children}) => { // 함수 컴포넌트 타입 지정 : React.FC
    return (
        <div>
            {/* children을 넣어줌 */}
            {children}
        </div>
    );
}

export default Layout;