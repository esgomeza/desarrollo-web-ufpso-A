# desarrollo-web-ufpso-A
Repositorio público para alojar los proyectos de la asignatura.
# Doy mis primeros pasos para la creación del proyecto
Se crean: html, js y css para la estructura base basica
# Segunda clase practica
Se crea una carperta to-do-listen : En donde tenemos ue hacer lo
siguiente:
Crear un formulario con un input de texto y un botón "Agregar tarea".
Al presionar el botón, la tarea debe aparecer en una lista <ul>.
Cada tarea tendrá un botón "Eliminar" para borrarla.
Usar estilos CSS para mejorar la presentación.
Agregar un contador de tareas pendientes.
Tener en cuenta las buenas prácticas de HTML, CSS y JS vistas.
# Tercera clase practica 
Día 3 de práctica
En este tercer día de práctica continué trabajando en el desarrollo del proyecto, mejorando la estructura del código y agregando nuevas funcionalidades. También se realizaron ajustes para optimizar el funcionamiento y la organización del proyecto.
# Cuarta clase practica
Proyecto Bootstrap + JS
Página web básica usando Bootstrap 5 y JavaScript puro. Incluye diseño responsive, componentes (cards, botones, modal) y un formulario con validación.
# 🌐 Proyecto Web con Bootstrap

Página web responsive desarrollada con Bootstrap y JavaScript puro, que incluye componentes visuales y funcionalidades interactivas.

## 🚀 Características

* Layout con **container, row y col**
* Navbar, cards y botones con Bootstrap
* Formulario de login con validación básica
* Interactividad con JavaScript (alertas, modales, mensajes dinámicos)

## 📁 Estructura

```
mi-proyecto-web/
├── index.html
├── css/styles.css
├── js/script.js
└── README.md
```

## 🛠️ Tecnologías

* HTML5
* CSS3
* Bootstrap 5
* JavaScript

## Cambios del [fecha actual - ej: 18/04/2026]

### Implementación de validación de login

- Se agregó validación del formulario de login con JavaScript
- Se evita el envío del formulario con `e.preventDefault()`
- Validación de campos obligatorios (email y contraseña)
- Se implementaron 3 escenarios de validación:
  - Campos vacíos: mensaje de advertencia (text-warning)
  - Credenciales correctas (prueba@gmail.com / 123456): mensaje de bienvenida (text-success)
  - Credenciales incorrectas: mensaje de error (text-danger)
- Se usa `innerHTML` para mostrar mensajes dinámicos en el elemento con id "message"
