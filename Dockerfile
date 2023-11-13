FROM node:16.17.0 as build
WORKDIR /usr/local/app
COPY . .
RUN npm install
RUN npm run build
FROM httpd:alpine3.15
WORKDIR /usr/local/apache2/htdocs
COPY --from=build /usr/local/app/dist/khaddem-front-devops .
