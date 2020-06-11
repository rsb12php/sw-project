# @Author Raquel Barra

# Estagio 1 - Será responsavel em construir a aplicação
FROM node:latest as node
WORKDIR /app
COPY package.json /app/
RUN npm install -g @angular/cli@7
RUN npm i
COPY ./ /app/
RUN npm run build

# Estagio 2 - Será responsavel por expor a aplicação
FROM nginx:alpine
LABEL maintainer="Raquel Barra rsb.1296@gmail.com"
EXPOSE 80
COPY --from=node /app/dist/events /usr/share/nginx/html

# para construi a imagem use o comando npm run docker:build
# para mandar a imagem para o repositorio use o comando npm run docker:push