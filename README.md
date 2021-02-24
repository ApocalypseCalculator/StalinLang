# StalinLang

An experimental esoteric programming language created using Node.js

## Warning

This is terribly made and simply replaces keywords in JS and then transpiles to JS.

In the future I might use lexers and tokens. 

## How to use

Download the latest release in the releases tab. Add the path of the executable to your environment variables, then run the program using
```sh
stalin code.stalin
```
(you'd need to rename the executable to stalin)

Alternatively you can use the StalinLang shell by simply running: 
```
stalin
```
(exit with Ctrl+C)
![](https://media.discordapp.net/attachments/670393876883963905/814265649135091712/unknown.png)


Here is a sample StalinLang code: 
```stalin
HOLD x = 10;
x+=20;
LIFESENTENCE y = 30;
x+=y;
GULAG(x);
```
You can find other examples in the /examples folder
