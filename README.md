# Bolis de Mari 🧊

App web para control de ventas de **Bolis de Mari**. Funciona en celular y computador.

## ✨ Funcionalidades

- 🧊 **Ventas**: Registro de ventas por sabor con +/-
- 📅 **Historial**: Historial día por día con detalles
- 📊 **Stats**: Estadísticas, gráficos y ranking de sabores
- 📒 **Fiados**: Control de ventas a crédito con abonos
- ☁️ **Sincronización en la nube** vía Supabase
- 🙏 **Frases motivacionales** cristianas

## 🚀 Instalación

### 1. Crear base de datos en Supabase

1. Ve a [https://supabase.com](https://supabase.com) y crea una cuenta gratis
2. Crea un nuevo proyecto
3. En el editor SQL, ejecuta el contenido de `supabase-schema.sql`
4. Luego ejecuta `import-data.sql` para cargar los datos históricos
5. Ve a **Project Settings → API** y copia:
   - **Project URL** (la URL de tu proyecto)
   - **anon public key** (la llave anónima)

### 2. Configurar la app

1. Abre `index.html` en tu navegador (o súbela a un hosting)
2. Ve a la pestaña **⚙️ Config**
3. Pega la **URL** y **Anon Key** de Supabase
4. Toca **Guardar**
5. Los datos se sincronizarán automáticamente

### 3. Desplegar en GitHub Pages

1. Crea un repo en GitHub
2. Sube todos los archivos
3. Ve a **Settings → Pages** y selecciona la rama `main`

## 📁 Archivos

| Archivo | Descripción |
|---------|-------------|
| `index.html` | App web completa |
| `icon.svg` | Logo / icono |
| `manifest.json` | Configuración PWA |
| `supabase-schema.sql` | Esquema de base de datos |
| `import-data.sql` | Datos históricos |
| `seed-data.json` | Datos en formato JSON |

## 🛠️ Tecnologías

- HTML + CSS + JS (sin frameworks)
- Supabase (PostgreSQL en la nube)
- Chart.js (gráficos)
- Google Fonts (Nunito + Pacifico)

---

Hecho con ❤️ y 🙏 para Mari
