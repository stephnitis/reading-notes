# Context API - Behaviors

## [Hooks and Context example](https://medium.com/swlh/snackbars-in-react-an-exercise-in-hooks-and-context-299b43fd2a2b)

### 1. With regard to the React Context API, what does a “provider” do?

With the React Context API the state can be localized to a single centralized component. That same centralized component can be responsible for rendering them, and management of that state (adding, removing) making it globally accessible. Our context provider is responsible for both displaying the local state (we call them alerts), and for exposing an API for globally managing them.

### 2. With regard to the React Context API, how would we implement a “consumer” role?

A React component that subscribes to context changes. Using this component lets you subscribe to a context within a function component. Requires a function as a child. The function receives the current context value and returns a React node.

Implement with a small wrapper around the useContext internal React hook, which consumes our new context. Read that value within any component by using the context consumer.

### 3. Specifically with Context, how are we “wrapping” components to achieve our goals?

Wrapper components are components that surround unknown components and provide a default structure to display the child components. A wrapper component may be used to create user interface (UI) components that are used frequently throughout a design, such as modals, template pages, and information tiles.

The Provider component is going to be used to wrap the components that are going to have access to our context. The Provider component receives a prop called value , which can be accessed from all the components that are wrapped inside Provider , and it will be responsible to grant access to the context data.

## [Awesome React Context links](https://github.com/diegohaz/awesome-react-context)

### 1. Consume content from (at least) two of the Awesome React Context links. Share your take-away from each

  1. [Takeaway 1:](https://reactjs.org/blog/2018/03/29/react-v-16-3.html) Ref forwarding is a new opt-in feature that lets some components take a ref they receive, and pass it further down (in other words, “forward” it) to a child.

  Ref forwarding is not limited to “leaf” components that render DOM nodes. If you write higher order components, we recommend using ref forwarding to automatically pass the ref down to the wrapped class component instances.

  - [Learn more about the forwardRef API here](https://reactjs.org/docs/forwarding-refs.html)

  StrictMode is a tool for highlighting potential problems in an application. Like Fragment, StrictMode does not render any visible UI. It activates additional checks and warnings for its descendants.

  - [Strict Mode](https://reactjs.org/docs/strict-mode.html)

  2. [Takeaway 2:](https://medium.com/@baphemot/whats-new-in-react-16-3-d2c9b7b6193b)

  Calling the factory function will return us an object that has a “Provider” and a “Consumer” in it.

  - the consumer must have access to the same Context component — if you were to create a new context, with the same parameter as input, a new Context would be created and the data would not be passed. For this reason please consider Context a component — it should be created once and then exported + imported whenever needed
  - the new syntax uses the function as child (sometime called render prop) pattern
  - What’s a static method? A static method is a method / function that exists on the class not its instance. The easiest difference to think about is that static method does not have access to this and has the keyword static in front of it.