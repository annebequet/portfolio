const path = require('path');

module.exports = {
 "mode": "development",
"entry": "./src/app.js",

 "output": {
   "path": __dirname + '/dist',
   "filename": "main.js"
 },
 devServer: {
   contentBase: path.join(__dirname, 'dist')
 },
 "module": {
   "rules": [
     {
       "test": /\.css$/,
       "use": [
         "style-loader",
         "css-loader"
       ]
     },
     {
       "test": /\.(jpe?g|png|gif|svg)$/i, 
       "use": "file-loader?name=app/images/[name].[ext]"
     },
     {
       "test": /\.js$/,
       "exclude": /node_modules/,
       "use": {
         "loader": "babel-loader",
         "options": {
           "presets": [
             "@babel/preset-env",
           ]
         }
       }
     },
   ]
 }
};