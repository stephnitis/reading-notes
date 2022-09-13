# Data Structures and Algorithms

## [Recursion](https://www.youtube.com/watch?v=vPEJSJMg4jY)

- Pseudocode is a high-level description of the problem you're trying to solve in code. It's written like code, but it's meant to be closer to human speech.

- Recursion is where a function calls itself

- Used when it makes the solution clearer

- No performance benefit to using recursion - in fact, loops are sometimes better for performance - however recursion is used since it often makes code easier to understand and look cleaner.

- Since recursive functions call themselves it easy to make errors that cause infinite loops. If your code is in an infinite loop, press control+C to kill the script.

- When you write a recursive function, you have to tell it when to stop recursing

Every recursive function has two parts:

  1. The base case: when the function doesn't call itself again
  2. The recursive case: when the function calls itself, what will keep happening if the base case has not been reached.

## [DATA STRUCTURES you MUST know (as a Software Developer)](https://www.youtube.com/watch?v=sVxBVvlnJsM)

- Compound data: data items that we group together (such as the stock prices for the length of a day)

- Data structure is the way we store this data

- Big O Notation: the way we measure how good a data stucture is doing a specific thing. How well an operation scales.

1. Linked List: the atomic unit of the linked list is a node which contains a value and a pointer

- Value is something as simple as a number, and the pointer will simply connect you to the next node in the chain.
- First node in the list is known as the head, the last one that does not have a next pointer is known as the tail
- Pros: really good at adding and deleting items
- Cons: not very good at retrieving nodes

2. Array: Continuously block of cells in the computer memory

- by keeping track of its memory location it can instantly compute the location of any item inside of it.
- as such arrays are really good at retrieving items
- adding items isn't always efficient

3. Hash Table: an object in JavaScript or a dictionary in Python.

- Give the has table a word or a key and it will retrieve the difinition or the value for you
- Under the hood works a lot like an array, the key gets run through a function called a hashing function, and that will spit out a memory location for you
- Different from an array in that these memory locations don't have to be next to each other they can be anywhere, as such you don't have the same problem with the increasing size
- Depending on the hashing algorithm you use, two keys could hash to the same memory location, which is known as a collision
- Great at retrieving and adding but collisions can be a problem

4. Stack and Queue:

- Stack: last in firth out data structure, when we add an item to the top it's called pushing, and then we pop off the top
  - Every language keeps track of the functions that have been called by call stacks
  - Depth first search (DFS): is an algorithm for traversing or searching tree or graph data structures. The algorithm starts at the root node (selecting some arbitrary node as the root node in the case of a graph) and explores as far as possible along each branch before backtracking. Extra memory, usually a stack, is needed to keep track of the nodes discovered so far along a specified branch which helps in backtracking of the graph.

- Queue: first in first out data structure
  - adding an item to the end is called enqueueing and removing it from the front is called dequeueing
  - breadth first search (BFS): is an algorithm for searching a tree data structure for a node that satisfies a given property. It starts at the tree root and explores all nodes at the present depth prior to moving on to the nodes at the next depth level. Extra memory, usually a queue, is needed to keep track of the child nodes that were encountered but not yet explored.
  - very efficient but have limited use cases compared to other data structures

5. Graphs and Trees: similar to a linked list with nodes pointing to other nodes, except in this case the pointers are called edges

- edges can also have weights or numbers assigned to them
- trees are a special kind of heirarchical graph called a tree in which the data expands out in one direction
- binary search tree: has very specific rules but these rules allow us to do things like searching really really efficiently
  - each node can only have maximum two children left and right, the left has to be less than the node and the right has to be more
  - still not a perfect data structure, if you add elements in a weird order it can get very unbalanced or one-sided and you lose a lot of the advantages you get with your search optimization

- leetCode has programming interview questions from actual tech companies

## [Big O Explained](https://www.youtube.com/watch?v=v4cd1O4zkGw)

- Algorithmic efficiency
- Transfer speed: 0 of 1 constant time with respective size of the input. It doesn't take longer with more input.
- Internet transfer speed 0 of n, scales linearly with respect to the amount of input.
- Essentially an equation that describes how the runtime changes or scales with respect to some input variables

Four Important Rules:

1. If you have two different steps in your algorithm you add up those steps
2. Drop constants
3. If you have different inputs they are usually going to use different variables to represent them.
4. Drop non-dominant terms