import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="static w-full bg-lightBg text-white py-6 px-6 md:px-8 lg:px-10 shadow-md dark:text-darkBg dark:bg-darkBg dark:border-b dark:border-white/30 z-50">
      <div className="max-w-7xl mx-auto flex items-center">
        <Link
          href="/"
          className="transition-transform duration-500 hover:scale-105 flex gap-2 text-darkBg dark:text-lightBg"
        >
          <ShoppingBag size={36} />
          <h1 className="text-3xl md:text-4xl font-bold">Mi Tienda</h1>
        </Link>
      </div>
    </nav>
  );
}
