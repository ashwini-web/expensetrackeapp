
# ===== Build stage =====
FROM node:20-alpine AS build
WORKDIR /app

# Copy manifests
COPY package.json package-lock.json ./
# If you face peer dependency issues, you can add --legacy-peer-deps
RUN npm install --no-audit --no-fund

# Copy source and build
COPY . .
RUN npm run build

# ===== Runtime stage =====
FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=buildCOPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

