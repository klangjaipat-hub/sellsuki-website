# Stage 1 - build
FROM node:14.10.0 as builder


RUN mkdir /app
WORKDIR /app
COPY package*.json ./
RUN  npm install
COPY . .
RUN npm run build

# Stage 2 - production
FROM node:14.10.0
WORKDIR /app
ADD package.json .
ADD nuxt.config.js .
COPY --from=builder /app/.nuxt ./.nuxt
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/static ./static
COPY --from=builder /app/plugins ./plugins
COPY --from=builder /app/server ./server
COPY --from=builder /app/server-middleware ./server-middleware
COPY --from=builder /app/locales ./locales

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
CMD ["npm", "start"]
EXPOSE 80