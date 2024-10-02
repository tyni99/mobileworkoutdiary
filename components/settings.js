import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/styles';
import { RadioButton } from 'react-native-paper';

const Settings = () => {
  const [checked, setChecked] = React.useState('kilometers'); 

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Choose which unit you want to use:</Text>
      
      <View style={{flexDirection: 'row', marginTop:30}}>
      <RadioButton
        value="kilometers"
        color='green'
        status={checked === 'kilometers' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('kilometers')}
      />
      <Text style={styles.text}>Kilometers</Text>

      <RadioButton
        value="miles"
        color='green'
        status={checked === 'miles' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('miles')}
      />
      <Text style={styles.text}>Miles</Text>
      </View>
    </View>
  );
};

export default Settings;
