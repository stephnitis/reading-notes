## JavaScript & JQuery by Jon Ducket

### Chapter 3: Object Literals

- Objects group together a set of variables and functions to create a model of something you would recognize from the real world. In an object, variables and functions take on new names.
- In an object variables become known as properties. Properties tell us about the object, such as the name of a hotel or the number of rooms it has.
- In an object functions become known as methods. Methods represent tasks that are associated with the object.
- Like in functions, properties and methods have a name and a value, in an object that name is acalled a **key.**
  - an object cannot have two keys with the same name
- The value of a property can be a string, number, Boolean, array, or even another object. The value of a method is always a function.
- Literal notation is the easiest and most popular way to create objects
- Access the properties or methods of an object using dot notation. You can also access properties using square brackets.
- The period is known as the *member operator.* The property of method on its right is a member of the object on its left.

### Chapter 5: Document Object Model

- The browser represents the page using a DOM tree.
- DOM trees have four types of nodes: document nodes, element nodes, attribute nodes, and text nodes.
- You can select element nodes by their id or class attributes, by tag name, or using CSS selector syntax.
- Whenever a DOM query can return more than one node, it will always return a `NodeList`
- From an element node, you can access and update its content using properties such as `textContent` and `innerHTML` or using DOM manipulation techniques.
- An element node can contain multiple text nodes and child elements that are siblings of each other.
- In older browsers, implementation of the DOM is inconsistent (and is a popular reason for using jQuery).
- Browsers offer tools for viewing the DOM tree.

### [What’s the Difference Between Primitive Values and Object References in JavaScript?](https://betterprogramming.pub/intermediate-javascript-whats-the-difference-between-primitive-values-and-object-references-e863d70677b)

**JavaScripts 8 Data Types:**

1. `Boolean`
2. `Null`
3. `Undefined`
4. `Number`
5. `BigInt`
6. `String`
7. `Symbol`
8. `Objects`

- This isn’t a mistake. Arrays, functions, and dates all play an important role in JavaScript programs, but they are really just objects under the hood.
- When a primitive value is assigned to a variable (eg let foo = ‘bar’), the variable is set to that value directly.
- When the variable is assigned with an object, Instead of containing the value directly, that variable contains a reference to it.
- One key difference between primitive values and object references is mutability. Primitive values are immutable and object references are mutable. This means that primitive values cannot be changed (or mutated), but object references can be changed.
- Since arrays are mutable you can alter them directly. There’s no need to assign a new value to letters since you can just change the existing array directly.
- variables set to Primitive Values contain actual values, and variables set to Object References just contain references (or memory addresses).
- JavaScript programs often use equality operators to check if two values are the same.
- It is generally recommended that `===` be used over`==` whenever possible to avoid behavior that might not be expected
In order to check whether the contents (not the reference) of two objects are the same you need to either:
  - Iterate through the object and check that each key and value match. This can be tricky because an object’s property can be an object in itself.
  - Convert the object to a suitable primitive before doing the equality check.

### [Understanding the problem domain is the hardest part of programming](https://simpleprogrammer.com/understanding-the-problem-domain-is-the-hardest-part-of-programming)

If understanding the problem domain is the hardest part of programming and you want to make programming easier, you can do one of two things:
  1. Make the problem domain easier
  2. Get better at understanding the problem domain

- You can often make the problem domain easier by cutting out cases and narrowing your focus to a particular part of the problem.
- The other choice is to become better at understanding problem domains.  As developers, we tend to think that sitting down and talking to customers or business people who know about the problem domain is a waste of time. It is easy to fall into the trap of thinking you understand enough of the problem to get started coding it.  Best to resist the temptation to “not waste anymore time talking” and make sure you understand a problem inside and out before you try and solve it with code.  It is much more expensive and time consuming to do things over than it is to do them right the first time.  I learn this lesson the hard way time and time again.
