# Socket.io

## [Web Sockets](https://en.wikipedia.org/wiki/WebSocket)

### 1. What is a Web Socket?

- WebSocket is a computer communications protocol, providing full-duplex communication channels over a single TCP connection.
- A communication protocol is a system of rules that allows two or more entities of a communications system to transmit information via any kind of variation of a physical quantity. The protocol defines the rules, syntax, semantics and synchronization of communication and possible error recovery methods. Protocols may be implemented by hardware, software, or a combination of both.
- The WebSocket protocol enables interaction between a web browser (or other client application) and a web server with lower overhead than half-duplex alternatives such as HTTP polling, facilitating real-time data transfer from and to the server.

### 2. Describe the Web Socket request/response handshake and what happens once the connection is established.

The handshake starts with an HTTP request/response, allowing servers to handle HTTP connections as well as WebSocket connections on the same port. Once the connection is established, communication switches to a bidirectional binary protocol which does not conform to the HTTP protocol.

In addition to Upgrade headers, the client sends a `Sec-WebSocket-Key` header containing base64-encoded random bytes, and the server replies with a hash of the key in the `Sec-WebSocket-Accept` header. This is intended to prevent a caching proxy from re-sending a previous WebSocket conversation, and does not provide any authentication, privacy, or integrity. The hashing function appends the fixed string `258EAFA5-E914-47DA-95CA-C5AB0DC85B11` (a UUID) to the value from `Sec-WebSocket-Key` header (which is not decoded from base64), applies the SHA-1 hashing function, and encodes the result using base64

A universally unique identifier (UUID) is a 128-bit label used for information in computer systems

In cryptography, SHA-1 (Secure Hash Algorithm 1) is a cryptographically broken but still widely used hash function which takes an input and produces a 160-bit (20-byte) hash value known as a message digest 

### 3. Web Sockets provide a standardized way for the server to send content to a client without first receiving a ____ from that client.

Request

## [Socket.io Tutorial](https://www.tutorialspoint.com/socket.io/)

### 1. What does the event handler io.on() do?

The io.on event handler handles connection, disconnection, etc., events in it, using the socket object.

### 2. Describe some possible proof of life or proof that the code works as expected

log "A user connected", every time a user goes to this page and "A user disconnected", every time someone navigates away/closes this page.

### 3. What does socket.emit() do?

You can create and fire custom events using the socket.emit function.

## [Socket.io vs Web Sockets](https://www.educba.com/websocket-vs-socket-io/)

### 1. What is the difference between WebSocket and Socket.IO? (think Git and GitHub, or OAuth and Auth0).

WebSocket is the communication Protocol that provides bidirectional communication between the Client and the Server over a TCP connection; WebSocket remains open all the time, so they allow real-time data transfer. When clients trigger the request to the server, it does not close the connection on receiving the response; it rather persists and waits for the Client or server to terminate the request.

Socket.IO is a library that enables real-time and full-duplex communication between the Client and the Web servers. It uses the WebSocket protocol to provide the interface. Generally, it is divided into two parts; both WebSocket vs Socket.io are event-driven libraries.

### 2. When would you use Socket.IO?

- It helps in broadcasting to multiple sockets at a time and handles the connection transparently.
- It works on all platform, server or device, ensuring equality, reliability, and speed.
- It automatically upgrades the requirement to WebSocket if needed.
- It is a custom real-time transport protocol implementation on top of other protocols.
- It requires both libraries to be used Client side as well as a server-side library.
- IO works on work-based events. there are some reserved events that can be accessed using the Socket on the server side like Connect, message, Disconnect, Ping and Reconnect.
- There are some Client based reserved events like Connect, connect- error, connect-timeout and Reconnect etc.

### 3. When would you use WebSockets?

- WebSocket helps in real-time communication between the Client and the webserver.
- This protocol helps in transforming to cross-platform in a real-time world between the server and the client.
- This also enables the business worldwide for a real-time web application to enhance and increase the feasibility.
- The major advantage it stands over an HTTP connection that it provides full-duplex communication.
- It provides full-duplex communication, which helps in persisting the connection established between the Client and the Web Server.
- It also lives up to the standards and provides the accuracy and efficiency stream events to and from with negligible latency.
- WebSocket removes the overhead and reduce complexity.
- It makes real-time communication effortless and efficient.

## [OSI Model Explained](https://www.youtube.com/watch?v=vv4y_uOneC0)

### What are a couple of key takeaways from this video?

Open system interconnection models

Package of protocols:

- Application: used by network applications such as web browsers with protocols for user activities:
  - File Transer (FTP)
  - Web Surfing (HTTP/HTTPs)
  - Emails (SMTP)
  - Virtual Terminals (Telnet)
- Presentation: receives data from application layer (translation, data compression, encryption via SSL or Secure Sockets Layer)
- Session: sets up and manages connections (APIS, NETBIOS), authentication, authorization, keeps track of files being downloaded (data packets), session management
- Transport: segmentation: divides data into segments, flow control, error control, TCP: connection-oriented transmition, UDP: connectionless transmission
- Network: logical addression, path determination, routing
- Data Link: physical addressing, access the media (framing)
- Physical: converts binary sequence

## [TCP Handshakes Explained](https://www.youtube.com/watch?v=xMtP5ZB3wSk)

### Translate the gist of this video to a non-technical friend

transmission control protocol, allows data to be delivered successfully and accurately. Uses a three way handshake to establish a connection. Step one the client sends request for connection, step two the server replies with an acknowledgment and asks client to also open a connection, lastly the client replies to confirm the connection.

[Socket.io Documentation](https://socket.io/docs/v4/)
[Socket.io Server API](https://socket.io/docs/v4/server-api)
[Socket.io Client API](https://socket.io/docs/client-api)
[Socket Testing Tool](https://amritb.github.io/socketio-client-tool/)