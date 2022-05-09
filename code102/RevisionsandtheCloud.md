### [Git Tutorial](https://blog.udemy.com/git-tutorial-a-comprehensive-guide/)

- **Version Control** a system that allows you to revisit various versions of a file or set of files by recording changes.
- **Local Version Control** A Local VCS entails one database on your hard disk that stores changes to files.
- **Centralized Version Control** entails a single server storing all changes and file versions, which can be accessed by various clients.
- **Distributed Version Control** allows clients to create mirrored repositories. These data backups can be easily be placed on the server to replace any lost information.

#### What is Git?

- *Snapshots* Git is a DVCS that stores data in a file system made up of snapshots. Each time you save a changed version of your project — called commit — Git creates a snapshot of the file and stores a reference to it. If the file has not changed, Git only stores a reference to the already-stored identical version of it.
- *Files in Git can reside in three main states: committed, modified and staged.*
- **Committed** Data is securely stored in a local database
- **Modified** File has been changed but not committed to the database
- **Staged** Flagged a file’s changed version to be committed in the next snapshot

#### Local Repository Structure

1. Working Directory: The actual files reside here.
2. Index: The area used for staging
3. Head: Points to the most recent commit

- All files in a checked out (or working) copy of a project file are either in a tracked or untracked state.
  - *Tracked* Tracked files can be modified, unmodified, or staged; they were part of the most recent file snapshot.
  - *Untracked* Untracked files were not in the last snapshot and do not currently reside in the staging area.

- To determine the state of files, utilize the git status command: **git status**
- Track one file only by using the following format: **git add filename**
- Track all files in a repository by using the following command: **git add ***
- After staging one or multiple files, you should commit the changes and record what you did within the commit message: **git commit -m “made change x,y,z”**
- Commit all changes with **git commit -a**
- This command pushes changes from the local “master” branch to the remote repository named “origin” : **git push origin master**
