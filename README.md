# Prueba técnica Estudio Cactus

Características:
- Testing unitarios y end to end (vitest, react-testing-library y playwright)
- Custom hooks para separar la lógica de la vista
- Context para compartir en toda la aplicación el estado de los puntos y los materiales

Cuando se inicia la aplicación se obtiene de Firebase los puntos y los materiales y se crean varios estados para guardar las coordenadas de los puntos y agrupar los materiales por partes de la cocina (en el código se muestra como "Parts"). Para identificar las partes he usado los identificadores de los puntos.

He hecho pruebas unitarias a un solo componente de sus características y una prueba para comprobar el correcto funcionamiento de cambiar el material.

## Alternativas

Primero, podría haber creado una api con Next.js y hacer SSR para obtener la información de Firebase al recibir una petición del usuario y enviarlo ya completo. Pero de esta forma si hubiera un montón de imágenes y diferentes capas el usuario tendría que esperar mucho tiempo y solo vería una pantalla en blanco.

Segundo, en vez de usar un Context podría haber optado por realizar todo el trabajo en el page/index.js y pasar los props a cada componente. Pero opté por usar context porque pensé al principio que iba a necesitar el estado en componentes más profundos y de este modo me hubierá ahorrado el problema del prop drilling. Aunque es cierto, que al final, con el tamaño de este proyecto, no era necesario el Context. Pero si en un futuro se quiere añadir más funcionalidades el Context puede ser útil.

Y por último, se podría usar el hook useReducer para manejar los diferentes estados creados en el Context. De este modo tendríamos un mejor manejo del estado global y no tendríamos que crear tantos estados.

Muchas gracías, ha estado muy interesante esta prueba técnica 😃. 
