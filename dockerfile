
# Stage 1: Build the Angular app
FROM node:22-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod --omit=dev

# Stage 2: Serve the app with Nginx
FROM nginx:stable-alpine

COPY --from=build /app/dist/my-geladeira-remix-frontend/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
