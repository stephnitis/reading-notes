# Asynchronous Actions

## [async actions](https://redux.js.org/tutorials/fundamentals/part-6-async-logic)

### 1. Why use Redux middleware?

- One possibility is writing a middleware that looks for specific action types, and runs async logic when it sees those actions
- Another is middleware that let us pass a function to dispatch, instead of an action object? We could have our middleware check to see if the "action" is actually a function instead, and if it's a function, call the function right away. That would let us write async logic in separate functions, outside of the middleware definition.

### 2. Consider the Redux Async Data Flow Diagram. Describe the flow in your own words.

Dispatch actions are passed through the middleware, which handles the asynchronous call to the API and then returns the action object to the store once the call is completed.

### 3. How are we accommodating async in our Redux app?

Just like with a normal action, we first need to handle a user event in the application, such as a click on a button. Then, we call dispatch(), and pass in something, whether it be a plain action object, a function, or some other value that a middleware can look for.

Once that dispatched value reaches a middleware, it can make an async call, and then dispatch a real action object when the async call completes.

## [thunk middleware](https://github.com/reduxjs/redux-thunk)

### 1. Why would you need redux-thunk middleware?

With a plain basic Redux store, you can only do simple synchronous updates by dispatching an action. Middleware extends the store's abilities, and lets you write async logic that interacts with the store.

### 2. Redux Thunk middleware allows you to write action creators that return a ____ instead of an action.

function

### 3. Describe how any return value from the inner thunk function will be made available.

Any return value from the inner function will be available as the return value of dispatch itself. This is convenient for orchestrating an asynchronous control flow with thunk action creators dispatching each other and returning Promises to wait for each other’s completion.

- [Writing Logic with Thunks](https://redux.js.org/usage/writing-logic-thunks)