import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const ScreenB = ({navigation}) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prevCounter => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.mainView}>
      <Text style={[styles.text, {color: '#000'}]}>Screen B</Text>
      <Text style={[styles.text, {color: '#000'}]}>Counter: {counter}</Text>
      <TouchableOpacity
        onPress={() => {
          setCounter(0);
          navigation.navigate('ScreenA');
        }}
        style={styles.BtnView}>
        <Text style={styles.text}>Navigate to Screen A</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ScreenC');
        }}
        style={styles.BtnView}>
        <Text style={styles.text}>Navigate to Screen C</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScreenB;
