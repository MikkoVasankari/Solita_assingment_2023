FROM node:14

COPY package.json .
RUN npm install 
COPY . .
EXPOSE 3001
USER node
CMD npm start
