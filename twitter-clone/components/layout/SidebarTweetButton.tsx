import { useRouter } from 'next/router';

const SidebarTweetButton = () => {
    // 라우터
    const router = useRouter();
    return (
        // 경로 설정
        <div onClick={() => router.push('/')}>
            
        </div>
    );
}

export default SidebarTweetButton;