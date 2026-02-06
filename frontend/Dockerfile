FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install

COPY vite.config.ts tsconfig.json tsconfig.node.json index.html ./
COPY src ./src
COPY public ./public
COPY .eslintrc.cjs ./

EXPOSE 5173

CMD ["npm", "run", "dev"]
