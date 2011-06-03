ntodo
=====

A simple CLI TODO parser for the lazy coder


![Screenshot](https://github.com/geeklist/ntodo/raw/master/misc/sample.png)

Installation
------------

With [npm](http://github.com/isaacs/npm):

    npm install ntodo

CLI
---

    Usage: ntodo [Options]
    
    [Options]
    
    -h, --help      Display help
    -p, --path      It sets the path
                      ex: ntodo -p .
                      ex: ntodo -p ../
    
    you can also skip the -p ;-)
    
    ntodo .
    ntod ../

Todo
------------

  * Integrate with Github
  * When a task is completed, remove from code and add to a history file and include who finished it
  * Include email notification if the project includes a notify.json at the root (for whoever wants to be notified)
