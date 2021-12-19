FROM node:16.13.0-alpine AS dev
ENV NODE_ENV development

WORKDIR /app

COPY package.json .
RUN npm install
#assuming we use yarn one day we'll need this
#COPY yarn.lock . 

COPY . . 

EXPOSE 3000

CMD [ "npm", "start" ]
