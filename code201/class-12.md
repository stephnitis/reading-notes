- Chart.js is a JavaScript plugin that uses HTML5’s canvas element to draw the graph onto the page.

[Chart.js API](https://www.webdesignerdepot.com/2013/11/easily-create-stunning-animated-charts-with-chart-js/)
[More Chart References](https://www.chartjs.org/docs/latest/)

### [Basic Usage of canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_usage)

- the `<canvas>` element has only two attributes, `width` and `height.` These are both optional and can also be set using DOM properties.
- The `<canvas>` element differs from an `<img>` tag in that, like for `<video>`, `<audio>`, or `<picture>` elements, it is easy to define some fallback content, to be displayed in older browsers not supporting it
- The `<canvas>` element creates a fixed-size drawing surface that exposes one or more rendering contexts, which are used to create and manipulate the content shown
- The `<canvas>` element has a method called `getContext()`, used to obtain the rendering context and its drawing functions. `getContext()` takes one parameter, the type of context.

### [Drawing Shapes with Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)

- Unlike SVG, `<canvas>` only supports two primitive shapes: rectangles and paths (lists of points connected by lines). All other shapes must be created by combining one or more paths:
  - `fillRect(x, y, width, height)` draws a filled rectancle
  - `strokeRect(x, y, width, height)` draws a rectangular outline
  - `clearRect(x, y, width, height)` Clears the specified rectangular area, making it fully transparent.
- The `fillRect()` function draws a large black square 100 pixels on each side. The `clearRect()` function then erases a 60x60 pixel square from the center, and then `strokeRect()` is called to create a rectangular outline 50x50 pixels within the cleared square.
- A path is a list of points, connected by segments of lines that can be of different shapes, curved or not, of different width and of different color. A path, or even a subpath, can be closed. To make shapes using paths, we take some extra steps:
  1. First, you create the path.
  2. Then you use drawing commands to draw into the path.
  3. Once the path has been created, you can stroke or fill the path to render it.
- The first step to create a path is to call the `beginPath()`.
- The second step is calling the methods that actually specify the paths to be drawn. We'll see these shortly.
- The third, and an optional step, is to call `closePath()`. This method tries to close the shape by drawing a straight line from the current point to the start.
- `moveTo(x, y)` Moves the pen to the coordinates specified by x and y.
- For drawing straight lines, use the `lineTo()` method.
- To draw arcs or circles, we use the `arc()` or `arcTo()` methods.

### [Applying Styles and Color](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)

- `fillStyle = color` Sets the style used when filling shapes.
- `strokeStyle = color` Sets the style for shapes' outlines.
- `globalAlpha = transparencyValue` Applies the specified transparency value to all future shapes drawn on the canvas. The value must be between 0.0 (fully transparent) to 1.0 (fully opaque). This value is 1.0 (fully opaque) by default.
- The line width is the thickness of the stroke centered on the given path. In other words, the area that's drawn extends to half the line width on either side of the path.
- The `lineCap` property determines how the end points of every line are drawn. There are three possible values for this property and those are: `butt`, `round` and `square`. By default this property is set to butt
- The `lineJoin` property determines how two connecting segments (of lines, arcs or curves) with non-zero lengths in a shape are joined together  There are three possible values for this property: `round`, `bevel` and `miter`. By default this property is set to miter.
- The `miterLimit` property determines how far the outside connection point can be placed from the inside connection point. If two lines exceed this value, a bevel join gets drawn instead. 
- The `setLineDas`h method and the `lineDashOffset` property specify the dash pattern for lines.
- `createLinearGradient(x1, y1, x2, y2)` Creates a linear gradient object with a starting point of (x1, y1) and an end point of (x2, y2).
- `createRadialGradient(x1, y1, r1, x2, y2, r2)` Creates a radial gradient. The parameters represent two circles, one with its center at (x1, y1) and a radius of r1, and the other with its center at (x2, y2) with a radius of r2.
- `createConicGradient(angle, x, y)` Creates a conic gradient object with a starting angle of angle in radians, at the position (x, y).
- `gradient.addColorStop(position, color)` Creates a new color stop on the gradient object.
- `createPattern(image, type)` Creates and returns a new canvas pattern object.
  - `repeat` Tiles the image in both vertical and horizontal directions.
  - `repeat-x` Tiles the image horizontally but not vertically.
  - `repeat-y` Tiles the image vertically but not horizontally.
  - `no-repeat` Doesn't tile the image. It's used only once.
- Using shadows involves just four properties:
  1. `shadowOffsetX = float` Indicates the horizontal distance the shadow should extend from the object. This value isn't affected by the transformation matrix. The default is 0.
  2. `shadowOffsetY = float` Indicates the vertical distance the shadow should extend from the object. This value isn't affected by the transformation matrix. The default is 0.
  3. `shadowBlur = float` Indicates the size of the blurring effect; this value doesn't correspond to a number of pixels and is not affected by the current transformation matrix. The default value is 0.
  4. `shadowColor = color` A standard CSS color value indicating the color of the shadow effect; by default, it is fully-transparent black.

### [Drawing text](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_text)

- `fillText(text, x, y [, maxWidth])` Fills a given text at the given (x,y) position. Optionally with a maximum width to draw.
- `strokeText(text, x, y [, maxWidth])` Strokes a given text at the given (x,y) position. Optionally with a maximum width to draw.
- `font = value` The current text style being used when drawing text. This string uses the same syntax as the CSS font property. The default font is 10px sans-serif.
- `textAlign = value` Text alignment setting. Possible values: start, end, left, right or center. The default value is start.
- `textBaseline = value` Baseline alignment setting. Possible values: top, hanging, middle, alphabetic, ideographic, bottom. The default value is alphabetic.
- `direction = value` Directionality. Possible values: ltr, rtl, inherit. The default value is inherit.
- `measureText()` Returns a `TextMetrics` object containing the width, in pixels, that the specified text will be when drawn in the current text style.