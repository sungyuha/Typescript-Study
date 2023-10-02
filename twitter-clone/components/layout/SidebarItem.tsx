import {IconType} from 'react-icons';

// 인터페이스 사이드바 아이템
interface SidebarItemProps {
    label: string;
    icon: IconType;
    href?: string;
    // 클릭 시 옵션 사항 선택
    onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
    // 항목 전달
    label,
    // 하단의 Icon 전달
    icon: Icon,
    href,
    onClick
}) => {
    return (
        // 스타일
        <div className='flex flex-row items-center'>
            {/* 모바일 스타일 지정. 아이콘 스타일 */}
            <div 
                className='
                    relative
                    // 둥근 대시
                    rounded-full
                    h-14
                    w-14
                    flex
                    items-center
                    justify-center
                    D-4
                    hover:bg-slate-300
                    hover:bg-opacity-10
                    cursor-pointer
                    lg:hidden
                '
            >
                {/* 컴포넌트 */}
                <Icon size={28} color='white' />
            </div>
            <div
                // 아이콘 스타일
                className='
                    relative
                    hidden
                    lg:flex 
                    items-row 
                    gap-4 
                    p-4 
                    rounded-full 
                    hover:bg-slate-300 
                    hover:bg-opacity-10 
                    cursor-pointer
                    items-center
                '
            >
                <Icon size={24} color='white' />
                {/* 아이콘 옆의 텍스트, 화면을 늘리면 텍스트 문구가 보이고, 모바일 화면이면 hidden */}
                <p className='hidden lg:block text-white text-xl'>
                    {label}
                </p>
            </div>
        </div>
    );
}

export default SidebarItem;