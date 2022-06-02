import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable android_ripple={{color: 'darkpurple'}}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
          <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: '#5e0acc',
    margin: 8,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 6,
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: 'white',
    padding: 8,
  }
});