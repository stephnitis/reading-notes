# Classes

## [Shred Talk](https://www.youtube.com/watch?v=9Yc5J3Ap9-4)

**Data Modeling**

**Constructor Function and Prototypes: ES6 Classes**

### [Inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

### [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)

- In most cases, the value of this is determined by how a function is called (runtime binding). It can't be set by assignment during execution, and it may be different each time the function is called.

- In the global execution context (outside of any function), `this` refers to the global object whether in strict mode or not.

- Inside a function, the value of this depends on how the function is called.

- e.g. : if code not in strict mode and the value of `this` is not set by the call, this will default to the global object, which is window in a browser.

- In strict mode, however, if the value of this is not set when entering an execution context, it remains as undefined.To set the value of this to a particular value when calling a function, use `call()`, or `apply()`

- The behavior of this in classes and functions is similar, since classes are functions under the hood. But there are some differences and caveats.



### [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)