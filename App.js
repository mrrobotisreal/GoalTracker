import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [ enteredGoalText, setEnteredGoalText ] = useState('');
  const [ courseGoals, setCourseGoals ] = useState([]);

  function goalInputHandler(enteredText) {
    console.log(enteredText);
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    console.log(enteredGoalText);
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, enteredGoalText]);
  };


  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList>
          {courseGoals.map((goal, index) => {
            return (
              <View key={index} style={styles.goalList}>
                <Text style={styles.goalText} key={index}>{goal}</Text>
              </View>
            );
          })}
        </FlatList>
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
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
    color: 'white',
  },
  goalsContainer: {
    flex: 5,
  },
  goalList: {
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
