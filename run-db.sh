#!/bin/bash

if [ ! -d 'datadir' ]; then
  mkdir datadir
fi

docker run --name mysql -p 3306:3306 -v $(pwd)/datadir:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=adminpw -d mysql:8.0.19