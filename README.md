# Amigo Secreto

Una aplicación web interactiva para organizar sorteos de amigo secreto de forma fácil y divertida.

## Descripción

Esta aplicación permite a los usuarios crear una lista de amigos y realizar un sorteo aleatorio para determinar quién será el "amigo secreto". Es perfecta para organizar intercambios de regalos en familia, oficina o grupo de amigos.

## Funcionalidades

- **Agregar amigos**: Permite ingresar nombres a través de un campo de texto
- **Validación de entrada**: 
  - Verifica que el campo no esté vacío
  - Previene nombres duplicados
- **Lista visual**: Muestra todos los amigos agregados
- **Sorteo aleatorio**: Selecciona un amigo secreto al azar
- **Resultado destacado**: Muestra el ganador en una interfaz llamativa
- **Atajo de teclado**: Permite agregar amigos presionando Enter
- **Limpiar lista**: Botón para resetear y eliminar todos los nombres agregados

## Tecnologías Utilizadas

- **HTML5**: Estructura de la aplicación
- **CSS3**: Estilos y diseño responsive
- **JavaScript ES6**: Lógica de programación y manipulación del DOM

## Cómo usar la aplicación

1. **Agregar amigos**:
   - Escribe el nombre de un amigo en el campo de texto
   - Haz clic en "Añadir" o presiona Enter
   - El nombre aparecerá en la lista

2. **Sortear**:
   - Una vez que tengas al menos un amigo en la lista
   - Haz clic en "Sortear amigo"
   - Descubre quién es tu amigo secreto

3. **Nuevo sorteo**:
   - Puedes agregar más amigos en cualquier momento
   - Realizar múltiples sorteos con la misma lista

4. **Limpiar lista**:
   - Haz clic en "Limpiar Lista" para eliminar todos los nombres
   - Se pedirá confirmación antes de proceder
   - La aplicación volverá al estado inicial

## Instalación y Uso

1. **Clona el repositorio**:
```bash
git clone https://github.com/magalicoronel21/amigo-secreto.git
```

2. **Navega al directorio**:
```bash
cd amigo-secreto
```

3. **Abre el archivo HTML**:
   - Abre `index.html` en tu navegador web favorito
   - O utiliza Live Server si tienes VS Code

## Estructura del Proyecto

```
amigo-secreto/
├── index.html          # Estructura HTML principal
├── style.css           # Estilos y diseño
├── app.js             # Lógica de JavaScript
├── assets/            # Recursos gráficos
│   ├── amigo-secreto.png
│   └── play_circle_outline.png
└── README.md          # Documentación del proyecto
```

## Características del Diseño

- **Responsive**: Se adapta a diferentes tamaños de pantalla
- **Interfaz intuitiva**: Diseño limpio y fácil de usar
- **Colores atractivos**: Paleta de colores moderna
- **Tipografía**: Fuentes de Google Fonts para mejor legibilidad

## Lógica de Programación

El proyecto implementa conceptos fundamentales de programación:

- **Arrays**: Para almacenar la lista de amigos
- **Funciones**: Modularización del código
- **Validaciones**: Control de entrada de datos
- **Manipulación del DOM**: Actualización dinámica de la interfaz
- **Eventos**: Interacción con el usuario
- **Algoritmos de aleatorización**: Para el sorteo justo
- **Confirmaciones de usuario**: Para acciones destructivas como limpiar la lista

## Demo en Vivo

Puedes probar la aplicación en: [https://magalicoronel21.github.io/amigo-secreto](https://magalicoronel21.github.io/amigo-secreto)

## Notas Importantes

- Los datos se almacenan temporalmente en la memoria del navegador
- La lista se reinicia al recargar la página
- No se requiere conexión a internet una vez cargada la aplicación
- Compatible con todos los navegadores modernos

## Autora

**Magali Coronel**
- GitHub: [@magalicoronel21](https://github.com/magalicoronel21)


## Desafío Completado

Este proyecto fue desarrollado como parte del challenge "Amigo Secreto" para fortalecer habilidades en:
- Lógica de programación
- Manipulación del DOM
- Validación de formularios
- Algoritmos de aleatorización
- Buenas prácticas de desarrollo web
