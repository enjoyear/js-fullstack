export PATH=$PATH:./node_modules/.bin/

##Steps

###Install packages
1. npm install —-save express
2. install mongo db driver
    npm i -S mongodb
3. npm i -S react react-dom
4. npm install --save-dev webpack
5. npm i -D babel-cli babel-loader babel-preset-es2015 babel-preset-stage-2 babel-preset-react
6. npm i -D nodemon
7. npm i -D eslint eslint-plugin-react babel-eslint


###Setup folder hierarchies
* mkdir src
* mkdir public
    * for holding static files
* mkdir api
    * directory for backend api server

index name is for the starting point in each directory

###Setup scripts in package.json
start: nodemon --exec babel-node server.js --ignore public/
* ignore changes under public

dev: webpack -wd
* set up webpack watch mode and develop mode
* webpack is to package modules from “entry” to “output” and executing “module loaders”, e.g. babel, along the way as specified in webpack.config.js
    * .babelrc: to have babel work with selected presets 
        * this instructs babel to use these three presets
        * react for transforming JSX
        * the other two presets for us to safely use JavaScript modern features and not worry about browsers that do not understand them
        
###Test your setup
`
babel-node server.js 
`
should print something.


        