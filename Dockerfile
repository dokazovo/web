FROM node:18-alpine as build
WORKDIR /usr/app
COPY . /usr/app
RUN npm ci
RUN npm run build

FROM nginx:alpine
COPY ./nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/app/build /usr/share/nginx/html