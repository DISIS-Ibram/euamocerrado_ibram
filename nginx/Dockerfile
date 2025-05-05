FROM nginx:1.19.10
#RUN apt-get update && apt-get install -y nginx-mod-http-headers-more

COPY /nginx-dev.tmpl /etc/nginx/nginx-dev.tmpl
COPY /nginx-prod.tmpl /etc/nginx/nginx-prod.tmpl
COPY /run_nginx.sh /etc/nginx/run_nginx.sh

# RUN chmod +x  /etc/nginx/run_nginx.sh
# COPY /nginx.conf	/etc/nginx/nginx.conf
#COPY /server.crt	/etc/nginx/server.crt
#COPY /server.key	/etc/nginx/server.key
COPY /static	    /static
EXPOSE 80

# ENTRYPOINT [ "/etc/nginx/run_nginx.sh" ]