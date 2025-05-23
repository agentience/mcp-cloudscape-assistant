# Use Node.js 24.0.1 as the base image for better ESM support, performance, and security
FROM node:24.0.1-alpine3.20

# Set working directory
WORKDIR /app

# Copy all project files first
COPY . .

# Install dependencies without running prepare script
RUN npm ci --ignore-scripts

# Build the project manually
RUN npm run clean && npx tsc -p tsconfig.build.json && node -e "require('fs').cpSync('src/components/data', 'dist/components/data', {recursive: true}); require('fs').chmodSync('dist/server.js', '755');"

# Expose the port that the server will run on
EXPOSE 3005

# Set environment variables for SSE transport
ENV PORT=3005
ENV BIND=0.0.0.0

# Start the server with SSE transport
CMD ["npm", "start", "--", "--transport", "sse"]