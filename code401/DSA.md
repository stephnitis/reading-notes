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

### 1. Linked List

- the atomic unit of the linked list is a node which contains a value and a pointer
- Value is something as simple as a number, and the pointer will simply connect you to the next node in the chain.
- First node in the list is known as the head, the last one that does not have a next pointer is known as the tail
- Pros: really good at adding and deleting items
- Cons: not very good at retrieving nodes

### 2. Array

- Continuously block of cells in the computer memory
- by keeping track of its memory location it can instantly compute the location of any item inside of it.
- as such arrays are really good at retrieving items
- adding items isn't always efficient

### 3. Hash Table

- an object in JavaScript or a dictionary in Python.
- Give the has table a word or a key and it will retrieve the difinition or the value for you
- Under the hood works a lot like an array, the key gets run through a function called a hashing function, and that will spit out a memory location for you
- Different from an array in that these memory locations don't have to be next to each other they can be anywhere, as such you don't have the same problem with the increasing size
- Depending on the hashing algorithm you use, two keys could hash to the same memory location, which is known as a collision
- Great at retrieving and adding but collisions can be a problem

### 4. Stack and Queue

- Stack: last in firth out data structure, when we add an item to the top it's called pushing, and then we pop off the top
  - Every language keeps track of the functions that have been called by call stacks
  - Depth first search (DFS): is an algorithm for traversing or searching tree or graph data structures. The algorithm starts at the root node (selecting some arbitrary node as the root node in the case of a graph) and explores as far as possible along each branch before backtracking. Extra memory, usually a stack, is needed to keep track of the nodes discovered so far along a specified branch which helps in backtracking of the graph.

- Queue: first in first out data structure
  - adding an item to the end is called enqueueing and removing it from the front is called dequeueing
  - breadth first search (BFS): is an algorithm for searching a tree data structure for a node that satisfies a given property. It starts at the tree root and explores all nodes at the present depth prior to moving on to the nodes at the next depth level. Extra memory, usually a queue, is needed to keep track of the child nodes that were encountered but not yet explored.
  - very efficient but have limited use cases compared to other data structures

### 5. Graphs and Trees

- similar to a linked list with nodes pointing to other nodes, except in this case the pointers are called edges
- edges can also have weights or numbers assigned to them
- trees are a special kind of heirarchical graph called a tree in which the data expands out in one direction
- binary search tree: has very specific rules but these rules allow us to do things like searching really really efficiently
  - each node can only have maximum two children left and right, the left has to be less than the node and the right has to be more
  - still not a perfect data structure, if you add elements in a weird order it can get very unbalanced or one-sided and you lose a lot of the advantages you get with your search optimization

- leetCode has programming interview questions from actual tech companies

## [Big O Explained](https://www.youtube.com/watch?v=v4cd1O4zkGw)

- Algorithmic efficiency
- Transfer speed: O(1) constant time with respective size of the input. It doesn't take longer with more input.
- Internet transfer speed O(n), scales linearly with respect to the amount of input.
- Essentially an equation that describes how the runtime changes or scales with respect to some input variables

Four Important Rules:

1. If you have two different steps in your algorithm you add up those steps
2. Drop constants
3. If you have different inputs they are usually going to use different variables to represent them.
4. Drop non-dominant terms

## [8 Common Data Structures every Programmer must know](https://towardsdatascience.com/8-common-data-structures-every-programmer-must-know-171acf6a1a42)

- Data Structures are a specialized means of organizing and storing data in computers in such a way that we can perform operations on the stored data more efficiently.

### 1. Arrays

- An array is a structure of fixed-size, which can hold items of the same data type. It can be an array of integers, an array of floating-point numbers, an array of strings or even an array of arrays (such as 2-dimensional arrays).
- Arrays are indexed, meaning that random access is possible.
- Array operations
  - Traverse: Go through the elements and print them.
  - Search: Search for an element in the array. You can search the element by its value or its index
  - Update: Update the value of an existing element at a given index
- Inserting elements to an array and deleting elements from an array cannot be done straight away as arrays are fixed in size.
- Used as the building blocks to build other data structures such as array lists, heaps, hash tables, vectors and matrices.
- Used for different sorting algorithms such as insertion sort, quick sort, bubble sort and merge sort.

### 2. Linked Lists

- A linked list is a sequential structure that consists of a sequence of items in linear order which are linked to each other.
- Used for symbol table management in compiler design.
- Used in switching between programs using Alt + Tab (implemented using Circular Linked List).

Types of linked lists available:

- Singly linked list — Traversal of items can be done in the forward direction only.
- Doubly linked list — Traversal of items can be done in both forward and backward directions. Nodes consist of an additional pointer known as prev, pointing to the previous node.
- Circular linked lists — Linked lists where the prev pointer of the head points to the tail and the next pointer of the tail points to the head.

Linked list operations:

- Search: Find the first element with the key k in the given linked list by a simple linear search and returns a pointer to this element
- Insert: Insert a key to the linked list. An insertion can be done in 3 different ways; insert at the beginning of the list, insert at the end of the list and insert in the middle of the list.
- Delete: Removes an element x from a given linked list. You cannot delete a node by a single step. A deletion can be done in 3 different ways; delete from the beginning of the list, delete from the end of the list and delete from the middle of the list.

### 3. Stacks

