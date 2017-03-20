import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class Callout extends Component {

  render() {
    const { name, image, description } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.bubble}>
          <View>
            <Text style={styles.bubleTitle}>{name}</Text>
            <Text>{description}</Text>
          </View>
        </View>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  bubble: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 5,
    width: 200,
  },
  bubleTitle: {
    fontSize: 16,
    marginBottom: 5,
  },
});
