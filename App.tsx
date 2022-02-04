import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.square}></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  font:{fontSize:40},
  square: {
    backgroundColor: 'skyblue',
    height: 200,
    width: 200,
    borderColor: 'steelblue',
    borderRadius:20,
    borderWidth:3,
},
});
