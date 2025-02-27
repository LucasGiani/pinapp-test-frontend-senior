export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 text-center py-8 px-6 md:px-8 lg:px-10 shadow-inner dark:border-t dark:border-gray-700 dark:bg-darkBg dark:border-white/10">
      <p>
        © {new Date().getFullYear()} Mi Tienda. Todos los derechos reservados.
      </p>
    </footer>
  );
}
