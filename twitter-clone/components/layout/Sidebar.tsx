import {BsHouseFill, BsBellFill} from 'react-icons/bs';
import {FaUser} from 'react-icons/fa';
import SidebarLogo from './SidebarLogo';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
    const items = [
        // 항목이라는 상수. 객채의 배열
        {
            label:'Home',
            href: '/',
            icon: BsHouseFill
        },
        {
            label: 'Notificaticons',
            href: '/notifications',
            icon: BsBellFill
        },
        {
            label: 'Profile',
            href: '/user/123',
            icon: FaUser
        }
    ]
    return (
        <div className='col-span-1 h-full pr-4 md:pr-6'>
            <div className='flex flex-col items-end'>
                <div className='space-y-2 lg:w-[230px]'>
                    <SidebarLogo />
                    {items.map((item) => (
                        <SidebarItem
                            // 속성 추가
                            // 항목 추가
                            key={item.href}
                            href={item.href} 
                            icon={item.icon} 
                            label={item.label}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;