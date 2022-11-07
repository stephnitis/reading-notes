# Application State with Redux

## [Dan Abramov Redux Tutorials](https://egghead.io/courses/fundamentals-of-redux-course-from-dan-abramov-bd5cc867)

### 1. What is the first principle of Redux?

Single source of truth. The global state of your application is stored in an object tree within a single store. This makes it easy to create universal apps, as the state from your server can be serialized and hydrated into the client with no extra coding effort.

### 2. what is a store and what do we use our reducers for within that store?

A store holds the whole state tree of your application. The only way to change the state inside it is to dispatch an action on it.

A store is not a class. It's just an object with a few methods on it. To create it, pass your root reducing function to createStore.

A store is an immutable object tree in Redux. A store is a state container which holds the application's state. Redux can have only a single store in your application. Whenever a store is created in Redux, you need to specify the reducer.

A Redux app really only has one reducer function: the "root reducer" function that you will pass to createStore later on. That one root reducer function is responsible for handling all of the actions that are dispatched, and calculating what the entire new state result should be every time.

### 3. Name three Redux store methods given to us by createStore and describe their use

- getState() Returns the current state tree of your application. It is equal to the last value returned by the store's reducer.
- dispatch(action) Dispatches an action. This is the only way to trigger a state change.
- subscribe(listener) Adds a change listener. It will be called any time an action is dispatched, and some part of the state tree may potentially have changed. You may then call getState() to read the current state tree inside the callback.

### 4. Explain to a non-technical recruiter what combineReducers() does and why it is useful

The combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore.
The resulting reducer calls every child reducer, and gathers their results into a single state object. The state produced by combineReducers() namespaces the states of each reducer under their keys as passed to combineReducers()

Any reducer passed to combineReducers must satisfy these rules:

- For any action that is not recognized, it must return the state given to it as the first argument.
- It must never return undefined. It is too easy to do this by mistake via an early return statement, so combineReducers throws if you do that instead of letting the error manifest itself somewhere else.
- If the state given to it is undefined, it must return the initial state for this specific reducer. According to the previous rule, the initial state must not be undefined either. It is handy to specify it with ES6 optional arguments syntax, but you can also explicitly check the first argument for being undefined.

Bookmarks:

- [worlds easiest guide to redux](https://www.freecodecamp.org/news/understanding-redux-the-worlds-easiest-guide-to-beginning-redux-c695f45546f6)
- [testing reducers](https://medium.com/@netxm/testing-redux-reducers-with-jest-6653abbfe3e1)
- [Redux Docs](https://redux.js.org/)