export default function NotFound() {
  return (
    <div className="flex flex-col flex-grow items-center justify-center p-6 gap-4">
      <h1 className="text-3xl font-bold">404 - Página no encontrada</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400">
        Lo sentimos, la página que buscas no existe.
      </p>
    </div>
  );
}
