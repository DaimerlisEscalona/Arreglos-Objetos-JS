# Arreglos-Objetos-JS
Desafío 4 - Inmobiliaria
En este desafío validaremos nuestros conocimientos en los contenidos de arreglos y objetos,
modificándolos con DOM.
Lee todo el documento antes de comenzar el desarrollo individual, para asegurarte de tener
el máximo de puntaje y enfocar bien los esfuerzos.
Descripción
Aplicando los conceptos y herramientas aprendidas hasta ahora, en este desafío deberás
programar la renderización dinámica de propiedades inmobiliarias y los filtros de búsquedas
de un menú lateral.
A continuación te mostramos una referencia de lo que debes maquetar:
Puedes utilizar el código del Apoyo Desafío - Inmobiliaria, o crear tu propio
estilo.
Imagen 1. Maqueta general del desafío
Fuente: Desafío Latam
En donde tenemos un buscador de propiedades en un costado:
_ 1
www.desafiolatam.com
Imagen 2. Buscador
Fuente: Desafío Latam
Y una galería de propiedades con el total de busqueda:
Imagen 3. Galería de propiedades
Fuente: Desafío Latam
El usuario deberá poder tipear en el filtro la cantidad de cuartos y un rango de metros
cuadrados que desee definir para la búsqueda de propiedades que cumplan estos criterios.
_ 2
www.desafiolatam.com
En caso de que falte algún campo por llenar se deberá avisar al usuario con una ventana
emergente.
Imagen 4. Notificación de campos vacíos
Fuente: Desafío Latam
Al momento de realizar una búsqueda con éxito, se debe actualizar el valor del nuevo total
de propiedades.
Imagen 5. Búsqueda con éxito
Fuente: Desafío Latam
Requerimientos
1. Implementar todos los elementos necesarios para aplicar las funcionalidad del
desafío
(1 punto)
2. Crea un arreglo de propiedades que cumplan la siguiente estructura (2 puntos)
{
nombre: "Departamento",
descripcion: "Desde las alturas todo se ve mejor",
_ 3
www.desafiolatam.com
src: "...",
cuartos: 3,
metros: 200
},
3. Agrega el evento click al botón del buscador ( 0.5 puntos)
4. Agrupar la lógica en funciones reutilizables que sean ejecutadas en cada búsqueda
(1 punto)
5. Utiliza ciclos para recorrer el arreglo de propiedades
(2 puntos)
6. Utiliza la interpolación y el innerHTML para crear templates y agregar los templates
de las propiedades durante el recorrido del arreglo (2 Puntos)
7. Utiliza condicionales para evaluar si falta algún campo por llenar en el buscador
(1 Punto)
8. Actualiza el total de resultados en cada búsqueda generada con éxito (0.5 Punto)
¡Mucho éxito!
_ 4
www.desafiolatam.com
