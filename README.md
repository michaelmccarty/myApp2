# MyApp2 1.3.0

## This is just a lil app living its best life... don't worry too much about it.

> npm i  
> npm start

> Please create your own config.js file in the root directory and populate it like this:

const config = {};

config.firebase = {
  apiKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  authDomain: 'xxxxxxxxxxxx.firebaseapp.com',
  databaseURL: 'xxxxxxxxxxxxxxxxxxxxx',
  projectId: 'xxxxxxxxxxxxxxx',
  storageBucket: 'xxxxxxxxxxxxxxxxxxx',
  messagingSenderId: 'xxxxxxxxxxxxxxxxxx',
  appId: 'xxxxxxxxxxxxxxxxxxxxxxxxx'
};

module.exports = config;


> then create environments.ts inside src/environments/ (also create this directory) and populate it with this:

export const environment = {
  production: false,
  firebase: {
    apiKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    authDomain: 'xxxxxxxxxxxx.firebaseapp.com',
    databaseURL: 'xxxxxxxxxxxxxxxxxxxxx',
    projectId: 'xxxxxxxxxxxxxxx',
    storageBucket: 'xxxxxxxxxxxxxxxxxxx',
    messagingSenderId: 'xxxxxxxxxxxxxxxxxx',
    appId: 'xxxxxxxxxxxxxxxxxxxxxxxxx'
  }
};
