#FROM nginx:1.15.0-alpine
FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

RUN mkdir /var/www/html -p && touch /var/www/html/index.php

#RUN apt update && \
#    apt install -y wget netcat && \
#    wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
#    chmod +x /usr/bin/wait-for

EXPOSE 8080

ENTRYPOINT [ "/docker-entrypoint.sh" ]
CMD ["nginx","-g","daemon off;"]
