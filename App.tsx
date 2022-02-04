import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView,FlatList, TouchableOpacity } from 'react-native'

export default function App() {
  return(
    <View style={styles.container}>
      <TouchableOpacity
      style ={styles.button}
      onPress={() => alert('Good job !')}
      >
        <Text style={styles.font}>Allez les gigis</Text>
      </TouchableOpacity>
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
containerName:{
  backgroundColor:'skyblue',
  alignItems:'center',
  height:80,
  marginVertical:4,
},
button:{
  backgroundColor: 'steelblue',
    height: 300,
    width: 400,
    margin:10,
    marginLeft:0,
},
});
