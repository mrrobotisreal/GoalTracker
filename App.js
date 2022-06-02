import { useState } from 'react';
import { StyleSheet, TextInput, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App(enteredGoalText) {
  const [ courseGoals, setCourseGoals ] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, {text: enteredGoalText, key: Math.random().toString()}]);
  };


  return (
    <View style={styles.appContainer}>
      {/* <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View> */}
      <GoalInput onAddGoal={addGoalHandler}  />
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={itemData => {
          itemData.index
          return (
            <GoalItem text={itemData.item.text} />
          );
        }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: 'black',
  },
  goalsContainer: {
    flex: 5,
  },
});
