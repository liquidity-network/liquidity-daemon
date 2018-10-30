FROM node:9.11.2

USER root

WORKDIR /code

RUN apt-get update \
	&& apt-get install -y git build-essential python

ADD daemon /code/

RUN npm install

RUN npm install -g nodemon typescript

RUN npm run-script build
