# Sate and Props

## [React lifecycle](https://medium.com/@joshuablankenshipnola/react-component-lifecycle-events-cb77e670a093)

*React lets you define components as classes or functions. The methods that you are able to use on these are called lifecycle events. These methods can be called during the lifecycle of a component, and they allow you to update the UI and application states.*

### Based off the diagram, what happens first, the ‘render’ or the ‘componentDidMount’?

**`render`**

### What is the very first thing to happen in the lifecycle of React?

**`constructor()`** is called

### Put the following things in the order that they happen:

  1. `constructor`
  2. `render`
  3. `React Updates`
  4. `componentDidMount`
  5. `componentWillUnmount`

### What does `componentDidMount` do?

The `componentDidMount()` method allows us to execute the React code when the component is already placed in the DOM (Document Object Model). This method is called during the Mounting phase of the React Life-cycle i.e after the component is rendered.

## [React State vs Props](https://www.youtube.com/watch?v=IYvD9oBCuJI)

### What types of things can you pass in the props?

When you create a component inside of react and you want to render it you're going to pass it the props you want to give to it. Kind of like things you pass through a function, what you want to initialize your component, or what you want your component to render like.

### What is the big difference between props and state?

State is something inside of a component versus props you pass into a component (handled inside versus outside)

State is there when you need to actually rerender and update your application based on something the user has done. So if you want to change something in your application you need to store that in state.

Props are useful when you want to display some information inside of a component without hard coding. Essentially like a variable to a function or like things you would pass to a constructor.

### When do we re-render our application?

When the state is changed.

### What are some examples of things that we could store in state?

Things handled only inside of the component. Or things that are dynamic - such as items that will update with user input.