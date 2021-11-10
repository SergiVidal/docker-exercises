# Use the official image as a parent image.
FROM node:16.13.0-alpine3.14

# Update packages inside container image and add curl
RUN apk update \
    && apk add curl

# Set the working directory.
WORKDIR /usr/src/app

# Copy the file from your host to your current location.
COPY /src/package.json .

# Run the command inside your image filesystem.
RUN npm install

# Add metadata to the image to describe which port the container is listening on at runtime.
EXPOSE 8080

# Add healthcheck options and command 
HEALTHCHECK --interval=45s --timeout=5s --start-period=15s --retries=2 \  
    CMD curl -f http://localhost:8080 || exit 1

# Run the specified command within the container.
CMD ["start"]

# Copy the rest of your app's source code from your host to your image filesystem.
COPY /src/* .

# Especify entrypoint
ENTRYPOINT ["npm"]