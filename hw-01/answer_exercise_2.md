# Indica la diferencia entre el uso de la instrucción ADD y COPY (Dockerfile).

+ Ambas instrucciones permiten copiar ficheros y/o directorios desde una localización de origen hacia una de destino, la diferencia recae en que:

  + COPY únicamente permite copiar ficheros/directorios desde el host donde se esta montando la imagen de Docker hacia la propia imagen.

  + ADD permite realizar lo mismo que COPY, pero a la vez, permite que el origen sea tanto una URL como un fichero .tar el cual es descomprimido automáticamente en la imagen destino.

