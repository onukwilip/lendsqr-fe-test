
# Stage 1: Build the React app
FROM node:20-slim AS builder
WORKDIR /app
COPY package.json ./
RUN npm install --force
COPY . .
RUN npm run build

# Stage 2: Use the slimmest Ubuntu image, install Node.js, npm, serve, and serve the build
FROM ubuntu:24.04
WORKDIR /app

# Install curl, Node.js, npm
RUN apt-get update && \
	apt-get install -y curl && \
	curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
	apt-get install -y nodejs && \
	npm install -g serve && \
	apt-get clean && rm -rf /var/lib/apt/lists/*

# Copy build from builder stage
COPY --from=builder /app/build ./build

EXPOSE 80
CMD ["serve", "-s", "build", "-l", "80"]