import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const ScreenC = ({navigation}) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prevCounter => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.mainView}>
      <Text style={[styles.text, {color: '#000'}]}>Screen C</Text>
      <Text style={[styles.text, {color: '#000'}]}>Counter: {counter}</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ScreenB');
        }}
        style={styles.BtnView}>
        <Text style={styles.text}>Navigate to Screen B</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setCounter(0);
          navigation.navigate('ScreenA');
        }}
        style={styles.BtnView}>
        <Text style={styles.text}>Navigate to Screen A</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScreenC;
