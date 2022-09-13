# Engineering Readings

## [Act like you make $1000/hr](https://anthony-moore.medium.com/pretend-your-time-is-worth-1-000-hour-and-youll-become-100x-more-productive-6ab2302b8e8c)

- Extremely successful people don’t tolerate busywork or distraction. They have crystal clear vision on their goals, and do what they need to do to get there, every single day.
- Deep work means absolutely not tolerating distractions and producing monumental quality and quantity in a very short time. This is how you can complete far more with focused efforts than unfocused efforts with far more time.
- Every time you say yes to something, it means you’re saying “no” to a dozen other opportunities.

I found this article to be the definition of busywork and unfocused effort.

## [How to think like a programmer](https://www.freecodecamp.org/news/how-to-think-like-a-programmer-lessons-in-problem-solving-d1d8bf1de7d2)

### Have a framework:

#### 1. Understand

- Know exactly what is being asked. Most hard problems are hard because you don’t understand them
- This is why you should write down your problem, doodle a diagram, or tell someone else about it

#### 2. Plan

- In programming, this means don’t start hacking straight away. Give your brain time to analyze the problem and process the information.
- “Given input X, what are the steps necessary to return output Y?”

#### 3. Divide

- break it into sub-problems. These sub-problems are much easier to solve.
- solve each sub-problem one by one. Begin with the simplest. Simplest means you know the answer (or are closer to that answer).
- Connecting all your “sub-solutions” will give you the solution to the original problem.
- *Reduce the problem to the point where you know how to solve it and write the solution. Then expand the problem slightly and rewrite the solution to match, and keep going until you are back where you started.*

#### 4. Stuck?

- the best programmers/problem-solvers are more curious about bugs/errors than irritated.
- **Debug:** Go step by step through your solution trying to find where you went wrong. Programmers call this debugging (in fact, this is all a debugger does).
- **Reassess:** Take a step back. Look at the problem from another perspective. Is there anything that can be abstracted to a more general approach?
- **Research:** No matter what problem you have, someone has probably solved it. Find that person/ solution. In fact, do this even if you solved the problem! (You can learn a lot from other people’s solutions).

#### Practice

- a common pattern amongst successful people is their habit of practicing “micro problem-solving.”
- Chess puzzles, math problems, Sudoku, Go, Monopoly, video-games, cryptokitties

## [Solving Problems](https://simpleprogrammer.com/solving-problems-breaking-it-down/)

- You really want to make sure you take enough time to understand the problem completely before attempting to solve it.
- Another big mistake is trying to over solve the solution on the first iteration.  Keep it simple, don’t try to get fancy.

### 1. Read the problem completely twice.

- You want to make sure you completely understand the problem.  A good test of this is whether or not you can explain the problem to someone else.
- If you are given any examples along with the problem, make sure you have worked through the examples and understand why the answers are correct for each one.

### 2. Solve the problem manually with 3 sets of sample data.

