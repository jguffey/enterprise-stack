FROM python:3

ENV PYTHONUNBUFFERED 1
ENV POSTGRES_PASSWORD postgres
RUN mkdir /code
WORKDIR /code
COPY requirements.txt /code/

# RUN apk --update add bash nano
# RUN apt-get update && apt-get install -y vim-tiny

ENV STATIC_URL /static
ENV STATIC_PATH /app/core/static

RUN pip install -r requirements.txt
COPY ./app /code/
EXPOSE 80
ENV VIRTUAL_HOST dev.app.local
HEALTHCHECK CMD wget -q --tries=1 --spider http://localhost || exit 1
CMD python manage.py runserver 0.0.0.0:8000
