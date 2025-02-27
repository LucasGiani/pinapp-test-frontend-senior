import Navbar from './Navbar';
import Footer from './Footer';
import { ReactNode } from 'react';

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-lightBg dark:bg-darkBg text-gray-900 dark:text-gray-100">
      <Navbar />
      <main className="w-full max-w-7xl mx-auto flex flex-grow p-6 md:p-8 xl:px-0 xl:pt-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}
