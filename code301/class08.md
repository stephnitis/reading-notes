# APIs

## [API Design Best Practices](https://docs.microsoft.com/en-us/azure/architecture/best-practices/api-design)

### 1. What does REST stand for?

  Representational State Transfer

### 2. REST APIs are designed around a ____.

  REST APIs are designed around resources, which are any kind of object, data, or service that can be accessed by the client.

### 3. What is an identifier of a resource? Give an example.

  A resource has an identifier, which is a URI that uniquely identifies that resource. For example, the URI for a particular customer order might be:
    `https://adventure-works.com/orders/1`

### 4. What are the most common HTTP verbs?

  GET, POST, PUT, PATCH, and DELETE.

### 5. What should the URIs be based on?

  Adopt a consistent naming convention in URIs. In general, it helps to use plural nouns for URIs that reference collections

### 6. Give an example of a good URI.

   It's a good practice to organize URIs for collections and items into a hierarchy. For example, /customers is the path to the customers collection, and /customers/5 is the path to the customer with ID equal to 5. This approach helps to keep the web API intuitive.

### 7. What does it mean to have a ‘chatty’ web API? Is this a good or a bad thing?

  "chatty" web APIs expose a large number of small resources. Such an API may require a client application to send multiple requests to find all of the data that it requires, which is a bad thing

### 8. What status code does a successful GET request return?

  A successful GET method typically returns HTTP status code 200 (OK).

### 9. What status code does an unsuccessful GET request return?

  If the resource cannot be found, the method should return 404 (Not Found).

### 10. What status code does a successful POST request return?

  If a POST method creates a new resource, it returns HTTP status code 201 (Created).

### 11. What status code does a successful DELETE request return?

  Alternatively, if there is no result to return, the method can return HTTP status code 204 (No Content) with no response body.

  If the client puts invalid data into the request, the server should return HTTP status code 400 (Bad Request). 