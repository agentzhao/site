FROM node:lts-alpine

# set the working direction
WORKDIR /app

COPY package*.json ./
COPY . ./

RUN yarn install

# start app
CMD ["yarn", "run", "dev", "--", "--host", "0.0.0.0"]
