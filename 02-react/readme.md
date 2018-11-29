# Steps to set up the environment
## Initialize the npm package
`npm init`

## Install dependencies & typings
`npm install --save typescript parcel-bundler react react-dom @types/react @types/react-dom`

## Copy the config files
location: `/config-files`

## Create index.html
Create a html file `public/index.html`
```
<html>
  <body>
    <div id="app">Loading...</div>
    <script src="../src/index.tsx"></script>
  </body>
</html>
```

## Create index.tsx
Create a typescript file (tsx) `src/index.tsx`
```
import * as React from 'react';
import { render } from 'react-dom';

render(<div>Hello from react!</div>, document.getElementById('app'));
```

## Add the start script to npm
The script part of the package.json should look like this (I removed the _test_ script):
```
  "scripts": {
    "start": "parcel public/index.html"
  },
```

## Run the program
`npm start`

# Contents
## Component types