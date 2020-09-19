import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style ={{ flex: 1, flexDirection: 'row'}}>
        <View style= {{flex: 1, backgroundColor: 'yellow' }} />
        <View style= {{flex: 1, backgroundColor: 'black' }} />
        <View style= {{flex: 1, backgroundColor: 'pink' }} />
        <View style= {{flex: 1, backgroundColor: 'red' }} />
      </View>

      <View style ={{ flex: 1, flexDirection: 'row'}}>
        <View style= {{flex: 1, backgroundColor: 'black' }} />
        <View style= {{flex: 1, backgroundColor: 'pink' }} />
        <View style= {{flex: 1, backgroundColor: 'red' }} />
        <View style= {{flex: 1, backgroundColor: 'yellow' }} />
      </View>

      <View style ={{ flex: 1, flexDirection: 'row'}}>
        <View style= {{flex: 1, backgroundColor: 'pink' }} />
        <View style= {{flex: 1, backgroundColor: 'red' }} />
        <View style= {{flex: 1, backgroundColor: 'yellow' }} />
        <View style= {{flex: 1, backgroundColor: 'black' }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff'
  },
});
