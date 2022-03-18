### [What is CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS)

- **Cascading Style Sheets** Using CSS you can control exactly how HTML elements look in the browser, presenting your markup using whatever design you like.
- CSS is a language for specifying how documents are presented to users — how they are styled, laid out, etc.
- *Presenting* a document to a user means converting it into a form usable by your audience. Browsers, like Firefox, Chrome, or Edge , are designed to present documents visually, for example, on a computer screen, projector or printer.
    - **Note:** A browser is sometimes called a *user agent*, which basically means a computer program that represents a person inside a computer system.

**CSS Syntax**
- CSS is a rule-based language — you define rules specifying groups of styles that should be applied to particular elements or groups of elements on your web page.
- The rule opens with a selector . This selects the HTML element that we are going to style
- We then have a set of curly braces { }. Inside those will be one or more declarations, which take the form of property and value pairs. Each pair specifies a property of the element(s) we are selecting, then a value that we'd like to give the property.
- Before the colon, we have the property, and after the colon, the value. CSS properties have different allowable values, depending on which property is being specified.

[find links to all the CSS property pages here](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)

- **CSS Modules:** As there are so many things that you could style using CSS, the language is broken down into modules.
-**CSS Specifications:** All web standards technologies are defined in giant documents called specifications (or "specs"), which are published by standards organizations CSS is constantly developing, with new features becoming available. However, a key thing about CSS is that everyone works very hard to never change things in a way that would break old websites.
- **Browser support information:** The browser support status is shown on every MDN property page in a section named "Browser compatibility" (use this to check if the property can be used on your website).

### [How to Add CSS](https://www.w3schools.com/css/css_howto.asp)
**There are three ways of inserting a style sheet:**
1. **External CSS**
    - With an external style sheet, you can change the look of an entire website by changing just one file
    - Each HTML page must include a reference to the external style sheet file inside the link element, inside the head section
    - An external style sheet can be written in any text editor, and must be saved with a .css extension.
    - The external .css file should not contain any HTML tags.
2. **Internal CSS**
    - An internal style sheet may be used if one single HTML page has a unique style.
    - The internal style is defined inside the style element, inside the head section.
3. **Inline CSS**
    - An inline style may be used to apply a unique style for a single element.
    - To use inline styles, add the style attribute to the relevant element. The style attribute can contain any CSS property.

- **Multiple Style Sheets:** If some properties have been defined for the same selector (element) in different style sheets, the value from the last read style sheet will be used. 
- **Cascading Order** All the styles in a page will "cascade" into a new "virtual" style sheet by the following rules, where number one has the highest priority:
    1. Inline style (inside an HTML element)
    2. External and internal style sheets (in the head section)
    3. Browser default

### [CSS Color Property](https://www.w3schools.com/cssref/pr_text_color.asp)
