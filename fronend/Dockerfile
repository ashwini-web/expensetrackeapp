
# ===== Build stage =====
FROM node:20-alpine AS build
WORKDIR /app

# Install deps
COPY package*.json ./
RUN npm ci

# Copy source and build
COPY . .
# CRA → outputs /app/build ; (If Vite: npm run build emits /app/dist)
RUN npm run build

# ===== Nginx static server =====
FROM nginx:1.27-alpine
# Nginx config to serve SPA; In Kubernetes, Ingress will handle /api routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# CRA output:
COPY --from=build /app/build /usr/share/nginx/html
# If you use Vite, replace the above line with:
# COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

