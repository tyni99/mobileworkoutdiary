import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const List = ({ route }) => {
  const { workouts } = route.params || { workouts: [] };

  const renderItem = ({ item }) => {
    let icon;

    // Tarkista, mikä harjoitus on ja määritä ikoni
    if (item.workout === 'Run') {
      icon = <FontAwesome6 name="person-running" size={20} />;
    } else if (item.workout === 'Ski') {
      icon = <FontAwesome6 name="person-skiing" size={20} />;
    } else if (item.workout === 'Swim') {
      icon = <FontAwesome6 name="person-swimming" size={20} />;
    }

    return (
      <View style={styles.item}>
        {icon} 
        <Text style={styles.text}> {item.date}</Text>
        <Text style={styles.text}>Workout: {item.workout}</Text>
        <Text style={styles.text}>Duration: {item.duration} min</Text>
        <Text style={styles.text}>Distance: {item.distance} km</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={workouts}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()} // Käytä indeksiä avaimena
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    alignItems: 'center', 
    backgroundColor: '#f9c2ff',
    padding: 1,
    margin:5,
    borderRadius: 5,
    width:'100%',
    
  },
  text: {
    fontSize: 16,
    marginLeft: 10, 
  },
});

export default List;
