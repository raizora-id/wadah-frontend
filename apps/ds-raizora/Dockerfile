# Base image dengan Node.js dan PNPM
FROM node:18-alpine AS base
RUN npm install -g pnpm

# Dependencies stage - dapat di-cache di antara builds
FROM base AS deps
WORKDIR /app
COPY pnpm-lock.yaml package.json pnpm-workspace.yaml ./
COPY apps/app1/package.json ./apps/app1/
COPY packages/*/package.json ./packages/*/

# Instalasi dependensi dengan --frozen-lockfile untuk konsistensi
RUN pnpm install --frozen-lockfile

# Builder stage - membuat aplikasi
FROM base AS builder
WORKDIR /app
# Copy hasil dari stage deps
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/apps/app1/node_modules ./apps/app1/node_modules
# Copy source code
COPY . .
# Build aplikasi spesifik
RUN pnpm --filter app1 build

# Production stage - hanya berisi hasil build
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
# Copy hasil build dari stage builder
COPY --from=builder /app/apps/app1/.next/standalone ./
COPY --from=builder /app/apps/app1/public ./apps/app1/public
COPY --from=builder /app/apps/app1/.next/static ./apps/app1/.next/static

EXPOSE 3000
CMD ["node", "server.js"]