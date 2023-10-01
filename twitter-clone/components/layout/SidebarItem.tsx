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
    icon,
    href,
    onClick
}) => {
    return (
        <div>
            
        </div>
    );
}

export default SidebarItem;