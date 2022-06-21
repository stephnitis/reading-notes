# REST

## [How I explained REST to my brother](https://gist.github.com/brookr/5977550)

### 1. Who is Roy Fielding?

  He helped write the first web servers, that sent documents across the internet… and then he did a ton of research explaining why the web works the way it does.

### 2. Why don’t the techniques that we use today work well when we need to be able to talk to all of the machines in the world?

When Fielding and his colleagues started building the web, being able to talk to any machine anywhere in the world was a primary concern. But most of the techniques developers later used to get computers to talk to each other didn't have those requirements. You just needed to talk to a small group of machines.

### 3. What is the HTTP protocol that Fielding and his friends created?

It is all about applying verbs to nouns. For instance, when you go to a web page, the browser does an HTTP GET on the URL you typed in and back comes a web page.

### 4. What does a GET do?

Because web pages are designed to be understood by people. A machine doesn't care about layout and styling. Machines basically just need the data. Ideally, every URL would have a human readable and a machine readable representation. When a machine GETs a resource, it will ask for the machine-readable one. When a browser GETs a resource for a human, it will ask for the human-readable "representation" of that data.

### 5. What does a POST do?

If one system needs to add something to another system, it would use an HTTP verb of POST.

### 6. What does PUT do?

 If a system wants to replace something in another system, it uses an HTTP verb of PUT

### 7. What does PATCH do?

To do a partial update, it'll hopefully use PATCH



**Yes, I have all 4 Apis**