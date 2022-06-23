# Functional Programming

## [Functional Programming Concepts](https://medium.com/the-renaissance-developer/concepts-of-functional-programming-in-javascript-6bc84220d2aa)

### 1. What is functional programming?

  Functional programming is a programming paradigm — a style of building the structure and elements of computer programs — that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data

### 2. What is a pure function and how do we know if something is a pure function?

  - It returns the same result if given the same arguments (it is also referred as deterministic)
  - It does not cause any observable side effects

### 3. What are the benefits of a pure function?

  The code’s definitely easier to test. We don’t need to mock anything.

### 4. What is immutability?

  When data is immutable, its state cannot change after it’s created. If you want to change an immutable object, you can’t. Instead, you create a new object with the new value.

### 5. What is Referential transparency?

  Basically, if a function consistently yields the same result for the same input, it is referentially transparent.

## [Node JS Tutorial for Beginners #6 - Modules and require()](https://www.youtube.com/watch?v=xHLd36QoS4k)

### 1. What is a module?

  Another JavaScript file

### 2. What does the word ‘require’ do?

  It allows us to include modules that exist in separate files. It reads a JavaScript file, executes the file and then returns the `exports` object.