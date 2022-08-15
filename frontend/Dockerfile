FROM node:13-alpine
WORKDIR /app/frontend
ENV PATH /app/frontend/node_modules/.bin:$PATH
COPY package.json app/frontend/package.json
RUN npm install --silent
RUN npm install react-scripts@3.3.1 -g --silent
CMD ["npm", "start"]