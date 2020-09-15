### Comentarios Generales

 Nathalia, en primer lugar tengo que felicitarte por un un excelente trabajo. Me maravilla la cantidad de detalles que abundan a cada paso en tu TP y hacen un efecto maravilloso. Los colores, la eleccion de imagenes, detalles como el efecto en hover en las tarjetas de proyectos, el hermoso borde de las tecnologias, los iconos tan hermosos, habla maravillas de tu capacidad de aprendizaje, tu curiosidad y tus ganas de aprender.

A nivel estructura tu página web en general cumple los requisitos pedidos. Si bien no puedo evaluar el aspecto visual, ya que no es parte del programa ni una habilidad requerida para una desarrolladora front end, sí quiero comentar lo linda que se ve tu web. 

Tenes algunos problemas en el responsive, y en general viene siempre por algun elemento de tu pagina que "rebalsa" el body. Lo vas a detectar por un scroll horizontal, que nunca deberia estar en una web a menos que sea explicito.  
- En tablet (medida estandar 768px) se produce porque tu imagen principal tiene width 100%, pero ningun contenedor para ella sola. Su contenedor es propiamente el contenedor general del contenido, regla-about. Al decirle a la imagen "width 100%" trata de ocupar el 100% de su contenedor, que no es posible dado que hay texto al lado, pero aun asi intenta ocupar todo el espacio posible y a veces provoca ese scroll. Habria que rodearla de un div y darle a ese div alguna medida (por ejemplo, width: 50%), o darle a regla-about un flex-wrap. 
- En tablet tambien tenes el problema de que tus tarjetas de tecnologias se ponen una debajo de la otra, a pesar de que entran bastantes mas. Eso es provocado por un enorme padding en el contenedor general, seccion-conocimientos. Yo reduciria este padding para tablet. 
- En celulares en general tu responsive anda mucho mejor, salvo en la resolucion mas baja (320px), causado por el margin de .nav-projects. Habria que sacarlo. 
- Una mas que no tiene que ver con el responsive: me encanta el hover en el borde de tus tarjetas, pero tiene el problema de que al aumentar el tamaño de las tarjetas hace que las demas se muevan, y el efecto queda desprolijo. Yo optaria por salvar esa diferencia de tamaños cambiando tambien el padding en el hover. Si le agregamos un padding de 5px, en lugar de 7, la diferencia de 2px del borde se compensa y el efecto es mejor:
```css
.info-projects:hover {
    border: 3px solid #f8cf61;
    padding: 5px;
}
```

Tus nombres de clases, cuando los pensas y los haces a conciencia, son muy buenos. Cumplis bien el requisito de que sean descriptivos en un sentido funcional: describir que es un elemento y qué hace, no necesariamente como se ve. Entiendo que a veces es muy dificil pensarlos todos y te quedas sin ideas, lo que se refleja en algunos que no estan bien, ya que recurris mucho a poner la etiqueta html en el nombre de la clase, que no es necesario. 

Se nota el esfuerzo por reutilizar codigo, el uso correcto de etiquetas semanticas y el correcto orden de jerarquias entre secciones, titulos, etc. Gran trabajo en ese sentido. 

Menciono lo bien ordenado de tu proyecto en github, y lo prolija que fuiste commit a commit agregando los cambios de a poco y describiendolos bien en tus mensajes. Te agradezco tambien los comentarios, que me permitieron ver tu proceso al hacer las cosas y el cuidado que pusiste en detallar los problemas que veias: espero que mis comentarios de arriba te sirvan para solucionarlo. 

No es parte de la correccion pero que hermoso detalle ponerme en la frase, me alegraste el dia con eso. 

Tengo que destacar la increible prolijidad de tu HTML y tu CSS; lo maravillosamente tabulado y ordenado que esta todo. Las poquisimas cosas innecesarias. Me costó bastante encontrar cosas a corregir en esos archivos; espero que estes muy orgullosa, porque se nota que hiciste este trabajo a conciencia y con mucho esfuerzo. 

Sé que puedo ser un poco quisquillosa en las correcciones. No es la intención que sientas que hiciste un mal trabajo, porque no es así: tu trabajo es fantástico. Mi tarea es comentarte todo lo que vea para que sea más fantástico aún. 


### Nota final: 9

Nota desagregada: 
✅ Estructura correcta de documento HTML.
✅ Respeta la consigna 
✅ Respeta el diseño dado 
✔️ Responsive funciona correctamente --> con observaciones
✅ Código bien indentado. 
✅ Comentarios que permiten mejorar la legibilidad del código.
✅ Uso correcto de etiquetas semánticas.
✔️ Buenos nombres de clases --> con observaciones
✅ Reutilización de estilos.
✅ Código CSS ordenado.
✅ Commits con mensajes adecuados.
