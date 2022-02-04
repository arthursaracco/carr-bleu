import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.square} />
      <View style={styles.square2} />
      <View style={styles.square3} />
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginBottom: 0,
    marginTop:20,
    flexDirection : 'row',
  },
  font:{fontSize:40},
  square: {
    backgroundColor: 'red',
    height: 100,
    width: 100,
    
    borderRadius:20
    
},
square2: {
  backgroundColor: 'yellow',
  height: 100,
  width: 100,
  
  borderRadius:20
  
},
square3: {
  backgroundColor: 'green',
  height: 100,
  width: 100,
  
  borderRadius:20
  
},
});
