#!/usr/bin/env bash

docker run -d --name very-important-prod domhynes/super-important-microservice
docker logs -f very-important-prod