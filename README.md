## Зависимости

 - nodejs 12+
 - npm 7+

## Установка

```bash
npm install
```

## Запуск прокси

```
npm run start
```

Переменные окружения:
 - ORIGIN_PORT - Порт, на котором запущен проксируемый TCP-сервер, по умолчанию 28052.
 - ORIGIN_HOST - Хост TCP-сервера, по умолчанию localhost.
 - PROXY_PORT - Порт прокси, на котором будет слушать WebSocket, по умолчанию 9000.
 - PROXY_HOST - Хост прокси, по умолчанию localhost.
 - SOCKET_TIMEOUT - Таймаут установки соединения с TCP-сервером, в миллисекундах, по умолчанию 1000 мс.

# Сборка в docker-образ

```
docker build --tag pproto-web-proxy .
```
