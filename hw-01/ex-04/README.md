# How To

1. Creación de la imagen:
```console
docker build -t node-image .
```

2. Levantar el contenedor:
```console
docker run -d --name node-app -p 8080:8080 node-image
```

3. http://localhost:8080
4. Comprobación del estado del contenedor: 
```console
docker ps
```

<!-- docker rm -f node-app
docker rmi -f node-image -->