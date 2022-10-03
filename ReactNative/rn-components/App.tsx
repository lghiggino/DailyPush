import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Touchable } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { PaperRadioButton } from './src/components/PaperRadioButton';
import { RadioGroupRN } from './src/components/RadioGroup';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <PaperRadioButton />
      <RadioGroupRN />
      <View style={{
        // height: 100,
        backgroundColor: 'green'
      }}
      >
        <View style={{
          height: 100,
          backgroundColor: 'blue'
        }}
        >
          <Text>banana</Text>
        </View>
        <View style={{
          height: 100,
          backgroundColor: 'purple'
        }}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
