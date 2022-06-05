import { useState, useEffect } from 'react';
import { StyleSheet, TextInput, View, Button, FlatList, Image, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import SQLite from 'react-native-sqlite-storage';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

const db = SQLite.openDatabase(
  {
    name: 'Goal-Tracker',
    location: 'default',
  },
  () => {
    console.log('Successfully opened sqlite database! Good job!');
  },
  error => {console.error(error)}
);

export default function App(enteredGoalText) {
  const [ courseGoals, setCourseGoals ] = useState([]);
  const [ modalIsVisible, setModalIsVisible ] = useState(false);

  useEffect(() => {
    createTable();
  }, []);

  const createTable = () => {
    db.transaction((tx) => {
      tx.executeSql(`
        CREATE TABLE IF NOT EXISTS goals
        (
          ID INTEGER PRIMARY KEY AUTOINCREMENT,
          goal TEXT
        );
      `);
    });
  };

  const setData = (goal) => {
    try {
      await db.transaction(async (tx) => {
        await tx.executeSql(`
          INSERT INTO goals (goal)
          VALUES (?)
        `, [goal]);
      });
    } catch (error) {
      console.error(error)
    };
  };

  function startAddGoalHandler() {
    setModalIsVisible(true);
  };

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    if (enteredGoalText === '' || enteredGoalText === null) {
      Alert.alert(`Can't Add Empty Goal!`, `Please make sure to write something before adding the goal.`);
    }
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, {text: enteredGoalText, id: Math.random().toString()}]);
    endAddGoalHandler();
  };

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    })
  };


  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add New Goal" color="#a065ec" onPress={startAddGoalHandler} />
        <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} />
        <View style={styles.goalsContainer}>
          <FlatList data={courseGoals} renderItem={itemData => {
            return (
              <GoalItem text={itemData.item.text} onDeleteItem={deleteGoalHandler}
                id={itemData.item.id} />
            );
          }} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a',
  },
  goalsContainer: {
    flex: 5,
  },
});
