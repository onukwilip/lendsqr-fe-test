FROM node:gallium
WORKDIR /app
RUN npm init -y
RUN npm i -g serve
COPY . .
EXPOSE 3000
CMD ["serve", "-s", "build"]