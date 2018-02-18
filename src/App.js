/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { client } from './redux/store';
import RootStack from './routes/navigator';

export default class App extends Component {
  componentWillMount() {
    console.log(this.props);
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <RootStack />
      </ApolloProvider>

    );
  }
}
