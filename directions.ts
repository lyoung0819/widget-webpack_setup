/* 

1. Create Dist/index.html

>>>>>
CLI COMMANDS:
1. npm init

2. sudo npm i typescript --save-dev

3. sudo npm i webpack webpack-cli --save-dev

4. sudo npm i ts-loader --save-dev

4. tsc --init

>>>>>
TSCONFIG.JSON

- "target" : "es2016"
- "module": "Node16"
- "moduleResolution": "Node16"

- **rootDir - keep empty because webpack will set this up**
- allowJS -true
- outDir - ./dist

- "noImplicitAny": true
- "strictNullChecks": true
- "noUnusedParameters": true
- "noImplicitReturns": true
- "noImplicitOverride": true



>>>>> 
Configure Webpack: 
1. Create a webpack.config.js in ROOT

2. Post this in webpack.config.js:
-----
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
----- 


3. Create src/

(Current File Structure:
dist
    - index.html
src
    - index.ts
package.json
tsconfig.json
webpack.config.js)


----- 
>>>>> Create index.ts in SRC/

When we run 'npx webpack' in the CL, it will run our bundle for us and create dist/bundle.js


>>>>> Add Script to body in html file 
<script  src="bundle.js"></script>


>>> Add Live Server & Run All 
In CL:
1. sudo npm i live-server 
2. sudo npm i npm-run-all --save-dev

    >>> Now we need to update our scripts:

    In package.json under scripts:

    "start": "npm run bundle && npm-run-all --parallel watch serve", (this will run bundle and all, and in paralle, it will also run watch and serve)
    "bundle": "webpack",
    "watch": "webpack --watch"  (this will watch for any changes and will auto re-bundle)
    "serve": cd dist && live-serve (this will actually serve the new live server)


FINALLY:

In CL:
npm run start - this will run your start script, and through the various steps, open your html file!

*/