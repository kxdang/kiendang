import React from 'react'

const LoadingSkeletonBooks = ({ row }) => {
  return (
    <div>
      {row > 1 ? (
        <>
          <div className="max-width-xs mx-auto h-[80px] max-w-md animate-pulse rounded-md p-4 ">
            <div className="flex items-center justify-center space-x-2">
              <div className="h-4 w-8/12 rounded bg-gray-300 dark:bg-gray-700"></div>
              <div className="h-4 w-3/12 rounded bg-gray-300 dark:bg-gray-700"></div>
            </div>
            <div className="mt-2 flex items-center justify-center space-x-2">
              <div className="h-4 w-7/12 rounded bg-gray-300 dark:bg-gray-700"></div>
              <div className="h-4 w-3/12 rounded bg-gray-300 dark:bg-gray-700"></div>
            </div>
          </div>
        </>
      ) : (
        <div className="max-width-xs mx-auto h-[56px] max-w-md animate-pulse rounded-md p-4 ">
          <div className="flex items-center justify-center space-x-2">
            <div className="h-4 w-7/12 rounded bg-gray-300 dark:bg-gray-700"></div>
            <div className="h-4 w-3/12 rounded bg-gray-300 dark:bg-gray-700"></div>
          </div>
        </div>
      )}
    </div>
  )
}

export default LoadingSkeletonBooks
