FROM node:16 as build

WORKDIR /usr/local/app

COPY ./ /usr/local/app/

RUN npm ci

RUN npm run build

FROM nginx:latest

COPY --from=build /usr/local/app/dist/frontend/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80