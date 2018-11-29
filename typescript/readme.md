# Steps to set up the environment
## Initialize the npm package
`npm init`

## Install typescript & ts-node
`npm install --save typescript ts-node`

## Copy the config files
location: `/config-files`

## Create index.ts
The contents should be `console.log('Hello from typescript!');`

## Add the start script to npm
The script part of the package.json should look like this (I removed the _test_ script):
```
  "scripts": {
    "start": "ts-node index.ts"
  },
```

## Run the program
`npm start`

# Contents
## Variables
- let/var/const

## Types
- Basic types
- Literal types
- Type unions
- Nullables
- Interfaces
- Classes