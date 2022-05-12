# HTML Lists, Control Flow with JS & the CSS Box Model

## HTML & CSS by Jon Ducket

### Chapter 4: Links

- Links are created using the `<a>` element.
- The `<a>` element uses the href attribute to indicate the page you are linking to.
- If you are linking to a page within your own site, it is best to use relative links rather than qualified URLs.
- You can create links to open email programs with an email address in the "to" field.
- You can use the id attribute to target elements within a page that can be linked to.

### Chapter 15: Layout

- `<div>` elements are often used as containing elements to group together sections of a page.
- Browsers display pages in normal flow unless you specify relative, absolute, or fixed positioning.
- The `float` property moves content to the left or right of the page and can be used to create multi-column layouts. (Floated items require a defined width).
- Pages can be fixed width or liquid (stretchy) layouts.
- Designers keep pages within 960-1000 pixels wide, and indicate what the site is about within the top 600 pixels (to demonstrate its relevance without scrolling).
- Grids help create professional and flexible designs.
- CSS Frameworks provide rules for common tasks.
- You can include multiple CSS files in one page.

## JavaScript & JQuery by Jon Ducket

### Chapter 3: Functions, Methods, and Objects

- Functions let you group a series of statements together to perform a specific task. If different parts of a script repeat the same task you can reuse the function.
- *Calling* the function is when you ask it to perform its task
- Pieces of information passed to a function are known as *parameters.*
- When as function provides an answer it is known as a *return value.*
- To *declare a function*, you give it a name and then write the statements needed to achieve its task inside the curly braces.
- When you call a function that has parameters, you specify the values it should use in the parentheses that follow its name. The values are called *arguments*, and they can be provided as values or as variables.
- Some functions return information to the code that called them: e.g. performing a calculation they return the result
- Functions can return more than one value using an array
- *Expressions* produce a value. They can be used where values are expected.
- A function with no name is called an *anonymous function.*
- Often functions are used to ensure that the variable names do not conflict with each other.
- The location where you declare a variable will affect where it can be used within your code. This is known as the variable's *scope.*
- A variable created inside a function using the `var` keyword can only be used inside that function and is called *local variable* or *function-level* variable. It is said to have *local scope* or *function-level* scope.
- Local variables are only remembered during the period of time that a function is being executed.
- If you create a variable outside of a function, then it can be used anywhere within the script. It is called a *global vairable* & has a *global scope*
- Global variables use more memory. The browser has to remember them for as long as the web page using them is loaded.

### [6 Reasons for Pair Programming](https://www.codefellows.org/blog/6-reasons-for-pair-programming/)

**How does it Work?**

- While there are many different styles, pair programming commonly involves two roles: the Driver and the Navigator.
  - The Driver is the programmer who is typing and the only one whose hands are on the keyboard.
  - The Navigator thinks about the big picture, what comes next, how an algorithm might be converted in to code, while scanning for typos or bugs.

**Why? Because there are four fundamental skills that help anyone learn a new language:**

- **Listening** hearing and interpreting the vocabulary
- **Speaking** using the correct words to communicate an idea
- **Reading** understanding what written language intends to convey
- **Writing** producing from scratch a meaningful, well structured solution

**Other benefits:**

1. Greater efficiency
2. Engaged collaboration
3. Learning from fellow students
4. Social skills
5. Job interview readiness
6. Work environment readiness 