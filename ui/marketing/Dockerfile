FROM node:14.2.0-alpine as builder
MAINTAINER Josh Guffey <joshua.guffey@gmail.com>
RUN apk add --no-cache --virtual .gpy python make g++

ENV SCPATH site
ENV AP /app
ENV NODE_ENV=production

WORKDIR ${AP}
# Breaks here, no package.json exists!
COPY ${SCPATH}/ .
RUN npm i && npm run build

# Serve
FROM nginx:alpine

COPY nginx /etc/nginx/
# --chown=nginx:nginx
COPY --from=builder  /app/public /usr/share/nginx/html/
# RUN touch /var/run/nginx.pid && chown nginx:nginx /var/run/nginx.pid

# USER nginx

EXPOSE 8080

# CMD ["nginx"]
ENV VIRTUAL_HOST dev.app.local
HEALTHCHECK CMD wget -q --tries=1 --spider http://localhost:8080 || exit 1