- Programming is automation plain and simple. *Nothing can be automated that cannot be done manually*
- solve the problem with at least three different inputs to make sure you really understand your solution and that it will work for more than one case.
- use a [Mathematical Induction](https://en.wikipedia.org/wiki/Mathematical_induction) approach if possible.  Using this approach I might try and solve for 1 first, then for 2, then for n.
- [Structural Induction](https://en.wikipedia.org/wiki/Structural_induction)
- don’t forget to look for corner cases and edge cases and do any examples for those kind of cases you can think of.
- write down each little step and why.

### 3. Optimize the manual steps.

- What you want to do here is figure out if there is another way you can solve the problem easier, or if there are some steps you can cut out or simplify.

### 4. Write the manual steps as comments or pseudo-code.

- What we want to do here is capture all the steps we created and now either put them into our editor as comments or write them as psuedo-code that we can translate to real code.
- the key thing we have done here is outlined the structure of the code we will write to solve the problem.

### 5. Replace the comments or pseudo-code with real code.

- take each comment and convert it into a real line of code.
- If you struggle here, there are usually two possible reasons:
  1. You didn’t break down the problem into small enough steps
  2. You don’t know your programming language well enough to do the conversion

#### Any language you expect to be able to solve algorithm type problems in, you should know how to do the following things:

- Create a list
- Sort a list or array
- Create a map or dictionary
- Loop through a list, or dictionary
- Parse strings
- Convert from string to int, int to string, etc

### 6. Optimize the real code.

- it’s worth taking a look at your code and figuring out if you can cut out a few lines or do something simpler.
- This is also a good place to make sure all your variables are named with long meaningful names.  I cannot stress enough how important having good names for your variables and methods is for helping the person evaluating your code to understand what you were trying to do.  This is especially important when you make a mistake!

**A good way to know where to break a problem in half is to think about what part of the problem if already given to you would make solving the rest easy.**

[TopCoder](https://simpleprogrammer.com/so-you-want-to-become-a-better-programmer-topcoder/?utm_source=facebook.com&utm_medium=referral&utm_campaign=i-love-coding)
[Codility](https://www.codility.com/)

## [The 5 Whys](https://www.mindtools.com/pages/article/newTMC_5W.htm)

- You can use 5 Whys for troubleshooting, quality improvement, and problem solving, but it is most effective when used to resolve simple or moderately difficult problems.
- It may not be suitable if you need to tackle a complex or critical problem. This is because 5 Whys can lead you to pursue a single track, or a limited number of tracks, of inquiry when, in fact, there could be multiple causes.

### 1. Assemble a Team

Gather together people who are familiar with the specifics of the problem, and with the process that you're trying to fix. Include someone to act as a facilitator , who can keep the team focused on identifying effective counter-measures.

### 2. Define the Problem

If you can, observe the problem in action. Discuss it with your team and write a brief, clear problem statement that you all agree on.

### 3. Ask the First "Why?"

Ask your team why the problem is occurring.

Your team members may come up with one obvious reason why, or several plausible ones. Record their answers as succinct phrases, rather than as single words or lengthy statements, and write them below (or beside) your problem statement.

### 4. Ask "Why?" Four More Times

For each of the answers that you generated in Step 3, ask four further "whys" in succession. Each time, frame the question in response to the answer you've just recorded.

**The 5 Whys method also allows you to follow multiple lanes of inquiry**

### 5. Know When to Stop

You'll know that you've revealed the root cause of the problem when asking "why" produces no more useful responses, and you can go no further. An appropriate counter-measure or process change should then become evident.

### 6. Address the Root Cause(s)

Now that you've identified at least one root cause, you need to discuss and agree on the counter-measures that will prevent the problem from recurring.

### 7. Monitor Your Measures

Keep a close watch on how effectively your counter-measures eliminate or minimize the initial problem. You may need to amend them, or replace them entirely.

## [The Super Mario Effect](https://www.youtube.com/watch?v=9vJRopau0g0)

- The trick to learning more and having more success is how to frame the learning process
- Learn from failures instead of focusing on them
- Life gamification: it is natural to ignore the failures and try again, you want to keep trying
- Reframe the challenges: learn through something cool
- Thus the fear of failure is taken off the table

## Discussion Questions

1. What’s the one thing I bring to this career (and a potential employer) that nobody else can?

I think saying that nobody else can is a bit extreme, but I do believe that each individual has unique perspectives and capabilities for problem solving. I feel that my strengths are in my creativity, artistic eye, and my background in hospitality, which has provided me with incredible customer service skills, and abilities to anticipate the needs of customers.

2. What are 3 things I’ll start doing to “un-stick” myself whenever I get stuck on tough piece of code, logic, or feature?

First and foremost is to take the time really break down and comprehend the problem I am trying to solve. Secondly, if I am stuck, taking time to reassess and try to view the problem in another light. Lastly, recognizing when to ask for help or research the problem further.