# cocos2dx-webpack-example
Hello world with webpack build process.

# How to setup
Start a new project with `cocos new -l js <projectname>`  
Replace the projects files with the ones from this repo.  
Run `npm install`

Run `webpack` to build the sources and `webpack-dev-server` to have a process watching 
the source files for changes and refreshing the browser.

# What is built
2 files are built to the `src` folder -  
`vendor.js` which contains all the code from the included npm modules  
`bundle.js` which contains the code from the entry file - `source/init.js`

Final js files have to be in `src` folder for android build to work.

---- 

You may need to install webpack and webpack-dev-server globally with `npm install -g webpack` and so on.

Check this link for webpack reference - [webpack](https://webpack.github.io/docs/)
