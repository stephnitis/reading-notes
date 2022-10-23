# Component Based UI

## [react hello world](https://reactjs.org/docs/hello-world.html)

### 1. What are the building blocks of a React app?

elements and components

### 2. What is the difference between an element and a React component?

A React element is an object representation of a DOM node. A component encapsulates a DOM tree. Elements are immutable, i.e. once created cannot be changed. The state in a component is mutable.

A component refers to a small part of a larger entity that mostly is a manufactured object. The definition of component means one part of a whole thing.

In React, we mainly have two types of components:

1. Functional Components: Functional components are simply javascript functions. We can create a functional component in React by writing a javascript function.
2. Class Components: The class components are a little more complex than the functional components.

In contrast, elements are the smallest building blocks of React apps. An element describes what you want to see on the screen: const element = `<h1>Hello, world</h1>;` Unlike browser DOM elements, React elements are plain objects, and are cheap to create. React DOM takes care of updating the DOM to match the React elements.

An element is a plain object describing a component instance or DOM node and its desired properties. It contains only information about the component type (for example, a Button ), its properties (for example, its color ), and any child elements inside it. An element is not an actual instance.

### 3. What are some advantages of React’s component based architecture?

Component architecture is a framework for building software based on reusable components. Each component encapsulates well-defined functionality into a binary unit that can be stored in a library and dropped into an application without requiring modification of other components. A component-based architecture streamlines and automates the most time-consuming parts of enterprise application development. Components allow for far more possibilities in terms of product design and can be configured to provide optimal performance for the target application.

## [introducing JSX](https://reactjs.org/docs/introducing-jsx.html)

### 1. What is JSX and why do we use it?

It is a syntax extension to JavaScript. Similar to how Javascript files are saved under the extension .js, React files are saved under the extension. jsx. With JSX, programmers can write HTML code in React and easily render the elements in the React DOM without needing additional methods or functions.

React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display. JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods. JSX converts HTML tags into react elements. You are not required to use JSX, but JSX makes it easier to write React applications. It also allows React to show more useful error and warning messages.

### 2. Describe the process of embedding JavaScript expressions in JSX.

In React, not only are we able to use HTML elements, but we are also allowed to use Javascript expressions along with JSX. Using curly braces {}, along with any valid Javascript expression can be embedded into the code.

Examples:

- we can declare a variable called name and then use it inside JSX by wrapping it in curly braces

``` JSX
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
```

- You can put any valid JavaScript expression inside the curly braces in JSX. For example, `2 + 2, user.firstName`, or `formatName(user)` are all valid JavaScript expressions.

- In the example below, we embed the result of calling a JavaScript function, `formatName(user)`, into an `<h1>` element.

``` JSX
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);
```

- You may use quotes to specify string literals as attributes:

`const element = <a href="https://www.reactjs.org"> link </a>;`

- You may also use curly braces to embed a JavaScript expression in an attribute:

`const element = <img src={user.avatarUrl}></img>;`

After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects. Programmers can further replace if-else statements in JSX. This is possible by making use of conditional statements instead of if-else statements. This means that you can use JSX inside of if statements and for loops, assign it to variables, accept it as arguments, and return it from functions:

```JSX
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```

### 3. Is it safe to embed user input in JSX? Explain.

Yes. By default, React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks.

## [rendering elements](https://reactjs.org/docs/rendering-elements.html)

### 1. Explain what a React Component is to a non-technical friend.

Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML. Components come in two types, Class components and Function components

Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

### 2. Describe mutability and React Components, specifically, how is the UI updated?

"Mutable" in programming refers to anything that can change during the running of a program.  The state is mutable in react components. To make the React applications interactive we almost use state in every react component. State is initialized with some value and based on user interaction with the application we update the state of the component at some point of time using the setState method. `setState()` enqueues changes to the component state and tells React that this component and its children need to be re-rendered with the updated state. This is the primary method you use to update the user interface in response to event handlers and server responses.

When React sees an element representing a user-defined component, it passes JSX attributes and children to this component as a single object. We call this object “props”.

### 3. If changes are made to the UI, what does React update?

React components automatically re-render whenever there is a change in their state or props. A simple update of the state, from anywhere in the code, causes all the User Interface (UI) elements to be re-rendered automatically.
React knows the state has changed, and calls the render() method again to learn what should be on the screen. React then updates the DOM to match.

- [sass cheatsheet](https://devhints.io/sass)
- [react cheatsheet](https://devhints.io/react)
- [another react cheatsheet](https://reactcheatsheet.com/)