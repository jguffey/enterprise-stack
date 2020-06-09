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

RUN npm install && npm run build

CMD ["npm", "run", "start"]
HEALTHCHECK CMD ["wget", "-q", "localhost:80"]
# TODO: Need to finish this, see https://dev.to/reactstockholm/setup-a-next-js-project-with-pm2-nginx-and-yarn-on-ubuntu-18-04-22c9
## Idea is that we want to run `npm start` in background mode, aka detached, so control is given back to docker.
