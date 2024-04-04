import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import zxcvbn from 'zxcvbn';

const PasswordStrengthBar = ({ password }) => {
  const testResult = zxcvbn(password);
  const num = (testResult.score * 100) / 4;

  const funcProgressColor = () => {
    switch (testResult.score) {
      case 0:
        return '#828282';
      case 1:
        return '#EA1111';
      case 2:
        return '#FFAD00';
      case 3:
        return '#9bc158';
      case 4:
        return '#00b500';
      default:
        return 'none';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: `${num}%`, backgroundColor: funcProgressColor() }]} />
      </View>
      <Text style={{ color: funcProgressColor(), marginTop: 8 }}>
        {/* Display password strength label here */}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  },
  progressBarContainer: {
    height: 7,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
  },
  progressBar: {
    height: '100%',
    borderRadius: 4,
  },
});

export default PasswordStrengthBar;
