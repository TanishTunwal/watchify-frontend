function HomeSkeleton() {
    const loadingSkeletonStyle = "animate-pulse bg-[#222222] h-10 w-full mb-2";

    return (
        <div className="h-full w-full container mx-auto p-4">
            <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
                {[...Array(12)].map((_, index) => (
                    <div 
                        key={index} 
                        className={`${loadingSkeletonStyle} h-64 bg-gray-800 rounded-lg p-4 flex flex-col justify-end`}
                    >
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 animate-pulse bg-gray-500 rounded-full"></div>
                            <div className="flex flex-col space-y-2">
                                <div className="w-32 h-3 bg-gray-500 rounded"></div>
                                <div className="w-24 h-3 bg-gray-500 rounded"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomeSkeleton;
