
# ===== Build stage =====
FROM node:20-alpine AS build
WORKDIR /app

# Copy lockfiles first for better caching & determinism
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

# Copy source and build
COPY . .
RUN npm run build

# ===== Runtime stage =====
FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Prefer Vite 'dist'; CRA 'build' fallback
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/build /usr/share/ngCOPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

