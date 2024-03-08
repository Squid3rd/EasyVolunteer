FROM node:18-alpine AS base

# 1. Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /usr/src/app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json ./
RUN npm ci

# Stage : ทำการ build website และ ทำการ generate prisma client
# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /usr/src/app
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY . .
RUN npx prisma generate
RUN npm run build

# Stage : ทำการ run website โดยใช้ built file จาก stage ก่อนหน้า
FROM base AS runner
WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/prisma ./prisma
# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder /usr/src/app/.next/standalone ./
COPY --from=builder /usr/src/app/.next/static ./.next/static


# More environment variables can be added here!
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1
# กำหนด Timezone ให้กับ Container
RUN apk add --no-cache tzdata
ENV TZ=Asia/Bangkok
ENV NODE_ENV production

EXPOSE 3000

ENV PORT 3000

CMD ["sh", "-c", "npx prisma migrate deploy; node server.js"]