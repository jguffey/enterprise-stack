FROM tiangolo/uwsgi-nginx-flask:python3.6-alpine3.7

RUN apk --update add bash nano

ENV STATIC_URL /static
ENV STATIC_PATH /app/core/static
COPY ./requirements.txt /var/www/requirements.txt
COPY ./app /app

RUN pip install -r /var/www/requirements.txt
EXPOSE 80
ENV VIRTUAL_HOST dev.app.local
HEALTHCHECK CMD wget -q --tries=1 --spider http://localhost || exit 1
