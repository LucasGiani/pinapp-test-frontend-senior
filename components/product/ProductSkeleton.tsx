export default function ProductSkeleton() {
  return (
    <li className="animate-pulse bg-gray-300 dark:bg-gray-700 rounded-lg">
      <div className="w-full h-52 bg-gray-400 dark:bg-gray-600 rounded-t-lg"></div>
      <div className="m-4 space-y-2">
        <div className="h-4 bg-gray-400 dark:bg-gray-600 rounded w-3/4"></div>
        <div className="h-4 bg-gray-400 dark:bg-gray-600 rounded w-1/2"></div>
        <div className="h-4 bg-gray-400 dark:bg-gray-600 rounded w-full"></div>
        <div className="mt-4 h-10 bg-gray-400 dark:bg-gray-600 rounded"></div>
      </div>
    </li>
  );
}
