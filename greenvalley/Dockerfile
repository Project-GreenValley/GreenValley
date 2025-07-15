FROM node:18-alpine

RUN apk update && apk add --no-cache openssl
RUN mkdir -p /app

WORKDIR /app

COPY . .

RUN npm install

COPY prisma ./prisma/
RUN npx prisma generate
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]