# Event Driven Applications

## [Event Driven Programming](https://www.digitalocean.com/community/tutorials/nodejs-event-driven-programming)

- Event-Driven Programming is a logical pattern that we can choose to confine our programming within to avoid issues of complexity and collision.

Event-Driven Programming makes use of the following concepts:

- An Event Handler is a callback function that will be called when an event is triggered.
- A Main Loop listens for event triggers and calls the associated event handler for that event.

### 1. What native Node.js module allows us to get started with Event Driven Programming?

EventEmitter

**An event emitter is a pattern that listens to a named event, fires a callback, then emits that event with a value. Sometimes this is referred to as a “pub/sub” model, or listener.**

[Further Reading](https://www.geeksforgeeks.org/node-js-eventemitter/)

#### Terminology

- **Listening events:** Before emits any event, it must register functions(callbacks) to listen to the events.
- `eventEmitter.on(event, listener)` and `eventEmitter.addListener(event, listener)` are pretty much similar. It adds the listener at the end of the listener’s array for the specified event. Multiple calls to the same event and listener will add the listener multiple times and correspondingly fire multiple times. Both functions return emitter, so calls can be chained.
- All EventEmitters emit the event `newListener` when new listeners are added and `removeListener` when existing listeners are removed.
- **Removing Listener**: The `eventEmitter.removeListener()` takes two arguments event and listener, and removes that listener from the listeners array that is subscribed to that event.
- **Emitting events**: Every event is named event in nodejs. We can trigger an event by `emit(event, [arg1], [arg2], […])` function. We can pass an arbitrary set of arguments to the listener functions.
- **Special Events**: All EventEmitter instances emit the event ‘newListener’ when new listeners are added and ‘removeListener’ existing listeners are removed.
  - Event: ‘newListener’ The EventEmitter instance will emit its own ‘newListener’ event before a listener is added to its internal array of listeners. Listeners registered for the ‘newListener’ event will be passed to the event name and reference to the listener being added. The event ‘newListener’ is triggered before adding the listener to the array.
  - Event: ‘removeListener’ The ‘removeListener’ event is emitted after a listener is removed.

### 2. What is the value of Object Oriented Programming used in tandem with Event Driven Programming?

- The Object Oriented approach promotes the idea that all behavior of an individual unit (or object) be handled from code within that unit. Using this approach, applications are built with many different units that all speak to and interact with each other.
- By registering event listeners we can actually reverse the flow of communication between our objects. Rather than on object needing to reach inside another object to trigger a function, our objects can just emit events and whichever objects are listening to those event will process it in the way they have been told to. The source of an objects behavior is now entirely contained within itself, rather than needing to be accessed by external objects.

### 3. Consider your knowledge of Event Driven Programming in the Web Browser, now explain to a non-technical friend how Event Driven Programming might be useful on the backend using Node.js.

Event-driven programming is a programming paradigm in which the flow of program execution is determined by events - for example a user action such as a mouse click, key press, or a message from the operating system or another program.
Event-driven programming serves the user with the quickest and most accurate responses and this usually translates into better user experience and business gains.

[Node docs: events](https://nodejs.org/api/events.html)