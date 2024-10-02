import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
    
  },
  text: {
    fontSize: 24,
    marginBottom: 5,
  },
  input: {
    width: '90%',
    height: 50,
    marginVertical: 10,
  },
  calendarButton: {
    padding: 10,
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 10,
    elevation: 5,
    padding: 20,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#ca5c7d',
    borderRadius: 5,
    padding: 10,
  },
  closeButtonText: {
    color: 'white',
  },
  button: {
    fontSize: 45,
    padding: 10,
    width: '90%',
    backgroundColor:'#ca5c7d',
  },
  navigatorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 280,
    margin:20
  },
  navigator: {
    backgroundColor: '#ca5c7d', 
    padding: 10,
    borderRadius: 5,
    flex: 1, 
    marginRight: 10,
    alignItems:'center',
    justifyContent:'center'
  },

  navigator2: {
    backgroundColor: '#ca5c7d', 
    padding: 10,
    borderRadius: 5,
    flex: 1, 
    alignItems:'center',
    justifyContent:'center'
  },
});

export default styles;