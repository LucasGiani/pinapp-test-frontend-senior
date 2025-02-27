import type { Metadata } from 'next';
import LayoutWrapper from '@/components/layout/LayoutWrapper';
import './globals.css';
import { PropsWithChildren } from 'react';
import Providers from '@/components/layout/providers';

export const metadata: Metadata = {
  title: 'Mi Tienda Online',
  description: 'Compra los mejores productos deportivos.',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen bg-lightBg dark:bg-darkBg text-gray-900 dark:text-gray-100">
        <Providers>
          <LayoutWrapper>{children}</LayoutWrapper>
        </Providers>
      </body>
    </html>
  );
}
