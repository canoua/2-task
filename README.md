<details>
  <summary> 
    <h1>Структура проекта</h1> 
  </summary>
  src

- assets/
- - fonts/
- - images/
- - tasks/
- components/
- - buttons/
- - cards/
- - checkbox/
- - dropdown/
- - footer/
- - header/
- - information/
- - input-card/
- - list/
- - logo/
- - menu/
- - pagination/
- - radiobuttons/
- - range-slider/
- - review/
- - stars-rating/
- - text-field/
- - toggle/
- - components.scss
- layouts/
- - layot-app.pug
- - layot-index.pug
- - layot-ui.pug
- pages/
- - app/
- - - landing/
- - - room-details/
- - - search/
- - - sign-in/
- - - sign-up/
- - - pages.scss
- - ui /
- - - cards/
- - - colors-types/
- - - form-elements/
- - - headers-footers/
- - - ui.scss
- script/
- - libs/
- - modules/
- - pages/
- - ap.js
- styles/
- - default/
- - libs/
- commons.scss
- index.js
- index.pug
- index.scss
</details>

## Информация о проекте:

1. Главная страница - index.pug в корне папки src
2. Стили импортируются в index.js для того, чтобы webpack сбилдил все. В webpack.config.js указываю index.js как входной
3. assets - ВСЕ изображения, шрифты
4. картинки в svg формате старался не использовать, т.к. не разобрался как разделять изображения и стили(svg)
5. nouislider(библиотека для ползунка) - стили удалось подгрузить только локально
6. commons.scss - собирает стили всего проекта
7. использую БЭМ(nested) при организации структуры проекта
8. шрифты, свг-иконки сделал инлайном(для билда)

## Примечание по верстке страниц:

- colors-types.pug
