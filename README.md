This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# Taller: Git, GitHub y Deploy con Vercel 🚀

En este taller aprenderás a trabajar con Git y GitHub, configurar tu entorno local y desplegar un proyecto en Next.js usando Vercel. Sigue los pasos a continuación para completar el flujo.

---

## **Configuración Inicial de Git**

1. **Instala Git**  
   - Descarga Git desde [git-scm.com](https://git-scm.com) e instálalo en tu computadora.

2. **Configura tu identidad**  
   - Ejecuta los siguientes comandos para que tus commits tengan tu información:  
     ```bash
     git config --global user.name "Tu Nombre"
     git config --global user.email "tuemail@ejemplo.com"
     ```

3. **Verifica la configuración**  
   - Asegúrate de que la configuración sea correcta con:  
     ```bash
     git config --list
     ```

---

## **Trabajando con el Proyecto**

### **Fork y Clonar el Repositorio**

1. **Haz un fork del repositorio en GitHub**  
   - Ve al repositorio original y haz clic en el botón **Fork**.  
   - Esto creará una copia del repositorio en tu cuenta de GitHub.

2. **Clona tu fork en tu máquina local**  
   - Copia el enlace de tu fork desde GitHub.  
   - En tu terminal, ejecuta:  
     ```bash
     git clone <URL-de-tu-repositorio>
     ```

3. **Navega a la carpeta del proyecto**  
   ```bash
   cd nombre-del-proyecto

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
