сборка для нескольких страниц https://github.com/webdiscus/pug-plugin#example-pug-in-js-compile

Сделать:

alias: {
"@": path.resolve(**dirname, 'src/'),
"@data": path.resolve(**dirname, 'src/data/'),
},

- страница form-elements(не отображается иконка checkbox), переделать svg на include

- разобраться с путями картинок, подключениями миксинов
- вывод через цикл в pug файлах
- webpack.config.js - страницы pug

-room-details - после всего

Информация о проекте:

1. Главная страница - index.pug в корне папки src
2. Стили мы импортируем в index.js для того, чтобы webpack сбилдил все. В webpack.config.js мы указываем index.js как входной
3. assets - ВСЕ изображения, шрифты, дефолтные стили, либы
4. svg файлы подключаются с помощью include
