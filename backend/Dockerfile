FROM tiangolo/uwsgi-nginx-flask:python3.6-alpine3.7

RUN apk --update add bash nano

ENV STATIC_URL /static
ENV STATIC_PATH /app/core/static
COPY ./requirements.txt /var/www/requirements.txt
COPY ./app /app

RUN pip install -r /var/www/requirements.txt
HEALTHCHECK CMD ["wget", "-q", "localhost:80"]
