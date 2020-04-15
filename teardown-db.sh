#!/bin/bash

docker stop mysql
docker rm mysql

if [ -d "datadir" ]; then
  sudo rm -rf datadir
fi