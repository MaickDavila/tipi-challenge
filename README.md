# Tipi Challenge
En este proyecto se uso la ultima version de Vue3 + Vite, las configuraciones son mínimas para el desarrollo.

- Se esta usando la api de Marvel, para obtener los datos de los personajes y comics.
- En desarrollo se usa el paquete unplugin-auto-import para importar los componentes nativos de vue
- Y para los componentes custom del proyecto se usa unplugin-vue-components.
- Para el manejo de rutas se usa vue-router
- Para el manejo de estados se usa Pinia, como ejemplo se uso el Composition API en un componente.
- Para los estilos, se usa unicamente CSS y se usa el preprocesador Sass.

## Instalación
Para instalar el proyecto se debe ejecutar el siguiente comando:
```
npm install
```

## Ejecución
Para ejecutar el proyecto se debe ejecutar el siguiente comando:
```
npm run dev
```
## Variables de entorno
Para el correcto funcionamiento del proyecto se debe crear un archivo .env en la raíz del proyecto con las siguientes variables de entorno:
```
VITE_APP_MARVEL_PUBLIC_API_KEY=6fb09ac05e81745b399b42acc8f4978f
VITE_APP_APP_NAME=tipi_challenge
VITE_APP_API_URL_BASE=https://gateway.marvel.com/v1/public
```
