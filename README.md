сборка для нескольких страниц https://github.com/webdiscus/pug-plugin#example-pug-in-js-compile

Сделать:

- нэйминг классов по бэм
- на входной странице добавить картинки страниц
- стили(минификация)
- шрифты https://tocode.ru/courses/nastroika-webpack4/podkluchenie-shriftov/
- картинки(минификация)
- убрать лишнее в package.json: mini-css-extract-plugin(убрать позже)
- form-elements(page, просто стили)

после 26.02

- itemQuantityDropdown не работает должным образом, попробовать на vanilla js

Информация о проекте:

1. Главная страница - index.pug в корне папки src
2. Стили импортируются в index.js для того, чтобы webpack сбилдил все. В webpack.config.js указываю index.js как входной
3. assets - ВСЕ изображения, шрифты, дефолтные стили, либы
4. картинки в svg формате старался не использовать, т.к. не разобрался как разделять изображения и стили(svg)
5. nouislider - стили удалось подгрузить только локально
6. commons.scss - собирает стили всего проекта
7. использую БЭМ(nested) при организации структуры проекта

Готово:

- colors-type

Изучить:

1. Почему путь из checkbox.scss к иконке check-mark прописывается от файла commons.scss?
