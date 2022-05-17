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

### [Domain Modeling](https://github.com/codefellows/domain_modeling#domain-modeling)

- Domain modeling is the process of creating a conceptual model in code for a specific problem. 
- A model describes the various entities, their attributes and behaviors, as well as the constraints that govern the problem domain
- An entity that stores data in properties and encapsulates behaviors in methods is commonly referred to as an object-oriented model.
- Methods can be added to a constructor function's **prototype**. Think of the prototype as an object's stunt double. Whenever a scene is too dangerous, you can substitute in the prototype to do the work while the object takes all the glory.

**Tips to follow when building your own domain models.**

  1. When modeling a single entity that'll have many instances, build self-contained objects with the same attributes and behaviors.
  2. Model its attributes with a constructor function that defines and initializes properties.
  3. Model its behaviors with small methods that focus on doing one job well.
  4. Create instances using the `new` keyword followed by a call to a constructor function.
  5. Store the newly created object in a variable so you can access its properties and methods from outside.
  6. Use the `this` variable within methods so you can access the object's properties and methods from inside.
