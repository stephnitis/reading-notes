# Advanced State with Reducers

## [useReducer hook](https://reactjs.org/docs/hooks-reference.html#usereducer)

### 1. Name an alternative to the useState Hook

`useReducer`

### 2. Why might the useReducer Hook be preferable to the useState Hook?

useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. useReducer also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.

### 3. What are two ways to set the initial state?

The simplest way is to pass the initial state as a second argument:

```javascript
  const [state, dispatch] = useReducer(
    reducer,
    {count: initialCount}
  );
```

You can also create the initial state lazily. To do this, you can pass an init function as the third argument. The initial state will be set to `init(initialArg)`. It lets you extract the logic for calculating the initial state outside the reducer. This is also handy for resetting the state later in response to an action

## [Ultimate Guide to useReducer](https://blog.logrocket.com/react-usereducer-hook-ultimate-guide/)

### 1. In terms of state, what does useReducer expect to receive as a parameter?

It accepts a reducer function as its first parameter and the initial state as the second.

### 2. What does useReducer return?

`useReducer` returns an array that holds the current state value and a `dispatch` function to which you can pass an action and later invoke it.

### 3. Explain dispatch to a non-technical recruiter.

The `dispatch` function accepts an object that represents the type of action we want to execute when it is called. Basically, it sends the type of action to the reducer function to perform its job, which, of course, is updating the state.