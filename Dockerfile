FROM node:16.17.0 as build
WORKDIR /usr/local/app
COPY . /usr/local/app/
FROM nginx:latest
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /usr/local/app/dist/khaddem-front-devops /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
