import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {styles} from './styles';

const ScreenA = ({navigation}) => {
  return (
    <View style={styles.mainView}>
      <Text style={[styles.text, {color: '#000'}]}>Screen A</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('ScreenB')}
        style={styles.BtnView}>
        <Text style={styles.text}>Navigate to Screen B</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScreenA;
