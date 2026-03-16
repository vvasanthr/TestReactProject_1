FROM node:20-alpine
WORKDIR /TestReactProject_11
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm","run","dev","--","--host"]