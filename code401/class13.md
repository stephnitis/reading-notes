# Message Queues

## [Socket.io Chat Example](https://socket.io/get-started/chat/#getting-this-example)

### 1. Explain to a non-technical recruiter what the Chat Example (above) does.

I uses socket.io to connect users, emmitting events to create a system where users can receive and respond to one another. 

### 2. What proof of life are we getting on the backend from the above app?

The server logs the events as the users drive events

### 3. Socket.IO gives us the i0.emit() method to send an event to everyone. What flag would you use if you want to send a message to everyone except for a certain emitting socket?

broadcast

## [Rooms](https://socket.io/docs/v4/rooms)

### 1. What is a room and how might a room be useful?

A room is an arbitrary channel that sockets can join and leave. It can be used to broadcast events to a subset of clients. Rooms are a tool in socket.io servers for keeping track of groups of connected users. You can then iterate the sockets in a room or broadcast to all of them.

Uses:

- broadcast data to each device / tab of a given user
- send notifications about a given entity

### 2. How do you join a room?

You can call join to subscribe the socket to a given channel:

```JavaScript
io.on("connection", (socket) => {
  socket.join("some room");
});
```

And then simply use to or in (they are the same) when broadcasting or emitting:

`io.to("some room").emit("some event");`

### 3. how do you leave a room?

To leave a channel you call `leave` in the same fashion as `join`.

## [Namespaces](https://socket.io/docs/v4/namespaces/)

### 1. What is a Namespace and what does it allow you to do?

A Namespace is a communication channel that allows you to split the logic of your application over a single shared connection (also called "multiplexing").

### 2. Each namespace potentially has its own what? (hint: 3 things)

event handlers, rooms, and middlewares

### 3. Discuss a possible use case for separate namespaces

you want to create a special namespace that only authorized users have access to, so the logic related to those users is separated from the rest of the application
