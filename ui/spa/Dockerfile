FROM node:current
MAINTAINER Josh Guffey <joshua.guffey@gmail.com>
# RUN apk add --no-cache --virtual .gpy python make g++
# RUN apk --update add curl

ENV SCPATH site
ENV AP /usr/app
# ENV NODE_ENV=production
EXPOSE 3000

WORKDIR ${AP}
# Breaks here, no package.json exists!
COPY ${SCPATH}/ .

RUN npm install
RUN npm run build

CMD ["npm", "run", "server"]
ENV VIRTUAL_HOST dev.app.local
HEALTHCHECK CMD wget -q --tries=1 --spider http://localhost:3000 || exit 1
