Grum's CSS notes
-------------------------------------------

**Contents**

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [The Box Model](#the-box-model)
    - [`height`, `width`, `padding`, `borders`, and `margins`](#height-width-padding-borders-and-margins)
- [Changing the Box Model from the default content-box to border-box](#changing-the-box-model-from-the-default-content-box-to-border-box)
        - [box-sizing [content-box (default), border-box]](#box-sizing-content-box-default-border-box)
- [Display and Positioning](#display-and-positioning)
    - [Layout - control the positioning of elements on a web page.](#layout---control-the-positioning-of-elements-on-a-web-page)
        - [position: [static (default), relative, absolute, fixed];](#position-static-default-relative-absolute-fixed)
        - [z-index: [int];](#z-index-int)
        - [display: [inline, block, inline-block];](#display-inline-block-inline-block)
        - [float: [left, right];](#float-left-right)
        - [clear: [left, right, both];](#clear-left-right-both)
- [Colors](#colors)
    - [color and background-color: [ #, rgb, hsl, rgba, hsla];](#color-and-background-color---rgb-hsl-rgba-hsla)
    - [Solid colors - keywords, #, rgb, hsl](#solid-colors---keywords--rgb-hsl)
    - [Alpha (aka opacity) - rgba and hsla](#alpha-aka-opacity---rgba-and-hsla)
- [Typography](#typography)

<!-- /code_chunk_output -->

---

# The Box Model
## `height`, `width`, `padding`, `borders`, and `margins`
The five properties of the box model are: `height` and `width`, `padding`, `borders`, and `margins`.

* The box model comprises a set of properties used to create space around and between HTML elements.

    *   [<img src="./Codecademy-The_Box_Model_1-overview.jpg" alt="drawing" width="250"/>](Codecademy-The_Box_Model_1-overview.jpg)


Property | Effect
------- | -------
`height` `width` | Sets content area in `px` or `%`.
`border` | Surrounds the content area and padding of an element. The color, style, and thickness of a border can be set with CSS properties. <br>E.g. `border: 1px solid #eb6536` sets line width, type of line, and color of line
`padding` | Sets the `px` spacing between the content area and the border. It can be set in pixels or percent.
`margin` | Sets the `px` spacing outside of an element's border; <ul><li>**`margin: 0 auto`** sets no top-bottom margins, but **horizontally centers** an element inside of its parent content area, if it has a width.</li><li>**Horizontal** margins add, so the total space between the borders of adjacent elements is equal to the sum of the right margin of one element and the left margin of the adjacent element. </li><li>**Vertical** margins collapse, so the space between vertically adjacent elements is equal to the larger margin.</li><li>[<img src="./Codecademy-Virtual_Margins_Collapse.jpg" alt="drawing" width="150"/>](Codecademy-Virtual_Margins_Collapse.jpg)</li></ul>
`overflow` | property can be set to `display`, `hide`, or `scroll`, and dictates how HTML will render content that overflows its parent's content area.
`visibility` |property can hide or show elements.
**WARNING**: If the element **`display`** defaults, or is set, to **`inline`**, causes the element to be as small as possible and hence partially or fully negates any `height`, `width`, `padding` and `margin` settings.



# Changing the Box Model from the default content-box to border-box

### box-sizing [content-box (default), border-box]
The box-sizing property controls the box model used by the browser;

Setting | Effect | Picture
------- | :-------: | :----:
`content-box` | Box dimensions are affected by border thickness <br>and padding, as they are external to the box and <br>hence add to the content dimensions. | [<img src="./Codecademy-The_Box_Model_2-default_acutal_rendered_width.jpg" alt="drawing" width="150"/>](Codecademy-The_Box_Model_2-default_acutal_rendered_width.jpg)
`border-box` | Box dimensions is not affected by border thickness<br> or padding, instead they go into the box. | [<img src="./Codecademy-The_Box_Model_3-box-sizing_border-box.jpg" alt="drawing" width="150"/>](Codecademy-The_Box_Model_3-box-sizing_border-box.jpg)



# Display and Positioning

## Layout - control the positioning of elements on a web page.
### position: [static (default), relative, absolute, fixed];
Setting | Effect
------- | -------
`static` | Default value. Elements render in order, as they appear in the document flow
`relative` | Positioned relative to its default position on the page.
`absolute` | Positioned relative to its first positioned (not static) ancestor element. It can be pinned to any part of the web page, but the element will still move with the rest of the document when the page is scrolled.
`fixed` | Position pinned to any part of the web page. The element will remain in view no matter what. <br>If an element's `position` is `fixed`; <ul><li>The element may be obscured underneath others, which `z-index: <a_suitably_big_int>` can bring the element forward. Other element(s) that are now underneath may need to have their position altered to be visiable again.  e.g. Set their `position:relative`, and then push them down using `top:<the_the_height_of_the_obscuring_element>px`.</li><li>The element may shrink, which `width: 100%` can address, provided the `display` for the element is not `inline`.</li></ul>
`sticky` | Positioned relative to its default position on the page until its containing block crosses a specified threshold (such as setting top to value other than auto) within its flow root (or the container it scrolls within), at which point it is treated as "stuck" until meeting the opposite edge of its containing block.

### z-index: [int];
* The `z-index` of an element specifies how far back or how far forward an element appears on the page when it overlaps other elements. 
* The higher the number, the closer to the top of the stack
* WARNING: z-index will not function if position either defaults, or is set to, static.

### display: [inline, block, inline-block];
* The display property allows you control how an element flows vertically and horizontally a document.

Setting | Effect
------- | -------
`inline` | elements take up the minimum size required to contain the contents and cannot be altered in size with the `height` or `width` properties. See [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements) for more.
`block` | elements fill the entire width of the page by default, but their width property can also be set. Unless otherwise specified, they are the height necessary to accommodate their content. The main block-by-default elements are `<h1> through <h6>, <p>, <div> and <footer>`, see [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements) for more.
`inline-block` | elements can also appear next to each other, can have set `width` and `height`, and do not take up their entire container width.

### float: [left, right];
* Move elements as far `left` or `right` as possible.
* Floated elements must have a `width` specified, otherwise the element will assume the full width of its containing element, and changing the float value will not yield any visible results.
* The float property can also be used to float multiple elements at once. However, when multiple floated elements have different heights, it can affect their layout on the page. Specifically, elements can "bump" into each other and not allow other elements to properly move the left or right.

### clear: [left, right, both];

* When multiple `floated` elements have different heights, they can "bump" into each other and not allow other elements to properly move to the left or right.

* The `clear` property specifies how elements should behave when they bump into each other on the page. 

Setting | Effect
------- | -------
`left` | the left side of the element will not touch any other element within the same containing element.
`right` | the right side of the element will not touch any other element within the same containing element.
`both` | neither side of the element will touch any other element within the same containing element.
`none` | the element can touch either side.

# Colors
## color and background-color: [ #, rgb, hsl, rgba, hsla];

Property | Effect
------- | -------
color [ #, rgb, hsl, rgba, hsla]<br>background [ #, rgb, hsl, rgba, hsla] | Sets element's foreground & backround respectively<br> as per schemes below.

## Solid colors - keywords, #, rgb, hsl
Setting | Effect
------- | ------
color keyword | See list [here](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#Color_keywords).  NB: Each color keyword has an equivalent #hex rgb value.
\#hhhhhh | 6 or 3 digit hexadecimal RGB color.  3 digit represents 6 digit where each pair is a double.  E.g. #00FFFF = #0FF
rgb(ddd, ddd, ddd) | Specifies RGB values as 0-255 decimals
hsl(ddd, ddd%, ddd%) | [<img src="./color_wheel_4_background.svg" alt="drawing" width="250" height="250"/>](./color_wheel_4_background.svg)<ul><li>0-360º Hue. As per color wheel. 0/360 = Red, 120 = green, 240 = blue.</li><li>0-100% Saturation.  Less is toward center of wheel (greyer) and more moves to perimeter (richer)</li><li>0-100% Lightness. 50% = normal, 0% = black, 100% = white</li></ul>

* See [RGB to HSL color conversion](https://www.rapidtables.com/convert/color/rgb-to-hsl.html).

## Alpha (aka opacity) - rgba and hsla
Setting | Effect
------- | -------
rgba(ddd, ddd, ddd, 0-1)<br>hsla(ddd, ddd%, ddd%, 0-1) | <ul><li>The first three arguments specify the color as per rgb & hsl above.</li><li>Opacity is set by the last digit.  0 = fully transparent,  1 = opaque.</li></ul>

# Typography

| Typography property | Arguments | Notes
| ------------------- | --------- | ------
 font-family | font-name | Use double quotes "" if the name contains spaces
 font-weight | `bold`, `normal`, 100-900 in multiples of 100 | 400 is usually default, 700 is bold, 300 is light
 font-style | `italic`, `normal` (default)
 word-spacing | `decimal` | Default is 0.25em.  NB: The preffered unit is `em` .
 letter-spacing | `decimal` | Aka 'kerning'. NB: The preffered unit is `em` .
 text-transform | `uppercase`
 text-align | `left`, `center`, `right`
 line-height | `d.d`, `unit` | <ul><li>`d.d` is a unitless absolute value that will compute the line height as a ratio of the font size</li><li>`unit` can be any valid CSS unit, such as pixels, percents, ems, or rems.</li><li>[<img src="./Codecademy-Line_Height_Anatomy.jpg" alt="drawing" width="400"/>](./Codecademy-Line_Height_Anatomy.jpg)</li></ul>

 

