# Putting it all together

## [React Docs - Thinking in React](https://reactjs.org/docs/thinking-in-react.html)

### 1. What is the single responsibility principle and how does it apply to components?

  A component should ideally only do one thing. If it ends up growing, it should be decomposed into smaller subcomponents.

### 2. What does it mean to build a ‘static’ version of your application?

  To build a version that takes your data model and renders the UI but has no interactivity. To build a static version of your app that renders your data model, you’ll want to build components that reuse other components and pass data using props.

### 3. Once you have a static application, what do you need to add?

  The interactive features: via state.

 Think of the minimal set of mutable state that your app needs. The key here is DRY: Don’t Repeat Yourself. Figure out the absolute minimal representation of the state your application needs and compute everything else you need on-demand.

### 4. What are the three questions you can ask to determine if something is state?

  1. Is it passed in from a parent via props? If so, it probably isn’t state.
  2. Does it remain unchanged over time? If so, it probably isn’t state.
  3. Can you compute it based on any other state or props in your component? If so, it isn’t state.

### 5. How can you identify where state needs to live?

- Identify every component that renders something based on that state.

- Find a common owner component (a single component above all the components that need the state in the hierarchy).

- Either the common owner or another component higher up in the hierarchy should own the state.

- If you can’t find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the hierarchy above the common owner component.

## [Higher-Order Functions](https://eloquentjavascript.net/05_higher_order.html#h_xxCc98lOBK)

### 1. What is a “higher-order function”?

  A function that operates on other functions, either by taking them as arguments or by returning them

### 2. Explore the greaterThan function as defined in the reading. In your own words, what is line 2 of this function doing?

  It returns the value of an arrow function that takes a variable and compares its value against another variable to determine whether or not the first value is greater than the second value.

  Thus this is a higher-order function creating another function that is performing that task.

### 3. Explain how either map or reduce operates, with regards to higher-order functions.

  `map()` is a higher-order function that applies a given function to each element of a collection (e.g. a list in an array) returning the results in a collection of the same type.

  `reduce()` is a very useful Higher-Order Function built into JavaScript. It summarizes the total of an array. It will compute a single value from a collection of numbers in an array and return that number: the total.