# CRUD

## [Status Codes Based On REST Methods](https://www.moesif.com/blog/technical/api-design/Which-HTTP-Status-Code-To-Use-For-Every-CRUD-App/)

  ### 1. In your own words, describe what each group of status code represents:

  100’s = informational status codes
  200’s = success!
  300’s = redirection, resource is no longer available
  400’s = client error/invalid input from client side
  500’s = server error

  ### 2. What is a status code 202?

    The request has been accepted for processing, but the processing has not been completed. The request might or might not eventually be acted upon, as it might be disallowed when processing actually takes place.

  ### 3. What is a status code 308?

    It is a redirect status response code that indicates that the resource requested has been definitively moved to the URL given by the Location headers.

  ### 4. What code would you use if an update didn’t return data to a client?

    204 No Content

  ### 5. What code would you use if a resource used to exist but no longer does?

    410 Gone

  ### 6. What is the ‘Forbidden’ status code?

    403 Forbidden

## [Build A REST API With Node.js, Express, & MongoDB - Quick](https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw)

  ### 1. Why do we need to pull our MongoDB database string out of our server and put it into our .env?

    In order to reference it and specify it as an environmental variable in the deployed server

  ### 2. What is middleware?

    Middleware is software which lies between an operating system and the applications running on it. Essentially functioning as hidden translation layer, middleware enables communication and data management for distributed applications.

  ### 3. What does app.use(express.json()) do?

    It parses incoming JSON requests and puts the parsed data in req.

  ### 4. What does the /:id mean in a route?

    Identifies it as a parameter

  ### 5. What is the difference between PUT and PATCH?

    PUT is a method of modifying resource where the client sends data that updates the entire resource . PATCH is a method of modifying resources where the client sends partial data that is to be updated without modifying the entire data.

  ### 6. How do you make a default value in a schema?

    Set the value to default `default: Date.now`

  ### 7. What does a 500 error status code mean?

    It means that the server encountered an unexpected condition that prevented it from fulfilling the request. 

  ### 8. What is the difference between a status 200 and a status 201?

    The 200 status code means that the request was received and understood and is being processed. A 201 status code indicates that a request was successful and as a result, a resource has been created (for example a new page).