- A stack is a LIFO (Last In First Out — the element placed at last can be accessed at first) structure which can be commonly found in many programming languages.
- Used for expression evaluation (e.g.: shunting-yard algorithm for parsing and evaluating mathematical expressions).
- Used to implement function calls in recursion programming.
- Operations & Functions:
  - Push: Insert an element on to the top of the stack.
  - Pop: Delete the topmost element and return it.
  - Peek: Return the top element of the stack without deleting it.
  - isEmpty: Check if the stack is empty.
  - isFull: Check if the stack is full.

### 4. Queues

- A queue is a FIFO (First In First Out — the element placed at first can be accessed at first) structure which can be commonly found in many programming languages.
- Used to manage threads in multithreading.
- Used to implement queuing systems (e.g.: priority queues)
- Enqueue: Insert an element to the end of the queue.
- Dequeue: Delete the element from the beginning of the queue.

### 5. Hash Tables

- A Hash Table is a data structure that stores values which have keys associated with each of them. Furthermore, it supports lookup efficiently if we know the key associated with the value. Hence it is very efficient in inserting and searching, irrespective of the size of the data.
- Used to implement database indexes.
- Used to implement associative arrays.
- Used to implement the “set” data structure.
- Direct Addressing uses the one-to-one mapping between the values and keys when storing in a table.
- there is a problem with this approach when there is a large number of key-value pairs. The table will be huge with so many records and may be impractical or even impossible to be stored, given the memory available on a typical computer. To avoid this issue we use hash tables.
- Hash Function: A special function named as the hash function (h) is used to overcome the aforementioned problem in direct addressing.
- Using the hash function, we calculate the index of the table (slot) to which each value goes. The value calculated using the hash function for a given key is called the hash value which indicates the index of the table to which the value is mapped.

`h(k) = k % m`

- h: Hash function
- k: Key of which the hash value should be determined
- m: Size of the hash table (number of slots available). A prime value that is not close to an exact power of 2 is a good choice for m.

- collision can arise when the hash function generates the same index for more than one key. We can resolve collisions by selecting a suitable hash function h and use techniques such as chaining and open addressing.

### 6. Trees

- A tree is a hierarchical structure where data is organized hierarchically and are linked together.
- Some examples are:
  - Binary Trees: Used to implement expression parsers and expression solvers.
  - binary search tree: used in many search applications where data are constantly entering and leaving.
  - B tree
  - treap: used in wireless networking.
  - red-black tree
  - splay tree
  - AVL tree
  - n-ary tree
  - Heaps: used by JVM (Java Virtual Machine) to store Java objects.

#### Binary Search Trees

- A binary search tree (BST), as the name suggests, is a binary tree where data is organized in a hierarchical structure. This data structure stores values in sorted order.
- Every node in a binary search tree comprises the following attributes.
  - key: The value stored in the node.
  - left: The pointer to the left child.
  - right: The pointer to the right child.
  - p: The pointer to the parent node.
- A binary search tree exhibits a unique property that distinguishes it from other trees. This property is known as the binary-search-tree property.

### Heaps

- A Heap is a special case of a binary tree where the parent nodes are compared to their children with their values and are arranged accordingly.
- Heaps can be represented using trees as well as arrays.
- Used in heapsort algorithm.
- Used to implement priority queues as the priority values can be ordered according to the heap property where the heap can be implemented using an array.
- Queue functions can be implemented using heaps within O(log n) time.
- Used to find the kᵗʰ smallest (or largest) value in a given array.

Two Types:

  1. Min Heap — the key of the parent is less than or equal to those of its children. This is called the min-heap property. The root will contain the minimum value of the heap.
  2. Max Heap — the key of the parent is greater than or equal to those of its children. This is called the max-heap property. The root will contain the maximum value of the heap.

### Graphs

- A graph consists of a finite set of vertices or nodes and a set of edges connecting these vertices.
- The order of a graph is the number of vertices in the graph. The size of a graph is the number of edges in the graph.
- Two nodes are said to be adjacent if they are connected to each other by the same edge.

#### Directed Graphs

- A graph G is said to be a directed graph if all its edges have a direction indicating what is the start vertex and what is the end vertex.
- We say that (u, v) is incident from or leaves vertex u and is incident to or enters vertex v.
- Self-loops: Edges from a vertex to itself.

#### Undirected Graphs

- A graph G is said to be an undirected graph if all its edges have no direction. It can go in both ways between the two vertices.
- If a vertex is not connected to any other node in the graph, it is said to be isolated.

## [Why you should learn Big-O and stop hacking your way through algorithms](https://triplebyte.com/blog/why-you-should-learn-big-o-and-stop-hacking-your-way-through-algorithms)

- Big-O is just the name of the notation used to describe how efficient an algorithm is.
- O(n) is just a math-style way of describing roughly how long (in the worst case) a function will take in terms of the number of inputs passed in
- The letter “O” can just be thought of as shorthand for the rough “order” of magnitude of operations it takes to run the function, while “n” represents the possible number of variables passed in each time.
- *We care about this algorithm exclusively because of the efficiency benefits it provides; that’s what gives the algorithm meaning. Otherwise, it’s just needless complexity.*
- To say search takes logarithmic time is just a fancy way of saying you cut out half the possible options at each decision point.
- If you want to master algorithms (and you want them to stick), learn every topic side by side with all the nuances of time and space.