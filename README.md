# 🛒 PinApp - Frontend Test (Senior)

Este proyecto es una prueba técnica para el puesto de **Frontend Developer (Senior)** en **PinApp**.

La aplicación es un catálogo de productos que permite visualizar una lista de productos con paginación y búsqueda en tiempo real, además de una página de detalle para cada producto.

## 🚀 Tecnologías Utilizadas

- **Next.js 15** - Framework de React con soporte para SSR y App Router.
- **React 18** - Biblioteca para construir interfaces de usuario.
- **TypeScript** - Tipado estático para mayor seguridad y escalabilidad.
- **Tailwind CSS** - Framework de estilos para UI ágil y responsiva.
- **React Query** - Manejo de estados remotos y cache para mejorar performance.
- **Vercel** - Hosting y CI/CD para el despliegue automático.
- **JSON Server** - Mock de API para el entorno de desarrollo.

---

## 📂 Estructura del Proyecto

- /app
  - api/ <!-- API Routes (manejo de datos del backend) -->
    - products/route.ts — Endpoint para listado y búsqueda de productos
    - products/[sku]/route.ts — Endpoint para obtener detalles de un producto
  - products/ <!-- Páginas del catálogo -->
    - [sku]/page.tsx — Página de detalle del producto
    - [sku]/not-found.tsx — Página de producto inexistente
  - layout.tsx — Layout global de la app
  - page.tsx — Página de listado de productos
  - loading.tsx — Página de loading inicial
  - not-found.tsx — Página de productos no encontrados (error 404)
  - error.tsx — Página de error 500
  - types.ts — Tipado de los modelos de datos
- /components/ <!-- Componentes reutilizables -->
  - layout/
    - Navbar.tsx — Navbar de navegación
    - Footer.tsx — Footer de la aplicación
    - QueryProvider.tsx — Context Providers (React Query)
    - LayoutWrapper.tsx — Encapsulado del Layout
  - products/
    - EmptyState.tsx — Estado para cuando no se encuentran productos
    - ProductList.tsx — Listado de productos con paginación
    - ProductCard.tsx — Card de cada producto en el listado
    - SearchInput.tsx — Input de búsqueda con debounce
    - ProductSkeleton.tsx — Placeholder de carga para mejorar UX
- /utils/api.ts — Centralización de fetch a la API
- /utils/constants.ts — Constantes útiles

---

## ⚙️ Instalación y Ejecución

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/pinapp-test-frontend.git
cd pinapp-test-frontend
```

### 2️⃣ Instalar dependencias

```bash
npm install
```

### 2️⃣ Instalar dependencias

```bash
npm install
```

### 3️⃣ Configurar variables de entorno

Crear un archivo .env.local en la raíz del proyecto con la siguiente configuración:

```bash
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### 4️⃣ Levantar la aplicación

```bash
npm run dev
```

La app estará disponible en:
🔗 http://localhost:3000

---

## 🖥️ Despliegue en Producción

El proyecto está desplegado en **Vercel**, permitiendo **CI/CD** a partir de GitHub.  
Cada **push** a `main` genera un nuevo despliegue automáticamente.

🔗 **Producción:** [pinapp-test-frontend-senior.vercel.app/](https://pinapp-test-frontend-senior.vercel.app/)

---

## 🔍 Características Implementadas

✔ **SSR + CSR**: Uso de Server Components en Next.js para carga eficiente.  
✔ **API Routes**: Uso de API Routes en Next.js para mockear endpoints.  
✔ **Infinite Scroll con React Query**: Mejora de rendimiento y UX en el listado de productos.  
✔ **Debounce en búsqueda**: Previene peticiones innecesarias y optimiza rendimiento.  
✔ **Lazy Loading con next/image**: Mejora de tiempos de carga de imágenes.  
✔ **Dark Mode con Tailwind**: Cambio automático de tema según preferencia del sistema.  
✔ **Not Found y Error Handling**: Páginas personalizadas para errores 404 y 500.  
✔ **Skeletons en carga de productos**: Mejora la percepción de velocidad en UX.  
✔ **Responsive Design**: Adaptabilidad para móvil, tablet y escritorio.

---

## 📌 Posibles Mejoras Futuras

🔹 Optimizar imágenes con un CDN externo para mejorar carga.  
🔹 Mejoras en la UI con una librería como **Radix UI** o **Shadcn**.  
🔹 Implementar compras simuladas para una experiencia más realista.  
🔹 Agregar tests con **Jest + React Testing Library** para validar funcionalidad.

---

## 🛠️ Desarrollado por

👨‍💻 **Lucas Giani**  
📧 [lucasgiani.0594@gmail.com](mailto:lucasgiani.0594@gmail.com)  
🔗 **LinkedIn:** [linkedin.com/in/lgiani](https://www.linkedin.com/in/lgiani)  
🔗 **GitHub:** [github.com/lucasgiani](https://github.com/LucasGiani)

---

🚀 ¡Gracias por revisar este proyecto!  
Espero que disfruten explorando la app tanto como yo disfruté desarrollándola.
