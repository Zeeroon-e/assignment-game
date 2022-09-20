# Hämta Linux + Node
FROM node:lts-alpine

# Skapa en mapp "app" inuti Docker image
WORKDIR /app

# Kopiera package.json -> in till mappen "app" i image
COPY package.json package-lock.json ./

#installera npm-paket

RUN npm installera

# Kopiera över all koden från akutell mapp på datorn -> till /app i image
COPY . .

# Bygg projektet
# Statiska filer hamnar i /app/dist
RUN npm run build
# Gör port 8080 synligt utåt
EXPOSE 8080

#starta en webbserver som serverar de statiska filerna i /app/dist
# alternativ server : Nginx
CMD ["http-server", "dist"]

