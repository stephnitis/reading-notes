# Authentication

## [Securing Passwords](https://thehackernews.com/2014/04/securing-passwords-with-bcrypt-hashing.html)

### 1. Explain to a non-technical friend how you would safely hash and store a password.

Essentially you would put your plain text password through an algorithm which would convert it into an unintelligible series of numbers and letters

### 2. What is Bcrypt?

a password hashing function / Bcrypt is an adaptive hash function based on the Blowfish symmetric block cipher cryptographic algorithm and introduces a work factor (also known as security factor), which allows you to determine how expensive the hash function will be.

### 3. Why might you use something like Bcrypt?

The largest benefit of bcrypt is that, over time, the iteration count can be increased to make it slower allowing bcrypt to scale with computing power. We can dimish any benefits attackers may get from faster hardware by increasing the number of iterations to make bcrypt slower

## [Basic Auth](https://en.wikipedia.org/wiki/Basic_access_authentication)

### 1. What is Basic Authentication?

In the context of an HTTP transaction, basic access authentication is a method for an HTTP user agent (e.g. a web browser) to provide a user name and password when making a request.

### 2. What properties are necessary in the header of a Basic Auth request?

In basic HTTP authentication, a request contains a header field in the form of `Authorization: Basic <credentials>`, where credentials is the Base64 encoding of ID and password joined by a single colon `:`.

### 3. How are username:password in Basic Auth encoded?

The BA mechanism does not provide confidentiality protection for the transmitted credentials. They are merely encoded with Base64 (Base64 is a group of binary-to-text encoding schemes that represent binary data) in transit and not encrypted or hashed in any way. Therefore, basic authentication is typically used in conjunction with HTTPS to provide confidentiality.

Because the BA field has to be sent in the header of each HTTP request, the web browser needs to cache credentials for a reasonable period of time to avoid constantly prompting the user for their username and password. Caching policy differs between browsers.

When the user agent wants to send authentication credentials to the server, it may use the Authorization header field.

The Authorization header field is constructed as follows:

  1. The username and password are combined with a single colon (:). This means that the username itself cannot contain a colon.
  2. The resulting string is encoded into an octet sequence. The character set to use for this encoding is by default unspecified, as long as it is compatible with US-ASCII, but the server may suggest use of UTF-8 by sending the charset parameter.
  3. The resulting string is encoded using a variant of Base64 (+/ and with padding).
  4. The authorization method and a space (e.g. "Basic ") is then prepended to the encoded string.

For example, if the browser uses Aladdin as the username and open sesame as the password, then the field's value is the Base64 encoding of Aladdin:open sesame, or QWxhZGRpbjpvcGVuIHNlc2FtZQ==. Then the Authorization header field will appear as:

`Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==`

## [OWASP auth cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)

### 1. Define the authentication process to a non-technical recruiter.

Authentication is the process of verifying that an individual, entity or website is whom it claims to be. Authentication in the context of web applications is commonly performed by submitting a username or ID and one or more items of private information that only a given user should know.

### 2. How should your error messaging respond (both HTTP and HTML)? Why?

An application should respond (both HTTP and HTML) in a generic manner.

Using any of the authentication mechanisms (login, password reset or password recovery), an application must respond with a generic error message regardless of whether:

- The user ID or password was incorrect.
- The account does not exist.
- The account is locked or disabled.

The objective is to prevent the creation of a discrepancy factor, allowing an attacker to mount a user enumeration action against the application.

**Bookmark this link also and consider OWASP fundamentals any time you interact with authentication. Applications developed with security in mind from inception have fewer vulnerabilities throughout their lifecycle.**

## [bcrypt docs](https://www.npmjs.com/package/bcrypt)
