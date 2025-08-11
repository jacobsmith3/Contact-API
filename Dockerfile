<<<<<<< HEAD
# Use official Node.js LTS image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your server runs on (default: 5001)
EXPOSE 5001

# Start the server
ENV PORT=5001
CMD ["node", "server.js"]
=======
# Use official Node.js LTS image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your server runs on (default: 5001)
EXPOSE 5001

# Start the server
ENV PORT=5001
CMD ["node", "server.js"]
>>>>>>> cdf2ca0 (initial Commit)
