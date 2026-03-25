# MicroLens Wonders

## Deploy estatico en GitHub Pages

Este proyecto ya se puede exportar como sitio estatico con Vite.

### 1) Configura el repo en GitHub

- Sube el proyecto a un repositorio llamado `microlens-wonders`.
- En GitHub ve a `Settings > Pages`.
- En `Source`, selecciona `Deploy from a branch`.
- Selecciona la rama `gh-pages` y carpeta `/(root)`.

### 2) Instala dependencias

```bash
bun install
```

Si prefieres npm:

```bash
npm install
```

### 3) Publica

```bash
bun run deploy
```

Con npm tambien funciona:

```bash
npm run deploy
```

Ese comando hace lo siguiente:

- Compila con base `/microlens-wonders/` para que funcione en Pages.
- Publica el contenido de `dist` en la rama `gh-pages`.

### 4) URL esperada

Tu sitio quedara disponible en:

`https://<tu-usuario>.github.io/microlens-wonders/`

## Notas

- Si cambias el nombre del repositorio, actualiza el script `build:gh-pages` en [package.json](package.json).
- Para probar localmente la version de produccion:

```bash
bun run build:gh-pages
bun run preview
```
