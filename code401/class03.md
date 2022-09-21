# Express REST API

## [Review: ES6 Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

### 1. Classes are a template for creating ____.

Objects

### 2. Can a class declaration be hoisted?

No, an important difference between function declarations and class declarations is that while functions can be called in code that appears before they are defined, classes must be defined before they can be constructed.

### 3. How would you describe a constructor and contextual “this” to a non-technical friend?

A constructor, somewhat like its namesake, allows us to create and initialize an object created with a class. "this" is representative of its context in reference to the object that is currently executed the code or function, for example if typed in the browser console it will be in relation to the current window.

## [Using Express Routing](https://expressjs.com/en/guide/routing.html)

### 1. Within Express, what does routing refer to?

how an applications endpoints (URIs) respond to client requests. You define routing using methods of the Express app object that correspond to HTTP methods; for example, app.get() to handle GET requests and app.post to handle POST requests.

### 2. What is the difference between a route path and a route method?

Routing methods specify a callback function (sometimes called “handler functions”) called when the application receives a request to the specified route (endpoint) and HTTP method. A route method is derived from one of the HTTP methods, and is attached to an instance of the express class.

Route paths, in combination with a request method, define the endpoints at which requests can be made. Route paths can be strings, string patterns, or regular expressions.

### 3. When is it appropriate to add `next` as a parameter to a route handler and what must you do if `next` has been passed to your middleware as a parameter?

You can provide multiple callback functions that behave like middleware to handle a request. The only exception is that these callbacks might invoke next('route') to bypass the remaining route callbacks. You can use this mechanism to impose pre-conditions on a route, then pass control to subsequent routes if there’s no reason to proceed with the current route.

## [Express Routing](https://www.digitalocean.com/community/tutorials/learn-to-use-the-new-router-in-expressjs-4)

### 1. What is an Express Router?

It is a mini express application without all the bells and whistles of an express application, just the routing stuff.

### 2. By what mean do we initialize `express.Router()` in an express server?

by calling an instance of `express.Router();` e.g. `var router = express.Router();`

### 3. What do we use route middleware for?

Route middleware in Express is a way to do something before a request is processed. This could be things like checking if a user is authenticated, logging data for analytics, or anything else we’d like to do before we actually spit out information to our user.

