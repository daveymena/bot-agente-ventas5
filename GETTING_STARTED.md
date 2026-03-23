# Guía de Inicio Rápido - Landing Page Generator

¡Felicitaciones! Has creado exitosamente un **Generador de Landing Pages Profesionales**.

## 🚀 Cómo Empezar

### 1. Instalar dependencias (si no lo hiciste)
```bash
npm install
```

### 2. Ejecutar en modo desarrollo
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:3000`

### 3. Compilar para producción
```bash
npm run build
npm start
```

## 📋 Características Principales

### ✨ Editor Visual Interactivo
- Arrastra y suelta componentes en el canvas
- Selecciona cualquier elemento para editarlo
- Personaliza propiedades en tiempo real

### 🎨 Componentes Disponibles
- **Encabezados**: Títulos grandes y destacados
- **Párrafos**: Contenido de texto flexible
- **Botones**: Llamadas a la acción interactivas
- **Imágenes**: Integración de media visual
- **Secciones**: Contenedores para organizar elementos

### 🎯 Editor de Propiedades
Personaliza cada elemento con:
- Color de fondo y texto
- Tamaño de fuente
- Relleno (padding)
- Alineación de texto
- Bordes redondeados

### 📥 Exportación
- Descarga tu landing page como **HTML completo**
- Descarga estilos como **CSS independiente**
- Archivos listos para usar

## 📁 Estructura del Proyecto

```
landing-page-generator/
├── app/                          # Páginas Next.js
│   ├── page.tsx                 # Página de inicio
│   ├── layout.tsx               # Layout principal
│   ├── editor/
│   │   └── page.tsx             # Editor visual
│   └── templates/
│       └── page.tsx             # Galería de templates
├── components/                   # Componentes React reutilizables
│   ├── ElementRender.tsx         # Renderizador de elementos
│   └── ElementPreview.tsx        # Vista previa de elementos
├── contexts/                     # Contextos de React
│   └── EditorContext.tsx         # Gestión de estado del editor
├── types/                        # Definiciones de TypeScript
│   └── index.ts                 # Tipos principales
└── app/globals.css              # Estilos globales
```

## 🔧 Tecnologías Utilizadas

- **Frontend Framework**: Next.js 16 + React 19
- **Lenguaje**: TypeScript
- **Gestión de Estado**: React Context
- **Estilos**: CSS Vanilla + Inline Styles
- **Iconos**: Unicode Emojis
- **Generación de ID**: UUID v4

## 💡 Próximas Mejoras (Opcional)

### Backend & Base de Datos
```typescript
// Implementar guardado en base de datos
// - MongoDB, PostgreSQL, o Firebase
// - API REST o GraphQL
// - Autenticación de usuarios
```

### Funcionalidades Avanzadas
- Drag & Drop nativo mejorado
- Más templates profesionales
- Editor de CSS avanzado
- Sistema de temas predefinidos
- Galería de iconos
- Presets de colores

### UI/UX Mejorado
- Deshacer/Rehacer (Undo/Redo)
- Historial de cambios
- Vista previa responsive
- Modo oscuro

## 🎓 Cómo Usar el Editor

### Paso 1: Crear Proyecto
1. Ve a la página de inicio
2. Haz clic en "Crear Nuevo Proyecto"
3. Dale un nombre a tu proyecto

### Paso 2: Añadir Componentes
1. En el panel izquierdo, verás botones para cada tipo de componente
2. Haz clic en el componente que deseas añadir
3. El componente aparecerá en el área de canvas

### Paso 3: Personalizar Elementos
1. Haz clic en un elemento para seleccionarlo
2. En el panel derecho verás las propiedades
3. Modifica:
   - Contenido/Texto
   - Colores (fondo y texto)
   - Tamaño de fuente
   - Alineación
   - Relleno y bordes

### Paso 4: Exportar
1. Haz clic en "📥 HTML" para descargar el archivo HTML
2. Haz clic en "📥 CSS" para descargar los estilos
3. ¡Listo! Tu landing page está completa

## 📊 Estructura de Datos

### Elemento de Página
```typescript
interface PageElement {
  id: string;                    // UUID único
  type: ElementType;             // Tipo de componente
  content: string;               // Contenido/Texto
  styles: {
    backgroundColor?: string;    // Color de fondo
    textColor?: string;          // Color del texto
    fontSize?: string;           // Tamaño de fuente
    padding?: string;            // Relleno
    margin?: string;             // Margen
    borderRadius?: string;       // Bordes redondeados
    textAlign?: 'left' | 'center' | 'right';
  };
  children?: PageElement[];      // Elementos anidados
}
```

### Proyecto
```typescript
interface Project {
  id: string;                    // UUID único
  name: string;                  // Nombre del proyecto
  description: string;           // Descripción
  elements: PageElement[];       // Lista de elementos
  createdAt: Date;              // Fecha de creación
  updatedAt: Date;              // Última actualización
}
```

## 🔐 Seguridad & Rendimiento

- ✅ Tipado completo con TypeScript
- ✅ Validación de estilos CSS
- ✅ Sanitización de HTML en exportación
- ✅ Optimización de imágenes en preview
- ✅ Renderizado eficiente con React

## 📱 Responsive Design

El editor está optimizado para:
- 💻 Pantallas de escritorio (recomendado)
- 📱 Tablets (parcialmente soportado)
- 📱 Móviles (acceso limitado)

## 🚨 Solución de Problemas

### Puerto 3000 ocupado
```bash
PORT=3001 npm run dev
```

### Problemas de compilación
```bash
# Limpiar caché
rm -rf .next
npm run build
```

### Componentes no aparecen
- Verifica que el Contexto está correctamente proporcionado
- Revisa la consola del navegador para errores

## 📞 Soporte

Para reportar bugs o sugerencias:
1. Revisa el código en `/landing-page-generator`
2. Consulta los tipos en `types/index.ts`
3. Revisa la lógica del editor en `contexts/EditorContext.tsx`

## 📝 Licencia

Este proyecto es un demostrador de concepto para un generador de landing pages profesionales.

---

**¡Disfruta creando landing pages profesionales sin código!** 🚀
