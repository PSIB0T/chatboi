/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import Hello from './components/Hello.component';
import { client } from './redux/store';

export default class App extends Component {
  componentWillMount() {
    console.log(this.props);
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <Hello />
      </ApolloProvider>

    );
  }
}
