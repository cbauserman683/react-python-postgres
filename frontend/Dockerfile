FROM node:17

RUN npm install -g nodemon

WORKDIR /src

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
