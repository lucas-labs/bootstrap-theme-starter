# Bootstrap 4 Theming Starter pack
This project was designed to be an starter point to help you in the process of developing custom Bootstrap 4 themes.

> Bootstrap version: 5.0.1
> Gulp version: 4.0.2

## What is inside this repository?
This repository contains a basic project structure that serves as a base for developing bootstrap themes.

It has a building script using [Gulp](https://gulpjs.com/) with a few tasks that makes it easy for you to develop and compile saas files, removing the need of performing boring and repetitive tasks.

## What are the capabilities of this project?
* Automatically compile sass files.
* Automatically minifies the resulting .css files
* Images optimization
* Automatically injects the bootstrap 5 javascript dependeces into the project.
* It uses Browsersync. This allows, [among other things](http://damonbauer.me/browsersync/), to synchronize the browser with the development enviroment by automagically injecting your source code changes into the browser, removing the need of performing a manual refresh.

## Prerequisites
* Install [Node and Node Package Manager](http://nodejs.com)
* Install [gulp-cli](https://gulpjs.com/) (run ```npm instal gulp-cli -g```).

#### Verify your installation
Run: 
```
$ gulp -v

$ npm -v
```

Make sure both of the above commands are executed successfully.

## Getting started
1. Clone this repo
1. Run ```npm install``` to install the dependences  
1. Run ```npm start``` to run browsersync and start coding...

At that moment, BrowserSync is gonna be runing in the folder /src waiting for changes in the files. If any file in that folder changes, BrowserSync will trigger a refresh in the browsers (and gulp will compile your .sccs if they were changed).

> Note: You can also run ```gulp serve``` or simply ```gulp``` instead of ```npm start```

## Project structure
* ```/src```  
It contains the source code. BrowserSync is gonna be running here.
* ```/src/scss```  
This folder contains the ```.scss``` files. They will be automatically compiled into CSS.
* ```/src/css```  
The result of the .scss compiling process is gonna be stored here.
* ```/src/js/```  
In this folder the bootstrap JS dependences will be stored. 
* ```/src/img/```  
You have to store your images here. The ```gulp build``` command will look at this folder and optimize the images it founds.
* ```/out```  
The result of the ```gulp build``` command will be stored here.

## Available gulp commands

### gulp serve (or gulp, or npm start)
* Compiles the .scss files into css
* Automatically injects the bootstrap JavaScript dependences into the project.
* Initialize a BrowserSync server in ```/src```  

### gulp build --prod
* Compiles the .scss files into css
* Automatically injects the bootstrap JavaScript dependences into the project.
* Automatically minifies .css files
* Automatically optimizes images.
* It stores the result of the building process into ```/out``` folder
