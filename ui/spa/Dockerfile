FROM node:14.2.0-alpine
MAINTAINER Josh Guffey <joshua.guffey@gmail.com>
# RUN apk add --no-cache --virtual .gpy python make g++
RUN apk --update add curl

ENV SCPATH site
ENV AP /usr/app
# ENV NODE_ENV=production
EXPOSE 3000

WORKDIR ${AP}
# Breaks here, no package.json exists!
COPY ${SCPATH}/ .

RUN npm install && npm run build
RUN npm install pm2 -g
HEALTHCHECK --interval=30s CMD ["curl", "localhost:3000"]

CMD [ "pm2-runtime", "npm", "--", "start" ]
# TODO: Need to finish this, see https://dev.to/reactstockholm/setup-a-next-js-project-with-pm2-nginx-and-yarn-on-ubuntu-18-04-22c9
## Idea is that we want to run `npm start` in background mode, aka detached, so control is given back to docker.
RUN echo "OK done"
