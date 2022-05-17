## HTML & CSS by Jon Ducket

### Chapter 6: Tables

- The `<table>` element is used to add tables to a web page.
- A table is drawn out row by row. Each row is created with the `<tr>` element.
- Inside each row there are a number of cells represented by the `<td>` element or `<th>` if it is a header.
- You can make cells of a table span more than one row or column using the `rowsapn` and `colspan` attributes.
- For long tables you can split the table into a `<thead>`, `<tbody>`, and `<tfoot>`.

## JavaScript & JQuery by Jon Ducket

### Chapter 3: Functions, Methods and Objects

- The `new` keyword and the object constructor function ( `Object()`) create a blank object. You can then add properties and methods to the object using dot notation. Each statement that adds a property or method should end with a semicolon. 
- To update the value of properties, use dot notation or square brackets. They work on objects using literal or constructor notation.
- use `delete` to delete a property.
- You create *instances* of the object using the constructor function. The `new` keyword followed by a call to the function creates a new object. The properties of each object are given as arguments to the function.
- The keyword `this` is commonly used inside functions and objects. Where the function is declared alters what `this` means. It always refers to one object, usually the object in which the function operates.
- When a function is created at the top level of script (not inside another object or function) then it is in the global scope or global context.
- All global variables also become properties of the `window` object, so when a function is in the global context, you can access global variables using the `window` object, as well as its other properties.
- in JavaScript, data is represented using name/value paris. To organize your data, you can use an array or object to group a set of related values. In arrays and objects the name is also known as a key.
- Arrays are a special type of object. They hold a related set of key/value pairs, but the key for each value is its index number.
- Arrays can store a series of objects (and remember their order). Objects can also hold arrays (as values of their properties).
- An **object model** is  agroup of objects, each of which represent related things from the real world.
- **Browser Object Model** contains objects that represent the current browser window or tab. (Contains things like browser history and the device's screen).
- **Document Object Model** uses objects to create a representation of the current page. It creates a new object for each element within the page.
- **Global JavaScript Objects** represent things that the JavaScript language needs to create a model of.
- Whenever you have a value that is a string, you can use the properties and methods of the `String` object on that value.
- Each character in a string is automatically given a nnumber, called an **index number** Index numbers always start at 0 and not 1
- Whenever you have a value that is a num,ber, you can use the methods and properties of the `Number` object on it.
- An **integer** is a whole number (not a fraction)
- A **real number** is a number that can contain a fractional part.
- A **floating point number** is a real number that uses decimals to represent a fraction. The term *floating point* refers to the decimal point.
- **Scientific notation** is a way of writing numbers that are too big or too small to be conveniently written in decimal form.
- The `Math` object has properties and methods for mathematical constants and functions.
- The `floor()` method is used to specifically round a number down
- In order to work with dates, you create an instance of the `Date` object.
- A visitor's location mayh affect time zones and languages spoken. Programmers use the term *locale* to refer to this kind of location-based information.