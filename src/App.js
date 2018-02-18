/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import { client, store } from './redux/store';
import Root from './components/Root.component';

export default class App extends Component {
  componentWillMount() {
    console.log(this.props);
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Root />
        </Provider>
      </ApolloProvider>

    );
  }
}
