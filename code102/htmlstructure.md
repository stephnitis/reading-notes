### [An Intro to Wireframing](https://careerfoundry.com/en/blog/ux-design/how-to-create-your-first-wireframe/)

**Wireframing is a practice used by UX designers which allows them to define and plan the information hierarchy of their design for a website, app, or product.**

- a great way of getting to know how a user interacts with your interface, through the positioning of buttons and menus on the diagrams.
- Without the distractions of colors, typeface choices or text, wireframing lets you plan the layout and interaction of your interface.

**Why use wireframes?**

- Wireframes drawn with paper and a pencil, or at a whiteboard, have the advantage of looking and being very easy to change, which can help tremendously in early conversations about your website or product.
- With the help of paper-prototypes, you can test with end users at every stage of ideation and design. Changes at these stages are much easier—and therefore cheaper—than changes deemed necessary after coding is under way.
- Switching later to software (after initially hand-drawing your wireframe) allows you to keep track of more detailed decisions.

**6 Steps to make a Wireframe:**

1. Do your research
    - Before you even think about picking up a pen and paper, you need to have covered the first two steps; namely understanding who your audience is by way of user research, detailing requirements, creating user personas and defining use cases, and complementing this with further competitor and industry research.
2. Prepare your research for quick reference
    - Scribble a cheatsheet with your your requirements, your personas, use cases, and perhaps some reminders of the coolest features you stumbled across in your competitor research.
3. Make sure you have your user flow mapped out
   - Good information architecture will ensure that your users are self-sufficient, lower levels of user frustration, and therefore lower drop-off or drop-out rates.
4. Draft, don’t draw. Sketch, don’t illustrate
    - *Remember: you’re outlining and representing features and formats, not illustrating in mighty fine detail.*
    - How can you organise the content to support your users’ goals?
    - Which information should be most prominent? Where should your main message go? What should the user see first when arriving at the page?
    - What will the user expect to see on certain areas of the page?
    - Which buttons or touch points does the user need to complete the desired actions?
5. Add some detail and get testing
    - Add detail in the way you would naturally process a screen, or the page of a book: from top-to-bottom and left-to-right. *Remember: Your wireframe is the skeleton of your site.*
    - Think about:
        - Usability conventions, such as putting the navigation at the top next to your logo, having a search box on the top right, and so on
        - Simple, instructional wording for i.e. calls-to-action
        - Trust-building elements: What do you need to build trust in your customers and where would be the best place to put these elements?
        - Tooltips to indicate any functionality that could be included in a prototype transition
    **Once you’ve done all that, you’re ready for your first user tests.**
6. Start turning your wireframes into prototypes
    - Once you’ve documented and acted upon the feedback from your first prototype, you can start developing your high-fidelity prototypes.

**How to make your wireframe good: Three key principles**

1. Clarity
    - Your wireframe needs to answer the questions of what that site page is, what the user can do there, and if it satisfies their needs
2. Confidence
    - Ease of navigation through your site and clear calls-to-action increase user confidence in your brand.
3. Simplicity is key
    - Too much information, copy, or links, can be distracting to the user and will have a detrimental affect on your users’ ability to achieve their goals.

### [HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)

- **HTML (HyperText Markup Language)** is a markup language that defines the structure of your content. HTML consists of a series of elements, which you use to enclose, or wrap, different parts of the content to make it appear a certain way, or act a certain way. The enclosing tags can make a word or image hyperlink to somewhere else, can italicize words, can make the font bigger or smaller, and so on.

- **Anatomy of an HTML element**
    1. *The opening tag:* This consists of the name of the element wrapped in opening and closing angle brackets. This states where the element begins or starts to take effect.
    2. *The closing tag:* This is the same as the opening tag, except that it includes a forward slash before the element name. This states where the element ends. Failing to add a closing tag is one of the standard beginner errors and can lead to strange results.
    3. *The content:* This is the content of the element
    4. *The element:* The opening tag, the closing tag, and the content together comprise the element.

- **Attributes** contain extra information about the element that you don't want to appear in the actual content.
- You can put elements inside other elements too — this is called **nesting.** You do however need to make sure that your elements are properly nested. The elements have to open and close correctly so that they are clearly inside or outside one another. If they overlap, then your web browser will try to make the best guess at what you were trying to say, which can lead to unexpected results.
- Some elements have no content and are called **empty elements.** e.g. *<img>* element, because an image element doesn't wrap content to affect it. Its purpose is to embed an image in the HTML page in the place it appears.

### [Semantics](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)

- In programming, **Semantics** refers to the meaning of a piece of code — for example "what effect does running that line of JavaScript have?", or "what purpose or role does that HTML element have" (rather than "what does it look like?".)
- HTML should be coded to represent the data that will be populated and not based on its default presentation styling. Presentation (how it should look), is the sole responsibility of CSS.
**Some of the benefits from writing semantic markup are as follows:**
  - Search engines will consider its contents as important keywords to influence the page's search rankings
  - Screen readers can use it as a signpost to help visually impaired users navigate a page
  - Finding blocks of meaningful code is significantly easier than searching through endless divs with or without semantic or namespaced classes
  - Suggests to the developer the type of data that will be populated
  - Semantic naming mirrors proper custom element/component naming

**When approaching which markup to use, ask yourself, "What element(s) best describe/represent the data that I'm going to populate?"**
