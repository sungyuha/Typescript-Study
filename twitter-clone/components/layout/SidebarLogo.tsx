import { useRouter } from 'next/router';
import { BsTwitter } from 'react-icons/bs';

const SidebarLogo = () => {
    const router = useRouter();
    return (
        <div
        // 온클릭으로 클릭 이벤트 발생 시 경로 설정
        onClick={() => router.push('/')}
        className='
            rounded-full
            h-14
            w-14
            p-4 
            flex 
            items-center 
            justify-center 
            hover:bg-blue-300 
            hover:bg-opacity-10 
            cursor-pointer
            transition
        '>
            <BsTwitter size={28} color='white' />
        </div>
    );
}

export default SidebarLogo;