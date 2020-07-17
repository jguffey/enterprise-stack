FROM tiangolo/uwsgi-nginx-flask:python3.6

# RUN apk --update add bash nano
RUN apt-get update && apt-get install -y vim-tiny

ENV STATIC_URL /static
ENV STATIC_PATH /app/core/static
COPY ./requirements.txt /var/www/requirements.txt
RUN pip install -r /var/www/requirements.txt

COPY ./app /app
EXPOSE 80
ENV VIRTUAL_HOST dev.app.local
HEALTHCHECK CMD wget -q --tries=1 --spider http://localhost || exit 1
