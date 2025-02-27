export default function SearchInput({
  value,
  onChange,
  isFloating = false,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isFloating?: boolean;
}) {
  return (
    <input
      type="text"
      placeholder="Buscar productos..."
      value={value}
      onChange={onChange}
      className={`w-full max-w-lg px-4 py-2 rounded-md border border-gray-300 
        bg-gray-100 dark:bg-darkBg dark:text-white outline-none transition-all duration-300
        ${isFloating ? 'max-w-md text-lg shadow-md' : 'text-base'}`}
    />
  );
}
