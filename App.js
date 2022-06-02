import { useState } from 'react';
import { StyleSheet, TextInput, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App(enteredGoalText) {
  const [ courseGoals, setCourseGoals ] = useState([]);
  const [ modalIsVisible, setModalIsVisible ] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  };

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, {text: enteredGoalText, id: Math.random().toString()}]);
  };

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    })
  };


  return (
    <View style={styles.appContainer}>
      <Button title="Add New Goal" color="#5e0acc" onPress={startAddGoalHandler} />
      {modalIsVisible && <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler}  />}
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={itemData => {
          itemData.index
          return (
            <GoalItem text={itemData.item.text} onDeleteItem={deleteGoalHandler}
              id={itemData.item.id} />
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
