FROM node:17 as builder
WORKDIR /workspace
COPY package.json tsconfig.json yarn.lock ./
RUN [ "yarn" ]
COPY src ./src
COPY public ./public
RUN [ "yarn", "build" ]

FROM nginx
COPY --from=builder /workspace/build /usr/share/nginx/html