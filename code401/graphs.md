# GRAPHS

Common standard analogy for graphs:

*A social network. Imagine your peer group. You are connected to your friends and family, but not all of your friends and family are connected to each other and you are likely not connected to all of their friends and family.*

- A graph is a data structure where a node can have zero or more adjacent elements.
- The connection between two nodes is called edge. Nodes can also be called vertices.

## Applications:

When edges have values/cost assigned to them, we say we have a weighted graph. If the weight is absent, we can assume it’s 1.

Weighted graphs have many applications depending on the domain where you need to solve a problem. To name a few:

### Airline Traffic

- Node/vertex = Airport
- Edges = direct flights between two airports
- Weight = miles between two airports

### GPS Navigation

- Node = road intersection
- Edge = road
- Weight = time required to go from one intersection to another

### Networks routing

- Node = server
- Edge = data link
- Weight = connection speed

#### Other real world applications:

- Electronic circuits
- Flight reservations
- Driving directions
- Telcom: Cell tower frequency planning
- Social networks. E.g., Facebook uses a graph for suggesting friends
- Recommendations: Amazon/Netflix uses graphs to make suggestions for products/movies
- Graphs help to plan the logistics of delivering goods

#### References:

- [code fellows](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-35/resources/graphs.html)
- [GRAPH THEORY (DATA STRUCTURE)](https://seeve.medium.com/graph-theory-data-structure-89c7423de878)
- [Learn JavaScript Graph Data Structure](https://jarednielsen.com/data-structure-graph-javascript/)
- [Graph Data Structures in JavaScript for Beginners](https://adrianmejia.com/data-structures-for-beginners-graphs-time-complexity-tutorial/)