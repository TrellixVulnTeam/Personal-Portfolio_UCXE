#!/usr/bin/env bash

shopt -s globstar 

for d in /docker-entrypoint-initdb.d/*; do
    if [ -d "$d" ]; then
        database_name="${d##*/}"
        echo "#"
        echo "#"
        echo "# Processing database $database_name"
        echo "#"
        
        create_db_script="${d}/create_database.sql"
        if [ ! -f $create_db_script ]; then
            echo "# No CreateDatabase.sql found, aborting"
            exit 1
        fi

        psql=(psql -v ON_ERROR_STOP=1 --quiet)
        echo "# Running ${create_db_script##*/}"
        "${psql[@]}" -f "$create_db_script"

        psql+=( --dbname "$database_name" )    

        change_scripts_glob="${d}/change_queries/**/*.sql"

        echo "# Executing scripts:"
        for f in ${change_scripts_glob}; do
            script_name=$( echo "$f" | rev | cut -d"/" -f1,2 | rev )
            echo "# $script_name"
            "${psql[@]}" -f "$f"
        done
    fi
done