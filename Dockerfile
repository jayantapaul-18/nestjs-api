# Base image
FROM node:16-alpine3.16

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json  prepare.js ./
# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN npm run build
EXPOSE 3003
# Start the server using the production build
CMD [ "node", "dist/main.js" ]
