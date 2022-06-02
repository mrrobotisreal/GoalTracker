import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.dummyText}>Hello World!</Text>
      <Text style={{margin: 16, borderWidth: 2, borderColor: 'red', padding: 16, borderRadius: 12}}>Hello Again World!</Text>
      <Button title="Click Me!" />
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
  dummyText: {
    margin: 16,
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 12,
    padding: 16,
    backgroundColor: 'yellow',
  }
});
