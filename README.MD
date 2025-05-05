# Projeto EU AMO CERRADO
---

O Projeto esta disponível como um docker-compose.
````
docker-compose --env-file=./.env up -d
````

É composto por alguns serviços, que destacamos abaixo:

 
## Servidor Web - NGINX
Servidor proxy para os serviços. 

### Certificado
 • O certificados são gerados a partir dos serviços em ./letsencrypt/init-letsencrypt.sh
 • Se for utilizar, alterar o inicio do script script para os dominios/emails
 • Configurar o letsencrypt/data/nginx/app.conf para o servidor escutar o letsencrypt

### Configuração
 Configurar o nginx através do arquivo 
 
    nginx/nginx-prod.tmpl
 
 As seguintes variaveis de ambiente ficam disponiveis para o ambiente
 ```
 $FRONTEND_PORT $BACKEND_PORT $ADMIN_PORT $BACKEND_CONTEXT $DOMAIN
 ```

## Banco de Dados - Postgres/Postgis
Arquivo de dump disponibilizado em **/db-backup**
(Nesse projeto disponibilizado pelo link, ja esta com o dado raw em /data)

Caso utilizem o banco no container, o backup pode ser recuperado no container do banco executando
```
./bin/restore-deb.sh
```

## Frontend do Site - Vue
Desenvolvido em Vue 2.x

## Servidor GraphQL - HASSURA
Um cliente GraphQL que fornece para o Frontend site os dados, através de uma conexão direta no banco.

## Backend - DJANGO
Desenvolvido em DJANGO. É utilizado para inclusão de dados no backend, através do interface disponibilizada no Frontend Admin




