import { View, TextInput, StyleSheet, Alert } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import { useState } from 'react';

const StartGameScreen = ({ pickedNumberHandler }) => {
  const [enteredNumber, setentEredNumber] = useState('');

  const numberInputHandler = (e) => {
    setentEredNumber(e.target.value);
  };

  const resetInputHandler = () => {
    setentEredNumber('');
  };

  const confirmInputHandler = () => {
    const chosenNumber = +enteredNumber;

    if (
      isNaN(chosenNumber) ||
      chosenNumber > 99 ||
      chosenNumber < 0 ||
      !enteredNumber
    ) {
      Alert.alert(
        'Invalid number',
        'The number must be from 0 to 99. Also input field is not allowed!',
        [{ text: 'Okay', style: 'default', onPress: resetInputHandler }]
      );
      return;
    }

    pickedNumberHandler(chosenNumber);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        onChange={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#490527',
    borderRadius: 8,
    elevation: 8,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    width: 50,
    height: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
