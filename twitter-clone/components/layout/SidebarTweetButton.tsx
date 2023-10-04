import { useRouter } from 'next/router';
import { FaFeather } from "react-icons/fa";

const SidebarTweetButton = () => {
    // 라우터
    const router = useRouter();
    return (
        // 경로 설정
        <div onClick={() => router.push('/')}>
            <div
                // 모바일의 경우 - 깃털 모양 아아콘(트윗버튼) 스타일링
                className='
                    mt-6
                    lg:hidden
                    rounded-full
                    h-14
                    w-14
                    p-4
                    flex
                    items-center
                    justify-center 
                    bg-sky-500 
                    hover:bg-opacity-80 
                    transition 
                    cursor-pointer
                '>
                <FaFeather size={24} color="white" />
                <div 
                    // 데스크탑의 경우 - 깃털 모양 아아콘(트윗버튼) 스타일링
                    className='
                        mt-6
                        hidden 
                        lg:block 
                        px-4
                        py-2
                        rounded-full
                        bg-sky-500
                        hover:bg-opacity-90 
                        cursor-pointer
                    '>
                    {/* 트윗 텍스트 */}
                    <p 
                        className='
                            hidden 
                            lg:block 
                            text-center
                            font-semibold
                            text-white 
                            text-[20px]
                        '>
                        Tweet
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SidebarTweetButton;