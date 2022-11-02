# `<Login />` and `<Auth />`

## [What is Role Based Access Control (RBAC)](https://digitalguardian.com/blog/what-role-based-access-control-rbac-examples-benefits-and-more)

### 1. What is Role Based Access Control (RBAC)?

Role-based access control (RBAC) restricts network access based on a person's role within an organization and has become one of the main methods for advanced access control. The roles in RBAC refer to the levels of access that employees have to the network.

### 2. Share an example of RBAC including all possible CRUD operations and correlating roles.

- Management role scope – it limits what objects the role group is allowed to manage. (Read)
- Management role group – you can add and remove members. (Create, Delete)
- Management role – these are the types of tasks that can be performed by a specific role group.
- Management role assignment – this links a role to a role group.

### 3. What are the Benefits of RBAC?

Reducing administrative work and IT support.
Maximizing operational efficiency.
Improving compliance.
Compare and Contrast the following two Libraries and the following questions. Yes, they are similarly named.

## [react-cookie library](https://www.npmjs.com/package/react-cookie)

## [react-cookies component](https://www.npmjs.com/package/react-cookies)

### 1. Describe some react-cookie features.

Access and modify cookies using React hooks.
Let you optionally specify a list of cookie names your component depend on or that should trigger a re-render. If unspecified, it will render on every cookie change.
Give access to your cookies anywhere.

### 2. Describe some react-cookies features.

Load and save cookies with React
Access user cookies while doing server-rendering
Find all the cookies with a name that match the regex.
Set absolute expiration date for the cookie.
Relative max age of the cookie from when the client receives it in seconds.
Make accessible through https or only on server

### 3. Which library would you prefer would you prefer? Why?

React-cookies just seems to have more features, it seems that it can do everything react-cookie can do and more.