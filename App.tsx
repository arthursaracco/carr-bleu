import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.square} />
      <View style={styles.square} />
      <View style={styles.square} />
      <View style={styles.square} />
      <ScrollView horizontal> 
      <View style={styles.square2} />
      <View style={styles.square2} />
      <View style={styles.square2} />
      <View style={styles.square2} />
      </ScrollView>
      </ScrollView>
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
    backgroundColor: 'steelblue',
    height: 300,
    width: 400,
    margin:10,
    marginLeft:0,
    
    borderRadius:20,
    
},
square2: {
  backgroundColor: 'skyblue',
  height: 300,
  width: 300,
  margin:10,
  marginLeft:0,
  borderRadius:20
  
},

  


});
