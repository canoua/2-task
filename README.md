сборка для нескольких страниц https://github.com/webdiscus/pug-plugin#example-pug-in-js-compile

Сделать:

alias: {
"@": path.resolve(**dirname, 'src/'),
"@data": path.resolve(**dirname, 'src/data/'),
},
19.02

- на входной странице добавить картинки страниц

- вывод через цикл в pug файлах(где нужно: списки)/сделать через миксины
- webpack.config.js - страницы pug(надо ли?)
- room-details - после всего

Информация о проекте:

1. Главная страница - index.pug в корне папки src
2. Стили мы импортируем в index.js для того, чтобы webpack сбилдил все. В webpack.config.js мы указываем index.js как входной
3. assets - ВСЕ изображения, шрифты, дефолтные стили, либы
4. svg файлы подключаются с помощью include
5. nouislider - стили удалось подгрузить только локально
6. commons.scss - собирает стили всего проекта

Изучить:

1. Почему путь из checkbox.scss к иконке check-mark прописывается от файла commons.scss?
