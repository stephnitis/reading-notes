## HTML & CSS by Jon Ducket

### Chapter 15: Layout

- `<div>` elements are often used as containing elements to group together sections of a page.
- Browsers display pages in normal flow unless you specify relative, absolute, or fixed positioning.
- The `float` property moves content to the left or right of the page and can be used to create multi-column layouts. (Floated items require a defined width).
- Pages can be fixed width or liquid (stretchy) layouts.
- Designers keep pages within 960-1000 pixels wide, and indicate what the site is about within the top 600 pixels (to demonstrate its relevance without scrolling).
- Grids help create professional and flexible designs.
- CSS Frameworks provide rules for common tasks.
- You can include multiple CSS files in one page.

### [Learn CSS](https://web.dev/learn/css/layout/)

- The `display` property does two things. The first thing it does is determine if the box it is applied to acts as inline or block.
- Inline elements behave like words in a sentence. They sit next to each other in the inline direction. Elements such as `<span>` and `<strong>`, which are typically used to style pieces of text within containing elements like a `<p>` (paragraph), are inline by default. They also preserve surrounding whitespace.
- Block elements don't sit alongside each other. They create a new line for themselves. Unless changed by other CSS code, a block element will expand to the size of the inline dimension, therefore spanning the full width in a horizontal writing mode. The margin on all sides of a block element will be respected.
-  The `display` property also determines how an element's children should behave. For example, setting the `display` property to `display: flex` makes the box a block-level box, and also converts its children to flex items. This enables the flex properties that control alignment, ordering and flow.
- Flexbox is a layout mechanism for one-dimensional layouts. Layout across a single axis, either horizontally or vertically. By default, flexbox will align the element's children next to each other, in the inline direction, and stretch them in the block direction, so they're all the same height.
- Items will stay on the same axis and not wrap when they run out of space. Instead they will try to squash onto the same line as each other. This behaviour can be changed using the `align-items`, `justify-content` and `flex-wrap` properties.
- Flexbox also converts the child elements to be **flex items**, which means you can write rules on how they behave inside a flex container. You can change alignment, order and justification on an individual item. You can also change how it shrinks or grows using the `flex` property.
- Grid enables you to write layout rules on an element that has `display: grid`, and introduces a few new primitives for layout styling, such as the `repeat()` and `minmax()` functions. One useful grid unit is the `fr` unit—which is a fraction of remaining space
- The `grid-row` and `grid-column` properties instruct the first element in the grid to span to the start of the fourth column, from the first column, then span to the third row, from the first row.
- Using `inline-block` gives you a box that has some of the characteristics of a block-level element, but still flows inline with the text.
- The `float` property instructs an element to "float" to the direction specified. You can instruct an element to float `left`, `right` or `inherit`.
- With CSS multicolumn, you can split into multiple columns to help with long lists of elements, such as a list of all of the countries of the world, which can result in a lot of scrolling and time wasted for a user, as well as excess whitespace on the page
- Instead of setting the number of columns that the content is split into, you can also define a minimum desired width, using `column-width`. As more space is made available in the viewport, more columns will automatically be created and as space is reduced, columns will also reduce.
- The position property changes how an element behaves in the normal flow of the document, and how it relates to other elements. The available options are `relative`, `absolute`, `fixed` and `sticky` with the default value being `static`.
- When you set `position` to `absolute`, it breaks the element out of the current document flow. This means two things:
  1. You can position this element wherever you like, using `top`, `right`, `bottom` and `left` in its nearest relative parent.
  2. All of the content surrounding an absolute element reflows to fill the remaining space left by that element.
- An element with a `position` value of `fixed` behaves in a similar way to `absolute`, with its parent being the root `<html>` element. Fixed position elements stay anchored from the top left based on the top, right, bottom and left values that you set.
- You can achieve the anchored, fixed aspects of `fixed` and the more predictable document flow-honoring aspects of `relative` by using `sticky`. With this value, as the viewport scrolls past the element, it stays anchored to the top, right, bottom and left values that you set.


**Other References**

  - [CSS Zen Garden](csszengarden.com)
  - [A History of CSS](https://24ways.org/2019/a-history-of-css-through-15-years-of-24-ways/)