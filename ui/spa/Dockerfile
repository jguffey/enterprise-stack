FROM node:14.2.0-alpine
MAINTAINER Josh Guffey <joshua.guffey@gmail.com>
# RUN apk add --no-cache --virtual .gpy python make g++

ENV SCPATH site
ENV AP /usr/app
# ENV NODE_ENV=production
EXPOSE 3000

WORKDIR ${AP}
# Breaks here, no package.json exists!
COPY ${SCPATH}/ .

RUN npm install && npm run build

USER node
CMD ["npm", "start"]
HEALTHCHECK CMD ["wget", "-q", "localhost:3000"]
