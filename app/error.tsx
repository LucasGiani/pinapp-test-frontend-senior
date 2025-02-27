'use client';
import { useEffect } from 'react';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(`${error}`);
  }, [error]);
  return (
    <div className="flex items-center justify-center h-screen gap-4 p-6">
      <h1 className="text-3xl font-bold text-red-500">¡Ups! Algo salió mal</h1>
      <p className="text-lg text-gray-600">
        {error.message || 'Error inesperado'}
      </p>
      <button
        onClick={() => reset()}
        className="mt-4 px-6 py-2 bg-primary text-white rounded-lg"
      >
        Intentar nuevamente
      </button>
    </div>
  );
}
