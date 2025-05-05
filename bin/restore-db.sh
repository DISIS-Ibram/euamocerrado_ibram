#!/bin/bash
#Leandro Celes
# Script para fazer restore do banco
# Vai recuperar o ultimo arquivo em db-backup ou o nome do arquivo passado como 1 parametro. 
WORKDIR="$( cd "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
WORKDIR="$WORKDIR/.."
DBDIR="$WORKDIR/db-backup"
echo $WORKDIR
source "$WORKDIR/.env"

if [ "$1" != "" ]; then
    filepath=$1
    filename=`basename $filepath`
    #copio para a pasta que é compartilhada do container se nao existir o arquivo la
    [ -f "$DBDIR/$filename" ] && echo "" || cp $filepath "$DBDIR/$filename"
else
    echo "Você pode passar como parametro o arquivo que deseja recuperar tb! Caso contrario vamos recuperar o ultimo arquivo no diretório db-backup"
    filename=`ls -t1 $DBDIR |  head -n 1`
fi

echo "$filename"

if [ -f "$DBDIR/$filename" ]; then

    read -p "Deseja Recuperar o ultimo arquivo $filename?  [yn]" response
    case "$response" in
        [yY][eE][sS]|[yY]) 
            echo "Recuperando arquivo ....."
            ;;
        *)
            exit
            ;;
    esac

    read -p "Deseja criar um backup antes? [yn]" response
    case "$response" in
        [yY][eE][sS]|[yY]) 
            echo "criando backup do arquivo....."
            docker-compose exec db pg_dump -Fc -U $DATABASE_USERNAME -d $DATABASE_NAME -f "/db-backup/$DATABASE_NAME-`date +%Y-%m-%d-%H.%M.%S`.sql.bakup"
            ;;
        *)
            ;;
    esac
      docker-compose exec db echo $POSTGRES_DB
      #pg_restore --verbose --host=localhost --port=5432 --username=postgres -c --format=c --dbname=euamoocerrado 
      docker-compose -f docker-compose-dev.yaml exec db pg_restore --verbose --host=localhost --port=5432 --username="$POSTGRES_USER" -c --format=c --dbname="$POSTGRES_DB"  /db-backup/$filename

else
    echo "Arquivo não existe"
    exit    
fi

