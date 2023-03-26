FROM ubuntu:22.04 as builder
WORKDIR /build
RUN apt-get update && apt-get install -y npm
RUN npm install -g @vue/cli
COPY ./app/package.json ./
RUN npm install 
COPY ./app/ ./
RUN npm run build


FROM nginx:stable
COPY --from=builder /build/dist /usr/share/nginx/html

