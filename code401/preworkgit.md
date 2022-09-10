# [Learn Git Branching](https://learngitbranching.js.org/)

## Rebasing

- Combine work between branches via *rebasing*, which essentially takes a set of commits, "copies" them, and puts them somewhere else.

- The advantage is that it can be used to make a nice linear sequence of commits.

## HEAD

- HEAD is the symbolic name for the currently checkout out commit (essentially what commit you're working on top of)

- HEAD always points to the most recent commit which is reflected in the working tree. Most git commands which make changes to the working tree will start by changing HEAD

- Normally HEAD points to a branch name. When you commit, the status of this branch is altered and this change is visible through HEAD.

![Git HEAD](../img/401.git/gitHEAD.png)

- Detaching HEAD just means attaching it to a commit instead of a branch.

![Git Detach HEAD](../img/401.git/detachHEAD.png)

## Relative Refs

- Use `git log` to see hashes.

- Git only requires you to specify enough characters of the hash until it uniquely identifies the commit.

- With relative regs, you can start somewhere memorable and work from there.

- Two simple Relative commits:
  1. Moving upwards one commit at a time with `^`
  2. Moving upwards a number of times with `~<num>`

![Realtive Ref Caret](../img/401.git/realtiverefcaret.png)

![Relative Ref Caret and HEAD](../img/401.git/relativerefhead.png)

- The tilde operator (optionally) takes in a trailing number that specifies the number of parents you would like to ascend.

![Relative Ref Tilde](../img/401.git/relativereftilde.png)

## Branch Forcing

- One of the most common ways to use relative refs is to move branches around. You can directly reassign a branch to a commit with the `-f` option which moves (by force) the branch.

![Branch Forcing](../img/401.git/branchforcing1.png)