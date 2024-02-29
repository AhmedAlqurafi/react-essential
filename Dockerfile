FROM node:21-alpine as builder

WORKDIR /app
COPY package.json ./package.json
RUN yarn 
COPY . .
RUN yarn run build

FROM nginx
# remove existing files from nginx directory
ENV NODE_ENV production
# remove existing files from nginx directory
RUN rm -rf /usr/share/nginx/html/*
# copy built assets from 'builder' stage
COPY --from=builder /usr/src/next-nginx/out /usr/share/nginx/html
# add nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf
# expose port 80 for nginx
EXPOSE 80
# start nginx
CMD ["nginx", "-g", "daemon off;"]



