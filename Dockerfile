FROM node:8-slim

# 安装nginx
RUN apt-get update \    
    && apt-get install -y nginx \
    && rm -rf /usr/local/etc/nginx/nginx.conf

# 指定工作目录
WORKDIR /app/

# 当前目录拷贝到工作目录下
COPY . /app/
COPY nginx.conf /usr/local/etc/nginx/

# 声明运行时容器提供服务端口
EXPOSE 80

# 安装依赖
# build
# 拷贝到ng目录下
# 删除目录文件
RUN  npm install \
     && npm run build \ 
     && cd /usr/local/var/www/ \
     && rm -rf vue-pwa \
     && mkdir vue-pwa \
     cd /app \
     && cp -r dist/** /usr/local/var/www/vue-pwa/ \     
     && rm -rf /app

# 以前台形式启动ng
CMD ["nginx","-g","daemon off;"]