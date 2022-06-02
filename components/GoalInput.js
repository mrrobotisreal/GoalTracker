import { useState } from 'react';
import { StyleSheet, View, Button, TextInput, Modal } from 'react-native';

function GoalInput(props) {
  const [ enteredGoalText, setEnteredGoalText ] = useState('');

  function goalInputHandler(enteredText) {
    console.log(enteredText);
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler(props) {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" />
          </View>
        </View>
      </View>
    </Modal>
  )
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '100%',
    padding: 8,
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    width: 120,
    marginHorizontal: 8,
  }
});