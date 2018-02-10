import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
  } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';


class Hello extends Component {
    renderData({ data }) {
        console.log(data);
        let response = 'Loading';
        if (!data.loading) {
            response = data.hello;
        }
        return response;
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    {this.renderData(this.props)}
                </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });
  
const query = gql`
    {
        hello
    }
`;
  
export default graphql(query)(Hello);
