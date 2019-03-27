# STAGE1

FROM node:8.15.1-alpine AS stage1
# 指定工作目录
WORKDIR /app/
# 当前目录拷贝到工作目录下
COPY . /app/
RUN  npm install \
     && npm run build
	 
# STAGE2	 
FROM nginx:1.15.9-alpine
	
RUN  cd /usr/share/nginx/html \
     && rm -rf vue-pwa \
     && mkdir vue-pwa
	 
COPY --from=stage1 /app/dist/** /usr/share/nginx/html/
COPY --from=stage1 /app/dist/config/vue-pwa.nginx.conf /etc/nginx/conf.d/

EXPOSE 80
CMD ["nginx","-g","daemon off;"]