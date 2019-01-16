FROM nginx
LABEL colordove <color.dove@gmail.com>
RUN rm /etc/nginx/conf.d/nginx.conf
COPY nginx.conf /etc/nginx/conf.d/
COPY dist/**  /usr/share/nginx/html/vue-pwa
