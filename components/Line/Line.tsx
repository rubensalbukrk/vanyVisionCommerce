import React from 'react';
import { View, StyleSheet } from 'react-native';

const BlurredLine = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  line: {
    width: '95%',
    height: 1,
    backgroundColor: '#FFFFFF',
    opacity: 0.4, // Define a opacidade da linha para dar um efeito de desfoque leve
  },
});

export default BlurredLine;