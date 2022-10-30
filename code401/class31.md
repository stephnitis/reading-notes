# Context API

## [Context API](https://reactjs.org/docs/context.html)

### 1. What can React Context provide your app?

Context provides a way to pass data through the component tree without having to pass props down manually at every level.

### 2. Why might we use Context?

Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language. Context is primarily used when some data needs to be accessible by many components at different nesting levels. 

### 3. Why should we use it sparingly?

Apply it sparingly because it makes component reuse more difficult. This inversion of control can make your code cleaner in many cases by reducing the amount of props you need to pass through your application and giving more control to the root components. Such inversion, however, isn’t the right choice in every case; moving more complexity higher in the tree makes those higher-level components more complicated and forces the lower-level components to be more flexible than you may want.

## [Awesome React Context links](https://github.com/diegohaz/awesome-react-context)

### 1. Consume content from (at least) two of the Awesome React Context links. Share your take-away from each

  1. Takeaway 1: I watched two of the context videos, both generally demonstrating the same concept. My biggest takeaway was that every Context object comes with a Provider React component that allows consuming components to subscribe to context changes. The Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider. One Provider can be connected to many consumers. It is essentially just recreating a parent/child relationship on a global scale.

  2. Takeaway 2: I learned what spaghetti code is. Spaghetti code is a pejorative phrase for unstructured and difficult-to-maintain source code. Spaghetti code can be caused by several factors, such as volatile project requirements, lack of programming style rules, and software engineers with insufficient ability or experience.

- [Redux docs](https://react-redux.js.org/tutorials/quick-start)
- [React Redux Tutorial for Beginners](https://www.robinwieruch.de/react-redux-tutorial/)