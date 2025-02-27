export default function NotFoundProduct() {
  return (
    <div className="flex flex-col flex-grow items-center justify-center p-6 gap-4">
      <h1 className="text-3xl font-bold">Producto no encontrado</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400">
        Lo sentimos, el producto solicitado no existe.
      </p>
    </div>
  );
}
