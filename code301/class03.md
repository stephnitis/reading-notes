# Passing Functions as Props

## [https://reactjs.org/docs/lists-and-keys.html](React Docs - lists and keys)

### 1. What does .map() return?

A new array with each element being the result of the callback function.

### 2. If I want to loop through an array and display each value in JSX, how do I do that in React?

Using curly braces `{}`

### 3. Each list item needs a unique ____.

Key.

### 4. What is the purpose of a key?

Keys help React identify which items have changed, are added, or are removed.

## [The Spread Operator](https://medium.com/coding-at-dawn/how-to-use-the-spread-operator-in-javascript-b9e4a8b06fab)

### 1. What is the spread operator?

JavaScript, spread syntax refers to the use of an ellipsis of three dots (`…`) to expand an iterable object into the list of arguments.

### 2. List 4 things that the spread operator can do.

1. Copying an array
2. Concatenating or combining arrays
3. Using Math functions
4. Using an array as arguments

### 3. Give an example of using the spread operator to combine two arrays.

`const myArray = [`🤪`,`🐻`,`🎌`]`
`const yourArray = [`🙂`,`🤗`,`🤩`]`
`const ourArray = [...myArray,...yourArray]`
`console.log(...ourArray) // 🤪 🐻 🎌 🙂 🤗 🤩`

### 4. Give an example of using the spread operator to add a new item to an array.

`const fewFruit = ['🍏','🍊','🍌']`
`const fewMoreFruit = ['🍉', '🍍', ...fewFruit]`
`console.log(fewMoreFruit) //  Array(5) [ "🍉", "🍍", "🍏", "🍊", "🍌" ]`

### 5. Give an example of using the spread operator to combine two objects into one.

`const objectOne = {hello: "🤪"}`
`const objectTwo = {world: "🐻"}`
`const objectThree = {...objectOne, ...objectTwo, laugh: "😂"}`
`console.log(objectThree) // Object { hello: "🤪", world: "🐻", laugh: "😂" }`
`const objectFour = {...objectOne, ...objectTwo, laugh: () => {console.log("😂".repeat(5))}}`
`objectFour.laugh() // 😂😂😂😂😂`

## [How to Pass Functions Between Components](https://www.youtube.com/watch?v=c05OL7XbwXU)

### 1. In the video, what is the first step that the developer does to pass functions between components?

Create the function wherever the state is that we are going to change.

### 2. In your own words, what does the increment function do?

Takes a variable and increments its value and returns updated value.

### 3. How can you pass a method from a parent component into a child component?

`this.increment`

### 4. How does the child component invoke a method that was passed to it from a parent component?

`this.props.increment()`
