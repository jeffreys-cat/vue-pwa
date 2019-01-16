FROM nginx:latest
LABEL colordove <color.dove@gmail.com>
ADD ./dist/ /usr/share/nginx/html/vue-pwa
ADD nginx.conf /etc/nginx/
EXPOSE 80
