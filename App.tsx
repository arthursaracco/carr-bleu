import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView,FlatList } from 'react-native';
interface person{
  id:number,
  firstName:string
}

const DATA = [
  {id:0,firstName:"Benoît"},
  {id:1,firstName:"Jean-Marc"},
  {id:2,firstName:"Jérôme"},
  {id:0,firstName:"Benoît"},
  {id:1,firstName:"Jean-Marc"},
  {id:2,firstName:"Jérôme"},
  {id:0,firstName:"Benoît"},
  {id:1,firstName:"Jean-Marc"},
  {id:2,firstName:"Jérôme"},
]
export default function App() {
  const renderItem = ({item}) =>(
    <View style={styles.containerName}>
    <Text>{item.firstName}</Text>
    </View>
  )
  return (
    <View style={styles.container}>
    <FlatList
    data={DATA}
    renderItem={renderItem}
    keyExtractor={(item)=>item.id.toString()}
    />

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
}

  


  


});
