сборка для нескольких страниц https://github.com/webdiscus/pug-plugin#example-pug-in-js-compile

Сделать:

alias: {
"@": path.resolve(**dirname, 'src/'),
"@data": path.resolve(**dirname, 'src/data/'),
},

- itemQuantityDropdown не работает должным образом, попробовать на vanilla js
- на входной странице добавить картинки страниц

  Оптимизация

- шрифты
- стили
- картинки
- убрать лишнее в package.json

Информация о проекте:

1. Главная страница - index.pug в корне папки src
2. Стили мы импортируем в index.js для того, чтобы webpack сбилдил все. В webpack.config.js мы указываем index.js как входной
3. assets - ВСЕ изображения, шрифты, дефолтные стили, либы
4. svg файлы подключаются с помощью include
5. nouislider - стили удалось подгрузить только локально
6. commons.scss - собирает стили всего проекта

Готово:

- colors-type

Изучить:

1. Почему путь из checkbox.scss к иконке check-mark прописывается от файла commons.scss?
