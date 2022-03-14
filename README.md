## Who Am I?
#### My name is Stephanie Hill, and I am a student at Code Fellows!
Learn more about me on my [profile page](https://github.com/stephnitis)

# reading-notes
## Code 102 Reading Notes

### [Choosing a Text Editor](https://codefellows.github.io/code-102-guide/curriculum/class-02/Choosing-A-Text-Editor--The-Older-Coder.pdf)

- A **Text Editor** is a piece of software that allows you to write and manage text, especially the text that you use to build a website.
- Features to look for:
  1. Code Completion
  2. Syntax Highlighting
  3. Variety of Themes (to reduce eye strain and fatigue)
  4. A Healthy Selection of Extensions Available
- **Code Completion:** This feature will display possible suggestions based upon what you originially typed
- **Emmet** is a plugin for many popular text editors which greatly improves HTML & CSS workflow. It is a shorthand language that allows for more efficient code writing.
- **Syntax Highlighting:** A feature that colorizes the text you type, making it more noticeable. *Attributes* are a different color than *elements* and *elements* are a different color than *copy*
- **Extensions:** Like plugins for your editor allowing you to add functionality as you need it.
- An **IDE (Integrated Development Environment)** is a suite of different software all coming together, It is a text editor, file manager, compiler, and a debugger all in one software package.

### [The Command Line](https://ryanstutorials.net/linuxtutorial/commandline.php)

- A **command line,** or **terminal,** is a text based interface to the system. You are able to enter commands by typing them on the keyboard and feedback will be given to you similarly as text. 
- A *command prompt* is the input field in a text-based user interface screen for an operating system or program. A prompt in this context is something designed to elicit an action.
- Typically a *command* is always the first thing you type. Followed by command line arguments.
  - Important to note that these are separated by spaces. **There must be a space between the command and the first command line argument also.**
- The first command line argument is also referred to as an *option.*
- **Options** are typically used to modify the behavior of the command. They are typically listed before other arguments and begin with a dash.
- Most commands produce *output* and it will be listed straight under the issuing of the command. Other commands just perform thie task and don't display any information unless there was an error.
- After the command has run and the terminal is ready for you to enter another command, a prompt will be displayed. If no prompt is displayed then the command may still be running.
- Within a terminal you have what is known as a **shell.** This is a part of the operating system that defines how the terminal will behave and look after running (or executing) commands for you.
- Most common shell is called **bash** which stands for *Bourne again shell* 
- **Shortcuts:** When you enter commands, they are actually stored in a history. You can traverse this history using the up and down arrow keys. So don't bother re-typing out commands you have previously entered, you can usually just hit the up arrow a few times. You can also edit these commands using the left and right arrow keys to move the cursor where you want.

### [Basic Navigation](https://ryanstutorials.net/linuxtutorial/navigation.php)

- **pwd (Print Working Directory)** Make use of this command often so as to remind yourself where you presently are
- **ls (List) :** Tells us what is in the location.
- **-l (Long Listing) :** a single command line option which has the following:
  - First character indicates whether it is a normal file ( - ) or directory ( d )
  - Shows permissions for the file or directory
  - Number of blocks
  - Owner of the file or directory
  - The group the file or directory belongs to
  - File size
  - File modification time
  - Actual name of the file or directory
- **/etc** a command line argument which tells ls not to list current directory but instead to list that directories contents.
- The file structure under Linux is a hierarchical structure. At the very top of the structure is what is called **root directory.** It is denoted by a single slash ( / ). It has subdirectories, they have subdirectories and so on.
- **Absolute Paths** specify a location (file or directory) in relation to the root directory. You can identify them easily as they always begin with a forward slash ( / ).
- **Relative Paths** specify a location (file or directory) in relation to where we currently are in the system. They will not begin with a slash.
- **(tilde: ~)** is a shortcut for your home directory.
  - e.g. if your home directory is /home/steph then you could refer to the directory Documents with the path /home/steph/Documents or ~/Documents
- **. (dot)** references your current directory
  -e.g. in the example above if in the directory Documents it could also be written as ./Documents
- **.. (dotdot)** references a parent directory, and can be used several times in a path to keep going up the hierarchy
  - e.g. if you were in the path /home/steph you could run the command ls ../../ and this would do a listing of the root directory.
- **cd [location]** stands for change directory, and allows us to move around in the system
  - If you run the command cd without any arguments then it will always take you back to your home directory.
  - May be run without a location, but usually will be run with a single command line argument which is the location we would like to change into. 
  - The location is specified as a path and as such may be specified as either an absolute or relative path and using any of the path building blocks mentioned.
- **Tab Completion** When you start typing a path (anywhere on the command line) you may hit the tab key at any time to invoke an auto complete action. If nothing happens then that means there are several possibilities. You may then continue typing and hit tab again and it will again try to auto complete for you.

### [About Files](https://ryanstutorials.net/linuxtutorial/aboutfiles.php)

- With Linux everything under the hood is a file
  - A text file is a file, your keyboard is a file (one that the system reads from only) your monitor is a file (one that the system writes to only)
- **File Extension:** normally a set of 2-4 characters after a full stop at the end of a file, which denotes what type of file it is. 
- Some common file extensions:
  - file.exe - an executable file, or program
  - file.txt - a plain text file
  - file.png, file.gif, file.jpg - an image
 - In other systems such as Windows, the extension is important and the system uses it to determine what type of file it is.
 - Under Linux the system actually ignores the extension and looks inside the file to determine what type of file it is.
 - **file [path]** command to help us find out what type of file a particular file is.
  - command line is a path because directories are actually a special type of file, and tbus a path is a means to get to a particular location in the system and that location is a file.
- **Linux is case sensitive**
- Spaces in file names are valid, but spaces in the command line are also how we separate items; how we know what is the program name and can identify each command line argument.
  - Use quotes around the entire item to indicate a single item
  - Use **Escape Characters** which is a backslash ( \ ) which escapes or nullifies the special meaning of the next character
  - If using Tab Completion, then before encountering the space in the directory name the terminal will automatically escape any space in the name for you
- If the file or directory's name begins with a .(full stop) then it is considered to be hidden. Renaming it to begin with a . or not will determine it as such.
- The command ls will not list hidden files and directories by default
- Including the command line option **-a** will list contents including hidden files and directories
