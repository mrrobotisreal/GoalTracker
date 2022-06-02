import { StyleSheet, View, Text } from 'react-native';

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: '#5e0acc',
    margin: 8,
    padding: 8,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 6,
  },
  goalText: {
    color: 'white',
  }
});