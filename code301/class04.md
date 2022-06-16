# React and Forms

## [React Docs - Forms](https://reactjs.org/docs/forms.html)

1. What is a ‘Controlled Component’?

*We can combine the two by making the React state be the “single source of truth”. Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a “controlled component”.*

*A controlled component is a component that renders form elements and controls them by keeping the form data in the component's state. In a controlled component, the form element's data is handled by the React component (not DOM) and kept in the component's state.*

2. Should we wait to store the users responses from the form into state when they submit the form OR should we update the state with their responses as soon as they enter them? Why.

You should update the state with user responses as soon as the enter them using `handleChange` this the input's value is always driven by a React state and the displayed value will update as the user types.

3. How do we target what the user is entering if we have an event handler on an input field?

By adding a `name` attribute to each `input` element and let the handler function choose what to do based on the value of `event.target.name`

## [The Conditional (Ternary) Operator Explained](https://codeburst.io/javascript-the-conditional-ternary-operator-explained-cac7218beeff)

1. Why would we use a ternary operator?

It allows us to replace simple if statements with a single line expression. Increases code readability by reducing number of lines of code.

2. Rewrite the following statement using a ternary statement:

`if(x===y){`
  `console.log(true);`
`} else {`
  `console.log(false);`
`}`

**BECOMES:**

`x === y ? 'true' : 'false';`
