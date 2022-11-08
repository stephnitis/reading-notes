# Combined Reducers

## [Multiple Reducers Example](https://www.youtube.com/watch?v=gBER4Or86hE)

### 1. Why create multiple reducers?

Multiple slice reducers can respond to the same action, independently update their own slice as needed, and the updated slices are combined into the new state object. Because this pattern is so common, Redux provides the combineReducers utility to implement that behavior.

### 2. How would you combine multiple reducers?

The combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore.

### 3. How will you manage state as an immutable object? why?

An immutable value or object cannot be changed, so every update creates new value, leaving the old one untouched. For example, if your application state is immutable, you can save all the state objects in a single store to easily implement functionality to undo and redo.

If the reducers all return the same state object passed to them, then combineReducers will return the current root state object, not the newly updated one.

## [Redux Docs: Using Combined Reducers](https://redux.js.org/usage/structuring-reducers/using-combinereducers/)

### 1. combineReducers is a utility function to simplify the most common use case when writing ___ _____ .

redux reducers

### 2. Explain how combineReducers assembles the new state tree.

 In order to assemble the new state tree, combineReducers will call each slice reducer with its current slice of state and the current action, giving the slice reducer a chance to respond and update its slice of state if needed. So, in that sense, using combineReducers does "call all reducers", or at least all of the slice reducers it is wrapping.

### 3. How would you define initial state in an app using combineReducers?

There are two ways to define the initial shape and contents of your store's state. First, the createStore function can take preloadedState as its second argument. This is primarily intended for initializing the store with state that was previously persisted elsewhere, such as the browser's localStorage. The other way is for the root reducer to return the initial state value when the state argument is undefined.

## [Redux Docs: Combined Reducer Syntax](https://redux.js.org/api/combinereducers/)

### 1. Why will you want to split your reducing functions as your app becomes more complex?

into separate functions, each managing independent parts of the state.

### 2. The _____ helper function turns an object whose values are different reducing functions into a single reducing function you can pass to ____.

- `combineReducers` 
- `createStore`

### 3. What is a popular convention when naming reducers?

A popular convention is to name reducers after the state slices they manage