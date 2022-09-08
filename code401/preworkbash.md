# Bash Command Line Tutorials

## [The Command Line](https://ryanstutorials.net/linuxtutorial/commandline.php)

- A command line, or terminal, is a text based interface to the system. You are able to enter commands by typing them on the keyboard and feedback will be given to you similarly as text.

- Typically a command is always the first thing you type. After that we have what are referred to as command line arguments The first command line argument is also referred to as an option. Options are typically used to modify the behaviour of the command.

- Most commands produce output and it will be listed straight under the issuing of the command. Other commands just perform their task and don't display any information unless there was an error.

- After the command has run and the terminal is ready for you to enter another command the prompt will be displayed. If no prompt is displayed then the command may still be running

- Within a terminal you have what is known as a shell. This is a part of the operating system that defines how the terminal will behave and looks after running (or executing) commands for you. There are various shells available but the most common one is called bash which stands for Bourne again shell.

**When you enter commands, they are actually stored in a history. You can traverse this history using the up and down arrow keys. So don't bother re-typing out commands you have previously entered, you can usually just hit the up arrow a few times. You can also edit these commands using the left and right arrow keys to move the cursor where you want.**

## [Basic Navigation](https://ryanstutorials.net/linuxtutorial/navigation.php)

- **pwd** stands for Print Working Directory. It tells you what your current or present working directory is.

- **ls** stands for list, and lists what is in the current directory

- If you run **ls** with a single command line option ( -l ) it indicates we are going to do a long listing. A long listing has the following:
  - First character indicates whether it is a normal file ( - ) or directory ( d )
  - Next 9 characters are permissions for the file or directory.
  - The next field is the number of blocks.
  - The next field is the owner of the file or directory.
  - The next field is the group the file or directory belongs to.
  - Following this is the file size.
  - Next up is the file modification time.
  - Finally we have the actual name of the file or directory.

- **ls** with a command line argument ( /etc ) tells **ls** not to list our current directory but instead to list that directories contents.

- Whenever we refer to either a file or directory on the command line, we are in fact referring to a *path*. ie. *A path is a means to get to a particular file or directory on the system.*