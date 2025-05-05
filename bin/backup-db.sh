#!/bin/bash
#Leandro Celes
# Script para fazer backup do bando de dados
source variaveis.env
docker-compose exec db pg_dump -Fc -U $DATABASE_USERNAME -d $DATABASE_NAME -f "./db-backup/$DATABASE_NAME-`date +%Y-%m-%d-%H.%M.%S`.sql"
