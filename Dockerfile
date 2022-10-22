# Hämta Linux + Node
FROM node:lts-alpine

# Skapa en mapp "app" inuti Docker image
WORKDIR /app

RUN npm install -g http-server
# Kopiera package.json -> in till mappen "app" i image
# COPY package.json package-lock.json ./
COPY package*.json ./
#installera npm-paket

RUN npm install

# Kopiera över all koden från akutell mapp på datorn -> till /app i image
COPY . .

# Bygg projektet
# Statiska filer hamnar i /app/dist
RUN npm run build
# Gör port 8080 synligt utåt
EXPOSE 8080

#starta en webbserver som serverar de statiska filerna i /app/dist
# alternativ server : Nginx
CMD ["http-server", "dist", "-p 8080"]
# skapar en image
# docker build -t assignment-game:latest .
# skapar en container i respektive port
# docker run --name assignment-game-container -d -p 8080:8080 assignment-game:latest

