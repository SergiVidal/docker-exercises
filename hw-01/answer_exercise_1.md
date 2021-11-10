# Indica la diferencia entre el uso de la instrucción CMD y ENTRYPOINT (Dockerfile).

+ ENTRYPOINT especifica un comando que siempre se ejecutará cuando se inicie el contenedor, su valor por defecto es “/bin/sh -c”, se puede modificar en el Dockerfile, pero una vez definido no es posible cambiarlo.

+ CMD especifica los argumentos que serán tratados por el ENTRYPOINT, se pueden definir tantos CMD como se deseen, estos pueden ser modificados a diferencia del ENTRYPOINT.
