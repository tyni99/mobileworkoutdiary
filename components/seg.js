import * as React from 'react';
import { SafeAreaView, StyleSheet, Modal, TouchableOpacity, Text, Pressable, Alert } from 'react-native';
import { useState } from 'react';
import { SegmentedButtons } from 'react-native-paper';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { TextInput } from 'react-native-paper';
import { View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Button } from 'react-native-paper';
import styles from '../styles/styles';



const Segmented = ({ navigation }) => {
  const [workout, setWorkout] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');

  const work = [selectedDate, workout, distance, duration]

  const [workouts, setWorkouts] = useState([]);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
    toggleModal();
  };

  const addWorkout = () => {
    if(workout == ''){
      Alert.alert('!!!!!!', 'Choose which exercise you used to do', [
        {
          text: 'Okay',
          style: 'Cancel',
        }, 
      ]); 
    }else if(distance==''){
      Alert.alert('!!!!!!', 'Choose distance', [
        {
          text: 'Okay',
          style: 'Cancel',
        },
    ])}
    else if(distance<0){
      Alert.alert('!!!!!!', 'distance cant be negative', [
        {
          text: 'Okay',
          style: 'Cancel',
        },
    ])}
    else if(duration<0){
      Alert.alert('!!!!!!', 'duration cant be negative', [
        {
          text: 'Okay',
          style: 'Cancel',
        },
    ])}
    else if(duration==''){
      Alert.alert('!!!!!!', 'Choose duration', [
        {
          text: 'Okay',
          style: 'Cancel',
        },
    ])}
    else if(selectedDate==''){
      Alert.alert('!!!!!!', 'Choose date', [
        {
          text: 'Okay',
          style: 'Cancel',
        },
    ])}else{
    const newWorkout = { date: selectedDate, workout, distance, duration };
    setWorkouts([...workouts, newWorkout]);
    console.log(newWorkout); 
    // Voit myös tyhjentää kentät lisäyksen jälkeen, jos haluat
    setSelectedDate('');
    setWorkout('');
    setDistance('');
    setDuration('');}
  };

  

  return (
    <SafeAreaView style={styles.container}>
      <SegmentedButtons
        value={workout}
        onValueChange={setWorkout}
        buttons={[
          {
            value: 'Run',
            label: 'Run',
            icon: () => <FontAwesome6 name="person-running" size={20} />
          },
          {
            value: 'Ski',
            label: 'Ski',
            icon: () => <FontAwesome6 name="person-skiing" size={20} />
          },
          {
            value: 'Swim',
            label: 'Swim',
            icon: () => <FontAwesome6 name="person-swimming" size={20} />
          },
        ]}
      />

      <TextInput style={styles.input}
        value={distance}
        onChangeText={setDistance}
        mode="outlined"
        label="Distance (km)"
        placeholder="Type distance"



      />
      <TextInput style={styles.input}
        value={duration}
        onChangeText={setDuration}
        mode="outlined"
        label="Duration (min)"
        placeholder="Type duration"


      />
      <TouchableOpacity onPress={toggleModal}>
        <View style={styles.calendarButton}>
          <FontAwesome6 name="calendar" size={24}> Select a date</FontAwesome6> 
        </View>
      </TouchableOpacity>
      {selectedDate ? (
        <Text style={styles.selectedDateText}> {selectedDate}</Text>
      ) : null}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalView}>
          <Calendar
            onDayPress={onDayPress}
          />
          <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Button
        style={styles.button}
        mode="contained"
        onPress={addWorkout}
      >
        Add workout
      </Button>
      <View style={styles.navigatorContainer}>
        <Pressable
          style={styles.navigator}
          onPress={() => navigation.navigate('List', { workouts })}
        >
          <Text style={{ color: "white" }}>List of completed exercises</Text>
        </Pressable>
        <Pressable style={styles.navigator2} onPress={() => navigation.navigate('Settings')}>
          <Text style={{ color: "white" }} >Go to settings </Text>
        </Pressable>
      </View>
    </SafeAreaView>

  );
};



export default Segmented;