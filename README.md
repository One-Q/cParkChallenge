# cParkChallenge

## Installation

First of all you need to have these utilities installed:
  - NodeJS
  - React Native
  - MongoDB
  - Everything that is relative to Android (Android SDK, emulator,...)
  
The first command you have to launch is: `npm install`

Then the command: `npm run install:all` to install all the dependencies of the client and server side.

## Configuration

There are two config files, one for the client (client/config.js) and one for the server (server/config.js)

Client: 
```javascript
  {
    URL: 'http://IP:8000/' // Where IP is your ip adress. Localhost doesn't work
  }
```

Server: 
```javascript
  {
    MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost:27017/cparkchallenge',
    PORT: process.env.PORT || 8000,
  }
```

## Start the project

Before starting the project, make sure you've launched mongod and the emulator.

Then: `npm run dev:android`
