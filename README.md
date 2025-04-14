## Educational portal
## О проекте

Educational portal - это веб-приложение, предназначенное для повышения эффективности работы работниками вузов и обучающимися. В его основе лежат Node.js с использованием Express.

## Стек

### Backend:

- Node.js
- Express
- TypeScript
- MongoDB (Mongoose)
  
## Установка и запуск

### Требования

- Node.js
- Yarn
- MongoDB

### Установка зависимостей

```bash
# Установка всех зависимостей
yarn install
```

### Создать файл .env в корне проекта и прописать следующее

```bash
PORT=port
MONGO_URI=mongodb://localhost:port/mydb
JWT_SECRET=your_jwt_secret
```

### Запуск

```bash
yarn dev
```
