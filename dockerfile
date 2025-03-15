# Stage 1: Build the Angular app
FROM node:22-alpine AS build

WORKDIR /app

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular app using the Angular CLI (ng build)
RUN ng build --configuration production

# Stage 2: Serve the app with Nginx
FROM nginx:stable-alpine

# Copy the build output from the build stage to the Nginx server
COPY --from=build /app/dist/my-geladeira-remix-frontend/browser /usr/share/nginx/html

# Expose port 80 for serving the app
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]


