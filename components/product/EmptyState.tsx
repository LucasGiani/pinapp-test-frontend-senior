export default function EmptyState({
  title,
  message,
  isError = false,
}: {
  title: string;
  message: string;
  isError: boolean;
}) {
  return (
    <div
      className={`flex flex-col flex-grow items-center justify-center gap-4 p-6 rounded-lg 
        ${isError ? 'text-red-700 dark:text-red-300' : 'text-gray-700 dark:text-gray-300'}`}
    >
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-lg">{message}</p>
    </div>
  );
}
