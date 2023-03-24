## Зависимости

 - nodejs 12+
 - npm 7+

## Установка

```bash
npm install
```

## Настройка маршрутизации

Прокси-сервер предоставляет возможность настройки маршрутизации на основе URL с использованием файла 
конфигурации `proxy.config.js` или переменных окружения.

### Файл конфигурации

Создайте файл `proxy.config.js` в корневом каталоге проекта и импортируйте 
функцию `urlRoutingFunction` из файла `routing.js`. 
Затем экспортируйте результат вызова `urlRoutingFunction` с переданным объектом маршрутизации.

Пример содержимого файла `proxy.config.js`:

```javascript
const { urlRoutingFunction } = require("./routing");

module.exports = urlRoutingFunction({
  "/foo": "127.0.0.1:28052",
  "/bar": "127.0.0.1:28053"
});
```

Объект маршрутизации определяет пары "ключ-значение", 
где ключ – это URL, а значение – строка "host:port".

### Переменные окружения

Если файл `proxy.config.js` не найден, прокси-сервер будет использовать значения переменных 
окружения `ORIGIN_HOST` и `ORIGIN_PORT` для определения целевого хоста и порта.

Пример установки переменных окружения:

```bash
export ORIGIN_HOST="127.0.0.1"
export ORIGIN_PORT="28052"
```

## Запуск прокси

```
npm run start
```

## Сборка в docker-образ

```
docker build --tag pproto-web-proxy .
```
