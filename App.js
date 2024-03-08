import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const fecthUsers = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?nat=fr');
      const result = await response.json()
      console.log(result)
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fecthUsers();
  }, 
  [])
  
  return (
    <View style={styles.container}>
      <Text>Illustration des requêtes API en React Native</Text>
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
});
