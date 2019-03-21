FROM node:11-alpine as build-deps
WORKDIR /app
COPY . .
RUN npm run build

FROM nginx:latest
LABEL colordove <color.dove@gmail.com>
COPY ./dist/** /usr/share/nginx/html/vue-pwa/
COPY nginx.conf /etc/nginx/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
