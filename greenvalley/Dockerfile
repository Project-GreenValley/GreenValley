FROM node:18-alpine AS base

FROM base AS deps

RUN apk update && apk add --no-cache openssl
WORKDIR /app


COPY package.json package-lock.json ./
COPY prisma ./prisma 
RUN npm ci
RUN npx prisma generate


FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG REDIS_URL='http://dummy-redis'
ARG DATABASE_URL='postgresql://readonly:readonly@public-host/safe_build_db'
ARG NEXTAUTH_SECRET='placeholder-secret'

# Make them available during build
ENV REDIS_URL=$REDIS_URL
ENV DATABASE_URL=$DATABASE_URL
ENV NEXTAUTH_SECRET=$NEXTAUTH_SECRET

RUN npm run build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

RUN mkdir .nextjs
RUN chown nextjs:nodejs .nextjs

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=node /app/prisma ./prisma
COPY --from=builder --chown=node /app/public ./public

USER nextjs

EXPOSE 3000

ENV PORT=3000

CMD ["node", "server.js"]