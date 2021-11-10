# How To

1. Creación y comprobación del volumen:
```console
docker volume create static_content

docker volume ls
```

2. Creación y comprobación del contenedor utilizando el volumen “static_content” creado anteriormente, la versión de la imagen “nginx:1.19.3”, mapeando el puerto local 8080 con el puerto 80 del contenedor y añadiéndole al contenedor el nombre “nginx-hw01”: 

```console
docker run -d --name nginx-hw01 -p 8080:80 -v $(PWD)/index.html:/usr/share/nginx/html/index.html nginx:1.19.3

docker ps
```
3. http://localhost:8080


<!-- docker volume rm static_content -->