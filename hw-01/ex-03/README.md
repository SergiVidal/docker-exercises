# How To

1. Creación y comprobación del volumen:
```console
docker volume create static_content

docker volume ls
```

2. Creación de la imagen:
```console
docker build -t ex03-image .
```

3. Creación y comprobación del contenedor utilizando el volumen “static_content” y la imagen creados anteriormente, mapeando el puerto local 8080 con el puerto 80 del contenedor y añadiéndole al contenedor el nombre “nginx-hw01”: 

```console
docker run -d --name nginx-hw01 -p 8080:80 -v static_content:/usr/share/nginx/html ex03-image

docker ps
```
4. http://localhost:8080


<!-- docker volume rm static_content -->