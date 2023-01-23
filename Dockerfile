FROM node:17.4-alpine as builder
COPY . .
RUN npm i
RUN npm run build
# RUN npm test

FROM node:17.4-alpine
COPY --from=builder /lib ./lib/
COPY package.json ./
RUN npm i --prod
ENTRYPOINT ["npm", "start"]