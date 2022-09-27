# Bearer Authorization

## [Intro to JWT](https://jwt.io/introduction/)

### 1. What is a JSON Web Token (JWT)?

JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.

Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties. When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it.

### 2. When should we use JSON Web Tokens?

**Authorization:** This is the most common scenario for using JWT. Once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token. Single Sign On is a feature that widely uses JWT nowadays, because of its small overhead and its ability to be easily used across different domains.

**Information Exchange:** JSON Web Tokens are a good way of securely transmitting information between parties. Because JWTs can be signed—for example, using public/private key pairs—you can be sure the senders are who they say they are. Additionally, as the signature is calculated using the header and the payload, you can also verify that the content hasn't been tampered with.

### 3. Claims are expected in which structural component of a JWT?

The Payload.

Claims are statements about an entity (typically, the user) and additional data. There are three types of claims: registered, public, and private claims.

## [Are JWTs Secure?](https://stackoverflow.com/questions/27301557/if-you-can-decode-jwt-how-are-they-secure)

### 1. If I get a JWT and I can decode the payload, how can we call that secure?

if there is a change it won't be accepted

### 2. If sending a JWT, what must sender and receiver both know? Hint, it’s appended in the signature.

hash/secret

### 3. Explain how concatenated content and secret can be sent and received securely to a non-technical recruiter.

## [JWTs Explained](https://www.youtube.com/watch?v=926mknSW9Lo)

### 1. Why use JWT?

Information Exchange: JWTs are a good way of securely transmitting information between parties because they can be signed, which means you can be sure that the senders are who they say they are. Additionally, the structure of a JWT allows you to verify that the content hasn't been tampered with.

### 2. JWT is Compact and self-contained. Describe how this is useful to a non-technical friend.

More requests to our endpoints means that our infrastructure will need to scale. This can complicate things in regards to adding more resources to the server (expensive) versus adding a new server as a load balancer (authentication issues based around memory)

JSON Web Token (JWT) is an open standard (RFC 7519) that defines a way for transmitting information –like authentication and authorization facts– between two parties: an issuer and an audience. Communication is safe because each token issued is digitally signed, so the consumer can verify if the token is authentic or has been forged.

Each token is self-contained, this means it contains all information needed to allow or deny any given requests to an API. Since the token is self-contained, we own all the information needed for its validation. 

(I know this is still technical but the explanation helped me more)

[Helped me understand better/My reference](https://medium.com/swlh/why-do-we-need-the-json-web-token-jwt-in-the-modern-web-8490a7284482)

### 3. What are the three components (the structure) of a JWT signature?

- the header: The header section contains information about the token itself.
- a payload or body: The payload is the most important part of a JWT. It contains information (claims in JWT jargon) about the client
- a signature: the third part of the token is a hash that is computed

## [npm jsonwebtoken docs](https://www.npmjs.com/package/jsonwebtoken)