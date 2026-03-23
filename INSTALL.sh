#!/bin/bash

# Script de instalación rápida para Landing Page Generator
echo "🚀 Instalando Landing Page Generator..."
echo ""

# Verificar si Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js no está instalado. Por favor instálalo desde https://nodejs.org"
    exit 1
fi

echo "✓ Node.js detectado: $(node -v)"
echo ""

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm install --legacy-peer-deps

echo ""
echo "🏗️ Compilando proyecto..."
npm run build

echo ""
echo "✅ ¡Instalación completada!"
echo ""
echo "Para iniciar la aplicación:"
echo "  - Desarrollo: npm run dev"
echo "  - Producción: npm start"
echo ""
echo "🌐 Accede a: http://localhost:3000"
echo ""
