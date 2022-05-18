## HTML & CSS by Jon Ducket

### Chapter 15: Layout

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

**Other References**

  - [CSS Zen Garden](csszengarden.com)
  - [A History of CSS](https://24ways.org/2019/a-history-of-css-through-15-years-of-24-ways/)