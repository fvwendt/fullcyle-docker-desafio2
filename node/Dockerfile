FROM node:15

WORKDIR /usr/src/app

COPY src/package*.json ./
RUN npm install
RUN npm install mysql --save

COPY src/* .

#RUN apt-get update && apt-get install -y wget
#ENV DOCKERIZE_VERSION v0.6.1
#RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
#    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
#    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

RUN apt update && \
    apt install -y wget netcat && \
    wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
    chmod +x /usr/bin/wait-for

#EXPOSE 3000

#CMD ["node","index.js"]
