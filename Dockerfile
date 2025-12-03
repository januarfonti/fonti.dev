# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json yarn.lock ./

# Install dependencies with yarn
RUN yarn install --frozen-lockfile

# Copy source code
COPY . .

# Build the Next.js application
RUN yarn build

# Production stage
FROM node:20-alpine AS runner

WORKDIR /app

# Install all dependencies (TypeScript needed for next.config.ts transpilation)
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --production=false

# Copy built application from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/package.json ./

# Copy content-collections configuration
COPY content-collections.ts ./

# Set environment to production
ENV NODE_ENV=production
ENV PORT=3000

# Expose port
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]
