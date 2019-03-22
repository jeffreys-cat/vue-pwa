FROM node:11-alpine as build-deps
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
COPY dist/** /usr/share/nginx/html/vue-pwa/

FROM nginx:latest
LABEL colordove <color.dove@gmail.com>
COPY nginx.conf /etc/nginx/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
