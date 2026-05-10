# Структура проекта

src

- assets/
- - fonts/
- - images/
- - styles/
- - - default/
- - - libs/
- layout/
- - footer/
- - header/
- - modules/
- - layout.scss
- modules/
- - buttons/
- - cards/
- - checkbox/
- - dropdown/
- - information/
- - input-card/
- - list/
- - pagination/
- - radiobuttons/
- - range-slider/
- - review/
- - text-field/
- - toggle/
- - modules.scss
- pages/
- - landing/
- - room-details/
- - search/
- - sign-in/
- - sign-up/
- - pages.scss
- script/
- - modules/
- - ap.js
- ui-pages/
- - cards/
- - colors-types/
- - form-elements/
- - headers-footers/
- - ui.scss
- commons.scss
- index.js
- index.pug
- index.scss

## Информация о проекте:

1. Главная страница - index.pug в корне папки src
2. Стили импортируются в index.js для того, чтобы webpack сбилдил все. В webpack.config.js указываю index.js как входной
3. assets - ВСЕ изображения, шрифты, дефолтные стили, либы
4. картинки в svg формате старался не использовать, т.к. не разобрался как разделять изображения и стили(svg)
5. nouislider(библиотека для ползунка) - стили удалось подгрузить только локально
6. commons.scss - собирает стили всего проекта
7. использую БЭМ(nested) при организации структуры проекта
8. шрифты, свг-иконки сделал инлайном(для билда)

## Примечание по верстке страниц:

- colors-types.pug
