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

- The file system under linux is a hierarchical structure. At the very top of the structure is what's called the *root directory*. It is denoted by a single slash ( / ). It has subdirectories, they have subdirectories and so on. Files may reside in any of these directories.

- *Absolute paths* specify a location (file or directory) in relation to the root directory. You can identify them easily as they always begin with a forward slash ( / )

- *Relative paths* specify a location (file or directory) in relation to where we currently are in the system. They will not begin with a slash.

**Building blocks you may use to help build your paths:**

1. `~` (tilde) - This is a shortcut for your home directory. eg, if your home directory is /home/ryan then you could refer to the directory Documents with the path /home/ryan/Documents or ~/Documents

2. `.` (dot) - This is a reference to your current directory. eg in the example above we referred to Documents on line 4 with a relative path. It could also be written as ./Documents (Normally this extra bit is not required but in later sections we will see where it comes in handy).

3. `..` (dotdot)- This is a reference to the parent directory. You can use this several times in a path to keep going up the hierarchy. eg if you were in the path /home/ryan you could run the command ls ../../ and this would do a listing of the root directory.

- In order to move around in the system we use a command called **cd** which stands for change directory. If you run the command cd without any arguments then it will always take you back to your home directory. The command cd may be run without a location but usually will be run with a single command line argument (location we would like to change into). The location is specified as a path and as such may be specified as either an absolute or relative path and using any of the path building blocks mentioned above.

- **Tab Completion:** When you start typing a path you may hit the Tab key on your keyboard at any time which will invoke an auto complete action. If nothing happens then that means there are several possibilities. If you hit Tab again it will show you those possibilities. You may then continue typing and hit Tab again and it will again try to auto complete for you.

- `/etc` - Stores config files for the system.
- `/var/log` - Stores log files for various system programs.
- `/bin` - The location of several commonly used programs.
- `/usr/bin` - Another location for programs on the system.

## [More About Files](https://ryanstutorials.net/linuxtutorial/aboutfiles.php)

*Under the hood, everything is actually a file. A text file is a file, a directory is a file, your keyboard is a file (one that the system reads from only), your monitor is a file (one that the system writes to only) etc.*

**Linux is an Extensionless System:**

- A file extension is normally a set of 2 - 4 characters after a full stop at the end of a file, which denotes what type of file it is.

Common Extensions:

- file.exe - an executable file, or program.
- file.txt - a plain text file.
- file.png, file.gif, file.jpg - an image.

- In other systems such as Windows the extension is important and the system uses it to determine what type of file it is. Under Linux the system actually ignores the extension and looks inside the file to determine what type of file it is.

- It can sometimes be hard to know for certain what type of file a particular file is. There is a command called **file** which we can use to find this out. e.g. `file [path]`

- Whenever we specify a file or directory on the command line it is actually a path, and because directories are actually just a special type of file, it would be accurate to say that a path is a means to get to a particular location in the system and that location is a file.

- **Linux is case sensitive**

**Spaces in names:**

- Spaces can indicate two command line arguments, as such **cd** moves into whichever directory is specified by the first command line argument only.

- Can use quotes to get around this: anything inside quotes is considered a single item.

- Another method is to use what is called an escape character, which is a backslash ( \ ). What the backslash does is escape (or nullify) the special meaning of the next character.

*In the previous section we learnt about something called Tab Completion. If you use that before encountering the space in the directory name then the terminal will automatically escape any spaces in the name for you.*

- If the file or directory's name begins with a . (full stop) then it is considered to be hidden.

- The command **ls** which we have seen in the previous section will not list hidden files and directories by default. We may modify it by including the command line option **-a** so that it does show hidden files and directories.

## [Manual Pages!](https://ryanstutorials.net/linuxtutorial/manual.php)

**The manual pages are a set of pages that explain every command available on your system including what they do, the specifics of how you run them and what command line arguments they accept.**

- Invoke with `man <command to look up>`

- *Synopsis:* a quick overview of how the command should be run. Square brackets ( [ ] ) indicate that something is optional.

- To exit the man pages press 'q' for quit.

- Keyword search on the Manual pages: `man -k <search term>`

- Search within a manual page: in the particular manual page you would like to search press forward slash '/' followed by the term you would like to search for and hit 'enter' If the term appears multiple times you may cycle through them by pressing the 'n' button for next.

- Long hand command line options begin with two dashes ( -- ) and short hand options begin with a single dash ( - ). When we use a single dash we may invoke several options by placing all the letters representing those options together after the dash.

## [File Manipulation!](https://ryanstutorials.net/linuxtutorial/filemanipulation.php)

- Creating a directory: **mkdir which is short for Make Directory.**

- **-p** tells mkdir to make parent directories as needed

- **-v** makes mkdir tell us what it is doing

- The command to remove a directory is **rmdir**, short for remove directory.

- **touch** creates file

- touch is actually a command we may use to modify the access and modification times on a file (normally not needed but sometimes when you're testing a system that relies on file access or modification times it can be useful).

- make a duplicate of a file or directory: **cp** which stands for copy.

- When we use cp the destination can be a path to either a file or directory. If it is to a file then it will create a copy of the source but name the copy the filename specified in destination. If we provide a directory as the destination then it will copy the file into that directory and the copy will have the same name as the source.

- Using the **-r** option, which stands for recursive, we may copy directories. Recursive means that we want to look at a directory and all files and directories within it, and for subdirectories, go into them and do the same thing and keep doing this.

- To move a file we use the command **mv** which is short for move. It operates in a similar way to cp. One slight advantage is that we can move directories without having to provide the -r option.

- Normally mv will be used to move a file or directory into a new directory. We may provide a new name for the file or directory and as part of the move it will also rename it. Now if we specify the destination to be the same directory as the source, but with a different name, then we have effectively used mv to rename a file or directory.

- The command to remove or delete a file is **rm** which stands for remove.

- When rm is run with the -r option it allows us to remove directories and all files and directories contained within.

- A good option to use in combination with r is i which stands for interactive. This option will prompt you before removing each file and directory and give you the option to cancel the command.

## [CHEATSHEET](https://ryanstutorials.net/linuxtutorial/cheatsheet.php)