import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { RadioButton } from 'react-native-paper';

export const PaperRadioButton = () => {
  const [checked, setChecked] = useState('first');

  useEffect(() => {
    console.log(checked)
  }, [checked])

  return (
    <View>
      <RadioButton
        value="first"
        status={checked === 'first' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('first')}
        color="red"
      />
      <RadioButton
        value="second"
        status={checked === 'second' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('second')}
      />
    </View>
  );
};

