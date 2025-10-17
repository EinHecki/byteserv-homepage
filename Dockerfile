# Stage 1: Development Dependencies
FROM node:20-alpine AS development-dependencies-env
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install all dependencies
RUN npm ci && npm cache clean --force

# Stage 2: Production Dependencies
FROM node:20-alpine AS production-dependencies-env
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install only production dependencies
RUN npm ci --omit=dev && npm cache clean --force

# Stage 3: Build
FROM node:20-alpine AS build-env
WORKDIR /app

# Copy package files and node_modules from dev stage
COPY package.json package-lock.json ./
COPY --from=development-dependencies-env /app/node_modules ./node_modules

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Stage 4: Production Runtime
FROM node:20-alpine
WORKDIR /app

# Set production environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 reactrouter

# Copy package files
COPY --chown=reactrouter:nodejs package.json package-lock.json ./

# Copy production dependencies
COPY --from=production-dependencies-env --chown=reactrouter:nodejs /app/node_modules ./node_modules

# Copy built application
COPY --from=build-env --chown=reactrouter:nodejs /app/build ./build

# Copy public assets
COPY --from=build-env --chown=reactrouter:nodejs /app/public ./public

# Switch to non-root user
USER reactrouter

# Expose port
EXPOSE 3000

# Health check for container orchestration
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000', (res) => { process.exit(res.statusCode === 200 ? 0 : 1) })"

# Start the application
CMD ["npm", "run", "start"]