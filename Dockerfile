# Use an official Node.js runtime as the base image
FROM node:lts-alpine as production

# Create and set the working directory in the container
WORKDIR /

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire application source code to the container
COPY . .

# Expose the port your NestJS application is listening on (default is 3000)
EXPOSE 3000

# Define the command to start your NestJS application
CMD [ "npm", "run", "start" ]
