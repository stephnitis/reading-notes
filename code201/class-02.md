# Basics of HTML, CSS & JS

## HTML&CSS by Jon Ducket

### Chapter 2: Text

- HTML elements are used to describe the structure of the page (e.g. headings, subheadings, paragraphs).
- They also provide semantic information, which provides extra information that is not intended to affect the structure of the page (e.g. where emphasis should be placed, the definition of any acronyms used, when given text is a quotation).
- When the browser comes across line breaks or two or more spaces next to each other, it only displays one space. This is known as *white space collapsing.*

### Chapter 10: Introducing CSS

- CSS treats each HTML element as if it appears inside its own box and uses rules to indicate how that element should look.
- Rules are made up of selectors (that specify the elements the rule applies to) and declarations (that indicate what these elements should look like)
- Different types of selectors allow you to target your rules at different elements. For example:
  - **Universal Selector:** Applies to all elements in the document
  - **Type Selector:** Matches element names
  - **Class Selector:** Matches an element whose class attribute has a value that matches the one specified after the period (or full stop) symbol
  - **ID Selector:** Matches an element whose id attribute has a value that matches the one specified after the pound or hash symbol
  - **Child Selector:** Matches an element that is a direct child of another
  - **Descendant Selector:** Matches an element that is a descendent of another specified element (not just a direct child of that element)
  - **Adjacent Sibling Selector:** Matches an element that is the next sibling of another
  - **General Sibling Selector:** Matches an element that is a sibling of another, although it does not have to be the directly preceding element.
- How Rules Cascade:
  - *Last Rule:* If the two selectors are identical, the latter of the two will take precedence.
  - *Specificity:* If one selector is more specific than the others, the more specific rule will take precedence over more general ones
  - *Important:* You can add `!important` after any property value to indicate that it should be more important than other rules that apply to the same element
- Declarations are made up of two parts: the properties of the element that you want to change, and the values of those properties. For example, the font-family property sets the choice of font, and the value arial specifies Arial as the preferred typeface.
- CSS rules usually appear in a separate document, although they may appear within an HTML page.

## JavaScript & JQuery by Jon Ducket

### Chapter 2: Basic JavaScript Instructions

- A script is made up of a series of statements. Each statement is like a step in a recipe.
- **Code blocks:** statements surrounded by curly braces
- Scripts contain very precise instructions. For example, you might specify that a value must be remembered before creating a calculation using that value.
- **Multi-Line Comments:** starting and ending with `*/`
- **Single-Line Comments:** starting and ending with `//`
- Variables are used to temporarily store pieces of information used in the script. They can be used to represent values in your script that are likely to change. The result is said to be calculated or computed using the data stored in the variables.
- 6 Rules for Naming Variables:
  1. The name must begin with a letter, dollar sign or an underscore. It must not start with a number.
  2. The name can contain letters, numbers, dollar signs, or an underscore. You may not use a dash or a period.
  3. You cannot use keywords or reserved words. Keywords are special words that  tell the interpreter to do something. For example, `var` is a keyword used to declare a variable. Reserved words are ones that may be used in a future version of JavaScript.
  4. All variables are case sensitive, so `score` and `Score` would be different variable names.  5. Use a name that describes the kind of information that the variable stores.
  5. If your variable name is made up of more than one word, use a capital letter for the first letter of every word after the first word. You can also use an underscore between each word.
- Arrays are special types of variables that store more than one piece of related information. You should consider using an array whenever you are working with a list or a set of values that are related to each other.
- JavaScript distinguishes between numbers (0-9), strings (text), and Boolean values (true or fales).
-Expressions evaluate into a single value.
-Expressions rely on operators to calculate a value.

### Chapter 4: Decisions and Loops

- Conditional statements allow your code to make decisions about what to do next.
- Comparison operators (`===, !==, ==, !=, <, >, <=, =>`) are used to compare two operands.
- Logical operators allow you to combine more than one set of comparison operators.
- `if...else` statements allow you to run one set of code if a condtion is true and another if it is false
- `switch` statements allow you to compare a value against possible outcomes (and also provide a default option if none match).
- Data types can be coerced from one type to another.
- All values evaluate to either truthy or falsy
- There are three types of loop: `for, while,` and `do...while.` Each repeats a set of statements.

### Things I want to learn more about: