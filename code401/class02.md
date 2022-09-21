# Express, NPM, TDD, CI/CD

## [An introduction to NodeJS and Express](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)

### 1. Explain middleware, answer as though I were a non-technical recruiter.

It is software which lies between an operating system and the applications that are running on it. Allowing communication and acting as a bridge between the system/database and applications.

### 2. Express the most popular __ __ ____.

Node Web Framework

### 3. Express is “unopinionated.” What does that mean?

The framework is flexible, and allows you to handle tasks how you choose. You can insert almost any compatible middleware that you like into the request handling chain, in whatever order you like. The app can be structured however you choose.

### 4. What is a module and why is modularity useful to us as developers?

A module is a JavaScript library/file that you can import into other code using Node's `require()` function. Express itself is a module, as are the middleware and database libraries that we use in our Express applications.

Modularity is useful as it allows you to organie your code into manageable parts. **"a monolithic single-file application is hard to understand and maintain. Using modules also helps you manage your namespace, because only the variables you explicitly export are imported when you use a module."**

## [What is NPM?](https://docs.npmjs.com/about-npm)

- npm is the world's largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development as well.
- npm consists of three distinct components:

  1. the website
  2. the Command Line Interface (CLI)
  3. the registry

- Use the website to discover packages, set up profiles, and manage other aspects of your npm experience. For example, you can set up organizations to manage access to public or private packages.

- The CLI runs from a terminal, and is how most developers interact with npm.

- The registry is a large public database of JavaScript software and the meta-information surrounding it.

[Documentation](https://docs.npmjs.com/cli/v8)

### 1. What version of npm are you running on your machine?

8.19.1

### 2. What command would you type to install a library/package called ‘jshint’ into your node project?

`npm install jshint`

## [What is TDD?](https://www.agilealliance.org/glossary/tdd/)

- “Test-driven development” refers to a style of programming in which three activities are tightly interwoven: coding, testing (in the form of writing unit tests) and design (in the form of refactoring).

- Rules:
  - write a “single” unit test describing an aspect of the program - run the test, which should fail because the program lacks that feature
  - write “just enough” code, the simplest possible, to make the test pass
  - “refactor” the code until it conforms to the simplicity criteria
  - repeat, “accumulating” unit tests over time

### 1. Explain why tests are important. Please explain as though I were your non technical elder.

Tests help reduce defects in code and lead to improved design qualities. 

"By focusing on writing only the code necessary to pass tests, designs can often be cleaner and clearer than is achieved by other methods." - Kent Beck **Test Driven Development by Example**

### 2. What are three expected benefits of testing

1. many teams report significant reductions in defect rates, at the cost of a moderate increase in initial development effort
2. the same teams tend to report that these overheads are more than offset by a reduction in effort in projects’ final phases
3. although empirical research has so far failed to confirm this, veteran practitioners report that TDD leads to improved design qualities in the code, and more generally a higher degree of “internal” or technical quality, for instance improving the metrics of cohesion and coupling

### 3. Name at lest 2 individual pitfalls and at least 2 team pitfalls commonly encountered while writing tests.

Individual:

1. forgetting to run tests frequently
2. writing tests that are too large or coarse-grained

Team:

1. partial adoption – only a few developers on the team use TDD
2. abandoned test suite (i.e. seldom or never run) – sometimes as a result of poor maintenance, sometimes as a result of team turnover

## [CI/CD](https://www.youtube.com/watch?v=xSv_m3KhUO8)

### 1. What are three benefits of Continuous Integration?

- Ensure everyone's changes integrate
- Catch bugs
- Reduce Merge Conflicts

### 2. What is the difference between Continuos Delivery and Continuous Deployment?

Delivery develops software in a way that it is released at any time versus deployment is an extension of CI that allows changes in real time

### 3. Explain how GitHub fits into this process assuming the listener comes from a non-technical background