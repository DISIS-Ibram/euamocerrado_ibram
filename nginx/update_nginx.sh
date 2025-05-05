#!/usr/bin/env bash

echo "################################## Run nginx"

if [ $NODE_ENV == "development" ]
  then
    FILENAME="nginx-dev.tmpl"
else
    FILENAME="nginx-prod.tmpl"
fi

envsubst '$FRONTEND_PORT $BACKEND_PORT $ADMIN_PORT $BACKEND_CONTEXT $DOMAIN' < "/etc/nginx/$FILENAME" > /etc/nginx/nginx.conf # /etc/nginx/conf.d/default.conf
cat /etc/nginx/nginx.conf

docker exec -dt eac-frontend yarn add -s "$@"

docker-compose -exec -it nginx -s reload