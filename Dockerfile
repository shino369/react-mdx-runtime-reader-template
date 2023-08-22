# Use an official Node.js runtime as the base image
FROM node:18-alpine as build-stage

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm i

# Copy the entire project to the container
COPY . .

# Build the React app
RUN npm run build

# Use Nginx as the web server
FROM nginx:alpine

# Copy the built app from the previous stage to the Nginx document root
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
