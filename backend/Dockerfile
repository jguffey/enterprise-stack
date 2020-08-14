FROM python:3

ENV PYTHONUNBUFFERED 1
ENV POSTGRES_PASSWORD postgres
RUN mkdir -p /python/code
WORKDIR /code
COPY requirements.txt /python/requirements.txt

# RUN apk --update add bash nano
# RUN apt-get update && apt-get install -y vim-tiny

ENV STATIC_URL /static
ENV STATIC_PATH /python/code/static

RUN pip install -r /python/requirements.txt
COPY ./code /python/code/
EXPOSE 80
ENV VIRTUAL_HOST dev.app.local
HEALTHCHECK CMD wget -q --tries=1 --spider http://localhost || exit 1
