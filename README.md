Сделать:

до 11.03

- рефакторинг структуры
- cards-ui-pages
- form-elements(page, просто стили)

после 11.03

- itemQuantityDropdown попробовать на vanilla js
  настроить прод
- шрифты https://tocode.ru/courses/nastroika-webpack4/podkluchenie-shriftov/
- картинки(минификация)

Информация о проекте:

1. Главная страница - index.pug в корне папки src
2. Стили импортируются в index.js для того, чтобы webpack сбилдил все. В webpack.config.js указываю index.js как входной
3. assets - ВСЕ изображения, шрифты, дефолтные стили, либы
4. картинки в svg формате старался не использовать, т.к. не разобрался как разделять изображения и стили(svg)
5. nouislider - стили удалось подгрузить только локально
6. commons.scss - собирает стили всего проекта
7. использую БЭМ(nested) при организации структуры проекта

Готово:

- page: sign-in, sign-up
- ui-pages: headers-footers, colors-type
- menu-list

Изучить:

1. Почему путь из checkbox.scss к иконке check-mark прописывается от файла commons.scss?
