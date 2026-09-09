export function AnimeCardSkeleton() {
    return (
        <>
            <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
                <div className="w-full h-72 bg-gray-300" />
                <div className="p-3 space-y-2">
                    <div className="h-4 bg-gray-300 rounded w-3/4" />
                    <div className="h-4 bg-gray-300 rounded w-1/2" />
                </div>
            </div>
        </>
    );
}