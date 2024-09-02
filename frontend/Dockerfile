# Use Node.js image as the base
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (if present)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Svelte app
RUN npm run build

# Expose the port (if you are serving the Svelte app directly)
EXPOSE 5000

# Command to run the app in development mode (for production, you would serve the built files)
CMD ["npm", "run", "dev"]