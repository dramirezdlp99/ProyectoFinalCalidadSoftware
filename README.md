# 🎮 Proyecto de Calidad de Software - Juego Educativo React

Este proyecto es una implementación práctica para la materia de **Calidad de Software**, desarrollado por estudiantes del cuarto semestre de **Ingeniería de Software** en la **Universidad Cooperativa de Colombia - Campus Pasto**.  

El entorno 3D base fue proporcionado por el **Profesor Gustavo Willyn Sánchez Rodríguez**, y sobre él se construyeron múltiples pruebas, simulaciones, configuraciones y mejoras para evaluar y aplicar conceptos de calidad como pruebas unitarias, integración, sistema, carga y CI/CD.  

---

## 🚀 Tecnologías Utilizadas

Durante el desarrollo, pruebas, despliegue y aseguramiento de la calidad del proyecto se utilizaron diversas tecnologías y herramientas:

### 1. 📝 Visual Studio Code (VS Code)
Herramienta usada como editor principal durante el desarrollo del proyecto. Permitió implementar código, visualizar el entorno 3D, depurar errores, ejecutar pruebas, y realizar configuraciones clave.

### 2. ⚛️ React
Librería utilizada para la creación del frontend del juego educativo. Permite estructurar los componentes y brindar una interfaz interactiva y dinámica para el usuario.

### 3. 🗄️ MongoDB (Simulado con archivo JSON)
Se simuló una base de datos MongoDB con un archivo JSON local que contenía los bloques del entorno 3D. Esto permitió realizar pruebas de lectura, escritura y visualización desde el frontend.

### 4. 📬 Postman
Utilizado para realizar pruebas de integración de los endpoints relacionados con los bloques. Se evaluó el funcionamiento de las rutas `GET`, `POST`, y `POST` múltiple (`batch`) hacia los datos simulados.

### 5. 📊 Apache JMeter
Herramienta de pruebas de carga y estrés. Simuló múltiples usuarios para medir el tiempo de respuesta y la estabilidad del sistema al consumir el archivo JSON mediante los endpoints.

### 6. 🧪 Jest
Framework de pruebas unitarias. Se empleó para verificar el funcionamiento correcto de componentes críticos como el movimiento de cámara en tercera persona (`ThirdPersonCamera.js`).

### 7. ⚙️ Jenkins
Herramienta de integración continua usada para ejecutar automáticamente pruebas (`npm test`), instalación de dependencias (`npm install`) y la construcción del proyecto (`npm run build`).

### 8. ☁️ Vercel
Plataforma en la nube usada para desplegar el frontend del juego. Permitió visualizar el resultado en un entorno simulado de producción para pruebas y validaciones.

### 9. 🔧 Git y GitHub
Sistema de control de versiones y repositorio remoto. Se gestionó el flujo de trabajo con ramas, commits, historial, y se conectó con Jenkins para la automatización.

---

## 🧪 Tipos de Pruebas Aplicadas

A continuación se resumen las pruebas realizadas en el proyecto:

| Tipo de Prueba        | Herramienta      | Objetivo                                                                 |
|-----------------------|------------------|--------------------------------------------------------------------------|
| Pruebas unitarias     | Jest             | Validar el correcto funcionamiento de los componentes individuales.     |
| Pruebas de integración| Postman          | Verificar la interacción correcta entre componentes mediante endpoints. |
| Pruebas de sistema    | JMeter           | Asegurar que el sistema responde correctamente bajo carga y estrés.     |

---

## 🔄 Automatización del CI/CD

Este proyecto cuenta con un pipeline CI/CD configurado en Jenkins que automatiza:

| Fase               | Descripción                                                             |
|--------------------|--------------------------------------------------------------------------|
| Instalación        | Ejecuta `npm install` para preparar las dependencias.                   |
| Pruebas            | Corre `npm test` para validar el código automáticamente.                |
| Build              | Ejecuta `npm run build` para construir el proyecto listo para producción.|
| Despliegue manual  | Se sube a Vercel para producción con revisión previa del equipo.        |

---

## 🧾 Evidencias de Calidad y Resultados

### Pruebas de carga en JMeter

- **Usuarios Simulados:** 50  
- **Tasa de error:** 0%  
- **Tiempo promedio de respuesta:** 2.4 segundos  
- **Endpoint evaluado:** `/api/blocks`  

### Pruebas en Postman

- **GET:** Datos cargados correctamente desde el archivo JSON.  
- **POST:** Datos insertados correctamente en simulación.  
- **POST batch:** Inserción múltiple exitosa.  

### Pruebas Jest

- **Archivo evaluado:** `ThirdPersonCamera.js`  
- **Cobertura:** 95%  
- **Resultados:** Todos los test pasaron exitosamente.

---

## 📊 Tablas con Pruebas y Resultados

### Tabla 1: Pruebas de Funcionalidad

| ID | Caso de Prueba                         | Resultado Esperado                    | Resultado Obtenido      | Estado |
|----|----------------------------------------|---------------------------------------|--------------------------|--------|
| 01 | Cargar bloques desde JSON              | Mostrar todos los bloques en pantalla | Coincide                 | ✅     |
| 02 | Movimiento de personaje en entorno 3D  | Movimiento fluido sin errores         | Coincide                 | ✅     |
| 03 | Interacción con UI y botones           | Botones ejecutan funciones esperadas  | Coincide parcialmente    | ⚠️     |

### Tabla 2: Pruebas de Integración

| ID | Endpoint                  | Método | Entrada                         | Salida Esperada               | Resultado | Estado |
|----|---------------------------|--------|----------------------------------|-------------------------------|-----------|--------|
| 01 | `/api/blocks`             | GET    | -                                | JSON con datos                | Correcto  | ✅     |
| 02 | `/api/blocks`             | POST   | Objeto bloque                    | Confirmación de guardado      | Correcto  | ✅     |
| 03 | `/api/blocks/batch`       | POST   | Array de bloques                 | Confirmación de múltiple save | Correcto  | ✅     |

### Tabla 3: Métricas de Desempeño

| Métrica                        | Valor Obtenido |
|-------------------------------|----------------|
| Tiempo promedio de respuesta  | 2.4s           |
| Usuarios concurrentes         | 50             |
| Errores detectados            | 0              |
| Cobertura de pruebas (Jest)   | 95%            |

---

## 👨‍🏫 Autor del entorno base 3D

**Profesor:** Gustavo Willyn Sánchez Rodríguez  
📧 Email: [guswillsan@gmail.com](mailto:guswillsan@gmail.com)

> El entorno base del juego educativo fue desarrollado por el profesor Gustavo Willyn Sánchez Rodríguez y adaptado por el equipo para aplicar prácticas de aseguramiento de la calidad de software.

---

## 🧑‍💻 Equipo de Trabajo

**Universidad:** Universidad Cooperativa de Colombia  
**Carrera:** Ingeniería de Software - Cuarto semestre  
**Campus:** Pasto  
**Materia:** Calidad de Software  

| Nombre                             | ID      |
|-----------------------------------|---------|
| David Fernando Ramírez de la Parra| 873299  |
| Daniers Alexander Solarte Limas   | 875613  |
| Juan Felipe Mora Revelo           | 875484  |

---

✨ Gracias por leer. ¡Este proyecto fue una experiencia valiosa de aprendizaje sobre calidad, pruebas automatizadas y buenas prácticas en desarrollo de software! 🚀
