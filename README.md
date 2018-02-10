# ChatBoi

A chat application using [React Native](https://facebook.github.io/react-native/), [GraphQL](http://graphql.org/) and [node.js](https://nodejs.org/en/)

# Prerequisites
  - You'd need to activate the [ChatBoi_server](https://github.com/PSIB0T/chatboi-server) first
  - Add your ChatBoi_server host configurations inside config.js (Add your wlan ip instead of localhost)

Install the dependencies

```sh
$ yarn install
```

Next, open 2 additional terminals. In one of them, start the server

```sh
$ react-native start
```

And finally, after connecting your device, in the next terminal, start the app

```sh
$ react-native run-android
```