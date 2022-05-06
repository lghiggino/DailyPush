import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import successImage from '../../assets/success.png'
import { Copyrights } from '../Copyrights';

import { styles } from './styles';

export function Success() {
  return (
    <View style={styles.container}>
      <Image
        source={successImage}
        style={styles.image}
      />

      <Text
        style={styles.title}
      >
        Agradecemos o feedback
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text
          style={styles.buttonTitle}
        >
          Quero enviar outro
        </Text>
      </TouchableOpacity>

      <Copyrights />
    </View>
  );
}