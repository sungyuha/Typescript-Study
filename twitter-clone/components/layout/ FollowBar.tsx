const FollowBar = () => {
    return (
        // 숨겨 있지만 큰 화면(PC)에서는 블록 형태로 표시
        <div className='px-6 py-4 hidden lg:block'>
            <div className='bg-neutral-800 rounded-xl p-4'>
                <h2 className='text-white text-xl font-semibold'>누구를 팔로우 할까요?</h2>
                <div className='flex flex-col gap-6 mt-4'>
                    {/* 사용자 목록 작성 */}
                    
                </div>
            </div>
        </div>
    );
}

export default FollowBar;