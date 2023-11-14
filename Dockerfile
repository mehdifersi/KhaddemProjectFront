# Stage 1: Build the Node.js application
FROM node:16.17.0 as build
WORKDIR /usr/local/app
COPY . /usr/local/app/
# Run commands to build the Node.js application
RUN npm install
RUN npm run build

# Stage 2: Use Nginx and copy the built files from the previous stage
FROM nginx:latest
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /usr/local/app/dist/khaddem-front-devops /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
