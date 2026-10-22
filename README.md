# 1. Cambiar a la rama de desarrollo
git switch developCero

# 2. Guardar los cambios
git add .
git commit -m "feat: preparar portafolio para producción"

# 3. Subir los cambios a GitHub
git push origin developCero

# 4. Cambiar a producción
git switch main
git pull origin main

# 5. Integrar los cambios de desarrollo
git merge developCero

# 6. Publicar en GitHub
git push origin main

clave de accesos 
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---
