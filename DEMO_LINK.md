# 🌐 ENLACE DE ACCESO - Landing Page Generator

## 📌 Información de Acceso

### URL Local
```
http://localhost:3000
```

### Puertos Alternativos (si 3000 está ocupado)
```
http://localhost:3001
http://localhost:8000
```

---

## 🚀 Inicio Rápido (3 Pasos)

### Paso 1: Descargar/Clonar
```bash
# Si tienes el archivo comprimido
unzip landing-page-generator.zip
cd landing-page-generator
```

### Paso 2: Instalar y Compilar
```bash
npm install --legacy-peer-deps
npm run build
```

### Paso 3: Ejecutar
```bash
# Opción A: Producción (recomendado)
npm start

# Opción B: Desarrollo (con hot reload)
npm run dev
```

### Resultado
Abre tu navegador en: **http://localhost:3000** ✅

---

## 📋 Opciones de Despliegue

### Opción 1: Local (Recomendado para pruebas)
```bash
npm run dev
# Acceso: http://localhost:3000
```

### Opción 2: Vercel (Gratis y Fácil)
```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Deploy
vercel

# 3. Copiar URL de producción
```

### Opción 3: Netlify
```bash
# 1. Conectar repositorio GitHub
# 2. Configurar build: npm run build
# 3. Directorio de salida: .next
```

### Opción 4: Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 🎯 Rutas Disponibles

| Ruta | Descripción | Estado |
|------|-------------|--------|
| `/` | Página de inicio | ✅ Activo |
| `/editor` | Editor visual | ✅ Activo |
| `/templates` | Galería de templates | ✅ Activo |

---

## 💻 Requisitos del Sistema

- **Node.js**: v16 o superior
- **NPM**: v7 o superior
- **RAM**: Mínimo 512MB
- **Disco**: Mínimo 500MB
- **Navegador**: Chrome, Firefox, Safari, Edge (reciente)

---

## 🔗 Enlaces Útiles

### Documentación
- 📖 [README.md](./README.md) - Documentación principal
- 📖 [GETTING_STARTED.md](./GETTING_STARTED.md) - Guía de inicio
- 📖 [APPROVAL.md](./APPROVAL.md) - Documento de aprobación

### Archivos de Configuración
- ⚙️ `package.json` - Dependencias del proyecto
- ⚙️ `tsconfig.json` - Configuración TypeScript
- ⚙️ `next.config.ts` - Configuración Next.js

### Código Fuente
- 📁 `app/` - Páginas de la aplicación
- 📁 `components/` - Componentes React
- 📁 `contexts/` - Contextos de estado
- 📁 `types/` - Tipos TypeScript

---

## 🆘 Solución de Problemas

### "Port 3000 is already in use"
```bash
# Usar puerto alternativo
PORT=3001 npm start
# o
PORT=8000 npm start
```

### "npm install fallback"
```bash
npm install --legacy-peer-deps
```

### "TypeScript errors"
```bash
# Limpiar caché
rm -rf .next node_modules
npm install --legacy-peer-deps
npm run build
```

### "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

---

## 📊 Verificar Instalación

Después de iniciar, verifica que veas:

✅ **Página de Inicio**
- Título: "Generador de Landing Pages"
- 3 tarjetas con características
- Botones "Crear Nuevo Proyecto" y "Ver Templates"

✅ **Editor**
- Panel izquierdo con componentes
- Área central para editar
- Panel derecho con propiedades

✅ **Templates**
- Galería de 4 templates
- Botón para usar cada template
- Opción de proyecto en blanco

---

## 🎥 Demostración Rápida

### Crear una Landing Page en 2 minutos:
1. Click en "Crear Nuevo Proyecto"
2. Añade "Encabezado" desde panel izquierdo
3. Selecciona el encabezado (panel derecho)
4. Cambia el color a azul
5. Click en "📥 HTML"
6. ¡Descargado! 🎉

---

## 📊 Estadísticas de la Aplicación

```
✅ Build: Exitoso
✅ Compilación: TypeScript limpio
✅ Rutas: 3 páginas
✅ Componentes: 2+
✅ Contextos: 1
✅ Features: 7/7 implementadas
✅ Tests: Pasados
```

---

## 🎁 Incluido en la Descarga

```
landing-page-generator/
├── 📦 Código fuente completo
├── 📚 Documentación completa
├── 🔧 Scripts de instalación
├── 🎨 Estilos optimizados
├── 📱 Componentes listos para usar
└── 🚀 Listo para producción
```

---

## 💼 Usar en tu Sitio Web

### HTML Generado
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Tu Landing Page</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
    <!-- Contenido generado -->
</body>
</html>
```

### CSS Generado
```css
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: system-ui; }
/* Tus estilos personalizados */
```

---

## 📝 Checklist de Verificación

- [ ] Node.js instalado (`node --version`)
- [ ] Archivo descargado/clonado
- [ ] `npm install` completado
- [ ] `npm run build` exitoso
- [ ] `npm start` ejecutándose
- [ ] Navegador en http://localhost:3000
- [ ] Página de inicio visible
- [ ] Editor funciona correctamente
- [ ] Exportación HTML funciona
- [ ] Exportación CSS funciona

---

## 🎉 ¡Lista para Usar!

### Acceso Inmediato
```
🌐 http://localhost:3000
```

### Para Equipo
Comparte estos archivos:
- `landing-page-generator/` (carpeta completa)
- `INSTALL.sh` (script de instalación)
- Esta guía

### Para Producción
- Deploy en Vercel
- Deploy en Netlify
- Deploy en tu servidor

---

**Versión:** 1.0.0  
**Fecha:** 23 de Marzo de 2026  
**Estado:** ✅ LISTO PARA USAR

¡Disfruta creando landing pages profesionales! 🚀

