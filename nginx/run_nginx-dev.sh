#!/usr/bin/env bash

MSG=" ************************************** "
TEMPLATE_FILE_NAME="nginx-dev.tmpl"
TEMPLATE_FILE="/etc/nginx/$TEMPLATE_FILE_NAME"

function makeConfigFileFromTemplate() {
  envsubst '$FRONTEND_PORT $BACKEND_PORT $ADMIN_PORT $ADMIN_CONTEXT $BACKEND_CONTEXT $DOMAIN' <"/etc/nginx/$TEMPLATE_FILE_NAME" >/etc/nginx/nginx.conf # /etc/nginx/conf.d/default.conf
}


makeConfigFileFromTemplate;

#start nginx processes in daemon, so dont stop script here
echo "$MSG Starting nginx"
nginx -g "daemon on;"
RES=$?
if (( $RES )); then 
    kill -9 `pidof nginx`
fi

date=$(stat -c %y "$TEMPLATE_FILE")
while sleep 1; do
  date2=$(stat -c %y "$TEMPLATE_FILE")

  if [[ $date2 != $date ]]; then
    echo "$MSG nginx conf changed!"
    makeConfigFileFromTemplate;
    if [[ -n "`pidof nginx`" ]]; then
      echo "$MSG reloading nginx..."
      nginx -s reload;
      RES2=$?
      if [[ $RES2 -eq 1 ]]; then 
          echo "$MSG nginx fail..."
          kill -9 `pidof nginx`
      else
        echo "$MSG nginx reloaded..."
      fi
    else
      echo "$MSG Starting nginx..."
      nginx -g "daemon on;"
    fi

    date=$(stat -c %y "$TEMPLATE_FILE")
  fi
done
