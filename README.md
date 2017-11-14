# Teacup

##### @WIP __φ(．．)  

* Gulp workflow [x] CSS [x] Less [\_] Sass
* Grunt workflow [\_] CSS [\_] Less [\_] Sass
* Sprites generator
* Mixins, Functions, Tools **@wip**

Start an **eye-end project** with just a *teacup*.

 ζζ  
\二/つ

### Features
Starter kit for :

* *.css* | **Myth**
* *.less* | **Less**
* *.scss* | **Sass**

Task files :

* *gulpfile.js* | **Gulp**
* *gruntfile.js* | **Grunt**

Build for :

* *development* | sourcemapped
* *staging* | prefixed
* *production* | minified

#### Assets
The assets tree you put in ``src/assets/`` will simply be copied to ``dist/``.  
Example :  

* src/assets/fonts/comic-sans.woff ``-->`` dist/fonts/comic-sans.woff
* src/assets/images/avatar.png ``-->`` dist/images/avatar.png
* src/assets/favicon.ico ``-->`` dist/favicon.ico

## Install

### Starter Kits
Keep only the starter kit you're gonna use in the source folder :

* src/css
* src/less
* src/sass

### Task Files
Keep the task files you're interested in having :

* gulpfile.js
* gruntfile.js

Keep only the right declaration of the function ``build`` in the task files :

```
/*const build = require('./src/css/build.js');*/
/*const build = require('./src/less/build.js');*/
/*const build = require('./src/sass/build.js');*/

```

### Dependencies
Remove the ``package.json`` which is present in the project's root.  
Cut/Paste the ``package.json`` file from your starter kit folder to the project's root :

* ./src/css/package.json ``-->`` ./package.json
* ./src/less/package.json ``-->`` ./package.json
* ./src/sass/package.json ``-->`` ./package.json

Launch your favorite package manager :

* ``yarn``
* ``npm install``
