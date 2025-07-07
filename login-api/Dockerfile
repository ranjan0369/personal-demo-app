# Use Node.js LTS Alpine image
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source files
COPY . .

# Expose port
EXPOSE 5000

# Start the app
# CMD ["npm", "start"]
# CMD ["sleep", "infinity"]